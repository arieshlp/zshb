(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      problemObj: {},
      timeList: [],
      unitList: [],
      searchValue: null,
      model1: null,
      model2: null,
      activeNames: 1,
      options1: [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }],
      list: [],
      type: ""
    };
  },
  mounted: function mounted() {
    this.getProblem();
    this.getTime();
    this.getUnit();
    this.getList();
  },
  watch: {
    searchValue: function searchValue() {
      this.getList();
    },
    model1: function model1() {
      this.getList();
    }
  },
  methods: {
    toDetail: function toDetail(data) {
      this.$router.push({
        name: "correctionTaskDetail",
        query: {
          objectParam: JSON.stringify(data)
        }
      });
    },
    checkAll: function checkAll(data) {
      this.type = data;
      this.getList();
    },
    getTime: function getTime() {
      var _this = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_1__["timeGroup"])().then(function (res) {
        _this.timeList = res.data;
      });
    },
    getProblem: function getProblem() {
      var _this2 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_1__["problem"])().then(function (res) {
        _this2.problemObj = res.data;
      });
    },
    getUnit: function getUnit() {
      var _this3 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_1__["unit"])().then(function (res) {
        _this3.unitList = res.data;
      });
    },
    getList: function getList() {
      var _this4 = this;

      var params = {
        keyWords: this.searchValue,
        leadAcceptanceUnit: this.model1,
        rectificationDeadline: this.type
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_1__["problemList"])(params).then(function (res) {
        _this4.list = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "100vh" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "督查整改任务列表", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "correction-container" }, [
        _c(
          "div",
          { staticClass: "correction-top" },
          [
            _c("van-search", {
              attrs: {
                shape: "round",
                background: "#F4F3FE",
                placeholder: "请输入关键字进行模糊搜索",
              },
              model: {
                value: _vm.searchValue,
                callback: function ($$v) {
                  _vm.searchValue = $$v
                },
                expression: "searchValue",
              },
            }),
          ],
          1
        ),
        _c("div", { staticClass: "correction-content" }, [
          _c("div", { staticClass: "content-top" }, [
            _c(
              "div",
              {
                staticClass: "top-left",
                on: {
                  click: function ($event) {
                    return _vm.checkAll("")
                  },
                },
              },
              [
                _c("span", { staticClass: "text" }, [
                  _vm._v("督查报告整改任务"),
                ]),
                _c("span", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.problemObj.sum)),
                ]),
                _c("span", { staticClass: "text1" }, [_vm._v("件")]),
              ]
            ),
            _c("div", { staticClass: "top-right" }, [
              _c("span", { staticClass: "text" }, [_vm._v("已完成")]),
              _c("span", { staticClass: "num" }, [
                _vm._v(_vm._s(_vm.problemObj.resolved)),
              ]),
              _c("span", { staticClass: "text1" }, [_vm._v("件")]),
            ]),
          ]),
          _c(
            "div",
            { staticClass: "content-content" },
            [
              _c("div", {
                staticClass: "round",
                staticStyle: { "margin-left": "-13%" },
              }),
              _c(
                "van-divider",
                { staticClass: "divider", attrs: { dashed: "" } },
                [_vm._v("整改时限")]
              ),
              _c("div", {
                staticClass: "round",
                staticStyle: { "margin-right": "-13%" },
              }),
            ],
            1
          ),
          _c("div", { staticClass: "content-bottom" }, [
            _c(
              "div",
              {
                staticClass: "bottom-box-item",
                on: {
                  click: function ($event) {
                    return _vm.checkAll(_vm.timeList[0].RECTIFICATION_DEADLINE)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-bottom-top" }, [
                  _vm._m(0),
                  _c("div", { staticClass: "top-text" }, [
                    _c("span", [_vm._v(_vm._s(_vm.timeList[0].COUNT))]),
                    _c("span", { staticClass: "text" }, [_vm._v("件")]),
                  ]),
                ]),
                _c("div", { staticClass: "content-bottom-bottom" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.timeList[0].RECTIFICATION_DEADLINE)),
                  ]),
                ]),
              ]
            ),
            _c("div", { staticClass: "box-line" }),
            _c(
              "div",
              {
                staticClass: "bottom-box-item",
                on: {
                  click: function ($event) {
                    return _vm.checkAll(_vm.timeList[1].RECTIFICATION_DEADLINE)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-bottom-top" }, [
                  _vm._m(1),
                  _c("div", { staticClass: "top-text" }, [
                    _c("span", [_vm._v(_vm._s(_vm.timeList[1].COUNT))]),
                    _c("span", { staticClass: "text" }, [_vm._v("件")]),
                  ]),
                ]),
                _c("div", { staticClass: "content-bottom-bottom" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.timeList[1].RECTIFICATION_DEADLINE)),
                  ]),
                ]),
              ]
            ),
            _c("div", { staticClass: "box-line" }),
            _c(
              "div",
              {
                staticClass: "bottom-box-item",
                on: {
                  click: function ($event) {
                    return _vm.checkAll(_vm.timeList[2].RECTIFICATION_DEADLINE)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-bottom-top" }, [
                  _vm._m(2),
                  _c("div", { staticClass: "top-text" }, [
                    _c("span", [_vm._v(_vm._s(_vm.timeList[2].COUNT))]),
                    _c("span", { staticClass: "text" }, [_vm._v("项")]),
                  ]),
                ]),
                _c("div", { staticClass: "content-bottom-bottom" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.timeList[2].RECTIFICATION_DEADLINE)),
                  ]),
                ]),
              ]
            ),
            _c("div", { staticClass: "box-line" }),
            _c(
              "div",
              {
                staticClass: "bottom-box-item",
                on: {
                  click: function ($event) {
                    return _vm.checkAll(_vm.timeList[3].RECTIFICATION_DEADLINE)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-bottom-top" }, [
                  _vm._m(3),
                  _c("div", { staticClass: "top-text" }, [
                    _c("span", [_vm._v(_vm._s(_vm.timeList[3].COUNT))]),
                    _c("span", { staticClass: "text" }, [_vm._v("项")]),
                  ]),
                ]),
                _c("div", { staticClass: "content-bottom-bottom" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.timeList[3].RECTIFICATION_DEADLINE)),
                  ]),
                ]),
              ]
            ),
            _c("div", { staticClass: "box-line" }),
            _c(
              "div",
              {
                staticClass: "bottom-box-item",
                on: {
                  click: function ($event) {
                    return _vm.checkAll(_vm.timeList[4].RECTIFICATION_DEADLINE)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-bottom-top" }, [
                  _vm._m(4),
                  _c("div", { staticClass: "top-text" }, [
                    _c("span", [_vm._v(_vm._s(_vm.timeList[4].COUNT))]),
                    _c("span", { staticClass: "text" }, [_vm._v("项")]),
                  ]),
                ]),
                _c("div", { staticClass: "content-bottom-bottom" }, [
                  _c("span", [
                    _vm._v(_vm._s(_vm.timeList[4].RECTIFICATION_DEADLINE)),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
        _c("div", { staticClass: "correction-bottom" }, [
          _c("div", { staticClass: "bottom-title" }, [
            _c("div", { staticClass: "bottom-title-left" }, [
              _vm._v("任务列表"),
            ]),
            _c(
              "div",
              { staticClass: "bottom-title-right" },
              [
                _c(
                  "el-select",
                  {
                    staticStyle: { width: "160px", "margin-right": "5px" },
                    attrs: {
                      size: "mini",
                      placeholder: "牵头验收单位",
                      clearable: "",
                    },
                    model: {
                      value: _vm.model1,
                      callback: function ($$v) {
                        _vm.model1 = $$v
                      },
                      expression: "model1",
                    },
                  },
                  _vm._l(_vm.unitList, function (item, index) {
                    return _c(
                      "el-option",
                      { key: index, attrs: { value: item } },
                      [_vm._v(_vm._s(item) + " ")]
                    )
                  }),
                  1
                ),
              ],
              1
            ),
          ]),
          _c(
            "div",
            { staticClass: "task-list" },
            [
              _c(
                "van-collapse",
                {
                  attrs: { accordion: "" },
                  model: {
                    value: _vm.activeNames,
                    callback: function ($$v) {
                      _vm.activeNames = $$v
                    },
                    expression: "activeNames",
                  },
                },
                _vm._l(_vm.list, function (item, index) {
                  return _c(
                    "van-collapse-item",
                    {
                      attrs: { name: index + 1, "is-link": false },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function () {
                              return [
                                _c("div", { staticClass: "collapse-title" }, [
                                  _c(
                                    "div",
                                    { staticClass: "collapse-title-left" },
                                    [_vm._v(_vm._s(item.issueType))]
                                  ),
                                  _c(
                                    "div",
                                    { staticClass: "collapse-title-right" },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.activeNames == index + 1
                                              ? "收起"
                                              : "展开"
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        true
                      ),
                    },
                    _vm._l(item.issueList, function (e) {
                      return _c(
                        "div",
                        {
                          staticClass: "collapse-car-item",
                          on: {
                            click: function ($event) {
                              return _vm.toDetail(e)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "car-item-top" }, [
                            _vm._v(_vm._s(e.title)),
                          ]),
                          _c("div", { staticClass: "car-item-bottom" }, [
                            _c("div", { staticClass: "car-item-bottom-left" }, [
                              _c(
                                "span",
                                { staticClass: "car-item-bottom-label" },
                                [_vm._v("整改时限:")]
                              ),
                              _c(
                                "span",
                                { staticClass: "car-item-bottom-value" },
                                [_vm._v(_vm._s(e.rectificationDeadline))]
                              ),
                            ]),
                            _c(
                              "div",
                              { staticClass: "car-item-bottom-right" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "car-item-bottom-label" },
                                  [_vm._v("牵头验收单位:")]
                                ),
                                _c(
                                  "span",
                                  { staticClass: "car-item-bottom-value" },
                                  [_vm._v(_vm._s(e.leadAcceptanceUnit))]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      )
                    }),
                    0
                  )
                }),
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticStyle: {
          width: "15px",
          height: "15px",
          "margin-top": "4px",
          "margin-right": "2px",
        },
        attrs: { src: __webpack_require__(/*! @/assets/pan1.png */ "./src/assets/pan1.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticStyle: {
          width: "15px",
          height: "15px",
          "margin-top": "4px",
          "margin-right": "2px",
        },
        attrs: { src: __webpack_require__(/*! @/assets/pan2.png */ "./src/assets/pan2.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticStyle: {
          width: "15px",
          height: "15px",
          "margin-top": "4px",
          "margin-right": "2px",
        },
        attrs: { src: __webpack_require__(/*! @/assets/pan3.png */ "./src/assets/pan3.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticStyle: {
          width: "15px",
          height: "15px",
          "margin-top": "4px",
          "margin-right": "2px",
        },
        attrs: { src: __webpack_require__(/*! @/assets/pan4.png */ "./src/assets/pan4.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticStyle: {
          width: "15px",
          height: "15px",
          "margin-top": "4px",
          "margin-right": "2px",
        },
        attrs: { src: __webpack_require__(/*! @/assets/pan4.png */ "./src/assets/pan4.png") },
      }),
    ])
  },
]
render._withStripped = true



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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".correction-container[data-v-5132c1e0] {\n  height: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background: #f4f3fe;\n}\n.correction-container .correction-content[data-v-5132c1e0] {\n  overflow: hidden;\n  padding: 10px;\n  background: white;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.correction-container .correction-content .content-top[data-v-5132c1e0] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 10px;\n  background: #ebeeff;\n  height: 40px;\n  align-items: center;\n}\n.correction-container .correction-content .content-top .top-left[data-v-5132c1e0] {\n  margin-left: 10px;\n}\n.correction-container .correction-content .content-top .top-left .text[data-v-5132c1e0] {\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.correction-container .correction-content .content-top .top-left .num[data-v-5132c1e0] {\n  margin-left: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #25396f;\n}\n.correction-container .correction-content .content-top .top-left .text1[data-v-5132c1e0] {\n  font-size: 16px;\n  color: #25396f;\n}\n.correction-container .correction-content .content-top .top-right[data-v-5132c1e0] {\n  margin-right: 30px;\n}\n.correction-container .correction-content .content-top .top-right .text[data-v-5132c1e0] {\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.correction-container .correction-content .content-top .top-right .num[data-v-5132c1e0] {\n  margin-left: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #5271ff;\n}\n.correction-container .correction-content .content-top .top-right .text1[data-v-5132c1e0] {\n  font-size: 16px;\n  color: #5271ff;\n}\n.correction-container .correction-content .content-content[data-v-5132c1e0] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.correction-container .correction-content .content-content .divider[data-v-5132c1e0] {\n  flex: 8;\n}\n.correction-container .correction-content .content-content .round[data-v-5132c1e0] {\n  flex: 1;\n  height: 35px;\n  background: #f4f3fe;\n  border-radius: 50%;\n}\n.correction-container .correction-content .content-bottom[data-v-5132c1e0] {\n  display: flex;\n  align-items: center;\n}\n.correction-container .correction-content .content-bottom .bottom-box-item[data-v-5132c1e0] {\n  width: 20%;\n  text-align: center;\n}\n.correction-container .correction-content .content-bottom .bottom-box-item .content-bottom-top[data-v-5132c1e0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: rgba(37, 57, 111, 0.8);\n}\n.correction-container .correction-content .content-bottom .bottom-box-item .content-bottom-top .top-text .text[data-v-5132c1e0] {\n  font-size: 12px;\n}\n.correction-container .correction-content .content-bottom .bottom-box-item .content-bottom-bottom[data-v-5132c1e0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.correction-container .correction-content .content-bottom .box-line[data-v-5132c1e0] {\n  height: 15px;\n  align-content: center;\n  opacity: 1;\n  border: 1px solid rgba(37, 57, 111, 0.1);\n}\n.correction-container .correction-bottom[data-v-5132c1e0] {\n  width: 100%;\n  height: calc(100% - 305px);\n  box-sizing: border-box;\n}\n.correction-container .correction-bottom .bottom-title[data-v-5132c1e0] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  margin-bottom: 14px;\n}\n.correction-container .correction-bottom .bottom-title .bottom-title-left[data-v-5132c1e0] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.correction-container .correction-bottom .task-list[data-v-5132c1e0] {\n  height: calc(100% - 45px);\n  overflow-y: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".collapse-title {\n  display: flex;\n  justify-content: space-between;\n}\n.collapse-title .collapse-title-left {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n}\n.collapse-title .collapse-title-right {\n  width: 30px;\n  font-size: 12px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: rgba(0, 0, 0, 0.5);\n  margin-left: 10px;\n  text-align: center;\n}\n.collapse-car-item {\n  margin: 5px 0;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 10px 20px rgba(37, 57, 111, 0.05);\n}\n.collapse-car-item .car-item-top {\n  background-color: #fff;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.collapse-car-item .car-item-bottom {\n  background-color: #f8f8f7;\n  padding: 10px;\n  display: flex;\n  font-size: 12px;\n  align-items: center;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.collapse-car-item .car-item-bottom .car-item-bottom-value {\n  color: #25396f;\n}\n.collapse-car-item .car-item-bottom .car-item-bottom-left {\n  width: 40%;\n}\n.collapse-car-item .car-item-bottom .car-item-bottom-right {\n  width: 60%;\n  padding-left: 5px;\n}\n::v-deep .van-collapse-item .van-cell {\n  border-radius: 4px;\n  height: 40px;\n  align-items: center;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background: linear-gradient(90deg, #bfcbff 0%, #f2f5ff 100%);\n  border: 1px solid #cfd7fc;\n}\n::v-deep .van-collapse-item__content {\n  padding: 0px;\n  background: #f4f3fe;\n}\n::v-deep .van-search__content {\n  background-color: #fff;\n}\n.el-select-dropdown,\n.el-popper {\n  width: 160px !important;\n}\n.correction-bottom .van-cell {\n  background: linear-gradient(90deg, #bfcbff 0%, #f2f5ff 100%);\n  border: 1px solid #cfd7fc;\n  border-radius: 4px;\n}\n.van-collapse-item {\n  margin-bottom: 5px;\n}\n.van-collapse-item__content {\n  padding: 0px;\n  background: #f4f3fe;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("708744ea", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("738ffcc7", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/pan1.png":
/*!*****************************!*\
  !*** ./src/assets/pan1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADmSURBVDiNnZJNboMwEEbfOCzqW3AUH8KVsswhGsQOukPhEiwrhUNwFG4xXSS4C0L+LQrfxvLYfvONZyCiba6pz9UB+ExLn2n57l7yHPjc6y4I6Wm4hjqCFAB+/1sg4bs92PIFsM01PZ9xQUhjrgAIUvhMmSBmip8GdrOPHyE3wFTrIl3KGh0MLAcA/kudWZV9ksG9dOGd2vpDYmezgFj/Lw46k0D/HxdRxk9lVwPaynYGQMIKF4ZuXIBjbZulkLayNwDAZjMS5ySBPjE01/3zBZ+riw2WBPpjbZuHWCzT/YAl0Mc++w+Ir1DwZV23XAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/pan2.png":
/*!*****************************!*\
  !*** ./src/assets/pan2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADBSURBVDiNnZLBEYMgEEUfDEkdlkIO6tCFnWg6sQtGPcRSrCOZ0RxUlKhx5F+YXdj3WRY40stGNFYDUNmCyhZ7x8QmU9uMgcjFqSmo7eDigSepcTDlOX7QXvG+ZU5lmSHSbbzJTot9yAow93pFgnwB9FwHTMYyyH1Wj1bnp4DEbKc1SdBYHdyCpJUouqBix3iYcEBs2nEKIuAWknZcABJTXobEZgUAuI3EUwk67pRL+Kt/UxF0JKb0U0dafzBFd/TYX6dtPF2u+oXoAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/pan3.png":
/*!*****************************!*\
  !*** ./src/assets/pan3.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADOSURBVDiNnZLBkcIwDEWfNRSSa5YiUBuZXOgkoRNmGE/aEEUEX1OJsxc77BI8kPybZetJ8hcUNASthqAK4Eft/aj9u3eH14Af9QxUMS4hw80dgH+cOmZ3aY/WrwBD0CpGFKhKXQHg5s6PSoZIjsfI+WPyf8gTkGfdpDSWpOrbAcAtqMqu6kkS0ZUL79T+3F3pzg1Bde8IIpgA057kBdLUthvQ1GZ5DzZDRDBINrZHu26FNLU9AX+JX2gS4ZoPK3s+uDKlbhcV/X1ZsKn02b/6zk7DvLpG0QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/pan4.png":
/*!*****************************!*\
  !*** ./src/assets/pan4.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADGSURBVDiNnZIxEoMgEEX/MkzO4RkSipTeIpTeRHMTS3ILyxQkZ+AcmYybQgSMGiNbMbP73374ACvF+lywVuVwVg1r1SzN0Vx4rABRhAFjG76cOCroSsYGmEw3Aq8yFS9b45q1wggRsfOuNsVTSASMd91VzHXqYD/ALxZZ22OVcnsGoNtjllboeQe5LjoBSJcpBgAIMvdsABnb+RT6HEgH+BjJPNu9EDI2AoY6dP9JewfINoC+279T6d3gNnGytmf6waRbe+wPIMFI2GFTyUsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/correctionTask/index.vue":
/*!********************************************!*\
  !*** ./src/views/correctionTask/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5132c1e0&scoped=true& */ "./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/correctionTask/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& */ "./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5132c1e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/correctionTask/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/correctionTask/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/correctionTask/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=0&id=5132c1e0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5132c1e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5132c1e0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/index.vue?vue&type=template&id=5132c1e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5132c1e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svaW5kZXgudnVlPzhjMGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1qc29uLXJlcGxhY2VyLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZT82ZDkxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9pbmRleC52dWU/MjVlNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svaW5kZXgudnVlPzc2ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZT9jNTliIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhbjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGFuMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYW4zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhbjQucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZT8zMjJmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9pbmRleC52dWU/MDZlZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svaW5kZXgudnVlP2FmNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2luZGV4LnZ1ZT9lOWY3Il0sIm5hbWVzIjpbInF1ZXJ5U2VsZWN0QnlJZCIsImlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRpc2N1c3NTZWxlY3RCeUNhc2VJZCIsInN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkIiwibGVnYWxTZWxlY3RCeUNhc2VJZCIsInNlbGVjdEJ5Q2FzZUlkIiwicHVuaXNoU2VsZWN0QnlDYXNlSWQiLCJnZXRIZWFyaW5nQnlDYXNlSWQiLCJzdGFnZVNlbGVjdEJ5Q2FzZUlkIiwiZ2V0VXNlckluZm8iLCJkYXRhIiwicGFyYW1zIiwiZ2V0VXNlckxpc3QiLCJxdWVyeVR5cGVDYXNlTGlzdCIsImFkZFJlcG9ydCIsImdldFJlcG9ydERldGFpbCIsInNpZ25SZXBvcnQiLCJ0eXBlIiwiY291bnRJbmZvIiwiZ2V0QWxsUmVwb3J0IiwiY2hlY2tQd2QiLCJxdWVyeURpdmlzaW9uIiwiZ2V0U3VwZXJCYXRjaCIsImdldFN1cGVyTGlzdCIsImluZm8iLCJnZXRTdXBlckxpc3REZXRhaWwiLCJib2FyZCIsImNvdW50eUxpc3QiLCJpbmZvTGlzdCIsImJhc2VJbmZvIiwiZGlzdHJpYnV0ZSIsImhhbmRsZSIsImZpbmFsIiwiY29tcGFueSIsInByb2JsZW0iLCJ0aW1lR3JvdXAiLCJ1bml0IiwicHJvYmxlbUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUpBO0FBQ0E7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBO0FBSUEsdUJBSkE7QUFLQSxrQkFMQTtBQU1BLGtCQU5BO0FBT0Esb0JBUEE7QUFRQSxp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QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7QUFDeEI7OztBQUdsRTtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4Q2Y7QUFBQTtBQUFBLHdDQUE4UixDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLnnaPmn6XmlbTmlLnku7vliqHliJfooahcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj4gPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb3JyZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29ycmVjdGlvbi10b3BcIj5cclxuICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoVmFsdWVcIiBzaGFwZT1cInJvdW5kXCIgYmFja2dyb3VuZD1cIiNGNEYzRkVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWFs+mUruWtl+i/m+ihjOaooeeziuaQnOe0olwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvcnJlY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1sZWZ0XCIgQGNsaWNrPVwiY2hlY2tBbGwoJycpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuedo+afpeaKpeWRiuaVtOaUueS7u+WKoTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1cIj57eyBwcm9ibGVtT2JqLnN1bSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0MVwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5bey5a6M5oiQPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7IHByb2JsZW1PYmoucmVzb2x2ZWQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dDFcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtMTMlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8dmFuLWRpdmlkZXIgY2xhc3M9XCJkaXZpZGVyXCIgZGFzaGVkPuaVtOaUueaXtumZkDwvdmFuLWRpdmlkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogLTEzJVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1ib3gtaXRlbVwiIEBjbGljaz1cImNoZWNrQWxsKHRpbWVMaXN0WzBdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJvdHRvbS10b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wYW4xLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgbWFyZ2luLXRvcDogNHB4OyBtYXJnaW4tcmlnaHQ6IDJweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyB0aW1lTGlzdFswXS5DT1VOVCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJvdHRvbS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57eyB0aW1lTGlzdFswXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1pdGVtXCIgQGNsaWNrPVwiY2hlY2tBbGwodGltZUxpc3RbMV0uUkVDVElGSUNBVElPTl9ERUFETElORSlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm90dG9tLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BhbjIucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyBtYXJnaW4tdG9wOiA0cHg7IG1hcmdpbi1yaWdodDogMnB4XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRpbWVMaXN0WzFdLkNPVU5UIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm90dG9tLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7IHRpbWVMaXN0WzFdLlJFQ1RJRklDQVRJT05fREVBRExJTkUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYm94LWl0ZW1cIiBAY2xpY2s9XCJjaGVja0FsbCh0aW1lTGlzdFsyXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3R0b20tdG9wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcGFuMy5wbmdcIiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IG1hcmdpbi10b3A6IDRweDsgbWFyZ2luLXJpZ2h0OiAycHhcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgdGltZUxpc3RbMl0uQ09VTlQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7pobk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3R0b20tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3sgdGltZUxpc3RbMl0uUkVDVElGSUNBVElPTl9ERUFETElORSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1ib3gtaXRlbVwiIEBjbGljaz1cImNoZWNrQWxsKHRpbWVMaXN0WzNdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJvdHRvbS10b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wYW40LnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgbWFyZ2luLXRvcDogNHB4OyBtYXJnaW4tcmlnaHQ6IDJweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyB0aW1lTGlzdFszXS5DT1VOVCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPumhuTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWJvdHRvbS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57eyB0aW1lTGlzdFszXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJveC1pdGVtXCIgQGNsaWNrPVwiY2hlY2tBbGwodGltZUxpc3RbNF0uUkVDVElGSUNBVElPTl9ERUFETElORSlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm90dG9tLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BhbjQucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyBtYXJnaW4tdG9wOiA0cHg7IG1hcmdpbi1yaWdodDogMnB4XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRpbWVMaXN0WzRdLkNPVU5UIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6aG5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm90dG9tLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7IHRpbWVMaXN0WzRdLlJFQ1RJRklDQVRJT05fREVBRExJTkUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29ycmVjdGlvbi1ib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLXRpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLXRpdGxlLWxlZnRcIj7ku7vliqHliJfooag8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tdGl0bGUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGVsLXNlbGVjdCBzaXplPVwibWluaVwiIHYtbW9kZWw9XCJtb2RlbDFcIiBwbGFjZWhvbGRlcj1cIueJteWktOmqjOaUtuWNleS9jVwiIHN0eWxlPVwid2lkdGg6IDE2MHB4OyBtYXJnaW4tcmlnaHQ6IDVweFwiIGNsZWFyYWJsZT5cclxuICAgICAgICAgICAgICA8ZWwtb3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB1bml0TGlzdFwiIDp2YWx1ZT1cIml0ZW1cIiA6a2V5PVwiaW5kZXhcIj57eyBpdGVtIH19IDwvZWwtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L2VsLXNlbGVjdD5cclxuICAgICAgICAgICAgPCEtLSA8ZWwtc2VsZWN0IHNpemU9XCJtaW5pXCIgdi1tb2RlbD1cIm1vZGVsMlwiIHBsYWNlaG9sZGVyPVwi5Yy65Y6/XCIgc3R5bGU9XCJ3aWR0aDogODVweFwiPlxyXG4gICAgICAgICAgICAgIDxlbC1vcHRpb24gdi1mb3I9XCJpdGVtIGluIG9wdGlvbnMxXCIgOnZhbHVlPVwiaXRlbS52YWx1ZVwiIDprZXk9XCJpdGVtLnZhbHVlXCI+e3sgaXRlbS5sYWJlbCB9fTwvZWwtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L2VsLXNlbGVjdD4gLS0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdFwiPlxyXG4gICAgICAgICAgPHZhbi1jb2xsYXBzZSB2LW1vZGVsPVwiYWN0aXZlTmFtZXNcIiBhY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDx2YW4tY29sbGFwc2UtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiIDpuYW1lPVwiaW5kZXggKyAxXCIgOmlzLWxpbms9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDwhLS0g5YaF5a655qCH6aKYIC0tPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlLXRpdGxlLWxlZnRcIj57eyBpdGVtLmlzc3VlVHlwZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UtdGl0bGUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBhY3RpdmVOYW1lcyA9PSBpbmRleCArIDEgPyBcIuaUtui1t1wiIDogXCLlsZXlvIBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgIDwhLS0g5YaF5a65IC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZS1jYXItaXRlbVwiIHYtZm9yPVwiZSBpbiBpdGVtLmlzc3VlTGlzdFwiIEBjbGljaz1cInRvRGV0YWlsKGUpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyLWl0ZW0tdG9wXCI+e3sgZS50aXRsZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhci1pdGVtLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyLWl0ZW0tYm90dG9tLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhci1pdGVtLWJvdHRvbS1sYWJlbFwiPuaVtOaUueaXtumZkDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXItaXRlbS1ib3R0b20tdmFsdWVcIj57eyBlLnJlY3RpZmljYXRpb25EZWFkbGluZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXItaXRlbS1ib3R0b20tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhci1pdGVtLWJvdHRvbS1sYWJlbFwiPueJteWktOmqjOaUtuWNleS9jTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXItaXRlbS1ib3R0b20tdmFsdWVcIj57eyBlLmxlYWRBY2NlcHRhbmNlVW5pdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC92YW4tY29sbGFwc2UtaXRlbT5cclxuICAgICAgICAgIDwvdmFuLWNvbGxhcHNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgdGltZUdyb3VwLCBwcm9ibGVtLCB1bml0LCBwcm9ibGVtTGlzdCB9IGZyb20gXCJAL2FwaS9jYXNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImluZGV4XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2JsZW1PYmo6IHt9LFxyXG4gICAgICB0aW1lTGlzdDogW10sXHJcbiAgICAgIHVuaXRMaXN0OiBbXSxcclxuICAgICAgc2VhcmNoVmFsdWU6IG51bGwsXHJcbiAgICAgIG1vZGVsMTogbnVsbCxcclxuICAgICAgbW9kZWwyOiBudWxsLFxyXG4gICAgICBhY3RpdmVOYW1lczogMSxcclxuICAgICAgb3B0aW9uczE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCLpgInpobkxXCIsXHJcbiAgICAgICAgICBsYWJlbDogXCLpu4Tph5Hns5VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIumAiemhuTJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIuWPjOearuWltlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwi6YCJ6aG5M1wiLFxyXG4gICAgICAgICAgbGFiZWw6IFwi6Jq15LuU54WOXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCLpgInpobk0XCIsXHJcbiAgICAgICAgICBsYWJlbDogXCLpvpnpobvpnaJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIumAiemhuTVcIixcclxuICAgICAgICAgIGxhYmVsOiBcIuWMl+S6rOeDpOm4rVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICB0eXBlOiBcIlwiLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFByb2JsZW0oKTtcclxuICAgIHRoaXMuZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5nZXRVbml0KCk7XHJcbiAgICB0aGlzLmdldExpc3QoKTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzZWFyY2hWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH0sXHJcbiAgICBtb2RlbDE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9EZXRhaWwoZGF0YSkge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJjb3JyZWN0aW9uVGFza0RldGFpbFwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICBvYmplY3RQYXJhbTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tBbGwoZGF0YSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSBkYXRhO1xyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH0sXHJcbiAgICBnZXRUaW1lKCkge1xyXG4gICAgICB0aW1lR3JvdXAoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFByb2JsZW0oKSB7XHJcbiAgICAgIHByb2JsZW0oKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnByb2JsZW1PYmogPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VW5pdCgpIHtcclxuICAgICAgdW5pdCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMudW5pdExpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICBrZXlXb3JkczogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICBsZWFkQWNjZXB0YW5jZVVuaXQ6IHRoaXMubW9kZWwxLFxyXG4gICAgICAgIHJlY3RpZmljYXRpb25EZWFkbGluZTogdGhpcy50eXBlLFxyXG4gICAgICB9O1xyXG4gICAgICBwcm9ibGVtTGlzdChwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmNGYzZmU7XHJcblxyXG4gIC5jb3JyZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAuY29udGVudC10b3Age1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMjM4LCAyNTUsIDEpO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC50b3AtbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudG9wLXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoODIsIDExMywgMjU1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgIGZsZXg6IDg7XHJcbiAgICAgIH1cclxuICAgICAgLnJvdW5kIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmM2ZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYm90dG9tIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmJvdHRvbS1ib3gtaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5jb250ZW50LWJvdHRvbS10b3Age1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjgpO1xyXG4gICAgICAgICAgLnRvcC10ZXh0IHtcclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC1ib3R0b20tYm90dG9tIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJveC1saW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcnJlY3Rpb24tYm90dG9tIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMDVweCk7XHJcbiAgICAvLyBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgLmJvdHRvbS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgLmJvdHRvbS10aXRsZS1sZWZ0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhc2stbGlzdCB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4uY29sbGFwc2UtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuY29sbGFwc2UtdGl0bGUtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgfVxyXG4gIC5jb2xsYXBzZS10aXRsZS1yaWdodCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2UtY2FyLWl0ZW0ge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgLmNhci1pdGVtLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXItaXRlbS1ib3R0b20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDcpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIC5jYXItaXRlbS1ib3R0b20tdmFsdWUge1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICB9XHJcbiAgICAuY2FyLWl0ZW0tYm90dG9tLWxlZnQge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgLmNhci1pdGVtLWJvdHRvbS1yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG46OnYtZGVlcCAudmFuLWNvbGxhcHNlLWl0ZW0gLnZhbi1jZWxsIHtcclxuICAvLyBwYWRkaW5nOiAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxOTEsIDIwMywgMjU1LCAxKSAwJSwgcmdiYSgyNDIsIDI0NSwgMjU1LCAxKSAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNywgMjE1LCAyNTIsIDEpO1xyXG59XHJcbjo6di1kZWVwIC52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDMsIDI1NCk7XHJcbn1cclxuXHJcbi8vIOaQnOe0ouahhuWGhemDqOminOiJsuS/ruaUuVxyXG46OnYtZGVlcCAudmFuLXNlYXJjaF9fY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uZWwtc2VsZWN0LWRyb3Bkb3duLFxyXG4uZWwtcG9wcGVyIHtcclxuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvcnJlY3Rpb24tYm90dG9tIHtcclxuICAudmFuLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE5MSwgMjAzLCAyNTUsIDEpIDAlLCByZ2JhKDI0MiwgMjQ1LCAyNTUsIDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDcsIDIxNSwgMjUyLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi52YW4tY29sbGFwc2UtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNGYzZmU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDB2aFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi552j5p+l5pW05pS55Lu75Yqh5YiX6KGoXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvcnJlY3Rpb24tY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29ycmVjdGlvbi10b3BcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNGNEYzRkVcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXlhbPplK7lrZfov5vooYzmqKHns4rmkJzntKJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoVmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoVmFsdWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvcnJlY3Rpb24tY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtdG9wXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3AtbGVmdFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrQWxsKFwiXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi552j5p+l5oql5ZGK5pW05pS55Lu75YqhXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2JsZW1PYmouc3VtKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dDFcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlt7LlrozmiJBcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2JsZW1PYmoucmVzb2x2ZWQpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQxXCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiLTEzJVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1kaXZpZGVyXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIsIGF0dHJzOiB7IGRhc2hlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuaVtOaUueaXtumZkFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCItMTMlXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tBbGwoX3ZtLnRpbWVMaXN0WzBdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm90dG9tLXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUxpc3RbMF0uQ09VTlQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lTGlzdFswXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxpbmVcIiB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tBbGwoX3ZtLnRpbWVMaXN0WzFdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm90dG9tLXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUxpc3RbMV0uQ09VTlQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lTGlzdFsxXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxpbmVcIiB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tBbGwoX3ZtLnRpbWVMaXN0WzJdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm90dG9tLXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUxpc3RbMl0uQ09VTlQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIumhuVwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lTGlzdFsyXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxpbmVcIiB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tBbGwoX3ZtLnRpbWVMaXN0WzNdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm90dG9tLXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUxpc3RbM10uQ09VTlQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIumhuVwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lTGlzdFszXS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxpbmVcIiB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJveC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tBbGwoX3ZtLnRpbWVMaXN0WzRdLlJFQ1RJRklDQVRJT05fREVBRExJTkUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm90dG9tLXRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUxpc3RbNF0uQ09VTlQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIumhuVwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJvdHRvbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lTGlzdFs0XS5SRUNUSUZJQ0FUSU9OX0RFQURMSU5FKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29ycmVjdGlvbi1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b20tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS10aXRsZS1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLku7vliqHliJfooahcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS10aXRsZS1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZWwtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE2MHB4XCIsIFwibWFyZ2luLXJpZ2h0XCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLnibXlpLTpqozmlLbljZXkvY1cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RlbDEsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2RlbDEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kZWwxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51bml0TGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImVsLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgdmFsdWU6IGl0ZW0gfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pICsgXCIgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFzay1saXN0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBhY2NvcmRpb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWN0aXZlTmFtZXMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZU5hbWVzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWN0aXZlTmFtZXNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBpbmRleCArIDEsIFwiaXMtbGlua1wiOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xsYXBzZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlLXRpdGxlLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5pc3N1ZVR5cGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sbGFwc2UtdGl0bGUtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlTmFtZXMgPT0gaW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIuaUtui1t1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIuWxleW8gFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmlzc3VlTGlzdCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZS1jYXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyLWl0ZW0tdG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZS50aXRsZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXItaXRlbS1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXItaXRlbS1ib3R0b20tbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXItaXRlbS1ib3R0b20tbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pW05pS55pe26ZmQOlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyLWl0ZW0tYm90dG9tLXZhbHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZS5yZWN0aWZpY2F0aW9uRGVhZGxpbmUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXItaXRlbS1ib3R0b20tcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhci1pdGVtLWJvdHRvbS1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIueJteWktOmqjOaUtuWNleS9jTpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyLWl0ZW0tYm90dG9tLXZhbHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlLmxlYWRBY2NlcHRhbmNlVW5pdCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGFuMS5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGFuMi5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGFuMy5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGFuNC5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNHB4XCIsXG4gICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGFuNC5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVwbGFjZXIpIHtcbiAgaWYgKGlzQ2FsbGFibGUocmVwbGFjZXIpKSByZXR1cm4gcmVwbGFjZXI7XG4gIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJldHVybjtcbiAgdmFyIHJhd0xlbmd0aCA9IHJlcGxhY2VyLmxlbmd0aDtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXdMZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gcmVwbGFjZXJbaV07XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09ICdzdHJpbmcnKSBwdXNoKGtleXMsIGVsZW1lbnQpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09ICdudW1iZXInIHx8IGNsYXNzb2YoZWxlbWVudCkgPT09ICdOdW1iZXInIHx8IGNsYXNzb2YoZWxlbWVudCkgPT09ICdTdHJpbmcnKSBwdXNoKGtleXMsIHRvU3RyaW5nKGVsZW1lbnQpKTtcbiAgfVxuICB2YXIga2V5c0xlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgcm9vdCA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChyb290KSB7XG4gICAgICByb290ID0gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHRoaXMpKSByZXR1cm4gdmFsdWU7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzTGVuZ3RoOyBqKyspIGlmIChrZXlzW2pdID09PSBrZXkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGdldFJlcGxhY2VyRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24nKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG52YXIgdGVzdGVyID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA9IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufTtcblxudmFyIGZpeElsbEZvcm1lZCA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKChleGVjKGxvdywgbWF0Y2gpICYmICFleGVjKGhpLCBuZXh0KSkgfHwgKGV4ZWMoaGksIG1hdGNoKSAmJiAhZXhlYyhsb3csIHByZXYpKSkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG5pZiAoJHN0cmluZ2lmeSkge1xuICAvLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgIHZhciByZXN1bHQgPSBhcHBseShXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA6ICRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xuICAgICAgcmV0dXJuIElMTF9GT1JNRURfVU5JQ09ERSAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnID8gcmVwbGFjZShyZXN1bHQsIHRlc3RlciwgZml4SWxsRm9ybWVkKSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb3JyZWN0aW9uLWNvbnRhaW5lcltkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZjRmM2ZlO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudFtkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNvcnJlY3Rpb24tY29udGFpbmVyIC5jb3JyZWN0aW9uLWNvbnRlbnQgLmNvbnRlbnQtdG9wW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNlYmVlZmY7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC10b3AgLnRvcC1sZWZ0W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LXRvcCAudG9wLWxlZnQgLnRleHRbZGF0YS12LTUxMzJjMWUwXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLmNvcnJlY3Rpb24tY29udGFpbmVyIC5jb3JyZWN0aW9uLWNvbnRlbnQgLmNvbnRlbnQtdG9wIC50b3AtbGVmdCAubnVtW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LXRvcCAudG9wLWxlZnQgLnRleHQxW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LXRvcCAudG9wLXJpZ2h0W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC10b3AgLnRvcC1yaWdodCAudGV4dFtkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC10b3AgLnRvcC1yaWdodCAubnVtW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM1MjcxZmY7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LXRvcCAudG9wLXJpZ2h0IC50ZXh0MVtkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC1jb250ZW50W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvcnJlY3Rpb24tY29udGFpbmVyIC5jb3JyZWN0aW9uLWNvbnRlbnQgLmNvbnRlbnQtY29udGVudCAuZGl2aWRlcltkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIGZsZXg6IDg7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LWNvbnRlbnQgLnJvdW5kW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQ6ICNmNGYzZmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LWJvdHRvbVtkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC1ib3R0b20gLmJvdHRvbS1ib3gtaXRlbVtkYXRhLXYtNTEzMmMxZTBdIHtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LWJvdHRvbSAuYm90dG9tLWJveC1pdGVtIC5jb250ZW50LWJvdHRvbS10b3BbZGF0YS12LTUxMzJjMWUwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuOCk7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1jb250ZW50IC5jb250ZW50LWJvdHRvbSAuYm90dG9tLWJveC1pdGVtIC5jb250ZW50LWJvdHRvbS10b3AgLnRvcC10ZXh0IC50ZXh0W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC1ib3R0b20gLmJvdHRvbS1ib3gtaXRlbSAuY29udGVudC1ib3R0b20tYm90dG9tW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tY29udGVudCAuY29udGVudC1ib3R0b20gLmJveC1saW5lW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMSk7XFxufVxcbi5jb3JyZWN0aW9uLWNvbnRhaW5lciAuY29ycmVjdGlvbi1ib3R0b21bZGF0YS12LTUxMzJjMWUwXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzA1cHgpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNvcnJlY3Rpb24tY29udGFpbmVyIC5jb3JyZWN0aW9uLWJvdHRvbSAuYm90dG9tLXRpdGxlW2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG4uY29ycmVjdGlvbi1jb250YWluZXIgLmNvcnJlY3Rpb24tYm90dG9tIC5ib3R0b20tdGl0bGUgLmJvdHRvbS10aXRsZS1sZWZ0W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmNvcnJlY3Rpb24tY29udGFpbmVyIC5jb3JyZWN0aW9uLWJvdHRvbSAudGFzay1saXN0W2RhdGEtdi01MTMyYzFlMF0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbGxhcHNlLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jb2xsYXBzZS10aXRsZSAuY29sbGFwc2UtdGl0bGUtbGVmdCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uY29sbGFwc2UtdGl0bGUgLmNvbGxhcHNlLXRpdGxlLXJpZ2h0IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29sbGFwc2UtY2FyLWl0ZW0ge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XFxufVxcbi5jb2xsYXBzZS1jYXItaXRlbSAuY2FyLWl0ZW0tdG9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuLmNvbGxhcHNlLWNhci1pdGVtIC5jYXItaXRlbS1ib3R0b20ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmNztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuLmNvbGxhcHNlLWNhci1pdGVtIC5jYXItaXRlbS1ib3R0b20gLmNhci1pdGVtLWJvdHRvbS12YWx1ZSB7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLmNvbGxhcHNlLWNhci1pdGVtIC5jYXItaXRlbS1ib3R0b20gLmNhci1pdGVtLWJvdHRvbS1sZWZ0IHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbi5jb2xsYXBzZS1jYXItaXRlbSAuY2FyLWl0ZW0tYm90dG9tIC5jYXItaXRlbS1ib3R0b20tcmlnaHQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG46OnYtZGVlcCAudmFuLWNvbGxhcHNlLWl0ZW0gLnZhbi1jZWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmZjYmZmIDAlLCAjZjJmNWZmIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZDdmYztcXG59XFxuOjp2LWRlZXAgLnZhbi1jb2xsYXBzZS1pdGVtX19jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJhY2tncm91bmQ6ICNmNGYzZmU7XFxufVxcbjo6di1kZWVwIC52YW4tc2VhcmNoX19jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5lbC1zZWxlY3QtZHJvcGRvd24sXFxuLmVsLXBvcHBlciB7XFxuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcXG59XFxuLmNvcnJlY3Rpb24tYm90dG9tIC52YW4tY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiZmNiZmYgMCUsICNmMmY1ZmYgMTAwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkN2ZjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udmFuLWNvbGxhcHNlLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4udmFuLWNvbGxhcHNlLWl0ZW1fX2NvbnRlbnQge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y0ZjNmZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MTMyYzFlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjcwODc0NGVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTEzMmMxZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MTMyYzFlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjczOGZmY2M3XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmoYjku7bor6bmg4VcclxuICogKi9cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U2VsZWN0QnlJZCA9KGlkKT0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Nhc2Uvc2VsZWN0QnlJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59XHJcbi8vIOmbhuS9k+iuqOiuuuivpuaDhVxyXG5leHBvcnQgY29uc3QgZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Rpc2N1c3Mvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3VwZXJ2aXNlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3QgbGVnYWxTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9sZWdhbC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9pbmZvcm0vc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgcHVuaXNoU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvcHVuaXNoL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0SGVhcmluZ0J5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2hlYXJpbmcvZ2V0SGVhcmluZ0J5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN0YWdlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3RhZ2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcblxyXG4vL+agueaNrnRva2Vu6I635Y+W5LyB5Lia5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2dldEluZm9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bnlKjmiLdcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXJcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mn6XnnIvlrqHmibnlrZDpobnliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5VHlwZUNhc2VMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3F1ZXJ5QXBwTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aWsOW7uuWuoeaJueihqFxyXG5leHBvcnQgY29uc3QgYWRkUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2luc1wiLFxyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bljZXkuKrlrqHmibnooajkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+etvuWQjeWuoeaJuVxyXG5leHBvcnQgY29uc3Qgc2lnblJlcG9ydCA9IChkYXRhLHR5cGUpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3NpZ24/dHlwZT1cIit0eXBlLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v57uf6K6hXHJcbmV4cG9ydCBjb25zdCBjb3VudEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZ2V0U3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+ivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+agoemqjOWvhueggVxyXG5leHBvcnQgY29uc3QgY2hlY2tQd2QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9jaGVja1B3ZFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aUr+mYny/liIblsYDkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGl2aXNpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9kaXZcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyQmF0Y2ggPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYmF0Y2hMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0ID0gKGluZm8sZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHBhcmFtczogaW5mbyxcclxuICAgIGRhdGEgOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm9hcmQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnR5TGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkL2dldENvdW50eVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlSW5mbyhwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZ2V0QnlJZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0cmlidXRlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9kaXN0cmlidXRlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9oYW5kbGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZmluYWwvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYW55KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9xeUJ5SW5mb0lkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW0oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lR3JvdXAoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3RpbWVHcm91cFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5pdCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvZ2V0VW5pdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3BhZ2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRG1TVVJCVkRpTm5aSk5ib013RUViZk9DenFXM0FVSDhLVnNzd2hHc1FPdWtQaEVpd3JoVU53Rkc0eFhTUzRDMEwrTFFyZnh2TFlmdk9OWnlDaWJhNnB6OVVCK0V4TG4ybjU3bDd5SFBqYzZ5NEk2V200aGpxQ0ZBQisvMXNnNGJzOTJQSUZzTTAxUFo5eFFVaGpyZ0FJVXZoTW1TQm1pcDhHZHJPUEh5RTN3RlRySWwzS0doME1MQWNBL2t1ZFdaVjlrc0c5ZE9HZDJ2cERZbWV6Z0ZqL0x3NDZrMEQvSHhkUnhrOWxWd1BheW5ZR1FNSUtGNFp1WElCamJadWxrTGF5TndEQVpqTVM1eVNCUGpFMDEvM3pCWityaXcyV0JQcGpiWnVIV0N6VC9ZQWwwTWMrK3crSXIxRHdaVjIzWEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEQlNVUkJWRGlOblpMQkVZTWdFRVVmREVrZGxrSU82dENGbldnNnNRdEdQY1JTckNPWjBSeFVsS2h4NUYrWVhkajNXUlk0MHN0R05GWURVTm1DeWhaN3g4UW1VOXVNZ2NqRnFTbW83ZURpZ1NlcGNURGxPWDdRWHZHK1pVNWxtU0hTYmJ6SlRvdDl5QW93OTNwRmdud0I5RndIVE1ZeXlIMVdqMWJucDRERWJLYzFTZEJZSGR5Q3BKVW91cUJpeDNpWWNFQnMybkVLSXVBV2tuWmNBQkpUWG9iRVpnVUF1STNFVXdrNjdwUkwrS3QvVXhGMEpLYjBVMGRhZnpCRmQvVFlYNmR0UEYydStvWG9BQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRE9TVVJCVkRpTm5aTEJrY0l3REVXZk5SU1NhNVlpVUJ1WlhPZ2tvUk5tR0UvYUVFVUVYMU9Kc3hjNzdCSThrUHliWmV0SjhoY1VOQVN0aHFBSzRFZnQvYWo5dTNlSDE0QWY5UXhVTVM0aHc4MGRnSCtjT21aM2FZL1dyd0JEMENwR0ZLaEtYUUhnNXM2UFNvWklqc2ZJK1dQeWY4Z1RrR2ZkcERTV3BPcmJBY0F0cU1xdTZra1MwWlVMNzlUKzNGM3B6ZzFCZGU4SUlwZ0EwNTdrQmRMVXRodlExR1o1RHpaRFJEQklOclpIdTI2Rk5MVTlBWCtKWDJnUzRab1BLM3MrdURLbGJoY1YvWDFac0tuMDJiLzZ6azdEdkxwRzBRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREdTVVJCVkRpTm5aSXhFb01nRUVYL01rek80UmtTaXBUZUlwVGVSSE1UUzNJTHl4UWtaK0FjbVl5YlFnU01HaU5iTWJQNzMzNzRBQ3ZGK2x5d1Z1VndWZzFyMVN6TjBWeDRyQUJSaEFGakc3NmNPQ3JvU3NZR21FdzNBcTh5RlM5YjQ1cTF3Z2dSc2ZPdU5zVlRTQVNNZDkxVnpIWHFZRC9BTHhaWjIyT1ZjbnNHb050amxsYm9lUWU1TGpvQlNKY3BCZ0FJTXZkc0FCbmIrUlQ2SEVnSCtCakpQTnU5RURJMkFvWTZkUDlKZXdmSU5vQysyNzlUNmQzZ05uR3l0bWY2d2FSYmUrd1BJTUZJMkdGVHlVc0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTMyYzFlMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MTMyYzFlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MTMyYzFlMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MTMyYzFlMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MTMyYzFlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MTMyYzFlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMzJjMWUwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxMzJjMWUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY29ycmVjdGlvblRhc2svaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTEzMmMxZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEzMmMxZTAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9