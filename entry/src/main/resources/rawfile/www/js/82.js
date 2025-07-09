(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/areaFilter */ "./src/components/areaFilter.vue");





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
  name: "lawExamine",
  components: {
    areaFilter: _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      search: '',
      publicData: [],
      loading: false,
      finished: false,
      // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false,
      // 下拉状态
      listQuery: {
        page: 1,
        // 当前页码数
        limit: 15 // 一页显示10条

      },
      topTitle: '',
      xzqh: '',
      showFilter: false
    };
  },
  mounted: function mounted() {
    this.topTitle = this.$route.query.title;
    this.xzqh = this.$route.query.xzqh;
    this.loadData();
  },
  methods: {
    getDivision: function getDivision(arr) {
      if (arr.length > 0) {
        this.xzqh = arr.join(',');
        this.publicData = [];
        this.listQuery.page = 1;
        this.loadData();
      }
    },
    onSearch: function onSearch() {
      this.publicData = [];
      this.listQuery.page = 1;
      this.loadData();
    },
    goDetail: function goDetail(row, type) {
      if (this.topTitle == '执法检查') {
        this.$router.push({
          name: "lawCheckDetail",
          query: {
            id: row.id
          }
        });
      }
    },
    loadData: function loadData() {
      if (this.topTitle == '执法检查') {
        this.ydzf();
      }
    },
    ydzf: function ydzf() {
      var _this = this;

      var info = {
        entName: this.search,
        // divisionName: this.$route.query.xzqh,
        divisionName: this.xzqh,
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["ydzfList"])(info).then(function (res) {
        var rdata = res.data; // 是否是第一次进入页面page==1 直接赋值

        if (_this.listQuery.page == 1) {
          _this.publicData = rdata.records;
        } else {
          // 如果不是则在后面追加数据，
          rdata.records.forEach(function (item) {
            _this.publicData.push(item);
          });
        } // 关闭loading


        _this.loading = false; // 当还有数据是page++

        if (rdata.records.length === _this.listQuery.limit && rdata.total !== _this.listQuery.limit) {
          _this.listQuery.page++;
          _this.loading = false;
        } else {
          _this.finished = true;
        }
      });
    },
    onLoad: function onLoad() {
      var _this2 = this;

      setTimeout(function () {
        _this2.loadData();
      }, 1000);
    },
    onRefresh: function onRefresh() {
      var _this3 = this;

      // this.pollutData = [];
      // this.loading = true;
      setTimeout(function () {
        _this3.listQuery.page = 1;

        _this3.loadData();

        _this3.refreshing = false;
      }, 500);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "lawExamine",
      staticStyle: {
        height: "calc(100vh)",
        background: "rgba(255, 255, 255, 1)",
      },
    },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.topTitle + "情况", "left-arrow": "" },
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
                _c(
                  "span",
                  {
                    staticClass: "into-map",
                    on: {
                      click: function ($event) {
                        _vm.showFilter = true
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
      _c("areaFilter", {
        attrs: { isShow: _vm.showFilter },
        on: {
          getFilter: _vm.getDivision,
          close: function ($event) {
            _vm.showFilter = false
          },
        },
      }),
      _c("van-search", {
        attrs: { shape: "round", placeholder: "" },
        on: { search: _vm.onRefresh },
        model: {
          value: _vm.search,
          callback: function ($$v) {
            _vm.search = $$v
          },
          expression: "search",
        },
      }),
      _c(
        "div",
        { staticClass: "refreshbox" },
        [
          _c(
            "van-pull-refresh",
            {
              on: { refresh: _vm.onRefresh },
              model: {
                value: _vm.refreshing,
                callback: function ($$v) {
                  _vm.refreshing = $$v
                },
                expression: "refreshing",
              },
            },
            [
              _c(
                "van-list",
                {
                  attrs: {
                    finished: _vm.finished,
                    "finished-text": "没有更多了",
                    "immediate-check": false,
                    offset: 50,
                  },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                _vm._l(_vm.publicData, function (item) {
                  return _c("div", { staticClass: "around-wrapper" }, [
                    _c(
                      "div",
                      {
                        staticClass: "linetwo",
                        on: {
                          click: function ($event) {
                            return _vm.goDetail(item, "执法检查")
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticStyle: { width: "16px", "margin-right": "7px" },
                          attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
                        }),
                        _c("div", { staticStyle: { width: "60%" } }, [
                          _c("div", { staticClass: "name text-ellipsis" }, [
                            _vm._v(" " + _vm._s(item.entName) + " "),
                          ]),
                          _c("div", { staticClass: "des text-ellipsis" }, [
                            _vm._v(" " + _vm._s(item.msg) + " "),
                          ]),
                        ]),
                        _c("div", { staticClass: "swcm_ydzftime" }, [
                          _vm._v(_vm._s(item.time) + " "),
                        ]),
                      ]
                    ),
                  ])
                }),
                0
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lawExamine .refreshbox[data-v-d915d982] {\n  height: calc(100vh - 106px);\n  overflow-y: auto;\n}\n.lawExamine .linetwo[data-v-d915d982] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.lawExamine .text-ellipsis[data-v-d915d982] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.lawExamine .swcm_ydzftime[data-v-d915d982] {\n  width: 40%;\n  text-align: right;\n  padding-right: 8px;\n  font-size: 12px;\n  color: #999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-d915d982] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.around-wrapper[data-v-d915d982] {\n  margin: 0 25px;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.05);\n}\n.around-wrapper[data-v-d915d982]:last-child {\n  border-bottom: 0;\n}\n.around-wrapper .name[data-v-d915d982] {\n  margin-bottom: 5px;\n  color: #121236;\n  font-size: 14px;\n}\n.around-wrapper .des[data-v-d915d982] {\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4e3fec32", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8672051a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/公司.png":
/*!***************************!*\
  !*** ./src/assets/公司.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFuSURBVFiF7VdbioQwEKxe9FyrkFsZiILeSph4rgi9HybiqEkm+JqPLZif0e6qdPol8DDoqAMhTQGgAKD7Nte3CBDSFGBSlnjhjZu+zesUX9nHhABmUn57rEE8gEmB6TeFPChgcUqAVyedSBsXcitQpZLvChDV+MLeKQEsSc/Cm4CZ3JESNwBwNqlXAFw2d1l5FeEaP3cRfa2AaBnavNiCeEit+WQBUyluSnACH26icQE2+1OYClGNnNIRr8kBJiWkeUSABnEJQINJiWrkmJB4Ero5sIKvOdn/tZCmtvNBCWngu5JgBOw8eO39RDVyyLZv87rvMgJxE4pGNAmFNI3nsQ7ZLoUIaeCLRvQKzqh166MW1ch2ws4+H++Ejwu4rBXPdpH3jrTiAou79NoF3osKsFWwuxuElpSQXZKAGNEZdo8n4b+AedbPfX+xDSfAfUOEbSf/AHHpcoSAzTp+F3TfZWVmFQ1nrVgfIz3K1+APOTPQdN+wLWUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/pollution/lawExamineList/index.vue":
/*!******************************************************!*\
  !*** ./src/views/pollution/lawExamineList/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d915d982&scoped=true& */ "./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& */ "./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& */ "./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d915d982",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/lawExamineList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=0&id=d915d982&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=style&index=1&id=d915d982&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_d915d982_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d915d982&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/lawExamineList/index.vue?vue&type=template&id=d915d982&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d915d982_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWU/MDcwMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWU/OGE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2xhd0V4YW1pbmVMaXN0L2luZGV4LnZ1ZT81MTEyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vbGF3RXhhbWluZUxpc3QvaW5kZXgudnVlPzQwMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWU/NjZmNyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+WFrOWPuC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWU/MjU3NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2xhd0V4YW1pbmVMaXN0L2luZGV4LnZ1ZT82NTA5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vbGF3RXhhbWluZUxpc3QvaW5kZXgudnVlP2RjYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9sYXdFeGFtaW5lTGlzdC9pbmRleC52dWU/YTQ1YiJdLCJuYW1lcyI6W10s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RUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy84Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwibGF3RXhhbWluZVwiIHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoKTtiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCI+XHJcblx0XHQ8dmFuLW5hdi1iYXIgOnRpdGxlPVwidG9wVGl0bGUrJ+aDheWGtSdcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuXHRcdFx0PHRlbXBsYXRlICNyaWdodD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImludG8tbWFwXCIgQGNsaWNrPVwic2hvd0ZpbHRlciA9IHRydWVcIj7nrZvpgIk8L3NwYW4+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8L3Zhbi1uYXYtYmFyPlxyXG5cclxuXHRcdDwhLS3ooYzmlL/ljLrliJLnrZvpgInlvLnmoYYtLT5cclxuXHRcdDxhcmVhRmlsdGVyIDppc1Nob3c9XCJzaG93RmlsdGVyXCIgQGdldEZpbHRlcj1cImdldERpdmlzaW9uXCIgQGNsb3NlPVwic2hvd0ZpbHRlcj1mYWxzZVwiLz5cclxuXHJcblx0XHQ8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoXCIgc2hhcGU9XCJyb3VuZFwiIEBzZWFyY2g9XCJvblJlZnJlc2hcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVmcmVzaGJveFwiPlxyXG5cdFx0PHZhbi1wdWxsLXJlZnJlc2ggdi1tb2RlbD1cInJlZnJlc2hpbmdcIiBAcmVmcmVzaD1cIm9uUmVmcmVzaFwiPlxyXG5cdFx0XHQ8dmFuLWxpc3Qgdi1tb2RlbD1cImxvYWRpbmdcIiA6ZmluaXNoZWQ9XCJmaW5pc2hlZFwiIGZpbmlzaGVkLXRleHQ9XCLmsqHmnInmm7TlpJrkuoZcIlxyXG5cdFx0XHRcdDppbW1lZGlhdGUtY2hlY2s9XCJmYWxzZVwiIEBsb2FkPVwib25Mb2FkXCIgOm9mZnNldD0nNTAnPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBwdWJsaWNEYXRhXCIgY2xhc3M9XCJhcm91bmQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxpbmV0d29cIiAgQGNsaWNrPVwiZ29EZXRhaWwoaXRlbSwn5omn5rOV5qOA5p+lJylcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL2Fzc2V0cy/lhazlj7gucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTZweDttYXJnaW4tcmlnaHQ6IDdweFwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cIndpZHRoOiA2MCU7XCIgY2xhc3M9XCJcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hbWUgdGV4dC1lbGxpcHNpc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpdGVtLmVudE5hbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXMgdGV4dC1lbGxpcHNpc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpdGVtLm1zZ319XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3djbV95ZHpmdGltZVwiPnt7aXRlbS50aW1lfX0gPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC92YW4tbGlzdD5cclxuXHRcdDwvdmFuLXB1bGwtcmVmcmVzaD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdHlkemZMaXN0XHJcblx0fSBmcm9tICdAL2FwaS9wb2xsdXRpb25fc291cmNlJztcclxuXHRpbXBvcnQgYXJlYUZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2FyZWFGaWx0ZXJcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcImxhd0V4YW1pbmVcIixcclxuXHRcdGNvbXBvbmVudHM6e1xyXG5cdFx0XHRhcmVhRmlsdGVyXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzZWFyY2g6ICcnLFxyXG5cdFx0XHRcdHB1YmxpY0RhdGE6IFtdLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGZpbmlzaGVkOiBmYWxzZSwgLy8g5piv5ZCm5bey5Yqg6L295a6M5oiQ77yM5Yqg6L295a6M5oiQ5ZCO5LiN5YaN6Kem5Y+RbG9hZOS6i+S7tlxyXG5cdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLCAvLyDkuIvmi4nnirbmgIFcclxuXHRcdFx0XHRsaXN0UXVlcnk6IHtcclxuXHRcdFx0XHRcdHBhZ2U6IDEsIC8vIOW9k+WJjemhteeggeaVsFxyXG5cdFx0XHRcdFx0bGltaXQ6IDE1LCAvLyDkuIDpobXmmL7npLoxMOadoVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dG9wVGl0bGU6ICcnLFxyXG5cdFx0XHRcdHh6cWg6ICcnLFxyXG5cdFx0XHRcdHNob3dGaWx0ZXI6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnRvcFRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkudGl0bGU7XHJcblx0XHRcdHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcblxyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXREaXZpc2lvbihhcnIpe1xyXG5cdFx0XHRcdGlmKGFyci5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHR0aGlzLnh6cWggPSBhcnIuam9pbignLCcpO1xyXG5cdFx0XHRcdFx0dGhpcy5wdWJsaWNEYXRhID0gW107XHJcblx0XHRcdFx0XHR0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU2VhcmNoKCkge1xyXG5cdFx0XHRcdHRoaXMucHVibGljRGF0YSA9IFtdO1xyXG5cdFx0XHRcdHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPSAxO1xyXG5cdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29EZXRhaWwocm93LHR5cGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMudG9wVGl0bGU9PSfmiafms5Xmo4Dmn6UnKXtcclxuXHRcdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogXCJsYXdDaGVja0RldGFpbFwiLFxyXG5cdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdGlkOiByb3cuaWQsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9hZERhdGEoKSB7XHJcblx0XHRcdFx0aWYodGhpcy50b3BUaXRsZT09J+aJp+azleajgOafpScpe1xyXG5cdFx0XHRcdFx0dGhpcy55ZHpmKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR5ZHpmKCl7XHJcblx0XHRcdFx0bGV0IGluZm8gPSB7XHJcblx0XHRcdFx0XHRlbnROYW1lOiB0aGlzLnNlYXJjaCxcclxuXHRcdFx0XHRcdC8vIGRpdmlzaW9uTmFtZTogdGhpcy4kcm91dGUucXVlcnkueHpxaCxcclxuXHRcdFx0XHRcdGRpdmlzaW9uTmFtZTogdGhpcy54enFoLFxyXG5cdFx0XHRcdFx0cGFnZU51bTogdGhpcy5saXN0UXVlcnkucGFnZSxcclxuXHRcdFx0XHRcdHBhZ2VTaXplOiB0aGlzLmxpc3RRdWVyeS5saW1pdCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0eWR6Zkxpc3QoaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHQvLyDmmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXpobXpnaJwYWdlPT0xIOebtOaOpei1i+WAvFxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnB1YmxpY0RhdGEgPSByZGF0YS5yZWNvcmRzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5aaC5p6c5LiN5piv5YiZ5Zyo5ZCO6Z2i6L+95Yqg5pWw5o2u77yMXHJcblx0XHRcdFx0XHRcdHJkYXRhLnJlY29yZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnB1YmxpY0RhdGEucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDlhbPpl61sb2FkaW5nXHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIOW9k+i/mOacieaVsOaNruaYr3BhZ2UrK1xyXG5cdFx0XHRcdFx0aWYgKHJkYXRhLnJlY29yZHMubGVuZ3RoID09PSB0aGlzLmxpc3RRdWVyeS5saW1pdCAmJiByZGF0YS50b3RhbCAhPT0gdGhpcy5saXN0UXVlcnkubGltaXQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5saXN0UXVlcnkucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25SZWZyZXNoKCkge1xyXG5cdFx0XHRcdC8vIHRoaXMucG9sbHV0RGF0YSA9IFtdO1xyXG5cdFx0XHRcdC8vIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5sYXdFeGFtaW5le1xyXG5cdFx0LnJlZnJlc2hib3h7XHJcblx0XHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDEwNnB4KTtcclxuXHRcdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdH1cclxuXHRcdC5saW5ldHdve1xyXG5cdFx0XHQvLyB3aWR0aDogODUlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR9XHJcblx0XHQudGV4dC1lbGxpcHNpc3tcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdH1cclxuXHRcdC5zd2NtX3lkemZ0aW1le1xyXG5cdFx0XHR3aWR0aDogNDAlO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQuaW50by1tYXAge1xyXG5cdFx0Y29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cclxuXHQuYXJvdW5kLXdyYXBwZXIge1xyXG5cdFx0bWFyZ2luOiAwIDI1cHg7XHJcblx0XHRwYWRkaW5nOiA4cHggMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xyXG5cclxuXHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Lm5hbWUge1xyXG5cdFx0XHQvLyBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmRlcyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0Ly8gcGFkZGluZy1sZWZ0OiAyN3B4O1xyXG5cdFx0XHRjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGF3RXhhbWluZVwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmgpXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnRvcFRpdGxlICsgXCLmg4XlhrVcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnRvLW1hcFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0ZpbHRlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnrZvpgIlcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfYyhcImFyZWFGaWx0ZXJcIiwge1xuICAgICAgICBhdHRyczogeyBpc1Nob3c6IF92bS5zaG93RmlsdGVyIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgZ2V0RmlsdGVyOiBfdm0uZ2V0RGl2aXNpb24sXG4gICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zaG93RmlsdGVyID0gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICBhdHRyczogeyBzaGFwZTogXCJyb3VuZFwiLCBwbGFjZWhvbGRlcjogXCJcIiB9LFxuICAgICAgICBvbjogeyBzZWFyY2g6IF92bS5vblJlZnJlc2ggfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVmcmVzaGJveFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmFuLXB1bGwtcmVmcmVzaFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjogeyByZWZyZXNoOiBfdm0ub25SZWZyZXNoIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWZyZXNoaW5nLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ucmVmcmVzaGluZyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWZyZXNoaW5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1saXN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQ6IF92bS5maW5pc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgXCJmaW5pc2hlZC10ZXh0XCI6IFwi5rKh5pyJ5pu05aSa5LqGXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW1tZWRpYXRlLWNoZWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDUwLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5vbkxvYWQgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnB1YmxpY0RhdGEsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcm91bmQtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5ldHdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29EZXRhaWwoaXRlbSwgXCLmiafms5Xmo4Dmn6VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE2cHhcIiwgXCJtYXJnaW4tcmlnaHRcIjogXCI3cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/lhazlj7gucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNjAlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZSB0ZXh0LWVsbGlwc2lzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLmVudE5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXMgdGV4dC1lbGxpcHNpc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tc2cpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzd2NtX3lkemZ0aW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGltZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0Jztcbi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPT0geCAmJiB5ICE9PSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSBpc051bGxPclVuZGVmaW5lZChyZWdleHApID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxhd0V4YW1pbmUgLnJlZnJlc2hib3hbZGF0YS12LWQ5MTVkOTgyXSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDZweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubGF3RXhhbWluZSAubGluZXR3b1tkYXRhLXYtZDkxNWQ5ODJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubGF3RXhhbWluZSAudGV4dC1lbGxpcHNpc1tkYXRhLXYtZDkxNWQ5ODJdIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5sYXdFeGFtaW5lIC5zd2NtX3lkemZ0aW1lW2RhdGEtdi1kOTE1ZDk4Ml0ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmludG8tbWFwW2RhdGEtdi1kOTE1ZDk4Ml0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5hcm91bmQtd3JhcHBlcltkYXRhLXYtZDkxNWQ5ODJdIHtcXG4gIG1hcmdpbjogMCAyNXB4O1xcbiAgcGFkZGluZzogOHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjA1KTtcXG59XFxuLmFyb3VuZC13cmFwcGVyW2RhdGEtdi1kOTE1ZDk4Ml06bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWVbZGF0YS12LWQ5MTVkOTgyXSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFyb3VuZC13cmFwcGVyIC5kZXNbZGF0YS12LWQ5MTVkOTgyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGUzZmVjMzJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTE1ZDk4MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiODY3MjA1MWFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1kOTE1ZDk4MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZ1U1VSQlZGaUY3VmRiaW9Rd0VLeGU5Rnlya0ZzWmlJTGVTcGg0cmdpOUh5YmlxRWttK0pxUExaaWYwZTZxZFBvbDhERG9xQU1oVFFHZ0FLRDdOdGUzQ0JEU0ZHQlNsbmpoalp1K3plc1VYOW5IaEFCbVVuNTdyRUU4Z0VtQjZUZUZQQ2hnY1VxQVZ5ZWRTQnNYY2l0UXBaTHZDaERWK01MZUtRRXNTYy9DbTRDWjNKRVNOd0J3TnFsWEFGdzJkMWw1RmVFYVAzY1JmYTJBYUJuYXZOaUNlRWl0K1dRQlV5bHVTbkFDSDI2aWNRRTIrMU9ZQ2xHTm5OSVJyOGtCSmlXa2VVU0FCbkVKUUlOSmlXcmttSkI0RXJvNXNJS3ZPZG4vdFpDbXR2TkJDV25ndTVKZ0JPdzhlTzM5UkRWeXlMWnY4N3J2TWdKeEU0cEdOQW1GTkkzbnNRN1pMb1VJYWVDTFJ2UUt6cWgxNjZNVzFjaDJ3czQrSCsrRWp3dTRyQlhQZHBIM2pyVGlBb3U3OU5vRjNvc0tzRld3dXh1RWxwU1FYWktBR05FWmRvOG40YitBZWRiUGZYK3hEU2ZBZlVPRWJTZi9BSEhwY29TQXpUcCtGM1RmWldWbUZRMW5yVmdmSXozSzErQVBPVFBRZE4rd0xXVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOTE1ZDk4MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTE1ZDk4MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZDkxNWQ5ODImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkOTE1ZDk4MlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkOTE1ZDk4MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkOTE1ZDk4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkOTE1ZDk4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5MTVkOTgyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q5MTVkOTgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL2xhd0V4YW1pbmVMaXN0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWQ5MTVkOTgyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5MTVkOTgyJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==