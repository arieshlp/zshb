(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/geotiff/dist-module/compression/deflate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/deflate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeflateDecoder; });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "./node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs");
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");



class DeflateDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  decodeBlock(buffer) {
    return Object(pako__WEBPACK_IMPORTED_MODULE_0__["inflate"])(new Uint8Array(buffer)).buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9kZWZsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNZOztBQUU1Qiw2QkFBNkIsdURBQVc7QUFDdkQ7QUFDQSxXQUFXLG9EQUFPO0FBQ2xCO0FBQ0EiLCJmaWxlIjoianMvMTU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mbGF0ZSB9IGZyb20gJ3Bha28nO1xuaW1wb3J0IEJhc2VEZWNvZGVyIGZyb20gJy4vYmFzZWRlY29kZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZsYXRlRGVjb2RlciBleHRlbmRzIEJhc2VEZWNvZGVyIHtcbiAgZGVjb2RlQmxvY2soYnVmZmVyKSB7XG4gICAgcmV0dXJuIGluZmxhdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSkuYnVmZmVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9