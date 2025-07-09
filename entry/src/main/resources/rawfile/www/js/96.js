(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/index */ "./src/api/index.js");


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
      search: {
        zgState: '待审核',
        hbmState: '',
        keyword: '',
        hbmType: ''
      },
      codeData: [{
        text: '全部',
        value: ''
      }, {
        text: '红码',
        value: '红码'
      }, {
        text: '黄码',
        value: '黄码'
      }, {
        text: '绿码',
        value: '绿码'
      }],
      hbmTypeList: [{
        text: '全部',
        value: ''
      }],
      list: [// {wrymc: '云南名扬药业有限公司',hymc:'中成药生产',final_color:'绿码',info_type:'企业监管（辅助执法）',info_time:'2023-05-29 16:20:22',info_case:'测试',qr_code_color:'黄码'}
      ]
    };
  },
  watch: {
    'search.hbmState': function searchHbmState() {
      this.getListData();
    },
    'search.hbmType': function searchHbmType() {
      this.getListData();
    },
    'search.keyword': function searchKeyword() {
      this.getListData();
    }
  },
  mounted: function mounted() {
    this.getHbmTypeSelect();
    this.getListData();
  },
  methods: {
    back: function back() {
      this.$router.go(-1);
    },
    getHbmTypeSelect: function getHbmTypeSelect() {
      var _this = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["queryClueTypes"])().then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          _this.hbmTypeList.push({
            text: res.data[i],
            value: res.data[i]
          });
        } // this.hbmTypeList = res.data;

      });
    },
    getListData: function getListData() {
      var _this2 = this;

      var params = {
        page: 1,
        limit: 10000,
        name: this.search.keyword,
        division_code: localStorage.getItem("division_code"),
        dept: localStorage.getItem("dept"),
        status: this.search.zgState,
        clue_type: this.search.hbmType,
        type: this.search.hbmState === '绿码' ? '绿色' : this.search.hbmState === '黄码' ? '黄色' : this.search.hbmState === '红码' ? '红色' : ''
      };
      Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["queryApprovalList"])(params).then(function (res) {
        _this2.list = res.data.list;
      });
    },
    showApproval: function showApproval(data) {
      this.$router.push({
        name: 'approval',
        query: {
          info: data
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "待审核列表", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        {
          staticClass: "scroll-to-top-wrapper",
          staticStyle: { "background-color": "#eee" },
        },
        [
          _c(
            "div",
            { staticClass: "search" },
            [
              _c(
                "van-dropdown-menu",
                {
                  staticStyle: { width: "110px", margin: "0 5px" },
                  attrs: { "active-color": "#1989fa" },
                },
                [
                  _c("van-dropdown-item", {
                    attrs: { options: _vm.codeData },
                    model: {
                      value: _vm.search.hbmState,
                      callback: function ($$v) {
                        _vm.$set(_vm.search, "hbmState", $$v)
                      },
                      expression: "search.hbmState",
                    },
                  }),
                ],
                1
              ),
              _c(
                "van-dropdown-menu",
                {
                  staticStyle: { width: "110px", "margin-right": "5px" },
                  attrs: { "active-color": "#1989fa", placeholder: "企业名称" },
                },
                [
                  _c("van-dropdown-item", {
                    attrs: { options: _vm.hbmTypeList },
                    model: {
                      value: _vm.search.hbmType,
                      callback: function ($$v) {
                        _vm.$set(_vm.search, "hbmType", $$v)
                      },
                      expression: "search.hbmType",
                    },
                  }),
                ],
                1
              ),
              _c("van-search", {
                staticStyle: {
                  width: "calc(100% - 240px)",
                  "margin-right": "5px",
                },
                attrs: {
                  size: "small",
                  shape: "round",
                  "input-align": "center",
                  clearable: false,
                  placeholder: "企业名称",
                },
                model: {
                  value: _vm.search.keyword,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "keyword", $$v)
                  },
                  expression: "search.keyword",
                },
              }),
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "content" },
            _vm._l(_vm.list, function (item) {
              return _c("van-card", { staticStyle: { margin: "10px" } }, [
                _c(
                  "div",
                  {
                    staticClass: "card_header",
                    attrs: { slot: "title" },
                    slot: "title",
                  },
                  [
                    _c("span", { attrs: { title: item.wrymc } }, [
                      _vm._v(_vm._s(item.wrymc)),
                    ]),
                    item.final_color === "绿码"
                      ? _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/code/绿码.png */ "./src/assets/code/绿码.png") },
                        })
                      : _vm._e(),
                    item.final_color === "黄码"
                      ? _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/code/黄码.png */ "./src/assets/code/黄码.png") },
                        })
                      : _vm._e(),
                    item.final_color === "红码"
                      ? _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/code/红码.png */ "./src/assets/code/红码.png") },
                        })
                      : _vm._e(),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "card_main",
                    attrs: { slot: "tags" },
                    slot: "tags",
                  },
                  [
                    _c("div", [
                      _c("span", { staticClass: "main_text" }, [
                        _vm._v("行业类别："),
                      ]),
                      _c("span", [_vm._v(_vm._s(item.hymc))]),
                    ]),
                    _c("div", [
                      _c("span", { staticClass: "main_text" }, [
                        _vm._v("赋码类型："),
                      ]),
                      _c("span", [_vm._v(_vm._s(item.info_type))]),
                    ]),
                    _c("div", [
                      _c("span", { staticClass: "main_text" }, [
                        _vm._v("赋码颜色："),
                      ]),
                      item.qr_code_color === "绿码"
                        ? _c("img", {
                            staticStyle: { width: "10px" },
                            attrs: { src: __webpack_require__(/*! @/assets/code/绿码.png */ "./src/assets/code/绿码.png") },
                          })
                        : _vm._e(),
                      item.qr_code_color === "黄码"
                        ? _c("img", {
                            staticStyle: { width: "10px" },
                            attrs: { src: __webpack_require__(/*! @/assets/code/黄码.png */ "./src/assets/code/黄码.png") },
                          })
                        : _vm._e(),
                      item.qr_code_color === "红码"
                        ? _c("img", {
                            staticStyle: { width: "10px" },
                            attrs: { src: __webpack_require__(/*! @/assets/code/红码.png */ "./src/assets/code/红码.png") },
                          })
                        : _vm._e(),
                    ]),
                    _c("div", [
                      _c("span", { staticClass: "main_text" }, [
                        _vm._v("赋码时间："),
                      ]),
                      _c("span", [_vm._v(_vm._s(item.info_time))]),
                    ]),
                    _c("div", [
                      _c("span", { staticClass: "main_text" }, [
                        _vm._v("赋码原因："),
                      ]),
                      _c("span", [_vm._v(_vm._s(item.info_case))]),
                    ]),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "card_bottom",
                    attrs: { slot: "footer" },
                    slot: "footer",
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "text",
                        on: {
                          click: function ($event) {
                            return _vm.showApproval(item)
                          },
                        },
                      },
                      [_vm._v("审 核")]
                    ),
                  ]
                ),
              ])
            }),
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search[data-v-6bf3d84a] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  background: #fff;\n}\n.search .van-search[data-v-6bf3d84a] {\n  padding: 2px;\n  width: 45%;\n}\n.search[data-v-6bf3d84a]  .van-dropdown-menu__bar {\n  height: 35px;\n  background-color: #f7f8fa;\n  border-radius: 999px;\n  box-shadow: none;\n}\n.search[data-v-6bf3d84a]  .van-dropdown-menu__bar .van-dropdown-menu__title {\n  max-width: 85%;\n  padding: 0;\n  line-height: 23px;\n  font-size: 14px;\n}\n.search[data-v-6bf3d84a]  .van-dropdown-menu__bar .van-dropdown-menu__title::after {\n  right: -10px;\n  opacity: 1;\n}\n.search[data-v-6bf3d84a]  .van-dropdown-menu__bar .van-dropdown-menu__item {\n  border-radius: 16px;\n}\n.content[data-v-6bf3d84a] {\n  height: calc(100% - 50px);\n  overflow-y: auto;\n}\n.content .card_header[data-v-6bf3d84a] {\n  height: 40px;\n  line-height: 40px;\n  align-items: center;\n  display: flex;\n  font-weight: bold;\n  background: #f8f8f8;\n  padding: 0 10px;\n  font-size: 14px;\n}\n.content .card_header span[data-v-6bf3d84a] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.content .card_header img[data-v-6bf3d84a] {\n  margin-left: 5px;\n}\n.content .card_main[data-v-6bf3d84a] {\n  padding: 0 10px;\n  line-height: 25px;\n  font-size: 12px;\n}\n.content .card_main .main_text[data-v-6bf3d84a] {\n  color: #a8a8a8d9;\n}\n.content .card_bottom[data-v-6bf3d84a] {\n  text-align: right;\n  padding: 5px 15px 10px;\n}\n.content .card_bottom .text[data-v-6bf3d84a] {\n  color: #16bcff;\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3bbd5576", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: querySupervision, queryHbmTrend, queryHbmAnalysis, queryHbmCodeAnalysis, queryApprovalList, submitDeptApproval, queryClueTypes, queryWRYList, queryAreas, getTaskInfo, getEvaluateInfo, getRiskType, queryRuleList, queryHbmDepartment, checkRules, editRules, queryWRYMap, queryStatistics, complaintProportion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySupervision", function() { return querySupervision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmTrend", function() { return queryHbmTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmAnalysis", function() { return queryHbmAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmCodeAnalysis", function() { return queryHbmCodeAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryApprovalList", function() { return queryApprovalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDeptApproval", function() { return submitDeptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryClueTypes", function() { return queryClueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYList", function() { return queryWRYList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAreas", function() { return queryAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskInfo", function() { return getTaskInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvaluateInfo", function() { return getEvaluateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRiskType", function() { return getRiskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryRuleList", function() { return queryRuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmDepartment", function() { return queryHbmDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRules", function() { return checkRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRules", function() { return editRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYMap", function() { return queryWRYMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStatistics", function() { return queryStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complaintProportion", function() { return complaintProportion; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");
 // ======================================== 首页 =====================================
