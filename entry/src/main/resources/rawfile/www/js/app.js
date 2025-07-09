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
/* harmony import */ var _components_common_feedback_FeedbackButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/common/feedback/FeedbackButton.vue */ "./src/components/common/feedback/FeedbackButton.vue");
/* harmony import */ var _components_UpdateDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/UpdateDialog.vue */ "./src/components/UpdateDialog.vue");
/* harmony import */ var _components_common_test_floatTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/test/floatTest */ "./src/components/common/test/floatTest.vue");
//
//
//
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
  components: {
    UpdateDialog: _components_UpdateDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FeedbackButton: _components_common_feedback_FeedbackButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    floatTest: _components_common_test_floatTest__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      version: "1.0.0",
      popVisible: true
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UpdateDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/download */ "./src/utils/download.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UpdateDialog",
  props: {
    version: {
      type: String,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      dialog: false,
      comment: '',
      url: '',
      filename: '',
      version: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    // this.checkVersion();
    setTimeout(function () {
      try {
        window.cordova.getAppVersion.getVersionNumber().then(function (version) {
          _this.version = version;

          _this.checkVersion();
        });
      } catch (e) {
        _this.dialog = false;
        console.log("未获取到版本信息");

        _this.checkVersion();
      }
    }, 2000);
  },
  methods: {
    checkVersion: function checkVersion() {
      var _this2 = this;

      console.log(this.version);

      if (!this.version) {
        this.closeModal();
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: "http://10.221.29.4:51112/pollu_update/log/cgXtAppBbhgxb/down",
        method: 'get',
        params: {
          bbh: this.version,
          type: '外'
        }
      }).then(function (res) {
        // if(this.$route.path==='/mine'){
        if (res.data.status !== '0') {
          _this2.comment = res.data.bbh.gxXX;
          _this2.filename = res.data.bbh.mc + res.data.bbh.bbh + '.apk';
          _this2.dialog = true;
          _this2.url = res.data.url;
        } else {
          _this2.dialog = false;

          _this2.closeModal();

          Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])(res.data.data);
        } // }

      });
    },
    closeModal: function closeModal() {
      this.dialog = false;
      this.$emit('closePop');
    },
    apkDownload: function apkDownload() {
      this.dialog = false;
      this.$emit('closePop');

      try {
        console.log(this.url);
        Object(_utils_download__WEBPACK_IMPORTED_MODULE_0__["download"])(this.url, this.filename, false);
      } catch (e) {
        console.log(e);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeedbackButton",
  props: {
    distanceRight: {
      type: Number,
      default: 16
    },
    distanceBottom: {
      type: Number,
      default: 100
    },
    isScrollHidden: {
      type: Boolean,
      default: false
    },
    isCanDraggable: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 50
    },
    value: {
      type: String,
      default: "悬浮球！"
    }
  },
  computed: {
    visible: function visible() {
      return !['/feedback', '/feedbackResult', '/login'].includes(this.$route.path);
    }
  },
  //data 域
  data: function data() {
    return {
      clientWidth: null,
      clientHeight: null,
      left: null,
      top: null,
      right: null,
      timer: null,
      currentTop: 0,
      mousedownX: 0,
      mousedownY: 0
    };
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
  },
  mounted: function mounted() {
    var _this = this;

    this.isCanDraggable && this.$nextTick(function () {
      _this.floatDrag = _this.$refs.floatDrag; // 获取元素位置属性

      _this.floatDragDom = _this.floatDrag.getBoundingClientRect(); // 设置初始位置

      _this.initDraggable();
    });
    this.isScrollHidden && window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    onClick: function onClick() {
      this.$router.push({
        path: "/Feedback"
      });
    },

    /**
     * 窗口resize监听
     */
    handleResize: function handleResize() {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
      console.log(window.innerWidth);
      console.log(document.documentElement.clientWidth);
      this.checkDraggablePosition();
    },

    /**
     * 初始化draggable
     */
    initDraggable: function initDraggable() {
      var _this2 = this;

      this.floatDrag.addEventListener("touchstart", this.toucheStart);
      this.floatDrag.addEventListener("touchmove", function (e) {
        return _this2.touchMove(e);
      });
      this.floatDrag.addEventListener("touchend", this.touchEnd);
    },
    mouseDown: function mouseDown(e) {
      var event = e || window.event;
      this.mousedownX = event.screenX;
      this.mousedownY = event.screenY;
      var that = this;
      var floatDragWidth = this.floatDragDom.width / 2;
      var floatDragHeight = this.floatDragDom.height / 2;

      if (event.preventDefault) {
        event.preventDefault();
      }

      this.canClick = false;
      this.floatDrag.style.transition = "none";

      document.onmousemove = function (e) {
        var event = e || window.event;
        that.left = event.clientX - floatDragWidth;
        that.top = event.clientY - floatDragHeight;
        if (that.left < 0) that.left = 0;
        if (that.top < 0) that.top = 0; // 鼠标移出可视区域后给按钮还原

        if (event.clientY < 0 || event.clientY > Number(this.clientHeight) || event.clientX > Number(this.clientWidth) || event.clientX < 0) {
          this.right = 0;
          this.top = this.clientHeight - this.floatDragDom.height - this.distanceBottom;
          document.onmousemove = null;
          this.floatDrag.style.transition = "all 0.3s";
          return;
        }

        if (that.left >= document.documentElement.clientWidth - floatDragWidth * 2) {
          that.left = document.documentElement.clientWidth - floatDragWidth * 2;
        }

        if (that.top >= that.clientHeight - floatDragHeight * 2) {
          that.top = that.clientHeight - floatDragHeight * 2;
        }
      };
    },
    mouseUp: function mouseUp(e) {
      var event = e || window.event; //判断只是单纯的点击，没有拖拽

      if (this.mousedownY == event.screenY && this.mousedownX == event.screenX) {
        this.$emit("handlepaly");
      }

      document.onmousemove = null;
      this.checkDraggablePosition();
      this.floatDrag.style.transition = "all 0.3s";
    },
    toucheStart: function toucheStart() {
      this.canClick = false;
      this.floatDrag.style.transition = "none";
    },
    touchMove: function touchMove(e) {
      this.canClick = true;

      if (e.targetTouches.length === 1) {
        // 单指拖动
        var touch = event.targetTouches[0];
        this.left = touch.clientX - this.floatDragDom.width / 2;
        this.top = touch.clientY - this.floatDragDom.height / 2;
      }
    },
    touchEnd: function touchEnd() {
      if (!this.canClick) return; // 解决点击事件和touch事件冲突的问题

      this.floatDrag.style.transition = "all 0.3s";
      this.checkDraggablePosition();
    },

    /**
     * 判断元素显示位置
     * 在窗口改变和move end时调用
     */
    checkDraggablePosition: function checkDraggablePosition() {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
      this.left = this.clientWidth - this.floatDragDom.width; // if (this.left + this.floatDragDom.width / 2 >= this.clientWidth / 2) {
      //   // 判断位置是往左往右滑动
      // } else {
      //   this.left = 0;
      // }

      if (this.top < 0) {
        // 判断是否超出屏幕上沿
        this.top = 0;
      }

      if (this.top + this.floatDragDom.height >= this.clientHeight) {
        // 判断是否超出屏幕下沿
        this.top = this.clientHeight - this.floatDragDom.height;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/loading/Loading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'loading',
  data: function data() {
    return {
      show: false
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeedbackButton",
  props: {
    distanceRight: {
      type: Number,
      default: 16
    },
    distanceBottom: {
      type: Number,
      default: 100
    },
    isScrollHidden: {
      type: Boolean,
      default: false
    },
    isCanDraggable: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 50
    },
    value: {
      type: String,
      default: "悬浮球！"
    }
  },
  computed: {
    visible: function visible() {
      return !['/testDetail', '/login'].includes(this.$route.path);
    }
  },
  //data 域
  data: function data() {
    return {
      clientWidth: null,
      clientHeight: null,
      left: null,
      top: null,
      right: null,
      timer: null,
      currentTop: 0,
      mousedownX: 0,
      mousedownY: 0
    };
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
  },
  mounted: function mounted() {
    var _this = this;

    this.isCanDraggable && this.$nextTick(function () {
      _this.floatDrag = _this.$refs.floatDrag; // 获取元素位置属性

      _this.floatDragDom = _this.floatDrag.getBoundingClientRect(); // 设置初始位置

      _this.initDraggable();
    });
    this.isScrollHidden && window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    onClick: function onClick() {
      this.$router.push({
        path: "/testDetail"
      });
    },

    /**
     * 窗口resize监听
     */
    handleResize: function handleResize() {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
      console.log(window.innerWidth);
      console.log(document.documentElement.clientWidth);
      this.checkDraggablePosition();
    },

    /**
     * 初始化draggable
     */
    initDraggable: function initDraggable() {
      var _this2 = this;

      this.floatDrag.addEventListener("touchstart", this.toucheStart);
      this.floatDrag.addEventListener("touchmove", function (e) {
        return _this2.touchMove(e);
      });
      this.floatDrag.addEventListener("touchend", this.touchEnd);
    },
    mouseDown: function mouseDown(e) {
      var event = e || window.event;
      this.mousedownX = event.screenX;
      this.mousedownY = event.screenY;
      var that = this;
      var floatDragWidth = this.floatDragDom.width / 2;
      var floatDragHeight = this.floatDragDom.height / 2;

      if (event.preventDefault) {
        event.preventDefault();
      }

      this.canClick = false;
      this.floatDrag.style.transition = "none";

      document.onmousemove = function (e) {
        var event = e || window.event;
        that.left = event.clientX - floatDragWidth;
        that.top = event.clientY - floatDragHeight;
        if (that.left < 0) that.left = 0;
        if (that.top < 0) that.top = 0; // 鼠标移出可视区域后给按钮还原

        if (event.clientY < 0 || event.clientY > Number(this.clientHeight) || event.clientX > Number(this.clientWidth) || event.clientX < 0) {
          this.right = 0;
          this.top = this.clientHeight - this.floatDragDom.height - this.distanceBottom;
          document.onmousemove = null;
          this.floatDrag.style.transition = "all 0.3s";
          return;
        }

        if (that.left >= document.documentElement.clientWidth - floatDragWidth * 2) {
          that.left = document.documentElement.clientWidth - floatDragWidth * 2;
        }

        if (that.top >= that.clientHeight - floatDragHeight * 2) {
          that.top = that.clientHeight - floatDragHeight * 2;
        }
      };
    },
    mouseUp: function mouseUp(e) {
      var event = e || window.event; //判断只是单纯的点击，没有拖拽

      if (this.mousedownY == event.screenY && this.mousedownX == event.screenX) {
        this.$emit("handlepaly");
      }

      document.onmousemove = null;
      this.checkDraggablePosition();
      this.floatDrag.style.transition = "all 0.3s";
    },
    toucheStart: function toucheStart() {
      this.canClick = false;
      this.floatDrag.style.transition = "none";
    },
    touchMove: function touchMove(e) {
      this.canClick = true;

      if (e.targetTouches.length === 1) {
        // 单指拖动
        var touch = event.targetTouches[0];
        this.left = touch.clientX - this.floatDragDom.width / 2;
        this.top = touch.clientY - this.floatDragDom.height / 2;
      }
    },
    touchEnd: function touchEnd() {
      if (!this.canClick) return; // 解决点击事件和touch事件冲突的问题

      this.floatDrag.style.transition = "all 0.3s";
      this.checkDraggablePosition();
    },

    /**
     * 判断元素显示位置
     * 在窗口改变和move end时调用
     */
    checkDraggablePosition: function checkDraggablePosition() {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
      this.left = this.clientWidth - this.floatDragDom.width; // if (this.left + this.floatDragDom.width / 2 >= this.clientWidth / 2) {
      //   // 判断位置是往左往右滑动
      // } else {
      //   this.left = 0;
      // }

      if (this.top < 0) {
        // 判断是否超出屏幕上沿
        this.top = 0;
      }

      if (this.top + this.floatDragDom.height >= this.clientHeight) {
        // 判断是否超出屏幕下沿
        this.top = this.clientHeight - this.floatDragDom.height;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
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
      _c("feedback-button"),
      _c("UpdateDialog"),
      _c("floatTest"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "van-popup",
        {
          style: { width: "85%" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c("div", { staticClass: "popupWrapper" }, [
            _c("p", [_vm._v("发现新版本")]),
            _c("div", { staticClass: "content" }, [
              _vm._v(_vm._s(_vm.comment)),
            ]),
            _c(
              "div",
              { staticClass: "popupFooter" },
              [
                _c(
                  "van-button",
                  {
                    attrs: { type: "default" },
                    on: {
                      click: function ($event) {
                        return _vm.closeModal()
                      },
                    },
                  },
                  [_vm._v("暂不更新")]
                ),
                _c(
                  "van-button",
                  {
                    attrs: { type: "info" },
                    on: {
                      click: function ($event) {
                        return _vm.apkDownload()
                      },
                    },
                  },
                  [_vm._v("立即更新")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible",
        },
      ],
      ref: "floatDrag",
      staticClass: "float-position",
      style: {
        left: _vm.left + "px",
        top: _vm.top + "px",
        right: _vm.right + "px !important",
        zIndex: _vm.zIndex,
      },
      on: {
        touchmove: function ($event) {
          $event.preventDefault()
        },
        mousemove: function ($event) {
          $event.preventDefault()
        },
        mousedown: _vm.mouseDown,
        mouseup: _vm.mouseUp,
        click: _vm.onClick,
      },
    },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle" }, [
      _vm._v("使用"),
      _c("br"),
      _vm._v("意见"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "van-popup",
    {
      staticStyle: { "background-color": "transparent" },
      attrs: { "close-on-click-overlay": false },
      model: {
        value: _vm.show,
        callback: function ($$v) {
          _vm.show = $$v
        },
        expression: "show",
      },
    },
    [
      _c(
        "div",
        { staticClass: "loadingWrap" },
        [
          _vm.show
            ? _c("van-loading", { attrs: { type: "spinner" } })
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible",
        },
      ],
      ref: "floatDrag",
      staticClass: "float-position",
      style: {
        left: _vm.left + "px",
        top: _vm.top + "px",
        right: _vm.right + "px !important",
        zIndex: _vm.zIndex,
      },
      on: {
        touchmove: function ($event) {
          $event.preventDefault()
        },
        mousemove: function ($event) {
          $event.preventDefault()
        },
        mousedown: _vm.mouseDown,
        mouseup: _vm.mouseUp,
        click: _vm.onClick,
      },
    },
    [_c("img", { attrs: { src: __webpack_require__(/*! @/assets/xcy.png */ "./src/assets/xcy.png"), alt: "" } })]
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/polluter.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./src/style/polluter.scss ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/polluter/blue_bg.png */ "./src/assets/polluter/blue_bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/polluter/yellow_bg.png */ "./src/assets/polluter/yellow_bg.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/assets/polluter/yellow_short.png */ "./src/assets/polluter/yellow_short.png");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @/assets/polluter/licenceBg.png */ "./src/assets/polluter/licenceBg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.into-task {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: rgba(18, 18, 54, 0.5);\n}\n\n.greenBg {\n  background: linear-gradient(180deg, rgba(2, 171, 50, 0.1) 0%, rgba(2, 171, 50, 0) 100%);\n  box-shadow: 0px 4px 20px -10px rgba(0, 29, 176, 0.2);\n  border-top: 1px solid rgba(2, 171, 50, 0.2);\n}\n\n.yellowBg {\n  background: linear-gradient(180deg, rgba(251, 183, 12, 0.1) 0%, rgba(251, 183, 12, 0) 100%);\n  box-shadow: 0px 4px 20px -10px rgba(0, 29, 176, 0.2);\n  border-top: 1px solid rgba(251, 183, 12, 0.2);\n}\n\n.redBg {\n  background: linear-gradient(180deg, rgba(255, 87, 51, 0.1) 0%, rgba(255, 87, 51, 0) 100%);\n  box-shadow: 0px 4px 20px -10px rgba(0, 29, 176, 0.2);\n  border-top: 1px solid rgba(255, 87, 51, 0.2);\n}\n\n.qrCode-info {\n  margin: 10px 8px 0;\n  border-radius: 10px;\n  background-color: #fff;\n  padding-bottom: 1px;\n}\n.qrCode-info .title {\n  padding: 10px 10px 8px 10px;\n}\n.qrCode-info .title > img {\n  margin-right: 5px;\n  vertical-align: middle;\n}\n.qrCode-info .title > span {\n  font-size: 16px;\n  font-weight: bold;\n  vertical-align: top;\n  letter-spacing: 0px;\n  line-height: 23.17px;\n  color: #121236;\n  text-align: left;\n}\n.qrCode-info .info {\n  width: 80%;\n  padding: 5px 19px;\n  border-radius: 10px 0px 10px 0px;\n  background: rgba(244, 136, 48, 0.03);\n  border: 1px solid rgba(255, 141, 26, 0.2);\n  font-size: 12px;\n}\n.qrCode-info .tips {\n  margin-left: 10px;\n  display: flex;\n  /** 文本1 */\n  font-size: 10px;\n  font-weight: 400;\n  text-align: left;\n  vertical-align: top;\n}\n.qrCode-info .tips > span {\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: center;\n  padding: 2px 5px;\n  min-width: 50px;\n  margin-right: 5px;\n}\n.qrCode-info .tips > img {\n  margin-right: 5px;\n}\n.qrCode-info .tips .tips_color {\n  background: rgba(255, 87, 51, 0.1);\n  color: #ff5733;\n}\n.qrCode-info .tips .tips_color_green {\n  background: #edffed;\n  color: #06b82f;\n}\n.qrCode-info .tips .tips_color_blue {\n  background: #f5edff;\n  color: #6c04d4;\n}\n.qrCode-info .tips .tips_color_yellow {\n  background: #fff1ce;\n  color: #ffa200;\n}\n.qrCode-info .content {\n  margin: 12px 10px;\n  display: flex;\n}\n.qrCode-info .content .content_right {\n  width: calc(100% - 90px);\n  margin-left: 10px;\n}\n.qrCode-info .content .content_right > div {\n  height: 21px;\n  line-height: 22px;\n}\n.qrCode-info .content .content_right > div > span {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.qrCode-info .content .content_right > div > span:nth-child(2n-1) {\n  /** 文本1 */\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  line-height: 22px;\n  margin-right: 8px;\n}\n.qrCode-info .content .content_right > div .tips_color_yellow {\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: center;\n  padding: 2px 5px;\n  min-width: 50px;\n  background: #fef7e5;\n  color: #ffa200;\n}\n.qrCode-info .qr_notice_red {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 17.38px;\n  color: #ff5733;\n  text-align: left;\n  vertical-align: top;\n  padding: 5px 20px;\n}\n.qrCode-info .qr_notice_yellow {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 17.38px;\n  color: #fbb70c;\n  text-align: left;\n  vertical-align: top;\n  padding: 5px 20px;\n}\n\n.company-info {\n  border-radius: 10px;\n  background: linear-gradient(0deg, rgba(68, 123, 252, 0) 70%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  margin-top: 6px;\n}\n\n.bulid_main_hr {\n  margin: 5px 20px;\n  height: 0px;\n  border: 1px solid rgba(68, 123, 252, 0.1);\n}\n\n.company_title {\n  display: flex;\n  padding: 10px 10px 8px 15px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20.27px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.company_title > img {\n  height: 14px;\n  vertical-align: middle;\n  margin-right: 8px;\n  margin-top: 5px;\n}\n.company_title .detail_title {\n  margin-left: auto;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: right;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.black_content {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 25px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n\n.black_red_content {\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 10px;\n  line-height: 25px;\n  color: #ff5733;\n  text-align: left;\n  vertical-align: top;\n}\n\n.title_tips {\n  font-size: 12px;\n  border-radius: 4px;\n  font-weight: normal;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 8px 0px 8px;\n  margin-left: 14px;\n  height: 18px;\n}\n.title_tips > span {\n  margin-left: 10px;\n}\n\n.green_tips {\n  border: 1px solid #43cf7c;\n  color: #43cf7c;\n}\n\n.blue_tips {\n  border: 1px solid #00baad;\n  color: #00baad;\n}\n\n.brown_tips {\n  border: 1px solid #c97041;\n  color: #c97041;\n}\n\n.grey_tips {\n  border: 1px solid rgba(18, 18, 54, 0.5);\n  color: rgba(18, 18, 54, 0.5);\n}\n\n.red_tips {\n  border: 1px solid #f80a03;\n  color: #f80a03;\n}\n\n.main_content {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 20px;\n}\n.main_content .third_width {\n  width: 33%;\n}\n.main_content .half_width {\n  width: 50%;\n}\n.main_content .whole_width {\n  width: 100%;\n}\n.main_content .no_bottom {\n  margin-bottom: 0px;\n}\n.main_content > div {\n  width: 25%;\n  margin-bottom: 15px;\n}\n.main_content > div > span {\n  display: block;\n}\n.main_content > div > span:first-child {\n  /** 文本1 */\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.main_content > div > span:last-child {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.main_content > div > span:last-child > img {\n  margin-right: 6px;\n  margin-top: 5px;\n}\n.main_content > div .address {\n  color: #447bfc !important;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.main_content .build_info {\n  width: 100%;\n}\n.main_content .build_info > div .build_label {\n  border-radius: 4px;\n  text-align: center;\n  padding: 1px 8px 1px 8px;\n  margin-right: 10px;\n  font-size: 12px;\n  width: 40px;\n  display: inline-block;\n}\n.main_content .build_info > div .build_green {\n  background: rgba(0, 186, 173, 0.1);\n  color: #00baad;\n}\n.main_content .build_info > div .build_purple {\n  background: rgba(96, 28, 255, 0.1);\n  color: #601cff;\n}\n.main_content .build_info > div .build_blue {\n  color: #447BFC;\n  background: #2f87f020;\n}\n.main_content .build_info > div:first-child {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.main_content .build_info > div:nth-child(2n) {\n  display: flex;\n  margin-top: 8px;\n}\n.main_content .build_info > div:nth-child(2n) > span {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.main_content .build_info > div:nth-child(2n) > span:last-child {\n  margin-left: auto;\n}\n.main_content .build_info > div > img {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.main_content .build_info .bulid_hr {\n  margin-top: 10px;\n  height: 0px;\n  border: 1px solid rgba(68, 123, 252, 0.1);\n}\n.main_content .admin_info {\n  width: 100%;\n}\n.main_content .admin_info .normal_font {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-top: 5px;\n}\n.main_content .admin_info .grey_font {\n  display: flex;\n}\n.main_content .admin_info .grey_font > span {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.main_content .admin_info .grey_font > span:last-child {\n  margin-left: auto;\n}\n.main_content .admin_info .bulid_hr {\n  margin-top: 10px;\n  height: 0px;\n  border: 1px solid rgba(68, 123, 252, 0.1);\n}\n\n.main_footer {\n  padding: 0px 20px 10px;\n  margin-top: -10px;\n}\n.main_footer > img {\n  margin-right: 5px;\n  vertical-align: middle;\n}\n.main_footer > span {\n  font-size: 12px;\n  font-weight: 400;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n\n.online_blue {\n  display: flex;\n  margin: 8px 10px;\n  opacity: 1;\n  height: 30px;\n  border-radius: 20px 0px 20px 0px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") local no-repeat;\n  background-size: 100% 100%;\n  border: 1px solid white;\n}\n.online_blue > span:first-child {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 30px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.online_blue > span:last-child {\n  margin-left: auto;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 30px;\n  color: #121236;\n  text-align: left;\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n.online_yellow {\n  display: flex;\n  margin: 8px 10px;\n  opacity: 1;\n  height: 30px;\n  border-radius: 20px 0px 20px 0px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") local no-repeat;\n  background-size: 100% 100%;\n  border: 1px solid white;\n}\n.online_yellow > span {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 30px;\n  color: #fc9e3f;\n  text-align: left;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.online_yellow .yellow_right_black {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: 10px;\n  color: rgba(18, 18, 54, 0.5);\n}\n\n.online_white {\n  display: flex;\n  margin: 5px 10px;\n  height: 50px;\n  opacity: 1;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.online_white > span:first-child {\n  font-size: 14px;\n  font-weight: 400;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-left: 20px;\n  line-height: 50px;\n}\n.online_white > span:nth-child(2n) {\n  margin-left: 10px;\n  margin-top: 15px;\n}\n.online_white > span:last-child {\n  margin-left: auto;\n  font-size: 12px;\n  height: 18px;\n  border-radius: 4px;\n  background: rgba(67, 207, 124, 0.2);\n  color: #43cf7c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 8px 0px 8px;\n  margin-right: 20px;\n  margin-top: 15px;\n}\n.online_white > span.red_tip {\n  background: rgba(255, 77, 79, 0.2);\n  color: #FF4D4F;\n}\n\n.online_data {\n  margin: 5px 10px;\n  border-radius: 0px 0px 10px 10px;\n  background: #fafafa;\n  border: 1px solid white;\n}\n.online_data .online_data_title {\n  display: flex;\n  margin: 15px 10px 10px;\n}\n.online_data .online_data_title > span {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.online_data .online_data_title > span:last-child {\n  margin-left: auto;\n}\n.online_data .online_data_info > div {\n  display: flex;\n  padding: 0px 15px;\n}\n.online_data .online_data_info > div > span {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 25px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.online_data .online_data_info > div > span:nth-child(2n) {\n  font-weight: 500;\n  color: #121236;\n}\n.online_data .online_data_info > div > span:nth-child(3) {\n  margin-left: 60px;\n}\n\n.rad_title {\n  margin: 10px 20px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  border-bottom: 1px solid rgba(68, 123, 252, 0.1);\n}\n.rad_title > span {\n  color: rgba(18, 18, 54, 0.5);\n  margin-left: 40px;\n  padding: 10px;\n}\n.rad_title > span:first-child {\n  margin-left: 0px;\n}\n.rad_title .right_span {\n  font-size: 12px;\n  font-weight: normal;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: auto;\n  float: right;\n  padding: 0px;\n}\n.rad_title .active {\n  color: #fc9e3f;\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-position: 40% bottom;\n}\n\n.rad_content {\n  display: flex;\n  padding: 0px 10px 5px;\n}\n.rad_content > div {\n  width: calc(25% - 5px);\n  border-radius: 10px;\n  background: #f8fbff;\n  border: 1px solid white;\n  text-align: center;\n  margin: 0px 5px;\n  padding-bottom: 3px;\n}\n.rad_content > div > span {\n  display: block;\n  vertical-align: top;\n}\n.rad_content > div > span:first-child {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 32px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.rad_content > div > span:last-child {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #121236;\n}\n\n.qrCode_content {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 20px;\n}\n.qrCode_content > div > span {\n  display: block;\n}\n.qrCode_content > div > span:first-child {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.qrCode_content > div > span:last-child {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.qrCode_content > div:first-child {\n  width: 25px;\n  display: flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.qrCode_content > div:last-child {\n  width: calc(100% - 25px);\n}\n\n.upervison_title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 22px;\n  color: black;\n  text-align: left;\n  vertical-align: top;\n  padding: 15px 20px 10px;\n}\n\n.base_title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #447bfc;\n  line-height: 22px;\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.1);\n  padding: 16px 20px 8px;\n  display: flex;\n  background: #fff;\n}\n.base_title .into-map {\n  margin-left: auto;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  font-weight: normal;\n  text-decoration: underline;\n}\n.base_title .info_right {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: auto;\n}\n\n.base_card {\n  display: flex;\n  margin: 5px 10px;\n  height: 50px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.base_card .span_title {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 50px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-left: 20px;\n}\n.base_card .span_right {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 50px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: auto;\n  margin-right: 10px;\n}\n.base_card > span {\n  line-height: 50px;\n}\n.base_card > span > img {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n.licence_bg {\n  display: flex;\n  margin: 8px 10px;\n  opacity: 1;\n  height: 30px;\n  border-radius: 20px 0px 20px 0px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") local no-repeat;\n  background-size: 100% 100%;\n  border: 1px solid white;\n}\n.licence_bg > span:first-child {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 30px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-left: 20px;\n}\n.licence_bg > span:last-child {\n  margin-left: auto;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 30px;\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n.file_content {\n  height: 50px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border-top: 1px solid #447bfc;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.file_content > span {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n  padding: 5px 10px 6px;\n  display: inline-block;\n}\n\n.qr_title {\n  background: #fff;\n  margin-top: 3px;\n  padding: 10px 10px 8px 10px;\n  display: flex;\n}\n.qr_title > img {\n  margin-right: 5px;\n  vertical-align: middle;\n  height: 16px;\n  margin-top: 2px;\n}\n.qr_title > span {\n  font-size: 16px;\n  font-weight: bold;\n  vertical-align: middle;\n  letter-spacing: 0px;\n  color: #121236;\n  text-align: left;\n}\n.qr_title .title_tips {\n  font-size: 12px;\n  border-radius: 4px;\n  font-weight: normal;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 8px 0px 8px;\n  margin-left: 14px;\n  height: 18px;\n}\n.qr_title .title_tips > span {\n  margin-left: 10px;\n}\n.qr_title .red_tips {\n  border: 1px solid #f80a03;\n  color: #f80a03;\n}\n\n.more {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 36px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n\n.air_quality_title {\n  width: 100%;\n  height: 25px;\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.air_quality_title > span {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 21px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: right;\n  vertical-align: top;\n  padding: 2px 20px 2px 20px;\n}\n.air_quality_title > span:first-child {\n  height: 25px;\n  opacity: 1;\n  border-radius: 2px 20px 0px 2px;\n  background: linear-gradient(90deg, rgba(67, 207, 124, 0.3) 0%, rgba(67, 207, 124, 0) 100%);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #121236;\n  text-align: center;\n  vertical-align: top;\n}\n\n.city_title {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 21.1px;\n  color: black;\n  padding-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.city_title > span:nth-child(2) {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  margin-left: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml,\r\nbody {\r\n  overflow: hidden;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml,\r\nbody {\r\n  overflow: hidden;\n}\r\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-popup[data-v-8ec3c9be] {\n  border-radius: 8px;\n}\n.popupWrapper[data-v-8ec3c9be] {\n  padding: 16px;\n}\n.popupWrapper p[data-v-8ec3c9be] {\n  font-size: 16px;\n}\n.popupWrapper .content[data-v-8ec3c9be] {\n  padding: 10px 0;\n  margin: 10px 0;\n  line-height: 20px;\n  font-size: 14px;\n  color: #888d95;\n  max-height: calc(100vh - 350px);\n  overflow: auto;\n  white-space: pre-line;\n}\n.popupWrapper .popupFooter[data-v-8ec3c9be] {\n  display: flex;\n  justify-content: space-around;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".float-position[data-v-0125e326] {\n  position: fixed;\n  right: 0;\n  top: 80%;\n  width: 56px;\n  height: 56px;\n  background: rgba(156, 155, 159, 0.5);\n  box-shadow: 0px 0px 10px 2px rgba(156, 155, 159, 0.5);\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.float-position .circle[data-v-0125e326] {\n  background: white;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  line-height: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loadingWrap[data-v-72bdea96] (van-popup) {\n  background-color: rgba(0, 0, 0, 0.7);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".float-position[data-v-3d3da615] {\n  position: fixed;\n  right: 0;\n  top: 66%;\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.float-position img[data-v-3d3da615] {\n  width: 56px;\n  height: 56px;\n}\n.float-position .circle[data-v-3d3da615] {\n  background: white;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  line-height: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("02765796", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0b03cdbb", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

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

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4bce1e91", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0a019782", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b84ce7c4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("00feb400", content, false, {"sourceMap":false,"shadowMode":false});
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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/api/login.js":
/*!**************************!*\
  !*** ./src/api/login.js ***!
  \**************************/
/*! exports provided: phoneCode, phoneCodeLogin, getVersion, getIndexRole, getUserBtnList, getPageLog, getInfo, deptTree, userModify, getRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneCode", function() { return phoneCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneCodeLogin", function() { return phoneCodeLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVersion", function() { return getVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexRole", function() { return getIndexRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserBtnList", function() { return getUserBtnList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageLog", function() { return getPageLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deptTree", function() { return deptTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userModify", function() { return userModify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoles", function() { return getRoles; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl = '/ps'; ///pollut是污染源详情所有接口都有的

/**
 * 根据手机号获取验证码
 * @param mobile 手机号
 * */

function phoneCode(_ref) {
  var mobile = _ref.mobile;
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user/getCode',
    method: 'get',
    params: {
      mobile: mobile
    }
  });
}
/**
 * 根据手机号、验证码和uuid登录
 * @param mobile 手机号
 * @param code 验证码
 * @param appid 手机的uuid
 * */

function phoneCodeLogin(_ref2) {
  var mobile = _ref2.mobile,
      code = _ref2.code,
      appid = _ref2.appid;
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user/loginByCode',
    method: 'get',
    params: {
      mobile: mobile,
      code: code,
      appid: appid
    }
  });
}
/***
 * 获取服务器版本号
 */

var getVersion = function getVersion(version) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'http://116.52.6.118:18899/KQZLYZW/version/isNewVersion',
    method: 'GET',
    params: {
      version: version,
      type: 'kep'
    }
  });
};
/***
 * 获取用户权限
 */

var getIndexRole = function getIndexRole(phone) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/app/login/get-role',
    method: 'GET',
    params: {
      phone: phone
    }
  });
};
/***
 * 获取用户关联的首页按钮
 */

var getUserBtnList = function getUserBtnList(_ref3) {
  var userId = _ref3.userId;
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user/getUserHome',
    method: 'GET',
    params: {
      userId: userId
    }
  });
};
/***
 * 记录页面跳转日志
 */

var getPageLog = function getPageLog(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/log/pageLog',
    method: 'post',
    data: data
  });
};
/**
 * 获取用户信息
 * */

function getInfo(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/getInfo',
    method: 'get',
    params: {
      Token: token
    }
  });
}
/**
 * 部门树
 * */

function deptTree(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/dept/tree',
    method: 'get',
    params: {
      Token: token
    }
  });
}
/**
 * 修改用户信息
 * */

function userModify(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user',
    method: 'PUT',
    data: data
  });
}
/**
 * 查询所有角色
 * */

function getRoles(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/role',
    method: 'get'
  });
}

/***/ }),

/***/ "./src/api/request.js":
/*!****************************!*\
  !*** ./src/api/request.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./src/router/index.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL =  false ? undefined : ""; // 创建axios实例

var service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  timeout: 50000,
  retry: 2,
  // 请求次数,
  retryInterval: 1000 // 请求超时后，1s再次请求

});
service.interceptors.request.use(function (config) {
  config.baseURL = "http://10.221.29.4:7001"; //打包app时用

  if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].state.token) {
    config.headers["Token"] = _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.token; // config.headers[ 'X-Access-Token' ] = store.state.token;
  }

  return config;
}, function (error) {
  console.log(error); // for debug

  return Promise.reject(error);
});
service.interceptors.response.use(function (response) {
  //接口9999 可能登录异常或token过期重新登录
  if (response.data.code === '500' && response.data.msg === 'token异常') {
    if (_router__WEBPACK_IMPORTED_MODULE_3__["default"].history.current.path !== '/login') {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('unUserPassLogin', localStorage.getItem("uuid"));
    }
  } else if (response.data.code === '500' && response.data.msg === '登录超时') {
    if (_router__WEBPACK_IMPORTED_MODULE_3__["default"].history.current.path !== '/login') {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('unUserPassLogin', localStorage.getItem("uuid"));
    }
  }

  return response.data;
}, function (error) {
  Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (service);

/***/ }),

