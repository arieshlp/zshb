(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[162],{

/***/ "./node_modules/geotiff/dist-module/compression/webimage.js":
/*!******************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/webimage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WebImageDecoder; });\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ \"./node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\n/**\n * class WebImageDecoder\n *\n * This decoder uses the browsers image decoding facilities to read image\n * formats like WebP when supported.\n */\nclass WebImageDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    if (typeof createImageBitmap === 'undefined') {\n      throw new Error('Cannot decode WebImage as `createImageBitmap` is not available');\n    } else if (typeof document === 'undefined' && typeof OffscreenCanvas === 'undefined') {\n      throw new Error('Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available');\n    }\n  }\n\n  async decode(fileDirectory, buffer) {\n    const blob = new Blob([buffer]);\n    const imageBitmap = await createImageBitmap(blob);\n\n    let canvas;\n    if (typeof document !== 'undefined') {\n      canvas = document.createElement('canvas');\n      canvas.width = imageBitmap.width;\n      canvas.height = imageBitmap.height;\n    } else {\n      canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);\n    }\n\n    const ctx = canvas.getContext('2d');\n    ctx.drawImage(imageBitmap, 0, 0);\n\n    // TODO: check how many samples per pixel we have, and return RGB/RGBA accordingly\n    // it seems like GDAL always encodes via RGBA which does not require a translation\n\n    return ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height).data.buffer;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/geotiff/dist-module/compression/webimage.js?");

/***/ })

}]);