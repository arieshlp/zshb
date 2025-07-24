(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/case */ "./src/api/case.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      btns: [{
        name: '全部',
        value: 0
      }, {
        name: '待审批',
        value: 1
      }, {
        name: '已审批',
        value: 2
      }],
      active: 0,
      list: [],
      arr: [],
      lastArr: [],
      year: '',
      status: '',
      page: {
        limit: 10,
        pageIndex: 1,
        pageSize: 999,
        total: 3
      },
      expandFlag: true,
      search: {
        creditCode: '',
        name: '',
        source: '',
        tel: '',
        division: ''
      },
      divisionData: [],
      showPickerSelect: false,
      divisionCode: ''
    };
  },
  watch: {},
  mounted: function mounted() {
    this.initCompany();
    this.initCount();
    this.initDivision();
    this.queryList();
  },
  methods: {
    changeBtn: function changeBtn(idx) {
      this.active = idx;
      this.resetSearch();
      this.queryList();
    },
    expand: function expand() {
      var allArr = JSON.parse(JSON.stringify(this.arr)); //深拷贝
      //展开

      if (!this.expandFlag) {
        this.lastArr = allArr;
      } else {
        this.lastArr = [];

        for (var i = 0; i < 2; i++) {
          this.lastArr.push(allArr[i]);
        }
      }

      this.expandFlag = !this.expandFlag;
    },
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
    initCompany: function initCompany() {
      var _this2 = this;

      var userName = localStorage.getItem("caseUserName");
      var signUrl = localStorage.getItem("signUrl"); // if(!userName){

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["getUserInfo"])().then(function (res) {
        _this2.divisionCode = res.data.approvalUser.divisionCode;
        localStorage.setItem("caseUserName", res.data.user.username);
        localStorage.setItem("approvalUserId", res.data.approvalUser.approvalUserId);
        localStorage.setItem("divisionCode", res.data.approvalUser.divisionCode); //部门

        localStorage.setItem("signUrl", 'http://10.221.29.4:7001/ra' + res.data.approvalUser.signUrl); //电子签名
      }); // }
    },
    initCount: function initCount() {
      var _this3 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["countInfo"])({
        year: this.year
      }).then(function (res) {
        _this3.arr = res.data; // if(res.data.length>2){
        //     for(let i=0; i<2; i++){
        //         this.lastArr.push(res.data[i]);
        //     }
        // }else{

        _this3.lastArr = res.data; // }
      });
    },
    queryList: function queryList() {
      var _this4 = this;

      // if(flag){
      //     this.page.pageIndex = 1;
      // }
      var search = this.search;
      search.pageNum = this.page.pageIndex;
      search.pageSize = this.page.pageSize;
      search.type = '';
      search.year = '';
      search.status = this.active == '1' ? '待审批' : this.active == '2' ? '已审批' : '';
      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["queryTypeCaseList"])(search).then(function (res) {
        _this4.list = res.data.records;
        _this4.showPickerSelect = false; // for(let i=0; i<data.length; i++){
        //     let cases = data[i].cases;
        //     data[i].addFlag = true;
        //     for(let j=0; j<cases.length; j++){
        //         if(cases[j].name.indexOf('结案')>-1){
        //             data[i].addFlag  = false;
        //             break;
        //         }
        //     }
        // }
        // this.tableData = data;
      });
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
    },
    showCaseList: function showCaseList(name, type, status) {
      // this.$store.state.title = name;
      this.$router.push({
        name: 'caseList',
        query: {
          name: name,
          type: type,
          status: status
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "index-page" },
    [
      _c("van-nav-bar", {
        attrs: { title: "案件审批", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "top_content" }, [
          _c(
            "div",
            { staticClass: "line_content" },
            _vm._l(_vm.lastArr, function (item, i) {
              return Number(item.sum) > 0
                ? _c("div", { key: i, staticClass: "item_content" }, [
                    _c("div", { staticClass: "first_top" }, [
                      _vm._v(_vm._s(item.name)),
                    ]),
                    _c("div", { staticClass: "last_bottom" }, [
                      _c("div", { class: ["color_0", "bgcolor_" + (i % 4)] }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../../assets/check/checkIconOrange.png */ "./src/assets/check/checkIconOrange.png"),
                          },
                        }),
                      ]),
                      _c(
                        "span",
                        {
                          staticClass: "last_num",
                          on: {
                            click: function ($event) {
                              return _vm.showCaseList(item.name, item.type, "")
                            },
                          },
                        },
                        [_vm._v(_vm._s(item.sum))]
                      ),
                      _c(
                        "span",
                        {
                          staticClass: "last_unNum",
                          style: {
                            color:
                              Number(item.noComp) > 0
                                ? "rgb(250,3,3)"
                                : "rgba(255, 141, 26, 1)",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.showCaseList(
                                item.name,
                                item.type,
                                "待审批"
                              )
                            },
                          },
                        },
                        [
                          _vm._v("待审批"),
                          _c("font", [_vm._v(_vm._s(item.noComp))]),
                        ],
                        1
                      ),
                    ]),
                  ])
                : _vm._e()
            }),
            0
          ),
          _vm.arr.length > 2
            ? _c(
                "div",
                { staticClass: "icon_content" },
                [
                  _c("van-icon", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.expandFlag,
                        expression: "!expandFlag",
                      },
                    ],
                    attrs: { name: "arrow-down" },
                    on: { click: _vm.expand },
                  }),
                  _c("van-icon", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.expandFlag,
                        expression: "expandFlag",
                      },
                    ],
                    attrs: { name: "arrow-up" },
                    on: { click: _vm.expand },
                  }),
                ],
                1
              )
            : _vm._e(),
        ]),
        _c("div", { staticClass: "bottom_content" }, [
          _c(
            "div",
            { staticClass: "top_button" },
            [
              _vm._l(_vm.btns, function (item, index) {
                return _c(
                  "div",
                  {
                    class: _vm.active === index ? "btn_div active" : "btn_div",
                    on: {
                      click: function ($event) {
                        return _vm.changeBtn(index)
                      },
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(item.name))])]
                )
              }),
              _c(
                "div",
                {
                  staticClass: "top_select",
                  on: {
                    click: function ($event) {
                      _vm.showPickerSelect = true
                    },
                  },
                },
                [_vm._v("筛选 ")]
              ),
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "item_list" },
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
          ),
        ]),
      ]),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".index-page[data-v-2f6311de] {\n  height: calc(100vh - 50px);\n  overflow-y: auto;\n  padding-top: 50px;\n}\n.index-page .content[data-v-2f6311de] {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow-x: hidden;\n}\n.index-page .content .top_content[data-v-2f6311de] {\n  /*height: 210px;*/\n  padding: 10px 10px 0px;\n}\n.index-page .content .top_content .line_content[data-v-2f6311de] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  /*margin-bottom: 10px;*/\n}\n.index-page .content .top_content .line_content .item_content[data-v-2f6311de] {\n  width: calc(50% - 5px);\n  height: 60px;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid #bfcff5;\n  /*backdrop-filter: blur(10px);*/\n  margin-bottom: 6px;\n}\n.index-page .content .top_content .line_content .item_content .first_top[data-v-2f6311de] {\n  width: 100%;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 400;\n  /*line-height: 18px;*/\n  color: #202224;\n  height: 40px;\n  padding: 0px 10px;\n  align-items: center;\n  display: flex;\n  width: calc(100% - 20px);\n}\n.index-page .content .top_content .line_content .item_content .first_top_litter[data-v-2f6311de] {\n  padding: 2px 4px;\n}\n.index-page .content .top_content .line_content .item_content .first_top_normal[data-v-2f6311de] {\n  padding: 10px 12px;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom[data-v-2f6311de] {\n  display: flex;\n  line-height: 25px;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: #ff8d1a;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom > div[data-v-2f6311de] {\n  padding: 0px 5px;\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .color_0[data-v-2f6311de] {\n  border-radius: 6px;\n  text-align: center;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .color_0 img[data-v-2f6311de] {\n  margin: 0px auto;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .bgcolor_0[data-v-2f6311de] {\n  background: #FEE7D0;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .bgcolor_1[data-v-2f6311de] {\n  background: #DAE5FE;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .bgcolor_2[data-v-2f6311de] {\n  background: #CCF3E9;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .bgcolor_3[data-v-2f6311de] {\n  background: #FEE2E9;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .last_num[data-v-2f6311de] {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: #202224;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .last_unNum[data-v-2f6311de] {\n  margin-left: auto;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.index-page .content .top_content .line_content .item_content .last_bottom .last_unNum > font[data-v-2f6311de] {\n  margin-left: 5px;\n}\n.index-page .content .top_content .icon_content[data-v-2f6311de] {\n  text-align: center;\n  color: #447bfc;\n  margin-bottom: 6px;\n}\n.index-page .content .top_content .icon_content > i[data-v-2f6311de] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.index-page .content .bottom_content[data-v-2f6311de] {\n  /*height: calc(100% - 250px);*/\n  padding: 0px 10px 10px;\n}\n.index-page .content .bottom_content .top_button[data-v-2f6311de] {\n  height: 35px;\n  line-height: 35px;\n  display: flex;\n}\n.index-page .content .bottom_content .top_button .btn_div[data-v-2f6311de] {\n  margin-right: 40px;\n  cursor: pointer;\n}\n.index-page .content .bottom_content .top_button .active[data-v-2f6311de] {\n  color: #447bfc;\n  border-bottom: 5px solid #447bfc;\n}\n.index-page .content .bottom_content .top_button .top_select[data-v-2f6311de] {\n  margin-left: auto;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 35px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.index-page .content .bottom_content .top_button .top_select[data-v-2f6311de]  .van-dropdown-menu__item {\n  background-color: transparent;\n  height: 35px;\n}\n.index-page .content .bottom_content .item_list[data-v-2f6311de] {\n  /*height: calc(100% - 35px);*/\n  /*overflow-y: auto;*/\n}\n.index-page .content .bottom_content .item_list .list_div[data-v-2f6311de] {\n  height: 90px;\n  border-radius: 10px;\n  background: #FAFBFF;\n  padding: 10px;\n  margin-top: 15px;\n}\n.index-page .content .bottom_content .item_list .list_div .title[data-v-2f6311de] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  height: 40px;\n  line-height: 40px;\n}\n.index-page .content .bottom_content .item_list .list_div .title .text[data-v-2f6311de] {\n  font-weight: bold;\n}\n.index-page .content .bottom_content .item_list .list_div .title .status[data-v-2f6311de] {\n  font-size: 12px;\n  padding: 0 10px;\n  border-radius: 4px;\n  height: 25px;\n  line-height: 26px;\n}\n.index-page .content .bottom_content .item_list .list_div .list_content[data-v-2f6311de] {\n  font-size: 12px;\n  color: rgba(47, 57, 78, 0.5);\n  /*height: calc(100% - 35px);*/\n  line-height: 25px;\n  display: flex;\n  justify-content: space-between;\n}\n.index-page .content .bottom_content .item_list .list_div .list_content .content_left[data-v-2f6311de] {\n  min-width: 46%;\n}\n.index-page .content .bottom_content .item_list .list_div .list_content .content_right[data-v-2f6311de] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #43cf7c;\n  line-height: 18px;\n  text-align: right;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*line-height: 75px;*/\n}\n.pop-content[data-v-2f6311de] {\n  padding: 30px 10px 10px;\n  height: 100%;\n}\n.pop-content .pop-title[data-v-2f6311de] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 21px;\n  color: #25396f;\n}\n.pop-content .pop-title > img[data-v-2f6311de] {\n  margin-right: 10px;\n}\n.pop-content > p[data-v-2f6311de] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #25396f;\n  margin: 20px 5px 5px;\n}\n.pop-content[data-v-2f6311de]  .van-search {\n  padding: 0px;\n}\n.pop-content[data-v-2f6311de]  .van-search__content {\n  background-color: #f5f6f9;\n}\n.pop-content[data-v-2f6311de]  .van-field__control {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pop-content[data-v-2f6311de]  .van-radio {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-2f6311de]  .van-radio__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-2f6311de]  .van-radio__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content[data-v-2f6311de]  .van-checkbox {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-2f6311de]  .van-checkbox__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-2f6311de]  .van-checkbox__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content .pop-bottom[data-v-2f6311de] {\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 10px;\n}\n.pop-content .pop-bottom > span[data-v-2f6311de] {\n  display: inline-block;\n  width: calc(50% - 12px);\n  margin-right: 12px;\n  line-height: 36px;\n  text-align: center;\n  background-color: #f5f6f9;\n  color: #5475f8;\n  border-radius: 30px;\n}\n.pop-content .pop-bottom > span[data-v-2f6311de]:last-child {\n  background-color: #5475f8;\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3cf4cc70", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/check/checkIconOrange.png":
