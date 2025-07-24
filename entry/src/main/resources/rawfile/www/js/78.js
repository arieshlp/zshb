(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "",
      basin: '',
      lyName: '',
      lyStation: []
    };
  },
  mounted: function mounted() {
    this.lyName = this.$route.query.title;
    this.title = this.$route.query.title;
    this.basin = this.$route.query.basin;
  },
  watch: {
    lyName: function lyName(val) {
      if (val) {
        this.getLyInfo();
      }
    }
  },
  methods: {
    getLyInfo: function getLyInfo() {
      var _this = this;

      if (this.lyName === "滇池水质情况") {
        Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_5__["dcSzList"])().then(function (res) {
          if (res.code == "200") {
            _this.lyStation = res.data;
          }
        });
      } else {
        var info = {
          type: this.lyName.includes('县') ? '' : '市级',
          //县级以上就是查全部
          basin: this.basin
        };
        Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_5__["skList"])(info).then(function (res) {
          if (res.code == "200") {
            _this.lyStation = res.data;
          }
        });
      }
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return "target2";
      } else if (value === "Ⅱ") {
        return "target2";
      } else if (value === "Ⅲ") {
        return "target3";
      } else if (value === "Ⅳ") {
        return "target4";
      } else if (value === "Ⅴ") {
        return "target5";
      } else if (value === "劣Ⅴ") {
        return "target6";
      } else {
        return "target0";
      }
    },
    toStation: function toStation(item) {
      this.$router.push({
        name: "stationDetail",
        query: {
          // mc: item.lakeName,
          type: item.monitoringMethod == "自动" ? "时" : "月",
          id: item.sectionId || item.lakeId,
          time: dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD'),
          flagType: item.type // listType: item.type,
          // zdType: item.monitoringMethod,

        }
      });
    },
    onMapQuery: function onMapQuery() {
      this.$router.push({
        name: 'rangeMap',
        query: {
          type: '饮用水'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true& ***!
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
        attrs: { title: _vm.title, "left-arrow": "", fixed: "" },
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
                  { staticClass: "into-map", on: { click: _vm.onMapQuery } },
                  [_vm._v("进入地图")]
                ),
                _c("img", {
                  staticStyle: { width: "20px" },
                  attrs: { src: __webpack_require__(/*! @/assets/moreMap.png */ "./src/assets/moreMap.png") },
                }),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _vm._l(_vm.lyStation, function (item) {
            return _c("div", [
              _c(
                "div",
                {
                  staticClass: "basin-name fs",
                  on: {
                    click: function ($event) {
                      return _vm.toStation(item)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "fs" }, [
                    _c("img", {
                      staticStyle: { width: "20px" },
                      attrs: { src: __webpack_require__(/*! @/assets/滇池.png */ "./src/assets/滇池.png") },
                    }),
                    _c("span", { staticClass: "name" }, [
                      _vm._v(_vm._s(item.lakeName)),
                    ]),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(
                            _vm.replaceString(item.waterQualityLevel) || "-"
                          ) +
                          ")",
                        margin: "0 30px 0 16px",
                      },
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.replaceString(item.waterQualityLevel) || "-"
                          ) +
                          " "
                      ),
                    ]
                  ),
                  _c("div", { staticClass: "site-target" }, [
                    _vm._v(" 目标 "),
                    _c(
                      "span",
                      {
                        class: [
                          "target-level",
                          _vm.judgeTargetLevel(
                            _vm.replaceString(item.waterQualityTarget) || "-"
                          ),
                        ],
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.replaceString(item.waterQualityTarget) || "-"
                            ) +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
              _c(
                "div",
                {
                  class: [
                    "factor-wrapper",
                    item.state
                      ? "factor-wrapper-exceed"
                      : "factor-wrapper-standard",
                  ],
                  on: {
                    click: function ($event) {
                      return _vm.toStation(item)
                    },
                  },
                },
                [
                  _c("div", { class: item.state ? "exceed" : "standard" }, [
                    _vm._v(_vm._s(item.state ? "超标" : "达标")),
                  ]),
                  _c("div", { staticClass: "time" }, [
                    _vm._v(
                      "监测时间：" +
                        _vm._s(_vm.dayjs(item.createTime).format("YYYY-MM-DD"))
                    ),
                  ]),
                  _c(
                    "div",
                    { staticClass: "monitor-wrapper fs" },
                    _vm._l(item.factorList, function (e) {
                      return _c(
                        "div",
                        {
                          class: [
                            "monitor-item",
                            item.state
                              ? "monitor-item-exceed"
                              : "monitor-item-standard",
                            "fs",
                          ],
                        },
                        [
                          _c("span", { staticClass: "num" }, [
                            _vm._v(_vm._s(e.value)),
                            _c("br"),
                          ]),
                          _c("div", { staticClass: "factor-name" }, [
                            _vm._v(" " + _vm._s(e.factorName) + " "),
                            _c("br"),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.factorName != "ph",
                                    expression: "e.factorName != 'ph'",
                                  },
                                ],
                                staticClass: "unit",
                              },
                              [_vm._v(_vm._s(e.unit))]
                            ),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                  _c("div", { staticClass: "notice" }, [
                    _vm._v(
                      _vm._s(
                        item.monitoringMethod === "自动"
                          ? "自动监测数据未经国家审核，仅供参考"
                          : "数据来源：昆明市环境监测中心"
                      )
                    ),
                  ]),
                ]
              ),
            ])
          }),
          _vm.lyStation.length === 0
            ? _c("van-empty", { attrs: { description: "暂无数据" } })
            : _vm._e(),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-4a0254d8] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: underline;\n}\n.basin-name[data-v-4a0254d8] {\n  display: flex;\n  align-items: center;\n  margin: 19px 24px 11px;\n}\n.basin-name .name[data-v-4a0254d8] {\n  padding-left: 10px;\n  color: #121236;\n  font-size: 14px;\n  font-weight: bold;\n}\n.factor-wrapper-standard[data-v-4a0254d8] {\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 30%), white;\n}\n.factor-wrapper-exceed[data-v-4a0254d8] {\n  background: linear-gradient(180deg, rgba(255, 53, 8, 0.06) 0%, rgba(255, 53, 8, 0) 30%), white;\n}\n.factor-wrapper[data-v-4a0254d8] {\n  position: relative;\n  margin: 0 8px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.factor-wrapper .standard[data-v-4a0254d8],\n.factor-wrapper .exceed[data-v-4a0254d8] {\n  position: absolute;\n  right: 0;\n  padding: 5px 13px;\n  border-radius: 0px 10px 0px 10px;\n  color: #fff;\n  font-size: 12px;\n  border: 1px solid white;\n}\n.factor-wrapper .standard[data-v-4a0254d8] {\n  background: linear-gradient(90deg, rgba(68, 123, 252, 0.8) 0%, rgba(68, 123, 252, 0.2) 100%);\n}\n.factor-wrapper .exceed[data-v-4a0254d8] {\n  background: linear-gradient(90deg, rgba(255, 53, 8, 0.8) 0%, rgba(255, 53, 8, 0.2) 100%);\n}\n.factor-wrapper .time[data-v-4a0254d8] {\n  padding: 15px 22px 10px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.factor-wrapper .monitor-wrapper[data-v-4a0254d8] {\n  margin: 0 10px;\n  flex-wrap: wrap;\n}\n.factor-wrapper .monitor-wrapper .monitor-item[data-v-4a0254d8] {\n  width: 25%;\n  height: 40px;\n  padding: 2px 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.factor-wrapper .monitor-wrapper .monitor-item .num[data-v-4a0254d8] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.factor-wrapper .monitor-wrapper .monitor-item .num .multiple[data-v-4a0254d8] {\n  font-weight: normal;\n  transform: scale(0.7);\n  font-size: 12px;\n}\n.factor-wrapper .monitor-wrapper .monitor-item .factor-name[data-v-4a0254d8] {\n  text-align: center;\n  color: #25396f;\n}\n.factor-wrapper .monitor-wrapper .monitor-item .factor-name .unit[data-v-4a0254d8] {\n  font-size: 12px;\n  transform: scale(0.8);\n  color: rgba(37, 57, 111, 0.5);\n}\n.factor-wrapper .monitor-wrapper .monitor-item-standard[data-v-4a0254d8] {\n  background: rgba(4, 199, 4, 0.02);\n  border: 1px solid rgba(4, 199, 4, 0.1);\n}\n.factor-wrapper .monitor-wrapper .monitor-item-standard .num[data-v-4a0254d8] {\n  color: #04c704;\n}\n.factor-wrapper .monitor-wrapper .monitor-item-exceed[data-v-4a0254d8] {\n  background: rgba(255, 53, 8, 0.02);\n  border: 1px solid rgba(255, 53, 8, 0.1);\n}\n.factor-wrapper .monitor-wrapper .monitor-item-exceed .num[data-v-4a0254d8] {\n  color: #ff3508;\n}\n.factor-wrapper .notice[data-v-4a0254d8] {\n  padding-bottom: 8px;\n  padding-right: 12px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  text-align: right;\n}\n.site-target[data-v-4a0254d8] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.target-level[data-v-4a0254d8] {\n  display: inline-block;\n  margin-left: 5px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.exceed[data-v-4a0254d8] {\n  font-size: 14px;\n  color: #ff8d1a;\n}\n.standard[data-v-4a0254d8] {\n  color: #447bfc;\n}\n.num[data-v-4a0254d8] {\n  font-size: 14px;\n  color: #121236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("353f7fab", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/water_envir.js":
/*!********************************!*\
  !*** ./src/api/water_envir.js ***!
  \********************************/
/*! exports provided: ranking, yearRankList, rankList, rankDetail, scaleMarks, waterBasicData, sectionInfo, sectionList, stationInfo, upStreamOver, lakeSiteList, querySectionInfo, stationDes, riverCourseDetail, hourLine, waterPollution, upstreamPollution, getUpList, upStreamWater, upstreamSewage, purificationPlant, dataTable, jhcInfo, lyBasin, lyDetail, dcSz, dcSzList, yysInfo, skList, waterBodyList, waterPlantList, reservoirList, waterPlantRiver, waterPlantSite, resourceStat, waterFunctionList, waterFunctionDetail, involveWater, sewageDetail, sewagePcDetail, sewageSyDetail, sewageJcDetail, sewageZzDetail, pollutionList, sewageStat, riverCourseStat, riverCourseList, waterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRankList", function() { return yearRankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankList", function() { return rankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankDetail", function() { return rankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleMarks", function() { return scaleMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBasicData", function() { return waterBasicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionInfo", function() { return sectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionList", function() { return sectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationInfo", function() { return stationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamOver", function() { return upStreamOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lakeSiteList", function() { return lakeSiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySectionInfo", function() { return querySectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationDes", function() { return stationDes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseDetail", function() { return riverCourseDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hourLine", function() { return hourLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPollution", function() { return waterPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamPollution", function() { return upstreamPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpList", function() { return getUpList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamWater", function() { return upStreamWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamSewage", function() { return upstreamSewage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purificationPlant", function() { return purificationPlant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTable", function() { return dataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jhcInfo", function() { return jhcInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyBasin", function() { return lyBasin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyDetail", function() { return lyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSz", function() { return dcSz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSzList", function() { return dcSzList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yysInfo", function() { return yysInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skList", function() { return skList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBodyList", function() { return waterBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantList", function() { return waterPlantList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservoirList", function() { return reservoirList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantRiver", function() { return waterPlantRiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantSite", function() { return waterPlantSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceStat", function() { return resourceStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionList", function() { return waterFunctionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionDetail", function() { return waterFunctionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "involveWater", function() { return involveWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageDetail", function() { return sewageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewagePcDetail", function() { return sewagePcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageSyDetail", function() { return sewageSyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageJcDetail", function() { return sewageJcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageZzDetail", function() { return sewageZzDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollutionList", function() { return pollutionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageStat", function() { return sewageStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseStat", function() { return riverCourseStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseList", function() { return riverCourseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterList", function() { return waterList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl = "/water"; //服务器是water类，本地没有加

/*
大竞赛水治理排名
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/ranking",
    method: "get",
    params: data
  });
}
/*
水环境年底排名列表
 */

function yearRankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/yearRankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名详情
 */

function rankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名各区域详情
 */

function rankDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankDetail",
    method: "get",
    params: data
  });
}
/*
 各县（市）区、开发度假园区季度地表水环境质量评分详情
 */

function scaleMarks(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/scaleMarks",
    method: "get",
    params: data
  });
}
/*
全市水环境概况总体情况
 */

function waterBasicData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData",
    method: "get",
    params: data
  });
}
/*
断面信息
 */

function sectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/waterBasicData/sectionInfo",
    method: "post",
    data: data
  });
}
/*
断面列表--国、省、市
 */

function sectionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/sectionList",
    method: "post",
    data: data
  });
} // 断面信息--国、省、市

function stationInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section",
    method: "post",
    data: data
  });
} // 断面信息--查询上游超标

function upStreamOver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upStreamOver",
    method: "post",
    data: data
  });
} // 断面信息--查询湖库的监测断面

function lakeSiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/lakeSiteList",
    method: "get",
    params: data
  });
} // 断面-河流时值曲线

function querySectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/querySectionInfo",
    method: "get",
    params: data
  });
} // 断面信息--国、省、市

function stationDes(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/siteDetail",
    method: "GET",
    params: data
  });
} // 河流详情-河道详情

function riverCourseDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseDetail",
    method: "GET",
    params: data
  });
} // 断面-时值曲线

function hourLine(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/curve",
    method: "post",
    data: data
  });
} // 断面信息--周边涉水污染源

function waterPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/pollution",
    method: "get",
    params: data
  });
}
function upstreamPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamPollution",
    method: "get",
    params: data
  });
} // 断面信息--上游断面列表
// export function getUpList(data) {
//   return request({
//     url: baseUrl + "/water/section/upStream",
//     method: "post",
//     data: data,
//   });
// }

