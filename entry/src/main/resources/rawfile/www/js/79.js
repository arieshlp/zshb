(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/index */ "./src/api/index.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import ruleData from '../../json/codeRules.json';


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "codeRules",
  data: function data() {
    return {
      // rules: ruleData.rules
      rules: [],
      showEdit: false,
      btnLoading: false,
      ruleInfo: {},
      showDeptPicker: false,
      broanchs: [],
      DEPT: ''
    };
  },
  mounted: function mounted() {
    this.getRuleList();
  },
  methods: {
    getRuleList: function getRuleList() {
      var _this = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_4__["queryRuleList"])({
        name: ''
      }).then(function (res) {
        _this.rules = res.data;
      });
    },
    edit: function edit(row) {
      this.getDeptList();
      this.ruleInfo = row;
      this.showEdit = true;
    },
    getDeptList: function getDeptList() {
      var _this2 = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_4__["queryHbmDepartment"])().then(function (res) {
        _this2.getTreeData(res.data);

        res.data.forEach(function (items) {
          items.value = items.id;
          items.text = items.name;

          if (items.children) {
            items.children.forEach(function (item) {
              item.value = item.id;
              item.text = item.name;
            });
          }
        });
        _this2.broanchs = res.data;
        _this2.DEPT = _this2.ruleInfo.DEPT_ID;
      });
    },
    getTreeData: function getTreeData(data) {
      var _this3 = this;

      data.forEach(function (items) {
        if (items.children.length > 0) {
          _this3.getTreeData(items.children);
        } else {
          items.children = undefined;
        }
      });
    },
    onConfirmDept: function onConfirmDept(v) {
      console.log(this.DEPT);
      var name = v.selectedOptions.map(function (option) {
        return option.text;
      });
      var value = v.selectedOptions.map(function (option) {
        return option.value;
      });
      this.ruleInfo.DEPT = name[name.length - 1];
      this.ruleInfo.DEPT_ID = value[value.length - 1];
    },
    validEdit: function validEdit() {
      if (this.ruleInfo.PRIMARY_INDICATORS === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请输入一级指标！');
      } else {
        if (this.ruleInfo.TYPE === '') {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请输入二级指标！');
        } else {
          if (this.ruleInfo.RULE === '') {
            Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请输入赋码规则！');
          } else {
            if (this.ruleInfo.RESULT === '') {
              Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请选择赋码结果！');
            } else {
              if (this.ruleInfo.CONVERSION_RULES === '') {
                Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请输入转码规则！');
              } else {
                if (this.ruleInfo.CODING_FROM === '') {
                  Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请输入赋码形式！');
                } else {
                  if (this.ruleInfo.DEPT_ID === '') {
                    Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('请选择责任部门！');
                  } else {
                    this.submit();
                  }
                }
              }
            }
          }
        }
      }
    },
    submit: function submit() {
      var _this4 = this;

      var data = {
        id: this.ruleInfo.ID,
        rule: this.ruleInfo.RULE
      };
      Object(_api_index__WEBPACK_IMPORTED_MODULE_4__["checkRules"])(data).then(function (res) {
        if (res.data.msg === '不存在') {
          var params = _this4.ruleInfo;
          Object(_api_index__WEBPACK_IMPORTED_MODULE_4__["editRules"])(params).then(function (res) {
            if (res.code === '200') {
              Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('修改赋码规则成功！');
              _this4.showEdit = false;

              _this4.getRuleList();
            } else {
              Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])(res.msg);
            }
          });
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('该赋码规则已存在！');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "赋码规则", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        _vm._l(_vm.rules, function (item) {
          return _c("div", [
            _c(
              "div",
              {
                class:
                  item.RESULT === "红码"
                    ? "qrCode-info redBg"
                    : "qrCode-info yellowBg",
                staticStyle: { "margin-top": "10px" },
              },
              [
                _c("div", { staticClass: "company_title" }, [
                  item.RESULT === "红码"
                    ? _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @/assets/polluter/redInfo.png */ "./src/assets/polluter/redInfo.png"),
                        },
                      })
                    : _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @/assets/polluter/yellowInfo.png */ "./src/assets/polluter/yellowInfo.png"),
                        },
                      }),
                  _c("span", { staticClass: "black_content" }, [
                    _vm._v(_vm._s(item.TYPE)),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "tips",
                      staticStyle: { "margin-left": "auto" },
                    },
                    [
                      _c(
                        "span",
                        {
                          class:
                            item.RESULT === "红码"
                              ? "tips_color"
                              : "tips_color_yellow",
                        },
                        [_vm._v(_vm._s(item.RESULT))]
                      ),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码形式")]),
                    _c("span", [_vm._v(_vm._s(item.CODING_FROM))]),
                  ]),
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("责任部门")]),
                    _c("span", [_vm._v(_vm._s(item.DEPT))]),
                  ]),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width no_bottom" }, [
                    _c("span", [_vm._v("转码规则")]),
                    _c("span", [_vm._v(_vm._s(item.CONVERSION_RULES))]),
                  ]),
                ]),
                _c("div", { staticClass: "main_btn" }, [
                  _c(
                    "span",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.edit(item)
                        },
                      },
                    },
                    [_vm._v("修改")]
                  ),
                ]),
              ]
            ),
            _c(
              "div",
              {
                class:
                  item.RESULT === "红码"
                    ? "qrCode-info redBg"
                    : "qrCode-info yellowBg",
                staticStyle: { "margin-top": "0" },
              },
              [
                _c(
                  "div",
                  {
                    class:
                      item.RESULT === "红码"
                        ? "qr_notice_red"
                        : "qr_notice_yellow",
                  },
                  [_vm._v(_vm._s(item.RULE))]
                ),
              ]
            ),
          ])
        }),
        0
      ),
      _c(
        "van-popup",
        {
          attrs: { closeable: false, round: "" },
          model: {
            value: _vm.showEdit,
            callback: function ($$v) {
              _vm.showEdit = $$v
            },
            expression: "showEdit",
          },
        },
        [
          _c("div", { staticClass: "popTitle" }, [_vm._v("修改规则")]),
          _c("div", { staticClass: "popWrapper" }, [
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("赋码结果：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.PRIMARY_INDICATORS,
                      expression: "ruleInfo.PRIMARY_INDICATORS",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "2", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.PRIMARY_INDICATORS },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.ruleInfo,
                        "PRIMARY_INDICATORS",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("二级指标：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.TYPE,
                      expression: "ruleInfo.TYPE",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "2", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.TYPE },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ruleInfo, "TYPE", $event.target.value)
                    },
                  },
                }),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("赋码规则：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.RULE,
                      expression: "ruleInfo.RULE",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "4", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.RULE },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ruleInfo, "RULE", $event.target.value)
                    },
                  },
                }),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("赋码结果：")]),
                _c(
                  "van-radio-group",
                  {
                    staticStyle: { "margin-left": "-30px" },
                    attrs: { direction: "horizontal" },
                    model: {
                      value: _vm.ruleInfo.RESULT,
                      callback: function ($$v) {
                        _vm.$set(_vm.ruleInfo, "RESULT", $$v)
                      },
                      expression: "ruleInfo.RESULT",
                    },
                  },
                  [
                    _c(
                      "van-radio",
                      { attrs: { name: "红码", "icon-size": "16px" } },
                      [_vm._v("红码")]
                    ),
                    _c(
                      "van-radio",
                      { attrs: { name: "黄码", "icon-size": "16px" } },
                      [_vm._v("黄码")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("责任部门：")]),
                _c("van-field", {
                  attrs: {
                    required: "",
                    "is-link": "",
                    readonly: "",
                    name: "picker",
                    "input-align": "left",
                    placeholder: "点击选择分发科室",
                  },
                  on: {
                    click: function ($event) {
                      _vm.showDeptPicker = true
                    },
                  },
                  model: {
                    value: _vm.ruleInfo.DEPT,
                    callback: function ($$v) {
                      _vm.$set(_vm.ruleInfo, "DEPT", $$v)
                    },
                    expression: "ruleInfo.DEPT",
                  },
                }),
                _c(
                  "van-popup",
                  {
                    attrs: { position: "bottom" },
                    model: {
                      value: _vm.showDeptPicker,
                      callback: function ($$v) {
                        _vm.showDeptPicker = $$v
                      },
                      expression: "showDeptPicker",
                    },
                  },
                  [
                    _c("van-cascader", {
                      attrs: { options: _vm.broanchs },
                      on: {
                        change: _vm.onConfirmDept,
                        close: function ($event) {
                          _vm.showDeptPicker = false
                        },
                      },
                      model: {
                        value: _vm.DEPT,
                        callback: function ($$v) {
                          _vm.DEPT = $$v
                        },
                        expression: "DEPT",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("转码规则：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.CONVERSION_RULES,
                      expression: "ruleInfo.CONVERSION_RULES",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "3", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.CONVERSION_RULES },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.ruleInfo,
                        "CONVERSION_RULES",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("赋码形式：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.CODING_FROM,
                      expression: "ruleInfo.CODING_FROM",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "3", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.CODING_FROM },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ruleInfo, "CODING_FROM", $event.target.value)
                    },
                  },
                }),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("数据来源：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruleInfo.SOURCE,
                      expression: "ruleInfo.SOURCE",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "3", placeholder: "请输入" },
                  domProps: { value: _vm.ruleInfo.SOURCE },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ruleInfo, "SOURCE", $event.target.value)
                    },
                  },
                }),
              ]
            ),
          ]),
          _c("div", { staticClass: "popFooter" }, [
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showEdit = false
                  },
                },
              },
              [_vm._v("取消")]
            ),
            _c(
              "div",
              {
                staticStyle: {
                  color: "#1989fa",
                  "border-left": "1px solid #ebedf0",
                },
                attrs: { loading: _vm.btnLoading },
                on: { click: _vm.validEdit },
              },
              [_vm._v("确认 ")]
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

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main_btn[data-v-35eff9f4] {\n  text-align: right;\n  font-size: 14px;\n  margin: 5px;\n  color: #447bfc;\n  cursor: pointer;\n}\n.popTitle[data-v-35eff9f4] {\n  text-align: center;\n  font-weight: bold;\n  line-height: 50px;\n}\n.popWrapper[data-v-35eff9f4] {\n  max-height: 550px;\n}\n.popWrapper .popItem[data-v-35eff9f4] {\n  display: flex;\n  width: 330px;\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n}\n.popWrapper .popItem .label[data-v-35eff9f4] {\n  width: 110px;\n}\n.popWrapper .popItem .inputW[data-v-35eff9f4] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: 100%;\n}\n.popFooter[data-v-35eff9f4] {\n  display: flex;\n  border-top: 1px solid #ebedf0;\n}\n.popFooter div[data-v-35eff9f4] {\n  width: 50%;\n  padding: 14px 0;\n  text-align: center;\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("52468976", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/polluter/redInfo.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/redInfo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAE5SURBVCiRdZI9S4JRGIav+7wvBioUREGbBE1BZNrvqCX7dKlFotG/UYs0tPflUtnYP7CUWluqLYhqiGhQfJ+GUlNPz3Lg/nju+3CO+DO2lB7DqQgug2z2B7RbpBvEnk7qr22tOqaVbB6zEjCMf95BmyrXKh2jLWd3wEo9MtM+zgKMQg8u1nVaP5atzU/Siu6BsC8hQ2TCqdaHfxFFqZBWVPSYQJYgAGyAiRO4Qoix2L1pT6UEkZPPibEQIkY9Nmi5BDLn5WAqBJpAzLM2iUyYrw5ywJN3p4gDiX8SH0JMFWTTHnIV5I0DzmQbmQmaPAJDfeTn75kcwBtByumw/oxpe7CqLoDLAdxsS+fXb90vl5vLIR0AI95yxgsir3L9Cuh9QcvPjNOIFTHLINJAA7gDqoThro6qH23tN2CVXu8gShqCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/yellowInfo.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/yellowInfo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFKSURBVCiRdZIxSyNRFIW/M3kqZAYURMEuLFhts5K/YBEC4lYLIjbaiGyZv6GNWPgHthRdFon+A1HQ1mbXTlh2LTYaJE7mWMS4mWRyi/cu595z7zm8JwbCp8lcihtIVeDTG3wNvgxptKeV1p9+r/pJ2ow3bO0D0xTHg6TNUGudvBM7zeSrzP5gl+AAU7LYzuHyeqg9fdPzj+kPpVL3Fgg52cqqCCmLroY2t4OphBC6DTtP6m0sxRjoHYNRTiO2g83nYktZrMyyotGSWQ3AbBFNKEZFLAAWI/BLYclOMhSPISoC3RUKtcrI44g/A+YE8XFkpFjD/985r4YjuVleSB39AqaGyo9vdzKMhwlVItXa97Z2Rofq2OZ7gZItLbf+Dny55IvhEDMzxtdv7I2J+tM5kPfgs2Q+zdwAVYElTAdxg7gI2eSu6g//+r2vOP1t9KZrneEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/environmentCode/codeRules/index.vue":
/*!*******************************************************!*\
  !*** ./src/views/environmentCode/codeRules/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=35eff9f4&scoped=true& */ "./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& */ "./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35eff9f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/codeRules/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=style&index=0&id=35eff9f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35eff9f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=35eff9f4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeRules/index.vue?vue&type=template&id=35eff9f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_35eff9f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlUnVsZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVJ1bGVzL2luZGV4LnZ1ZT9mYWEwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlUnVsZXMvaW5kZXgudnVlPzk0NTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlUnVsZXMvaW5kZXgudnVlP2RlODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3JlZEluZm8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIveWVsbG93SW5mby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlUnVsZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVJ1bGVzL2luZGV4LnZ1ZT81MDU0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVJ1bGVzL2luZGV4LnZ1ZT80MWM1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVJ1bGVzL2luZGV4LnZ1ZT85MGEyIl0sIm5hbWVzIjpbInF1ZXJ5U3VwZXJ2aXNpb24iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwicXVlcnlIYm1UcmVuZCIsInF1ZXJ5SGJtQW5hbHlzaXMiLCJxdWVyeUhibUNvZGVBbmFseXNpcyIsInF1ZXJ5QXBwcm92YWxMaXN0Iiwic3VibWl0RGVwdEFwcHJvdmFsIiwiZGF0YSIsInF1ZXJ5Q2x1ZVR5cGVzIiwicXVlcnlXUllMaXN0IiwicXVlcnlBcmVhcyIsImdldFRhc2tJbmZvIiwiZ2V0RXZhbHVhdGVJbmZvIiwiZ2V0Umlza1R5cGUiLCJxdWVyeVJ1bGVMaXN0IiwicXVlcnlIYm1EZXBhcnRtZW50IiwiY2hlY2tSdWxlcyIsImVkaXRSdWxlcyIsInF1ZXJ5V1JZTWFwIiwicXVlcnlTdGF0aXN0aWNzIiwiY29tcGxhaW50UHJvcG9ydGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLG1CQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFDQSxlQUZBO0FBR0EscUJBSEE7QUFJQSx1QkFKQTtBQUtBLGtCQUxBO0FBTUEsMkJBTkE7QUFPQSxrQkFQQTtBQVFBO0FBUkE7QUFVQSxHQWJBO0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBQ0EsR0FoQkE7QUFpQkE7QUFDQSxlQURBLHlCQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FMQTtBQU1BLFFBTkEsZ0JBTUEsR0FOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWQTtBQVdBLGVBWEEseUJBV0E7QUFBQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEE7QUFJQTtBQUNBLFNBVEE7QUFVQTtBQUNBO0FBQ0EsT0FkQTtBQWVB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QUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIui1i+eggeinhOWImVwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPjwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIHJ1bGVzXCI+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJpdGVtLlJFU1VMVCA9PT0gJ+e6oueggScgPyAncXJDb2RlLWluZm8gcmVkQmcnIDogJ3FyQ29kZS1pbmZvIHllbGxvd0JnJ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgdi1pZj1cIml0ZW0uUkVTVUxUID09PSAn57qi56CBJ1wiIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3JlZEluZm8ucG5nXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHYtZWxzZSBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dJbmZvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+e3sgaXRlbS5UWVBFIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiaXRlbS5SRVNVTFQgPT09ICfnuqLnoIEnID8gJ3RpcHNfY29sb3InIDogJ3RpcHNfY29sb3JfeWVsbG93J1wiPnt7IGl0ZW0uUkVTVUxUIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7otYvnoIHlvaLlvI88L3NwYW4+PHNwYW4+e3sgaXRlbS5DT0RJTkdfRlJPTSB9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6LSj5Lu76YOo6ZeoPC9zcGFuPjxzcGFuPnt7IGl0ZW0uREVQVCB9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6L2s56CB6KeE5YiZPC9zcGFuPjxzcGFuPnt7IGl0ZW0uQ09OVkVSU0lPTl9SVUxFUyB9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fYnRuXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cImVkaXQoaXRlbSlcIj7kv67mlLk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cIml0ZW0uUkVTVUxUID09PSAn57qi56CBJyA/ICdxckNvZGUtaW5mbyByZWRCZycgOiAncXJDb2RlLWluZm8geWVsbG93QmcnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAwO1wiPlxyXG4gICAgICAgICAgPGRpdiA6Y2xhc3M9XCJpdGVtLlJFU1VMVCA9PT0gJ+e6oueggScgPyAncXJfbm90aWNlX3JlZCcgOiAncXJfbm90aWNlX3llbGxvdydcIj57eyBpdGVtLlJVTEUgfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS3kv67mlLnop4TliJnlvLnmoYYtLT5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dFZGl0XCIgOmNsb3NlYWJsZT1cImZhbHNlXCIgcm91bmQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BUaXRsZVwiPuS/ruaUueinhOWImTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wV3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPui1i+eggee7k+aenO+8mjwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMlwiIHYtbW9kZWw9XCJydWxlSW5mby5QUklNQVJZX0lORElDQVRPUlNcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiIGNsYXNzPVwiaW5wdXRXXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wSXRlbVwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7kuoznuqfmjIfmoIfvvJo8L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjJcIiB2LW1vZGVsPVwicnVsZUluZm8uVFlQRVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgY2xhc3M9XCJpbnB1dFdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPui1i+eggeinhOWIme+8mjwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHYtbW9kZWw9XCJydWxlSW5mby5SVUxFXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+6LWL56CB57uT5p6c77yaPC9zcGFuPlxyXG4gICAgICAgICAgPHZhbi1yYWRpby1ncm91cCB2LW1vZGVsPVwicnVsZUluZm8uUkVTVUxUXCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC0zMHB4XCI+XHJcbiAgICAgICAgICAgIDx2YW4tcmFkaW8gbmFtZT1cIue6oueggVwiIGljb24tc2l6ZT1cIjE2cHhcIj7nuqLnoIE8L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgPHZhbi1yYWRpbyBuYW1lPVwi6buE56CBXCIgaWNvbi1zaXplPVwiMTZweFwiPum7hOeggTwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgPC92YW4tcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+6LSj5Lu76YOo6Zeo77yaPC9zcGFuPlxyXG4gICAgICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJydWxlSW5mby5ERVBUXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlzLWxpbmtcclxuICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgIGlucHV0LWFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLngrnlh7vpgInmi6nliIblj5Hnp5HlrqRcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cInNob3dEZXB0UGlja2VyID0gdHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd0RlcHRQaWNrZXJcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8dmFuLWNhc2NhZGVyXHJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImJyb2FuY2hzXCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJERVBUXCJcclxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkNvbmZpcm1EZXB0XCJcclxuICAgICAgICAgICAgICAgIEBjbG9zZT1cInNob3dEZXB0UGlja2VyID0gZmFsc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvdmFuLWNhc2NhZGVyPlxyXG4gICAgICAgICAgICA8IS0tIDx2YW4tcGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJERVBUX0lEXCJcclxuICAgICAgICAgICAgICAgICAgICAgc2hvdy10b29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgIDpjb2x1bW5zPVwiYnJvYW5jaHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZS1rZXk9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1EZXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgQGNhbmNlbD1cInNob3dEZXB0UGlja2VyID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgLz4tLT5cclxuICAgICAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPui9rOeggeinhOWIme+8mjwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiM1wiIHYtbW9kZWw9XCJydWxlSW5mby5DT05WRVJTSU9OX1JVTEVTXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+6LWL56CB5b2i5byP77yaPC9zcGFuPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIzXCIgdi1tb2RlbD1cInJ1bGVJbmZvLkNPRElOR19GUk9NXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5pWw5o2u5p2l5rqQ77yaPC9zcGFuPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIzXCIgdi1tb2RlbD1cInJ1bGVJbmZvLlNPVVJDRVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgY2xhc3M9XCJpbnB1dFdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcEZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd0VkaXQgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxyXG4gICAgICAgIDxkaXYgOmxvYWRpbmc9XCJidG5Mb2FkaW5nXCIgQGNsaWNrPVwidmFsaWRFZGl0XCIgc3R5bGU9XCJjb2xvcjogIzE5ODlmYTtib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmVkZjBcIj7noa7orqRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3Zhbi1wb3B1cD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLy8gaW1wb3J0IHJ1bGVEYXRhIGZyb20gJy4uLy4uL2pzb24vY29kZVJ1bGVzLmpzb24nO1xyXG4gIGltcG9ydCB7cXVlcnlSdWxlTGlzdCwgcXVlcnlIYm1EZXBhcnRtZW50LCBjaGVja1J1bGVzLCBlZGl0UnVsZXN9IGZyb20gJ0AvYXBpL2luZGV4JztcclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImNvZGVSdWxlc1wiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBydWxlczogcnVsZURhdGEucnVsZXNcclxuICAgICAgICBydWxlczogW10sXHJcbiAgICAgICAgc2hvd0VkaXQ6IGZhbHNlLFxyXG4gICAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHJ1bGVJbmZvOiB7fSxcclxuICAgICAgICBzaG93RGVwdFBpY2tlcjogZmFsc2UsXHJcbiAgICAgICAgYnJvYW5jaHM6IFtdLFxyXG4gICAgICAgIERFUFQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmdldFJ1bGVMaXN0KCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRSdWxlTGlzdCgpIHtcclxuICAgICAgICBxdWVyeVJ1bGVMaXN0KHtuYW1lOiAnJ30pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMucnVsZXMgPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0KHJvdykge1xyXG4gICAgICAgIHRoaXMuZ2V0RGVwdExpc3QoKTtcclxuICAgICAgICB0aGlzLnJ1bGVJbmZvID0gcm93O1xyXG4gICAgICAgIHRoaXMuc2hvd0VkaXQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXREZXB0TGlzdCgpIHtcclxuICAgICAgICBxdWVyeUhibURlcGFydG1lbnQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldFRyZWVEYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnZhbHVlID0gaXRlbXMuaWQ7XHJcbiAgICAgICAgICAgIGl0ZW1zLnRleHQgPSBpdGVtcy5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBpdGVtcy5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuYnJvYW5jaHMgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMuREVQVCA9IHRoaXMucnVsZUluZm8uREVQVF9JRDtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRUcmVlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW1zLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUcmVlRGF0YShpdGVtcy5jaGlsZHJlbik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtcy5jaGlsZHJlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1EZXB0KHYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkRFUFQpXHJcbiAgICAgICAgbGV0IG5hbWUgPSB2LnNlbGVjdGVkT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnRleHQpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHYuc2VsZWN0ZWRPcHRpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgIHRoaXMucnVsZUluZm8uREVQVCA9IG5hbWVbbmFtZS5sZW5ndGggLSAxXTtcclxuICAgICAgICB0aGlzLnJ1bGVJbmZvLkRFUFRfSUQgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcclxuICAgICAgfSxcclxuICAgICAgdmFsaWRFZGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJ1bGVJbmZvLlBSSU1BUllfSU5ESUNBVE9SUyA9PT0gJycpIHtcclxuICAgICAgICAgIFRvYXN0KCfor7fovpPlhaXkuIDnuqfmjIfmoIfvvIEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMucnVsZUluZm8uVFlQRSA9PT0gJycpIHtcclxuICAgICAgICAgICAgVG9hc3QoJ+ivt+i+k+WFpeS6jOe6p+aMh+agh++8gScpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucnVsZUluZm8uUlVMRSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICBUb2FzdCgn6K+36L6T5YWl6LWL56CB6KeE5YiZ77yBJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZUluZm8uUkVTVUxUID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+ivt+mAieaLqei1i+eggee7k+aenO+8gScpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlSW5mby5DT05WRVJTSU9OX1JVTEVTID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICBUb2FzdCgn6K+36L6T5YWl6L2s56CB6KeE5YiZ77yBJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlSW5mby5DT0RJTkdfRlJPTSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6K+36L6T5YWl6LWL56CB5b2i5byP77yBJyk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZUluZm8uREVQVF9JRCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfor7fpgInmi6notKPku7vpg6jpl6jvvIEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgIGlkOiB0aGlzLnJ1bGVJbmZvLklELFxyXG4gICAgICAgICAgcnVsZTogdGhpcy5ydWxlSW5mby5SVUxFXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGVja1J1bGVzKGRhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5tc2cgPT09ICfkuI3lrZjlnKgnKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnJ1bGVJbmZvO1xyXG4gICAgICAgICAgICBlZGl0UnVsZXMocGFyYW1zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S/ruaUuei1i+eggeinhOWImeaIkOWKn++8gScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RWRpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSdWxlTGlzdCgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdChyZXMubXNnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdCgn6K+l6LWL56CB6KeE5YiZ5bey5a2Y5Zyo77yBJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLm1haW5fYnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBjb2xvcjogIzQ0N2JmYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wb3BUaXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcFdyYXBwZXIge1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcblxyXG4gICAgLnBvcEl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMzMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0VyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcEZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjA7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIui1i+eggeinhOWImVwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiwgZml4ZWQ6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIF92bS5fbChfdm0ucnVsZXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICBpdGVtLlJFU1VMVCA9PT0gXCLnuqLnoIFcIlxuICAgICAgICAgICAgICAgICAgICA/IFwicXJDb2RlLWluZm8gcmVkQmdcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicXJDb2RlLWluZm8geWVsbG93QmdcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uUkVTVUxUID09PSBcIue6oueggVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvcmVkSW5mby5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIveWVsbG93SW5mby5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxhY2tfY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLlRZUEUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5SRVNVTFQgPT09IFwi57qi56CBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0aXBzX2NvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0aXBzX2NvbG9yX3llbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uUkVTVUxUKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LWL56CB5b2i5byPXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLkNPRElOR19GUk9NKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLotKPku7vpg6jpl6hcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uREVQVCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui9rOeggeinhOWImVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5DT05WRVJTSU9OX1JVTEVTKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9idG5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkv67mlLlcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgIGl0ZW0uUkVTVUxUID09PSBcIue6oueggVwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJxckNvZGUtaW5mbyByZWRCZ1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJxckNvZGUtaW5mbyB5ZWxsb3dCZ1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjBcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLlJFU1VMVCA9PT0gXCLnuqLnoIFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInFyX25vdGljZV9yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInFyX25vdGljZV95ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLlJVTEUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjbG9zZWFibGU6IGZhbHNlLCByb3VuZDogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dFZGl0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dFZGl0ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93RWRpdFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcFRpdGxlXCIgfSwgW192bS5fdihcIuS/ruaUueinhOWImVwiKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wV3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi6LWL56CB57uT5p6c77yaXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ydWxlSW5mby5QUklNQVJZX0lORElDQVRPUlMsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlSW5mby5QUklNQVJZX0lORElDQVRPUlNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiMlwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ydWxlSW5mby5QUklNQVJZX0lORElDQVRPUlMgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucnVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBSSU1BUllfSU5ESUNBVE9SU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuS6jOe6p+aMh+agh++8mlwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucnVsZUluZm8uVFlQRSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJ1bGVJbmZvLlRZUEVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiMlwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ydWxlSW5mby5UWVBFIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ydWxlSW5mbywgXCJUWVBFXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLotYvnoIHop4TliJnvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJ1bGVJbmZvLlJVTEUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlSW5mby5SVUxFXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWlXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucnVsZUluZm8uUlVMRSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucnVsZUluZm8sIFwiUlVMRVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi6LWL56CB57uT5p6c77yaXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZhbi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiLTMwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ydWxlSW5mby5SRVNVTFQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ydWxlSW5mbywgXCJSRVNVTFRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJydWxlSW5mby5SRVNVTFRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIue6oueggVwiLCBcImljb24tc2l6ZVwiOiBcIjE2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIue6oueggVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwi6buE56CBXCIsIFwiaWNvbi1zaXplXCI6IFwiMTZweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6buE56CBXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLotKPku7vpg6jpl6jvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nliIblj5Hnp5HlrqRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93RGVwdFBpY2tlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJ1bGVJbmZvLkRFUFQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJ1bGVJbmZvLCBcIkRFUFRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJ1bGVJbmZvLkRFUFRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0RlcHRQaWNrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93RGVwdFBpY2tlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93RGVwdFBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tY2FzY2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5icm9hbmNocyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IF92bS5vbkNvbmZpcm1EZXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dEZXB0UGlja2VyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ERVBULFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkRFUFQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIkRFUFRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi6L2s56CB6KeE5YiZ77yaXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ydWxlSW5mby5DT05WRVJTSU9OX1JVTEVTLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicnVsZUluZm8uQ09OVkVSU0lPTl9SVUxFU1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIzXCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJ1bGVJbmZvLkNPTlZFUlNJT05fUlVMRVMgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucnVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNPTlZFUlNJT05fUlVMRVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLotYvnoIHlvaLlvI/vvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJ1bGVJbmZvLkNPRElOR19GUk9NLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicnVsZUluZm8uQ09ESU5HX0ZST01cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiM1wiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ydWxlSW5mby5DT0RJTkdfRlJPTSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucnVsZUluZm8sIFwiQ09ESU5HX0ZST01cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuaVsOaNruadpea6kO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucnVsZUluZm8uU09VUkNFLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicnVsZUluZm8uU09VUkNFXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjNcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWlXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucnVsZUluZm8uU09VUkNFIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ydWxlSW5mbywgXCJTT1VSQ0VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BGb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0VkaXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxOTg5ZmFcIixcbiAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWxlZnRcIjogXCIxcHggc29saWQgI2ViZWRmMFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkRWRpdCB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluX2J0bltkYXRhLXYtMzVlZmY5ZjRdIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcFRpdGxlW2RhdGEtdi0zNWVmZjlmNF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuLnBvcFdyYXBwZXJbZGF0YS12LTM1ZWZmOWY0XSB7XFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW1bZGF0YS12LTM1ZWZmOWY0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbSAubGFiZWxbZGF0YS12LTM1ZWZmOWY0XSB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbi5wb3BXcmFwcGVyIC5wb3BJdGVtIC5pbnB1dFdbZGF0YS12LTM1ZWZmOWY0XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlZGYwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBvcEZvb3RlcltkYXRhLXYtMzVlZmY5ZjRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMDtcXG59XFxuLnBvcEZvb3RlciBkaXZbZGF0YS12LTM1ZWZmOWY0XSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTRweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1ZWZmOWY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTI0Njg5NzZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNWVmZjlmNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1ZWZmOWY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOmmlumhtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v546v5L+d56CBXHJcbmV4cG9ydCBjb25zdCBxdWVyeVN1cGVydmlzaW9uID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3N1cGVydmlzaW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y+Y5YyW6LaL5Yq/XHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibVRyZW5kID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NoYW5naW5nX3RyZW5kcycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHljp/lm6DliIbmnpBcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvY2F1c2VfYW5hbHlzaXMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUNvZGVBbmFseXNpcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fZGV0YWlsJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+W+heWuoeaguOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlBcHByb3ZhbExpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvcGVuZGluZ19yZXZpZXdfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lrqHmoLhcclxuZXhwb3J0IGNvbnN0IHN1Ym1pdERlcHRBcHByb3ZhbCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS9kZXBhcnRtZW50X2FwcHJvdmFsJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vIOi1i+eggeexu+Wei+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlDbHVlVHlwZXMgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvdHlwZV9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5rGh5p+T5rqQ5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVdSWUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5Yy65Z+f5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUFyZWFzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2RpdmlzaW9uX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/ku7vliqHmpoLmi6xcclxuZXhwb3J0IGNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9sYXcvdGFza19zdW1tYXJpemUnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/po47pmanmgLvop4hcclxuZXhwb3J0IGNvbnN0IGdldEV2YWx1YXRlSW5mbyA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3JlZ2lvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDpo47pmanpl67popjnsbvlnotcclxuZXhwb3J0IGNvbnN0IGdldFJpc2tUeXBlID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS90b3BfaW5mbycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LWL56CB6KeE5YiZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggeinhOWImeafpeivolxyXG5leHBvcnQgY29uc3QgcXVlcnlSdWxlTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvcnVsZV9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+mDqOmXqOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1EZXBhcnRtZW50ID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2ludGVyZmFjZS9kZXB0L2RlcHRfdHJlZScsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+agoemqjFxyXG5leHBvcnQgY29uc3QgY2hlY2tSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvY2hlY2snLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vIOS/ruaUueinhOWImVxyXG5leHBvcnQgY29uc3QgZWRpdFJ1bGVzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS91cGRhdGUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Zyw5Zu+ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIOWcsOWbvueCueS9jVxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllNYXAgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX21hcCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g57uf6K6h5oql6KGoID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjb25zdCBxdWVyeVN0YXRpc3RpY3MgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvYXBwL3N0YXRpc3RpY3MvZGl2aXNpb25fcGllJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWKqOaAgeivhOS7tyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+WQhOWMuuWfn+aKleivieWNoOavlFxyXG5leHBvcnQgY29uc3QgY29tcGxhaW50UHJvcG9ydGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6Jy9jbHVzdGVyL2FpclF1YWxpdHkvY29tcGxhaW50UHJvcG9ydGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBT0NBWUFBQUFmU0MzUkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUU1U1VSQlZDaVJkWkk5UzRKUkdJYXYrN3d2QmlvVVJFR2JCRTFCWk5ydnFDWDdkS2xGb3RHL1VZczB0UGZsVXRuWVA3Q1VXbHVxTFlocWlHaFFmSitHVWxOUHozTGcvbmp1KzNDTytETzJsQjdEcVFndWcyejJCN1JicEJ2RW5rN3FyMjJ0T3FhVmJCNnpFakNNZjk1Qm15clhLaDJqTFdkM3dFbzlNdE0remdLTVFnOHUxblZhUDVhdHpVL1NpdTZCc0M4aFEyVENxZGFIZnhGRnFaQldWUFNZUUpZZ0FHeUFpUk80UW9peDJMMXBUNlVFa1pQUGliRVFJa1k5Tm1pNUJETG41V0FxQkpwQXpMTTJpVXlZcnc1eXdKTjNwNGdEaVg4U0gwSk1GV1RUSG5JVjVJMER6bVFibVFtYVBBSkRmZVRuNzVrY3dCdEJ5dW13L294cGU3Q3FMb0RMQWR4c1MrZlhiOTB2bDV2TElSMEFJOTV5eGdzaXIzTDlDdWg5UWN2UGpOT0lGVEhMSU5KQUE3Z0Rxb1Rocm82cUgyM3ROMkNWWHU4Z1NocUNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRktTVVJCVkNpUmRaSXhTeU5SRklXL00za3FaQVlVUk1FdUxGaHRzNUsvWUJFQzRsWUxJamJhaUd5WnY2R05XUGdIdGhSZEZvbitBMUhRMW1iWFRsaDJMVFlhSkU3bVdNUzRtV1J5aS9jdTU5NXo3em04SndiQ3A4bGNpaHRJVmVEVEczd052Z3hwdEtlVjFwOStyL3BKMm93M2JPMEQweFRIZzZUTlVHdWR2Qk03emVTcnpQNWdsK0FBVTdMWXp1SHllcWc5ZmRQemora1BwVkwzRmdnNTJjcXFDQ21Mcm9ZMnQ0T3BoQkM2RFR0UDZtMHN4UmpvSFlOUlRpTzJnODNuWWt0WnJNeXlvdEdTV1EzQWJCRk5LRVpGTEFBV0kvQkxZY2xPTWhTUElTb0MzUlVLdGNySTQ0Zy9BK1lFOFhGa3BGakQvOTg1cjRZanVWbGVTQjM5QXFhR3lvOXZkektNaHdsVkl0WGE5N1oyUm9mcTJPWjdnWkl0TGJmK0RueTU1SXZoRURNenh0ZHY3STJKK3RNNWtQZmdzMlEremR3QVZZRWxUQWR4ZzdnSTJlU3U2Zy8vK3Iydk9QMXQ5S1pybmVFQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1ZWZmOWY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1ZWZmOWY0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzVlZmY5ZjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzVlZmY5ZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzVlZmY5ZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzVlZmY5ZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNWVmZjlmNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNWVmZjlmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlUnVsZXMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzVlZmY5ZjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzVlZmY5ZjQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9