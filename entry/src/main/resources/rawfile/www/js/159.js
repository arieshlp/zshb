(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./node_modules/geotiff/dist-module/compression/jpeg.js":
/*!**************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/jpeg.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JpegDecoder; });
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");


/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
   Copyright 2011 notmasteryet
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// - The JPEG specification can be found in the ITU CCITT Recommendation T.81
//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
// - The JFIF specification can be found in the JPEG File Interchange Format
//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
//   in PostScript Level 2, Technical Note #5116
//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)

const dctZigZag = new Int32Array([
  0,
  1, 8,
  16, 9, 2,
  3, 10, 17, 24,
  32, 25, 18, 11, 4,
  5, 12, 19, 26, 33, 40,
  48, 41, 34, 27, 20, 13, 6,
  7, 14, 21, 28, 35, 42, 49, 56,
  57, 50, 43, 36, 29, 22, 15,
  23, 30, 37, 44, 51, 58,
  59, 52, 45, 38, 31,
  39, 46, 53, 60,
  61, 54, 47,
  55, 62,
  63,
]);

const dctCos1 = 4017; // cos(pi/16)
const dctSin1 = 799; // sin(pi/16)
const dctCos3 = 3406; // cos(3*pi/16)
const dctSin3 = 2276; // sin(3*pi/16)
const dctCos6 = 1567; // cos(6*pi/16)
const dctSin6 = 3784; // sin(6*pi/16)
const dctSqrt2 = 5793; // sqrt(2)
const dctSqrt1d2 = 2896;// sqrt(2) / 2

function buildHuffmanTable(codeLengths, values) {
  let k = 0;
  const code = [];
  let length = 16;
  while (length > 0 && !codeLengths[length - 1]) {
    --length;
  }
  code.push({ children: [], index: 0 });

  let p = code[0];
  let q;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < codeLengths[i]; j++) {
      p = code.pop();
      p.children[p.index] = values[k];
      while (p.index > 0) {
        p = code.pop();
      }
      p.index++;
      code.push(p);
      while (code.length <= i) {
        code.push(q = { children: [], index: 0 });
        p.children[p.index] = q.children;
        p = q;
      }
      k++;
    }
    if (i + 1 < length) {
      // p here points to last code
      code.push(q = { children: [], index: 0 });
      p.children[p.index] = q.children;
      p = q;
    }
  }
  return code[0].children;
}

function decodeScan(data, initialOffset,
  frame, components, resetInterval,
  spectralStart, spectralEnd,
  successivePrev, successive) {
  const { mcusPerLine, progressive } = frame;

  const startOffset = initialOffset;
  let offset = initialOffset;
  let bitsData = 0;
  let bitsCount = 0;
  function readBit() {
    if (bitsCount > 0) {
      bitsCount--;
      return (bitsData >> bitsCount) & 1;
    }
    bitsData = data[offset++];
    if (bitsData === 0xFF) {
      const nextByte = data[offset++];
      if (nextByte) {
        throw new Error(`unexpected marker: ${((bitsData << 8) | nextByte).toString(16)}`);
      }
      // unstuff 0
    }
    bitsCount = 7;
    return bitsData >>> 7;
  }
  function decodeHuffman(tree) {
    let node = tree;
    let bit;
    while ((bit = readBit()) !== null) { // eslint-disable-line no-cond-assign
      node = node[bit];
      if (typeof node === 'number') {
        return node;
      }
      if (typeof node !== 'object') {
        throw new Error('invalid huffman sequence');
      }
    }
    return null;
  }
  function receive(initialLength) {
    let length = initialLength;
    let n = 0;
    while (length > 0) {
      const bit = readBit();
      if (bit === null) {
        return undefined;
      }
      n = (n << 1) | bit;
      --length;
    }
    return n;
  }
  function receiveAndExtend(length) {
    const n = receive(length);
    if (n >= 1 << (length - 1)) {
      return n;
    }
    return n + (-1 << length) + 1;
  }
  function decodeBaseline(component, zz) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t);
    component.pred += diff;
    zz[0] = component.pred;
    let k = 1;
    while (k < 64) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15;
      const r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          break;
        }
        k += 16;
      } else {
        k += r;
        const z = dctZigZag[k];
        zz[z] = receiveAndExtend(s);
        k++;
      }
    }
  }
  function decodeDCFirst(component, zz) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
    component.pred += diff;
    zz[0] = component.pred;
  }
  function decodeDCSuccessive(component, zz) {
    zz[0] |= readBit() << successive;
  }
  let eobrun = 0;
  function decodeACFirst(component, zz) {
    if (eobrun > 0) {
      eobrun--;
      return;
    }
    let k = spectralStart;
    const e = spectralEnd;
    while (k <= e) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15;
      const r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          eobrun = receive(r) + (1 << r) - 1;
          break;
        }
        k += 16;
      } else {
        k += r;
        const z = dctZigZag[k];
        zz[z] = receiveAndExtend(s) * (1 << successive);
        k++;
      }
    }
  }
  let successiveACState = 0;
  let successiveACNextValue;
  function decodeACSuccessive(component, zz) {
    let k = spectralStart;
    const e = spectralEnd;
    let r = 0;
    while (k <= e) {
      const z = dctZigZag[k];
      const direction = zz[z] < 0 ? -1 : 1;
      switch (successiveACState) {
        case 0: { // initial state
          const rs = decodeHuffman(component.huffmanTableAC);
          const s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1) {
              throw new Error('invalid ACn encoding');
            }
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue; // eslint-disable-line no-continue
        }
        case 1: // skipping r zero items
        case 2:
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          } else {
            r--;
            if (r === 0) {
              successiveACState = successiveACState === 2 ? 3 : 0;
            }
          }
          break;
        case 3: // set value for a zero item
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          } else {
            zz[z] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4: // eob
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          }
          break;
        default:
          break;
      }
      k++;
    }
    if (successiveACState === 4) {
      eobrun--;
      if (eobrun === 0) {
        successiveACState = 0;
      }
    }
  }
  function decodeMcu(component, decodeFunction, mcu, row, col) {
    const mcuRow = (mcu / mcusPerLine) | 0;
    const mcuCol = mcu % mcusPerLine;
    const blockRow = (mcuRow * component.v) + row;
    const blockCol = (mcuCol * component.h) + col;
    decodeFunction(component, component.blocks[blockRow][blockCol]);
  }
  function decodeBlock(component, decodeFunction, mcu) {
    const blockRow = (mcu / component.blocksPerLine) | 0;
    const blockCol = mcu % component.blocksPerLine;
    decodeFunction(component, component.blocks[blockRow][blockCol]);
  }

  const componentsLength = components.length;
  let component;
  let i;
  let j;
  let k;
  let n;
  let decodeFn;
  if (progressive) {
    if (spectralStart === 0) {
      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
    } else {
      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    }
  } else {
    decodeFn = decodeBaseline;
  }

  let mcu = 0;
  let marker;
  let mcuExpected;
  if (componentsLength === 1) {
    mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
  } else {
    mcuExpected = mcusPerLine * frame.mcusPerColumn;
  }

  const usedResetInterval = resetInterval || mcuExpected;

  while (mcu < mcuExpected) {
    // reset interval stuff
    for (i = 0; i < componentsLength; i++) {
      components[i].pred = 0;
    }
    eobrun = 0;

    if (componentsLength === 1) {
      component = components[0];
      for (n = 0; n < usedResetInterval; n++) {
        decodeBlock(component, decodeFn, mcu);
        mcu++;
      }
    } else {
      for (n = 0; n < usedResetInterval; n++) {
        for (i = 0; i < componentsLength; i++) {
          component = components[i];
          const { h, v } = component;
          for (j = 0; j < v; j++) {
            for (k = 0; k < h; k++) {
              decodeMcu(component, decodeFn, mcu, j, k);
            }
          }
        }
        mcu++;

        // If we've reached our expected MCU's, stop decoding
        if (mcu === mcuExpected) {
          break;
        }
      }
    }

    // find marker
    bitsCount = 0;
    marker = (data[offset] << 8) | data[offset + 1];
    if (marker < 0xFF00) {
      throw new Error('marker was not found');
    }

    if (marker >= 0xFFD0 && marker <= 0xFFD7) { // RSTx
      offset += 2;
    } else {
      break;
    }
  }

  return offset - startOffset;
}

function buildComponentData(frame, component) {
  const lines = [];
  const { blocksPerLine, blocksPerColumn } = component;
  const samplesPerLine = blocksPerLine << 3;
  const R = new Int32Array(64);
  const r = new Uint8Array(64);

  // A port of poppler's IDCT method which in turn is taken from:
  //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
  //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
  //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
  //   988-991.
  function quantizeAndInverse(zz, dataOut, dataIn) {
    const qt = component.quantizationTable;
    let v0;
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let t;
    const p = dataIn;
    let i;

    // dequant
    for (i = 0; i < 64; i++) {
      p[i] = zz[i] * qt[i];
    }

    // inverse DCT on rows
    for (i = 0; i < 8; ++i) {
      const row = 8 * i;

      // check for all-zero AC coefficients
      if (p[1 + row] === 0 && p[2 + row] === 0 && p[3 + row] === 0
        && p[4 + row] === 0 && p[5 + row] === 0 && p[6 + row] === 0
        && p[7 + row] === 0) {
        t = ((dctSqrt2 * p[0 + row]) + 512) >> 10;
        p[0 + row] = t;
        p[1 + row] = t;
        p[2 + row] = t;
        p[3 + row] = t;
        p[4 + row] = t;
        p[5 + row] = t;
        p[6 + row] = t;
        p[7 + row] = t;
        continue; // eslint-disable-line no-continue
      }

      // stage 4
      v0 = ((dctSqrt2 * p[0 + row]) + 128) >> 8;
      v1 = ((dctSqrt2 * p[4 + row]) + 128) >> 8;
      v2 = p[2 + row];
      v3 = p[6 + row];
      v4 = ((dctSqrt1d2 * (p[1 + row] - p[7 + row])) + 128) >> 8;
      v7 = ((dctSqrt1d2 * (p[1 + row] + p[7 + row])) + 128) >> 8;
      v5 = p[3 + row] << 4;
      v6 = p[5 + row] << 4;

      // stage 3
      t = (v0 - v1 + 1) >> 1;
      v0 = (v0 + v1 + 1) >> 1;
      v1 = t;
      t = ((v2 * dctSin6) + (v3 * dctCos6) + 128) >> 8;
      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 128) >> 8;
      v3 = t;
      t = (v4 - v6 + 1) >> 1;
      v4 = (v4 + v6 + 1) >> 1;
      v6 = t;
      t = (v7 + v5 + 1) >> 1;
      v5 = (v7 - v5 + 1) >> 1;
      v7 = t;

      // stage 2
      t = (v0 - v3 + 1) >> 1;
      v0 = (v0 + v3 + 1) >> 1;
      v3 = t;
      t = (v1 - v2 + 1) >> 1;
      v1 = (v1 + v2 + 1) >> 1;
      v2 = t;
      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;
      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;
      v7 = t;
      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;
      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;
      v6 = t;

      // stage 1
      p[0 + row] = v0 + v7;
      p[7 + row] = v0 - v7;
      p[1 + row] = v1 + v6;
      p[6 + row] = v1 - v6;
      p[2 + row] = v2 + v5;
      p[5 + row] = v2 - v5;
      p[3 + row] = v3 + v4;
      p[4 + row] = v3 - v4;
    }

    // inverse DCT on columns
    for (i = 0; i < 8; ++i) {
      const col = i;

      // check for all-zero AC coefficients
      if (p[(1 * 8) + col] === 0 && p[(2 * 8) + col] === 0 && p[(3 * 8) + col] === 0
        && p[(4 * 8) + col] === 0 && p[(5 * 8) + col] === 0 && p[(6 * 8) + col] === 0
        && p[(7 * 8) + col] === 0) {
        t = ((dctSqrt2 * dataIn[i + 0]) + 8192) >> 14;
        p[(0 * 8) + col] = t;
        p[(1 * 8) + col] = t;
        p[(2 * 8) + col] = t;
        p[(3 * 8) + col] = t;
        p[(4 * 8) + col] = t;
        p[(5 * 8) + col] = t;
        p[(6 * 8) + col] = t;
        p[(7 * 8) + col] = t;
        continue; // eslint-disable-line no-continue
      }

      // stage 4
      v0 = ((dctSqrt2 * p[(0 * 8) + col]) + 2048) >> 12;
      v1 = ((dctSqrt2 * p[(4 * 8) + col]) + 2048) >> 12;
      v2 = p[(2 * 8) + col];
      v3 = p[(6 * 8) + col];
      v4 = ((dctSqrt1d2 * (p[(1 * 8) + col] - p[(7 * 8) + col])) + 2048) >> 12;
      v7 = ((dctSqrt1d2 * (p[(1 * 8) + col] + p[(7 * 8) + col])) + 2048) >> 12;
      v5 = p[(3 * 8) + col];
      v6 = p[(5 * 8) + col];

      // stage 3
      t = (v0 - v1 + 1) >> 1;
      v0 = (v0 + v1 + 1) >> 1;
      v1 = t;
      t = ((v2 * dctSin6) + (v3 * dctCos6) + 2048) >> 12;
      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 2048) >> 12;
      v3 = t;
      t = (v4 - v6 + 1) >> 1;
      v4 = (v4 + v6 + 1) >> 1;
      v6 = t;
      t = (v7 + v5 + 1) >> 1;
      v5 = (v7 - v5 + 1) >> 1;
      v7 = t;

      // stage 2
      t = (v0 - v3 + 1) >> 1;
      v0 = (v0 + v3 + 1) >> 1;
      v3 = t;
      t = (v1 - v2 + 1) >> 1;
      v1 = (v1 + v2 + 1) >> 1;
      v2 = t;
      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;
      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;
      v7 = t;
      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;
      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;
      v6 = t;

      // stage 1
      p[(0 * 8) + col] = v0 + v7;
      p[(7 * 8) + col] = v0 - v7;
      p[(1 * 8) + col] = v1 + v6;
      p[(6 * 8) + col] = v1 - v6;
      p[(2 * 8) + col] = v2 + v5;
      p[(5 * 8) + col] = v2 - v5;
      p[(3 * 8) + col] = v3 + v4;
      p[(4 * 8) + col] = v3 - v4;
    }

    // convert to 8-bit integers
    for (i = 0; i < 64; ++i) {
      const sample = 128 + ((p[i] + 8) >> 4);
      if (sample < 0) {
        dataOut[i] = 0;
      } else if (sample > 0XFF) {
        dataOut[i] = 0xFF;
      } else {
        dataOut[i] = sample;
      }
    }
  }

  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
    const scanLine = blockRow << 3;
    for (let i = 0; i < 8; i++) {
      lines.push(new Uint8Array(samplesPerLine));
    }
    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {
      quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);

      let offset = 0;
      const sample = blockCol << 3;
      for (let j = 0; j < 8; j++) {
        const line = lines[scanLine + j];
        for (let i = 0; i < 8; i++) {
          line[sample + i] = r[offset++];
        }
      }
    }
  }
  return lines;
}

class JpegStreamReader {
  constructor() {
    this.jfif = null;
    this.adobe = null;

    this.quantizationTables = [];
    this.huffmanTablesAC = [];
    this.huffmanTablesDC = [];
    this.resetFrames();
  }

  resetFrames() {
    this.frames = [];
  }

  parse(data) {
    let offset = 0;
    // const { length } = data;
    function readUint16() {
      const value = (data[offset] << 8) | data[offset + 1];
      offset += 2;
      return value;
    }
    function readDataBlock() {
      const length = readUint16();
      const array = data.subarray(offset, offset + length - 2);
      offset += array.length;
      return array;
    }
    function prepareComponents(frame) {
      let maxH = 0;
      let maxV = 0;
      let component;
      let componentId;
      for (componentId in frame.components) {
        if (frame.components.hasOwnProperty(componentId)) {
          component = frame.components[componentId];
          if (maxH < component.h) {
            maxH = component.h;
          }
          if (maxV < component.v) {
            maxV = component.v;
          }
        }
      }
      const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
      const mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
      for (componentId in frame.components) {
        if (frame.components.hasOwnProperty(componentId)) {
          component = frame.components[componentId];
          const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
          const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / maxV);
          const blocksPerLineForMcu = mcusPerLine * component.h;
          const blocksPerColumnForMcu = mcusPerColumn * component.v;
          const blocks = [];
          for (let i = 0; i < blocksPerColumnForMcu; i++) {
            const row = [];
            for (let j = 0; j < blocksPerLineForMcu; j++) {
              row.push(new Int32Array(64));
            }
            blocks.push(row);
          }
          component.blocksPerLine = blocksPerLine;
          component.blocksPerColumn = blocksPerColumn;
          component.blocks = blocks;
        }
      }
      frame.maxH = maxH;
      frame.maxV = maxV;
      frame.mcusPerLine = mcusPerLine;
      frame.mcusPerColumn = mcusPerColumn;
    }

    let fileMarker = readUint16();
    if (fileMarker !== 0xFFD8) { // SOI (Start of Image)
      throw new Error('SOI not found');
    }

    fileMarker = readUint16();
    while (fileMarker !== 0xFFD9) { // EOI (End of image)
      switch (fileMarker) {
        case 0xFF00: break;
        case 0xFFE0: // APP0 (Application Specific)
        case 0xFFE1: // APP1
        case 0xFFE2: // APP2
        case 0xFFE3: // APP3
        case 0xFFE4: // APP4
        case 0xFFE5: // APP5
        case 0xFFE6: // APP6
        case 0xFFE7: // APP7
        case 0xFFE8: // APP8
        case 0xFFE9: // APP9
        case 0xFFEA: // APP10
        case 0xFFEB: // APP11
        case 0xFFEC: // APP12
        case 0xFFED: // APP13
        case 0xFFEE: // APP14
        case 0xFFEF: // APP15
        case 0xFFFE: { // COM (Comment)
          const appData = readDataBlock();

          if (fileMarker === 0xFFE0) {
            if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49
              && appData[3] === 0x46 && appData[4] === 0) { // 'JFIF\x00'
              this.jfif = {
                version: { major: appData[5], minor: appData[6] },
                densityUnits: appData[7],
                xDensity: (appData[8] << 8) | appData[9],
                yDensity: (appData[10] << 8) | appData[11],
                thumbWidth: appData[12],
                thumbHeight: appData[13],
                thumbData: appData.subarray(14, 14 + (3 * appData[12] * appData[13])),
              };
            }
          }
          // TODO APP1 - Exif
          if (fileMarker === 0xFFEE) {
            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F
              && appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) { // 'Adobe\x00'
              this.adobe = {
                version: appData[6],
                flags0: (appData[7] << 8) | appData[8],
                flags1: (appData[9] << 8) | appData[10],
                transformCode: appData[11],
              };
            }
          }
          break;
        }

        case 0xFFDB: { // DQT (Define Quantization Tables)
          const quantizationTablesLength = readUint16();
          const quantizationTablesEnd = quantizationTablesLength + offset - 2;
          while (offset < quantizationTablesEnd) {
            const quantizationTableSpec = data[offset++];
            const tableData = new Int32Array(64);
            if ((quantizationTableSpec >> 4) === 0) { // 8 bit values
              for (let j = 0; j < 64; j++) {
                const z = dctZigZag[j];
                tableData[z] = data[offset++];
              }
            } else if ((quantizationTableSpec >> 4) === 1) { // 16 bit
              for (let j = 0; j < 64; j++) {
                const z = dctZigZag[j];
                tableData[z] = readUint16();
              }
            } else {
              throw new Error('DQT: invalid table spec');
            }
            this.quantizationTables[quantizationTableSpec & 15] = tableData;
          }
          break;
        }

        case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)
        case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)
        case 0xFFC2: { // SOF2 (Start of Frame, Progressive DCT)
          readUint16(); // skip data length
          const frame = {
            extended: (fileMarker === 0xFFC1),
            progressive: (fileMarker === 0xFFC2),
            precision: data[offset++],
            scanLines: readUint16(),
            samplesPerLine: readUint16(),
            components: {},
            componentsOrder: [],
          };

          const componentsCount = data[offset++];
          let componentId;
          // let maxH = 0;
          // let maxV = 0;
          for (let i = 0; i < componentsCount; i++) {
            componentId = data[offset];
            const h = data[offset + 1] >> 4;
            const v = data[offset + 1] & 15;
            const qId = data[offset + 2];
            frame.componentsOrder.push(componentId);
            frame.components[componentId] = {
              h,
              v,
              quantizationIdx: qId,
            };
            offset += 3;
          }
          prepareComponents(frame);
          this.frames.push(frame);
          break;
        }

        case 0xFFC4: { // DHT (Define Huffman Tables)
          const huffmanLength = readUint16();
          for (let i = 2; i < huffmanLength;) {
            const huffmanTableSpec = data[offset++];
            const codeLengths = new Uint8Array(16);
            let codeLengthSum = 0;
            for (let j = 0; j < 16; j++, offset++) {
              codeLengths[j] = data[offset];
              codeLengthSum += codeLengths[j];
            }
            const huffmanValues = new Uint8Array(codeLengthSum);
            for (let j = 0; j < codeLengthSum; j++, offset++) {
              huffmanValues[j] = data[offset];
            }
            i += 17 + codeLengthSum;

            if ((huffmanTableSpec >> 4) === 0) {
              this.huffmanTablesDC[huffmanTableSpec & 15] = buildHuffmanTable(
                codeLengths, huffmanValues,
              );
            } else {
              this.huffmanTablesAC[huffmanTableSpec & 15] = buildHuffmanTable(
                codeLengths, huffmanValues,
              );
            }
          }
          break;
        }

        case 0xFFDD: // DRI (Define Restart Interval)
          readUint16(); // skip data length
          this.resetInterval = readUint16();
          break;

        case 0xFFDA: { // SOS (Start of Scan)
          readUint16(); // skip length
          const selectorsCount = data[offset++];
          const components = [];
          const frame = this.frames[0];
          for (let i = 0; i < selectorsCount; i++) {
            const component = frame.components[data[offset++]];
            const tableSpec = data[offset++];
            component.huffmanTableDC = this.huffmanTablesDC[tableSpec >> 4];
            component.huffmanTableAC = this.huffmanTablesAC[tableSpec & 15];
            components.push(component);
          }
          const spectralStart = data[offset++];
          const spectralEnd = data[offset++];
          const successiveApproximation = data[offset++];
          const processed = decodeScan(data, offset,
            frame, components, this.resetInterval,
            spectralStart, spectralEnd,
            successiveApproximation >> 4, successiveApproximation & 15);
          offset += processed;
          break;
        }

        case 0xFFFF: // Fill bytes
          if (data[offset] !== 0xFF) { // Avoid skipping a valid marker.
            offset--;
          }
          break;

        default:
          if (data[offset - 3] === 0xFF
            && data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
            // could be incorrect encoding -- last 0xFF byte of the previous
            // block was eaten by the encoder
            offset -= 3;
            break;
          }
          throw new Error(`unknown JPEG marker ${fileMarker.toString(16)}`);
      }
      fileMarker = readUint16();
    }
  }

  getResult() {
    const { frames } = this;
    if (this.frames.length === 0) {
      throw new Error('no frames were decoded');
    } else if (this.frames.length > 1) {
      console.warn('more than one frame is not supported');
    }

    // set each frame's components quantization table
    for (let i = 0; i < this.frames.length; i++) {
      const cp = this.frames[i].components;
      for (const j of Object.keys(cp)) {
        cp[j].quantizationTable = this.quantizationTables[cp[j].quantizationIdx];
        delete cp[j].quantizationIdx;
      }
    }

    const frame = frames[0];
    const { components, componentsOrder } = frame;
    const outComponents = [];
    const width = frame.samplesPerLine;
    const height = frame.scanLines;

    for (let i = 0; i < componentsOrder.length; i++) {
      const component = components[componentsOrder[i]];
      outComponents.push({
        lines: buildComponentData(frame, component),
        scaleX: component.h / frame.maxH,
        scaleY: component.v / frame.maxV,
      });
    }

    const out = new Uint8Array(width * height * outComponents.length);
    let oi = 0;
    for (let y = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        for (let i = 0; i < outComponents.length; ++i) {
          const component = outComponents[i];
          out[oi] = component.lines[0 | y * component.scaleY][0 | x * component.scaleX];
          ++oi;
        }
      }
    }
    return out;
  }
}

class JpegDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fileDirectory) {
    super();
    this.reader = new JpegStreamReader();
    if (fileDirectory.JPEGTables) {
      this.reader.parse(fileDirectory.JPEGTables);
    }
  }

  decodeBlock(buffer) {
    this.reader.resetFrames();
    this.reader.parse(new Uint8Array(buffer));
    return this.reader.getResult().buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9qcGVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBMkM7O0FBRTNDLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCOztBQUV0QztBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0IsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDBDQUEwQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZnJvbSAnLi9iYXNlZGVjb2Rlci5qcyc7XG5cbi8qIC0qLSB0YWItd2lkdGg6IDI7IGluZGVudC10YWJzLW1vZGU6IG5pbDsgYy1iYXNpYy1vZmZzZXQ6IDIgLSotIC9cbi8qIHZpbTogc2V0IHNoaWZ0d2lkdGg9MiB0YWJzdG9wPTIgYXV0b2luZGVudCBjaW5kZW50IGV4cGFuZHRhYjogKi9cbi8qXG4gICBDb3B5cmlnaHQgMjAxMSBub3RtYXN0ZXJ5ZXRcbiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vLyAtIFRoZSBKUEVHIHNwZWNpZmljYXRpb24gY2FuIGJlIGZvdW5kIGluIHRoZSBJVFUgQ0NJVFQgUmVjb21tZW5kYXRpb24gVC44MVxuLy8gICAod3d3LnczLm9yZy9HcmFwaGljcy9KUEVHL2l0dS10ODEucGRmKVxuLy8gLSBUaGUgSkZJRiBzcGVjaWZpY2F0aW9uIGNhbiBiZSBmb3VuZCBpbiB0aGUgSlBFRyBGaWxlIEludGVyY2hhbmdlIEZvcm1hdFxuLy8gICAod3d3LnczLm9yZy9HcmFwaGljcy9KUEVHL2pmaWYzLnBkZilcbi8vIC0gVGhlIEFkb2JlIEFwcGxpY2F0aW9uLVNwZWNpZmljIEpQRUcgbWFya2VycyBpbiB0aGUgU3VwcG9ydGluZyB0aGUgRENUIEZpbHRlcnNcbi8vICAgaW4gUG9zdFNjcmlwdCBMZXZlbCAyLCBUZWNobmljYWwgTm90ZSAjNTExNlxuLy8gICAocGFydG5lcnMuYWRvYmUuY29tL3B1YmxpYy9kZXZlbG9wZXIvZW4vcHMvc2RrLzUxMTYuRENUX0ZpbHRlci5wZGYpXG5cbmNvbnN0IGRjdFppZ1phZyA9IG5ldyBJbnQzMkFycmF5KFtcbiAgMCxcbiAgMSwgOCxcbiAgMTYsIDksIDIsXG4gIDMsIDEwLCAxNywgMjQsXG4gIDMyLCAyNSwgMTgsIDExLCA0LFxuICA1LCAxMiwgMTksIDI2LCAzMywgNDAsXG4gIDQ4LCA0MSwgMzQsIDI3LCAyMCwgMTMsIDYsXG4gIDcsIDE0LCAyMSwgMjgsIDM1LCA0MiwgNDksIDU2LFxuICA1NywgNTAsIDQzLCAzNiwgMjksIDIyLCAxNSxcbiAgMjMsIDMwLCAzNywgNDQsIDUxLCA1OCxcbiAgNTksIDUyLCA0NSwgMzgsIDMxLFxuICAzOSwgNDYsIDUzLCA2MCxcbiAgNjEsIDU0LCA0NyxcbiAgNTUsIDYyLFxuICA2Myxcbl0pO1xuXG5jb25zdCBkY3RDb3MxID0gNDAxNzsgLy8gY29zKHBpLzE2KVxuY29uc3QgZGN0U2luMSA9IDc5OTsgLy8gc2luKHBpLzE2KVxuY29uc3QgZGN0Q29zMyA9IDM0MDY7IC8vIGNvcygzKnBpLzE2KVxuY29uc3QgZGN0U2luMyA9IDIyNzY7IC8vIHNpbigzKnBpLzE2KVxuY29uc3QgZGN0Q29zNiA9IDE1Njc7IC8vIGNvcyg2KnBpLzE2KVxuY29uc3QgZGN0U2luNiA9IDM3ODQ7IC8vIHNpbig2KnBpLzE2KVxuY29uc3QgZGN0U3FydDIgPSA1NzkzOyAvLyBzcXJ0KDIpXG5jb25zdCBkY3RTcXJ0MWQyID0gMjg5NjsvLyBzcXJ0KDIpIC8gMlxuXG5mdW5jdGlvbiBidWlsZEh1ZmZtYW5UYWJsZShjb2RlTGVuZ3RocywgdmFsdWVzKSB7XG4gIGxldCBrID0gMDtcbiAgY29uc3QgY29kZSA9IFtdO1xuICBsZXQgbGVuZ3RoID0gMTY7XG4gIHdoaWxlIChsZW5ndGggPiAwICYmICFjb2RlTGVuZ3Roc1tsZW5ndGggLSAxXSkge1xuICAgIC0tbGVuZ3RoO1xuICB9XG4gIGNvZGUucHVzaCh7IGNoaWxkcmVuOiBbXSwgaW5kZXg6IDAgfSk7XG5cbiAgbGV0IHAgPSBjb2RlWzBdO1xuICBsZXQgcTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29kZUxlbmd0aHNbaV07IGorKykge1xuICAgICAgcCA9IGNvZGUucG9wKCk7XG4gICAgICBwLmNoaWxkcmVuW3AuaW5kZXhdID0gdmFsdWVzW2tdO1xuICAgICAgd2hpbGUgKHAuaW5kZXggPiAwKSB7XG4gICAgICAgIHAgPSBjb2RlLnBvcCgpO1xuICAgICAgfVxuICAgICAgcC5pbmRleCsrO1xuICAgICAgY29kZS5wdXNoKHApO1xuICAgICAgd2hpbGUgKGNvZGUubGVuZ3RoIDw9IGkpIHtcbiAgICAgICAgY29kZS5wdXNoKHEgPSB7IGNoaWxkcmVuOiBbXSwgaW5kZXg6IDAgfSk7XG4gICAgICAgIHAuY2hpbGRyZW5bcC5pbmRleF0gPSBxLmNoaWxkcmVuO1xuICAgICAgICBwID0gcTtcbiAgICAgIH1cbiAgICAgIGsrKztcbiAgICB9XG4gICAgaWYgKGkgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAvLyBwIGhlcmUgcG9pbnRzIHRvIGxhc3QgY29kZVxuICAgICAgY29kZS5wdXNoKHEgPSB7IGNoaWxkcmVuOiBbXSwgaW5kZXg6IDAgfSk7XG4gICAgICBwLmNoaWxkcmVuW3AuaW5kZXhdID0gcS5jaGlsZHJlbjtcbiAgICAgIHAgPSBxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29kZVswXS5jaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZGVjb2RlU2NhbihkYXRhLCBpbml0aWFsT2Zmc2V0LFxuICBmcmFtZSwgY29tcG9uZW50cywgcmVzZXRJbnRlcnZhbCxcbiAgc3BlY3RyYWxTdGFydCwgc3BlY3RyYWxFbmQsXG4gIHN1Y2Nlc3NpdmVQcmV2LCBzdWNjZXNzaXZlKSB7XG4gIGNvbnN0IHsgbWN1c1BlckxpbmUsIHByb2dyZXNzaXZlIH0gPSBmcmFtZTtcblxuICBjb25zdCBzdGFydE9mZnNldCA9IGluaXRpYWxPZmZzZXQ7XG4gIGxldCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0O1xuICBsZXQgYml0c0RhdGEgPSAwO1xuICBsZXQgYml0c0NvdW50ID0gMDtcbiAgZnVuY3Rpb24gcmVhZEJpdCgpIHtcbiAgICBpZiAoYml0c0NvdW50ID4gMCkge1xuICAgICAgYml0c0NvdW50LS07XG4gICAgICByZXR1cm4gKGJpdHNEYXRhID4+IGJpdHNDb3VudCkgJiAxO1xuICAgIH1cbiAgICBiaXRzRGF0YSA9IGRhdGFbb2Zmc2V0KytdO1xuICAgIGlmIChiaXRzRGF0YSA9PT0gMHhGRikge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSBkYXRhW29mZnNldCsrXTtcbiAgICAgIGlmIChuZXh0Qnl0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgbWFya2VyOiAkeygoYml0c0RhdGEgPDwgOCkgfCBuZXh0Qnl0ZSkudG9TdHJpbmcoMTYpfWApO1xuICAgICAgfVxuICAgICAgLy8gdW5zdHVmZiAwXG4gICAgfVxuICAgIGJpdHNDb3VudCA9IDc7XG4gICAgcmV0dXJuIGJpdHNEYXRhID4+PiA3O1xuICB9XG4gIGZ1bmN0aW9uIGRlY29kZUh1ZmZtYW4odHJlZSkge1xuICAgIGxldCBub2RlID0gdHJlZTtcbiAgICBsZXQgYml0O1xuICAgIHdoaWxlICgoYml0ID0gcmVhZEJpdCgpKSAhPT0gbnVsbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICBub2RlID0gbm9kZVtiaXRdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGh1ZmZtYW4gc2VxdWVuY2UnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcmVjZWl2ZShpbml0aWFsTGVuZ3RoKSB7XG4gICAgbGV0IGxlbmd0aCA9IGluaXRpYWxMZW5ndGg7XG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiaXQgPSByZWFkQml0KCk7XG4gICAgICBpZiAoYml0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBuID0gKG4gPDwgMSkgfCBiaXQ7XG4gICAgICAtLWxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZnVuY3Rpb24gcmVjZWl2ZUFuZEV4dGVuZChsZW5ndGgpIHtcbiAgICBjb25zdCBuID0gcmVjZWl2ZShsZW5ndGgpO1xuICAgIGlmIChuID49IDEgPDwgKGxlbmd0aCAtIDEpKSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgcmV0dXJuIG4gKyAoLTEgPDwgbGVuZ3RoKSArIDE7XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlQmFzZWxpbmUoY29tcG9uZW50LCB6eikge1xuICAgIGNvbnN0IHQgPSBkZWNvZGVIdWZmbWFuKGNvbXBvbmVudC5odWZmbWFuVGFibGVEQyk7XG4gICAgY29uc3QgZGlmZiA9IHQgPT09IDAgPyAwIDogcmVjZWl2ZUFuZEV4dGVuZCh0KTtcbiAgICBjb21wb25lbnQucHJlZCArPSBkaWZmO1xuICAgIHp6WzBdID0gY29tcG9uZW50LnByZWQ7XG4gICAgbGV0IGsgPSAxO1xuICAgIHdoaWxlIChrIDwgNjQpIHtcbiAgICAgIGNvbnN0IHJzID0gZGVjb2RlSHVmZm1hbihjb21wb25lbnQuaHVmZm1hblRhYmxlQUMpO1xuICAgICAgY29uc3QgcyA9IHJzICYgMTU7XG4gICAgICBjb25zdCByID0gcnMgPj4gNDtcbiAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgIGlmIChyIDwgMTUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgayArPSByO1xuICAgICAgICBjb25zdCB6ID0gZGN0WmlnWmFnW2tdO1xuICAgICAgICB6elt6XSA9IHJlY2VpdmVBbmRFeHRlbmQocyk7XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlRENGaXJzdChjb21wb25lbnQsIHp6KSB7XG4gICAgY29uc3QgdCA9IGRlY29kZUh1ZmZtYW4oY29tcG9uZW50Lmh1ZmZtYW5UYWJsZURDKTtcbiAgICBjb25zdCBkaWZmID0gdCA9PT0gMCA/IDAgOiAocmVjZWl2ZUFuZEV4dGVuZCh0KSA8PCBzdWNjZXNzaXZlKTtcbiAgICBjb21wb25lbnQucHJlZCArPSBkaWZmO1xuICAgIHp6WzBdID0gY29tcG9uZW50LnByZWQ7XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlRENTdWNjZXNzaXZlKGNvbXBvbmVudCwgenopIHtcbiAgICB6elswXSB8PSByZWFkQml0KCkgPDwgc3VjY2Vzc2l2ZTtcbiAgfVxuICBsZXQgZW9icnVuID0gMDtcbiAgZnVuY3Rpb24gZGVjb2RlQUNGaXJzdChjb21wb25lbnQsIHp6KSB7XG4gICAgaWYgKGVvYnJ1biA+IDApIHtcbiAgICAgIGVvYnJ1bi0tO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgayA9IHNwZWN0cmFsU3RhcnQ7XG4gICAgY29uc3QgZSA9IHNwZWN0cmFsRW5kO1xuICAgIHdoaWxlIChrIDw9IGUpIHtcbiAgICAgIGNvbnN0IHJzID0gZGVjb2RlSHVmZm1hbihjb21wb25lbnQuaHVmZm1hblRhYmxlQUMpO1xuICAgICAgY29uc3QgcyA9IHJzICYgMTU7XG4gICAgICBjb25zdCByID0gcnMgPj4gNDtcbiAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgIGlmIChyIDwgMTUpIHtcbiAgICAgICAgICBlb2JydW4gPSByZWNlaXZlKHIpICsgKDEgPDwgcikgLSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrICs9IHI7XG4gICAgICAgIGNvbnN0IHogPSBkY3RaaWdaYWdba107XG4gICAgICAgIHp6W3pdID0gcmVjZWl2ZUFuZEV4dGVuZChzKSAqICgxIDw8IHN1Y2Nlc3NpdmUpO1xuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBzdWNjZXNzaXZlQUNTdGF0ZSA9IDA7XG4gIGxldCBzdWNjZXNzaXZlQUNOZXh0VmFsdWU7XG4gIGZ1bmN0aW9uIGRlY29kZUFDU3VjY2Vzc2l2ZShjb21wb25lbnQsIHp6KSB7XG4gICAgbGV0IGsgPSBzcGVjdHJhbFN0YXJ0O1xuICAgIGNvbnN0IGUgPSBzcGVjdHJhbEVuZDtcbiAgICBsZXQgciA9IDA7XG4gICAgd2hpbGUgKGsgPD0gZSkge1xuICAgICAgY29uc3QgeiA9IGRjdFppZ1phZ1trXTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHp6W3pdIDwgMCA/IC0xIDogMTtcbiAgICAgIHN3aXRjaCAoc3VjY2Vzc2l2ZUFDU3RhdGUpIHtcbiAgICAgICAgY2FzZSAwOiB7IC8vIGluaXRpYWwgc3RhdGVcbiAgICAgICAgICBjb25zdCBycyA9IGRlY29kZUh1ZmZtYW4oY29tcG9uZW50Lmh1ZmZtYW5UYWJsZUFDKTtcbiAgICAgICAgICBjb25zdCBzID0gcnMgJiAxNTtcbiAgICAgICAgICByID0gcnMgPj4gNDtcbiAgICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHIgPCAxNSkge1xuICAgICAgICAgICAgICBlb2JydW4gPSByZWNlaXZlKHIpICsgKDEgPDwgcik7XG4gICAgICAgICAgICAgIHN1Y2Nlc3NpdmVBQ1N0YXRlID0gNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHIgPSAxNjtcbiAgICAgICAgICAgICAgc3VjY2Vzc2l2ZUFDU3RhdGUgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocyAhPT0gMSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgQUNuIGVuY29kaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWNjZXNzaXZlQUNOZXh0VmFsdWUgPSByZWNlaXZlQW5kRXh0ZW5kKHMpO1xuICAgICAgICAgICAgc3VjY2Vzc2l2ZUFDU3RhdGUgPSByID8gMiA6IDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAxOiAvLyBza2lwcGluZyByIHplcm8gaXRlbXNcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGlmICh6elt6XSkge1xuICAgICAgICAgICAgenpbel0gKz0gKHJlYWRCaXQoKSA8PCBzdWNjZXNzaXZlKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgci0tO1xuICAgICAgICAgICAgaWYgKHIgPT09IDApIHtcbiAgICAgICAgICAgICAgc3VjY2Vzc2l2ZUFDU3RhdGUgPSBzdWNjZXNzaXZlQUNTdGF0ZSA9PT0gMiA/IDMgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLyBzZXQgdmFsdWUgZm9yIGEgemVybyBpdGVtXG4gICAgICAgICAgaWYgKHp6W3pdKSB7XG4gICAgICAgICAgICB6elt6XSArPSAocmVhZEJpdCgpIDw8IHN1Y2Nlc3NpdmUpICogZGlyZWN0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB6elt6XSA9IHN1Y2Nlc3NpdmVBQ05leHRWYWx1ZSA8PCBzdWNjZXNzaXZlO1xuICAgICAgICAgICAgc3VjY2Vzc2l2ZUFDU3RhdGUgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiAvLyBlb2JcbiAgICAgICAgICBpZiAoenpbel0pIHtcbiAgICAgICAgICAgIHp6W3pdICs9IChyZWFkQml0KCkgPDwgc3VjY2Vzc2l2ZSkgKiBkaXJlY3Rpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaysrO1xuICAgIH1cbiAgICBpZiAoc3VjY2Vzc2l2ZUFDU3RhdGUgPT09IDQpIHtcbiAgICAgIGVvYnJ1bi0tO1xuICAgICAgaWYgKGVvYnJ1biA9PT0gMCkge1xuICAgICAgICBzdWNjZXNzaXZlQUNTdGF0ZSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlY29kZU1jdShjb21wb25lbnQsIGRlY29kZUZ1bmN0aW9uLCBtY3UsIHJvdywgY29sKSB7XG4gICAgY29uc3QgbWN1Um93ID0gKG1jdSAvIG1jdXNQZXJMaW5lKSB8IDA7XG4gICAgY29uc3QgbWN1Q29sID0gbWN1ICUgbWN1c1BlckxpbmU7XG4gICAgY29uc3QgYmxvY2tSb3cgPSAobWN1Um93ICogY29tcG9uZW50LnYpICsgcm93O1xuICAgIGNvbnN0IGJsb2NrQ29sID0gKG1jdUNvbCAqIGNvbXBvbmVudC5oKSArIGNvbDtcbiAgICBkZWNvZGVGdW5jdGlvbihjb21wb25lbnQsIGNvbXBvbmVudC5ibG9ja3NbYmxvY2tSb3ddW2Jsb2NrQ29sXSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlQmxvY2soY29tcG9uZW50LCBkZWNvZGVGdW5jdGlvbiwgbWN1KSB7XG4gICAgY29uc3QgYmxvY2tSb3cgPSAobWN1IC8gY29tcG9uZW50LmJsb2Nrc1BlckxpbmUpIHwgMDtcbiAgICBjb25zdCBibG9ja0NvbCA9IG1jdSAlIGNvbXBvbmVudC5ibG9ja3NQZXJMaW5lO1xuICAgIGRlY29kZUZ1bmN0aW9uKGNvbXBvbmVudCwgY29tcG9uZW50LmJsb2Nrc1tibG9ja1Jvd11bYmxvY2tDb2xdKTtcbiAgfVxuXG4gIGNvbnN0IGNvbXBvbmVudHNMZW5ndGggPSBjb21wb25lbnRzLmxlbmd0aDtcbiAgbGV0IGNvbXBvbmVudDtcbiAgbGV0IGk7XG4gIGxldCBqO1xuICBsZXQgaztcbiAgbGV0IG47XG4gIGxldCBkZWNvZGVGbjtcbiAgaWYgKHByb2dyZXNzaXZlKSB7XG4gICAgaWYgKHNwZWN0cmFsU3RhcnQgPT09IDApIHtcbiAgICAgIGRlY29kZUZuID0gc3VjY2Vzc2l2ZVByZXYgPT09IDAgPyBkZWNvZGVEQ0ZpcnN0IDogZGVjb2RlRENTdWNjZXNzaXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWNvZGVGbiA9IHN1Y2Nlc3NpdmVQcmV2ID09PSAwID8gZGVjb2RlQUNGaXJzdCA6IGRlY29kZUFDU3VjY2Vzc2l2ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVjb2RlRm4gPSBkZWNvZGVCYXNlbGluZTtcbiAgfVxuXG4gIGxldCBtY3UgPSAwO1xuICBsZXQgbWFya2VyO1xuICBsZXQgbWN1RXhwZWN0ZWQ7XG4gIGlmIChjb21wb25lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgbWN1RXhwZWN0ZWQgPSBjb21wb25lbnRzWzBdLmJsb2Nrc1BlckxpbmUgKiBjb21wb25lbnRzWzBdLmJsb2Nrc1BlckNvbHVtbjtcbiAgfSBlbHNlIHtcbiAgICBtY3VFeHBlY3RlZCA9IG1jdXNQZXJMaW5lICogZnJhbWUubWN1c1BlckNvbHVtbjtcbiAgfVxuXG4gIGNvbnN0IHVzZWRSZXNldEludGVydmFsID0gcmVzZXRJbnRlcnZhbCB8fCBtY3VFeHBlY3RlZDtcblxuICB3aGlsZSAobWN1IDwgbWN1RXhwZWN0ZWQpIHtcbiAgICAvLyByZXNldCBpbnRlcnZhbCBzdHVmZlxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wb25lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbXBvbmVudHNbaV0ucHJlZCA9IDA7XG4gICAgfVxuICAgIGVvYnJ1biA9IDA7XG5cbiAgICBpZiAoY29tcG9uZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50c1swXTtcbiAgICAgIGZvciAobiA9IDA7IG4gPCB1c2VkUmVzZXRJbnRlcnZhbDsgbisrKSB7XG4gICAgICAgIGRlY29kZUJsb2NrKGNvbXBvbmVudCwgZGVjb2RlRm4sIG1jdSk7XG4gICAgICAgIG1jdSsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKG4gPSAwOyBuIDwgdXNlZFJlc2V0SW50ZXJ2YWw7IG4rKykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcG9uZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50c1tpXTtcbiAgICAgICAgICBjb25zdCB7IGgsIHYgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdjsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgaDsgaysrKSB7XG4gICAgICAgICAgICAgIGRlY29kZU1jdShjb21wb25lbnQsIGRlY29kZUZuLCBtY3UsIGosIGspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtY3UrKztcblxuICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIG91ciBleHBlY3RlZCBNQ1Uncywgc3RvcCBkZWNvZGluZ1xuICAgICAgICBpZiAobWN1ID09PSBtY3VFeHBlY3RlZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZCBtYXJrZXJcbiAgICBiaXRzQ291bnQgPSAwO1xuICAgIG1hcmtlciA9IChkYXRhW29mZnNldF0gPDwgOCkgfCBkYXRhW29mZnNldCArIDFdO1xuICAgIGlmIChtYXJrZXIgPCAweEZGMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFya2VyIHdhcyBub3QgZm91bmQnKTtcbiAgICB9XG5cbiAgICBpZiAobWFya2VyID49IDB4RkZEMCAmJiBtYXJrZXIgPD0gMHhGRkQ3KSB7IC8vIFJTVHhcbiAgICAgIG9mZnNldCArPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0IC0gc3RhcnRPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50RGF0YShmcmFtZSwgY29tcG9uZW50KSB7XG4gIGNvbnN0IGxpbmVzID0gW107XG4gIGNvbnN0IHsgYmxvY2tzUGVyTGluZSwgYmxvY2tzUGVyQ29sdW1uIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHNhbXBsZXNQZXJMaW5lID0gYmxvY2tzUGVyTGluZSA8PCAzO1xuICBjb25zdCBSID0gbmV3IEludDMyQXJyYXkoNjQpO1xuICBjb25zdCByID0gbmV3IFVpbnQ4QXJyYXkoNjQpO1xuXG4gIC8vIEEgcG9ydCBvZiBwb3BwbGVyJ3MgSURDVCBtZXRob2Qgd2hpY2ggaW4gdHVybiBpcyB0YWtlbiBmcm9tOlxuICAvLyAgIENocmlzdG9waCBMb2VmZmxlciwgQWRyaWFhbiBMaWd0ZW5iZXJnLCBHZW9yZ2UgUy4gTW9zY2h5dHosXG4gIC8vICAgXCJQcmFjdGljYWwgRmFzdCAxLUQgRENUIEFsZ29yaXRobXMgd2l0aCAxMSBNdWx0aXBsaWNhdGlvbnNcIixcbiAgLy8gICBJRUVFIEludGwuIENvbmYuIG9uIEFjb3VzdGljcywgU3BlZWNoICYgU2lnbmFsIFByb2Nlc3NpbmcsIDE5ODksXG4gIC8vICAgOTg4LTk5MS5cbiAgZnVuY3Rpb24gcXVhbnRpemVBbmRJbnZlcnNlKHp6LCBkYXRhT3V0LCBkYXRhSW4pIHtcbiAgICBjb25zdCBxdCA9IGNvbXBvbmVudC5xdWFudGl6YXRpb25UYWJsZTtcbiAgICBsZXQgdjA7XG4gICAgbGV0IHYxO1xuICAgIGxldCB2MjtcbiAgICBsZXQgdjM7XG4gICAgbGV0IHY0O1xuICAgIGxldCB2NTtcbiAgICBsZXQgdjY7XG4gICAgbGV0IHY3O1xuICAgIGxldCB0O1xuICAgIGNvbnN0IHAgPSBkYXRhSW47XG4gICAgbGV0IGk7XG5cbiAgICAvLyBkZXF1YW50XG4gICAgZm9yIChpID0gMDsgaSA8IDY0OyBpKyspIHtcbiAgICAgIHBbaV0gPSB6eltpXSAqIHF0W2ldO1xuICAgIH1cblxuICAgIC8vIGludmVyc2UgRENUIG9uIHJvd3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgODsgKytpKSB7XG4gICAgICBjb25zdCByb3cgPSA4ICogaTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGFsbC16ZXJvIEFDIGNvZWZmaWNpZW50c1xuICAgICAgaWYgKHBbMSArIHJvd10gPT09IDAgJiYgcFsyICsgcm93XSA9PT0gMCAmJiBwWzMgKyByb3ddID09PSAwXG4gICAgICAgICYmIHBbNCArIHJvd10gPT09IDAgJiYgcFs1ICsgcm93XSA9PT0gMCAmJiBwWzYgKyByb3ddID09PSAwXG4gICAgICAgICYmIHBbNyArIHJvd10gPT09IDApIHtcbiAgICAgICAgdCA9ICgoZGN0U3FydDIgKiBwWzAgKyByb3ddKSArIDUxMikgPj4gMTA7XG4gICAgICAgIHBbMCArIHJvd10gPSB0O1xuICAgICAgICBwWzEgKyByb3ddID0gdDtcbiAgICAgICAgcFsyICsgcm93XSA9IHQ7XG4gICAgICAgIHBbMyArIHJvd10gPSB0O1xuICAgICAgICBwWzQgKyByb3ddID0gdDtcbiAgICAgICAgcFs1ICsgcm93XSA9IHQ7XG4gICAgICAgIHBbNiArIHJvd10gPSB0O1xuICAgICAgICBwWzcgKyByb3ddID0gdDtcbiAgICAgICAgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gc3RhZ2UgNFxuICAgICAgdjAgPSAoKGRjdFNxcnQyICogcFswICsgcm93XSkgKyAxMjgpID4+IDg7XG4gICAgICB2MSA9ICgoZGN0U3FydDIgKiBwWzQgKyByb3ddKSArIDEyOCkgPj4gODtcbiAgICAgIHYyID0gcFsyICsgcm93XTtcbiAgICAgIHYzID0gcFs2ICsgcm93XTtcbiAgICAgIHY0ID0gKChkY3RTcXJ0MWQyICogKHBbMSArIHJvd10gLSBwWzcgKyByb3ddKSkgKyAxMjgpID4+IDg7XG4gICAgICB2NyA9ICgoZGN0U3FydDFkMiAqIChwWzEgKyByb3ddICsgcFs3ICsgcm93XSkpICsgMTI4KSA+PiA4O1xuICAgICAgdjUgPSBwWzMgKyByb3ddIDw8IDQ7XG4gICAgICB2NiA9IHBbNSArIHJvd10gPDwgNDtcblxuICAgICAgLy8gc3RhZ2UgM1xuICAgICAgdCA9ICh2MCAtIHYxICsgMSkgPj4gMTtcbiAgICAgIHYwID0gKHYwICsgdjEgKyAxKSA+PiAxO1xuICAgICAgdjEgPSB0O1xuICAgICAgdCA9ICgodjIgKiBkY3RTaW42KSArICh2MyAqIGRjdENvczYpICsgMTI4KSA+PiA4O1xuICAgICAgdjIgPSAoKHYyICogZGN0Q29zNikgLSAodjMgKiBkY3RTaW42KSArIDEyOCkgPj4gODtcbiAgICAgIHYzID0gdDtcbiAgICAgIHQgPSAodjQgLSB2NiArIDEpID4+IDE7XG4gICAgICB2NCA9ICh2NCArIHY2ICsgMSkgPj4gMTtcbiAgICAgIHY2ID0gdDtcbiAgICAgIHQgPSAodjcgKyB2NSArIDEpID4+IDE7XG4gICAgICB2NSA9ICh2NyAtIHY1ICsgMSkgPj4gMTtcbiAgICAgIHY3ID0gdDtcblxuICAgICAgLy8gc3RhZ2UgMlxuICAgICAgdCA9ICh2MCAtIHYzICsgMSkgPj4gMTtcbiAgICAgIHYwID0gKHYwICsgdjMgKyAxKSA+PiAxO1xuICAgICAgdjMgPSB0O1xuICAgICAgdCA9ICh2MSAtIHYyICsgMSkgPj4gMTtcbiAgICAgIHYxID0gKHYxICsgdjIgKyAxKSA+PiAxO1xuICAgICAgdjIgPSB0O1xuICAgICAgdCA9ICgodjQgKiBkY3RTaW4zKSArICh2NyAqIGRjdENvczMpICsgMjA0OCkgPj4gMTI7XG4gICAgICB2NCA9ICgodjQgKiBkY3RDb3MzKSAtICh2NyAqIGRjdFNpbjMpICsgMjA0OCkgPj4gMTI7XG4gICAgICB2NyA9IHQ7XG4gICAgICB0ID0gKCh2NSAqIGRjdFNpbjEpICsgKHY2ICogZGN0Q29zMSkgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHY1ID0gKCh2NSAqIGRjdENvczEpIC0gKHY2ICogZGN0U2luMSkgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHY2ID0gdDtcblxuICAgICAgLy8gc3RhZ2UgMVxuICAgICAgcFswICsgcm93XSA9IHYwICsgdjc7XG4gICAgICBwWzcgKyByb3ddID0gdjAgLSB2NztcbiAgICAgIHBbMSArIHJvd10gPSB2MSArIHY2O1xuICAgICAgcFs2ICsgcm93XSA9IHYxIC0gdjY7XG4gICAgICBwWzIgKyByb3ddID0gdjIgKyB2NTtcbiAgICAgIHBbNSArIHJvd10gPSB2MiAtIHY1O1xuICAgICAgcFszICsgcm93XSA9IHYzICsgdjQ7XG4gICAgICBwWzQgKyByb3ddID0gdjMgLSB2NDtcbiAgICB9XG5cbiAgICAvLyBpbnZlcnNlIERDVCBvbiBjb2x1bW5zXG4gICAgZm9yIChpID0gMDsgaSA8IDg7ICsraSkge1xuICAgICAgY29uc3QgY29sID0gaTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGFsbC16ZXJvIEFDIGNvZWZmaWNpZW50c1xuICAgICAgaWYgKHBbKDEgKiA4KSArIGNvbF0gPT09IDAgJiYgcFsoMiAqIDgpICsgY29sXSA9PT0gMCAmJiBwWygzICogOCkgKyBjb2xdID09PSAwXG4gICAgICAgICYmIHBbKDQgKiA4KSArIGNvbF0gPT09IDAgJiYgcFsoNSAqIDgpICsgY29sXSA9PT0gMCAmJiBwWyg2ICogOCkgKyBjb2xdID09PSAwXG4gICAgICAgICYmIHBbKDcgKiA4KSArIGNvbF0gPT09IDApIHtcbiAgICAgICAgdCA9ICgoZGN0U3FydDIgKiBkYXRhSW5baSArIDBdKSArIDgxOTIpID4+IDE0O1xuICAgICAgICBwWygwICogOCkgKyBjb2xdID0gdDtcbiAgICAgICAgcFsoMSAqIDgpICsgY29sXSA9IHQ7XG4gICAgICAgIHBbKDIgKiA4KSArIGNvbF0gPSB0O1xuICAgICAgICBwWygzICogOCkgKyBjb2xdID0gdDtcbiAgICAgICAgcFsoNCAqIDgpICsgY29sXSA9IHQ7XG4gICAgICAgIHBbKDUgKiA4KSArIGNvbF0gPSB0O1xuICAgICAgICBwWyg2ICogOCkgKyBjb2xdID0gdDtcbiAgICAgICAgcFsoNyAqIDgpICsgY29sXSA9IHQ7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHN0YWdlIDRcbiAgICAgIHYwID0gKChkY3RTcXJ0MiAqIHBbKDAgKiA4KSArIGNvbF0pICsgMjA0OCkgPj4gMTI7XG4gICAgICB2MSA9ICgoZGN0U3FydDIgKiBwWyg0ICogOCkgKyBjb2xdKSArIDIwNDgpID4+IDEyO1xuICAgICAgdjIgPSBwWygyICogOCkgKyBjb2xdO1xuICAgICAgdjMgPSBwWyg2ICogOCkgKyBjb2xdO1xuICAgICAgdjQgPSAoKGRjdFNxcnQxZDIgKiAocFsoMSAqIDgpICsgY29sXSAtIHBbKDcgKiA4KSArIGNvbF0pKSArIDIwNDgpID4+IDEyO1xuICAgICAgdjcgPSAoKGRjdFNxcnQxZDIgKiAocFsoMSAqIDgpICsgY29sXSArIHBbKDcgKiA4KSArIGNvbF0pKSArIDIwNDgpID4+IDEyO1xuICAgICAgdjUgPSBwWygzICogOCkgKyBjb2xdO1xuICAgICAgdjYgPSBwWyg1ICogOCkgKyBjb2xdO1xuXG4gICAgICAvLyBzdGFnZSAzXG4gICAgICB0ID0gKHYwIC0gdjEgKyAxKSA+PiAxO1xuICAgICAgdjAgPSAodjAgKyB2MSArIDEpID4+IDE7XG4gICAgICB2MSA9IHQ7XG4gICAgICB0ID0gKCh2MiAqIGRjdFNpbjYpICsgKHYzICogZGN0Q29zNikgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHYyID0gKCh2MiAqIGRjdENvczYpIC0gKHYzICogZGN0U2luNikgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHYzID0gdDtcbiAgICAgIHQgPSAodjQgLSB2NiArIDEpID4+IDE7XG4gICAgICB2NCA9ICh2NCArIHY2ICsgMSkgPj4gMTtcbiAgICAgIHY2ID0gdDtcbiAgICAgIHQgPSAodjcgKyB2NSArIDEpID4+IDE7XG4gICAgICB2NSA9ICh2NyAtIHY1ICsgMSkgPj4gMTtcbiAgICAgIHY3ID0gdDtcblxuICAgICAgLy8gc3RhZ2UgMlxuICAgICAgdCA9ICh2MCAtIHYzICsgMSkgPj4gMTtcbiAgICAgIHYwID0gKHYwICsgdjMgKyAxKSA+PiAxO1xuICAgICAgdjMgPSB0O1xuICAgICAgdCA9ICh2MSAtIHYyICsgMSkgPj4gMTtcbiAgICAgIHYxID0gKHYxICsgdjIgKyAxKSA+PiAxO1xuICAgICAgdjIgPSB0O1xuICAgICAgdCA9ICgodjQgKiBkY3RTaW4zKSArICh2NyAqIGRjdENvczMpICsgMjA0OCkgPj4gMTI7XG4gICAgICB2NCA9ICgodjQgKiBkY3RDb3MzKSAtICh2NyAqIGRjdFNpbjMpICsgMjA0OCkgPj4gMTI7XG4gICAgICB2NyA9IHQ7XG4gICAgICB0ID0gKCh2NSAqIGRjdFNpbjEpICsgKHY2ICogZGN0Q29zMSkgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHY1ID0gKCh2NSAqIGRjdENvczEpIC0gKHY2ICogZGN0U2luMSkgKyAyMDQ4KSA+PiAxMjtcbiAgICAgIHY2ID0gdDtcblxuICAgICAgLy8gc3RhZ2UgMVxuICAgICAgcFsoMCAqIDgpICsgY29sXSA9IHYwICsgdjc7XG4gICAgICBwWyg3ICogOCkgKyBjb2xdID0gdjAgLSB2NztcbiAgICAgIHBbKDEgKiA4KSArIGNvbF0gPSB2MSArIHY2O1xuICAgICAgcFsoNiAqIDgpICsgY29sXSA9IHYxIC0gdjY7XG4gICAgICBwWygyICogOCkgKyBjb2xdID0gdjIgKyB2NTtcbiAgICAgIHBbKDUgKiA4KSArIGNvbF0gPSB2MiAtIHY1O1xuICAgICAgcFsoMyAqIDgpICsgY29sXSA9IHYzICsgdjQ7XG4gICAgICBwWyg0ICogOCkgKyBjb2xdID0gdjMgLSB2NDtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IHRvIDgtYml0IGludGVnZXJzXG4gICAgZm9yIChpID0gMDsgaSA8IDY0OyArK2kpIHtcbiAgICAgIGNvbnN0IHNhbXBsZSA9IDEyOCArICgocFtpXSArIDgpID4+IDQpO1xuICAgICAgaWYgKHNhbXBsZSA8IDApIHtcbiAgICAgICAgZGF0YU91dFtpXSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNhbXBsZSA+IDBYRkYpIHtcbiAgICAgICAgZGF0YU91dFtpXSA9IDB4RkY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhT3V0W2ldID0gc2FtcGxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGJsb2NrUm93ID0gMDsgYmxvY2tSb3cgPCBibG9ja3NQZXJDb2x1bW47IGJsb2NrUm93KyspIHtcbiAgICBjb25zdCBzY2FuTGluZSA9IGJsb2NrUm93IDw8IDM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGxpbmVzLnB1c2gobmV3IFVpbnQ4QXJyYXkoc2FtcGxlc1BlckxpbmUpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgYmxvY2tDb2wgPSAwOyBibG9ja0NvbCA8IGJsb2Nrc1BlckxpbmU7IGJsb2NrQ29sKyspIHtcbiAgICAgIHF1YW50aXplQW5kSW52ZXJzZShjb21wb25lbnQuYmxvY2tzW2Jsb2NrUm93XVtibG9ja0NvbF0sIHIsIFIpO1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGNvbnN0IHNhbXBsZSA9IGJsb2NrQ29sIDw8IDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbc2NhbkxpbmUgKyBqXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICBsaW5lW3NhbXBsZSArIGldID0gcltvZmZzZXQrK107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufVxuXG5jbGFzcyBKcGVnU3RyZWFtUmVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5qZmlmID0gbnVsbDtcbiAgICB0aGlzLmFkb2JlID0gbnVsbDtcblxuICAgIHRoaXMucXVhbnRpemF0aW9uVGFibGVzID0gW107XG4gICAgdGhpcy5odWZmbWFuVGFibGVzQUMgPSBbXTtcbiAgICB0aGlzLmh1ZmZtYW5UYWJsZXNEQyA9IFtdO1xuICAgIHRoaXMucmVzZXRGcmFtZXMoKTtcbiAgfVxuXG4gIHJlc2V0RnJhbWVzKCkge1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gIH1cblxuICBwYXJzZShkYXRhKSB7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgLy8gY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgZnVuY3Rpb24gcmVhZFVpbnQxNigpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gKGRhdGFbb2Zmc2V0XSA8PCA4KSB8IGRhdGFbb2Zmc2V0ICsgMV07XG4gICAgICBvZmZzZXQgKz0gMjtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVhZERhdGFCbG9jaygpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHJlYWRVaW50MTYoKTtcbiAgICAgIGNvbnN0IGFycmF5ID0gZGF0YS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCAtIDIpO1xuICAgICAgb2Zmc2V0ICs9IGFycmF5Lmxlbmd0aDtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlcGFyZUNvbXBvbmVudHMoZnJhbWUpIHtcbiAgICAgIGxldCBtYXhIID0gMDtcbiAgICAgIGxldCBtYXhWID0gMDtcbiAgICAgIGxldCBjb21wb25lbnQ7XG4gICAgICBsZXQgY29tcG9uZW50SWQ7XG4gICAgICBmb3IgKGNvbXBvbmVudElkIGluIGZyYW1lLmNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKGZyYW1lLmNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoY29tcG9uZW50SWQpKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gZnJhbWUuY29tcG9uZW50c1tjb21wb25lbnRJZF07XG4gICAgICAgICAgaWYgKG1heEggPCBjb21wb25lbnQuaCkge1xuICAgICAgICAgICAgbWF4SCA9IGNvbXBvbmVudC5oO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWF4ViA8IGNvbXBvbmVudC52KSB7XG4gICAgICAgICAgICBtYXhWID0gY29tcG9uZW50LnY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBtY3VzUGVyTGluZSA9IE1hdGguY2VpbChmcmFtZS5zYW1wbGVzUGVyTGluZSAvIDggLyBtYXhIKTtcbiAgICAgIGNvbnN0IG1jdXNQZXJDb2x1bW4gPSBNYXRoLmNlaWwoZnJhbWUuc2NhbkxpbmVzIC8gOCAvIG1heFYpO1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBmcmFtZS5jb21wb25lbnRzKSB7XG4gICAgICAgIGlmIChmcmFtZS5jb21wb25lbnRzLmhhc093blByb3BlcnR5KGNvbXBvbmVudElkKSkge1xuICAgICAgICAgIGNvbXBvbmVudCA9IGZyYW1lLmNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xuICAgICAgICAgIGNvbnN0IGJsb2Nrc1BlckxpbmUgPSBNYXRoLmNlaWwoTWF0aC5jZWlsKGZyYW1lLnNhbXBsZXNQZXJMaW5lIC8gOCkgKiBjb21wb25lbnQuaCAvIG1heEgpO1xuICAgICAgICAgIGNvbnN0IGJsb2Nrc1BlckNvbHVtbiA9IE1hdGguY2VpbChNYXRoLmNlaWwoZnJhbWUuc2NhbkxpbmVzIC8gOCkgKiBjb21wb25lbnQudiAvIG1heFYpO1xuICAgICAgICAgIGNvbnN0IGJsb2Nrc1BlckxpbmVGb3JNY3UgPSBtY3VzUGVyTGluZSAqIGNvbXBvbmVudC5oO1xuICAgICAgICAgIGNvbnN0IGJsb2Nrc1BlckNvbHVtbkZvck1jdSA9IG1jdXNQZXJDb2x1bW4gKiBjb21wb25lbnQudjtcbiAgICAgICAgICBjb25zdCBibG9ja3MgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrc1BlckNvbHVtbkZvck1jdTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2tzUGVyTGluZUZvck1jdTsgaisrKSB7XG4gICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBJbnQzMkFycmF5KDY0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9ja3MucHVzaChyb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wb25lbnQuYmxvY2tzUGVyTGluZSA9IGJsb2Nrc1BlckxpbmU7XG4gICAgICAgICAgY29tcG9uZW50LmJsb2Nrc1BlckNvbHVtbiA9IGJsb2Nrc1BlckNvbHVtbjtcbiAgICAgICAgICBjb21wb25lbnQuYmxvY2tzID0gYmxvY2tzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmcmFtZS5tYXhIID0gbWF4SDtcbiAgICAgIGZyYW1lLm1heFYgPSBtYXhWO1xuICAgICAgZnJhbWUubWN1c1BlckxpbmUgPSBtY3VzUGVyTGluZTtcbiAgICAgIGZyYW1lLm1jdXNQZXJDb2x1bW4gPSBtY3VzUGVyQ29sdW1uO1xuICAgIH1cblxuICAgIGxldCBmaWxlTWFya2VyID0gcmVhZFVpbnQxNigpO1xuICAgIGlmIChmaWxlTWFya2VyICE9PSAweEZGRDgpIHsgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignU09JIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIGZpbGVNYXJrZXIgPSByZWFkVWludDE2KCk7XG4gICAgd2hpbGUgKGZpbGVNYXJrZXIgIT09IDB4RkZEOSkgeyAvLyBFT0kgKEVuZCBvZiBpbWFnZSlcbiAgICAgIHN3aXRjaCAoZmlsZU1hcmtlcikge1xuICAgICAgICBjYXNlIDB4RkYwMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMHhGRkUwOiAvLyBBUFAwIChBcHBsaWNhdGlvbiBTcGVjaWZpYylcbiAgICAgICAgY2FzZSAweEZGRTE6IC8vIEFQUDFcbiAgICAgICAgY2FzZSAweEZGRTI6IC8vIEFQUDJcbiAgICAgICAgY2FzZSAweEZGRTM6IC8vIEFQUDNcbiAgICAgICAgY2FzZSAweEZGRTQ6IC8vIEFQUDRcbiAgICAgICAgY2FzZSAweEZGRTU6IC8vIEFQUDVcbiAgICAgICAgY2FzZSAweEZGRTY6IC8vIEFQUDZcbiAgICAgICAgY2FzZSAweEZGRTc6IC8vIEFQUDdcbiAgICAgICAgY2FzZSAweEZGRTg6IC8vIEFQUDhcbiAgICAgICAgY2FzZSAweEZGRTk6IC8vIEFQUDlcbiAgICAgICAgY2FzZSAweEZGRUE6IC8vIEFQUDEwXG4gICAgICAgIGNhc2UgMHhGRkVCOiAvLyBBUFAxMVxuICAgICAgICBjYXNlIDB4RkZFQzogLy8gQVBQMTJcbiAgICAgICAgY2FzZSAweEZGRUQ6IC8vIEFQUDEzXG4gICAgICAgIGNhc2UgMHhGRkVFOiAvLyBBUFAxNFxuICAgICAgICBjYXNlIDB4RkZFRjogLy8gQVBQMTVcbiAgICAgICAgY2FzZSAweEZGRkU6IHsgLy8gQ09NIChDb21tZW50KVxuICAgICAgICAgIGNvbnN0IGFwcERhdGEgPSByZWFkRGF0YUJsb2NrKCk7XG5cbiAgICAgICAgICBpZiAoZmlsZU1hcmtlciA9PT0gMHhGRkUwKSB7XG4gICAgICAgICAgICBpZiAoYXBwRGF0YVswXSA9PT0gMHg0QSAmJiBhcHBEYXRhWzFdID09PSAweDQ2ICYmIGFwcERhdGFbMl0gPT09IDB4NDlcbiAgICAgICAgICAgICAgJiYgYXBwRGF0YVszXSA9PT0gMHg0NiAmJiBhcHBEYXRhWzRdID09PSAwKSB7IC8vICdKRklGXFx4MDAnXG4gICAgICAgICAgICAgIHRoaXMuamZpZiA9IHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB7IG1ham9yOiBhcHBEYXRhWzVdLCBtaW5vcjogYXBwRGF0YVs2XSB9LFxuICAgICAgICAgICAgICAgIGRlbnNpdHlVbml0czogYXBwRGF0YVs3XSxcbiAgICAgICAgICAgICAgICB4RGVuc2l0eTogKGFwcERhdGFbOF0gPDwgOCkgfCBhcHBEYXRhWzldLFxuICAgICAgICAgICAgICAgIHlEZW5zaXR5OiAoYXBwRGF0YVsxMF0gPDwgOCkgfCBhcHBEYXRhWzExXSxcbiAgICAgICAgICAgICAgICB0aHVtYldpZHRoOiBhcHBEYXRhWzEyXSxcbiAgICAgICAgICAgICAgICB0aHVtYkhlaWdodDogYXBwRGF0YVsxM10sXG4gICAgICAgICAgICAgICAgdGh1bWJEYXRhOiBhcHBEYXRhLnN1YmFycmF5KDE0LCAxNCArICgzICogYXBwRGF0YVsxMl0gKiBhcHBEYXRhWzEzXSkpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUT0RPIEFQUDEgLSBFeGlmXG4gICAgICAgICAgaWYgKGZpbGVNYXJrZXIgPT09IDB4RkZFRSkge1xuICAgICAgICAgICAgaWYgKGFwcERhdGFbMF0gPT09IDB4NDEgJiYgYXBwRGF0YVsxXSA9PT0gMHg2NCAmJiBhcHBEYXRhWzJdID09PSAweDZGXG4gICAgICAgICAgICAgICYmIGFwcERhdGFbM10gPT09IDB4NjIgJiYgYXBwRGF0YVs0XSA9PT0gMHg2NSAmJiBhcHBEYXRhWzVdID09PSAwKSB7IC8vICdBZG9iZVxceDAwJ1xuICAgICAgICAgICAgICB0aGlzLmFkb2JlID0ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IGFwcERhdGFbNl0sXG4gICAgICAgICAgICAgICAgZmxhZ3MwOiAoYXBwRGF0YVs3XSA8PCA4KSB8IGFwcERhdGFbOF0sXG4gICAgICAgICAgICAgICAgZmxhZ3MxOiAoYXBwRGF0YVs5XSA8PCA4KSB8IGFwcERhdGFbMTBdLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvZGU6IGFwcERhdGFbMTFdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMHhGRkRCOiB7IC8vIERRVCAoRGVmaW5lIFF1YW50aXphdGlvbiBUYWJsZXMpXG4gICAgICAgICAgY29uc3QgcXVhbnRpemF0aW9uVGFibGVzTGVuZ3RoID0gcmVhZFVpbnQxNigpO1xuICAgICAgICAgIGNvbnN0IHF1YW50aXphdGlvblRhYmxlc0VuZCA9IHF1YW50aXphdGlvblRhYmxlc0xlbmd0aCArIG9mZnNldCAtIDI7XG4gICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHF1YW50aXphdGlvblRhYmxlc0VuZCkge1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpemF0aW9uVGFibGVTcGVjID0gZGF0YVtvZmZzZXQrK107XG4gICAgICAgICAgICBjb25zdCB0YWJsZURhdGEgPSBuZXcgSW50MzJBcnJheSg2NCk7XG4gICAgICAgICAgICBpZiAoKHF1YW50aXphdGlvblRhYmxlU3BlYyA+PiA0KSA9PT0gMCkgeyAvLyA4IGJpdCB2YWx1ZXNcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2NDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeiA9IGRjdFppZ1phZ1tqXTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGFbel0gPSBkYXRhW29mZnNldCsrXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgocXVhbnRpemF0aW9uVGFibGVTcGVjID4+IDQpID09PSAxKSB7IC8vIDE2IGJpdFxuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB6ID0gZGN0WmlnWmFnW2pdO1xuICAgICAgICAgICAgICAgIHRhYmxlRGF0YVt6XSA9IHJlYWRVaW50MTYoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEUVQ6IGludmFsaWQgdGFibGUgc3BlYycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5xdWFudGl6YXRpb25UYWJsZXNbcXVhbnRpemF0aW9uVGFibGVTcGVjICYgMTVdID0gdGFibGVEYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMHhGRkMwOiAvLyBTT0YwIChTdGFydCBvZiBGcmFtZSwgQmFzZWxpbmUgRENUKVxuICAgICAgICBjYXNlIDB4RkZDMTogLy8gU09GMSAoU3RhcnQgb2YgRnJhbWUsIEV4dGVuZGVkIERDVClcbiAgICAgICAgY2FzZSAweEZGQzI6IHsgLy8gU09GMiAoU3RhcnQgb2YgRnJhbWUsIFByb2dyZXNzaXZlIERDVClcbiAgICAgICAgICByZWFkVWludDE2KCk7IC8vIHNraXAgZGF0YSBsZW5ndGhcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IHtcbiAgICAgICAgICAgIGV4dGVuZGVkOiAoZmlsZU1hcmtlciA9PT0gMHhGRkMxKSxcbiAgICAgICAgICAgIHByb2dyZXNzaXZlOiAoZmlsZU1hcmtlciA9PT0gMHhGRkMyKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogZGF0YVtvZmZzZXQrK10sXG4gICAgICAgICAgICBzY2FuTGluZXM6IHJlYWRVaW50MTYoKSxcbiAgICAgICAgICAgIHNhbXBsZXNQZXJMaW5lOiByZWFkVWludDE2KCksXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgICAgIGNvbXBvbmVudHNPcmRlcjogW10sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNDb3VudCA9IGRhdGFbb2Zmc2V0KytdO1xuICAgICAgICAgIGxldCBjb21wb25lbnRJZDtcbiAgICAgICAgICAvLyBsZXQgbWF4SCA9IDA7XG4gICAgICAgICAgLy8gbGV0IG1heFYgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50c0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvbmVudElkID0gZGF0YVtvZmZzZXRdO1xuICAgICAgICAgICAgY29uc3QgaCA9IGRhdGFbb2Zmc2V0ICsgMV0gPj4gNDtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBkYXRhW29mZnNldCArIDFdICYgMTU7XG4gICAgICAgICAgICBjb25zdCBxSWQgPSBkYXRhW29mZnNldCArIDJdO1xuICAgICAgICAgICAgZnJhbWUuY29tcG9uZW50c09yZGVyLnB1c2goY29tcG9uZW50SWQpO1xuICAgICAgICAgICAgZnJhbWUuY29tcG9uZW50c1tjb21wb25lbnRJZF0gPSB7XG4gICAgICAgICAgICAgIGgsXG4gICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgIHF1YW50aXphdGlvbklkeDogcUlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9mZnNldCArPSAzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmVwYXJlQ29tcG9uZW50cyhmcmFtZSk7XG4gICAgICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDB4RkZDNDogeyAvLyBESFQgKERlZmluZSBIdWZmbWFuIFRhYmxlcylcbiAgICAgICAgICBjb25zdCBodWZmbWFuTGVuZ3RoID0gcmVhZFVpbnQxNigpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgaHVmZm1hbkxlbmd0aDspIHtcbiAgICAgICAgICAgIGNvbnN0IGh1ZmZtYW5UYWJsZVNwZWMgPSBkYXRhW29mZnNldCsrXTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVMZW5ndGhzID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICAgICAgbGV0IGNvZGVMZW5ndGhTdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgaisrLCBvZmZzZXQrKykge1xuICAgICAgICAgICAgICBjb2RlTGVuZ3Roc1tqXSA9IGRhdGFbb2Zmc2V0XTtcbiAgICAgICAgICAgICAgY29kZUxlbmd0aFN1bSArPSBjb2RlTGVuZ3Roc1tqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGh1ZmZtYW5WYWx1ZXMgPSBuZXcgVWludDhBcnJheShjb2RlTGVuZ3RoU3VtKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29kZUxlbmd0aFN1bTsgaisrLCBvZmZzZXQrKykge1xuICAgICAgICAgICAgICBodWZmbWFuVmFsdWVzW2pdID0gZGF0YVtvZmZzZXRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSAxNyArIGNvZGVMZW5ndGhTdW07XG5cbiAgICAgICAgICAgIGlmICgoaHVmZm1hblRhYmxlU3BlYyA+PiA0KSA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmh1ZmZtYW5UYWJsZXNEQ1todWZmbWFuVGFibGVTcGVjICYgMTVdID0gYnVpbGRIdWZmbWFuVGFibGUoXG4gICAgICAgICAgICAgICAgY29kZUxlbmd0aHMsIGh1ZmZtYW5WYWx1ZXMsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmh1ZmZtYW5UYWJsZXNBQ1todWZmbWFuVGFibGVTcGVjICYgMTVdID0gYnVpbGRIdWZmbWFuVGFibGUoXG4gICAgICAgICAgICAgICAgY29kZUxlbmd0aHMsIGh1ZmZtYW5WYWx1ZXMsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAweEZGREQ6IC8vIERSSSAoRGVmaW5lIFJlc3RhcnQgSW50ZXJ2YWwpXG4gICAgICAgICAgcmVhZFVpbnQxNigpOyAvLyBza2lwIGRhdGEgbGVuZ3RoXG4gICAgICAgICAgdGhpcy5yZXNldEludGVydmFsID0gcmVhZFVpbnQxNigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMHhGRkRBOiB7IC8vIFNPUyAoU3RhcnQgb2YgU2NhbilcbiAgICAgICAgICByZWFkVWludDE2KCk7IC8vIHNraXAgbGVuZ3RoXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3JzQ291bnQgPSBkYXRhW29mZnNldCsrXTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lc1swXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdG9yc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGZyYW1lLmNvbXBvbmVudHNbZGF0YVtvZmZzZXQrK11dO1xuICAgICAgICAgICAgY29uc3QgdGFibGVTcGVjID0gZGF0YVtvZmZzZXQrK107XG4gICAgICAgICAgICBjb21wb25lbnQuaHVmZm1hblRhYmxlREMgPSB0aGlzLmh1ZmZtYW5UYWJsZXNEQ1t0YWJsZVNwZWMgPj4gNF07XG4gICAgICAgICAgICBjb21wb25lbnQuaHVmZm1hblRhYmxlQUMgPSB0aGlzLmh1ZmZtYW5UYWJsZXNBQ1t0YWJsZVNwZWMgJiAxNV07XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3BlY3RyYWxTdGFydCA9IGRhdGFbb2Zmc2V0KytdO1xuICAgICAgICAgIGNvbnN0IHNwZWN0cmFsRW5kID0gZGF0YVtvZmZzZXQrK107XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc2l2ZUFwcHJveGltYXRpb24gPSBkYXRhW29mZnNldCsrXTtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBkZWNvZGVTY2FuKGRhdGEsIG9mZnNldCxcbiAgICAgICAgICAgIGZyYW1lLCBjb21wb25lbnRzLCB0aGlzLnJlc2V0SW50ZXJ2YWwsXG4gICAgICAgICAgICBzcGVjdHJhbFN0YXJ0LCBzcGVjdHJhbEVuZCxcbiAgICAgICAgICAgIHN1Y2Nlc3NpdmVBcHByb3hpbWF0aW9uID4+IDQsIHN1Y2Nlc3NpdmVBcHByb3hpbWF0aW9uICYgMTUpO1xuICAgICAgICAgIG9mZnNldCArPSBwcm9jZXNzZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDB4RkZGRjogLy8gRmlsbCBieXRlc1xuICAgICAgICAgIGlmIChkYXRhW29mZnNldF0gIT09IDB4RkYpIHsgLy8gQXZvaWQgc2tpcHBpbmcgYSB2YWxpZCBtYXJrZXIuXG4gICAgICAgICAgICBvZmZzZXQtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoZGF0YVtvZmZzZXQgLSAzXSA9PT0gMHhGRlxuICAgICAgICAgICAgJiYgZGF0YVtvZmZzZXQgLSAyXSA+PSAweEMwICYmIGRhdGFbb2Zmc2V0IC0gMl0gPD0gMHhGRSkge1xuICAgICAgICAgICAgLy8gY291bGQgYmUgaW5jb3JyZWN0IGVuY29kaW5nIC0tIGxhc3QgMHhGRiBieXRlIG9mIHRoZSBwcmV2aW91c1xuICAgICAgICAgICAgLy8gYmxvY2sgd2FzIGVhdGVuIGJ5IHRoZSBlbmNvZGVyXG4gICAgICAgICAgICBvZmZzZXQgLT0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gSlBFRyBtYXJrZXIgJHtmaWxlTWFya2VyLnRvU3RyaW5nKDE2KX1gKTtcbiAgICAgIH1cbiAgICAgIGZpbGVNYXJrZXIgPSByZWFkVWludDE2KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVzdWx0KCkge1xuICAgIGNvbnN0IHsgZnJhbWVzIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmZyYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZnJhbWVzIHdlcmUgZGVjb2RlZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mcmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc29sZS53YXJuKCdtb3JlIHRoYW4gb25lIGZyYW1lIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgZWFjaCBmcmFtZSdzIGNvbXBvbmVudHMgcXVhbnRpemF0aW9uIHRhYmxlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3AgPSB0aGlzLmZyYW1lc1tpXS5jb21wb25lbnRzO1xuICAgICAgZm9yIChjb25zdCBqIG9mIE9iamVjdC5rZXlzKGNwKSkge1xuICAgICAgICBjcFtqXS5xdWFudGl6YXRpb25UYWJsZSA9IHRoaXMucXVhbnRpemF0aW9uVGFibGVzW2NwW2pdLnF1YW50aXphdGlvbklkeF07XG4gICAgICAgIGRlbGV0ZSBjcFtqXS5xdWFudGl6YXRpb25JZHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgeyBjb21wb25lbnRzLCBjb21wb25lbnRzT3JkZXIgfSA9IGZyYW1lO1xuICAgIGNvbnN0IG91dENvbXBvbmVudHMgPSBbXTtcbiAgICBjb25zdCB3aWR0aCA9IGZyYW1lLnNhbXBsZXNQZXJMaW5lO1xuICAgIGNvbnN0IGhlaWdodCA9IGZyYW1lLnNjYW5MaW5lcztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50c09yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudHNPcmRlcltpXV07XG4gICAgICBvdXRDb21wb25lbnRzLnB1c2goe1xuICAgICAgICBsaW5lczogYnVpbGRDb21wb25lbnREYXRhKGZyYW1lLCBjb21wb25lbnQpLFxuICAgICAgICBzY2FsZVg6IGNvbXBvbmVudC5oIC8gZnJhbWUubWF4SCxcbiAgICAgICAgc2NhbGVZOiBjb21wb25lbnQudiAvIGZyYW1lLm1heFYsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIG91dENvbXBvbmVudHMubGVuZ3RoKTtcbiAgICBsZXQgb2kgPSAwO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyArK3kpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7ICsreCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dENvbXBvbmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBvdXRDb21wb25lbnRzW2ldO1xuICAgICAgICAgIG91dFtvaV0gPSBjb21wb25lbnQubGluZXNbMCB8IHkgKiBjb21wb25lbnQuc2NhbGVZXVswIHwgeCAqIGNvbXBvbmVudC5zY2FsZVhdO1xuICAgICAgICAgICsrb2k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKcGVnRGVjb2RlciBleHRlbmRzIEJhc2VEZWNvZGVyIHtcbiAgY29uc3RydWN0b3IoZmlsZURpcmVjdG9yeSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZWFkZXIgPSBuZXcgSnBlZ1N0cmVhbVJlYWRlcigpO1xuICAgIGlmIChmaWxlRGlyZWN0b3J5LkpQRUdUYWJsZXMpIHtcbiAgICAgIHRoaXMucmVhZGVyLnBhcnNlKGZpbGVEaXJlY3RvcnkuSlBFR1RhYmxlcyk7XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlQmxvY2soYnVmZmVyKSB7XG4gICAgdGhpcy5yZWFkZXIucmVzZXRGcmFtZXMoKTtcbiAgICB0aGlzLnJlYWRlci5wYXJzZShuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAgICByZXR1cm4gdGhpcy5yZWFkZXIuZ2V0UmVzdWx0KCkuYnVmZmVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9