/*!**********************************************!*\
  !*** ./src/assets/check/checkIconOrange.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACMSURBVBiVfY0tDsJQEAZnm4cCiwHVExBu0GBQnIMLYJAkpKjK3gKH5ww9RS/Q8Gf2Q8BLmzTt2J351vijcj7jE27IMow7U3a2r58ASZR4Ty7Isl/Bhofl8dRKRkoXKe1L7iXgUUG6tn03LhYVsEJUdqjX/aURTMUyBx0HDekcwBuw0/CMvQIk2/Fn8i+MpCjnPYXO1AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/supervision/search.png":
/*!*******************************************!*\
  !*** ./src/assets/supervision/search.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACrSURBVCiRjZC7FYMwEATneASoKkMPKgVIESm4FPUArkpEPgd8BBj8fOFqbnd1YqtJ+XNSYARAtb2lRIaNs9Wktg7uirN1cGt6Mm9qi0pjy5CfQVQaZE6V7aGaBgDfZwWALUOOyIBo6zvjonPsnG/uJ/AA+6cZFyVWeTPaOrj1P+ntBbZEaZb+uxq/Zzx2jk6PL0305TvjkpPYwnz3K/sD7DvjfJ8V69K+AsAHHgpJnYQ3GNYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/caseCheck/index.vue":
/*!***************************************!*\
  !*** ./src/views/caseCheck/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f6311de&scoped=true& */ "./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& */ "./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f6311de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/caseCheck/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=style&index=0&id=2f6311de&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f6311de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2f6311de&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/index.vue?vue&type=template&id=2f6311de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f6311de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Nhc2VDaGVjay9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9pbmRleC52dWU/OTE3NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9pbmRleC52dWU/NjRhMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2luZGV4LnZ1ZT85MWQ2Iiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NoZWNrL2NoZWNrSWNvbk9yYW5nZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdXBlcnZpc2lvbi9zZWFyY2gucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svaW5kZXgudnVlP2FmZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9pbmRleC52dWU/MDM5OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2luZGV4LnZ1ZT8yYmM3Il0sIm5hbWVzIjpbInF1ZXJ5U2VsZWN0QnlJZCIsImlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRpc2N1c3NTZWxlY3RCeUNhc2VJZCIsInN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkIiwibGVnYWxTZWxlY3RCeUNhc2VJZCIsInNlbGVjdEJ5Q2FzZUlkIiwicHVuaXNoU2VsZWN0QnlDYXNlSWQiLCJnZXRIZWFyaW5nQnlDYXNlSWQiLCJzdGFnZVNlbGVjdEJ5Q2FzZUlkIiwiZ2V0VXNlckluZm8iLCJkYXRhIiwicGFyYW1zIiwiZ2V0VXNlckxpc3QiLCJxdWVyeVR5cGVDYXNlTGlzdCIsImFkZFJlcG9ydCIsImdldFJlcG9ydERldGFpbCIsInNpZ25SZXBvcnQiLCJ0eXBlIiwiY291bnRJbmZvIiwiZ2V0QWxsUmVwb3J0IiwiY2hlY2tQd2QiLCJxdWVyeURpdmlzaW9uIiwiZ2V0U3VwZXJCYXRjaCIsImdldFN1cGVyTGlzdCIsImluZm8iLCJnZXRTdXBlckxpc3REZXRhaWwiLCJib2FyZCIsImNvdW50eUxpc3QiLCJpbmZvTGlzdCIsImJhc2VJbmZvIiwiZGlzdHJpYnV0ZSIsImhhbmRsZSIsImZpbmFsIiwiY29tcGFueSIsInByb2JsZW0iLCJ0aW1lR3JvdXAiLCJ1bml0IiwicHJvYmxlbUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGFBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLENBREE7QUFNQSxlQU5BO0FBT0EsY0FQQTtBQVFBLGFBUkE7QUFTQSxpQkFUQTtBQVVBLGNBVkE7QUFXQSxnQkFYQTtBQVlBO0FBQ0EsaUJBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFKQSxPQVpBO0FBa0JBLHNCQWxCQTtBQW1CQTtBQUNBLHNCQURBO0FBRUEsZ0JBRkE7QUFHQSxrQkFIQTtBQUlBLGVBSkE7QUFLQTtBQUxBLE9BbkJBO0FBMEJBLHNCQTFCQTtBQTJCQSw2QkEzQkE7QUE0QkE7QUE1QkE7QUE4QkEsR0FqQ0E7QUFrQ0EsV0FsQ0E7QUFxQ0EsU0FyQ0EscUJBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTFDQTtBQTJDQTtBQUNBLGFBREEscUJBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQSx3REFEQSxDQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FsQkE7QUFtQkEsZ0JBbkJBLDBCQW1CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F2QkE7QUF3QkEsZUF4QkEseUJBd0JBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGdCQUZBO0FBR0Esa0JBSEE7QUFJQSxlQUpBO0FBS0E7QUFMQTtBQU9BLEtBaENBO0FBaUNBLGVBakNBLHlCQWlDQTtBQUFBOztBQUNBO0FBQ0Esb0RBRkEsQ0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUpBLENBSUE7O0FBQ0Esc0dBTEEsQ0FLQTtBQUNBLE9BTkEsRUFKQSxDQVdBO0FBQ0EsS0E3Q0E7QUE4Q0EsYUE5Q0EsdUJBOENBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0EsOEJBREEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGtDQVBBLENBUUE7QUFDQSxPQVRBO0FBVUEsS0F6REE7QUEwREEsYUExREEsdUJBMERBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUZBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BZEE7QUFlQSxLQW5GQTtBQW9GQSxZQXBGQSxvQkFvRkEsS0FwRkEsRUFvRkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0E1RkE7QUE2RkEsY0E3RkEsc0JBNkZBLElBN0ZBLEVBNkZBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsNkJBREE7QUFFQSw2QkFGQTtBQUdBO0FBSEE7QUFGQTtBQVFBLEtBdEdBO0FBdUdBLGdCQXZHQSx3QkF1R0EsSUF2R0EsRUF1R0EsSUF2R0EsRUF1R0EsTUF2R0EsRUF1R0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLG9CQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBRkE7QUFRQTtBQWpIQTtBQTNDQSxHOzs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsaUJBQWlCLHlCQUF5QjtBQUMxQyxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQztBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVELGlDQUFpQywyQ0FBMkM7QUFDNUU7QUFDQTtBQUNBLGlDQUFpQyxtQkFBTyxDQUFDLHNGQUF3QztBQUNqRiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELHlCQUF5QixvQkFBb0I7QUFDN0MsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQyx5QkFBeUIsb0JBQW9CO0FBQzdDLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRCxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0QsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDO0FBQ0EseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBLDBCQUEwQixNQUFNLG1CQUFPLENBQUMsNEVBQWlDLEdBQUc7QUFDNUUsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZix5QkFBeUIsNEJBQTRCO0FBQ3JELDRCQUE0QixNQUFNLHlCQUF5QixFQUFFO0FBQzdEO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSx1QkFBdUIsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcFVhO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDaEQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELDBCQUEwQixtQkFBTyxDQUFDLCtHQUF5QztBQUMzRSxvQkFBb0IsbUJBQU8sQ0FBQyxtSEFBMkM7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVksU0FBUztBQUN4QztBQUNBLHlDQUF5QztBQUN6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtGQUErRjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4RWE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGlDQUFpQywrQkFBK0IscUJBQXFCLHNCQUFzQixHQUFHLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLDRCQUE0Qix1QkFBdUIsR0FBRyxzREFBc0Qsb0JBQW9CLDZCQUE2QixHQUFHLG9FQUFvRSxrQkFBa0Isb0JBQW9CLG1DQUFtQywwQkFBMEIsS0FBSyxrRkFBa0YsMkJBQTJCLGlCQUFpQix1QkFBdUIsc0JBQXNCLDhCQUE4QixrQ0FBa0MseUJBQXlCLEdBQUcsNkZBQTZGLGdCQUFnQix3QkFBd0Isb0JBQW9CLHFCQUFxQix3QkFBd0IscUJBQXFCLGlCQUFpQixzQkFBc0Isd0JBQXdCLGtCQUFrQiw2QkFBNkIsR0FBRyxvR0FBb0cscUJBQXFCLEdBQUcsb0dBQW9HLHVCQUF1QixHQUFHLCtGQUErRixrQkFBa0Isc0JBQXNCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHNCQUFzQixtQkFBbUIsR0FBRyxxR0FBcUcscUJBQXFCLHVCQUF1QixzQkFBc0IsdUJBQXVCLEdBQUcsd0dBQXdHLHVCQUF1Qix1QkFBdUIsR0FBRyw0R0FBNEcscUJBQXFCLEdBQUcsMEdBQTBHLHdCQUF3QixHQUFHLDBHQUEwRyx3QkFBd0IsR0FBRywwR0FBMEcsd0JBQXdCLEdBQUcsMEdBQTBHLHdCQUF3QixHQUFHLHlHQUF5RyxvQkFBb0Isc0JBQXNCLHdCQUF3QixtQkFBbUIsR0FBRywyR0FBMkcsc0JBQXNCLHVCQUF1QixzQkFBc0IsR0FBRyxrSEFBa0gscUJBQXFCLEdBQUcsb0VBQW9FLHVCQUF1QixtQkFBbUIsdUJBQXVCLEdBQUcsd0VBQXdFLG9CQUFvQixzQkFBc0IsR0FBRyx5REFBeUQsaUNBQWlDLDZCQUE2QixHQUFHLHFFQUFxRSxpQkFBaUIsc0JBQXNCLGtCQUFrQixHQUFHLDhFQUE4RSx1QkFBdUIsb0JBQW9CLEdBQUcsNkVBQTZFLG1CQUFtQixxQ0FBcUMsR0FBRyxpRkFBaUYsc0JBQXNCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGtDQUFrQyxHQUFHLDJHQUEyRyxrQ0FBa0MsaUJBQWlCLEdBQUcsb0VBQW9FLGdDQUFnQyx5QkFBeUIsS0FBSyw4RUFBOEUsaUJBQWlCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLHFCQUFxQixHQUFHLHFGQUFxRixrQkFBa0IsbUNBQW1DLHdCQUF3QixvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLDJGQUEyRixzQkFBc0IsR0FBRyw2RkFBNkYsb0JBQW9CLG9CQUFvQix1QkFBdUIsaUJBQWlCLHNCQUFzQixHQUFHLDRGQUE0RixvQkFBb0IsaUNBQWlDLGdDQUFnQyx3QkFBd0Isa0JBQWtCLG1DQUFtQyxHQUFHLDBHQUEwRyxtQkFBbUIsR0FBRywyR0FBMkcsb0JBQW9CLHFCQUFxQixtQkFBbUIsc0JBQXNCLHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsS0FBSyxpQ0FBaUMsNEJBQTRCLGlCQUFpQixHQUFHLDRDQUE0QyxvQkFBb0IscUJBQXFCLHNCQUFzQixtQkFBbUIsR0FBRyxrREFBa0QsdUJBQXVCLEdBQUcscUNBQXFDLG9CQUFvQixxQkFBcUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyw4Q0FBOEMsaUJBQWlCLEdBQUcsdURBQXVELDhCQUE4QixHQUFHLHNEQUFzRCxrQ0FBa0MsR0FBRyw2Q0FBNkMsNEJBQTRCLHVCQUF1QixHQUFHLG1EQUFtRCwwQkFBMEIsZ0JBQWdCLHdCQUF3Qix3QkFBd0Isb0JBQW9CLGtDQUFrQyx1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLDREQUE0RCw4QkFBOEIsMEJBQTBCLGdCQUFnQixHQUFHLGdEQUFnRCw0QkFBNEIsdUJBQXVCLEdBQUcsc0RBQXNELDBCQUEwQixnQkFBZ0Isd0JBQXdCLHdCQUF3QixvQkFBb0Isa0NBQWtDLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsK0RBQStELDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsNkNBQTZDLGtCQUFrQixtQ0FBbUMsMEJBQTBCLEdBQUcsb0RBQW9ELDBCQUEwQiw0QkFBNEIsdUJBQXVCLHNCQUFzQix1QkFBdUIsOEJBQThCLG1CQUFtQix3QkFBd0IsR0FBRywrREFBK0QsOEJBQThCLGdCQUFnQixHQUFHO0FBQ2x6UDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywweEJBQXVjO0FBQzdkO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLENBQUNDLEVBQUQsRUFBTztBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSwwQkFBd0JGLEVBRGhCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0osRUFBRCxFQUFPO0FBQzFDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGlDQUErQkYsRUFEdkI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBTVA7O0FBQ08sSUFBTUUsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDTCxFQUFELEVBQU87QUFDNUMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsbUNBQWlDRixFQUR6QjtBQUViRyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLEVBQUQsRUFBTztBQUN4QyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSwrQkFBNkJGLEVBRHJCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1AsRUFBRCxFQUFPO0FBQ25DLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGdDQUE4QkYsRUFEdEI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBTVA7O0FBQ08sSUFBTUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUixFQUFELEVBQU87QUFDekMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsZ0NBQThCRixFQUR0QjtBQUViRyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNULEVBQUQsRUFBTztBQUN2QyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxxQ0FBbUNGLEVBRDNCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1PLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1YsRUFBRCxFQUFPO0FBQ3hDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLCtCQUE2QkYsRUFEckI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBT1A7O0FBQ08sSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGtCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUQ7QUFISyxHQUFELENBQWQ7QUFLRCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRixJQUFELEVBQVU7QUFDbkMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsVUFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSCxJQUFELEVBQVU7QUFDekMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsMkJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk0sQyxDQU9QOztBQUNPLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLElBQUQsRUFBVTtBQUNqQyxTQUFPWCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxrQkFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiUyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTCxJQUFELEVBQVU7QUFDdkMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsY0FEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ04sSUFBRCxFQUFNTyxJQUFOLEVBQWU7QUFDdkMsU0FBT2xCLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLDRCQUEwQmlCLElBRGxCO0FBRWJoQixVQUFNLEVBQUUsTUFGSztBQUdiUyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1IsSUFBRCxFQUFVO0FBQ2pDLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLHNCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUQ7QUFISyxHQUFELENBQWQ7QUFLRCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxJQUFELEVBQVU7QUFDcEMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUscUJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk0sQyxDQU9QOztBQUNPLElBQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNWLElBQUQsRUFBVTtBQUNoQyxTQUFPWCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxtQkFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDWCxJQUFELEVBQVU7QUFDckMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsY0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNcUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDWixJQUFELEVBQVU7QUFDckMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsZUFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFNZCxJQUFOLEVBQWU7QUFDekMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsVUFEUTtBQUViQyxVQUFNLEVBQUUsTUFGSztBQUdiVSxVQUFNLEVBQUVhLElBSEs7QUFJYmQsUUFBSSxFQUFHQTtBQUpNLEdBQUQsQ0FBZDtBQU1ELENBUE0sQyxDQVFQOztBQUNPLElBQU1lLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2YsSUFBRCxFQUFVO0FBQzFDLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLE1BRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk07QUFRQSxTQUFTZ0IsS0FBVCxHQUFpQjtBQUN0QixTQUFPM0Isd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsV0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVMwQixVQUFULENBQW9CaEIsTUFBcEIsRUFBNEI7QUFDakMsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUscUJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFQTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBU2lCLFFBQVQsQ0FBa0JqQixNQUFsQixFQUEwQjtBQUMvQixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxlQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUE7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVNLFNBQVNrQixRQUFULENBQWtCbEIsTUFBbEIsRUFBMEI7QUFDL0IsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsa0JBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFQTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBU21CLFVBQVQsQ0FBb0JuQixNQUFwQixFQUE0QjtBQUNqQyxTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSx5QkFBeUJXLE1BRGpCO0FBRWJWLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlEO0FBRU0sU0FBUzhCLE1BQVQsQ0FBZ0JwQixNQUFoQixFQUF3QjtBQUM3QixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxxQkFBcUJXLE1BRGI7QUFFYlYsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTK0IsS0FBVCxDQUFlckIsTUFBZixFQUF1QjtBQUM1QixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxvQkFBb0JXLE1BRFo7QUFFYlYsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTZ0MsT0FBVCxDQUFpQnRCLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU9aLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLHFCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUE7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVNLFNBQVN1QixPQUFULEdBQW1CO0FBQ3hCLFNBQU9uQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxzQkFEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNrQyxTQUFULEdBQXFCO0FBQzFCLFNBQU9wQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxnQ0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNtQyxJQUFULEdBQWdCO0FBQ3JCLFNBQU9yQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSw4QkFEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNvQyxXQUFULENBQXFCMUIsTUFBckIsRUFBNkI7QUFDbEMsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsK0JBRFE7QUFFYkMsVUFBTSxFQUFFLE1BRks7QUFHYlMsUUFBSSxFQUFFQztBQUhPLEdBQUQsQ0FBZDtBQUtELEM7Ozs7Ozs7Ozs7O0FDN1BELGlDQUFpQyx3VDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGdXOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5kZXgtcGFnZVwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIuahiOS7tuWuoeaJuVwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fY29udGVudFwiIHYtZm9yPVwiKGl0ZW0saSkgaW4gbGFzdEFyclwiIDprZXk9XCJpXCIgdi1pZj1cIk51bWJlcihpdGVtLnN1bSk+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3RfdG9wXCI+e3tpdGVtLm5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFzdF9ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjb2xvcl8wJywnYmdjb2xvcl8nKyhpJTQpXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2NoZWNrL2NoZWNrSWNvbk9yYW5nZS5wbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYXN0X251bVwiIEBjbGljaz1cInNob3dDYXNlTGlzdChpdGVtLm5hbWUsaXRlbS50eXBlLCcnKVwiPnt7aXRlbS5zdW19fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFzdF91bk51bVwiIEBjbGljaz1cInNob3dDYXNlTGlzdChpdGVtLm5hbWUsaXRlbS50eXBlLCflvoXlrqHmibknKVwiIDpzdHlsZT1cInsnY29sb3InOk51bWJlcihpdGVtLm5vQ29tcCk+MD8ncmdiKDI1MCwzLDMpJzoncmdiYSgyNTUsIDE0MSwgMjYsIDEpJ31cIj7lvoXlrqHmibk8Zm9udD57e2l0ZW0ubm9Db21wfX08L2ZvbnQ+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25fY29udGVudFwiIHYtaWY9XCJhcnIubGVuZ3RoPjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwiIWV4cGFuZEZsYWdcIiBuYW1lPVwiYXJyb3ctZG93blwiIEBjbGljaz1cImV4cGFuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwiZXhwYW5kRmxhZ1wiIG5hbWU9XCJhcnJvdy11cFwiIEBjbGljaz1cImV4cGFuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gYnRuc1wiIDpjbGFzcz1cImFjdGl2ZSA9PT0gaW5kZXggPyAnYnRuX2RpdiBhY3RpdmUnIDonYnRuX2RpdidcIiBAY2xpY2s9XCJjaGFuZ2VCdG4oaW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wX3NlbGVjdFwiIEBjbGljaz1cInNob3dQaWNrZXJTZWxlY3QgPSB0cnVlXCI+562b6YCJXHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLWRyb3Bkb3duLW1lbnU+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJkaXZpc2lvblwiIDpvcHRpb25zPVwiZGl2aXNpb25EYXRhXCIgLz4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLWRyb3Bkb3duLW1lbnU+LS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbV9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RfZGl2XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiIEBjbGljaz1cInNob3dEZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e2l0ZW0uc291cmNlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCIgOnN0eWxlPVwiZ2V0Q29sb3IoaXRlbS5zdGF0dXMpXCI+e3tpdGVtLnN0YXR1c319PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7nq4vmoYjlj7fvvJp7e2l0ZW0uY2FzZU5vfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuWQjeensOaIluWnk+WQje+8mnt7aXRlbS5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uY2FzZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93UGlja2VyU2VsZWN0XCIgcG9zaXRpb249XCJyaWdodFwiIHN0eWxlPVwid2lkdGg6NzIlO2hlaWdodDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXRpdGxlXCI+PGltZyBzcmM9XCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9zZWFyY2gucG5nXCIvPuetm+mAiTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgdi1zaG93PVwiZGl2aXNpb25Db2RlID09ICfms5Xop4TlpIQnIHx8IGRpdmlzaW9uQ29kZSA9PSAn5piG5piO5biC55Sf5oCB546v5aKD5bGAJ1wiPuaJv+WKnuWNleS9jTwvcD5cclxuICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInNlYXJjaC5kaXZpc2lvblwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiAgdi1zaG93PVwiZGl2aXNpb25Db2RlID09ICfms5Xop4TlpIQnIHx8IGRpdmlzaW9uQ29kZSA9PSAn5piG5piO5biC55Sf5oCB546v5aKD5bGAJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gdi1mb3I9XCIoaXRlbSxpKSBpbiBkaXZpc2lvbkRhdGFcIiA6a2V5PVwiaVwiIDpuYW1lPVwiaXRlbVwiPjx0ZW1wbGF0ZSAjaWNvbj1cInByb3BzXCI+PHNwYW4+e3tpdGVtfX08L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgIDwvdmFuLXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHA+5qGI5Lu25p2l5rqQPC9wPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaC5zb3VyY2VcIiBzaGFwZT1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+5b2T5LqL5Lq65ZCN56ew5oiW5aeT5ZCNPC9wPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaC5uYW1lXCIgc2hhcGU9XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPuekvuS8muS/oeeUqOS7o+eggS/ouqvku73or4Hlj7c8L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoLmNyZWRpdENvZGVcIiBzaGFwZT1cInJvdW5kXCIvPlxyXG48IS0tICAgICAgICAgICAgICAgIDxwPuiBlOezu+eUteivnTwvcD4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoLnRlbFwiIHNoYXBlPVwicm91bmRcIi8+LS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlc2V0U2VhcmNoXCI+6YeN572uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInF1ZXJ5TGlzdFwiPuehruWumjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Zhbi1wb3B1cD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7Z2V0VXNlckluZm8sY291bnRJbmZvLHF1ZXJ5VHlwZUNhc2VMaXN0LHF1ZXJ5RGl2aXNpb259IGZyb20gXCIuLi8uLi9hcGkvY2FzZVwiXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYnRuczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiflhajpg6gnLHZhbHVlOjB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiflvoXlrqHmibknLHZhbHVlOjF9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiflt7LlrqHmibknLHZhbHVlOjJ9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgICAgICAgICBhcnIgOiBbXSxcclxuICAgICAgICAgICAgICAgIGxhc3RBcnIgOiBbXSxcclxuICAgICAgICAgICAgICAgIHllYXIgOiAnJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlSW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4cGFuZEZsYWcgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoIDp7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0Q29kZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZWwgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbiA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGl2aXNpb25EYXRhIDogW10sXHJcbiAgICAgICAgICAgICAgICBzaG93UGlja2VyU2VsZWN0IDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbkNvZGUgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDp7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb21wYW55KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENvdW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERpdmlzaW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlMaXN0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUJ0bihpZHgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBpZHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleHBhbmQoKXtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxBcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyKSk7Ly/mt7Hmi7fotJ1cclxuICAgICAgICAgICAgICAgIC8v5bGV5byAXHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5leHBhbmRGbGFnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RBcnIgPSBhbGxBcnI7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwyOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RBcnIucHVzaChhbGxBcnJbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmxhZyA9ICF0aGlzLmV4cGFuZEZsYWc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXREaXZpc2lvbigpe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEaXZpc2lvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdmlzaW9uRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc2V0U2VhcmNoKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVkaXRDb2RlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdENvbXBhbnkoKXtcclxuICAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhc2VVc2VyTmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICBsZXQgc2lnblVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lnblVybFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKCF1c2VyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0VXNlckluZm8oKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdmlzaW9uQ29kZSA9IHJlcy5kYXRhLmFwcHJvdmFsVXNlci5kaXZpc2lvbkNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FzZVVzZXJOYW1lXCIsIHJlcy5kYXRhLnVzZXIudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFwcHJvdmFsVXNlcklkXCIsIHJlcy5kYXRhLmFwcHJvdmFsVXNlci5hcHByb3ZhbFVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGl2aXNpb25Db2RlXCIsIHJlcy5kYXRhLmFwcHJvdmFsVXNlci5kaXZpc2lvbkNvZGUpOyAvL+mDqOmXqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZ25VcmxcIiwgJ2h0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxL3JhJytyZXMuZGF0YS5hcHByb3ZhbFVzZXIuc2lnblVybCk7ICAvL+eUteWtkOetvuWQjVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXRDb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgY291bnRJbmZvKHt5ZWFyOnRoaXMueWVhcn0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyciA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHJlcy5kYXRhLmxlbmd0aD4yKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9yKGxldCBpPTA7IGk8MjsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubGFzdEFyci5wdXNoKHJlcy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RBcnIgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVlcnlMaXN0KCl7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihmbGFnKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBhZ2UucGFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2ggPSB0aGlzLnNlYXJjaDtcclxuICAgICAgICAgICAgICAgIHNlYXJjaC5wYWdlTnVtID0gdGhpcy5wYWdlLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgICAgIHNlYXJjaC5wYWdlU2l6ZSA9IHRoaXMucGFnZS5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaC50eXBlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2gueWVhciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoLnN0YXR1cyA9IHRoaXMuYWN0aXZlPT0nMSc/J+W+heWuoeaJuSc6dGhpcy5hY3RpdmU9PScyJz8n5bey5a6h5om5JzonJztcclxuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZUNhc2VMaXN0KHNlYXJjaCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhLnJlY29yZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGlja2VyU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBjYXNlcyA9IGRhdGFbaV0uY2FzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRhdGFbaV0uYWRkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcihsZXQgaj0wOyBqPGNhc2VzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKGNhc2VzW2pdLm5hbWUuaW5kZXhPZign57uT5qGIJyk+LTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhdGFbaV0uYWRkRmxhZyAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRhYmxlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Q29sb3Ioc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdGUgPT09ICflvoXlrqHmibknKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tncm91bmQ6cmdiYSgyNTIsIDIzNiwgMjIwLCAxKTtjb2xvcjpyZ2JhKDI1NSwgMTQxLCAyNiwgMSk7J1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHN0YXRlID09PSAn5bey5a6h5om5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOnJnYmEoMjMyLCAyMzksIDI1NSwgMSk7Y29sb3I6cmdiYSg2OCwgMTIzLCAyNTIsIDEpOydcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHN0YXRlID09PSAn6YCA5ZueJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOnJnYmEoMjQ3LCAyMjIsIDIyMiwgMSk7Y29sb3I6cmdiYSgyNTIsIDY4LCA2OCwgMSk7J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RGV0YWlsKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXNlRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlSWQ6IGRhdGEuY2FzZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiBkYXRhLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZU5hbWUgOiBkYXRhLmNhc2VOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0Nhc2VMaXN0KG5hbWUsdHlwZSxzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kc3RvcmUuc3RhdGUudGl0bGUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXNlTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlIDogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDogc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAuaW5kZXgtcGFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgLnRvcF9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC8qaGVpZ2h0OiAyMTBweDsqL1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIC5saW5lX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cclxuICAgICAgICAgICAgICAgICAgICAuaXRlbV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkxLCAyMDcsIDI0NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0X3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypsaW5lLWhlaWdodDogMThweDsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMzIsIDM0LCAzNiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdF90b3BfbGl0dGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RfdG9wX25vcm1hbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFzdF9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29sb3JfMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iZ2NvbG9yXzAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRUU3RDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmdjb2xvcl8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREFFNUZFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJnY29sb3JfMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0NDRjNFOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iZ2NvbG9yXzMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRUUyRTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0X251bXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzMiwgMzQsIDM2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0X3VuTnVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Zm9udHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbl9jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgICAgICA+aXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC8qaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNTBweCk7Ki9cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAudG9wX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bl9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50b3Bfc2VsZWN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgOjp2LWRlZXAgLnZhbi1kcm9wZG93bi1tZW51X19pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaXRlbV9saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAvKmhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7Ki9cclxuICAgICAgICAgICAgICAgICAgICAvKm92ZXJmbG93LXk6IGF1dG87Ki9cclxuICAgICAgICAgICAgICAgICAgICAubGlzdF9kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQUZCRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQgeyBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0X2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNDcsIDU3LCA3OCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRfbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudF9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0M2NmN2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypsaW5lLWhlaWdodDogNzVweDsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAucG9wLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgICAgICAgID5pbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPnB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tc2VhcmNoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tc2VhcmNoX19jb250ZW50e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWZpZWxkX19jb250cm9se1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1yYWRpb3tcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1yYWRpb19faWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NiwgMjQ5LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLXJhZGlvX19pY29uLS1jaGVja2Vke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4OWZhO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMxOTg5ZmE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNoZWNrYm94e1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNoZWNrYm94X19pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2hlY2tib3hfX2ljb24tLWNoZWNrZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE5ODlmYTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3AtYm90dG9te1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ5LCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImluZGV4LXBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmoYjku7blrqHmiblcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIsIGZpeGVkOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaW5lX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5sYXN0QXJyLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0uc3VtKSA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBpLCBzdGF0aWNDbGFzczogXCJpdGVtX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlyc3RfdG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhc3RfYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtcImNvbG9yXzBcIiwgXCJiZ2NvbG9yX1wiICsgKGkgJSA0KV0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9jaGVjay9jaGVja0ljb25PcmFuZ2UucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFzdF9udW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93Q2FzZUxpc3QoaXRlbS5uYW1lLCBpdGVtLnR5cGUsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnN1bSkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFzdF91bk51bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0ubm9Db21wKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYigyNTAsMywzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDI1NSwgMTQxLCAyNiwgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93Q2FzZUxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuW+heWuoeaJuVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW+heWuoeaJuVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmb250XCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubm9Db21wKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLmFyci5sZW5ndGggPiAyXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uZXhwYW5kRmxhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWV4cGFuZEZsYWdcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmV4cGFuZCB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZXhwYW5kRmxhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhwYW5kRmxhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYXJyb3ctdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmV4cGFuZCB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbV9jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9wX2J1dHRvblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uYnRucywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmUgPT09IGluZGV4ID8gXCJidG5fZGl2IGFjdGl2ZVwiIDogXCJidG5fZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQnRuKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9wX3NlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclNlbGVjdCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi562b6YCJIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIml0ZW1fbGlzdFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0X2RpdlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dEZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5zb3VyY2UpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKGl0ZW0uc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdF9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi56uL5qGI5Y+377yaXCIgKyBfdm0uX3MoaXRlbS5jYXNlTm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLlkI3np7DmiJblp5PlkI3vvJpcIiArIF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X3JpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNhc2VOYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjcyJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwicmlnaHRcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dQaWNrZXJTZWxlY3QsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclNlbGVjdCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1BpY2tlclNlbGVjdFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3AtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvc3VwZXJ2aXNpb24vc2VhcmNoLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuetm+mAiVwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGl2aXNpb25Db2RlID09IFwi5rOV6KeE5aSEXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXZpc2lvbkNvZGUgPT0gXCLmmIbmmI7luILnlJ/mgIHnjq/looPlsYBcIixcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZpc2lvbkNvZGUgPT0gJ+azleinhOWkhCcgfHwgZGl2aXNpb25Db2RlID09ICfmmIbmmI7luILnlJ/mgIHnjq/looPlsYAnXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuaJv+WKnuWNleS9jVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpdmlzaW9uQ29kZSA9PSBcIuazleinhOWkhFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGl2aXNpb25Db2RlID09IFwi5piG5piO5biC55Sf5oCB546v5aKD5bGAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2aXNpb25Db2RlID09ICfms5Xop4TlpIQnIHx8IGRpdmlzaW9uQ29kZSA9PSAn5piG5piO5biC55Sf5oCB546v5aKD5bGAJ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLmRpdmlzaW9uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiZGl2aXNpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5kaXZpc2lvblwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGl2aXNpb25EYXRhLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidmFuLXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLmoYjku7bmnaXmupBcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzaGFwZTogXCJyb3VuZFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic291cmNlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5zb3VyY2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLlvZPkuovkurrlkI3np7DmiJblp5PlkI1cIildKSxcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzaGFwZTogXCJyb3VuZFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLm5hbWUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLm5hbWVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLnpL7kvJrkv6HnlKjku6PnoIEv6Lqr5Lu96K+B5Y+3XCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hhcGU6IFwicm91bmRcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5jcmVkaXRDb2RlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJjcmVkaXRDb2RlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jcmVkaXRDb2RlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wLWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VhcmNoIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YeN572uXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ucXVlcnlMaXN0IH0gfSwgW192bS5fdihcIuehruWumlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVwbGFjZXIpIHtcbiAgaWYgKGlzQ2FsbGFibGUocmVwbGFjZXIpKSByZXR1cm4gcmVwbGFjZXI7XG4gIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJldHVybjtcbiAgdmFyIHJhd0xlbmd0aCA9IHJlcGxhY2VyLmxlbmd0aDtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXdMZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gcmVwbGFjZXJbaV07XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09ICdzdHJpbmcnKSBwdXNoKGtleXMsIGVsZW1lbnQpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09ICdudW1iZXInIHx8IGNsYXNzb2YoZWxlbWVudCkgPT09ICdOdW1iZXInIHx8IGNsYXNzb2YoZWxlbWVudCkgPT09ICdTdHJpbmcnKSBwdXNoKGtleXMsIHRvU3RyaW5nKGVsZW1lbnQpKTtcbiAgfVxuICB2YXIga2V5c0xlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgcm9vdCA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChyb290KSB7XG4gICAgICByb290ID0gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHRoaXMpKSByZXR1cm4gdmFsdWU7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzTGVuZ3RoOyBqKyspIGlmIChrZXlzW2pdID09PSBrZXkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGdldFJlcGxhY2VyRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24nKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG52YXIgdGVzdGVyID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA9IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufTtcblxudmFyIGZpeElsbEZvcm1lZCA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKChleGVjKGxvdywgbWF0Y2gpICYmICFleGVjKGhpLCBuZXh0KSkgfHwgKGV4ZWMoaGksIG1hdGNoKSAmJiAhZXhlYyhsb3csIHByZXYpKSkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG5pZiAoJHN0cmluZ2lmeSkge1xuICAvLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgIHZhciByZXN1bHQgPSBhcHBseShXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA6ICRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xuICAgICAgcmV0dXJuIElMTF9GT1JNRURfVU5JQ09ERSAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnID8gcmVwbGFjZShyZXN1bHQsIHRlc3RlciwgZml4SWxsRm9ybWVkKSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHJlZ2V4cCkgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5kZXgtcGFnZVtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudFtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudFtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIC8qaGVpZ2h0OiAyMTBweDsqL1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjZmY1O1xcbiAgLypiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7Ki9cXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnQgLml0ZW1fY29udGVudCAuZmlyc3RfdG9wW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIC8qbGluZS1oZWlnaHQ6IDE4cHg7Ki9cXG4gIGNvbG9yOiAjMjAyMjI0O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnQgLml0ZW1fY29udGVudCAuZmlyc3RfdG9wX2xpdHRlcltkYXRhLXYtMmY2MzExZGVdIHtcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnQgLmZpcnN0X3RvcF9ub3JtYWxbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnQgLmxhc3RfYm90dG9tW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmxpbmVfY29udGVudCAuaXRlbV9jb250ZW50IC5sYXN0X2JvdHRvbSA+IGRpdltkYXRhLXYtMmY2MzExZGVdIHtcXG4gIHBhZGRpbmc6IDBweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnQgLml0ZW1fY29udGVudCAubGFzdF9ib3R0b20gLmNvbG9yXzBbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnQgLmxhc3RfYm90dG9tIC5jb2xvcl8wIGltZ1tkYXRhLXYtMmY2MzExZGVdIHtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnQgLmxhc3RfYm90dG9tIC5iZ2NvbG9yXzBbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBiYWNrZ3JvdW5kOiAjRkVFN0QwO1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmxpbmVfY29udGVudCAuaXRlbV9jb250ZW50IC5sYXN0X2JvdHRvbSAuYmdjb2xvcl8xW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgYmFja2dyb3VuZDogI0RBRTVGRTtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnQgLml0ZW1fY29udGVudCAubGFzdF9ib3R0b20gLmJnY29sb3JfMltkYXRhLXYtMmY2MzExZGVdIHtcXG4gIGJhY2tncm91bmQ6ICNDQ0YzRTk7XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC50b3BfY29udGVudCAubGluZV9jb250ZW50IC5pdGVtX2NvbnRlbnQgLmxhc3RfYm90dG9tIC5iZ2NvbG9yXzNbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBiYWNrZ3JvdW5kOiAjRkVFMkU5O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmxpbmVfY29udGVudCAuaXRlbV9jb250ZW50IC5sYXN0X2JvdHRvbSAubGFzdF9udW1bZGF0YS12LTJmNjMxMWRlXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogIzIwMjIyNDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLnRvcF9jb250ZW50IC5saW5lX2NvbnRlbnQgLml0ZW1fY29udGVudCAubGFzdF9ib3R0b20gLmxhc3RfdW5OdW1bZGF0YS12LTJmNjMxMWRlXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmxpbmVfY29udGVudCAuaXRlbV9jb250ZW50IC5sYXN0X2JvdHRvbSAubGFzdF91bk51bSA+IGZvbnRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmljb25fY29udGVudFtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAudG9wX2NvbnRlbnQgLmljb25fY29udGVudCA+IGlbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgLypoZWlnaHQ6IGNhbGMoMTAwJSAtIDI1MHB4KTsqL1xcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC50b3BfYnV0dG9uW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAuYm90dG9tX2NvbnRlbnQgLnRvcF9idXR0b24gLmJ0bl9kaXZbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC5ib3R0b21fY29udGVudCAudG9wX2J1dHRvbiAuYWN0aXZlW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzQ0N2JmYztcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC50b3BfYnV0dG9uIC50b3Bfc2VsZWN0W2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC50b3BfYnV0dG9uIC50b3Bfc2VsZWN0W2RhdGEtdi0yZjYzMTFkZV0gIC52YW4tZHJvcGRvd24tbWVudV9faXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC5pdGVtX2xpc3RbZGF0YS12LTJmNjMxMWRlXSB7XFxuICAvKmhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7Ki9cXG4gIC8qb3ZlcmZsb3cteTogYXV0bzsqL1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAuYm90dG9tX2NvbnRlbnQgLml0ZW1fbGlzdCAubGlzdF9kaXZbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI0ZBRkJGRjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAuYm90dG9tX2NvbnRlbnQgLml0ZW1fbGlzdCAubGlzdF9kaXYgLnRpdGxlW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC5pdGVtX2xpc3QgLmxpc3RfZGl2IC50aXRsZSAudGV4dFtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaW5kZXgtcGFnZSAuY29udGVudCAuYm90dG9tX2NvbnRlbnQgLml0ZW1fbGlzdCAubGlzdF9kaXYgLnRpdGxlIC5zdGF0dXNbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC5pdGVtX2xpc3QgLmxpc3RfZGl2IC5saXN0X2NvbnRlbnRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSg0NywgNTcsIDc4LCAwLjUpO1xcbiAgLypoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpOyovXFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5pbmRleC1wYWdlIC5jb250ZW50IC5ib3R0b21fY29udGVudCAuaXRlbV9saXN0IC5saXN0X2RpdiAubGlzdF9jb250ZW50IC5jb250ZW50X2xlZnRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBtaW4td2lkdGg6IDQ2JTtcXG59XFxuLmluZGV4LXBhZ2UgLmNvbnRlbnQgLmJvdHRvbV9jb250ZW50IC5pdGVtX2xpc3QgLmxpc3RfZGl2IC5saXN0X2NvbnRlbnQgLmNvbnRlbnRfcmlnaHRbZGF0YS12LTJmNjMxMWRlXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qbGluZS1oZWlnaHQ6IDc1cHg7Ki9cXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgcGFkZGluZzogMzBweCAxMHB4IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5wb3AtY29udGVudCAucG9wLXRpdGxlW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5wb3AtY29udGVudCAucG9wLXRpdGxlID4gaW1nW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnQgPiBwW2RhdGEtdi0yZjYzMTFkZV0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBtYXJnaW46IDIwcHggNXB4IDVweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0gIC52YW4tc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0gIC52YW4tc2VhcmNoX19jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjk7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtMmY2MzExZGVdICAudmFuLWZpZWxkX19jb250cm9sIHtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTJmNjMxMWRlXSAgLnZhbi1yYWRpbyB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0gIC52YW4tcmFkaW9fX2ljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtMmY2MzExZGVdICAudmFuLXJhZGlvX19pY29uLS1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XFxuICBib3JkZXItY29sb3I6ICMxOTg5ZmE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi0yZjYzMTFkZV0gIC52YW4tY2hlY2tib3gge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtMmY2MzExZGVdICAudmFuLWNoZWNrYm94X19pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTJmNjMxMWRlXSAgLnZhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4OWZhO1xcbiAgYm9yZGVyLWNvbG9yOiAjMTk4OWZhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5wb3AtY29udGVudCAucG9wLWJvdHRvbVtkYXRhLXYtMmY2MzExZGVdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDMwcHggMHB4IDEwcHg7XFxufVxcbi5wb3AtY29udGVudCAucG9wLWJvdHRvbSA+IHNwYW5bZGF0YS12LTJmNjMxMWRlXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmOTtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtYm90dG9tID4gc3BhbltkYXRhLXYtMmY2MzExZGVdOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzVmODtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmNjMxMWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2NmNGNjNzBcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjYzMTFkZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmNjMxMWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOahiOS7tuivpuaDhVxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RCeUlkID0oaWQpPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvY2FzZS9zZWxlY3RCeUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuLy8g6ZuG5L2T6K6o6K666K+m5oOFXHJcbmV4cG9ydCBjb25zdCBkaXNjdXNzU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvZGlzY3Vzcy9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdXBlcnZpc2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBsZWdhbFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2xlZ2FsL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2luZm9ybS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBwdW5pc2hTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9wdW5pc2gvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRIZWFyaW5nQnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaGVhcmluZy9nZXRIZWFyaW5nQnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3RhZ2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdGFnZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuXHJcbi8v5qC55o2udG9rZW7ojrflj5bkvIHkuJrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZ2V0SW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPlueUqOaIt1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlclwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+afpeeci+WuoeaJueWtkOmhueWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlUeXBlQ2FzZUxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvcXVlcnlBcHBMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5paw5bu65a6h5om56KGoXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvaW5zXCIsXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPluWNleS4quWuoeaJueihqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v562+5ZCN5a6h5om5XHJcbmV4cG9ydCBjb25zdCBzaWduUmVwb3J0ID0gKGRhdGEsdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvc2lnbj90eXBlPVwiK3R5cGUsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nu5/orqFcclxuZXhwb3J0IGNvbnN0IGNvdW50SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9nZXRTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5qCh6aqM5a+G56CBXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2NoZWNrUHdkXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5pSv6ZifL+WIhuWxgOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlEaXZpc2lvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2RpdlwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJCYXRjaCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9iYXRjaExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3QgPSAoaW5mbyxkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcGFyYW1zOiBpbmZvLFxyXG4gICAgZGF0YSA6IGRhdGFcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3REZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudHlMaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmQvZ2V0Q291bnR5XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm9MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VJbmZvKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9nZXRCeUlkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2Rpc3RyaWJ1dGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2hhbmRsZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9maW5hbC9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhbnkocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL3F5QnlJbmZvSWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVHcm91cCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvdGltZUdyb3VwXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9nZXRVbml0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvcGFnZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQVlBQUFEZ2tRWVFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDTVNVUkJWQmlWZlkwdERzSlFFQVpubTRjQ2l3SFZFeEJ1MEdCUW5JTUxZSkFrcEtqSzNnS0g1d3c5UlMvUThHZjJROEJMbXpUdDJKMzUxdmlqY2o3akUyN0lNb3c3VTNhMnI1OEFTWlI0VHk3SXNsL0Job2ZsOGRSS1Jrb1hLZTFMN2lYZ1VVRzZ0bjAzTGhZVnNFSlVkcWpYL2FVUlRNVXlCeDBIRGVrY3dCdXcwL0NNdlFJazIvRm44aStNcENqblBZWE8xQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTUNBWUFBQUMwcVVlZUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNyU1VSQlZDaVJqWkM3RllNd0VBVG5lQVNvS2tNUEtnVklFU200RlBVQXJrcEVQZ2Q4QkJqOGZPRnFibmQxWXF0SitYTlNZQVJBdGIybFJJYU5zOVdrdGc3dWlyTjFjR3Q2TW05cWkwcGp5NUNmUVZRYVpFNlY3YUdhQmdEZlp3V0FMVU9PeUlCbzZ6dmpvblBzbkcvdUovQUErNmNaRnlWV2VUUGFPcmoxUCtudEJiWkVhWmIrdXhxL1p6eDJqazZQTDAzMDVUdmprcFBZd256M0svc0Q3RHZqZko4VjY5SytBc0FISGdwSm5ZUTNHTllBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY2MzExZGUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmY2MzExZGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZjYzMTFkZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjYzMTFkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjYzMTFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjYzMTFkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmNjMxMWRlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJmNjMxMWRlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY2FzZUNoZWNrL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmNjMxMWRlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmNjMxMWRlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==