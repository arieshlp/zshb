(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/case */ "./src/api/case.js");



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
      navTitle: '',
      loading: true,
      list: [],
      type: '',
      status: '',
      showPickerSelect: false,
      search: {
        creditCode: '',
        name: '',
        source: '',
        tel: '',
        division: ''
      },
      divisionCode: localStorage.getItem("divisionCode")
    };
  },
  mounted: function mounted() {
    // this.navTitle = this.$store.state.title + '列表';
    this.navTitle = this.$route.query.name + '列表';
    this.type = this.$route.query.type;
    this.status = this.$route.query.status;
    this.initDivision();
    this.queryList();
  },
  methods: {
    initDivision: function initDivision() {
      var _this = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["queryDivision"])().then(function (res) {
        _this.divisionData = res.data;
      });
    },
    resetSearch: function resetSearch() {
      this.search = {
        creditCode: '',
        name: '',
        source: '',
        tel: '',
        division: ''
      };
    },
    queryList: function queryList() {
      var _this2 = this;

      var search = this.search;
      search.pageNum = 1;
      search.pageSize = 999;
      search.type = this.type;
      search.year = '';
      search.status = this.status;
      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["queryTypeCaseList"])(search).then(function (res) {
        _this2.list = res.data.records;
      });
      this.loading = false;
      this.showPickerSelect = false;
    },
    getColor: function getColor(state) {
      if (state === '待审批') {
        return 'background:rgba(252, 236, 220, 1);color:rgba(255, 141, 26, 1);';
      } else if (state === '已审批') {
        return 'background:rgba(232, 239, 255, 1);color:rgba(68, 123, 252, 1);';
      } else if (state === '退回') {
        return 'background:rgba(247, 222, 222, 1);color:rgba(252, 68, 68, 1);';
      }
    },
    showDetail: function showDetail(data) {
      this.$router.push({
        name: 'caseDetail',
        query: {
          caseId: data.caseId,
          status: data.status,
          caseName: data.caseName
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.navTitle, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "right",
            fn: function () {
              return [
                _c("img", {
                  staticStyle: { "margin-right": "3px" },
                  attrs: { src: __webpack_require__(/*! @/assets/supervision/search.png */ "./src/assets/supervision/search.png") },
                }),
                _c(
                  "span",
                  {
                    staticClass: "into-task",
                    on: {
                      click: function ($event) {
                        _vm.showPickerSelect = true
                      },
                    },
                  },
                  [_vm._v("筛选")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm.loading
        ? _c(
            "van-loading",
            {
              staticStyle: { "margin-top": "50%" },
              attrs: { size: "24px", color: "#0094ff", vertical: "" },
            },
            [_vm._v("加载中...")]
          )
        : _vm._e(),
      _vm.loading === false
        ? _c(
            "div",
            { staticClass: "check-list-wrapper" },
            _vm._l(_vm.list, function (item, index) {
              return _c(
                "div",
                {
                  staticClass: "list_div",
                  on: {
                    click: function ($event) {
                      return _vm.showDetail(item)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "title" }, [
                    _c("span", { staticClass: "text" }, [
                      _vm._v(_vm._s(item.source)),
                    ]),
                    _c(
                      "div",
                      {
                        staticClass: "status",
                        style: _vm.getColor(item.status),
                      },
                      [_vm._v(_vm._s(item.status))]
                    ),
                  ]),
                  _c("div", { staticClass: "list_content" }, [
                    _c("div", { staticClass: "content_left" }, [
                      _c("div", [_vm._v("立案号：" + _vm._s(item.caseNo))]),
                      _c("div", [_vm._v("名称或姓名：" + _vm._s(item.name))]),
                    ]),
                    _c("div", { staticClass: "content_right" }, [
                      _c("span", [_vm._v(_vm._s(item.caseName))]),
                    ]),
                  ]),
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _c(
        "van-popup",
        {
          staticStyle: { width: "72%", height: "100%" },
          attrs: { position: "right" },
          model: {
            value: _vm.showPickerSelect,
            callback: function ($$v) {
              _vm.showPickerSelect = $$v
            },
            expression: "showPickerSelect",
          },
        },
        [
          _c(
            "div",
            { staticClass: "pop-content" },
            [
              _c("div", { staticClass: "pop-title" }, [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! @/assets/supervision/search.png */ "./src/assets/supervision/search.png") },
                }),
                _vm._v("筛选"),
              ]),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.divisionCode == "法规处" ||
                        _vm.divisionCode == "昆明市生态环境局",
                      expression:
                        "divisionCode == '法规处' || divisionCode == '昆明市生态环境局'",
                    },
                  ],
                },
                [_vm._v("承办单位")]
              ),
              _c(
                "van-radio-group",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.divisionCode == "法规处" ||
                        _vm.divisionCode == "昆明市生态环境局",
                      expression:
                        "divisionCode == '法规处' || divisionCode == '昆明市生态环境局'",
                    },
                  ],
                  attrs: { direction: "horizontal" },
                  model: {
                    value: _vm.search.division,
                    callback: function ($$v) {
                      _vm.$set(_vm.search, "division", $$v)
                    },
                    expression: "search.division",
                  },
                },
                _vm._l(_vm.divisionData, function (item, i) {
                  return _c("van-radio", {
                    key: i,
                    attrs: { name: item },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "icon",
                          fn: function (props) {
                            return [_c("span", [_vm._v(_vm._s(item))])]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  })
                }),
                1
              ),
              _c("p", [_vm._v("案件来源")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.source,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "source", $$v)
                  },
                  expression: "search.source",
                },
              }),
              _c("p", [_vm._v("当事人名称或姓名")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "name", $$v)
                  },
                  expression: "search.name",
                },
              }),
              _c("p", [_vm._v("社会信用代码/身份证号")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.creditCode,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "creditCode", $$v)
                  },
                  expression: "search.creditCode",
                },
              }),
              _c("div", { staticClass: "pop-bottom" }, [
                _c("span", { on: { click: _vm.resetSearch } }, [
                  _vm._v("重置"),
                ]),
                _c("span", { on: { click: _vm.queryList } }, [_vm._v("确定")]),
              ]),
            ],
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".check-list-wrapper[data-v-31d1d4c2] {\n  height: calc(100vh - 55px);\n  overflow-y: auto;\n  background-color: #f5f6f8;\n  padding: 0 15px;\n}\n.check-list-wrapper .list_div[data-v-31d1d4c2] {\n  height: 90px;\n  border-radius: 10px;\n  background: #FAFBFF;\n  padding: 10px;\n  margin-top: 15px;\n  background: white;\n}\n.check-list-wrapper .list_div .title[data-v-31d1d4c2] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  height: 40px;\n  line-height: 40px;\n}\n.check-list-wrapper .list_div .title .text[data-v-31d1d4c2] {\n  font-weight: bold;\n}\n.check-list-wrapper .list_div .title .status[data-v-31d1d4c2] {\n  font-size: 12px;\n  padding: 0 10px;\n  border-radius: 4px;\n  height: 25px;\n  line-height: 26px;\n}\n.check-list-wrapper .list_div .list_content[data-v-31d1d4c2] {\n  font-size: 12px;\n  color: rgba(47, 57, 78, 0.5);\n  height: calc(100% - 35px);\n  line-height: 25px;\n  display: flex;\n  justify-content: space-between;\n}\n.check-list-wrapper .list_div .list_content .content_left[data-v-31d1d4c2] {\n  /*width: 76%;*/\n  min-width: 46%;\n}\n.check-list-wrapper .list_div .list_content .content_right[data-v-31d1d4c2] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #43cf7c;\n  line-height: 18px;\n  text-align: right;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*line-height: 75px;*/\n}\n.pop-content[data-v-31d1d4c2] {\n  padding: 30px 10px 10px;\n  height: 100%;\n}\n.pop-content .pop-title[data-v-31d1d4c2] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 21px;\n  color: #25396f;\n}\n.pop-content .pop-title > img[data-v-31d1d4c2] {\n  margin-right: 10px;\n}\n.pop-content > p[data-v-31d1d4c2] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #25396f;\n  margin: 20px 5px 5px;\n}\n.pop-content[data-v-31d1d4c2]  .van-search {\n  padding: 0px;\n}\n.pop-content[data-v-31d1d4c2]  .van-search__content {\n  background-color: #f5f6f9;\n}\n.pop-content[data-v-31d1d4c2]  .van-field__control {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pop-content[data-v-31d1d4c2]  .van-radio {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-31d1d4c2]  .van-radio__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-31d1d4c2]  .van-radio__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content[data-v-31d1d4c2]  .van-checkbox {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-31d1d4c2]  .van-checkbox__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-31d1d4c2]  .van-checkbox__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content .pop-bottom[data-v-31d1d4c2] {\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 10px;\n}\n.pop-content .pop-bottom > span[data-v-31d1d4c2] {\n  display: inline-block;\n  width: calc(50% - 12px);\n  margin-right: 12px;\n  line-height: 36px;\n  text-align: center;\n  background-color: #f5f6f9;\n  color: #5475f8;\n  border-radius: 30px;\n}\n.pop-content .pop-bottom > span[data-v-31d1d4c2]:last-child {\n  background-color: #5475f8;\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c1503cd2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/case.js":
/*!*************************!*\
  !*** ./src/api/case.js ***!
  \*************************/