/***/ "./src/assets/code/红码.png":
/*!********************************!*\
  !*** ./src/assets/code/红码.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAACVElEQVQoFX1TTU9TURA9r30ktFGhrS0L7D+wLbuWoHtdFT92NqgEVxrd684Y9hoIC+PKj42JYIOEqCFBJFI0sdTKWhds7BeVhIJ9fdcz9/IqYeE06bsz98zMeWfmWWr8BtJp+Hw4YkpJwLKOhOG6KBRsyRm/iq0tQRioAfb1ybPZ/JdmAIODjNjShzlDQwgGWZw/Se50cOuOJEw9hN+vK9JR2N1FscgUW+5YhjmnE8gMo+PgVwWrK7D9chWJYOQsYlH4bax9Qvmboa3TDLdMRo3lrI0NnIxiswxXv1sohNwVVCsqleI7SJoGe0qwoeNITn4e9bopeUCEbn5erhynGzckIbUrFemTzapaw2rtHSBae+Jms4iEBUCYllansazbwepHbH4n2mq1UKtJK1qtas1MIRAQbo2GwLTZ4p/ox83b6OmRmdBImDac1mfPFQf40xawUl43Ez38T0VYOxjAhVHE41Jx8S3Wv0BJaVtq/97G9CPRmrrR7ZLkVBbeIJHAseMI9aNUwquXmLhGjNfN58fIGeRylFHV6tbMNHwWLo4ilcDcHJaXce8uxnI4fw6xGDvrAZAPQdEoqlW8zlsUjRrQ4qeQTOLHTxS/yt5QBVLV4/S6MWTbKpW0eAiHBWGMOsm4FHp78fwFHj/B0rtDy0XQWkE2kiDOh1rzvLDIZcflS9Lh/gOsfMDOtlFbd2Nt7mi5pFfOW+V2G+ufMTuLZ09lypOT2Glif9+QsCWb3wL3mhp2ufGSHw7diesYGJDD0nvTR8CuawsN2n8+U7MDXQDdQuEvL4wBNDcYM10AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/code/绿码.png":
/*!********************************!*\
  !*** ./src/assets/code/绿码.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAACh0lEQVQoFXVTTWsTQRie2ewmIc3mw8TUtBejoIm9tNCCUBChRWsPFRUUvOjVg1f9EXoQQbwqaBVPUqWUIFIPldYU6wdtY8S2FGMrSbPd3SZNupsdn91pVnLohCzvzDzP+/G879A7S/d7w2mBCKR9McJwQPFrXxaxvqh5EZyryZHNRtnGOFDHILIYAF43aw7LdsEBR3xxWCLigDOau+UXfPs3hDUJu9k9hu2T4oSHUMTkvLrVmBx4DIroQCk4JzpSfaG0xawtQ5nXFj3Ug6uoJPeHemJSVKDCgpYvVFd52jbN8cT6QievJIeX9ZVDUuhnbZ3XFhblS51DFUPLyMcALFRXeFhXCdpkFjjvtua2Td3VAQa2OMQVALxsRLKjOYsp5nbUGzoXP60Yet3a48nAwBaHYUkGoKVZi2YRllMXC9V1uHegGpKBrRjasz9v/IIXW9XUAeNBRNQArW90j0GDVq/sKzSGY5ywHE1NZgIMmJsk99L2hapQeOTwYNKfgP2hMv9Vy3MHIpyhp0+LExFJhm5uksjR7/FNVz6lg6mAJxCWgnl9dao0c61rFJT9aAKhA+Gei51DqqFDA9SDu/PxwUxHKlv6OKt8u330+uXk8Nl4f0yKMGL9b0BUjCh7WrY8ixZDA6Tb5U9kgsd/1/8uVX81iYWSLIYc7b9bG/NQwekpiYgyLwBMkYomayKyT/C+3nz/cmNyvPeeO1wA0AXtB77oacVQVHMHR9Nbuc/q8oXEGRT8cO35nPJ9x9zlatvRYGFGMW/OyNlbjLLBTOiWLc88OHUXuT1ae6E3awYzeMfpePHtQQ8Hqe426zFvBK5LDcWJw/BwXm1MiXhzOD34mRI+GS6AP9N/3tNHVvumOpQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/code/黄码.png":
/*!********************************!*\
  !*** ./src/assets/code/黄码.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAACK0lEQVQoFW1TMWxSURQ9D/hFbAmohaZImjg3spgmtYuzC4Nzq6NjF52cjYNOrs4aBwfTwURjol0aFgcxrjZpMEY+lCLW2n74z3PeQz41vgH+v/+ee8895z5jP99GYRVI4d8Tu8D/4v1GRpjKOn63YMwpYKag12H/VNBanKkyklGf4xYaNaTPAh5pYUdYuiPA3iOYdBIf/cLVJiGE8RhhZmsorLE+TkIcbMO4T8EFFK9hpqQG/R0cEqPSHuawxTW7uI5B08yUcfgJsIoG57G4YU/ayNc0hGA6k4kN4qEw4StE3WRO5kZdBQdNJYynSLpZRKH6lOuI9jE68lX1EPUYNGwbhWMKCUlqwHnIjeWV2hnD+NB6jHQO1JDlmOYOZ4tBrZfuOsXolRfToLDiEjb/RjiqgY2UjHhKknH9qT/WTuVsqW5yVdgY3Tf48cF/JiwlT/ceglpzgITkprh1Xpq5ZWTmEBQx+Ijvz3Hx1sQ39k/LHxpAATgD54Gx83Uzu4xwC733uHQPlQ3MX0dQJskpA4KSpdHtLQTnyI1kxC1fw9EufpKbF8OZmShJc7kx+Rr3ypCt95rQVABLuzhkFt+e4esTXHk7RZIZBzvGUka3XMN9jd55jX4DCzck4pf76L2D4roZXkkL7igXRztFZCx/qDV1a7/A5acqt/tAmPjYE3G+ZatYbSYLpUYs6C5O5SayC6IsbixnwWT5Rho6E23cm378NWVzL8MkISbkD/lE1+UnUkURAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/point/location.png":
/*!***************************************!*\
  !*** ./src/assets/point/location.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/polluter/blue_bg.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/blue_bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAAfCAYAAAD6OUY5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASsSURBVHic7dw7bBxVFAbg/9wZr732xgrOA1B4C5NYiIgoTSQkUvEQBTVFJCQaV7SIBgnXkdLQJBUNQUhpgBIJCSrSRUI0SJFAdFGEQ2I72Z3H/amcZJ19zGt37p05X+fdeZw59/d45np3BAWRXAHwtgXeBfmeEdkoui2llFLFpBb/hnlWINkF8KklPgLwRpQw6kdYHsRElFhYAuCE9TO8OGH1h29OXObx9/PUMmLZabVMq6OqWqbuJ08tUxYsVUvG8clSi2alWC3zysq8xselWlzKyr6lDnBuI4gzn8hJXrDExX7MhQd9HhnEhCVy/SForTwjUyNPymw2HYQhhdrRoh6SgCWTqSdikutpym/vD/jC3T17PLVjlitUxVxWUY7RrCjX+JwVEpOvyEm+k1p+fWePJ/qRz4eanzdH602hDivZw3kNQen9aFbKczIrEpuxOyQ344Tf3L5r/TyJe1KyJ2WqFtFM+oXjplZIbvYjfrm9a4/bMVMpyi86nVGTtjREs1JewR7aUVMrJN/vR/x8e8c+Y+fcaW8G1ptCm8ub6QxVu8ZnhQemVkiuRwkube/YlwqdxD1JvdNlOl1chdpynBnppzMmaMtxFkHAAsNTK1HCr/7b5ca8r8SbqvFXAso7mpUDGtAQko+uyEl+2I/4ZpQ4emSOluUVJ//jPoP9aFbKa0tWGsBaRAYASC4NYn621+fTs9qZNly5RjOpsnL1wwIiAIl7+1fk5/sRT477so9PXG1447WlIZqV8rQhlQkMIJBbBgD6sf34QcSjdRelnqS3qC2i0xkqp4VQEAb405B8NrVyKknnXEFb0tCW48xIP52hstK76+k6AfZWuvjdAFgfRHyxzMb0SkC5RrNygDakdrMYgt6y/A3gphnE9kyUcG0G+6hPW25R9ZezvLZkRZXn2CAEAdBdxE0R+cdYmJf1a/jNpreoKivNSk0KNGRlUdBZkGsAYGxqj+kXgHLQXqmsNCu1a/Id0+Ge3Di6ip8AwNBKp4YantDkhqsDdDpDZaWDMFJ3EVhZlGsichsATFpVq7ThQ/QWVWWlWVF5PdUz108cw+X9nw0skzoLUn7w5iTgTaEOa8sdk6dZWV4CVntyUUTu7L9mLGd/Im9rw53iSQ89KVO1iEuZDANg7ZBceu4Ifnz8dWMtGnNFrreoKivNSk3a0pAZZCUwwNoh+e7U8+YLERk6bxsaifPvUs2DN5n3ptDm8mY6QxUSGOBwDz+cfsVsisj9g+8b6hz57HiSek/KbDYdhCH6KIdHwgBY7eLqmVeDCyJyb9QyxqblTuR6i6qy0qwo17ielTAAel3ZOnsy+EREdscuZ9GcOfIquD6wD3lTqMP00xkqqzlnRQTohObX5U66dfa14BcRmbiJkDRxo0bak0PxpEzVIprJ+hkBgoC/hYFceet1uSqykOlCOyRsAsis61M10emMmrSlIZqVUkQAEDCB3IDgZ1r7/fnT4XURyfVg8TBNkQDcmlGdI419RlfOh3flWnzMwlU8L6yqh46N3MwsezJmhaqeoVZFXzQrY7aT+cWc28i5QtOyUkVPMmyHImYHwlsA/xpE4R8fnBv9T8ys/gcPxUQyXo18SAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/licenceBg.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/licenceBg.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/polluter/yellow_bg.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/yellow_bg.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAAfCAYAAAD6OUY5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUKSURBVHic7d1NaFxVFAfw/73zZiaTybR9NSGmHZKqiYIu3NTQqNQvCgqpSxV00YWYCrpQFERwo7gTF0KliG7qUhFFRRBEFEqJpRoNpqhJjSFpoqlNmjhxvt49LmxCmszMy3vzvu6889vlfZ3zGOZw5753bgRcIqIsgMNQ6jCkuB8Qg26vxRhjzCWiGeHseMoAeBZED0GIQ7AqY6gWTqMwdwbfvXsOl86VGl5gzdUuAEB7KkFOcm2kYLM/m74ay+5AD+JtxNrmH1eBGp3VUTeWew3jtdnEW3UWq9HhObtYLmyLt7oey7CJteIqXq2zdmWauK8rznftztjdmzvLNbbtyW6JteRNrFqXMbPJHdzXZWeBLtc+a+/W+/LTA2/k0XfoY2OnxxPREwC9gkrxLFZnT2HiwxFMf+Hwq+iOl0WcBcO2iLPI8auIMx8REUAl20JORAMg6wQqhTn89ulj+P7tBa9zsRuNM9bq3I3hWewpS4HQuJAT0RGQ9TqWp97E509+E1RurcSj2RmmDS7JLEiKIFCsW8iJaARUfRwXvn4OZ167EGRqYao/Z82iyo/5ceadHc2PM/fqjciJaATV0jB+PvU0xt93+ASAxYWLx7GMtZTQi6OqKkBtL+RE9CCs4r0YfesF/P4Z/05kjLEoE/LaqRUiGoBVfgpjJ17mIu4/nsaJrnqvY9m/esiixpdXDyOjBChVltdsU9ZL+OuHkzj/SYM3UPXGDx9Z3LXslzuOrIQCUNwo5ET0MIpXLuKrF8dDTIsxxthOtQGQYk0CABG1wSodxfSXH4WcFmtC0F2dzF9NdXXqxseuTl/UmYkJtKsTAFQ2BaVW1kfk96C4MulHs4+2Qp2Dcdeer5VAeoI9pFu+PH8SD6lsBpBL/xdyVb4Tf/942teA3L7JmqBbHWUsEFnTBFnzkoh6UC0LfPvqVBh5BLlYFgsGr7PiTBReD+N1VjRlZEwkknMSwAAKi7+GnQ9jjDGH0rl9ACYlrHIeq1PTYecTBV6/163btLWOotWeH4WxdbRwe76Pho53ICFTQogZCUEdmD+v69vwjDEWTz133wKZGAMAqSqVNOZGeSjBHOF1VljchT76zXYdAIxxAJBSWkWszVghpxQ73J4fXdye3zpatj1/+OQNUMaCEGIRACTK1cb/no0xxli05PL9SKdH1/+UIFUMM58g8cNHFnfcJ9QCjr7TDyM7LYTYaGSVoEpsCnkr4/b81hKr9nzdhNmef/D53TB7dyGZ/GnzZgMS//oenLHNdGvT1C1f3Ybduq2zEpbBY+3ou68PRsdZIUR18y6Jcsn/Eblu7fm8zkqk6FZHGfPc4LF29A73IWeOCyG2VVQDKrpTK9yerx9uz9cPt+dH3NDxDtx0pBOp7gkhRM2RnoFqACPyOnQbqDPmNW7gYA0NPrMH1x1MIdX9ixCiXO8wA5WlyI7Iddbisx1sGy7JzEP7B5O449F2JPNryO2fFUI0/NVkYJkLOcANOjqK1jorbCteZ8Wh3D6JrtuS6Lw5gd7bK9h168LWh5r1GFiaKAIwbI9k7Cpuz2dx51kv6N6BBDKmRHaAkOlU6M4XkB8qCyEcddsLeu+uXLO5XLLZ35nbSZusC4u+XNVRiK5cSusRxp91tnebacJFr6N5fsGG5uts7zEj8pnNentq3kxH476aNF1j24HujPN7m2w6Fc+tp9R//R+EpQzBvFHhkQ+UAJr67P4DsI2kqM8eL1EAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/yellow_short.png":
/*!**********************************************!*\
  !*** ./src/assets/polluter/yellow_short.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAGCAYAAAAynOUQAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABmSURBVCiRvY2xEUBAFETffbFcF1KBhjSgB+VogUYkjAoEd3O3IiNA6DbZ3Zk38xyAwjGQfE/0kDyKnmt/9ZMJ78z9d5NkQMffEZVBqIHydxlsRiraDCJwmgzUZHHBbKAlg2g1l8YT2ANJGQAZ2GAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/xcy.png":
/*!****************************!*\
  !*** ./src/assets/xcy.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xcy.png";

/***/ }),

/***/ "./src/components/UpdateDialog.vue":
/*!*****************************************!*\
  !*** ./src/components/UpdateDialog.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true& */ "./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true&");
/* harmony import */ var _UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateDialog.vue?vue&type=script&lang=js& */ "./src/components/UpdateDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& */ "./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8ec3c9be",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/UpdateDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/UpdateDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/UpdateDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=style&index=0&id=8ec3c9be&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_style_index_0_id_8ec3c9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/UpdateDialog.vue?vue&type=template&id=8ec3c9be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_8ec3c9be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/common/feedback/FeedbackButton.vue":
/*!***********************************************************!*\
  !*** ./src/components/common/feedback/FeedbackButton.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true& */ "./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true&");
/* harmony import */ var _FeedbackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackButton.vue?vue&type=script&lang=js& */ "./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedbackButton.vue?vue&type=style&index=0&lang=css& */ "./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& */ "./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FeedbackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0125e326",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/feedback/FeedbackButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=style&index=1&id=0125e326&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_style_index_1_id_0125e326_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/feedback/FeedbackButton.vue?vue&type=template&id=0125e326&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackButton_vue_vue_type_template_id_0125e326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/common/loading/Loading.vue":
/*!***************************************************!*\
  !*** ./src/components/common/loading/Loading.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=72bdea96&scoped=true& */ "./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js& */ "./src/components/common/loading/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& */ "./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72bdea96",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/loading/Loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/loading/Loading.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/common/loading/Loading.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=style&index=0&id=72bdea96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_72bdea96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=72bdea96&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/loading/Loading.vue?vue&type=template&id=72bdea96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_72bdea96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/common/loading/index.js":
/*!************************************************!*\
  !*** ./src/components/common/loading/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue */ "./src/components/common/loading/Loading.vue");
// 全局 loading.js

var loading = {
  install: function install(Vue) {
    // 创建一个Vue的“子类”组件
    var LoadingConstructor = Vue.extend(_Loading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]); // 创建一个该子类的实例,并挂载到一个元素上

    var instance = new LoadingConstructor(); // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中

    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el); // 在Vue的原型链上注册方法，控制组件

    Vue.prototype.$loading = {
      show: function show() {
        instance.show = true;
      },
      hide: function hide() {
        instance.show = false;
      }
    };
  },
  show: function show() {
    console.log('show');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (loading);

/***/ }),

/***/ "./src/components/common/test/floatTest.vue":
/*!**************************************************!*\
  !*** ./src/components/common/test/floatTest.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floatTest.vue?vue&type=template&id=3d3da615&scoped=true& */ "./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true&");
/* harmony import */ var _floatTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floatTest.vue?vue&type=script&lang=js& */ "./src/components/common/test/floatTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floatTest.vue?vue&type=style&index=0&lang=css& */ "./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& */ "./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _floatTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d3da615",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/test/floatTest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/test/floatTest.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/common/test/floatTest.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=style&index=1&id=3d3da615&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_style_index_1_id_3d3da615_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./floatTest.vue?vue&type=template&id=3d3da615&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/test/floatTest.vue?vue&type=template&id=3d3da615&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_floatTest_vue_vue_type_template_id_3d3da615_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_2__);


 // 模拟的用户数据

var users = [{
  username: 'admin',
  password: 'admin123'
}, {
  username: 'user',
  password: 'user123'
}]; // 拦截登录请求

mockjs__WEBPACK_IMPORTED_MODULE_2___default.a.mock('/zshb/login', 'post', function (options) {
  var _JSON$parse = JSON.parse(options.body),
      username = _JSON$parse.username,
      password = _JSON$parse.password;

  var user = users.find(function (u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    return {
      code: 200,
      message: '登录成功',
      token: 'fakeToken123'
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误'
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
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vant/lib/index.css */ "./node_modules/vant/lib/index.css");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vant_lib_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ "./node_modules/element-ui/lib/theme-chalk/index.css");
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style/global.scss */ "./src/style/global.scss");
/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_global_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _style_polluter_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style/polluter.scss */ "./src/style/polluter.scss");
/* harmony import */ var _style_polluter_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_polluter_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _utils_FileUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/FileUtils.js */ "./src/utils/FileUtils.js");
/* harmony import */ var _components_common_loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/loading */ "./src/components/common/loading/index.js");
/* harmony import */ var vue_touch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-touch */ "./node_modules/vue-touch/dist/vue-touch.js");
/* harmony import */ var vue_touch__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_touch__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/config */ "./src/utils/config.js");
/* harmony import */ var _js_mock_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/mock.js */ "./src/js/mock.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_23__);















vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(element_ui__WEBPACK_IMPORTED_MODULE_13___default.a);
vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(vant__WEBPACK_IMPORTED_MODULE_11__["default"]);
vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["default"]);
vue__WEBPACK_IMPORTED_MODULE_6__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.dayjs = dayjs__WEBPACK_IMPORTED_MODULE_10___default.a;




vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(_utils_FileUtils_js__WEBPACK_IMPORTED_MODULE_18__["default"]);

vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(_components_common_loading__WEBPACK_IMPORTED_MODULE_19__["default"]);

vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(vue_touch__WEBPACK_IMPORTED_MODULE_20___default.a, {
  name: "v-touch"
});

vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(_utils_config__WEBPACK_IMPORTED_MODULE_21__["default"]);


var vueInstance = new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_9__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_17__["default"],
  mounted: function mounted() {
    // 启动
    (function () {
      axios__WEBPACK_IMPORTED_MODULE_23___default()({
        url: "http://10.221.29.4:8080/RemoteTokenServer?request=getToken&username=GZTT01&password=GZTT01123&clientid=ref.10.221.29.4&expiration=1440",
        method: 'post'
      }).then(function (res) {
        localStorage.setItem('map_token', encodeURI(res.data).replace('%0D%0A', ''));
      });
    })();
  },
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/login */ "./src/api/login.js");








vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(23), __webpack_require__.e(28), __webpack_require__.e(33), __webpack_require__.e(30), __webpack_require__.e(32), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, /*! ../views/homePage/index.vue */ "./src/views/homePage/index.vue"));
  },
  meta: {
    title: "首页"
  }
}, {
  path: "/login",
  name: "login",
  // component: () => import("../views/login/index.vue"),
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(98)]).then(__webpack_require__.bind(null, /*! ../views/login/indexMock.vue */ "./src/views/login/indexMock.vue"));
  },
  meta: {
    title: "登录"
  }
}, {
  path: "/loginSuccess",
  name: "loginSuccess",
  // component: () => import("../views/login/index.vue"),
  component: function component() {
    return __webpack_require__.e(/*! import() */ 152).then(__webpack_require__.bind(null, /*! ../views/login/success.vue */ "./src/views/login/success.vue"));
  },
  meta: {
    title: "登录"
  }
}, {
  path: "/mine",
  name: "mine",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! ../views/mine/index.vue */ "./src/views/mine/index.vue"));
  },
  meta: {
    title: "我的"
  }
}, {
  path: "/testDetail",
  name: "testDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(21), __webpack_require__.e(24), __webpack_require__.e(26), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ../components/common/test/chat.vue */ "./src/components/common/test/chat.vue"));
  },
  meta: {
    title: "智慧小助手",
    keepAlive: true,
    isBack: true
  }
}, {
  path: "/mine/subscribeComponents",
  name: "subscribeComponents",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, /*! ../views/mine/subscribeComponents/index.vue */ "./src/views/mine/subscribeComponents/index.vue"));
  },
  meta: {
    title: "组件订阅"
  }
}, {
  path: "/mine/systemSet",
  name: "systemSet",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(123)]).then(__webpack_require__.bind(null, /*! ../views/mine/systemSet/index.vue */ "./src/views/mine/systemSet/index.vue"));
  },
  meta: {
    title: "组件订阅"
  }
}, {
  path: "/airHomePage",
  name: "airHomePage",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(21), __webpack_require__.e(23), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/index.vue */ "./src/views/airHomePage/index.vue"));
  },
  meta: {
    title: "空气质量"
  }
}, {
  path: "/airHomePage/airAlarm",
  name: "airAlarm",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 67).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airAlarm/index.vue */ "./src/views/airHomePage/airAlarm/index.vue"));
  },
  meta: {
    title: "空气告警"
  }
}, {
  path: "/airHomePage/weatherForecast",
  name: "weatherForecast",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(11), __webpack_require__.e(58)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/weatherForecast/index.vue */ "./src/views/airHomePage/weatherForecast/index.vue"));
  },
  meta: {
    title: "空气质量预报"
  }
}, {
  path: "/airHomePage/airQualityRank",
  name: "airQualityRank",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airQualityRank/index.vue */ "./src/views/airHomePage/airQualityRank/index.vue"));
  },
  meta: {
    title: "空气质量排名"
  }
}, {
  path: "/airHomePage/airPollutionSort",
  name: "airPollutionSort",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 88).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airPollutionSort/index.vue */ "./src/views/airHomePage/airPollutionSort/index.vue"));
  },
  meta: {
    title: "涉气污染源"
  }
}, {
  path: "/airHomePage/airPollutionList",
  name: "airPollutionList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(84)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airPollutionList/index.vue */ "./src/views/airHomePage/airPollutionList/index.vue"));
  },
  meta: {
    title: "涉气污染源行业"
  }
}, {
  path: "/airHomePage/airExamineSiteList",
  name: "airExamineSiteList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airExamineSiteList/index.vue */ "./src/views/airHomePage/airExamineSiteList/index.vue"));
  },
  meta: {
    title: "空气质量站点数据"
  }
}, {
  path: "/airHomePage/airStationDetail",
  name: "airStationDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(12), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airStationDetail/index.vue */ "./src/views/airHomePage/airStationDetail/index.vue"));
  },
  meta: {
    title: "空气质量站点详情"
  }
}, {
  path: "/airHomePage/highVideo",
  name: "highVideo",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 101).then(__webpack_require__.bind(null, /*! ../views/airHomePage/highVideo/index.vue */ "./src/views/airHomePage/highVideo/index.vue"));
  },
  meta: {
    title: "空气质量高空视频"
  }
}, {
  path: "/airHomePage/airCalendarQuery",
  name: "airCalendarQuery",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(12), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airCalendarQuery/index.vue */ "./src/views/airHomePage/airCalendarQuery/index.vue"));
  },
  meta: {
    title: "空气质量日历"
  }
}, {
  path: "/airHomePage/airCalendarDetail",
  name: "airCalendarDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, /*! ../views/airHomePage/airCalendarDetail/index.vue */ "./src/views/airHomePage/airCalendarDetail/index.vue"));
  },
  meta: {
    title: "空气质量日历详情"
  }
}, {
  path: "/waterHomePage",
  name: "waterHomePage",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(14), __webpack_require__.e(19), __webpack_require__.e(27), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/index.vue */ "./src/views/waterHomePage/index.vue"));
  },
  meta: {
    title: "昆明市水环境"
  }
}, //国考/省考列表
{
  path: "/waterHomePage/examineSiteList",
  name: "examineSiteList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(11), __webpack_require__.e(17), __webpack_require__.e(59)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/examineSiteList/index.vue */ "./src/views/waterHomePage/examineSiteList/index.vue"));
  },
  meta: {
    title: "",
    keepAlive: true,
    //此组件需要被缓存
    isBack: false //用于判断上一个页面是哪个

  }
}, {
  path: "/waterHomePage/basinDetail",
  name: "basinDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(94)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/basinDetail/index.vue */ "./src/views/waterHomePage/basinDetail/index.vue"));
  },
  meta: {
    title: "流域水质"
  }
}, {
  path: "/waterHomePage/competitionGovern",
  name: "competitionGovern",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 133).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/competitionGovern/index.vue */ "./src/views/waterHomePage/competitionGovern/index.vue"));
  },
  meta: {
    title: "大竞赛水环境治理情况"
  }
}, {
  path: "/waterHomePage/competitionGovern/governDetail",
  name: "governDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 111).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/competitionGovern/governDetail.vue */ "./src/views/waterHomePage/competitionGovern/governDetail.vue"));
  },
  meta: {
    title: "大竞赛水环境治理情况详情"
  }
}, {
  path: "/waterHomePage/waterEnvRank",
  name: "waterEnvRank",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 136).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/waterEnvRank/index.vue */ "./src/views/waterHomePage/waterEnvRank/index.vue"));
  },
  meta: {
    title: "水环境年底排名"
  }
}, {
  path: "/waterHomePage/basinWaterEco",
  name: "basinWaterEco",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(110)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/basinWaterEco/index.vue */ "./src/views/waterHomePage/basinWaterEco/index.vue"));
  },
  meta: {
    title: "流域水生态"
  }
}, {
  path: "/waterHomePage/basinHomePage",
  name: "basinHomePage",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(14), __webpack_require__.e(27), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/basinHomePage/index.vue */ "./src/views/waterHomePage/basinHomePage/index.vue"));
  },
  meta: {
    title: "流域概况"
  }
}, {
  path: "/waterHomePage/basinRiver",
  name: "basinRiver",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(25), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/basinRiver/index.vue */ "./src/views/waterHomePage/basinRiver/index.vue"));
  },
  meta: {
    title: "流域河道情况"
  }
}, {
  path: "/waterHomePage/riverDetail",
  name: "riverDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(113)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/riverDetail/index.vue */ "./src/views/waterHomePage/riverDetail/index.vue"));
  },
  meta: {
    title: "河道列表"
  }
}, {
  path: "/waterHomePage/drinkDetail",
  name: "drinkDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(78)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/drinkDetail/index.vue */ "./src/views/waterHomePage/drinkDetail/index.vue"));
  },
  meta: {
    title: "饮用水列表"
  }
}, {
  path: "/waterHomePage/purPlant",
  name: "purPlant",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(134)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/purPlant/index.vue */ "./src/views/waterHomePage/purPlant/index.vue"));
  },
  meta: {
    title: "水质净化厂列表"
  }
}, {
  path: "/waterHomePage/purPlant/purPlantDetail",
  name: "purPlantDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(25), __webpack_require__.e(72)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/purPlant/purPlantDetail/index.vue */ "./src/views/waterHomePage/purPlant/purPlantDetail/index.vue"));
  },
  meta: {
    title: "水质净化厂详情"
  }
}, {
  path: "/waterHomePage/reservoir",
  name: "reservoir",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 135).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/reservoir/index.vue */ "./src/views/waterHomePage/reservoir/index.vue"));
  },
  meta: {
    title: "全市补水水库信息"
  }
}, {
  path: "/waterHomePage/reservoir/reservoirDetail",
  name: "reservoirDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(25), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/reservoir/reservoirDetail/index.vue */ "./src/views/waterHomePage/reservoir/reservoirDetail/index.vue"));
  },
  meta: {
    title: "全市补水水库详情"
  }
}, {
  path: "/waterHomePage/waterProject",
  name: "waterProject",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(137)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/waterProject/index.vue */ "./src/views/waterHomePage/waterProject/index.vue"));
  },
  meta: {
    title: "调水工程"
  }
}, {
  path: "/waterHomePage/waterFunctional",
  name: "waterFunctional",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(114)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/waterFunctional/index.vue */ "./src/views/waterHomePage/waterFunctional/index.vue"));
  },
  meta: {
    title: "水功能区划"
  }
}, {
  path: "/waterHomePage/involveWaterPollution",
  name: "involveWaterPollution",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(112)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/involveWaterPollution/index.vue */ "./src/views/waterHomePage/involveWaterPollution/index.vue"));
  },
  meta: {
    title: "涉水污染源"
  }
}, {
  path: "/waterHomePage/upstreamOutlet",
  name: "upstreamOutlet",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/upstreamOutlet/index.vue */ "./src/views/waterHomePage/upstreamOutlet/index.vue"));
  },
  meta: {
    title: "上游排口"
  }
}, {
  path: "/waterHomePage/upstreamOutlet/upstreamOutletDetail",
  name: "upstreamOutletDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/upstreamOutlet/upstreamOutletDetail/index.vue */ "./src/views/waterHomePage/upstreamOutlet/upstreamOutletDetail/index.vue"));
  },
  meta: {
    title: "上游排口"
  }
}, {
  path: "/waterHomePage/waterFunctional/functionalDetail",
  name: "functionalDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(100)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/waterFunctional/functionalDetail/index.vue */ "./src/views/waterHomePage/waterFunctional/functionalDetail/index.vue"));
  },
  meta: {
    title: "水功能区划详情"
  }
}, {
  path: "/waterHomePage/stationDetail",
  name: "stationDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(17), __webpack_require__.e(22), __webpack_require__.e(31), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/stationDetail/index.vue */ "./src/views/waterHomePage/stationDetail/index.vue"));
  },
  meta: {
    title: "站点详情"
  }
}, {
  path: "/waterHomePage/stationRiverDetail",
  name: "stationRiverDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(17), __webpack_require__.e(22), __webpack_require__.e(31), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/stationRiverDetail/index.vue */ "./src/views/waterHomePage/stationRiverDetail/index.vue"));
  },
  meta: {
    title: "河道详情详情"
  }
}, {
  path: "/waterHomePage/stationDetail/factorDetail",
  name: "factorDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(17), __webpack_require__.e(22), __webpack_require__.e(57)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/stationDetail/factorDetail/index.vue */ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue"));
  },
  meta: {
    title: "站点因子数据详情"
  }
}, // {
//   path: "/waterHomePage/stationDetail/purPlantDetail",
//   name: "purPlantDetail",
//   component: () => import("../views/waterHomePage/stationDetail/purPlantDetail/index.vue"),
//   meta: { title: "站点水质净化厂数据详情" },
// },
{
  path: "/waterHomePage/exceedWarning",
  name: "exceedWarning",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, /*! ../views/waterHomePage/exceedWarning/index.vue */ "./src/views/waterHomePage/exceedWarning/index.vue"));
  },
  meta: {
    title: "水环境超标告警"
  }
}, {
  path: "/feedback",
  name: "feedback",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 105).then(__webpack_require__.bind(null, /*! ../views/feedback/index.vue */ "./src/views/feedback/index.vue"));
  },
  meta: {
    title: "使用意见"
  }
}, {
  path: "/gis",
  name: "gis",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(69)]).then(__webpack_require__.bind(null, /*! ../views/gis/index.vue */ "./src/views/gis/index.vue"));
  },
  meta: {
    title: "gis"
  }
}, {
  path: "/gis/waterManageMap",
  name: "waterManageMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(147)]).then(__webpack_require__.bind(null, /*! ../views/gis/waterManageMap.vue */ "./src/views/gis/waterManageMap.vue"));
  },
  meta: {
    title: "水环境"
  }
}, {
  path: "/gis/branch",
  name: "branch",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(121)]).then(__webpack_require__.bind(null, /*! ../views/gis/branch.vue */ "./src/views/gis/branch.vue"));
  },
  meta: {
    title: "水环境"
  }
}, {
  path: "/gis/gisPage",
  name: "gisPage",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(141)]).then(__webpack_require__.bind(null, /*! ../views/gis/gisPage.vue */ "./src/views/gis/gisPage.vue"));
  },
  meta: {
    title: "水环境"
  }
}, {
  path: "/gis/surroundMap",
  name: "surroundMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(29), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, /*! ../views/gis/surroundMap.vue */ "./src/views/gis/surroundMap.vue"));
  },
  meta: {
    title: "周边地图"
  }
}, {
  path: "/gis/purPlantMap",
  name: "purPlantMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(151)]).then(__webpack_require__.bind(null, /*! ../views/gis/purPlantMap.vue */ "./src/views/gis/purPlantMap.vue"));
  },
  meta: {
    title: "水质净化厂"
  }
}, {
  path: "/gis/locationMap",
  name: "locationMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(142)]).then(__webpack_require__.bind(null, /*! ../views/gis/locationMap.vue */ "./src/views/gis/locationMap.vue"));
  },
  meta: {
    title: "污染源定位"
  }
}, {
  path: "/gis/airLocationMap",
  name: "airLocationMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(139)]).then(__webpack_require__.bind(null, /*! ../views/gis/airLocationMap.vue */ "./src/views/gis/airLocationMap.vue"));
  },
  meta: {
    title: "空气站点"
  }
}, {
  path: "/gis/airWeatherMap",
  name: "airWeatherMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(140)]).then(__webpack_require__.bind(null, /*! ../views/gis/airWeatherMap.vue */ "./src/views/gis/airWeatherMap.vue"));
  },
  meta: {
    title: "空气周边气象站"
  }
}, {
  path: "/gis/involveAirPollutionMap",
  name: "involveAirPollutionMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, /*! ../views/gis/involveAirPollutionMap.vue */ "./src/views/gis/involveAirPollutionMap.vue"));
  },
  meta: {
    title: "点位周边污染源"
  }
}, {
  path: "/gis/rangeMap",
  name: "rangeMap",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(122)]).then(__webpack_require__.bind(null, /*! ../views/gis/rangeMap.vue */ "./src/views/gis/rangeMap.vue"));
  },
  meta: {
    title: "地图渲染"
  }
}, {
  path: "/notice",
  name: "notice",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 124).then(__webpack_require__.bind(null, /*! ../views/notice/index.vue */ "./src/views/notice/index.vue"));
  },
  meta: {
    title: "通知公告"
  }
}, {
  path: "/notice/messageCenter",
  name: "messageCenter",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 106).then(__webpack_require__.bind(null, /*! ../views/notice/messageCenter.vue */ "./src/views/notice/messageCenter.vue"));
  },
  meta: {
    title: "消息中心"
  }
}, {
  path: "/feedbackResult",
  name: "feedbackResult",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 97).then(__webpack_require__.bind(null, /*! ../views/feedback/feedbackResult.vue */ "./src/views/feedback/feedbackResult.vue"));
  }
}, {
  path: "/CaseDetails",
  name: "CaseDetails",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(102)]).then(__webpack_require__.bind(null, /*! ../views/case/index.vue */ "./src/views/case/index.vue"));
  }
}, {
  path: "/search",
  name: "search",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(21), __webpack_require__.e(24), __webpack_require__.e(26), __webpack_require__.e(29), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, /*! ../views/search/index.vue */ "./src/views/search/index.vue"));
  },
  meta: {
    title: "搜索"
  }
}, {
  path: "/publicOpinion",
  name: "publicOpinion",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(32), __webpack_require__.e(155)]).then(__webpack_require__.bind(null, /*! ../views/publicOpinion/index.vue */ "./src/views/publicOpinion/index.vue"));
  },
  meta: {
    title: "舆情统计"
  }
}, {
  path: "/pollution/wholeCityPollution",
  name: "wholeCityPollution",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(18), __webpack_require__.e(20), __webpack_require__.e(33), __webpack_require__.e(130)]).then(__webpack_require__.bind(null, /*! ../views/pollution/wholeCityPollution/index.vue */ "./src/views/pollution/wholeCityPollution/index.vue"));
  },
  meta: {
    title: "全市污染源"
  }
}, {
  path: "/pollution/pollutionStatisList",
  name: "pollutionStatisList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(129)]).then(__webpack_require__.bind(null, /*! ../views/pollution/pollutionStatisList/index.vue */ "./src/views/pollution/pollutionStatisList/index.vue"));
  },
  meta: {
    title: "污染源列表"
  }
}, // 企业环境健康档案（许可证、限期整改、执法检查、自行监测、执法监测、行政处罚）列表
{
  path: "/pollution/pollutionList",
  name: "pollutionList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(146)]).then(__webpack_require__.bind(null, /*! ../views/pollution/pollutionList/index.vue */ "./src/views/pollution/pollutionList/index.vue"));
  },
  meta: {
    title: "企业环境健康档案"
  }
}, // 联单转移列表、辐射安全下面各级别类型点击页面
{
  path: "/pollution/pollutionLineList",
  name: "pollutionLineList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, /*! ../views/pollution/pollutionLineList/index.vue */ "./src/views/pollution/pollutionLineList/index.vue"));
  },
  meta: {
    title: "企业环境健康档案"
  }
}, //首页-、环评项目、备案项目、自验收列表、尾矿库、行政处罚列表
// 辐射安全总页面
// 在线监控（在线监控、重点监控、非重点监控、医院、污水处理厂）
//二次污普（工业源、畜牧养殖场、生活源、集中式污水处理措施）
//危险废物、 环保投诉
{
  path: "/pollution/pollutionPunishList",
  name: "pollutionPunishList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! ../views/pollution/pollutionPunishList/index.vue */ "./src/views/pollution/pollutionPunishList/index.vue"));
  },
  meta: {
    title: ""
  }
}, {
  path: "/pollution/lawExamineList",
  name: "lawExamineList",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(82)]).then(__webpack_require__.bind(null, /*! ../views/pollution/lawExamineList/index.vue */ "./src/views/pollution/lawExamineList/index.vue"));
  },
  meta: {
    title: "执法检查"
  }
}, {
  path: "/pollution/detail/buildFilingsDetail",
  name: "buildFilingsDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/buildFilingsDetail.vue */ "./src/views/pollution/detail/buildFilingsDetail.vue"));
  },
  meta: {
    title: "备案详情"
  }
}, {
  path: "/pollution/detail/buildProjectInfo",
  name: "buildProjectInfo",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(92)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/buildProjectInfo.vue */ "./src/views/pollution/detail/buildProjectInfo.vue"));
  },
  meta: {
    title: "建设项目详情"
  }
}, {
  path: "/pollution/detail/buildSelfaccepttInfo",
  name: "buildSelfaccepttInfo",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(126)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/buildSelfaccepttInfo.vue */ "./src/views/pollution/detail/buildSelfaccepttInfo.vue"));
  },
  meta: {
    title: "建设自验收详情"
  }
}, {
  path: "/pollution/detail/codingReasonDetail",
  name: "codingReasonDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 99).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/codingReasonDetail.vue */ "./src/views/pollution/detail/codingReasonDetail.vue"));
  },
  meta: {
    title: "赋码原因详情"
  }
}, {
  path: "/pollution/detail/companyBaseInfo",
  name: "companyBaseInfo",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(148)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/companyBaseInfo.vue */ "./src/views/pollution/detail/companyBaseInfo.vue"));
  },
  meta: {
    title: "企业基本信息"
  }
}, {
  path: "/pollution/detail/companyDetail",
  name: "companyDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/companyDetail.vue */ "./src/views/pollution/detail/companyDetail.vue"));
  },
  meta: {
    title: "污染源-企业详情"
  }
}, {
  path: "/pollution/detail/complaintDetail",
  name: "complaintDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(143)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/complaintDetail.vue */ "./src/views/pollution/detail/complaintDetail.vue"));
  },
  meta: {
    title: "环保投诉详情"
  }
}, {
  path: "/pollution/detail/jcpkDetail",
  name: "jcpkDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/jcpkDetail.vue */ "./src/views/pollution/detail/jcpkDetail.vue"));
  },
  meta: {
    title: "在线监控企业排口详情"
  }
}, {
  path: "/pollution/detail/judgeDetail",
  name: "judgeDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(127)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/judgeDetail.vue */ "./src/views/pollution/detail/judgeDetail.vue"));
  },
  meta: {
    title: "研判详情"
  }
}, {
  path: "/pollution/detail/lawCheckDetail",
  name: "lawCheckDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(107)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/lawCheckDetail.vue */ "./src/views/pollution/detail/lawCheckDetail.vue"));
  },
  meta: {
    title: "执法检查详情"
  }
}, {
  path: "/pollution/detail/ldDetail",
  name: "ldDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/ldDetail.vue */ "./src/views/pollution/detail/ldDetail.vue"));
  },
  meta: {
    title: "联单详情"
  }
}, {
  path: "/pollution/detail/licenceDetail",
  name: "licenceDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/licenceDetail.vue */ "./src/views/pollution/detail/licenceDetail.vue"));
  },
  meta: {
    title: "许可证详情"
  }
}, {
  path: "/pollution/detail/penaltyDetail",
  name: "penaltyDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/penaltyDetail.vue */ "./src/views/pollution/detail/penaltyDetail.vue"));
  },
  meta: {
    title: "行政处罚详情"
  }
}, {
  path: "/pollution/detail/portInfoDetail",
  name: "portInfoDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/portInfoDetail.vue */ "./src/views/pollution/detail/portInfoDetail.vue"));
  },
  meta: {
    title: "站点详情"
  }
}, {
  path: "/pollution/detail/registeDetail",
  name: "registeDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16), __webpack_require__.e(149)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/registeDetail.vue */ "./src/views/pollution/detail/registeDetail.vue"));
  },
  meta: {
    title: "登记管理信息详情"
  }
}, {
  path: "/pollution/detail/registerManage",
  name: "registerManage",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16), __webpack_require__.e(154)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/registerManage.vue */ "./src/views/pollution/detail/registerManage.vue"));
  },
  meta: {
    title: "登记管理企业详情"
  }
}, {
  path: "/pollution/detail/safeDetail",
  name: "safeDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(150)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/safeDetail.vue */ "./src/views/pollution/detail/safeDetail.vue"));
  },
  meta: {
    title: "辐射安全详情"
  }
}, {
  path: "/pollution/detail/upervisionDetail",
  name: "upervisionDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(81)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/upervisionDetail.vue */ "./src/views/pollution/detail/upervisionDetail.vue"));
  },
  meta: {
    title: "污染源自动监测督办单详情"
  }
}, {
  path: "/pollution/detail/wasteDetail",
  name: "wasteDetail",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/wasteDetail.vue */ "./src/views/pollution/detail/wasteDetail.vue"));
  },
  meta: {
    title: "危废详情"
  }
}, {
  path: "/pollution/detail/industrySource",
  name: "industrySource",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(145)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/industrySource.vue */ "./src/views/pollution/detail/industrySource.vue"));
  },
  meta: {
    title: "工业源企业详情"
  }
}, {
  path: "/pollution/detail/handleFacility",
  name: "handleFacility",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(144)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/handleFacility.vue */ "./src/views/pollution/detail/handleFacility.vue"));
  },
  meta: {
    title: "集中式污染处理设施"
  }
}, {
  path: "/pollution/detail/exceedDes",
  name: "exceedDes",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(93)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/exceedDes.vue */ "./src/views/pollution/detail/exceedDes.vue"));
  },
  meta: {
    title: "企业超标详情"
  }
}, {
  path: "/pollution/detail/offlineDes",
  name: "offlineDes",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(108)]).then(__webpack_require__.bind(null, /*! ../views/pollution/detail/offlineDes.vue */ "./src/views/pollution/detail/offlineDes.vue"));
  },
  meta: {
    title: "企业掉线详情"
  }
}, {
  path: "/caseCheck",
  name: "caseCheck",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 77).then(__webpack_require__.bind(null, /*! ../views/caseCheck/index.vue */ "./src/views/caseCheck/index.vue"));
  },
  meta: {
    title: "案件审批"
  }
}, {
  path: "/caseCheck/caseList",
  name: "caseList",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! ../views/caseCheck/caseList/index.vue */ "./src/views/caseCheck/caseList/index.vue"));
  },
  meta: {
    title: "案件审批列表"
  }
}, {
  path: "/caseCheck/caseDetail",
  name: "caseDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ../views/caseCheck/caseDetail/index.vue */ "./src/views/caseCheck/caseDetail/index.vue"));
  },
  meta: {
    title: "案件审批详情"
  }
}, {
  path: "/supervision",
  name: "supervision",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! ../views/supervision/index.vue */ "./src/views/supervision/index.vue"));
  },
  meta: {
    title: "环保督察"
  }
}, {
  path: "/supervision/superDetail",
  name: "superDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 131).then(__webpack_require__.bind(null, /*! ../views/supervision/superDetail/index.vue */ "./src/views/supervision/superDetail/index.vue"));
  },
  meta: {
    title: "环保督察详情"
  }
}, {
  path: "/supervision/provinceDetail",
  name: "provinceDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 109).then(__webpack_require__.bind(null, /*! ../views/supervision/provinceDetail/index.vue */ "./src/views/supervision/provinceDetail/index.vue"));
  },
  meta: {
    title: "环保督察详情"
  }
}, {
  path: "/inHand",
  name: "inHand",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ../views/inHand/index.vue */ "./src/views/inHand/index.vue"));
  },
  meta: {
    title: "待办事项"
  }
}, {
  path: "/inHand/inHandApply",
  name: "inHandApply",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 64).then(__webpack_require__.bind(null, /*! ../views/inHand/inHandApply/index.vue */ "./src/views/inHand/inHandApply/index.vue"));
  },
  meta: {
    title: "待办应用"
  }
}, {
  path: "/inHand/inHandDetail",
  name: "inHandDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ../views/inHand/inHandDetail/index.vue */ "./src/views/inHand/inHandDetail/index.vue"));
  },
  meta: {
    title: "待办详情"
  }
}, {
  path: "/environmentCode",
  name: "environmentCode",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(24), __webpack_require__.e(30), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, /*! ../views/environmentCode/index.vue */ "./src/views/environmentCode/index.vue"));
  },
  meta: {
    title: "环保码"
  }
}, {
  path: "/environmentCode/codeToCheck",
  name: "codeToCheck",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 96).then(__webpack_require__.bind(null, /*! ../views/environmentCode/codeToCheck/index.vue */ "./src/views/environmentCode/codeToCheck/index.vue"));
  },
  meta: {
    title: "待审核列表"
  }
}, {
  path: "/environmentCode/codeStatis",
  name: "codeStatis",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(120)]).then(__webpack_require__.bind(null, /*! ../views/environmentCode/codeStatis/index.vue */ "./src/views/environmentCode/codeStatis/index.vue"));
  },
  meta: {
    title: "环保码统计报表"
  }
}, {
  path: "/environmentCode/codeRules",
  name: "codeRules",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! ../views/environmentCode/codeRules/index.vue */ "./src/views/environmentCode/codeRules/index.vue"));
  },
  meta: {
    title: "赋码规则"
  }
}, {
  path: "/environmentCode/approval",
  name: "approval",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 119).then(__webpack_require__.bind(null, /*! ../views/environmentCode/approval/index.vue */ "./src/views/environmentCode/approval/index.vue"));
  },
  meta: {
    title: "消息审核"
  }
}, {
  path: "/environmentCode/gradeControl",
  name: "gradeControl",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 104).then(__webpack_require__.bind(null, /*! ../views/environmentCode/gradeControl/index.vue */ "./src/views/environmentCode/gradeControl/index.vue"));
  },
  meta: {
    title: "分级管控"
  }
}, {
  path: "/environmentCode/mapMng",
  name: "mapMng",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(8), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ../views/environmentCode/mapMng/index.vue */ "./src/views/environmentCode/mapMng/index.vue"));
  },
  meta: {
    title: "地图"
  }
}, {
  path: "/environmentCode/evaluate",
  name: "evaluate",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(18), __webpack_require__.e(23), __webpack_require__.e(28), __webpack_require__.e(85)]).then(__webpack_require__.bind(null, /*! ../views/environmentCode/evaluate/index.vue */ "./src/views/environmentCode/evaluate/index.vue"));
  },
  meta: {
    title: "动态评价"
  }
}, {
  path: "/commonFunction",
  name: "commonFunction",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(95)]).then(__webpack_require__.bind(null, /*! ../views/commonFunction/index.vue */ "./src/views/commonFunction/index.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/envInspectors",
  name: "envInspectors",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 91).then(__webpack_require__.bind(null, /*! ../views/envInspectors/index.vue */ "./src/views/envInspectors/index.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/correctionTask",
  name: "correctionTask",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 68).then(__webpack_require__.bind(null, /*! ../views/correctionTask/index.vue */ "./src/views/correctionTask/index.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/correctionTaskDetail",
  name: "correctionTaskDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 138).then(__webpack_require__.bind(null, /*! ../views/correctionTask/components/correctionTaskDetail.vue */ "./src/views/correctionTask/components/correctionTaskDetail.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/comList",
  name: "comList",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 116).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/comList.vue */ "./src/views/envInspectors/components/comList.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/completionStatus",
  name: "completionStatus",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 117).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/completionStatus.vue */ "./src/views/envInspectors/components/completionStatus.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/acceptanceStatus",
  name: "acceptanceStatus",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 115).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/acceptanceStatus.vue */ "./src/views/envInspectors/components/acceptanceStatus.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/importantStatus",
  name: "importantStatus",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 118).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/importantStatus.vue */ "./src/views/envInspectors/components/importantStatus.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/searchList",
  name: "searchList",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 90).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/searchList.vue */ "./src/views/envInspectors/components/searchList.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/inspectorDetail",
  name: "inspectorDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 103).then(__webpack_require__.bind(null, /*! ../views/envInspectors/components/inspectorDetail.vue */ "./src/views/envInspectors/components/inspectorDetail.vue"));
  },
  meta: {
    title: "常用功能"
  }
}, {
  path: "/task",
  name: "task",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 83).then(__webpack_require__.bind(null, /*! ../views/task/index.vue */ "./src/views/task/index.vue"));
  }
}, {
  path: "/task/detail",
  name: "taskDetail",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 76).then(__webpack_require__.bind(null, /*! ../views/task/taskDetail.vue */ "./src/views/task/taskDetail.vue"));
  }
}, {
  path: "/task/add",
  name: "taskAdd",
  component: function component() {
    return __webpack_require__.e(/*! import() */ 132).then(__webpack_require__.bind(null, /*! ../views/task/taskAdd.vue */ "./src/views/task/taskAdd.vue"));
  }
}, {
  path: "/pdfH5",
  name: "pdfH5",
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! ../components/common/pdfH5.vue */ "./src/components/common/pdfH5.vue"));
  },
  props: true
}];

