/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "keep-alive",
        [_vm.$route.meta.keepAlive ? _c("router-view") : _vm._e()],
        1
      ),
      !_vm.$route.meta.keepAlive ? _c("router-view") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/global.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./src/style/global.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./alimamashuheiti.ttf */ "./src/style/alimamashuheiti.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: alimamashuheiti;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nbody, html {\n  padding: 0;\n  margin: 0;\n  background-color: #fff;\n}\n\n/**头部导航栏**/\n.van-nav-bar .van-icon, .van-nav-bar__left .van-nav-bar__text {\n  color: #333;\n}\n\n.van-nav-bar, .van-nav-bar__content {\n  height: 54px;\n}\n\n.van-nav-bar, .van-nav-bar__title {\n  font-weight: bold;\n}\n\n.van-nav-bar__left .van-nav-bar__text {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.van-button {\n  height: 40px;\n}\n\n.van-field__left-icon .van-icon {\n  color: #999;\n}\n\n/**表格样式**/\n.table-wrapper {\n  font-size: 12px;\n  border: 0;\n  border-collapse: collapse;\n}\n.table-wrapper tr {\n  background-color: rgba(68, 123, 252, 0.1);\n}\n.table-wrapper tr td:first-child, .table-wrapper tr th:first-child {\n  border-radius: 10px 0 0 10px;\n}\n.table-wrapper tr td:last-child, .table-wrapper tr th:last-child {\n  border-radius: 0 10px 10px 0;\n}\n.table-wrapper tbody tr:nth-child(2n+1) {\n  background-color: #fff;\n}\n.table-wrapper td, .table-wrapper th {\n  padding: 10px 0;\n  text-align: center;\n}\n.table-wrapper th {\n  color: #121236;\n  font-weight: normal;\n}\n.table-wrapper td {\n  color: rgba(18, 18, 54, 0.5);\n}\n\n/**分页样式**/\n.van-pagination__item {\n  height: 30px;\n}\n\n/**loading遮罩样式**/\n.mask {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  background: #eeeeeed1;\n  height: 100%;\n  width: 90%;\n  text-align: center;\n  padding: 50% 5%;\n}\n\n.site-status {\n  display: inline-block;\n  width: 42px;\n  height: 18px;\n  background-size: 100% 100%;\n  background-position: center center;\n  line-height: 18px;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n}\n\n/******菜单********/\n.fs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card-wrapper {\n  margin: 4px 13px;\n  padding-top: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px rgba(0, 29, 176, 0.2);\n}\n.card-wrapper .card-title {\n  position: relative;\n  padding: 5px 14px;\n  color: #121236;\n  font-size: 14px;\n}\n.card-wrapper .card-title-air {\n  background: linear-gradient(to right, rgba(67, 207, 124, 0.3), rgba(67, 207, 124, 0));\n}\n.card-wrapper .card-title-water {\n  background: linear-gradient(to right, rgba(82, 113, 255, 0.3), rgba(82, 113, 255, 0));\n}\n.card-wrapper .card-title-pollute {\n  background: linear-gradient(to right, rgba(252, 193, 91, 0.3), rgba(252, 193, 91, 0));\n}\n.card-wrapper .time {\n  padding-right: 13px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n\n.vselectpop {\n  background-color: #fff;\n  overflow: hidden;\n  height: 100%;\n}\n.vselectpop .popup_title {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1.5px solid #e9e9e9;\n  box-sizing: border-box;\n}\n.vselectpop .popup_title .van-search {\n  padding: 0;\n}\n.vselectpop .popup_title > div {\n  align-self: center;\n}\n.vselectpop .popup_content {\n  height: calc(100% - 4px);\n  overflow: scroll;\n}\n.vselectpop .checkmancell .van-cell {\n  padding: 8px 14px;\n}\n.vselectpop .checkmancell .van-cell .van-cell__label {\n  margin-top: 0px;\n}\n.vselectpop .checkmancell .custom-title {\n  margin-right: 4px;\n}\n\n.scroll-wrapper {\n  height: calc(100vh - 65px);\n  margin-top: 65px;\n  overflow: auto;\n}\n\n.scroll-to-top-wrapper {\n  height: calc(100vh - 50px);\n  margin-top: 50px;\n  overflow: auto;\n}\n\n.target2 {\n  color: #165dff;\n  border: 1px solid #165dff;\n}\n\n.target3 {\n  color: #27d043;\n  border: 1px solid #27d043;\n}\n\n.target4 {\n  color: #ffc338;\n  border: 1px solid #ffc338;\n}\n\n.target5 {\n  color: #fd8e01;\n  border: 1px solid #fd8e01;\n}\n\n.target6 {\n  color: #fe4f02;\n  border: 1px solid #fe4f02;\n}\n\n.target0 {\n  color: #a0a0a0;\n  border: 1px solid #a0a0a0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1950d3c1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--9-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/mock.js":