/*! exports provided: querySelectById, discussSelectByCaseId, superviseSelectByCaseId, legalSelectByCaseId, selectByCaseId, punishSelectByCaseId, getHearingByCaseId, stageSelectByCaseId, getUserInfo, getUserList, queryTypeCaseList, addReport, getReportDetail, signReport, countInfo, getAllReport, checkPwd, queryDivision, getSuperBatch, getSuperList, getSuperListDetail, board, countyList, infoList, baseInfo, distribute, handle, final, company, problem, timeGroup, unit, problemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectById", function() { return querySelectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discussSelectByCaseId", function() { return discussSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superviseSelectByCaseId", function() { return superviseSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legalSelectByCaseId", function() { return legalSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByCaseId", function() { return selectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punishSelectByCaseId", function() { return punishSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHearingByCaseId", function() { return getHearingByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageSelectByCaseId", function() { return stageSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTypeCaseList", function() { return queryTypeCaseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReport", function() { return addReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDetail", function() { return getReportDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signReport", function() { return signReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInfo", function() { return countInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllReport", function() { return getAllReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPwd", function() { return checkPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDivision", function() { return queryDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperBatch", function() { return getSuperBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperList", function() { return getSuperList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperListDetail", function() { return getSuperListDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countyList", function() { return countyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoList", function() { return infoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseInfo", function() { return baseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "company", function() { return company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problem", function() { return problem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeGroup", function() { return timeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemList", function() { return problemList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 案件详情
 * */