//环保码

var querySupervision = function querySupervision() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/supervision',
    method: 'get',
    params: {}
  });
}; //环保码变化趋势

var queryHbmTrend = function queryHbmTrend(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/changing_trends',
    method: 'get',
    params: params
  });
}; //环保码原因分析

var queryHbmAnalysis = function queryHbmAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/cause_analysis',
    method: 'get',
    params: params
  });
}; //环保码原因详情

var queryHbmCodeAnalysis = function queryHbmCodeAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_detail',
    method: 'get',
    params: params
  });
}; //待审核列表

var queryApprovalList = function queryApprovalList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/pending_review_list',
    method: 'get',
    params: params
  });
}; //审核

var submitDeptApproval = function submitDeptApproval(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/department_approval',
    method: 'post',
    data: params
  });
}; // 赋码类型下拉框

var queryClueTypes = function queryClueTypes() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/type_list',
    method: 'get',
    params: {}
  });
}; //污染源列表

var queryWRYList = function queryWRYList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_list',
    method: 'get',
    params: params
  });
}; //区域下拉框

var queryAreas = function queryAreas() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/division_list',
    method: 'get',
    params: {}
  });
}; //任务概括

var getTaskInfo = function getTaskInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/law/task_summarize',
    method: 'get',
    params: {}
  });
}; //风险总览

