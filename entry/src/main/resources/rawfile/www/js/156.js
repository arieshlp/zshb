(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/geotiff/dist-module/compression/lerc.js":
/*!**************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/lerc.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LercDecoder; });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "./node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs");
/* harmony import */ var lerc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lerc */ "./node_modules/lerc/LercDecode.js");
/* harmony import */ var lerc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lerc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals.js */ "./node_modules/geotiff/dist-module/globals.js");





class LercDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(fileDirectory) {
    super();

    this.planarConfiguration = typeof fileDirectory.PlanarConfiguration !== 'undefined' ? fileDirectory.PlanarConfiguration : 1;
    this.samplesPerPixel = typeof fileDirectory.SamplesPerPixel !== 'undefined' ? fileDirectory.SamplesPerPixel : 1;

    this.addCompression = fileDirectory.LercParameters[_globals_js__WEBPACK_IMPORTED_MODULE_3__["LercParameters"].AddCompression];
  }

  decodeBlock(buffer) {
    switch (this.addCompression) {
      case _globals_js__WEBPACK_IMPORTED_MODULE_3__["LercAddCompression"].None:
        break;
      case _globals_js__WEBPACK_IMPORTED_MODULE_3__["LercAddCompression"].Deflate:
        buffer = Object(pako__WEBPACK_IMPORTED_MODULE_0__["inflate"])(new Uint8Array(buffer)).buffer; // eslint-disable-line no-param-reassign, prefer-destructuring
        break;
      default:
        throw new Error(`Unsupported LERC additional compression method identifier: ${this.addCompression}`);
    }

    const lercResult = lerc__WEBPACK_IMPORTED_MODULE_1___default.a.decode(buffer, { returnPixelInterleavedDims: this.planarConfiguration === 1 });
    const lercData = lercResult.pixels[0];
    return lercData.buffer;
  }
}


/***/ }),

/***/ "./node_modules/lerc/LercDecode.js":
/*!*****************************************!*\
  !*** ./node_modules/lerc/LercDecode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;﻿/* jshint forin: false, bitwise: false */
/*
Copyright 2015-2021 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license and additional notices are located with the
source distribution at:

http://github.com/Esri/lerc/

Contributors:  Johannes Schmid, (LERC v1)
               Chayanika Khatua, (LERC v1)
               Wenxue Ju (LERC v1, v2.x)
*/

/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */

/**
 * a module for decoding LERC blobs
 * @module Lerc
 */