function getUpList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSection",
    method: "get",
    params: data
  });
} // 断面信息--上游水库

function upStreamWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamWater",
    method: "get",
    params: data
  });
} // 断面信息--上游排口

function upstreamSewage(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSewage",
    method: "get",
    params: data
  });
} // 断面信息--上游水质净化厂

function purificationPlant(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/purificationPlant",
    method: "post",
    data: data
  });
} // 断面--监测详情

function dataTable(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/dataTable",
    method: "post",
    data: data
  });
} // 断面--水质净化厂详情

function jhcInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "post",
    data: data
  });
} // 昆明水环境-流域水质优良概况

function lyBasin(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin",
    method: "get",
    params: data
  });
} // 昆明水环境-流域水质优良概况-详情

function lyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/details",
    method: "get",
    params: data
  });
} // 首页 - 滇池水质

function dcSz() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/dcData",
    method: "get"
  });
} // 首页 - 滇池水质 - 水质列表

function dcSzList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/dcList",
    method: "get"
  });
} // 首页-饮用水源地

function yysInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/drinkSource",
    method: "get",
    params: data
  });
} // 首页-饮用水源地-水库列表

function skList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/drinkSourceList",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布及库容

function waterBodyList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/waterBodyDistribution",
    method: "get",
    params: data
  });
} // 昆明市水环境-水质净化厂分布

function waterPlantList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布

function reservoirList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterList",
    method: "get",
    params: data
  });
} // 水质净化厂河道断面详情

function waterPlantRiver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/detail",
    method: "get",
    params: data
  });
} // 水质净化厂补水断面

function waterPlantSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/sites",
    method: "get",
    params: data
  });
}
/*
首页水资源查询
 */

function resourceStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/resourceStat",
    method: "get",
    params: data
  });
} // 水功能区列表

function waterFunctionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncList",
    method: "get",
    params: data
  });
} // 水功能区详情

function waterFunctionDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncDetail",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源
 */

function involveWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/stat",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源详情
 */

function sewageDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-排查列表
 */

function sewagePcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewagePcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-溯源列表
 */

function sewageSyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageSyDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-监测列表
 */

function sewageJcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageJcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-整治列表
 */

function sewageZzDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageZzDetail",
    method: "get",
    params: data
  });
}
/*
涉水污染源列表
 */

function pollutionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sswrylb",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源列表tab总数
 */

function sewageStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageStat",
    method: "get",
    params: data
  });
}
/*
流域-河道信息统计
 */

function riverCourseStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseStat",
    method: "get",
    params: data
  });
}
/*
流域-河道情况
 */

function riverCourseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseList",
    method: "get",
    params: data
  });
}
/*
流域-根据流域查询河道下拉框
 */

function waterList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/waterList",
    method: "get",
    params: data
  });
}

/***/ }),

