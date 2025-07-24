(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/geotiff/dist-module/compression/packbits.js":
/*!******************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/packbits.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackbitsDecoder; });
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");


class PackbitsDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  decodeBlock(buffer) {
    const dataView = new DataView(buffer);
    const out = [];

    for (let i = 0; i < buffer.byteLength; ++i) {
      let header = dataView.getInt8(i);
      if (header < 0) {
        const next = dataView.getUint8(i + 1);
        header = -header;
        for (let j = 0; j <= header; ++j) {
          out.push(next);
        }
        i += 1;
      } else {
        for (let j = 0; j <= header; ++j) {
          out.push(dataView.getUint8(i + j + 1));
        }
        i += header + 1;
      }
    }
    return new Uint8Array(out).buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9wYWNrYml0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUU1Qiw4QkFBOEIsdURBQVc7QUFDeEQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy8xNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZURlY29kZXIgZnJvbSAnLi9iYXNlZGVjb2Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2tiaXRzRGVjb2RlciBleHRlbmRzIEJhc2VEZWNvZGVyIHtcbiAgZGVjb2RlQmxvY2soYnVmZmVyKSB7XG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICBjb25zdCBvdXQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmJ5dGVMZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGhlYWRlciA9IGRhdGFWaWV3LmdldEludDgoaSk7XG4gICAgICBpZiAoaGVhZGVyIDwgMCkge1xuICAgICAgICBjb25zdCBuZXh0ID0gZGF0YVZpZXcuZ2V0VWludDgoaSArIDEpO1xuICAgICAgICBoZWFkZXIgPSAtaGVhZGVyO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBoZWFkZXI7ICsraikge1xuICAgICAgICAgIG91dC5wdXNoKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGhlYWRlcjsgKytqKSB7XG4gICAgICAgICAgb3V0LnB1c2goZGF0YVZpZXcuZ2V0VWludDgoaSArIGogKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgaSArPSBoZWFkZXIgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkob3V0KS5idWZmZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=