/*!************************!*\
  !*** ./src/js/mock.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_5__);





 // 模拟的用户数据

var users = [{
  username: 'admin',
  password: 'admin123',
  token: 'adminToken',
  mc: '张三',
  ssbm: '局领导'
}, {
  username: 'user',
  password: 'user123',
  token: 'userToken',
  mc: '李四',
  ssbm: '局领导'
}]; // 模拟的待办数据

var inHandList = [{
  "id": "296b024c-2494-4764-b46b-1b06645d9953",
  "token": 'adminToken',
  "type": "测试掌上环保",
  "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
  "enterprise_name": "中宝垃圾中转站",
  "legal_representative": "",
  "legal_representative_tel": "",
  "enterprise_address": "",
  "basic_info": "测试数据",
  "transfer_department_opinion": "",
  "transfer_department_time": "2025-03-10",
  "leader_opinion": "666",
  "leader_time": "2025-03-10 10:35:00",
  "sign": "测试人员",
  "notes": "",
  "status": "待处理",
  "create_user": "魏帅",
  "create_user_id": "1587",
  "create_time": "2025-03-10 10:32:37",
  "transfer_status": "否",
  "joint_status": "否",
  "urging": "是",
  "joint_department": "",
  "business_unit": "",
  "receive_user": "",
  "receive_user_id": "",
  "transfer": "",
  "ssbm": "昆明市生态环境局",
  "flow_id": "f40b87c4-e97f-4c4a-86d8-7c1f365ccda5",
  "task_type": "",
  "dept_id": "",
  "assign_status": "",
  "classification": "其他污染",
  "jd": "",
  "wd": "",
  "jwd": "",
  "staging": ""
}, {
  "id": "323b024c-2494-4764-b46b-1b06645d9953",
  "token": 'userToken',
  "type": "待办事项xxxxxx",
  "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
  "enterprise_name": "xxxxxx有限公司",
  "legal_representative": "",
  "legal_representative_tel": "",
  "enterprise_address": "",
  "basic_info": "测试待办数据",
  "transfer_department_opinion": "",
  "transfer_department_time": "2025-03-10",
  "leader_opinion": "666",
  "leader_time": "2025-03-10 10:35:00",
  "sign": "测试人员",
  "notes": "",
  "status": "待处理",
  "create_user": "魏帅",
  "create_user_id": "1587",
  "create_time": "2025-03-10 10:32:37",
  "transfer_status": "否",
  "joint_status": "否",
  "urging": "是",
  "joint_department": "",
  "business_unit": "",
  "receive_user": "",
  "receive_user_id": "",
  "transfer": "",
  "ssbm": "昆明市生态环境局",
  "flow_id": "f40b87c4-e97f-4c4a-86d8-7c1f365ccda5",
  "task_type": "",
  "dept_id": "",
  "assign_status": "",
  "classification": "其他污染",
  "jd": "",
  "wd": "",
  "jwd": "",
  "staging": ""
}, {
  "id": "455b024c-2494-4764-b46b-1b06645d9953",
  "token": 'userToken',
  "type": "待办事项0723",
  "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
  "enterprise_name": "xxxxxx有限公司",
  "legal_representative": "",
  "legal_representative_tel": "",
  "enterprise_address": "",
  "basic_info": "测试已处理数据",
  "transfer_department_opinion": "",
  "transfer_department_time": "2025-03-10",
  "leader_opinion": "666",
  "leader_time": "2025-03-10 10:35:00",
  "sign": "测试人员",
  "notes": "",
  "status": "已处理",
  "create_user": "魏帅",
  "create_user_id": "1587",
  "create_time": "2025-03-10 10:32:37",
  "transfer_status": "否",
  "joint_status": "否",
  "urging": "是",
  "joint_department": "",
  "business_unit": "",
  "receive_user": "",
  "receive_user_id": "",
  "transfer": "",
  "ssbm": "昆明市生态环境局",
  "flow_id": "f40b87c4-e97f-4c4a-86d8-7c1f365ccda5",
  "task_type": "",
  "dept_id": "",
  "assign_status": "",
  "classification": "其他污染",
  "jd": "",
  "wd": "",
  "jwd": "",
  "staging": ""
}];
var inHandDetail = [{
  "detail_info": {
    "id": "296b024c-2494-4764-b46b-1b06645d9953",
    "type": "测试掌上环保",
    "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
    "enterprise_name": "",
    "legal_representative": "",
    "legal_representative_tel": "",
    "enterprise_address": "",
    "basic_info": "测试数据",
    "transfer_department_opinion": "",
    "transfer_department_time": "2025-03-10",
    "leader_opinion": "666",
    "leader_time": "2025-03-10 10:35:00",
    "sign": "测试人员",
    "sign_id": "1594",
    "notes": "",
    "status": "待处理",
    "create_user": "张三",
    "create_user_id": "1587",
    "create_time": "2025-03-10 10:32:37",
    "transfer_status": "否",
    "joint_status": "否",
    "urging": "是",
    "joint_department": "",
    "business_unit": "",
    "business_unit_id": "",
    "leader_user": "",
    "leader_user_id": "1594",
    "file_id": "",
    "clue_id": "",
    "time": "2025-03-10 10:32:37",
    "file_list": [],
    "ssbm": "昆明市生态环境局",
    "staging": "是",
    "task_type": "",
    "dept_id": "",
    "classification": "其他污染",
    "enterpriseInfos": [{
      "id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
      "enterprise_id": "83bb808b-c81c-4957-a377-f58c2d6e64f3",
      "enterprise_name": "中宝垃圾中转站",
      "legal_representative": "刘xx",
      "legal_representative_tel": "",
      "enterprise_address": "海口中宝社区中桃路",
      "clue_id": "ddebfd01-49fd-46e5-9a00-6b6b498a8705"
    }]
  },
  "completion": {
    "person": "admin",
    "date": "2025-07-23 14:19:00",
    "opinion": "处理意见xxxxxxxxxxxxxxxxxx"
  }
}, {
  "completion": {
    "person": "admin",
    "date": "2025-07-23 14:19:00",
    "opinion": "处理意见xxxxxxxxxxxxxxxxxx"
  },
  "detail_info": {
    "id": "323b024c-2494-4764-b46b-1b06645d9953",
    "type": "待办事项xxxxxx",
    "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
    "enterprise_name": "",
    "legal_representative": "",
    "legal_representative_tel": "",
    "enterprise_address": "",
    "basic_info": "测试待办数据",
    "transfer_department_opinion": "",
    "transfer_department_time": "2025-03-10",
    "leader_opinion": "666",
    "leader_time": "2025-03-10 10:35:00",
    "sign": "测试人员",
    "sign_id": "1594",
    "notes": "666",
    "status": "待处理",
    "create_user": "李四",
    "create_user_id": "1587",
    "create_time": "2025-03-10 10:32:37",
    "transfer_status": "否",
    "joint_status": "否",
    "urging": "是",
    "joint_department": "",
    "business_unit": "",
    "business_unit_id": "",
    "leader_user": "",
    "leader_user_id": "1594",
    "file_id": "",
    "clue_id": "",
    "time": "2025-03-10 10:32:37",
    "file_list": [],
    "ssbm": "昆明市生态环境局",
    "staging": "是",
    "task_type": "",
    "dept_id": "",
    "classification": "其他污染",
    "enterpriseInfos": [{
      "id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
      "enterprise_id": "83bb808b-c81c-4957-a377-f58c2d6e64f3",
      "enterprise_name": "xxxxxx有限公司",
      "legal_representative": "何xx",
      "legal_representative_tel": "",
      "enterprise_address": "xxxx社区xxxx路",
      "clue_id": "ddebfd01-49fd-46e5-9a00-6b6b498a8705"
    }]
  }
}, {
  "completion": {
    "person": "admin",
    "date": "2025-07-23 14:19:00",
    "opinion": "处理意见xxxxxxxxxxxxxxxxxx"
  },
  "detail_info": {
    "id": "455b024c-2494-4764-b46b-1b06645d9953",
    "type": "待办事项0723",
    "enterprise_id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
    "enterprise_name": "",
    "legal_representative": "",
    "legal_representative_tel": "",
    "enterprise_address": "",
    "basic_info": "测试已处理数据",
    "transfer_department_opinion": "",
    "transfer_department_time": "2025-03-10",
    "leader_opinion": "666",
    "leader_time": "2025-03-10 10:35:00",
    "sign": "测试人员",
    "sign_id": "1594",
    "notes": "666",
    "status": "已处理",
    "create_user": "李四",
    "create_user_id": "1587",
    "create_time": "2025-03-10 10:32:37",
    "transfer_status": "否",
    "joint_status": "否",
    "urging": "是",
    "joint_department": "",
    "business_unit": "",
    "business_unit_id": "",
    "leader_user": "",
    "leader_user_id": "1594",
    "file_id": "",
    "clue_id": "",
    "time": "2025-03-10 10:32:37",
    "file_list": [],
    "ssbm": "昆明市生态环境局",
    "staging": "是",
    "task_type": "",
    "dept_id": "",
    "classification": "其他污染",
    "enterpriseInfos": [{
      "id": "001c80f9-46a8-4f25-8708-590b3b9e5b7c",
      "enterprise_id": "83bb808b-c81c-4957-a377-f58c2d6e64f3",
      "enterprise_name": "xxxxxx有限公司",
      "legal_representative": "肖xx",
      "legal_representative_tel": "",
      "enterprise_address": "xxxx社区xxxx路",
      "clue_id": "ddebfd01-49fd-46e5-9a00-6b6b498a8705"
    }]
  }
}]; // 登录

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/login', 'post', function (options) {
  var _JSON$parse = JSON.parse(options.body),
      username = _JSON$parse.username,
      password = _JSON$parse.password;

  var user = users.find(function (u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    localStorage.setItem("userList", JSON.stringify(userList));
    return {
      code: 200,
      message: '登录成功',
      token: user.token
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误'
    };
  }
}); // 查询用户信息

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/getUserInfo', 'post', function (options) {
  var _JSON$parse2 = JSON.parse(options.body),
      token = _JSON$parse2.token;

  var info = users.find(function (u) {
    return u.token === token;
  });

  if (info) {
    return {
      code: 200,
      message: '成功',
      data: info
    };
  } else {
    return {
      code: 401,
      message: '查询用户信息失败'
    };
  }
});
var userList = [{
  "userVO": {
    "userId": 1,
    "username": "admin",
    "token": "adminToken",
    "mc": "张三",
    "divisionCode": "530102",
    "divisionName": "五华区",
    "tel": "131XXXXXXXX",
    "deptId": 109,
    "deptName": "局领导",
    "postName": "开发",
    "controlRoleId": 1,
    "controlRoleName": "",
    "roles": [{
      "roleId": 1,
      "roleName": "掌上环保-水环境相关"
    }, {
      "roleId": 2,
      "roleName": "掌上环保-污染源相关"
    }]
  }
}, {
  "userVO": {
    "userId": 2,
    "username": "user",
    "token": "userToken",
    "mc": "李四",
    "divisionCode": "530103",
    "divisionName": "盘龙区",
    "tel": "134XXXXXXXX",
    "deptId": 109,
    "deptName": "局领导",
    "postName": "开发",
    "controlRoleId": 1,
    "controlRoleName": "",
    "roles": [{
      "roleId": 1,
      "roleName": "掌上环保-水环境相关"
    }]
  }
}]; // 个人信息页面

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/getUserObject', 'post', function (options) {
  var _JSON$parse3 = JSON.parse(options.body),
      token = _JSON$parse3.token;

  var tempUserList = JSON.parse(localStorage.getItem('userList'));
  var info = tempUserList.find(function (u) {
    return u.userVO.token === token;
  });

  if (info) {
    return {
      code: 200,
      message: '成功',
      data: info
    };
  } else {
    return {
      code: 401,
      message: '查询用户信息失败'
    };
  }
}); // 更新用户信息

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/updateUser', 'post', function (options) {
  var tempUserList = JSON.parse(localStorage.getItem('userList'));

  var _JSON$parse4 = JSON.parse(options.body),
      token = _JSON$parse4.token,
      deptId = _JSON$parse4.deptId,
      deptName = _JSON$parse4.deptName,
      divisionCode = _JSON$parse4.divisionCode,
      divisionName = _JSON$parse4.divisionName,
      postName = _JSON$parse4.postName,
      mc = _JSON$parse4.mc,
      roles = _JSON$parse4.roles;

  var info = tempUserList.find(function (u, i) {
    if (u.userVO.token === token) {
      (function () {
        tempUserList[i].userVO.deptId = deptId;
        tempUserList[i].userVO.deptName = deptName;
        tempUserList[i].userVO.divisionCode = divisionCode;
        tempUserList[i].userVO.divisionName = divisionName;
        tempUserList[i].userVO.postName = postName;
        tempUserList[i].userVO.mc = mc;
        var tempRole = [];

        var _loop = function _loop(_i) {
          roleList.forEach(function (j) {
            if (roles[_i] === j.roleId) {
              tempRole.push(j);
            }
          });
        };

        for (var _i = 0; _i < roles.length; _i++) {
          _loop(_i);
        }

        tempUserList[i].userVO.roles = tempRole;
      })();
    }
  });
  localStorage.removeItem('userList');
  localStorage.setItem('userList', JSON.stringify(tempUserList));

  if (info) {
    return {
      code: 200,
      message: '成功',
      data: '修改成功'
    };
  } else {
    return {
      code: 401,
      message: '失败',
      data: '修改失败'
    };
  }
});
var roleList = [{
  "roleId": 1,
  "roleName": "掌上环保-水环境相关"
}, {
  "roleId": 2,
  "roleName": "掌上环保-污染源相关"
}, {
  "roleId": 3,
  "roleName": "掌上环保-空气相关"
}, {
  "roleId": 11,
  "roleName": "督办"
}]; // 查询角色

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/getRole', 'post', function (options) {
  return {
    code: 200,
    message: '成功',
    data: roleList
  };
});
var areaList = [{
  "mc": "昆明倘甸产业园区轿子山旅游开发区",
  "dm": 530165
}, {
  "mc": "昆明国家高新技术产业开发区",
  "dm": 530108
}, {
  "mc": "阳宗海风景名胜区",
  "dm": 530164
}, {
  "mc": "昆明经济技术开发区",
  "dm": 530107
}, {
  "mc": "五华区",
  "dm": 530102
}, {
  "mc": "盘龙区",
  "dm": 530103
}, {
  "mc": "官渡区",
  "dm": 530111
}]; //查询区域

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/getAreaList', 'post', function (options) {
  return {
    code: 200,
    message: '成功',
    data: areaList
  };
}); //查询部门

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/getDepartment', 'post', function (options) {
  return {
    code: 200,
    message: '成功',
    data: [{
      "deptId": 1,
      "parentId": null,
      "deptName": "昆明市生态环境局",
      "children": [{
        "deptId": 107,
        "parentId": 1,
        "deptName": "局机关",
        "children": [{
          "deptId": 109,
          "parentId": 107,
          "deptName": "局领导"
        }, {
          "deptId": 111,
          "parentId": 107,
          "deptName": "办公室"
        }, {
          "deptId": 112,
          "parentId": 107,
          "deptName": "政策法规与宣传教育处"
        }, {
          "deptId": 113,
          "parentId": 107,
          "deptName": "人事处"
        }, {
          "deptId": 114,
          "parentId": 107,
          "deptName": "财务处"
        }]
      }, {
        "deptId": 108,
        "parentId": 1,
        "deptName": "直属事业单位",
        "children": [{
          "deptId": 131,
          "parentId": 108,
          "deptName": "生态环境综合行政执法支队",
          "children": [{
            "deptId": 183,
            "parentId": 131,
            "deptName": "单位领导班子"
          }, {
            "deptId": 184,
            "parentId": 131,
            "deptName": "综合处"
          }]
        }]
      }]
    }]
  };
}); // 查询待办列表

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/queryInHandList', 'post', function (options) {
  var _JSON$parse5 = JSON.parse(options.body),
      type = _JSON$parse5.type;

  var info = [];

  for (var i = 0; i < inHandList.length; i++) {
    if (inHandList[i].token === localStorage.getItem('token')) {
      // if(inHandList[i].status === type && inHandList[i].token === localStorage.getItem('token')){
      info.push(inHandList[i]);
    }
  }

  if (info) {
    return {
      code: 200,
      message: '成功',
      data: info
    };
  } else {
    return {
      code: 401,
      message: '查询待办失败'
    };
  }
}); // 查询待办详情

mockjs__WEBPACK_IMPORTED_MODULE_5___default.a.mock('/zshb/queryInHandDetail', 'post', function (options) {
  var _JSON$parse6 = JSON.parse(options.body),
      id = _JSON$parse6.id;

  var info = inHandDetail.find(function (u) {
    return u.detail_info.id === id;
  });

  if (info) {
    return {
      code: 200,
      message: '成功',
      data: info
    };
  } else {
    return {
      code: 401,
      message: '查询待办详情失败'
    };
  }
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vant/lib/index.css */ "./node_modules/vant/lib/index.css");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vant_lib_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/global.scss */ "./src/style/global.scss");
/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_global_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _js_mock_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/mock.js */ "./src/js/mock.js");










vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vant__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.dayjs = dayjs__WEBPACK_IMPORTED_MODULE_7___default.a;



var vueInstance = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_6__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_11__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}).$mount("#app");
/* harmony default export */ __webpack_exports__["default"] = (vueInstance);

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);







vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
var routes = [{
  path: "/",
  redirect: "homePage"
}, {
  path: "/index.html",
  //apk打包后默认访问了index.html
  redirect: "/homePage"
}, {
  path: "/homePage",
  name: "homePage",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../views/homePage/index.vue */ "./src/views/homePage/index.vue"));
  },
  meta: {
    title: "首页"
  }
}, {
  path: "/login",
  name: "login",
  // component: () => import("../views/login/index.vue"),
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/login/indexMock.vue */ "./src/views/login/indexMock.vue"));
  },
  meta: {
    title: "登录"
  }
}, {
  path: "/mine",
  name: "mine",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../views/mine/index.vue */ "./src/views/mine/index.vue"));
  },
  meta: {
    title: "我的"
  }
}, {
  path: "/mine/systemSet",
  name: "systemSet",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ../views/mine/systemSet/index.vue */ "./src/views/mine/systemSet/index.vue"));
  },
  meta: {
    title: "编辑"
  }
}, {
  path: "/inHand",
  name: "inHand",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ../views/inHand/index.vue */ "./src/views/inHand/index.vue"));
  },
  meta: {
    title: "待办事项"
  }
}, {
  path: "/inHand/inHandDetail",
  name: "inHandDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../views/inHand/inHandDetail/index.vue */ "./src/views/inHand/inHandDetail/index.vue"));
  },
  meta: {
    title: "待办详情"
  }
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  mode: "hash",
  // mode: "history",
  base: "",
  routes: routes
}); //引入头部进度条 进度环显示隐藏

nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.configure({
  showSpinner: false
});
router.beforeEach(function (to, from, next) {
  //引入头部进度条 显示进度条
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
  next(); //引入头部进度条 完成进度条

  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
});
router.onError(function (error) {
  console.log(error);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./src/router/index.js");





vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  state: {
    activeIndex: 0,
    searchStore: [],
    token: localStorage.getItem('token'),
    uuid: localStorage.getItem('uuid'),
    // uuid: '123',
    type: '',
    title: '',
    dataId: '',
    searchObj: {
      moduleName: '',
      resourcePath: '',
      type: '',
      parameter: '',
      componentName: ''
    },
    pointName: ''
  },
  mutations: {
    setActiveIndex: function setActiveIndex(state, value) {
      state.activeIndex = value;
    },
    setSearchObj: function setSearchObj(state, value) {
      state.searchObj = value;
    },
    setSearchStore: function setSearchStore(state, value) {
      if (state.searchStore.length > 30) {
        state.searchStore.unshift(value);
        state.searchStore = state.searchStore.slice(10);
      } else {
        state.searchStore.unshift(value);
      }

      localStorage.setItem('searchStore', state.searchStore.join(','));
    },
    clearSearchStore: function clearSearchStore(state) {
      state.searchStore = [];
      localStorage.setItem('searchStore', '');
    },
    setToken: function setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    unUserPassLogin: function unUserPassLogin(state, uuid) {}
  }
}));

/***/ }),

/***/ "./src/style/alimamashuheiti.ttf":
/*!***************************************!*\
  !*** ./src/style/alimamashuheiti.ttf ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/alimamashuheiti.ttf";

/***/ }),