/***/ "./src/assets/moreMap.png":
/*!********************************!*\
  !*** ./src/assets/moreMap.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFhSURBVFiF7VZbboQwDJxUcK41Um4F0rIS3CoS2XOB5H4ESoAANm21P8xnHvbErwlw48aHYa5cslVfAwDYPGZL/HJN7v+dgK36GmyeO9teSyRTOS8HBh8eIbAhKB72pXDerZY8DL9guADgF2enFAkgYmqrnsAmJuBdmxUJgjRb5kKSCnEEFjD8Sqy9Vyu0OfMLAmtjKeNeaOsSgSXi9pvX9jrjENIu8ABiB2TLoRtTQSMhStw5hbhdbDkcN+AKrs1EtuUpSBXeH5xVTcJNq6WxadEj6IpQ8jJNpLQEXJP7EwdeK0jqNnRNXu9uKl+vJmCrnsY571POXZN7W/WksanRgif2C9C7NiuiIhXL8mkEIiGanE91MBvfhp7AppNEQzIJfxxvFDB8Th7TS6f9KBKEk4koS8E8BYOxdLEForEmCCRZpgWGi0UNhF/P2R1RDegmYcgpJdUwOH3jwiy4ceOj+Ab5GJxkf+Lb7wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/滇池.png":
/*!***************************!*\
  !*** ./src/assets/滇池.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ7SURBVFiFzZnPaxxlGMe/z/PurGmyySrZRFq1ErReCkbdBmKxsOpFQejJf0AkuQjisephRKyXQgVRqKAe9FAQCiIoFGoXCyZtd0MvqYf2IDaktM2Sbtwmuzv7vo+H/dGZ2ZlZdrO75nvZed/n+7zzmdl33pl5htCjXv7zg33jY8nxMmpj8RpGNFEcghgACGtNpBzRTsWike1YFaXf5u2tXvZD3SYcWzkxRaJSCjTaTZ6w0izOZkxVNs7PnnrQd8BMzk4Z6P2KEO8GLEhs1KZOYT07Y5c7eTsCpnMLVhLTB4Xo0d2C+cWOXrswf/JOlCcSMHPRTphxPdOPsxYmYVXIvmj/HRYPBXxz2Z4oW/rQQKh80ixbf7zw6U0QiT/GQQmZVTtRiVWfHTxaXcrQRGblk2eCYm2A6dyCZXb0jJDq+grfjQg6+drKR0/7+9sAk5g+OMg5FyURTh1bOTHl7vMAZnJ2ahBXazeyDD319qrdOkEeQEXVA8NH8kpI0b2tcoujNc9eX/7wcWOpJ6OSmZFubDZ/ISJponpbBHki3AboF5cvDyDd9NU9lDcG30Ttq1wpXV86enon1uqJxychOgJMzgTFiDzbDXB5K8xX9zRhaTEM0IqNpgDcYqCxIIveF348wXC7ERHSzFgIBVTWY0BjDlpJTIQZXX9r3yUioWMbaCuzaicYAAwjETHOwAAfTokQPUAdUAtCH506TeZBSlF5lNO5MxYZraKt4ZN5NxJBPirucOwRnizc6HjXMAZ5gBY7DditiCj63xGKxYrJhBqFd3lhxjshA14GsAaRuXoHAhZ2ugpgHSJzwfGWBwBmmTHrhcIlI7gBAGy0ivlTG67jAJ4IjqHDU2QLvrMHmPNHDPGvkIdPXZwsltpWZwE2o4YfpMToQnPbsNJcmDxU9ZtIsDZcrJbWCOy4QGqcP7LoCCvfWaTrQwarS2jV3bRMrcIAoAjbPutV/C+SK+6WlpFtBgA2KLkDjavIczRDkGjC756eMZQYAJwi2t/6CeeGw9XcH50jQ/82mwzlZA/bdcDsq3aJSe24/UbTzwD+Ghqf0A/utqOdzTpoU9VqwZcDEXw5cLK6vtJGPCuHU9veAFyAF+ZP3mFox20SoSsw8vVg2eiiMfS9Z79Vp7B09PSOBxAAtMTX/ekG/B0IZwdEd00c87G7g0TL1MRIi8MDmD1ib5DI/TZITacA/NhXNMKyiLwviivubofl1k+H7dbNo+29uIi7/2hB293FGPqCwJ8B7bGuJThrNL0nwp4yHJHZuPTS5/e8xxGgzKqd4J3qc0HVBYbsB8m7IDreA9o1IfpWNJbamVUxm7Zv+vt7Lh4R6ACxvAHIKwCej4C6C9ASgPPG4HKQIap41JfyGxPihjBDwDTEJADUAL5PImsGdDsqt+fyW1N7uoDp1p4tAfu1Z4vofkV/hlCaSPflM8R/L7nK1aomJ2wAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/index.vue":
/*!*******************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4a0254d8&scoped=true& */ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& */ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a0254d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/drinkDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=style&index=0&id=4a0254d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a0254d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4a0254d8&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/index.vue?vue&type=template&id=4a0254d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a0254d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2RyaW5rRGV0YWlsL2luZGV4LnZ1ZT8xMmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlPzc2ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlPzIzYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS93YXRlcl9lbnZpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21vcmVNYXAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5ruH5rGgLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlPzA5ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlP2UzMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvaW5kZXgudnVlPzRhMGMiXSwibmFtZXMiOlsiYmFzZVVybCIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInllYXJSYW5rTGlzdCIsInJhbmtMaXN0IiwicmFua0RldGFpbCIsInNjYWxlTWFya3MiLCJ3YXRlckJhc2ljRGF0YSIsInNlY3Rpb25JbmZvIiwic2VjdGlvbkxpc3QiLCJzdGF0aW9uSW5mbyIsInVwU3RyZWFtT3ZlciIsImxha2VTaXRlTGlzdCIsInF1ZXJ5U2VjdGlvbkluZm8iLCJzdGF0aW9uRGVzIiwicml2ZXJDb3Vyc2VEZXRhaWwiLCJob3VyTGluZSIsIndhdGVyUG9sbHV0aW9uIiwidXBzdHJlYW1Qb2xsdXRpb24iLCJnZXRVcExpc3QiLCJ1cFN0cmVhbVdhdGVyIiwidXBzdHJlYW1TZXdhZ2UiLCJwdXJpZmljYXRpb25QbGFudCIsImRhdGFUYWJsZSIsImpoY0luZm8iLCJseUJhc2luIiwibHlEZXRhaWwiLCJkY1N6IiwiZGNTekxpc3QiLCJ5eXNJbmZvIiwic2tMaXN0Iiwid2F0ZXJCb2R5TGlzdCIsIndhdGVyUGxhbnRMaXN0IiwicmVzZXJ2b2lyTGlzdCIsIndhdGVyUGxhbnRSaXZlciIsIndhdGVyUGxhbnRTaXRlIiwicmVzb3VyY2VTdGF0Iiwid2F0ZXJGdW5jdGlvbkxpc3QiLCJ3YXRlckZ1bmN0aW9uRGV0YWlsIiwiaW52b2x2ZVdhdGVyIiwic2V3YWdlRGV0YWlsIiwic2V3YWdlUGNEZXRhaWwiLCJzZXdhZ2VTeURldGFpbCIsInNld2FnZUpjRGV0YWlsIiwic2V3YWdlWnpEZXRhaWwiLCJwb2xsdXRpb25MaXN0Iiwic2V3YWdlU3RhdCIsInJpdmVyQ291cnNlU3RhdCIsInJpdmVyQ291cnNlTGlzdCIsIndhdGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0E7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SixPQUFPLEdBQUcsa0NBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVNrRCxlQUFULENBQXlCbEQsSUFBekIsRUFBK0I7QUFDcEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxrQ0FERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU21ELFNBQVQsQ0FBbUJuRCxJQUFuQixFQUF5QjtBQUM5QixTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLHdCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDOzs7Ozs7Ozs7OztBQ3BkRCxpQ0FBaUMsb2xCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ2lEOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJ0aXRsZVwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgICA8dGVtcGxhdGUgI3JpZ2h0PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1tYXBcIiBAY2xpY2s9XCJvbk1hcFF1ZXJ5XCI+6L+b5YWl5Zyw5Zu+PC9zcGFuPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvbW9yZU1hcC5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gbHlTdGF0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhc2luLW5hbWUgZnNcIiBAY2xpY2s9XCJ0b1N0YXRpb24oaXRlbSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL+a7h+axoC5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5sYWtlTmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtc3RhdHVzXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGp1ZGdlTGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eUxldmVsKSB8fCAnLScpICsgJyknLCBtYXJnaW46ICcwIDMwcHggMCAxNnB4JyB9XCI+XHJcbiAgICAgICAgICAgIHt7IHJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlMZXZlbCkgfHwgXCItXCIgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtdGFyZ2V0XCI+XHJcbiAgICAgICAgICAgIOebruagh1xyXG4gICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbJ3RhcmdldC1sZXZlbCcsIGp1ZGdlVGFyZ2V0TGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkgfHwgJy0nKV1cIj5cclxuICAgICAgICAgICAge3sgcmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkgfHwgXCItXCIgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnZmFjdG9yLXdyYXBwZXInLCBpdGVtLnN0YXRlPydmYWN0b3Itd3JhcHBlci1leGNlZWQnOidmYWN0b3Itd3JhcHBlci1zdGFuZGFyZCddXCIgQGNsaWNrPVwidG9TdGF0aW9uKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8ZGl2IDpjbGFzcz1cIml0ZW0uc3RhdGU/J2V4Y2VlZCc6J3N0YW5kYXJkJ1wiPnt7aXRlbS5zdGF0ZT8n6LaF5qCHJzon6L6+5qCHJ319PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPuebkea1i+aXtumXtO+8mnt7IGRheWpzKGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbml0b3Itd3JhcHBlciBmc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZSBpbiBpdGVtLmZhY3Rvckxpc3RcIiA6Y2xhc3M9XCJbJ21vbml0b3ItaXRlbScsIGl0ZW0uc3RhdGU/J21vbml0b3ItaXRlbS1leGNlZWQnOidtb25pdG9yLWl0ZW0tc3RhbmRhcmQnLCdmcyddXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1cIj57eyBlLnZhbHVlIH19PGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWN0b3ItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAge3sgZS5mYWN0b3JOYW1lIH19IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bml0XCIgdi1zaG93PVwiZS5mYWN0b3JOYW1lICE9ICdwaCdcIj57eyBlLnVuaXQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlXCI+e3tpdGVtLm1vbml0b3JpbmdNZXRob2Q9PT0n6Ieq5YqoJz8n6Ieq5Yqo55uR5rWL5pWw5o2u5pyq57uP5Zu95a625a6h5qC477yM5LuF5L6b5Y+C6ICDJzon5pWw5o2u5p2l5rqQ77ya5piG5piO5biC546v5aKD55uR5rWL5Lit5b+DJ319PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmYWN0b3Itd3JhcHBlciBmYWN0b3Itd3JhcHBlci1zdGFuZGFyZFwiIEBjbGljaz1cInRvU3RhdGlvbihpdGVtLCAn6Ieq5YqoJylcIiB2LXNob3c9XCIhaXRlbS5zdGF0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YW5kYXJkXCI+6L6+5qCHPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPuebkea1i+aXtumXtO+8mnt7IGRheWpzKGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbml0b3Itd3JhcHBlciBmc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZSBpbiBpdGVtLmZhY3Rvckxpc3RcIiBjbGFzcz1cIm1vbml0b3ItaXRlbSBtb25pdG9yLWl0ZW0tc3RhbmRhcmQgZnNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPiB7eyBlLnZhbHVlIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjdG9yLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgIHt7IGUuZmFjdG9yTmFtZSB9fSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5pdFwiIHYtc2hvdz1cImUuZmFjdG9yTmFtZSAhPSAncGgnXCI+e3sgZS51bml0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZVwiPuaVsOaNruadpea6kO+8muaYhuaYjuW4gueOr+Wig+ebkea1i+S4reW/gzwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDx2YW4tZW1wdHkgdi1pZj1cImx5U3RhdGlvbi5sZW5ndGg9PT0wXCIgZGVzY3JpcHRpb249XCLmmoLml6DmlbDmja5cIi8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IGltZ0p1Z2RlTGV2ZWwgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG4gIGltcG9ydCB7IGRjU3pMaXN0LCBza0xpc3QgfSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBiYXNpbjogJycsXHJcbiAgICAgICAgbHlOYW1lOiAnJyxcclxuICAgICAgICBseVN0YXRpb246IFtdLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubHlOYW1lID0gdGhpcy4kcm91dGUucXVlcnkudGl0bGU7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS50aXRsZTtcclxuICAgICAgdGhpcy5iYXNpbiA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmJhc2luO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGx5TmFtZSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICB0aGlzLmdldEx5SW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEx5SW5mbygpIHtcclxuICAgICAgICBpZiAodGhpcy5seU5hbWUgPT09IFwi5ruH5rGg5rC06LSo5oOF5Ya1XCIpIHtcclxuICAgICAgICAgIGRjU3pMaXN0KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSBcIjIwMFwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5seVN0YXRpb24gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLmx5TmFtZS5pbmNsdWRlcygn5Y6/JykgPyAnJyA6ICfluILnuqcnLCAvL+WOv+e6p+S7peS4iuWwseaYr+afpeWFqOmDqFxyXG4gICAgICAgICAgICBiYXNpbjogdGhpcy5iYXNpblxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNrTGlzdChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmx5U3RhdGlvbiA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcGxhY2VTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFwi57G7XCIsIFwiXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaW1nSnVnZGVMZXZlbCh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlVGFyZ2V0TGV2ZWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFoVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0M1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWjXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFpFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ1XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLliqPihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b1N0YXRpb24oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwic3RhdGlvbkRldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgLy8gbWM6IGl0ZW0ubGFrZU5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IGl0ZW0ubW9uaXRvcmluZ01ldGhvZCA9PSBcIuiHquWKqFwiID8gXCLml7ZcIiA6IFwi5pyIXCIsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLnNlY3Rpb25JZHx8aXRlbS5sYWtlSWQsXHJcbiAgICAgICAgICAgIHRpbWU6IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgICAgICAgIGZsYWdUeXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgIC8vIGxpc3RUeXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgIC8vIHpkVHlwZTogaXRlbS5tb25pdG9yaW5nTWV0aG9kLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25NYXBRdWVyeSgpe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdyYW5nZU1hcCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0eXBlOiAn6aWu55So5rC0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuaW50by1tYXAge1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC5iYXNpbi1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxOXB4IDI0cHggMTFweDtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmFjdG9yLXdyYXBwZXItc3RhbmRhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAzMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmZhY3Rvci13cmFwcGVyLWV4Y2VlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgNTMsIDgsIDAuMDYpIDAlLCByZ2JhKDI1NSwgNTMsIDgsIDApIDMwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAuZmFjdG9yLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gICAgLnN0YW5kYXJkLFxyXG4gICAgLmV4Y2VlZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAwcHggMTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjgpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4yKSAxMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhjZWVkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgNTMsIDgsIDAuOCkgMCUsIHJnYmEoMjU1LCA1MywgOCwgMC4yKSAxMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjJweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbml0b3Itd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAubW9uaXRvci1pdGVtIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgICAubXVsdGlwbGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYWN0b3ItbmFtZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcblxyXG4gICAgICAgICAgLnVuaXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9uaXRvci1pdGVtLXN0YW5kYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDE5OSwgNCwgMC4wMik7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCAxOTksIDQsIDAuMSk7XHJcblxyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoNCwgMTk5LCA0LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb25pdG9yLWl0ZW0tZXhjZWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTMsIDgsIDAuMDIpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA1MywgOCwgMC4xKTtcclxuXHJcbiAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDUzLCA4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90aWNlIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaXRlLXRhcmdldCB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhcmdldC1sZXZlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAuZXhjZWVkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmY4ZDFhO1xyXG4gIH1cclxuXHJcbiAgLnN0YW5kYXJkIHtcclxuICAgIGNvbG9yOiAjNDQ3YmZjO1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0udGl0bGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiLCBmaXhlZDogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImludG8tbWFwXCIsIG9uOiB7IGNsaWNrOiBfdm0ub25NYXBRdWVyeSB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6L+b5YWl5Zyw5Zu+XCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9tb3JlTWFwLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmx5U3RhdGlvbiwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFzaW4tbmFtZSBmc1wiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU3RhdGlvbihpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/mu4fmsaAucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5sYWtlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1ZGdlTGV2ZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlMZXZlbCkgfHwgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMzBweCAwIDE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlMZXZlbCkgfHwgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS10YXJnZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDnm67moIcgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcmdldC1sZXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVkZ2VUYXJnZXRMZXZlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkgfHwgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkgfHwgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmYWN0b3Itd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImZhY3Rvci13cmFwcGVyLWV4Y2VlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImZhY3Rvci13cmFwcGVyLXN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU3RhdGlvbihpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IGl0ZW0uc3RhdGUgPyBcImV4Y2VlZFwiIDogXCJzdGFuZGFyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnN0YXRlID8gXCLotoXmoIdcIiA6IFwi6L6+5qCHXCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCLnm5HmtYvml7bpl7TvvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRheWpzKGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9uaXRvci13cmFwcGVyIGZzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uZmFjdG9yTGlzdCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9uaXRvci1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1vbml0b3ItaXRlbS1leGNlZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1vbml0b3ItaXRlbS1zdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGUudmFsdWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmYWN0b3ItbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoZS5mYWN0b3JOYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS5mYWN0b3JOYW1lICE9IFwicGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZS5mYWN0b3JOYW1lICE9ICdwaCdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1bml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZS51bml0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb25pdG9yaW5nTWV0aG9kID09PSBcIuiHquWKqFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLoh6rliqjnm5HmtYvmlbDmja7mnKrnu4/lm73lrrblrqHmoLjvvIzku4Xkvpvlj4LogINcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi5pWw5o2u5p2l5rqQ77ya5piG5piO5biC546v5aKD55uR5rWL5Lit5b+DXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5seVN0YXRpb24ubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFwidmFuLWVtcHR5XCIsIHsgYXR0cnM6IHsgZGVzY3JpcHRpb246IFwi5pqC5peg5pWw5o2uXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09PSAnUmVnRXhwJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcblxudmFyIHN0cmluZ0luZGV4T2YgPSB1bmN1cnJ5VGhpcygnJy5pbmRleE9mKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIWNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdpbmNsdWRlcycpIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5zdHJpbmdJbmRleE9mKFxuICAgICAgdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSksXG4gICAgICB0b1N0cmluZyhub3RBUmVnRXhwKHNlYXJjaFN0cmluZykpLFxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICApO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW50by1tYXBbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uYmFzaW4tbmFtZVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxOXB4IDI0cHggMTFweDtcXG59XFxuLmJhc2luLW5hbWUgLm5hbWVbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXItc3RhbmRhcmRbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDMwJSksIHdoaXRlO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXItZXhjZWVkW2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDUzLCA4LCAwLjA2KSAwJSwgcmdiYSgyNTUsIDUzLCA4LCAwKSAzMCUpLCB3aGl0ZTtcXG59XFxuLmZhY3Rvci13cmFwcGVyW2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5zdGFuZGFyZFtkYXRhLXYtNGEwMjU0ZDhdLFxcbi5mYWN0b3Itd3JhcHBlciAuZXhjZWVkW2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiA1cHggMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDBweCAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5zdGFuZGFyZFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuOCkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjIpIDEwMCUpO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLmV4Y2VlZFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDUzLCA4LCAwLjgpIDAlLCByZ2JhKDI1NSwgNTMsIDgsIDAuMikgMTAwJSk7XFxufVxcbi5mYWN0b3Itd3JhcHBlciAudGltZVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIHBhZGRpbmc6IDE1cHggMjJweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5tb25pdG9yLXdyYXBwZXJbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5tb25pdG9yLXdyYXBwZXIgLm1vbml0b3ItaXRlbVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5tb25pdG9yLXdyYXBwZXIgLm1vbml0b3ItaXRlbSAubnVtW2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mYWN0b3Itd3JhcHBlciAubW9uaXRvci13cmFwcGVyIC5tb25pdG9yLWl0ZW0gLm51bSAubXVsdGlwbGVbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLm1vbml0b3Itd3JhcHBlciAubW9uaXRvci1pdGVtIC5mYWN0b3ItbmFtZVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLm1vbml0b3Itd3JhcHBlciAubW9uaXRvci1pdGVtIC5mYWN0b3ItbmFtZSAudW5pdFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLm1vbml0b3Itd3JhcHBlciAubW9uaXRvci1pdGVtLXN0YW5kYXJkW2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0LCAxOTksIDQsIDAuMDIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0LCAxOTksIDQsIDAuMSk7XFxufVxcbi5mYWN0b3Itd3JhcHBlciAubW9uaXRvci13cmFwcGVyIC5tb25pdG9yLWl0ZW0tc3RhbmRhcmQgLm51bVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGNvbG9yOiAjMDRjNzA0O1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLm1vbml0b3Itd3JhcHBlciAubW9uaXRvci1pdGVtLWV4Y2VlZFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MywgOCwgMC4wMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgNTMsIDgsIDAuMSk7XFxufVxcbi5mYWN0b3Itd3JhcHBlciAubW9uaXRvci13cmFwcGVyIC5tb25pdG9yLWl0ZW0tZXhjZWVkIC5udW1bZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBjb2xvcjogI2ZmMzUwODtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5ub3RpY2VbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnNpdGUtdGFyZ2V0W2RhdGEtdi00YTAyNTRkOF0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhcmdldC1sZXZlbFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmV4Y2VlZFtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uc3RhbmRhcmRbZGF0YS12LTRhMDI1NGQ4XSB7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XFxuLm51bVtkYXRhLXYtNGEwMjU0ZDhdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhMDI1NGQ4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzUzZjdmYWJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YTAyNTRkOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhMDI1NGQ4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5sZXQgYmFzZVVybCA9IFwiL3dhdGVyXCI7IC8v5pyN5Yqh5Zmo5pivd2F0ZXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua2luZ1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuawtOeOr+Wig+W5tOW6leaOkuWQjeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJSYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24veWVhclJhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN5ZCE5Yy65Z+f6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbiDlkITljr/vvIjluILvvInljLrjgIHlvIDlj5HluqblgYflm63ljLrlraPluqblnLDooajmsLTnjq/looPotKjph4/or4TliIbor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hcmtzKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9zY2FsZU1hcmtzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5YWo5biC5rC0546v5aKD5qaC5Ya15oC75L2T5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCYXNpY0RhdGEoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuaWremdouS/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlckJhc2ljRGF0YS9zZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5YiX6KGoLS3lm73jgIHnnIHjgIHluIJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3NlY3Rpb25MaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3mn6Xor6LkuIrmuLjotoXmoIdcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtT3ZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbU92ZXJcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivoua5luW6k+eahOebkea1i+aWremdolxyXG5leHBvcnQgZnVuY3Rpb24gbGFrZVNpdGVMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2xha2VTaXRlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaIt5rKz5rWB5pe25YC85puy57q/XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3F1ZXJ5U2VjdGlvbkluZm9cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25EZXMoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vc2l0ZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsrPmtYHor6bmg4Ut5rKz6YGT6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3ml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJMaW5lKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2N1cnZlXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lkajovrnmtonmsLTmsaHmn5PmupBcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUG9sbHV0aW9uKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3BvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1Qb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1Qb2xsdXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmlq3pnaLliJfooahcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbi8vICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4vLyAgICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbVwiLFxyXG4vLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuLy8gICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTlupNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1XYXRlclwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaOkuWPo1xyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1TZXdhZ2UoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1TZXdhZ2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTotKjlh4DljJbljoJcclxuZXhwb3J0IGZ1bmN0aW9uIHB1cmlmaWNhdGlvblBsYW50KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3B1cmlmaWNhdGlvblBsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLS3nm5HmtYvor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFUYWJsZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9kYXRhVGFibGVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeawtOi0qOWHgOWMluWOguivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gamhjSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1XHJcbmV4cG9ydCBmdW5jdGlvbiBseUJhc2luKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1LeivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gbHlEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL2RldGFpbHNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1IC0g5ruH5rGg5rC06LSoXHJcbmV4cG9ydCBmdW5jdGlvbiBkY1N6KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9kY0RhdGFcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKggLSDmsLTotKjliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3pMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZGNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCJcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1LemlrueUqOawtOa6kOWcsFxyXG5leHBvcnQgZnVuY3Rpb24geXlzSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RyaW5rU291cmNlXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywLeawtOW6k+WIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gc2tMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9sYWtlL2RyaW5rU291cmNlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluIPlj4rlupPlrrlcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyQm9keUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS93YXRlckJvZHlEaXN0cmlidXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC06LSo5YeA5YyW5Y6C5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC05bqT5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNlcnZvaXJMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C5rKz6YGT5pat6Z2i6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50Uml2ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOi0qOWHgOWMluWOguihpeawtOaWremdolxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudFNpdGUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L3NpdGVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15rC06LWE5rqQ5p+l6K+iXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vcmVzb3VyY2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOWKn+iDveWMuuWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJGdW5jdGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy66K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJGdW5jRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52b2x2ZVdhdGVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaOkuafpeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVBjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlUGNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLea6r+a6kOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVN5RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3lEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeebkea1i+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZUpjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlSmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaVtOayu+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVp6RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlWnpEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5raJ5rC05rGh5p+T5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbHV0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nzd3J5bGJcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQ5YiX6KGodGFi5oC75pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeays+mBk+S/oeaBr+e7n+iuoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3moLnmja7mtYHln5/mn6Xor6LmsrPpgZPkuIvmi4nmoYZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL3dhdGVyTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGaFNVUkJWRmlGN1ZaYmJvUXdESnhVY0s0MVVtNEYwcklTM0NvUzJYT0I1SDRFU29BQU5tMjFQOHhuSHZiRXJ3bHc0OGFIWWE1Y3NsVmZBd0RZUEdaTC9ISk43ditkZ0szNkdteWVPOXRlU3lSVE9TOEhCaDhlSWJBaEtCNzJwWERlclpZOERMOWd1QURnRjJlbkZBa2dZbXFybnNBbUp1QmRteFVKZ2pSYjVrS1NDbkVFRmpEOFNxeTlWeXUwT2ZNTEFtdGpLZU5lYU9zU2dTWGk5cHZYOWpyakVOSXU4QUJpQjJUTG9SdFRRU01oU3R3NWhiaGRiRGtjTitBS3JzMUV0dVVwU0JYZUg1eFZUY0pOcTZXeGFkRWo2SXBROGpKTnBMUUVYSlA3RXdkZUswanFOblJOWHU5dUtsK3ZKbUNybnNZNTcxUE9YWk43Vy9Xa3NhblJnaWYyQzlDN05pdWlJaFhMOG1rRUlpR2FuRTkxTUJ2ZmhwN0FwcE5FUXpJSmZ4eHZGREI4VGg3VFM2ZjlLQktFazRrb1M4RThCWU94ZExFRm9yRW1DQ1JacGdXR2kwVU5oRi9QMlIxUkRlZ21ZY2dwSmRVd09IM2p3aXk0Y2VPaitBYjVHSnhrZitMYjd3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBUTdTVVJCVkZpRnpablBheHhsR01lL3ovUHVyR215eVNyWlJGcTFFclJlQ2tiZEJtS3hzT3BGUWVqSmYwQWt1UWppc2VwaFJLeVhRZ1ZScUtBZTlGQVFDaUlvRkdvWEN5WnRkME12cVlmMklEYWt0TTJTYnR3bXV6djd2bytIL2RHWjJabFpkck83NW52WmVkL24rN3p6bWRsMzNwbDVodENqWHY3emczM2pZOG54TW1wajhScEdORkVjZ2hnQUNHdE5wQnpSVHNXaWtlMVlGYVhmNXUydFh2WkQzU1ljV3preFJhSlNDalRhVFo2dzBpek9aa3hWTnM3UG5uclFkOEJNems0WjZQMktFTzhHTEVoczFLWk9ZVDA3WTVjN2VUc0Nwbk1MVmhMVEI0WG8wZDJDK2NXT1hyc3dmL0pPbENjU01IUFJUcGh4UGRPUHN4WW1ZVlhJdm1qL0hSWVBCWHh6Mlo0b1cvclFRS2g4MGl4YmY3enc2VTBRaVQvR1FRbVpWVHRSaVZXZkhUeGFYY3JRUkdibGsyZUNZbTJBNmR5Q1pYYjBqSkRxK2dyZmpRZzYrZHJLUjAvNys5c0FrNWcrT01nNUZ5VVJUaDFiT1RIbDd2TUFabkoyYWhCWGF6ZXlERDMxOXFyZE9rRWVRRVhWQThOSDhrcEkwYjJ0Y291ak5jOWVYLzd3Y1dPcEo2T1NtWkZ1YkRaL0lTSnBvbnBiQkhraTNBYm9GNWN2RHlEZDlOVTlsRGNHMzBUdHExd3BYVjg2ZW5vbjF1cUp4eWNoT2dKTXpnVEZpRHpiRFhCNUs4eFg5elJoYVRFTTBJcU5wZ0RjWXFDeElJdmVGMzQ4d1hDN0VSSFN6RmdJQlZUV1kwQmpEbHBKVElRWlhYOXIzeVVpb1dNYmFDdXphaWNZQUF3akVUSE93QUFmVG9rUVBVQWRVQXRDSDUwNlRlWkJTbEY1bE5PNU14WVpyYUt0NFpONU54SkJQaXJ1Y093Um5pemM2SGpYTUFaNWdCWTdEZGl0aUNqNjN4R0t4WXJKaEJxRmQzbGh4anNoQTE0R3NBYVJ1WG9IQWhaMnVncGdIU0p6d2ZHV0J3Qm1tVEhyaGNJbEk3Z0JBR3kwaXZsVEc2N2pBSjRJanFIRFUyUUx2ck1IbVBOSERQR3ZrSWRQWFp3c2x0cFdad0UybzRZZnBNVG9RblBic05KY21EeFU5WnRJc0RaY3JKYldDT3k0UUdxY1A3TG9DQ3ZmV2FUclF3YXJTMmpWM2JSTXJjSUFvQWpiUHV0Vi9DK1NLKzZXbHBGdEJnQTJLTGtEamF2SWN6UkRrR2pDNzU2ZU1aUVlBSndpMnQvNkNlZUd3OVhjSDUwalEvODJtd3psWkEvYmRjRHNxM2FKU2UyNC9VYlR6d0QrR2hxZjBBL3V0cU9kelRwb1U5VnF3WmNERVh3NWNMSzZ2dEpHUEN1SFU5dmVBRnlBRitaUDNtRm94MjBTb1Nzdzh2VmcyZWlpTWZTOVo3OVZwN0IwOVBTT0J4QUF0TVRYL2VrRy9CMElad2RFZDAwYzg3RzdnMFRMMU1SSWk4TURtRDFpYjVESS9UWklUYWNBL05oWE5NS3lpTHd2aWl2dWJvZmwxaytIN2RiTm8rMjl1SWk3LzJoQjI5M0ZHUHFDd0o4QjdiR3VKVGhyTkwwbndwNHlISkhadVBUUzUvZTh4eEdnektxZDRKM3FjMEhWQllic0I4bTdJRHJlQTlvMUlmcFdOSmJhbVZVeG03WnYrdnQ3TGg0UjZBQ3h2QUhJS3dDZWo0QzZDOUFTZ1BQRzRIS1FJYXA0MUpmeUd4UGloakJEd0RURUpBRFVBTDVQSW1zR2REc3F0K2Z5VzFON3VvRHAxcDR0QWZ1MVo0dm9ma1YvaGxDYVNQZmxNOFIvTDduSzFhb21KMndBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGEwMjU0ZDgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGEwMjU0ZDgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0YTAyNTRkOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YTAyNTRkOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YTAyNTRkOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YTAyNTRkOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMDI1NGQ4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhMDI1NGQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YTAyNTRkOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTAyNTRkOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=