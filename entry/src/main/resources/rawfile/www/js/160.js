(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/geotiff/dist-module/compression/packbits.js":
/*!******************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/packbits.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PackbitsDecoder; });\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ \"./node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\nclass PackbitsDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  decodeBlock(buffer) {\n    const dataView = new DataView(buffer);\n    const out = [];\n\n    for (let i = 0; i < buffer.byteLength; ++i) {\n      let header = dataView.getInt8(i);\n      if (header < 0) {\n        const next = dataView.getUint8(i + 1);\n        header = -header;\n        for (let j = 0; j <= header; ++j) {\n          out.push(next);\n        }\n        i += 1;\n      } else {\n        for (let j = 0; j <= header; ++j) {\n          out.push(dataView.getUint8(i + j + 1));\n        }\n        i += header + 1;\n      }\n    }\n    return new Uint8Array(out).buffer;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/geotiff/dist-module/compression/packbits.js?");

/***/ })

}]);