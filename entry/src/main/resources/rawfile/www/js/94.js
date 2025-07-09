(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lyStation: {
        lake: [],
        river: [],
        waterSource: []
      }
    };
  },
  mounted: function mounted() {
    this.title = this.$route.query.lyName + "水质情况";
    this.getLyInfo();
  },
  methods: {
    getLyInfo: function getLyInfo() {
      var _this = this;

      var info = {
        basinName: this.$route.query.lyName
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_3__["lyDetail"])(info).then(function (res) {
        if (res.code == "200") {
          _this.lyStation = res.data;
        }
      });
    },
    toStation: function toStation(item) {
      this.$router.push({
        name: "stationDetail",
        query: {
          // mc: item.sectionName,
          type: item.monitorMethod == "自动" ? "时" : "月",
          id: item.sectionId,
          time: item.monitorMethod == "自动" ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])() : dayjs__WEBPACK_IMPORTED_MODULE_4___default()(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])()).format('YYYY-MM-DD') // listType: item.type,
          // zdType: item.monitorMethod,

        }
      });
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true& ***!
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
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _vm._m(0),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.lyStation.lake.length == 0,
                  expression: "lyStation.lake.length == 0",
                },
              ],
              staticClass: "site-wrapper",
              staticStyle: { background: "rgba(68, 123, 252, 0.03)" },
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-size": "12px",
                    color: "rgba(18, 18, 54, 0.5)",
                    width: "100%",
                    "text-align": "center",
                  },
                },
                [_vm._v("暂无湖库信息！")]
              ),
            ]
          ),
          _vm._l(_vm.lyStation.lake, function (lake) {
            return _c(
              "div",
              {
                staticClass: "site-wrapper",
                style: {
                  background: !lake.overStandard
                    ? " rgba(68, 123, 252, 0.03)"
                    : "rgba(254,79,2,0.03)",
                },
                on: {
                  click: function ($event) {
                    return _vm.toStation(lake)
                  },
                },
              },
              [
                _c("div", { staticClass: "fs" }, [
                  _c("div", { staticClass: "site-name" }, [
                    _vm._v(_vm._s(lake.sectionName)),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(
                            _vm.replaceString(lake.quality || "-")
                          ) +
                          ")",
                        margin: "0 30px 0 16px",
                      },
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(_vm.replaceString(lake.quality || "-")) +
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
                            _vm.replaceString(lake.target || "-")
                          ),
                        ],
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(_vm.replaceString(lake.target || "-")) +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _c("div", { staticClass: "point fs" }, [
                  _c("span"),
                  _c(
                    "div",
                    { class: lake.overStandard ? "exceed" : "standard" },
                    [
                      _c("span", {
                        staticClass: "circle",
                        style: {
                          background: lake.overStandard ? "#ff8d1a" : "#447bfc",
                        },
                      }),
                      _vm._v(
                        " " + _vm._s(lake.overStandard ? "超标" : "达标") + " "
                      ),
                    ]
                  ),
                ]),
              ]
            )
          }),
          _vm._m(1),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.lyStation.river.length == 0,
                  expression: "lyStation.river.length == 0",
                },
              ],
              staticClass: "site-wrapper",
              staticStyle: { background: "rgba(68, 123, 252, 0.03)" },
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-size": "12px",
                    color: "rgba(18, 18, 54, 0.5)",
                    width: "100%",
                    "text-align": "center",
                  },
                },
                [_vm._v("暂无河道信息！")]
              ),
            ]
          ),
          _vm._l(_vm.lyStation.river, function (river) {
            return _c(
              "div",
              {
                staticClass: "site-wrapper",
                style: {
                  background: !river.overStandard
                    ? " rgba(68, 123, 252, 0.03)"
                    : "rgba(254,79,2,0.03)",
                },
                on: {
                  click: function ($event) {
                    return _vm.toStation(river)
                  },
                },
              },
              [
                _c("div", { staticClass: "fs" }, [
                  _c("div", { staticClass: "site-name" }, [
                    _vm._v(_vm._s(river.waterBodyName)),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(_vm.replaceString(river.quality)) +
                          ")",
                        margin: "0 30px 0 16px",
                      },
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(_vm.replaceString(river.quality || "-")) +
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
                            _vm.replaceString(river.target || "-")
                          ),
                        ],
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(_vm.replaceString(river.target || "-")) +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _c("div", { staticClass: "point fs" }, [
                  _vm._v(" 监测断面：" + _vm._s(river.sectionName) + " "),
                  _c(
                    "div",
                    { class: river.overStandard ? "exceed" : "standard" },
                    [
                      _c("span", {
                        staticClass: "circle",
                        style: {
                          background: river.overStandard
                            ? "#ff8d1a"
                            : "#447bfc",
                        },
                      }),
                      _vm._v(
                        " " + _vm._s(river.overStandard ? "超标" : "达标") + " "
                      ),
                    ]
                  ),
                ]),
              ]
            )
          }),
          _vm._m(2),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.lyStation.waterSource.length == 0,
                  expression: "lyStation.waterSource.length == 0",
                },
              ],
              staticClass: "site-wrapper",
              staticStyle: { background: "rgba(68, 123, 252, 0.03)" },
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-size": "12px",
                    color: "rgba(18, 18, 54, 0.5)",
                    width: "100%",
                    "text-align": "center",
                  },
                },
                [_vm._v("暂无饮用水源地信息！")]
              ),
            ]
          ),
          _vm._l(_vm.lyStation.waterSource, function (waterSource) {
            return _c(
              "div",
              {
                staticClass: "site-wrapper",
                style: {
                  background: !waterSource.overStandard
                    ? " rgba(68, 123, 252, 0.03)"
                    : "rgba(254,79,2,0.03)",
                },
                on: {
                  click: function ($event) {
                    return _vm.toStation(waterSource)
                  },
                },
              },
              [
                _c("div", { staticClass: "fs" }, [
                  _c("div", { staticClass: "site-name" }, [
                    _vm._v(_vm._s(waterSource.waterBodyName)),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(
                            _vm.replaceString(waterSource.quality)
                          ) +
                          ")",
                        margin: "0 30px 0 16px",
                      },
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.replaceString(waterSource.quality || "-")
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
                            _vm.replaceString(waterSource.target || "-")
                          ),
                        ],
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.replaceString(waterSource.target || "-")
                            ) +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _c("div", { staticClass: "point fs" }, [
                  _vm._v(" 监测断面：" + _vm._s(waterSource.sectionName) + " "),
                  _c(
                    "div",
                    { class: waterSource.overStandard ? "exceed" : "standard" },
                    [
                      _c("span", {
                        staticClass: "circle",
                        style: {
                          background: waterSource.overStandard
                            ? "#ff8d1a"
                            : "#447bfc",
                        },
                      }),
                      _vm._v(
                        " " +
                          _vm._s(waterSource.overStandard ? "超标" : "达标") +
                          " "
                      ),
                    ]
                  ),
                ]),
              ]
            )
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "basin-name" }, [
      _c("img", {
        staticStyle: { width: "20px" },
        attrs: { src: __webpack_require__(/*! @/assets/湖库.png */ "./src/assets/湖库.png") },
      }),
      _c("span", { staticClass: "name" }, [_vm._v("湖库情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "basin-name" }, [
      _c("img", {
        staticStyle: { width: "20px" },
        attrs: { src: __webpack_require__(/*! @/assets/river@2x.png */ "./src/assets/river@2x.png") },
      }),
      _c("span", { staticClass: "name" }, [_vm._v("河道情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "basin-name" }, [
      _c("img", {
        staticStyle: { width: "20px" },
        attrs: { src: __webpack_require__(/*! @/assets/shuiyuan.png */ "./src/assets/shuiyuan.png") },
      }),
      _c("span", { staticClass: "name" }, [_vm._v("饮用水源地")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".basin-name[data-v-1a45a30e] {\n  display: flex;\n  align-items: center;\n  margin: 19px 24px 11px;\n}\n.basin-name .name[data-v-1a45a30e] {\n  padding-left: 10px;\n  color: #447bfc;\n  font-size: 14px;\n  font-weight: bold;\n}\n.site-wrapper[data-v-1a45a30e] {\n  margin: 8px;\n  padding: 12px 15px;\n  background: #fff;\n  border-radius: 10px;\n  position: relative;\n}\n.site-wrapper .site-name[data-v-1a45a30e] {\n  color: #121236;\n  font-size: 14px;\n}\n.site-wrapper .site-name[data-v-1a45a30e] {\n  flex: 1;\n}\n.site-wrapper .site-target[data-v-1a45a30e] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.site-wrapper .point[data-v-1a45a30e] {\n  padding-top: 5px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.site-wrapper .point .circle[data-v-1a45a30e] {\n  display: inline-block;\n  margin-right: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.site-wrapper .point .standard[data-v-1a45a30e], .site-wrapper .point .exceed[data-v-1a45a30e] {\n  display: flex;\n  align-items: center;\n}\n.target-level[data-v-1a45a30e] {\n  display: inline-block;\n  margin-left: 5px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.exceed[data-v-1a45a30e] {\n  color: #ff8d1a;\n}\n.standard[data-v-1a45a30e] {\n  color: #447bfc;\n}\n.num[data-v-1a45a30e] {\n  font-size: 14px;\n  color: #121236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cce5a294", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/river@2x.png":
/*!*********************************!*\
  !*** ./src/assets/river@2x.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/shuiyuan.png":
/*!*********************************!*\
  !*** ./src/assets/shuiyuan.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOpSURBVFiF1ZnNbttGEMf/M8uVXNmAEsMCCheOEfTck/IAheGLDn4N6uRzYDgFVDS99QWiRykCww9gnXoO4jSAL/5ADcO2KHJncqAoUF+kRDqC+z9R5MzOj7O7Q3JEKKj9t1oXDxuGghoJVRUVj0xoImdVTeiM2oFGQeBc9FDR9bu//6L7InFoGeODjtbuw36DndlkC17GV2AHIrgRe3592nndf1LA1qFWXb2/DTKby0DNUyTu6vbV2kWvTWGebS5g60gbAYU7nlku23mSEBKt2a+nHbrKsssMunf8uOux2XpKsEkJ28uPv9O/867PBdx7pz97FL74PljjitT+d/KePs26NhNwlXCJ5kFO7cS948fdVcMBgEfhi73jx93J82OArSNtfO81lyWPzVbrSBvpcyPA1qFWAwp3ygQQYR8wzTJjBBTutA61mvz2kgNX7297ZEqUEtME1BdRMONN0VE8A3L1/jaAz8AwgwcdrZUtwk7ET47jTJYQmc2DjtZGgPdhv5HtkS0R9gmUnlq/LGTCxADArkz2TBPALJhSgAkT77/V+rIP/rTSUzupMllkO2QTDxtFB5kxtZMqNdXiYYMNBbWiA2CxaSwMaCioMQlV802ntUxmimaRhKqsqHj5ptNS6DIFuRCgouIxmdAUcc5Ze6kg2isyPgCQCQ1HzmrRAfKk0J5hbRf1j5xVVhO6osHzbAjUW9R2ZgwTOjZqB0Wck+AZ6jJLFzDNBWxnyqgdsEZBsKRbU4T9OHg2nAj7TsRPQJd909EoCDznogdjKy8XcYjLhQ53pOkxo+1E0sW6m4APS4tvmNuAg4h+iE24m3NzIzkXPXBF1+8WhxuViy7geoDrGdZ2ao35InwmwmcAwCxvYruxdeg7oQ+LxKzo+h0BwP5v+gsjrOQAniXH83dnMoVuas1N3CCYqT3LbmQPO/j4B/3jxc64YcaPWYAK7SVTSaCmCPlxoPR0TQaMgeNlgGZ6LEAyN44IboDhG7XY82u4nzIBDWt7CJVkwY8HYn9WGYlvRpPjsRs1zF0gu7qJPb+OfYda/CPdNEW0qdDmok+TCbDckhOJuzr584cvQOqb5PbV2sXLz+ECTSHXY0YvCZsADyFGNY85XfsSqPxngoSQ29drF8nvsY+kXzu6VXHh1LfpKjUw9ku6XzOWrdMOXQnby9VjxRK2l5PNpGff+nj2zaO5G+LkPX2KxGX27p5CwvZyHhzwf29gJnrWLeC0nm0TfZZW9TfEN/hY+l7sbYGMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/湖库.png":
/*!***************************!*\
  !*** ./src/assets/湖库.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOvSURBVFiFvZjPaxtHFMc/b6Slf0MpPQTaQw+hpCWHHIp3j7kUCs4hEIyj2mCM/wft/g/GqLHiOqGQYw+9VyNCj4WWHnzIqYfivyHszrweVivtol1pV5b1hUHSvPnx0bzZ92ZW2FCHtxoCOBgWdQIhgIKd/Z4CvP1U4k3nka4dDm41VtgrYNpKwQpMu8K2Bjy41ZjSat1RSVvQtYCHtxp6mNwZqV5rQc0q48GtxvcIBzCceaZRjSu4ZZeuU+NK1gLuGK5QLeQS4MF/GqM7h8slJG8/q0JWAA//1Vh3v3IViSG6/lxs8btfNqrXLcOJhTygt5V6JpQWbv4UH37QWBxsUGxd/ZsHRt48kEgyibqOefhh8WQvwozXIQ66lusvTEQqUaXe56kO4PpLsXhsp3FLnjQAgxu30eoZrwnA9VdijddkbssWaXBw42LJCLuOPbhxMYWvX/7jJ3TMrYImVw97cbmuZhzbddxy358fmkgABn977dr76mtTG0Nf/uUnIhtDVWS8RGbwp4txSqeS5a6tU08lKbcVhzVeInHYzvMAxviO+86RXH1bdW1Z40dijWO+H19/Y6LxI7HiJOm6DzXToVGne12esPHjZrg55ONeLBmJZD5a1ImVjKRblPD0xQPtd2Cja5cgnyz/kfGTXnz0h4O22UpAjt671njj73qdT+B1OnqfTUDCNm2NOKVNwak9mqStBl0JN0lDk8m07bxy/Hs2QbcTFrYuwfbJNrg57UgK9I1b/YwYNALw84wglQ0uYIU8LuZtutlXSdCpkUwT8VBbHBZPqE6GxsOrp0FsMo2M18RkGr162hfJNFEnQzxh3qYvhd1kGhX2xRgz+6yNOGzT/MaDnPyWhqrtL0aii1Cjwh7LudaK5hf2Bvt8jCZ7oZ++D0QATn5NOx8WdiA7+iGI8hN1xpT1Cd7OPuva2dL3pnFW9V/WzAsGYPQsWHsexDEd7QcRjoRZrsVjUaLRfhChJCjJaD+QGruU7W3y8OhZEEMpwpy+S1tdmAQSD3b0PLAn79JQ8j5h2Q5w8TyfoK5NmzmK/pUQePpL2vlceB+6eBHMuSq3OpMSeaP3+aqjhaRyIFlKIqev0xjZ9vWzpVSSix9z1xaqzXJnl2ms7BZSkOT8uAoHDW+3zo+DuEhPu5CgtXC5bYXOLj/G2iF3bqIc7pO42b5G9wkpSHR+HNjVbVpqm6DrVq3atqNmoCuTfIOsoNO2YIXudFY9u/wYA8yAYQFtFxPkcW2dK5v0PxMGjfUDGNzNAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/waterHomePage/basinDetail/index.vue":
/*!*******************************************************!*\
  !*** ./src/views/waterHomePage/basinDetail/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a45a30e&scoped=true& */ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& */ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a45a30e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/basinDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=style&index=0&id=1a45a30e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a45a30e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a45a30e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinDetail/index.vue?vue&type=template&id=1a45a30e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a45a30e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5EZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luRGV0YWlsL2luZGV4LnZ1ZT82YjAzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luRGV0YWlsL2luZGV4LnZ1ZT8wOTEyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luRGV0YWlsL2luZGV4LnZ1ZT9kNDAyIiwid2VicGFjazovLy8uL3NyYy9hcGkvd2F0ZXJfZW52aXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9yaXZlckAyeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaHVpeXVhbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/muZblupMucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luRGV0YWlsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkRldGFpbC9pbmRleC52dWU/MTMzMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkRldGFpbC9pbmRleC52dWU/NThlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkRldGFpbC9pbmRleC52dWU/ZDJhMyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicmFua2luZyIsImRhdGEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwieWVhclJhbmtMaXN0IiwicmFua0xpc3QiLCJyYW5rRGV0YWlsIiwic2NhbGVNYXJrcyIsIndhdGVyQmFzaWNEYXRhIiwic2VjdGlvbkluZm8iLCJzZWN0aW9uTGlzdCIsInN0YXRpb25JbmZvIiwidXBTdHJlYW1PdmVyIiwibGFrZVNpdGVMaXN0IiwicXVlcnlTZWN0aW9uSW5mbyIsInN0YXRpb25EZXMiLCJyaXZlckNvdXJzZURldGFpbCIsImhvdXJMaW5lIiwid2F0ZXJQb2xsdXRpb24iLCJ1cHN0cmVhbVBvbGx1dGlvbiIsImdldFVwTGlzdCIsInVwU3RyZWFtV2F0ZXIiLCJ1cHN0cmVhbVNld2FnZSIsInB1cmlmaWNhdGlvblBsYW50IiwiZGF0YVRhYmxlIiwiamhjSW5mbyIsImx5QmFzaW4iLCJseURldGFpbCIsImRjU3oiLCJkY1N6TGlzdCIsInl5c0luZm8iLCJza0xpc3QiLCJ3YXRlckJvZHlMaXN0Iiwid2F0ZXJQbGFudExpc3QiLCJyZXNlcnZvaXJMaXN0Iiwid2F0ZXJQbGFudFJpdmVyIiwid2F0ZXJQbGFudFNpdGUiLCJyZXNvdXJjZVN0YXQiLCJ3YXRlckZ1bmN0aW9uTGlzdCIsIndhdGVyRnVuY3Rpb25EZXRhaWwiLCJpbnZvbHZlV2F0ZXIiLCJzZXdhZ2VEZXRhaWwiLCJzZXdhZ2VQY0RldGFpbCIsInNld2FnZVN5RGV0YWlsIiwic2V3YWdlSmNEZXRhaWwiLCJzZXdhZ2VaekRldGFpbCIsInBvbGx1dGlvbkxpc3QiLCJzZXdhZ2VTdGF0Iiwicml2ZXJDb3Vyc2VTdGF0Iiwicml2ZXJDb3Vyc2VMaXN0Iiwid2F0ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUNBLGdCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBRkE7QUFRQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0E7QUFDQSxHQWZBO0FBZ0JBO0FBQ0EsYUFEQSx1QkFDQTtBQUFBOztBQUNBO0FBQ0E7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Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJ0aXRsZVwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPjwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFzaW4tbmFtZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5rmW5bqTLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIi8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+5rmW5bqT5oOF5Ya1PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNpdGUtd3JhcHBlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCIgdi1zaG93PVwibHlTdGF0aW9uLmxha2UubGVuZ3RoID09IDBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyXCI+5pqC5peg5rmW5bqT5L+h5oGv77yBPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS13cmFwcGVyXCJcclxuICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6ICFsYWtlLm92ZXJTdGFuZGFyZCA/ICcgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpJyA6ICdyZ2JhKDI1NCw3OSwyLDAuMDMpJyB9XCJcclxuICAgICAgICAgICB2LWZvcj1cImxha2UgaW4gbHlTdGF0aW9uLmxha2VcIiBAY2xpY2s9XCJ0b1N0YXRpb24obGFrZSlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW5hbWVcIj57eyBsYWtlLnNlY3Rpb25OYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKGxha2UucXVhbGl0eSB8fCAnLScpKSArICcpJywgbWFyZ2luOiAnMCAzMHB4IDAgMTZweCcgfVwiPlxyXG4gICAgICAgICAgICB7eyByZXBsYWNlU3RyaW5nKGxha2UucXVhbGl0eSB8fCBcIi1cIikgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtdGFyZ2V0XCI+XHJcbiAgICAgICAgICAgIOebruagh1xyXG4gICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbJ3RhcmdldC1sZXZlbCcsIGp1ZGdlVGFyZ2V0TGV2ZWwocmVwbGFjZVN0cmluZyhsYWtlLnRhcmdldCB8fCAnLScpKV1cIj5cclxuICAgICAgICAgICAge3sgcmVwbGFjZVN0cmluZyhsYWtlLnRhcmdldCB8fCBcIi1cIikgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludCBmc1wiPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiA6Y2xhc3M9XCJsYWtlLm92ZXJTdGFuZGFyZD8nZXhjZWVkJzonc3RhbmRhcmQnXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlXCIgOnN0eWxlPVwie2JhY2tncm91bmQ6IGxha2Uub3ZlclN0YW5kYXJkPycjZmY4ZDFhJzonIzQ0N2JmYyd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICB7e2xha2Uub3ZlclN0YW5kYXJkPyfotoXmoIcnOifovr7moIcnfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYXNpbi1uYW1lXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9yaXZlckAyeC5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPuays+mBk+aDheWGtTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXdyYXBwZXJcIiBzdHlsZT1cImJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjAzKVwiIHYtc2hvdz1cImx5U3RhdGlvbi5yaXZlci5sZW5ndGggPT0gMFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXJcIj7mmoLml6DmsrPpgZPkv6Hmga/vvIE8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZDogIXJpdmVyLm92ZXJTdGFuZGFyZCA/ICcgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpJyA6ICdyZ2JhKDI1NCw3OSwyLDAuMDMpJyB9XCJcclxuICAgICAgICAgICB2LWZvcj1cInJpdmVyIGluIGx5U3RhdGlvbi5yaXZlclwiIEBjbGljaz1cInRvU3RhdGlvbihyaXZlcilcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW5hbWVcIj57eyByaXZlci53YXRlckJvZHlOYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKHJpdmVyLnF1YWxpdHkpKSArICcpJywgbWFyZ2luOiAnMCAzMHB4IDAgMTZweCcgfVwiPlxyXG4gICAgICAgICAgICB7eyByZXBsYWNlU3RyaW5nKHJpdmVyLnF1YWxpdHkgfHwgXCItXCIpIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXRhcmdldFwiPlxyXG4gICAgICAgICAgICDnm67moIdcclxuICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiWyd0YXJnZXQtbGV2ZWwnLCBqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcocml2ZXIudGFyZ2V0IHx8ICctJykpXVwiPlxyXG4gICAgICAgICAgICB7eyByZXBsYWNlU3RyaW5nKHJpdmVyLnRhcmdldCB8fCBcIi1cIikgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludCBmc1wiPlxyXG4gICAgICAgICAg55uR5rWL5pat6Z2i77yae3sgcml2ZXIuc2VjdGlvbk5hbWUgfX1cclxuICAgICAgICAgIDxkaXYgOmNsYXNzPVwicml2ZXIub3ZlclN0YW5kYXJkPydleGNlZWQnOidzdGFuZGFyZCdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZDogcml2ZXIub3ZlclN0YW5kYXJkPycjZmY4ZDFhJzonIzQ0N2JmYyd9XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICB7e3JpdmVyLm92ZXJTdGFuZGFyZD8n6LaF5qCHJzon6L6+5qCHJ319XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFzaW4tbmFtZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvc2h1aXl1YW4ucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj7ppa7nlKjmsLTmupDlnLA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS13cmFwcGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMylcIiB2LXNob3c9XCJseVN0YXRpb24ud2F0ZXJTb3VyY2UubGVuZ3RoID09IDBcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyXCI+5pqC5peg6aWu55So5rC05rqQ5Zyw5L+h5oGv77yBPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cInNpdGUtd3JhcHBlclwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6ICF3YXRlclNvdXJjZS5vdmVyU3RhbmRhcmQgPyAnIHJnYmEoNjgsIDEyMywgMjUyLCAwLjAzKScgOiAncmdiYSgyNTQsNzksMiwwLjAzKScgfVwiXHJcbiAgICAgICAgICB2LWZvcj1cIndhdGVyU291cmNlIGluIGx5U3RhdGlvbi53YXRlclNvdXJjZVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJ0b1N0YXRpb24od2F0ZXJTb3VyY2UpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbmFtZVwiPnt7IHdhdGVyU291cmNlLndhdGVyQm9keU5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBqdWRnZUxldmVsKHJlcGxhY2VTdHJpbmcod2F0ZXJTb3VyY2UucXVhbGl0eSkpICsgJyknLCBtYXJnaW46ICcwIDMwcHggMCAxNnB4JyB9XCI+XHJcbiAgICAgICAgICAgIHt7IHJlcGxhY2VTdHJpbmcod2F0ZXJTb3VyY2UucXVhbGl0eSB8fCBcIi1cIikgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtdGFyZ2V0XCI+XHJcbiAgICAgICAgICAgIOebruagh1xyXG4gICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbJ3RhcmdldC1sZXZlbCcsIGp1ZGdlVGFyZ2V0TGV2ZWwocmVwbGFjZVN0cmluZyh3YXRlclNvdXJjZS50YXJnZXQgfHwgJy0nKSldXCI+XHJcbiAgICAgICAgICAgIHt7IHJlcGxhY2VTdHJpbmcod2F0ZXJTb3VyY2UudGFyZ2V0IHx8IFwiLVwiKSB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50IGZzXCI+XHJcbiAgICAgICAgICDnm5HmtYvmlq3pnaLvvJp7eyB3YXRlclNvdXJjZS5zZWN0aW9uTmFtZSB9fVxyXG4gICAgICAgICAgPGRpdiA6Y2xhc3M9XCJ3YXRlclNvdXJjZS5vdmVyU3RhbmRhcmQ/J2V4Y2VlZCc6J3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZVwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kOiB3YXRlclNvdXJjZS5vdmVyU3RhbmRhcmQ/JyNmZjhkMWEnOicjNDQ3YmZjJ31cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIHt7d2F0ZXJTb3VyY2Uub3ZlclN0YW5kYXJkPyfotoXmoIcnOifovr7moIcnfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2ltZ0p1Z2RlTGV2ZWx9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbiAgaW1wb3J0IHtseURldGFpbH0gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyXCI7XHJcbiAgaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuICBpbXBvcnQge2dldFNlY3Rpb25UaW1lfSBmcm9tICdAL3V0aWxzL3V0aWxzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGx5U3RhdGlvbjoge1xyXG4gICAgICAgICAgbGFrZTogW10sXHJcbiAgICAgICAgICByaXZlcjogW10sXHJcbiAgICAgICAgICB3YXRlclNvdXJjZTogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkubHlOYW1lICsgXCLmsLTotKjmg4XlhrVcIjtcclxuICAgICAgdGhpcy5nZXRMeUluZm8oKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEx5SW5mbygpIHtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGJhc2luTmFtZTogdGhpcy4kcm91dGUucXVlcnkubHlOYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbHlEZXRhaWwoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmx5U3RhdGlvbiA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB0b1N0YXRpb24oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwic3RhdGlvbkRldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgLy8gbWM6IGl0ZW0uc2VjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IGl0ZW0ubW9uaXRvck1ldGhvZCA9PSBcIuiHquWKqFwiID8gXCLml7ZcIiA6IFwi5pyIXCIsXHJcbiAgICAgICAgICAgIGlkOiBpdGVtLnNlY3Rpb25JZCxcclxuICAgICAgICAgICAgdGltZTogaXRlbS5tb25pdG9yTWV0aG9kID09IFwi6Ieq5YqoXCI/Z2V0U2VjdGlvblRpbWUoKTpkYXlqcyhnZXRTZWN0aW9uVGltZSgpKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcclxuICAgICAgICAgICAgLy8gbGlzdFR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgICAgLy8gemRUeXBlOiBpdGVtLm1vbml0b3JNZXRob2QsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICByZXBsYWNlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShcIuexu1wiLCBcIlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZUxldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGltZ0p1Z2RlTGV2ZWwodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZVRhcmdldExldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaFcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFo1wiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi5Yqj4oWkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDZcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmJhc2luLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE5cHggMjRweCAxMXB4O1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzQ0N2JmYztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaXRlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuc2l0ZS1uYW1lIHtcclxuICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1uYW1lIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS10YXJnZXQge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvaW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RhbmRhcmQsIC5leGNlZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhcmdldC1sZXZlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAuZXhjZWVkIHtcclxuICAgIGNvbG9yOiAjZmY4ZDFhO1xyXG4gIH1cclxuXHJcbiAgLnN0YW5kYXJkIHtcclxuICAgIGNvbG9yOiAjNDQ3YmZjO1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0udGl0bGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiLCBmaXhlZDogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmx5U3RhdGlvbi5sYWtlLmxlbmd0aCA9PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJseVN0YXRpb24ubGFrZS5sZW5ndGggPT0gMFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoNjgsIDEyMywgMjUyLCAwLjAzKVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pqC5peg5rmW5bqT5L+h5oGv77yBXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl9sKF92bS5seVN0YXRpb24ubGFrZSwgZnVuY3Rpb24gKGxha2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAhbGFrZS5vdmVyU3RhbmRhcmRcbiAgICAgICAgICAgICAgICAgICAgPyBcIiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMylcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTQsNzksMiwwLjAzKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9TdGF0aW9uKGxha2UpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobGFrZS5zZWN0aW9uTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVkZ2VMZXZlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhsYWtlLnF1YWxpdHkgfHwgXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDMwcHggMCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZXBsYWNlU3RyaW5nKGxha2UucXVhbGl0eSB8fCBcIi1cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXRhcmdldFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOebruaghyBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFyZ2V0LWxldmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZVRhcmdldExldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGxha2UudGFyZ2V0IHx8IFwiLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVwbGFjZVN0cmluZyhsYWtlLnRhcmdldCB8fCBcIi1cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50IGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IGxha2Uub3ZlclN0YW5kYXJkID8gXCJleGNlZWRcIiA6IFwic3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGFrZS5vdmVyU3RhbmRhcmQgPyBcIiNmZjhkMWFcIiA6IFwiIzQ0N2JmY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhsYWtlLm92ZXJTdGFuZGFyZCA/IFwi6LaF5qCHXCIgOiBcIui+vuagh1wiKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmx5U3RhdGlvbi5yaXZlci5sZW5ndGggPT0gMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibHlTdGF0aW9uLnJpdmVyLmxlbmd0aCA9PSAwXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS13cmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmmoLml6DmsrPpgZPkv6Hmga/vvIFcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmx5U3RhdGlvbi5yaXZlciwgZnVuY3Rpb24gKHJpdmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIXJpdmVyLm92ZXJTdGFuZGFyZFxuICAgICAgICAgICAgICAgICAgICA/IFwiIHJnYmEoNjgsIDEyMywgMjUyLCAwLjAzKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDI1NCw3OSwyLDAuMDMpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1N0YXRpb24ocml2ZXIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mocml2ZXIud2F0ZXJCb2R5TmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVkZ2VMZXZlbChfdm0ucmVwbGFjZVN0cmluZyhyaXZlci5xdWFsaXR5KSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDMwcHggMCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZXBsYWNlU3RyaW5nKHJpdmVyLnF1YWxpdHkgfHwgXCItXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS10YXJnZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDnm67moIcgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcmdldC1sZXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVkZ2VUYXJnZXRMZXZlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhyaXZlci50YXJnZXQgfHwgXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZXBsYWNlU3RyaW5nKHJpdmVyLnRhcmdldCB8fCBcIi1cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50IGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOebkea1i+aWremdou+8mlwiICsgX3ZtLl9zKHJpdmVyLnNlY3Rpb25OYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiByaXZlci5vdmVyU3RhbmRhcmQgPyBcImV4Y2VlZFwiIDogXCJzdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByaXZlci5vdmVyU3RhbmRhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmOGQxYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiM0NDdiZmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3Mocml2ZXIub3ZlclN0YW5kYXJkID8gXCLotoXmoIdcIiA6IFwi6L6+5qCHXCIpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubHlTdGF0aW9uLndhdGVyU291cmNlLmxlbmd0aCA9PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJseVN0YXRpb24ud2F0ZXJTb3VyY2UubGVuZ3RoID09IDBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMylcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuaaguaXoOmlrueUqOawtOa6kOWcsOS/oeaBr++8gVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fbChfdm0ubHlTdGF0aW9uLndhdGVyU291cmNlLCBmdW5jdGlvbiAod2F0ZXJTb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAhd2F0ZXJTb3VyY2Uub3ZlclN0YW5kYXJkXG4gICAgICAgICAgICAgICAgICAgID8gXCIgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInJnYmEoMjU0LDc5LDIsMC4wMylcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU3RhdGlvbih3YXRlclNvdXJjZSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3YXRlclNvdXJjZS53YXRlckJvZHlOYW1lKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZUxldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKHdhdGVyU291cmNlLnF1YWxpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDMwcHggMCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKHdhdGVyU291cmNlLnF1YWxpdHkgfHwgXCItXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtdGFyZ2V0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg55uu5qCHIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXJnZXQtbGV2ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1ZGdlVGFyZ2V0TGV2ZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGxhY2VTdHJpbmcod2F0ZXJTb3VyY2UudGFyZ2V0IHx8IFwiLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKHdhdGVyU291cmNlLnRhcmdldCB8fCBcIi1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50IGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOebkea1i+aWremdou+8mlwiICsgX3ZtLl9zKHdhdGVyU291cmNlLnNlY3Rpb25OYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB3YXRlclNvdXJjZS5vdmVyU3RhbmRhcmQgPyBcImV4Y2VlZFwiIDogXCJzdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3YXRlclNvdXJjZS5vdmVyU3RhbmRhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmOGQxYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiM0NDdiZmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod2F0ZXJTb3VyY2Uub3ZlclN0YW5kYXJkID8gXCLotoXmoIdcIiA6IFwi6L6+5qCHXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJhc2luLW5hbWVcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwcHhcIiB9LFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/muZblupMucG5nXCIpIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbX3ZtLl92KFwi5rmW5bqT5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFzaW4tbmFtZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjBweFwiIH0sXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3JpdmVyQDJ4LnBuZ1wiKSB9LFxuICAgICAgfSksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihcIuays+mBk+aDheWGtVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJhc2luLW5hbWVcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwcHhcIiB9LFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zaHVpeXVhbi5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoXCLppa7nlKjmsLTmupDlnLBcIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhc2luLW5hbWVbZGF0YS12LTFhNDVhMzBlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTlweCAyNHB4IDExcHg7XFxufVxcbi5iYXNpbi1uYW1lIC5uYW1lW2RhdGEtdi0xYTQ1YTMwZV0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnNpdGUtd3JhcHBlcltkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaXRlLXdyYXBwZXIgLnNpdGUtbmFtZVtkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLW5hbWVbZGF0YS12LTFhNDVhMzBlXSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLXRhcmdldFtkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zaXRlLXdyYXBwZXIgLnBvaW50W2RhdGEtdi0xYTQ1YTMwZV0ge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5zaXRlLXdyYXBwZXIgLnBvaW50IC5jaXJjbGVbZGF0YS12LTFhNDVhMzBlXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnNpdGUtd3JhcHBlciAucG9pbnQgLnN0YW5kYXJkW2RhdGEtdi0xYTQ1YTMwZV0sIC5zaXRlLXdyYXBwZXIgLnBvaW50IC5leGNlZWRbZGF0YS12LTFhNDVhMzBlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhcmdldC1sZXZlbFtkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmV4Y2VlZFtkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uc3RhbmRhcmRbZGF0YS12LTFhNDVhMzBlXSB7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XFxuLm51bVtkYXRhLXYtMWE0NWEzMGVdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhNDVhMzBlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiY2NlNWEyOTRcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYTQ1YTMwZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhNDVhMzBlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5sZXQgYmFzZVVybCA9IFwiL3dhdGVyXCI7IC8v5pyN5Yqh5Zmo5pivd2F0ZXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua2luZ1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuawtOeOr+Wig+W5tOW6leaOkuWQjeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJSYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24veWVhclJhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN5ZCE5Yy65Z+f6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbiDlkITljr/vvIjluILvvInljLrjgIHlvIDlj5HluqblgYflm63ljLrlraPluqblnLDooajmsLTnjq/looPotKjph4/or4TliIbor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hcmtzKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9zY2FsZU1hcmtzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5YWo5biC5rC0546v5aKD5qaC5Ya15oC75L2T5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCYXNpY0RhdGEoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuaWremdouS/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlckJhc2ljRGF0YS9zZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5YiX6KGoLS3lm73jgIHnnIHjgIHluIJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3NlY3Rpb25MaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3mn6Xor6LkuIrmuLjotoXmoIdcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtT3ZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbU92ZXJcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivoua5luW6k+eahOebkea1i+aWremdolxyXG5leHBvcnQgZnVuY3Rpb24gbGFrZVNpdGVMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2xha2VTaXRlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaIt5rKz5rWB5pe25YC85puy57q/XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3F1ZXJ5U2VjdGlvbkluZm9cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25EZXMoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vc2l0ZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsrPmtYHor6bmg4Ut5rKz6YGT6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3ml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJMaW5lKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2N1cnZlXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lkajovrnmtonmsLTmsaHmn5PmupBcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUG9sbHV0aW9uKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3BvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1Qb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1Qb2xsdXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmlq3pnaLliJfooahcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbi8vICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4vLyAgICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbVwiLFxyXG4vLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuLy8gICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTlupNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1XYXRlclwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaOkuWPo1xyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1TZXdhZ2UoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1TZXdhZ2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTotKjlh4DljJbljoJcclxuZXhwb3J0IGZ1bmN0aW9uIHB1cmlmaWNhdGlvblBsYW50KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3B1cmlmaWNhdGlvblBsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLS3nm5HmtYvor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFUYWJsZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9kYXRhVGFibGVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeawtOi0qOWHgOWMluWOguivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gamhjSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1XHJcbmV4cG9ydCBmdW5jdGlvbiBseUJhc2luKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1LeivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gbHlEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL2RldGFpbHNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1IC0g5ruH5rGg5rC06LSoXHJcbmV4cG9ydCBmdW5jdGlvbiBkY1N6KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9kY0RhdGFcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKggLSDmsLTotKjliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3pMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZGNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCJcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1LemlrueUqOawtOa6kOWcsFxyXG5leHBvcnQgZnVuY3Rpb24geXlzSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RyaW5rU291cmNlXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywLeawtOW6k+WIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gc2tMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9sYWtlL2RyaW5rU291cmNlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluIPlj4rlupPlrrlcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyQm9keUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS93YXRlckJvZHlEaXN0cmlidXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC06LSo5YeA5YyW5Y6C5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC05bqT5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNlcnZvaXJMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C5rKz6YGT5pat6Z2i6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50Uml2ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOi0qOWHgOWMluWOguihpeawtOaWremdolxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudFNpdGUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L3NpdGVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15rC06LWE5rqQ5p+l6K+iXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vcmVzb3VyY2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOWKn+iDveWMuuWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJGdW5jdGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy66K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJGdW5jRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52b2x2ZVdhdGVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaOkuafpeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVBjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlUGNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLea6r+a6kOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVN5RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3lEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeebkea1i+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZUpjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlSmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaVtOayu+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVp6RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlWnpEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5raJ5rC05rGh5p+T5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbHV0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nzd3J5bGJcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQ5YiX6KGodGFi5oC75pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeays+mBk+S/oeaBr+e7n+iuoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3moLnmja7mtYHln5/mn6Xor6LmsrPpgZPkuIvmi4nmoYZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL3dhdGVyTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQW9DQVlBQUFDTS9yaHRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFaU1NVUkJWRmlGdGRoN2FCMVpIY0R4NzVrNzkvM096VzFNMGtkc3U5SUUxdDJpOXVIcU5zVzFQaERaaGYxRC8xcFpGQkZFZGhjRkViUVJCV0VwZGFGc3NRYVdYVVFFVVpCU3U3dUNOQlhjYklYYXVwUWF0OTIwbGFacHNrbm1QbWR5WDNQOFkrN2N6TDI1NzhRZmhKazU1OHljei8yZE0zTW1JK2d6cHJQYUpJQVVuSFFVVDFhM013QlNjaG5nMitINFZMLzlpRjVQT0pmVnBvVGdtQVBUYmN4SXllVmVzVjBEcTdDVG5WdDJEaW41YWJmUWpzRHByRFlwQlplMnJHb1MzVUNWZHBYbnN0clUvd3NISUFRbnoyVzFxYlp0V2xWczU1QjJpbmFaYkFwc2g0c3IxaW1hS2JjRkZ4U0NwQ0lvUzNuNXk0SFlaRWRnTTF4Y0VleDFpUnJPanZtS1JEUGxsckE3RkFzSWtEWTNJK3Q2dkpCUHYyNEkrWnl6dzdnaStJUzc3VlJsdmlLWkw1czl3ZXpNQlJ0U3BKbm1pMThKeEY5cENwd3ZaV295dTlPbnZLNnVPcnhhTXJ2TzVKaEwyUVN6SXkvaGhEOWFxNjN0eks2blpvWmN5ckd1ZW1nVG1pblJKQzB6Nmh6U1Z1RWM2bHBMWi9hMkk1ekRiZytudGQvZCthWTBqMy9XSDU5UndjcmVkdUlBOXJvRW1pbUlpczN6ckp0NGFQSU5ZRWJBOW1mUGppVlQwdThOYmlCVFQvbGljWEdubEoyVXlLYXJ4WVA4TEFDcDR2c1V6Ylc2T284eVFNenpNVWFDUjF0M0lpRzFoVWVRWnBvdmlqZlgvblpkS2QxL0xGVzhoVm14S25MbCt3QVVTam9BWG5lZ3V2WFh0bllaZ0NvSG1JZy8xN1NUbklSc24waEQ4b2I0L2NMMDNlWE16SjUrTGhBSkpJZ0VFaDJoL1NBenhpeEZXVEhFYTNkK2JPanI4NzUrZ00yZ1pzVWEva2JvWXFVN1lNYVlwVkMrQWtDNWdsVGRRbEczZ2dQSTZLdGs5RlVpZ1FSZXR4L0ZCVGUxTitxUUhnSEZOc2FNTVV1K2NBVzFmbDBRYXRxNHZXV2dFMnFIMXgzZ3ZZZC94S2g4R2dXUTFUK0FrZEFISkVNcFBzeXRFZmF1NGxiMTJubDZ3YUJRTXFyWDhLTWFSUVdqVUwvVytyMG1mazl2YTZ0UnRLNFJNM2V4THI3RzFkVWg0b0g2QjZCWnVjMnUwS3RVeXZBd1paV2x5cTJ2V1NqcHFGb3VWRFlLeGJvc2Fya3F0SXIwVmJkK3I3VzFmOUI2RldVVUZmYUhobEhWcjNKVjMwTThJSWdISE5mVEpVUHVkMGhHL3REVGp4YWUzU2sxVTZpSU5kMGtYNWJrU3BLUEp6YXNoZ1BnaER0amYyaVlFM3NPY2owOXdaK1g0d3pINnJPbTZSSnZaWW54NUx1czlEWW9JSTJVK2lCZmx1bjFqVFBuTXhWeUpXdTJoTnlDb0NvSXVrWHR1QTQyZkpBYksvdjR3VDhIaUlVOURNYzJwb3BSa2l5bXJPdis1RUNaaTZrSCtEMjkrWVE2ZWs4ZEhSaThrSDZ3OUxSZGFPUHMvVnhKRWlvTGR2aVZPdGorMEREZmZ6ZktCOFV3WHArYm1HUEIxWFNKbHJkd3o0Nm04Q2gzMExJcS9rU3hOeUZRRzA5bmRvQWF5QzUzd29BNlhEeW80SysyYytJSzZ5V2VIZFU0ZStzYVJsRmhMYXN5RUc1elZ6U0VPL0hOS2ZYTUV5OC84Nk8vZjZmVWVLUFlFQ2ZLaHIydktiaUNRYncrTjBEdGJuWGlBSTRsclVsN083ZG8xZWVzTHJwQkNuZnk3cmZDMWRldFR5YjNYWHZVLzlGUE5lS2NjVFBqNDdXYlhtNW1mVVFTZ2JvNlRiZW1oUk9YU2V1OGNDaFZ3OVhhZG9rVTZ1ZzljTHl3U3UyZHBzOTVPMk5hdmtJNDZpY1NEVFJyVmhlWnRNNUVlSjFUUjlLY3ZYVnhFeEtzUjloSW9zaEtYdkR2WldzNkRRWWx5YUJrTUNqNTd2aHZCVGptNEMvbkN0bUYxSTd3aDBVVkxXK2k1U3MyblhEVXcranV6akFibDAwYm5QcDhCcUFwRHF4SDF6L3V1bG5JYmVSbEpTK1lBNDQrc3Z0ZmRsa04rTkxSNDVIUFROK1FVQUxBNjNQajhhcGRaYXdSZDNpbmFJdXp3NGx6eHM4Zi85bmptNEFBaisyVmN5dmx3UU5kaTVyZzRrRVhwNDVvQVB4bDhWckw5czdIbVRNTzdZbS8vVmZIY2QwaS9Pcm5IaDBmamMzZDZ4Y0g4UHg0b1ZiZW1FRWJsU3RKbG8zTnk4cStvY1M5WHh4NjVZdk9zazF2TXFjUEh4OTc2Y3FsdXd1cEF4MWZZcDB3Z01NN0JVK1A2WnR3UzdySlVoTlFJKzdYVDU0ZWF5eHYrc25nOU9Ialk1MHkyWWpiR1JHY09wS3VIZHZEdXhWY1MyQXJaQ2F0azBuckxQeDN0UTRYRDdyNDNZa04zTzNjWWkyRFc4RzFCZHJJOGFHMzNuYWluREN3aHZYOGw3UzZNbWYyMnNYRXlOQ2YydUdnaDAvQVgzL3pSblo1eFIwcXJKZnFjTTVoQlN0N1oyOWQ1TDNWMWl2RnJxZy8vZnFKWDhXNjZiZm4vL20vZCtuS21xbjdvczgvVWxBT0p1c1JOcTdWdkJ1SmVKWis4NFhwai9UU1h4OGZKYXk0a1o1NzRmckMrUjgrR1orSVNzcWVpaW5GbWY5Y0VBQWxYSlg3dVpJaUpITG5ZUEk4d0prblhuNm1uMzcrQjFReEhDWUxQbHFpQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU9wU1VSQlZGaUYxWm5OYnR0R0VNZi9NOHVWWE5tQUVzTUNDaGVPRWZUY2svSUFoZUdMRG40TjZ1UnpZRGdGVkRTOTlRV2lSeWtDd3c5Z25Yb080alNBTC81QURjTzJLSEpuY3FBb1VGK2tSRHFDK3o5UjVNek9qN083UTNKRUtLajl0MW9YRHh1R2dob0pWUlVWajB4b0ltZFZUZWlNMm9GR1FlQmM5RkRSOWJ1Ly82TDdJbkZvR2VPRGp0YnV3MzZEbmRsa0MxN0dWMkFISXJnUmUzNTkybm5kZjFMQTFxRldYYjIvRFRLYnkwRE5VeVR1NnZiVjJrV3ZUV0dlYlM1ZzYwZ2JBWVU3bmxrdTIzbVNFQkt0MmErbkhicktzc3NNdW5mOHVPdXgyWHBLc0VrSjI4dVB2OU8vODY3UEJkeDdwejk3Rkw3NFBsamppdFQrZC9LZVBzMjZOaE53bFhDSjVrRk83Y1M5NDhmZFZjTUJnRWZoaTczang5M0o4Mk9BclNOdGZPODFseVdQelZiclNCdnBjeVBBMXFGV0F3cDN5Z1FRWVI4d3pUSmpCQlR1dEE2MW12ejJrZ05YNzI5N1pFcVVFdE1FMUJkUk1PTk4wVkU4QTNMMS9qYUF6OEF3Z3djZHJaVXR3azdFVDQ3alRKWVFtYzJEanRaR2dQZGh2NUh0a1MwUjlnbVVubHEvTEdUQ3hBREFya3oyVEJQQUxKaFNnQWtUNzcvVitySVAvclRTVXp1cE1sbGtPMlFURHh0RkI1a3h0Wk1xTmRYaVlZTU5CYldpQTJDeGFTd01hQ2lvTVFsVjgwMm50VXhtaW1hUmhLcXNxSGo1cHROUzZESUZ1UkNnb3VJeG1kQVVjYzVaZTZrZzJpc3lQZ0NRQ1ExSHptclJBZktrMEo1aGJSZjFqNXhWVmhPNm9zSHpiQWpVVzlSMlpnd1RPalpxQjBXY2srQVo2akpMRnpETkJXeG55cWdkc0VaQnNLUmJVNFQ5T0hnMm5BajdUc1JQUUpkOTA5RW9DRHpub2dkakt5OFhjWWpMaFE1M3BPa3hvKzFFMHNXNm00QVBTNHR2bU51QWc0aCtpRTI0bTNOekl6a1hQWEJGMSs4V2h4dVZpeTdnZW9EckdkWjJhbzM1SW53bXdtY0F3Q3h2WXJ1eGRlZzdvUStMeEt6bytoMEJ3UDV2K2dzanJPUUFuaVhIODNkbk1vVnVhczFOM0NDWXFUM0xibVFQTy9qNEIvM2p4YzY0WWNhUFdZQUs3U1ZUU2FDbUNQbHhvUFIwVFFhTWdlTmxnR1o2TEVBeU40NElib0RoRzdYWTgydTRueklCRFd0N0NKVmt3WThIWW45V0dZbHZScFBqc1JzMXpGMGd1N3FKUGIrT2ZZZGEvQ1BkTkVXMHFkRG1vaytUQ2JEY2toT0p1enI1ODRjdlFPcWI1UGJWMnNYTHorRUNUU0hYWTBZdkNac0FEeUZHTlk4NVhmc1NxUHhuZ29TUTI5ZHJGOG52c1kra1h6dTZWWEhoMUxmcEtqVXc5a3U2WHpPV3JkTU9YUW5ieTlWanhSSzJsNVBOcEdmZituajJ6YU81RytMa1BYMkt4R1gyN3A1Q3d2WnlIaHp3ZjI5Z0pucldMZUMwbm0wVGZaWlc5VGZFTi9oWStsN3NiWUdNQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU92U1VSQlZGaUZ2WmpQYXh0SEZNYy9iNlNsZjBNcFBRVGFRdytocENXSEhJcDNqN2tVQ3M0aEVJeWoybUNNL3dmdC9nL0dxTEhpT3FHUVl3KzlWeU5DajRXV0hueklxWWZpdnlIc3pyd2VWaXZ0b2wxcFY1YjFoVUhTdlBueDBielo5MlpXMkZDSHR4b0NPQmdXZFFJaGdJS2QvWjRDdlAxVTRrM25rYTRkRG00MVZ0Z3JZTnBLd1FwTXU4SzJCank0MVpqU2F0MVJTVnZRdFlDSHR4cDZtTndacVY1clFjMHE0OEd0eHZjSUJ6Q2NlYVpSalN1NFpaZXVVK05LMWdMdUdLNVFMZVFTNE1GL0dxTTdoOHNsSkc4L3EwSldBQS8vMVZoM3YzSVZpU0c2L2x4czhidGZOcXJYTGNPSmhUeWd0NVY2SnBRV2J2NFVIMzdRV0J4c1VHeGQvWnNIUnQ0OGtFZ3lpYnFPZWZoaDhXUXZ3b3pYSVE2Nmx1c3ZURVFxVWFYZTU2a080UHBMc1hoc3AzRkxualFBZ3h1MzBlb1pyd25BOVZkaWpkZGtic3NXYVhCdzQyTEpDTHVPUGJoeE1ZV3ZYLzdqSjNUTXJZSW1Wdzk3Y2JtdVpoemJkZHh5MzU4Zm1rZ0FCbjk3N2RyNzZtdFRHME5mL3VVbklodERWV1M4Ukdid3A0dHhTcWVTNWE2dFUwOGxLYmNWaHpWZUluSFl6dk1BeHZpTys4NlJYSDFiZFcxWjQwZGlqV08rSDE5L1k2THhJN0hpSk9tNkR6WFRvVkduZTEyZXNQSGpacmc1NU9OZUxCbUpaRDVhMUltVmpLUmJsUEQweFFQdGQyQ2phNWNnbnl6L2tmR1RYbnowaDRPMjJVcEFqdDY3MW5qajczcWRUK0IxT25xZlRVRENObTJOT0tWTndhazltcVN0QmwwSk4wbERrOG0wN2J4eS9IczJRYmNURnJZdXdmYkpOcmc1N1VnSzlJMWIvWXdZTkFMdzg0d2dsUTB1WUlVOEx1WnR1dGxYU2RDcGtVd1Q4VkJiSEJaUHFFNkd4c09ycDBGc01vMk0xOFJrR3IxNjJoZkpORkVuUXp4aDNxWXZoZDFrR2hYMnhSZ3orNnlOT0d6VC9NYURuUHlXaHFydEwwYWlpMUNqd2g3THVkYUs1aGYyQnZ0OGpDWjdvWisrRDBRQVRuNU5PeDhXZGlBNytpR0k4aE4xeHBUMUNkN09QdXZhMmRMM3BuRlc5Vi9XekFzR1lQUXNXSHNleERFZDdRY1Jqb1JacnNWalVhTFJmaENoSkNqSmFEK1FHcnVVN1czeThPaFpFRU1wd3B5K1MxdGRtQVFTRDNiMFBMQW43OUpROGo1aDJRNXc4VHlmb0s1Tm16bUsvcFVRZVBwTDJ2bGNlQis2ZUJITXVTcTNPcE1TZWFQMythcWpoYVJ5SUZsS0lxZXYweGpaOXZXenBWU1NpeDl6MXhhcXpYSm5sMm1zN0JaU2tPVDh1QW9IRFcrM3pvK0R1RWhQdTVDZ3RYQzViWVhPTGovRzJpRjNicUljN3BPNDJiNUc5d2twU0hSK0hOalZiVnBxbTZEclZxM2F0cU5tb0N1VGZJT3NvTk8yWUlYdWRGWTl1L3dZQTh5QVlRRnRGeFBrY1cyZEs1djBQeE1HamZVREdOek5BQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTQ1YTMwZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYTQ1YTMwZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFhNDVhMzBlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhNDVhMzBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhNDVhMzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhNDVhMzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE0NWEzMGUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWE0NWEzMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luRGV0YWlsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhNDVhMzBlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhNDVhMzBlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==