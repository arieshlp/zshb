(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "wasteDetail",
  components: {},
  data: function data() {
    return {
      currentDate: new Date(),
      timePop: false,
      showMore: true,
      yearSelect: null,
      yearColumns: [],
      toyear: new Date().getFullYear(),
      entName: "",
      tzdetail: [],
      total: 0,
      ldList: [],
      loading: false,
      finished: false,
      // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false,
      // 下拉状态
      listQuery: {
        page: 1,
        // 当前页码数
        limit: 6 // 一页显示10条

      },
      from_type: ""
    };
  },
  mounted: function mounted() {
    this.entName = this.$route.query.name;
    this.from_type = this.$route.query.from;
    this.loadDetail();
    this.loadData();
    this.yearData();
  },
  methods: {
    //年数据
    yearData: function yearData() {
      // 获取默认显示的时间
      var nowTime = new Date();
      var year = nowTime.getFullYear();
      var month = nowTime.getMonth();
      var day = nowTime.getDate(); // 循环数组 填写最小时间和最大时间范围

      for (var i = 2010; i < 2099; i++) {
        this.yearColumns.push(i);
      } // 格式化时间并截取


      var years = this.formatDate(new Date(year, month, day));
      var Year = years.slice(0, 4); // 将截取的年份赋值给绑定值 用于点击弹出日期窗口后显示当前的时间

      this.yearSelect = this.yearColumns.indexOf(Number(Year));
    },
    //日期格式
    formatDate: function formatDate(date) {
      return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
    },
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.toyear = value.toString();
      this.timePop = false;
      this.loadDetail();
    },
    loadDetail: function loadDetail() {
      var _this = this;

      var info = {// year:this.toyear
      };

      if (this.from_type == '污染源') {
        info.entId = this.$route.query.id;
      } else {
        info.gfId = this.$route.query.id;
      }

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_7__["wasteDetail"])(info).then(function (res) {
        if (res.code == 200) {
          _this.tzdetail = res.data;
        }
      });
    },
    loadData: function loadData() {
      var _this2 = this;

      var info = {
        entName: this.$route.query.name,
        // divisionName: this.$route.query.xzqh,
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_7__["entTransList"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data; // 是否是第一次进入页面page==1 直接赋值

          if (_this2.listQuery.page == 1) {
            _this2.ldList = rdata.records;
          } else {
            // 如果不是则在后面追加数据，
            rdata.records.forEach(function (item) {
              _this2.ldList.push(item);
            });
          } // 关闭loading


          _this2.loading = false; // 当还有数据是page++

          if (rdata.records.length === _this2.listQuery.limit && rdata.total !== _this2.listQuery.limit) {
            _this2.listQuery.page++;
            _this2.loading = false;
          } else {
            _this2.finished = true;
          } // this.ldList = res.data.records;


          _this2.total = res.data.total;
        }
      });
    },
    onLoad: function onLoad() {
      var _this3 = this;

      setTimeout(function () {
        _this3.loadData();
      }, 1000);
    },
    onRefresh: function onRefresh() {
      var _this4 = this;

      // this.pollutData = [];
      // this.loading = true;
      setTimeout(function () {
        _this4.listQuery.page = 1;

        _this4.loadData();

        _this4.refreshing = false;
      }, 500);
    },
    ldDetail: function ldDetail(item) {
      this.$router.push({
        name: "ldDetail",
        query: {
          id: item.transId,
          title: "企业联单详情"
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wasteDetail", staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "危险废物信息详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticStyle: { height: "calc(100vh - 9vh)", "overflow-y": "auto" } },
        [
          _c("div", { staticClass: "qr_title" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../assets/polluter/company.png */ "./src/assets/polluter/company.png") },
            }),
            _c("span", [_vm._v(_vm._s(_vm.entName))]),
          ]),
          _c(
            "div",
            {
              staticClass: "company-info",
              class: _vm.showMore ? "moreheight" : "",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("危险废物产生台账")]),
                _c("span", { staticClass: "title_tips brown_tips" }, [
                  _vm._v(_vm._s(_vm.tzdetail.length) + "种危险废物"),
                ]),
              ]),
              _vm._l(_vm.tzdetail, function (itemgf, index) {
                return [
                  _c(
                    "div",
                    {
                      staticClass: "online_yellow",
                      staticStyle: { height: "auto" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "line-height": "normal",
                            padding: "4px 0",
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(index + 1) + "." + _vm._s(itemgf.wasteName)
                          ),
                        ]
                      ),
                      _c("span"),
                    ]
                  ),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "third_width no_bottom" }, [
                      _c("span", [_vm._v("产生量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.product) + " 吨")]),
                    ]),
                    _c("div", { staticClass: "third_width no_bottom" }, [
                      _c("span", [_vm._v("自行利用量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.use) + " 吨")]),
                    ]),
                    _c("div", { staticClass: "third_width no_bottom" }, [
                      _c("span", [_vm._v("总自行处置量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.manage) + " 吨")]),
                    ]),
                  ]),
                  _c("div", { staticClass: "bulid_main_hr" }),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("委托利用量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.wtUse) + " 吨")]),
                    ]),
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("委托处置量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.wtManage) + "吨")]),
                    ]),
                  ]),
                  _c("div", { staticClass: "bulid_main_hr" }),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("上年度末本单位实际贮存量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.storageLast) + " 吨")]),
                    ]),
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("本年末本单位实际贮存量")]),
                      _c("span", [_vm._v(_vm._s(itemgf.storage) + " 吨")]),
                    ]),
                  ]),
                ]
              }),
            ],
            2
          ),
          _vm.tzdetail.length > 0
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: {
                    margin: "0px 10px 6px",
                    "text-align": "center",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.getMore()
                    },
                  },
                },
                [
                  _c("span", { staticClass: "more" }, [
                    _vm._v(_vm._s(_vm.showMore ? "查看更多" : "收起")),
                  ]),
                ]
              )
            : _vm._e(),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("危险废物转移联单")]),
                _c("span", { staticClass: "title_tips brown_tips" }, [
                  _vm._v("（" + _vm._s(_vm.total) + "份）联单"),
                ]),
              ]),
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
                            "finished-text":
                              _vm.ldList.length === 0 ? "" : "没有更多了",
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
                        _vm._l(_vm.ldList, function (item) {
                          return _c("span", [
                            _c("div", { staticClass: "online_yellow" }, [
                              _c("span", [_vm._v(_vm._s(item.transNo))]),
                              _c(
                                "span",
                                { staticClass: "yellow_right_black" },
                                [_vm._v(_vm._s(item.transTime))]
                              ),
                            ]),
                            _c("div", { staticStyle: { display: "flex" } }, [
                              _c(
                                "span",
                                {
                                  staticClass: "title_tips green_tips",
                                  staticStyle: { "margin-left": "auto" },
                                },
                                [_vm._v("已接收")]
                              ),
                            ]),
                            _c(
                              "div",
                              {
                                staticClass: "main_content",
                                staticStyle: { "margin-top": "-20px" },
                              },
                              [
                                _c("div", { staticClass: "whole_width" }, [
                                  _c("span", [_vm._v("运输单位")]),
                                  _c("span", [
                                    _vm._v(_vm._s(item.transEntName)),
                                  ]),
                                ]),
                                _c(
                                  "div",
                                  { staticClass: "whole_width no_bottom" },
                                  [
                                    _c("span", [_vm._v("接收单位")]),
                                    _c("span", [
                                      _vm._v(_vm._s(item.recvEntName)),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                            _c(
                              "div",
                              {
                                staticClass: "company-info",
                                staticStyle: {
                                  display: "flex",
                                  "margin-top": "0px",
                                },
                              },
                              [
                                _c("span", { staticClass: "waste_type" }, [
                                  _vm._v("转移类型：" + _vm._s(item.transType)),
                                ]),
                                _c(
                                  "span",
                                  {
                                    staticClass: "waste_detail",
                                    on: {
                                      click: function ($event) {
                                        return _vm.ldDetail(item)
                                      },
                                    },
                                  },
                                  [_vm._v("详情 >")]
                                ),
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
            ]
          ),
        ]
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.timePop,
            callback: function ($$v) {
              _vm.timePop = $$v
            },
            expression: "timePop",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              "show-toolbar": "",
              columns: _vm.yearColumns,
              title: "选择年",
              "default-index": _vm.yearSelect,
            },
            on: {
              confirm: _vm.onConfirmEndTime,
              cancel: function ($event) {
                _vm.timePop = false
              },
            },
          }),
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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


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

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lawExamine .refreshbox[data-v-1c4294ec] {\n  height: 220px;\n  overflow-y: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".moreheight[data-v-1c4294ec] {\n  max-height: 284px;\n  overflow: hidden;\n}\n.waste_type[data-v-1c4294ec] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 35px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: 20px;\n  padding-top: 6px;\n}\n.waste_detail[data-v-1c4294ec] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 35px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: auto;\n  margin-right: 20px;\n  padding-top: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("16fa6df2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a72192f0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/company.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/company.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFzSURBVCiRlZC/S1tRFMc/5973ErV2UGw62MlVipuhEAjiK7gUujo4OHV1E5oEFEkF/RvcO7ZbWwKCqJsU/QNcaymaQUlI3r3vdGgSnq8v0H6ne358zvmeK+TozY5OdWPXANloNYMXeT1BNvG65ta7sT8EmQe6edAjcKXRW7TeHimUxzWnJQBRLd4H2R7GKXVU7YIxvtzp2+OzA7kfFsyA38yB/lRsv6TK58nQt6O6O1+t+3cpcLwsYkZP5ZWo7j66EfjVagalYRDV3E/giXr1eV7S4LOo5jR7o1ixJH+Daas3M6EttpqBzIS2CPwA9Ote4bLVDESUjXEb59rOf4vqjrbzAHNAHDV6L0nsVdZKGnwQ9INCX6CgyEegYLqF62TCraCmArqXB04r8h5gMH0aiH3Ac0F2gNlxGwOUasZRHITxU5+Y6mhczuf8l0RP2Tq9ebvmkrCYLRrUL82eXHy/qy6PbJm4Vyl9+iJ6wm3W/z/o7jdHZn6ZAuebwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/detail/wasteDetail.vue":
/*!****************************************************!*\
  !*** ./src/views/pollution/detail/wasteDetail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true& */ "./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true&");
/* harmony import */ var _wasteDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasteDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& */ "./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&");
/* harmony import */ var _wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& */ "./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _wasteDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c4294ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/wasteDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=0&id=1c4294ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_0_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=style&index=1&id=1c4294ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_style_index_1_id_1c4294ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/wasteDetail.vue?vue&type=template&id=1c4294ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wasteDetail_vue_vue_type_template_id_1c4294ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3dhc3RlRGV0YWlsLnZ1ZT83NWExIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlPzM0ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlPzBiMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlPzY5ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlP2NmMTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9jb21wYW55LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC93YXN0ZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlP2EyOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlP2FhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlPzAzNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvd2FzdGVEZXRhaWwudnVlPzA2MDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzR0E7QUFHQTtBQUNBLHFCQURBO0FBRUEsZ0JBRkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQSxzQkFKQTtBQUtBLHFCQUxBO0FBTUEsc0NBTkE7QUFPQSxpQkFQQTtBQVFBLGtCQVJBO0FBU0EsY0FUQTtBQVVBLGdCQVZBO0FBV0Esb0JBWEE7QUFZQSxxQkFaQTtBQVlBO0FBQ0EsdUJBYkE7QUFhQTtBQUNBO0FBQ0EsZUFEQTtBQUNBO0FBQ0EsZ0JBRkEsQ0FFQTs7QUFGQSxPQWRBO0FBa0JBO0FBbEJBO0FBb0JBLEdBMUJBO0FBMkJBLFNBM0JBLHFCQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWpDQTtBQWtDQTtBQUNBO0FBQ0EsWUFGQSxzQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBTEEsQ0FNQTs7QUFDQTtBQUNBO0FBQ0EsT0FUQSxDQVVBOzs7QUFDQTtBQUNBLG1DQVpBLENBYUE7O0FBQ0E7QUFDQSxLQWpCQTtBQWtCQTtBQUNBLGNBbkJBLHNCQW1CQSxJQW5CQSxFQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsV0F0QkEscUJBc0JBO0FBQ0E7QUFDQSxLQXhCQTtBQXlCQSxvQkF6QkEsNEJBeUJBLEtBekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3QkE7QUE4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QUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCt6QkFBK2Q7QUFDcmY7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZixpQ0FBaUMsNG1COzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDc0M7QUFDQTs7O0FBR2hHO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3hDZjtBQUFBO0FBQUEsd0NBQWdULENBQWdCLDRVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid2FzdGVEZXRhaWxcIiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi5Y2x6Zmp5bqf54mp5L+h5oGv6K+m5oOFXCJcclxuICAgICAgICAgICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICAgICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvY29tcGFueS5wbmdcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57e2VudE5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiIDpjbGFzcz1cInNob3dNb3JlPydtb3JlaGVpZ2h0JzonJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+5Y2x6Zmp5bqf54mp5Lqn55Sf5Y+w6LSmPC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBicm93bl90aXBzXCI+e3t0emRldGFpbC5sZW5ndGh9feenjeWNsemZqeW6n+eJqTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSA8c3BhbiBjbGFzcz1cImRldGFpbF90aXRsZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O1wiICBAY2xpY2s9XCJ0aW1lUG9wPSB0cnVlXCI+e3t0b3llYXJ9feW5tDwvc3Bhbj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtZ2YsaW5kZXgpIGluIHR6ZGV0YWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfeWVsbG93XCIgc3R5bGU9XCJoZWlnaHQ6IGF1dG87XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDogbm9ybWFsO3BhZGRpbmc6IDRweCAwO1wiPnt7aW5kZXgrMX19Lnt7aXRlbWdmLndhc3RlTmFtZX19PC9zcGFuPjxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5Lqn55Sf6YePPC9zcGFuPjxzcGFuPnt7aXRlbWdmLnByb2R1Y3R9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuiHquihjOWIqeeUqOmHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi51c2V9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuaAu+iHquihjOWkhOe9rumHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi5tYW5hZ2V9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVsaWRfbWFpbl9oclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5aeU5omY5Yip55So6YePPC9zcGFuPjxzcGFuPnt7aXRlbWdmLnd0VXNlfX0g5ZCoPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWnlOaJmOWkhOe9rumHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi53dE1hbmFnZX195ZCoPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1bGlkX21haW5faHJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuS4iuW5tOW6puacq+acrOWNleS9jeWunumZhei0ruWtmOmHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi5zdG9yYWdlTGFzdH19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7mnKzlubTmnKvmnKzljZXkvY3lrp7pmYXotK7lrZjph488L3NwYW4+PHNwYW4+e3tpdGVtZ2Yuc3RvcmFnZX19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwidHpkZXRhaWwubGVuZ3RoPjBcIiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjBweCAxMHB4IDZweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCIgQGNsaWNrPVwiZ2V0TW9yZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57e3Nob3dNb3JlPyfmn6XnnIvmm7TlpJonOifmlLbotbcnfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjo2cHggMTBweCAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj7ljbHpmanlup/nianovaznp7vogZTljZU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0ge3tsZExpc3QubGVuZ3RofX0gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBicm93bl90aXBzXCI+77yIe3t0b3RhbH195Lu977yJ6IGU5Y2VPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIDxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCI+6K+m5oOFID48L3NwYW4+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVmcmVzaGJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZhbi1wdWxsLXJlZnJlc2ggdi1tb2RlbD1cInJlZnJlc2hpbmdcIiBAcmVmcmVzaD1cIm9uUmVmcmVzaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmFuLWxpc3Qgdi1tb2RlbD1cImxvYWRpbmdcIiA6ZmluaXNoZWQ9XCJmaW5pc2hlZFwiIDpmaW5pc2hlZC10ZXh0PVwibGRMaXN0Lmxlbmd0aD09PTA/Jyc6J+ayoeacieabtOWkmuS6hidcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDppbW1lZGlhdGUtY2hlY2s9XCJmYWxzZVwiIEBsb2FkPVwib25Mb2FkXCIgOm9mZnNldD0nNTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1mb3I9XCJpdGVtIGluIGxkTGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib25saW5lX3llbGxvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4+e3tpdGVtLnRyYW5zTm99fTwvc3Bhbj48c3BhbiBjbGFzcz1cInllbGxvd19yaWdodF9ibGFja1wiPnt7aXRlbS50cmFuc1RpbWV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4XCI+PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO1wiPuW3suaOpeaUtjwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwibWFyZ2luLXRvcDogLTIwcHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7ov5DovpPljZXkvY08L3NwYW4+PHNwYW4+e3tpdGVtLnRyYW5zRW50TmFtZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuaOpeaUtuWNleS9jTwvc3Bhbj48c3Bhbj57e2l0ZW0ucmVjdkVudE5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7bWFyZ2luLXRvcDogMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4gY2xhc3M9XCJ3YXN0ZV90eXBlXCI+6L2s56e757G75Z6L77yae3tpdGVtLnRyYW5zVHlwZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4gY2xhc3M9XCJ3YXN0ZV9kZXRhaWxcIiBAY2xpY2s9XCJsZERldGFpbChpdGVtKVwiPuivpuaDhSA+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwib25saW5lX3llbGxvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4+V1QwMDIwMDgxODE0MDA0Mjwvc3Bhbj48c3BhbiBjbGFzcz1cInllbGxvd19yaWdodF9ibGFja1wiPjIwMjAtMDgtMTggMTQ6MjU6MDA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleFwiPjxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBncmVlbl90aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztcIj7lt7LmjqXmlLY8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0yMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6L+Q6L6T5Y2V5L2NPC9zcGFuPjxzcGFuPuabsumdluW4gumTreWdh+i/kOe7tOaciemZkOWFrOWPuDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aCBub19ib3R0b21cIj48c3Bhbj7mjqXmlLbljZXkvY08L3NwYW4+PHNwYW4+5puy6Z2W5biC6ZOt5Z2H6L+Q57u05pyJ6ZmQ5YWs5Y+4PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwiZGlzcGxheTogZmxleDttYXJnaW4tdG9wOiAwcHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8c3BhbiBjbGFzcz1cIndhc3RlX3R5cGVcIj7ovaznp7vnsbvlnovvvJrnnIHlhoXovaznp7s8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8c3BhbiBjbGFzcz1cIndhc3RlX2RldGFpbFwiIEBjbGljaz1cImxkRGV0YWlsXCI+6K+m5oOFID48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmFuLWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3Zhbi1wdWxsLXJlZnJlc2g+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQ8IS0t5pe26Ze0LS0+XHJcblx0XHRcdFx0PHZhbi1wb3B1cCB2LW1vZGVsPVwidGltZVBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0ICAgIDx2YW4tcGlja2VyXHJcblx0XHRcdFx0ICAgICAgICAgICAgc2hvdy10b29sYmFyIDpjb2x1bW5zPVwieWVhckNvbHVtbnNcIlxyXG5cdFx0XHRcdCAgICAgICAgICAgIHRpdGxlPVwi6YCJ5oup5bm0XCIgOmRlZmF1bHQtaW5kZXg9XCJ5ZWFyU2VsZWN0XCJcclxuXHRcdFx0XHQgICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUVuZFRpbWVcIlxyXG5cdFx0XHRcdCAgICAgICAgICAgIEBjYW5jZWw9XCJ0aW1lUG9wPWZhbHNlXCJcclxuXHRcdFx0XHQgICAgLz5cclxuXHRcdFx0XHQ8L3Zhbi1wb3B1cD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuXHRcdHdhc3RlRGV0YWlsLGVudFRyYW5zTGlzdFxyXG5cdH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJ3YXN0ZURldGFpbFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZTpuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWVQb3A6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHNob3dNb3JlOnRydWUsXHJcblx0XHRcdFx0XHRcdFx0eWVhclNlbGVjdDpudWxsLFxyXG5cdFx0XHRcdFx0XHRcdHllYXJDb2x1bW5zOltdLFxyXG5cdFx0XHRcdFx0XHRcdHRveWVhcjpuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0XHRcdFx0ZW50TmFtZTpcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdHR6ZGV0YWlsOltdLFxyXG5cdFx0XHRcdFx0XHRcdHRvdGFsOjAsXHJcblx0XHRcdFx0XHRcdFx0bGRMaXN0OltdLFxyXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGZpbmlzaGVkOiBmYWxzZSwgLy8g5piv5ZCm5bey5Yqg6L295a6M5oiQ77yM5Yqg6L295a6M5oiQ5ZCO5LiN5YaN6Kem5Y+RbG9hZOS6i+S7tlxyXG5cdFx0XHRcdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLCAvLyDkuIvmi4nnirbmgIFcclxuXHRcdFx0XHRcdFx0XHRsaXN0UXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhZ2U6IDEsIC8vIOW9k+WJjemhteeggeaVsFxyXG5cdFx0XHRcdFx0XHRcdFx0bGltaXQ6IDYsIC8vIOS4gOmhteaYvuekujEw5p2hXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmcm9tX3R5cGU6XCJcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblx0XHRcdFx0bW91bnRlZCgpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbnROYW1lID0gdGhpcy4kcm91dGUucXVlcnkubmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuZnJvbV90eXBlID0gdGhpcy4kcm91dGUucXVlcnkuZnJvbTtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERldGFpbCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0XHRcdFx0dGhpcy55ZWFyRGF0YSgpO1xyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cdFx0XHRcdCAvL+W5tOaVsOaNrlxyXG5cdFx0XHRcdFx0IHllYXJEYXRhKCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOiOt+WPlum7mOiupOaYvuekuueahOaXtumXtFxyXG5cdFx0XHRcdFx0XHRcdHZhciBub3dUaW1lID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcdFx0bGV0IHllYXIgPSBub3dUaW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHRcdGxldCBtb250aCA9IG5vd1RpbWUuZ2V0TW9udGgoKTtcclxuXHRcdFx0XHRcdFx0bGV0IGRheSA9IG5vd1RpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHQvLyDlvqrnjq/mlbDnu4Qg5aGr5YaZ5pyA5bCP5pe26Ze05ZKM5pyA5aSn5pe26Ze06IyD5Zu0XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAyMDEwOyBpIDwgMjA5OTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnllYXJDb2x1bW5zLnB1c2goaSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5qC85byP5YyW5pe26Ze05bm25oiq5Y+WXHJcblx0XHRcdFx0XHRcdHZhciB5ZWFycyA9IHRoaXMuZm9ybWF0RGF0ZSggbmV3IERhdGUoeWVhciwgbW9udGggLGRheSkpO1xyXG5cdFx0XHRcdFx0XHR2YXIgWWVhciA9IHllYXJzLnNsaWNlKDAsNCk7XHJcblx0XHRcdFx0XHRcdC8vIOWwhuaIquWPlueahOW5tOS7vei1i+WAvOe7mee7keWumuWAvCDnlKjkuo7ngrnlh7vlvLnlh7rml6XmnJ/nqpflj6PlkI7mmL7npLrlvZPliY3nmoTml7bpl7RcclxuXHRcdFx0XHRcdFx0dGhpcy55ZWFyU2VsZWN0ID0gdGhpcy55ZWFyQ29sdW1ucy5pbmRleE9mKE51bWJlcihZZWFyKSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly/ml6XmnJ/moLzlvI9cclxuXHRcdFx0XHRcdGZvcm1hdERhdGUoZGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSsxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Z2V0TW9yZSgpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dNb3JlID0gIXRoaXMuc2hvd01vcmVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbkNvbmZpcm1FbmRUaW1lKHZhbHVlKSB7XHJcblx0XHRcdFx0XHQgICAgdGhpcy50b3llYXIgPSB2YWx1ZS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0ICAgIHRoaXMudGltZVBvcCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubG9hZERldGFpbCgpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxvYWREZXRhaWwoKXtcclxuXHRcdFx0XHRcdFx0bGV0IGluZm8gPSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8geWVhcjp0aGlzLnRveWVhclxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHRoaXMuZnJvbV90eXBlPT0n5rGh5p+T5rqQJyl7XHJcblx0XHRcdFx0XHRcdFx0aW5mby5lbnRJZD10aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0aW5mby5nZklkPXRoaXMuJHJvdXRlLnF1ZXJ5LmlkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHdhc3RlRGV0YWlsKGluZm8pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRcdFx0aWYocmVzLmNvZGU9PTIwMCl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnR6ZGV0YWlsID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxvYWREYXRhKCl7XHJcblx0XHRcdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdGVudE5hbWU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0Ly8gZGl2aXNpb25OYW1lOiB0aGlzLiRyb3V0ZS5xdWVyeS54enFoLFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0cGFnZVNpemU6IHRoaXMubGlzdFF1ZXJ5LmxpbWl0LFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVudFRyYW5zTGlzdChpbmZvKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0XHRcdGlmKHJlcy5jb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDmmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXpobXpnaJwYWdlPT0xIOebtOaOpei1i+WAvFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmxkTGlzdCA9IHJkYXRhLnJlY29yZHM7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDlpoLmnpzkuI3mmK/liJnlnKjlkI7pnaLov73liqDmlbDmja7vvIxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmRhdGEucmVjb3Jkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubGRMaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g5YWz6ZetbG9hZGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDlvZPov5jmnInmlbDmja7mmK9wYWdlKytcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZGF0YS5yZWNvcmRzLmxlbmd0aCA9PT0gdGhpcy5saXN0UXVlcnkubGltaXQgJiYgcmRhdGEudG90YWwgIT09IHRoaXMubGlzdFF1ZXJ5LmxpbWl0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubGlzdFF1ZXJ5LnBhZ2UrKztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMubGRMaXN0ID0gcmVzLmRhdGEucmVjb3JkcztcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudG90YWwgPSByZXMuZGF0YS50b3RhbDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9uUmVmcmVzaCgpIHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5wb2xsdXREYXRhID0gW107XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPSAxO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZERldGFpbChpdGVtKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcImxkRGV0YWlsXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVyeTp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkOml0ZW0udHJhbnNJZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLkvIHkuJrogZTljZXor6bmg4VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQubGF3RXhhbWluZXtcclxuXHRcdC5yZWZyZXNoYm94e1xyXG5cdFx0XHQvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NHB4KTtcclxuXHRcdFx0aGVpZ2h0OiAyMjBweDtcclxuXHRcdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcblx0PC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5tb3JlaGVpZ2h0e1xyXG5cdFx0bWF4LWhlaWdodDogMjg0cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuICAgIC53YXN0ZV90eXBle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICB9XHJcbiAgICAud2FzdGVfZGV0YWlse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwid2FzdGVEZXRhaWxcIiwgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLljbHpmanlup/niankv6Hmga/or6bmg4VcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCJjYWxjKDEwMHZoIC0gOXZoKVwiLCBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJxcl90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL2NvbXBhbnkucG5nXCIpIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50TmFtZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zaG93TW9yZSA/IFwibW9yZWhlaWdodFwiIDogXCJcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLljbHpmanlup/niankuqfnlJ/lj7DotKZcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50emRldGFpbC5sZW5ndGgpICsgXCLnp43ljbHpmanlup/nialcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnR6ZGV0YWlsLCBmdW5jdGlvbiAoaXRlbWdmLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm9ubGluZV95ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGluZGV4ICsgMSkgKyBcIi5cIiArIF92bS5fcyhpdGVtZ2Yud2FzdGVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Lqn55Sf6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1nZi5wcm9kdWN0KSArIFwiIOWQqFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLoh6rooYzliKnnlKjph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbWdmLnVzZSkgKyBcIiDlkKhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC76Ieq6KGM5aSE572u6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1nZi5tYW5hZ2UpICsgXCIg5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1bGlkX21haW5faHJcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aeU5omY5Yip55So6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1nZi53dFVzZSkgKyBcIiDlkKhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlp5TmiZjlpITnva7ph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbWdmLnd0TWFuYWdlKSArIFwi5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1bGlkX21haW5faHJcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LiK5bm05bqm5pyr5pys5Y2V5L2N5a6e6ZmF6LSu5a2Y6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1nZi5zdG9yYWdlTGFzdCkgKyBcIiDlkKhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmnKzlubTmnKvmnKzljZXkvY3lrp7pmYXotK7lrZjph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbWdmLnN0b3JhZ2UpICsgXCIg5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0udHpkZXRhaWwubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAxMHB4IDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZSgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmUgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y2x6Zmp5bqf54mp6L2s56e76IGU5Y2VXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBicm93bl90aXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi77yIXCIgKyBfdm0uX3MoX3ZtLnRvdGFsKSArIFwi5Lu977yJ6IGU5Y2VXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlZnJlc2hib3hcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1wdWxsLXJlZnJlc2hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJlZnJlc2g6IF92bS5vblJlZnJlc2ggfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWZyZXNoaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZnJlc2hpbmcgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZnJlc2hpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQ6IF92bS5maW5pc2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbmlzaGVkLXRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sZExpc3QubGVuZ3RoID09PSAwID8gXCJcIiA6IFwi5rKh5pyJ5pu05aSa5LqGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbW1lZGlhdGUtY2hlY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgbG9hZDogX3ZtLm9uTG9hZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmcgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubGRMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV95ZWxsb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS50cmFuc05vKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ5ZWxsb3dfcmlnaHRfYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnRyYW5zVGltZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiZmxleFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBncmVlbl90aXBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5bey5o6l5pS2XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCItMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L+Q6L6T5Y2V5L2NXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50cmFuc0VudE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6l5pS25Y2V5L2NXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucmVjdkVudE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3YXN0ZV90eXBlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIui9rOenu+exu+Wei++8mlwiICsgX3ZtLl9zKGl0ZW0udHJhbnNUeXBlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3YXN0ZV9kZXRhaWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sZERldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4UgPlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRpbWVQb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0udGltZVBvcCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGltZVBvcFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgY29sdW1uczogX3ZtLnllYXJDb2x1bW5zLFxuICAgICAgICAgICAgICB0aXRsZTogXCLpgInmi6nlubRcIixcbiAgICAgICAgICAgICAgXCJkZWZhdWx0LWluZGV4XCI6IF92bS55ZWFyU2VsZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1FbmRUaW1lLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGltZVBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGF3RXhhbWluZSAucmVmcmVzaGJveFtkYXRhLXYtMWM0Mjk0ZWNdIHtcXG4gIGhlaWdodDogMjIwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb3JlaGVpZ2h0W2RhdGEtdi0xYzQyOTRlY10ge1xcbiAgbWF4LWhlaWdodDogMjg0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ud2FzdGVfdHlwZVtkYXRhLXYtMWM0Mjk0ZWNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG59XFxuLndhc3RlX2RldGFpbFtkYXRhLXYtMWM0Mjk0ZWNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE2ZmE2ZGYyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2FzdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWM0Mjk0ZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImE3MjE5MmYwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2FzdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MWM0Mjk0ZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQVFDQVlBQUFBbWxFNDZBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGelNVUkJWQ2lSbFpDL1MxdFJGTWMvNTk3M0VyVjJVR3c2Mk1sVmlwdWhFQWppSzdnVXVqbzRPSFYxRTVvRUZFa0YvUnZjTzdaYld3S0NxSnNVL1FOY2F5bWFRVWxJM3IzdmRHZ1NucTh2MEg2bmUzNTh6dm1lSytUb3pZNU9kV1BYQU5sb05ZTVhlVDFCTnZHNjV0YTdzVDhFbVFlNmVkQWpjS1hSVzdUZUhpbVV4elduSlFCUkxkNEgyUjdHS1hWVTdZSXh2dHpwMitPekE3a2ZGc3lBMzh5Qi9sUnN2NlRLNThuUXQ2TzZPMSt0KzNjcGNMd3NZa1pQNVpXbzdqNjZFZmpWYWdhbFlSRFYzRS9naVhyMWVWN1M0TE9vNWpSN28xaXhKSCtEYWFzM002RXR0cHFCeklTMkNQd0E5T3RlNGJMVkRFU1VqWEViNTlyT2Y0dnFqcmJ6QUhOQUhEVjZMMG5zVmRaS0dud1E5SU5DWDZDZ3lFZWdZTHFGNjJUQ3JhQ21BcnFYQjA0cjhoNWdNSDBhaUgzQWMwRjJnTmx4R3dPVWFzWlJISVR4VTUrWTZtaGN6dWY4bDBSUDJUcTllYnZta3JDWUxSclVMODJlWEh5L3F5NlBiSm00VnlsOStpSjZ3bTNXL3ovbzdqZEhabjZaQXVlYnd3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3dhc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzQyOTRlYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dhc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vd2FzdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MWM0Mjk0ZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYzQyOTRlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzQyOTRlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzQyOTRlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzQyOTRlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2FzdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNDI5NGVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjNDI5NGVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC93YXN0ZURldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYzQyOTRlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzQyOTRlYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=