/***/ "./src/style/global.scss":
/*!*******************************!*\
  !*** ./src/style/global.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../node_modules/postcss-loader/src??ref--9-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/global.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("083555ba", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9BcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzdhNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzI3YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/NWFlZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8zZDM0Iiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2ZmZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/YjM0YSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvYWxpbWFtYXNodWhlaXRpLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZ2xvYmFsLnNjc3M/NmYwOCJdLCJuYW1lcyI6WyJ1c2VycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsIm1jIiwic3NibSIsImluSGFuZExpc3QiLCJpbkhhbmREZXRhaWwiLCJNb2NrIiwibW9jayIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJib2R5IiwidXNlciIsImZpbmQiLCJ1IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVzZXJMaXN0IiwiY29kZSIsIm1lc3NhZ2UiLCJpbmZvIiwiZGF0YSIsInRlbXBVc2VyTGlzdCIsImdldEl0ZW0iLCJ1c2VyVk8iLCJkZXB0SWQiLCJkZXB0TmFtZSIsImRpdmlzaW9uQ29kZSIsImRpdmlzaW9uTmFtZSIsInBvc3ROYW1lIiwicm9sZXMiLCJpIiwidGVtcFJvbGUiLCJyb2xlTGlzdCIsImZvckVhY2giLCJqIiwicm9sZUlkIiwicHVzaCIsImxlbmd0aCIsInJlbW92ZUl0ZW0iLCJhcmVhTGlzdCIsInR5cGUiLCJpZCIsImRldGFpbF9pbmZvIiwiVnVlIiwidXNlIiwiVmFudCIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCJkYXlqcyIsInZ1ZUluc3RhbmNlIiwicm91dGVyIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiQXBwIiwiJG1vdW50IiwiVnVlUm91dGVyIiwicm91dGVzIiwicGF0aCIsInJlZGlyZWN0IiwibmFtZSIsImNvbXBvbmVudCIsIm1ldGEiLCJ0aXRsZSIsIm1vZGUiLCJiYXNlIiwicHJvY2VzcyIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiYmVmb3JlRWFjaCIsInRvIiwiZnJvbSIsIm5leHQiLCJzdGFydCIsImRvbmUiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJhY3RpdmVJbmRleCIsInNlYXJjaFN0b3JlIiwidXVpZCIsImRhdGFJZCIsInNlYXJjaE9iaiIsIm1vZHVsZU5hbWUiLCJyZXNvdXJjZVBhdGgiLCJwYXJhbWV0ZXIiLCJjb21wb25lbnROYW1lIiwicG9pbnROYW1lIiwibXV0YXRpb25zIiwic2V0QWN0aXZlSW5kZXgiLCJ2YWx1ZSIsInNldFNlYXJjaE9iaiIsInNldFNlYXJjaFN0b3JlIiwidW5zaGlmdCIsInNsaWNlIiwiam9pbiIsImNsZWFyU2VhcmNoU3RvcmUiLCJzZXRUb2tlbiIsImFjdGlvbnMiLCJ1blVzZXJQYXNzTG9naW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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LFdBQU4sQ0FBa0JjLE9BQWxCLENBQTBCSCxLQUExQjtBQUNEOztBQUNEbkYsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixFQUFvQ3FFLEtBQUssQ0FBQ0UsV0FBTixDQUFrQmdCLElBQWxCLENBQXVCLEdBQXZCLENBQXBDO0FBQ0QsS0FmUTtBQWdCVEMsb0JBaEJTLDRCQWdCUW5CLEtBaEJSLEVBZ0JlO0FBQ3RCQSxXQUFLLENBQUNFLFdBQU4sR0FBb0IsRUFBcEI7QUFDQXhFLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsRUFBcEM7QUFDRCxLQW5CUTtBQW9CVHlGLFlBcEJTLG9CQW9CQXBCLEtBcEJBLEVBb0JPcEYsS0FwQlAsRUFvQmM7QUFDckJvRixXQUFLLENBQUNwRixLQUFOLEdBQWNBLEtBQWQ7QUFDRDtBQXRCUSxHQW5CaUI7QUEyQzVCeUcsU0FBTyxFQUFFO0FBQ1BDLG1CQURPLDJCQUNTdEIsS0FEVCxFQUNnQkcsSUFEaEIsRUFDc0IsQ0FDNUI7QUFGTTtBQTNDbUIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLHFCQUF1QiwrQjs7Ozs7Ozs7Ozs7QUNBeEM7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsMlZBQTJNO0FBQ2pPO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQywwSEFBNkQ7QUFDL0UsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImpzL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJjaHVuay12ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJhcHBcIj5cclxuICAgIDxrZWVwLWFsaXZlPlxyXG4gICAgICA8cm91dGVyLXZpZXcgdi1pZj1cIiRyb3V0ZS5tZXRhLmtlZXBBbGl2ZVwiPjwvcm91dGVyLXZpZXc+XHJcbiAgICA8L2tlZXAtYWxpdmU+XHJcbiAgICA8cm91dGVyLXZpZXcgdi1pZj1cIiEkcm91dGUubWV0YS5rZWVwQWxpdmVcIj48L3JvdXRlci12aWV3PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiQXBwXCIsXHJcbiAgY29tcG9uZW50czoge30sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7fSxcclxuICBtZXRob2RzOiB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4jYXBwIHtcclxuICBmb250LWZhbWlseTogQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJrZWVwLWFsaXZlXCIsXG4gICAgICAgIFtfdm0uJHJvdXRlLm1ldGEua2VlcEFsaXZlID8gX2MoXCJyb3V0ZXItdmlld1wiKSA6IF92bS5fZSgpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgICFfdm0uJHJvdXRlLm1ldGEua2VlcEFsaXZlID8gX2MoXCJyb3V0ZXItdmlld1wiKSA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2FsaW1hbWFzaHVoZWl0aS50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWxpbWFtYXNodWhlaXRpO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5ib2R5LCBodG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKirlpLTpg6jlr7zoiKrmoI8qKi9cXG4udmFuLW5hdi1iYXIgLnZhbi1pY29uLCAudmFuLW5hdi1iYXJfX2xlZnQgLnZhbi1uYXYtYmFyX190ZXh0IHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4udmFuLW5hdi1iYXIsIC52YW4tbmF2LWJhcl9fY29udGVudCB7XFxuICBoZWlnaHQ6IDU0cHg7XFxufVxcblxcbi52YW4tbmF2LWJhciwgLnZhbi1uYXYtYmFyX190aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnZhbi1uYXYtYmFyX19sZWZ0IC52YW4tbmF2LWJhcl9fdGV4dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnZhbi1idXR0b24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4udmFuLWZpZWxkX19sZWZ0LWljb24gLnZhbi1pY29uIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4vKirooajmoLzmoLflvI8qKi9cXG4udGFibGUtd3JhcHBlciB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4udGFibGUtd3JhcHBlciB0ciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdHIgdGQ6Zmlyc3QtY2hpbGQsIC50YWJsZS13cmFwcGVyIHRyIHRoOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XFxufVxcbi50YWJsZS13cmFwcGVyIHRyIHRkOmxhc3QtY2hpbGQsIC50YWJsZS13cmFwcGVyIHRyIHRoOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKzEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi50YWJsZS13cmFwcGVyIHRkLCAudGFibGUtd3JhcHBlciB0aCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50YWJsZS13cmFwcGVyIHRoIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdGQge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuXFxuLyoq5YiG6aG15qC35byPKiovXFxuLnZhbi1wYWdpbmF0aW9uX19pdGVtIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLyoqbG9hZGluZ+mBrue9qeagt+W8jyoqL1xcbi5tYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWVkMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MCUgNSU7XFxufVxcblxcbi5zaXRlLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qKioqKiroj5zljZUqKioqKioqKi9cXG4uZnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLXdyYXBwZXIge1xcbiAgbWFyZ2luOiA0cHggMTNweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDI5LCAxNzYsIDAuMik7XFxufVxcbi5jYXJkLXdyYXBwZXIgLmNhcmQtdGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDE0cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNhcmQtd3JhcHBlciAuY2FyZC10aXRsZS1haXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDY3LCAyMDcsIDEyNCwgMC4zKSwgcmdiYSg2NywgMjA3LCAxMjQsIDApKTtcXG59XFxuLmNhcmQtd3JhcHBlciAuY2FyZC10aXRsZS13YXRlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoODIsIDExMywgMjU1LCAwLjMpLCByZ2JhKDgyLCAxMTMsIDI1NSwgMCkpO1xcbn1cXG4uY2FyZC13cmFwcGVyIC5jYXJkLXRpdGxlLXBvbGx1dGUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1MiwgMTkzLCA5MSwgMC4zKSwgcmdiYSgyNTIsIDE5MywgOTEsIDApKTtcXG59XFxuLmNhcmQtd3JhcHBlciAudGltZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnZzZWxlY3Rwb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi52c2VsZWN0cG9wIC5wb3B1cF90aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2U5ZTllOTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi52c2VsZWN0cG9wIC5wb3B1cF90aXRsZSAudmFuLXNlYXJjaCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4udnNlbGVjdHBvcCAucG9wdXBfdGl0bGUgPiBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udnNlbGVjdHBvcCAucG9wdXBfY29udGVudCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4udnNlbGVjdHBvcCAuY2hlY2ttYW5jZWxsIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiA4cHggMTRweDtcXG59XFxuLnZzZWxlY3Rwb3AgLmNoZWNrbWFuY2VsbCAudmFuLWNlbGwgLnZhbi1jZWxsX19sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcbi52c2VsZWN0cG9wIC5jaGVja21hbmNlbGwgLmN1c3RvbS10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLnNjcm9sbC13cmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xcbiAgbWFyZ2luLXRvcDogNjVweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uc2Nyb2xsLXRvLXRvcC13cmFwcGVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udGFyZ2V0MiB7XFxuICBjb2xvcjogIzE2NWRmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNjVkZmY7XFxufVxcblxcbi50YXJnZXQzIHtcXG4gIGNvbG9yOiAjMjdkMDQzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ZDA0MztcXG59XFxuXFxuLnRhcmdldDQge1xcbiAgY29sb3I6ICNmZmMzMzg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMzM4O1xcbn1cXG5cXG4udGFyZ2V0NSB7XFxuICBjb2xvcjogI2ZkOGUwMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDhlMDE7XFxufVxcblxcbi50YXJnZXQ2IHtcXG4gIGNvbG9yOiAjZmU0ZjAyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlNGYwMjtcXG59XFxuXFxuLnRhcmdldDAge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhcHAge1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxOTUwZDNjMVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBNb2NrXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdiYTViZDkwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYTViZDkwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjlkMTdmNzk2LXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIiIsImltcG9ydCBNb2NrIGZyb20gJ21vY2tqcyc7XHJcblxyXG4vLyDmqKHmi5/nmoTnlKjmiLfmlbDmja5cclxuY29uc3QgdXNlcnMgPSBbXHJcbiAge3VzZXJuYW1lOiAnYWRtaW4nLCBwYXNzd29yZDogJ2FkbWluMTIzJywgdG9rZW46ICdhZG1pblRva2VuJywgbWM6ICflvKDkuIknLCBzc2JtOiAn5bGA6aKG5a+8J30sXHJcbiAge3VzZXJuYW1lOiAndXNlcicsIHBhc3N3b3JkOiAndXNlcjEyMycsIHRva2VuOiAndXNlclRva2VuJywgbWM6ICfmnY7lm5snLCBzc2JtOiAn5bGA6aKG5a+8J31cclxuXTtcclxuXHJcbi8vIOaooeaLn+eahOW+heWKnuaVsOaNrlxyXG5jb25zdCBpbkhhbmRMaXN0ID0gW1xyXG4gIHtcclxuICAgIFwiaWRcIjogXCIyOTZiMDI0Yy0yNDk0LTQ3NjQtYjQ2Yi0xYjA2NjQ1ZDk5NTNcIixcclxuICAgIFwidG9rZW5cIjogJ2FkbWluVG9rZW4nLFxyXG4gICAgXCJ0eXBlXCI6IFwi5rWL6K+V5o6M5LiK546v5L+dXCIsXHJcbiAgICBcImVudGVycHJpc2VfaWRcIjogXCIwMDFjODBmOS00NmE4LTRmMjUtODcwOC01OTBiM2I5ZTViN2NcIixcclxuICAgIFwiZW50ZXJwcmlzZV9uYW1lXCI6IFwi5Lit5a6d5Z6D5Zy+5Lit6L2s56uZXCIsXHJcbiAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlXCI6IFwiXCIsXHJcbiAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlX3RlbFwiOiBcIlwiLFxyXG4gICAgXCJlbnRlcnByaXNlX2FkZHJlc3NcIjogXCJcIixcclxuICAgIFwiYmFzaWNfaW5mb1wiOiBcIua1i+ivleaVsOaNrlwiLFxyXG4gICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X29waW5pb25cIjogXCJcIixcclxuICAgIFwidHJhbnNmZXJfZGVwYXJ0bWVudF90aW1lXCI6IFwiMjAyNS0wMy0xMFwiLFxyXG4gICAgXCJsZWFkZXJfb3BpbmlvblwiOiBcIjY2NlwiLFxyXG4gICAgXCJsZWFkZXJfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzU6MDBcIixcclxuICAgIFwic2lnblwiOiBcIua1i+ivleS6uuWRmFwiLFxyXG4gICAgXCJub3Rlc1wiOiBcIlwiLFxyXG4gICAgXCJzdGF0dXNcIjogXCLlvoXlpITnkIZcIixcclxuICAgIFwiY3JlYXRlX3VzZXJcIjogXCLprY/luIVcIixcclxuICAgIFwiY3JlYXRlX3VzZXJfaWRcIjogXCIxNTg3XCIsXHJcbiAgICBcImNyZWF0ZV90aW1lXCI6IFwiMjAyNS0wMy0xMCAxMDozMjozN1wiLFxyXG4gICAgXCJ0cmFuc2Zlcl9zdGF0dXNcIjogXCLlkKZcIixcclxuICAgIFwiam9pbnRfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICBcInVyZ2luZ1wiOiBcIuaYr1wiLFxyXG4gICAgXCJqb2ludF9kZXBhcnRtZW50XCI6IFwiXCIsXHJcbiAgICBcImJ1c2luZXNzX3VuaXRcIjogXCJcIixcclxuICAgIFwicmVjZWl2ZV91c2VyXCI6IFwiXCIsXHJcbiAgICBcInJlY2VpdmVfdXNlcl9pZFwiOiBcIlwiLFxyXG4gICAgXCJ0cmFuc2ZlclwiOiBcIlwiLFxyXG4gICAgXCJzc2JtXCI6IFwi5piG5piO5biC55Sf5oCB546v5aKD5bGAXCIsXHJcbiAgICBcImZsb3dfaWRcIjogXCJmNDBiODdjNC1lOTdmLTRjNGEtODZkOC03YzFmMzY1Y2NkYTVcIixcclxuICAgIFwidGFza190eXBlXCI6IFwiXCIsXHJcbiAgICBcImRlcHRfaWRcIjogXCJcIixcclxuICAgIFwiYXNzaWduX3N0YXR1c1wiOiBcIlwiLFxyXG4gICAgXCJjbGFzc2lmaWNhdGlvblwiOiBcIuWFtuS7luaxoeafk1wiLFxyXG4gICAgXCJqZFwiOiBcIlwiLFxyXG4gICAgXCJ3ZFwiOiBcIlwiLFxyXG4gICAgXCJqd2RcIjogXCJcIixcclxuICAgIFwic3RhZ2luZ1wiOiBcIlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiMzIzYjAyNGMtMjQ5NC00NzY0LWI0NmItMWIwNjY0NWQ5OTUzXCIsXHJcbiAgICBcInRva2VuXCI6ICd1c2VyVG9rZW4nLFxyXG4gICAgXCJ0eXBlXCI6IFwi5b6F5Yqe5LqL6aG5eHh4eHh4XCIsXHJcbiAgICBcImVudGVycHJpc2VfaWRcIjogXCIwMDFjODBmOS00NmE4LTRmMjUtODcwOC01OTBiM2I5ZTViN2NcIixcclxuICAgIFwiZW50ZXJwcmlzZV9uYW1lXCI6IFwieHh4eHh45pyJ6ZmQ5YWs5Y+4XCIsXHJcbiAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlXCI6IFwiXCIsXHJcbiAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlX3RlbFwiOiBcIlwiLFxyXG4gICAgXCJlbnRlcnByaXNlX2FkZHJlc3NcIjogXCJcIixcclxuICAgIFwiYmFzaWNfaW5mb1wiOiBcIua1i+ivleW+heWKnuaVsOaNrlwiLFxyXG4gICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X29waW5pb25cIjogXCJcIixcclxuICAgIFwidHJhbnNmZXJfZGVwYXJ0bWVudF90aW1lXCI6IFwiMjAyNS0wMy0xMFwiLFxyXG4gICAgXCJsZWFkZXJfb3BpbmlvblwiOiBcIjY2NlwiLFxyXG4gICAgXCJsZWFkZXJfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzU6MDBcIixcclxuICAgIFwic2lnblwiOiBcIua1i+ivleS6uuWRmFwiLFxyXG4gICAgXCJub3Rlc1wiOiBcIlwiLFxyXG4gICAgXCJzdGF0dXNcIjogXCLlvoXlpITnkIZcIixcclxuICAgIFwiY3JlYXRlX3VzZXJcIjogXCLprY/luIVcIixcclxuICAgIFwiY3JlYXRlX3VzZXJfaWRcIjogXCIxNTg3XCIsXHJcbiAgICBcImNyZWF0ZV90aW1lXCI6IFwiMjAyNS0wMy0xMCAxMDozMjozN1wiLFxyXG4gICAgXCJ0cmFuc2Zlcl9zdGF0dXNcIjogXCLlkKZcIixcclxuICAgIFwiam9pbnRfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICBcInVyZ2luZ1wiOiBcIuaYr1wiLFxyXG4gICAgXCJqb2ludF9kZXBhcnRtZW50XCI6IFwiXCIsXHJcbiAgICBcImJ1c2luZXNzX3VuaXRcIjogXCJcIixcclxuICAgIFwicmVjZWl2ZV91c2VyXCI6IFwiXCIsXHJcbiAgICBcInJlY2VpdmVfdXNlcl9pZFwiOiBcIlwiLFxyXG4gICAgXCJ0cmFuc2ZlclwiOiBcIlwiLFxyXG4gICAgXCJzc2JtXCI6IFwi5piG5piO5biC55Sf5oCB546v5aKD5bGAXCIsXHJcbiAgICBcImZsb3dfaWRcIjogXCJmNDBiODdjNC1lOTdmLTRjNGEtODZkOC03YzFmMzY1Y2NkYTVcIixcclxuICAgIFwidGFza190eXBlXCI6IFwiXCIsXHJcbiAgICBcImRlcHRfaWRcIjogXCJcIixcclxuICAgIFwiYXNzaWduX3N0YXR1c1wiOiBcIlwiLFxyXG4gICAgXCJjbGFzc2lmaWNhdGlvblwiOiBcIuWFtuS7luaxoeafk1wiLFxyXG4gICAgXCJqZFwiOiBcIlwiLFxyXG4gICAgXCJ3ZFwiOiBcIlwiLFxyXG4gICAgXCJqd2RcIjogXCJcIixcclxuICAgIFwic3RhZ2luZ1wiOiBcIlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiNDU1YjAyNGMtMjQ5NC00NzY0LWI0NmItMWIwNjY0NWQ5OTUzXCIsXHJcbiAgICBcInRva2VuXCI6ICd1c2VyVG9rZW4nLFxyXG4gICAgXCJ0eXBlXCI6IFwi5b6F5Yqe5LqL6aG5MDcyM1wiLFxyXG4gICAgXCJlbnRlcnByaXNlX2lkXCI6IFwiMDAxYzgwZjktNDZhOC00ZjI1LTg3MDgtNTkwYjNiOWU1YjdjXCIsXHJcbiAgICBcImVudGVycHJpc2VfbmFtZVwiOiBcInh4eHh4eOaciemZkOWFrOWPuFwiLFxyXG4gICAgXCJsZWdhbF9yZXByZXNlbnRhdGl2ZVwiOiBcIlwiLFxyXG4gICAgXCJsZWdhbF9yZXByZXNlbnRhdGl2ZV90ZWxcIjogXCJcIixcclxuICAgIFwiZW50ZXJwcmlzZV9hZGRyZXNzXCI6IFwiXCIsXHJcbiAgICBcImJhc2ljX2luZm9cIjogXCLmtYvor5Xlt7LlpITnkIbmlbDmja5cIixcclxuICAgIFwidHJhbnNmZXJfZGVwYXJ0bWVudF9vcGluaW9uXCI6IFwiXCIsXHJcbiAgICBcInRyYW5zZmVyX2RlcGFydG1lbnRfdGltZVwiOiBcIjIwMjUtMDMtMTBcIixcclxuICAgIFwibGVhZGVyX29waW5pb25cIjogXCI2NjZcIixcclxuICAgIFwibGVhZGVyX3RpbWVcIjogXCIyMDI1LTAzLTEwIDEwOjM1OjAwXCIsXHJcbiAgICBcInNpZ25cIjogXCLmtYvor5XkurrlkZhcIixcclxuICAgIFwibm90ZXNcIjogXCJcIixcclxuICAgIFwic3RhdHVzXCI6IFwi5bey5aSE55CGXCIsXHJcbiAgICBcImNyZWF0ZV91c2VyXCI6IFwi6a2P5biFXCIsXHJcbiAgICBcImNyZWF0ZV91c2VyX2lkXCI6IFwiMTU4N1wiLFxyXG4gICAgXCJjcmVhdGVfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzI6MzdcIixcclxuICAgIFwidHJhbnNmZXJfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICBcImpvaW50X3N0YXR1c1wiOiBcIuWQplwiLFxyXG4gICAgXCJ1cmdpbmdcIjogXCLmmK9cIixcclxuICAgIFwiam9pbnRfZGVwYXJ0bWVudFwiOiBcIlwiLFxyXG4gICAgXCJidXNpbmVzc191bml0XCI6IFwiXCIsXHJcbiAgICBcInJlY2VpdmVfdXNlclwiOiBcIlwiLFxyXG4gICAgXCJyZWNlaXZlX3VzZXJfaWRcIjogXCJcIixcclxuICAgIFwidHJhbnNmZXJcIjogXCJcIixcclxuICAgIFwic3NibVwiOiBcIuaYhuaYjuW4gueUn+aAgeeOr+Wig+WxgFwiLFxyXG4gICAgXCJmbG93X2lkXCI6IFwiZjQwYjg3YzQtZTk3Zi00YzRhLTg2ZDgtN2MxZjM2NWNjZGE1XCIsXHJcbiAgICBcInRhc2tfdHlwZVwiOiBcIlwiLFxyXG4gICAgXCJkZXB0X2lkXCI6IFwiXCIsXHJcbiAgICBcImFzc2lnbl9zdGF0dXNcIjogXCJcIixcclxuICAgIFwiY2xhc3NpZmljYXRpb25cIjogXCLlhbbku5bmsaHmn5NcIixcclxuICAgIFwiamRcIjogXCJcIixcclxuICAgIFwid2RcIjogXCJcIixcclxuICAgIFwiandkXCI6IFwiXCIsXHJcbiAgICBcInN0YWdpbmdcIjogXCJcIlxyXG4gIH1cclxuXTtcclxuY29uc3QgaW5IYW5kRGV0YWlsID0gW1xyXG4gIHtcclxuICAgIFwiZGV0YWlsX2luZm9cIjoge1xyXG4gICAgICBcImlkXCI6IFwiMjk2YjAyNGMtMjQ5NC00NzY0LWI0NmItMWIwNjY0NWQ5OTUzXCIsXHJcbiAgICAgIFwidHlwZVwiOiBcIua1i+ivleaOjOS4iueOr+S/nVwiLFxyXG4gICAgICBcImVudGVycHJpc2VfaWRcIjogXCIwMDFjODBmOS00NmE4LTRmMjUtODcwOC01OTBiM2I5ZTViN2NcIixcclxuICAgICAgXCJlbnRlcnByaXNlX25hbWVcIjogXCJcIixcclxuICAgICAgXCJsZWdhbF9yZXByZXNlbnRhdGl2ZVwiOiBcIlwiLFxyXG4gICAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlX3RlbFwiOiBcIlwiLFxyXG4gICAgICBcImVudGVycHJpc2VfYWRkcmVzc1wiOiBcIlwiLFxyXG4gICAgICBcImJhc2ljX2luZm9cIjogXCLmtYvor5XmlbDmja5cIixcclxuICAgICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X29waW5pb25cIjogXCJcIixcclxuICAgICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X3RpbWVcIjogXCIyMDI1LTAzLTEwXCIsXHJcbiAgICAgIFwibGVhZGVyX29waW5pb25cIjogXCI2NjZcIixcclxuICAgICAgXCJsZWFkZXJfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzU6MDBcIixcclxuICAgICAgXCJzaWduXCI6IFwi5rWL6K+V5Lq65ZGYXCIsXHJcbiAgICAgIFwic2lnbl9pZFwiOiBcIjE1OTRcIixcclxuICAgICAgXCJub3Rlc1wiOiBcIlwiLFxyXG4gICAgICBcInN0YXR1c1wiOiBcIuW+heWkhOeQhlwiLFxyXG4gICAgICBcImNyZWF0ZV91c2VyXCI6IFwi5byg5LiJXCIsXHJcbiAgICAgIFwiY3JlYXRlX3VzZXJfaWRcIjogXCIxNTg3XCIsXHJcbiAgICAgIFwiY3JlYXRlX3RpbWVcIjogXCIyMDI1LTAzLTEwIDEwOjMyOjM3XCIsXHJcbiAgICAgIFwidHJhbnNmZXJfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICAgIFwiam9pbnRfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICAgIFwidXJnaW5nXCI6IFwi5pivXCIsXHJcbiAgICAgIFwiam9pbnRfZGVwYXJ0bWVudFwiOiBcIlwiLFxyXG4gICAgICBcImJ1c2luZXNzX3VuaXRcIjogXCJcIixcclxuICAgICAgXCJidXNpbmVzc191bml0X2lkXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyX3VzZXJcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJfdXNlcl9pZFwiOiBcIjE1OTRcIixcclxuICAgICAgXCJmaWxlX2lkXCI6IFwiXCIsXHJcbiAgICAgIFwiY2x1ZV9pZFwiOiBcIlwiLFxyXG4gICAgICBcInRpbWVcIjogXCIyMDI1LTAzLTEwIDEwOjMyOjM3XCIsXHJcbiAgICAgIFwiZmlsZV9saXN0XCI6IFtdLFxyXG4gICAgICBcInNzYm1cIjogXCLmmIbmmI7luILnlJ/mgIHnjq/looPlsYBcIixcclxuICAgICAgXCJzdGFnaW5nXCI6IFwi5pivXCIsXHJcbiAgICAgIFwidGFza190eXBlXCI6IFwiXCIsXHJcbiAgICAgIFwiZGVwdF9pZFwiOiBcIlwiLFxyXG4gICAgICBcImNsYXNzaWZpY2F0aW9uXCI6IFwi5YW25LuW5rGh5p+TXCIsXHJcbiAgICAgIFwiZW50ZXJwcmlzZUluZm9zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMDAxYzgwZjktNDZhOC00ZjI1LTg3MDgtNTkwYjNiOWU1YjdjXCIsXHJcbiAgICAgICAgICBcImVudGVycHJpc2VfaWRcIjogXCI4M2JiODA4Yi1jODFjLTQ5NTctYTM3Ny1mNThjMmQ2ZTY0ZjNcIixcclxuICAgICAgICAgIFwiZW50ZXJwcmlzZV9uYW1lXCI6IFwi5Lit5a6d5Z6D5Zy+5Lit6L2s56uZXCIsXHJcbiAgICAgICAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlXCI6IFwi5YiYeHhcIixcclxuICAgICAgICAgIFwibGVnYWxfcmVwcmVzZW50YXRpdmVfdGVsXCI6IFwiXCIsXHJcbiAgICAgICAgICBcImVudGVycHJpc2VfYWRkcmVzc1wiOiBcIua1t+WPo+S4reWuneekvuWMuuS4reahg+i3r1wiLFxyXG4gICAgICAgICAgXCJjbHVlX2lkXCI6IFwiZGRlYmZkMDEtNDlmZC00NmU1LTlhMDAtNmI2YjQ5OGE4NzA1XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcImNvbXBsZXRpb25cIjoge1xyXG4gICAgICBcInBlcnNvblwiOiBcImFkbWluXCIsXHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMjUtMDctMjMgMTQ6MTk6MDBcIixcclxuICAgICAgXCJvcGluaW9uXCI6IFwi5aSE55CG5oSP6KeBeHh4eHh4eHh4eHh4eHh4eHh4XCIsXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbXBsZXRpb25cIjoge1xyXG4gICAgICBcInBlcnNvblwiOiBcImFkbWluXCIsXHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMjUtMDctMjMgMTQ6MTk6MDBcIixcclxuICAgICAgXCJvcGluaW9uXCI6IFwi5aSE55CG5oSP6KeBeHh4eHh4eHh4eHh4eHh4eHh4XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZXRhaWxfaW5mb1wiOiB7XHJcbiAgICAgIFwiaWRcIjogXCIzMjNiMDI0Yy0yNDk0LTQ3NjQtYjQ2Yi0xYjA2NjQ1ZDk5NTNcIixcclxuICAgICAgXCJ0eXBlXCI6IFwi5b6F5Yqe5LqL6aG5eHh4eHh4XCIsXHJcbiAgICAgIFwiZW50ZXJwcmlzZV9pZFwiOiBcIjAwMWM4MGY5LTQ2YTgtNGYyNS04NzA4LTU5MGIzYjllNWI3Y1wiLFxyXG4gICAgICBcImVudGVycHJpc2VfbmFtZVwiOiBcIlwiLFxyXG4gICAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlXCI6IFwiXCIsXHJcbiAgICAgIFwibGVnYWxfcmVwcmVzZW50YXRpdmVfdGVsXCI6IFwiXCIsXHJcbiAgICAgIFwiZW50ZXJwcmlzZV9hZGRyZXNzXCI6IFwiXCIsXHJcbiAgICAgIFwiYmFzaWNfaW5mb1wiOiBcIua1i+ivleW+heWKnuaVsOaNrlwiLFxyXG4gICAgICBcInRyYW5zZmVyX2RlcGFydG1lbnRfb3BpbmlvblwiOiBcIlwiLFxyXG4gICAgICBcInRyYW5zZmVyX2RlcGFydG1lbnRfdGltZVwiOiBcIjIwMjUtMDMtMTBcIixcclxuICAgICAgXCJsZWFkZXJfb3BpbmlvblwiOiBcIjY2NlwiLFxyXG4gICAgICBcImxlYWRlcl90aW1lXCI6IFwiMjAyNS0wMy0xMCAxMDozNTowMFwiLFxyXG4gICAgICBcInNpZ25cIjogXCLmtYvor5XkurrlkZhcIixcclxuICAgICAgXCJzaWduX2lkXCI6IFwiMTU5NFwiLFxyXG4gICAgICBcIm5vdGVzXCI6IFwiNjY2XCIsXHJcbiAgICAgIFwic3RhdHVzXCI6IFwi5b6F5aSE55CGXCIsXHJcbiAgICAgIFwiY3JlYXRlX3VzZXJcIjogXCLmnY7lm5tcIixcclxuICAgICAgXCJjcmVhdGVfdXNlcl9pZFwiOiBcIjE1ODdcIixcclxuICAgICAgXCJjcmVhdGVfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzI6MzdcIixcclxuICAgICAgXCJ0cmFuc2Zlcl9zdGF0dXNcIjogXCLlkKZcIixcclxuICAgICAgXCJqb2ludF9zdGF0dXNcIjogXCLlkKZcIixcclxuICAgICAgXCJ1cmdpbmdcIjogXCLmmK9cIixcclxuICAgICAgXCJqb2ludF9kZXBhcnRtZW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYnVzaW5lc3NfdW5pdFwiOiBcIlwiLFxyXG4gICAgICBcImJ1c2luZXNzX3VuaXRfaWRcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJfdXNlclwiOiBcIlwiLFxyXG4gICAgICBcImxlYWRlcl91c2VyX2lkXCI6IFwiMTU5NFwiLFxyXG4gICAgICBcImZpbGVfaWRcIjogXCJcIixcclxuICAgICAgXCJjbHVlX2lkXCI6IFwiXCIsXHJcbiAgICAgIFwidGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzI6MzdcIixcclxuICAgICAgXCJmaWxlX2xpc3RcIjogW10sXHJcbiAgICAgIFwic3NibVwiOiBcIuaYhuaYjuW4gueUn+aAgeeOr+Wig+WxgFwiLFxyXG4gICAgICBcInN0YWdpbmdcIjogXCLmmK9cIixcclxuICAgICAgXCJ0YXNrX3R5cGVcIjogXCJcIixcclxuICAgICAgXCJkZXB0X2lkXCI6IFwiXCIsXHJcbiAgICAgIFwiY2xhc3NpZmljYXRpb25cIjogXCLlhbbku5bmsaHmn5NcIixcclxuICAgICAgXCJlbnRlcnByaXNlSW5mb3NcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwMDFjODBmOS00NmE4LTRmMjUtODcwOC01OTBiM2I5ZTViN2NcIixcclxuICAgICAgICAgIFwiZW50ZXJwcmlzZV9pZFwiOiBcIjgzYmI4MDhiLWM4MWMtNDk1Ny1hMzc3LWY1OGMyZDZlNjRmM1wiLFxyXG4gICAgICAgICAgXCJlbnRlcnByaXNlX25hbWVcIjogXCJ4eHh4eHjmnInpmZDlhazlj7hcIixcclxuICAgICAgICAgIFwibGVnYWxfcmVwcmVzZW50YXRpdmVcIjogXCLkvZV4eFwiLFxyXG4gICAgICAgICAgXCJsZWdhbF9yZXByZXNlbnRhdGl2ZV90ZWxcIjogXCJcIixcclxuICAgICAgICAgIFwiZW50ZXJwcmlzZV9hZGRyZXNzXCI6IFwieHh4eOekvuWMunh4eHjot69cIixcclxuICAgICAgICAgIFwiY2x1ZV9pZFwiOiBcImRkZWJmZDAxLTQ5ZmQtNDZlNS05YTAwLTZiNmI0OThhODcwNVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbXBsZXRpb25cIjoge1xyXG4gICAgICBcInBlcnNvblwiOiBcImFkbWluXCIsXHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMjUtMDctMjMgMTQ6MTk6MDBcIixcclxuICAgICAgXCJvcGluaW9uXCI6IFwi5aSE55CG5oSP6KeBeHh4eHh4eHh4eHh4eHh4eHh4XCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZXRhaWxfaW5mb1wiOiB7XHJcbiAgICAgIFwiaWRcIjogXCI0NTViMDI0Yy0yNDk0LTQ3NjQtYjQ2Yi0xYjA2NjQ1ZDk5NTNcIixcclxuICAgICAgXCJ0eXBlXCI6IFwi5b6F5Yqe5LqL6aG5MDcyM1wiLFxyXG4gICAgICBcImVudGVycHJpc2VfaWRcIjogXCIwMDFjODBmOS00NmE4LTRmMjUtODcwOC01OTBiM2I5ZTViN2NcIixcclxuICAgICAgXCJlbnRlcnByaXNlX25hbWVcIjogXCJcIixcclxuICAgICAgXCJsZWdhbF9yZXByZXNlbnRhdGl2ZVwiOiBcIlwiLFxyXG4gICAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlX3RlbFwiOiBcIlwiLFxyXG4gICAgICBcImVudGVycHJpc2VfYWRkcmVzc1wiOiBcIlwiLFxyXG4gICAgICBcImJhc2ljX2luZm9cIjogXCLmtYvor5Xlt7LlpITnkIbmlbDmja5cIixcclxuICAgICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X29waW5pb25cIjogXCJcIixcclxuICAgICAgXCJ0cmFuc2Zlcl9kZXBhcnRtZW50X3RpbWVcIjogXCIyMDI1LTAzLTEwXCIsXHJcbiAgICAgIFwibGVhZGVyX29waW5pb25cIjogXCI2NjZcIixcclxuICAgICAgXCJsZWFkZXJfdGltZVwiOiBcIjIwMjUtMDMtMTAgMTA6MzU6MDBcIixcclxuICAgICAgXCJzaWduXCI6IFwi5rWL6K+V5Lq65ZGYXCIsXHJcbiAgICAgIFwic2lnbl9pZFwiOiBcIjE1OTRcIixcclxuICAgICAgXCJub3Rlc1wiOiBcIjY2NlwiLFxyXG4gICAgICBcInN0YXR1c1wiOiBcIuW3suWkhOeQhlwiLFxyXG4gICAgICBcImNyZWF0ZV91c2VyXCI6IFwi5p2O5ZubXCIsXHJcbiAgICAgIFwiY3JlYXRlX3VzZXJfaWRcIjogXCIxNTg3XCIsXHJcbiAgICAgIFwiY3JlYXRlX3RpbWVcIjogXCIyMDI1LTAzLTEwIDEwOjMyOjM3XCIsXHJcbiAgICAgIFwidHJhbnNmZXJfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICAgIFwiam9pbnRfc3RhdHVzXCI6IFwi5ZCmXCIsXHJcbiAgICAgIFwidXJnaW5nXCI6IFwi5pivXCIsXHJcbiAgICAgIFwiam9pbnRfZGVwYXJ0bWVudFwiOiBcIlwiLFxyXG4gICAgICBcImJ1c2luZXNzX3VuaXRcIjogXCJcIixcclxuICAgICAgXCJidXNpbmVzc191bml0X2lkXCI6IFwiXCIsXHJcbiAgICAgIFwibGVhZGVyX3VzZXJcIjogXCJcIixcclxuICAgICAgXCJsZWFkZXJfdXNlcl9pZFwiOiBcIjE1OTRcIixcclxuICAgICAgXCJmaWxlX2lkXCI6IFwiXCIsXHJcbiAgICAgIFwiY2x1ZV9pZFwiOiBcIlwiLFxyXG4gICAgICBcInRpbWVcIjogXCIyMDI1LTAzLTEwIDEwOjMyOjM3XCIsXHJcbiAgICAgIFwiZmlsZV9saXN0XCI6IFtdLFxyXG4gICAgICBcInNzYm1cIjogXCLmmIbmmI7luILnlJ/mgIHnjq/looPlsYBcIixcclxuICAgICAgXCJzdGFnaW5nXCI6IFwi5pivXCIsXHJcbiAgICAgIFwidGFza190eXBlXCI6IFwiXCIsXHJcbiAgICAgIFwiZGVwdF9pZFwiOiBcIlwiLFxyXG4gICAgICBcImNsYXNzaWZpY2F0aW9uXCI6IFwi5YW25LuW5rGh5p+TXCIsXHJcbiAgICAgIFwiZW50ZXJwcmlzZUluZm9zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMDAxYzgwZjktNDZhOC00ZjI1LTg3MDgtNTkwYjNiOWU1YjdjXCIsXHJcbiAgICAgICAgICBcImVudGVycHJpc2VfaWRcIjogXCI4M2JiODA4Yi1jODFjLTQ5NTctYTM3Ny1mNThjMmQ2ZTY0ZjNcIixcclxuICAgICAgICAgIFwiZW50ZXJwcmlzZV9uYW1lXCI6IFwieHh4eHh45pyJ6ZmQ5YWs5Y+4XCIsXHJcbiAgICAgICAgICBcImxlZ2FsX3JlcHJlc2VudGF0aXZlXCI6IFwi6IKWeHhcIixcclxuICAgICAgICAgIFwibGVnYWxfcmVwcmVzZW50YXRpdmVfdGVsXCI6IFwiXCIsXHJcbiAgICAgICAgICBcImVudGVycHJpc2VfYWRkcmVzc1wiOiBcInh4eHjnpL7ljLp4eHh46LevXCIsXHJcbiAgICAgICAgICBcImNsdWVfaWRcIjogXCJkZGViZmQwMS00OWZkLTQ2ZTUtOWEwMC02YjZiNDk4YTg3MDVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXTtcclxuXHJcbi8vIOeZu+W9lVxyXG5Nb2NrLm1vY2soJy96c2hiL2xvZ2luJywgJ3Bvc3QnLCAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gSlNPTi5wYXJzZShvcHRpb25zLmJvZHkpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHVzZXJMaXN0KSlcclxuICAgIHJldHVybiB7Y29kZTogMjAwLCBtZXNzYWdlOiAn55m75b2V5oiQ5YqfJywgdG9rZW46IHVzZXIudG9rZW59O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge2NvZGU6IDQwMSwgbWVzc2FnZTogJ+eUqOaIt+WQjeaIluWvhueggemUmeivryd9O1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8g5p+l6K+i55So5oi35L+h5oGvXHJcbk1vY2subW9jaygnL3pzaGIvZ2V0VXNlckluZm8nLCAncG9zdCcsIChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3Qge3Rva2VufSA9IEpTT04ucGFyc2Uob3B0aW9ucy5ib2R5KTtcclxuICBjb25zdCBpbmZvID0gdXNlcnMuZmluZCh1ID0+IHUudG9rZW4gPT09IHRva2VuKTtcclxuICBpZiAoaW5mbykge1xyXG4gICAgcmV0dXJuIHtjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiBpbmZvfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtjb2RlOiA0MDEsIG1lc3NhZ2U6ICfmn6Xor6LnlKjmiLfkv6Hmga/lpLHotKUnfTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHVzZXJMaXN0ID0gW1xyXG4gIHtcclxuICAgIFwidXNlclZPXCI6IHtcclxuICAgICAgXCJ1c2VySWRcIjogMSxcclxuICAgICAgXCJ1c2VybmFtZVwiOiBcImFkbWluXCIsXHJcbiAgICAgIFwidG9rZW5cIjogXCJhZG1pblRva2VuXCIsXHJcbiAgICAgIFwibWNcIjogXCLlvKDkuIlcIixcclxuICAgICAgXCJkaXZpc2lvbkNvZGVcIjogXCI1MzAxMDJcIixcclxuICAgICAgXCJkaXZpc2lvbk5hbWVcIjogXCLkupTljY7ljLpcIixcclxuICAgICAgXCJ0ZWxcIjogXCIxMzFYWFhYWFhYWFwiLFxyXG4gICAgICBcImRlcHRJZFwiOiAxMDksXHJcbiAgICAgIFwiZGVwdE5hbWVcIjogXCLlsYDpooblr7xcIixcclxuICAgICAgXCJwb3N0TmFtZVwiOiBcIuW8gOWPkVwiLFxyXG4gICAgICBcImNvbnRyb2xSb2xlSWRcIjogMSxcclxuICAgICAgXCJjb250cm9sUm9sZU5hbWVcIjogXCJcIixcclxuICAgICAgXCJyb2xlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyb2xlSWRcIjogMSxcclxuICAgICAgICAgIFwicm9sZU5hbWVcIjogXCLmjozkuIrnjq/kv50t5rC0546v5aKD55u45YWzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInJvbGVJZFwiOiAyLFxyXG4gICAgICAgICAgXCJyb2xlTmFtZVwiOiBcIuaOjOS4iueOr+S/nS3msaHmn5PmupDnm7jlhbNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1c2VyVk9cIjoge1xyXG4gICAgICBcInVzZXJJZFwiOiAyLFxyXG4gICAgICBcInVzZXJuYW1lXCI6IFwidXNlclwiLFxyXG4gICAgICBcInRva2VuXCI6IFwidXNlclRva2VuXCIsXHJcbiAgICAgIFwibWNcIjogXCLmnY7lm5tcIixcclxuICAgICAgXCJkaXZpc2lvbkNvZGVcIjogXCI1MzAxMDNcIixcclxuICAgICAgXCJkaXZpc2lvbk5hbWVcIjogXCLnm5jpvpnljLpcIixcclxuICAgICAgXCJ0ZWxcIjogXCIxMzRYWFhYWFhYWFwiLFxyXG4gICAgICBcImRlcHRJZFwiOiAxMDksXHJcbiAgICAgIFwiZGVwdE5hbWVcIjogXCLlsYDpooblr7xcIixcclxuICAgICAgXCJwb3N0TmFtZVwiOiBcIuW8gOWPkVwiLFxyXG4gICAgICBcImNvbnRyb2xSb2xlSWRcIjogMSxcclxuICAgICAgXCJjb250cm9sUm9sZU5hbWVcIjogXCJcIixcclxuICAgICAgXCJyb2xlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyb2xlSWRcIjogMSxcclxuICAgICAgICAgIFwicm9sZU5hbWVcIjogXCLmjozkuIrnjq/kv50t5rC0546v5aKD55u45YWzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICB9XHJcbl1cclxuXHJcblxyXG4vLyDkuKrkurrkv6Hmga/pobXpnaJcclxuTW9jay5tb2NrKCcvenNoYi9nZXRVc2VyT2JqZWN0JywgJ3Bvc3QnLCAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHt0b2tlbn0gPSBKU09OLnBhcnNlKG9wdGlvbnMuYm9keSk7XHJcbiAgY29uc3QgdGVtcFVzZXJMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckxpc3QnKSlcclxuICBjb25zdCBpbmZvID0gdGVtcFVzZXJMaXN0LmZpbmQodSA9PiB1LnVzZXJWTy50b2tlbiA9PT0gdG9rZW4pO1xyXG4gIGlmIChpbmZvKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiBpbmZvXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge2NvZGU6IDQwMSwgbWVzc2FnZTogJ+afpeivoueUqOaIt+S/oeaBr+Wksei0pSd9O1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8g5pu05paw55So5oi35L+h5oGvXHJcbk1vY2subW9jaygnL3pzaGIvdXBkYXRlVXNlcicsICdwb3N0JywgKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB0ZW1wVXNlckxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTGlzdCcpKVxyXG4gIGNvbnN0IHt0b2tlbiwgZGVwdElkLCBkZXB0TmFtZSwgZGl2aXNpb25Db2RlLCBkaXZpc2lvbk5hbWUsIHBvc3ROYW1lLCBtYywgcm9sZXN9ID0gSlNPTi5wYXJzZShvcHRpb25zLmJvZHkpO1xyXG4gIGNvbnN0IGluZm8gPSB0ZW1wVXNlckxpc3QuZmluZCgodSwgaSkgPT4ge1xyXG4gICAgaWYgKHUudXNlclZPLnRva2VuID09PSB0b2tlbikge1xyXG4gICAgICB0ZW1wVXNlckxpc3RbaV0udXNlclZPLmRlcHRJZCA9IGRlcHRJZDtcclxuICAgICAgdGVtcFVzZXJMaXN0W2ldLnVzZXJWTy5kZXB0TmFtZSA9IGRlcHROYW1lO1xyXG4gICAgICB0ZW1wVXNlckxpc3RbaV0udXNlclZPLmRpdmlzaW9uQ29kZSA9IGRpdmlzaW9uQ29kZTtcclxuICAgICAgdGVtcFVzZXJMaXN0W2ldLnVzZXJWTy5kaXZpc2lvbk5hbWUgPSBkaXZpc2lvbk5hbWU7XHJcbiAgICAgIHRlbXBVc2VyTGlzdFtpXS51c2VyVk8ucG9zdE5hbWUgPSBwb3N0TmFtZTtcclxuICAgICAgdGVtcFVzZXJMaXN0W2ldLnVzZXJWTy5tYyA9IG1jO1xyXG4gICAgICBsZXQgdGVtcFJvbGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcm9sZUxpc3QuZm9yRWFjaChqID0+IHtcclxuICAgICAgICAgIGlmIChyb2xlc1tpXSA9PT0gai5yb2xlSWQpIHtcclxuICAgICAgICAgICAgdGVtcFJvbGUucHVzaChqKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdGVtcFVzZXJMaXN0W2ldLnVzZXJWTy5yb2xlcyA9IHRlbXBSb2xlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyTGlzdCcpXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMaXN0JywgSlNPTi5zdHJpbmdpZnkodGVtcFVzZXJMaXN0KSlcclxuICBpZiAoaW5mbykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29kZTogMjAwLCBtZXNzYWdlOiAn5oiQ5YqfJywgZGF0YTogJ+S/ruaUueaIkOWKnydcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDQwMSwgbWVzc2FnZTogJ+Wksei0pScsIGRhdGE6ICfkv67mlLnlpLHotKUnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJvbGVMaXN0ID0gW1xyXG4gIHtcclxuICAgIFwicm9sZUlkXCI6IDEsXHJcbiAgICBcInJvbGVOYW1lXCI6IFwi5o6M5LiK546v5L+dLeawtOeOr+Wig+ebuOWFs1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJyb2xlSWRcIjogMixcclxuICAgIFwicm9sZU5hbWVcIjogXCLmjozkuIrnjq/kv50t5rGh5p+T5rqQ55u45YWzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJvbGVJZFwiOiAzLFxyXG4gICAgXCJyb2xlTmFtZVwiOiBcIuaOjOS4iueOr+S/nS3nqbrmsJTnm7jlhbNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIFwicm9sZUlkXCI6IDExLFxyXG4gICAgXCJyb2xlTmFtZVwiOiBcIuedo+WKnlwiLFxyXG4gIH0sXHJcbl1cclxuXHJcblxyXG4vLyDmn6Xor6Lop5LoibJcclxuTW9jay5tb2NrKCcvenNoYi9nZXRSb2xlJywgJ3Bvc3QnLCAob3B0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiByb2xlTGlzdFxyXG4gIH07XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGFyZWFMaXN0ID0gW1xyXG4gIHtcclxuICAgIFwibWNcIjogXCLmmIbmmI7lgJjnlLjkuqfkuJrlm63ljLrovb/lrZDlsbHml4XmuLjlvIDlj5HljLpcIixcclxuICAgIFwiZG1cIjogNTMwMTY1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtY1wiOiBcIuaYhuaYjuWbveWutumrmOaWsOaKgOacr+S6p+S4muW8gOWPkeWMulwiLFxyXG4gICAgXCJkbVwiOiA1MzAxMDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1jXCI6IFwi6Ziz5a6X5rW36aOO5pmv5ZCN6IOc5Yy6XCIsXHJcbiAgICBcImRtXCI6IDUzMDE2NCxcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWNcIjogXCLmmIbmmI7nu4/mtY7mioDmnK/lvIDlj5HljLpcIixcclxuICAgIFwiZG1cIjogNTMwMTA3LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtY1wiOiBcIuS6lOWNjuWMulwiLFxyXG4gICAgXCJkbVwiOiA1MzAxMDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1jXCI6IFwi55uY6b6Z5Yy6XCIsXHJcbiAgICBcImRtXCI6IDUzMDEwMyxcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWNcIjogXCLlrpjmuKHljLpcIixcclxuICAgIFwiZG1cIjogNTMwMTExLFxyXG4gIH0sXHJcbl1cclxuXHJcblxyXG4vL+afpeivouWMuuWfn1xyXG5Nb2NrLm1vY2soJy96c2hiL2dldEFyZWFMaXN0JywgJ3Bvc3QnLCAob3B0aW9ucykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiBhcmVhTGlzdFxyXG4gIH07XHJcbn0pO1xyXG5cclxuXHJcbi8v5p+l6K+i6YOo6ZeoXHJcbk1vY2subW9jaygnL3pzaGIvZ2V0RGVwYXJ0bWVudCcsICdwb3N0JywgKG9wdGlvbnMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvZGU6IDIwMCwgbWVzc2FnZTogJ+aIkOWKnycsIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImRlcHRJZFwiOiAxLFxyXG4gICAgICAgICAgXCJwYXJlbnRJZFwiOiBudWxsLFxyXG4gICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIuaYhuaYjuW4gueUn+aAgeeOr+Wig+WxgFwiLFxyXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImRlcHRJZFwiOiAxMDcsXHJcbiAgICAgICAgICAgICAgXCJwYXJlbnRJZFwiOiAxLFxyXG4gICAgICAgICAgICAgIFwiZGVwdE5hbWVcIjogXCLlsYDmnLrlhbNcIixcclxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTA5LFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIuWxgOmihuWvvFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTExLFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIuWKnuWFrOWupFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTEyLFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIuaUv+etluazleinhOS4juWuo+S8oOaVmeiCsuWkhFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTEzLFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIuS6uuS6i+WkhFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTE0LFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwNyxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIui0ouWKoeWkhFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcImRlcHRJZFwiOiAxMDgsXHJcbiAgICAgICAgICAgICAgXCJwYXJlbnRJZFwiOiAxLFxyXG4gICAgICAgICAgICAgIFwiZGVwdE5hbWVcIjogXCLnm7TlsZ7kuovkuJrljZXkvY1cIixcclxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0SWRcIjogMTMxLFxyXG4gICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEwOCxcclxuICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIueUn+aAgeeOr+Wig+e7vOWQiOihjOaUv+aJp+azleaUr+mYn1wiLFxyXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRlcHRJZFwiOiAxODMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInBhcmVudElkXCI6IDEzMSxcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGVwdE5hbWVcIjogXCLljZXkvY3pooblr7znj63lrZBcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGVwdElkXCI6IDE4NCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwicGFyZW50SWRcIjogMTMxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZXB0TmFtZVwiOiBcIue7vOWQiOWkhFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuLy8g5p+l6K+i5b6F5Yqe5YiX6KGoXHJcbk1vY2subW9jaygnL3pzaGIvcXVlcnlJbkhhbmRMaXN0JywgJ3Bvc3QnLCAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHt0eXBlfSA9IEpTT04ucGFyc2Uob3B0aW9ucy5ib2R5KTtcclxuICBsZXQgaW5mbyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5IYW5kTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGluSGFuZExpc3RbaV0udG9rZW4gPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XHJcbiAgICAgIC8vIGlmKGluSGFuZExpc3RbaV0uc3RhdHVzID09PSB0eXBlICYmIGluSGFuZExpc3RbaV0udG9rZW4gPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKXtcclxuICAgICAgaW5mby5wdXNoKGluSGFuZExpc3RbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoaW5mbykge1xyXG4gICAgcmV0dXJuIHtjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiBpbmZvfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtjb2RlOiA0MDEsIG1lc3NhZ2U6ICfmn6Xor6LlvoXlip7lpLHotKUnfTtcclxuICB9XHJcbn0pO1xyXG4vLyDmn6Xor6LlvoXlip7or6bmg4VcclxuTW9jay5tb2NrKCcvenNoYi9xdWVyeUluSGFuZERldGFpbCcsICdwb3N0JywgKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7aWR9ID0gSlNPTi5wYXJzZShvcHRpb25zLmJvZHkpO1xyXG4gIGNvbnN0IGluZm8gPSBpbkhhbmREZXRhaWwuZmluZCh1ID0+IHUuZGV0YWlsX2luZm8uaWQgPT09IGlkKTtcclxuICBpZiAoaW5mbykge1xyXG4gICAgcmV0dXJuIHtjb2RlOiAyMDAsIG1lc3NhZ2U6ICfmiJDlip8nLCBkYXRhOiBpbmZvfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtjb2RlOiA0MDEsIG1lc3NhZ2U6ICfmn6Xor6LlvoXlip7or6bmg4XlpLHotKUnfTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBWYW50IGZyb20gXCJ2YW50XCI7XHJcbmltcG9ydCBcInZhbnQvbGliL2luZGV4LmNzc1wiO1xyXG5cclxuVnVlLnVzZShWYW50KTtcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XHJcblZ1ZS5wcm90b3R5cGUuZGF5anMgPSBkYXlqcztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS9nbG9iYWwuc2NzcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5pbXBvcnQgJy4vanMvbW9jay5qcyc7XHJcblxyXG5jb25zdCB2dWVJbnN0YW5jZSA9IG5ldyBWdWUoe1xyXG4gIHJvdXRlcixcclxuICBzdG9yZSxcclxuICByZW5kZXI6IChoKSA9PiBoKEFwcCksXHJcbn0pLiRtb3VudChcIiNhcHBcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2dWVJbnN0YW5jZVxyXG4iLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcclxuVnVlLnVzZShWdWVSb3V0ZXIpO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgcmVkaXJlY3Q6IFwiaG9tZVBhZ2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2luZGV4Lmh0bWxcIiwgLy9hcGvmiZPljIXlkI7pu5jorqTorr/pl67kuoZpbmRleC5odG1sXHJcbiAgICByZWRpcmVjdDogXCIvaG9tZVBhZ2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2hvbWVQYWdlXCIsXHJcbiAgICBuYW1lOiBcImhvbWVQYWdlXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6aaW6aG1XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2xvZ2luXCIsXHJcbiAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICAvLyBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2xvZ2luL2luZGV4LnZ1ZVwiKSxcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi55m75b2VXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL21pbmVcIixcclxuICAgIG5hbWU6IFwibWluZVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9taW5lL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5oiR55qEXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL21pbmUvc3lzdGVtU2V0XCIsXHJcbiAgICBuYW1lOiBcInN5c3RlbVNldFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIue8lui+kVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9pbkhhbmRcIixcclxuICAgIG5hbWU6IFwiaW5IYW5kXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2luSGFuZC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuW+heWKnuS6i+mhuVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9pbkhhbmQvaW5IYW5kRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImluSGFuZERldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5b6F5Yqe6K+m5oOFXCIgfSxcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gIG1vZGU6IFwiaGFzaFwiLFxyXG4gIC8vIG1vZGU6IFwiaGlzdG9yeVwiLFxyXG4gIGJhc2U6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxyXG4gIHJvdXRlcyxcclxufSk7XHJcblxyXG4vL+W8leWFpeWktOmDqOi/m+W6puadoSDov5vluqbnjq/mmL7npLrpmpDol49cclxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XHJcbiAgLy/lvJXlhaXlpLTpg6jov5vluqbmnaEg5pi+56S66L+b5bqm5p2hXHJcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgbmV4dCgpO1xyXG4gIC8v5byV5YWl5aS06YOo6L+b5bqm5p2hIOWujOaIkOi/m+W6puadoVxyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn0pO1xyXG5cclxucm91dGVyLm9uRXJyb3IoKGVycm9yKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uL3JvdXRlclwiO1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIHN0YXRlOiB7XHJcbiAgICBhY3RpdmVJbmRleDogMCxcclxuICAgIHNlYXJjaFN0b3JlOiBbXSxcclxuICAgIHRva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcclxuICAgIHV1aWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1dWlkJyksXHJcbiAgICAvLyB1dWlkOiAnMTIzJyxcclxuICAgIHR5cGU6ICcnLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgZGF0YUlkOiAnJyxcclxuICAgIHNlYXJjaE9iajoge1xyXG4gICAgICBtb2R1bGVOYW1lOiAnJyxcclxuICAgICAgcmVzb3VyY2VQYXRoOiAnJyxcclxuICAgICAgdHlwZTogJycsXHJcbiAgICAgIHBhcmFtZXRlcjogJycsXHJcbiAgICAgIGNvbXBvbmVudE5hbWU6ICcnXHJcbiAgICB9LFxyXG4gICAgcG9pbnROYW1lOiAnJ1xyXG4gIH0sXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBzZXRBY3RpdmVJbmRleChzdGF0ZSwgdmFsdWUpIHtcclxuICAgICAgc3RhdGUuYWN0aXZlSW5kZXggPSB2YWx1ZVxyXG4gICAgfSxcclxuICAgIHNldFNlYXJjaE9iaihzdGF0ZSwgdmFsdWUpIHtcclxuICAgICAgc3RhdGUuc2VhcmNoT2JqID0gdmFsdWVcclxuICAgIH0sXHJcbiAgICBzZXRTZWFyY2hTdG9yZShzdGF0ZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHN0YXRlLnNlYXJjaFN0b3JlLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgc3RhdGUuc2VhcmNoU3RvcmUudW5zaGlmdCh2YWx1ZSk7XHJcbiAgICAgICAgc3RhdGUuc2VhcmNoU3RvcmUgPSBzdGF0ZS5zZWFyY2hTdG9yZS5zbGljZSgxMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuc2VhcmNoU3RvcmUudW5zaGlmdCh2YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoU3RvcmUnLCBzdGF0ZS5zZWFyY2hTdG9yZS5qb2luKCcsJykpXHJcbiAgICB9LFxyXG4gICAgY2xlYXJTZWFyY2hTdG9yZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5zZWFyY2hTdG9yZSA9IFtdXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hTdG9yZScsICcnKVxyXG4gICAgfSxcclxuICAgIHNldFRva2VuKHN0YXRlLCB0b2tlbikge1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IHRva2VuXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICB1blVzZXJQYXNzTG9naW4oc3RhdGUsIHV1aWQpIHtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2FsaW1hbWFzaHVoZWl0aS50dGZcIjsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9nbG9iYWwuc2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwODM1NTViYVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0zIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9nbG9iYWwuc2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9