var querySelectById = function querySelectById(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/case/selectById/' + id,
    method: 'get'
  });
}; // 集体讨论详情

var discussSelectByCaseId = function discussSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/discuss/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var superviseSelectByCaseId = function superviseSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/supervise/selectByCaseId/' + id,
    method: 'get'
  });
}; // 告知详情

var legalSelectByCaseId = function legalSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/legal/selectByCaseId/' + id,
    method: 'post'
  });
}; // 告知详情

var selectByCaseId = function selectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/inform/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var punishSelectByCaseId = function punishSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/punish/selectByCaseId/' + id,
    method: 'get'
  });
}; // 详情

var getHearingByCaseId = function getHearingByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hearing/getHearingByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var stageSelectByCaseId = function stageSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/stage/selectByCaseId/' + id,
    method: 'post'
  });
}; //根据token获取企业信息

var getUserInfo = function getUserInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/getInfo",
    method: "GET",
    params: data
  });
}; //获取用户

var getUserList = function getUserList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user",
    method: "GET",
    params: data
  });
}; //查看审批子项列表

var queryTypeCaseList = function queryTypeCaseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/queryAppList",
    method: "GET",
    params: data
  });
}; //新建审批表

var addReport = function addReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/ins",
    method: "PUT",
    data: data
  });
}; //获取单个审批表信息

var getReportDetail = function getReportDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval",
    method: "GET",
    params: data
  });
}; //签名审批

var signReport = function signReport(data, type) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/sign?type=" + type,
    method: "POST",
    data: data
  });
}; //统计