var getEvaluateInfo = function getEvaluateInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/region_map',
    method: 'get',
    params: data
  });
}; // 风险问题类型

var getRiskType = function getRiskType() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/top_info',
    method: 'get',
    params: {}
  });
}; // ==================================== 赋码规则 ====================================
//环保码规则查询

var queryRuleList = function queryRuleList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/rule_list',
    method: 'get',
    params: params
  });
}; //部门下拉框

var queryHbmDepartment = function queryHbmDepartment() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/interface/dept/dept_tree',
    method: 'GET',
    params: {}
  });
}; //校验

var checkRules = function checkRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/check',
    method: 'get',
    params: params
  });
}; // 修改规则

var editRules = function editRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/update',
    method: 'post',
    data: params
  });
}; // ====================================== 地图 ===================================
// 地图点位

var queryWRYMap = function queryWRYMap(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_map',
    method: 'get',
    params: params
  });
}; // ====================================== 统计报表 ===================================

var queryStatistics = function queryStatistics() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/app/statistics/division_pie',
    method: 'get',
    params: {}
  });
}; // ====================================== 动态评价 ===================================
//各区域投诉占比

var complaintProportion = function complaintProportion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cluster/airQuality/complaintProportion',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/views/environmentCode/codeToCheck/index.vue":
/*!*********************************************************!*\
  !*** ./src/views/environmentCode/codeToCheck/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6bf3d84a&scoped=true& */ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& */ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bf3d84a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/codeToCheck/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=style&index=0&id=6bf3d84a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6bf3d84a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6bf3d84a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeToCheck/index.vue?vue&type=template&id=6bf3d84a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bf3d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWU/YjA0MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWU/OTNmZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVUb0NoZWNrL2luZGV4LnZ1ZT84ZmU1Iiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWU/YjJkYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVUb0NoZWNrL2luZGV4LnZ1ZT83N2M3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVRvQ2hlY2svaW5kZXgudnVlPzMzNzYiXSwibmFtZXMiOlsicXVlcnlTdXBlcnZpc2lvbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJxdWVyeUhibVRyZW5kIiwicXVlcnlIYm1BbmFseXNpcyIsInF1ZXJ5SGJtQ29kZUFuYWx5c2lzIiwicXVlcnlBcHByb3ZhbExpc3QiLCJzdWJtaXREZXB0QXBwcm92YWwiLCJkYXRhIiwicXVlcnlDbHVlVHlwZXMiLCJxdWVyeVdSWUxpc3QiLCJxdWVyeUFyZWFzIiwiZ2V0VGFza0luZm8iLCJnZXRFdmFsdWF0ZUluZm8iLCJnZXRSaXNrVHlwZSIsInF1ZXJ5UnVsZUxpc3QiLCJxdWVyeUhibURlcGFydG1lbnQiLCJjaGVja1J1bGVzIiwiZWRpdFJ1bGVzIiwicXVlcnlXUllNYXAiLCJxdWVyeVN0YXRpc3RpY3MiLCJjb21wbGFpbnRQcm9wb3J0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxvQkFGQTtBQUdBLG1CQUhBO0FBSUE7QUFKQSxPQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsUUFQQTtBQVdBO0FBQUE7QUFBQTtBQUFBLFFBWEE7QUFZQSxhQUNBO0FBREE7QUFaQTtBQWdCQSxHQW5CQTtBQW9CQTtBQUNBLHFCQURBLDRCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsb0JBSkEsMkJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxvQkFQQSwyQkFPQTtBQUNBO0FBQ0E7QUFUQSxHQXBCQTtBQStCQSxTQS9CQSxxQkErQkE7QUFDQTtBQUNBO0FBQ0EsR0FsQ0E7QUFtQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsb0JBSkEsOEJBSUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBRkE7QUFJQSxTQU5BLENBT0E7O0FBQ0EsT0FSQTtBQVNBLEtBZEE7QUFlQSxlQWZBLHlCQWVBO0FBQUE7O0FBQ0E7QUFDQSxlQURBO0FBRUEsb0JBRkE7QUFHQSxpQ0FIQTtBQUlBLDREQUpBO0FBS0EsMENBTEE7QUFNQSxtQ0FOQTtBQU9BLHNDQVBBO0FBUUE7QUFSQTtB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QUM7QUFDWEMsT0FBRyxFQUFDLHlDQURPO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRU07QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEM7Ozs7Ozs7Ozs7OztBQ3RKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy85Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyIHRpdGxlPVwi5b6F5a6h5qC45YiX6KGoXCIgbGVmdC1hcnJvdyBmaXhlZCBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+PC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlZWU7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICA8dmFuLWRyb3Bkb3duLW1lbnUgYWN0aXZlLWNvbG9yPVwiIzE5ODlmYVwiIHN0eWxlPVwid2lkdGg6MTEwcHg7bWFyZ2luOjAgNXB4O1wiPlxyXG4gICAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJzZWFyY2guaGJtU3RhdGVcIiA6b3B0aW9ucz1cImNvZGVEYXRhXCIvPlxyXG4gICAgICAgIDwvdmFuLWRyb3Bkb3duLW1lbnU+XHJcbiAgICAgICAgPHZhbi1kcm9wZG93bi1tZW51IGFjdGl2ZS1jb2xvcj1cIiMxOTg5ZmFcIiBzdHlsZT1cIndpZHRoOjExMHB4O21hcmdpbi1yaWdodDogNXB4O1wiIHBsYWNlaG9sZGVyPVwi5LyB5Lia5ZCN56ewXCI+XHJcbiAgICAgICAgICA8dmFuLWRyb3Bkb3duLWl0ZW0gdi1tb2RlbD1cInNlYXJjaC5oYm1UeXBlXCIgOm9wdGlvbnM9XCJoYm1UeXBlTGlzdFwiLz5cclxuICAgICAgICA8L3Zhbi1kcm9wZG93bi1tZW51PlxyXG4gICAgICAgIDx2YW4tc2VhcmNoIHYtbW9kZWw9XCJzZWFyY2gua2V5d29yZFwiIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiIGlucHV0LWFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xlYXJhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5LyB5Lia5ZCN56ewXCIgc3R5bGU9XCJ3aWR0aDpjYWxjKDEwMCUgLSAyNDBweCk7bWFyZ2luLXJpZ2h0OiA1cHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDx2YW4tY2FyZCB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIHN0eWxlPVwibWFyZ2luOjEwcHg7XCI+XHJcbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJ0aXRsZVwiIGNsYXNzPVwiY2FyZF9oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gOnRpdGxlPVwiaXRlbS53cnltY1wiPnt7aXRlbS53cnltY319PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmZpbmFsX2NvbG9yID09PSAn57u/56CBJ1wiIHNyYz1cIkAvYXNzZXRzL2NvZGUv57u/56CBLnBuZ1wiPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmZpbmFsX2NvbG9yID09PSAn6buE56CBJ1wiIHNyYz1cIkAvYXNzZXRzL2NvZGUv6buE56CBLnBuZ1wiPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmZpbmFsX2NvbG9yID09PSAn57qi56CBJ1wiIHNyYz1cIkAvYXNzZXRzL2NvZGUv57qi56CBLnBuZ1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJ0YWdzXCIgY2xhc3M9XCJjYXJkX21haW5cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fdGV4dFwiPuihjOS4muexu+WIq++8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uaHltY319PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fdGV4dFwiPui1i+eggeexu+Wei++8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uaW5mb190eXBlfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbl90ZXh0XCI+6LWL56CB6aKc6Imy77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbWcgdi1pZj1cIml0ZW0ucXJfY29kZV9jb2xvciA9PT0gJ+e7v+eggSdcIiBzcmM9XCJAL2Fzc2V0cy9jb2RlL+e7v+eggS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgPGltZyB2LWlmPVwiaXRlbS5xcl9jb2RlX2NvbG9yID09PSAn6buE56CBJ1wiIHNyYz1cIkAvYXNzZXRzL2NvZGUv6buE56CBLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTBweDtcIj5cclxuICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLnFyX2NvZGVfY29sb3IgPT09ICfnuqLnoIEnXCIgc3JjPVwiQC9hc3NldHMvY29kZS/nuqLnoIEucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMHB4O1wiPlxyXG4gICAgICAgICAgICAgIDwhLS08c3Bhbj57e2l0ZW0ucXJfY29kZV9jb2xvcn19PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fdGV4dFwiPui1i+eggeaXtumXtO+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uaW5mb190aW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbl90ZXh0XCI+6LWL56CB5Y6f5Zug77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5pbmZvX2Nhc2V9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiIGNsYXNzPVwiY2FyZF9ib3R0b21cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgQGNsaWNrPVwic2hvd0FwcHJvdmFsKGl0ZW0pXCI+5a6hIOaguDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdmFuLWNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7cXVlcnlDbHVlVHlwZXMsIHF1ZXJ5QXBwcm92YWxMaXN0fSBmcm9tICdAL2FwaS9pbmRleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICB6Z1N0YXRlOiAn5b6F5a6h5qC4JyxcclxuICAgICAgICAgIGhibVN0YXRlOiAnJyxcclxuICAgICAgICAgIGtleXdvcmQ6ICcnLFxyXG4gICAgICAgICAgaGJtVHlwZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvZGVEYXRhOiBbe3RleHQ6ICflhajpg6gnLCB2YWx1ZTogJyd9LCB7dGV4dDogJ+e6oueggScsIHZhbHVlOiAn57qi56CBJ30sIHt0ZXh0OiAn6buE56CBJywgdmFsdWU6ICfpu4TnoIEnfSwge1xyXG4gICAgICAgICAgdGV4dDogJ+e7v+eggScsXHJcbiAgICAgICAgICB2YWx1ZTogJ+e7v+eggSdcclxuICAgICAgICB9XSxcclxuICAgICAgICBoYm1UeXBlTGlzdDogW3t0ZXh0OiAn5YWo6YOoJywgdmFsdWU6ICcnfV0sXHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgLy8ge3dyeW1jOiAn5LqR5Y2X5ZCN5oms6I2v5Lia5pyJ6ZmQ5YWs5Y+4JyxoeW1jOifkuK3miJDoja/nlJ/kuqcnLGZpbmFsX2NvbG9yOifnu7/noIEnLGluZm9fdHlwZTon5LyB5Lia55uR566h77yI6L6F5Yqp5omn5rOV77yJJyxpbmZvX3RpbWU6JzIwMjMtMDUtMjkgMTY6MjA6MjInLGluZm9fY2FzZTon5rWL6K+VJyxxcl9jb2RlX2NvbG9yOifpu4TnoIEnfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICdzZWFyY2guaGJtU3RhdGUnKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgJ3NlYXJjaC5oYm1UeXBlJygpIHtcclxuICAgICAgICB0aGlzLmdldExpc3REYXRhKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgICdzZWFyY2gua2V5d29yZCcoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5nZXRIYm1UeXBlU2VsZWN0KCk7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0SGJtVHlwZVNlbGVjdCgpIHtcclxuICAgICAgICBxdWVyeUNsdWVUeXBlcygpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5oYm1UeXBlTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVtpXSxcclxuICAgICAgICAgICAgICB2YWx1ZTogcmVzLmRhdGFbaV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHRoaXMuaGJtVHlwZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRMaXN0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIGxpbWl0OiAxMDAwMCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMuc2VhcmNoLmtleXdvcmQsXHJcbiAgICAgICAgICBkaXZpc2lvbl9jb2RlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRpdmlzaW9uX2NvZGVcIiksXHJcbiAgICAgICAgICBkZXB0OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlcHRcIiksXHJcbiAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VhcmNoLnpnU3RhdGUsXHJcbiAgICAgICAgICBjbHVlX3R5cGU6IHRoaXMuc2VhcmNoLmhibVR5cGUsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnNlYXJjaC5oYm1TdGF0ZSA9PT0gJ+e7v+eggScgPyAn57u/6ImyJyA6IHRoaXMuc2VhcmNoLmhibVN0YXRlID09PSAn6buE56CBJyA/ICfpu4ToibInIDogdGhpcy5zZWFyY2guaGJtU3RhdGUgPT09ICfnuqLnoIEnID8gJ+e6ouiJsicgOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcXVlcnlBcHByb3ZhbExpc3QocGFyYW1zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5saXN0O1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dBcHByb3ZhbChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FwcHJvdmFsJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGluZm86IGRhdGFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuXHJcblxyXG4gIC5zZWFyY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIC52YW4tc2VhcmNoIHtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIDo6di1kZWVwIC52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xyXG4gICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlOjphZnRlciB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52YW4tZHJvcGRvd24tbWVudV9faXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLmNhcmRfaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9tYWluIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLm1haW5fdGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICNhOGE4YThkOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX2JvdHRvbSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTVweCAxMHB4O1xyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjMTZiY2ZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuW+heWuoeaguOWIl+ihqFwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiwgZml4ZWQ6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2VlZVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMTBweFwiLCBtYXJnaW46IFwiMCA1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhY3RpdmUtY29sb3JcIjogXCIjMTk4OWZhXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWRyb3Bkb3duLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0uY29kZURhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5oYm1TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJoYm1TdGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5oYm1TdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMTBweFwiLCBcIm1hcmdpbi1yaWdodFwiOiBcIjVweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1jb2xvclwiOiBcIiMxOTg5ZmFcIiwgcGxhY2Vob2xkZXI6IFwi5LyB5Lia5ZCN56ewXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWRyb3Bkb3duLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0uaGJtVHlwZUxpc3QgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5oYm1UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImhibVR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guaGJtVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIDI0MHB4KVwiLFxuICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBzaGFwZTogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuS8geS4muWQjeensFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmtleXdvcmQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImtleXdvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmtleXdvcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2YW4tY2FyZFwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIxMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkX2hlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcInRpdGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgdGl0bGU6IGl0ZW0ud3J5bWMgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLndyeW1jKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmFsX2NvbG9yID09PSBcIue7v+eggVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv57u/56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmFsX2NvbG9yID09PSBcIum7hOeggVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv6buE56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmFsX2NvbG9yID09PSBcIue6oueggVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv57qi56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkX21haW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJ0YWdzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJ0YWdzXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl90ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6KGM5Lia57G75Yir77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmh5bWMpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIui1i+eggeexu+Wei++8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5pbmZvX3R5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIui1i+eggeminOiJsu+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnFyX2NvZGVfY29sb3IgPT09IFwi57u/56CBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv57u/56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnFyX2NvZGVfY29sb3IgPT09IFwi6buE56CBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv6buE56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnFyX2NvZGVfY29sb3IgPT09IFwi57qi56CBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv57qi56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLotYvnoIHml7bpl7TvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaW5mb190aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLotYvnoIHljp/lm6DvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaW5mb19jYXNlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmRfYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJmb290ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QXBwcm92YWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5a6hIOaguFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0Jztcbi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPT0geCAmJiB5ICE9PSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSBpc051bGxPclVuZGVmaW5lZChyZWdleHApID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaFtkYXRhLXYtNmJmM2Q4NGFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnNlYXJjaCAudmFuLXNlYXJjaFtkYXRhLXYtNmJmM2Q4NGFdIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcbi5zZWFyY2hbZGF0YS12LTZiZjNkODRhXSAgLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnNlYXJjaFtkYXRhLXYtNmJmM2Q4NGFdICAudmFuLWRyb3Bkb3duLW1lbnVfX2JhciAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcXG4gIG1heC13aWR0aDogODUlO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2VhcmNoW2RhdGEtdi02YmYzZDg0YV0gIC52YW4tZHJvcGRvd24tbWVudV9fYmFyIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGU6OmFmdGVyIHtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5zZWFyY2hbZGF0YS12LTZiZjNkODRhXSAgLnZhbi1kcm9wZG93bi1tZW51X19iYXIgLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcbi5jb250ZW50W2RhdGEtdi02YmYzZDg0YV0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jb250ZW50IC5jYXJkX2hlYWRlcltkYXRhLXYtNmJmM2Q4NGFdIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5jb250ZW50IC5jYXJkX2hlYWRlciBzcGFuW2RhdGEtdi02YmYzZDg0YV0ge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmNvbnRlbnQgLmNhcmRfaGVhZGVyIGltZ1tkYXRhLXYtNmJmM2Q4NGFdIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5jb250ZW50IC5jYXJkX21haW5bZGF0YS12LTZiZjNkODRhXSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnQgLmNhcmRfbWFpbiAubWFpbl90ZXh0W2RhdGEtdi02YmYzZDg0YV0ge1xcbiAgY29sb3I6ICNhOGE4YThkOTtcXG59XFxuLmNvbnRlbnQgLmNhcmRfYm90dG9tW2RhdGEtdi02YmYzZDg0YV0ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiA1cHggMTVweCAxMHB4O1xcbn1cXG4uY29udGVudCAuY2FyZF9ib3R0b20gLnRleHRbZGF0YS12LTZiZjNkODRhXSB7XFxuICBjb2xvcjogIzE2YmNmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmYzZDg0YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNiYmQ1NTc2XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJmM2Q4NGEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmYzZDg0YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDpppbpobUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdXBlcnZpc2lvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9zdXBlcnZpc2lvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWPmOWMlui2i+WKv1xyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1UcmVuZCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jaGFuZ2luZ190cmVuZHMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug5YiG5p6QXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NhdXNlX2FuYWx5c2lzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOivpuaDhVxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1Db2RlQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lvoXlrqHmoLjliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXBwcm92YWxMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3BlbmRpbmdfcmV2aWV3X2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBzdWJtaXREZXB0QXBwcm92YWwgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvZGVwYXJ0bWVudF9hcHByb3ZhbCcsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDotYvnoIHnsbvlnovkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2x1ZVR5cGVzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3R5cGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+axoeafk+a6kOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WMuuWfn+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlBcmVhcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9kaXZpc2lvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5Lu75Yqh5qaC5ousXHJcbmV4cG9ydCBjb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvbGF3L3Rhc2tfc3VtbWFyaXplJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v6aOO6Zmp5oC76KeIXHJcbmV4cG9ydCBjb25zdCBnZXRFdmFsdWF0ZUluZm8gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9yZWdpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6aOO6Zmp6Zeu6aKY57G75Z6LXHJcbmV4cG9ydCBjb25zdCBnZXRSaXNrVHlwZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdG9wX2luZm8nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOi1i+eggeinhOWImSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIHop4TliJnmn6Xor6JcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5UnVsZUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3J1bGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/pg6jpl6jkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtRGVwYXJ0bWVudCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9pbnRlcmZhY2UvZGVwdC9kZXB0X3RyZWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/moKHpqoxcclxuZXhwb3J0IGNvbnN0IGNoZWNrUnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL2NoZWNrJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDkv67mlLnop4TliJlcclxuZXhwb3J0IGNvbnN0IGVkaXRSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdXBkYXRlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWcsOWbviA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDlnLDlm77ngrnkvY1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTWFwID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOe7n+iuoeaKpeihqCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdGF0aXN0aWNzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2FwcC9zdGF0aXN0aWNzL2RpdmlzaW9uX3BpZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDliqjmgIHor4Tku7cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/lkITljLrln5/mipXor4nljaDmr5RcclxuZXhwb3J0IGNvbnN0IGNvbXBsYWludFByb3BvcnRpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOicvY2x1c3Rlci9haXJRdWFsaXR5L2NvbXBsYWludFByb3BvcnRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZjNkODRhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiZjNkODRhJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmJmM2Q4NGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmJmM2Q4NGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmJmM2Q4NGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmJmM2Q4NGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmYzZDg0YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YmYzZDg0YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlVG9DaGVjay9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmYzZDg0YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmYzZDg0YSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=