(function() {
  //this decoder supports all lerc versions, each version has its own class (LercDecode and Lerc2Decode). 
  //the exported module handles format variation autoamtically.

  //the original LercDecode for Version 1
  var LercDecode = (function() {

    // Note: currently, this module only has an implementation for decoding LERC data, not encoding. The name of
    // the class was chosen to be future proof.

    var CntZImage = {};

    CntZImage.defaultNoDataValue = -3.4027999387901484e+38; // smallest Float32 value

    /**
     * Decode a LERC byte stream and return an object containing the pixel data and some required and optional
     * information about it, such as the image's width and height.
     *
     * @param {ArrayBuffer} input The LERC input byte stream
     * @param {object} [options] Decoding options, containing any of the following properties:
     * @config {number} [inputOffset = 0]
     *        Skip the first inputOffset bytes of the input byte stream. A valid LERC file is expected at that position.
     * @config {Uint8Array} [encodedMask = null]
     *        If specified, the decoder will not read mask information from the input and use the specified encoded
     *        mask data instead. Mask header/data must not be present in the LERC byte stream in this case.
     * @config {number} [noDataValue = LercCode.defaultNoDataValue]
     *        Pixel value to use for masked pixels.
     * @config {ArrayBufferView|Array} [pixelType = Float32Array]
     *        The desired type of the pixelData array in the return value. Note that it is the caller's responsibility to
     *        provide an appropriate noDataValue if the default pixelType is overridden.
     * @config {boolean} [returnMask = false]
     *        If true, the return value will contain a maskData property of type Uint8Array which has one element per
     *        pixel, the value of which is 1 or 0 depending on whether that pixel's data is present or masked. If the
     *        input LERC data does not contain a mask, maskData will not be returned.
     * @config {boolean} [returnEncodedMask = false]
     *        If true, the return value will contain a encodedMaskData property, which can be passed into encode() as
     *        encodedMask.
     * @config {boolean} [returnFileInfo = false]
     *        If true, the return value will have a fileInfo property that contains metadata obtained from the
     *        LERC headers and the decoding process.
     * @config {boolean} [computeUsedBitDepths = false]
     *        If true, the fileInfo property in the return value will contain the set of all block bit depths
     *        encountered during decoding. Will only have an effect if returnFileInfo option is true.
     * @returns {{width, height, pixelData, minValue, maxValue, noDataValue, maskData, encodedMaskData, fileInfo}}
     */
    CntZImage.decode = function(input, options) {
      options = options || {};

      var skipMask = options.encodedMaskData || (options.encodedMaskData === null);
      var parsedData = parse(input, options.inputOffset || 0, skipMask);

      var noDataValue = (options.noDataValue !== null) ? options.noDataValue : CntZImage.defaultNoDataValue;

      var uncompressedData = uncompressPixelValues(parsedData, options.pixelType || Float32Array,
        options.encodedMaskData, noDataValue, options.returnMask);

      var result = {
        width: parsedData.width,
        height: parsedData.height,
        pixelData: uncompressedData.resultPixels,
        minValue: uncompressedData.minValue,
        maxValue: parsedData.pixels.maxValue,
        noDataValue: noDataValue
      };

      if (uncompressedData.resultMask) {
        result.maskData = uncompressedData.resultMask;
      }

      if (options.returnEncodedMask && parsedData.mask) {
        result.encodedMaskData = parsedData.mask.bitset ? parsedData.mask.bitset : null;
      }

      if (options.returnFileInfo) {
        result.fileInfo = formatFileInfo(parsedData);
        if (options.computeUsedBitDepths) {
          result.fileInfo.bitDepths = computeUsedBitDepths(parsedData);
        }
      }

      return result;
    };

    var uncompressPixelValues = function(data, TypedArrayClass, maskBitset, noDataValue, storeDecodedMask) {
      var blockIdx = 0;
      var numX = data.pixels.numBlocksX;
      var numY = data.pixels.numBlocksY;
      var blockWidth = Math.floor(data.width / numX);
      var blockHeight = Math.floor(data.height / numY);
      var scale = 2 * data.maxZError;
      var minValue = Number.MAX_VALUE, currentValue;
      maskBitset = maskBitset || ((data.mask) ? data.mask.bitset : null);

      var resultPixels, resultMask;
      resultPixels = new TypedArrayClass(data.width * data.height);
      if (storeDecodedMask && maskBitset) {
        resultMask = new Uint8Array(data.width * data.height);
      }
      var blockDataBuffer = new Float32Array(blockWidth * blockHeight);

      var xx, yy;
      for (var y = 0; y <= numY; y++) {
        var thisBlockHeight = (y !== numY) ? blockHeight : (data.height % numY);
        if (thisBlockHeight === 0) {
          continue;
        }
        for (var x = 0; x <= numX; x++) {
          var thisBlockWidth = (x !== numX) ? blockWidth : (data.width % numX);
          if (thisBlockWidth === 0) {
            continue;
          }

          var outPtr = y * data.width * blockHeight + x * blockWidth;
          var outStride = data.width - thisBlockWidth;

          var block = data.pixels.blocks[blockIdx];

          var blockData, blockPtr, constValue;
          if (block.encoding < 2) {
            // block is either uncompressed or bit-stuffed (encodings 0 and 1)
            if (block.encoding === 0) {
              // block is uncompressed
              blockData = block.rawData;
            } else {
              // block is bit-stuffed
              unstuff(block.stuffedData, block.bitsPerPixel, block.numValidPixels, block.offset, scale, blockDataBuffer, data.pixels.maxValue);
              blockData = blockDataBuffer;
            }
            blockPtr = 0;
          }
          else if (block.encoding === 2) {
            // block is all 0
            constValue = 0;
          }
          else {
            // block has constant value (encoding === 3)
            constValue = block.offset;
          }

          var maskByte;
          if (maskBitset) {
            for (yy = 0; yy < thisBlockHeight; yy++) {
              if (outPtr & 7) {
                //
                maskByte = maskBitset[outPtr >> 3];
                maskByte <<= outPtr & 7;
              }
              for (xx = 0; xx < thisBlockWidth; xx++) {
                if (!(outPtr & 7)) {
                  // read next byte from mask
                  maskByte = maskBitset[outPtr >> 3];
                }
                if (maskByte & 128) {
                  // pixel data present
                  if (resultMask) {
                    resultMask[outPtr] = 1;
                  }
                  currentValue = (block.encoding < 2) ? blockData[blockPtr++] : constValue;
                  minValue = minValue > currentValue ? currentValue : minValue;
                  resultPixels[outPtr++] = currentValue;
                } else {
                  // pixel data not present
                  if (resultMask) {
                    resultMask[outPtr] = 0;
                  }
                  resultPixels[outPtr++] = noDataValue;
                }
                maskByte <<= 1;
              }
              outPtr += outStride;
            }
          } else {
            // mask not present, simply copy block over
            if (block.encoding < 2) {
              // duplicating this code block for performance reasons
              // blockData case:
              for (yy = 0; yy < thisBlockHeight; yy++) {
                for (xx = 0; xx < thisBlockWidth; xx++) {
                  currentValue = blockData[blockPtr++];
                  minValue = minValue > currentValue ? currentValue : minValue;
                  resultPixels[outPtr++] = currentValue;
                }
                outPtr += outStride;
              }
            }
            else {
              // constValue case:
              minValue = minValue > constValue ? constValue : minValue;
              for (yy = 0; yy < thisBlockHeight; yy++) {
                for (xx = 0; xx < thisBlockWidth; xx++) {
                  resultPixels[outPtr++] = constValue;
                }
                outPtr += outStride;
              }
            }
          }
          if ((block.encoding === 1) && (blockPtr !== block.numValidPixels)) {
            throw "Block and Mask do not match";
          }
          blockIdx++;
        }
      }

      return {
        resultPixels: resultPixels,
        resultMask: resultMask,
        minValue: minValue
      };
    };

    var formatFileInfo = function(data) {
      return {
        "fileIdentifierString": data.fileIdentifierString,
        "fileVersion": data.fileVersion,
        "imageType": data.imageType,
        "height": data.height,
        "width": data.width,
        "maxZError": data.maxZError,
        "eofOffset": data.eofOffset,
        "mask": data.mask ? {
          "numBlocksX": data.mask.numBlocksX,
          "numBlocksY": data.mask.numBlocksY,
          "numBytes": data.mask.numBytes,
          "maxValue": data.mask.maxValue
        } : null,
        "pixels": {
          "numBlocksX": data.pixels.numBlocksX,
          "numBlocksY": data.pixels.numBlocksY,
          "numBytes": data.pixels.numBytes,
          "maxValue": data.pixels.maxValue,
          "noDataValue": data.noDataValue
        }
      };
    };

    var computeUsedBitDepths = function(data) {
      var numBlocks = data.pixels.numBlocksX * data.pixels.numBlocksY;
      var bitDepths = {};
      for (var i = 0; i < numBlocks; i++) {
        var block = data.pixels.blocks[i];
        if (block.encoding === 0) {
          bitDepths.float32 = true;
        } else if (block.encoding === 1) {
          bitDepths[block.bitsPerPixel] = true;
        } else {
          bitDepths[0] = true;
        }
      }

      return Object.keys(bitDepths);
    };

    var parse = function(input, fp, skipMask) {
      var data = {};

      // File header
      var fileIdView = new Uint8Array(input, fp, 10);
      data.fileIdentifierString = String.fromCharCode.apply(null, fileIdView);
      if (data.fileIdentifierString.trim() !== "CntZImage") {
        throw "Unexpected file identifier string: " + data.fileIdentifierString;
      }
      fp += 10;
      var view = new DataView(input, fp, 24);
      data.fileVersion = view.getInt32(0, true);
      data.imageType = view.getInt32(4, true);
      data.height = view.getUint32(8, true);
      data.width = view.getUint32(12, true);
      data.maxZError = view.getFloat64(16, true);
      fp += 24;

      // Mask Header
      if (!skipMask) {
        view = new DataView(input, fp, 16);
        data.mask = {};
        data.mask.numBlocksY = view.getUint32(0, true);
        data.mask.numBlocksX = view.getUint32(4, true);
        data.mask.numBytes = view.getUint32(8, true);
        data.mask.maxValue = view.getFloat32(12, true);
        fp += 16;

        // Mask Data
        if (data.mask.numBytes > 0) {
          var bitset = new Uint8Array(Math.ceil(data.width * data.height / 8));
          view = new DataView(input, fp, data.mask.numBytes);
          var cnt = view.getInt16(0, true);
          var ip = 2, op = 0;
          do {
            if (cnt > 0) {
              while (cnt--) { bitset[op++] = view.getUint8(ip++); }
            } else {
              var val = view.getUint8(ip++);
              cnt = -cnt;
              while (cnt--) { bitset[op++] = val; }
            }
            cnt = view.getInt16(ip, true);
            ip += 2;
          } while (ip < data.mask.numBytes);
          if ((cnt !== -32768) || (op < bitset.length)) {
            throw "Unexpected end of mask RLE encoding";
          }
          data.mask.bitset = bitset;
          fp += data.mask.numBytes;
        }
        else if ((data.mask.numBytes | data.mask.numBlocksY | data.mask.maxValue) === 0) {  // Special case, all nodata
          data.mask.bitset = new Uint8Array(Math.ceil(data.width * data.height / 8));
        }
      }

      // Pixel Header
      view = new DataView(input, fp, 16);
      data.pixels = {};
      data.pixels.numBlocksY = view.getUint32(0, true);
      data.pixels.numBlocksX = view.getUint32(4, true);
      data.pixels.numBytes = view.getUint32(8, true);
      data.pixels.maxValue = view.getFloat32(12, true);
      fp += 16;

      var numBlocksX = data.pixels.numBlocksX;
      var numBlocksY = data.pixels.numBlocksY;
      // the number of blocks specified in the header does not take into account the blocks at the end of
      // each row/column with a special width/height that make the image complete in case the width is not
      // evenly divisible by the number of blocks.
      var actualNumBlocksX = numBlocksX + ((data.width % numBlocksX) > 0 ? 1 : 0);
      var actualNumBlocksY = numBlocksY + ((data.height % numBlocksY) > 0 ? 1 : 0);
      data.pixels.blocks = new Array(actualNumBlocksX * actualNumBlocksY);
      var blockI = 0;
      for (var blockY = 0; blockY < actualNumBlocksY; blockY++) {
        for (var blockX = 0; blockX < actualNumBlocksX; blockX++) {

          // Block
          var size = 0;
          var bytesLeft = input.byteLength - fp;
          view = new DataView(input, fp, Math.min(10, bytesLeft));
          var block = {};
          data.pixels.blocks[blockI++] = block;
          var headerByte = view.getUint8(0); size++;
          block.encoding = headerByte & 63;
          if (block.encoding > 3) {
            throw "Invalid block encoding (" + block.encoding + ")";
          }
          if (block.encoding === 2) {
            fp++;
            continue;
          }
          if ((headerByte !== 0) && (headerByte !== 2)) {
            headerByte >>= 6;
            block.offsetType = headerByte;
            if (headerByte === 2) {
              block.offset = view.getInt8(1); size++;
            } else if (headerByte === 1) {
              block.offset = view.getInt16(1, true); size += 2;
            } else if (headerByte === 0) {
              block.offset = view.getFloat32(1, true); size += 4;
            } else {
              throw "Invalid block offset type";
            }

            if (block.encoding === 1) {
              headerByte = view.getUint8(size); size++;
              block.bitsPerPixel = headerByte & 63;
              headerByte >>= 6;
              block.numValidPixelsType = headerByte;
              if (headerByte === 2) {
                block.numValidPixels = view.getUint8(size); size++;
              } else if (headerByte === 1) {
                block.numValidPixels = view.getUint16(size, true); size += 2;
              } else if (headerByte === 0) {
                block.numValidPixels = view.getUint32(size, true); size += 4;
              } else {
                throw "Invalid valid pixel count type";
              }
            }
          }
          fp += size;

          if (block.encoding === 3) {
            continue;
          }

          var arrayBuf, store8;
          if (block.encoding === 0) {
            var numPixels = (data.pixels.numBytes - 1) / 4;
            if (numPixels !== Math.floor(numPixels)) {
              throw "uncompressed block has invalid length";
            }
            arrayBuf = new ArrayBuffer(numPixels * 4);
            store8 = new Uint8Array(arrayBuf);
            store8.set(new Uint8Array(input, fp, numPixels * 4));
            var rawData = new Float32Array(arrayBuf);
            block.rawData = rawData;
            fp += numPixels * 4;
          } else if (block.encoding === 1) {
            var dataBytes = Math.ceil(block.numValidPixels * block.bitsPerPixel / 8);
            var dataWords = Math.ceil(dataBytes / 4);
            arrayBuf = new ArrayBuffer(dataWords * 4);
            store8 = new Uint8Array(arrayBuf);
            store8.set(new Uint8Array(input, fp, dataBytes));
            block.stuffedData = new Uint32Array(arrayBuf);
            fp += dataBytes;
          }
        }
      }
      data.eofOffset = fp;
      return data;
    };

    var unstuff = function(src, bitsPerPixel, numPixels, offset, scale, dest, maxValue) {
      var bitMask = (1 << bitsPerPixel) - 1;
      var i = 0, o;
      var bitsLeft = 0;
      var n, buffer;
      var nmax = Math.ceil((maxValue - offset) / scale);
      // get rid of trailing bytes that are already part of next block
      var numInvalidTailBytes = src.length * 4 - Math.ceil(bitsPerPixel * numPixels / 8);
      src[src.length - 1] <<= 8 * numInvalidTailBytes;

      for (o = 0; o < numPixels; o++) {
        if (bitsLeft === 0) {
          buffer = src[i++];
          bitsLeft = 32;
        }
        if (bitsLeft >= bitsPerPixel) {
          n = (buffer >>> (bitsLeft - bitsPerPixel)) & bitMask;
          bitsLeft -= bitsPerPixel;
        } else {
          var missingBits = (bitsPerPixel - bitsLeft);
          n = ((buffer & bitMask) << missingBits) & bitMask;
          buffer = src[i++];
          bitsLeft = 32 - missingBits;
          n += (buffer >>> bitsLeft);
        }
        //pixel values may exceed max due to quantization
        dest[o] = n < nmax ? offset + n * scale : maxValue;
      }
      return dest;
    };

    return CntZImage;
  })();

  //version 2. Supports 2.1, 2.2, 2.3
  var Lerc2Decode = (function() {
    "use strict";
    // Note: currently, this module only has an implementation for decoding LERC data, not encoding. The name of
    // the class was chosen to be future proof, following LercDecode.

    /*****************************************
    * private static class bitsutffer used by Lerc2Decode
    *******************************************/
    var BitStuffer = {
      //methods ending with 2 are for the new byte order used by Lerc2.3 and above.
      //originalUnstuff is used to unpack Huffman code table. code is duplicated to unstuffx for performance reasons.
      unstuff: function(src, dest, bitsPerPixel, numPixels, lutArr, offset, scale, maxValue) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o;
        var bitsLeft = 0;
        var n, buffer, missingBits, nmax;

        // get rid of trailing bytes that are already part of next block
        var numInvalidTailBytes = src.length * 4 - Math.ceil(bitsPerPixel * numPixels / 8);
        src[src.length - 1] <<= 8 * numInvalidTailBytes;
        if (lutArr) {
          for (o = 0; o < numPixels; o++) {
            if (bitsLeft === 0) {
              buffer = src[i++];
              bitsLeft = 32;
            }
            if (bitsLeft >= bitsPerPixel) {
              n = (buffer >>> (bitsLeft - bitsPerPixel)) & bitMask;
              bitsLeft -= bitsPerPixel;
            }
            else {
              missingBits = (bitsPerPixel - bitsLeft);
              n = ((buffer & bitMask) << missingBits) & bitMask;
              buffer = src[i++];
              bitsLeft = 32 - missingBits;
              n += (buffer >>> bitsLeft);
            }
            dest[o] = lutArr[n];//offset + lutArr[n] * scale;
          }
        }
        else {
          nmax = Math.ceil((maxValue - offset) / scale);
          for (o = 0; o < numPixels; o++) {
            if (bitsLeft === 0) {
              buffer = src[i++];
              bitsLeft = 32;
            }
            if (bitsLeft >= bitsPerPixel) {
              n = (buffer >>> (bitsLeft - bitsPerPixel)) & bitMask;
              bitsLeft -= bitsPerPixel;
            }
            else {
              missingBits = (bitsPerPixel - bitsLeft);
              n = ((buffer & bitMask) << missingBits) & bitMask;
              buffer = src[i++];
              bitsLeft = 32 - missingBits;
              n += (buffer >>> bitsLeft);
            }
            //pixel values may exceed max due to quantization
            dest[o] = n < nmax ? offset + n * scale : maxValue;
          }
        }
      },

      unstuffLUT: function(src, bitsPerPixel, numPixels, offset, scale, maxValue) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o = 0, missingBits = 0, bitsLeft = 0, n = 0;
        var buffer;
        var dest = [];

        // get rid of trailing bytes that are already part of next block
        var numInvalidTailBytes = src.length * 4 - Math.ceil(bitsPerPixel * numPixels / 8);
        src[src.length - 1] <<= 8 * numInvalidTailBytes;

        var nmax = Math.ceil((maxValue - offset) / scale);
        for (o = 0; o < numPixels; o++) {
          if (bitsLeft === 0) {
            buffer = src[i++];
            bitsLeft = 32;
          }
          if (bitsLeft >= bitsPerPixel) {
            n = (buffer >>> (bitsLeft - bitsPerPixel)) & bitMask;
            bitsLeft -= bitsPerPixel;
          } else {
            missingBits = (bitsPerPixel - bitsLeft);
            n = ((buffer & bitMask) << missingBits) & bitMask;
            buffer = src[i++];
            bitsLeft = 32 - missingBits;
            n += (buffer >>> bitsLeft);
          }
          //dest.push(n);
          dest[o] = n < nmax ? offset + n * scale : maxValue;
        }
        dest.unshift(offset);//1st one
        return dest;
      },

      unstuff2: function(src, dest, bitsPerPixel, numPixels, lutArr, offset, scale, maxValue) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o;
        var bitsLeft = 0, bitPos = 0;
        var n, buffer, missingBits;
        if (lutArr) {
          for (o = 0; o < numPixels; o++) {
            if (bitsLeft === 0) {
              buffer = src[i++];
              bitsLeft = 32;
              bitPos = 0;
            }
            if (bitsLeft >= bitsPerPixel) {
              n = ((buffer >>> bitPos) & bitMask);
              bitsLeft -= bitsPerPixel;
              bitPos += bitsPerPixel;
            } else {
              missingBits = (bitsPerPixel - bitsLeft);
              n = (buffer >>> bitPos) & bitMask;
              buffer = src[i++];
              bitsLeft = 32 - missingBits;
              n |= (buffer & ((1 << missingBits) - 1)) << (bitsPerPixel - missingBits);
              bitPos = missingBits;
            }
            dest[o] = lutArr[n];
          }
        }
        else {
          var nmax = Math.ceil((maxValue - offset) / scale);
          for (o = 0; o < numPixels; o++) {
            if (bitsLeft === 0) {
              buffer = src[i++];
              bitsLeft = 32;
              bitPos = 0;
            }
            if (bitsLeft >= bitsPerPixel) {
              //no unsigned left shift
              n = ((buffer >>> bitPos) & bitMask);
              bitsLeft -= bitsPerPixel;
              bitPos += bitsPerPixel;
            } else {
              missingBits = (bitsPerPixel - bitsLeft);
              n = (buffer >>> bitPos) & bitMask;//((buffer & bitMask) << missingBits) & bitMask;
              buffer = src[i++];
              bitsLeft = 32 - missingBits;
              n |= (buffer & ((1 << missingBits) - 1)) << (bitsPerPixel - missingBits);
              bitPos = missingBits;
            }
            //pixel values may exceed max due to quantization
            dest[o] = n < nmax ? offset + n * scale : maxValue;
          }
        }
        return dest;
      },

      unstuffLUT2: function(src, bitsPerPixel, numPixels, offset, scale, maxValue) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o = 0, missingBits = 0, bitsLeft = 0, n = 0, bitPos = 0;
        var buffer;
        var dest = [];
        var nmax = Math.ceil((maxValue - offset) / scale);
        for (o = 0; o < numPixels; o++) {
          if (bitsLeft === 0) {
            buffer = src[i++];
            bitsLeft = 32;
            bitPos = 0;
          }
          if (bitsLeft >= bitsPerPixel) {
            //no unsigned left shift
            n = ((buffer >>> bitPos) & bitMask);
            bitsLeft -= bitsPerPixel;
            bitPos += bitsPerPixel;
          } else {
            missingBits = (bitsPerPixel - bitsLeft);
            n = (buffer >>> bitPos) & bitMask;//((buffer & bitMask) << missingBits) & bitMask;
            buffer = src[i++];
            bitsLeft = 32 - missingBits;
            n |= (buffer & ((1 << missingBits) - 1)) << (bitsPerPixel - missingBits);
            bitPos = missingBits;
          }
          //dest.push(n);
          dest[o] = n < nmax ? offset + n * scale : maxValue;
        }
        dest.unshift(offset);
        return dest;
      },

      originalUnstuff: function(src, dest, bitsPerPixel, numPixels) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o;
        var bitsLeft = 0;
        var n, buffer, missingBits;

        // get rid of trailing bytes that are already part of next block
        var numInvalidTailBytes = src.length * 4 - Math.ceil(bitsPerPixel * numPixels / 8);
        src[src.length - 1] <<= 8 * numInvalidTailBytes;

        for (o = 0; o < numPixels; o++) {
          if (bitsLeft === 0) {
            buffer = src[i++];
            bitsLeft = 32;
          }
          if (bitsLeft >= bitsPerPixel) {
            n = (buffer >>> (bitsLeft - bitsPerPixel)) & bitMask;
            bitsLeft -= bitsPerPixel;
          }
          else {
            missingBits = (bitsPerPixel - bitsLeft);
            n = ((buffer & bitMask) << missingBits) & bitMask;
            buffer = src[i++];
            bitsLeft = 32 - missingBits;
            n += (buffer >>> bitsLeft);
          }
          dest[o] = n;
        }
        return dest;
      },

      originalUnstuff2: function(src, dest, bitsPerPixel, numPixels) {
        var bitMask = (1 << bitsPerPixel) - 1;
        var i = 0, o;
        var bitsLeft = 0, bitPos = 0;
        var n, buffer, missingBits;
        //micro-optimizations
        for (o = 0; o < numPixels; o++) {
          if (bitsLeft === 0) {
            buffer = src[i++];
            bitsLeft = 32;
            bitPos = 0;
          }
          if (bitsLeft >= bitsPerPixel) {
            //no unsigned left shift
            n = ((buffer >>> bitPos) & bitMask);
            bitsLeft -= bitsPerPixel;
            bitPos += bitsPerPixel;
          } else {
            missingBits = (bitsPerPixel - bitsLeft);
            n = (buffer >>> bitPos) & bitMask;//((buffer & bitMask) << missingBits) & bitMask;
            buffer = src[i++];
            bitsLeft = 32 - missingBits;
            n |= (buffer & ((1 << missingBits) - 1)) << (bitsPerPixel - missingBits);
            bitPos = missingBits;
          }
          dest[o] = n;
        }
        return dest;
      }
    };

    /*****************************************
    *private static class used by Lerc2Decode
    ******************************************/
    var Lerc2Helpers = {
      HUFFMAN_LUT_BITS_MAX: 12, //use 2^12 lut, treat it like constant
      computeChecksumFletcher32: function(input) {

        var sum1 = 0xffff, sum2 = 0xffff;
        var len = input.length;
        var words = Math.floor(len / 2);
        var i = 0;
        while (words) {
          var tlen = (words >= 359) ? 359 : words;
          words -= tlen;
          do {
            sum1 += (input[i++] << 8);
            sum2 += sum1 += input[i++];
          } while (--tlen);

          sum1 = (sum1 & 0xffff) + (sum1 >>> 16);
          sum2 = (sum2 & 0xffff) + (sum2 >>> 16);
        }

        // add the straggler byte if it exists
        if (len & 1) {
          sum2 += sum1 += (input[i] << 8);
        }
        // second reduction step to reduce sums to 16 bits
        sum1 = (sum1 & 0xffff) + (sum1 >>> 16);
        sum2 = (sum2 & 0xffff) + (sum2 >>> 16);

        return (sum2 << 16 | sum1) >>> 0;
      },

      readHeaderInfo: function(input, data) {
        var ptr = data.ptr;
        var fileIdView = new Uint8Array(input, ptr, 6);
        var headerInfo = {};
        headerInfo.fileIdentifierString = String.fromCharCode.apply(null, fileIdView);
        if (headerInfo.fileIdentifierString.lastIndexOf("Lerc2", 0) !== 0) {
          throw "Unexpected file identifier string (expect Lerc2 ): " + headerInfo.fileIdentifierString;
        }
        ptr += 6;
        var view = new DataView(input, ptr, 8);
        var fileVersion = view.getInt32(0, true);
        headerInfo.fileVersion = fileVersion;
        ptr += 4;
        if (fileVersion >= 3) {
          headerInfo.checksum = view.getUint32(4, true); //nrows
          ptr += 4;
        }

        //keys start from here
        view = new DataView(input, ptr, 12);
        headerInfo.height = view.getUint32(0, true); //nrows
        headerInfo.width = view.getUint32(4, true); //ncols
        ptr += 8;
        if (fileVersion >= 4) {
          headerInfo.numDims = view.getUint32(8, true);
          ptr += 4;
        }
        else {
          headerInfo.numDims = 1;
        }

        view = new DataView(input, ptr, 40);
        headerInfo.numValidPixel = view.getUint32(0, true);
        headerInfo.microBlockSize = view.getInt32(4, true);
        headerInfo.blobSize = view.getInt32(8, true);
        headerInfo.imageType = view.getInt32(12, true);

        headerInfo.maxZError = view.getFloat64(16, true);
        headerInfo.zMin = view.getFloat64(24, true);
        headerInfo.zMax = view.getFloat64(32, true);
        ptr += 40;
        data.headerInfo = headerInfo;
        data.ptr = ptr;

        var checksum, keyLength;
        if (fileVersion >= 3) {
          keyLength = fileVersion >= 4 ? 52 : 48;
          checksum = this.computeChecksumFletcher32(new Uint8Array(input, ptr - keyLength, headerInfo.blobSize - 14));
          if (checksum !== headerInfo.checksum) {
            throw "Checksum failed.";
          }
        }
        return true;
      },

      checkMinMaxRanges: function(input, data) {
        var headerInfo = data.headerInfo;
        var OutPixelTypeArray = this.getDataTypeArray(headerInfo.imageType);
        var rangeBytes = headerInfo.numDims * this.getDataTypeSize(headerInfo.imageType);
        var minValues = this.readSubArray(input, data.ptr, OutPixelTypeArray, rangeBytes);
        var maxValues = this.readSubArray(input, data.ptr + rangeBytes, OutPixelTypeArray, rangeBytes);
        data.ptr += (2 * rangeBytes);
        var i, equal = true;
        for (i = 0; i < headerInfo.numDims; i++) {
          if (minValues[i] !== maxValues[i]) {
            equal = false;
            break;
          }
        }
        headerInfo.minValues = minValues;
        headerInfo.maxValues = maxValues;
        return equal;
      },

      readSubArray: function(input, ptr, OutPixelTypeArray, numBytes) {
        var rawData;
        if (OutPixelTypeArray === Uint8Array) {
          rawData = new Uint8Array(input, ptr, numBytes);
        }
        else {
          var arrayBuf = new ArrayBuffer(numBytes);
          var store8 = new Uint8Array(arrayBuf);
          store8.set(new Uint8Array(input, ptr, numBytes));
          rawData = new OutPixelTypeArray(arrayBuf);
        }
        return rawData;
      },

      readMask: function(input, data) {
        var ptr = data.ptr;
        var headerInfo = data.headerInfo;
        var numPixels = headerInfo.width * headerInfo.height;
        var numValidPixel = headerInfo.numValidPixel;

        var view = new DataView(input, ptr, 4);
        var mask = {};
        mask.numBytes = view.getUint32(0, true);
        ptr += 4;

        // Mask Data
        if ((0 === numValidPixel || numPixels === numValidPixel) && 0 !== mask.numBytes) {
          throw ("invalid mask");
        }
        var bitset, resultMask;
        if (numValidPixel === 0) {
          bitset = new Uint8Array(Math.ceil(numPixels / 8));
          mask.bitset = bitset;
          resultMask = new Uint8Array(numPixels);
          data.pixels.resultMask = resultMask;
          ptr += mask.numBytes;
        }// ????? else if (data.mask.numBytes > 0 && data.mask.numBytes< data.numValidPixel) {
        else if (mask.numBytes > 0) {
          bitset = new Uint8Array(Math.ceil(numPixels / 8));
          view = new DataView(input, ptr, mask.numBytes);
          var cnt = view.getInt16(0, true);
          var ip = 2, op = 0, val = 0;
          do {
            if (cnt > 0) {
              while (cnt--) { bitset[op++] = view.getUint8(ip++); }
            } else {
              val = view.getUint8(ip++);
              cnt = -cnt;
              while (cnt--) { bitset[op++] = val; }
            }
            cnt = view.getInt16(ip, true);
            ip += 2;
          } while (ip < mask.numBytes);
          if ((cnt !== -32768) || (op < bitset.length)) {
            throw "Unexpected end of mask RLE encoding";
          }

          resultMask = new Uint8Array(numPixels);
          var mb = 0, k = 0;

          for (k = 0; k < numPixels; k++) {
            if (k & 7) {
              mb = bitset[k >> 3];
              mb <<= k & 7;
            }
            else {
              mb = bitset[k >> 3];
            }
            if (mb & 128) {
              resultMask[k] = 1;
            }
          }
          data.pixels.resultMask = resultMask;

          mask.bitset = bitset;
          ptr += mask.numBytes;
        }
        data.ptr = ptr;
        data.mask = mask;
        return true;
      },

      readDataOneSweep: function(input, data, OutPixelTypeArray, useBSQForOutputDim) {
        var ptr = data.ptr;
        var headerInfo = data.headerInfo;
        var numDims = headerInfo.numDims;
        var numPixels = headerInfo.width * headerInfo.height;
        var imageType = headerInfo.imageType;
        var numBytes = headerInfo.numValidPixel * Lerc2Helpers.getDataTypeSize(imageType) * numDims;
        //data.pixels.numBytes = numBytes;
        var rawData;
        var mask = data.pixels.resultMask;
        if (OutPixelTypeArray === Uint8Array) {
          rawData = new Uint8Array(input, ptr, numBytes);
        }
        else {
          var arrayBuf = new ArrayBuffer(numBytes);
          var store8 = new Uint8Array(arrayBuf);
          store8.set(new Uint8Array(input, ptr, numBytes));
          rawData = new OutPixelTypeArray(arrayBuf);
        }
        if (rawData.length === numPixels * numDims) {
          if (useBSQForOutputDim) {
            data.pixels.resultPixels = Lerc2Helpers.swapDimensionOrder(rawData, numPixels, numDims, OutPixelTypeArray, true);
          }
          else {
            data.pixels.resultPixels = rawData;
          }
        }
        else  //mask
        {
          data.pixels.resultPixels = new OutPixelTypeArray(numPixels * numDims);
          var z = 0, k = 0, i = 0, nStart = 0;
          if (numDims > 1) {
            if (useBSQForOutputDim) {
              for (k = 0; k < numPixels; k++) {
                if (mask[k]) {
                  nStart = k;
                  for (i = 0; i < numDims; i++, nStart+=numPixels) {
                    data.pixels.resultPixels[nStart] = rawData[z++];
                  }
                }
              }
            }
            else {
              for (k = 0; k < numPixels; k++) {
                if (mask[k]) {
                  nStart = k * numDims;
                  for (i = 0; i < numDims; i++) {
                    data.pixels.resultPixels[nStart + i] = rawData[z++];
                  }
                }
              }
            }
          }
          else {
            for (k = 0; k < numPixels; k++) {
              if (mask[k]) {
                data.pixels.resultPixels[k] = rawData[z++];
              }
            }
          }
        }
        ptr += numBytes;
        data.ptr = ptr;       //return data;
        return true;
      },

      readHuffmanTree: function(input, data) {
        var BITS_MAX = this.HUFFMAN_LUT_BITS_MAX; //8 is slow for the large test image
        //var size_max = 1 << BITS_MAX;
        /* ************************
        * reading code table
        *************************/
        var view = new DataView(input, data.ptr, 16);
        data.ptr += 16;
        var version = view.getInt32(0, true);
        if (version < 2) {
          throw "unsupported Huffman version";
        }
        var size = view.getInt32(4, true);
        var i0 = view.getInt32(8, true);
        var i1 = view.getInt32(12, true);
        if (i0 >= i1) {
          return false;
        }
        var blockDataBuffer = new Uint32Array(i1 - i0);
        Lerc2Helpers.decodeBits(input, data, blockDataBuffer);
        var codeTable = []; //size
        var i, j, k, len;

        for (i = i0; i < i1; i++) {
          j = i - (i < size ? 0 : size);//wrap around
          codeTable[j] = { first: blockDataBuffer[i - i0], second: null };
        }

        var dataBytes = input.byteLength - data.ptr;
        var dataWords = Math.ceil(dataBytes / 4);
        var arrayBuf = new ArrayBuffer(dataWords * 4);
        var store8 = new Uint8Array(arrayBuf);
        store8.set(new Uint8Array(input, data.ptr, dataBytes));
        var stuffedData = new Uint32Array(arrayBuf); //must start from x*4
        var bitPos = 0, word, srcPtr = 0;
        word = stuffedData[0];
        for (i = i0; i < i1; i++) {
          j = i - (i < size ? 0 : size);//wrap around
          len = codeTable[j].first;
          if (len > 0) {
            codeTable[j].second = (word << bitPos) >>> (32 - len);

            if (32 - bitPos >= len) {
              bitPos += len;
              if (bitPos === 32) {
                bitPos = 0;
                srcPtr++;
                word = stuffedData[srcPtr];
              }
            }
            else {
              bitPos += len - 32;
              srcPtr++;
              word = stuffedData[srcPtr];
              codeTable[j].second |= word >>> (32 - bitPos);
            }
          }
        }

        //finished reading code table

        /* ************************
        * building lut
        *************************/
        var numBitsLUT = 0, numBitsLUTQick = 0;
        var tree = new TreeNode();
        for (i = 0; i < codeTable.length; i++) {
          if (codeTable[i] !== undefined) {
            numBitsLUT = Math.max(numBitsLUT, codeTable[i].first);
          }
        }
        if (numBitsLUT >= BITS_MAX) {
          numBitsLUTQick = BITS_MAX;
        }
        else {
          numBitsLUTQick = numBitsLUT;
        }
        // for debugging purpose
        // if (numBitsLUT >= 30) {
        //   console.log("WARning, large NUM LUT BITS IS " + numBitsLUT);
        // }
        var decodeLut = [], entry, code, numEntries, jj, currentBit, node;
        for (i = i0; i < i1; i++) {
          j = i - (i < size ? 0 : size);//wrap around
          len = codeTable[j].first;
          if (len > 0) {
            entry = [len, j];
            if (len <= numBitsLUTQick) {
              code = codeTable[j].second << (numBitsLUTQick - len);
              numEntries = 1 << (numBitsLUTQick - len);
              for (k = 0; k < numEntries; k++) {
                decodeLut[code | k] = entry;
              }
            }
            else {
              //build tree
              code = codeTable[j].second;
              node = tree;
              for (jj = len - 1; jj >= 0; jj--) {
                currentBit = code >>> jj & 1; //no left shift as length could be 30,31
                if (currentBit) {
                  if (!node.right) {
                    node.right = new TreeNode();
                  }
                  node = node.right;
                }
                else {
                  if (!node.left) {
                    node.left = new TreeNode();
                  }
                  node = node.left;
                }
                if (jj === 0 && !node.val) {
                  node.val = entry[1];
                }
              }
            }
          }
        }
        return {
          decodeLut: decodeLut,
          numBitsLUTQick: numBitsLUTQick,
          numBitsLUT: numBitsLUT,
          tree: tree,
          stuffedData: stuffedData,
          srcPtr: srcPtr,
          bitPos: bitPos
        };
      },

      readHuffman: function(input, data, OutPixelTypeArray, useBSQForOutputDim) {
        var headerInfo = data.headerInfo;
        var numDims = headerInfo.numDims;
        var height = data.headerInfo.height;
        var width = data.headerInfo.width;
        var numPixels = width * height;
        //var size_max = 1 << BITS_MAX;
        /* ************************
        * reading huffman structure info
        *************************/
        var huffmanInfo = this.readHuffmanTree(input, data);
        var decodeLut = huffmanInfo.decodeLut;
        var tree = huffmanInfo.tree;
        //stuffedData includes huffman headers
        var stuffedData = huffmanInfo.stuffedData;
        var srcPtr = huffmanInfo.srcPtr;
        var bitPos = huffmanInfo.bitPos;
        var numBitsLUTQick = huffmanInfo.numBitsLUTQick;
        var numBitsLUT = huffmanInfo.numBitsLUT;
        var offset = data.headerInfo.imageType === 0 ? 128 : 0;
        /*************************
        *  decode
        ***************************/
        var node, val, delta, mask = data.pixels.resultMask, valTmp, valTmpQuick, currentBit;
        var i, j, k, ii;
        var prevVal = 0;
        if (bitPos > 0) {
          srcPtr++;
          bitPos = 0;
        }
        var word = stuffedData[srcPtr];
        var deltaEncode = data.encodeMode === 1;
        var resultPixelsAllDim = new OutPixelTypeArray(numPixels * numDims);
        var resultPixels = resultPixelsAllDim;
        var iDim;
        // TODO: reevaluate the need to keep inlined decoding code as IE support is phasing out
        if (numDims < 2 || deltaEncode) {
          for (iDim = 0; iDim < numDims; iDim++) {
            if (numDims > 1) {
              //get the mem block of current dimension
              resultPixels = new OutPixelTypeArray(resultPixelsAllDim.buffer, numPixels * iDim, numPixels);
              prevVal = 0;
            }
            if (data.headerInfo.numValidPixel === width * height) { //all valid
              for (k = 0, i = 0; i < height; i++) {
                for (j = 0; j < width; j++, k++) {
                  val = 0;
                  valTmp = (word << bitPos) >>> (32 - numBitsLUTQick);
                  valTmpQuick = valTmp;// >>> deltaBits;
                  if (32 - bitPos < numBitsLUTQick) {
                    valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUTQick));
                    valTmpQuick = valTmp;// >>> deltaBits;
                  }
                  if (decodeLut[valTmpQuick])    // if there, move the correct number of bits and done
                  {
                    val = decodeLut[valTmpQuick][1];
                    bitPos += decodeLut[valTmpQuick][0];
                  }
                  else {
                    valTmp = (word << bitPos) >>> (32 - numBitsLUT);
                    valTmpQuick = valTmp;// >>> deltaBits;
                    if (32 - bitPos < numBitsLUT) {
                      valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUT));
                      valTmpQuick = valTmp;// >>> deltaBits;
                    }
                    node = tree;
                    for (ii = 0; ii < numBitsLUT; ii++) {
                      currentBit = valTmp >>> (numBitsLUT - ii - 1) & 1;
                      node = currentBit ? node.right : node.left;
                      if (!(node.left || node.right)) {
                        val = node.val;
                        bitPos = bitPos + ii + 1;
                        break;
                      }
                    }
                  }
    
                  if (bitPos >= 32) {
                    bitPos -= 32;
                    srcPtr++;
                    word = stuffedData[srcPtr];
                  }
    
                  delta = val - offset;
                  if (deltaEncode) {
                    if (j > 0) {
                      delta += prevVal;    // use overflow
                    }
                    else if (i > 0) {
                      delta += resultPixels[k - width];
                    }
                    else {
                      delta += prevVal;
                    }
                    delta &= 0xFF; //overflow
                    resultPixels[k] = delta;//overflow
                    prevVal = delta;
                  }
                  else {
                    resultPixels[k] = delta;
                  }
                }
              }
            }
            else { //not all valid, use mask
              for (k = 0, i = 0; i < height; i++) {
                for (j = 0; j < width; j++, k++) {
                  if (mask[k]) {
                    val = 0;
                    valTmp = (word << bitPos) >>> (32 - numBitsLUTQick);
                    valTmpQuick = valTmp;// >>> deltaBits;
                    if (32 - bitPos < numBitsLUTQick) {
                      valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUTQick));
                      valTmpQuick = valTmp;// >>> deltaBits;
                    }
                    if (decodeLut[valTmpQuick])    // if there, move the correct number of bits and done
                    {
                      val = decodeLut[valTmpQuick][1];
                      bitPos += decodeLut[valTmpQuick][0];
                    }
                    else {
                      valTmp = (word << bitPos) >>> (32 - numBitsLUT);
                      valTmpQuick = valTmp;// >>> deltaBits;
                      if (32 - bitPos < numBitsLUT) {
                        valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUT));
                        valTmpQuick = valTmp;// >>> deltaBits;
                      }
                      node = tree;
                      for (ii = 0; ii < numBitsLUT; ii++) {
                        currentBit = valTmp >>> (numBitsLUT - ii - 1) & 1;
                        node = currentBit ? node.right : node.left;
                        if (!(node.left || node.right)) {
                          val = node.val;
                          bitPos = bitPos + ii + 1;
                          break;
                        }
                      }
                    }
    
                    if (bitPos >= 32) {
                      bitPos -= 32;
                      srcPtr++;
                      word = stuffedData[srcPtr];
                    }
    
                    delta = val - offset;
                    if (deltaEncode) {
                      if (j > 0 && mask[k - 1]) {
                        delta += prevVal;    // use overflow
                      }
                      else if (i > 0 && mask[k - width]) {
                        delta += resultPixels[k - width];
                      }
                      else {
                        delta += prevVal;
                      }
    
                      delta &= 0xFF; //overflow
                      resultPixels[k] = delta;//overflow
                      prevVal = delta;
                    }
                    else {
                      resultPixels[k] = delta;
                    }
                  }
                }
              }
            }
          }
        }
        else {
          for (k = 0, i = 0; i < height; i++) {
            for (j = 0; j < width; j++) {
              k = i * width + j;
              if (!mask || mask[k]) {
                for (iDim = 0; iDim < numDims; iDim++, k+=numPixels) {
                  val = 0;
                  valTmp = (word << bitPos) >>> (32 - numBitsLUTQick);
                  valTmpQuick = valTmp;
                  if (32 - bitPos < numBitsLUTQick) {
                    valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUTQick));
                    valTmpQuick = valTmp;
                  }
                  if (decodeLut[valTmpQuick])
                  {
                    val = decodeLut[valTmpQuick][1];
                    bitPos += decodeLut[valTmpQuick][0];
                  }
                  else {
                    valTmp = (word << bitPos) >>> (32 - numBitsLUT);
                    valTmpQuick = valTmp;
                    if (32 - bitPos < numBitsLUT) {
                      valTmp |= ((stuffedData[srcPtr + 1]) >>> (64 - bitPos - numBitsLUT));
                      valTmpQuick = valTmp;
                    }
                    node = tree;
                    for (ii = 0; ii < numBitsLUT; ii++) {
                      currentBit = valTmp >>> (numBitsLUT - ii - 1) & 1;
                      node = currentBit ? node.right : node.left;
                      if (!(node.left || node.right)) {
                        val = node.val;
                        bitPos = bitPos + ii + 1;
                        break;
                      }
                    }
                  }

                  if (bitPos >= 32) {
                    bitPos -= 32;
                    srcPtr++;
                    word = stuffedData[srcPtr];
                  }

                  delta = val - offset;
                  resultPixels[k] = delta;
                }
              }
            }
          }
        }
        data.ptr = data.ptr + (srcPtr + 1) * 4 + (bitPos > 0 ? 4 : 0);
        data.pixels.resultPixels = resultPixelsAllDim;
        //swap for BIP layout
        if (numDims > 1 && !useBSQForOutputDim) {
          data.pixels.resultPixels = Lerc2Helpers.swapDimensionOrder(resultPixelsAllDim, numPixels, numDims, OutPixelTypeArray);
        }
      },

      decodeBits: function(input, data, blockDataBuffer, offset, iDim) {
        {
          //bitstuff encoding is 3
          var headerInfo = data.headerInfo;
          var fileVersion = headerInfo.fileVersion;
          //var block = {};
          var blockPtr = 0;
          var viewByteLength = ((input.byteLength - data.ptr) >= 5) ? 5 : (input.byteLength - data.ptr);
          var view = new DataView(input, data.ptr, viewByteLength);
          var headerByte = view.getUint8(0);
          blockPtr++;
          var bits67 = headerByte >> 6;
          var n = (bits67 === 0) ? 4 : 3 - bits67;
          var doLut = (headerByte & 32) > 0 ? true : false;//5th bit
          var numBits = headerByte & 31;
          var numElements = 0;
          if (n === 1) {
            numElements = view.getUint8(blockPtr); blockPtr++;
          } else if (n === 2) {
            numElements = view.getUint16(blockPtr, true); blockPtr += 2;
          } else if (n === 4) {
            numElements = view.getUint32(blockPtr, true); blockPtr += 4;
          } else {
            throw "Invalid valid pixel count type";
          }
          //fix: huffman codes are bit stuffed, but not bound by data's max value, so need to use originalUnstuff
          //offset = offset || 0;
          var scale = 2 * headerInfo.maxZError;
          var stuffedData, arrayBuf, store8, dataBytes, dataWords;
          var lutArr, lutData, lutBytes, lutBitsPerElement, bitsPerPixel;
          var zMax = headerInfo.numDims > 1 ? headerInfo.maxValues[iDim] : headerInfo.zMax;
          if (doLut) {
            data.counter.lut++;
            lutBytes = view.getUint8(blockPtr);
            lutBitsPerElement = numBits;
            blockPtr++;
            dataBytes = Math.ceil((lutBytes - 1) * numBits / 8);
            dataWords = Math.ceil(dataBytes / 4);
            arrayBuf = new ArrayBuffer(dataWords * 4);
            store8 = new Uint8Array(arrayBuf);

            data.ptr += blockPtr;
            store8.set(new Uint8Array(input, data.ptr, dataBytes));

            lutData = new Uint32Array(arrayBuf);
            data.ptr += dataBytes;

            bitsPerPixel = 0;
            while ((lutBytes - 1) >>> bitsPerPixel) {
              bitsPerPixel++;
            }
            dataBytes = Math.ceil(numElements * bitsPerPixel / 8);
            dataWords = Math.ceil(dataBytes / 4);
            arrayBuf = new ArrayBuffer(dataWords * 4);
            store8 = new Uint8Array(arrayBuf);
            store8.set(new Uint8Array(input, data.ptr, dataBytes));
            stuffedData = new Uint32Array(arrayBuf);
            data.ptr += dataBytes;
            if (fileVersion >= 3) {
              lutArr = BitStuffer.unstuffLUT2(lutData, numBits, lutBytes - 1, offset, scale, zMax);
            }
            else {
              lutArr = BitStuffer.unstuffLUT(lutData, numBits, lutBytes - 1, offset, scale, zMax);
            }
            //lutArr.unshift(0);
            if (fileVersion >= 3) {
              //BitStuffer.unstuff2(block, blockDataBuffer, headerInfo.zMax);
              BitStuffer.unstuff2(stuffedData, blockDataBuffer, bitsPerPixel, numElements, lutArr);
            }
            else {
              BitStuffer.unstuff(stuffedData, blockDataBuffer, bitsPerPixel, numElements, lutArr);
            }
          }
          else {
            //console.debug("bitstuffer");
            data.counter.bitstuffer++;
            bitsPerPixel = numBits;
            data.ptr += blockPtr;
            if (bitsPerPixel > 0) {
              dataBytes = Math.ceil(numElements * bitsPerPixel / 8);
              dataWords = Math.ceil(dataBytes / 4);
              arrayBuf = new ArrayBuffer(dataWords * 4);
              store8 = new Uint8Array(arrayBuf);
              store8.set(new Uint8Array(input, data.ptr, dataBytes));
              stuffedData = new Uint32Array(arrayBuf);
              data.ptr += dataBytes;
              if (fileVersion >= 3) {
                if (offset == null) {
                  BitStuffer.originalUnstuff2(stuffedData, blockDataBuffer, bitsPerPixel, numElements);
                }
                else {
                  BitStuffer.unstuff2(stuffedData, blockDataBuffer, bitsPerPixel, numElements, false, offset, scale, zMax);
                }
              }
              else {
                if (offset == null) {
                  BitStuffer.originalUnstuff(stuffedData, blockDataBuffer, bitsPerPixel, numElements);
                }
                else {
                  BitStuffer.unstuff(stuffedData, blockDataBuffer, bitsPerPixel, numElements, false, offset, scale, zMax);
                }
              }
            }
          }
        }

      },

      readTiles: function(input, data, OutPixelTypeArray, useBSQForOutputDim) {
        var headerInfo = data.headerInfo;
        var width = headerInfo.width;
        var height = headerInfo.height;
        var numPixels = width * height;
        var microBlockSize = headerInfo.microBlockSize;
        var imageType = headerInfo.imageType;
        var dataTypeSize = Lerc2Helpers.getDataTypeSize(imageType);
        var numBlocksX = Math.ceil(width / microBlockSize);
        var numBlocksY = Math.ceil(height / microBlockSize);
        data.pixels.numBlocksY = numBlocksY;
        data.pixels.numBlocksX = numBlocksX;
        data.pixels.ptr = 0;
        var row = 0, col = 0, blockY = 0, blockX = 0, thisBlockHeight = 0, thisBlockWidth = 0, bytesLeft = 0, headerByte = 0, bits67 = 0, testCode = 0, outPtr = 0, outStride = 0, numBytes = 0, bytesleft = 0, z = 0, blockPtr = 0;
        var view, block, arrayBuf, store8, rawData;
        var blockEncoding;
        var blockDataBuffer = new OutPixelTypeArray(microBlockSize * microBlockSize);
        var lastBlockHeight = (height % microBlockSize) || microBlockSize;
        var lastBlockWidth = (width % microBlockSize) || microBlockSize;
        var offsetType, offset;
        var numDims = headerInfo.numDims, iDim;
        var mask = data.pixels.resultMask;
        var resultPixels = data.pixels.resultPixels;
        var fileVersion = headerInfo.fileVersion;
        var fileVersionCheckNum = fileVersion >= 5 ? 14 : 15;
        var isDiffEncoding;
        var zMax = headerInfo.zMax;
        //var resultPixelsAllDim = resultPixels;
        var resultPixelsPrevDim;
        for (blockY = 0; blockY < numBlocksY; blockY++) {
          thisBlockHeight = (blockY !== numBlocksY - 1) ? microBlockSize : lastBlockHeight;
          for (blockX = 0; blockX < numBlocksX; blockX++) {
            //console.debug("y" + blockY + " x" + blockX);
            thisBlockWidth = (blockX !== numBlocksX - 1) ? microBlockSize : lastBlockWidth;

            outPtr = blockY * width * microBlockSize + blockX * microBlockSize;
            outStride = width - thisBlockWidth;

            for (iDim = 0; iDim < numDims; iDim++) {
              if (numDims > 1) {
                resultPixelsPrevDim = resultPixels;
                outPtr = blockY * width * microBlockSize + blockX * microBlockSize;
                resultPixels = new OutPixelTypeArray(data.pixels.resultPixels.buffer, numPixels * iDim * dataTypeSize, numPixels);
                zMax = headerInfo.maxValues[iDim];
              } else {
                resultPixelsPrevDim = null;
              }
              bytesLeft = input.byteLength - data.ptr;
              view = new DataView(input, data.ptr, Math.min(10, bytesLeft));
              block = {};
              blockPtr = 0;
              headerByte = view.getUint8(0);
              blockPtr++;
              isDiffEncoding = headerInfo.fileVersion >= 5 ? headerByte & 4 : 0;
              bits67 = (headerByte >> 6) & 0xFF;
              testCode = (headerByte >> 2) & fileVersionCheckNum;    // use bits 2345 for integrity check
              if (testCode !== (((blockX * microBlockSize) >> 3) & fileVersionCheckNum)) {
                throw "integrity issue";
              }

              if (isDiffEncoding && iDim === 0) {
                throw "integrity issue";
              }

              blockEncoding = headerByte & 3;
              if (blockEncoding > 3) {
                data.ptr += blockPtr;
                throw "Invalid block encoding (" + blockEncoding + ")";
              }
              else if (blockEncoding === 2) { //constant 0
                if (isDiffEncoding) {
                  if (mask) {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        if (mask[outPtr]) {
                          resultPixels[outPtr] = resultPixelsPrevDim[outPtr];
                        }
                        outPtr++;
                      }
                    }
                  }
                  else {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        resultPixels[outPtr] = resultPixelsPrevDim[outPtr];
                        outPtr++;
                      }
                    }
                  }
                }
                data.counter.constant++;
                data.ptr += blockPtr;
                continue;
              }
              else if (blockEncoding === 0) {  //uncompressed
                if (isDiffEncoding) {
                  // doesn't make sense, should not happen
                  throw "integrity issue";
                }
                data.counter.uncompressed++;
                data.ptr += blockPtr;
                numBytes = thisBlockHeight * thisBlockWidth * dataTypeSize;
                bytesleft = input.byteLength - data.ptr;
                numBytes = numBytes < bytesleft ? numBytes : bytesleft;
                //bit alignment
                arrayBuf = new ArrayBuffer((numBytes % dataTypeSize) === 0 ? numBytes : (numBytes + dataTypeSize - numBytes % dataTypeSize));
                store8 = new Uint8Array(arrayBuf);
                store8.set(new Uint8Array(input, data.ptr, numBytes));
                rawData = new OutPixelTypeArray(arrayBuf);
                z = 0;
                if (mask) {
                  for (row = 0; row < thisBlockHeight; row++) {
                    for (col = 0; col < thisBlockWidth; col++) {
                      if (mask[outPtr]) {
                        resultPixels[outPtr] = rawData[z++];
                      }
                      outPtr++;
                    }
                    outPtr += outStride;
                  }
                }
                else {//all valid
                  for (row = 0; row < thisBlockHeight; row++) {
                    for (col = 0; col < thisBlockWidth; col++) {
                      resultPixels[outPtr++] = rawData[z++];
                    }
                    outPtr += outStride;
                  }
                }
                data.ptr += z * dataTypeSize;
              }
              else { //1 or 3
                offsetType = Lerc2Helpers.getDataTypeUsed((isDiffEncoding && imageType < 6) ? 4 : imageType, bits67);
                offset = Lerc2Helpers.getOnePixel(block, blockPtr, offsetType, view);
                blockPtr += Lerc2Helpers.getDataTypeSize(offsetType);
                if (blockEncoding === 3) //constant offset value
                {
                  data.ptr += blockPtr;
                  data.counter.constantoffset++;
                  //you can delete the following resultMask case in favor of performance because val is constant and users use nodata mask, otherwise nodatavalue post processing handles it too.
                  //while the above statement is true, we're not doing it as we want to keep invalid pixel value at 0 rather than arbitrary values
                  if (mask) {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        if (mask[outPtr]) {
                          resultPixels[outPtr] = isDiffEncoding ? Math.min(zMax, resultPixelsPrevDim[outPtr] + offset) : offset;
                        }
                        outPtr++;
                      }
                      outPtr += outStride;
                    }
                  }
                  else {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        resultPixels[outPtr] = isDiffEncoding ? Math.min(zMax, resultPixelsPrevDim[outPtr] + offset) : offset;
                        outPtr++;
                      }
                      outPtr += outStride;
                    }
                  }
                }
                else { //bitstuff encoding is 3
                  data.ptr += blockPtr;
                  //heavy lifting
                  Lerc2Helpers.decodeBits(input, data, blockDataBuffer, offset, iDim);
                  blockPtr = 0;
                  // duplicate code to favor performance, diff encoding is for multidimension only
                  if (isDiffEncoding) {
                    if (mask) {
                      for (row = 0; row < thisBlockHeight; row++) {
                        for (col = 0; col < thisBlockWidth; col++) {
                          if (mask[outPtr]) {
                            resultPixels[outPtr] = blockDataBuffer[blockPtr++] + resultPixelsPrevDim[outPtr];
                          }
                          outPtr++;
                        }
                        outPtr += outStride;
                      }
                    }
                    else {
                      for (row = 0; row < thisBlockHeight; row++) {
                        for (col = 0; col < thisBlockWidth; col++) {
                          resultPixels[outPtr] = blockDataBuffer[blockPtr++] + resultPixelsPrevDim[outPtr];
                          outPtr++;
                        }
                        outPtr += outStride;
                      }
                    }
                  }
                  else if (mask) {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        if (mask[outPtr]) {
                          resultPixels[outPtr] = blockDataBuffer[blockPtr++];
                        }
                        outPtr++;
                      }
                      outPtr += outStride;
                    }
                  }
                  else {
                    for (row = 0; row < thisBlockHeight; row++) {
                      for (col = 0; col < thisBlockWidth; col++) {
                        resultPixels[outPtr++] = blockDataBuffer[blockPtr++];
                      }
                      outPtr += outStride;
                    }
                  }
                }
              }
            }
          }
        }
        //swap for BIP: it's always easier for clients to handle BSQ so we keep existing logic and introduce a swap here to minimze changes
        if (numDims > 1 && !useBSQForOutputDim) {
          data.pixels.resultPixels = Lerc2Helpers.swapDimensionOrder(data.pixels.resultPixels, numPixels, numDims, OutPixelTypeArray);
        }
      },

      /*****************
      *  private methods (helper methods)
      *****************/

      formatFileInfo: function(data) {
        return {
          "fileIdentifierString": data.headerInfo.fileIdentifierString,
          "fileVersion": data.headerInfo.fileVersion,
          "imageType": data.headerInfo.imageType,
          "height": data.headerInfo.height,
          "width": data.headerInfo.width,
          "numValidPixel": data.headerInfo.numValidPixel,
          "microBlockSize": data.headerInfo.microBlockSize,
          "blobSize": data.headerInfo.blobSize,
          "maxZError": data.headerInfo.maxZError,
          "pixelType": Lerc2Helpers.getPixelType(data.headerInfo.imageType),
          "eofOffset": data.eofOffset,
          "mask": data.mask ? {
            "numBytes": data.mask.numBytes
          } : null,
          "pixels": {
            "numBlocksX": data.pixels.numBlocksX,
            "numBlocksY": data.pixels.numBlocksY,
            //"numBytes": data.pixels.numBytes,
            "maxValue": data.headerInfo.zMax,
            "minValue": data.headerInfo.zMin,
            "noDataValue": data.noDataValue
          }
        };
      },

      constructConstantSurface: function(data, useBSQForOutputDim) {
        var val = data.headerInfo.zMax;
        var valMin = data.headerInfo.zMin;
        var maxValues = data.headerInfo.maxValues;
        var numDims = data.headerInfo.numDims;
        var numPixels = data.headerInfo.height * data.headerInfo.width;
        var i = 0, k = 0, nStart = 0;
        var mask = data.pixels.resultMask;
        var resultPixels = data.pixels.resultPixels;
        if (mask) {
          if (numDims > 1) {
            if (useBSQForOutputDim) {
              for (i = 0; i < numDims; i++) {
                nStart = i * numPixels;
                val = maxValues[i];
                for (k = 0; k < numPixels; k++) {
                  if (mask[k]) {
                    resultPixels[nStart + k] = val;
                  }
                }
              }  
            }
            else {
              for (k = 0; k < numPixels; k++) {
                if (mask[k]) {
                  nStart = k * numDims;
                  for (i = 0; i < numDims; i++) {
                    resultPixels[nStart + numDims] = maxValues[i];
                  }
                }
              }
            }
          }
          else {
            for (k = 0; k < numPixels; k++) {
              if (mask[k]) {
                resultPixels[k] = val;
              }
            }
          }
        }
        else {
          if (numDims > 1 && valMin !== val) {
            if (useBSQForOutputDim) {
              for (i = 0; i < numDims; i++) {
                nStart = i * numPixels;
                val = maxValues[i];
                for (k = 0; k < numPixels; k++) {
                  resultPixels[nStart + k] = val;
                }
              }
            }
            else {
              for (k = 0; k < numPixels; k++) {
                nStart = k * numDims;
                for (i = 0; i < numDims; i++) {
                  resultPixels[nStart + i] = maxValues[i];
                }
              }
            }
          }
          else {
            for (k = 0; k < numPixels * numDims; k++) {
              resultPixels[k] = val;
            }
          }
        }
        return;
      },

      getDataTypeArray: function(t) {
        var tp;
        switch (t) {
          case 0: //char
            tp = Int8Array;
            break;
          case 1: //byte
            tp = Uint8Array;
            break;
          case 2: //short
            tp = Int16Array;
            break;
          case 3: //ushort
            tp = Uint16Array;
            break;
          case 4:
            tp = Int32Array;
            break;
          case 5:
            tp = Uint32Array;
            break;
          case 6:
            tp = Float32Array;
            break;
          case 7:
            tp = Float64Array;
            break;
          default:
            tp = Float32Array;
        }
        return tp;
      },

      getPixelType: function(t) {
        var tp;
        switch (t) {
          case 0: //char
            tp = "S8";
            break;
          case 1: //byte
            tp = "U8";
            break;
          case 2: //short
            tp = "S16";
            break;
          case 3: //ushort
            tp = "U16";
            break;
          case 4:
            tp = "S32";
            break;
          case 5:
            tp = "U32";
            break;
          case 6:
            tp = "F32";
            break;
          case 7:
            tp = "F64";
            break;
          default:
            tp = "F32";
        }
        return tp;
      },

      isValidPixelValue: function(t, val) {
        if (val == null) {
          return false;
        }
        var isValid;
        switch (t) {
          case 0: //char
            isValid = val >= -128 && val <= 127;
            break;
          case 1: //byte  (unsigned char)
            isValid = val >= 0 && val <= 255;
            break;
          case 2: //short
            isValid = val >= -32768 && val <= 32767;
            break;
          case 3: //ushort
            isValid = val >= 0 && val <= 65536;
            break;
          case 4: //int 32
            isValid = val >= -2147483648 && val <= 2147483647;
            break;
          case 5: //uinit 32
            isValid = val >= 0 && val <= 4294967296;
            break;
          case 6:
            isValid = val >= -3.4027999387901484e+38 && val <= 3.4027999387901484e+38;
            break;
          case 7:
            isValid = val >= -1.7976931348623157e+308 && val <= 1.7976931348623157e+308;
            break;
          default:
            isValid = false;
        }
        return isValid;
      },

      getDataTypeSize: function(t) {
        var s = 0;
        switch (t) {
          case 0: //ubyte
          case 1: //byte
            s = 1;
            break;
          case 2: //short
          case 3: //ushort
            s = 2;
            break;
          case 4:
          case 5:
          case 6:
            s = 4;
            break;
          case 7:
            s = 8;
            break;
          default:
            s = t;
        }
        return s;
      },

      getDataTypeUsed: function(dt, tc) {
        var t = dt;
        switch (dt) {
          case 2: //short
          case 4: //long
            t = dt - tc;
            break;
          case 3: //ushort
          case 5: //ulong
            t = dt - 2 * tc;
            break;
          case 6: //float
            if (0 === tc) {
              t = dt;
            }
            else if (1 === tc) {
              t = 2;
            }
            else {
              t = 1;//byte
            }
            break;
          case 7: //double
            if (0 === tc) {
              t = dt;
            }
            else {
              t = dt - 2 * tc + 1;
            }
            break;
          default:
            t = dt;
            break;
        }
        return t;
      },

      getOnePixel: function(block, blockPtr, offsetType, view) {
        var temp = 0;
        switch (offsetType) {
          case 0: //char
            temp = view.getInt8(blockPtr);
            break;
          case 1: //byte
            temp = view.getUint8(blockPtr);
            break;
          case 2:
            temp = view.getInt16(blockPtr, true);
            break;
          case 3:
            temp = view.getUint16(blockPtr, true);
            break;
          case 4:
            temp = view.getInt32(blockPtr, true);
            break;
          case 5:
            temp = view.getUInt32(blockPtr, true);
            break;
          case 6:
            temp = view.getFloat32(blockPtr, true);
            break;
          case 7:
            temp = view.getFloat64(blockPtr, true);
            break;
          default:
            throw ("the decoder does not understand this pixel type");
        }
        return temp;
      },

      swapDimensionOrder: function(pixels, numPixels, numDims, OutPixelTypeArray, inputIsBIP) {
        var i = 0, j = 0, iDim = 0, temp = 0, swap = pixels;
        if (numDims > 1) {
          swap = new OutPixelTypeArray(numPixels * numDims);
          if (inputIsBIP) {
            for (i=0; i<numPixels; i++) {
              temp = i;
              for (iDim=0; iDim < numDims; iDim++, temp += numPixels) {
                swap[temp] = pixels[j++];
              }
            }  
          }
          else {
            for (i=0; i<numPixels; i++) {
              temp = i;
              for (iDim=0; iDim < numDims; iDim++, temp += numPixels) {
                swap[j++] = pixels[temp];
              }
            }
          }
        }
        return swap;
      }
    };

    /***************************************************
    *private class for a tree node. Huffman code is in Lerc2Helpers
    ****************************************************/
    var TreeNode = function(val, left, right) {
      this.val = val;
      this.left = left;
      this.right = right;
    };

    var Lerc2Decode = {
      /*
      * ********removed options compared to LERC1. We can bring some of them back if needed.
       * removed pixel type. LERC2 is typed and doesn't require user to give pixel type
       * changed encodedMaskData to maskData. LERC2 's js version make it faster to use maskData directly.
       * removed returnMask. mask is used by LERC2 internally and is cost free. In case of user input mask, it's returned as well and has neglible cost.
       * removed nodatavalue. Because LERC2 pixels are typed, nodatavalue will sacrify a useful value for many types (8bit, 16bit) etc,
       *       user has to be knowledgable enough about raster and their data to avoid usability issues. so nodata value is simply removed now.
       *       We can add it back later if their's a clear requirement.
       * removed encodedMask. This option was not implemented in LercDecode. It can be done after decoding (less efficient)
       * removed computeUsedBitDepths.
       *
       *
       * response changes compared to LERC1
       * 1. encodedMaskData is not available
       * 2. noDataValue is optional (returns only if user's noDataValue is with in the valid data type range)
       * 3. maskData is always available
      */
      /*****************
      *  public properties
      ******************/
      //HUFFMAN_LUT_BITS_MAX: 12, //use 2^12 lut, not configurable

      /*****************
      *  public methods
      *****************/

      /**
       * Decode a LERC2 byte stream and return an object containing the pixel data and optional metadata.
       *
       * @param {ArrayBuffer} input The LERC input byte stream
       * @param {object} [options] options Decoding options
       * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid LERC file is expected at that position
       * @param {boolean} [options.returnFileInfo] If true, the return value will have a fileInfo property that contains metadata obtained from the LERC headers and the decoding process
       * @param {boolean} [options.returnPixelInterleavedDims]  If true, returned dimensions are pixel-interleaved, a.k.a [p1_dim0, p1_dim1, p1_dimn, p2_dim0...], default is [p1_dim0, p2_dim0, ..., p1_dim1, p2_dim1...]
       */
      decode: function(/*byte array*/ input, /*object*/ options) {
        //currently there's a bug in the sparse array, so please do not set to false
        options = options || {};
        var noDataValue = options.noDataValue;

        //initialize
        var i = 0, data = {};
        data.ptr = options.inputOffset || 0;
        data.pixels = {};

        // File header
        if (!Lerc2Helpers.readHeaderInfo(input, data)) {
          return;
        }

        var headerInfo = data.headerInfo;
        var fileVersion = headerInfo.fileVersion;
        var OutPixelTypeArray = Lerc2Helpers.getDataTypeArray(headerInfo.imageType);

        // version check
        if (fileVersion > 5) {
          throw "unsupported lerc version 2." + fileVersion;
        }

        // Mask Header
        Lerc2Helpers.readMask(input, data);
        if (headerInfo.numValidPixel !== headerInfo.width * headerInfo.height && !data.pixels.resultMask) {
          data.pixels.resultMask = options.maskData;
        }

        var numPixels = headerInfo.width * headerInfo.height;
        data.pixels.resultPixels = new OutPixelTypeArray(numPixels * headerInfo.numDims);

        data.counter = {
          onesweep: 0,
          uncompressed: 0,
          lut: 0,
          bitstuffer: 0,
          constant: 0,
          constantoffset: 0
        };
        var useBSQForOutputDim = !options.returnPixelInterleavedDims;
        if (headerInfo.numValidPixel !== 0) {
          //not tested
          if (headerInfo.zMax === headerInfo.zMin) //constant surface
          {
            Lerc2Helpers.constructConstantSurface(data, useBSQForOutputDim);
          }
          else if (fileVersion >= 4 && Lerc2Helpers.checkMinMaxRanges(input, data)) {
            Lerc2Helpers.constructConstantSurface(data, useBSQForOutputDim);
          }
          else {
            var view = new DataView(input, data.ptr, 2);
            var bReadDataOneSweep = view.getUint8(0);
            data.ptr++;
            if (bReadDataOneSweep) {
              //console.debug("OneSweep");
              Lerc2Helpers.readDataOneSweep(input, data, OutPixelTypeArray, useBSQForOutputDim);
            }
            else {
              //lerc2.1: //bitstuffing + lut
              //lerc2.2: //bitstuffing + lut + huffman
              //lerc2.3: new bitstuffer
              if (fileVersion > 1 && headerInfo.imageType <= 1 && Math.abs(headerInfo.maxZError - 0.5) < 0.00001) {
                //this is 2.x plus 8 bit (unsigned and signed) data, possiblity of Huffman
                var flagHuffman = view.getUint8(1);
                data.ptr++;
                data.encodeMode = flagHuffman;
                if (flagHuffman > 2 || (fileVersion < 4 && flagHuffman > 1)) {
                  throw "Invalid Huffman flag " + flagHuffman;
                }
                if (flagHuffman) {//1 - delta Huffman, 2 - Huffman
                  //console.log("Huffman");
                  Lerc2Helpers.readHuffman(input, data, OutPixelTypeArray, useBSQForOutputDim);
                }
                else {
                  //console.log("Tiles");
                  Lerc2Helpers.readTiles(input, data, OutPixelTypeArray, useBSQForOutputDim);
                }
              }
              else { //lerc2.x non-8 bit data
                //console.log("Tiles");
                Lerc2Helpers.readTiles(input, data, OutPixelTypeArray, useBSQForOutputDim);
              }
            }
          }
        }

        data.eofOffset = data.ptr;
        var diff;
        if (options.inputOffset) {
          diff = data.headerInfo.blobSize + options.inputOffset - data.ptr;
          if (Math.abs(diff) >= 1) {
            //console.debug("incorrect eof: dataptr " + data.ptr + " offset " + options.inputOffset + " blobsize " + data.headerInfo.blobSize + " diff: " + diff);
            data.eofOffset = options.inputOffset + data.headerInfo.blobSize;
          }
        }
        else {
          diff = data.headerInfo.blobSize - data.ptr;
          if (Math.abs(diff) >= 1) {
            //console.debug("incorrect first band eof: dataptr " + data.ptr + " blobsize " + data.headerInfo.blobSize + " diff: " + diff);
            data.eofOffset = data.headerInfo.blobSize;
          }
        }

        var result = {
          width: headerInfo.width,
          height: headerInfo.height,
          pixelData: data.pixels.resultPixels,
          minValue: headerInfo.zMin,
          maxValue: headerInfo.zMax,
          validPixelCount: headerInfo.numValidPixel,
          dimCount: headerInfo.numDims,
          dimStats: {
            minValues: headerInfo.minValues,
            maxValues: headerInfo.maxValues
          },
          maskData: data.pixels.resultMask
          //noDataValue: noDataValue
        };

        //we should remove this if there's no existing client
        //optional noDataValue processing, it's user's responsiblity
        if (data.pixels.resultMask && Lerc2Helpers.isValidPixelValue(headerInfo.imageType, noDataValue)) {
          var mask = data.pixels.resultMask;
          for (i = 0; i < numPixels; i++) {
            if (!mask[i]) {
              result.pixelData[i] = noDataValue;
            }
          }
          result.noDataValue = noDataValue;
        }
        data.noDataValue = noDataValue;
        if (options.returnFileInfo) {
          result.fileInfo = Lerc2Helpers.formatFileInfo(data);
        }
        return result;
      },

      getBandCount: function(/*byte array*/ input) {
        var count = 0;
        var i = 0;
        var temp = {};
        temp.ptr = 0;
        temp.pixels = {};
        while (i < input.byteLength - 58) {
          Lerc2Helpers.readHeaderInfo(input, temp);
          i += temp.headerInfo.blobSize;
          count++;
          temp.ptr = i;
        }
        return count;
      }
    };

    return Lerc2Decode;
  })();

  var isPlatformLittleEndian = (function() {
    var a = new ArrayBuffer(4);
    var b = new Uint8Array(a);
    var c = new Uint32Array(a);
    c[0] = 1;
    return b[0] === 1;
  })();

  var Lerc = {
    /************wrapper**********************************************/
    /**
     * A wrapper for decoding both LERC1 and LERC2 byte streams capable of handling multiband pixel blocks for various pixel types.
     *
     * @alias module:Lerc
     * @param {ArrayBuffer} input The LERC input byte stream
     * @param {object} [options] The decoding options below are optional.
     * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid Lerc file is expected at that position.
     * @param {string} [options.pixelType] (LERC1 only) Default value is F32. Valid pixel types for input are U8/S8/S16/U16/S32/U32/F32.
     * @param {number} [options.noDataValue] (LERC1 only). It is recommended to use the returned mask instead of setting this value.
     * @param {boolean} [options.returnPixelInterleavedDims] (nDim LERC2 only) If true, returned dimensions are pixel-interleaved, a.k.a [p1_dim0, p1_dim1, p1_dimn, p2_dim0...], default is [p1_dim0, p2_dim0, ..., p1_dim1, p2_dim1...]
     * @returns {{width, height, pixels, pixelType, mask, statistics}}
       * @property {number} width Width of decoded image.
       * @property {number} height Height of decoded image.
       * @property {array} pixels [band1, band2, …] Each band is a typed array of width*height.
       * @property {string} pixelType The type of pixels represented in the output.
       * @property {mask} mask Typed array with a size of width*height, or null if all pixels are valid.
       * @property {array} statistics [statistics_band1, statistics_band2, …] Each element is a statistics object representing min and max values
    **/
    decode: function(encodedData, options) {
      if (!isPlatformLittleEndian) {
        throw "Big endian system is not supported.";
      }
      options = options || {};
      var inputOffset = options.inputOffset || 0;
      var fileIdView = new Uint8Array(encodedData, inputOffset, 10);
      var fileIdentifierString = String.fromCharCode.apply(null, fileIdView);
      var lerc, majorVersion;
      if (fileIdentifierString.trim() === "CntZImage") {
        lerc = LercDecode;
        majorVersion = 1;
      }
      else if (fileIdentifierString.substring(0, 5) === "Lerc2") {
        lerc = Lerc2Decode;
        majorVersion = 2;
      }
      else {
        throw "Unexpected file identifier string: " + fileIdentifierString;
      }

      var iPlane = 0, eof = encodedData.byteLength - 10, encodedMaskData, bandMasks = [], bandMask, maskData;
      var decodedPixelBlock = {
        width: 0,
        height: 0,
        pixels: [],
        pixelType: options.pixelType,
        mask: null,
        statistics: []
      };
      var uniqueBandMaskCount = 0;

      while (inputOffset < eof) {
        var result = lerc.decode(encodedData, {
          inputOffset: inputOffset,//for both lerc1 and lerc2
          encodedMaskData: encodedMaskData,//lerc1 only
          maskData: maskData,//lerc2 only
          returnMask: iPlane === 0 ? true : false,//lerc1 only
          returnEncodedMask: iPlane === 0 ? true : false,//lerc1 only
          returnFileInfo: true,//for both lerc1 and lerc2
          returnPixelInterleavedDims: options.returnPixelInterleavedDims,//for ndim lerc2 only
          pixelType: options.pixelType || null,//lerc1 only
          noDataValue: options.noDataValue || null//lerc1 only
        });

        inputOffset = result.fileInfo.eofOffset;
        maskData = result.maskData;//lerc2
        if (iPlane === 0) {
          encodedMaskData = result.encodedMaskData;//lerc1
          decodedPixelBlock.width = result.width;
          decodedPixelBlock.height = result.height;
          decodedPixelBlock.dimCount = result.dimCount || 1;
          //decodedPixelBlock.dimStats = decodedPixelBlock.dimStats;
          decodedPixelBlock.pixelType = result.pixelType || result.fileInfo.pixelType;
          decodedPixelBlock.mask = maskData;
        }
        if (majorVersion > 1) {
          if (maskData) {
            bandMasks.push(maskData);
          }
          if (result.fileInfo.mask && result.fileInfo.mask.numBytes > 0) {
            uniqueBandMaskCount++;
          }
        }

        iPlane++;
        decodedPixelBlock.pixels.push(result.pixelData);
        decodedPixelBlock.statistics.push({
          minValue: result.minValue,
          maxValue: result.maxValue,
          noDataValue: result.noDataValue,
          dimStats: result.dimStats
        });
      }
      var i, j, numPixels;
      if (majorVersion > 1 && uniqueBandMaskCount > 1) {
        numPixels = decodedPixelBlock.width * decodedPixelBlock.height;
        decodedPixelBlock.bandMasks = bandMasks;
        maskData = new Uint8Array(numPixels);
        maskData.set(bandMasks[0]);
        for (i = 1; i < bandMasks.length; i++) {
          bandMask = bandMasks[i];
          for (j = 0; j < numPixels; j++) {
            maskData[j] = maskData[j] & bandMask[j];
          }
        }
        decodedPixelBlock.maskData = maskData;
      }

      return decodedPixelBlock;
    }
  };

  if (true) {/* jshint ignore:line */
    //amd loaders such as dojo and requireJS
    //http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() { return Lerc; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));/* jshint ignore:line */
  }
  else {}

})();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9sZXJjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sZXJjL0xlcmNEZWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1A7QUFDbUI7QUFDd0I7O0FBRXBELDBCQUEwQix1REFBVztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdURBQXVELDBEQUFjO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhEQUFrQjtBQUM3QjtBQUNBLFdBQVcsOERBQWtCO0FBQzdCLGlCQUFpQixvREFBTyxnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBLHNGQUFzRixvQkFBb0I7QUFDMUc7O0FBRUEsdUJBQXVCLDJDQUFJLGlCQUFpQiw2REFBNkQ7QUFDekc7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEY7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0NBQW9DO0FBQ2pFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQsNEJBQTRCLDJCQUEyQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2Isb0RBQW9EO0FBQ3BELGFBQWE7QUFDYixzREFBc0Q7QUFDdEQsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsZUFBZTtBQUNmLGtFQUFrRTtBQUNsRSxlQUFlO0FBQ2Ysa0VBQWtFO0FBQ2xFLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvQ0FBb0M7QUFDakUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxPQUFPOztBQUVQO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1Qix3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6Qyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLGdDQUFnQyxZQUFZO0FBQzVDLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGdDQUFnQyxZQUFZO0FBQzVDLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qyx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELFdBQVc7QUFDWCx5REFBeUQ7QUFDekQsV0FBVztBQUNYLHlEQUF5RDtBQUN6RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RCxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsK0JBQStCLHVCQUF1QjtBQUN0RCxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RCxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQscUNBQXFDLHNCQUFzQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hELG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQTBDLEdBQUc7QUFDbkQ7QUFDQTtBQUNBLElBQUksaUNBQU8sRUFBRSxtQ0FBRSxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDLENBQUM7QUFDNUM7QUFDQSxPQUFPLEVBUUo7O0FBRUgsQ0FBQyIsImZpbGUiOiJqcy8xNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmZsYXRlIH0gZnJvbSAncGFrbyc7XG5pbXBvcnQgTGVyYyBmcm9tICdsZXJjJztcbmltcG9ydCBCYXNlRGVjb2RlciBmcm9tICcuL2Jhc2VkZWNvZGVyLmpzJztcbmltcG9ydCB7IExlcmNQYXJhbWV0ZXJzLCBMZXJjQWRkQ29tcHJlc3Npb24gfSBmcm9tICcuLi9nbG9iYWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVyY0RlY29kZXIgZXh0ZW5kcyBCYXNlRGVjb2RlciB7XG4gIGNvbnN0cnVjdG9yKGZpbGVEaXJlY3RvcnkpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID0gdHlwZW9mIGZpbGVEaXJlY3RvcnkuUGxhbmFyQ29uZmlndXJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBmaWxlRGlyZWN0b3J5LlBsYW5hckNvbmZpZ3VyYXRpb24gOiAxO1xuICAgIHRoaXMuc2FtcGxlc1BlclBpeGVsID0gdHlwZW9mIGZpbGVEaXJlY3RvcnkuU2FtcGxlc1BlclBpeGVsICE9PSAndW5kZWZpbmVkJyA/IGZpbGVEaXJlY3RvcnkuU2FtcGxlc1BlclBpeGVsIDogMTtcblxuICAgIHRoaXMuYWRkQ29tcHJlc3Npb24gPSBmaWxlRGlyZWN0b3J5LkxlcmNQYXJhbWV0ZXJzW0xlcmNQYXJhbWV0ZXJzLkFkZENvbXByZXNzaW9uXTtcbiAgfVxuXG4gIGRlY29kZUJsb2NrKGJ1ZmZlcikge1xuICAgIHN3aXRjaCAodGhpcy5hZGRDb21wcmVzc2lvbikge1xuICAgICAgY2FzZSBMZXJjQWRkQ29tcHJlc3Npb24uTm9uZTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExlcmNBZGRDb21wcmVzc2lvbi5EZWZsYXRlOlxuICAgICAgICBidWZmZXIgPSBpbmZsYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpLmJ1ZmZlcjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnbiwgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIExFUkMgYWRkaXRpb25hbCBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllcjogJHt0aGlzLmFkZENvbXByZXNzaW9ufWApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlcmNSZXN1bHQgPSBMZXJjLmRlY29kZShidWZmZXIsIHsgcmV0dXJuUGl4ZWxJbnRlcmxlYXZlZERpbXM6IHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMSB9KTtcbiAgICBjb25zdCBsZXJjRGF0YSA9IGxlcmNSZXN1bHQucGl4ZWxzWzBdO1xuICAgIHJldHVybiBsZXJjRGF0YS5idWZmZXI7XG4gIH1cbn1cbiIsIu+7vy8qIGpzaGludCBmb3JpbjogZmFsc2UsIGJpdHdpc2U6IGZhbHNlICovXG4vKlxuQ29weXJpZ2h0IDIwMTUtMjAyMSBFc3JpXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbkEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYWRkaXRpb25hbCBub3RpY2VzIGFyZSBsb2NhdGVkIHdpdGggdGhlXG5zb3VyY2UgZGlzdHJpYnV0aW9uIGF0OlxuXG5odHRwOi8vZ2l0aHViLmNvbS9Fc3JpL2xlcmMvXG5cbkNvbnRyaWJ1dG9yczogIEpvaGFubmVzIFNjaG1pZCwgKExFUkMgdjEpXG4gICAgICAgICAgICAgICBDaGF5YW5pa2EgS2hhdHVhLCAoTEVSQyB2MSlcbiAgICAgICAgICAgICAgIFdlbnh1ZSBKdSAoTEVSQyB2MSwgdjIueClcbiovXG5cbi8qIENvcHlyaWdodCAyMDE1LTIwMjEgRXNyaS4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wIEBwcmVzZXJ2ZSAqL1xuXG4vKipcbiAqIGEgbW9kdWxlIGZvciBkZWNvZGluZyBMRVJDIGJsb2JzXG4gKiBAbW9kdWxlIExlcmNcbiAqL1xuKGZ1bmN0aW9uKCkge1xuICAvL3RoaXMgZGVjb2RlciBzdXBwb3J0cyBhbGwgbGVyYyB2ZXJzaW9ucywgZWFjaCB2ZXJzaW9uIGhhcyBpdHMgb3duIGNsYXNzIChMZXJjRGVjb2RlIGFuZCBMZXJjMkRlY29kZSkuIFxuICAvL3RoZSBleHBvcnRlZCBtb2R1bGUgaGFuZGxlcyBmb3JtYXQgdmFyaWF0aW9uIGF1dG9hbXRpY2FsbHkuXG5cbiAgLy90aGUgb3JpZ2luYWwgTGVyY0RlY29kZSBmb3IgVmVyc2lvbiAxXG4gIHZhciBMZXJjRGVjb2RlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gTm90ZTogY3VycmVudGx5LCB0aGlzIG1vZHVsZSBvbmx5IGhhcyBhbiBpbXBsZW1lbnRhdGlvbiBmb3IgZGVjb2RpbmcgTEVSQyBkYXRhLCBub3QgZW5jb2RpbmcuIFRoZSBuYW1lIG9mXG4gICAgLy8gdGhlIGNsYXNzIHdhcyBjaG9zZW4gdG8gYmUgZnV0dXJlIHByb29mLlxuXG4gICAgdmFyIENudFpJbWFnZSA9IHt9O1xuXG4gICAgQ250WkltYWdlLmRlZmF1bHROb0RhdGFWYWx1ZSA9IC0zLjQwMjc5OTkzODc5MDE0ODRlKzM4OyAvLyBzbWFsbGVzdCBGbG9hdDMyIHZhbHVlXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBMRVJDIGJ5dGUgc3RyZWFtIGFuZCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBpeGVsIGRhdGEgYW5kIHNvbWUgcmVxdWlyZWQgYW5kIG9wdGlvbmFsXG4gICAgICogaW5mb3JtYXRpb24gYWJvdXQgaXQsIHN1Y2ggYXMgdGhlIGltYWdlJ3Mgd2lkdGggYW5kIGhlaWdodC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGlucHV0IFRoZSBMRVJDIGlucHV0IGJ5dGUgc3RyZWFtXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBEZWNvZGluZyBvcHRpb25zLCBjb250YWluaW5nIGFueSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogQGNvbmZpZyB7bnVtYmVyfSBbaW5wdXRPZmZzZXQgPSAwXVxuICAgICAqICAgICAgICBTa2lwIHRoZSBmaXJzdCBpbnB1dE9mZnNldCBieXRlcyBvZiB0aGUgaW5wdXQgYnl0ZSBzdHJlYW0uIEEgdmFsaWQgTEVSQyBmaWxlIGlzIGV4cGVjdGVkIGF0IHRoYXQgcG9zaXRpb24uXG4gICAgICogQGNvbmZpZyB7VWludDhBcnJheX0gW2VuY29kZWRNYXNrID0gbnVsbF1cbiAgICAgKiAgICAgICAgSWYgc3BlY2lmaWVkLCB0aGUgZGVjb2RlciB3aWxsIG5vdCByZWFkIG1hc2sgaW5mb3JtYXRpb24gZnJvbSB0aGUgaW5wdXQgYW5kIHVzZSB0aGUgc3BlY2lmaWVkIGVuY29kZWRcbiAgICAgKiAgICAgICAgbWFzayBkYXRhIGluc3RlYWQuIE1hc2sgaGVhZGVyL2RhdGEgbXVzdCBub3QgYmUgcHJlc2VudCBpbiB0aGUgTEVSQyBieXRlIHN0cmVhbSBpbiB0aGlzIGNhc2UuXG4gICAgICogQGNvbmZpZyB7bnVtYmVyfSBbbm9EYXRhVmFsdWUgPSBMZXJjQ29kZS5kZWZhdWx0Tm9EYXRhVmFsdWVdXG4gICAgICogICAgICAgIFBpeGVsIHZhbHVlIHRvIHVzZSBmb3IgbWFza2VkIHBpeGVscy5cbiAgICAgKiBAY29uZmlnIHtBcnJheUJ1ZmZlclZpZXd8QXJyYXl9IFtwaXhlbFR5cGUgPSBGbG9hdDMyQXJyYXldXG4gICAgICogICAgICAgIFRoZSBkZXNpcmVkIHR5cGUgb2YgdGhlIHBpeGVsRGF0YSBhcnJheSBpbiB0aGUgcmV0dXJuIHZhbHVlLiBOb3RlIHRoYXQgaXQgaXMgdGhlIGNhbGxlcidzIHJlc3BvbnNpYmlsaXR5IHRvXG4gICAgICogICAgICAgIHByb3ZpZGUgYW4gYXBwcm9wcmlhdGUgbm9EYXRhVmFsdWUgaWYgdGhlIGRlZmF1bHQgcGl4ZWxUeXBlIGlzIG92ZXJyaWRkZW4uXG4gICAgICogQGNvbmZpZyB7Ym9vbGVhbn0gW3JldHVybk1hc2sgPSBmYWxzZV1cbiAgICAgKiAgICAgICAgSWYgdHJ1ZSwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGNvbnRhaW4gYSBtYXNrRGF0YSBwcm9wZXJ0eSBvZiB0eXBlIFVpbnQ4QXJyYXkgd2hpY2ggaGFzIG9uZSBlbGVtZW50IHBlclxuICAgICAqICAgICAgICBwaXhlbCwgdGhlIHZhbHVlIG9mIHdoaWNoIGlzIDEgb3IgMCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGF0IHBpeGVsJ3MgZGF0YSBpcyBwcmVzZW50IG9yIG1hc2tlZC4gSWYgdGhlXG4gICAgICogICAgICAgIGlucHV0IExFUkMgZGF0YSBkb2VzIG5vdCBjb250YWluIGEgbWFzaywgbWFza0RhdGEgd2lsbCBub3QgYmUgcmV0dXJuZWQuXG4gICAgICogQGNvbmZpZyB7Ym9vbGVhbn0gW3JldHVybkVuY29kZWRNYXNrID0gZmFsc2VdXG4gICAgICogICAgICAgIElmIHRydWUsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBjb250YWluIGEgZW5jb2RlZE1hc2tEYXRhIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgcGFzc2VkIGludG8gZW5jb2RlKCkgYXNcbiAgICAgKiAgICAgICAgZW5jb2RlZE1hc2suXG4gICAgICogQGNvbmZpZyB7Ym9vbGVhbn0gW3JldHVybkZpbGVJbmZvID0gZmFsc2VdXG4gICAgICogICAgICAgIElmIHRydWUsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBoYXZlIGEgZmlsZUluZm8gcHJvcGVydHkgdGhhdCBjb250YWlucyBtZXRhZGF0YSBvYnRhaW5lZCBmcm9tIHRoZVxuICAgICAqICAgICAgICBMRVJDIGhlYWRlcnMgYW5kIHRoZSBkZWNvZGluZyBwcm9jZXNzLlxuICAgICAqIEBjb25maWcge2Jvb2xlYW59IFtjb21wdXRlVXNlZEJpdERlcHRocyA9IGZhbHNlXVxuICAgICAqICAgICAgICBJZiB0cnVlLCB0aGUgZmlsZUluZm8gcHJvcGVydHkgaW4gdGhlIHJldHVybiB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIHNldCBvZiBhbGwgYmxvY2sgYml0IGRlcHRoc1xuICAgICAqICAgICAgICBlbmNvdW50ZXJlZCBkdXJpbmcgZGVjb2RpbmcuIFdpbGwgb25seSBoYXZlIGFuIGVmZmVjdCBpZiByZXR1cm5GaWxlSW5mbyBvcHRpb24gaXMgdHJ1ZS5cbiAgICAgKiBAcmV0dXJucyB7e3dpZHRoLCBoZWlnaHQsIHBpeGVsRGF0YSwgbWluVmFsdWUsIG1heFZhbHVlLCBub0RhdGFWYWx1ZSwgbWFza0RhdGEsIGVuY29kZWRNYXNrRGF0YSwgZmlsZUluZm99fVxuICAgICAqL1xuICAgIENudFpJbWFnZS5kZWNvZGUgPSBmdW5jdGlvbihpbnB1dCwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHZhciBza2lwTWFzayA9IG9wdGlvbnMuZW5jb2RlZE1hc2tEYXRhIHx8IChvcHRpb25zLmVuY29kZWRNYXNrRGF0YSA9PT0gbnVsbCk7XG4gICAgICB2YXIgcGFyc2VkRGF0YSA9IHBhcnNlKGlucHV0LCBvcHRpb25zLmlucHV0T2Zmc2V0IHx8IDAsIHNraXBNYXNrKTtcblxuICAgICAgdmFyIG5vRGF0YVZhbHVlID0gKG9wdGlvbnMubm9EYXRhVmFsdWUgIT09IG51bGwpID8gb3B0aW9ucy5ub0RhdGFWYWx1ZSA6IENudFpJbWFnZS5kZWZhdWx0Tm9EYXRhVmFsdWU7XG5cbiAgICAgIHZhciB1bmNvbXByZXNzZWREYXRhID0gdW5jb21wcmVzc1BpeGVsVmFsdWVzKHBhcnNlZERhdGEsIG9wdGlvbnMucGl4ZWxUeXBlIHx8IEZsb2F0MzJBcnJheSxcbiAgICAgICAgb3B0aW9ucy5lbmNvZGVkTWFza0RhdGEsIG5vRGF0YVZhbHVlLCBvcHRpb25zLnJldHVybk1hc2spO1xuXG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICB3aWR0aDogcGFyc2VkRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZWREYXRhLmhlaWdodCxcbiAgICAgICAgcGl4ZWxEYXRhOiB1bmNvbXByZXNzZWREYXRhLnJlc3VsdFBpeGVscyxcbiAgICAgICAgbWluVmFsdWU6IHVuY29tcHJlc3NlZERhdGEubWluVmFsdWUsXG4gICAgICAgIG1heFZhbHVlOiBwYXJzZWREYXRhLnBpeGVscy5tYXhWYWx1ZSxcbiAgICAgICAgbm9EYXRhVmFsdWU6IG5vRGF0YVZhbHVlXG4gICAgICB9O1xuXG4gICAgICBpZiAodW5jb21wcmVzc2VkRGF0YS5yZXN1bHRNYXNrKSB7XG4gICAgICAgIHJlc3VsdC5tYXNrRGF0YSA9IHVuY29tcHJlc3NlZERhdGEucmVzdWx0TWFzaztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmV0dXJuRW5jb2RlZE1hc2sgJiYgcGFyc2VkRGF0YS5tYXNrKSB7XG4gICAgICAgIHJlc3VsdC5lbmNvZGVkTWFza0RhdGEgPSBwYXJzZWREYXRhLm1hc2suYml0c2V0ID8gcGFyc2VkRGF0YS5tYXNrLmJpdHNldCA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJldHVybkZpbGVJbmZvKSB7XG4gICAgICAgIHJlc3VsdC5maWxlSW5mbyA9IGZvcm1hdEZpbGVJbmZvKHBhcnNlZERhdGEpO1xuICAgICAgICBpZiAob3B0aW9ucy5jb21wdXRlVXNlZEJpdERlcHRocykge1xuICAgICAgICAgIHJlc3VsdC5maWxlSW5mby5iaXREZXB0aHMgPSBjb21wdXRlVXNlZEJpdERlcHRocyhwYXJzZWREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgdW5jb21wcmVzc1BpeGVsVmFsdWVzID0gZnVuY3Rpb24oZGF0YSwgVHlwZWRBcnJheUNsYXNzLCBtYXNrQml0c2V0LCBub0RhdGFWYWx1ZSwgc3RvcmVEZWNvZGVkTWFzaykge1xuICAgICAgdmFyIGJsb2NrSWR4ID0gMDtcbiAgICAgIHZhciBudW1YID0gZGF0YS5waXhlbHMubnVtQmxvY2tzWDtcbiAgICAgIHZhciBudW1ZID0gZGF0YS5waXhlbHMubnVtQmxvY2tzWTtcbiAgICAgIHZhciBibG9ja1dpZHRoID0gTWF0aC5mbG9vcihkYXRhLndpZHRoIC8gbnVtWCk7XG4gICAgICB2YXIgYmxvY2tIZWlnaHQgPSBNYXRoLmZsb29yKGRhdGEuaGVpZ2h0IC8gbnVtWSk7XG4gICAgICB2YXIgc2NhbGUgPSAyICogZGF0YS5tYXhaRXJyb3I7XG4gICAgICB2YXIgbWluVmFsdWUgPSBOdW1iZXIuTUFYX1ZBTFVFLCBjdXJyZW50VmFsdWU7XG4gICAgICBtYXNrQml0c2V0ID0gbWFza0JpdHNldCB8fCAoKGRhdGEubWFzaykgPyBkYXRhLm1hc2suYml0c2V0IDogbnVsbCk7XG5cbiAgICAgIHZhciByZXN1bHRQaXhlbHMsIHJlc3VsdE1hc2s7XG4gICAgICByZXN1bHRQaXhlbHMgPSBuZXcgVHlwZWRBcnJheUNsYXNzKGRhdGEud2lkdGggKiBkYXRhLmhlaWdodCk7XG4gICAgICBpZiAoc3RvcmVEZWNvZGVkTWFzayAmJiBtYXNrQml0c2V0KSB7XG4gICAgICAgIHJlc3VsdE1hc2sgPSBuZXcgVWludDhBcnJheShkYXRhLndpZHRoICogZGF0YS5oZWlnaHQpO1xuICAgICAgfVxuICAgICAgdmFyIGJsb2NrRGF0YUJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoYmxvY2tXaWR0aCAqIGJsb2NrSGVpZ2h0KTtcblxuICAgICAgdmFyIHh4LCB5eTtcbiAgICAgIGZvciAodmFyIHkgPSAwOyB5IDw9IG51bVk7IHkrKykge1xuICAgICAgICB2YXIgdGhpc0Jsb2NrSGVpZ2h0ID0gKHkgIT09IG51bVkpID8gYmxvY2tIZWlnaHQgOiAoZGF0YS5oZWlnaHQgJSBudW1ZKTtcbiAgICAgICAgaWYgKHRoaXNCbG9ja0hlaWdodCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDw9IG51bVg7IHgrKykge1xuICAgICAgICAgIHZhciB0aGlzQmxvY2tXaWR0aCA9ICh4ICE9PSBudW1YKSA/IGJsb2NrV2lkdGggOiAoZGF0YS53aWR0aCAlIG51bVgpO1xuICAgICAgICAgIGlmICh0aGlzQmxvY2tXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG91dFB0ciA9IHkgKiBkYXRhLndpZHRoICogYmxvY2tIZWlnaHQgKyB4ICogYmxvY2tXaWR0aDtcbiAgICAgICAgICB2YXIgb3V0U3RyaWRlID0gZGF0YS53aWR0aCAtIHRoaXNCbG9ja1dpZHRoO1xuXG4gICAgICAgICAgdmFyIGJsb2NrID0gZGF0YS5waXhlbHMuYmxvY2tzW2Jsb2NrSWR4XTtcblxuICAgICAgICAgIHZhciBibG9ja0RhdGEsIGJsb2NrUHRyLCBjb25zdFZhbHVlO1xuICAgICAgICAgIGlmIChibG9jay5lbmNvZGluZyA8IDIpIHtcbiAgICAgICAgICAgIC8vIGJsb2NrIGlzIGVpdGhlciB1bmNvbXByZXNzZWQgb3IgYml0LXN0dWZmZWQgKGVuY29kaW5ncyAwIGFuZCAxKVxuICAgICAgICAgICAgaWYgKGJsb2NrLmVuY29kaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGJsb2NrIGlzIHVuY29tcHJlc3NlZFxuICAgICAgICAgICAgICBibG9ja0RhdGEgPSBibG9jay5yYXdEYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gYmxvY2sgaXMgYml0LXN0dWZmZWRcbiAgICAgICAgICAgICAgdW5zdHVmZihibG9jay5zdHVmZmVkRGF0YSwgYmxvY2suYml0c1BlclBpeGVsLCBibG9jay5udW1WYWxpZFBpeGVscywgYmxvY2sub2Zmc2V0LCBzY2FsZSwgYmxvY2tEYXRhQnVmZmVyLCBkYXRhLnBpeGVscy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgIGJsb2NrRGF0YSA9IGJsb2NrRGF0YUJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrUHRyID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoYmxvY2suZW5jb2RpbmcgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGJsb2NrIGlzIGFsbCAwXG4gICAgICAgICAgICBjb25zdFZhbHVlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBibG9jayBoYXMgY29uc3RhbnQgdmFsdWUgKGVuY29kaW5nID09PSAzKVxuICAgICAgICAgICAgY29uc3RWYWx1ZSA9IGJsb2NrLm9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFza0J5dGU7XG4gICAgICAgICAgaWYgKG1hc2tCaXRzZXQpIHtcbiAgICAgICAgICAgIGZvciAoeXkgPSAwOyB5eSA8IHRoaXNCbG9ja0hlaWdodDsgeXkrKykge1xuICAgICAgICAgICAgICBpZiAob3V0UHRyICYgNykge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgbWFza0J5dGUgPSBtYXNrQml0c2V0W291dFB0ciA+PiAzXTtcbiAgICAgICAgICAgICAgICBtYXNrQnl0ZSA8PD0gb3V0UHRyICYgNztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKHh4ID0gMDsgeHggPCB0aGlzQmxvY2tXaWR0aDsgeHgrKykge1xuICAgICAgICAgICAgICAgIGlmICghKG91dFB0ciAmIDcpKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWFkIG5leHQgYnl0ZSBmcm9tIG1hc2tcbiAgICAgICAgICAgICAgICAgIG1hc2tCeXRlID0gbWFza0JpdHNldFtvdXRQdHIgPj4gM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXNrQnl0ZSAmIDEyOCkge1xuICAgICAgICAgICAgICAgICAgLy8gcGl4ZWwgZGF0YSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0TWFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRNYXNrW291dFB0cl0gPSAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gKGJsb2NrLmVuY29kaW5nIDwgMikgPyBibG9ja0RhdGFbYmxvY2tQdHIrK10gOiBjb25zdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgbWluVmFsdWUgPSBtaW5WYWx1ZSA+IGN1cnJlbnRWYWx1ZSA/IGN1cnJlbnRWYWx1ZSA6IG1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW291dFB0cisrXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gcGl4ZWwgZGF0YSBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdE1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0TWFza1tvdXRQdHJdID0gMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlc3VsdFBpeGVsc1tvdXRQdHIrK10gPSBub0RhdGFWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFza0J5dGUgPDw9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3V0UHRyICs9IG91dFN0cmlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFzayBub3QgcHJlc2VudCwgc2ltcGx5IGNvcHkgYmxvY2sgb3ZlclxuICAgICAgICAgICAgaWYgKGJsb2NrLmVuY29kaW5nIDwgMikge1xuICAgICAgICAgICAgICAvLyBkdXBsaWNhdGluZyB0aGlzIGNvZGUgYmxvY2sgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgICAgICAgICAgICAgLy8gYmxvY2tEYXRhIGNhc2U6XG4gICAgICAgICAgICAgIGZvciAoeXkgPSAwOyB5eSA8IHRoaXNCbG9ja0hlaWdodDsgeXkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoeHggPSAwOyB4eCA8IHRoaXNCbG9ja1dpZHRoOyB4eCsrKSB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBibG9ja0RhdGFbYmxvY2tQdHIrK107XG4gICAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlID4gY3VycmVudFZhbHVlID8gY3VycmVudFZhbHVlIDogbWluVmFsdWU7XG4gICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyKytdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRQdHIgKz0gb3V0U3RyaWRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gY29uc3RWYWx1ZSBjYXNlOlxuICAgICAgICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlID4gY29uc3RWYWx1ZSA/IGNvbnN0VmFsdWUgOiBtaW5WYWx1ZTtcbiAgICAgICAgICAgICAgZm9yICh5eSA9IDA7IHl5IDwgdGhpc0Jsb2NrSGVpZ2h0OyB5eSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh4eCA9IDA7IHh4IDwgdGhpc0Jsb2NrV2lkdGg7IHh4KyspIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFBpeGVsc1tvdXRQdHIrK10gPSBjb25zdFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRQdHIgKz0gb3V0U3RyaWRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoYmxvY2suZW5jb2RpbmcgPT09IDEpICYmIChibG9ja1B0ciAhPT0gYmxvY2subnVtVmFsaWRQaXhlbHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkJsb2NrIGFuZCBNYXNrIGRvIG5vdCBtYXRjaFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja0lkeCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdFBpeGVsczogcmVzdWx0UGl4ZWxzLFxuICAgICAgICByZXN1bHRNYXNrOiByZXN1bHRNYXNrLFxuICAgICAgICBtaW5WYWx1ZTogbWluVmFsdWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBmb3JtYXRGaWxlSW5mbyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZmlsZUlkZW50aWZpZXJTdHJpbmdcIjogZGF0YS5maWxlSWRlbnRpZmllclN0cmluZyxcbiAgICAgICAgXCJmaWxlVmVyc2lvblwiOiBkYXRhLmZpbGVWZXJzaW9uLFxuICAgICAgICBcImltYWdlVHlwZVwiOiBkYXRhLmltYWdlVHlwZSxcbiAgICAgICAgXCJoZWlnaHRcIjogZGF0YS5oZWlnaHQsXG4gICAgICAgIFwid2lkdGhcIjogZGF0YS53aWR0aCxcbiAgICAgICAgXCJtYXhaRXJyb3JcIjogZGF0YS5tYXhaRXJyb3IsXG4gICAgICAgIFwiZW9mT2Zmc2V0XCI6IGRhdGEuZW9mT2Zmc2V0LFxuICAgICAgICBcIm1hc2tcIjogZGF0YS5tYXNrID8ge1xuICAgICAgICAgIFwibnVtQmxvY2tzWFwiOiBkYXRhLm1hc2subnVtQmxvY2tzWCxcbiAgICAgICAgICBcIm51bUJsb2Nrc1lcIjogZGF0YS5tYXNrLm51bUJsb2Nrc1ksXG4gICAgICAgICAgXCJudW1CeXRlc1wiOiBkYXRhLm1hc2subnVtQnl0ZXMsXG4gICAgICAgICAgXCJtYXhWYWx1ZVwiOiBkYXRhLm1hc2subWF4VmFsdWVcbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIFwicGl4ZWxzXCI6IHtcbiAgICAgICAgICBcIm51bUJsb2Nrc1hcIjogZGF0YS5waXhlbHMubnVtQmxvY2tzWCxcbiAgICAgICAgICBcIm51bUJsb2Nrc1lcIjogZGF0YS5waXhlbHMubnVtQmxvY2tzWSxcbiAgICAgICAgICBcIm51bUJ5dGVzXCI6IGRhdGEucGl4ZWxzLm51bUJ5dGVzLFxuICAgICAgICAgIFwibWF4VmFsdWVcIjogZGF0YS5waXhlbHMubWF4VmFsdWUsXG4gICAgICAgICAgXCJub0RhdGFWYWx1ZVwiOiBkYXRhLm5vRGF0YVZhbHVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBjb21wdXRlVXNlZEJpdERlcHRocyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHZhciBudW1CbG9ja3MgPSBkYXRhLnBpeGVscy5udW1CbG9ja3NYICogZGF0YS5waXhlbHMubnVtQmxvY2tzWTtcbiAgICAgIHZhciBiaXREZXB0aHMgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQmxvY2tzOyBpKyspIHtcbiAgICAgICAgdmFyIGJsb2NrID0gZGF0YS5waXhlbHMuYmxvY2tzW2ldO1xuICAgICAgICBpZiAoYmxvY2suZW5jb2RpbmcgPT09IDApIHtcbiAgICAgICAgICBiaXREZXB0aHMuZmxvYXQzMiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYmxvY2suZW5jb2RpbmcgPT09IDEpIHtcbiAgICAgICAgICBiaXREZXB0aHNbYmxvY2suYml0c1BlclBpeGVsXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYml0RGVwdGhzWzBdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoYml0RGVwdGhzKTtcbiAgICB9O1xuXG4gICAgdmFyIHBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGZwLCBza2lwTWFzaykge1xuICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgLy8gRmlsZSBoZWFkZXJcbiAgICAgIHZhciBmaWxlSWRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQsIGZwLCAxMCk7XG4gICAgICBkYXRhLmZpbGVJZGVudGlmaWVyU3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBmaWxlSWRWaWV3KTtcbiAgICAgIGlmIChkYXRhLmZpbGVJZGVudGlmaWVyU3RyaW5nLnRyaW0oKSAhPT0gXCJDbnRaSW1hZ2VcIikge1xuICAgICAgICB0aHJvdyBcIlVuZXhwZWN0ZWQgZmlsZSBpZGVudGlmaWVyIHN0cmluZzogXCIgKyBkYXRhLmZpbGVJZGVudGlmaWVyU3RyaW5nO1xuICAgICAgfVxuICAgICAgZnAgKz0gMTA7XG4gICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgZnAsIDI0KTtcbiAgICAgIGRhdGEuZmlsZVZlcnNpb24gPSB2aWV3LmdldEludDMyKDAsIHRydWUpO1xuICAgICAgZGF0YS5pbWFnZVR5cGUgPSB2aWV3LmdldEludDMyKDQsIHRydWUpO1xuICAgICAgZGF0YS5oZWlnaHQgPSB2aWV3LmdldFVpbnQzMig4LCB0cnVlKTtcbiAgICAgIGRhdGEud2lkdGggPSB2aWV3LmdldFVpbnQzMigxMiwgdHJ1ZSk7XG4gICAgICBkYXRhLm1heFpFcnJvciA9IHZpZXcuZ2V0RmxvYXQ2NCgxNiwgdHJ1ZSk7XG4gICAgICBmcCArPSAyNDtcblxuICAgICAgLy8gTWFzayBIZWFkZXJcbiAgICAgIGlmICghc2tpcE1hc2spIHtcbiAgICAgICAgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgZnAsIDE2KTtcbiAgICAgICAgZGF0YS5tYXNrID0ge307XG4gICAgICAgIGRhdGEubWFzay5udW1CbG9ja3NZID0gdmlldy5nZXRVaW50MzIoMCwgdHJ1ZSk7XG4gICAgICAgIGRhdGEubWFzay5udW1CbG9ja3NYID0gdmlldy5nZXRVaW50MzIoNCwgdHJ1ZSk7XG4gICAgICAgIGRhdGEubWFzay5udW1CeXRlcyA9IHZpZXcuZ2V0VWludDMyKDgsIHRydWUpO1xuICAgICAgICBkYXRhLm1hc2subWF4VmFsdWUgPSB2aWV3LmdldEZsb2F0MzIoMTIsIHRydWUpO1xuICAgICAgICBmcCArPSAxNjtcblxuICAgICAgICAvLyBNYXNrIERhdGFcbiAgICAgICAgaWYgKGRhdGEubWFzay5udW1CeXRlcyA+IDApIHtcbiAgICAgICAgICB2YXIgYml0c2V0ID0gbmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKGRhdGEud2lkdGggKiBkYXRhLmhlaWdodCAvIDgpKTtcbiAgICAgICAgICB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBmcCwgZGF0YS5tYXNrLm51bUJ5dGVzKTtcbiAgICAgICAgICB2YXIgY250ID0gdmlldy5nZXRJbnQxNigwLCB0cnVlKTtcbiAgICAgICAgICB2YXIgaXAgPSAyLCBvcCA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGNudCA+IDApIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGNudC0tKSB7IGJpdHNldFtvcCsrXSA9IHZpZXcuZ2V0VWludDgoaXArKyk7IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSB2aWV3LmdldFVpbnQ4KGlwKyspO1xuICAgICAgICAgICAgICBjbnQgPSAtY250O1xuICAgICAgICAgICAgICB3aGlsZSAoY250LS0pIHsgYml0c2V0W29wKytdID0gdmFsOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbnQgPSB2aWV3LmdldEludDE2KGlwLCB0cnVlKTtcbiAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgfSB3aGlsZSAoaXAgPCBkYXRhLm1hc2subnVtQnl0ZXMpO1xuICAgICAgICAgIGlmICgoY250ICE9PSAtMzI3NjgpIHx8IChvcCA8IGJpdHNldC5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVuZXhwZWN0ZWQgZW5kIG9mIG1hc2sgUkxFIGVuY29kaW5nXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEubWFzay5iaXRzZXQgPSBiaXRzZXQ7XG4gICAgICAgICAgZnAgKz0gZGF0YS5tYXNrLm51bUJ5dGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChkYXRhLm1hc2subnVtQnl0ZXMgfCBkYXRhLm1hc2subnVtQmxvY2tzWSB8IGRhdGEubWFzay5tYXhWYWx1ZSkgPT09IDApIHsgIC8vIFNwZWNpYWwgY2FzZSwgYWxsIG5vZGF0YVxuICAgICAgICAgIGRhdGEubWFzay5iaXRzZXQgPSBuZXcgVWludDhBcnJheShNYXRoLmNlaWwoZGF0YS53aWR0aCAqIGRhdGEuaGVpZ2h0IC8gOCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBpeGVsIEhlYWRlclxuICAgICAgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgZnAsIDE2KTtcbiAgICAgIGRhdGEucGl4ZWxzID0ge307XG4gICAgICBkYXRhLnBpeGVscy5udW1CbG9ja3NZID0gdmlldy5nZXRVaW50MzIoMCwgdHJ1ZSk7XG4gICAgICBkYXRhLnBpeGVscy5udW1CbG9ja3NYID0gdmlldy5nZXRVaW50MzIoNCwgdHJ1ZSk7XG4gICAgICBkYXRhLnBpeGVscy5udW1CeXRlcyA9IHZpZXcuZ2V0VWludDMyKDgsIHRydWUpO1xuICAgICAgZGF0YS5waXhlbHMubWF4VmFsdWUgPSB2aWV3LmdldEZsb2F0MzIoMTIsIHRydWUpO1xuICAgICAgZnAgKz0gMTY7XG5cbiAgICAgIHZhciBudW1CbG9ja3NYID0gZGF0YS5waXhlbHMubnVtQmxvY2tzWDtcbiAgICAgIHZhciBudW1CbG9ja3NZID0gZGF0YS5waXhlbHMubnVtQmxvY2tzWTtcbiAgICAgIC8vIHRoZSBudW1iZXIgb2YgYmxvY2tzIHNwZWNpZmllZCBpbiB0aGUgaGVhZGVyIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW50IHRoZSBibG9ja3MgYXQgdGhlIGVuZCBvZlxuICAgICAgLy8gZWFjaCByb3cvY29sdW1uIHdpdGggYSBzcGVjaWFsIHdpZHRoL2hlaWdodCB0aGF0IG1ha2UgdGhlIGltYWdlIGNvbXBsZXRlIGluIGNhc2UgdGhlIHdpZHRoIGlzIG5vdFxuICAgICAgLy8gZXZlbmx5IGRpdmlzaWJsZSBieSB0aGUgbnVtYmVyIG9mIGJsb2Nrcy5cbiAgICAgIHZhciBhY3R1YWxOdW1CbG9ja3NYID0gbnVtQmxvY2tzWCArICgoZGF0YS53aWR0aCAlIG51bUJsb2Nrc1gpID4gMCA/IDEgOiAwKTtcbiAgICAgIHZhciBhY3R1YWxOdW1CbG9ja3NZID0gbnVtQmxvY2tzWSArICgoZGF0YS5oZWlnaHQgJSBudW1CbG9ja3NZKSA+IDAgPyAxIDogMCk7XG4gICAgICBkYXRhLnBpeGVscy5ibG9ja3MgPSBuZXcgQXJyYXkoYWN0dWFsTnVtQmxvY2tzWCAqIGFjdHVhbE51bUJsb2Nrc1kpO1xuICAgICAgdmFyIGJsb2NrSSA9IDA7XG4gICAgICBmb3IgKHZhciBibG9ja1kgPSAwOyBibG9ja1kgPCBhY3R1YWxOdW1CbG9ja3NZOyBibG9ja1krKykge1xuICAgICAgICBmb3IgKHZhciBibG9ja1ggPSAwOyBibG9ja1ggPCBhY3R1YWxOdW1CbG9ja3NYOyBibG9ja1grKykge1xuXG4gICAgICAgICAgLy8gQmxvY2tcbiAgICAgICAgICB2YXIgc2l6ZSA9IDA7XG4gICAgICAgICAgdmFyIGJ5dGVzTGVmdCA9IGlucHV0LmJ5dGVMZW5ndGggLSBmcDtcbiAgICAgICAgICB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBmcCwgTWF0aC5taW4oMTAsIGJ5dGVzTGVmdCkpO1xuICAgICAgICAgIHZhciBibG9jayA9IHt9O1xuICAgICAgICAgIGRhdGEucGl4ZWxzLmJsb2Nrc1tibG9ja0krK10gPSBibG9jaztcbiAgICAgICAgICB2YXIgaGVhZGVyQnl0ZSA9IHZpZXcuZ2V0VWludDgoMCk7IHNpemUrKztcbiAgICAgICAgICBibG9jay5lbmNvZGluZyA9IGhlYWRlckJ5dGUgJiA2MztcbiAgICAgICAgICBpZiAoYmxvY2suZW5jb2RpbmcgPiAzKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgYmxvY2sgZW5jb2RpbmcgKFwiICsgYmxvY2suZW5jb2RpbmcgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJsb2NrLmVuY29kaW5nID09PSAyKSB7XG4gICAgICAgICAgICBmcCsrO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoaGVhZGVyQnl0ZSAhPT0gMCkgJiYgKGhlYWRlckJ5dGUgIT09IDIpKSB7XG4gICAgICAgICAgICBoZWFkZXJCeXRlID4+PSA2O1xuICAgICAgICAgICAgYmxvY2sub2Zmc2V0VHlwZSA9IGhlYWRlckJ5dGU7XG4gICAgICAgICAgICBpZiAoaGVhZGVyQnl0ZSA9PT0gMikge1xuICAgICAgICAgICAgICBibG9jay5vZmZzZXQgPSB2aWV3LmdldEludDgoMSk7IHNpemUrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGVhZGVyQnl0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICBibG9jay5vZmZzZXQgPSB2aWV3LmdldEludDE2KDEsIHRydWUpOyBzaXplICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlYWRlckJ5dGUgPT09IDApIHtcbiAgICAgICAgICAgICAgYmxvY2sub2Zmc2V0ID0gdmlldy5nZXRGbG9hdDMyKDEsIHRydWUpOyBzaXplICs9IDQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgYmxvY2sgb2Zmc2V0IHR5cGVcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJsb2NrLmVuY29kaW5nID09PSAxKSB7XG4gICAgICAgICAgICAgIGhlYWRlckJ5dGUgPSB2aWV3LmdldFVpbnQ4KHNpemUpOyBzaXplKys7XG4gICAgICAgICAgICAgIGJsb2NrLmJpdHNQZXJQaXhlbCA9IGhlYWRlckJ5dGUgJiA2MztcbiAgICAgICAgICAgICAgaGVhZGVyQnl0ZSA+Pj0gNjtcbiAgICAgICAgICAgICAgYmxvY2subnVtVmFsaWRQaXhlbHNUeXBlID0gaGVhZGVyQnl0ZTtcbiAgICAgICAgICAgICAgaWYgKGhlYWRlckJ5dGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBibG9jay5udW1WYWxpZFBpeGVscyA9IHZpZXcuZ2V0VWludDgoc2l6ZSk7IHNpemUrKztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoZWFkZXJCeXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYmxvY2subnVtVmFsaWRQaXhlbHMgPSB2aWV3LmdldFVpbnQxNihzaXplLCB0cnVlKTsgc2l6ZSArPSAyO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhlYWRlckJ5dGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBibG9jay5udW1WYWxpZFBpeGVscyA9IHZpZXcuZ2V0VWludDMyKHNpemUsIHRydWUpOyBzaXplICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGVcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmcCArPSBzaXplO1xuXG4gICAgICAgICAgaWYgKGJsb2NrLmVuY29kaW5nID09PSAzKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYXJyYXlCdWYsIHN0b3JlODtcbiAgICAgICAgICBpZiAoYmxvY2suZW5jb2RpbmcgPT09IDApIHtcbiAgICAgICAgICAgIHZhciBudW1QaXhlbHMgPSAoZGF0YS5waXhlbHMubnVtQnl0ZXMgLSAxKSAvIDQ7XG4gICAgICAgICAgICBpZiAobnVtUGl4ZWxzICE9PSBNYXRoLmZsb29yKG51bVBpeGVscykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgXCJ1bmNvbXByZXNzZWQgYmxvY2sgaGFzIGludmFsaWQgbGVuZ3RoXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihudW1QaXhlbHMgKiA0KTtcbiAgICAgICAgICAgIHN0b3JlOCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgIHN0b3JlOC5zZXQobmV3IFVpbnQ4QXJyYXkoaW5wdXQsIGZwLCBudW1QaXhlbHMgKiA0KSk7XG4gICAgICAgICAgICB2YXIgcmF3RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgICAgYmxvY2sucmF3RGF0YSA9IHJhd0RhdGE7XG4gICAgICAgICAgICBmcCArPSBudW1QaXhlbHMgKiA0O1xuICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2suZW5jb2RpbmcgPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRhQnl0ZXMgPSBNYXRoLmNlaWwoYmxvY2subnVtVmFsaWRQaXhlbHMgKiBibG9jay5iaXRzUGVyUGl4ZWwgLyA4KTtcbiAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBNYXRoLmNlaWwoZGF0YUJ5dGVzIC8gNCk7XG4gICAgICAgICAgICBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihkYXRhV29yZHMgKiA0KTtcbiAgICAgICAgICAgIHN0b3JlOCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgIHN0b3JlOC5zZXQobmV3IFVpbnQ4QXJyYXkoaW5wdXQsIGZwLCBkYXRhQnl0ZXMpKTtcbiAgICAgICAgICAgIGJsb2NrLnN0dWZmZWREYXRhID0gbmV3IFVpbnQzMkFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgIGZwICs9IGRhdGFCeXRlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhdGEuZW9mT2Zmc2V0ID0gZnA7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3R1ZmYgPSBmdW5jdGlvbihzcmMsIGJpdHNQZXJQaXhlbCwgbnVtUGl4ZWxzLCBvZmZzZXQsIHNjYWxlLCBkZXN0LCBtYXhWYWx1ZSkge1xuICAgICAgdmFyIGJpdE1hc2sgPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcbiAgICAgIHZhciBpID0gMCwgbztcbiAgICAgIHZhciBiaXRzTGVmdCA9IDA7XG4gICAgICB2YXIgbiwgYnVmZmVyO1xuICAgICAgdmFyIG5tYXggPSBNYXRoLmNlaWwoKG1heFZhbHVlIC0gb2Zmc2V0KSAvIHNjYWxlKTtcbiAgICAgIC8vIGdldCByaWQgb2YgdHJhaWxpbmcgYnl0ZXMgdGhhdCBhcmUgYWxyZWFkeSBwYXJ0IG9mIG5leHQgYmxvY2tcbiAgICAgIHZhciBudW1JbnZhbGlkVGFpbEJ5dGVzID0gc3JjLmxlbmd0aCAqIDQgLSBNYXRoLmNlaWwoYml0c1BlclBpeGVsICogbnVtUGl4ZWxzIC8gOCk7XG4gICAgICBzcmNbc3JjLmxlbmd0aCAtIDFdIDw8PSA4ICogbnVtSW52YWxpZFRhaWxCeXRlcztcblxuICAgICAgZm9yIChvID0gMDsgbyA8IG51bVBpeGVsczsgbysrKSB7XG4gICAgICAgIGlmIChiaXRzTGVmdCA9PT0gMCkge1xuICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgIGJpdHNMZWZ0ID0gMzI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNMZWZ0ID49IGJpdHNQZXJQaXhlbCkge1xuICAgICAgICAgIG4gPSAoYnVmZmVyID4+PiAoYml0c0xlZnQgLSBiaXRzUGVyUGl4ZWwpKSAmIGJpdE1hc2s7XG4gICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtaXNzaW5nQml0cyA9IChiaXRzUGVyUGl4ZWwgLSBiaXRzTGVmdCk7XG4gICAgICAgICAgbiA9ICgoYnVmZmVyICYgYml0TWFzaykgPDwgbWlzc2luZ0JpdHMpICYgYml0TWFzaztcbiAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICBiaXRzTGVmdCA9IDMyIC0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgbiArPSAoYnVmZmVyID4+PiBiaXRzTGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9waXhlbCB2YWx1ZXMgbWF5IGV4Y2VlZCBtYXggZHVlIHRvIHF1YW50aXphdGlvblxuICAgICAgICBkZXN0W29dID0gbiA8IG5tYXggPyBvZmZzZXQgKyBuICogc2NhbGUgOiBtYXhWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXN0O1xuICAgIH07XG5cbiAgICByZXR1cm4gQ250WkltYWdlO1xuICB9KSgpO1xuXG4gIC8vdmVyc2lvbiAyLiBTdXBwb3J0cyAyLjEsIDIuMiwgMi4zXG4gIHZhciBMZXJjMkRlY29kZSA9IChmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAvLyBOb3RlOiBjdXJyZW50bHksIHRoaXMgbW9kdWxlIG9ubHkgaGFzIGFuIGltcGxlbWVudGF0aW9uIGZvciBkZWNvZGluZyBMRVJDIGRhdGEsIG5vdCBlbmNvZGluZy4gVGhlIG5hbWUgb2ZcbiAgICAvLyB0aGUgY2xhc3Mgd2FzIGNob3NlbiB0byBiZSBmdXR1cmUgcHJvb2YsIGZvbGxvd2luZyBMZXJjRGVjb2RlLlxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBwcml2YXRlIHN0YXRpYyBjbGFzcyBiaXRzdXRmZmVyIHVzZWQgYnkgTGVyYzJEZWNvZGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHZhciBCaXRTdHVmZmVyID0ge1xuICAgICAgLy9tZXRob2RzIGVuZGluZyB3aXRoIDIgYXJlIGZvciB0aGUgbmV3IGJ5dGUgb3JkZXIgdXNlZCBieSBMZXJjMi4zIGFuZCBhYm92ZS5cbiAgICAgIC8vb3JpZ2luYWxVbnN0dWZmIGlzIHVzZWQgdG8gdW5wYWNrIEh1ZmZtYW4gY29kZSB0YWJsZS4gY29kZSBpcyBkdXBsaWNhdGVkIHRvIHVuc3R1ZmZ4IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICAgICAgdW5zdHVmZjogZnVuY3Rpb24oc3JjLCBkZXN0LCBiaXRzUGVyUGl4ZWwsIG51bVBpeGVscywgbHV0QXJyLCBvZmZzZXQsIHNjYWxlLCBtYXhWYWx1ZSkge1xuICAgICAgICB2YXIgYml0TWFzayA9ICgxIDw8IGJpdHNQZXJQaXhlbCkgLSAxO1xuICAgICAgICB2YXIgaSA9IDAsIG87XG4gICAgICAgIHZhciBiaXRzTGVmdCA9IDA7XG4gICAgICAgIHZhciBuLCBidWZmZXIsIG1pc3NpbmdCaXRzLCBubWF4O1xuXG4gICAgICAgIC8vIGdldCByaWQgb2YgdHJhaWxpbmcgYnl0ZXMgdGhhdCBhcmUgYWxyZWFkeSBwYXJ0IG9mIG5leHQgYmxvY2tcbiAgICAgICAgdmFyIG51bUludmFsaWRUYWlsQnl0ZXMgPSBzcmMubGVuZ3RoICogNCAtIE1hdGguY2VpbChiaXRzUGVyUGl4ZWwgKiBudW1QaXhlbHMgLyA4KTtcbiAgICAgICAgc3JjW3NyYy5sZW5ndGggLSAxXSA8PD0gOCAqIG51bUludmFsaWRUYWlsQnl0ZXM7XG4gICAgICAgIGlmIChsdXRBcnIpIHtcbiAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgbnVtUGl4ZWxzOyBvKyspIHtcbiAgICAgICAgICAgIGlmIChiaXRzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICAgICAgYml0c0xlZnQgPSAzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiaXRzTGVmdCA+PSBiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgICAgbiA9IChidWZmZXIgPj4+IChiaXRzTGVmdCAtIGJpdHNQZXJQaXhlbCkpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1pc3NpbmdCaXRzID0gKGJpdHNQZXJQaXhlbCAtIGJpdHNMZWZ0KTtcbiAgICAgICAgICAgICAgbiA9ICgoYnVmZmVyICYgYml0TWFzaykgPDwgbWlzc2luZ0JpdHMpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICAgIGJpdHNMZWZ0ID0gMzIgLSBtaXNzaW5nQml0cztcbiAgICAgICAgICAgICAgbiArPSAoYnVmZmVyID4+PiBiaXRzTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXN0W29dID0gbHV0QXJyW25dOy8vb2Zmc2V0ICsgbHV0QXJyW25dICogc2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG5tYXggPSBNYXRoLmNlaWwoKG1heFZhbHVlIC0gb2Zmc2V0KSAvIHNjYWxlKTtcbiAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgbnVtUGl4ZWxzOyBvKyspIHtcbiAgICAgICAgICAgIGlmIChiaXRzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICAgICAgYml0c0xlZnQgPSAzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiaXRzTGVmdCA+PSBiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgICAgbiA9IChidWZmZXIgPj4+IChiaXRzTGVmdCAtIGJpdHNQZXJQaXhlbCkpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1pc3NpbmdCaXRzID0gKGJpdHNQZXJQaXhlbCAtIGJpdHNMZWZ0KTtcbiAgICAgICAgICAgICAgbiA9ICgoYnVmZmVyICYgYml0TWFzaykgPDwgbWlzc2luZ0JpdHMpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICAgIGJpdHNMZWZ0ID0gMzIgLSBtaXNzaW5nQml0cztcbiAgICAgICAgICAgICAgbiArPSAoYnVmZmVyID4+PiBiaXRzTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3BpeGVsIHZhbHVlcyBtYXkgZXhjZWVkIG1heCBkdWUgdG8gcXVhbnRpemF0aW9uXG4gICAgICAgICAgICBkZXN0W29dID0gbiA8IG5tYXggPyBvZmZzZXQgKyBuICogc2NhbGUgOiBtYXhWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHVuc3R1ZmZMVVQ6IGZ1bmN0aW9uKHNyYywgYml0c1BlclBpeGVsLCBudW1QaXhlbHMsIG9mZnNldCwgc2NhbGUsIG1heFZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRNYXNrID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG4gICAgICAgIHZhciBpID0gMCwgbyA9IDAsIG1pc3NpbmdCaXRzID0gMCwgYml0c0xlZnQgPSAwLCBuID0gMDtcbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIGRlc3QgPSBbXTtcblxuICAgICAgICAvLyBnZXQgcmlkIG9mIHRyYWlsaW5nIGJ5dGVzIHRoYXQgYXJlIGFscmVhZHkgcGFydCBvZiBuZXh0IGJsb2NrXG4gICAgICAgIHZhciBudW1JbnZhbGlkVGFpbEJ5dGVzID0gc3JjLmxlbmd0aCAqIDQgLSBNYXRoLmNlaWwoYml0c1BlclBpeGVsICogbnVtUGl4ZWxzIC8gOCk7XG4gICAgICAgIHNyY1tzcmMubGVuZ3RoIC0gMV0gPDw9IDggKiBudW1JbnZhbGlkVGFpbEJ5dGVzO1xuXG4gICAgICAgIHZhciBubWF4ID0gTWF0aC5jZWlsKChtYXhWYWx1ZSAtIG9mZnNldCkgLyBzY2FsZSk7XG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBudW1QaXhlbHM7IG8rKykge1xuICAgICAgICAgIGlmIChiaXRzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICBiaXRzTGVmdCA9IDMyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYml0c0xlZnQgPj0gYml0c1BlclBpeGVsKSB7XG4gICAgICAgICAgICBuID0gKGJ1ZmZlciA+Pj4gKGJpdHNMZWZ0IC0gYml0c1BlclBpeGVsKSkgJiBiaXRNYXNrO1xuICAgICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzaW5nQml0cyA9IChiaXRzUGVyUGl4ZWwgLSBiaXRzTGVmdCk7XG4gICAgICAgICAgICBuID0gKChidWZmZXIgJiBiaXRNYXNrKSA8PCBtaXNzaW5nQml0cykgJiBiaXRNYXNrO1xuICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICBiaXRzTGVmdCA9IDMyIC0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgICBuICs9IChidWZmZXIgPj4+IGJpdHNMZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9kZXN0LnB1c2gobik7XG4gICAgICAgICAgZGVzdFtvXSA9IG4gPCBubWF4ID8gb2Zmc2V0ICsgbiAqIHNjYWxlIDogbWF4VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdC51bnNoaWZ0KG9mZnNldCk7Ly8xc3Qgb25lXG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgICAgfSxcblxuICAgICAgdW5zdHVmZjI6IGZ1bmN0aW9uKHNyYywgZGVzdCwgYml0c1BlclBpeGVsLCBudW1QaXhlbHMsIGx1dEFyciwgb2Zmc2V0LCBzY2FsZSwgbWF4VmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdE1hc2sgPSAoMSA8PCBiaXRzUGVyUGl4ZWwpIC0gMTtcbiAgICAgICAgdmFyIGkgPSAwLCBvO1xuICAgICAgICB2YXIgYml0c0xlZnQgPSAwLCBiaXRQb3MgPSAwO1xuICAgICAgICB2YXIgbiwgYnVmZmVyLCBtaXNzaW5nQml0cztcbiAgICAgICAgaWYgKGx1dEFycikge1xuICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBudW1QaXhlbHM7IG8rKykge1xuICAgICAgICAgICAgaWYgKGJpdHNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgICAgICBiaXRzTGVmdCA9IDMyO1xuICAgICAgICAgICAgICBiaXRQb3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJpdHNMZWZ0ID49IGJpdHNQZXJQaXhlbCkge1xuICAgICAgICAgICAgICBuID0gKChidWZmZXIgPj4+IGJpdFBvcykgJiBiaXRNYXNrKTtcbiAgICAgICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICAgICAgICBiaXRQb3MgKz0gYml0c1BlclBpeGVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWlzc2luZ0JpdHMgPSAoYml0c1BlclBpeGVsIC0gYml0c0xlZnQpO1xuICAgICAgICAgICAgICBuID0gKGJ1ZmZlciA+Pj4gYml0UG9zKSAmIGJpdE1hc2s7XG4gICAgICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgICAgICBiaXRzTGVmdCA9IDMyIC0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgICAgIG4gfD0gKGJ1ZmZlciAmICgoMSA8PCBtaXNzaW5nQml0cykgLSAxKSkgPDwgKGJpdHNQZXJQaXhlbCAtIG1pc3NpbmdCaXRzKTtcbiAgICAgICAgICAgICAgYml0UG9zID0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXN0W29dID0gbHV0QXJyW25dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgbm1heCA9IE1hdGguY2VpbCgobWF4VmFsdWUgLSBvZmZzZXQpIC8gc2NhbGUpO1xuICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBudW1QaXhlbHM7IG8rKykge1xuICAgICAgICAgICAgaWYgKGJpdHNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgICAgICBiaXRzTGVmdCA9IDMyO1xuICAgICAgICAgICAgICBiaXRQb3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJpdHNMZWZ0ID49IGJpdHNQZXJQaXhlbCkge1xuICAgICAgICAgICAgICAvL25vIHVuc2lnbmVkIGxlZnQgc2hpZnRcbiAgICAgICAgICAgICAgbiA9ICgoYnVmZmVyID4+PiBiaXRQb3MpICYgYml0TWFzayk7XG4gICAgICAgICAgICAgIGJpdHNMZWZ0IC09IGJpdHNQZXJQaXhlbDtcbiAgICAgICAgICAgICAgYml0UG9zICs9IGJpdHNQZXJQaXhlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pc3NpbmdCaXRzID0gKGJpdHNQZXJQaXhlbCAtIGJpdHNMZWZ0KTtcbiAgICAgICAgICAgICAgbiA9IChidWZmZXIgPj4+IGJpdFBvcykgJiBiaXRNYXNrOy8vKChidWZmZXIgJiBiaXRNYXNrKSA8PCBtaXNzaW5nQml0cykgJiBiaXRNYXNrO1xuICAgICAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICAgICAgYml0c0xlZnQgPSAzMiAtIG1pc3NpbmdCaXRzO1xuICAgICAgICAgICAgICBuIHw9IChidWZmZXIgJiAoKDEgPDwgbWlzc2luZ0JpdHMpIC0gMSkpIDw8IChiaXRzUGVyUGl4ZWwgLSBtaXNzaW5nQml0cyk7XG4gICAgICAgICAgICAgIGJpdFBvcyA9IG1pc3NpbmdCaXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9waXhlbCB2YWx1ZXMgbWF5IGV4Y2VlZCBtYXggZHVlIHRvIHF1YW50aXphdGlvblxuICAgICAgICAgICAgZGVzdFtvXSA9IG4gPCBubWF4ID8gb2Zmc2V0ICsgbiAqIHNjYWxlIDogbWF4VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgICAgfSxcblxuICAgICAgdW5zdHVmZkxVVDI6IGZ1bmN0aW9uKHNyYywgYml0c1BlclBpeGVsLCBudW1QaXhlbHMsIG9mZnNldCwgc2NhbGUsIG1heFZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRNYXNrID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG4gICAgICAgIHZhciBpID0gMCwgbyA9IDAsIG1pc3NpbmdCaXRzID0gMCwgYml0c0xlZnQgPSAwLCBuID0gMCwgYml0UG9zID0gMDtcbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIGRlc3QgPSBbXTtcbiAgICAgICAgdmFyIG5tYXggPSBNYXRoLmNlaWwoKG1heFZhbHVlIC0gb2Zmc2V0KSAvIHNjYWxlKTtcbiAgICAgICAgZm9yIChvID0gMDsgbyA8IG51bVBpeGVsczsgbysrKSB7XG4gICAgICAgICAgaWYgKGJpdHNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICAgIGJpdHNMZWZ0ID0gMzI7XG4gICAgICAgICAgICBiaXRQb3MgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYml0c0xlZnQgPj0gYml0c1BlclBpeGVsKSB7XG4gICAgICAgICAgICAvL25vIHVuc2lnbmVkIGxlZnQgc2hpZnRcbiAgICAgICAgICAgIG4gPSAoKGJ1ZmZlciA+Pj4gYml0UG9zKSAmIGJpdE1hc2spO1xuICAgICAgICAgICAgYml0c0xlZnQgLT0gYml0c1BlclBpeGVsO1xuICAgICAgICAgICAgYml0UG9zICs9IGJpdHNQZXJQaXhlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWlzc2luZ0JpdHMgPSAoYml0c1BlclBpeGVsIC0gYml0c0xlZnQpO1xuICAgICAgICAgICAgbiA9IChidWZmZXIgPj4+IGJpdFBvcykgJiBiaXRNYXNrOy8vKChidWZmZXIgJiBiaXRNYXNrKSA8PCBtaXNzaW5nQml0cykgJiBiaXRNYXNrO1xuICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICBiaXRzTGVmdCA9IDMyIC0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgICBuIHw9IChidWZmZXIgJiAoKDEgPDwgbWlzc2luZ0JpdHMpIC0gMSkpIDw8IChiaXRzUGVyUGl4ZWwgLSBtaXNzaW5nQml0cyk7XG4gICAgICAgICAgICBiaXRQb3MgPSBtaXNzaW5nQml0cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9kZXN0LnB1c2gobik7XG4gICAgICAgICAgZGVzdFtvXSA9IG4gPCBubWF4ID8gb2Zmc2V0ICsgbiAqIHNjYWxlIDogbWF4VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdC51bnNoaWZ0KG9mZnNldCk7XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgICAgfSxcblxuICAgICAgb3JpZ2luYWxVbnN0dWZmOiBmdW5jdGlvbihzcmMsIGRlc3QsIGJpdHNQZXJQaXhlbCwgbnVtUGl4ZWxzKSB7XG4gICAgICAgIHZhciBiaXRNYXNrID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG4gICAgICAgIHZhciBpID0gMCwgbztcbiAgICAgICAgdmFyIGJpdHNMZWZ0ID0gMDtcbiAgICAgICAgdmFyIG4sIGJ1ZmZlciwgbWlzc2luZ0JpdHM7XG5cbiAgICAgICAgLy8gZ2V0IHJpZCBvZiB0cmFpbGluZyBieXRlcyB0aGF0IGFyZSBhbHJlYWR5IHBhcnQgb2YgbmV4dCBibG9ja1xuICAgICAgICB2YXIgbnVtSW52YWxpZFRhaWxCeXRlcyA9IHNyYy5sZW5ndGggKiA0IC0gTWF0aC5jZWlsKGJpdHNQZXJQaXhlbCAqIG51bVBpeGVscyAvIDgpO1xuICAgICAgICBzcmNbc3JjLmxlbmd0aCAtIDFdIDw8PSA4ICogbnVtSW52YWxpZFRhaWxCeXRlcztcblxuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgbnVtUGl4ZWxzOyBvKyspIHtcbiAgICAgICAgICBpZiAoYml0c0xlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgICAgYml0c0xlZnQgPSAzMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJpdHNMZWZ0ID49IGJpdHNQZXJQaXhlbCkge1xuICAgICAgICAgICAgbiA9IChidWZmZXIgPj4+IChiaXRzTGVmdCAtIGJpdHNQZXJQaXhlbCkpICYgYml0TWFzaztcbiAgICAgICAgICAgIGJpdHNMZWZ0IC09IGJpdHNQZXJQaXhlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtaXNzaW5nQml0cyA9IChiaXRzUGVyUGl4ZWwgLSBiaXRzTGVmdCk7XG4gICAgICAgICAgICBuID0gKChidWZmZXIgJiBiaXRNYXNrKSA8PCBtaXNzaW5nQml0cykgJiBiaXRNYXNrO1xuICAgICAgICAgICAgYnVmZmVyID0gc3JjW2krK107XG4gICAgICAgICAgICBiaXRzTGVmdCA9IDMyIC0gbWlzc2luZ0JpdHM7XG4gICAgICAgICAgICBuICs9IChidWZmZXIgPj4+IGJpdHNMZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVzdFtvXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc3Q7XG4gICAgICB9LFxuXG4gICAgICBvcmlnaW5hbFVuc3R1ZmYyOiBmdW5jdGlvbihzcmMsIGRlc3QsIGJpdHNQZXJQaXhlbCwgbnVtUGl4ZWxzKSB7XG4gICAgICAgIHZhciBiaXRNYXNrID0gKDEgPDwgYml0c1BlclBpeGVsKSAtIDE7XG4gICAgICAgIHZhciBpID0gMCwgbztcbiAgICAgICAgdmFyIGJpdHNMZWZ0ID0gMCwgYml0UG9zID0gMDtcbiAgICAgICAgdmFyIG4sIGJ1ZmZlciwgbWlzc2luZ0JpdHM7XG4gICAgICAgIC8vbWljcm8tb3B0aW1pemF0aW9uc1xuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgbnVtUGl4ZWxzOyBvKyspIHtcbiAgICAgICAgICBpZiAoYml0c0xlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHNyY1tpKytdO1xuICAgICAgICAgICAgYml0c0xlZnQgPSAzMjtcbiAgICAgICAgICAgIGJpdFBvcyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChiaXRzTGVmdCA+PSBiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgIC8vbm8gdW5zaWduZWQgbGVmdCBzaGlmdFxuICAgICAgICAgICAgbiA9ICgoYnVmZmVyID4+PiBiaXRQb3MpICYgYml0TWFzayk7XG4gICAgICAgICAgICBiaXRzTGVmdCAtPSBiaXRzUGVyUGl4ZWw7XG4gICAgICAgICAgICBiaXRQb3MgKz0gYml0c1BlclBpeGVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzaW5nQml0cyA9IChiaXRzUGVyUGl4ZWwgLSBiaXRzTGVmdCk7XG4gICAgICAgICAgICBuID0gKGJ1ZmZlciA+Pj4gYml0UG9zKSAmIGJpdE1hc2s7Ly8oKGJ1ZmZlciAmIGJpdE1hc2spIDw8IG1pc3NpbmdCaXRzKSAmIGJpdE1hc2s7XG4gICAgICAgICAgICBidWZmZXIgPSBzcmNbaSsrXTtcbiAgICAgICAgICAgIGJpdHNMZWZ0ID0gMzIgLSBtaXNzaW5nQml0cztcbiAgICAgICAgICAgIG4gfD0gKGJ1ZmZlciAmICgoMSA8PCBtaXNzaW5nQml0cykgLSAxKSkgPDwgKGJpdHNQZXJQaXhlbCAtIG1pc3NpbmdCaXRzKTtcbiAgICAgICAgICAgIGJpdFBvcyA9IG1pc3NpbmdCaXRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZXN0W29dID0gbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKnByaXZhdGUgc3RhdGljIGNsYXNzIHVzZWQgYnkgTGVyYzJEZWNvZGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgdmFyIExlcmMySGVscGVycyA9IHtcbiAgICAgIEhVRkZNQU5fTFVUX0JJVFNfTUFYOiAxMiwgLy91c2UgMl4xMiBsdXQsIHRyZWF0IGl0IGxpa2UgY29uc3RhbnRcbiAgICAgIGNvbXB1dGVDaGVja3N1bUZsZXRjaGVyMzI6IGZ1bmN0aW9uKGlucHV0KSB7XG5cbiAgICAgICAgdmFyIHN1bTEgPSAweGZmZmYsIHN1bTIgPSAweGZmZmY7XG4gICAgICAgIHZhciBsZW4gPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHZhciB3b3JkcyA9IE1hdGguZmxvb3IobGVuIC8gMik7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKHdvcmRzKSB7XG4gICAgICAgICAgdmFyIHRsZW4gPSAod29yZHMgPj0gMzU5KSA/IDM1OSA6IHdvcmRzO1xuICAgICAgICAgIHdvcmRzIC09IHRsZW47XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgc3VtMSArPSAoaW5wdXRbaSsrXSA8PCA4KTtcbiAgICAgICAgICAgIHN1bTIgKz0gc3VtMSArPSBpbnB1dFtpKytdO1xuICAgICAgICAgIH0gd2hpbGUgKC0tdGxlbik7XG5cbiAgICAgICAgICBzdW0xID0gKHN1bTEgJiAweGZmZmYpICsgKHN1bTEgPj4+IDE2KTtcbiAgICAgICAgICBzdW0yID0gKHN1bTIgJiAweGZmZmYpICsgKHN1bTIgPj4+IDE2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0aGUgc3RyYWdnbGVyIGJ5dGUgaWYgaXQgZXhpc3RzXG4gICAgICAgIGlmIChsZW4gJiAxKSB7XG4gICAgICAgICAgc3VtMiArPSBzdW0xICs9IChpbnB1dFtpXSA8PCA4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWNvbmQgcmVkdWN0aW9uIHN0ZXAgdG8gcmVkdWNlIHN1bXMgdG8gMTYgYml0c1xuICAgICAgICBzdW0xID0gKHN1bTEgJiAweGZmZmYpICsgKHN1bTEgPj4+IDE2KTtcbiAgICAgICAgc3VtMiA9IChzdW0yICYgMHhmZmZmKSArIChzdW0yID4+PiAxNik7XG5cbiAgICAgICAgcmV0dXJuIChzdW0yIDw8IDE2IHwgc3VtMSkgPj4+IDA7XG4gICAgICB9LFxuXG4gICAgICByZWFkSGVhZGVySW5mbzogZnVuY3Rpb24oaW5wdXQsIGRhdGEpIHtcbiAgICAgICAgdmFyIHB0ciA9IGRhdGEucHRyO1xuICAgICAgICB2YXIgZmlsZUlkVmlldyA9IG5ldyBVaW50OEFycmF5KGlucHV0LCBwdHIsIDYpO1xuICAgICAgICB2YXIgaGVhZGVySW5mbyA9IHt9O1xuICAgICAgICBoZWFkZXJJbmZvLmZpbGVJZGVudGlmaWVyU3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBmaWxlSWRWaWV3KTtcbiAgICAgICAgaWYgKGhlYWRlckluZm8uZmlsZUlkZW50aWZpZXJTdHJpbmcubGFzdEluZGV4T2YoXCJMZXJjMlwiLCAwKSAhPT0gMCkge1xuICAgICAgICAgIHRocm93IFwiVW5leHBlY3RlZCBmaWxlIGlkZW50aWZpZXIgc3RyaW5nIChleHBlY3QgTGVyYzIgKTogXCIgKyBoZWFkZXJJbmZvLmZpbGVJZGVudGlmaWVyU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHB0ciArPSA2O1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgcHRyLCA4KTtcbiAgICAgICAgdmFyIGZpbGVWZXJzaW9uID0gdmlldy5nZXRJbnQzMigwLCB0cnVlKTtcbiAgICAgICAgaGVhZGVySW5mby5maWxlVmVyc2lvbiA9IGZpbGVWZXJzaW9uO1xuICAgICAgICBwdHIgKz0gNDtcbiAgICAgICAgaWYgKGZpbGVWZXJzaW9uID49IDMpIHtcbiAgICAgICAgICBoZWFkZXJJbmZvLmNoZWNrc3VtID0gdmlldy5nZXRVaW50MzIoNCwgdHJ1ZSk7IC8vbnJvd3NcbiAgICAgICAgICBwdHIgKz0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8va2V5cyBzdGFydCBmcm9tIGhlcmVcbiAgICAgICAgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgcHRyLCAxMik7XG4gICAgICAgIGhlYWRlckluZm8uaGVpZ2h0ID0gdmlldy5nZXRVaW50MzIoMCwgdHJ1ZSk7IC8vbnJvd3NcbiAgICAgICAgaGVhZGVySW5mby53aWR0aCA9IHZpZXcuZ2V0VWludDMyKDQsIHRydWUpOyAvL25jb2xzXG4gICAgICAgIHB0ciArPSA4O1xuICAgICAgICBpZiAoZmlsZVZlcnNpb24gPj0gNCkge1xuICAgICAgICAgIGhlYWRlckluZm8ubnVtRGltcyA9IHZpZXcuZ2V0VWludDMyKDgsIHRydWUpO1xuICAgICAgICAgIHB0ciArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlYWRlckluZm8ubnVtRGltcyA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBwdHIsIDQwKTtcbiAgICAgICAgaGVhZGVySW5mby5udW1WYWxpZFBpeGVsID0gdmlldy5nZXRVaW50MzIoMCwgdHJ1ZSk7XG4gICAgICAgIGhlYWRlckluZm8ubWljcm9CbG9ja1NpemUgPSB2aWV3LmdldEludDMyKDQsIHRydWUpO1xuICAgICAgICBoZWFkZXJJbmZvLmJsb2JTaXplID0gdmlldy5nZXRJbnQzMig4LCB0cnVlKTtcbiAgICAgICAgaGVhZGVySW5mby5pbWFnZVR5cGUgPSB2aWV3LmdldEludDMyKDEyLCB0cnVlKTtcblxuICAgICAgICBoZWFkZXJJbmZvLm1heFpFcnJvciA9IHZpZXcuZ2V0RmxvYXQ2NCgxNiwgdHJ1ZSk7XG4gICAgICAgIGhlYWRlckluZm8uek1pbiA9IHZpZXcuZ2V0RmxvYXQ2NCgyNCwgdHJ1ZSk7XG4gICAgICAgIGhlYWRlckluZm8uek1heCA9IHZpZXcuZ2V0RmxvYXQ2NCgzMiwgdHJ1ZSk7XG4gICAgICAgIHB0ciArPSA0MDtcbiAgICAgICAgZGF0YS5oZWFkZXJJbmZvID0gaGVhZGVySW5mbztcbiAgICAgICAgZGF0YS5wdHIgPSBwdHI7XG5cbiAgICAgICAgdmFyIGNoZWNrc3VtLCBrZXlMZW5ndGg7XG4gICAgICAgIGlmIChmaWxlVmVyc2lvbiA+PSAzKSB7XG4gICAgICAgICAga2V5TGVuZ3RoID0gZmlsZVZlcnNpb24gPj0gNCA/IDUyIDogNDg7XG4gICAgICAgICAgY2hlY2tzdW0gPSB0aGlzLmNvbXB1dGVDaGVja3N1bUZsZXRjaGVyMzIobmV3IFVpbnQ4QXJyYXkoaW5wdXQsIHB0ciAtIGtleUxlbmd0aCwgaGVhZGVySW5mby5ibG9iU2l6ZSAtIDE0KSk7XG4gICAgICAgICAgaWYgKGNoZWNrc3VtICE9PSBoZWFkZXJJbmZvLmNoZWNrc3VtKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkNoZWNrc3VtIGZhaWxlZC5cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG4gICAgICBjaGVja01pbk1heFJhbmdlczogZnVuY3Rpb24oaW5wdXQsIGRhdGEpIHtcbiAgICAgICAgdmFyIGhlYWRlckluZm8gPSBkYXRhLmhlYWRlckluZm87XG4gICAgICAgIHZhciBPdXRQaXhlbFR5cGVBcnJheSA9IHRoaXMuZ2V0RGF0YVR5cGVBcnJheShoZWFkZXJJbmZvLmltYWdlVHlwZSk7XG4gICAgICAgIHZhciByYW5nZUJ5dGVzID0gaGVhZGVySW5mby5udW1EaW1zICogdGhpcy5nZXREYXRhVHlwZVNpemUoaGVhZGVySW5mby5pbWFnZVR5cGUpO1xuICAgICAgICB2YXIgbWluVmFsdWVzID0gdGhpcy5yZWFkU3ViQXJyYXkoaW5wdXQsIGRhdGEucHRyLCBPdXRQaXhlbFR5cGVBcnJheSwgcmFuZ2VCeXRlcyk7XG4gICAgICAgIHZhciBtYXhWYWx1ZXMgPSB0aGlzLnJlYWRTdWJBcnJheShpbnB1dCwgZGF0YS5wdHIgKyByYW5nZUJ5dGVzLCBPdXRQaXhlbFR5cGVBcnJheSwgcmFuZ2VCeXRlcyk7XG4gICAgICAgIGRhdGEucHRyICs9ICgyICogcmFuZ2VCeXRlcyk7XG4gICAgICAgIHZhciBpLCBlcXVhbCA9IHRydWU7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoZWFkZXJJbmZvLm51bURpbXM7IGkrKykge1xuICAgICAgICAgIGlmIChtaW5WYWx1ZXNbaV0gIT09IG1heFZhbHVlc1tpXSkge1xuICAgICAgICAgICAgZXF1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJJbmZvLm1pblZhbHVlcyA9IG1pblZhbHVlcztcbiAgICAgICAgaGVhZGVySW5mby5tYXhWYWx1ZXMgPSBtYXhWYWx1ZXM7XG4gICAgICAgIHJldHVybiBlcXVhbDtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWRTdWJBcnJheTogZnVuY3Rpb24oaW5wdXQsIHB0ciwgT3V0UGl4ZWxUeXBlQXJyYXksIG51bUJ5dGVzKSB7XG4gICAgICAgIHZhciByYXdEYXRhO1xuICAgICAgICBpZiAoT3V0UGl4ZWxUeXBlQXJyYXkgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICByYXdEYXRhID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQsIHB0ciwgbnVtQnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihudW1CeXRlcyk7XG4gICAgICAgICAgdmFyIHN0b3JlOCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICBzdG9yZTguc2V0KG5ldyBVaW50OEFycmF5KGlucHV0LCBwdHIsIG51bUJ5dGVzKSk7XG4gICAgICAgICAgcmF3RGF0YSA9IG5ldyBPdXRQaXhlbFR5cGVBcnJheShhcnJheUJ1Zik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhd0RhdGE7XG4gICAgICB9LFxuXG4gICAgICByZWFkTWFzazogZnVuY3Rpb24oaW5wdXQsIGRhdGEpIHtcbiAgICAgICAgdmFyIHB0ciA9IGRhdGEucHRyO1xuICAgICAgICB2YXIgaGVhZGVySW5mbyA9IGRhdGEuaGVhZGVySW5mbztcbiAgICAgICAgdmFyIG51bVBpeGVscyA9IGhlYWRlckluZm8ud2lkdGggKiBoZWFkZXJJbmZvLmhlaWdodDtcbiAgICAgICAgdmFyIG51bVZhbGlkUGl4ZWwgPSBoZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWw7XG5cbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoaW5wdXQsIHB0ciwgNCk7XG4gICAgICAgIHZhciBtYXNrID0ge307XG4gICAgICAgIG1hc2subnVtQnl0ZXMgPSB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcbiAgICAgICAgcHRyICs9IDQ7XG5cbiAgICAgICAgLy8gTWFzayBEYXRhXG4gICAgICAgIGlmICgoMCA9PT0gbnVtVmFsaWRQaXhlbCB8fCBudW1QaXhlbHMgPT09IG51bVZhbGlkUGl4ZWwpICYmIDAgIT09IG1hc2subnVtQnl0ZXMpIHtcbiAgICAgICAgICB0aHJvdyAoXCJpbnZhbGlkIG1hc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJpdHNldCwgcmVzdWx0TWFzaztcbiAgICAgICAgaWYgKG51bVZhbGlkUGl4ZWwgPT09IDApIHtcbiAgICAgICAgICBiaXRzZXQgPSBuZXcgVWludDhBcnJheShNYXRoLmNlaWwobnVtUGl4ZWxzIC8gOCkpO1xuICAgICAgICAgIG1hc2suYml0c2V0ID0gYml0c2V0O1xuICAgICAgICAgIHJlc3VsdE1hc2sgPSBuZXcgVWludDhBcnJheShudW1QaXhlbHMpO1xuICAgICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdE1hc2sgPSByZXN1bHRNYXNrO1xuICAgICAgICAgIHB0ciArPSBtYXNrLm51bUJ5dGVzO1xuICAgICAgICB9Ly8gPz8/Pz8gZWxzZSBpZiAoZGF0YS5tYXNrLm51bUJ5dGVzID4gMCAmJiBkYXRhLm1hc2subnVtQnl0ZXM8IGRhdGEubnVtVmFsaWRQaXhlbCkge1xuICAgICAgICBlbHNlIGlmIChtYXNrLm51bUJ5dGVzID4gMCkge1xuICAgICAgICAgIGJpdHNldCA9IG5ldyBVaW50OEFycmF5KE1hdGguY2VpbChudW1QaXhlbHMgLyA4KSk7XG4gICAgICAgICAgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgcHRyLCBtYXNrLm51bUJ5dGVzKTtcbiAgICAgICAgICB2YXIgY250ID0gdmlldy5nZXRJbnQxNigwLCB0cnVlKTtcbiAgICAgICAgICB2YXIgaXAgPSAyLCBvcCA9IDAsIHZhbCA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGNudCA+IDApIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGNudC0tKSB7IGJpdHNldFtvcCsrXSA9IHZpZXcuZ2V0VWludDgoaXArKyk7IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbCA9IHZpZXcuZ2V0VWludDgoaXArKyk7XG4gICAgICAgICAgICAgIGNudCA9IC1jbnQ7XG4gICAgICAgICAgICAgIHdoaWxlIChjbnQtLSkgeyBiaXRzZXRbb3ArK10gPSB2YWw7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNudCA9IHZpZXcuZ2V0SW50MTYoaXAsIHRydWUpO1xuICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICB9IHdoaWxlIChpcCA8IG1hc2subnVtQnl0ZXMpO1xuICAgICAgICAgIGlmICgoY250ICE9PSAtMzI3NjgpIHx8IChvcCA8IGJpdHNldC5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlVuZXhwZWN0ZWQgZW5kIG9mIG1hc2sgUkxFIGVuY29kaW5nXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0TWFzayA9IG5ldyBVaW50OEFycmF5KG51bVBpeGVscyk7XG4gICAgICAgICAgdmFyIG1iID0gMCwgayA9IDA7XG5cbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnVtUGl4ZWxzOyBrKyspIHtcbiAgICAgICAgICAgIGlmIChrICYgNykge1xuICAgICAgICAgICAgICBtYiA9IGJpdHNldFtrID4+IDNdO1xuICAgICAgICAgICAgICBtYiA8PD0gayAmIDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWIgPSBiaXRzZXRbayA+PiAzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYiAmIDEyOCkge1xuICAgICAgICAgICAgICByZXN1bHRNYXNrW2tdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS5waXhlbHMucmVzdWx0TWFzayA9IHJlc3VsdE1hc2s7XG5cbiAgICAgICAgICBtYXNrLmJpdHNldCA9IGJpdHNldDtcbiAgICAgICAgICBwdHIgKz0gbWFzay5udW1CeXRlcztcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnB0ciA9IHB0cjtcbiAgICAgICAgZGF0YS5tYXNrID0gbWFzaztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG4gICAgICByZWFkRGF0YU9uZVN3ZWVwOiBmdW5jdGlvbihpbnB1dCwgZGF0YSwgT3V0UGl4ZWxUeXBlQXJyYXksIHVzZUJTUUZvck91dHB1dERpbSkge1xuICAgICAgICB2YXIgcHRyID0gZGF0YS5wdHI7XG4gICAgICAgIHZhciBoZWFkZXJJbmZvID0gZGF0YS5oZWFkZXJJbmZvO1xuICAgICAgICB2YXIgbnVtRGltcyA9IGhlYWRlckluZm8ubnVtRGltcztcbiAgICAgICAgdmFyIG51bVBpeGVscyA9IGhlYWRlckluZm8ud2lkdGggKiBoZWFkZXJJbmZvLmhlaWdodDtcbiAgICAgICAgdmFyIGltYWdlVHlwZSA9IGhlYWRlckluZm8uaW1hZ2VUeXBlO1xuICAgICAgICB2YXIgbnVtQnl0ZXMgPSBoZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwgKiBMZXJjMkhlbHBlcnMuZ2V0RGF0YVR5cGVTaXplKGltYWdlVHlwZSkgKiBudW1EaW1zO1xuICAgICAgICAvL2RhdGEucGl4ZWxzLm51bUJ5dGVzID0gbnVtQnl0ZXM7XG4gICAgICAgIHZhciByYXdEYXRhO1xuICAgICAgICB2YXIgbWFzayA9IGRhdGEucGl4ZWxzLnJlc3VsdE1hc2s7XG4gICAgICAgIGlmIChPdXRQaXhlbFR5cGVBcnJheSA9PT0gVWludDhBcnJheSkge1xuICAgICAgICAgIHJhd0RhdGEgPSBuZXcgVWludDhBcnJheShpbnB1dCwgcHRyLCBudW1CeXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFycmF5QnVmID0gbmV3IEFycmF5QnVmZmVyKG51bUJ5dGVzKTtcbiAgICAgICAgICB2YXIgc3RvcmU4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgIHN0b3JlOC5zZXQobmV3IFVpbnQ4QXJyYXkoaW5wdXQsIHB0ciwgbnVtQnl0ZXMpKTtcbiAgICAgICAgICByYXdEYXRhID0gbmV3IE91dFBpeGVsVHlwZUFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmF3RGF0YS5sZW5ndGggPT09IG51bVBpeGVscyAqIG51bURpbXMpIHtcbiAgICAgICAgICBpZiAodXNlQlNRRm9yT3V0cHV0RGltKSB7XG4gICAgICAgICAgICBkYXRhLnBpeGVscy5yZXN1bHRQaXhlbHMgPSBMZXJjMkhlbHBlcnMuc3dhcERpbWVuc2lvbk9yZGVyKHJhd0RhdGEsIG51bVBpeGVscywgbnVtRGltcywgT3V0UGl4ZWxUeXBlQXJyYXksIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscyA9IHJhd0RhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgIC8vbWFza1xuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5waXhlbHMucmVzdWx0UGl4ZWxzID0gbmV3IE91dFBpeGVsVHlwZUFycmF5KG51bVBpeGVscyAqIG51bURpbXMpO1xuICAgICAgICAgIHZhciB6ID0gMCwgayA9IDAsIGkgPSAwLCBuU3RhcnQgPSAwO1xuICAgICAgICAgIGlmIChudW1EaW1zID4gMSkge1xuICAgICAgICAgICAgaWYgKHVzZUJTUUZvck91dHB1dERpbSkge1xuICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnVtUGl4ZWxzOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWFza1trXSkge1xuICAgICAgICAgICAgICAgICAgblN0YXJ0ID0gaztcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1EaW1zOyBpKyssIG5TdGFydCs9bnVtUGl4ZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVsc1tuU3RhcnRdID0gcmF3RGF0YVt6KytdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBudW1QaXhlbHM7IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChtYXNrW2tdKSB7XG4gICAgICAgICAgICAgICAgICBuU3RhcnQgPSBrICogbnVtRGltcztcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1EaW1zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5waXhlbHMucmVzdWx0UGl4ZWxzW25TdGFydCArIGldID0gcmF3RGF0YVt6KytdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBudW1QaXhlbHM7IGsrKykge1xuICAgICAgICAgICAgICBpZiAobWFza1trXSkge1xuICAgICAgICAgICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVsc1trXSA9IHJhd0RhdGFbeisrXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwdHIgKz0gbnVtQnl0ZXM7XG4gICAgICAgIGRhdGEucHRyID0gcHRyOyAgICAgICAvL3JldHVybiBkYXRhO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWRIdWZmbWFuVHJlZTogZnVuY3Rpb24oaW5wdXQsIGRhdGEpIHtcbiAgICAgICAgdmFyIEJJVFNfTUFYID0gdGhpcy5IVUZGTUFOX0xVVF9CSVRTX01BWDsgLy84IGlzIHNsb3cgZm9yIHRoZSBsYXJnZSB0ZXN0IGltYWdlXG4gICAgICAgIC8vdmFyIHNpemVfbWF4ID0gMSA8PCBCSVRTX01BWDtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogcmVhZGluZyBjb2RlIHRhYmxlXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBkYXRhLnB0ciwgMTYpO1xuICAgICAgICBkYXRhLnB0ciArPSAxNjtcbiAgICAgICAgdmFyIHZlcnNpb24gPSB2aWV3LmdldEludDMyKDAsIHRydWUpO1xuICAgICAgICBpZiAodmVyc2lvbiA8IDIpIHtcbiAgICAgICAgICB0aHJvdyBcInVuc3VwcG9ydGVkIEh1ZmZtYW4gdmVyc2lvblwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXplID0gdmlldy5nZXRJbnQzMig0LCB0cnVlKTtcbiAgICAgICAgdmFyIGkwID0gdmlldy5nZXRJbnQzMig4LCB0cnVlKTtcbiAgICAgICAgdmFyIGkxID0gdmlldy5nZXRJbnQzMigxMiwgdHJ1ZSk7XG4gICAgICAgIGlmIChpMCA+PSBpMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmxvY2tEYXRhQnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KGkxIC0gaTApO1xuICAgICAgICBMZXJjMkhlbHBlcnMuZGVjb2RlQml0cyhpbnB1dCwgZGF0YSwgYmxvY2tEYXRhQnVmZmVyKTtcbiAgICAgICAgdmFyIGNvZGVUYWJsZSA9IFtdOyAvL3NpemVcbiAgICAgICAgdmFyIGksIGosIGssIGxlbjtcblxuICAgICAgICBmb3IgKGkgPSBpMDsgaSA8IGkxOyBpKyspIHtcbiAgICAgICAgICBqID0gaSAtIChpIDwgc2l6ZSA/IDAgOiBzaXplKTsvL3dyYXAgYXJvdW5kXG4gICAgICAgICAgY29kZVRhYmxlW2pdID0geyBmaXJzdDogYmxvY2tEYXRhQnVmZmVyW2kgLSBpMF0sIHNlY29uZDogbnVsbCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFCeXRlcyA9IGlucHV0LmJ5dGVMZW5ndGggLSBkYXRhLnB0cjtcbiAgICAgICAgdmFyIGRhdGFXb3JkcyA9IE1hdGguY2VpbChkYXRhQnl0ZXMgLyA0KTtcbiAgICAgICAgdmFyIGFycmF5QnVmID0gbmV3IEFycmF5QnVmZmVyKGRhdGFXb3JkcyAqIDQpO1xuICAgICAgICB2YXIgc3RvcmU4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICBzdG9yZTguc2V0KG5ldyBVaW50OEFycmF5KGlucHV0LCBkYXRhLnB0ciwgZGF0YUJ5dGVzKSk7XG4gICAgICAgIHZhciBzdHVmZmVkRGF0YSA9IG5ldyBVaW50MzJBcnJheShhcnJheUJ1Zik7IC8vbXVzdCBzdGFydCBmcm9tIHgqNFxuICAgICAgICB2YXIgYml0UG9zID0gMCwgd29yZCwgc3JjUHRyID0gMDtcbiAgICAgICAgd29yZCA9IHN0dWZmZWREYXRhWzBdO1xuICAgICAgICBmb3IgKGkgPSBpMDsgaSA8IGkxOyBpKyspIHtcbiAgICAgICAgICBqID0gaSAtIChpIDwgc2l6ZSA/IDAgOiBzaXplKTsvL3dyYXAgYXJvdW5kXG4gICAgICAgICAgbGVuID0gY29kZVRhYmxlW2pdLmZpcnN0O1xuICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICBjb2RlVGFibGVbal0uc2Vjb25kID0gKHdvcmQgPDwgYml0UG9zKSA+Pj4gKDMyIC0gbGVuKTtcblxuICAgICAgICAgICAgaWYgKDMyIC0gYml0UG9zID49IGxlbikge1xuICAgICAgICAgICAgICBiaXRQb3MgKz0gbGVuO1xuICAgICAgICAgICAgICBpZiAoYml0UG9zID09PSAzMikge1xuICAgICAgICAgICAgICAgIGJpdFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgc3JjUHRyKys7XG4gICAgICAgICAgICAgICAgd29yZCA9IHN0dWZmZWREYXRhW3NyY1B0cl07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBiaXRQb3MgKz0gbGVuIC0gMzI7XG4gICAgICAgICAgICAgIHNyY1B0cisrO1xuICAgICAgICAgICAgICB3b3JkID0gc3R1ZmZlZERhdGFbc3JjUHRyXTtcbiAgICAgICAgICAgICAgY29kZVRhYmxlW2pdLnNlY29uZCB8PSB3b3JkID4+PiAoMzIgLSBiaXRQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZmluaXNoZWQgcmVhZGluZyBjb2RlIHRhYmxlXG5cbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogYnVpbGRpbmcgbHV0XG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHZhciBudW1CaXRzTFVUID0gMCwgbnVtQml0c0xVVFFpY2sgPSAwO1xuICAgICAgICB2YXIgdHJlZSA9IG5ldyBUcmVlTm9kZSgpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29kZVRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNvZGVUYWJsZVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBudW1CaXRzTFVUID0gTWF0aC5tYXgobnVtQml0c0xVVCwgY29kZVRhYmxlW2ldLmZpcnN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bUJpdHNMVVQgPj0gQklUU19NQVgpIHtcbiAgICAgICAgICBudW1CaXRzTFVUUWljayA9IEJJVFNfTUFYO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG51bUJpdHNMVVRRaWNrID0gbnVtQml0c0xVVDtcbiAgICAgICAgfVxuICAgICAgICAvLyBmb3IgZGVidWdnaW5nIHB1cnBvc2VcbiAgICAgICAgLy8gaWYgKG51bUJpdHNMVVQgPj0gMzApIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIldBUm5pbmcsIGxhcmdlIE5VTSBMVVQgQklUUyBJUyBcIiArIG51bUJpdHNMVVQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHZhciBkZWNvZGVMdXQgPSBbXSwgZW50cnksIGNvZGUsIG51bUVudHJpZXMsIGpqLCBjdXJyZW50Qml0LCBub2RlO1xuICAgICAgICBmb3IgKGkgPSBpMDsgaSA8IGkxOyBpKyspIHtcbiAgICAgICAgICBqID0gaSAtIChpIDwgc2l6ZSA/IDAgOiBzaXplKTsvL3dyYXAgYXJvdW5kXG4gICAgICAgICAgbGVuID0gY29kZVRhYmxlW2pdLmZpcnN0O1xuICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtsZW4sIGpdO1xuICAgICAgICAgICAgaWYgKGxlbiA8PSBudW1CaXRzTFVUUWljaykge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZVRhYmxlW2pdLnNlY29uZCA8PCAobnVtQml0c0xVVFFpY2sgLSBsZW4pO1xuICAgICAgICAgICAgICBudW1FbnRyaWVzID0gMSA8PCAobnVtQml0c0xVVFFpY2sgLSBsZW4pO1xuICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnVtRW50cmllczsgaysrKSB7XG4gICAgICAgICAgICAgICAgZGVjb2RlTHV0W2NvZGUgfCBrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy9idWlsZCB0cmVlXG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlVGFibGVbal0uc2Vjb25kO1xuICAgICAgICAgICAgICBub2RlID0gdHJlZTtcbiAgICAgICAgICAgICAgZm9yIChqaiA9IGxlbiAtIDE7IGpqID49IDA7IGpqLS0pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Qml0ID0gY29kZSA+Pj4gamogJiAxOyAvL25vIGxlZnQgc2hpZnQgYXMgbGVuZ3RoIGNvdWxkIGJlIDMwLDMxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCaXQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIW5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBuZXcgVHJlZU5vZGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqaiA9PT0gMCAmJiAhbm9kZS52YWwpIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUudmFsID0gZW50cnlbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVjb2RlTHV0OiBkZWNvZGVMdXQsXG4gICAgICAgICAgbnVtQml0c0xVVFFpY2s6IG51bUJpdHNMVVRRaWNrLFxuICAgICAgICAgIG51bUJpdHNMVVQ6IG51bUJpdHNMVVQsXG4gICAgICAgICAgdHJlZTogdHJlZSxcbiAgICAgICAgICBzdHVmZmVkRGF0YTogc3R1ZmZlZERhdGEsXG4gICAgICAgICAgc3JjUHRyOiBzcmNQdHIsXG4gICAgICAgICAgYml0UG9zOiBiaXRQb3NcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWRIdWZmbWFuOiBmdW5jdGlvbihpbnB1dCwgZGF0YSwgT3V0UGl4ZWxUeXBlQXJyYXksIHVzZUJTUUZvck91dHB1dERpbSkge1xuICAgICAgICB2YXIgaGVhZGVySW5mbyA9IGRhdGEuaGVhZGVySW5mbztcbiAgICAgICAgdmFyIG51bURpbXMgPSBoZWFkZXJJbmZvLm51bURpbXM7XG4gICAgICAgIHZhciBoZWlnaHQgPSBkYXRhLmhlYWRlckluZm8uaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSBkYXRhLmhlYWRlckluZm8ud2lkdGg7XG4gICAgICAgIHZhciBudW1QaXhlbHMgPSB3aWR0aCAqIGhlaWdodDtcbiAgICAgICAgLy92YXIgc2l6ZV9tYXggPSAxIDw8IEJJVFNfTUFYO1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiByZWFkaW5nIGh1ZmZtYW4gc3RydWN0dXJlIGluZm9cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgdmFyIGh1ZmZtYW5JbmZvID0gdGhpcy5yZWFkSHVmZm1hblRyZWUoaW5wdXQsIGRhdGEpO1xuICAgICAgICB2YXIgZGVjb2RlTHV0ID0gaHVmZm1hbkluZm8uZGVjb2RlTHV0O1xuICAgICAgICB2YXIgdHJlZSA9IGh1ZmZtYW5JbmZvLnRyZWU7XG4gICAgICAgIC8vc3R1ZmZlZERhdGEgaW5jbHVkZXMgaHVmZm1hbiBoZWFkZXJzXG4gICAgICAgIHZhciBzdHVmZmVkRGF0YSA9IGh1ZmZtYW5JbmZvLnN0dWZmZWREYXRhO1xuICAgICAgICB2YXIgc3JjUHRyID0gaHVmZm1hbkluZm8uc3JjUHRyO1xuICAgICAgICB2YXIgYml0UG9zID0gaHVmZm1hbkluZm8uYml0UG9zO1xuICAgICAgICB2YXIgbnVtQml0c0xVVFFpY2sgPSBodWZmbWFuSW5mby5udW1CaXRzTFVUUWljaztcbiAgICAgICAgdmFyIG51bUJpdHNMVVQgPSBodWZmbWFuSW5mby5udW1CaXRzTFVUO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gZGF0YS5oZWFkZXJJbmZvLmltYWdlVHlwZSA9PT0gMCA/IDEyOCA6IDA7XG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogIGRlY29kZVxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHZhciBub2RlLCB2YWwsIGRlbHRhLCBtYXNrID0gZGF0YS5waXhlbHMucmVzdWx0TWFzaywgdmFsVG1wLCB2YWxUbXBRdWljaywgY3VycmVudEJpdDtcbiAgICAgICAgdmFyIGksIGosIGssIGlpO1xuICAgICAgICB2YXIgcHJldlZhbCA9IDA7XG4gICAgICAgIGlmIChiaXRQb3MgPiAwKSB7XG4gICAgICAgICAgc3JjUHRyKys7XG4gICAgICAgICAgYml0UG9zID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29yZCA9IHN0dWZmZWREYXRhW3NyY1B0cl07XG4gICAgICAgIHZhciBkZWx0YUVuY29kZSA9IGRhdGEuZW5jb2RlTW9kZSA9PT0gMTtcbiAgICAgICAgdmFyIHJlc3VsdFBpeGVsc0FsbERpbSA9IG5ldyBPdXRQaXhlbFR5cGVBcnJheShudW1QaXhlbHMgKiBudW1EaW1zKTtcbiAgICAgICAgdmFyIHJlc3VsdFBpeGVscyA9IHJlc3VsdFBpeGVsc0FsbERpbTtcbiAgICAgICAgdmFyIGlEaW07XG4gICAgICAgIC8vIFRPRE86IHJlZXZhbHVhdGUgdGhlIG5lZWQgdG8ga2VlcCBpbmxpbmVkIGRlY29kaW5nIGNvZGUgYXMgSUUgc3VwcG9ydCBpcyBwaGFzaW5nIG91dFxuICAgICAgICBpZiAobnVtRGltcyA8IDIgfHwgZGVsdGFFbmNvZGUpIHtcbiAgICAgICAgICBmb3IgKGlEaW0gPSAwOyBpRGltIDwgbnVtRGltczsgaURpbSsrKSB7XG4gICAgICAgICAgICBpZiAobnVtRGltcyA+IDEpIHtcbiAgICAgICAgICAgICAgLy9nZXQgdGhlIG1lbSBibG9jayBvZiBjdXJyZW50IGRpbWVuc2lvblxuICAgICAgICAgICAgICByZXN1bHRQaXhlbHMgPSBuZXcgT3V0UGl4ZWxUeXBlQXJyYXkocmVzdWx0UGl4ZWxzQWxsRGltLmJ1ZmZlciwgbnVtUGl4ZWxzICogaURpbSwgbnVtUGl4ZWxzKTtcbiAgICAgICAgICAgICAgcHJldlZhbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwgPT09IHdpZHRoICogaGVpZ2h0KSB7IC8vYWxsIHZhbGlkXG4gICAgICAgICAgICAgIGZvciAoayA9IDAsIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7IGorKywgaysrKSB7XG4gICAgICAgICAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgdmFsVG1wID0gKHdvcmQgPDwgYml0UG9zKSA+Pj4gKDMyIC0gbnVtQml0c0xVVFFpY2spO1xuICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7Ly8gPj4+IGRlbHRhQml0cztcbiAgICAgICAgICAgICAgICAgIGlmICgzMiAtIGJpdFBvcyA8IG51bUJpdHNMVVRRaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbFRtcCB8PSAoKHN0dWZmZWREYXRhW3NyY1B0ciArIDFdKSA+Pj4gKDY0IC0gYml0UG9zIC0gbnVtQml0c0xVVFFpY2spKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7Ly8gPj4+IGRlbHRhQml0cztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChkZWNvZGVMdXRbdmFsVG1wUXVpY2tdKSAgICAvLyBpZiB0aGVyZSwgbW92ZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgYml0cyBhbmQgZG9uZVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBkZWNvZGVMdXRbdmFsVG1wUXVpY2tdWzFdO1xuICAgICAgICAgICAgICAgICAgICBiaXRQb3MgKz0gZGVjb2RlTHV0W3ZhbFRtcFF1aWNrXVswXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxUbXAgPSAod29yZCA8PCBiaXRQb3MpID4+PiAoMzIgLSBudW1CaXRzTFVUKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7Ly8gPj4+IGRlbHRhQml0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKDMyIC0gYml0UG9zIDwgbnVtQml0c0xVVCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbFRtcCB8PSAoKHN0dWZmZWREYXRhW3NyY1B0ciArIDFdKSA+Pj4gKDY0IC0gYml0UG9zIC0gbnVtQml0c0xVVCkpO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbFRtcFF1aWNrID0gdmFsVG1wOy8vID4+PiBkZWx0YUJpdHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRyZWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IG51bUJpdHNMVVQ7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qml0ID0gdmFsVG1wID4+PiAobnVtQml0c0xVVCAtIGlpIC0gMSkgJiAxO1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjdXJyZW50Qml0ID8gbm9kZS5yaWdodCA6IG5vZGUubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIShub2RlLmxlZnQgfHwgbm9kZS5yaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG5vZGUudmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYml0UG9zID0gYml0UG9zICsgaWkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICBpZiAoYml0UG9zID49IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpdFBvcyAtPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgc3JjUHRyKys7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQgPSBzdHVmZmVkRGF0YVtzcmNQdHJdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgZGVsdGEgPSB2YWwgLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICBpZiAoZGVsdGFFbmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGEgKz0gcHJldlZhbDsgICAgLy8gdXNlIG92ZXJmbG93XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWx0YSArPSByZXN1bHRQaXhlbHNbayAtIHdpZHRoXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWx0YSArPSBwcmV2VmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhICY9IDB4RkY7IC8vb3ZlcmZsb3dcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gZGVsdGE7Ly9vdmVyZmxvd1xuICAgICAgICAgICAgICAgICAgICBwcmV2VmFsID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy9ub3QgYWxsIHZhbGlkLCB1c2UgbWFza1xuICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHdpZHRoOyBqKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2tba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFsVG1wID0gKHdvcmQgPDwgYml0UG9zKSA+Pj4gKDMyIC0gbnVtQml0c0xVVFFpY2spO1xuICAgICAgICAgICAgICAgICAgICB2YWxUbXBRdWljayA9IHZhbFRtcDsvLyA+Pj4gZGVsdGFCaXRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMzIgLSBiaXRQb3MgPCBudW1CaXRzTFVUUWljaykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbFRtcCB8PSAoKHN0dWZmZWREYXRhW3NyY1B0ciArIDFdKSA+Pj4gKDY0IC0gYml0UG9zIC0gbnVtQml0c0xVVFFpY2spKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxUbXBRdWljayA9IHZhbFRtcDsvLyA+Pj4gZGVsdGFCaXRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWNvZGVMdXRbdmFsVG1wUXVpY2tdKSAgICAvLyBpZiB0aGVyZSwgbW92ZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgYml0cyBhbmQgZG9uZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsID0gZGVjb2RlTHV0W3ZhbFRtcFF1aWNrXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICBiaXRQb3MgKz0gZGVjb2RlTHV0W3ZhbFRtcFF1aWNrXVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxUbXAgPSAod29yZCA8PCBiaXRQb3MpID4+PiAoMzIgLSBudW1CaXRzTFVUKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxUbXBRdWljayA9IHZhbFRtcDsvLyA+Pj4gZGVsdGFCaXRzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgzMiAtIGJpdFBvcyA8IG51bUJpdHNMVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbFRtcCB8PSAoKHN0dWZmZWREYXRhW3NyY1B0ciArIDFdKSA+Pj4gKDY0IC0gYml0UG9zIC0gbnVtQml0c0xVVCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7Ly8gPj4+IGRlbHRhQml0cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRyZWU7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgbnVtQml0c0xVVDsgaWkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJpdCA9IHZhbFRtcCA+Pj4gKG51bUJpdHNMVVQgLSBpaSAtIDEpICYgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjdXJyZW50Qml0ID8gbm9kZS5yaWdodCA6IG5vZGUubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG5vZGUubGVmdCB8fCBub2RlLnJpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBub2RlLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYml0UG9zID0gYml0UG9zICsgaWkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpdFBvcyA+PSAzMikge1xuICAgICAgICAgICAgICAgICAgICAgIGJpdFBvcyAtPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgICBzcmNQdHIrKztcbiAgICAgICAgICAgICAgICAgICAgICB3b3JkID0gc3R1ZmZlZERhdGFbc3JjUHRyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IHZhbCAtIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhRW5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwICYmIG1hc2tbayAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSArPSBwcmV2VmFsOyAgICAvLyB1c2Ugb3ZlcmZsb3dcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA+IDAgJiYgbWFza1trIC0gd2lkdGhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSArPSByZXN1bHRQaXhlbHNbayAtIHdpZHRoXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSArPSBwcmV2VmFsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICBkZWx0YSAmPSAweEZGOyAvL292ZXJmbG93XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gZGVsdGE7Ly9vdmVyZmxvd1xuICAgICAgICAgICAgICAgICAgICAgIHByZXZWYWwgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNba10gPSBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3IgKGsgPSAwLCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICBrID0gaSAqIHdpZHRoICsgajtcbiAgICAgICAgICAgICAgaWYgKCFtYXNrIHx8IG1hc2tba10pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGlEaW0gPSAwOyBpRGltIDwgbnVtRGltczsgaURpbSsrLCBrKz1udW1QaXhlbHMpIHtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgICAgICAgICAgICB2YWxUbXAgPSAod29yZCA8PCBiaXRQb3MpID4+PiAoMzIgLSBudW1CaXRzTFVUUWljayk7XG4gICAgICAgICAgICAgICAgICB2YWxUbXBRdWljayA9IHZhbFRtcDtcbiAgICAgICAgICAgICAgICAgIGlmICgzMiAtIGJpdFBvcyA8IG51bUJpdHNMVVRRaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbFRtcCB8PSAoKHN0dWZmZWREYXRhW3NyY1B0ciArIDFdKSA+Pj4gKDY0IC0gYml0UG9zIC0gbnVtQml0c0xVVFFpY2spKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoZGVjb2RlTHV0W3ZhbFRtcFF1aWNrXSlcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gZGVjb2RlTHV0W3ZhbFRtcFF1aWNrXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgYml0UG9zICs9IGRlY29kZUx1dFt2YWxUbXBRdWlja11bMF07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsVG1wID0gKHdvcmQgPDwgYml0UG9zKSA+Pj4gKDMyIC0gbnVtQml0c0xVVCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbFRtcFF1aWNrID0gdmFsVG1wO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMzIgLSBiaXRQb3MgPCBudW1CaXRzTFVUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsVG1wIHw9ICgoc3R1ZmZlZERhdGFbc3JjUHRyICsgMV0pID4+PiAoNjQgLSBiaXRQb3MgLSBudW1CaXRzTFVUKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsVG1wUXVpY2sgPSB2YWxUbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHRyZWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaWkgPSAwOyBpaSA8IG51bUJpdHNMVVQ7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qml0ID0gdmFsVG1wID4+PiAobnVtQml0c0xVVCAtIGlpIC0gMSkgJiAxO1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjdXJyZW50Qml0ID8gbm9kZS5yaWdodCA6IG5vZGUubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIShub2RlLmxlZnQgfHwgbm9kZS5yaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG5vZGUudmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYml0UG9zID0gYml0UG9zICsgaWkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChiaXRQb3MgPj0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgYml0UG9zIC09IDMyO1xuICAgICAgICAgICAgICAgICAgICBzcmNQdHIrKztcbiAgICAgICAgICAgICAgICAgICAgd29yZCA9IHN0dWZmZWREYXRhW3NyY1B0cl07XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGRlbHRhID0gdmFsIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEucHRyID0gZGF0YS5wdHIgKyAoc3JjUHRyICsgMSkgKiA0ICsgKGJpdFBvcyA+IDAgPyA0IDogMCk7XG4gICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscyA9IHJlc3VsdFBpeGVsc0FsbERpbTtcbiAgICAgICAgLy9zd2FwIGZvciBCSVAgbGF5b3V0XG4gICAgICAgIGlmIChudW1EaW1zID4gMSAmJiAhdXNlQlNRRm9yT3V0cHV0RGltKSB7XG4gICAgICAgICAgZGF0YS5waXhlbHMucmVzdWx0UGl4ZWxzID0gTGVyYzJIZWxwZXJzLnN3YXBEaW1lbnNpb25PcmRlcihyZXN1bHRQaXhlbHNBbGxEaW0sIG51bVBpeGVscywgbnVtRGltcywgT3V0UGl4ZWxUeXBlQXJyYXkpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBkZWNvZGVCaXRzOiBmdW5jdGlvbihpbnB1dCwgZGF0YSwgYmxvY2tEYXRhQnVmZmVyLCBvZmZzZXQsIGlEaW0pIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vYml0c3R1ZmYgZW5jb2RpbmcgaXMgM1xuICAgICAgICAgIHZhciBoZWFkZXJJbmZvID0gZGF0YS5oZWFkZXJJbmZvO1xuICAgICAgICAgIHZhciBmaWxlVmVyc2lvbiA9IGhlYWRlckluZm8uZmlsZVZlcnNpb247XG4gICAgICAgICAgLy92YXIgYmxvY2sgPSB7fTtcbiAgICAgICAgICB2YXIgYmxvY2tQdHIgPSAwO1xuICAgICAgICAgIHZhciB2aWV3Qnl0ZUxlbmd0aCA9ICgoaW5wdXQuYnl0ZUxlbmd0aCAtIGRhdGEucHRyKSA+PSA1KSA/IDUgOiAoaW5wdXQuYnl0ZUxlbmd0aCAtIGRhdGEucHRyKTtcbiAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhpbnB1dCwgZGF0YS5wdHIsIHZpZXdCeXRlTGVuZ3RoKTtcbiAgICAgICAgICB2YXIgaGVhZGVyQnl0ZSA9IHZpZXcuZ2V0VWludDgoMCk7XG4gICAgICAgICAgYmxvY2tQdHIrKztcbiAgICAgICAgICB2YXIgYml0czY3ID0gaGVhZGVyQnl0ZSA+PiA2O1xuICAgICAgICAgIHZhciBuID0gKGJpdHM2NyA9PT0gMCkgPyA0IDogMyAtIGJpdHM2NztcbiAgICAgICAgICB2YXIgZG9MdXQgPSAoaGVhZGVyQnl0ZSAmIDMyKSA+IDAgPyB0cnVlIDogZmFsc2U7Ly81dGggYml0XG4gICAgICAgICAgdmFyIG51bUJpdHMgPSBoZWFkZXJCeXRlICYgMzE7XG4gICAgICAgICAgdmFyIG51bUVsZW1lbnRzID0gMDtcbiAgICAgICAgICBpZiAobiA9PT0gMSkge1xuICAgICAgICAgICAgbnVtRWxlbWVudHMgPSB2aWV3LmdldFVpbnQ4KGJsb2NrUHRyKTsgYmxvY2tQdHIrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG4gPT09IDIpIHtcbiAgICAgICAgICAgIG51bUVsZW1lbnRzID0gdmlldy5nZXRVaW50MTYoYmxvY2tQdHIsIHRydWUpOyBibG9ja1B0ciArPSAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAobiA9PT0gNCkge1xuICAgICAgICAgICAgbnVtRWxlbWVudHMgPSB2aWV3LmdldFVpbnQzMihibG9ja1B0ciwgdHJ1ZSk7IGJsb2NrUHRyICs9IDQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCB2YWxpZCBwaXhlbCBjb3VudCB0eXBlXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vZml4OiBodWZmbWFuIGNvZGVzIGFyZSBiaXQgc3R1ZmZlZCwgYnV0IG5vdCBib3VuZCBieSBkYXRhJ3MgbWF4IHZhbHVlLCBzbyBuZWVkIHRvIHVzZSBvcmlnaW5hbFVuc3R1ZmZcbiAgICAgICAgICAvL29mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICAgIHZhciBzY2FsZSA9IDIgKiBoZWFkZXJJbmZvLm1heFpFcnJvcjtcbiAgICAgICAgICB2YXIgc3R1ZmZlZERhdGEsIGFycmF5QnVmLCBzdG9yZTgsIGRhdGFCeXRlcywgZGF0YVdvcmRzO1xuICAgICAgICAgIHZhciBsdXRBcnIsIGx1dERhdGEsIGx1dEJ5dGVzLCBsdXRCaXRzUGVyRWxlbWVudCwgYml0c1BlclBpeGVsO1xuICAgICAgICAgIHZhciB6TWF4ID0gaGVhZGVySW5mby5udW1EaW1zID4gMSA/IGhlYWRlckluZm8ubWF4VmFsdWVzW2lEaW1dIDogaGVhZGVySW5mby56TWF4O1xuICAgICAgICAgIGlmIChkb0x1dCkge1xuICAgICAgICAgICAgZGF0YS5jb3VudGVyLmx1dCsrO1xuICAgICAgICAgICAgbHV0Qnl0ZXMgPSB2aWV3LmdldFVpbnQ4KGJsb2NrUHRyKTtcbiAgICAgICAgICAgIGx1dEJpdHNQZXJFbGVtZW50ID0gbnVtQml0cztcbiAgICAgICAgICAgIGJsb2NrUHRyKys7XG4gICAgICAgICAgICBkYXRhQnl0ZXMgPSBNYXRoLmNlaWwoKGx1dEJ5dGVzIC0gMSkgKiBudW1CaXRzIC8gOCk7XG4gICAgICAgICAgICBkYXRhV29yZHMgPSBNYXRoLmNlaWwoZGF0YUJ5dGVzIC8gNCk7XG4gICAgICAgICAgICBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihkYXRhV29yZHMgKiA0KTtcbiAgICAgICAgICAgIHN0b3JlOCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmKTtcblxuICAgICAgICAgICAgZGF0YS5wdHIgKz0gYmxvY2tQdHI7XG4gICAgICAgICAgICBzdG9yZTguc2V0KG5ldyBVaW50OEFycmF5KGlucHV0LCBkYXRhLnB0ciwgZGF0YUJ5dGVzKSk7XG5cbiAgICAgICAgICAgIGx1dERhdGEgPSBuZXcgVWludDMyQXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgICAgZGF0YS5wdHIgKz0gZGF0YUJ5dGVzO1xuXG4gICAgICAgICAgICBiaXRzUGVyUGl4ZWwgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKChsdXRCeXRlcyAtIDEpID4+PiBiaXRzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgICAgYml0c1BlclBpeGVsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhQnl0ZXMgPSBNYXRoLmNlaWwobnVtRWxlbWVudHMgKiBiaXRzUGVyUGl4ZWwgLyA4KTtcbiAgICAgICAgICAgIGRhdGFXb3JkcyA9IE1hdGguY2VpbChkYXRhQnl0ZXMgLyA0KTtcbiAgICAgICAgICAgIGFycmF5QnVmID0gbmV3IEFycmF5QnVmZmVyKGRhdGFXb3JkcyAqIDQpO1xuICAgICAgICAgICAgc3RvcmU4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgICAgc3RvcmU4LnNldChuZXcgVWludDhBcnJheShpbnB1dCwgZGF0YS5wdHIsIGRhdGFCeXRlcykpO1xuICAgICAgICAgICAgc3R1ZmZlZERhdGEgPSBuZXcgVWludDMyQXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgICAgZGF0YS5wdHIgKz0gZGF0YUJ5dGVzO1xuICAgICAgICAgICAgaWYgKGZpbGVWZXJzaW9uID49IDMpIHtcbiAgICAgICAgICAgICAgbHV0QXJyID0gQml0U3R1ZmZlci51bnN0dWZmTFVUMihsdXREYXRhLCBudW1CaXRzLCBsdXRCeXRlcyAtIDEsIG9mZnNldCwgc2NhbGUsIHpNYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGx1dEFyciA9IEJpdFN0dWZmZXIudW5zdHVmZkxVVChsdXREYXRhLCBudW1CaXRzLCBsdXRCeXRlcyAtIDEsIG9mZnNldCwgc2NhbGUsIHpNYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9sdXRBcnIudW5zaGlmdCgwKTtcbiAgICAgICAgICAgIGlmIChmaWxlVmVyc2lvbiA+PSAzKSB7XG4gICAgICAgICAgICAgIC8vQml0U3R1ZmZlci51bnN0dWZmMihibG9jaywgYmxvY2tEYXRhQnVmZmVyLCBoZWFkZXJJbmZvLnpNYXgpO1xuICAgICAgICAgICAgICBCaXRTdHVmZmVyLnVuc3R1ZmYyKHN0dWZmZWREYXRhLCBibG9ja0RhdGFCdWZmZXIsIGJpdHNQZXJQaXhlbCwgbnVtRWxlbWVudHMsIGx1dEFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgQml0U3R1ZmZlci51bnN0dWZmKHN0dWZmZWREYXRhLCBibG9ja0RhdGFCdWZmZXIsIGJpdHNQZXJQaXhlbCwgbnVtRWxlbWVudHMsIGx1dEFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwiYml0c3R1ZmZlclwiKTtcbiAgICAgICAgICAgIGRhdGEuY291bnRlci5iaXRzdHVmZmVyKys7XG4gICAgICAgICAgICBiaXRzUGVyUGl4ZWwgPSBudW1CaXRzO1xuICAgICAgICAgICAgZGF0YS5wdHIgKz0gYmxvY2tQdHI7XG4gICAgICAgICAgICBpZiAoYml0c1BlclBpeGVsID4gMCkge1xuICAgICAgICAgICAgICBkYXRhQnl0ZXMgPSBNYXRoLmNlaWwobnVtRWxlbWVudHMgKiBiaXRzUGVyUGl4ZWwgLyA4KTtcbiAgICAgICAgICAgICAgZGF0YVdvcmRzID0gTWF0aC5jZWlsKGRhdGFCeXRlcyAvIDQpO1xuICAgICAgICAgICAgICBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihkYXRhV29yZHMgKiA0KTtcbiAgICAgICAgICAgICAgc3RvcmU4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWYpO1xuICAgICAgICAgICAgICBzdG9yZTguc2V0KG5ldyBVaW50OEFycmF5KGlucHV0LCBkYXRhLnB0ciwgZGF0YUJ5dGVzKSk7XG4gICAgICAgICAgICAgIHN0dWZmZWREYXRhID0gbmV3IFVpbnQzMkFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgICAgZGF0YS5wdHIgKz0gZGF0YUJ5dGVzO1xuICAgICAgICAgICAgICBpZiAoZmlsZVZlcnNpb24gPj0gMykge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgQml0U3R1ZmZlci5vcmlnaW5hbFVuc3R1ZmYyKHN0dWZmZWREYXRhLCBibG9ja0RhdGFCdWZmZXIsIGJpdHNQZXJQaXhlbCwgbnVtRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIEJpdFN0dWZmZXIudW5zdHVmZjIoc3R1ZmZlZERhdGEsIGJsb2NrRGF0YUJ1ZmZlciwgYml0c1BlclBpeGVsLCBudW1FbGVtZW50cywgZmFsc2UsIG9mZnNldCwgc2NhbGUsIHpNYXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIEJpdFN0dWZmZXIub3JpZ2luYWxVbnN0dWZmKHN0dWZmZWREYXRhLCBibG9ja0RhdGFCdWZmZXIsIGJpdHNQZXJQaXhlbCwgbnVtRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIEJpdFN0dWZmZXIudW5zdHVmZihzdHVmZmVkRGF0YSwgYmxvY2tEYXRhQnVmZmVyLCBiaXRzUGVyUGl4ZWwsIG51bUVsZW1lbnRzLCBmYWxzZSwgb2Zmc2V0LCBzY2FsZSwgek1heCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0sXG5cbiAgICAgIHJlYWRUaWxlczogZnVuY3Rpb24oaW5wdXQsIGRhdGEsIE91dFBpeGVsVHlwZUFycmF5LCB1c2VCU1FGb3JPdXRwdXREaW0pIHtcbiAgICAgICAgdmFyIGhlYWRlckluZm8gPSBkYXRhLmhlYWRlckluZm87XG4gICAgICAgIHZhciB3aWR0aCA9IGhlYWRlckluZm8ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSBoZWFkZXJJbmZvLmhlaWdodDtcbiAgICAgICAgdmFyIG51bVBpeGVscyA9IHdpZHRoICogaGVpZ2h0O1xuICAgICAgICB2YXIgbWljcm9CbG9ja1NpemUgPSBoZWFkZXJJbmZvLm1pY3JvQmxvY2tTaXplO1xuICAgICAgICB2YXIgaW1hZ2VUeXBlID0gaGVhZGVySW5mby5pbWFnZVR5cGU7XG4gICAgICAgIHZhciBkYXRhVHlwZVNpemUgPSBMZXJjMkhlbHBlcnMuZ2V0RGF0YVR5cGVTaXplKGltYWdlVHlwZSk7XG4gICAgICAgIHZhciBudW1CbG9ja3NYID0gTWF0aC5jZWlsKHdpZHRoIC8gbWljcm9CbG9ja1NpemUpO1xuICAgICAgICB2YXIgbnVtQmxvY2tzWSA9IE1hdGguY2VpbChoZWlnaHQgLyBtaWNyb0Jsb2NrU2l6ZSk7XG4gICAgICAgIGRhdGEucGl4ZWxzLm51bUJsb2Nrc1kgPSBudW1CbG9ja3NZO1xuICAgICAgICBkYXRhLnBpeGVscy5udW1CbG9ja3NYID0gbnVtQmxvY2tzWDtcbiAgICAgICAgZGF0YS5waXhlbHMucHRyID0gMDtcbiAgICAgICAgdmFyIHJvdyA9IDAsIGNvbCA9IDAsIGJsb2NrWSA9IDAsIGJsb2NrWCA9IDAsIHRoaXNCbG9ja0hlaWdodCA9IDAsIHRoaXNCbG9ja1dpZHRoID0gMCwgYnl0ZXNMZWZ0ID0gMCwgaGVhZGVyQnl0ZSA9IDAsIGJpdHM2NyA9IDAsIHRlc3RDb2RlID0gMCwgb3V0UHRyID0gMCwgb3V0U3RyaWRlID0gMCwgbnVtQnl0ZXMgPSAwLCBieXRlc2xlZnQgPSAwLCB6ID0gMCwgYmxvY2tQdHIgPSAwO1xuICAgICAgICB2YXIgdmlldywgYmxvY2ssIGFycmF5QnVmLCBzdG9yZTgsIHJhd0RhdGE7XG4gICAgICAgIHZhciBibG9ja0VuY29kaW5nO1xuICAgICAgICB2YXIgYmxvY2tEYXRhQnVmZmVyID0gbmV3IE91dFBpeGVsVHlwZUFycmF5KG1pY3JvQmxvY2tTaXplICogbWljcm9CbG9ja1NpemUpO1xuICAgICAgICB2YXIgbGFzdEJsb2NrSGVpZ2h0ID0gKGhlaWdodCAlIG1pY3JvQmxvY2tTaXplKSB8fCBtaWNyb0Jsb2NrU2l6ZTtcbiAgICAgICAgdmFyIGxhc3RCbG9ja1dpZHRoID0gKHdpZHRoICUgbWljcm9CbG9ja1NpemUpIHx8IG1pY3JvQmxvY2tTaXplO1xuICAgICAgICB2YXIgb2Zmc2V0VHlwZSwgb2Zmc2V0O1xuICAgICAgICB2YXIgbnVtRGltcyA9IGhlYWRlckluZm8ubnVtRGltcywgaURpbTtcbiAgICAgICAgdmFyIG1hc2sgPSBkYXRhLnBpeGVscy5yZXN1bHRNYXNrO1xuICAgICAgICB2YXIgcmVzdWx0UGl4ZWxzID0gZGF0YS5waXhlbHMucmVzdWx0UGl4ZWxzO1xuICAgICAgICB2YXIgZmlsZVZlcnNpb24gPSBoZWFkZXJJbmZvLmZpbGVWZXJzaW9uO1xuICAgICAgICB2YXIgZmlsZVZlcnNpb25DaGVja051bSA9IGZpbGVWZXJzaW9uID49IDUgPyAxNCA6IDE1O1xuICAgICAgICB2YXIgaXNEaWZmRW5jb2Rpbmc7XG4gICAgICAgIHZhciB6TWF4ID0gaGVhZGVySW5mby56TWF4O1xuICAgICAgICAvL3ZhciByZXN1bHRQaXhlbHNBbGxEaW0gPSByZXN1bHRQaXhlbHM7XG4gICAgICAgIHZhciByZXN1bHRQaXhlbHNQcmV2RGltO1xuICAgICAgICBmb3IgKGJsb2NrWSA9IDA7IGJsb2NrWSA8IG51bUJsb2Nrc1k7IGJsb2NrWSsrKSB7XG4gICAgICAgICAgdGhpc0Jsb2NrSGVpZ2h0ID0gKGJsb2NrWSAhPT0gbnVtQmxvY2tzWSAtIDEpID8gbWljcm9CbG9ja1NpemUgOiBsYXN0QmxvY2tIZWlnaHQ7XG4gICAgICAgICAgZm9yIChibG9ja1ggPSAwOyBibG9ja1ggPCBudW1CbG9ja3NYOyBibG9ja1grKykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwieVwiICsgYmxvY2tZICsgXCIgeFwiICsgYmxvY2tYKTtcbiAgICAgICAgICAgIHRoaXNCbG9ja1dpZHRoID0gKGJsb2NrWCAhPT0gbnVtQmxvY2tzWCAtIDEpID8gbWljcm9CbG9ja1NpemUgOiBsYXN0QmxvY2tXaWR0aDtcblxuICAgICAgICAgICAgb3V0UHRyID0gYmxvY2tZICogd2lkdGggKiBtaWNyb0Jsb2NrU2l6ZSArIGJsb2NrWCAqIG1pY3JvQmxvY2tTaXplO1xuICAgICAgICAgICAgb3V0U3RyaWRlID0gd2lkdGggLSB0aGlzQmxvY2tXaWR0aDtcblxuICAgICAgICAgICAgZm9yIChpRGltID0gMDsgaURpbSA8IG51bURpbXM7IGlEaW0rKykge1xuICAgICAgICAgICAgICBpZiAobnVtRGltcyA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNQcmV2RGltID0gcmVzdWx0UGl4ZWxzO1xuICAgICAgICAgICAgICAgIG91dFB0ciA9IGJsb2NrWSAqIHdpZHRoICogbWljcm9CbG9ja1NpemUgKyBibG9ja1ggKiBtaWNyb0Jsb2NrU2l6ZTtcbiAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHMgPSBuZXcgT3V0UGl4ZWxUeXBlQXJyYXkoZGF0YS5waXhlbHMucmVzdWx0UGl4ZWxzLmJ1ZmZlciwgbnVtUGl4ZWxzICogaURpbSAqIGRhdGFUeXBlU2l6ZSwgbnVtUGl4ZWxzKTtcbiAgICAgICAgICAgICAgICB6TWF4ID0gaGVhZGVySW5mby5tYXhWYWx1ZXNbaURpbV07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzUHJldkRpbSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnl0ZXNMZWZ0ID0gaW5wdXQuYnl0ZUxlbmd0aCAtIGRhdGEucHRyO1xuICAgICAgICAgICAgICB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBkYXRhLnB0ciwgTWF0aC5taW4oMTAsIGJ5dGVzTGVmdCkpO1xuICAgICAgICAgICAgICBibG9jayA9IHt9O1xuICAgICAgICAgICAgICBibG9ja1B0ciA9IDA7XG4gICAgICAgICAgICAgIGhlYWRlckJ5dGUgPSB2aWV3LmdldFVpbnQ4KDApO1xuICAgICAgICAgICAgICBibG9ja1B0cisrO1xuICAgICAgICAgICAgICBpc0RpZmZFbmNvZGluZyA9IGhlYWRlckluZm8uZmlsZVZlcnNpb24gPj0gNSA/IGhlYWRlckJ5dGUgJiA0IDogMDtcbiAgICAgICAgICAgICAgYml0czY3ID0gKGhlYWRlckJ5dGUgPj4gNikgJiAweEZGO1xuICAgICAgICAgICAgICB0ZXN0Q29kZSA9IChoZWFkZXJCeXRlID4+IDIpICYgZmlsZVZlcnNpb25DaGVja051bTsgICAgLy8gdXNlIGJpdHMgMjM0NSBmb3IgaW50ZWdyaXR5IGNoZWNrXG4gICAgICAgICAgICAgIGlmICh0ZXN0Q29kZSAhPT0gKCgoYmxvY2tYICogbWljcm9CbG9ja1NpemUpID4+IDMpICYgZmlsZVZlcnNpb25DaGVja051bSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcImludGVncml0eSBpc3N1ZVwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzRGlmZkVuY29kaW5nICYmIGlEaW0gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBcImludGVncml0eSBpc3N1ZVwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYmxvY2tFbmNvZGluZyA9IGhlYWRlckJ5dGUgJiAzO1xuICAgICAgICAgICAgICBpZiAoYmxvY2tFbmNvZGluZyA+IDMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB0ciArPSBibG9ja1B0cjtcbiAgICAgICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgYmxvY2sgZW5jb2RpbmcgKFwiICsgYmxvY2tFbmNvZGluZyArIFwiKVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKGJsb2NrRW5jb2RpbmcgPT09IDIpIHsgLy9jb25zdGFudCAwXG4gICAgICAgICAgICAgICAgaWYgKGlzRGlmZkVuY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXNCbG9ja0hlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXNCbG9ja1dpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tbb3V0UHRyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyXSA9IHJlc3VsdFBpeGVsc1ByZXZEaW1bb3V0UHRyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpc0Jsb2NrSGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgdGhpc0Jsb2NrV2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyXSA9IHJlc3VsdFBpeGVsc1ByZXZEaW1bb3V0UHRyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50ZXIuY29uc3RhbnQrKztcbiAgICAgICAgICAgICAgICBkYXRhLnB0ciArPSBibG9ja1B0cjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmIChibG9ja0VuY29kaW5nID09PSAwKSB7ICAvL3VuY29tcHJlc3NlZFxuICAgICAgICAgICAgICAgIGlmIChpc0RpZmZFbmNvZGluZykge1xuICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndCBtYWtlIHNlbnNlLCBzaG91bGQgbm90IGhhcHBlblxuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJpbnRlZ3JpdHkgaXNzdWVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudGVyLnVuY29tcHJlc3NlZCsrO1xuICAgICAgICAgICAgICAgIGRhdGEucHRyICs9IGJsb2NrUHRyO1xuICAgICAgICAgICAgICAgIG51bUJ5dGVzID0gdGhpc0Jsb2NrSGVpZ2h0ICogdGhpc0Jsb2NrV2lkdGggKiBkYXRhVHlwZVNpemU7XG4gICAgICAgICAgICAgICAgYnl0ZXNsZWZ0ID0gaW5wdXQuYnl0ZUxlbmd0aCAtIGRhdGEucHRyO1xuICAgICAgICAgICAgICAgIG51bUJ5dGVzID0gbnVtQnl0ZXMgPCBieXRlc2xlZnQgPyBudW1CeXRlcyA6IGJ5dGVzbGVmdDtcbiAgICAgICAgICAgICAgICAvL2JpdCBhbGlnbm1lbnRcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigobnVtQnl0ZXMgJSBkYXRhVHlwZVNpemUpID09PSAwID8gbnVtQnl0ZXMgOiAobnVtQnl0ZXMgKyBkYXRhVHlwZVNpemUgLSBudW1CeXRlcyAlIGRhdGFUeXBlU2l6ZSkpO1xuICAgICAgICAgICAgICAgIHN0b3JlOCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgICAgICBzdG9yZTguc2V0KG5ldyBVaW50OEFycmF5KGlucHV0LCBkYXRhLnB0ciwgbnVtQnl0ZXMpKTtcbiAgICAgICAgICAgICAgICByYXdEYXRhID0gbmV3IE91dFBpeGVsVHlwZUFycmF5KGFycmF5QnVmKTtcbiAgICAgICAgICAgICAgICB6ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzQmxvY2tIZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgdGhpc0Jsb2NrV2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tbb3V0UHRyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW291dFB0cl0gPSByYXdEYXRhW3orK107XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFB0ciArPSBvdXRTdHJpZGU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Ugey8vYWxsIHZhbGlkXG4gICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXNCbG9ja0hlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzQmxvY2tXaWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyKytdID0gcmF3RGF0YVt6KytdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dFB0ciArPSBvdXRTdHJpZGU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEucHRyICs9IHogKiBkYXRhVHlwZVNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7IC8vMSBvciAzXG4gICAgICAgICAgICAgICAgb2Zmc2V0VHlwZSA9IExlcmMySGVscGVycy5nZXREYXRhVHlwZVVzZWQoKGlzRGlmZkVuY29kaW5nICYmIGltYWdlVHlwZSA8IDYpID8gNCA6IGltYWdlVHlwZSwgYml0czY3KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBMZXJjMkhlbHBlcnMuZ2V0T25lUGl4ZWwoYmxvY2ssIGJsb2NrUHRyLCBvZmZzZXRUeXBlLCB2aWV3KTtcbiAgICAgICAgICAgICAgICBibG9ja1B0ciArPSBMZXJjMkhlbHBlcnMuZ2V0RGF0YVR5cGVTaXplKG9mZnNldFR5cGUpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0VuY29kaW5nID09PSAzKSAvL2NvbnN0YW50IG9mZnNldCB2YWx1ZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEucHRyICs9IGJsb2NrUHRyO1xuICAgICAgICAgICAgICAgICAgZGF0YS5jb3VudGVyLmNvbnN0YW50b2Zmc2V0Kys7XG4gICAgICAgICAgICAgICAgICAvL3lvdSBjYW4gZGVsZXRlIHRoZSBmb2xsb3dpbmcgcmVzdWx0TWFzayBjYXNlIGluIGZhdm9yIG9mIHBlcmZvcm1hbmNlIGJlY2F1c2UgdmFsIGlzIGNvbnN0YW50IGFuZCB1c2VycyB1c2Ugbm9kYXRhIG1hc2ssIG90aGVyd2lzZSBub2RhdGF2YWx1ZSBwb3N0IHByb2Nlc3NpbmcgaGFuZGxlcyBpdCB0b28uXG4gICAgICAgICAgICAgICAgICAvL3doaWxlIHRoZSBhYm92ZSBzdGF0ZW1lbnQgaXMgdHJ1ZSwgd2UncmUgbm90IGRvaW5nIGl0IGFzIHdlIHdhbnQgdG8ga2VlcCBpbnZhbGlkIHBpeGVsIHZhbHVlIGF0IDAgcmF0aGVyIHRoYW4gYXJiaXRyYXJ5IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzQmxvY2tIZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzQmxvY2tXaWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrW291dFB0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW291dFB0cl0gPSBpc0RpZmZFbmNvZGluZyA/IE1hdGgubWluKHpNYXgsIHJlc3VsdFBpeGVsc1ByZXZEaW1bb3V0UHRyXSArIG9mZnNldCkgOiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRQdHIrKztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgb3V0UHRyICs9IG91dFN0cmlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpc0Jsb2NrSGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgdGhpc0Jsb2NrV2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyXSA9IGlzRGlmZkVuY29kaW5nID8gTWF0aC5taW4oek1heCwgcmVzdWx0UGl4ZWxzUHJldkRpbVtvdXRQdHJdICsgb2Zmc2V0KSA6IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBvdXRQdHIgKz0gb3V0U3RyaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL2JpdHN0dWZmIGVuY29kaW5nIGlzIDNcbiAgICAgICAgICAgICAgICAgIGRhdGEucHRyICs9IGJsb2NrUHRyO1xuICAgICAgICAgICAgICAgICAgLy9oZWF2eSBsaWZ0aW5nXG4gICAgICAgICAgICAgICAgICBMZXJjMkhlbHBlcnMuZGVjb2RlQml0cyhpbnB1dCwgZGF0YSwgYmxvY2tEYXRhQnVmZmVyLCBvZmZzZXQsIGlEaW0pO1xuICAgICAgICAgICAgICAgICAgYmxvY2tQdHIgPSAwO1xuICAgICAgICAgICAgICAgICAgLy8gZHVwbGljYXRlIGNvZGUgdG8gZmF2b3IgcGVyZm9ybWFuY2UsIGRpZmYgZW5jb2RpbmcgaXMgZm9yIG11bHRpZGltZW5zaW9uIG9ubHlcbiAgICAgICAgICAgICAgICAgIGlmIChpc0RpZmZFbmNvZGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpc0Jsb2NrSGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzQmxvY2tXaWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tbb3V0UHRyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFBpeGVsc1tvdXRQdHJdID0gYmxvY2tEYXRhQnVmZmVyW2Jsb2NrUHRyKytdICsgcmVzdWx0UGl4ZWxzUHJldkRpbVtvdXRQdHJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0UHRyICs9IG91dFN0cmlkZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzQmxvY2tIZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXNCbG9ja1dpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyXSA9IGJsb2NrRGF0YUJ1ZmZlcltibG9ja1B0cisrXSArIHJlc3VsdFBpeGVsc1ByZXZEaW1bb3V0UHRyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0UHRyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRQdHIgKz0gb3V0U3RyaWRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXNCbG9ja0hlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXNCbG9ja1dpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tbb3V0UHRyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbb3V0UHRyXSA9IGJsb2NrRGF0YUJ1ZmZlcltibG9ja1B0cisrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFB0cisrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBvdXRQdHIgKz0gb3V0U3RyaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzQmxvY2tIZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzQmxvY2tXaWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFBpeGVsc1tvdXRQdHIrK10gPSBibG9ja0RhdGFCdWZmZXJbYmxvY2tQdHIrK107XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG91dFB0ciArPSBvdXRTdHJpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9zd2FwIGZvciBCSVA6IGl0J3MgYWx3YXlzIGVhc2llciBmb3IgY2xpZW50cyB0byBoYW5kbGUgQlNRIHNvIHdlIGtlZXAgZXhpc3RpbmcgbG9naWMgYW5kIGludHJvZHVjZSBhIHN3YXAgaGVyZSB0byBtaW5pbXplIGNoYW5nZXNcbiAgICAgICAgaWYgKG51bURpbXMgPiAxICYmICF1c2VCU1FGb3JPdXRwdXREaW0pIHtcbiAgICAgICAgICBkYXRhLnBpeGVscy5yZXN1bHRQaXhlbHMgPSBMZXJjMkhlbHBlcnMuc3dhcERpbWVuc2lvbk9yZGVyKGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscywgbnVtUGl4ZWxzLCBudW1EaW1zLCBPdXRQaXhlbFR5cGVBcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKlxuICAgICAgKiAgcHJpdmF0ZSBtZXRob2RzIChoZWxwZXIgbWV0aG9kcylcbiAgICAgICoqKioqKioqKioqKioqKioqL1xuXG4gICAgICBmb3JtYXRGaWxlSW5mbzogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwiZmlsZUlkZW50aWZpZXJTdHJpbmdcIjogZGF0YS5oZWFkZXJJbmZvLmZpbGVJZGVudGlmaWVyU3RyaW5nLFxuICAgICAgICAgIFwiZmlsZVZlcnNpb25cIjogZGF0YS5oZWFkZXJJbmZvLmZpbGVWZXJzaW9uLFxuICAgICAgICAgIFwiaW1hZ2VUeXBlXCI6IGRhdGEuaGVhZGVySW5mby5pbWFnZVR5cGUsXG4gICAgICAgICAgXCJoZWlnaHRcIjogZGF0YS5oZWFkZXJJbmZvLmhlaWdodCxcbiAgICAgICAgICBcIndpZHRoXCI6IGRhdGEuaGVhZGVySW5mby53aWR0aCxcbiAgICAgICAgICBcIm51bVZhbGlkUGl4ZWxcIjogZGF0YS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwsXG4gICAgICAgICAgXCJtaWNyb0Jsb2NrU2l6ZVwiOiBkYXRhLmhlYWRlckluZm8ubWljcm9CbG9ja1NpemUsXG4gICAgICAgICAgXCJibG9iU2l6ZVwiOiBkYXRhLmhlYWRlckluZm8uYmxvYlNpemUsXG4gICAgICAgICAgXCJtYXhaRXJyb3JcIjogZGF0YS5oZWFkZXJJbmZvLm1heFpFcnJvcixcbiAgICAgICAgICBcInBpeGVsVHlwZVwiOiBMZXJjMkhlbHBlcnMuZ2V0UGl4ZWxUeXBlKGRhdGEuaGVhZGVySW5mby5pbWFnZVR5cGUpLFxuICAgICAgICAgIFwiZW9mT2Zmc2V0XCI6IGRhdGEuZW9mT2Zmc2V0LFxuICAgICAgICAgIFwibWFza1wiOiBkYXRhLm1hc2sgPyB7XG4gICAgICAgICAgICBcIm51bUJ5dGVzXCI6IGRhdGEubWFzay5udW1CeXRlc1xuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgICAgIFwicGl4ZWxzXCI6IHtcbiAgICAgICAgICAgIFwibnVtQmxvY2tzWFwiOiBkYXRhLnBpeGVscy5udW1CbG9ja3NYLFxuICAgICAgICAgICAgXCJudW1CbG9ja3NZXCI6IGRhdGEucGl4ZWxzLm51bUJsb2Nrc1ksXG4gICAgICAgICAgICAvL1wibnVtQnl0ZXNcIjogZGF0YS5waXhlbHMubnVtQnl0ZXMsXG4gICAgICAgICAgICBcIm1heFZhbHVlXCI6IGRhdGEuaGVhZGVySW5mby56TWF4LFxuICAgICAgICAgICAgXCJtaW5WYWx1ZVwiOiBkYXRhLmhlYWRlckluZm8uek1pbixcbiAgICAgICAgICAgIFwibm9EYXRhVmFsdWVcIjogZGF0YS5ub0RhdGFWYWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbnN0cnVjdENvbnN0YW50U3VyZmFjZTogZnVuY3Rpb24oZGF0YSwgdXNlQlNRRm9yT3V0cHV0RGltKSB7XG4gICAgICAgIHZhciB2YWwgPSBkYXRhLmhlYWRlckluZm8uek1heDtcbiAgICAgICAgdmFyIHZhbE1pbiA9IGRhdGEuaGVhZGVySW5mby56TWluO1xuICAgICAgICB2YXIgbWF4VmFsdWVzID0gZGF0YS5oZWFkZXJJbmZvLm1heFZhbHVlcztcbiAgICAgICAgdmFyIG51bURpbXMgPSBkYXRhLmhlYWRlckluZm8ubnVtRGltcztcbiAgICAgICAgdmFyIG51bVBpeGVscyA9IGRhdGEuaGVhZGVySW5mby5oZWlnaHQgKiBkYXRhLmhlYWRlckluZm8ud2lkdGg7XG4gICAgICAgIHZhciBpID0gMCwgayA9IDAsIG5TdGFydCA9IDA7XG4gICAgICAgIHZhciBtYXNrID0gZGF0YS5waXhlbHMucmVzdWx0TWFzaztcbiAgICAgICAgdmFyIHJlc3VsdFBpeGVscyA9IGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscztcbiAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICBpZiAobnVtRGltcyA+IDEpIHtcbiAgICAgICAgICAgIGlmICh1c2VCU1FGb3JPdXRwdXREaW0pIHtcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bURpbXM7IGkrKykge1xuICAgICAgICAgICAgICAgIG5TdGFydCA9IGkgKiBudW1QaXhlbHM7XG4gICAgICAgICAgICAgICAgdmFsID0gbWF4VmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBudW1QaXhlbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hc2tba10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW25TdGFydCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bVBpeGVsczsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tba10pIHtcbiAgICAgICAgICAgICAgICAgIG5TdGFydCA9IGsgKiBudW1EaW1zO1xuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bURpbXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbblN0YXJ0ICsgbnVtRGltc10gPSBtYXhWYWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bVBpeGVsczsgaysrKSB7XG4gICAgICAgICAgICAgIGlmIChtYXNrW2tdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChudW1EaW1zID4gMSAmJiB2YWxNaW4gIT09IHZhbCkge1xuICAgICAgICAgICAgaWYgKHVzZUJTUUZvck91dHB1dERpbSkge1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtRGltczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgblN0YXJ0ID0gaSAqIG51bVBpeGVscztcbiAgICAgICAgICAgICAgICB2YWwgPSBtYXhWYWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bVBpeGVsczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRQaXhlbHNbblN0YXJ0ICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bVBpeGVsczsgaysrKSB7XG4gICAgICAgICAgICAgICAgblN0YXJ0ID0gayAqIG51bURpbXM7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bURpbXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW25TdGFydCArIGldID0gbWF4VmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBudW1QaXhlbHMgKiBudW1EaW1zOyBrKyspIHtcbiAgICAgICAgICAgICAgcmVzdWx0UGl4ZWxzW2tdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9LFxuXG4gICAgICBnZXREYXRhVHlwZUFycmF5OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciB0cDtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgY2FzZSAwOiAvL2NoYXJcbiAgICAgICAgICAgIHRwID0gSW50OEFycmF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOiAvL2J5dGVcbiAgICAgICAgICAgIHRwID0gVWludDhBcnJheTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjogLy9zaG9ydFxuICAgICAgICAgICAgdHAgPSBJbnQxNkFycmF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOiAvL3VzaG9ydFxuICAgICAgICAgICAgdHAgPSBVaW50MTZBcnJheTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHRwID0gSW50MzJBcnJheTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHRwID0gVWludDMyQXJyYXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICB0cCA9IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHRwID0gRmxvYXQ2NEFycmF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRwID0gRmxvYXQzMkFycmF5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cDtcbiAgICAgIH0sXG5cbiAgICAgIGdldFBpeGVsVHlwZTogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgdHA7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgIGNhc2UgMDogLy9jaGFyXG4gICAgICAgICAgICB0cCA9IFwiUzhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTogLy9ieXRlXG4gICAgICAgICAgICB0cCA9IFwiVThcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjogLy9zaG9ydFxuICAgICAgICAgICAgdHAgPSBcIlMxNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOiAvL3VzaG9ydFxuICAgICAgICAgICAgdHAgPSBcIlUxNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdHAgPSBcIlMzMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdHAgPSBcIlUzMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgdHAgPSBcIkYzMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdHAgPSBcIkY2NFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRwID0gXCJGMzJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHA7XG4gICAgICB9LFxuXG4gICAgICBpc1ZhbGlkUGl4ZWxWYWx1ZTogZnVuY3Rpb24odCwgdmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNWYWxpZDtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgY2FzZSAwOiAvL2NoYXJcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWwgPj0gLTEyOCAmJiB2YWwgPD0gMTI3O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOiAvL2J5dGUgICh1bnNpZ25lZCBjaGFyKVxuICAgICAgICAgICAgaXNWYWxpZCA9IHZhbCA+PSAwICYmIHZhbCA8PSAyNTU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6IC8vc2hvcnRcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWwgPj0gLTMyNzY4ICYmIHZhbCA8PSAzMjc2NztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzogLy91c2hvcnRcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWwgPj0gMCAmJiB2YWwgPD0gNjU1MzY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6IC8vaW50IDMyXG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsID49IC0yMTQ3NDgzNjQ4ICYmIHZhbCA8PSAyMTQ3NDgzNjQ3O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OiAvL3Vpbml0IDMyXG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsID49IDAgJiYgdmFsIDw9IDQyOTQ5NjcyOTY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsID49IC0zLjQwMjc5OTkzODc5MDE0ODRlKzM4ICYmIHZhbCA8PSAzLjQwMjc5OTkzODc5MDE0ODRlKzM4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgaXNWYWxpZCA9IHZhbCA+PSAtMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDggJiYgdmFsIDw9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgIH0sXG5cbiAgICAgIGdldERhdGFUeXBlU2l6ZTogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IDA7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgIGNhc2UgMDogLy91Ynl0ZVxuICAgICAgICAgIGNhc2UgMTogLy9ieXRlXG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjogLy9zaG9ydFxuICAgICAgICAgIGNhc2UgMzogLy91c2hvcnRcbiAgICAgICAgICAgIHMgPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBzID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIHMgPSA4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHMgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSxcblxuICAgICAgZ2V0RGF0YVR5cGVVc2VkOiBmdW5jdGlvbihkdCwgdGMpIHtcbiAgICAgICAgdmFyIHQgPSBkdDtcbiAgICAgICAgc3dpdGNoIChkdCkge1xuICAgICAgICAgIGNhc2UgMjogLy9zaG9ydFxuICAgICAgICAgIGNhc2UgNDogLy9sb25nXG4gICAgICAgICAgICB0ID0gZHQgLSB0YztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzogLy91c2hvcnRcbiAgICAgICAgICBjYXNlIDU6IC8vdWxvbmdcbiAgICAgICAgICAgIHQgPSBkdCAtIDIgKiB0YztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjogLy9mbG9hdFxuICAgICAgICAgICAgaWYgKDAgPT09IHRjKSB7XG4gICAgICAgICAgICAgIHQgPSBkdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKDEgPT09IHRjKSB7XG4gICAgICAgICAgICAgIHQgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHQgPSAxOy8vYnl0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OiAvL2RvdWJsZVxuICAgICAgICAgICAgaWYgKDAgPT09IHRjKSB7XG4gICAgICAgICAgICAgIHQgPSBkdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0ID0gZHQgLSAyICogdGMgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHQgPSBkdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSxcblxuICAgICAgZ2V0T25lUGl4ZWw6IGZ1bmN0aW9uKGJsb2NrLCBibG9ja1B0ciwgb2Zmc2V0VHlwZSwgdmlldykge1xuICAgICAgICB2YXIgdGVtcCA9IDA7XG4gICAgICAgIHN3aXRjaCAob2Zmc2V0VHlwZSkge1xuICAgICAgICAgIGNhc2UgMDogLy9jaGFyXG4gICAgICAgICAgICB0ZW1wID0gdmlldy5nZXRJbnQ4KGJsb2NrUHRyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTogLy9ieXRlXG4gICAgICAgICAgICB0ZW1wID0gdmlldy5nZXRVaW50OChibG9ja1B0cik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wID0gdmlldy5nZXRJbnQxNihibG9ja1B0ciwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0ZW1wID0gdmlldy5nZXRVaW50MTYoYmxvY2tQdHIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcCA9IHZpZXcuZ2V0SW50MzIoYmxvY2tQdHIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGVtcCA9IHZpZXcuZ2V0VUludDMyKGJsb2NrUHRyLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHRlbXAgPSB2aWV3LmdldEZsb2F0MzIoYmxvY2tQdHIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgdGVtcCA9IHZpZXcuZ2V0RmxvYXQ2NChibG9ja1B0ciwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgKFwidGhlIGRlY29kZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGlzIHBpeGVsIHR5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICB9LFxuXG4gICAgICBzd2FwRGltZW5zaW9uT3JkZXI6IGZ1bmN0aW9uKHBpeGVscywgbnVtUGl4ZWxzLCBudW1EaW1zLCBPdXRQaXhlbFR5cGVBcnJheSwgaW5wdXRJc0JJUCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBpRGltID0gMCwgdGVtcCA9IDAsIHN3YXAgPSBwaXhlbHM7XG4gICAgICAgIGlmIChudW1EaW1zID4gMSkge1xuICAgICAgICAgIHN3YXAgPSBuZXcgT3V0UGl4ZWxUeXBlQXJyYXkobnVtUGl4ZWxzICogbnVtRGltcyk7XG4gICAgICAgICAgaWYgKGlucHV0SXNCSVApIHtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPG51bVBpeGVsczsgaSsrKSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBpO1xuICAgICAgICAgICAgICBmb3IgKGlEaW09MDsgaURpbSA8IG51bURpbXM7IGlEaW0rKywgdGVtcCArPSBudW1QaXhlbHMpIHtcbiAgICAgICAgICAgICAgICBzd2FwW3RlbXBdID0gcGl4ZWxzW2orK107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpPG51bVBpeGVsczsgaSsrKSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBpO1xuICAgICAgICAgICAgICBmb3IgKGlEaW09MDsgaURpbSA8IG51bURpbXM7IGlEaW0rKywgdGVtcCArPSBudW1QaXhlbHMpIHtcbiAgICAgICAgICAgICAgICBzd2FwW2orK10gPSBwaXhlbHNbdGVtcF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN3YXA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqcHJpdmF0ZSBjbGFzcyBmb3IgYSB0cmVlIG5vZGUuIEh1ZmZtYW4gY29kZSBpcyBpbiBMZXJjMkhlbHBlcnNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHZhciBUcmVlTm9kZSA9IGZ1bmN0aW9uKHZhbCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9O1xuXG4gICAgdmFyIExlcmMyRGVjb2RlID0ge1xuICAgICAgLypcbiAgICAgICogKioqKioqKipyZW1vdmVkIG9wdGlvbnMgY29tcGFyZWQgdG8gTEVSQzEuIFdlIGNhbiBicmluZyBzb21lIG9mIHRoZW0gYmFjayBpZiBuZWVkZWQuXG4gICAgICAgKiByZW1vdmVkIHBpeGVsIHR5cGUuIExFUkMyIGlzIHR5cGVkIGFuZCBkb2Vzbid0IHJlcXVpcmUgdXNlciB0byBnaXZlIHBpeGVsIHR5cGVcbiAgICAgICAqIGNoYW5nZWQgZW5jb2RlZE1hc2tEYXRhIHRvIG1hc2tEYXRhLiBMRVJDMiAncyBqcyB2ZXJzaW9uIG1ha2UgaXQgZmFzdGVyIHRvIHVzZSBtYXNrRGF0YSBkaXJlY3RseS5cbiAgICAgICAqIHJlbW92ZWQgcmV0dXJuTWFzay4gbWFzayBpcyB1c2VkIGJ5IExFUkMyIGludGVybmFsbHkgYW5kIGlzIGNvc3QgZnJlZS4gSW4gY2FzZSBvZiB1c2VyIGlucHV0IG1hc2ssIGl0J3MgcmV0dXJuZWQgYXMgd2VsbCBhbmQgaGFzIG5lZ2xpYmxlIGNvc3QuXG4gICAgICAgKiByZW1vdmVkIG5vZGF0YXZhbHVlLiBCZWNhdXNlIExFUkMyIHBpeGVscyBhcmUgdHlwZWQsIG5vZGF0YXZhbHVlIHdpbGwgc2FjcmlmeSBhIHVzZWZ1bCB2YWx1ZSBmb3IgbWFueSB0eXBlcyAoOGJpdCwgMTZiaXQpIGV0YyxcbiAgICAgICAqICAgICAgIHVzZXIgaGFzIHRvIGJlIGtub3dsZWRnYWJsZSBlbm91Z2ggYWJvdXQgcmFzdGVyIGFuZCB0aGVpciBkYXRhIHRvIGF2b2lkIHVzYWJpbGl0eSBpc3N1ZXMuIHNvIG5vZGF0YSB2YWx1ZSBpcyBzaW1wbHkgcmVtb3ZlZCBub3cuXG4gICAgICAgKiAgICAgICBXZSBjYW4gYWRkIGl0IGJhY2sgbGF0ZXIgaWYgdGhlaXIncyBhIGNsZWFyIHJlcXVpcmVtZW50LlxuICAgICAgICogcmVtb3ZlZCBlbmNvZGVkTWFzay4gVGhpcyBvcHRpb24gd2FzIG5vdCBpbXBsZW1lbnRlZCBpbiBMZXJjRGVjb2RlLiBJdCBjYW4gYmUgZG9uZSBhZnRlciBkZWNvZGluZyAobGVzcyBlZmZpY2llbnQpXG4gICAgICAgKiByZW1vdmVkIGNvbXB1dGVVc2VkQml0RGVwdGhzLlxuICAgICAgICpcbiAgICAgICAqXG4gICAgICAgKiByZXNwb25zZSBjaGFuZ2VzIGNvbXBhcmVkIHRvIExFUkMxXG4gICAgICAgKiAxLiBlbmNvZGVkTWFza0RhdGEgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICogMi4gbm9EYXRhVmFsdWUgaXMgb3B0aW9uYWwgKHJldHVybnMgb25seSBpZiB1c2VyJ3Mgbm9EYXRhVmFsdWUgaXMgd2l0aCBpbiB0aGUgdmFsaWQgZGF0YSB0eXBlIHJhbmdlKVxuICAgICAgICogMy4gbWFza0RhdGEgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgICAgKi9cbiAgICAgIC8qKioqKioqKioqKioqKioqKlxuICAgICAgKiAgcHVibGljIHByb3BlcnRpZXNcbiAgICAgICoqKioqKioqKioqKioqKioqKi9cbiAgICAgIC8vSFVGRk1BTl9MVVRfQklUU19NQVg6IDEyLCAvL3VzZSAyXjEyIGx1dCwgbm90IGNvbmZpZ3VyYWJsZVxuXG4gICAgICAvKioqKioqKioqKioqKioqKipcbiAgICAgICogIHB1YmxpYyBtZXRob2RzXG4gICAgICAqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBEZWNvZGUgYSBMRVJDMiBieXRlIHN0cmVhbSBhbmQgcmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwaXhlbCBkYXRhIGFuZCBvcHRpb25hbCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBpbnB1dCBUaGUgTEVSQyBpbnB1dCBieXRlIHN0cmVhbVxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBvcHRpb25zIERlY29kaW5nIG9wdGlvbnNcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5pbnB1dE9mZnNldF0gVGhlIG51bWJlciBvZiBieXRlcyB0byBza2lwIGluIHRoZSBpbnB1dCBieXRlIHN0cmVhbS4gQSB2YWxpZCBMRVJDIGZpbGUgaXMgZXhwZWN0ZWQgYXQgdGhhdCBwb3NpdGlvblxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXR1cm5GaWxlSW5mb10gSWYgdHJ1ZSwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGhhdmUgYSBmaWxlSW5mbyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIG1ldGFkYXRhIG9idGFpbmVkIGZyb20gdGhlIExFUkMgaGVhZGVycyBhbmQgdGhlIGRlY29kaW5nIHByb2Nlc3NcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV0dXJuUGl4ZWxJbnRlcmxlYXZlZERpbXNdICBJZiB0cnVlLCByZXR1cm5lZCBkaW1lbnNpb25zIGFyZSBwaXhlbC1pbnRlcmxlYXZlZCwgYS5rLmEgW3AxX2RpbTAsIHAxX2RpbTEsIHAxX2RpbW4sIHAyX2RpbTAuLi5dLCBkZWZhdWx0IGlzIFtwMV9kaW0wLCBwMl9kaW0wLCAuLi4sIHAxX2RpbTEsIHAyX2RpbTEuLi5dXG4gICAgICAgKi9cbiAgICAgIGRlY29kZTogZnVuY3Rpb24oLypieXRlIGFycmF5Ki8gaW5wdXQsIC8qb2JqZWN0Ki8gb3B0aW9ucykge1xuICAgICAgICAvL2N1cnJlbnRseSB0aGVyZSdzIGEgYnVnIGluIHRoZSBzcGFyc2UgYXJyYXksIHNvIHBsZWFzZSBkbyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgbm9EYXRhVmFsdWUgPSBvcHRpb25zLm5vRGF0YVZhbHVlO1xuXG4gICAgICAgIC8vaW5pdGlhbGl6ZVxuICAgICAgICB2YXIgaSA9IDAsIGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YS5wdHIgPSBvcHRpb25zLmlucHV0T2Zmc2V0IHx8IDA7XG4gICAgICAgIGRhdGEucGl4ZWxzID0ge307XG5cbiAgICAgICAgLy8gRmlsZSBoZWFkZXJcbiAgICAgICAgaWYgKCFMZXJjMkhlbHBlcnMucmVhZEhlYWRlckluZm8oaW5wdXQsIGRhdGEpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhlYWRlckluZm8gPSBkYXRhLmhlYWRlckluZm87XG4gICAgICAgIHZhciBmaWxlVmVyc2lvbiA9IGhlYWRlckluZm8uZmlsZVZlcnNpb247XG4gICAgICAgIHZhciBPdXRQaXhlbFR5cGVBcnJheSA9IExlcmMySGVscGVycy5nZXREYXRhVHlwZUFycmF5KGhlYWRlckluZm8uaW1hZ2VUeXBlKTtcblxuICAgICAgICAvLyB2ZXJzaW9uIGNoZWNrXG4gICAgICAgIGlmIChmaWxlVmVyc2lvbiA+IDUpIHtcbiAgICAgICAgICB0aHJvdyBcInVuc3VwcG9ydGVkIGxlcmMgdmVyc2lvbiAyLlwiICsgZmlsZVZlcnNpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYXNrIEhlYWRlclxuICAgICAgICBMZXJjMkhlbHBlcnMucmVhZE1hc2soaW5wdXQsIGRhdGEpO1xuICAgICAgICBpZiAoaGVhZGVySW5mby5udW1WYWxpZFBpeGVsICE9PSBoZWFkZXJJbmZvLndpZHRoICogaGVhZGVySW5mby5oZWlnaHQgJiYgIWRhdGEucGl4ZWxzLnJlc3VsdE1hc2spIHtcbiAgICAgICAgICBkYXRhLnBpeGVscy5yZXN1bHRNYXNrID0gb3B0aW9ucy5tYXNrRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW1QaXhlbHMgPSBoZWFkZXJJbmZvLndpZHRoICogaGVhZGVySW5mby5oZWlnaHQ7XG4gICAgICAgIGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscyA9IG5ldyBPdXRQaXhlbFR5cGVBcnJheShudW1QaXhlbHMgKiBoZWFkZXJJbmZvLm51bURpbXMpO1xuXG4gICAgICAgIGRhdGEuY291bnRlciA9IHtcbiAgICAgICAgICBvbmVzd2VlcDogMCxcbiAgICAgICAgICB1bmNvbXByZXNzZWQ6IDAsXG4gICAgICAgICAgbHV0OiAwLFxuICAgICAgICAgIGJpdHN0dWZmZXI6IDAsXG4gICAgICAgICAgY29uc3RhbnQ6IDAsXG4gICAgICAgICAgY29uc3RhbnRvZmZzZXQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVzZUJTUUZvck91dHB1dERpbSA9ICFvcHRpb25zLnJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zO1xuICAgICAgICBpZiAoaGVhZGVySW5mby5udW1WYWxpZFBpeGVsICE9PSAwKSB7XG4gICAgICAgICAgLy9ub3QgdGVzdGVkXG4gICAgICAgICAgaWYgKGhlYWRlckluZm8uek1heCA9PT0gaGVhZGVySW5mby56TWluKSAvL2NvbnN0YW50IHN1cmZhY2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBMZXJjMkhlbHBlcnMuY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlKGRhdGEsIHVzZUJTUUZvck91dHB1dERpbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGZpbGVWZXJzaW9uID49IDQgJiYgTGVyYzJIZWxwZXJzLmNoZWNrTWluTWF4UmFuZ2VzKGlucHV0LCBkYXRhKSkge1xuICAgICAgICAgICAgTGVyYzJIZWxwZXJzLmNvbnN0cnVjdENvbnN0YW50U3VyZmFjZShkYXRhLCB1c2VCU1FGb3JPdXRwdXREaW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGlucHV0LCBkYXRhLnB0ciwgMik7XG4gICAgICAgICAgICB2YXIgYlJlYWREYXRhT25lU3dlZXAgPSB2aWV3LmdldFVpbnQ4KDApO1xuICAgICAgICAgICAgZGF0YS5wdHIrKztcbiAgICAgICAgICAgIGlmIChiUmVhZERhdGFPbmVTd2VlcCkge1xuICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoXCJPbmVTd2VlcFwiKTtcbiAgICAgICAgICAgICAgTGVyYzJIZWxwZXJzLnJlYWREYXRhT25lU3dlZXAoaW5wdXQsIGRhdGEsIE91dFBpeGVsVHlwZUFycmF5LCB1c2VCU1FGb3JPdXRwdXREaW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vbGVyYzIuMTogLy9iaXRzdHVmZmluZyArIGx1dFxuICAgICAgICAgICAgICAvL2xlcmMyLjI6IC8vYml0c3R1ZmZpbmcgKyBsdXQgKyBodWZmbWFuXG4gICAgICAgICAgICAgIC8vbGVyYzIuMzogbmV3IGJpdHN0dWZmZXJcbiAgICAgICAgICAgICAgaWYgKGZpbGVWZXJzaW9uID4gMSAmJiBoZWFkZXJJbmZvLmltYWdlVHlwZSA8PSAxICYmIE1hdGguYWJzKGhlYWRlckluZm8ubWF4WkVycm9yIC0gMC41KSA8IDAuMDAwMDEpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMgaXMgMi54IHBsdXMgOCBiaXQgKHVuc2lnbmVkIGFuZCBzaWduZWQpIGRhdGEsIHBvc3NpYmxpdHkgb2YgSHVmZm1hblxuICAgICAgICAgICAgICAgIHZhciBmbGFnSHVmZm1hbiA9IHZpZXcuZ2V0VWludDgoMSk7XG4gICAgICAgICAgICAgICAgZGF0YS5wdHIrKztcbiAgICAgICAgICAgICAgICBkYXRhLmVuY29kZU1vZGUgPSBmbGFnSHVmZm1hbjtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZ0h1ZmZtYW4gPiAyIHx8IChmaWxlVmVyc2lvbiA8IDQgJiYgZmxhZ0h1ZmZtYW4gPiAxKSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIEh1ZmZtYW4gZmxhZyBcIiArIGZsYWdIdWZmbWFuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmxhZ0h1ZmZtYW4pIHsvLzEgLSBkZWx0YSBIdWZmbWFuLCAyIC0gSHVmZm1hblxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkh1ZmZtYW5cIik7XG4gICAgICAgICAgICAgICAgICBMZXJjMkhlbHBlcnMucmVhZEh1ZmZtYW4oaW5wdXQsIGRhdGEsIE91dFBpeGVsVHlwZUFycmF5LCB1c2VCU1FGb3JPdXRwdXREaW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUaWxlc1wiKTtcbiAgICAgICAgICAgICAgICAgIExlcmMySGVscGVycy5yZWFkVGlsZXMoaW5wdXQsIGRhdGEsIE91dFBpeGVsVHlwZUFycmF5LCB1c2VCU1FGb3JPdXRwdXREaW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHsgLy9sZXJjMi54IG5vbi04IGJpdCBkYXRhXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRpbGVzXCIpO1xuICAgICAgICAgICAgICAgIExlcmMySGVscGVycy5yZWFkVGlsZXMoaW5wdXQsIGRhdGEsIE91dFBpeGVsVHlwZUFycmF5LCB1c2VCU1FGb3JPdXRwdXREaW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5lb2ZPZmZzZXQgPSBkYXRhLnB0cjtcbiAgICAgICAgdmFyIGRpZmY7XG4gICAgICAgIGlmIChvcHRpb25zLmlucHV0T2Zmc2V0KSB7XG4gICAgICAgICAgZGlmZiA9IGRhdGEuaGVhZGVySW5mby5ibG9iU2l6ZSArIG9wdGlvbnMuaW5wdXRPZmZzZXQgLSBkYXRhLnB0cjtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPj0gMSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwiaW5jb3JyZWN0IGVvZjogZGF0YXB0ciBcIiArIGRhdGEucHRyICsgXCIgb2Zmc2V0IFwiICsgb3B0aW9ucy5pbnB1dE9mZnNldCArIFwiIGJsb2JzaXplIFwiICsgZGF0YS5oZWFkZXJJbmZvLmJsb2JTaXplICsgXCIgZGlmZjogXCIgKyBkaWZmKTtcbiAgICAgICAgICAgIGRhdGEuZW9mT2Zmc2V0ID0gb3B0aW9ucy5pbnB1dE9mZnNldCArIGRhdGEuaGVhZGVySW5mby5ibG9iU2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGlmZiA9IGRhdGEuaGVhZGVySW5mby5ibG9iU2l6ZSAtIGRhdGEucHRyO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+PSAxKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoXCJpbmNvcnJlY3QgZmlyc3QgYmFuZCBlb2Y6IGRhdGFwdHIgXCIgKyBkYXRhLnB0ciArIFwiIGJsb2JzaXplIFwiICsgZGF0YS5oZWFkZXJJbmZvLmJsb2JTaXplICsgXCIgZGlmZjogXCIgKyBkaWZmKTtcbiAgICAgICAgICAgIGRhdGEuZW9mT2Zmc2V0ID0gZGF0YS5oZWFkZXJJbmZvLmJsb2JTaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgd2lkdGg6IGhlYWRlckluZm8ud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWFkZXJJbmZvLmhlaWdodCxcbiAgICAgICAgICBwaXhlbERhdGE6IGRhdGEucGl4ZWxzLnJlc3VsdFBpeGVscyxcbiAgICAgICAgICBtaW5WYWx1ZTogaGVhZGVySW5mby56TWluLFxuICAgICAgICAgIG1heFZhbHVlOiBoZWFkZXJJbmZvLnpNYXgsXG4gICAgICAgICAgdmFsaWRQaXhlbENvdW50OiBoZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwsXG4gICAgICAgICAgZGltQ291bnQ6IGhlYWRlckluZm8ubnVtRGltcyxcbiAgICAgICAgICBkaW1TdGF0czoge1xuICAgICAgICAgICAgbWluVmFsdWVzOiBoZWFkZXJJbmZvLm1pblZhbHVlcyxcbiAgICAgICAgICAgIG1heFZhbHVlczogaGVhZGVySW5mby5tYXhWYWx1ZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hc2tEYXRhOiBkYXRhLnBpeGVscy5yZXN1bHRNYXNrXG4gICAgICAgICAgLy9ub0RhdGFWYWx1ZTogbm9EYXRhVmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICAvL3dlIHNob3VsZCByZW1vdmUgdGhpcyBpZiB0aGVyZSdzIG5vIGV4aXN0aW5nIGNsaWVudFxuICAgICAgICAvL29wdGlvbmFsIG5vRGF0YVZhbHVlIHByb2Nlc3NpbmcsIGl0J3MgdXNlcidzIHJlc3BvbnNpYmxpdHlcbiAgICAgICAgaWYgKGRhdGEucGl4ZWxzLnJlc3VsdE1hc2sgJiYgTGVyYzJIZWxwZXJzLmlzVmFsaWRQaXhlbFZhbHVlKGhlYWRlckluZm8uaW1hZ2VUeXBlLCBub0RhdGFWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgbWFzayA9IGRhdGEucGl4ZWxzLnJlc3VsdE1hc2s7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVBpeGVsczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW1hc2tbaV0pIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnBpeGVsRGF0YVtpXSA9IG5vRGF0YVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQubm9EYXRhVmFsdWUgPSBub0RhdGFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLm5vRGF0YVZhbHVlID0gbm9EYXRhVmFsdWU7XG4gICAgICAgIGlmIChvcHRpb25zLnJldHVybkZpbGVJbmZvKSB7XG4gICAgICAgICAgcmVzdWx0LmZpbGVJbmZvID0gTGVyYzJIZWxwZXJzLmZvcm1hdEZpbGVJbmZvKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuXG4gICAgICBnZXRCYW5kQ291bnQ6IGZ1bmN0aW9uKC8qYnl0ZSBhcnJheSovIGlucHV0KSB7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHRlbXAgPSB7fTtcbiAgICAgICAgdGVtcC5wdHIgPSAwO1xuICAgICAgICB0ZW1wLnBpeGVscyA9IHt9O1xuICAgICAgICB3aGlsZSAoaSA8IGlucHV0LmJ5dGVMZW5ndGggLSA1OCkge1xuICAgICAgICAgIExlcmMySGVscGVycy5yZWFkSGVhZGVySW5mbyhpbnB1dCwgdGVtcCk7XG4gICAgICAgICAgaSArPSB0ZW1wLmhlYWRlckluZm8uYmxvYlNpemU7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB0ZW1wLnB0ciA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gTGVyYzJEZWNvZGU7XG4gIH0pKCk7XG5cbiAgdmFyIGlzUGxhdGZvcm1MaXR0bGVFbmRpYW4gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG4gICAgdmFyIGIgPSBuZXcgVWludDhBcnJheShhKTtcbiAgICB2YXIgYyA9IG5ldyBVaW50MzJBcnJheShhKTtcbiAgICBjWzBdID0gMTtcbiAgICByZXR1cm4gYlswXSA9PT0gMTtcbiAgfSkoKTtcblxuICB2YXIgTGVyYyA9IHtcbiAgICAvKioqKioqKioqKioqd3JhcHBlcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogQSB3cmFwcGVyIGZvciBkZWNvZGluZyBib3RoIExFUkMxIGFuZCBMRVJDMiBieXRlIHN0cmVhbXMgY2FwYWJsZSBvZiBoYW5kbGluZyBtdWx0aWJhbmQgcGl4ZWwgYmxvY2tzIGZvciB2YXJpb3VzIHBpeGVsIHR5cGVzLlxuICAgICAqXG4gICAgICogQGFsaWFzIG1vZHVsZTpMZXJjXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gaW5wdXQgVGhlIExFUkMgaW5wdXQgYnl0ZSBzdHJlYW1cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFRoZSBkZWNvZGluZyBvcHRpb25zIGJlbG93IGFyZSBvcHRpb25hbC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaW5wdXRPZmZzZXRdIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gc2tpcCBpbiB0aGUgaW5wdXQgYnl0ZSBzdHJlYW0uIEEgdmFsaWQgTGVyYyBmaWxlIGlzIGV4cGVjdGVkIGF0IHRoYXQgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBpeGVsVHlwZV0gKExFUkMxIG9ubHkpIERlZmF1bHQgdmFsdWUgaXMgRjMyLiBWYWxpZCBwaXhlbCB0eXBlcyBmb3IgaW5wdXQgYXJlIFU4L1M4L1MxNi9VMTYvUzMyL1UzMi9GMzIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5vRGF0YVZhbHVlXSAoTEVSQzEgb25seSkuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgcmV0dXJuZWQgbWFzayBpbnN0ZWFkIG9mIHNldHRpbmcgdGhpcyB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zXSAobkRpbSBMRVJDMiBvbmx5KSBJZiB0cnVlLCByZXR1cm5lZCBkaW1lbnNpb25zIGFyZSBwaXhlbC1pbnRlcmxlYXZlZCwgYS5rLmEgW3AxX2RpbTAsIHAxX2RpbTEsIHAxX2RpbW4sIHAyX2RpbTAuLi5dLCBkZWZhdWx0IGlzIFtwMV9kaW0wLCBwMl9kaW0wLCAuLi4sIHAxX2RpbTEsIHAyX2RpbTEuLi5dXG4gICAgICogQHJldHVybnMge3t3aWR0aCwgaGVpZ2h0LCBwaXhlbHMsIHBpeGVsVHlwZSwgbWFzaywgc3RhdGlzdGljc319XG4gICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggV2lkdGggb2YgZGVjb2RlZCBpbWFnZS5cbiAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGRlY29kZWQgaW1hZ2UuXG4gICAgICAgKiBAcHJvcGVydHkge2FycmF5fSBwaXhlbHMgW2JhbmQxLCBiYW5kMiwg4oCmXSBFYWNoIGJhbmQgaXMgYSB0eXBlZCBhcnJheSBvZiB3aWR0aCpoZWlnaHQuXG4gICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gcGl4ZWxUeXBlIFRoZSB0eXBlIG9mIHBpeGVscyByZXByZXNlbnRlZCBpbiB0aGUgb3V0cHV0LlxuICAgICAgICogQHByb3BlcnR5IHttYXNrfSBtYXNrIFR5cGVkIGFycmF5IHdpdGggYSBzaXplIG9mIHdpZHRoKmhlaWdodCwgb3IgbnVsbCBpZiBhbGwgcGl4ZWxzIGFyZSB2YWxpZC5cbiAgICAgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0YXRpc3RpY3MgW3N0YXRpc3RpY3NfYmFuZDEsIHN0YXRpc3RpY3NfYmFuZDIsIOKApl0gRWFjaCBlbGVtZW50IGlzIGEgc3RhdGlzdGljcyBvYmplY3QgcmVwcmVzZW50aW5nIG1pbiBhbmQgbWF4IHZhbHVlc1xuICAgICoqL1xuICAgIGRlY29kZTogZnVuY3Rpb24oZW5jb2RlZERhdGEsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghaXNQbGF0Zm9ybUxpdHRsZUVuZGlhbikge1xuICAgICAgICB0aHJvdyBcIkJpZyBlbmRpYW4gc3lzdGVtIGlzIG5vdCBzdXBwb3J0ZWQuXCI7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciBpbnB1dE9mZnNldCA9IG9wdGlvbnMuaW5wdXRPZmZzZXQgfHwgMDtcbiAgICAgIHZhciBmaWxlSWRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZERhdGEsIGlucHV0T2Zmc2V0LCAxMCk7XG4gICAgICB2YXIgZmlsZUlkZW50aWZpZXJTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGZpbGVJZFZpZXcpO1xuICAgICAgdmFyIGxlcmMsIG1ham9yVmVyc2lvbjtcbiAgICAgIGlmIChmaWxlSWRlbnRpZmllclN0cmluZy50cmltKCkgPT09IFwiQ250WkltYWdlXCIpIHtcbiAgICAgICAgbGVyYyA9IExlcmNEZWNvZGU7XG4gICAgICAgIG1ham9yVmVyc2lvbiA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmaWxlSWRlbnRpZmllclN0cmluZy5zdWJzdHJpbmcoMCwgNSkgPT09IFwiTGVyYzJcIikge1xuICAgICAgICBsZXJjID0gTGVyYzJEZWNvZGU7XG4gICAgICAgIG1ham9yVmVyc2lvbiA9IDI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6IFwiICsgZmlsZUlkZW50aWZpZXJTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHZhciBpUGxhbmUgPSAwLCBlb2YgPSBlbmNvZGVkRGF0YS5ieXRlTGVuZ3RoIC0gMTAsIGVuY29kZWRNYXNrRGF0YSwgYmFuZE1hc2tzID0gW10sIGJhbmRNYXNrLCBtYXNrRGF0YTtcbiAgICAgIHZhciBkZWNvZGVkUGl4ZWxCbG9jayA9IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgcGl4ZWxzOiBbXSxcbiAgICAgICAgcGl4ZWxUeXBlOiBvcHRpb25zLnBpeGVsVHlwZSxcbiAgICAgICAgbWFzazogbnVsbCxcbiAgICAgICAgc3RhdGlzdGljczogW11cbiAgICAgIH07XG4gICAgICB2YXIgdW5pcXVlQmFuZE1hc2tDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChpbnB1dE9mZnNldCA8IGVvZikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbGVyYy5kZWNvZGUoZW5jb2RlZERhdGEsIHtcbiAgICAgICAgICBpbnB1dE9mZnNldDogaW5wdXRPZmZzZXQsLy9mb3IgYm90aCBsZXJjMSBhbmQgbGVyYzJcbiAgICAgICAgICBlbmNvZGVkTWFza0RhdGE6IGVuY29kZWRNYXNrRGF0YSwvL2xlcmMxIG9ubHlcbiAgICAgICAgICBtYXNrRGF0YTogbWFza0RhdGEsLy9sZXJjMiBvbmx5XG4gICAgICAgICAgcmV0dXJuTWFzazogaVBsYW5lID09PSAwID8gdHJ1ZSA6IGZhbHNlLC8vbGVyYzEgb25seVxuICAgICAgICAgIHJldHVybkVuY29kZWRNYXNrOiBpUGxhbmUgPT09IDAgPyB0cnVlIDogZmFsc2UsLy9sZXJjMSBvbmx5XG4gICAgICAgICAgcmV0dXJuRmlsZUluZm86IHRydWUsLy9mb3IgYm90aCBsZXJjMSBhbmQgbGVyYzJcbiAgICAgICAgICByZXR1cm5QaXhlbEludGVybGVhdmVkRGltczogb3B0aW9ucy5yZXR1cm5QaXhlbEludGVybGVhdmVkRGltcywvL2ZvciBuZGltIGxlcmMyIG9ubHlcbiAgICAgICAgICBwaXhlbFR5cGU6IG9wdGlvbnMucGl4ZWxUeXBlIHx8IG51bGwsLy9sZXJjMSBvbmx5XG4gICAgICAgICAgbm9EYXRhVmFsdWU6IG9wdGlvbnMubm9EYXRhVmFsdWUgfHwgbnVsbC8vbGVyYzEgb25seVxuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dE9mZnNldCA9IHJlc3VsdC5maWxlSW5mby5lb2ZPZmZzZXQ7XG4gICAgICAgIG1hc2tEYXRhID0gcmVzdWx0Lm1hc2tEYXRhOy8vbGVyYzJcbiAgICAgICAgaWYgKGlQbGFuZSA9PT0gMCkge1xuICAgICAgICAgIGVuY29kZWRNYXNrRGF0YSA9IHJlc3VsdC5lbmNvZGVkTWFza0RhdGE7Ly9sZXJjMVxuICAgICAgICAgIGRlY29kZWRQaXhlbEJsb2NrLndpZHRoID0gcmVzdWx0LndpZHRoO1xuICAgICAgICAgIGRlY29kZWRQaXhlbEJsb2NrLmhlaWdodCA9IHJlc3VsdC5oZWlnaHQ7XG4gICAgICAgICAgZGVjb2RlZFBpeGVsQmxvY2suZGltQ291bnQgPSByZXN1bHQuZGltQ291bnQgfHwgMTtcbiAgICAgICAgICAvL2RlY29kZWRQaXhlbEJsb2NrLmRpbVN0YXRzID0gZGVjb2RlZFBpeGVsQmxvY2suZGltU3RhdHM7XG4gICAgICAgICAgZGVjb2RlZFBpeGVsQmxvY2sucGl4ZWxUeXBlID0gcmVzdWx0LnBpeGVsVHlwZSB8fCByZXN1bHQuZmlsZUluZm8ucGl4ZWxUeXBlO1xuICAgICAgICAgIGRlY29kZWRQaXhlbEJsb2NrLm1hc2sgPSBtYXNrRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFqb3JWZXJzaW9uID4gMSkge1xuICAgICAgICAgIGlmIChtYXNrRGF0YSkge1xuICAgICAgICAgICAgYmFuZE1hc2tzLnB1c2gobWFza0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LmZpbGVJbmZvLm1hc2sgJiYgcmVzdWx0LmZpbGVJbmZvLm1hc2subnVtQnl0ZXMgPiAwKSB7XG4gICAgICAgICAgICB1bmlxdWVCYW5kTWFza0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaVBsYW5lKys7XG4gICAgICAgIGRlY29kZWRQaXhlbEJsb2NrLnBpeGVscy5wdXNoKHJlc3VsdC5waXhlbERhdGEpO1xuICAgICAgICBkZWNvZGVkUGl4ZWxCbG9jay5zdGF0aXN0aWNzLnB1c2goe1xuICAgICAgICAgIG1pblZhbHVlOiByZXN1bHQubWluVmFsdWUsXG4gICAgICAgICAgbWF4VmFsdWU6IHJlc3VsdC5tYXhWYWx1ZSxcbiAgICAgICAgICBub0RhdGFWYWx1ZTogcmVzdWx0Lm5vRGF0YVZhbHVlLFxuICAgICAgICAgIGRpbVN0YXRzOiByZXN1bHQuZGltU3RhdHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB2YXIgaSwgaiwgbnVtUGl4ZWxzO1xuICAgICAgaWYgKG1ham9yVmVyc2lvbiA+IDEgJiYgdW5pcXVlQmFuZE1hc2tDb3VudCA+IDEpIHtcbiAgICAgICAgbnVtUGl4ZWxzID0gZGVjb2RlZFBpeGVsQmxvY2sud2lkdGggKiBkZWNvZGVkUGl4ZWxCbG9jay5oZWlnaHQ7XG4gICAgICAgIGRlY29kZWRQaXhlbEJsb2NrLmJhbmRNYXNrcyA9IGJhbmRNYXNrcztcbiAgICAgICAgbWFza0RhdGEgPSBuZXcgVWludDhBcnJheShudW1QaXhlbHMpO1xuICAgICAgICBtYXNrRGF0YS5zZXQoYmFuZE1hc2tzWzBdKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGJhbmRNYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJhbmRNYXNrID0gYmFuZE1hc2tzW2ldO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBudW1QaXhlbHM7IGorKykge1xuICAgICAgICAgICAgbWFza0RhdGFbal0gPSBtYXNrRGF0YVtqXSAmIGJhbmRNYXNrW2pdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWNvZGVkUGl4ZWxCbG9jay5tYXNrRGF0YSA9IG1hc2tEYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVjb2RlZFBpeGVsQmxvY2s7XG4gICAgfVxuICB9O1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgey8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuICAgIC8vYW1kIGxvYWRlcnMgc3VjaCBhcyBkb2pvIGFuZCByZXF1aXJlSlNcbiAgICAvL2h0dHA6Ly93aWtpLmNvbW1vbmpzLm9yZy93aWtpL01vZHVsZXMvQXN5bmNocm9ub3VzRGVmaW5pdGlvblxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7IHJldHVybiBMZXJjOyB9KTsvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7LyoganNoaW50IGlnbm9yZTpsaW5lICovXG4gICAgLy9jb21tb25KUyBtb2R1bGUgMS4wLzEuMS8xLjEuMSBzeXN0ZW1zLCBzdWNoIGFzIG5vZGVKU1xuICAgIC8vaHR0cDovL3dpa2kuY29tbW9uanMub3JnL3dpa2kvTW9kdWxlc1xuICAgIG1vZHVsZS5leHBvcnRzID0gTGVyYzsvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiAgfVxuICBlbHNlIHtcbiAgICAvL2Fzc2lnbiB0byB0aGlzLCBtb3N0IGxpa2VseSB3aW5kb3dcbiAgICB0aGlzLkxlcmMgPSBMZXJjO1xuICB9XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9