var countInfo = function countInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/getStat",
    method: "GET",
    params: data
  });
}; //详情

var getAllReport = function getAllReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/detail",
    method: "GET",
    params: data
  });
}; //校验密码

var checkPwd = function checkPwd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/checkPwd",
    method: "GET",
    params: data
  });
}; //支队/分局下拉框

var queryDivision = function queryDivision(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/div",
    method: "GET"
  });
}; //环保督察-获取批次列表

var getSuperBatch = function getSuperBatch(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/batchList",
    method: "GET",
    params: data
  });
}; //环保督察-获取批次列表

var getSuperList = function getSuperList(info, data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/list",
    method: "POST",
    params: info,
    data: data
  });
}; //环保督察-获取批次列表

var getSuperListDetail = function getSuperListDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/",
    method: "GET",
    params: data
  });
};
function board() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board",
    method: "get"
  });
}
function countyList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board/getCounty",
    method: "get",
    params: params
  });
}
function infoList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/list",
    method: "get",
    params: params
  });
}
function baseInfo(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/getById",
    method: "get",
    params: params
  });
}
function distribute(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/distribute/" + params,
    method: "get"
  });
}
function handle(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/handle/" + params,
    method: "get"
  });
}
function final(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/final/" + params,
    method: "get"
  });
}
function company(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/qyByInfoId",
    method: "get",
    params: params
  });
}
function problem() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues",
    method: "get"
  });
}
function timeGroup() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/timeGroup",
    method: "get"
  });
}
function unit() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/getUnit",
    method: "get"
  });
}
function problemList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/pageList",
    method: "post",
    data: params
  });
}

/***/ }),