var router = new vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]({
  mode: "hash",
  // mode: "history",
  base: "",
  routes: routes
}); //引入头部进度条 进度环显示隐藏

nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.configure({
  showSpinner: false
});
router.beforeEach(function (to, from, next) {
  //引入头部进度条 显示进度条
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start(); //如果不是登录页并且没有用户信息就跳转到登录页面
  // console.log('是否过期',isExpire(store.state.user.time, store.state.user.expire));

  /*if (
    to.path !== "/login" &&
    (store.state.user.user === "" ||
      isExpire(store.state.user.time, store.state.user.expire))
  ) {
    next({ path: "/login", replace: true });
  } else {
    next();
  }*/

  var info = {
    // param: to.params,
    param: to.query,
    route: to.name,
    system: "掌上环保"
  };
  Object(_api_login__WEBPACK_IMPORTED_MODULE_8__["getPageLog"])(info).then(function (res) {// console.log(res)
  });
  next(); //引入头部进度条 完成进度条

  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
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
/* harmony import */ var _api_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/login.js */ "./src/api/login.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router */ "./src/router/index.js");






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
    unUserPassLogin: function unUserPassLogin(state, uuid) {
      Object(_api_login_js__WEBPACK_IMPORTED_MODULE_4__["phoneCodeLogin"])({
        appid: uuid + localStorage.getItem('phone')
      }).then(function (res) {
        if (res.code === '0000') {
          localStorage.setItem("token", res.data.authorization);
          state.commit('setToken', res.data.authorization);
          window.location.reload();
        } else {
          _router__WEBPACK_IMPORTED_MODULE_5__["default"].push({
            path: '/login'
          });
        }
      });
    }
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

/***/ "./src/style/polluter.scss":
/*!*********************************!*\
  !*** ./src/style/polluter.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../node_modules/postcss-loader/src??ref--9-oneOf-3-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./polluter.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/polluter.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("27f4b1ea", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/utils/FileUtils.js":
/*!********************************!*\
  !*** ./src/utils/FileUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_28__);






























/***
 * FileUtils for cordova Android use only,
 * and this is born for replacing file-transfer plugin.
 * If you want to specify the storage location, you need to install cordova-plugin-file
 * and use it, then see how it works.
 *
 * @author M4
 * @licence MIT
 * @version 1.1
 * @copyright M4
 * 2018-10-10
 */

/***
 * @type {Object}
 */
var FileUtils = {};
/***
 * Downloader Object
 * @constructor
 * @param {object} option: set option for downloader
 * @property {string} url: download url
 * @property {string} filename: filename with type, e.g. "who killed me.doc"
 * @property {string} saveLocation: android save location
 * @property {boolean} withCredential: set xhr.withCredential
 * @property {function} onProgress
 * @property {function} onSuccess
 * @property {function} onFail
 * @property {function} onCancel
 */

FileUtils.Downloader = function (option) {
  if (!option) {
    option = {};
  }

  this.url = option.url;
  this.filename = option.filename;
  this.saveLocation = option.saveLocation;
  this.withCredential = option.withCredential || true;

  this.onProgress = option.onProgress || function (progressEvent) {};

  this.onSuccess = option.onSuccess || function (fileEntry) {};

  this.onFail = option.onFail || function (errorCode) {};

  this.onCancel = option.onCancel || function () {}; //TODO params is not used in current version, please add params into url


  this.params = option.params || {}; //error code

  this.error = {};
  this.error.CANCELED = 0;
  this.error.SUCCESS = 1;
  this.error.NO_URL = -1;
  this.error.NO_FILENAME = -2;
  this.error.FILE_SYSTEM_ERROR = -3;
  this.error.LOCAL_FILE_SYSTEM_ERROR = -4;
  this.error.XHR_STATUS_ERROR = -5;
  this.error.SAVE_FILE_ERROR = -6;
  this.error.WRITE_FILE_ERROR = -7;
};

FileUtils.Downloader.prototype = {
  url: "",
  filename: "",
  saveLocation: "",
  withCredential: true,
  onProgress: function onProgress(progressEvent) {},
  onSuccess: function onSuccess(fileEntry) {},
  onFail: function onFail(errorCode) {},
  onCancel: function onCancel() {},
  xhr: null,
  params: {},
  error: {},
  fileType: "",
  mimeType: ""
};
/**
 * destroy
 * @method
 */

FileUtils.Downloader.prototype.destroy = function () {
  delete this;
  return true;
};
/**
 * cancel
 * @method
 */


FileUtils.Downloader.prototype.cancel = function () {
  if (this.xhr) {
    this.xhr.abort();
  }

  this.onCancel();
  this.destroy();
};
/**
 * beforeDownload
 * @method
 * data verifying before download start
 * @return {boolean}
 */


FileUtils.Downloader.prototype.beforeDownload = function () {
  /*
    Some option must be specified!
   */
  if (!this.url) {
    console.warn("url is undefined!\n e.g.\n var downloader = new FileUtils.Downloader({url: '...'});\n or\n downloader.url = '...' ");
    this.onFail(-1);
    return false;
  }

  if (!this.filename) {
    console.warn("filename is undefined!\n e.g.\n var downloader = new FileUtils.Downloader({filename: '...'});\n or\n downloader.filename = '...' ");
    this.onFail(-2);
    return false;
  }
  /*
    Trying to find location to save file when saveLocation is not specified:
    if cordova-plugin-file installed, save into externalApplicationStorageDirectory,
    if not, try to save into /root.
   */


  if (!this.saveLocation) {
    try {
      this.saveLocation = cordova.file.externalApplicationStorageDirectory;
    } catch (e) {
      console.log("cordova-plugin-file plugin is not installed, try to save into /root");
      this.saveLocation = "";
      this.useFileSystemLocation = true;
    }
  }
  /*
    Trying split file type and get MIME-type
   */


  this.fileType = this.filename.substring(this.filename.lastIndexOf(".") + 1);
  this.mimeType = FileUtils.getMIMEType(this.fileType);

  if (!this.fileType) {
    console.log("fileType is not defined, please check your filename:" + this.filename);
  } else if (this.mimeType === "") {
    console.log("MIME-type is not defined, please check your fileType:" + this.fileType);
  }

  this.filename = decodeURI(this.filename);
  this.url = decodeURI(this.url);
  return true;
};
/**
 * download
 * @method
 * start download
 * */


FileUtils.Downloader.prototype.download = function () {
  var _this = this; // verify failed


  if (!this.beforeDownload()) {
    this.destroy();
    return;
  } // start


  if (this.useFileSystemLocation) {
    try {
      window.requestFileSystem(window.PERSISTENT, 0, function (fileSystem) {
        _this.getFile(fileSystem.root);
      }, function (error) {
        console.error('Error requestFileSystem:' + error.toString());

        _this.onFail(-3);
      });
    } catch (error) {
      _this.getFile();

      console.error('Error:' + error.toString());

      _this.onFail(-3);
    }
  } else {
    window.resolveLocalFileSystemURL(this.saveLocation, function (saveEntry) {
      _this.getFile(saveEntry);
    }, function (error) {
      console.error('Error resolveLocalFileSystemURL:' + error.toString());

      _this.onFail(-4);
    });
  }
};
/**
 * getFile
 * @param {Entry} saveEntry
 */


FileUtils.Downloader.prototype.getFile = function (saveEntry) {
  var _this = this;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = _this.withCredential;
  xhr.open('GET', _this.url, true);
  xhr.responseType = 'blob'; //return xhr instance

  _this.xhr = xhr; //onProgress

  xhr.onprogress = function (progressEvent) {
    _this.onProgress(progressEvent);
  }; //onLoaded


  xhr.onload = function () {
    if (this.status === 200) {
      var blob = new Blob([this.response], {
        type: _this.mimeType
      });

      _this.saveFile(saveEntry, blob);
    } else {
      console.error("download failed, xhr status code:" + this.status);

      _this.onFail(-5);
    }
  };

  xhr.onabort = function () {
    _this.onCancel();
  };

  xhr.send();
};
/**
 * saveFile
 * @param saveEntry
 * @param {blob} fileData
 * create File object in file system
 * */


FileUtils.Downloader.prototype.saveFile = function (saveEntry, fileData) {
  var _this = this;

  saveEntry.getFile(_this.filename, {
    create: true,
    exclusive: false
  }, function (fileEntry) {
    _this.writeFile(fileEntry, fileData);
  }, function (err) {
    console.error('Error when saveFile:' + err.toString());

    _this.onFail(-6);
  });
};
/**
 * writeFile
 * @param fileEntry
 * @param fileData
 **/


FileUtils.Downloader.prototype.writeFile = function (fileEntry, fileData) {
  var _this = this; //updated
  //large file will cause out of memory crash
  //so here to slice file data into 4mb blocks


  var bytesWritten = 0,
      BLOCK_SIZE = 4 * 1024 * 1024,
      writeBlock = function writeBlock(_fileWriter, callback) {
    //calc each block to write
    var blockSize = Math.min(BLOCK_SIZE, fileData.size - bytesWritten),
        block = fileData.slice(bytesWritten, bytesWritten + blockSize);

    _fileWriter.write(block);

    bytesWritten += blockSize; //finish writing?

    _fileWriter.onwrite = function () {
      if (bytesWritten < fileData.size) {
        writeBlock(_fileWriter, callback);
      } else {
        callback();

        _this.onSuccess(fileEntry);
      }
    };
  }; // Create a FileWriter object for our FileEntry (log.txt).


  fileEntry.createWriter(function (fileWriter) {
    // fileWriter.onwriteend = function() {
    //   console.log("download success!");
    //   _this.onSuccess(fileEntry);
    // };
    //
    // fileWriter.onerror = function(e) {
    //   console.error("Failed file write: " + e.toString());
    //   _this.onFail(-7);
    // };
    // fileWriter.write(fileData);
    writeBlock(fileWriter, function () {
      console.log("write end!"); // _this.onSuccess(fileEntry);
    });
  });
};
/***
 * Uploader Object
 * @constructor
 * @param option
 * @property url: your request url
 * @property fileUri: the uri of file, e.g. 'file:///storage/emulated/0/well done.txt'
 * @property fileAlias: the field name of file, default 'file'
 * @property params: post data, work as ajax's data
 * @property onProgress
 * @property onSuccess
 * @property onFail
 * @property onCancel
 */


FileUtils.Uploader = function (option) {
  if (!option) {
    option = {};
  }

  this.url = option.url;
  this.fileUri = option.fileUri;
  this.fileAlias = option.fileAlias || "file";
  this.params = option.params;

  this.onProgress = option.onProgress || function (progressEvent) {};

  this.onSuccess = option.onSuccess || function (result) {};

  this.onFail = option.onFail || function (errorCode) {};

  this.onCancel = option.onCancel || function () {};
};

FileUtils.Uploader.prototype = {
  url: "",
  fileUri: "",
  fileAlias: "",
  params: {},
  onProgress: null,
  onSuccess: null,
  onFail: null,
  onCancel: null,
  xhr: null
};
/**
 * destroy
 * @method
 */

FileUtils.Uploader.prototype.destroy = function () {
  delete this;
  return true;
};
/**
 * beforeUpload
 * @return {boolean}
 */


FileUtils.Uploader.prototype.beforeUpload = function () {
  /*
    Some option must be specified!
   */
  if (!this.url) {
    console.warn("url is undefined!\n e.g.\n var uploader = new FileUtils.Uploader({url: '...'});\n or\n uploader.url = '...' ");
    this.onFail(-1);
    return false;
  }

  if (!this.fileUri) {
    console.warn("filename is undefined!\n e.g.\n var uploader = new FileUtils.Uploader({fileUri: '...'});\n or\n uploader.fileUri = '...' ");
    console.warn("make sure using cordova-plugin-file to get your file uri");
    this.onFail(-2);
    return false;
  }

  return true;
};
/**
 * upload
 * @method
 */


FileUtils.Uploader.prototype.upload = function () {
  var _this = this;

  if (!_this.beforeUpload()) {
    _this.destroy();

    return;
  }
  /*
      Try to transfer file uri into file entry object
      this might fail because of not using cordova-plugin-file, or launched in browser
   */


  try {
    window.resolveLocalFileSystemURL(_this.fileUri, function (fileEntry) {
      _this.getFile(fileEntry);
    });
  } catch (e) {
    console.error("file system error, please check if cordova-plugin-file has been installed");
    console.error(e);
  }
};
/**
 * getFile
 * @param fileEntry
 */


FileUtils.Uploader.prototype.getFile = function (fileEntry) {
  var _this = this;
  /*
      You also need a FileEntry object to read an existing file.
      Use the file property of FileEntry to get the file reference,
      and then create a new FileReader object.
      You can use methods like readAsText to start the read operation.
      When the read operation is complete,
      this.result stores the result of the read operation.
   */


  try {
    fileEntry.file(function (file) {
      //file info
      console.log(file);
      var fileName = file.name;

      if (fileName === "content") {
        var localURL = decodeURI(file.localURL);
        fileName = localURL.substring(localURL.lastIndexOf("/") + 1);

        if (fileName.indexOf("%2F") !== -1) {
          fileName = fileName.substring(fileName.lastIndexOf("%2F") + 3);
        }

        var type = FileUtils.getFileType(file.type);

        if (type && fileName.indexOf("." + type) === -1) {
          fileName += "." + type;
        }
      }

      var fileLength = file.size;
      var mimeType = file.type; // var fileType = fileName.substring(fileName.lastIndexOf(".") + 1);
      // var mimeType = FileUtils.getMIMEType(fileType);
      //read file

      var reader = new FileReader();

      reader.onloadend = function () {
        var blob = new Blob([new Uint8Array(this.result)], {
          type: mimeType
        });

        _this.post(blob, fileName);
      };

      reader.readAsArrayBuffer(file);
    });
  } catch (e) {
    console.warn(e);
  }
};
/**
 * post
 * @param {Blob} blob
 * @param fileName
 */


FileUtils.Uploader.prototype.post = function (blob, fileName) {
  var _this = this;
  /*
      generate formData
      In this case, any value in _this.params should be string/number etc.
      So, if there is any JSON value, just use JSON.stringify()
      e.g.
      var params = {
          searchField: JSON.stringify( {name: 'Octopath Traveller', type: 'game'} ),
          id: 8
      }
   */


  var formData = new FormData();

  for (var i in _this.params) {
    formData.append(i, _this.params[i]);
  }

  formData.append(_this.fileAlias, blob, fileName);
  /*
      use xhr post FormData
      and return xhr instance.
   */

  var xhr = new XMLHttpRequest();
  _this.xhr = xhr;
  xhr.open("POST", _this.url, true); // xhr.setRequestHeader("Content-Type","multipart/form-data");
  // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  xhr.overrideMimeType("application/octet-stream");

  xhr.onload = function (event) {
    console.log("upload finished:" + fileName);

    try {
      var response = event.currentTarget.response;
      console.log(response);

      _this.onSuccess(JSON.parse(response));
    } catch (e) {
      _this.onFail(event);
    }
  };

  xhr.onprogress = function (progressEvent) {
    _this.onProgress(progressEvent);
  };

  xhr.onerror = function (e) {
    console.error(e);

    _this.onFail(-8, e);
  };

  xhr.send(formData);
};
/**
 * getMIMEType
 * @param fileType
 */


FileUtils.getMIMEType = function (fileType) {
  var json = {
    apk: "application/vnd.android.package-archive",
    avi: "video/x-msvideo",
    bin: "application/octet-stream",
    bmp: "image/bmp",
    class: "application/octet-stream",
    css: "text/css",
    dir: "application/x-director",
    dll: "application/x-msdownload",
    doc: "application/msword",
    docx: "application/msword",
    exe: "application/octet-stream",
    gif: "image/gif",
    gtar: "application/x-gtar",
    gz: "application/x-gzip",
    htm: "text/html",
    html: "text/html",
    ico: "image/x-icon",
    jpe: "image/jpeg",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    js: "application/x-javascript",
    m3u: "audio/x-mpegurl",
    mov: "video/quicktime",
    mp3: "audio/mpeg",
    mpeg: "video/mpeg",
    pdf: "application/pdf",
    png: "image/png",
    ppt: "application/vnd.ms-powerpoint",
    rar: "application/x-rar-compressed",
    svg: "image/svg+xml",
    swf: "application/x-shockwave-flash",
    tar: "application/x-tar",
    tgz: "application/x-compressed",
    tif: "image/tiff",
    tiff: "image/tiff",
    txt: "text/plain",
    wav: "audio/x-wav",
    wps: "application/vnd.ms-works",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.ms-excel",
    zip: "application/zip"
  };
  return json[fileType.toLowerCase()] || "";
};

FileUtils.getFileType = function (mimeType) {
  var json = {
    apk: "application/vnd.android.package-archive",
    avi: "video/x-msvideo",
    bin: "application/octet-stream",
    bmp: "image/bmp",
    class: "application/octet-stream",
    css: "text/css",
    dir: "application/x-director",
    dll: "application/x-msdownload",
    doc: "application/msword",
    docx: "application/msword",
    exe: "application/octet-stream",
    gif: "image/gif",
    gtar: "application/x-gtar",
    gz: "application/x-gzip",
    htm: "text/html",
    html: "text/html",
    ico: "image/x-icon",
    jpe: "image/jpeg",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    js: "application/x-javascript",
    m3u: "audio/x-mpegurl",
    mov: "video/quicktime",
    mp3: "audio/mpeg",
    mpeg: "video/mpeg",
    pdf: "application/pdf",
    png: "image/png",
    ppt: "application/vnd.ms-powerpoint",
    rar: "application/x-rar-compressed",
    svg: "image/svg+xml",
    swf: "application/x-shockwave-flash",
    tar: "application/x-tar",
    tgz: "application/x-compressed",
    tif: "image/tiff",
    tiff: "image/tiff",
    txt: "text/plain",
    wav: "audio/x-wav",
    wps: "application/vnd.ms-works",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.ms-excel",
    zip: "application/zip"
  };

  for (var i in json) {
    if (json[i] === mimeType) {
      return i;
    }
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  FileUtils: FileUtils,
  install: function install(Vue) {
    //Vue.prototype,
    Object.defineProperty(Vue.prototype, '$FileUtils', {
      value: FileUtils
    });
  }
});

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//点位图标
var pointImage = {
  greenCode: __webpack_require__(/*! ../assets/code/绿码.png */ "./src/assets/code/绿码.png"),
  yellowCode: __webpack_require__(/*! ../assets/code/黄码.png */ "./src/assets/code/黄码.png"),
  redCode: __webpack_require__(/*! ../assets/code/红码.png */ "./src/assets/code/红码.png"),
  wry: __webpack_require__(/*! ../assets/point/location.png */ "./src/assets/point/location.png")
}; //通用方法集合

var utils = {
  //加载不同点位icon
  getPointImg: function getPointImg(type, level) {
    var img = null;

    if (type === '环保码') {
      if (level === '红色') {
        img = pointImage.redCode;
      } else if (level === '黄色') {
        img = pointImage.yellowCode;
      } else if (level === '绿色') {
        img = pointImage.greenCode;
      }
    } else {
      img = pointImage.wry;
    }

    return img;
  },
  //行政区划
  district: {
    "昆明市": {
      "呈贡": [102.83501023266601, 24.859630612447685],
      "五华": [102.64533998205128, 25.151361527757203],
      "盘龙": [102.80239457104491, 25.140598124076494],
      "官渡": [102.9277073762207, 25.050174740865657],
      "西山": [102.64339049388018, 24.96594657478038],
      "东川": [103.06678415777876, 26.148127211231863],
      "晋宁": [102.6186136184548, 24.68039979624299],
      "安宁": [102.3758160493164, 24.795961847893157],
      "富民": [102.51280047189259, 25.35293180597178],
      "宜良": [103.12909675601483, 24.8787932056558],
      "嵩明": [103.00254692245619, 25.340839632811488],
      "石林": [103.44058416802667, 24.73525868723499],
      "禄劝": [102.61013382885741, 25.86985781581683],
      "寻甸": [103.13284272167968, 25.662147549703548]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue, options) {
    Vue.prototype.$utils = utils;
  }
});

/***/ }),

/***/ "./src/utils/download.js":
/*!*******************************!*\
  !*** ./src/utils/download.js ***!
  \*******************************/
/*! exports provided: download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUtils */ "./src/utils/FileUtils.js");



function _getFileType(filename) {
  return filename.substring(filename.lastIndexOf('.') + 1);
}

function _getFileMIMEType(filename) {
  return _FileUtils__WEBPACK_IMPORTED_MODULE_1__["default"].FileUtils.getMIMEType(_getFileType(filename));
}

