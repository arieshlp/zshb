(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "./node_modules/geotiff/dist-module/compression/webimage.js":
/*!******************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/webimage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebImageDecoder; });
/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ "./node_modules/geotiff/dist-module/compression/basedecoder.js");


/**
 * class WebImageDecoder
 *
 * This decoder uses the browsers image decoding facilities to read image
 * formats like WebP when supported.
 */
class WebImageDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    if (typeof createImageBitmap === 'undefined') {
      throw new Error('Cannot decode WebImage as `createImageBitmap` is not available');
    } else if (typeof document === 'undefined' && typeof OffscreenCanvas === 'undefined') {
      throw new Error('Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available');
    }
  }

  async decode(fileDirectory, buffer) {
    const blob = new Blob([buffer]);
    const imageBitmap = await createImageBitmap(blob);

    let canvas;
    if (typeof document !== 'undefined') {
      canvas = document.createElement('canvas');
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
    } else {
      canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    }

    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageBitmap, 0, 0);

    // TODO: check how many samples per pixel we have, and return RGB/RGBA accordingly
    // it seems like GDAL always encodes via RGBA which does not require a translation

    return ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height).data.buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi93ZWJpbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw4QkFBOEIsdURBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy8xNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZURlY29kZXIgZnJvbSAnLi9iYXNlZGVjb2Rlci5qcyc7XG5cbi8qKlxuICogY2xhc3MgV2ViSW1hZ2VEZWNvZGVyXG4gKlxuICogVGhpcyBkZWNvZGVyIHVzZXMgdGhlIGJyb3dzZXJzIGltYWdlIGRlY29kaW5nIGZhY2lsaXRpZXMgdG8gcmVhZCBpbWFnZVxuICogZm9ybWF0cyBsaWtlIFdlYlAgd2hlbiBzdXBwb3J0ZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkltYWdlRGVjb2RlciBleHRlbmRzIEJhc2VEZWNvZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAodHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVjb2RlIFdlYkltYWdlIGFzIGBjcmVhdGVJbWFnZUJpdG1hcGAgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVjb2RlIFdlYkltYWdlIGFzIG5laXRoZXIgYGRvY3VtZW50YCBub3IgYE9mZnNjcmVlbkNhbnZhc2AgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlY29kZShmaWxlRGlyZWN0b3J5LCBidWZmZXIpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0pO1xuICAgIGNvbnN0IGltYWdlQml0bWFwID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XG5cbiAgICBsZXQgY2FudmFzO1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlQml0bWFwLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlQml0bWFwLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhpbWFnZUJpdG1hcC53aWR0aCwgaW1hZ2VCaXRtYXAuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlQml0bWFwLCAwLCAwKTtcblxuICAgIC8vIFRPRE86IGNoZWNrIGhvdyBtYW55IHNhbXBsZXMgcGVyIHBpeGVsIHdlIGhhdmUsIGFuZCByZXR1cm4gUkdCL1JHQkEgYWNjb3JkaW5nbHlcbiAgICAvLyBpdCBzZWVtcyBsaWtlIEdEQUwgYWx3YXlzIGVuY29kZXMgdmlhIFJHQkEgd2hpY2ggZG9lcyBub3QgcmVxdWlyZSBhIHRyYW5zbGF0aW9uXG5cbiAgICByZXR1cm4gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZUJpdG1hcC53aWR0aCwgaW1hZ2VCaXRtYXAuaGVpZ2h0KS5kYXRhLmJ1ZmZlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==