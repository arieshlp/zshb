(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);

  for (var e = 0, n = Array(a); e < a; e++) {
    n[e] = r[e];
  }

  return n;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");


function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);








function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");





function _toConsumableArray(r) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");









function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(r, a) : void 0;
  }
}



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/water_envir.js */ "./src/api/water_envir.js");





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
  name: "index",
  data: function data() {
    return {
      tabObj: {
        pc: 0,
        sy: 0,
        jc: 0,
        zl: 0
      },
      searchValue: '',
      list: [],
      loading: false,
      finished: false,
      pageTotal: 0,
      page: 0,
      activeIndex: 0,
      type: '排查',
      searchObj: {},
      xzqh: ''
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    console.log(this.xzqh + '---------');
    this.queryTabTotal();
  },
  methods: {
    queryTabTotal: function queryTabTotal() {
      var _this = this;

      Object(_api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__["sewageStat"])({
        divisionName: this.xzqh
      }).then(function (res) {
        _this.tabObj = res.data;
      });
    },
    onChangeTab: function onChangeTab(index) {
      this.activeIndex = index;
      this.page = 0;

      if (index === 0) {
        this.type = '排查';
      } else if (index === 1) {
        this.type = '溯源';
      } else if (index === 2) {
        this.type = '监测';
      } else if (index === 3) {
        this.type = '整治';
      }

      this.onLoad();
    },
    onLoad: function onLoad() {
      var _this2 = this;

      // 异步更新数据
      setTimeout( /*#__PURE__*/Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempArr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_this2.page;
                _context.next = 3;
                return _this2.queryList();

              case 3:
                tempArr = _context.sent;

                if (_this2.page === 1) {
                  _this2.list = [];
                  _this2.list = [].concat(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.list), Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tempArr.records));
                } else {
                  _this2.list = [].concat(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.list), Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tempArr.records));
                }

                _this2.loading = false; // 数据全部加载完成

                if (_this2.list.length >= _this2.pageTotal) {
                  _this2.finished = true;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 1000);
    },
    queryList: function queryList() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var functionName;

        if (_this3.type === '排查') {
          functionName = _api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__["sewagePcDetail"];
        } else if (_this3.type === '溯源') {
          functionName = _api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__["sewageSyDetail"];
        } else if (_this3.type === '监测') {
          functionName = _api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__["sewageJcDetail"];
        } else if (_this3.type === '整治') {
          functionName = _api_water_envir_js__WEBPACK_IMPORTED_MODULE_5__["sewageZzDetail"];
        }

        functionName({
          pageNum: _this3.page,
          pageSize: 20,
          divisionName: _this3.xzqh,
          name: _this3.searchValue
        }).then(function (res) {
          _this3.pageTotal = res.data.total;
          resolve(res.data);
        });
      });
    },
    onSearch: function onSearch() {
      this.page = 0;
      this.list = [];
      this.onLoad();
    },
    onDetail: function onDetail(id, name) {
      this.$router.push({
        name: 'upstreamOutletDetail',
        query: {
          id: id,
          name: name
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("van-nav-bar", {
        attrs: { title: "排口详情", fixed: "", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _c("div", { staticClass: "upstream-tab-wrapper fs" }, [
            _c(
              "div",
              {
                class: _vm.activeIndex === 0 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.onChangeTab(0)
                  },
                },
              },
              [
                _vm._v(" 排查"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.tabObj.pc))]),
              ]
            ),
            _c(
              "div",
              {
                class: _vm.activeIndex === 1 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.onChangeTab(1)
                  },
                },
              },
              [
                _vm._v(" 溯源"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.tabObj.sy))]),
              ]
            ),
            _c(
              "div",
              {
                class: _vm.activeIndex === 2 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.onChangeTab(2)
                  },
                },
              },
              [
                _vm._v(" 监测"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.tabObj.jc))]),
              ]
            ),
            _c(
              "div",
              {
                class: _vm.activeIndex === 3 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.onChangeTab(3)
                  },
                },
              },
              [
                _vm._v(" 整治"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.tabObj.zl))]),
              ]
            ),
          ]),
          _c("van-search", {
            ref: "search",
            staticStyle: { width: "100%", "padding-bottom": "0" },
            attrs: { shape: "round", placeholder: "请输入地址" },
            on: { input: _vm.onSearch },
            model: {
              value: _vm.searchValue,
              callback: function ($$v) {
                _vm.searchValue = $$v
              },
              expression: "searchValue",
            },
          }),
          _c(
            "div",
            { staticStyle: { "margin-top": "10px" } },
            [
              _c(
                "van-list",
                {
                  attrs: { finished: _vm.finished, "finished-text": "" },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                [
                  _vm.activeIndex === 0
                    ? _vm._l(_vm.list, function (item) {
                        return _c(
                          "div",
                          {
                            staticClass: "upstream-box",
                            on: {
                              click: function ($event) {
                                return _vm.onDetail(item.id, item.locationInfo)
                              },
                            },
                          },
                          [
                            _c("div", { staticClass: "upstream-title fs" }, [
                              _c("span", { staticClass: "name" }, [
                                _vm._v(_vm._s(item.locationInfo)),
                              ]),
                              _c("span", { staticClass: "status" }, [
                                _vm._v(
                                  _vm._s(
                                    item.isPass == 0
                                      ? "未通过"
                                      : item.isPass == 1
                                      ? "通过"
                                      : "未审核"
                                  )
                                ),
                              ]),
                            ]),
                            _c("div", { staticClass: "department fs" }, [
                              _vm._v(" " + _vm._s(item.village) + " "),
                              _c("span", { staticClass: "area" }, [
                                _vm._v(_vm._s(item.county)),
                              ]),
                            ]),
                            _c("div", { staticClass: "uptream-river-box" }, [
                              _c("div", [
                                _vm._v(" 所属流域类型 "),
                                _c("span", [
                                  _vm._v(_vm._s(item.drainageMethod)),
                                ]),
                              ]),
                              _c("div", [
                                _vm._v(" 入湖河流 "),
                                _c("span", [
                                  _vm._v(_vm._s(item.firstTributary)),
                                ]),
                              ]),
                            ]),
                          ]
                        )
                      })
                    : _vm._e(),
                  _vm.activeIndex === 1
                    ? _vm._l(_vm.list, function (item) {
                        return _c(
                          "div",
                          {
                            staticClass: "upstream-box",
                            on: {
                              click: function ($event) {
                                return _vm.onDetail(
                                  item.checkId,
                                  item.sewageOutletName
                                )
                              },
                            },
                          },
                          [
                            _c("div", { staticClass: "upstream-title fs" }, [
                              _c("span", { staticClass: "name" }, [
                                _vm._v(_vm._s(item.sewageOutletName)),
                              ]),
                              _c("span", { staticClass: "status" }, [
                                _vm._v(
                                  _vm._s(
                                    item.isPass == 0
                                      ? "未通过"
                                      : item.isPass == 1
                                      ? "通过"
                                      : "未审核"
                                  )
                                ),
                              ]),
                            ]),
                            _c("div", { staticClass: "department fs" }, [
                              _vm._v(
                                " " + _vm._s(item.primaryClassification) + " "
                              ),
                            ]),
                            _c("div", { staticClass: "uptream-river-box" }, [
                              _c("div", [
                                _vm._v(" 污水类型 "),
                                _c("span", [_vm._v(_vm._s(item.sewageType))]),
                              ]),
                              _c("div", [
                                _vm._v(" 污水来源 "),
                                _c("span", [_vm._v(_vm._s(item.sewageSource))]),
                              ]),
                            ]),
                          ]
                        )
                      })
                    : _vm._e(),
                  _vm.activeIndex === 2
                    ? _vm._l(_vm.list, function (item) {
                        return _c(
                          "div",
                          {
                            staticClass: "upstream-box",
                            on: {
                              click: function ($event) {
                                return _vm.onDetail(
                                  item.checkId,
                                  item.locationInfo
                                )
                              },
                            },
                          },
                          [
                            _c("div", { staticClass: "upstream-title fs" }, [
                              _c("span", { staticClass: "name" }, [
                                _vm._v(_vm._s(item.locationInfo)),
                              ]),
                              _c("span", { staticClass: "status" }, [
                                _vm._v(
                                  _vm._s(
                                    item.isPass == 0
                                      ? "未通过"
                                      : item.isPass == 1
                                      ? "通过"
                                      : "未审核"
                                  )
                                ),
                              ]),
                            ]),
                            _c("div", { staticClass: "department fs" }, [
                              _vm._v(
                                " " + _vm._s(item.monitoringCompleteRe) + " "
                              ),
                            ]),
                            _c("div", { staticClass: "uptream-river-box" }, [
                              _c("div", { staticStyle: { width: "100%" } }, [
                                _vm._v(" 采样时间 "),
                                _c("span", [
                                  _vm._v(_vm._s(item.firstSamplingTime)),
                                ]),
                              ]),
                            ]),
                          ]
                        )
                      })
                    : _vm._e(),
                  _vm.activeIndex === 3
                    ? _vm._l(_vm.list, function (item) {
                        return _c(
                          "div",
                          {
                            staticClass: "upstream-box",
                            on: {
                              click: function ($event) {
                                return _vm.onDetail(
                                  item.checkId,
                                  item.locationInfo
                                )
                              },
                            },
                          },
                          [
                            _c("div", { staticClass: "upstream-title fs" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "name",
                                  staticStyle: { width: "100%" },
                                },
                                [_vm._v(_vm._s(item.locationInfo))]
                              ),
                            ]),
                            _c("div", { staticClass: "uptream-river-box" }, [
                              _c("div", [
                                _vm._v(" 整治类型 "),
                                _c("span", [
                                  _vm._v(_vm._s(item.remedialActionType)),
                                ]),
                              ]),
                            ]),
                          ]
                        )
                      })
                    : _vm._e(),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-json-replacer-function.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/get-json-replacer-function.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var getReplacerFunction = __webpack_require__(/*! ../internals/get-json-replacer-function */ "./node_modules/core-js/internals/get-json-replacer-function.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-22c3206f] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: underline;\n}\n.upstream-tab-wrapper[data-v-22c3206f] {\n  margin: 10px 15px 0;\n  padding: 10px;\n  background: #688cfd;\n  border-radius: 10px;\n  color: #fff;\n}\n.upstream-tab-wrapper div[data-v-22c3206f] {\n  width: 20%;\n  padding: 11px 0;\n  text-align: center;\n  font-size: 14px;\n  line-height: 24px;\n}\n.upstream-tab-wrapper div span[data-v-22c3206f] {\n  font-size: 20px;\n}\n.upstream-tab-wrapper .active[data-v-22c3206f] {\n  background: #fff;\n  color: #5475f8;\n  border-radius: 10px;\n}\n.upstream-box[data-v-22c3206f] {\n  margin: 0 8px 6px;\n  padding: 10px 7px 10px 19px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(255, 141, 26, 0.1) 0%, rgba(255, 141, 26, 0) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.upstream-box .upstream-title .name[data-v-22c3206f] {\n  max-width: 80%;\n  display: inline-block;\n  color: #121236;\n  font-size: 18px;\n  font-weight: bold;\n}\n.upstream-box .upstream-title .status[data-v-22c3206f] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: rgba(255, 141, 26, 0.1);\n  border-radius: 4px;\n  color: #ff8d1a;\n  font-size: 12px;\n}\n.upstream-box .department[data-v-22c3206f] {\n  padding: 4px 0 12px;\n  color: #5475f8;\n  font-size: 12px;\n}\n.upstream-box .department .area[data-v-22c3206f] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.upstream-box .uptream-river-box[data-v-22c3206f] {\n  display: flex;\n  align-items: center;\n}\n.upstream-box .uptream-river-box div[data-v-22c3206f] {\n  width: 50%;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.upstream-box .uptream-river-box div span[data-v-22c3206f] {\n  color: #121236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f316ab8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/waterHomePage/upstreamOutlet/index.vue":
/*!**********************************************************!*\
  !*** ./src/views/waterHomePage/upstreamOutlet/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=22c3206f&scoped=true& */ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& */ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22c3206f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/upstreamOutlet/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=style&index=0&id=22c3206f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22c3206f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=22c3206f&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/upstreamOutlet/index.vue?vue&type=template&id=22c3206f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_22c3206f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvdXBzdHJlYW1PdXRsZXQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L2luZGV4LnZ1ZT81ZTMyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtanNvbi1yZXBsYWNlci1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L2luZGV4LnZ1ZT83Y2ExIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L2luZGV4LnZ1ZT8xYzU5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS91cHN0cmVhbU91dGxldC9pbmRleC52dWU/NzZlMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS91cHN0cmVhbU91dGxldC9pbmRleC52dWU/MjM4NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS91cHN0cmVhbU91dGxldC9pbmRleC52dWU/MTEyNSJdLCJuYW1lcyI6WyJfYXJyYXlMaWtlVG9BcnJheSIsInIiLCJhIiwibGVuZ3RoIiwiZSIsIm4iLCJBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsImlzQXJyYXkiLCJhcnJheUxpa2VUb0FycmF5IiwiX2l0ZXJhYmxlVG9BcnJheSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIlR5cGVFcnJvciIsIl90b0NvbnN1bWFibGVBcnJheSIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsInQiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVj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eWQ7QUFDL2U7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gIChudWxsID09IGEgfHwgYSA+IHIubGVuZ3RoKSAmJiAoYSA9IHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgZSA9IDAsIG4gPSBBcnJheShhKTsgZSA8IGE7IGUrKykgbltlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxuZXhwb3J0IHsgX2FycmF5TGlrZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmV4cG9ydCB7IF9hcnJheVdpdGhvdXRIb2xlcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheShyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZXhwb3J0IHsgX3RvQ29uc3VtYWJsZUFycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLmjpLlj6Por6bmg4VcIiBmaXhlZCBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuICAgICAgPCEtLTx0ZW1wbGF0ZSAjcmlnaHQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnRvLW1hcFwiPuetm+mAiTwvc3Bhbj5cclxuICAgICAgPC90ZW1wbGF0ZT4tLT5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidXBzdHJlYW0tdGFiLXdyYXBwZXIgZnNcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImFjdGl2ZUluZGV4PT09MD8nYWN0aXZlJzonJ1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKDApXCI+XHJcbiAgICAgICAgICDmjpLmn6U8YnIvPlxyXG4gICAgICAgICAgPHNwYW4+e3t0YWJPYmoucGN9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImFjdGl2ZUluZGV4PT09MT8nYWN0aXZlJzonJ1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKDEpXCI+XHJcbiAgICAgICAgICDmuq/mupA8YnIvPlxyXG4gICAgICAgICAgPHNwYW4+e3t0YWJPYmouc3l9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImFjdGl2ZUluZGV4PT09Mj8nYWN0aXZlJzonJ1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKDIpXCI+XHJcbiAgICAgICAgICDnm5HmtYs8YnIvPlxyXG4gICAgICAgICAgPHNwYW4+e3t0YWJPYmouamN9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImFjdGl2ZUluZGV4PT09Mz8nYWN0aXZlJzonJ1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKDMpXCI+XHJcbiAgICAgICAgICDmlbTmsrs8YnIvPlxyXG4gICAgICAgICAgPHNwYW4+e3t0YWJPYmouemx9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoVmFsdWVcIiBzaGFwZT1cInJvdW5kXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlnLDlnYBcIiBzdHlsZT1cIndpZHRoOiAxMDAlO3BhZGRpbmctYm90dG9tOiAwXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCIgQGlucHV0PVwib25TZWFyY2hcIi8+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxyXG5cclxuICAgICAgICA8dmFuLWxpc3RcclxuICAgICAgICAgICAgdi1tb2RlbD1cImxvYWRpbmdcIlxyXG4gICAgICAgICAgICA6ZmluaXNoZWQ9XCJmaW5pc2hlZFwiXHJcbiAgICAgICAgICAgIGZpbmlzaGVkLXRleHQ9XCJcIlxyXG4gICAgICAgICAgICBAbG9hZD1cIm9uTG9hZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhY3RpdmVJbmRleD09PTBcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIGNsYXNzPVwidXBzdHJlYW0tYm94XCIgQGNsaWNrPVwib25EZXRhaWwoaXRlbS5pZCxpdGVtLmxvY2F0aW9uSW5mbylcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBzdHJlYW0tdGl0bGUgZnNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7aXRlbS5sb2NhdGlvbkluZm99fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+e3tpdGVtLmlzUGFzcz09MD8n5pyq6YCa6L+HJzppdGVtLmlzUGFzcz09MT8n6YCa6L+HJzon5pyq5a6h5qC4J319PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXBhcnRtZW50IGZzXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW0udmlsbGFnZX19XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyZWFcIj57e2l0ZW0uY291bnR5fX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwdHJlYW0tcml2ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICDmiYDlsZ7mtYHln5/nsbvlnotcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmRyYWluYWdlTWV0aG9kfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIOWFpea5luays+a1gVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uZmlyc3RUcmlidXRhcnl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhY3RpdmVJbmRleD09PTFcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIGNsYXNzPVwidXBzdHJlYW0tYm94XCIgQGNsaWNrPVwib25EZXRhaWwoaXRlbS5jaGVja0lkLCBpdGVtLnNld2FnZU91dGxldE5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwc3RyZWFtLXRpdGxlIGZzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e2l0ZW0uc2V3YWdlT3V0bGV0TmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNcIj57e2l0ZW0uaXNQYXNzPT0wPyfmnKrpgJrov4cnOml0ZW0uaXNQYXNzPT0xPyfpgJrov4cnOifmnKrlrqHmoLgnfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlcGFydG1lbnQgZnNcIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5wcmltYXJ5Q2xhc3NpZmljYXRpb259fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHRyZWFtLXJpdmVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAg5rGh5rC057G75Z6LXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5zZXdhZ2VUeXBlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIOaxoeawtOadpea6kFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uc2V3YWdlU291cmNlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWN0aXZlSW5kZXg9PT0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBjbGFzcz1cInVwc3RyZWFtLWJveFwiIEBjbGljaz1cIm9uRGV0YWlsKGl0ZW0uY2hlY2tJZCwgaXRlbS5sb2NhdGlvbkluZm8pXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwc3RyZWFtLXRpdGxlIGZzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e2l0ZW0ubG9jYXRpb25JbmZvfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7aXRlbS5pc1Bhc3M9PTA/J+acqumAmui/hyc6aXRlbS5pc1Bhc3M9PTE/J+mAmui/hyc6J+acquWuoeaguCd9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVwYXJ0bWVudCBmc1wiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLm1vbml0b3JpbmdDb21wbGV0ZVJlfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXB0cmVhbS1yaXZlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICDph4fmoLfml7bpl7RcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmZpcnN0U2FtcGxpbmdUaW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiYWN0aXZlSW5kZXg9PT0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBjbGFzcz1cInVwc3RyZWFtLWJveFwiIEBjbGljaz1cIm9uRGV0YWlsKGl0ZW0uY2hlY2tJZCwgaXRlbS5sb2NhdGlvbkluZm8pXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwc3RyZWFtLXRpdGxlIGZzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+e3tpdGVtLmxvY2F0aW9uSW5mb319PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHRyZWFtLXJpdmVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAg5pW05rK757G75Z6LXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5yZW1lZGlhbEFjdGlvblR5cGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDwvdmFuLWxpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3Nld2FnZVN0YXQsIHNld2FnZVBjRGV0YWlsLCBzZXdhZ2VTeURldGFpbCwgc2V3YWdlSmNEZXRhaWwsIHNld2FnZVp6RGV0YWlsfSBmcm9tICdAL2FwaS93YXRlcl9lbnZpci5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJPYmo6IHtcclxuICAgICAgICAgIHBjOiAwLFxyXG4gICAgICAgICAgc3k6IDAsXHJcbiAgICAgICAgICBqYzogMCxcclxuICAgICAgICAgIHpsOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICBwYWdlVG90YWw6IDAsXHJcbiAgICAgICAgcGFnZTogMCxcclxuICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICB0eXBlOiAn5o6S5p+lJyxcclxuICAgICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICAgIHh6cWg6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy54enFoID0gdGhpcy4kcm91dGUucXVlcnkueHpxaDtcclxuICAgICAgY29uc29sZS5sb2codGhpcy54enFoKyctLS0tLS0tLS0nKVxyXG4gICAgICB0aGlzLnF1ZXJ5VGFiVG90YWwoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHF1ZXJ5VGFiVG90YWwoKSB7XHJcbiAgICAgICAgc2V3YWdlU3RhdCh7XHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRhYk9iaiA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDA7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSAn5o6S5p+lJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSAn5rqv5rqQJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSAn55uR5rWLJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAzKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSAn5pW05rK7JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgfSxcclxuICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOW8guatpeabtOaWsOaVsOaNrlxyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICsrdGhpcy5wYWdlO1xyXG4gICAgICAgICAgbGV0IHRlbXBBcnIgPSBhd2FpdCB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5saXN0ID0gWy4uLnRoaXMubGlzdCwgLi4udGVtcEFyci5yZWNvcmRzXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdCA9IFsuLi50aGlzLmxpc3QsIC4uLnRlbXBBcnIucmVjb3Jkc107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyDmlbDmja7lhajpg6jliqDovb3lrozmiJBcclxuICAgICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID49IHRoaXMucGFnZVRvdGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBsZXQgZnVuY3Rpb25OYW1lO1xyXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ+aOkuafpScpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc2V3YWdlUGNEZXRhaWxcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAn5rqv5rqQJykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBzZXdhZ2VTeURldGFpbFxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICfnm5HmtYsnKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHNld2FnZUpjRGV0YWlsXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ+aVtOayuycpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc2V3YWdlWnpEZXRhaWxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZ1bmN0aW9uTmFtZSh7XHJcbiAgICAgICAgICAgIHBhZ2VOdW06IHRoaXMucGFnZSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDIwLFxyXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlVG90YWwgPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDA7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgfSxcclxuICAgICAgb25EZXRhaWwoaWQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAndXBzdHJlYW1PdXRsZXREZXRhaWwnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuaW50by1tYXAge1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC51cHN0cmVhbS10YWItd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweCAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxNDAsIDI1MywgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgcGFkZGluZzogMTFweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51cHN0cmVhbS1ib3gge1xyXG4gICAgbWFyZ2luOiAwIDhweCA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDdweCAxMHB4IDE5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDEsIDI2LCAwKSAxMDAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgICAudXBzdHJlYW0tdGl0bGUge1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXBhcnRtZW50IHtcclxuICAgICAgcGFkZGluZzogNHB4IDAgMTJweDtcclxuICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLmFyZWEge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVwdHJlYW0tcml2ZXItYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuaOkuWPo+ivpuaDhVwiLCBmaXhlZDogXCJcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLXRhYi13cmFwcGVyIGZzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUluZGV4ID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VUYWIoMClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDmjpLmn6VcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRhYk9iai5wYykpXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWN0aXZlSW5kZXggPT09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZVRhYigxKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOa6r+a6kFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGFiT2JqLnN5KSldKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVJbmRleCA9PT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlVGFiKDIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg55uR5rWLXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50YWJPYmouamMpKV0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUluZGV4ID09PSAzID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VUYWIoMylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDmlbTmsrtcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRhYk9iai56bCkpXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjBcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgc2hhcGU6IFwicm91bmRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5Zyw5Z2AXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0ub25TZWFyY2ggfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoVmFsdWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1saXN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmluaXNoZWQ6IF92bS5maW5pc2hlZCwgXCJmaW5pc2hlZC10ZXh0XCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5vbkxvYWQgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlSW5kZXggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cHN0cmVhbS1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRldGFpbChpdGVtLmlkLCBpdGVtLmxvY2F0aW9uSW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBzdHJlYW0tdGl0bGUgZnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubG9jYXRpb25JbmZvKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXR1c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNQYXNzID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIuacqumAmui/h1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5pc1Bhc3MgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi6YCa6L+HXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIuacquWuoeaguFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXBhcnRtZW50IGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0udmlsbGFnZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhcmVhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY291bnR5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwdHJlYW0tcml2ZXItYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5omA5bGe5rWB5Z+f57G75Z6LIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZHJhaW5hZ2VNZXRob2QpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWFpea5luays+a1gSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmZpcnN0VHJpYnV0YXJ5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZUluZGV4ID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBzdHJlYW0tYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25EZXRhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V3YWdlT3V0bGV0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnNld2FnZU91dGxldE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdHVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc1Bhc3MgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi5pyq6YCa6L+HXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmlzUGFzcyA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLpgJrov4dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi5pyq5a6h5qC4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRlcGFydG1lbnQgZnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKGl0ZW0ucHJpbWFyeUNsYXNzaWZpY2F0aW9uKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXB0cmVhbS1yaXZlci1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmsaHmsLTnsbvlnosgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5zZXdhZ2VUeXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5rGh5rC05p2l5rqQIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2V3YWdlU291cmNlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVJbmRleCA9PT0gMlxuICAgICAgICAgICAgICAgICAgICA/IF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvY2F0aW9uSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmxvY2F0aW9uSW5mbykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzUGFzcyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLmnKrpgJrov4dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaXNQYXNzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIumAmui/h1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLmnKrlrqHmoLhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVwYXJ0bWVudCBmc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoaXRlbS5tb25pdG9yaW5nQ29tcGxldGVSZSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwdHJlYW0tcml2ZXItYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDph4fmoLfml7bpl7QgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5maXJzdFNhbXBsaW5nVGltZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVJbmRleCA9PT0gM1xuICAgICAgICAgICAgICAgICAgICA/IF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvY2F0aW9uSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwc3RyZWFtLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmxvY2F0aW9uSW5mbykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwdHJlYW0tcml2ZXItYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5pW05rK757G75Z6LIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucmVtZWRpYWxBY3Rpb25UeXBlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcGxhY2VyKSB7XG4gIGlmIChpc0NhbGxhYmxlKHJlcGxhY2VyKSkgcmV0dXJuIHJlcGxhY2VyO1xuICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXR1cm47XG4gIHZhciByYXdMZW5ndGggPSByZXBsYWNlci5sZW5ndGg7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHJlcGxhY2VyW2ldO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJykgcHVzaChrZXlzLCBlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnTnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnU3RyaW5nJykgcHVzaChrZXlzLCB0b1N0cmluZyhlbGVtZW50KSk7XG4gIH1cbiAgdmFyIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHJvb3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgcmV0dXJuIHZhbHVlO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5c0xlbmd0aDsgaisrKSBpZiAoa2V5c1tqXSA9PT0ga2V5KSByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgZ2V0UmVwbGFjZXJGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtanNvbi1yZXBsYWNlci1mdW5jdGlvbicpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBudW1iZXJUb1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbnZhciB0ZXN0ZXIgPSAvW1xcdUQ4MDAtXFx1REZGRl0vZztcbnZhciBsb3cgPSAvXltcXHVEODAwLVxcdURCRkZdJC87XG52YXIgaGkgPSAvXltcXHVEQzAwLVxcdURGRkZdJC87XG5cbnZhciBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPSAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKSgnc3RyaW5naWZ5IGRldGVjdGlvbicpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT09ICdbbnVsbF0nXG4gICAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPT0gJ3t9J1xuICAgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT09ICd7fSc7XG59KTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtd2VsbC1mb3JtZWQtc3RyaW5naWZ5XG52YXIgSUxMX0ZPUk1FRF9VTklDT0RFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHN0cmluZ2lmeSgnXFx1REYwNlxcdUQ4MzQnKSAhPT0gJ1wiXFxcXHVkZjA2XFxcXHVkODM0XCInXG4gICAgfHwgJHN0cmluZ2lmeSgnXFx1REVBRCcpICE9PSAnXCJcXFxcdWRlYWRcIic7XG59KTtcblxudmFyIHN0cmluZ2lmeVdpdGhTeW1ib2xzRml4ID0gZnVuY3Rpb24gKGl0LCByZXBsYWNlcikge1xuICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgdmFyICRyZXBsYWNlciA9IGdldFJlcGxhY2VyRnVuY3Rpb24ocmVwbGFjZXIpO1xuICBpZiAoIWlzQ2FsbGFibGUoJHJlcGxhY2VyKSAmJiAoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgYXJnc1sxXSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgLy8gc29tZSBvbGQgaW1wbGVtZW50YXRpb25zIChsaWtlIFdlYktpdCkgY291bGQgcGFzcyBudW1iZXJzIGFzIGtleXNcbiAgICBpZiAoaXNDYWxsYWJsZSgkcmVwbGFjZXIpKSB2YWx1ZSA9IGNhbGwoJHJlcGxhY2VyLCB0aGlzLCAkU3RyaW5nKGtleSksIHZhbHVlKTtcbiAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB9O1xuICByZXR1cm4gYXBwbHkoJHN0cmluZ2lmeSwgbnVsbCwgYXJncyk7XG59O1xuXG52YXIgZml4SWxsRm9ybWVkID0gZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICB2YXIgcHJldiA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCAtIDEpO1xuICB2YXIgbmV4dCA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCArIDEpO1xuICBpZiAoKGV4ZWMobG93LCBtYXRjaCkgJiYgIWV4ZWMoaGksIG5leHQpKSB8fCAoZXhlYyhoaSwgbWF0Y2gpICYmICFleGVjKGxvdywgcHJldikpKSB7XG4gICAgcmV0dXJuICdcXFxcdScgKyBudW1iZXJUb1N0cmluZyhjaGFyQ29kZUF0KG1hdGNoLCAwKSwgMTYpO1xuICB9IHJldHVybiBtYXRjaDtcbn07XG5cbmlmICgkc3RyaW5naWZ5KSB7XG4gIC8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBhcml0eTogMywgZm9yY2VkOiBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gfHwgSUxMX0ZPUk1FRF9VTklDT0RFIH0sIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMpO1xuICAgICAgdmFyIHJlc3VsdCA9IGFwcGx5KFdST05HX1NZTUJPTFNfQ09OVkVSU0lPTiA/IHN0cmluZ2lmeVdpdGhTeW1ib2xzRml4IDogJHN0cmluZ2lmeSwgbnVsbCwgYXJncyk7XG4gICAgICByZXR1cm4gSUxMX0ZPUk1FRF9VTklDT0RFICYmIHR5cGVvZiByZXN1bHQgPT0gJ3N0cmluZycgPyByZXBsYWNlKHJlc3VsdCwgdGVzdGVyLCBmaXhJbGxGb3JtZWQpIDogcmVzdWx0O1xuICAgIH1cbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xuXG52YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gIHZhciByZSA9IC9bYWNdLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBleGVjQ2FsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gLy4vLmV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHJlLnRlc3QoJ2FiYycpID09PSB0cnVlICYmIGV4ZWNDYWxsZWQ7XG59KCk7XG5cbnZhciBuYXRpdmVUZXN0ID0gLy4vLnRlc3Q7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRlc3RgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRlc3RcbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhREVMRUdBVEVTX1RPX0VYRUMgfSwge1xuICB0ZXN0OiBmdW5jdGlvbiAoUykge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKFMpO1xuICAgIHZhciBleGVjID0gUi5leGVjO1xuICAgIGlmICghaXNDYWxsYWJsZShleGVjKSkgcmV0dXJuIGNhbGwobmF0aXZlVGVzdCwgUiwgc3RyaW5nKTtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbChleGVjLCBSLCBzdHJpbmcpO1xuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBhbk9iamVjdChyZXN1bHQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW50by1tYXBbZGF0YS12LTIyYzMyMDZmXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4udXBzdHJlYW0tdGFiLXdyYXBwZXJbZGF0YS12LTIyYzMyMDZmXSB7XFxuICBtYXJnaW46IDEwcHggMTVweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICM2ODhjZmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi51cHN0cmVhbS10YWItd3JhcHBlciBkaXZbZGF0YS12LTIyYzMyMDZmXSB7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMTFweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi51cHN0cmVhbS10YWItd3JhcHBlciBkaXYgc3BhbltkYXRhLXYtMjJjMzIwNmZdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnVwc3RyZWFtLXRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTIyYzMyMDZmXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udXBzdHJlYW0tYm94W2RhdGEtdi0yMmMzMjA2Zl0ge1xcbiAgbWFyZ2luOiAwIDhweCA2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDdweCAxMHB4IDE5cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDEsIDI2LCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4udXBzdHJlYW0tYm94IC51cHN0cmVhbS10aXRsZSAubmFtZVtkYXRhLXYtMjJjMzIwNmZdIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnVwc3RyZWFtLWJveCAudXBzdHJlYW0tdGl0bGUgLnN0YXR1c1tkYXRhLXYtMjJjMzIwNmZdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udXBzdHJlYW0tYm94IC5kZXBhcnRtZW50W2RhdGEtdi0yMmMzMjA2Zl0ge1xcbiAgcGFkZGluZzogNHB4IDAgMTJweDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udXBzdHJlYW0tYm94IC5kZXBhcnRtZW50IC5hcmVhW2RhdGEtdi0yMmMzMjA2Zl0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnVwc3RyZWFtLWJveCAudXB0cmVhbS1yaXZlci1ib3hbZGF0YS12LTIyYzMyMDZmXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnVwc3RyZWFtLWJveCAudXB0cmVhbS1yaXZlci1ib3ggZGl2W2RhdGEtdi0yMmMzMjA2Zl0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi51cHN0cmVhbS1ib3ggLnVwdHJlYW0tcml2ZXItYm94IGRpdiBzcGFuW2RhdGEtdi0yMmMzMjA2Zl0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjJjMzIwNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyZjMxNmFiOFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyYzMyMDZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjJjMzIwNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMmMzMjA2ZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMmMzMjA2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIyYzMyMDZmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIyYzMyMDZmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIyYzMyMDZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIyYzMyMDZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjJjMzIwNmYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjJjMzIwNmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL3Vwc3RyZWFtT3V0bGV0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyYzMyMDZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyYzMyMDZmJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==