var download = function download(url, filename, withCredentials) {
  try {
    /* 文件下载器*/
    var fileDownloader = new _FileUtils__WEBPACK_IMPORTED_MODULE_1__["default"].FileUtils.Downloader({
      url: url,
      filename: filename
    });
    fileDownloader.withCredential = !!withCredentials;

    var mimeType = _getFileMIMEType(filename);
    /* 进度条*/


    var progress = window.navigator.dialogsPlus.progressStart('下载', name, null, true, '取消', function () {
      fileDownloader.cancel();
    });
    /* 成功回调*/

    fileDownloader.onSuccess = function (fileEntry) {
      window.navigator.dialogsPlus.showNotice(fileEntry.nativeURL, 5000);
      progress.hide();
      /* 打开文件*/

      cordova.plugins.fileOpener2.open(fileEntry.nativeURL, _FileUtils__WEBPACK_IMPORTED_MODULE_1__["default"].FileUtils.getMIMEType(_getFileType(fileEntry.nativeURL)));
    };
    /* 错误回调*/


    fileDownloader.onFail = function (errorCode) {
      progress.hide();
      console.log(errorCode);
    };
    /* 取消回调*/


    fileDownloader.onCancel = function () {
      window.navigator.dialogsPlus.showNotice('取消下载', 2000);
    };
    /* 进程回调*/


    fileDownloader.onProgress = function (progressEvent) {
      console.log(progressEvent.loaded, progressEvent.total);
      var percent = (progressEvent.loaded / progressEvent.total * 100).toFixed(2);
      progress.setValue(percent);
    };
    /* 开始下载*/


    fileDownloader.download();
  } catch (e) {
    console.log('download fail');
    console.log(e);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9BcHAudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VcGRhdGVEaWFsb2cudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svRmVlZGJhY2tCdXR0b24udnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9Mb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT9kY2FkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZURpYWxvZy52dWU/Y2U3NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svRmVlZGJhY2tCdXR0b24udnVlP2JjYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcvTG9hZGluZy52dWU/MDc1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlPzRlNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9wb2xsdXRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mZWVkYmFjay9GZWVkYmFja0J1dHRvbi52dWU/NTBiOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlP2MyYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/MjdhMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VcGRhdGVEaWFsb2cudnVlP2ZjNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2ZlZWRiYWNrL0ZlZWRiYWNrQnV0dG9uLnZ1ZT8xZDJlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nL0xvYWRpbmcudnVlP2I0MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0LnZ1ZT9mZDA4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mZWVkYmFjay9GZWVkYmFja0J1dHRvbi52dWU/ZDI1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlPzk0NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/NWFlZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VcGRhdGVEaWFsb2cudnVlP2RjNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2ZlZWRiYWNrL0ZlZWRiYWNrQnV0dG9uLnZ1ZT80OGMyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nL0xvYWRpbmcudnVlPzYzNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0LnZ1ZT8wYTc1Iiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ZmZlZiIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT9iMzRhIiwid2VicGFjazovLy8uL3NyYy9hcGkvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29kZS/nuqLnoIEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29kZS/nu7/noIEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29kZS/pu4TnoIEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9pbnQvbG9jYXRpb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvYmx1ZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9saWNlbmNlQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIveWVsbG93X2JnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3llbGxvd19zaG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy94Y3kucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXBkYXRlRGlhbG9nLnZ1ZT9iMGI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZURpYWxvZy52dWU/ZDU2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VcGRhdGVEaWFsb2cudnVlPzFhYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2ZlZWRiYWNrL0ZlZWRiYWNrQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svRmVlZGJhY2tCdXR0b24udnVlPzc5OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2ZlZWRiYWNrL0ZlZWRiYWNrQnV0dG9uLnZ1ZT82MjliIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9mZWVkYmFjay9GZWVkYmFja0J1dHRvbi52dWU/OWM5YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svRmVlZGJhY2tCdXR0b24udnVlPzcxYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcvTG9hZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcvTG9hZGluZy52dWU/NmM5NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9Mb2FkaW5nLnZ1ZT82OGVkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nL0xvYWRpbmcudnVlP2NmMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlPzkyNTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0LnZ1ZT85M2JkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90ZXN0L2Zsb2F0VGVzdC52dWU/MTY3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlPzFkNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2FsaW1hbWFzaHVoZWl0aS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dsb2JhbC5zY3NzPzZmMDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3BvbGx1dGVyLnNjc3M/ZTZjZSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRmlsZVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Rvd25sb2FkLmpzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJwaG9uZUNvZGUiLCJtb2JpbGUiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwicGhvbmVDb2RlTG9naW4iLCJjb2RlIiwiYXBwaWQiLCJnZXRWZXJzaW9uIiwidmVyc2lvbiIsInR5cGUiLCJnZXRJbmRleFJvbGUiLCJwaG9uZSIsImdldFVzZXJCdG5MaXN0IiwidXNlcklkIiwiZ2V0UGFnZUxvZyIsImRhdGEiLCJnZXRJbmZvIiwidG9rZW4iLCJUb2tlbiIsImRlcHRUcmVlIiwidXNlck1vZGlmeSIsImdldFJvbGVzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwic2VydmljZSIsImNyZWF0ZSIsInRpbWVvdXQiLCJyZXRyeSIsInJldHJ5SW50ZXJ2YWwiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJjb25maWciLCJzdG9yZSIsInN0YXRlIiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsIm1zZyIsInJvdXRlciIsImhpc3RvcnkiLCJjdXJyZW50IiwicGF0aCIsImRpc3BhdGNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvYWRpbmciLCJpbnN0YWxsIiwiVnVlIiwiTG9hZGluZ0NvbnN0cnVjdG9yIiwiZXh0ZW5kIiwiTG9hZGluZ0NvbXBvbmVudCIsImluc3RhbmNlIiwiJG1vdW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiJGVsIiwicHJvdG90eXBlIiwiJGxvYWRpbmciLCJzaG93IiwiaGlkZSIsInVzZXJzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIk1vY2siLCJtb2NrIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInVzZXIiLCJmaW5kIiwidSIsIm1lc3NhZ2UiLCJFbGVtZW50VUkiLCJWYW50IiwiVnVlQ29tcG9zaXRpb25BUEkiLCJwcm9kdWN0aW9uVGlwIiwiZGF5anMiLCJGaWxlVXRpbHMiLCJMb2FkaW5nIiwiVnVlVG91Y2giLCJuYW1lIiwidnVlSW5zdGFuY2UiLCJtb3VudGVkIiwidGhlbiIsInJlcyIsInNldEl0ZW0iLCJlbmNvZGVVUkkiLCJyZXBsYWNlIiwicmVuZGVyIiwiaCIsIkFwcCIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsInJlZGlyZWN0IiwiY29tcG9uZW50IiwibWV0YSIsInRpdGxlIiwia2VlcEFsaXZlIiwiaXNCYWNrIiwicHJvcHMiLCJtb2RlIiwiYmFzZSIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiYmVmb3JlRWFjaCIsInRvIiwiZnJvbSIsIm5leHQiLCJzdGFydCIsImluZm8iLCJwYXJhbSIsInF1ZXJ5Iiwicm91dGUiLCJzeXN0ZW0iLCJkb25lIiwib25FcnJvciIsIlZ1ZXgiLCJTdG9yZSIsImFjdGl2ZUluZGV4Iiwic2VhcmNoU3RvcmUiLCJ1dWlkIiwiZGF0YUlkIiwic2VhcmNoT2JqIiwibW9kdWxlTmFtZSIsInJlc291cmNlUGF0aCIsInBhcmFtZXRlciIsImNvbXBvbmVudE5hbWUiLCJwb2ludE5hbWUiLCJtdXRhdGlvbnMiLCJzZXRBY3RpdmVJbmRleCIsInZhbHVlIiwic2V0U2VhcmNoT2JqIiwic2V0U2VhcmNoU3RvcmUiLCJsZW5ndGgiLCJ1bnNoaWZ0Iiwic2xpY2UiLCJqb2luIiwiY2xlYXJTZWFyY2hTdG9yZSIsInNldFRva2VuIiwiYWN0aW9ucyIsInVuVXNlclBhc3NMb2dpbiIsImF1dGhvcml6YXRpb24iLCJjb21taXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInB1c2giLCJEb3dubG9hZGVyIiwib3B0aW9uIiwiZmlsZW5hbWUiLCJzYXZlTG9jYXRpb24iLCJ3aXRoQ3JlZGVudGlhbCIsIm9uUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25TdWNjZXNzIiwiZmlsZUVudHJ5Iiwib25GYWlsIiwiZXJyb3JDb2RlIiwib25DYW5jZWwiLCJDQU5DRUxFRCIsIlNVQ0NFU1MiLCJOT19VUkwiLCJOT19GSUxFTkFNRSIsIkZJTEVfU1lTVEVNX0VSUk9SIiwiTE9DQUxfRklMRV9TWVNURU1fRVJST1IiLCJYSFJfU1RBVFVTX0VSUk9SIiwiU0FWRV9GSUxFX0VSUk9SIiwiV1JJVEVfRklMRV9FUlJPUiIsInhociIsImZpbGVUeXBlIiwibWltZVR5cGUiLCJkZXN0cm95IiwiY2FuY2VsIiwiYWJvcnQiLCJiZWZvcmVEb3dubG9hZCIsIndhcm4iLCJjb3Jkb3ZhIiwiZmlsZSIsImV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5IiwiZSIsInVzZUZpbGVTeXN0ZW1Mb2NhdGlvbiIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiZ2V0TUlNRVR5cGUiLCJkZWNvZGVVUkkiLCJkb3dubG9hZCIsIl90aGlzIiwicmVxdWVzdEZpbGVTeXN0ZW0iLCJQRVJTSVNURU5UIiwiZmlsZVN5c3RlbSIsImdldEZpbGUiLCJyb290IiwidG9TdHJpbmciLCJyZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwic2F2ZUVudHJ5IiwiWE1MSHR0cFJlcXVlc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInN0YXR1cyIsImJsb2IiLCJCbG9iIiwic2F2ZUZpbGUiLCJvbmFib3J0Iiwic2VuZCIsImZpbGVEYXRhIiwiZXhjbHVzaXZlIiwid3JpdGVGaWxlIiwiZXJyIiwiYnl0ZXNXcml0dGVuIiwiQkxPQ0tfU0laRSIsIndyaXRlQmxvY2siLCJfZmlsZVdyaXRlciIsImNhbGxiYWNrIiwiYmxvY2tTaXplIiwiTWF0aCIsIm1pbiIsInNpemUiLCJibG9jayIsIndyaXRlIiwib253cml0ZSIsImNyZWF0ZVdyaXRlciIsImZpbGVXcml0ZXIiLCJVcGxvYWRlciIsImZpbGVVcmkiLCJmaWxlQWxpYXMiLCJyZXN1bHQiLCJiZWZvcmVVcGxvYWQiLCJ1cGxvYWQiLCJmaWxlTmFtZSIsImxvY2FsVVJMIiwiaW5kZXhPZiIsImdldEZpbGVUeXBlIiwiZmlsZUxlbmd0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJVaW50OEFycmF5IiwicG9zdCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImkiLCJhcHBlbmQiLCJvdmVycmlkZU1pbWVUeXBlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Iiwib25lcnJvciIsImpzb24iLCJhcGsiLCJhdmkiLCJiaW4iLCJibXAiLCJjbGFzcyIsImNzcyIsImRpciIsImRsbCIsImRvYyIsImRvY3giLCJleGUiLCJnaWYiLCJndGFyIiwiZ3oiLCJodG0iLCJodG1sIiwiaWNvIiwianBlIiwianBlZyIsImpwZyIsImpzIiwibTN1IiwibW92IiwibXAzIiwibXBlZyIsInBkZiIsInBuZyIsInBwdCIsInJhciIsInN2ZyIsInN3ZiIsInRhciIsInRneiIsInRpZiIsInRpZmYiLCJ0eHQiLCJ3YXYiLCJ3cHMiLCJ4bHMiLCJ4bHN4IiwiemlwIiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInBvaW50SW1hZ2UiLCJncmVlbkNvZGUiLCJyZXF1aXJlIiwieWVsbG93Q29kZSIsInJlZENvZGUiLCJ3cnkiLCJ1dGlscyIsImdldFBvaW50SW1nIiwibGV2ZWwiLCJpbWciLCJkaXN0cmljdCIsIiR1dGlscyIsIl9nZXRGaWxlVHlwZSIsIl9nZXRGaWxlTUlNRVR5cGUiLCJmaWxlRG93bmxvYWRlciIsInByb2dyZXNzIiwibmF2aWdhdG9yIiwiZGlhbG9nc1BsdXMiLCJwcm9ncmVzc1N0YXJ0Iiwic2hvd05vdGljZSIsIm5hdGl2ZVVSTCIsInBsdWdpbnMiLCJmaWxlT3BlbmVyMiIsImxvYWRlZCIsInRvdGFsIiwicGVyY2VudCIsInRvRml4ZWQiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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LENBQUN4SixTQUFTLENBQUNnSyxTQUFYLENBQTVDLENBRko7QUFLRCxLQVZEO0FBWUE7OztBQUNBTixrQkFBYyxDQUFDekosTUFBZixHQUF3QixVQUFDQyxTQUFELEVBQWU7QUFDckN5SixjQUFRLENBQUM1UCxJQUFUO0FBQ0E3QixhQUFPLENBQUNDLEdBQVIsQ0FBWStILFNBQVo7QUFDRCxLQUhEO0FBS0E7OztBQUNBd0osa0JBQWMsQ0FBQ3ZKLFFBQWYsR0FBMEIsWUFBTTtBQUM5QmYsWUFBTSxDQUFDd0ssU0FBUCxDQUFpQkMsV0FBakIsQ0FBNkJFLFVBQTdCLENBQXdDLE1BQXhDLEVBQWdELElBQWhEO0FBQ0QsS0FGRDtBQUlBOzs7QUFDQUwsa0JBQWMsQ0FBQzdKLFVBQWYsR0FBNEIsVUFBQ0MsYUFBRCxFQUFtQjtBQUM3QzVILGFBQU8sQ0FBQ0MsR0FBUixDQUFZMkgsYUFBYSxDQUFDcUssTUFBMUIsRUFBa0NySyxhQUFhLENBQUNzSyxLQUFoRDtBQUNBLFVBQU1DLE9BQU8sR0FBRyxDQUNidkssYUFBYSxDQUFDcUssTUFBZCxHQUF1QnJLLGFBQWEsQ0FBQ3NLLEtBQXRDLEdBQ0EsR0FGYyxFQUdkRSxPQUhjLENBR04sQ0FITSxDQUFoQjtBQUlBWCxjQUFRLENBQUNZLFFBQVQsQ0FBa0JGLE9BQWxCO0FBQ0QsS0FQRDtBQVNBOzs7QUFDQVgsa0JBQWMsQ0FBQzVILFFBQWY7QUFDRCxHQTFERCxDQTBERSxPQUFPTixDQUFQLEVBQVU7QUFDVnRKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlxSixDQUFaO0FBQ0Q7QUFDRixDQS9ETSxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJqcy9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwiY2h1bmstdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwiYXBwXCI+XHJcbiAgICA8a2VlcC1hbGl2ZT5cclxuICAgICAgPHJvdXRlci12aWV3IHYtaWY9XCIkcm91dGUubWV0YS5rZWVwQWxpdmVcIj48L3JvdXRlci12aWV3PlxyXG4gICAgPC9rZWVwLWFsaXZlPlxyXG4gICAgPHJvdXRlci12aWV3IHYtaWY9XCIhJHJvdXRlLm1ldGEua2VlcEFsaXZlXCI+PC9yb3V0ZXItdmlldz5cclxuICAgIDxmZWVkYmFjay1idXR0b24+PC9mZWVkYmFjay1idXR0b24+XHJcbiAgICA8VXBkYXRlRGlhbG9nIC8+XHJcbiAgICA8ZmxvYXRUZXN0Lz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZlZWRiYWNrQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL2ZlZWRiYWNrL0ZlZWRiYWNrQnV0dG9uLnZ1ZVwiO1xyXG5pbXBvcnQgVXBkYXRlRGlhbG9nIGZyb20gXCJAL2NvbXBvbmVudHMvVXBkYXRlRGlhbG9nLnZ1ZVwiO1xyXG5pbXBvcnQgZmxvYXRUZXN0IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvZmxvYXRUZXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBcHBcIixcclxuICBjb21wb25lbnRzOiB7IFVwZGF0ZURpYWxvZywgRmVlZGJhY2tCdXR0b24sZmxvYXRUZXN0IH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcclxuICAgICAgcG9wVmlzaWJsZTogdHJ1ZSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge30sXHJcbiAgbWV0aG9kczoge30sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuI2FwcCB7XHJcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwiZGlhbG9nXCIgOnN0eWxlPVwieyB3aWR0aDogJzg1JScgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXBXcmFwcGVyXCI+XHJcbiAgICAgICAgPHA+5Y+R546w5paw54mI5pysPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgY29tbWVudCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cEZvb3RlclwiPlxyXG4gICAgICAgICAgPHZhbi1idXR0b24gdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJjbG9zZU1vZGFsKClcIj7mmoLkuI3mm7TmlrA8L3Zhbi1idXR0b24+XHJcbiAgICAgICAgICA8dmFuLWJ1dHRvbiB0eXBlPVwiaW5mb1wiIEBjbGljaz1cImFwa0Rvd25sb2FkKClcIj7nq4vljbPmm7TmlrA8L3Zhbi1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC92YW4tcG9wdXA+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7ZG93bmxvYWR9IGZyb20gXCIuLi91dGlscy9kb3dubG9hZFwiO1xyXG4gIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIlVwZGF0ZURpYWxvZ1wiLFxyXG4gICAgcHJvcHM6e1xyXG4gICAgICB2ZXJzaW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6KCk9Pnt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgICAgY29tbWVudDogJycsXHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBmaWxlbmFtZTogJycsXHJcbiAgICAgICAgdmVyc2lvbjogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIHRoaXMuY2hlY2tWZXJzaW9uKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3aW5kb3cuY29yZG92YS5nZXRBcHBWZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKS50aGVuKCh2ZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWZXJzaW9uKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuacquiOt+WPluWIsOeJiOacrOS/oeaBr1wiKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tWZXJzaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2hlY2tWZXJzaW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52ZXJzaW9uKTtcclxuICAgICAgICBpZiAoIXRoaXMudmVyc2lvbikge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cDovLzEwLjIyMS4yOS40OjUxMTEyL3BvbGx1X3VwZGF0ZS9sb2cvY2dYdEFwcEJiaGd4Yi9kb3duXCIsXHJcbiAgICAgICAgICBtZXRob2Q6J2dldCcsXHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgYmJoOiB0aGlzLnZlcnNpb24sXHJcbiAgICAgICAgICAgIHR5cGU6ICflpJYnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXM9PntcclxuICAgICAgICAgIC8vIGlmKHRoaXMuJHJvdXRlLnBhdGg9PT0nL21pbmUnKXtcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzICE9PSAnMCcpe1xyXG4gICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHJlcy5kYXRhLmJiaC5neFhYO1xyXG4gICAgICAgICAgICAgIHRoaXMuZmlsZW5hbWUgPSByZXMuZGF0YS5iYmgubWMgKyByZXMuZGF0YS5iYmguYmJoKyAnLmFwayc7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMudXJsID0gcmVzLmRhdGEudXJsXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICBUb2FzdChyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZVBvcCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBhcGtEb3dubG9hZCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlUG9wJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXJsKVxyXG4gICAgICAgICAgZG93bmxvYWQodGhpcy51cmwsIHRoaXMuZmlsZW5hbWUsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAudmFuLXBvcHVwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cFdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYigxMzYsIDE0MSwgMTQ5KTtcclxuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdXBGb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICB2LXNob3c9XCJ2aXNpYmxlXCJcclxuICAgIHJlZj1cImZsb2F0RHJhZ1wiXHJcbiAgICBjbGFzcz1cImZsb2F0LXBvc2l0aW9uXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgbGVmdDogbGVmdCArICdweCcsXHJcbiAgICAgIHRvcDogdG9wICsgJ3B4JyxcclxuICAgICAgcmlnaHQ6IHJpZ2h0ICsgJ3B4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB6SW5kZXg6IHpJbmRleCxcclxuICAgIH1cIlxyXG4gICAgQHRvdWNobW92ZS5wcmV2ZW50XHJcbiAgICBAbW91c2Vtb3ZlLnByZXZlbnRcclxuICAgIEBtb3VzZWRvd249XCJtb3VzZURvd25cIlxyXG4gICAgQG1vdXNldXA9XCJtb3VzZVVwXCJcclxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxyXG4gID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPuS9v+eUqDxicj7mhI/op4E8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkZlZWRiYWNrQnV0dG9uXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpc3RhbmNlUmlnaHQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAxNixcclxuICAgIH0sXHJcbiAgICBkaXN0YW5jZUJvdHRvbToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDEwMCxcclxuICAgIH0sXHJcbiAgICBpc1Njcm9sbEhpZGRlbjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpc0NhbkRyYWdnYWJsZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDUwLFxyXG4gICAgfSxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCLmgqzmta7nkIPvvIFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgcmV0dXJuICFbJy9mZWVkYmFjaycsICcvZmVlZGJhY2tSZXN1bHQnLCAnL2xvZ2luJ10uaW5jbHVkZXModGhpcy4kcm91dGUucGF0aClcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgLy9kYXRhIOWfn1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGllbnRXaWR0aDogbnVsbCxcclxuICAgICAgY2xpZW50SGVpZ2h0OiBudWxsLFxyXG4gICAgICBsZWZ0OiBudWxsLFxyXG4gICAgICB0b3A6IG51bGwsXHJcbiAgICAgIHJpZ2h0OiBudWxsLFxyXG4gICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgY3VycmVudFRvcDogMCxcclxuICAgICAgbW91c2Vkb3duWDogMCxcclxuICAgICAgbW91c2Vkb3duWTogMCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5jbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmlzQ2FuRHJhZ2dhYmxlICYmXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICB0aGlzLmZsb2F0RHJhZyA9IHRoaXMuJHJlZnMuZmxvYXREcmFnO1xyXG4gICAgICAgIC8vIOiOt+WPluWFg+e0oOS9jee9ruWxnuaAp1xyXG4gICAgICAgIHRoaXMuZmxvYXREcmFnRG9tID0gdGhpcy5mbG9hdERyYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8g6K6+572u5Yid5aeL5L2N572uXHJcbiAgICAgICAgdGhpcy5pbml0RHJhZ2dhYmxlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5pc1Njcm9sbEhpZGRlbiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gIH0sXHJcbiAgYmVmb3JlVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9GZWVkYmFja1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+jcmVzaXpl55uR5ZCsXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy5jbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlmRyYWdnYWJsZVxyXG4gICAgICovXHJcbiAgICBpbml0RHJhZ2dhYmxlKCkge1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoZVN0YXJ0KTtcclxuICAgICAgdGhpcy5mbG9hdERyYWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4gdGhpcy50b3VjaE1vdmUoZSkpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaEVuZCk7XHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duKGUpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25YID0gZXZlbnQuc2NyZWVuWDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25ZID0gZXZlbnQuc2NyZWVuWTtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCBmbG9hdERyYWdXaWR0aCA9IHRoaXMuZmxvYXREcmFnRG9tLndpZHRoIC8gMjtcclxuICAgICAgbGV0IGZsb2F0RHJhZ0hlaWdodCA9IHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICB0aGF0LmxlZnQgPSBldmVudC5jbGllbnRYIC0gZmxvYXREcmFnV2lkdGg7XHJcbiAgICAgICAgdGhhdC50b3AgPSBldmVudC5jbGllbnRZIC0gZmxvYXREcmFnSGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGF0LmxlZnQgPCAwKSB0aGF0LmxlZnQgPSAwO1xyXG4gICAgICAgIGlmICh0aGF0LnRvcCA8IDApIHRoYXQudG9wID0gMDtcclxuICAgICAgICAvLyDpvKDmoIfnp7vlh7rlj6/op4bljLrln5/lkI7nu5nmjInpkq7ov5jljp9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBldmVudC5jbGllbnRZIDwgMCB8fFxyXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSA+IE51bWJlcih0aGlzLmNsaWVudEhlaWdodCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPiBOdW1iZXIodGhpcy5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcclxuICAgICAgICAgIHRoaXMudG9wID1cclxuICAgICAgICAgICAgdGhpcy5jbGllbnRIZWlnaHQgLSB0aGlzLmZsb2F0RHJhZ0RvbS5oZWlnaHQgLSB0aGlzLmRpc3RhbmNlQm90dG9tO1xyXG4gICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhhdC5sZWZ0ID49XHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBmbG9hdERyYWdXaWR0aCAqIDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoYXQubGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIGZsb2F0RHJhZ1dpZHRoICogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoYXQudG9wID49IHRoYXQuY2xpZW50SGVpZ2h0IC0gZmxvYXREcmFnSGVpZ2h0ICogMikge1xyXG4gICAgICAgICAgdGhhdC50b3AgPSB0aGF0LmNsaWVudEhlaWdodCAtIGZsb2F0RHJhZ0hlaWdodCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdXNlVXAoZSkge1xyXG4gICAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAvL+WIpOaWreWPquaYr+WNlee6r+eahOeCueWHu++8jOayoeacieaLluaLvVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25ZID09IGV2ZW50LnNjcmVlblkgJiZcclxuICAgICAgICB0aGlzLm1vdXNlZG93blggPT0gZXZlbnQuc2NyZWVuWFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLiRlbWl0KFwiaGFuZGxlcGFseVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hlY2tEcmFnZ2FibGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zc1wiO1xyXG4gICAgfSxcclxuICAgIHRvdWNoZVN0YXJ0KCkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmxvYXREcmFnLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH0sXHJcbiAgICB0b3VjaE1vdmUoZSkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAvLyDljZXmjIfmi5bliqhcclxuICAgICAgICBsZXQgdG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLmZsb2F0RHJhZ0RvbS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50b3AgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5mbG9hdERyYWdEb20uaGVpZ2h0IC8gMjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvdWNoRW5kKCkge1xyXG4gICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjsgLy8g6Kej5Yaz54K55Ye75LqL5Lu25ZKMdG91Y2jkuovku7blhrLnqoHnmoTpl67pophcclxuICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgdGhpcy5jaGVja0RyYWdnYWJsZVBvc2l0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3lhYPntKDmmL7npLrkvY3nva5cclxuICAgICAqIOWcqOeql+WPo+aUueWPmOWSjG1vdmUgZW5k5pe26LCD55SoXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgIHRoaXMuY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jbGllbnRXaWR0aCAtIHRoaXMuZmxvYXREcmFnRG9tLndpZHRoO1xyXG4gICAgICAvLyBpZiAodGhpcy5sZWZ0ICsgdGhpcy5mbG9hdERyYWdEb20ud2lkdGggLyAyID49IHRoaXMuY2xpZW50V2lkdGggLyAyKSB7XHJcbiAgICAgIC8vICAgLy8g5Yik5pat5L2N572u5piv5b6A5bem5b6A5Y+z5ruR5YqoXHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAodGhpcy50b3AgPCAwKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6LaF5Ye65bGP5bmV5LiK5rK/XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRvcCArIHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCA+PSB0aGlzLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui2heWHuuWxj+W5leS4i+ayv1xyXG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5jbGllbnRIZWlnaHQgLSB0aGlzLmZsb2F0RHJhZ0RvbS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG48L3N0eWxlPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5mbG9hdC1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogODAlO1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTU1LCAxNTksIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDE1NiwgMTU1LCAxNTksIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8dmFuLXBvcHVwXHJcbiAgICAgICAgICAgIDpjbG9zZS1vbi1jbGljay1vdmVybGF5PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwic2hvd1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFwiXHJcbiAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdXcmFwXCI+XHJcbiAgICAgICAgICAgIDx2YW4tbG9hZGluZyB2LWlmPVwic2hvd1wiIHR5cGU9XCJzcGlubmVyXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTonbG9hZGluZycsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaG93OmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz0nc2Nzcycgc2NvcGVkPlxyXG4ubG9hZGluZ1dyYXB7XHJcbiAgICA6OnYtZGVlcCh2YW4tcG9wdXApe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjcpXHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIHYtc2hvdz1cInZpc2libGVcIlxyXG4gICAgcmVmPVwiZmxvYXREcmFnXCJcclxuICAgIGNsYXNzPVwiZmxvYXQtcG9zaXRpb25cIlxyXG4gICAgOnN0eWxlPVwie1xyXG4gICAgICBsZWZ0OiBsZWZ0ICsgJ3B4JyxcclxuICAgICAgdG9wOiB0b3AgKyAncHgnLFxyXG4gICAgICByaWdodDogcmlnaHQgKyAncHggIWltcG9ydGFudCcsXHJcbiAgICAgIHpJbmRleDogekluZGV4LFxyXG4gICAgfVwiXHJcbiAgICBAdG91Y2htb3ZlLnByZXZlbnRcclxuICAgIEBtb3VzZW1vdmUucHJldmVudFxyXG4gICAgQG1vdXNlZG93bj1cIm1vdXNlRG93blwiXHJcbiAgICBAbW91c2V1cD1cIm1vdXNlVXBcIlxyXG4gICAgQGNsaWNrPVwib25DbGlja1wiXHJcbiAgPlxyXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj50ZXN0PC9kaXY+IC0tPlxyXG4gICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3hjeS5wbmdcIiBhbHQ9XCJcIj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkZlZWRiYWNrQnV0dG9uXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpc3RhbmNlUmlnaHQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAxNixcclxuICAgIH0sXHJcbiAgICBkaXN0YW5jZUJvdHRvbToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDEwMCxcclxuICAgIH0sXHJcbiAgICBpc1Njcm9sbEhpZGRlbjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBpc0NhbkRyYWdnYWJsZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDUwLFxyXG4gICAgfSxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCLmgqzmta7nkIPvvIFcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgcmV0dXJuICFbJy90ZXN0RGV0YWlsJywgJy9sb2dpbiddLmluY2x1ZGVzKHRoaXMuJHJvdXRlLnBhdGgpXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIC8vZGF0YSDln59cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xpZW50V2lkdGg6IG51bGwsXHJcbiAgICAgIGNsaWVudEhlaWdodDogbnVsbCxcclxuICAgICAgbGVmdDogbnVsbCxcclxuICAgICAgdG9wOiBudWxsLFxyXG4gICAgICByaWdodDogbnVsbCxcclxuICAgICAgdGltZXI6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRUb3A6IDAsXHJcbiAgICAgIG1vdXNlZG93blg6IDAsXHJcbiAgICAgIG1vdXNlZG93blk6IDAsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5pc0NhbkRyYWdnYWJsZSAmJlxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mbG9hdERyYWcgPSB0aGlzLiRyZWZzLmZsb2F0RHJhZztcclxuICAgICAgICAvLyDojrflj5blhYPntKDkvY3nva7lsZ7mgKdcclxuICAgICAgICB0aGlzLmZsb2F0RHJhZ0RvbSA9IHRoaXMuZmxvYXREcmFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIOiuvue9ruWIneWni+S9jee9rlxyXG4gICAgICAgIHRoaXMuaW5pdERyYWdnYWJsZSgpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuaXNTY3JvbGxIaWRkZW4gJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICB9LFxyXG4gIGJlZm9yZVVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aDogXCIvdGVzdERldGFpbFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+jcmVzaXpl55uR5ZCsXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy5jbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlmRyYWdnYWJsZVxyXG4gICAgICovXHJcbiAgICBpbml0RHJhZ2dhYmxlKCkge1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoZVN0YXJ0KTtcclxuICAgICAgdGhpcy5mbG9hdERyYWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4gdGhpcy50b3VjaE1vdmUoZSkpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaEVuZCk7XHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duKGUpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25YID0gZXZlbnQuc2NyZWVuWDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25ZID0gZXZlbnQuc2NyZWVuWTtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCBmbG9hdERyYWdXaWR0aCA9IHRoaXMuZmxvYXREcmFnRG9tLndpZHRoIC8gMjtcclxuICAgICAgbGV0IGZsb2F0RHJhZ0hlaWdodCA9IHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICB0aGF0LmxlZnQgPSBldmVudC5jbGllbnRYIC0gZmxvYXREcmFnV2lkdGg7XHJcbiAgICAgICAgdGhhdC50b3AgPSBldmVudC5jbGllbnRZIC0gZmxvYXREcmFnSGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGF0LmxlZnQgPCAwKSB0aGF0LmxlZnQgPSAwO1xyXG4gICAgICAgIGlmICh0aGF0LnRvcCA8IDApIHRoYXQudG9wID0gMDtcclxuICAgICAgICAvLyDpvKDmoIfnp7vlh7rlj6/op4bljLrln5/lkI7nu5nmjInpkq7ov5jljp9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBldmVudC5jbGllbnRZIDwgMCB8fFxyXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSA+IE51bWJlcih0aGlzLmNsaWVudEhlaWdodCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPiBOdW1iZXIodGhpcy5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcclxuICAgICAgICAgIHRoaXMudG9wID1cclxuICAgICAgICAgICAgdGhpcy5jbGllbnRIZWlnaHQgLSB0aGlzLmZsb2F0RHJhZ0RvbS5oZWlnaHQgLSB0aGlzLmRpc3RhbmNlQm90dG9tO1xyXG4gICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhhdC5sZWZ0ID49XHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBmbG9hdERyYWdXaWR0aCAqIDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoYXQubGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIGZsb2F0RHJhZ1dpZHRoICogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoYXQudG9wID49IHRoYXQuY2xpZW50SGVpZ2h0IC0gZmxvYXREcmFnSGVpZ2h0ICogMikge1xyXG4gICAgICAgICAgdGhhdC50b3AgPSB0aGF0LmNsaWVudEhlaWdodCAtIGZsb2F0RHJhZ0hlaWdodCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdXNlVXAoZSkge1xyXG4gICAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAvL+WIpOaWreWPquaYr+WNlee6r+eahOeCueWHu++8jOayoeacieaLluaLvVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25ZID09IGV2ZW50LnNjcmVlblkgJiZcclxuICAgICAgICB0aGlzLm1vdXNlZG93blggPT0gZXZlbnQuc2NyZWVuWFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLiRlbWl0KFwiaGFuZGxlcGFseVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hlY2tEcmFnZ2FibGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zc1wiO1xyXG4gICAgfSxcclxuICAgIHRvdWNoZVN0YXJ0KCkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmxvYXREcmFnLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH0sXHJcbiAgICB0b3VjaE1vdmUoZSkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAvLyDljZXmjIfmi5bliqhcclxuICAgICAgICBsZXQgdG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLmZsb2F0RHJhZ0RvbS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50b3AgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5mbG9hdERyYWdEb20uaGVpZ2h0IC8gMjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvdWNoRW5kKCkge1xyXG4gICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjsgLy8g6Kej5Yaz54K55Ye75LqL5Lu25ZKMdG91Y2jkuovku7blhrLnqoHnmoTpl67pophcclxuICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgdGhpcy5jaGVja0RyYWdnYWJsZVBvc2l0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3lhYPntKDmmL7npLrkvY3nva5cclxuICAgICAqIOWcqOeql+WPo+aUueWPmOWSjG1vdmUgZW5k5pe26LCD55SoXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgIHRoaXMuY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5jbGllbnRXaWR0aCAtIHRoaXMuZmxvYXREcmFnRG9tLndpZHRoO1xyXG4gICAgICAvLyBpZiAodGhpcy5sZWZ0ICsgdGhpcy5mbG9hdERyYWdEb20ud2lkdGggLyAyID49IHRoaXMuY2xpZW50V2lkdGggLyAyKSB7XHJcbiAgICAgIC8vICAgLy8g5Yik5pat5L2N572u5piv5b6A5bem5b6A5Y+z5ruR5YqoXHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgICAgLy8gfVxyXG4gICAgICBpZiAodGhpcy50b3AgPCAwKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6LaF5Ye65bGP5bmV5LiK5rK/XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRvcCArIHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCA+PSB0aGlzLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui2heWHuuWxj+W5leS4i+ayv1xyXG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5jbGllbnRIZWlnaHQgLSB0aGlzLmZsb2F0RHJhZ0RvbS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG48L3N0eWxlPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi5mbG9hdC1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNjYlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDE1NiwgMTU1LCAxNTksIDAuNSk7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDE1NiwgMTU1LCAxNTksIDAuNSk7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJrZWVwLWFsaXZlXCIsXG4gICAgICAgIFtfdm0uJHJvdXRlLm1ldGEua2VlcEFsaXZlID8gX2MoXCJyb3V0ZXItdmlld1wiKSA6IF92bS5fZSgpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgICFfdm0uJHJvdXRlLm1ldGEua2VlcEFsaXZlID8gX2MoXCJyb3V0ZXItdmlld1wiKSA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJmZWVkYmFjay1idXR0b25cIiksXG4gICAgICBfYyhcIlVwZGF0ZURpYWxvZ1wiKSxcbiAgICAgIF9jKFwiZmxvYXRUZXN0XCIpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBcIjg1JVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wdXBXcmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLlj5HnjrDmlrDniYjmnKxcIildKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudCkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3B1cEZvb3RlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlTW9kYWwoKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaaguS4jeabtOaWsFwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXBrRG93bmxvYWQoKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIueri+WNs+abtOaWsFwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udmlzaWJsZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZpc2libGVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByZWY6IFwiZmxvYXREcmFnXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1wb3NpdGlvblwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogX3ZtLmxlZnQgKyBcInB4XCIsXG4gICAgICAgIHRvcDogX3ZtLnRvcCArIFwicHhcIixcbiAgICAgICAgcmlnaHQ6IF92bS5yaWdodCArIFwicHggIWltcG9ydGFudFwiLFxuICAgICAgICB6SW5kZXg6IF92bS56SW5kZXgsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSxcbiAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSxcbiAgICAgICAgbW91c2Vkb3duOiBfdm0ubW91c2VEb3duLFxuICAgICAgICBtb3VzZXVwOiBfdm0ubW91c2VVcCxcbiAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtfdm0uX20oMCldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIuS9v+eUqFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCLmhI/op4FcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2YW4tcG9wdXBcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJ0cmFuc3BhcmVudFwiIH0sXG4gICAgICBhdHRyczogeyBcImNsb3NlLW9uLWNsaWNrLW92ZXJsYXlcIjogZmFsc2UgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nV3JhcFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd1xuICAgICAgICAgICAgPyBfYyhcInZhbi1sb2FkaW5nXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzcGlubmVyXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS52aXNpYmxlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmlzaWJsZVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJlZjogXCJmbG9hdERyYWdcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXBvc2l0aW9uXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBsZWZ0OiBfdm0ubGVmdCArIFwicHhcIixcbiAgICAgICAgdG9wOiBfdm0udG9wICsgXCJweFwiLFxuICAgICAgICByaWdodDogX3ZtLnJpZ2h0ICsgXCJweCAhaW1wb3J0YW50XCIsXG4gICAgICAgIHpJbmRleDogX3ZtLnpJbmRleCxcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9LFxuICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9LFxuICAgICAgICBtb3VzZWRvd246IF92bS5tb3VzZURvd24sXG4gICAgICAgIG1vdXNldXA6IF92bS5tb3VzZVVwLFxuICAgICAgICBjbGljazogX3ZtLm9uQ2xpY2ssXG4gICAgICB9LFxuICAgIH0sXG4gICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMveGN5LnBuZ1wiKSwgYWx0OiBcIlwiIH0gfSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vYWxpbWFtYXNodWhlaXRpLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhbGltYW1hc2h1aGVpdGk7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbmJvZHksIGh0bWwge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi8qKuWktOmDqOWvvOiIquagjyoqL1xcbi52YW4tbmF2LWJhciAudmFuLWljb24sIC52YW4tbmF2LWJhcl9fbGVmdCAudmFuLW5hdi1iYXJfX3RleHQge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi52YW4tbmF2LWJhciwgLnZhbi1uYXYtYmFyX19jb250ZW50IHtcXG4gIGhlaWdodDogNTRweDtcXG59XFxuXFxuLnZhbi1uYXYtYmFyLCAudmFuLW5hdi1iYXJfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udmFuLW5hdi1iYXJfX2xlZnQgLnZhbi1uYXYtYmFyX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udmFuLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi52YW4tZmllbGRfX2xlZnQtaWNvbiAudmFuLWljb24ge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbi8qKuihqOagvOagt+W8jyoqL1xcbi50YWJsZS13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcbi50YWJsZS13cmFwcGVyIHRyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpO1xcbn1cXG4udGFibGUtd3JhcHBlciB0ciB0ZDpmaXJzdC1jaGlsZCwgLnRhYmxlLXdyYXBwZXIgdHIgdGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdHIgdGQ6bGFzdC1jaGlsZCwgLnRhYmxlLXdyYXBwZXIgdHIgdGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbn1cXG4udGFibGUtd3JhcHBlciB0Ym9keSB0cjpudGgtY2hpbGQoMm4rMSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdGQsIC50YWJsZS13cmFwcGVyIHRoIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhYmxlLXdyYXBwZXIgdGgge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4udGFibGUtd3JhcHBlciB0ZCB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG5cXG4vKirliIbpobXmoLflvI8qKi9cXG4udmFuLXBhZ2luYXRpb25fX2l0ZW0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKipsb2FkaW5n6YGu572p5qC35byPKiovXFxuLm1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZWQxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDUwJSA1JTtcXG59XFxuXFxuLnNpdGUtc3RhdHVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyoqKioqKuiPnOWNlSoqKioqKioqL1xcbi5mcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICBtYXJnaW46IDRweCAxM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMjksIDE3NiwgMC4yKTtcXG59XFxuLmNhcmQtd3JhcHBlciAuY2FyZC10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggMTRweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uY2FyZC13cmFwcGVyIC5jYXJkLXRpdGxlLWFpciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjcsIDIwNywgMTI0LCAwLjMpLCByZ2JhKDY3LCAyMDcsIDEyNCwgMCkpO1xcbn1cXG4uY2FyZC13cmFwcGVyIC5jYXJkLXRpdGxlLXdhdGVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg4MiwgMTEzLCAyNTUsIDAuMyksIHJnYmEoODIsIDExMywgMjU1LCAwKSk7XFxufVxcbi5jYXJkLXdyYXBwZXIgLmNhcmQtdGl0bGUtcG9sbHV0ZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjUyLCAxOTMsIDkxLCAwLjMpLCByZ2JhKDI1MiwgMTkzLCA5MSwgMCkpO1xcbn1cXG4uY2FyZC13cmFwcGVyIC50aW1lIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udnNlbGVjdHBvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnZzZWxlY3Rwb3AgLnBvcHVwX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjZTllOWU5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnZzZWxlY3Rwb3AgLnBvcHVwX3RpdGxlIC52YW4tc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi52c2VsZWN0cG9wIC5wb3B1cF90aXRsZSA+IGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi52c2VsZWN0cG9wIC5wb3B1cF9jb250ZW50IHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNHB4KTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi52c2VsZWN0cG9wIC5jaGVja21hbmNlbGwgLnZhbi1jZWxsIHtcXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xcbn1cXG4udnNlbGVjdHBvcCAuY2hlY2ttYW5jZWxsIC52YW4tY2VsbCAudmFuLWNlbGxfX2xhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuLnZzZWxlY3Rwb3AgLmNoZWNrbWFuY2VsbCAuY3VzdG9tLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4uc2Nyb2xsLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XFxuICBtYXJnaW4tdG9wOiA2NXB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zY3JvbGwtdG8tdG9wLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXJnZXQyIHtcXG4gIGNvbG9yOiAjMTY1ZGZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE2NWRmZjtcXG59XFxuXFxuLnRhcmdldDMge1xcbiAgY29sb3I6ICMyN2QwNDM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjdkMDQzO1xcbn1cXG5cXG4udGFyZ2V0NCB7XFxuICBjb2xvcjogI2ZmYzMzODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmMzMzg7XFxufVxcblxcbi50YXJnZXQ1IHtcXG4gIGNvbG9yOiAjZmQ4ZTAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkOGUwMTtcXG59XFxuXFxuLnRhcmdldDYge1xcbiAgY29sb3I6ICNmZTRmMDI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmU0ZjAyO1xcbn1cXG5cXG4udGFyZ2V0MCB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2JsdWVfYmcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3llbGxvd19iZy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIveWVsbG93X3Nob3J0LnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9saWNlbmNlQmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5pbnRvLXRhc2sge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG5cXG4uZ3JlZW5CZyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsIDE3MSwgNTAsIDAuMSkgMCUsIHJnYmEoMiwgMTcxLCA1MCwgMCkgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggLTEwcHggcmdiYSgwLCAyOSwgMTc2LCAwLjIpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMiwgMTcxLCA1MCwgMC4yKTtcXG59XFxuXFxuLnllbGxvd0JnIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjUxLCAxODMsIDEyLCAwLjEpIDAlLCByZ2JhKDI1MSwgMTgzLCAxMiwgMCkgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggLTEwcHggcmdiYSgwLCAyOSwgMTc2LCAwLjIpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUxLCAxODMsIDEyLCAwLjIpO1xcbn1cXG5cXG4ucmVkQmcge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDg3LCA1MSwgMC4xKSAwJSwgcmdiYSgyNTUsIDg3LCA1MSwgMCkgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggLTEwcHggcmdiYSgwLCAyOSwgMTc2LCAwLjIpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCA4NywgNTEsIDAuMik7XFxufVxcblxcbi5xckNvZGUtaW5mbyB7XFxuICBtYXJnaW46IDEwcHggOHB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcbi5xckNvZGUtaW5mbyAudGl0bGUge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCAxMHB4O1xcbn1cXG4ucXJDb2RlLWluZm8gLnRpdGxlID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnFyQ29kZS1pbmZvIC50aXRsZSA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMy4xN3B4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucXJDb2RlLWluZm8gLmluZm8ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDVweCAxOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMTM2LCA0OCwgMC4wMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4yKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnFyQ29kZS1pbmZvIC50aXBzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qKiDmlofmnKwxICovXFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5xckNvZGUtaW5mbyAudGlwcyA+IHNwYW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLnFyQ29kZS1pbmZvIC50aXBzID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucXJDb2RlLWluZm8gLnRpcHMgLnRpcHNfY29sb3Ige1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDg3LCA1MSwgMC4xKTtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbn1cXG4ucXJDb2RlLWluZm8gLnRpcHMgLnRpcHNfY29sb3JfZ3JlZW4ge1xcbiAgYmFja2dyb3VuZDogI2VkZmZlZDtcXG4gIGNvbG9yOiAjMDZiODJmO1xcbn1cXG4ucXJDb2RlLWluZm8gLnRpcHMgLnRpcHNfY29sb3JfYmx1ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjVlZGZmO1xcbiAgY29sb3I6ICM2YzA0ZDQ7XFxufVxcbi5xckNvZGUtaW5mbyAudGlwcyAudGlwc19jb2xvcl95ZWxsb3cge1xcbiAgYmFja2dyb3VuZDogI2ZmZjFjZTtcXG4gIGNvbG9yOiAjZmZhMjAwO1xcbn1cXG4ucXJDb2RlLWluZm8gLmNvbnRlbnQge1xcbiAgbWFyZ2luOiAxMnB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucXJDb2RlLWluZm8gLmNvbnRlbnQgLmNvbnRlbnRfcmlnaHQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5xckNvZGUtaW5mbyAuY29udGVudCAuY29udGVudF9yaWdodCA+IGRpdiB7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG59XFxuLnFyQ29kZS1pbmZvIC5jb250ZW50IC5jb250ZW50X3JpZ2h0ID4gZGl2ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5xckNvZGUtaW5mbyAuY29udGVudCAuY29udGVudF9yaWdodCA+IGRpdiA+IHNwYW46bnRoLWNoaWxkKDJuLTEpIHtcXG4gIC8qKiDmlofmnKwxICovXFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLnFyQ29kZS1pbmZvIC5jb250ZW50IC5jb250ZW50X3JpZ2h0ID4gZGl2IC50aXBzX2NvbG9yX3llbGxvdyB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZWY3ZTU7XFxuICBjb2xvcjogI2ZmYTIwMDtcXG59XFxuLnFyQ29kZS1pbmZvIC5xcl9ub3RpY2VfcmVkIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTcuMzhweDtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuLnFyQ29kZS1pbmZvIC5xcl9ub3RpY2VfeWVsbG93IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTcuMzhweDtcXG4gIGNvbG9yOiAjZmJiNzBjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuLmNvbXBhbnktaW5mbyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSA3MCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4uYnVsaWRfbWFpbl9ociB7XFxuICBtYXJnaW46IDVweCAyMHB4O1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcXG59XFxuXFxuLmNvbXBhbnlfdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDIwLjI3cHg7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uY29tcGFueV90aXRsZSA+IGltZyB7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5jb21wYW55X3RpdGxlIC5kZXRhaWxfdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmJsYWNrX2NvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmJsYWNrX3JlZF9jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICNmZjU3MzM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLnRpdGxlX3RpcHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XFxuICBtYXJnaW4tbGVmdDogMTRweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLnRpdGxlX3RpcHMgPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZ3JlZW5fdGlwcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDNjZjdjO1xcbiAgY29sb3I6ICM0M2NmN2M7XFxufVxcblxcbi5ibHVlX3RpcHMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYmFhZDtcXG4gIGNvbG9yOiAjMDBiYWFkO1xcbn1cXG5cXG4uYnJvd25fdGlwcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzk3MDQxO1xcbiAgY29sb3I6ICNjOTcwNDE7XFxufVxcblxcbi5ncmV5X3RpcHMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuXFxuLnJlZF90aXBzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmODBhMDM7XFxuICBjb2xvcjogI2Y4MGEwMztcXG59XFxuXFxuLm1haW5fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcbi5tYWluX2NvbnRlbnQgLnRoaXJkX3dpZHRoIHtcXG4gIHdpZHRoOiAzMyU7XFxufVxcbi5tYWluX2NvbnRlbnQgLmhhbGZfd2lkdGgge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuLm1haW5fY29udGVudCAud2hvbGVfd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYWluX2NvbnRlbnQgLm5vX2JvdHRvbSB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcbi5tYWluX2NvbnRlbnQgPiBkaXYge1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5tYWluX2NvbnRlbnQgPiBkaXYgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWFpbl9jb250ZW50ID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAvKiog5paH5pysMSAqL1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ubWFpbl9jb250ZW50ID4gZGl2ID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5tYWluX2NvbnRlbnQgPiBkaXYgPiBzcGFuOmxhc3QtY2hpbGQgPiBpbWcge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5tYWluX2NvbnRlbnQgPiBkaXYgLmFkZHJlc3Mge1xcbiAgY29sb3I6ICM0NDdiZmMgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyA+IGRpdiAuYnVpbGRfbGFiZWwge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXB4IDhweCAxcHggOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tYWluX2NvbnRlbnQgLmJ1aWxkX2luZm8gPiBkaXYgLmJ1aWxkX2dyZWVuIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTg2LCAxNzMsIDAuMSk7XFxuICBjb2xvcjogIzAwYmFhZDtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyA+IGRpdiAuYnVpbGRfcHVycGxlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTYsIDI4LCAyNTUsIDAuMSk7XFxuICBjb2xvcjogIzYwMWNmZjtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyA+IGRpdiAuYnVpbGRfYmx1ZSB7XFxuICBjb2xvcjogIzQ0N0JGQztcXG4gIGJhY2tncm91bmQ6ICMyZjg3ZjAyMDtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ubWFpbl9jb250ZW50IC5idWlsZF9pbmZvID4gZGl2Om50aC1jaGlsZCgybikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLm1haW5fY29udGVudCAuYnVpbGRfaW5mbyA+IGRpdjpudGgtY2hpbGQoMm4pID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ubWFpbl9jb250ZW50IC5idWlsZF9pbmZvID4gZGl2Om50aC1jaGlsZCgybikgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5tYWluX2NvbnRlbnQgLmJ1aWxkX2luZm8gPiBkaXYgPiBpbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubWFpbl9jb250ZW50IC5idWlsZF9pbmZvIC5idWxpZF9ociB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcXG59XFxuLm1haW5fY29udGVudCAuYWRtaW5faW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1haW5fY29udGVudCAuYWRtaW5faW5mbyAubm9ybWFsX2ZvbnQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLm1haW5fY29udGVudCAuYWRtaW5faW5mbyAuZ3JleV9mb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tYWluX2NvbnRlbnQgLmFkbWluX2luZm8gLmdyZXlfZm9udCA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLm1haW5fY29udGVudCAuYWRtaW5faW5mbyAuZ3JleV9mb250ID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubWFpbl9jb250ZW50IC5hZG1pbl9pbmZvIC5idWxpZF9ociB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcXG59XFxuXFxuLm1haW5fZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuLm1haW5fZm9vdGVyID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm1haW5fZm9vdGVyID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm9ubGluZV9ibHVlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDhweCAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBsb2NhbCBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ub25saW5lX2JsdWUgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLm9ubGluZV9ibHVlID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm9ubGluZV95ZWxsb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogOHB4IDEwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGxvY2FsIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5vbmxpbmVfeWVsbG93ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogI2ZjOWUzZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5vbmxpbmVfeWVsbG93IC55ZWxsb3dfcmlnaHRfYmxhY2sge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG5cXG4ub25saW5lX3doaXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4ub25saW5lX3doaXRlID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcbi5vbmxpbmVfd2hpdGUgPiBzcGFuOm50aC1jaGlsZCgybikge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ub25saW5lX3doaXRlID4gc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMjA3LCAxMjQsIDAuMik7XFxuICBjb2xvcjogIzQzY2Y3YztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ub25saW5lX3doaXRlID4gc3Bhbi5yZWRfdGlwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA3NywgNzksIDAuMik7XFxuICBjb2xvcjogI0ZGNEQ0RjtcXG59XFxuXFxuLm9ubGluZV9kYXRhIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLm9ubGluZV9kYXRhIC5vbmxpbmVfZGF0YV90aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxNXB4IDEwcHggMTBweDtcXG59XFxuLm9ubGluZV9kYXRhIC5vbmxpbmVfZGF0YV90aXRsZSA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLm9ubGluZV9kYXRhIC5vbmxpbmVfZGF0YV90aXRsZSA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLm9ubGluZV9kYXRhIC5vbmxpbmVfZGF0YV9pbmZvID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuLm9ubGluZV9kYXRhIC5vbmxpbmVfZGF0YV9pbmZvID4gZGl2ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5vbmxpbmVfZGF0YSAub25saW5lX2RhdGFfaW5mbyA+IGRpdiA+IHNwYW46bnRoLWNoaWxkKDJuKSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5vbmxpbmVfZGF0YSAub25saW5lX2RhdGFfaW5mbyA+IGRpdiA+IHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ucmFkX3RpdGxlIHtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSk7XFxufVxcbi5yYWRfdGl0bGUgPiBzcGFuIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5yYWRfdGl0bGUgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcbi5yYWRfdGl0bGUgLnJpZ2h0X3NwYW4ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4ucmFkX3RpdGxlIC5hY3RpdmUge1xcbiAgY29sb3I6ICNmYzllM2Y7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAlIGJvdHRvbTtcXG59XFxuXFxuLnJhZF9jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHggMTBweCA1cHg7XFxufVxcbi5yYWRfY29udGVudCA+IGRpdiB7XFxuICB3aWR0aDogY2FsYygyNSUgLSA1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcbi5yYWRfY29udGVudCA+IGRpdiA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucmFkX2NvbnRlbnQgPiBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5yYWRfY29udGVudCA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuXFxuLnFyQ29kZV9jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuLnFyQ29kZV9jb250ZW50ID4gZGl2ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnFyQ29kZV9jb250ZW50ID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5xckNvZGVfY29udGVudCA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucXJDb2RlX2NvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5xckNvZGVfY29udGVudCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcXG59XFxuXFxuLnVwZXJ2aXNvbl90aXRsZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxMHB4O1xcbn1cXG5cXG4uYmFzZV90aXRsZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweCA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmJhc2VfdGl0bGUgLmludG8tbWFwIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmJhc2VfdGl0bGUgLmluZm9fcmlnaHQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5iYXNlX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4uYmFzZV9jYXJkIC5zcGFuX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmJhc2VfY2FyZCAuc3Bhbl9yaWdodCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmJhc2VfY2FyZCA+IHNwYW4ge1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcbi5iYXNlX2NhcmQgPiBzcGFuID4gaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5saWNlbmNlX2JnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDhweCAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBsb2NhbCBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ubGljZW5jZV9iZyA+IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4ubGljZW5jZV9iZyA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5maWxlX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDYpIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ3YmZjO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5maWxlX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiA1cHggMTBweCA2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5xcl90aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnFyX3RpdGxlID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuLnFyX3RpdGxlID4gc3BhbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucXJfdGl0bGUgLnRpdGxlX3RpcHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XFxuICBtYXJnaW4tbGVmdDogMTRweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLnFyX3RpdGxlIC50aXRsZV90aXBzID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnFyX3RpdGxlIC5yZWRfdGlwcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjgwYTAzO1xcbiAgY29sb3I6ICNmODBhMDM7XFxufVxcblxcbi5tb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5haXJfcXVhbGl0eV90aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5haXJfcXVhbGl0eV90aXRsZSA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHBhZGRpbmc6IDJweCAyMHB4IDJweCAyMHB4O1xcbn1cXG4uYWlyX3F1YWxpdHlfdGl0bGUgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAycHggMjBweCAwcHggMnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDY3LCAyMDcsIDEyNCwgMC4zKSAwJSwgcmdiYSg2NywgMjA3LCAxMjQsIDApIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5jaXR5X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjEuMXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5jaXR5X3RpdGxlID4gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjYXBwIHtcXG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZhbi1wb3B1cFtkYXRhLXYtOGVjM2M5YmVdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnBvcHVwV3JhcHBlcltkYXRhLXYtOGVjM2M5YmVdIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5wb3B1cFdyYXBwZXIgcFtkYXRhLXYtOGVjM2M5YmVdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnBvcHVwV3JhcHBlciAuY29udGVudFtkYXRhLXYtOGVjM2M5YmVdIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzg4OGQ5NTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuLnBvcHVwV3JhcHBlciAucG9wdXBGb290ZXJbZGF0YS12LThlYzNjOWJlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsb2F0LXBvc2l0aW9uW2RhdGEtdi0wMTI1ZTMyNl0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDgwJTtcXG4gIHdpZHRoOiA1NnB4O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNTYsIDE1NSwgMTU5LCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDE1NiwgMTU1LCAxNTksIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZmxvYXQtcG9zaXRpb24gLmNpcmNsZVtkYXRhLXYtMDEyNWUzMjZdIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGluZ1dyYXBbZGF0YS12LTcyYmRlYTk2XSAodmFuLXBvcHVwKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZsb2F0LXBvc2l0aW9uW2RhdGEtdi0zZDNkYTYxNV0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDY2JTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsb2F0LXBvc2l0aW9uIGltZ1tkYXRhLXYtM2QzZGE2MTVdIHtcXG4gIHdpZHRoOiA1NnB4O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbn1cXG4uZmxvYXQtcG9zaXRpb24gLmNpcmNsZVtkYXRhLXYtM2QzZGE2MTVdIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZlZWRiYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMjc2NTc5NlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmVlZGJhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmVlZGJhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMGIwM2NkYmJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mbG9hdFRlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxOTUwZDNjMVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9VcGRhdGVEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OGVjM2M5YmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YmNlMWU5MVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04ZWMzYzliZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04ZWMzYzliZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMTI1ZTMyNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjBhMDE5NzgyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmVlZGJhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDEyNWUzMjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMTI1ZTMyNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyYmRlYTk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjg0Y2U3YzRcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyYmRlYTk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MmJkZWE5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mbG9hdFRlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2QzZGE2MTUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMGZlYjQwMFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZDNkYTYxNSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZDNkYTYxNSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YmE1YmQ5MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JhNWJkOTAmXCIiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5sZXQgYmFzZVVybCA9ICcvcHMnOy8vL3BvbGx1dOaYr+axoeafk+a6kOivpuaDheaJgOacieaOpeWPo+mDveacieeahFxuLyoqXG4gKiDmoLnmja7miYvmnLrlj7fojrflj5bpqozor4HnoIFcbiAqIEBwYXJhbSBtb2JpbGUg5omL5py65Y+3XG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBob25lQ29kZSh7bW9iaWxlfSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3BzL3VzZXIvZ2V0Q29kZScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG1vYmlsZTogbW9iaWxlXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIOagueaNruaJi+acuuWPt+OAgemqjOivgeeggeWSjHV1aWTnmbvlvZVcbiAqIEBwYXJhbSBtb2JpbGUg5omL5py65Y+3XG4gKiBAcGFyYW0gY29kZSDpqozor4HnoIFcbiAqIEBwYXJhbSBhcHBpZCDmiYvmnLrnmoR1dWlkXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBob25lQ29kZUxvZ2luKHttb2JpbGUsIGNvZGUsIGFwcGlkfSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3BzL3VzZXIvbG9naW5CeUNvZGUnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBtb2JpbGU6IG1vYmlsZSxcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBhcHBpZDogYXBwaWRcbiAgICB9XG4gIH0pXG59XG5cbi8qKipcbiAqIOiOt+WPluacjeWKoeWZqOeJiOacrOWPt1xuICovXG5leHBvcnQgY29uc3QgZ2V0VmVyc2lvbiA9ICh2ZXJzaW9uKT0+e1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnaHR0cDovLzExNi41Mi42LjExODoxODg5OS9LUVpMWVpXL3ZlcnNpb24vaXNOZXdWZXJzaW9uJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhcmFtczp7XG4gICAgICB2ZXJzaW9uLCB0eXBlOiAna2VwJ1xuICAgIH1cbiAgfSlcbn07XG5cblxuLyoqKlxuICog6I635Y+W55So5oi35p2D6ZmQXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJbmRleFJvbGUgPSAocGhvbmUpPT57XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvYXBwL2xvZ2luL2dldC1yb2xlJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhcmFtczp7XG4gICAgICBwaG9uZVxuICAgIH1cbiAgfSlcbn07XG5cbi8qKipcbiAqIOiOt+WPlueUqOaIt+WFs+iBlOeahOmmlumhteaMiemSrlxuICovXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ0bkxpc3QgPSAoe3VzZXJJZH0pPT57XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvcHMvdXNlci9nZXRVc2VySG9tZScsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXJhbXM6e1xuICAgICAgdXNlcklkOiB1c2VySWRcbiAgICB9XG4gIH0pXG59O1xuLyoqKlxuICog6K6w5b2V6aG16Z2i6Lez6L2s5pel5b+XXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQYWdlTG9nID0gKGRhdGEpPT57XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IGJhc2VVcmwrJy9sb2cvcGFnZUxvZycsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgZGF0YTpkYXRhXG4gIH0pXG59O1xuLyoqXG4gKiDojrflj5bnlKjmiLfkv6Hmga9cbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5mbyh0b2tlbikge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3BzL2dldEluZm8nLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBUb2tlbjogdG9rZW5cbiAgICB9XG4gIH0pXG59XG4vKipcbiAqIOmDqOmXqOagkVxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXB0VHJlZSh0b2tlbikge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3BzL2RlcHQvdHJlZScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIFRva2VuOiB0b2tlblxuICAgIH1cbiAgfSlcbn1cbi8qKlxuICog5L+u5pS555So5oi35L+h5oGvXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJNb2RpZnkoZGF0YSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3BzL3VzZXInLFxuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgZGF0YTpkYXRhXG4gIH0pXG59XG4vKipcbiAqIOafpeivouaJgOacieinkuiJslxuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb2xlcyhkYXRhKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6ICcvcHMvcm9sZScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgfSlcbn1cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vcm91dGVyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcImh0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxXCIgOiBcIlwiO1xyXG4vLyDliJvlu7pheGlvc+WunuS+i1xyXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcclxuICB0aW1lb3V0OiA1MDAwMCxcclxuICByZXRyeTogMiwgLy8g6K+35rGC5qyh5pWwLFxyXG4gIHJldHJ5SW50ZXJ2YWw6IDEwMDAsIC8vIOivt+axgui2heaXtuWQju+8jDFz5YaN5qyh6K+35rGCXHJcbn0pO1xyXG5cclxuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgKGNvbmZpZykgPT4ge1xyXG4gICAgY29uZmlnLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX1VSTF9hcHA7ICAvL+aJk+WMhWFwcOaXtueUqFxyXG4gICAgaWYgKHN0b3JlLnN0YXRlLnRva2VuKSB7XHJcbiAgICAgIGNvbmZpZy5oZWFkZXJzW1wiVG9rZW5cIl0gPSBzdG9yZS5zdGF0ZS50b2tlbjtcclxuICAgICAgLy8gY29uZmlnLmhlYWRlcnNbICdYLUFjY2Vzcy1Ub2tlbicgXSA9IHN0b3JlLnN0YXRlLnRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpOyAvLyBmb3IgZGVidWdcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIChyZXNwb25zZSkgPT4ge1xyXG4gICAgLy/mjqXlj6M5OTk5IOWPr+iDveeZu+W9leW8guW4uOaIlnRva2Vu6L+H5pyf6YeN5paw55m75b2VXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAnNTAwJyAmJiByZXNwb25zZS5kYXRhLm1zZyA9PT0gJ3Rva2Vu5byC5bi4Jykge1xyXG4gICAgICBpZihyb3V0ZXIuaGlzdG9yeS5jdXJyZW50LnBhdGghPT0nL2xvZ2luJyl7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3VuVXNlclBhc3NMb2dpbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXVpZFwiKSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09ICc1MDAnICYmIHJlc3BvbnNlLmRhdGEubXNnID09PSAn55m75b2V6LaF5pe2Jykge1xyXG4gICAgICBpZihyb3V0ZXIuaGlzdG9yeS5jdXJyZW50LnBhdGghPT0nL2xvZ2luJyl7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3VuVXNlclBhc3NMb2dpbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXVpZFwiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0sXHJcbiAgKGVycm9yKSA9PiB7XHJcbiAgICBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBU0NBSUFBQURackJrQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQUVxQURBQVFBQUFBQkFBQUFFZ0FBQUFDYXFiSlZBQUFDVkVsRVFWUW9GWDFUVFU5VFVSQTlyMzBrdEZHaHJTMEw3RCt3TGJ1V29IdGRGVDkyTnFnRVZ4cmQ2ODRZOWhvSUMrUEtqNDJKWUlPRXFDRkJKRkkwc2RUS1doZHM3QmVWaElKOWZkY3o5L0lxWWVFMDZic3o5OHpNZVdmbVdXcjhCdEpwK0h3NFlrcEp3TEtPaE9HNktCUnN5Um0vaXEwdFFSaW9BZmIxeWJQWi9KZG1BSU9Eak5qU2h6bERRd2dHV1p3L1NlNTBjT3VPSkV3OWhOK3ZLOUpSMk4xRnNjZ1VXKzVZaGptbkU4Z01vK1BnVndXcks3RDljaFdKWU9Rc1lsSDRiYXg5UXZtYm9hM1RETGRNUm8zbHJJME5uSXhpc3d4WHYxc29oTndWVkNzcWxlSTdTSm9HZTBxd29lTklUbjRlOWJvcGVVQ0VibjVlcmh5bkd6Y2tJYlVyRmVtVHphcGF3MnJ0SFNCYWUrSm1zNGlFQlVDWWxsYW5zYXpid2VwSGJING4ybXExVUt0SksxcXRhczFNSVJBUWJvMkd3TFRaNHAvb3g4M2I2T21SbWRCSW1EYWMxbWZQRlFmNDB4YXdVbDQzRXozOFQwVllPeGpBaFZIRTQxSng4UzNXdjBCSmFWdHEvOTdHOUNQUm1yclI3WkxrVkJiZUlKSEFzZU1JOWFOVXdxdVhtTGhHak5mTjU4ZklHZVJ5bEZIVjZ0Yk1OSHdXTG80aWxjRGNISmFYY2U4dXhuSTRmdzZ4R0R2ckFaQVBRZEVvcWxXOHpsc1VqUnJRNHFlUVRPTEhUeFMveXQ1UUJWTFY0L1M2TVdUYktwVzBlQWlIQldHTU9zbTRGSHA3OGZ3RkhqL0IwcnREeTBYUVdrRTJraURPaDFyenZMRElaY2ZsUzlMaC9nT3NmTURPdGxGYmQyTnQ3bWk1cEZmT1crVjJHK3VmTVR1TFowOWx5cE9UMkdsaWY5K1FzQ1diM3dMM21ocDJ1ZkdTSHc3ZGllc1lHSkREMG52VFI4Q3Vhd3NOMm44K1U3TURYUURkUXVFdkw0d0JORGNZTTEwQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVNDQUlBQUFEWnJCa0FBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFFcUFEQUFRQUFBQUJBQUFBRWdBQUFBQ2FxYkpWQUFBQ2gwbEVRVlFvRlhWVFRXc1RRUmllMmV3bUljM213OFRVdEJlam9JbTl0TkNDVUJDaFJXc1BGUlVVdk9qVmcxZjlFWG9RUWJ3cWFCVlBVcVdVSUZJUGxkWVU2d2R0WThTMkZHTXJTYlBkM1NaTnVwc2RuOTFwVm5Mb2hDenZ6RHpQKy9HODc5QTdTL2Q3dzJtQkNLUjlNY0p3UVBGclh4YXh2cWg1RVp5cnlaSE5SdG5HT0ZESElMSVlBRjQzYXc3TGRzRUJSM3h4V0NMaWdET2F1K1VYZlBzM2hEVUp1OWs5aHUyVDRvU0hVTVRrdkxyVm1CeDRESXJvUUNrNEp6cFNmYUcweGF3dFE1blhGajNVZzZ1b0pQZUhlbUpTVktEQ2dwWXZWRmQ1MmpiTjhjVDZRaWV2SkllWDlaVkRVdWhuYlozWEZoYmxTNTFERlVQTHlNY0FMRlJYZUZoWENkcGtGamp2dHVhMlRkM1ZBUWEyT01RVkFMeHNSTEtqT1lzcDVuYlVHem9YUDYwWWV0M2E0OG5Bd0JhSFlVa0dvS1ZaaTJZUmxsTVhDOVYxdUhlZ0dwS0JyUmphc3o5di9JSVhXOVhVQWVOQlJOUUFyVzkwajBHRFZxL3NLelNHWTV5d0hFMU5aZ0lNbUpzazk5TDJoYXBRZU9Ud1lOS2ZnUDJoTXY5VnkzTUhJcHlocDArTEV4RkpobTV1a3NqUjcvRk5WejZsZzZtQUp4Q1dnbmw5ZGFvMGM2MXJGSlQ5YUFLaEErR2VpNTFEcXFGREE5U0R1L1B4d1V4SEtsdjZPS3Q4dTMzMCt1WGs4Tmw0ZjB5S01HTDliMEJVakNoN1dyWThpeFpEQTZUYjVVOWtnc2QvMS84dVZYODFpWVdTTElZYzdiOWJHL05Rd2VrcGlZZ3lMd0JNa1lvbWF5S3lUL0MrM256L2NtTnl2UGVlTzF3QTBBWHRCNzdvYWNWUVZITUhSOU5idWMvcThvWEVHUlQ4Y08zNW5QSjl4OXpsYXR2UllHRkdNVy9PeU5sYmpMTEJUT2lXTGM4OE9IVVh1VDFhZTZFM2F3WXplTWZwZVBIdFFROEhxZTQyNnpGdkJLNUxEY1dKdy9Cd1htMU1pWGh6T0QzNG1SSStHUzZBUDlOLzN0TkhWdnVtT3BRQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVNDQUlBQUFEWnJCa0FBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFFcUFEQUFRQUFBQUJBQUFBRWdBQUFBQ2FxYkpWQUFBQ0swbEVRVlFvRlcxVE1XeFNVUlE5RC9oRmJBbW9oYVpJbWpnM3NwZ210WXV6QzROenE2TmpGNTJjallOT3JzNGFCd2ZUd1VSam9sMGFGZ2N4cmpacE1FWStsQ0xXMm43NHozUGVRejQxdmdIK3YvK2VlODg5NXo1alA5OUdZUlZJNGQ4VHU4RC80djFHUnBqS09uNjNZTXdwWUthZzEySC9WTkJhbktreWtsR2Y0eFlhTmFUUEFoNXBZVWRZdWlQQTNpT1lkQklmL2NMVkppR0U4UmhoWm1zb3JMRStUa0ljYk1PNFQ4RUZGSzlocHFRRy9SMGNFcVBTSHVhd3hUVzd1STVCMDh5VWNmZ0pzSW9HNTdHNFlVL2F5TmMwaEdBNms0a040cUV3NFN0RTNXUk81a1pkQlFkTkpZeW5TTHBaUktINmxPdUk5akU2OGxYMUVQVVlOR3diaFdNS0NVbHF3SG5JamVXVjJobkQrTkI2akhRTzFKRGxtT1lPWjR0QnJaZnVPc1hvbFJmVG9MRGlFamIvUmppcWdZMlVqSGhLa25IOXFUL1dUdVZzcVc1eVZkZ1kzVGY0OGNGL0ppd2xUL2NlZ2xwemdJVGtwcmgxWHBxNVpXVG1FQlF4K0lqdnozSHgxc1EzOWsvTEh4cEFBVGdENTRHeDgzVXp1NHh3QzczM3VIUVBsUTNNWDBkUUpza3BBNEtTcGRIdExRVG55STFreEMxZnc5RXVmcEtiRjhPWm1TaEpjN2t4K1JyM3lwQ3Q5NXJRVkFCTHV6aGtGdCtlNGVzVFhIazdSWklaQnp2R1VrYTNYTU45amQ1NWpYNERDemNrNHBmNzZMMkQ0cm9aWGtrTDdpZ1hSenRGWkN4L3FEVjFhNy9BNWFjcXQvdEFtUGpZRTNHK1phdFliU1lMcFVZczZDNU81U2F5QzZJc2JpeG53V1Q1UmhvNkUyM2NtMzc4TldWekw4TWtJU2JrRC9sRTErVW5Va1VSQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSFFBQUFCOUNBWUFBQUJ6bFVmdkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQXpQU1VSQlZIaWM3WnBKakJ4WEdjZi9yM3BtN0o1cHo0eWRzY1BCNHpHeWtJaHM0aENrQkVWZWlJU1ZZRVZzRjVZVEYzSkJDbkRNeGlFb3NRUmlTeEJjT0lFRXlTRWNISUVTOW5pSkV5c2hSTEs1Mk1oRERwWm41S1VIdW1aSlQxZHhtTzZlcXRkditkNVdWVWI5bDFyOTFucGZ2Vjk5WDczM3VvR2hoaHFxdW1KbEcrQ2drTGFuQWE4ZFZMY0wwS3JZV1huUVZaa29YbFcxaTFmbEFGZHA0cXBraTQwcUFiY0trMWdGRzN5cVZMQmxUZWIvRzBTUlNnRmI5TVFXT1o1dXJLSW12RkN3VlpyZ3NxL0h5emVJUXNBV0FkVFhHR1dIYVY5QWdvSU5QVW11MXk4Ym9reXVVSUpCRFRWaEx0Y3R5cU45VEdybHdJWUFhbnRObTM2aEhraWJpYmFGNHhWcUZSWXFKbjNLQ3NFbWsxN2t3ekFnbnhOa2VpMXErMUFlSDlLalNvTmExZ3FVMGo0MGNKbW9FeHNDckROVUg1UGhPMlRxMmhRZGRuV1Q3RnJ2Mmo2bklyY1ZMcUI4ZXJSTXJoN25FNncxMUtLMkY3YXdYQ0c3eUJhZUMzVGJ0bjBWc2NXd2dXSmEzcTl2dFZxSDYvWDZrU2lLam1US1A5WDkvaHNBSkVseUNnQldWbFpPTlJxTjA3RDNMdE55WFoxTFd3RGxiVE5NeXJVUFJLdlZPancrUHY0MFkreW9nVzE5SlVueURBRFVhclZudTBXbVFId0NkMmtiYkt1aGFrdUZwdTNmYkRhUFRFNU9QbVVMa3BjQUxHQUd4UWRzMjNZQWl0ODdVc0JwMitoQWZwQUM4MjFnb1FNME84QnFkMHEyUnNBVUF6NDBBdXdkQmNZa1ZpWko4Z3dIdFNkK2Npc0hOY1FwRFJXbUZkeG1zM2xrYW1ycWozejVTZ3FjWFFIZVdRWCsrUUhOMEx2R2dFOXNCUTdWZ2JyQUdnZXdwVUV0YWcrcEEwWEtkenFkSjZJbytrNjJZalVGWG9tQjEyS2diYm5ZSDJYQXNYSGdjdzFnS3pkeUYrcHozYXdwU0Fwb1ZibHBHNituTVNGZzl0UHRkdnZKa1pHUnA3TU56NjBBTDdZMndxb1BUVWJBVjdZQkQ5VHo1ZXZyNjk4ZEhSMlZMWmdxQmRYWGh0MEhUR21kQ09adi9ndThHaE1zczlCREU4Qlh0K1hMT0tpQUdwVFBrR3pVTGlSUVc1aTVkaUtZUDI4Q2I2NFNySExRZlZ1QmIwem55NWFXbG81TlQwK2Y1cHJLUUlhQzZnUzBUSmdNQU5JMFhjbDIvRmtUZUNzd3pKNFVVTStBQmpJRVZHVjlwT21za3cxd01zeDJ1LzFFdHVPdmw0QzNZZ0NkWWo3blkrQlh6Ynp4azVPVFQ1bmVoMmNwcjZrQ0d1SllVSGZqREJtWTJWQjdKZ2Irc0FTd1RyR2ZQLzhIT05YYWRBckcyTkZtczNtSXQ1ZHdiNks1TVQwWjAyckVvYTlwcUtYQUZGNm5sUUF2WGsvQkVtTWJ2ZWlsR3d6MzFJSEoya2ErNjZXZndXYjRZOTAwRTVTcDBxSzhySXhVN3hweVZiS0cyVzYzSDg5NjU4bWJRTnhHWWFHVy95eTNVNXk4bWZmU0d6ZHVIS0xjQ3lIdFZUS2dOb3NsMC9jcFB3RU1nbXMwMTRFLzNVZ0xEN1g4NXk4M2dWdnJtM1p0Mzc3OVNjSTkyY3dMdFordzN1VE1WVlZ2R21wbDN3REEwalR0N3pCL2R6M0Z5NHNhYXdyU0YzY3hQREt6bVdlTVRXQXo5SWxXdDZvNlZWcFZwcXkzQ2JrbXNDa3djMzBYRmhZT1pRdiszaXpYTTdPZmQ1cjUrZXZhcXJ3ZjRweFIyMmdsV2hRVnZkVE8zZlNPSFR2NlFKZldnZmtXWmE5ZGpONXZBYzAydy9Ub1JyNXI2eGxzTGxKRWk2T2VkQXNua1l6cmZTeUtURjc4dXBETGtpVHA5NXR2bGYvdTVEL3p5NXMzVTZ2VmpsRHVTVE5ubEhLeVRMY3ROZ05TYjVnQndPam82T0ZleDRWVkJuU3E0NkVBY0cwNTNmaFJOUytWWjRyYTZjcE02bk55MllmMkJqTXAxMTBuMTYrNXR1R2hWVkp6YmFCSUZVb3BJVmgyUFN2eFFGMWMzaXJFOG0yei8wSlk2KzA5SzZTMTltWTZZeXNGcGcxY2luSjlUVHpVOTJKSnYyZExVckNLaGR5TjA2cWNtU3FZM29hbFhzL1gwWi9KWGxPNUVVL1Q5UFhla3o4ZW9YSWVXczhzSTlNMGZUMVQ1ZlA5YVAxQXVMNURiVVZhK2UzWXdpcm5vVHUyU0E5b0tPZTZvY0p1WDc2QjJoeFg1VHkyM1c2Zkhoc2JPd29BZDlaUk9RKzlNL1AzbEhhN2ZScGljRm41RHI5S1pZRlNOdjlVbWU3Rit1bkZ4Y1d6dTNmdkJnRE1UYUp5cTl5NVNXbVZMVmdxY0ZJN1d3L1ZIU0RZOUdYOHRTYkdHRDQ4Q1Z5NVZZMndPemZOc0MwVGNoY1hGODkya3pLWTFCTWprVXc4dTkrMnlIY282VVJwZG5iMnpTUkorZ3VqZzdzWTVxOVhBK2pCWGZsbmQzWjI5aHhvTUwxNm9VbytmdzgxUFdTUVFsMWJXenZUUzk4L0c1WDJPeWovdVg5MjA4elYxZFZuVmZkQXVPY2dDdkVEdDgwWlpxN3U2dFdyYi9UUzI4ZUJRM3VqMHM5d0g5akRjTWZFcHZuMWV2MEhpdnZTZ1ZhMWQxTElmeXpJcExwWkJnRDc5dTA3bDkzalBmUlJoaWhCcWQ3NThGMjF2cEZkNzFUZUExSGVQYllvb0NZcmFBWUFWNjVjK1Y2dllLYkI4UG03STdCT1dzcm5Dd2NqN09UK2VLMnlYWklQSG02cEExS05WSjBNOFdsU1BrbVMzMmJQZG4veDEzVzgrKzlpRjBqM3pFWDQrb041NzZ6WDZ6L3NabFB1dzVkQmsxWjk4MmxSZnFBdU5GQlpHU1hmZy9weUQycTdBenovK3c2dUxCYno5Nys5T3lNOGRyeUdzY3hlZ0RFMkF6MDhLbHpSdHlvdHl1ZktpM3lIMnB3aTRmTGx5OS92cFVkcndLT2ZqakEzd3daOXcvTm56eDBNang3THc3eDA2ZElqeEhzeHZrOWZLdEpEcmIwMGp1TnZqNCtQOS85RnY5Wk84Y3ZYRTd3M0g4WlRQN1lud3RjZXJHSEw2R2JaOHZMeWN4TVRFei9xWm5XaGxoSnVnM2hvMVlCSzI4UngvSzBzVkFCNDdSOEpYbm5iNzluZzhYdHJPSDV2UG5CMVlmNFlOSGhEb0pxeWZqNk80Mi95VUs4MWdWZmY3ZUR0ZjdsNTY5MXpFUjcrZUlROU0vbmI3Y0w4Q2Vqd1hCZEhxclFvbnl1L3JZQUNZQmN1WExodi8vNzlKM2tqcjkxS2NmNXlpdmZtRXl3czBWYkMyK3JBd2IwUlB2bVJDSHQzRGQ3K3hZc1hQM3Znd0lIek1QUEdJVkJObVRDL3ZyNytVdmRmZHdOYVhFcngvdlVVMTVvcG1qR3d2SllpU1JtMmpBQlQ0OEN1S1liWkdZYTVuZUpiN25RNnAwWkdScjRFR3F4aHlEWElLNi9WYXJVZW01aVllRnhpdDVVeU1BRTlFQnV2RlYwcis2MUtpL0s1OGlLM0xWVER5RzBhamNZTGNSeWZzRGNwcnppT1Q0eU1qSHpad2laYWpEZHZhOXlYQWpTb0FRWnRoVSt0TDZoeEhKOW9OQm92Nk1hVDVFV3luVGZWdUZyWmVLalRnSkordGs5OUNyaEQ1V0FxUTVyT2xySlZ4cTh0RkttQUN5Zk9GcXJBTTdOanFDQlJIa0lmRDcrUmlnSnFFcjZva3pJdzZZMUc0NmNtVURWaFZqZStyTDJKdkVNT0FaVHlkUE50S1hrVnpQNDMxVk1WTUYxWG5UYXZFMjlnZlFLbHZIdHNKNFlFczlkQUI5VUFwc29HNjYxRlNGWGxIV29kWm1YbE1xaUNCWkFPSmhXY2ovZW44eUl6RWhVU0JuSTExdWJKcDRiQzNqVUd3bThHcG13YzdZTkN0TkdIck1LeTZoVElwQzEvU3NTWG1aNGlaZE82dmlwN0FHeWNLQUZBbzlGNG5yc0h5b1BGUHlpMmFWV1p6aDVSWGxqbkcyZzJUUUZoQWxiV1R6U1d5bTdWSW9YeTdRT3E2RnVWbHRrOVVGZjBPOVRrSm5RTElaVUhpTHhOVlM0Ync0Zk5WSGtKMXpVdXIvSlFVYjFKMk8xOW0zaXA2anE2TWFuU1BUajh0NmxuVWE2cnNrblZia0M4aC9wNFNuVFhNRm5jeU1vb29aRDNTQ2pxYlVPakRyQVhyOU1vTndidm9ZRDllelNidC9GUzAydkkyc2p5dkZSZVlPdWhKdDZwc3NWYXJrRDVNcHN3cVFLc3E5UFpRSkZKZEtCNkxWK25HMWRWYmdUYkZLaW9uakt4dm9DWlBGQW1NZzN2b20vUjlVSjc1MEJmRVZDZ0hDOVZmY3ZHMDhHVTlkZE5yQzFVS2h5cWR4ckxCcWlvM3RWTFhiNTE5cWhrK3g1MStUYVJjWjhRUVBtOHl6WWtKTXllWkZCRGVhekpkc2RZTXFDQS83Q2JUYnZ1TldWMitIaUhadk11VUZYWGw1VTUxOXNDbGRXSGhpb3JvOWlURldXQ2JhQlMrMVBzc1pJS0tPRG1wWHllQ3NjSFRKL3ZVRm5hZGo4cXF6ZVJ0TDhMVUZtOWlaZG0weTVsT3B0VTB1MzdxT0JNQWN2RzA3VlhLalJRUHU4THFtNGNHNW1zZUUzclZlT1kxaXVsQXdwVUE2b3FMYk5CVlc1elNtTURXSlZXMmFHU3NvOFBvTEkyTGxCdDBqcDdSREpaSFBsTVU4YzJGZ1VvNE45TCtid3ZyL1MxYmVITGZFSjJrZlk2dm9ESzJ0aENWZFg1Qk1tTHVrQXlyZE9OUStsRGtzbEVGQUdWejl0dVQxeENycWpjRml3bHI3TER0STN4azIwVGVrWGx2dk9xc2FreWZaLzZ5TXZLYk5vQW9JZmNubXk5VkZUdXc1dXBOcGtvQkZoWm1YZlpUSVpQcUtJeVY0aXVCd3U2T3A4d3ZYb25ZTzZoQUgzQ1hLQ0t5bHpmbDFTNUhLNzdobWtzMjhrb0N5cDFmTmRGa2FyZUJ6UXFUR1BvTGs5M0NLZyt5MjNsQTQ1cEdIZHBsMU1SUUhWdFF3RDA1YUdxTmpiZUZ4UW1ZUGNPelNvMFZKYzZGOWxDOFFIVFNUNG14T2ZoaEE5NFBsZTUxSFkrZjBGeEF1L3JDUy9xZ01KMlBGdTVnaktGNCt6RlBpZkdOMVNUYTRZNnkzVnBWemhNd1ArVFh2UkJoZWtZcnBNV0FxUnRINkZDaEs1UVVGMnU3NkxRN3ordmk2VlFreFA2d01MSFdESVZDY1g3eWpmazAxN1VIdGZtT29YOTRCeDQvQUVWRWI1OHZmK3FvaUxldzlZcWFyTEsyaDc1VXRrZVRWYlJFMVRtTnNsVVBpZS9rRk1pb0p3bnZrcGhQdlJFRndheXB6TGZUMVY3Ti9wVzRUQ0Jha3hxRld6d3FWSkE5bFMxeWF5YVBWU1ZDakdycWs1Z1ZlM2lWUm1RUGQwT0UxYzFHeXNITWF1cVRSWkZWVDdMTFYyM0kxQ1ZiTy9udG9JMjFGQkREVFhVVUVNTk5kUlFRdzExRyt0L2UxUVI4M0FDM1dFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhJQUFBQWZDQVlBQUFENk9VWTVBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFTc1NVUkJWSGljN2R3N2JCeFZGQWJnLzl3WnI3MzJ4Z3JPQTFCNEM1TllpSWdvVFNRa1V2RVFCVFZGSkNRYVY3U0lCZ25Ya2RMUUpCVU5RVWhwZ0JJSkNTclNSVUkwU0pGQWRGR0VRMkk3MlozSC9hbWNaSjE5ekd0MzdwMDVYK2ZkZVp3NTkvZDQ1bnAzQkFXUlhBSHd0Z1hlQmZtZUVka291aTJsbEZMRnBCYi9obmxXSU5rRjhLa2xQZ0x3UnBRdzZrZFlIc1JFbEZoWUF1Q0U5VE84T0dIMWgyOU9YT2J4OS9QVU1tTFphYlZNcTZPcVdxYnVKMDh0VXhZc1ZVdkc4Y2xTaTJhbFdDM3p5c3E4eHNlbFdsekt5cjZsRG5CdUk0Z3puOGhKWHJERXhYN01oUWQ5SGhuRWhDVnkvU0ZvclR3alV5TlB5bXcySFlRaGhkclJvaDZTZ0NXVHFTZGlrdXRweW0vdkQvakMzVDE3UExWamxpdFV4VnhXVVk3UnJDalgrSndWRXBPdnlFbStrMXArZldlUEovcVJ6NGVhbnpkSDYwMmhEaXZadzNrTlFlbjlhRmJLY3pJckVwdXhPeVEzNDRUZjNMNXIvVHlKZTFLeUoyV3FGdEZNK29YanBsWklidllqZnJtOWE0L2JNVk1weWk4Nm5WR1R0alJFczFKZXdSN2FVVk1ySk4vdlIveDhlOGMrWStmY2FXOEcxcHRDbTh1YjZReFZ1OFpuaFFlbVZraXVSd2t1YmUvWWx3cWR4RDFKdmRObE9sMWNoZHB5bkJucHB6TW1hTXR4RmtIQUFzTlRLMUhDci83YjVjYThyOFNicXZGWEFzbzdtcFVER3RBUWtvK3V5RWwrMkkvNFpwUTRlbVNPbHVVVkovL2pQb1A5YUZiS2EwdFdHc0JhUkFZQVNDNE5ZbjYyMStmVHM5cVpObHk1UmpPcHNuTDF3d0lpQUlsNysxZms1L3NSVDQ3N3NvOVBYRzE0NDdXbElacVY4clFobFFrTUlKQmJCZ0Q2c2YzNFFjU2pkUmVsbnFTM3FDMmkweGtxcDRWUUVBYjQwNUI4TnJWeUtrbm5YRUZiMHRDVzQ4eElQNTJoc3RLNzYrazZBZlpXdXZqZEFGZ2ZSSHl4ek1iMFNrQzVSck55Z0Rha2RyTVlndDZ5L0EzZ3BobkU5a3lVY0cwRys2aFBXMjVSOVplenZMWmtSWlhuMkNBRUFkQmR4RTBSK2NkWW1KZjFhL2pOcHJlb0tpdk5TazBLTkdSbFVkQlprR3NBWUd4cWora1hnSExRWHFtc05DdTFhL0lkMCtHZTNEaTZpcDhBd05CS3A0WWFudERraHFzRGREcERaYVdETUZKM0VWaFpsR3NpY2hzQVRGcFZxN1RoUS9RV1ZXV2xXVkY1UGRVejEwOGN3K1g5bncwc2t6b0xVbjd3NWlUZ1RhRU9hOHNkazZkWldWNENWbnR5VVVUdTdMOW1MR2QvSW05cnc1M2lTUTg5S1ZPMWlFdVpEQU5nN1pCY2V1NElmbno4ZFdNdEduTkZycmVvS2l2TlNrM2EwcEFaWkNVd3dOb2grZTdVOCtZTEVSazZieHNhaWZQdlVzMkRONW4zcHREbThtWTZReFVTR09Cd0R6K2Nmc1ZzaXNqOWcrOGI2aHo1N0hpU2VrL0tiRFlkaENINktJZEh3Z0JZN2VMcW1WZURDeUp5YjlReXhxYmxUdVI2aTZxeTBxd28xN2llbFRBQWVsM1pPbnN5K0VSRWRzY3VaOUdjT2ZJcXVENndEM2xUcU1QMDB4a3FxemxuUlFUb2hPYlg1VTY2ZGZhMTRCY1JtYmlKa0RSeG8wYmFrMFB4cEV6VklwckoraGtCZ29DL2hZRmNlZXQxdVNxeWtPbENPeVJzQXNpczYxTTEwZW1NbXJTbElacVZVa1FBRURDQjNJRGdaMXI3L2ZuVDRYVVJ5ZlZnOFRCTmtRRGNtbEdkSTQxOVJsZk9oM2ZsV256TXdsVThMNnlxaDQ2TjNNd3NlekptaGFxZW9WWkZYelFyWTdhVCtjV2MyOGk1UXRPeVVrVlBNbXlISW1ZSHdsc0EveHBFNFI4Zm5CdjlUOHlzL2djUHhVUXlYbzE4U0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhJQUFBQWZDQVlBQUFENk9VWTVBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFZWFNVUkJWSGljN2QxTGF4elpGY0R4LzcxMXE3cjE4a1BZTVFZUEdHSlBZSGFCckNjWm1FQWdrS3dEZ1VBMnMwbjJzMDgrUUQ1QXZrRzJXUVFtV1dkaEF2TUlEc01JUE5hWVVUUnlwSmJVNnE3M21jVzkzZldRckVnZWo3dVZuQis0Zk9yVXVhZU9qQ21LN2xLMzRTV0p5QnJ3ZGczdkdPRmRZL2oreS9aU1NpbjEwcDZheTFTTHlBcncyMHI0dVlVZlpJVnNIMDNZSG8zckozdUg1bWxlVVZMWEdHUEZyNml4MWtwZCs5allrSzlDUHZRMUZpSHNXSXZQVno2bVZWTzNhcHFabXRpMit0QmVpNDlyd0pydXVjS3BzSFQ3MUZYdlhEV0liZGVJVUllMXMzelZtci9YVTFxelJlM3p0dWVQa0tycTFwdzZiL3Ruc1FoVmEyMW9HdGxJQ0Fja2lvVFFOTEtSVkZSK3pxaFZReE5ITnBJcTFNOXJLcUJWSDRtUEpZckN6MTBSUlpFL1B4VldvdkR6VlVTRUdueE5XVGF4WDlyRVVJVlpBRXFpeUFrbGxKUTQ1M3krTEpHb2lTUG53bmxMSXZINUVwK245SHZNNml2ZnN3eHJaejNMMWxvb29iVTJjaTdNWE9KQ242SzFGa3FnaVowNEtRQW9jQzRPODRjWW9DaVF1SW1kaS8wOEZEaDh2dWpGc1l1Rnd1OUozTVJ4SFB0ejVUNzJZVTRjSjJGdFRrd1Nac3NSYWVLRVJQSVF4MGtpZVJieVNTTGtrSWM4UUo1bEpJT0JYNXRsU05MRXpQSmtKREtRTE1RRHVqRkFTc3BnTUJSU1lCaitUNmN3SENKVGdHa3JCbGJveGdBVFlFV2FlTFdkWDBVNENRdldtbGpXRU1ZaHY5N0U2K3ZJOGJHUE56YVFZNEJqSHg4QkhNRzFhOGdod0NGY3YrN1BOUnJCalJzK1BqaUFtemQ5dkw4UG01cytmdjRjYnQzeThkNGUzTDd0NDEzZ1RwaDVCN2pidWtid2N2RWJ3RjhjRnlRaXY2eUYzNTFNNWRuZW9UelpHZFYveXpPYnp2cFphK1Q4RGtvcHBWNHhBZEwvZWlFWGtZZFZ4UjhQVDZUK2RMdjYweVN6aC9NNzZXOTNRS1dVVXVlcmdlemNDN21JL0xpcytjT1RmOWVQdnZpS0xRQ3JWMitsbEZvVzU5K1JpOGg3ZWNGdi9ybGRmakFhMitldmNUQ2xsRklYZC9ZZHVZaThOODM1OVlkYjlaOG5HUk5qWC9kY1NpbWxMcURtckR0eUVmbkpPSlZmZkx3bGY1MFdwQXNZVENtbDFNVmxuWHR0RVhtWVp2TCtSNTlWZjgvMElxNlVVc3RPNkYvSTg0TGZiKzJZZjZVNTB4Y3NVc3N1V3ZRQVNxblhTSUIwZmlFWGtaK05UaVRaUGFoM0ZqaVUrcWFxUlErZ2xIck5waFpBUkliVG5GODkzVFZiaTU1SUthWFVoU1hBNGV5Ty9JZWpNZFhScEQ1ZTVFUktLYVV1WlFVWVdZQkp4azkzbmxlN0N4NUlLYVhVNVd3Q1gxb1J1WnNWYk82UFJYL3BSeW1scnBaTllNY0NELzl6VkdXTG5rWXBwZFNsM1FPMmJKcnk4R2hpSm91ZVJyMGkrdmloVXY4dk5vQ2hNV2JiRnZDZE5KdC9pcTlTU3FtcjRYdkF4d0MyTE9xTmFZNit0S0tVVWxmTEErQVRBRnNMdFRUZnE2T1VVbXI1ZlJmNHloaXpCMkNMMG4rcGxWSktxU3ZqVGVEUmJNZUtXSDFaUlNtbHJvNDNnUytNTVFlemhDMnJPbC9nUU9wVjA4OWFVZXAvMlhYOHMrT2Z0Sk5XQkwyUUs2WFU4bHZEdjhINUQyTk01eVZ4VzlYNnhJcFNTaTI1TmVBKzhOaVkwNy8zNDhwU2N0QnZWRlpLcVNXMUFkd0JQalBHak04cWNGVVZaZWpUaDBvcHRZeHU0RC9oY01zWTg4S1h3VjFlVkhwSHJwUlN5eVhHMzRtbitPZkY1YnhpbDFYNlpxZFNTaTBCaTcrQU8venpaM3Y5TnpWZnhCV2xaSHBIcnBSU0N4SGhMK0RnWCtQT2dMRXg1bElQRXBzUEhoVS9Bb2dpSndEOVgvU01jT0dXdnBkdjE1ZW44NmZxblJPS00vcTdYbjM0eTRVK1JhL2VoVDc0VGF0UExMNnk2UFNKWEJ6NmQrdkZ4V2YyY2ZONmY2d28rcmxtelR4ZnpLdDlQdTdWNTkxOGM4WlduODRZZmtmYWZmTDVoamhPcEpNbWg3eWJieDkxY1NKRnM5djBTYnIxV1g2NmY3cytrVVN5cy9LelB1RmdGb0lrR1RSOXNxWWdTUWE5UGhua3ZmcCtuNnhYRDhnZzFLZmRmQkx5ODNUcU40UEJzTlBmcDAvblowZGxPSlNtU1pNZmh2cHA1OWlVNFhCRldydE1nZUdRMDcyblBuL1dONXl2ME5TM1A4bHVkUVdoOWF6QzdOanFhcWcvNlI2YjUzdkgxdGFRenJ0bDR5YmYycDBmVzE5ditoeTFEbTFJOStjNmVrRWU0QkM0ZGgxaDFEOENjaVBVSDNUek4yOGkrd0Q3M2Z6bUpzMFhKN1MrUWVIV0xkOW5iNzd4YnQ5dTV0bWRiK0RPblNhL005L0EzYnZkK1o4OTgzL2Z1OWZOZng0MjkrOTM4MXRoOCtEQjZYK0h4NC9ocmJmbWVabjlNY1o4NHpjcHZ3YlpFeG5LR1VBMGxRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFYSUFBQUFmQ0FZQUFBRDZPVVk1QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBVUtTVVJCVkhpYzdkMU5hRnhWRkFmdy83M3paaWFUeWJSOU5TR21IWktxaVlJdTNOVFFxTlF2Q2dxcFN4VjAwWVdZQ3JwUUZFUndvN2dURjBLbGlHN3FVaEZGUlJCRUZFcUpwUm9OcHFoSmpTRnBvcWxObWpoeHZ0NDlMbXhDbXN6TXkzdnp2dTY4ODl2bGZaM3pHT1p3NTc1M2JnUmNJcUlzZ01OUTZqQ2t1QjhRZzI2dnhSaGp6Q1dpR2VIc2VNb0FlQlpFRDBHSVE3QXFZNmdXVHFNd2R3YmZ2WHNPbDg2VkdsNWd6ZFV1QUVCN0trRk9jbTJrWUxNL203NGF5KzVBRCtKdHhOcm1IMWVCR3AzVlVUZVdldzNqdGRuRVczVVdxOUhoT2J0WUxteUx0N29leTdDSnRlSXFYcTJ6ZG1XYXVLOHJ6bmZ0enRqZG16dkxOYmJ0eVc2SnRlUk5yRnFYTWJQSkhkelhaV2VCTHRjK2ErL1crL0xUQTIvazBYZm9ZMk9ueHhQUkV3Qzlna3J4TEZablQySGl3eEZNZitId3EraU9sMFdjQmNPMmlMUEk4YXVJTXg4UkVVQWwyMEpPUkFNZzZ3UXFoVG44OXVsaitQN3RCYTl6c1J1Tk05YnEzSTNoV2V3cFM0SFF1SkFUMFJHUTlUcVdwOTdFNTA5K0UxUnVyY1NqMlJtbURTN0pMRWlLSUZDc1c4aUphQVJVZlJ3WHZuNE9aMTY3RUdScVlhby9aODJpeW8vNWNlYWRIYzJQTS9mcWpjaUphQVRWMGpCK1B2VTB4dDkzK0FTQXhZV0x4N0dNdFpUUWk2T3FLa0J0TCtSRTlDQ3M0cjBZZmVzRi9QNFovMDVrakxFb0UvTGFxUlVpR29CVmZncGpKMTdtSXU0L25zYUpybnF2WTltL2VzaWl4cGRYRHlPakJDaFZsdGRzVTlaTCtPdUhremovU1lNM1VQWEdEeDlaM0xYc2x6dU9ySVFDVU53bzVFVDBNSXBYTHVLckY4ZERUSXN4eHRoT3RRR1FZazBDQUJHMXdTb2R4ZlNYSDRXY0ZtdEMwRjJkekY5TmRYWHF4c2V1VGwvVW1Za0p0S3NUQUZRMkJhVlcxa2ZrOTZDNE11bEhzNCsyUXAyRGNkZWVyNVZBZW9JOXBGdStQSDhTRDZsc0JwQkwveGR5VmI0VGYvOTQydGVBM0w3Sm1xQmJIV1VzRUZuVEJGbnprb2g2VUMwTGZQdnFWQmg1QkxsWUZnc0dyN1BpVEJSZUQrTjFWalJsWkV3a2tuTVN3QUFLaTcrR25ROWpqREdIMHJsOUFDWWxySEllcTFQVFllY1RCVjYvMTYzYnRMV09vdFdlSDRXeGRiUndlNzZQaG81M0lDRlRRb2daQ1VFZG1EK3Y2OXZ3akRFV1R6MTMzd0taR0FNQXFTcVZOT1pHZVNqQkhPRjFWbGpjaFQ3NnpYWWRBSXh4QUpCU1drV3N6VmdocHhRNzNKNGZYZHllM3pwYXRqMS8rT1FOVU1hQ0VHSVJBQ1RLMWNiL25vMHh4bGkwNVBMOVNLZEgxLytVSUZVTU01OGc4Y05IRm5mY0o5UUNqcjdURHlNN0xZVFlhR1NWb0Vwc0Nua3I0L2I4MWhLcjluemRoTm1lZi9ENTNUQjdkeUdaL0duelpnTVMvL29lbkxITmRHdlQxQzFmM1liZHVxMnpFcGJCWSszb3U2OFBSc2RaSVVSMTh5Nkpjc24vRWJsdTdmbTh6a3FrNkZaSEdmUGM0TEYyOUE3M0lXZU9DeUcyVlZRREtycFRLOXllcng5dXo5Y1B0K2RIM05EeER0eDBwQk9wN2draFJNMlJub0ZxQUNQeU9uUWJxRFBtTlc3Z1lBME5Qck1IMXgxTUlkWDlpeENpWE84d0E1V2x5STdJZGRiaXN4MXNHeTdKekVQN0I1TzQ0OUYySlBOcnlPMmZGVUkwL05Wa1lKa0xPY0FOT2pxSzFqb3JiQ3RlWjhXaDNENkpydHVTNkx3NWdkN2JLOWgxNjhMV2g1cjFHRmlhS0FJd2JJOWs3Q3B1ejJkeDUxa3Y2TjZCQkRLbVJIYUFrT2xVNk00WGtCOHFDeUVjZGRzTGV1K3VYTE81WExMWjM1bmJTWnVzQzR1K1hOVlJpSzVjU3VzUnhwOTF0bmViYWNKRnI2TjVmc0dHNXV0czd6RWo4cG5OZW50cTNreEg0NzZhTkYxajI0SHVqUE43bTJ3NkZjK3RwOVIvL1IrRXBRekJ2Rkhoa1ErVUFKcjY3UDREc0kya3FNOGVMMUVBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQnNBQUFBR0NBWUFBQUF5bk9VUUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUJtU1VSQlZDaVJ2WTJ4RVVCQUZFVGZmYkZjRjFLQmhqU2dCK1ZvZ1VZa2pBb0VkM08zSWlOQTZEYlozWmszOHh5QXdqR1FmRS8wa0R5S25tdC85Wk1KNzh6OWQ1TmtRTWZmRVpWQnFJSHlkeGxzUmlyYURDSndtZ3pVWkhIQmJLQWxnMmcxbDhZVDJBTkpHUUFaMkdBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy94Y3kucG5nXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9VcGRhdGVEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlYzNjOWJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVXBkYXRlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThlYzNjOWJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOGVjM2M5YmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGVjM2M5YmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGVjM2M5YmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGVjM2M5YmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVjM2M5YmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGVjM2M5YmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1VwZGF0ZURpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXBkYXRlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04ZWMzYzliZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwZGF0ZURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVjM2M5YmUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTI1ZTMyNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZlZWRiYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMTI1ZTMyNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAxMjVlMzI2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAxMjVlMzI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAxMjVlMzI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAxMjVlMzI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDEyNWUzMjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDEyNWUzMjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NvbW1vbi9mZWVkYmFjay9GZWVkYmFja0J1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZlZWRiYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZlZWRiYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmVlZGJhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDEyNWUzMjYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZWVkYmFja0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDEyNWUzMjYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyYmRlYTk2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyYmRlYTk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzJiZGVhOTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzJiZGVhOTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzJiZGVhOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzJiZGVhOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyYmRlYTk2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcyYmRlYTk2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb21tb24vbG9hZGluZy9Mb2FkaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyYmRlYTk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzJiZGVhOTYmc2NvcGVkPXRydWUmXCIiLCIvLyDlhajlsYAgbG9hZGluZy5qc1xyXG5pbXBvcnQgTG9hZGluZ0NvbXBvbmVudCBmcm9tICcuL0xvYWRpbmcudnVlJ1xyXG5cclxuY29uc3QgbG9hZGluZyA9IHtcclxuICAgIGluc3RhbGw6IGZ1bmN0aW9uIChWdWUpIHtcclxuICAgICAgICAvLyDliJvlu7rkuIDkuKpWdWXnmoTigJzlrZDnsbvigJ3nu4Tku7ZcclxuICAgICAgICBjb25zdCBMb2FkaW5nQ29uc3RydWN0b3IgPSBWdWUuZXh0ZW5kKExvYWRpbmdDb21wb25lbnQpXHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4quivpeWtkOexu+eahOWunuS+iyzlubbmjILovb3liLDkuIDkuKrlhYPntKDkuIpcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2FkaW5nQ29uc3RydWN0b3IoKVxyXG5cclxuICAgICAgICAvLyDlsIbov5nkuKrlrp7kvovmjILovb3liLDliqjmgIHliJvlu7rnmoTlhYPntKDkuIos5bm25bCG5YWD57Sg5re75Yqg5Yiw5YWo5bGA57uT5p6E5LitXHJcbiAgICAgICAgaW5zdGFuY2UuJG1vdW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuJGVsKVxyXG5cclxuICAgICAgICAvLyDlnKhWdWXnmoTljp/lnovpk77kuIrms6jlhozmlrnms5XvvIzmjqfliLbnu4Tku7ZcclxuXHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kbG9hZGluZz17XHJcbiAgICAgICAgICAgIHNob3c6KCk9PntcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGU6KCk9PntcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnNob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3cnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mbG9hdFRlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkM2RhNjE1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmxvYXRUZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZDNkYTYxNSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNkM2RhNjE1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNkM2RhNjE1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkM2RhNjE1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkM2RhNjE1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mbG9hdFRlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkM2RhNjE1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNkM2RhNjE1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9jb21tb24vdGVzdC9mbG9hdFRlc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mbG9hdFRlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZDNkYTYxNSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zsb2F0VGVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2QzZGE2MTUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgTW9jayBmcm9tICdtb2NranMnO1xyXG5cclxuLy8g5qih5ouf55qE55So5oi35pWw5o2uXHJcbmNvbnN0IHVzZXJzID0gW1xyXG4gIHsgdXNlcm5hbWU6ICdhZG1pbicsIHBhc3N3b3JkOiAnYWRtaW4xMjMnIH0sXHJcbiAgeyB1c2VybmFtZTogJ3VzZXInLCBwYXNzd29yZDogJ3VzZXIxMjMnIH1cclxuXTtcclxuXHJcblxyXG4vLyDmi6bmiKrnmbvlvZXor7fmsYJcclxuTW9jay5tb2NrKCcvenNoYi9sb2dpbicsICdwb3N0JywgKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gSlNPTi5wYXJzZShvcHRpb25zLmJvZHkpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICByZXR1cm4geyBjb2RlOiAyMDAsIG1lc3NhZ2U6ICfnmbvlvZXmiJDlip8nLCB0b2tlbjogJ2Zha2VUb2tlbjEyMycgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHsgY29kZTogNDAxLCBtZXNzYWdlOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyB9O1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgVnVlQ29tcG9zaXRpb25BUEkgZnJvbSBcIkB2dWUvY29tcG9zaXRpb24tYXBpXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBWYW50IGZyb20gXCJ2YW50XCI7XHJcbmltcG9ydCBcInZhbnQvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgRWxlbWVudFVJIGZyb20gJ2VsZW1lbnQtdWknO1xyXG5pbXBvcnQgJ2VsZW1lbnQtdWkvbGliL3RoZW1lLWNoYWxrL2luZGV4LmNzcyc7XHJcblZ1ZS51c2UoRWxlbWVudFVJKTtcclxuVnVlLnVzZShWYW50KTtcclxuVnVlLnVzZShWdWVDb21wb3NpdGlvbkFQSSk7XHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xyXG5WdWUucHJvdG90eXBlLmRheWpzID0gZGF5anM7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUvZ2xvYmFsLnNjc3MnXHJcbmltcG9ydCAnLi9zdHlsZS9wb2xsdXRlci5zY3NzJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmltcG9ydCBGaWxlVXRpbHMgZnJvbSAnLi91dGlscy9GaWxlVXRpbHMuanMnXHJcblZ1ZS51c2UoRmlsZVV0aWxzKTtcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vbG9hZGluZydcclxuVnVlLnVzZShMb2FkaW5nKTtcclxuXHJcbmltcG9ydCBWdWVUb3VjaCBmcm9tIFwidnVlLXRvdWNoXCI7XHJcblZ1ZS51c2UoVnVlVG91Y2gsIHsgbmFtZTogXCJ2LXRvdWNoXCIgfSk7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL3V0aWxzL2NvbmZpZ1wiO1xyXG5WdWUudXNlKGNvbmZpZyk7XHJcblxyXG5pbXBvcnQgJy4vanMvbW9jay5qcyc7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCB2dWVJbnN0YW5jZSA9IG5ldyBWdWUoe1xyXG4gIHJvdXRlcixcclxuICBzdG9yZSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgLy8g5ZCv5YqoXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICB1cmw6IFwiaHR0cDovLzEwLjIyMS4yOS40OjgwODAvUmVtb3RlVG9rZW5TZXJ2ZXI/cmVxdWVzdD1nZXRUb2tlbiZ1c2VybmFtZT1HWlRUMDEmcGFzc3dvcmQ9R1pUVDAxMTIzJmNsaWVudGlkPXJlZi4xMC4yMjEuMjkuNCZleHBpcmF0aW9uPTE0NDBcIixcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXBfdG9rZW4nLCBlbmNvZGVVUkkocmVzLmRhdGEpLnJlcGxhY2UoJyUwRCUwQScsICcnKSlcclxuICAgICAgfSlcclxuICAgIH0pKClcclxuICB9LFxyXG4gIHJlbmRlcjogKGgpID0+IGgoQXBwKSxcclxufSkuJG1vdW50KFwiI2FwcFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZ1ZUluc3RhbmNlXHJcbiIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiO1xyXG5WdWUudXNlKFZ1ZVJvdXRlcik7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICByZWRpcmVjdDogXCJob21lUGFnZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvaW5kZXguaHRtbFwiLCAvL2Fwa+aJk+WMheWQjum7mOiupOiuv+mXruS6hmluZGV4Lmh0bWxcclxuICAgIHJlZGlyZWN0OiBcIi9ob21lUGFnZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvaG9tZVBhZ2VcIixcclxuICAgIG5hbWU6IFwiaG9tZVBhZ2VcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvaG9tZVBhZ2UvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLpppbpobVcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgIG5hbWU6IFwibG9naW5cIixcclxuICAgIC8vIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvbG9naW4vaW5kZXgudnVlXCIpLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLnmbvlvZVcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbG9naW5TdWNjZXNzXCIsXHJcbiAgICBuYW1lOiBcImxvZ2luU3VjY2Vzc1wiLFxyXG4gICAgLy8gY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9sb2dpbi9pbmRleC52dWVcIiksXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2xvZ2luL3N1Y2Nlc3MudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLnmbvlvZVcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbWluZVwiLFxyXG4gICAgbmFtZTogXCJtaW5lXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL21pbmUvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmiJHnmoRcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvdGVzdERldGFpbFwiLFxyXG4gICAgbmFtZTogXCJ0ZXN0RGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvY29tbW9uL3Rlc3QvY2hhdC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuaZuuaFp+Wwj+WKqeaJi1wiLCBrZWVwQWxpdmU6IHRydWUsIGlzQmFjazogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbWluZS9zdWJzY3JpYmVDb21wb25lbnRzXCIsXHJcbiAgICBuYW1lOiBcInN1YnNjcmliZUNvbXBvbmVudHNcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvbWluZS9zdWJzY3JpYmVDb21wb25lbnRzL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi57uE5Lu26K6i6ZiFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL21pbmUvc3lzdGVtU2V0XCIsXHJcbiAgICBuYW1lOiBcInN5c3RlbVNldFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIue7hOS7tuiuoumYhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZVwiLFxyXG4gICAgbmFtZTogXCJhaXJIb21lUGFnZVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9haXJIb21lUGFnZS9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJBbGFybVwiLFxyXG4gICAgbmFtZTogXCJhaXJBbGFybVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9haXJIb21lUGFnZS9haXJBbGFybS9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOWRiuitplwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS93ZWF0aGVyRm9yZWNhc3RcIixcclxuICAgIG5hbWU6IFwid2VhdGhlckZvcmVjYXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2FpckhvbWVQYWdlL3dlYXRoZXJGb3JlY2FzdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+mihOaKpVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFua1wiLFxyXG4gICAgbmFtZTogXCJhaXJRdWFsaXR5UmFua1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+aOkuWQjVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJQb2xsdXRpb25Tb3J0XCIsXHJcbiAgICBuYW1lOiBcImFpclBvbGx1dGlvblNvcnRcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uU29ydC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIua2ieawlOaxoeafk+a6kFwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJQb2xsdXRpb25MaXN0XCIsXHJcbiAgICBuYW1lOiBcImFpclBvbGx1dGlvbkxpc3RcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIua2ieawlOaxoeafk+a6kOihjOS4mlwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJFeGFtaW5lU2l0ZUxpc3RcIixcclxuICAgIG5hbWU6IFwiYWlyRXhhbWluZVNpdGVMaXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2FpckhvbWVQYWdlL2FpckV4YW1pbmVTaXRlTGlzdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+ermeeCueaVsOaNrlwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImFpclN0YXRpb25EZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+ermeeCueivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9oaWdoVmlkZW9cIixcclxuICAgIG5hbWU6IFwiaGlnaFZpZGVvXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2FpckhvbWVQYWdlL2hpZ2hWaWRlby9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+mrmOepuuinhumikVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJDYWxlbmRhclF1ZXJ5XCIsXHJcbiAgICBuYW1lOiBcImFpckNhbGVuZGFyUXVlcnlcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvYWlySG9tZVBhZ2UvYWlyQ2FsZW5kYXJRdWVyeS9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+aXpeWOhlwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9haXJIb21lUGFnZS9haXJDYWxlbmRhckRldGFpbFwiLFxyXG4gICAgbmFtZTogXCJhaXJDYWxlbmRhckRldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9haXJIb21lUGFnZS9haXJDYWxlbmRhckRldGFpbC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+aXpeWOhuivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlXCIsXHJcbiAgICBuYW1lOiBcIndhdGVySG9tZVBhZ2VcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuaYhuaYjuW4guawtOeOr+Wig1wiIH0sXHJcbiAgfSxcclxuICAvL+WbveiAgy/nnIHogIPliJfooahcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdFwiLFxyXG4gICAgbmFtZTogXCJleGFtaW5lU2l0ZUxpc3RcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YToge1xyXG4gICAgICB0aXRsZTogXCJcIixcclxuICAgICAga2VlcEFsaXZlOiB0cnVlLCAvL+atpOe7hOS7tumcgOimgeiiq+e8k+WtmFxyXG4gICAgICBpc0JhY2s6IGZhbHNlLCAvL+eUqOS6juWIpOaWreS4iuS4gOS4qumhtemdouaYr+WTquS4qlxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2UvYmFzaW5EZXRhaWxcIixcclxuICAgIG5hbWU6IFwiYmFzaW5EZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkRldGFpbC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIua1geWfn+awtOi0qFwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL2NvbXBldGl0aW9uR292ZXJuXCIsXHJcbiAgICBuYW1lOiBcImNvbXBldGl0aW9uR292ZXJuXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcGV0aXRpb25Hb3Zlcm4vaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlpKfnq57otZvmsLTnjq/looPmsrvnkIbmg4XlhrVcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9jb21wZXRpdGlvbkdvdmVybi9nb3Zlcm5EZXRhaWxcIixcclxuICAgIG5hbWU6IFwiZ292ZXJuRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcGV0aXRpb25Hb3Zlcm4vZ292ZXJuRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5aSn56ue6LWb5rC0546v5aKD5rK755CG5oOF5Ya16K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2Uvd2F0ZXJFbnZSYW5rXCIsXHJcbiAgICBuYW1lOiBcIndhdGVyRW52UmFua1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL3dhdGVyRW52UmFuay9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuawtOeOr+Wig+W5tOW6leaOkuWQjVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL2Jhc2luV2F0ZXJFY29cIixcclxuICAgIG5hbWU6IFwiYmFzaW5XYXRlckVjb1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luV2F0ZXJFY28vaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmtYHln5/msLTnlJ/mgIFcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9iYXNpbkhvbWVQYWdlXCIsXHJcbiAgICBuYW1lOiBcImJhc2luSG9tZVBhZ2VcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkhvbWVQYWdlL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5rWB5Z+f5qaC5Ya1XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2UvYmFzaW5SaXZlclwiLFxyXG4gICAgbmFtZTogXCJiYXNpblJpdmVyXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5SaXZlci9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIua1geWfn+ays+mBk+aDheWGtVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL3JpdmVyRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInJpdmVyRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvcml2ZXJEZXRhaWwvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsrPpgZPliJfooahcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbFwiLFxyXG4gICAgbmFtZTogXCJkcmlua0RldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL2RyaW5rRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6aWu55So5rC05YiX6KGoXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2UvcHVyUGxhbnRcIixcclxuICAgIG5hbWU6IFwicHVyUGxhbnRcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9wdXJQbGFudC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuawtOi0qOWHgOWMluWOguWIl+ihqFwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL3B1clBsYW50L3B1clBsYW50RGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInB1clBsYW50RGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcHVyUGxhbnQvcHVyUGxhbnREZXRhaWwvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsLTotKjlh4DljJbljoLor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9yZXNlcnZvaXJcIixcclxuICAgIG5hbWU6IFwicmVzZXJ2b2lyXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5YWo5biC6KGl5rC05rC05bqT5L+h5oGvXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL3Jlc2Vydm9pckRldGFpbFwiLFxyXG4gICAgbmFtZTogXCJyZXNlcnZvaXJEZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9yZXNlcnZvaXIvcmVzZXJ2b2lyRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5YWo5biC6KGl5rC05rC05bqT6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2Uvd2F0ZXJQcm9qZWN0XCIsXHJcbiAgICBuYW1lOiBcIndhdGVyUHJvamVjdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL3dhdGVyUHJvamVjdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuiwg+awtOW3peeoi1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL3dhdGVyRnVuY3Rpb25hbFwiLFxyXG4gICAgbmFtZTogXCJ3YXRlckZ1bmN0aW9uYWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS93YXRlckZ1bmN0aW9uYWwvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsLTlip/og73ljLrliJJcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9pbnZvbHZlV2F0ZXJQb2xsdXRpb25cIixcclxuICAgIG5hbWU6IFwiaW52b2x2ZVdhdGVyUG9sbHV0aW9uXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvaW52b2x2ZVdhdGVyUG9sbHV0aW9uL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5raJ5rC05rGh5p+T5rqQXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2UvdXBzdHJlYW1PdXRsZXRcIixcclxuICAgIG5hbWU6IFwidXBzdHJlYW1PdXRsZXRcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS91cHN0cmVhbU91dGxldC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuS4iua4uOaOkuWPo1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L3Vwc3RyZWFtT3V0bGV0RGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInVwc3RyZWFtT3V0bGV0RGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2UvdXBzdHJlYW1PdXRsZXQvdXBzdHJlYW1PdXRsZXREZXRhaWwvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLkuIrmuLjmjpLlj6NcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS93YXRlckZ1bmN0aW9uYWwvZnVuY3Rpb25hbERldGFpbFwiLFxyXG4gICAgbmFtZTogXCJmdW5jdGlvbmFsRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2Z1bmN0aW9uYWxEZXRhaWwvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsLTlip/og73ljLrliJLor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInN0YXRpb25EZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi56uZ54K56K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2Uvc3RhdGlvblJpdmVyRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInN0YXRpb25SaXZlckRldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25SaXZlckRldGFpbC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuays+mBk+ivpuaDheivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvZmFjdG9yRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImZhY3RvckRldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvZmFjdG9yRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi56uZ54K55Zug5a2Q5pWw5o2u6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9wdXJQbGFudERldGFpbFwiLFxyXG4gIC8vICAgbmFtZTogXCJwdXJQbGFudERldGFpbFwiLFxyXG4gIC8vICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvcHVyUGxhbnREZXRhaWwvaW5kZXgudnVlXCIpLFxyXG4gIC8vICAgbWV0YTogeyB0aXRsZTogXCLnq5nngrnmsLTotKjlh4DljJbljoLmlbDmja7or6bmg4VcIiB9LFxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvd2F0ZXJIb21lUGFnZS9leGNlZWRXYXJuaW5nXCIsXHJcbiAgICBuYW1lOiBcImV4Y2VlZFdhcm5pbmdcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvd2F0ZXJIb21lUGFnZS9leGNlZWRXYXJuaW5nL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5rC0546v5aKD6LaF5qCH5ZGK6K2mXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2ZlZWRiYWNrXCIsXHJcbiAgICBuYW1lOiBcImZlZWRiYWNrXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2ZlZWRiYWNrL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5L2/55So5oSP6KeBXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dpc1wiLFxyXG4gICAgbmFtZTogXCJnaXNcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZ2lzL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwiZ2lzXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dpcy93YXRlck1hbmFnZU1hcFwiLFxyXG4gICAgbmFtZTogXCJ3YXRlck1hbmFnZU1hcFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9naXMvd2F0ZXJNYW5hZ2VNYXAudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsLTnjq/looNcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZ2lzL2JyYW5jaFwiLFxyXG4gICAgbmFtZTogXCJicmFuY2hcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZ2lzL2JyYW5jaC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuawtOeOr+Wig1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9naXMvZ2lzUGFnZVwiLFxyXG4gICAgbmFtZTogXCJnaXNQYWdlXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2dpcy9naXNQYWdlLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5rC0546v5aKDXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dpcy9zdXJyb3VuZE1hcFwiLFxyXG4gICAgbmFtZTogXCJzdXJyb3VuZE1hcFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9naXMvc3Vycm91bmRNYXAudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlkajovrnlnLDlm75cIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZ2lzL3B1clBsYW50TWFwXCIsXHJcbiAgICBuYW1lOiBcInB1clBsYW50TWFwXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2dpcy9wdXJQbGFudE1hcC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuawtOi0qOWHgOWMluWOglwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9naXMvbG9jYXRpb25NYXBcIixcclxuICAgIG5hbWU6IFwibG9jYXRpb25NYXBcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZ2lzL2xvY2F0aW9uTWFwLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5rGh5p+T5rqQ5a6a5L2NXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dpcy9haXJMb2NhdGlvbk1hcFwiLFxyXG4gICAgbmFtZTogXCJhaXJMb2NhdGlvbk1hcFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9naXMvYWlyTG9jYXRpb25NYXAudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLnqbrmsJTnq5nngrlcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZ2lzL2FpcldlYXRoZXJNYXBcIixcclxuICAgIG5hbWU6IFwiYWlyV2VhdGhlck1hcFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9naXMvYWlyV2VhdGhlck1hcC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuepuuawlOWRqOi+ueawlOixoeermVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9naXMvaW52b2x2ZUFpclBvbGx1dGlvbk1hcFwiLFxyXG4gICAgbmFtZTogXCJpbnZvbHZlQWlyUG9sbHV0aW9uTWFwXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2dpcy9pbnZvbHZlQWlyUG9sbHV0aW9uTWFwLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi54K55L2N5ZGo6L655rGh5p+T5rqQXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dpcy9yYW5nZU1hcFwiLFxyXG4gICAgbmFtZTogXCJyYW5nZU1hcFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9naXMvcmFuZ2VNYXAudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlnLDlm77muLLmn5NcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbm90aWNlXCIsXHJcbiAgICBuYW1lOiBcIm5vdGljZVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9ub3RpY2UvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLpgJrnn6XlhazlkYpcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbm90aWNlL21lc3NhZ2VDZW50ZXJcIixcclxuICAgIG5hbWU6IFwibWVzc2FnZUNlbnRlclwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9ub3RpY2UvbWVzc2FnZUNlbnRlci52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIua2iOaBr+S4reW/g1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9mZWVkYmFja1Jlc3VsdFwiLFxyXG4gICAgbmFtZTogXCJmZWVkYmFja1Jlc3VsdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9mZWVkYmFjay9mZWVkYmFja1Jlc3VsdC52dWVcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9DYXNlRGV0YWlsc1wiLFxyXG4gICAgbmFtZTogXCJDYXNlRGV0YWlsc1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9jYXNlL2luZGV4LnZ1ZVwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3NlYXJjaFwiLFxyXG4gICAgbmFtZTogXCJzZWFyY2hcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5pCc57SiXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3B1YmxpY09waW5pb25cIixcclxuICAgIG5hbWU6IFwicHVibGljT3BpbmlvblwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wdWJsaWNPcGluaW9uL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6IiG5oOF57uf6K6hXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi93aG9sZUNpdHlQb2xsdXRpb25cIixcclxuICAgIG5hbWU6IFwid2hvbGVDaXR5UG9sbHV0aW9uXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi93aG9sZUNpdHlQb2xsdXRpb24vaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlhajluILmsaHmn5PmupBcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL3BvbGx1dGlvblN0YXRpc0xpc3RcIixcclxuICAgIG5hbWU6IFwicG9sbHV0aW9uU3RhdGlzTGlzdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uU3RhdGlzTGlzdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuaxoeafk+a6kOWIl+ihqFwiIH0sXHJcbiAgfSxcclxuICAvLyDkvIHkuJrnjq/looPlgaXlurfmoaPmoYjvvIjorrjlj6/or4HjgIHpmZDmnJ/mlbTmlLnjgIHmiafms5Xmo4Dmn6XjgIHoh6rooYznm5HmtYvjgIHmiafms5Xnm5HmtYvjgIHooYzmlL/lpITnvZrvvInliJfooahcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vcG9sbHV0aW9uTGlzdFwiLFxyXG4gICAgbmFtZTogXCJwb2xsdXRpb25MaXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25MaXN0L2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIgfSxcclxuICB9LFxyXG4gIC8vIOiBlOWNlei9rOenu+WIl+ihqOOAgei+kOWwhOWuieWFqOS4i+mdouWQhOe6p+WIq+exu+Wei+eCueWHu+mhtemdolxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9wb2xsdXRpb25MaW5lTGlzdFwiLFxyXG4gICAgbmFtZTogXCJwb2xsdXRpb25MaW5lTGlzdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uTGluZUxpc3QvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLkvIHkuJrnjq/looPlgaXlurfmoaPmoYhcIiB9LFxyXG4gIH0sXHJcbiAgLy/pppbpobUt44CB546v6K+E6aG555uu44CB5aSH5qGI6aG555uu44CB6Ieq6aqM5pS25YiX6KGo44CB5bC+55+/5bqT44CB6KGM5pS/5aSE572a5YiX6KGoXHJcbiAgLy8g6L6Q5bCE5a6J5YWo5oC76aG16Z2iXHJcbiAgLy8g5Zyo57q/55uR5o6n77yI5Zyo57q/55uR5o6n44CB6YeN54K555uR5o6n44CB6Z2e6YeN54K555uR5o6n44CB5Yy76Zmi44CB5rGh5rC05aSE55CG5Y6C77yJXHJcbiAgLy/kuozmrKHmsaHmma7vvIjlt6XkuJrmupDjgIHnlZzniaflhbvmrpblnLrjgIHnlJ/mtLvmupDjgIHpm4bkuK3lvI/msaHmsLTlpITnkIbmjqrmlr3vvIlcclxuICAvL+WNsemZqeW6n+eJqeOAgSDnjq/kv53mipXor4lcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vcG9sbHV0aW9uUHVuaXNoTGlzdFwiLFxyXG4gICAgbmFtZTogXCJwb2xsdXRpb25QdW5pc2hMaXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25QdW5pc2hMaXN0L2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwiXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdFwiLFxyXG4gICAgbmFtZTogXCJsYXdFeGFtaW5lTGlzdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vbGF3RXhhbWluZUxpc3QvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmiafms5Xmo4Dmn6VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9idWlsZEZpbGluZ3NEZXRhaWxcIixcclxuICAgIG5hbWU6IFwiYnVpbGRGaWxpbmdzRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5aSH5qGI6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mb1wiLFxyXG4gICAgbmFtZTogXCJidWlsZFByb2plY3RJbmZvXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mby52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuW7uuiuvumhueebruivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL2J1aWxkU2VsZmFjY2VwdHRJbmZvXCIsXHJcbiAgICBuYW1lOiBcImJ1aWxkU2VsZmFjY2VwdHRJbmZvXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRTZWxmYWNjZXB0dEluZm8udnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlu7rorr7oh6rpqozmlLbor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9jb2RpbmdSZWFzb25EZXRhaWxcIixcclxuICAgIG5hbWU6IFwiY29kaW5nUmVhc29uRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29kaW5nUmVhc29uRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6LWL56CB5Y6f5Zug6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueUJhc2VJbmZvXCIsXHJcbiAgICBuYW1lOiBcImNvbXBhbnlCYXNlSW5mb1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBhbnlCYXNlSW5mby52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuS8geS4muWfuuacrOS/oeaBr1wiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL2NvbXBhbnlEZXRhaWxcIixcclxuICAgIG5hbWU6IFwiY29tcGFueURldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBhbnlEZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmsaHmn5PmupAt5LyB5Lia6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvY29tcGxhaW50RGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImNvbXBsYWludERldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBsYWludERldGFpbC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIueOr+S/neaKleivieivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL2pjcGtEZXRhaWxcIixcclxuICAgIG5hbWU6IFwiamNwa0RldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2pjcGtEZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlnKjnur/nm5HmjqfkvIHkuJrmjpLlj6Por6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9qdWRnZURldGFpbFwiLFxyXG4gICAgbmFtZTogXCJqdWRnZURldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2p1ZGdlRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi56CU5Yik6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvbGF3Q2hlY2tEZXRhaWxcIixcclxuICAgIG5hbWU6IFwibGF3Q2hlY2tEZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC9sYXdDaGVja0RldGFpbC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuaJp+azleajgOafpeivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImxkRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLogZTljZXor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9saWNlbmNlRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImxpY2VuY2VEZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC9saWNlbmNlRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6K645Y+v6K+B6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvcGVuYWx0eURldGFpbFwiLFxyXG4gICAgbmFtZTogXCJwZW5hbHR5RGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcGVuYWx0eURldGFpbC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuihjOaUv+WkhOe9muivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL3BvcnRJbmZvRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInBvcnRJbmZvRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLnq5nngrnor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9yZWdpc3RlRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInJlZ2lzdGVEZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC9yZWdpc3RlRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi55m76K6w566h55CG5L+h5oGv6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZXJNYW5hZ2VcIixcclxuICAgIG5hbWU6IFwicmVnaXN0ZXJNYW5hZ2VcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC9yZWdpc3Rlck1hbmFnZS52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIueZu+iusOeuoeeQhuS8geS4muivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL3NhZmVEZXRhaWxcIixcclxuICAgIG5hbWU6IFwic2FmZURldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3NhZmVEZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLovpDlsITlronlhajor6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC91cGVydmlzaW9uRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInVwZXJ2aXNpb25EZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC91cGVydmlzaW9uRGV0YWlsLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5rGh5p+T5rqQ6Ieq5Yqo55uR5rWL552j5Yqe5Y2V6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWxcIixcclxuICAgIG5hbWU6IFwid2FzdGVEZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvcG9sbHV0aW9uL2RldGFpbC93YXN0ZURldGFpbC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuWNseW6n+ivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL2luZHVzdHJ5U291cmNlXCIsXHJcbiAgICBuYW1lOiBcImluZHVzdHJ5U291cmNlXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvaW5kdXN0cnlTb3VyY2UudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlt6XkuJrmupDkvIHkuJror6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcG9sbHV0aW9uL2RldGFpbC9oYW5kbGVGYWNpbGl0eVwiLFxyXG4gICAgbmFtZTogXCJoYW5kbGVGYWNpbGl0eVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi6ZuG5Lit5byP5rGh5p+T5aSE55CG6K6+5pa9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3BvbGx1dGlvbi9kZXRhaWwvZXhjZWVkRGVzXCIsXHJcbiAgICBuYW1lOiBcImV4Y2VlZERlc1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2V4Y2VlZERlcy52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuS8geS4mui2heagh+ivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wb2xsdXRpb24vZGV0YWlsL29mZmxpbmVEZXNcIixcclxuICAgIG5hbWU6IFwib2ZmbGluZURlc1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9wb2xsdXRpb24vZGV0YWlsL29mZmxpbmVEZXMudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLkvIHkuJrmjonnur/or6bmg4VcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvY2FzZUNoZWNrXCIsXHJcbiAgICBuYW1lOiBcImNhc2VDaGVja1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9jYXNlQ2hlY2svaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLmoYjku7blrqHmiblcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvY2FzZUNoZWNrL2Nhc2VMaXN0XCIsXHJcbiAgICBuYW1lOiBcImNhc2VMaXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuahiOS7tuWuoeaJueWIl+ihqFwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9jYXNlQ2hlY2svY2FzZURldGFpbFwiLFxyXG4gICAgbmFtZTogXCJjYXNlRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5qGI5Lu25a6h5om56K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3N1cGVydmlzaW9uXCIsXHJcbiAgICBuYW1lOiBcInN1cGVydmlzaW9uXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3N1cGVydmlzaW9uL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi546v5L+d552j5a+fXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3N1cGVydmlzaW9uL3N1cGVyRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInN1cGVyRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3N1cGVydmlzaW9uL3N1cGVyRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi546v5L+d552j5a+f6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3N1cGVydmlzaW9uL3Byb3ZpbmNlRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcInByb3ZpbmNlRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3N1cGVydmlzaW9uL3Byb3ZpbmNlRGV0YWlsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi546v5L+d552j5a+f6K+m5oOFXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2luSGFuZFwiLFxyXG4gICAgbmFtZTogXCJpbkhhbmRcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvaW5IYW5kL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5b6F5Yqe5LqL6aG5XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2luSGFuZC9pbkhhbmRBcHBseVwiLFxyXG4gICAgbmFtZTogXCJpbkhhbmRBcHBseVwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9pbkhhbmQvaW5IYW5kQXBwbHkvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLlvoXlip7lupTnlKhcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvaW5IYW5kL2luSGFuZERldGFpbFwiLFxyXG4gICAgbmFtZTogXCJpbkhhbmREZXRhaWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvaW5IYW5kL2luSGFuZERldGFpbC9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuW+heWKnuivpuaDhVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9lbnZpcm9ubWVudENvZGVcIixcclxuICAgIG5hbWU6IFwiZW52aXJvbm1lbnRDb2RlXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIueOr+S/neeggVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9lbnZpcm9ubWVudENvZGUvY29kZVRvQ2hlY2tcIixcclxuICAgIG5hbWU6IFwiY29kZVRvQ2hlY2tcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVUb0NoZWNrL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5b6F5a6h5qC45YiX6KGoXCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2Vudmlyb25tZW50Q29kZS9jb2RlU3RhdGlzXCIsXHJcbiAgICBuYW1lOiBcImNvZGVTdGF0aXNcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVTdGF0aXMvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLnjq/kv53noIHnu5/orqHmiqXooahcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZW52aXJvbm1lbnRDb2RlL2NvZGVSdWxlc1wiLFxyXG4gICAgbmFtZTogXCJjb2RlUnVsZXNcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVSdWxlcy9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIui1i+eggeinhOWImVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9lbnZpcm9ubWVudENvZGUvYXBwcm92YWxcIixcclxuICAgIG5hbWU6IFwiYXBwcm92YWxcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL2FwcHJvdmFsL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5raI5oGv5a6h5qC4XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2Vudmlyb25tZW50Q29kZS9ncmFkZUNvbnRyb2xcIixcclxuICAgIG5hbWU6IFwiZ3JhZGVDb250cm9sXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9ncmFkZUNvbnRyb2wvaW5kZXgudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLliIbnuqfnrqHmjqdcIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZW52aXJvbm1lbnRDb2RlL21hcE1uZ1wiLFxyXG4gICAgbmFtZTogXCJtYXBNbmdcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL21hcE1uZy9pbmRleC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuWcsOWbvlwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9lbnZpcm9ubWVudENvZGUvZXZhbHVhdGVcIixcclxuICAgIG5hbWU6IFwiZXZhbHVhdGVcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52aXJvbm1lbnRDb2RlL2V2YWx1YXRlL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5Yqo5oCB6K+E5Lu3XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2NvbW1vbkZ1bmN0aW9uXCIsXHJcbiAgICBuYW1lOiBcImNvbW1vbkZ1bmN0aW9uXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2NvbW1vbkZ1bmN0aW9uL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5bi455So5Yqf6IO9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2Vudkluc3BlY3RvcnNcIixcclxuICAgIG5hbWU6IFwiZW52SW5zcGVjdG9yc1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9lbnZJbnNwZWN0b3JzL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5bi455So5Yqf6IO9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2NvcnJlY3Rpb25UYXNrXCIsXHJcbiAgICBuYW1lOiBcImNvcnJlY3Rpb25UYXNrXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5bi455So5Yqf6IO9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2NvcnJlY3Rpb25UYXNrRGV0YWlsXCIsXHJcbiAgICBuYW1lOiBcImNvcnJlY3Rpb25UYXNrRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2NvbXBvbmVudHMvY29ycmVjdGlvblRhc2tEZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLluLjnlKjlip/og71cIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvY29tTGlzdFwiLFxyXG4gICAgbmFtZTogXCJjb21MaXN0XCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9jb21MaXN0LnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5bi455So5Yqf6IO9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2NvbXBsZXRpb25TdGF0dXNcIixcclxuICAgIG5hbWU6IFwiY29tcGxldGlvblN0YXR1c1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvY29tcGxldGlvblN0YXR1cy52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuW4uOeUqOWKn+iDvVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9hY2NlcHRhbmNlU3RhdHVzXCIsXHJcbiAgICBuYW1lOiBcImFjY2VwdGFuY2VTdGF0dXNcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vdmlld3MvZW52SW5zcGVjdG9ycy9jb21wb25lbnRzL2FjY2VwdGFuY2VTdGF0dXMudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLluLjnlKjlip/og71cIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvaW1wb3J0YW50U3RhdHVzXCIsXHJcbiAgICBuYW1lOiBcImltcG9ydGFudFN0YXR1c1wiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW1wb3J0YW50U3RhdHVzLnZ1ZVwiKSxcclxuICAgIG1ldGE6IHsgdGl0bGU6IFwi5bi455So5Yqf6IO9XCIgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3NlYXJjaExpc3RcIixcclxuICAgIG5hbWU6IFwic2VhcmNoTGlzdFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvc2VhcmNoTGlzdC52dWVcIiksXHJcbiAgICBtZXRhOiB7IHRpdGxlOiBcIuW4uOeUqOWKn+iDvVwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9pbnNwZWN0b3JEZXRhaWxcIixcclxuICAgIG5hbWU6IFwiaW5zcGVjdG9yRGV0YWlsXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbnNwZWN0b3JEZXRhaWwudnVlXCIpLFxyXG4gICAgbWV0YTogeyB0aXRsZTogXCLluLjnlKjlip/og71cIiB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvdGFza1wiLFxyXG4gICAgbmFtZTogXCJ0YXNrXCIsXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydChcIi4uL3ZpZXdzL3Rhc2svaW5kZXgudnVlXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvdGFzay9kZXRhaWxcIixcclxuICAgIG5hbWU6IFwidGFza0RldGFpbFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy90YXNrL3Rhc2tEZXRhaWwudnVlXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvdGFzay9hZGRcIixcclxuICAgIG5hbWU6IFwidGFza0FkZFwiLFxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoXCIuLi92aWV3cy90YXNrL3Rhc2tBZGQudnVlXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcGRmSDVcIixcclxuICAgIG5hbWU6IFwicGRmSDVcIixcclxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9jb21tb24vcGRmSDUudnVlXCIpLFxyXG4gICAgcHJvcHM6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuaW1wb3J0IHsgZ2V0UGFnZUxvZyB9IGZyb20gXCJAL2FwaS9sb2dpblwiO1xyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICBtb2RlOiBcImhhc2hcIixcclxuICAvLyBtb2RlOiBcImhpc3RvcnlcIixcclxuICBiYXNlOiBwcm9jZXNzLmVudi5CQVNFX1VSTCxcclxuICByb3V0ZXMsXHJcbn0pO1xyXG5cclxuLy/lvJXlhaXlpLTpg6jov5vluqbmnaEg6L+b5bqm546v5pi+56S66ZqQ6JePXHJcbk5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XHJcbnJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xyXG4gIC8v5byV5YWl5aS06YOo6L+b5bqm5p2hIOaYvuekuui/m+W6puadoVxyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gIC8v5aaC5p6c5LiN5piv55m75b2V6aG15bm25LiU5rKh5pyJ55So5oi35L+h5oGv5bCx6Lez6L2s5Yiw55m75b2V6aG16Z2iXHJcbiAgLy8gY29uc29sZS5sb2coJ+aYr+WQpui/h+acnycsaXNFeHBpcmUoc3RvcmUuc3RhdGUudXNlci50aW1lLCBzdG9yZS5zdGF0ZS51c2VyLmV4cGlyZSkpO1xyXG4gIC8qaWYgKFxyXG4gICAgdG8ucGF0aCAhPT0gXCIvbG9naW5cIiAmJlxyXG4gICAgKHN0b3JlLnN0YXRlLnVzZXIudXNlciA9PT0gXCJcIiB8fFxyXG4gICAgICBpc0V4cGlyZShzdG9yZS5zdGF0ZS51c2VyLnRpbWUsIHN0b3JlLnN0YXRlLnVzZXIuZXhwaXJlKSlcclxuICApIHtcclxuICAgIG5leHQoeyBwYXRoOiBcIi9sb2dpblwiLCByZXBsYWNlOiB0cnVlIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSovXHJcbiAgbGV0IGluZm8gPSB7XHJcbiAgICAvLyBwYXJhbTogdG8ucGFyYW1zLFxyXG4gICAgcGFyYW06IHRvLnF1ZXJ5LFxyXG4gICAgcm91dGU6IHRvLm5hbWUsXHJcbiAgICBzeXN0ZW06IFwi5o6M5LiK546v5L+dXCIsXHJcbiAgfTtcclxuICBnZXRQYWdlTG9nKGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gIH0pO1xyXG4gIG5leHQoKTtcclxuICAvL+W8leWFpeWktOmDqOi/m+W6puadoSDlrozmiJDov5vluqbmnaFcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59KTtcclxuXHJcbnJvdXRlci5vbkVycm9yKChlcnJvcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5pbXBvcnQge3Bob25lQ29kZUxvZ2lufSBmcm9tICdAL2FwaS9sb2dpbi5qcydcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vcm91dGVyXCI7XHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgc3RhdGU6IHtcclxuICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgc2VhcmNoU3RvcmU6IFtdLFxyXG4gICAgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxyXG4gICAgdXVpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3V1aWQnKSxcclxuICAgIC8vIHV1aWQ6ICcxMjMnLFxyXG4gICAgdHlwZTogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBkYXRhSWQ6ICcnLFxyXG4gICAgc2VhcmNoT2JqOiB7XHJcbiAgICAgIG1vZHVsZU5hbWU6ICcnLFxyXG4gICAgICByZXNvdXJjZVBhdGg6ICcnLFxyXG4gICAgICB0eXBlOiAnJyxcclxuICAgICAgcGFyYW1ldGVyOiAnJyxcclxuICAgICAgY29tcG9uZW50TmFtZTogJydcclxuICAgIH0sXHJcbiAgICBwb2ludE5hbWU6ICcnXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICBzdGF0ZS5hY3RpdmVJbmRleCA9IHZhbHVlXHJcbiAgICB9LFxyXG4gICAgc2V0U2VhcmNoT2JqKHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICBzdGF0ZS5zZWFyY2hPYmogPSB2YWx1ZVxyXG4gICAgfSxcclxuICAgIHNldFNlYXJjaFN0b3JlKHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICBpZiAoc3RhdGUuc2VhcmNoU3RvcmUubGVuZ3RoID4gMzApIHtcclxuICAgICAgICBzdGF0ZS5zZWFyY2hTdG9yZS51bnNoaWZ0KHZhbHVlKTtcclxuICAgICAgICBzdGF0ZS5zZWFyY2hTdG9yZSA9IHN0YXRlLnNlYXJjaFN0b3JlLnNsaWNlKDEwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5zZWFyY2hTdG9yZS51bnNoaWZ0KHZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hTdG9yZScsIHN0YXRlLnNlYXJjaFN0b3JlLmpvaW4oJywnKSlcclxuICAgIH0sXHJcbiAgICBjbGVhclNlYXJjaFN0b3JlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaFN0b3JlID0gW11cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFN0b3JlJywgJycpXHJcbiAgICB9LFxyXG4gICAgc2V0VG9rZW4oc3RhdGUsIHRva2VuKSB7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gdG9rZW5cclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIHVuVXNlclBhc3NMb2dpbihzdGF0ZSwgdXVpZCkge1xyXG4gICAgICBwaG9uZUNvZGVMb2dpbih7XHJcbiAgICAgICAgYXBwaWQ6IHV1aWQgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGhvbmUnKSxcclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gJzAwMDAnKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLmF1dGhvcml6YXRpb24pO1xyXG4gICAgICAgICAgc3RhdGUuY29tbWl0KCdzZXRUb2tlbicsIHJlcy5kYXRhLmF1dGhvcml6YXRpb24pXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aDogJy9sb2dpbicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2FsaW1hbWFzaHVoZWl0aS50dGZcIjsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9nbG9iYWwuc2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwODM1NTViYVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0zIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9nbG9iYWwuc2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9wb2xsdXRlci5zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI3ZjRiMWVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9wb2xsdXRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0zIS4vcG9sbHV0ZXIuc2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKioqXHJcbiAqIEZpbGVVdGlscyBmb3IgY29yZG92YSBBbmRyb2lkIHVzZSBvbmx5LFxyXG4gKiBhbmQgdGhpcyBpcyBib3JuIGZvciByZXBsYWNpbmcgZmlsZS10cmFuc2ZlciBwbHVnaW4uXHJcbiAqIElmIHlvdSB3YW50IHRvIHNwZWNpZnkgdGhlIHN0b3JhZ2UgbG9jYXRpb24sIHlvdSBuZWVkIHRvIGluc3RhbGwgY29yZG92YS1wbHVnaW4tZmlsZVxyXG4gKiBhbmQgdXNlIGl0LCB0aGVuIHNlZSBob3cgaXQgd29ya3MuXHJcbiAqXHJcbiAqIEBhdXRob3IgTTRcclxuICogQGxpY2VuY2UgTUlUXHJcbiAqIEB2ZXJzaW9uIDEuMVxyXG4gKiBAY29weXJpZ2h0IE00XHJcbiAqIDIwMTgtMTAtMTBcclxuICovXHJcblxyXG4vKioqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgRmlsZVV0aWxzID0ge307XHJcblxyXG4vKioqXHJcbiAqIERvd25sb2FkZXIgT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uOiBzZXQgb3B0aW9uIGZvciBkb3dubG9hZGVyXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmw6IGRvd25sb2FkIHVybFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZmlsZW5hbWU6IGZpbGVuYW1lIHdpdGggdHlwZSwgZS5nLiBcIndobyBraWxsZWQgbWUuZG9jXCJcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNhdmVMb2NhdGlvbjogYW5kcm9pZCBzYXZlIGxvY2F0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2l0aENyZWRlbnRpYWw6IHNldCB4aHIud2l0aENyZWRlbnRpYWxcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25Qcm9ncmVzc1xyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25GYWlsXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uQ2FuY2VsXHJcbiAqL1xyXG5GaWxlVXRpbHMuRG93bmxvYWRlciA9IGZ1bmN0aW9uKG9wdGlvbil7XHJcbiAgaWYoIW9wdGlvbil7XHJcbiAgICBvcHRpb24gPSB7fTtcclxuICB9XHJcbiAgdGhpcy51cmwgPSBvcHRpb24udXJsO1xyXG4gIHRoaXMuZmlsZW5hbWUgPSBvcHRpb24uZmlsZW5hbWU7XHJcbiAgdGhpcy5zYXZlTG9jYXRpb24gPSBvcHRpb24uc2F2ZUxvY2F0aW9uO1xyXG4gIHRoaXMud2l0aENyZWRlbnRpYWwgPSBvcHRpb24ud2l0aENyZWRlbnRpYWwgfHwgdHJ1ZTtcclxuICB0aGlzLm9uUHJvZ3Jlc3MgPSBvcHRpb24ub25Qcm9ncmVzcyB8fCBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkgeyB9O1xyXG4gIHRoaXMub25TdWNjZXNzID0gb3B0aW9uLm9uU3VjY2VzcyB8fCBmdW5jdGlvbiAoZmlsZUVudHJ5KSB7IH07XHJcbiAgdGhpcy5vbkZhaWwgPSBvcHRpb24ub25GYWlsIHx8IGZ1bmN0aW9uIChlcnJvckNvZGUpIHsgfTtcclxuICB0aGlzLm9uQ2FuY2VsID0gb3B0aW9uLm9uQ2FuY2VsIHx8IGZ1bmN0aW9uICgpIHsgfTtcclxuICAvL1RPRE8gcGFyYW1zIGlzIG5vdCB1c2VkIGluIGN1cnJlbnQgdmVyc2lvbiwgcGxlYXNlIGFkZCBwYXJhbXMgaW50byB1cmxcclxuICB0aGlzLnBhcmFtcyA9IG9wdGlvbi5wYXJhbXMgfHwge307XHJcblxyXG4gIC8vZXJyb3IgY29kZVxyXG4gIHRoaXMuZXJyb3IgPSB7fTtcclxuICB0aGlzLmVycm9yLkNBTkNFTEVEID0gMDtcclxuICB0aGlzLmVycm9yLlNVQ0NFU1MgPSAxO1xyXG4gIHRoaXMuZXJyb3IuTk9fVVJMID0gLTE7XHJcbiAgdGhpcy5lcnJvci5OT19GSUxFTkFNRSA9IC0yO1xyXG4gIHRoaXMuZXJyb3IuRklMRV9TWVNURU1fRVJST1IgPSAtMztcclxuICB0aGlzLmVycm9yLkxPQ0FMX0ZJTEVfU1lTVEVNX0VSUk9SID0gLTQ7XHJcbiAgdGhpcy5lcnJvci5YSFJfU1RBVFVTX0VSUk9SID0gLTU7XHJcbiAgdGhpcy5lcnJvci5TQVZFX0ZJTEVfRVJST1IgPSAtNjtcclxuICB0aGlzLmVycm9yLldSSVRFX0ZJTEVfRVJST1IgPSAtNztcclxufTtcclxuXHJcbkZpbGVVdGlscy5Eb3dubG9hZGVyLnByb3RvdHlwZSA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgZmlsZW5hbWU6IFwiXCIsXHJcbiAgc2F2ZUxvY2F0aW9uOiBcIlwiLFxyXG4gIHdpdGhDcmVkZW50aWFsOiB0cnVlLFxyXG4gIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7fSxcclxuICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIChmaWxlRW50cnkpIHt9LFxyXG4gIG9uRmFpbDogZnVuY3Rpb24gKGVycm9yQ29kZSkge30sXHJcbiAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIHhocjogbnVsbCxcclxuICBwYXJhbXM6IHt9LFxyXG4gIGVycm9yOiB7fSxcclxuICBmaWxlVHlwZTogXCJcIixcclxuICBtaW1lVHlwZTogXCJcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGRlc3Ryb3lcclxuICogQG1ldGhvZFxyXG4gKi9cclxuRmlsZVV0aWxzLkRvd25sb2FkZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xyXG4gIGRlbGV0ZSB0aGlzO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNhbmNlbFxyXG4gKiBAbWV0aG9kXHJcbiAqL1xyXG5GaWxlVXRpbHMuRG93bmxvYWRlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oKXtcclxuICBpZih0aGlzLnhocil7XHJcbiAgICB0aGlzLnhoci5hYm9ydCgpO1xyXG4gIH1cclxuICB0aGlzLm9uQ2FuY2VsKCk7XHJcbiAgdGhpcy5kZXN0cm95KCk7XHJcbn07XHJcblxyXG4vKipcclxuICogYmVmb3JlRG93bmxvYWRcclxuICogQG1ldGhvZFxyXG4gKiBkYXRhIHZlcmlmeWluZyBiZWZvcmUgZG93bmxvYWQgc3RhcnRcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbkZpbGVVdGlscy5Eb3dubG9hZGVyLnByb3RvdHlwZS5iZWZvcmVEb3dubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgLypcclxuICAgIFNvbWUgb3B0aW9uIG11c3QgYmUgc3BlY2lmaWVkIVxyXG4gICAqL1xyXG4gIGlmKCF0aGlzLnVybCl7XHJcbiAgICBjb25zb2xlLndhcm4oXCJ1cmwgaXMgdW5kZWZpbmVkIVxcbiBlLmcuXFxuIHZhciBkb3dubG9hZGVyID0gbmV3IEZpbGVVdGlscy5Eb3dubG9hZGVyKHt1cmw6ICcuLi4nfSk7XFxuIG9yXFxuIGRvd25sb2FkZXIudXJsID0gJy4uLicgXCIpO1xyXG4gICAgdGhpcy5vbkZhaWwoLTEpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZighdGhpcy5maWxlbmFtZSl7XHJcbiAgICBjb25zb2xlLndhcm4oXCJmaWxlbmFtZSBpcyB1bmRlZmluZWQhXFxuIGUuZy5cXG4gdmFyIGRvd25sb2FkZXIgPSBuZXcgRmlsZVV0aWxzLkRvd25sb2FkZXIoe2ZpbGVuYW1lOiAnLi4uJ30pO1xcbiBvclxcbiBkb3dubG9hZGVyLmZpbGVuYW1lID0gJy4uLicgXCIpO1xyXG4gICAgdGhpcy5vbkZhaWwoLTIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIFRyeWluZyB0byBmaW5kIGxvY2F0aW9uIHRvIHNhdmUgZmlsZSB3aGVuIHNhdmVMb2NhdGlvbiBpcyBub3Qgc3BlY2lmaWVkOlxyXG4gICAgaWYgY29yZG92YS1wbHVnaW4tZmlsZSBpbnN0YWxsZWQsIHNhdmUgaW50byBleHRlcm5hbEFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeSxcclxuICAgIGlmIG5vdCwgdHJ5IHRvIHNhdmUgaW50byAvcm9vdC5cclxuICAgKi9cclxuICBpZighdGhpcy5zYXZlTG9jYXRpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICB0aGlzLnNhdmVMb2NhdGlvbiA9IGNvcmRvdmEuZmlsZS5leHRlcm5hbEFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTtcclxuICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvcmRvdmEtcGx1Z2luLWZpbGUgcGx1Z2luIGlzIG5vdCBpbnN0YWxsZWQsIHRyeSB0byBzYXZlIGludG8gL3Jvb3RcIik7XHJcbiAgICAgIHRoaXMuc2F2ZUxvY2F0aW9uID0gXCJcIjtcclxuICAgICAgdGhpcy51c2VGaWxlU3lzdGVtTG9jYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIFRyeWluZyBzcGxpdCBmaWxlIHR5cGUgYW5kIGdldCBNSU1FLXR5cGVcclxuICAgKi9cclxuICB0aGlzLmZpbGVUeXBlID0gdGhpcy5maWxlbmFtZS5zdWJzdHJpbmcodGhpcy5maWxlbmFtZS5sYXN0SW5kZXhPZihcIi5cIikgKyAxKTtcclxuICB0aGlzLm1pbWVUeXBlID0gRmlsZVV0aWxzLmdldE1JTUVUeXBlKHRoaXMuZmlsZVR5cGUpO1xyXG5cclxuICBpZighdGhpcy5maWxlVHlwZSl7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbGVUeXBlIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgY2hlY2sgeW91ciBmaWxlbmFtZTpcIiArIHRoaXMuZmlsZW5hbWUpO1xyXG4gIH1cclxuICBlbHNlIGlmKHRoaXMubWltZVR5cGUgPT09IFwiXCIpe1xyXG4gICAgY29uc29sZS5sb2coXCJNSU1FLXR5cGUgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBjaGVjayB5b3VyIGZpbGVUeXBlOlwiICsgdGhpcy5maWxlVHlwZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmZpbGVuYW1lID0gZGVjb2RlVVJJKHRoaXMuZmlsZW5hbWUpO1xyXG4gIHRoaXMudXJsID0gZGVjb2RlVVJJKHRoaXMudXJsKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBkb3dubG9hZFxyXG4gKiBAbWV0aG9kXHJcbiAqIHN0YXJ0IGRvd25sb2FkXHJcbiAqICovXHJcbkZpbGVVdGlscy5Eb3dubG9hZGVyLnByb3RvdHlwZS5kb3dubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gIC8vIHZlcmlmeSBmYWlsZWRcclxuICBpZighdGhpcy5iZWZvcmVEb3dubG9hZCgpKXtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvLyBzdGFydFxyXG4gIGlmICh0aGlzLnVzZUZpbGVTeXN0ZW1Mb2NhdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0RmlsZVN5c3RlbSh3aW5kb3cuUEVSU0lTVEVOVCwgMCwgZnVuY3Rpb24gKGZpbGVTeXN0ZW0pIHtcclxuICAgICAgICBfdGhpcy5nZXRGaWxlKGZpbGVTeXN0ZW0ucm9vdCk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlcXVlc3RGaWxlU3lzdGVtOicgKyBlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICBfdGhpcy5vbkZhaWwoLTMpO1xyXG4gICAgICB9KTtcclxuICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgX3RoaXMuZ2V0RmlsZSgpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonICsgZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgIF90aGlzLm9uRmFpbCgtMyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh0aGlzLnNhdmVMb2NhdGlvbiwgZnVuY3Rpb24gKHNhdmVFbnRyeSkge1xyXG4gICAgICBfdGhpcy5nZXRGaWxlKHNhdmVFbnRyeSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTDonICsgZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgIF90aGlzLm9uRmFpbCgtNCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0RmlsZVxyXG4gKiBAcGFyYW0ge0VudHJ5fSBzYXZlRW50cnlcclxuICovXHJcbkZpbGVVdGlscy5Eb3dubG9hZGVyLnByb3RvdHlwZS5nZXRGaWxlID0gZnVuY3Rpb24oc2F2ZUVudHJ5KXtcclxuXHJcbiAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSBfdGhpcy53aXRoQ3JlZGVudGlhbDtcclxuICB4aHIub3BlbignR0VUJywgX3RoaXMudXJsLCB0cnVlKTtcclxuICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG5cclxuICAvL3JldHVybiB4aHIgaW5zdGFuY2VcclxuICBfdGhpcy54aHIgPSB4aHI7XHJcblxyXG4gIC8vb25Qcm9ncmVzc1xyXG4gIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24ocHJvZ3Jlc3NFdmVudCkge1xyXG4gICAgX3RoaXMub25Qcm9ncmVzcyhwcm9ncmVzc0V2ZW50KTtcclxuICB9O1xyXG5cclxuICAvL29uTG9hZGVkXHJcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdGhpcy5yZXNwb25zZV0sIHsgdHlwZTogX3RoaXMubWltZVR5cGUgfSk7XHJcbiAgICAgIF90aGlzLnNhdmVGaWxlKHNhdmVFbnRyeSwgYmxvYik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImRvd25sb2FkIGZhaWxlZCwgeGhyIHN0YXR1cyBjb2RlOlwiICsgdGhpcy5zdGF0dXMpO1xyXG4gICAgICBfdGhpcy5vbkZhaWwoLTUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfdGhpcy5vbkNhbmNlbCgpO1xyXG4gIH07XHJcblxyXG4gIHhoci5zZW5kKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogc2F2ZUZpbGVcclxuICogQHBhcmFtIHNhdmVFbnRyeVxyXG4gKiBAcGFyYW0ge2Jsb2J9IGZpbGVEYXRhXHJcbiAqIGNyZWF0ZSBGaWxlIG9iamVjdCBpbiBmaWxlIHN5c3RlbVxyXG4gKiAqL1xyXG5GaWxlVXRpbHMuRG93bmxvYWRlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbihzYXZlRW50cnksIGZpbGVEYXRhKSB7XHJcblxyXG4gIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gIHNhdmVFbnRyeS5nZXRGaWxlKF90aGlzLmZpbGVuYW1lLCB7IGNyZWF0ZTogdHJ1ZSwgZXhjbHVzaXZlOiBmYWxzZSB9LCBmdW5jdGlvbiAoZmlsZUVudHJ5KSB7XHJcbiAgICBfdGhpcy53cml0ZUZpbGUoZmlsZUVudHJ5LCBmaWxlRGF0YSk7XHJcbiAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hlbiBzYXZlRmlsZTonICsgZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgX3RoaXMub25GYWlsKC02KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiB3cml0ZUZpbGVcclxuICogQHBhcmFtIGZpbGVFbnRyeVxyXG4gKiBAcGFyYW0gZmlsZURhdGFcclxuICoqL1xyXG5GaWxlVXRpbHMuRG93bmxvYWRlci5wcm90b3R5cGUud3JpdGVGaWxlID0gZnVuY3Rpb24oZmlsZUVudHJ5LCBmaWxlRGF0YSkge1xyXG5cclxuICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAvL3VwZGF0ZWRcclxuICAvL2xhcmdlIGZpbGUgd2lsbCBjYXVzZSBvdXQgb2YgbWVtb3J5IGNyYXNoXHJcbiAgLy9zbyBoZXJlIHRvIHNsaWNlIGZpbGUgZGF0YSBpbnRvIDRtYiBibG9ja3NcclxuICB2YXIgYnl0ZXNXcml0dGVuID0gMCxcclxuICAgIEJMT0NLX1NJWkUgPSA0ICogMTAyNCAqIDEwMjQsXHJcbiAgICB3cml0ZUJsb2NrID0gZnVuY3Rpb24oX2ZpbGVXcml0ZXIsIGNhbGxiYWNrKSB7XHJcbiAgICAgIC8vY2FsYyBlYWNoIGJsb2NrIHRvIHdyaXRlXHJcbiAgICAgIHZhciBibG9ja1NpemUgPSBNYXRoLm1pbihCTE9DS19TSVpFLCBmaWxlRGF0YS5zaXplIC0gYnl0ZXNXcml0dGVuKSxcclxuICAgICAgICBibG9jayA9IGZpbGVEYXRhLnNsaWNlKGJ5dGVzV3JpdHRlbiwgYnl0ZXNXcml0dGVuICsgYmxvY2tTaXplKTtcclxuICAgICAgX2ZpbGVXcml0ZXIud3JpdGUoYmxvY2spO1xyXG4gICAgICBieXRlc1dyaXR0ZW4gKz0gYmxvY2tTaXplO1xyXG4gICAgICAvL2ZpbmlzaCB3cml0aW5nP1xyXG4gICAgICBfZmlsZVdyaXRlci5vbndyaXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChieXRlc1dyaXR0ZW4gPCBmaWxlRGF0YS5zaXplKSB7XHJcbiAgICAgICAgICB3cml0ZUJsb2NrKF9maWxlV3JpdGVyLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICBfdGhpcy5vblN1Y2Nlc3MoZmlsZUVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAvLyBDcmVhdGUgYSBGaWxlV3JpdGVyIG9iamVjdCBmb3Igb3VyIEZpbGVFbnRyeSAobG9nLnR4dCkuXHJcbiAgZmlsZUVudHJ5LmNyZWF0ZVdyaXRlcihmdW5jdGlvbiAoZmlsZVdyaXRlcikge1xyXG5cclxuICAgIC8vIGZpbGVXcml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcImRvd25sb2FkIHN1Y2Nlc3MhXCIpO1xyXG4gICAgLy8gICBfdGhpcy5vblN1Y2Nlc3MoZmlsZUVudHJ5KTtcclxuICAgIC8vIH07XHJcbiAgICAvL1xyXG4gICAgLy8gZmlsZVdyaXRlci5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIGZpbGUgd3JpdGU6IFwiICsgZS50b1N0cmluZygpKTtcclxuICAgIC8vICAgX3RoaXMub25GYWlsKC03KTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gZmlsZVdyaXRlci53cml0ZShmaWxlRGF0YSk7XHJcbiAgICB3cml0ZUJsb2NrKGZpbGVXcml0ZXIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3cml0ZSBlbmQhXCIpO1xyXG4gICAgICAvLyBfdGhpcy5vblN1Y2Nlc3MoZmlsZUVudHJ5KTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKioqXHJcbiAqIFVwbG9hZGVyIE9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIG9wdGlvblxyXG4gKiBAcHJvcGVydHkgdXJsOiB5b3VyIHJlcXVlc3QgdXJsXHJcbiAqIEBwcm9wZXJ0eSBmaWxlVXJpOiB0aGUgdXJpIG9mIGZpbGUsIGUuZy4gJ2ZpbGU6Ly8vc3RvcmFnZS9lbXVsYXRlZC8wL3dlbGwgZG9uZS50eHQnXHJcbiAqIEBwcm9wZXJ0eSBmaWxlQWxpYXM6IHRoZSBmaWVsZCBuYW1lIG9mIGZpbGUsIGRlZmF1bHQgJ2ZpbGUnXHJcbiAqIEBwcm9wZXJ0eSBwYXJhbXM6IHBvc3QgZGF0YSwgd29yayBhcyBhamF4J3MgZGF0YVxyXG4gKiBAcHJvcGVydHkgb25Qcm9ncmVzc1xyXG4gKiBAcHJvcGVydHkgb25TdWNjZXNzXHJcbiAqIEBwcm9wZXJ0eSBvbkZhaWxcclxuICogQHByb3BlcnR5IG9uQ2FuY2VsXHJcbiAqL1xyXG5GaWxlVXRpbHMuVXBsb2FkZXIgPSBmdW5jdGlvbiAob3B0aW9uKSB7XHJcbiAgaWYoIW9wdGlvbikge1xyXG4gICAgb3B0aW9uID0ge307XHJcbiAgfVxyXG4gIHRoaXMudXJsID0gb3B0aW9uLnVybDtcclxuICB0aGlzLmZpbGVVcmkgPSBvcHRpb24uZmlsZVVyaTtcclxuICB0aGlzLmZpbGVBbGlhcyA9IG9wdGlvbi5maWxlQWxpYXMgfHwgXCJmaWxlXCI7XHJcbiAgdGhpcy5wYXJhbXMgPSBvcHRpb24ucGFyYW1zO1xyXG4gIHRoaXMub25Qcm9ncmVzcyA9IG9wdGlvbi5vblByb2dyZXNzIHx8IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7IH07XHJcbiAgdGhpcy5vblN1Y2Nlc3MgPSBvcHRpb24ub25TdWNjZXNzIHx8IGZ1bmN0aW9uIChyZXN1bHQpIHsgfTtcclxuICB0aGlzLm9uRmFpbCA9IG9wdGlvbi5vbkZhaWwgfHwgZnVuY3Rpb24gKGVycm9yQ29kZSkgeyB9O1xyXG4gIHRoaXMub25DYW5jZWwgPSBvcHRpb24ub25DYW5jZWwgfHwgZnVuY3Rpb24gKCkgeyB9O1xyXG59O1xyXG5cclxuRmlsZVV0aWxzLlVwbG9hZGVyLnByb3RvdHlwZSA9IHtcclxuICB1cmw6IFwiXCIsXHJcbiAgZmlsZVVyaTogXCJcIixcclxuICBmaWxlQWxpYXM6IFwiXCIsXHJcbiAgcGFyYW1zOiB7fSxcclxuICBvblByb2dyZXNzOiBudWxsLFxyXG4gIG9uU3VjY2VzczogbnVsbCxcclxuICBvbkZhaWw6IG51bGwsXHJcbiAgb25DYW5jZWw6IG51bGwsXHJcbiAgeGhyOiBudWxsXHJcbn07XHJcblxyXG4vKipcclxuICogZGVzdHJveVxyXG4gKiBAbWV0aG9kXHJcbiAqL1xyXG5GaWxlVXRpbHMuVXBsb2FkZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xyXG4gIGRlbGV0ZSB0aGlzO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGJlZm9yZVVwbG9hZFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuRmlsZVV0aWxzLlVwbG9hZGVyLnByb3RvdHlwZS5iZWZvcmVVcGxvYWQgPSBmdW5jdGlvbigpe1xyXG4gIC8qXHJcbiAgICBTb21lIG9wdGlvbiBtdXN0IGJlIHNwZWNpZmllZCFcclxuICAgKi9cclxuICBpZighdGhpcy51cmwpe1xyXG4gICAgY29uc29sZS53YXJuKFwidXJsIGlzIHVuZGVmaW5lZCFcXG4gZS5nLlxcbiB2YXIgdXBsb2FkZXIgPSBuZXcgRmlsZVV0aWxzLlVwbG9hZGVyKHt1cmw6ICcuLi4nfSk7XFxuIG9yXFxuIHVwbG9hZGVyLnVybCA9ICcuLi4nIFwiKTtcclxuICAgIHRoaXMub25GYWlsKC0xKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYoIXRoaXMuZmlsZVVyaSl7XHJcbiAgICBjb25zb2xlLndhcm4oXCJmaWxlbmFtZSBpcyB1bmRlZmluZWQhXFxuIGUuZy5cXG4gdmFyIHVwbG9hZGVyID0gbmV3IEZpbGVVdGlscy5VcGxvYWRlcih7ZmlsZVVyaTogJy4uLid9KTtcXG4gb3JcXG4gdXBsb2FkZXIuZmlsZVVyaSA9ICcuLi4nIFwiKTtcclxuICAgIGNvbnNvbGUud2FybihcIm1ha2Ugc3VyZSB1c2luZyBjb3Jkb3ZhLXBsdWdpbi1maWxlIHRvIGdldCB5b3VyIGZpbGUgdXJpXCIpO1xyXG4gICAgdGhpcy5vbkZhaWwoLTIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogdXBsb2FkXHJcbiAqIEBtZXRob2RcclxuICovXHJcbkZpbGVVdGlscy5VcGxvYWRlci5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICBpZighX3RoaXMuYmVmb3JlVXBsb2FkKCkpe1xyXG4gICAgX3RoaXMuZGVzdHJveSgpO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgICBUcnkgdG8gdHJhbnNmZXIgZmlsZSB1cmkgaW50byBmaWxlIGVudHJ5IG9iamVjdFxyXG4gICAgICB0aGlzIG1pZ2h0IGZhaWwgYmVjYXVzZSBvZiBub3QgdXNpbmcgY29yZG92YS1wbHVnaW4tZmlsZSwgb3IgbGF1bmNoZWQgaW4gYnJvd3NlclxyXG4gICAqL1xyXG4gIHRyeXtcclxuICAgIHdpbmRvdy5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKF90aGlzLmZpbGVVcmksIGZ1bmN0aW9uIChmaWxlRW50cnkpIHtcclxuICAgICAgX3RoaXMuZ2V0RmlsZShmaWxlRW50cnkpXHJcbiAgICB9KVxyXG4gIH1jYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcImZpbGUgc3lzdGVtIGVycm9yLCBwbGVhc2UgY2hlY2sgaWYgY29yZG92YS1wbHVnaW4tZmlsZSBoYXMgYmVlbiBpbnN0YWxsZWRcIik7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXRGaWxlXHJcbiAqIEBwYXJhbSBmaWxlRW50cnlcclxuICovXHJcbkZpbGVVdGlscy5VcGxvYWRlci5wcm90b3R5cGUuZ2V0RmlsZSA9IGZ1bmN0aW9uIChmaWxlRW50cnkpIHtcclxuICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAvKlxyXG4gICAgICBZb3UgYWxzbyBuZWVkIGEgRmlsZUVudHJ5IG9iamVjdCB0byByZWFkIGFuIGV4aXN0aW5nIGZpbGUuXHJcbiAgICAgIFVzZSB0aGUgZmlsZSBwcm9wZXJ0eSBvZiBGaWxlRW50cnkgdG8gZ2V0IHRoZSBmaWxlIHJlZmVyZW5jZSxcclxuICAgICAgYW5kIHRoZW4gY3JlYXRlIGEgbmV3IEZpbGVSZWFkZXIgb2JqZWN0LlxyXG4gICAgICBZb3UgY2FuIHVzZSBtZXRob2RzIGxpa2UgcmVhZEFzVGV4dCB0byBzdGFydCB0aGUgcmVhZCBvcGVyYXRpb24uXHJcbiAgICAgIFdoZW4gdGhlIHJlYWQgb3BlcmF0aW9uIGlzIGNvbXBsZXRlLFxyXG4gICAgICB0aGlzLnJlc3VsdCBzdG9yZXMgdGhlIHJlc3VsdCBvZiB0aGUgcmVhZCBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgdHJ5e1xyXG4gICAgZmlsZUVudHJ5LmZpbGUoZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgLy9maWxlIGluZm9cclxuICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcblxyXG4gICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLm5hbWU7XHJcblxyXG4gICAgICBpZihmaWxlTmFtZSA9PT0gXCJjb250ZW50XCIpe1xyXG4gICAgICAgIHZhciBsb2NhbFVSTCA9IGRlY29kZVVSSShmaWxlLmxvY2FsVVJMKTtcclxuICAgICAgICBmaWxlTmFtZSA9IGxvY2FsVVJMLnN1YnN0cmluZyhsb2NhbFVSTC5sYXN0SW5kZXhPZihcIi9cIikrMSk7XHJcbiAgICAgICAgaWYoZmlsZU5hbWUuaW5kZXhPZihcIiUyRlwiKSE9PS0xKXtcclxuICAgICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUuc3Vic3RyaW5nKGZpbGVOYW1lLmxhc3RJbmRleE9mKFwiJTJGXCIpKzMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHR5cGUgPSBGaWxlVXRpbHMuZ2V0RmlsZVR5cGUoZmlsZS50eXBlKTtcclxuICAgICAgICBpZih0eXBlICYmIGZpbGVOYW1lLmluZGV4T2YoXCIuXCIgKyB0eXBlKSA9PT0gLTEpe1xyXG4gICAgICAgICAgZmlsZU5hbWUgKz0gXCIuXCIgKyB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YXIgZmlsZUxlbmd0aCA9IGZpbGUuc2l6ZTtcclxuICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xyXG4gICAgICAvLyB2YXIgZmlsZVR5cGUgPSBmaWxlTmFtZS5zdWJzdHJpbmcoZmlsZU5hbWUubGFzdEluZGV4T2YoXCIuXCIpICsgMSk7XHJcbiAgICAgIC8vIHZhciBtaW1lVHlwZSA9IEZpbGVVdGlscy5nZXRNSU1FVHlwZShmaWxlVHlwZSk7XHJcblxyXG4gICAgICAvL3JlYWQgZmlsZVxyXG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSh0aGlzLnJlc3VsdCldLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xyXG4gICAgICAgIF90aGlzLnBvc3QoYmxvYiwgZmlsZU5hbWUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG4gICAgfSlcclxuICB9Y2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUud2FybihlKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogcG9zdFxyXG4gKiBAcGFyYW0ge0Jsb2J9IGJsb2JcclxuICogQHBhcmFtIGZpbGVOYW1lXHJcbiAqL1xyXG5GaWxlVXRpbHMuVXBsb2FkZXIucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoYmxvYiwgZmlsZU5hbWUpIHtcclxuXHJcbiAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgLypcclxuICAgICAgZ2VuZXJhdGUgZm9ybURhdGFcclxuICAgICAgSW4gdGhpcyBjYXNlLCBhbnkgdmFsdWUgaW4gX3RoaXMucGFyYW1zIHNob3VsZCBiZSBzdHJpbmcvbnVtYmVyIGV0Yy5cclxuICAgICAgU28sIGlmIHRoZXJlIGlzIGFueSBKU09OIHZhbHVlLCBqdXN0IHVzZSBKU09OLnN0cmluZ2lmeSgpXHJcbiAgICAgIGUuZy5cclxuICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgIHNlYXJjaEZpZWxkOiBKU09OLnN0cmluZ2lmeSgge25hbWU6ICdPY3RvcGF0aCBUcmF2ZWxsZXInLCB0eXBlOiAnZ2FtZSd9ICksXHJcbiAgICAgICAgICBpZDogOFxyXG4gICAgICB9XHJcbiAgICovXHJcbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9yKHZhciBpIGluIF90aGlzLnBhcmFtcyl7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoaSwgX3RoaXMucGFyYW1zW2ldKTtcclxuICB9XHJcbiAgZm9ybURhdGEuYXBwZW5kKF90aGlzLmZpbGVBbGlhcywgYmxvYiwgZmlsZU5hbWUpO1xyXG4gIC8qXHJcbiAgICAgIHVzZSB4aHIgcG9zdCBGb3JtRGF0YVxyXG4gICAgICBhbmQgcmV0dXJuIHhociBpbnN0YW5jZS5cclxuICAgKi9cclxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gIF90aGlzLnhociA9IHhocjtcclxuXHJcbiAgeGhyLm9wZW4oXCJQT1NUXCIsIF90aGlzLnVybCwgdHJ1ZSk7XHJcbiAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcIm11bHRpcGFydC9mb3JtLWRhdGFcIik7XHJcbiAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKTtcclxuXHJcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkIGZpbmlzaGVkOlwiICsgZmlsZU5hbWUpO1xyXG4gICAgdHJ5e1xyXG4gICAgICB2YXIgcmVzcG9uc2UgPSBldmVudC5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIF90aGlzLm9uU3VjY2VzcyhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgX3RoaXMub25GYWlsKGV2ZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKHByb2dyZXNzRXZlbnQpe1xyXG4gICAgX3RoaXMub25Qcm9ncmVzcyhwcm9ncmVzc0V2ZW50KTtcclxuICB9O1xyXG5cclxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIF90aGlzLm9uRmFpbCgtOCwgZSk7XHJcbiAgfTtcclxuXHJcbiAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBnZXRNSU1FVHlwZVxyXG4gKiBAcGFyYW0gZmlsZVR5cGVcclxuICovXHJcbkZpbGVVdGlscy5nZXRNSU1FVHlwZSA9IGZ1bmN0aW9uIChmaWxlVHlwZSkge1xyXG4gIHZhciBqc29uID0ge1xyXG4gICAgYXBrOiBcImFwcGxpY2F0aW9uL3ZuZC5hbmRyb2lkLnBhY2thZ2UtYXJjaGl2ZVwiLFxyXG4gICAgYXZpOiBcInZpZGVvL3gtbXN2aWRlb1wiLFxyXG4gICAgYmluOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgYm1wOiBcImltYWdlL2JtcFwiLFxyXG4gICAgY2xhc3M6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICBjc3M6IFwidGV4dC9jc3NcIixcclxuICAgIGRpcjogXCJhcHBsaWNhdGlvbi94LWRpcmVjdG9yXCIsXHJcbiAgICBkbGw6IFwiYXBwbGljYXRpb24veC1tc2Rvd25sb2FkXCIsXHJcbiAgICBkb2M6IFwiYXBwbGljYXRpb24vbXN3b3JkXCIsXHJcbiAgICBkb2N4OiBcImFwcGxpY2F0aW9uL21zd29yZFwiLFxyXG4gICAgZXhlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgZ2lmOiBcImltYWdlL2dpZlwiLFxyXG4gICAgZ3RhcjogXCJhcHBsaWNhdGlvbi94LWd0YXJcIixcclxuICAgIGd6OiBcImFwcGxpY2F0aW9uL3gtZ3ppcFwiLFxyXG4gICAgaHRtOiBcInRleHQvaHRtbFwiLFxyXG4gICAgaHRtbDogXCJ0ZXh0L2h0bWxcIixcclxuICAgIGljbzogXCJpbWFnZS94LWljb25cIixcclxuICAgIGpwZTogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICBqcGVnOiBcImltYWdlL2pwZWdcIixcclxuICAgIGpwZzogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICBqczogXCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIixcclxuICAgIG0zdTogXCJhdWRpby94LW1wZWd1cmxcIixcclxuICAgIG1vdjogXCJ2aWRlby9xdWlja3RpbWVcIixcclxuICAgIG1wMzogXCJhdWRpby9tcGVnXCIsXHJcbiAgICBtcGVnOiBcInZpZGVvL21wZWdcIixcclxuICAgIHBkZjogXCJhcHBsaWNhdGlvbi9wZGZcIixcclxuICAgIHBuZzogXCJpbWFnZS9wbmdcIixcclxuICAgIHBwdDpcImFwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50XCIsXHJcbiAgICByYXI6XCJhcHBsaWNhdGlvbi94LXJhci1jb21wcmVzc2VkXCIsXHJcbiAgICBzdmc6XCJpbWFnZS9zdmcreG1sXCIsXHJcbiAgICBzd2Y6XCJhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaFwiLFxyXG4gICAgdGFyOlwiYXBwbGljYXRpb24veC10YXJcIixcclxuICAgIHRnejpcImFwcGxpY2F0aW9uL3gtY29tcHJlc3NlZFwiLFxyXG4gICAgdGlmOlwiaW1hZ2UvdGlmZlwiLFxyXG4gICAgdGlmZjpcImltYWdlL3RpZmZcIixcclxuICAgIHR4dDpcInRleHQvcGxhaW5cIixcclxuICAgIHdhdjpcImF1ZGlvL3gtd2F2XCIsXHJcbiAgICB3cHM6XCJhcHBsaWNhdGlvbi92bmQubXMtd29ya3NcIixcclxuICAgIHhsczpcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiLFxyXG4gICAgeGxzeDpcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiLFxyXG4gICAgemlwOlwiYXBwbGljYXRpb24vemlwXCJcclxuICB9O1xyXG4gIHJldHVybiBqc29uW2ZpbGVUeXBlLnRvTG93ZXJDYXNlKCldIHx8IFwiXCI7XHJcbn07XHJcblxyXG5GaWxlVXRpbHMuZ2V0RmlsZVR5cGUgPSBmdW5jdGlvbiAobWltZVR5cGUpIHtcclxuICB2YXIganNvbiA9IHtcclxuICAgIGFwazogXCJhcHBsaWNhdGlvbi92bmQuYW5kcm9pZC5wYWNrYWdlLWFyY2hpdmVcIixcclxuICAgIGF2aTogXCJ2aWRlby94LW1zdmlkZW9cIixcclxuICAgIGJpbjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcclxuICAgIGJtcDogXCJpbWFnZS9ibXBcIixcclxuICAgIGNsYXNzOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgY3NzOiBcInRleHQvY3NzXCIsXHJcbiAgICBkaXI6IFwiYXBwbGljYXRpb24veC1kaXJlY3RvclwiLFxyXG4gICAgZGxsOiBcImFwcGxpY2F0aW9uL3gtbXNkb3dubG9hZFwiLFxyXG4gICAgZG9jOiBcImFwcGxpY2F0aW9uL21zd29yZFwiLFxyXG4gICAgZG9jeDogXCJhcHBsaWNhdGlvbi9tc3dvcmRcIixcclxuICAgIGV4ZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcclxuICAgIGdpZjogXCJpbWFnZS9naWZcIixcclxuICAgIGd0YXI6IFwiYXBwbGljYXRpb24veC1ndGFyXCIsXHJcbiAgICBnejogXCJhcHBsaWNhdGlvbi94LWd6aXBcIixcclxuICAgIGh0bTogXCJ0ZXh0L2h0bWxcIixcclxuICAgIGh0bWw6IFwidGV4dC9odG1sXCIsXHJcbiAgICBpY286IFwiaW1hZ2UveC1pY29uXCIsXHJcbiAgICBqcGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAganBlZzogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICBqcGc6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAganM6IFwiYXBwbGljYXRpb24veC1qYXZhc2NyaXB0XCIsXHJcbiAgICBtM3U6IFwiYXVkaW8veC1tcGVndXJsXCIsXHJcbiAgICBtb3Y6IFwidmlkZW8vcXVpY2t0aW1lXCIsXHJcbiAgICBtcDM6IFwiYXVkaW8vbXBlZ1wiLFxyXG4gICAgbXBlZzogXCJ2aWRlby9tcGVnXCIsXHJcbiAgICBwZGY6IFwiYXBwbGljYXRpb24vcGRmXCIsXHJcbiAgICBwbmc6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICBwcHQ6XCJhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludFwiLFxyXG4gICAgcmFyOlwiYXBwbGljYXRpb24veC1yYXItY29tcHJlc3NlZFwiLFxyXG4gICAgc3ZnOlwiaW1hZ2Uvc3ZnK3htbFwiLFxyXG4gICAgc3dmOlwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIixcclxuICAgIHRhcjpcImFwcGxpY2F0aW9uL3gtdGFyXCIsXHJcbiAgICB0Z3o6XCJhcHBsaWNhdGlvbi94LWNvbXByZXNzZWRcIixcclxuICAgIHRpZjpcImltYWdlL3RpZmZcIixcclxuICAgIHRpZmY6XCJpbWFnZS90aWZmXCIsXHJcbiAgICB0eHQ6XCJ0ZXh0L3BsYWluXCIsXHJcbiAgICB3YXY6XCJhdWRpby94LXdhdlwiLFxyXG4gICAgd3BzOlwiYXBwbGljYXRpb24vdm5kLm1zLXdvcmtzXCIsXHJcbiAgICB4bHM6XCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWxcIixcclxuICAgIHhsc3g6XCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWxcIixcclxuICAgIHppcDpcImFwcGxpY2F0aW9uL3ppcFwiXHJcbiAgfTtcclxuICBmb3IodmFyIGkgaW4ganNvbil7XHJcbiAgICBpZihqc29uW2ldID09PSBtaW1lVHlwZSl7XHJcbiAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEZpbGVVdGlscyxcclxuICBpbnN0YWxsKFZ1ZSl7XHJcbiAgICAvL1Z1ZS5wcm90b3R5cGUsXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRGaWxlVXRpbHMnLCB7IHZhbHVlOiBGaWxlVXRpbHMgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCIvL+eCueS9jeWbvuagh1xyXG5jb25zdCBwb2ludEltYWdlID0ge1xyXG4gICAgZ3JlZW5Db2RlOiByZXF1aXJlKFwiLi4vYXNzZXRzL2NvZGUv57u/56CBLnBuZ1wiKSxcclxuICAgIHllbGxvd0NvZGU6IHJlcXVpcmUoXCIuLi9hc3NldHMvY29kZS/pu4TnoIEucG5nXCIpLFxyXG4gICAgcmVkQ29kZTogcmVxdWlyZShcIi4uL2Fzc2V0cy9jb2RlL+e6oueggS5wbmdcIiksXHJcbiAgICB3cnk6IHJlcXVpcmUoXCIuLi9hc3NldHMvcG9pbnQvbG9jYXRpb24ucG5nXCIpXHJcbn07XHJcbi8v6YCa55So5pa55rOV6ZuG5ZCIXHJcbmNvbnN0IHV0aWxzID0ge1xyXG4gICAgLy/liqDovb3kuI3lkIzngrnkvY1pY29uXHJcbiAgICBnZXRQb2ludEltZyA6ICh0eXBlLCBsZXZlbCkgPT57XHJcbiAgICAgICAgbGV0IGltZyA9IG51bGw7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ+eOr+S/neeggScpe1xyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09ICfnuqLoibInICkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gcG9pbnRJbWFnZS5yZWRDb2RlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSAn6buE6ImyJyApIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IHBvaW50SW1hZ2UueWVsbG93Q29kZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gJ+e7v+iJsicpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IHBvaW50SW1hZ2UuZ3JlZW5Db2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBpbWcgPSBwb2ludEltYWdlLndyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH0sXHJcblxyXG4gICAgLy/ooYzmlL/ljLrliJJcclxuICAgIGRpc3RyaWN0OiB7XHJcbiAgICAgICAgXCLmmIbmmI7luIJcIjp7XHJcbiAgICAgICAgICAgIFwi5ZGI6LShXCI6IFsxMDIuODM1MDEwMjMyNjY2MDEsIDI0Ljg1OTYzMDYxMjQ0NzY4NV0sXHJcbiAgICAgICAgICAgIFwi5LqU5Y2OXCI6IFsxMDIuNjQ1MzM5OTgyMDUxMjgsIDI1LjE1MTM2MTUyNzc1NzIwM10sXHJcbiAgICAgICAgICAgIFwi55uY6b6ZXCI6IFsxMDIuODAyMzk0NTcxMDQ0OTEsIDI1LjE0MDU5ODEyNDA3NjQ5NF0sXHJcbiAgICAgICAgICAgIFwi5a6Y5rihXCI6IFsxMDIuOTI3NzA3Mzc2MjIwNywgMjUuMDUwMTc0NzQwODY1NjU3XSxcclxuICAgICAgICAgICAgXCLopb/lsbFcIjogWzEwMi42NDMzOTA0OTM4ODAxOCwgMjQuOTY1OTQ2NTc0NzgwMzhdLFxyXG4gICAgICAgICAgICBcIuS4nOW3nVwiOiBbMTAzLjA2Njc4NDE1Nzc3ODc2LCAyNi4xNDgxMjcyMTEyMzE4NjNdLFxyXG4gICAgICAgICAgICBcIuaZi+WugVwiOiBbMTAyLjYxODYxMzYxODQ1NDgsIDI0LjY4MDM5OTc5NjI0Mjk5XSxcclxuICAgICAgICAgICAgXCLlronlroFcIjogWzEwMi4zNzU4MTYwNDkzMTY0LCAyNC43OTU5NjE4NDc4OTMxNTddLFxyXG4gICAgICAgICAgICBcIuWvjOawkVwiOiBbMTAyLjUxMjgwMDQ3MTg5MjU5LCAyNS4zNTI5MzE4MDU5NzE3OF0sXHJcbiAgICAgICAgICAgIFwi5a6c6ImvXCI6IFsxMDMuMTI5MDk2NzU2MDE0ODMsIDI0Ljg3ODc5MzIwNTY1NThdLFxyXG4gICAgICAgICAgICBcIuW1qeaYjlwiOiBbMTAzLjAwMjU0NjkyMjQ1NjE5LCAyNS4zNDA4Mzk2MzI4MTE0ODhdLFxyXG4gICAgICAgICAgICBcIuefs+ael1wiOiBbMTAzLjQ0MDU4NDE2ODAyNjY3LCAyNC43MzUyNTg2ODcyMzQ5OV0sXHJcbiAgICAgICAgICAgIFwi56aE5YqdXCI6IFsxMDIuNjEwMTMzODI4ODU3NDEsIDI1Ljg2OTg1NzgxNTgxNjgzXSxcclxuICAgICAgICAgICAgXCLlr7vnlLhcIjogWzEwMy4xMzI4NDI3MjE2Nzk2OCwgMjUuNjYyMTQ3NTQ5NzAzNTQ4XSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbnN0YWxsOiAoVnVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdXRpbHMgPSB1dGlscztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgRmlsZVV0aWxzIGZyb20gXCIuL0ZpbGVVdGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gX2dldEZpbGVUeXBlIChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBmaWxlbmFtZS5zdWJzdHJpbmcoZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSArIDEpO1xyXG59XHJcbmZ1bmN0aW9uIF9nZXRGaWxlTUlNRVR5cGUgKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIEZpbGVVdGlscy5GaWxlVXRpbHMuZ2V0TUlNRVR5cGUoX2dldEZpbGVUeXBlKGZpbGVuYW1lKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkID0gZnVuY3Rpb24gKHVybCwgZmlsZW5hbWUsIHdpdGhDcmVkZW50aWFscykge1xyXG4gIHRyeSB7XHJcbiAgICAvKiDmlofku7bkuIvovb3lmagqL1xyXG4gICAgY29uc3QgZmlsZURvd25sb2FkZXIgPSBuZXcgRmlsZVV0aWxzLkZpbGVVdGlscy5Eb3dubG9hZGVyKHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGZpbGVuYW1lOiBmaWxlbmFtZSxcclxuICAgIH0pO1xyXG4gICAgZmlsZURvd25sb2FkZXIud2l0aENyZWRlbnRpYWwgPSAhIXdpdGhDcmVkZW50aWFsc1xyXG5cclxuICAgIGNvbnN0IG1pbWVUeXBlID0gX2dldEZpbGVNSU1FVHlwZShmaWxlbmFtZSlcclxuXHJcbiAgICAvKiDov5vluqbmnaEqL1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB3aW5kb3cubmF2aWdhdG9yLmRpYWxvZ3NQbHVzLnByb2dyZXNzU3RhcnQoXHJcbiAgICAgICfkuIvovb0nLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICAn5Y+W5raIJyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGZpbGVEb3dubG9hZGVyLmNhbmNlbCgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8qIOaIkOWKn+WbnuiwgyovXHJcbiAgICBmaWxlRG93bmxvYWRlci5vblN1Y2Nlc3MgPSAoZmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuZGlhbG9nc1BsdXMuc2hvd05vdGljZShmaWxlRW50cnkubmF0aXZlVVJMLCA1MDAwKTtcclxuICAgICAgcHJvZ3Jlc3MuaGlkZSgpO1xyXG5cclxuICAgICAgLyog5omT5byA5paH5Lu2Ki9cclxuICAgICAgY29yZG92YS5wbHVnaW5zLmZpbGVPcGVuZXIyLm9wZW4oXHJcbiAgICAgICAgICBmaWxlRW50cnkubmF0aXZlVVJMLFxyXG4gICAgICAgICAgRmlsZVV0aWxzLkZpbGVVdGlscy5nZXRNSU1FVHlwZShfZ2V0RmlsZVR5cGUoZmlsZUVudHJ5Lm5hdGl2ZVVSTCkpLFxyXG4gICAgICApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLyog6ZSZ6K+v5Zue6LCDKi9cclxuICAgIGZpbGVEb3dubG9hZGVyLm9uRmFpbCA9IChlcnJvckNvZGUpID0+IHtcclxuICAgICAgcHJvZ3Jlc3MuaGlkZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvckNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiDlj5bmtojlm57osIMqL1xyXG4gICAgZmlsZURvd25sb2FkZXIub25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuZGlhbG9nc1BsdXMuc2hvd05vdGljZSgn5Y+W5raI5LiL6L29JywgMjAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIOi/m+eoi+WbnuiwgyovXHJcbiAgICBmaWxlRG93bmxvYWRlci5vblByb2dyZXNzID0gKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3NFdmVudC5sb2FkZWQsIHByb2dyZXNzRXZlbnQudG90YWwpO1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gKFxyXG4gICAgICAgIChwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpICpcclxuICAgICAgICAxMDBcclxuICAgICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgICBwcm9ncmVzcy5zZXRWYWx1ZShwZXJjZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgLyog5byA5aeL5LiL6L29Ki9cclxuICAgIGZpbGVEb3dubG9hZGVyLmRvd25sb2FkKCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGZhaWwnKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
