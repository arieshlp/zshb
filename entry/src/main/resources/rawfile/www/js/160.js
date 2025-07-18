(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/geotiff/dist-module/compression/lzw.js":
/*!*************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/lzw.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LZWDecoder; });
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");


const MIN_BITS = 9;
const CLEAR_CODE = 256; // clear code
const EOI_CODE = 257; // end of information
const MAX_BYTELENGTH = 12;

function getByte(array, position, length) {
  const d = position % 8;
  const a = Math.floor(position / 8);
  const de = 8 - d;
  const ef = (position + length) - ((a + 1) * 8);
  let fg = (8 * (a + 2)) - (position + length);
  const dg = ((a + 2) * 8) - position;
  fg = Math.max(0, fg);
  if (a >= array.length) {
    console.warn('ran off the end of the buffer before finding EOI_CODE (end on input code)');
    return EOI_CODE;
  }
  let chunk1 = array[a] & ((2 ** (8 - d)) - 1);
  chunk1 <<= (length - de);
  let chunks = chunk1;
  if (a + 1 < array.length) {
    let chunk2 = array[a + 1] >>> fg;
    chunk2 <<= Math.max(0, (length - dg));
    chunks += chunk2;
  }
  if (ef > 8 && a + 2 < array.length) {
    const hi = ((a + 3) * 8) - (position + length);
    const chunk3 = array[a + 2] >>> hi;
    chunks += chunk3;
  }
  return chunks;
}

function appendReversed(dest, source) {
  for (let i = source.length - 1; i >= 0; i--) {
    dest.push(source[i]);
  }
  return dest;
}

function decompress(input) {
  const dictionaryIndex = new Uint16Array(4093);
  const dictionaryChar = new Uint8Array(4093);
  for (let i = 0; i <= 257; i++) {
    dictionaryIndex[i] = 4096;
    dictionaryChar[i] = i;
  }
  let dictionaryLength = 258;
  let byteLength = MIN_BITS;
  let position = 0;

  function initDictionary() {
    dictionaryLength = 258;
    byteLength = MIN_BITS;
  }
  function getNext(array) {
    const byte = getByte(array, position, byteLength);
    position += byteLength;
    return byte;
  }
  function addToDictionary(i, c) {
    dictionaryChar[dictionaryLength] = c;
    dictionaryIndex[dictionaryLength] = i;
    dictionaryLength++;
    return dictionaryLength - 1;
  }
  function getDictionaryReversed(n) {
    const rev = [];
    for (let i = n; i !== 4096; i = dictionaryIndex[i]) {
      rev.push(dictionaryChar[i]);
    }
    return rev;
  }

  const result = [];
  initDictionary();
  const array = new Uint8Array(input);
  let code = getNext(array);
  let oldCode;
  while (code !== EOI_CODE) {
    if (code === CLEAR_CODE) {
      initDictionary();
      code = getNext(array);
      while (code === CLEAR_CODE) {
        code = getNext(array);
      }

      if (code === EOI_CODE) {
        break;
      } else if (code > CLEAR_CODE) {
        throw new Error(`corrupted code at scanline ${code}`);
      } else {
        const val = getDictionaryReversed(code);
        appendReversed(result, val);
        oldCode = code;
      }
    } else if (code < dictionaryLength) {
      const val = getDictionaryReversed(code);
      appendReversed(result, val);
      addToDictionary(oldCode, val[val.length - 1]);
      oldCode = code;
    } else {
      const oldVal = getDictionaryReversed(oldCode);
      if (!oldVal) {
        throw new Error(`Bogus entry. Not in dictionary, ${oldCode} / ${dictionaryLength}, position: ${position}`);
      }
      appendReversed(result, oldVal);
      result.push(oldVal[oldVal.length - 1]);
      addToDictionary(oldCode, oldVal[oldVal.length - 1]);
      oldCode = code;
    }

    if (dictionaryLength + 1 >= (2 ** byteLength)) {
      if (byteLength === MAX_BYTELENGTH) {
        oldCode = undefined;
      } else {
        byteLength++;
      }
    }
    code = getNext(array);
  }
  return new Uint8Array(result);
}

class LZWDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  decodeBlock(buffer) {
    return decompress(buffer, false).buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9sencuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0RBQXNELEtBQUs7QUFDM0QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyREFBMkQsUUFBUSxLQUFLLGlCQUFpQixjQUFjLFNBQVM7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5QkFBeUIsdURBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvMTYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VEZWNvZGVyIGZyb20gJy4vYmFzZWRlY29kZXIuanMnO1xuXG5jb25zdCBNSU5fQklUUyA9IDk7XG5jb25zdCBDTEVBUl9DT0RFID0gMjU2OyAvLyBjbGVhciBjb2RlXG5jb25zdCBFT0lfQ09ERSA9IDI1NzsgLy8gZW5kIG9mIGluZm9ybWF0aW9uXG5jb25zdCBNQVhfQllURUxFTkdUSCA9IDEyO1xuXG5mdW5jdGlvbiBnZXRCeXRlKGFycmF5LCBwb3NpdGlvbiwgbGVuZ3RoKSB7XG4gIGNvbnN0IGQgPSBwb3NpdGlvbiAlIDg7XG4gIGNvbnN0IGEgPSBNYXRoLmZsb29yKHBvc2l0aW9uIC8gOCk7XG4gIGNvbnN0IGRlID0gOCAtIGQ7XG4gIGNvbnN0IGVmID0gKHBvc2l0aW9uICsgbGVuZ3RoKSAtICgoYSArIDEpICogOCk7XG4gIGxldCBmZyA9ICg4ICogKGEgKyAyKSkgLSAocG9zaXRpb24gKyBsZW5ndGgpO1xuICBjb25zdCBkZyA9ICgoYSArIDIpICogOCkgLSBwb3NpdGlvbjtcbiAgZmcgPSBNYXRoLm1heCgwLCBmZyk7XG4gIGlmIChhID49IGFycmF5Lmxlbmd0aCkge1xuICAgIGNvbnNvbGUud2FybigncmFuIG9mZiB0aGUgZW5kIG9mIHRoZSBidWZmZXIgYmVmb3JlIGZpbmRpbmcgRU9JX0NPREUgKGVuZCBvbiBpbnB1dCBjb2RlKScpO1xuICAgIHJldHVybiBFT0lfQ09ERTtcbiAgfVxuICBsZXQgY2h1bmsxID0gYXJyYXlbYV0gJiAoKDIgKiogKDggLSBkKSkgLSAxKTtcbiAgY2h1bmsxIDw8PSAobGVuZ3RoIC0gZGUpO1xuICBsZXQgY2h1bmtzID0gY2h1bmsxO1xuICBpZiAoYSArIDEgPCBhcnJheS5sZW5ndGgpIHtcbiAgICBsZXQgY2h1bmsyID0gYXJyYXlbYSArIDFdID4+PiBmZztcbiAgICBjaHVuazIgPDw9IE1hdGgubWF4KDAsIChsZW5ndGggLSBkZykpO1xuICAgIGNodW5rcyArPSBjaHVuazI7XG4gIH1cbiAgaWYgKGVmID4gOCAmJiBhICsgMiA8IGFycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IGhpID0gKChhICsgMykgKiA4KSAtIChwb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgY29uc3QgY2h1bmszID0gYXJyYXlbYSArIDJdID4+PiBoaTtcbiAgICBjaHVua3MgKz0gY2h1bmszO1xuICB9XG4gIHJldHVybiBjaHVua3M7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJldmVyc2VkKGRlc3QsIHNvdXJjZSkge1xuICBmb3IgKGxldCBpID0gc291cmNlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZGVzdC5wdXNoKHNvdXJjZVtpXSk7XG4gIH1cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIGRlY29tcHJlc3MoaW5wdXQpIHtcbiAgY29uc3QgZGljdGlvbmFyeUluZGV4ID0gbmV3IFVpbnQxNkFycmF5KDQwOTMpO1xuICBjb25zdCBkaWN0aW9uYXJ5Q2hhciA9IG5ldyBVaW50OEFycmF5KDQwOTMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSAyNTc7IGkrKykge1xuICAgIGRpY3Rpb25hcnlJbmRleFtpXSA9IDQwOTY7XG4gICAgZGljdGlvbmFyeUNoYXJbaV0gPSBpO1xuICB9XG4gIGxldCBkaWN0aW9uYXJ5TGVuZ3RoID0gMjU4O1xuICBsZXQgYnl0ZUxlbmd0aCA9IE1JTl9CSVRTO1xuICBsZXQgcG9zaXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXREaWN0aW9uYXJ5KCkge1xuICAgIGRpY3Rpb25hcnlMZW5ndGggPSAyNTg7XG4gICAgYnl0ZUxlbmd0aCA9IE1JTl9CSVRTO1xuICB9XG4gIGZ1bmN0aW9uIGdldE5leHQoYXJyYXkpIHtcbiAgICBjb25zdCBieXRlID0gZ2V0Qnl0ZShhcnJheSwgcG9zaXRpb24sIGJ5dGVMZW5ndGgpO1xuICAgIHBvc2l0aW9uICs9IGJ5dGVMZW5ndGg7XG4gICAgcmV0dXJuIGJ5dGU7XG4gIH1cbiAgZnVuY3Rpb24gYWRkVG9EaWN0aW9uYXJ5KGksIGMpIHtcbiAgICBkaWN0aW9uYXJ5Q2hhcltkaWN0aW9uYXJ5TGVuZ3RoXSA9IGM7XG4gICAgZGljdGlvbmFyeUluZGV4W2RpY3Rpb25hcnlMZW5ndGhdID0gaTtcbiAgICBkaWN0aW9uYXJ5TGVuZ3RoKys7XG4gICAgcmV0dXJuIGRpY3Rpb25hcnlMZW5ndGggLSAxO1xuICB9XG4gIGZ1bmN0aW9uIGdldERpY3Rpb25hcnlSZXZlcnNlZChuKSB7XG4gICAgY29uc3QgcmV2ID0gW107XG4gICAgZm9yIChsZXQgaSA9IG47IGkgIT09IDQwOTY7IGkgPSBkaWN0aW9uYXJ5SW5kZXhbaV0pIHtcbiAgICAgIHJldi5wdXNoKGRpY3Rpb25hcnlDaGFyW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBpbml0RGljdGlvbmFyeSgpO1xuICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KGlucHV0KTtcbiAgbGV0IGNvZGUgPSBnZXROZXh0KGFycmF5KTtcbiAgbGV0IG9sZENvZGU7XG4gIHdoaWxlIChjb2RlICE9PSBFT0lfQ09ERSkge1xuICAgIGlmIChjb2RlID09PSBDTEVBUl9DT0RFKSB7XG4gICAgICBpbml0RGljdGlvbmFyeSgpO1xuICAgICAgY29kZSA9IGdldE5leHQoYXJyYXkpO1xuICAgICAgd2hpbGUgKGNvZGUgPT09IENMRUFSX0NPREUpIHtcbiAgICAgICAgY29kZSA9IGdldE5leHQoYXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA9PT0gRU9JX0NPREUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPiBDTEVBUl9DT0RFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgY29ycnVwdGVkIGNvZGUgYXQgc2NhbmxpbmUgJHtjb2RlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsID0gZ2V0RGljdGlvbmFyeVJldmVyc2VkKGNvZGUpO1xuICAgICAgICBhcHBlbmRSZXZlcnNlZChyZXN1bHQsIHZhbCk7XG4gICAgICAgIG9sZENvZGUgPSBjb2RlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29kZSA8IGRpY3Rpb25hcnlMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGdldERpY3Rpb25hcnlSZXZlcnNlZChjb2RlKTtcbiAgICAgIGFwcGVuZFJldmVyc2VkKHJlc3VsdCwgdmFsKTtcbiAgICAgIGFkZFRvRGljdGlvbmFyeShvbGRDb2RlLCB2YWxbdmFsLmxlbmd0aCAtIDFdKTtcbiAgICAgIG9sZENvZGUgPSBjb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRWYWwgPSBnZXREaWN0aW9uYXJ5UmV2ZXJzZWQob2xkQ29kZSk7XG4gICAgICBpZiAoIW9sZFZhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvZ3VzIGVudHJ5LiBOb3QgaW4gZGljdGlvbmFyeSwgJHtvbGRDb2RlfSAvICR7ZGljdGlvbmFyeUxlbmd0aH0sIHBvc2l0aW9uOiAke3Bvc2l0aW9ufWApO1xuICAgICAgfVxuICAgICAgYXBwZW5kUmV2ZXJzZWQocmVzdWx0LCBvbGRWYWwpO1xuICAgICAgcmVzdWx0LnB1c2gob2xkVmFsW29sZFZhbC5sZW5ndGggLSAxXSk7XG4gICAgICBhZGRUb0RpY3Rpb25hcnkob2xkQ29kZSwgb2xkVmFsW29sZFZhbC5sZW5ndGggLSAxXSk7XG4gICAgICBvbGRDb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAoZGljdGlvbmFyeUxlbmd0aCArIDEgPj0gKDIgKiogYnl0ZUxlbmd0aCkpIHtcbiAgICAgIGlmIChieXRlTGVuZ3RoID09PSBNQVhfQllURUxFTkdUSCkge1xuICAgICAgICBvbGRDb2RlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnl0ZUxlbmd0aCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb2RlID0gZ2V0TmV4dChhcnJheSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExaV0RlY29kZXIgZXh0ZW5kcyBCYXNlRGVjb2RlciB7XG4gIGRlY29kZUJsb2NrKGJ1ZmZlcikge1xuICAgIHJldHVybiBkZWNvbXByZXNzKGJ1ZmZlciwgZmFsc2UpLmJ1ZmZlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==