/***/ "./src/assets/supervision/search.png":
/*!*******************************************!*\
  !*** ./src/assets/supervision/search.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACrSURBVCiRjZC7FYMwEATneASoKkMPKgVIESm4FPUArkpEPgd8BBj8fOFqbnd1YqtJ+XNSYARAtb2lRIaNs9Wktg7uirN1cGt6Mm9qi0pjy5CfQVQaZE6V7aGaBgDfZwWALUOOyIBo6zvjonPsnG/uJ/AA+6cZFyVWeTPaOrj1P+ntBbZEaZb+uxq/Zzx2jk6PL0305TvjkpPYwnz3K/sD7DvjfJ8V69K+AsAHHgpJnYQ3GNYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/caseCheck/caseList/index.vue":
/*!************************************************!*\
  !*** ./src/views/caseCheck/caseList/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=31d1d4c2&scoped=true& */ "./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& */ "./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31d1d4c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=style&index=0&id=31d1d4c2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_31d1d4c2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=31d1d4c2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseList/index.vue?vue&type=template&id=31d1d4c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_31d1d4c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWU/N2FjMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWU/NGZmYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VMaXN0L2luZGV4LnZ1ZT9hZWU3Iiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlTGlzdC9pbmRleC52dWU/Mzg4MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VMaXN0L2luZGV4LnZ1ZT9jYzM1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZUxpc3QvaW5kZXgudnVlP2MyM2QiXSwibmFtZXMiOlsicXVlcnlTZWxlY3RCeUlkIiwiaWQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkIiwic3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQiLCJsZWdhbFNlbGVjdEJ5Q2FzZUlkIiwic2VsZWN0QnlDYXNlSWQiLCJwdW5pc2hTZWxlY3RCeUNhc2VJZCIsImdldEhlYXJpbmdCeUNhc2VJZCIsInN0YWdlU2VsZWN0QnlDYXNlSWQiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJwYXJhbXMiLCJnZXRVc2VyTGlzdCIsInF1ZXJ5VHlwZUNhc2VMaXN0IiwiYWRkUmVwb3J0IiwiZ2V0UmVwb3J0RGV0YWlsIiwic2lnblJlcG9ydCIsInR5cGUiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFFQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQTtBQUlBLGNBSkE7QUFLQSxnQkFMQTtBQU1BLDZCQU5BO0FBT0E7QUFDQSxzQkFEQTtBQUVBLGdCQUZBO0FBR0Esa0JBSEE7QUFJQSxlQUpBO0FBS0E7QUFMQSxPQVBBO0FBY0E7QUFkQTtBQWdCQSxHQW5CQTtBQW9CQSxTQXBCQSxxQkFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTNCQTtBQTRCQTtBQUNBLGdCQURBLDBCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUEsZUFOQSx5QkFNQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxnQkFGQTtBQUdBLGtCQUhBO0FBSUEsZUFKQTtBQUtBO0FBTEE7QUFPQSxLQWRBO0FBZUEsYUFmQSx1QkFlQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxP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QU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJuYXZUaXRsZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI3JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9zZWFyY2gucG5nXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDNweFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnRvLXRhc2tcIiBAY2xpY2s9XCJzaG93UGlja2VyU2VsZWN0ID0gdHJ1ZVwiPuetm+mAiTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDx2YW4tbG9hZGluZyB2LWlmPVwibG9hZGluZ1wiIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDA5NGZmXCIgdmVydGljYWwgc3R5bGU9XCJtYXJnaW4tdG9wOiA1MCVcIj7liqDovb3kuK0uLi48L3Zhbi1sb2FkaW5nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1saXN0LXdyYXBwZXJcIiB2LWlmPVwibG9hZGluZz09PWZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0X2RpdlwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiBAY2xpY2s9XCJzaG93RGV0YWlsKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e2l0ZW0uc291cmNlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiIDpzdHlsZT1cImdldENvbG9yKGl0ZW0uc3RhdHVzKVwiPnt7aXRlbS5zdGF0dXN9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pueri+ahiOWPt++8mnt7aXRlbS5jYXNlTm99fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuWQjeensOaIluWnk+WQje+8mnt7aXRlbS5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uY2FzZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93UGlja2VyU2VsZWN0XCIgcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPVwid2lkdGg6NzIlO2hlaWdodDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXRpdGxlXCI+PGltZyBzcmM9XCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vc2VhcmNoLnBuZ1wiLz7nrZvpgIk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIHYtc2hvdz1cImRpdmlzaW9uQ29kZSA9PSAn5rOV6KeE5aSEJyB8fCBkaXZpc2lvbkNvZGUgPT0gJ+aYhuaYjuW4gueUn+aAgeeOr+Wig+WxgCdcIj7mib/lip7ljZXkvY08L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJzZWFyY2guZGl2aXNpb25cIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgdi1zaG93PVwiZGl2aXNpb25Db2RlID09ICfms5Xop4TlpIQnIHx8IGRpdmlzaW9uQ29kZSA9PSAn5piG5piO5biC55Sf5oCB546v5aKD5bGAJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gdi1mb3I9XCIoaXRlbSxpKSBpbiBkaXZpc2lvbkRhdGFcIiA6a2V5PVwiaVwiIDpuYW1lPVwiaXRlbVwiPjx0ZW1wbGF0ZSAjaWNvbj1cInByb3BzXCI+PHNwYW4+e3tpdGVtfX08L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgIDwvdmFuLXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHA+5qGI5Lu25p2l5rqQPC9wPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaC5zb3VyY2VcIiBzaGFwZT1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+5b2T5LqL5Lq65ZCN56ew5oiW5aeT5ZCNPC9wPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaC5uYW1lXCIgc2hhcGU9XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPuekvuS8muS/oeeUqOS7o+eggS/ouqvku73or4Hlj7c8L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoLmNyZWRpdENvZGVcIiBzaGFwZT1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8cD7ogZTns7vnlLXor508L3A+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgIDx2YW4tc2VhcmNoIHYtbW9kZWw9XCJzZWFyY2gudGVsXCIgc2hhcGU9XCJyb3VuZFwiLz4tLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicmVzZXRTZWFyY2hcIj7ph43nva48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwicXVlcnlMaXN0XCI+56Gu5a6aPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtxdWVyeURpdmlzaW9uLCBxdWVyeVR5cGVDYXNlTGlzdH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9jYXNlXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hdlRpdGxlOicnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzIDogJycsXHJcbiAgICAgICAgICAgICAgICBzaG93UGlja2VyU2VsZWN0IDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2ggOntcclxuICAgICAgICAgICAgICAgICAgICBjcmVkaXRDb2RlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uIDogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbkNvZGUgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRpdmlzaW9uQ29kZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5hdlRpdGxlID0gdGhpcy4kc3RvcmUuc3RhdGUudGl0bGUgKyAn5YiX6KGoJztcclxuICAgICAgICAgICAgdGhpcy5uYXZUaXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWUgKyAn5YiX6KGoJztcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy4kcm91dGUucXVlcnkudHlwZSA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy4kcm91dGUucXVlcnkuc3RhdHVzO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREaXZpc2lvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBpbml0RGl2aXNpb24oKXtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGl2aXNpb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXZpc2lvbkRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNldFNlYXJjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0Q29kZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWwgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbiA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1ZXJ5TGlzdCgpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaCA9IHRoaXMuc2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoLnBhZ2VOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoLnBhZ2VTaXplID0gOTk5O1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoLnR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2gueWVhciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlQ2FzZUxpc3Qoc2VhcmNoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEucmVjb3JkcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQaWNrZXJTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Q29sb3Ioc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdGUgPT09ICflvoXlrqHmibknKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tncm91bmQ6cmdiYSgyNTIsIDIzNiwgMjIwLCAxKTtjb2xvcjpyZ2JhKDI1NSwgMTQxLCAyNiwgMSk7J1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHN0YXRlID09PSAn5bey5a6h5om5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOnJnYmEoMjMyLCAyMzksIDI1NSwgMSk7Y29sb3I6cmdiYSg2OCwgMTIzLCAyNTIsIDEpOydcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihzdGF0ZSA9PT0gJ+mAgOWbnicpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDpyZ2JhKDI0NywgMjIyLCAyMjIsIDEpO2NvbG9yOnJnYmEoMjUyLCA2OCwgNjgsIDEpOydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0RldGFpbChkYXRhKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FzZURldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZUlkOiBkYXRhLmNhc2VJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VOYW1lIDogZGF0YS5jYXNlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmNoZWNrLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAubGlzdF9kaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQUZCRkY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgLnRleHQgeyBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0X2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNDcsIDU3LCA3OCwgMC41KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAuY29udGVudF9sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAvKndpZHRoOiA3NiU7Ki9cclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250ZW50X3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzY2Y3YztcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKmxpbmUtaGVpZ2h0OiA3NXB4OyovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9wLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5wb3AtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA+cHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggNXB4IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1zZWFyY2h7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1zZWFyY2hfX2NvbnRlbnR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDYsIDI0OSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tZmllbGRfX2NvbnRyb2x7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLXJhZGlve1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLXJhZGlvX19pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tcmFkaW9fX2ljb24tLWNoZWNrZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE5ODlmYTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2hlY2tib3h7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2hlY2tib3hfX2ljb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI0OSwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5ODlmYTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTk4OWZhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvcC1ib3R0b217XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAxMHB4O1xyXG4gICAgICAgICAgICA+c3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLm5hdlRpdGxlLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnRvLXRhc2tcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJTZWxlY3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi562b6YCJXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmFuLWxvYWRpbmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNTAlXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIyNHB4XCIsIGNvbG9yOiBcIiMwMDk0ZmZcIiwgdmVydGljYWw6IFwiXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5Yqg6L295LitLi4uXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5sb2FkaW5nID09PSBmYWxzZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hlY2stbGlzdC13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3RfZGl2XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnNvdXJjZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoaXRlbS5zdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5zdGF0dXMpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0X2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLnq4vmoYjlj7fvvJpcIiArIF92bS5fcyhpdGVtLmNhc2VObykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIuWQjeensOaIluWnk+WQje+8mlwiICsgX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY2FzZU5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3MiVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93UGlja2VyU2VsZWN0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJTZWxlY3QgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJTZWxlY3RcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3AtY29udGVudFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLnrZvpgIlcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpdmlzaW9uQ29kZSA9PSBcIuazleinhOWkhFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGl2aXNpb25Db2RlID09IFwi5piG5piO5biC55Sf5oCB546v5aKD5bGAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2aXNpb25Db2RlID09ICfms5Xop4TlpIQnIHx8IGRpdmlzaW9uQ29kZSA9PSAn5piG5piO5biC55Sf5oCB546v5aKD5bGAJ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmib/lip7ljZXkvY1cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXZpc2lvbkNvZGUgPT0gXCLms5Xop4TlpIRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpdmlzaW9uQ29kZSA9PSBcIuaYhuaYjuW4gueUn+aAgeeOr+Wig+WxgFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdmlzaW9uQ29kZSA9PSAn5rOV6KeE5aSEJyB8fCBkaXZpc2lvbkNvZGUgPT0gJ+aYhuaYjuW4gueUn+aAgeeOr+Wig+WxgCdcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5kaXZpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImRpdmlzaW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guZGl2aXNpb25cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpdmlzaW9uRGF0YSwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInZhbi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5qGI5Lu25p2l5rqQXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hhcGU6IFwicm91bmRcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcInNvdXJjZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc291cmNlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5b2T5LqL5Lq65ZCN56ew5oiW5aeT5ZCNXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hhcGU6IFwicm91bmRcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5uYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5uYW1lXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi56S+5Lya5L+h55So5Luj56CBL+i6q+S7veivgeWPt1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY3JlZGl0Q29kZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY3JlZGl0Q29kZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY3JlZGl0Q29kZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5yZXNldFNlYXJjaCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIumHjee9rlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnF1ZXJ5TGlzdCB9IH0sIFtfdm0uX3YoXCLnoa7lrppcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG4vLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gaXNOdWxsT3JVbmRlZmluZWQocmVnZXhwKSA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGVjay1saXN0LXdyYXBwZXJbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4uY2hlY2stbGlzdC13cmFwcGVyIC5saXN0X2RpdltkYXRhLXYtMzFkMWQ0YzJdIHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQkZGO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuLmNoZWNrLWxpc3Qtd3JhcHBlciAubGlzdF9kaXYgLnRpdGxlW2RhdGEtdi0zMWQxZDRjMl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLmNoZWNrLWxpc3Qtd3JhcHBlciAubGlzdF9kaXYgLnRpdGxlIC50ZXh0W2RhdGEtdi0zMWQxZDRjMl0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jaGVjay1saXN0LXdyYXBwZXIgLmxpc3RfZGl2IC50aXRsZSAuc3RhdHVzW2RhdGEtdi0zMWQxZDRjMl0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxufVxcbi5jaGVjay1saXN0LXdyYXBwZXIgLmxpc3RfZGl2IC5saXN0X2NvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSg0NywgNTcsIDc4LCAwLjUpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNoZWNrLWxpc3Qtd3JhcHBlciAubGlzdF9kaXYgLmxpc3RfY29udGVudCAuY29udGVudF9sZWZ0W2RhdGEtdi0zMWQxZDRjMl0ge1xcbiAgLyp3aWR0aDogNzYlOyovXFxuICBtaW4td2lkdGg6IDQ2JTtcXG59XFxuLmNoZWNrLWxpc3Qtd3JhcHBlciAubGlzdF9kaXYgLmxpc3RfY29udGVudCAuY29udGVudF9yaWdodFtkYXRhLXYtMzFkMWQ0YzJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzQzY2Y3YztcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLypsaW5lLWhlaWdodDogNzVweDsqL1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBwYWRkaW5nOiAzMHB4IDEwcHggMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtdGl0bGVbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtdGl0bGUgPiBpbWdbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5wb3AtY29udGVudCA+IHBbZGF0YS12LTMxZDFkNGMyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG4gIG1hcmdpbjogMjBweCA1cHggNXB4O1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSAgLnZhbi1zZWFyY2gge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSAgLnZhbi1zZWFyY2hfX2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmOTtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0zMWQxZDRjMl0gIC52YW4tZmllbGRfX2NvbnRyb2wge1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtMzFkMWQ0YzJdICAudmFuLXJhZGlvIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSAgLnZhbi1yYWRpb19faWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNmY5O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0zMWQxZDRjMl0gIC52YW4tcmFkaW9fX2ljb24tLWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5ODlmYTtcXG4gIGJvcmRlci1jb2xvcjogIzE5ODlmYTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTMxZDFkNGMyXSAgLnZhbi1jaGVja2JveCB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0zMWQxZDRjMl0gIC52YW4tY2hlY2tib3hfX2ljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtMzFkMWQ0YzJdICAudmFuLWNoZWNrYm94X19pY29uLS1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XFxuICBib3JkZXItY29sb3I6ICMxOTg5ZmE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtYm90dG9tW2RhdGEtdi0zMWQxZDRjMl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMzBweCAwcHggMTBweDtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtYm90dG9tID4gc3BhbltkYXRhLXYtMzFkMWQ0YzJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY5O1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnQgLnBvcC1ib3R0b20gPiBzcGFuW2RhdGEtdi0zMWQxZDRjMl06bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ3NWY4O1xcbiAgY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzFkMWQ0YzImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjMTUwM2NkMlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxZDFkNGMyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzFkMWQ0YzImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5qGI5Lu26K+m5oOFXHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdEJ5SWQgPShpZCk9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9jYXNlL3NlbGVjdEJ5SWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG4vLyDpm4bkvZPorqjorrror6bmg4VcclxuZXhwb3J0IGNvbnN0IGRpc2N1c3NTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9kaXNjdXNzL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N1cGVydmlzZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IGxlZ2FsU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvbGVnYWwvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaW5mb3JtL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHB1bmlzaFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3B1bmlzaC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEhlYXJpbmdCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9oZWFyaW5nL2dldEhlYXJpbmdCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdGFnZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N0YWdlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG5cclxuLy/moLnmja50b2tlbuiOt+WPluS8geS4muS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9nZXRJbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W55So5oi3XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5p+l55yL5a6h5om55a2Q6aG55YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVR5cGVDYXNlTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9xdWVyeUFwcExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlrDlu7rlrqHmibnooahcclxuZXhwb3J0IGNvbnN0IGFkZFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9pbnNcIixcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W5Y2V5Liq5a6h5om56KGo5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvcnREZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nrb7lkI3lrqHmiblcclxuZXhwb3J0IGNvbnN0IHNpZ25SZXBvcnQgPSAoZGF0YSx0eXBlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9zaWduP3R5cGU9XCIrdHlwZSxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+e7n+iuoVxyXG5leHBvcnQgY29uc3QgY291bnRJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2dldFN0YXRcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/or6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEFsbFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/moKHpqozlr4bnoIFcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvY2hlY2tQd2RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlK/pmJ8v5YiG5bGA5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeURpdmlzaW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZGl2XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCJcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckJhdGNoID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JhdGNoTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdCA9IChpbmZvLGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwYXJhbXM6IGluZm8sXHJcbiAgICBkYXRhIDogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50eUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZC9nZXRDb3VudHlcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5mb0xpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZUluZm8ocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2dldEJ5SWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdHJpYnV0ZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZGlzdHJpYnV0ZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vaGFuZGxlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWwocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2ZpbmFsL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFueShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vcXlCeUluZm9JZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUdyb3VwKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy90aW1lR3JvdXBcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL2dldFVuaXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW1MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9wYWdlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTUNBWUFBQUMwcVVlZUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNyU1VSQlZDaVJqWkM3RllNd0VBVG5lQVNvS2tNUEtnVklFU200RlBVQXJrcEVQZ2Q4QkJqOGZPRnFibmQxWXF0SitYTlNZQVJBdGIybFJJYU5zOVdrdGc3dWlyTjFjR3Q2TW05cWkwcGp5NUNmUVZRYVpFNlY3YUdhQmdEZlp3V0FMVU9PeUlCbzZ6dmpvblBzbkcvdUovQUErNmNaRnlWV2VUUGFPcmoxUCtudEJiWkVhWmIrdXhxL1p6eDJqazZQTDAzMDVUdmprcFBZd256M0svc0Q3RHZqZko4VjY5SytBc0FISGdwSm5ZUTNHTllBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzFkMWQ0YzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzFkMWQ0YzImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMWQxZDRjMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMWQxZDRjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMWQxZDRjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMWQxZDRjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxZDFkNGMyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxZDFkNGMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VMaXN0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxZDFkNGMyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxZDFkNGMyJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==