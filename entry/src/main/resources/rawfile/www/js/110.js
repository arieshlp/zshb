(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ecology: {
        pressure: {
          score: 53.56,
          population: 30,
          area: 50,
          soil: 50,
          waterSource: 50,
          cod: 80,
          ad: 96,
          pesticide: 10,
          manure: 76,
          livestock: 60,
          waterInvolve: 30,
          level: '一般'
        },
        health: {
          score: 42.14,
          waterQuality: 42,
          yearNature: 62,
          connect: 15.17,
          natureRatio: 48,
          plant: 28.12,
          alga: 42.8,
          animal: 45.03,
          level: '一般'
        },
        service: {
          score: 52.9,
          standardRatio: 42,
          index: 62,
          radiusRatio: 15.17,
          level: '基本满足'
        },
        risk: {
          score: 69,
          pollutionSize: 0,
          envTarget: 96,
          metal: 90,
          level: '较低风险'
        }
      },
      showArr: [true, true, true, true]
    };
  },
  mounted: function mounted() {
    this.title = '牛栏江水生态';
  },
  methods: {
    onChange: function onChange(index, flag) {
      var tempArr = this.showArr;
      tempArr[index] = !flag;
      this.showArr = Object.assign([], tempArr);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true& ***!
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
        attrs: { title: _vm.title, fixed: "", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "scroll-to-top-wrapper" }, [
        _c("div", { staticClass: "around-wrapper" }, [
          _c("div", { staticClass: "title fs" }, [
            _vm._m(0),
            _c(
              "div",
              {
                staticClass: "score",
                on: {
                  click: function ($event) {
                    return _vm.onChange(0, _vm.showArr[0])
                  },
                },
              },
              [
                _c(
                  "span",
                  { staticStyle: { "font-family": "alimamashuheiti" } },
                  [_vm._v(_vm._s(_vm.ecology.pressure.score))]
                ),
                _vm._v("分 "),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[0] === true,
                      expression: "showArr[0]===true",
                    },
                  ],
                  attrs: { name: "arrow-up", color: "#FF8D1A", size: "12" },
                }),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[0] === false,
                      expression: "showArr[0]===false",
                    },
                  ],
                  attrs: { name: "arrow-down", color: "#FF8D1A", size: "12" },
                }),
              ],
              1
            ),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showArr[0] === true,
                  expression: "showArr[0]===true",
                },
              ],
              staticClass: "water-wrapper",
            },
            [
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 人口密度"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.population) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 不透水面积比"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.pressure.area) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 土壤侵蚀指数"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.pressure.soil) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 水资源开发利用率"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.waterSource) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 单位土地面积COD排放量"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.pressure.cod) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 单位土地面积氨氮排放量"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.pressure.ad) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 单位耕地面积农药使用量"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.pesticide) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 单位耕地面积化肥施用量"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.manure) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 单位土地面积畜禽养殖量"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.livestock) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 引调水工程影响程度"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.pressure.waterInvolve) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "pressure fs" }, [
                _vm._m(1),
                _c("span", { staticClass: "status" }, [
                  _vm._v(_vm._s(_vm.ecology.pressure.level)),
                ]),
              ]),
            ]
          ),
        ]),
        _c("div", { staticClass: "around-wrapper" }, [
          _c("div", { staticClass: "title fs" }, [
            _vm._m(2),
            _c(
              "div",
              {
                staticClass: "score",
                on: {
                  click: function ($event) {
                    return _vm.onChange(1, _vm.showArr[1])
                  },
                },
              },
              [
                _c(
                  "span",
                  { staticStyle: { "font-family": "alimamashuheiti" } },
                  [_vm._v(_vm._s(_vm.ecology.health.score))]
                ),
                _vm._v("分 "),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[1] === true,
                      expression: "showArr[1]===true",
                    },
                  ],
                  attrs: { name: "arrow-up", color: "#FF8D1A", size: "12" },
                }),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[1] === false,
                      expression: "showArr[1]===false",
                    },
                  ],
                  attrs: { name: "arrow-down", color: "#FF8D1A", size: "12" },
                }),
              ],
              1
            ),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showArr[1] === true,
                  expression: "showArr[1]===true",
                },
              ],
              staticClass: "water-wrapper",
            },
            [
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 水质综合得分"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.health.waterQuality) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 年生态基流满足率"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.health.yearNature) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 连通性"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.health.connect) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 自然岸线比例"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.health.natureRatio) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 河岸带植被覆盖度"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.health.plant) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 藻类完整性"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.health.alga) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 大型底栖动物完整性"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.health.animal) + "分")]),
              ]),
              _c("div", { staticClass: "pressure fs" }, [
                _vm._m(3),
                _c("span", { staticClass: "status" }, [
                  _vm._v(_vm._s(_vm.ecology.health.level)),
                ]),
              ]),
            ]
          ),
        ]),
        _c("div", { staticClass: "around-wrapper" }, [
          _c("div", { staticClass: "title fs" }, [
            _vm._m(4),
            _c(
              "div",
              {
                staticClass: "score",
                on: {
                  click: function ($event) {
                    return _vm.onChange(2, _vm.showArr[2])
                  },
                },
              },
              [
                _c(
                  "span",
                  { staticStyle: { "font-family": "alimamashuheiti" } },
                  [_vm._v(_vm._s(_vm.ecology.service.score))]
                ),
                _vm._v("分 "),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[2] === true,
                      expression: "showArr[2]===true",
                    },
                  ],
                  attrs: { name: "arrow-up", color: "#FF8D1A", size: "12" },
                }),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[2] === false,
                      expression: "showArr[2]===false",
                    },
                  ],
                  attrs: { name: "arrow-down", color: "#FF8D1A", size: "12" },
                }),
              ],
              1
            ),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showArr[2] === true,
                  expression: "showArr[2]===true",
                },
              ],
              staticClass: "water-wrapper",
            },
            [
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 集中式饮用水源地水质达标率"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.service.standardRatio) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 水源涵养指数"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.service.index) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 径污比"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.service.radiusRatio) + "分"),
                ]),
              ]),
              _vm._m(5),
            ]
          ),
        ]),
        _c("div", { staticClass: "around-wrapper" }, [
          _c("div", { staticClass: "title fs" }, [
            _vm._m(6),
            _c(
              "div",
              {
                staticClass: "score",
                on: {
                  click: function ($event) {
                    return _vm.onChange(3, _vm.showArr[3])
                  },
                },
              },
              [
                _c(
                  "span",
                  { staticStyle: { "font-family": "alimamashuheiti" } },
                  [_vm._v(_vm._s(_vm.ecology.risk.score))]
                ),
                _vm._v("分 "),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[3] === true,
                      expression: "showArr[3]===true",
                    },
                  ],
                  attrs: { name: "arrow-up", color: "#FF8D1A", size: "12" },
                }),
                _c("van-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showArr[3] === false,
                      expression: "showArr[3]===false",
                    },
                  ],
                  attrs: { name: "arrow-down", color: "#FF8D1A", size: "12" },
                }),
              ],
              1
            ),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showArr[3] === true,
                  expression: "showArr[3]===true",
                },
              ],
              staticClass: "water-wrapper",
            },
            [
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 暴露人口数量"),
                _c("br"),
                _c("span", [
                  _vm._v(_vm._s(_vm.ecology.risk.pollutionSize) + "分"),
                ]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 敏感环境目标"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.risk.envTarget) + "分")]),
              ]),
              _c("div", { staticClass: "width50" }, [
                _vm._v(" 重金属类"),
                _c("br"),
                _c("span", [_vm._v(_vm._s(_vm.ecology.risk.metal) + "分")]),
              ]),
              _c("div", { staticClass: "pressure fs" }, [
                _vm._m(7),
                _c("span", { staticClass: "status" }, [
                  _vm._v(_vm._s(_vm.ecology.risk.level)),
                ]),
              ]),
            ]
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
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticClass: "circle" }),
      _vm._v(" 生态环境压力 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "inline-flex", "align-items": "center" } },
      [
        _c("img", {
          staticStyle: { "margin-right": "5px" },
          attrs: { src: __webpack_require__(/*! @/assets/关于.png */ "./src/assets/关于.png"), width: "14" },
        }),
        _vm._v(" 压力等级说明 "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticClass: "circle" }),
      _vm._v(" 生态系统健康 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "inline-flex", "align-items": "center" } },
      [
        _c("img", {
          staticStyle: { "margin-right": "5px" },
          attrs: { src: __webpack_require__(/*! @/assets/关于.png */ "./src/assets/关于.png"), width: "14" },
        }),
        _vm._v(" 压力等级说明 "),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticClass: "circle" }),
      _vm._v(" 生态服务功能 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pressure fs" }, [
      _c(
        "div",
        { staticStyle: { display: "inline-flex", "align-items": "center" } },
        [
          _c("img", {
            staticStyle: { "margin-right": "5px" },
            attrs: { src: __webpack_require__(/*! @/assets/关于.png */ "./src/assets/关于.png"), width: "14" },
          }),
          _vm._v(" 压力等级说明 "),
        ]
      ),
      _c("span", { staticClass: "status" }, [_vm._v("一般")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticClass: "circle" }),
      _vm._v(" 生态风险 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "inline-flex", "align-items": "center" } },
      [
        _c("img", {
          staticStyle: { "margin-right": "5px" },
          attrs: { src: __webpack_require__(/*! @/assets/关于.png */ "./src/assets/关于.png"), width: "14" },
        }),
        _vm._v(" 压力等级说明 "),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".around-wrapper[data-v-839552bc] {\n  margin: 15px;\n}\n.around-wrapper .title[data-v-839552bc] {\n  padding: 7px 11px;\n  border-radius: 10px;\n  background: #fef8f3;\n  border: 1px solid #faead9;\n  box-shadow: 0px 6px 20px -10px rgba(255, 141, 26, 0.3);\n  color: #ff8d1a;\n}\n.around-wrapper .title .name[data-v-839552bc] {\n  display: flex;\n  align-items: center;\n  font-family: alimamashuheiti;\n}\n.around-wrapper .title .name .circle[data-v-839552bc] {\n  margin-right: 5px;\n  width: 6px;\n  height: 6px;\n  background: #fff;\n  border-radius: 50%;\n  border: 4px solid #ff8d1a;\n}\n.around-wrapper .water-wrapper[data-v-839552bc] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 10px;\n  border-radius: 0px 0px 10px 10px;\n  background: linear-gradient(180deg, rgba(255, 141, 26, 0.05) 0%, rgba(255, 141, 26, 0) 100%);\n  border: 1px solid rgba(37, 57, 111, 0.1);\n  color: rgba(37, 57, 111, 0.5);\n  font-size: 12px;\n  line-height: 20px;\n}\n.around-wrapper .water-wrapper .width50[data-v-839552bc] {\n  padding: 12px 0 0 26px;\n  width: 42%;\n}\n.around-wrapper .water-wrapper .width50 span[data-v-839552bc] {\n  color: #121236;\n  font-size: 14px;\n}\n.around-wrapper .water-wrapper .width50[data-v-839552bc]:nth-child(2n) {\n  padding-left: 0;\n  padding-right: 0;\n}\n.around-wrapper .water-wrapper .pressure[data-v-839552bc] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 10px 14px;\n  border-top: 1px solid rgba(37, 57, 111, 0.1);\n  color: #5475f8;\n  font-size: 14px;\n}\n.around-wrapper .water-wrapper .pressure .status[data-v-839552bc] {\n  display: inline-block;\n  padding: 4px 16px;\n  border-radius: 6px;\n  background: rgba(84, 117, 248, 0.2);\n  color: #5475f8;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d1de357c", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/关于.png":
/*!***************************!*\
  !*** ./src/assets/关于.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFKSURBVFiF1ZddroMgEIUPRtfVMWFXmlQT3RVJp+vShD4UEW17K6OW3PNC/JvzMTA6AomlYm7W9UCw6hqcIjfyM5q9A2DTFXwogK6HZmW8IbJtTVc0uwCCGVOUeQTIRwDRrAUQbwEONf8C8QJwivkfEAuAU81niDKskmxxMcZc2db0uYKyJaYy3KKVhwfQ9dBsDvIUA0BMzTtR6DVnID71FHn/rMBLAb7eb+KAErm9MGWAfmoO+Cxk7uAiCMFQtoSy7R6OXPyksne3AVlX4wXCLO5ZAg5hBM9TCJBMEwAn8OYQIJnSAbh9k7mDXaUkFHsAwft8tybPeQl+mYXAa9kPVOMN298JbPq8lHxHTJ973+UmjMsC6Wq00R+xlccCwHQFn7oU31qySUmb0lMgYtvyAyHYmfNHti1Rkv2avQEhABQ0MORGXhkz/ose/t+nBjlmAHAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/waterHomePage/basinWaterEco/index.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/basinWaterEco/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=839552bc&scoped=true& */ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& */ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "839552bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/basinWaterEco/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=style&index=0&id=839552bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_839552bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=839552bc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinWaterEco/index.vue?vue&type=template&id=839552bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_839552bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5XYXRlckVjby9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5XYXRlckVjby9pbmRleC52dWU/OWNlYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbldhdGVyRWNvL2luZGV4LnZ1ZT8xZjVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luV2F0ZXJFY28vaW5kZXgudnVlP2YyYTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS93YXRlcl9lbnZpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+WFs+S6ji5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5XYXRlckVjby9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5XYXRlckVjby9pbmRleC52dWU/YTZkOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbldhdGVyRWNvL2luZGV4LnZ1ZT9mYWMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luV2F0ZXJFY28vaW5kZXgudnVlP2U4MzQiXSwibmFtZXMiOlsiYmFzZVVybCIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInllYXJSYW5rTGlzdCIsInJhbmtMaXN0IiwicmFua0RldGFpbCIsInNjYWxlTWFya3MiLCJ3YXRlckJhc2ljRGF0YSIsInNlY3Rpb25JbmZvIiwic2VjdGlvbkxpc3QiLCJzdGF0aW9uSW5mbyIsInVwU3RyZWFtT3ZlciIsImxha2VTaXRlTGlzdCIsInF1ZXJ5U2VjdGlvbkluZm8iLCJzdGF0aW9uRGVzIiwicml2ZXJDb3Vyc2VEZXRhaWwiLCJob3VyTGluZSIsIndhdGVyUG9sbHV0aW9uIiwidXBzdHJlYW1Qb2xsdXRpb24iLCJnZXRVcExpc3QiLCJ1cFN0cmVhbVdhdGVyIiwidXBzdHJlYW1TZXdhZ2UiLCJwdXJpZmljYXRpb25QbGFudCIsImRhdGFUYWJsZSIsImpoY0luZm8iLCJseUJhc2luIiwibHlEZXRhaWwiLCJkY1N6IiwiZGNTekxpc3QiLCJ5eXNJbmZvIiwic2tMaXN0Iiwid2F0ZXJCb2R5TGlzdCIsIndhdGVyUGxhbnRMaXN0IiwicmVzZXJ2b2lyTGlzdCIsIndhdGVyUGxhbnRSaXZlciIsIndhdGVyUGxhbnRTaXRlIiwicmVzb3VyY2VTdGF0Iiwid2F0ZXJGdW5jdGlvbkxpc3QiLCJ3YXRlckZ1bmN0aW9uRGV0YWlsIiwiaW52b2x2ZVdhdGVyIiwic2V3YWdlRGV0YWlsIiwic2V3YWdlUGNEZXRhaWwiLCJzZXdhZ2VTeURldGFpbCIsInNld2FnZUpjRGV0YWlsIiwic2V3YWdlWnpEZXRhaWwiLCJwb2xsdXRpb25MaXN0Iiwic2V3YWdlU3RhdCIsInJpdmVyQ291cnNlU3RhdCIsInJpdmVyQ291cnNlTGlzdCIsIndhdGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsd0JBRkE7QUFHQSxrQkFIQTtBQUlBLGtCQUpBO0FBS0EseUJBTEE7QUFNQSxpQkFOQTtBQU9BLGdCQVBBO0FBUUEsdUJBUkE7QUFTQSxvQkFUQTtBQVVBLHVCQVZBO0FBV0EsMEJBWEE7QUFZQTtBQVpBLFNBREE7QUFlQTtBQUNBLHNCQURBO0FBRUEsMEJBRkE7QUFHQSx3QkFIQTtBQUlBLHdCQUpBO0FBS0EseUJBTEE7QUFNQSxzQkFOQTtBQU9BLG9CQVBBO0FBUUEsdUJBUkE7QUFTQTtBQVRBLFNBZkE7QUEwQkE7QUFDQSxxQkFEQTtBQUVBLDJCQUZBO0FBR0EsbUJBSEE7QUFJQSw0QkFKQTtBQUtBO0FBTEEsU0ExQkE7QUFpQ0E7QUFDQSxtQkFEQTtBQUVBLDBCQUZBO0FBR0EsdUJBSEE7QUFJQSxtQkFKQTtBQUtBO0FBTEE7QUFqQ0EsT0FGQTtBQTJDQTtBQTNDQTtBQTZDQSxHQWhEQTtBQWlEQSxTQWpEQSxxQkFpREE7QUFDQTtBQUNBLEdBbkRBO0FBb0RBO0FBQ0EsWUFEQSxvQkFDQSxLQURBLEVBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXBEQSxHOzs7Ozs7Ozs7Ozs7QUMvTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBZ0Q7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsaUJBQWlCLHVDQUF1QztBQUN4RCxtQkFBbUIsZ0NBQWdDO0FBQ25ELHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlLG1DQUFtQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsMEJBQTBCLGlEQUFpRDtBQUMzRSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsbURBQW1EO0FBQzdFLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWUsbUNBQW1DLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsaURBQWlEO0FBQzNFLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDBCQUEwQixtREFBbUQ7QUFDN0UsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRCxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZSxtQ0FBbUMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDBCQUEwQixpREFBaUQ7QUFDM0UsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsMEJBQTBCLG1EQUFtRDtBQUM3RSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25ELHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlLG1DQUFtQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsMEJBQTBCLGlEQUFpRDtBQUMzRSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsbURBQW1EO0FBQzdFLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxlQUFlLGtEQUFrRCxFQUFFO0FBQzFFO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hELGtCQUFrQixNQUFNLG1CQUFPLENBQUMsNENBQWlCLGdCQUFnQjtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxlQUFlLGtEQUFrRCxFQUFFO0FBQzFFO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hELGtCQUFrQixNQUFNLG1CQUFPLENBQUMsNENBQWlCLGdCQUFnQjtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQSxTQUFTLGVBQWUsa0RBQWtELEVBQUU7QUFDNUU7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsb0JBQW9CLE1BQU0sbUJBQU8sQ0FBQyw0Q0FBaUIsZ0JBQWdCO0FBQ25FLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QyxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxlQUFlLGtEQUFrRCxFQUFFO0FBQzFFO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hELGtCQUFrQixNQUFNLG1CQUFPLENBQUMsNENBQWlCLGdCQUFnQjtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4aEJBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMscUNBQXFDLGlCQUFpQixHQUFHLDJDQUEyQyxzQkFBc0Isd0JBQXdCLHdCQUF3Qiw4QkFBOEIsMkRBQTJELG1CQUFtQixHQUFHLGlEQUFpRCxrQkFBa0Isd0JBQXdCLGlDQUFpQyxHQUFHLHlEQUF5RCxzQkFBc0IsZUFBZSxnQkFBZ0IscUJBQXFCLHVCQUF1Qiw4QkFBOEIsR0FBRyxtREFBbUQsa0JBQWtCLG9CQUFvQixtQkFBbUIscUNBQXFDLGlHQUFpRyw2Q0FBNkMsa0NBQWtDLG9CQUFvQixzQkFBc0IsR0FBRyw0REFBNEQsMkJBQTJCLGVBQWUsR0FBRyxpRUFBaUUsbUJBQW1CLG9CQUFvQixHQUFHLDBFQUEwRSxvQkFBb0IscUJBQXFCLEdBQUcsNkRBQTZELGdCQUFnQixxQkFBcUIsdUJBQXVCLGlEQUFpRCxtQkFBbUIsb0JBQW9CLEdBQUcscUVBQXFFLDBCQUEwQixzQkFBc0IsdUJBQXVCLHdDQUF3QyxtQkFBbUIsb0JBQW9CLEdBQUc7QUFDcHREO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDh6QkFBeWQ7QUFDL2U7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHLFFBQWQsQyxDQUF3Qjs7QUFDeEI7QUFDQTtBQUNBOztBQUNPLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQzVCLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsNEJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNLLFlBQVQsQ0FBc0JMLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsaUNBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNNLFFBQVQsQ0FBa0JOLElBQWxCLEVBQXdCO0FBQzdCLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsNkJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNPLFVBQVQsQ0FBb0JQLElBQXBCLEVBQTBCO0FBQy9CLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsK0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNRLFVBQVQsQ0FBb0JSLElBQXBCLEVBQTBCO0FBQy9CLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsK0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNTLGNBQVQsQ0FBd0JULElBQXhCLEVBQThCO0FBQ25DLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsa0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNVLFdBQVQsQ0FBcUJWLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsNkJBREY7QUFFYkssVUFBTSxFQUFFLE1BRks7QUFHYkgsUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNXLFdBQVQsQ0FBcUJYLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsOEJBREY7QUFFYkssVUFBTSxFQUFFLE1BRks7QUFHYkgsUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTWSxXQUFULENBQXFCWixJQUFyQixFQUEyQjtBQUNoQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLGdCQURGO0FBRWJLLFVBQU0sRUFBRSxNQUZLO0FBR2JILFFBQUksRUFBRUE7QUFITyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU2EsWUFBVCxDQUFzQmIsSUFBdEIsRUFBNEI7QUFDakMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyw2QkFERjtBQUViSyxVQUFNLEVBQUUsTUFGSztBQUdiSCxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNjLFlBQVQsQ0FBc0JkLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsNkJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTZSxnQkFBVCxDQUEwQmYsSUFBMUIsRUFBZ0M7QUFDckMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxpQ0FERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNnQixVQUFULENBQW9CaEIsSUFBcEIsRUFBMEI7QUFDL0IsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRywyQkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNpQixpQkFBVCxDQUEyQmpCLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsb0NBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTa0IsUUFBVCxDQUFrQmxCLElBQWxCLEVBQXdCO0FBQzdCLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsc0JBREY7QUFFYkssVUFBTSxFQUFFLE1BRks7QUFHYkgsUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTbUIsY0FBVCxDQUF3Qm5CLElBQXhCLEVBQThCO0FBQ25DLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsMEJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBU29CLGlCQUFULENBQTJCcEIsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxrQ0FERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3FCLFNBQVQsQ0FBbUJyQixJQUFuQixFQUF5QjtBQUM5QixTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLGdDQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3NCLGFBQVQsQ0FBdUJ0QixJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLDhCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3VCLGNBQVQsQ0FBd0J2QixJQUF4QixFQUE4QjtBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLCtCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3dCLGlCQUFULENBQTJCeEIsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxrQ0FERjtBQUViSyxVQUFNLEVBQUUsTUFGSztBQUdiSCxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVN5QixTQUFULENBQW1CekIsSUFBbkIsRUFBeUI7QUFDOUIsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRywwQkFERjtBQUViSyxVQUFNLEVBQUUsTUFGSztBQUdiSCxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVMwQixPQUFULENBQWlCMUIsSUFBakIsRUFBdUI7QUFDNUIsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxjQURGO0FBRWJLLFVBQU0sRUFBRSxNQUZLO0FBR2JILFFBQUksRUFBRUE7QUFITyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBUzJCLE9BQVQsQ0FBaUIzQixJQUFqQixFQUF1QjtBQUM1QixTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLGNBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTNEIsUUFBVCxDQUFrQjVCLElBQWxCLEVBQXdCO0FBQzdCLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsc0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTNkIsSUFBVCxHQUFnQjtBQUNyQixTQUFPNUIsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyx5QkFERjtBQUViSyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDLENBRUQ7O0FBQ08sU0FBUzJCLFFBQVQsR0FBb0I7QUFDekIsU0FBTzdCLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsb0JBREY7QUFFYkssVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQyxDQUVEOztBQUNPLFNBQVM0QixPQUFULENBQWlCL0IsSUFBakIsRUFBdUI7QUFDNUIsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyw4QkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUNEOztBQUNPLFNBQVNnQyxNQUFULENBQWdCaEMsSUFBaEIsRUFBc0I7QUFDM0IsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyw2QkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNpQyxhQUFULENBQXVCakMsSUFBdkIsRUFBNkI7QUFDbEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyx3Q0FERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNrQyxjQUFULENBQXdCbEMsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxjQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU21DLGFBQVQsQ0FBdUJuQyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLG1CQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU29DLGVBQVQsQ0FBeUJwQyxJQUF6QixFQUErQjtBQUNwQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLHFCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3FDLGNBQVQsQ0FBd0JyQyxJQUF4QixFQUE4QjtBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLG9CQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTc0MsWUFBVCxDQUFzQnRDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsc0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTdUMsaUJBQVQsQ0FBMkJ2QyxJQUEzQixFQUFpQztBQUN0QyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLHVCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3dDLG1CQUFULENBQTZCeEMsSUFBN0IsRUFBbUM7QUFDeEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyx5QkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU3lDLFlBQVQsQ0FBc0J6QyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLGlCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTMEMsWUFBVCxDQUFzQjFDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcseUJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVMyQyxjQUFULENBQXdCM0MsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRywyQkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBUzRDLGNBQVQsQ0FBd0I1QyxJQUF4QixFQUE4QjtBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLDJCQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNkMsY0FBVCxDQUF3QjdDLElBQXhCLEVBQThCO0FBQ25DLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsMkJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVM4QyxjQUFULENBQXdCOUMsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRywyQkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBUytDLGFBQVQsQ0FBdUIvQyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLG9CQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTZ0QsVUFBVCxDQUFvQmhELElBQXBCLEVBQTBCO0FBQy9CLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsdUJBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVNpRCxlQUFULENBQXlCakQsSUFBekIsRUFBK0I7QUFDcEMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyxrQ0FERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU2tELGVBQVQsQ0FBeUJsRCxJQUF6QixFQUErQjtBQUNwQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRUosT0FBTyxHQUFHLGtDQURGO0FBRWJLLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRUo7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTbUQsU0FBVCxDQUFtQm5ELElBQW5CLEVBQXlCO0FBQzlCLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFSixPQUFPLEdBQUcsd0JBREY7QUFFYkssVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFSjtBQUhLLEdBQUQsQ0FBZDtBQUtELEM7Ozs7Ozs7Ozs7O0FDcGRELGlDQUFpQyxvakI7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJ0aXRsZVwiIGZpeGVkIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcm91bmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBmc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIOeUn+aAgeeOr+Wig+WOi+WKm1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVcIiBAY2xpY2s9XCJvbkNoYW5nZSgwLHNob3dBcnJbMF0pXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aVwiPnt7ZWNvbG9neS5wcmVzc3VyZS5zY29yZX19PC9zcGFuPuWIhlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclswXT09PXRydWVcIiBuYW1lPVwiYXJyb3ctdXBcIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclswXT09PWZhbHNlXCIgbmFtZT1cImFycm93LWRvd25cIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJzaG93QXJyWzBdPT09dHJ1ZVwiIGNsYXNzPVwid2F0ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5Lq65Y+j5a+G5bqmPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLnBvcHVsYXRpb259feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5LiN6YCP5rC06Z2i56ev5q+UPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLmFyZWF9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5Zyf5aOk5L616JqA5oyH5pWwPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLnNvaWx9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5rC06LWE5rqQ5byA5Y+R5Yip55So546HPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLndhdGVyU291cmNlfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOWNleS9jeWcn+WcsOmdouenr0NPROaOkuaUvumHjzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5wcmVzc3VyZS5jb2R9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5Y2V5L2N5Zyf5Zyw6Z2i56ev5rCo5rCu5o6S5pS+6YePPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLmFkfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOWNleS9jeiAleWcsOmdouenr+WGnOiNr+S9v+eUqOmHjzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5wcmVzc3VyZS5wZXN0aWNpZGV9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5Y2V5L2N6ICV5Zyw6Z2i56ev5YyW6IKl5pa955So6YePPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnByZXNzdXJlLm1hbnVyZX195YiGPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGg1MFwiPlxyXG4gICAgICAgICAgICDljZXkvY3lnJ/lnLDpnaLnp6/nlZznpr3lhbvmrpbph488YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2Vjb2xvZ3kucHJlc3N1cmUubGl2ZXN0b2NrfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOW8leiwg+awtOW3peeoi+W9seWTjeeoi+W6pjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5wcmVzc3VyZS53YXRlckludm9sdmV9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByZXNzdXJlIGZzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDthbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/lhbPkuo4ucG5nXCIgd2lkdGg9XCIxNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA1cHhcIi8+XHJcbiAgICAgICAgICAgICAg5Y6L5Yqb562J57qn6K+05piOXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7ZWNvbG9neS5wcmVzc3VyZS5sZXZlbH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImFyb3VuZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGZzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAg55Sf5oCB57O757uf5YGl5bq3XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZVwiIEBjbGljaz1cIm9uQ2hhbmdlKDEsc2hvd0FyclsxXSlcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTogYWxpbWFtYXNodWhlaXRpXCI+e3tlY29sb2d5LmhlYWx0aC5zY29yZX19PC9zcGFuPuWIhlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclsxXT09PXRydWVcIiBuYW1lPVwiYXJyb3ctdXBcIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclsxXT09PWZhbHNlXCIgbmFtZT1cImFycm93LWRvd25cIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJzaG93QXJyWzFdPT09dHJ1ZVwiIGNsYXNzPVwid2F0ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5rC06LSo57u85ZCI5b6X5YiGPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LmhlYWx0aC53YXRlclF1YWxpdHl9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5bm055Sf5oCB5Z+65rWB5ruh6Laz546HPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LmhlYWx0aC55ZWFyTmF0dXJlfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOi/numAmuaApzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5oZWFsdGguY29ubmVjdH195YiGPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGg1MFwiPlxyXG4gICAgICAgICAgICDoh6rnhLblsrjnur/mr5Tkvos8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2Vjb2xvZ3kuaGVhbHRoLm5hdHVyZVJhdGlvfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOays+WyuOW4puakjeiiq+imhuebluW6pjxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5oZWFsdGgucGxhbnR9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg6Je757G75a6M5pW05oCnPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LmhlYWx0aC5hbGdhfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOWkp+Wei+W6leagluWKqOeJqeWujOaVtOaApzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5oZWFsdGguYW5pbWFsfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzc3VyZSBmc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7YWxpZ24taXRlbXM6IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5YWz5LqOLnBuZ1wiIHdpZHRoPVwiMTRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4XCIvPlxyXG4gICAgICAgICAgICAgIOWOi+WKm+etiee6p+ivtOaYjlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNcIj57e2Vjb2xvZ3kuaGVhbHRoLmxldmVsfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXJvdW5kLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgZnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICDnlJ/mgIHmnI3liqHlip/og71cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNjb3JlXCIgQGNsaWNrPVwib25DaGFuZ2UoMixzaG93QXJyWzJdKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBhbGltYW1hc2h1aGVpdGlcIj57e2Vjb2xvZ3kuc2VydmljZS5zY29yZX19PC9zcGFuPuWIhlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclsyXT09PXRydWVcIiBuYW1lPVwiYXJyb3ctdXBcIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWljb24gdi1zaG93PVwic2hvd0FyclsyXT09PWZhbHNlXCIgbmFtZT1cImFycm93LWRvd25cIiBjb2xvcj1cIiNGRjhEMUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJzaG93QXJyWzJdPT09dHJ1ZVwiIGNsYXNzPVwid2F0ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg6ZuG5Lit5byP6aWu55So5rC05rqQ5Zyw5rC06LSo6L6+5qCH546HPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnNlcnZpY2Uuc3RhbmRhcmRSYXRpb3195YiGPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGg1MFwiPlxyXG4gICAgICAgICAgICDmsLTmupDmtrXlhbvmjIfmlbA8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2Vjb2xvZ3kuc2VydmljZS5pbmRleH195YiGPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGg1MFwiPlxyXG4gICAgICAgICAgICDlvoTmsaHmr5Q8YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2Vjb2xvZ3kuc2VydmljZS5yYWRpdXNSYXRpb3195YiGPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmUgZnNcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL+WFs+S6ji5wbmdcIiB3aWR0aD1cIjE0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDVweFwiLz5cclxuICAgICAgICAgICAgICDljovlipvnrYnnuqfor7TmmI5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+5LiA6IisPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImFyb3VuZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGZzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAg55Sf5oCB6aOO6ZmpXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZVwiIEBjbGljaz1cIm9uQ2hhbmdlKDMsc2hvd0FyclszXSlcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTogYWxpbWFtYXNodWhlaXRpXCI+e3tlY29sb2d5LnJpc2suc2NvcmV9fTwvc3Bhbj7liIZcclxuICAgICAgICAgICAgPHZhbi1pY29uIHYtc2hvdz1cInNob3dBcnJbM109PT10cnVlXCIgbmFtZT1cImFycm93LXVwXCIgY29sb3I9XCIjRkY4RDFBXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiLz5cclxuICAgICAgICAgICAgPHZhbi1pY29uIHYtc2hvdz1cInNob3dBcnJbM109PT1mYWxzZVwiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjRkY4RDFBXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1zaG93PVwic2hvd0FyclszXT09PXRydWVcIiBjbGFzcz1cIndhdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOaatOmcsuS6uuWPo+aVsOmHjzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5yaXNrLnBvbGx1dGlvblNpemV9feWIhjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoNTBcIj5cclxuICAgICAgICAgICAg5pWP5oSf546v5aKD55uu5qCHPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+e3tlY29sb2d5LnJpc2suZW52VGFyZ2V0fX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aDUwXCI+XHJcbiAgICAgICAgICAgIOmHjemHkeWxnuexuzxici8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZWNvbG9neS5yaXNrLm1ldGFsfX3liIY8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzc3VyZSBmc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7YWxpZ24taXRlbXM6IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5YWz5LqOLnBuZ1wiIHdpZHRoPVwiMTRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4XCIvPlxyXG4gICAgICAgICAgICAgIOWOi+WKm+etiee6p+ivtOaYjlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXNcIj57e2Vjb2xvZ3kucmlzay5sZXZlbH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3dhdGVyUGxhbnRMaXN0fSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuICBpbXBvcnQge2dldFNlY3Rpb25UaW1lfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGVjb2xvZ3k6IHtcclxuICAgICAgICAgIHByZXNzdXJlOiB7XHJcbiAgICAgICAgICAgIHNjb3JlOiA1My41NixcclxuICAgICAgICAgICAgcG9wdWxhdGlvbjogMzAsXHJcbiAgICAgICAgICAgIGFyZWE6IDUwLFxyXG4gICAgICAgICAgICBzb2lsOiA1MCxcclxuICAgICAgICAgICAgd2F0ZXJTb3VyY2U6IDUwLFxyXG4gICAgICAgICAgICBjb2Q6IDgwLFxyXG4gICAgICAgICAgICBhZDogOTYsXHJcbiAgICAgICAgICAgIHBlc3RpY2lkZTogMTAsXHJcbiAgICAgICAgICAgIG1hbnVyZTogNzYsXHJcbiAgICAgICAgICAgIGxpdmVzdG9jazogNjAsXHJcbiAgICAgICAgICAgIHdhdGVySW52b2x2ZTogMzAsXHJcbiAgICAgICAgICAgIGxldmVsOiAn5LiA6IisJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWx0aDoge1xyXG4gICAgICAgICAgICBzY29yZTogNDIuMTQsXHJcbiAgICAgICAgICAgIHdhdGVyUXVhbGl0eTogNDIsXHJcbiAgICAgICAgICAgIHllYXJOYXR1cmU6IDYyLFxyXG4gICAgICAgICAgICBjb25uZWN0OiAxNS4xNyxcclxuICAgICAgICAgICAgbmF0dXJlUmF0aW86IDQ4LFxyXG4gICAgICAgICAgICBwbGFudDogMjguMTIsXHJcbiAgICAgICAgICAgIGFsZ2E6IDQyLjgsXHJcbiAgICAgICAgICAgIGFuaW1hbDogNDUuMDMsXHJcbiAgICAgICAgICAgIGxldmVsOiAn5LiA6IisJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlcnZpY2U6IHtcclxuICAgICAgICAgICAgc2NvcmU6IDUyLjksXHJcbiAgICAgICAgICAgIHN0YW5kYXJkUmF0aW86IDQyLFxyXG4gICAgICAgICAgICBpbmRleDogNjIsXHJcbiAgICAgICAgICAgIHJhZGl1c1JhdGlvOiAxNS4xNyxcclxuICAgICAgICAgICAgbGV2ZWw6ICfln7rmnKzmu6HotrMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmlzazoge1xyXG4gICAgICAgICAgICBzY29yZTogNjksXHJcbiAgICAgICAgICAgIHBvbGx1dGlvblNpemU6IDAsXHJcbiAgICAgICAgICAgIGVudlRhcmdldDogOTYsXHJcbiAgICAgICAgICAgIG1ldGFsOiA5MCxcclxuICAgICAgICAgICAgbGV2ZWw6ICfovoPkvY7po47pmaknXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0FycjogW3RydWUsIHRydWUsIHRydWUsIHRydWVdXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy50aXRsZSA9ICfniZvmoI/msZ/msLTnlJ/mgIEnO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgb25DaGFuZ2UoaW5kZXgsIGZsYWcpIHtcclxuICAgICAgICBsZXQgdGVtcEFyciA9IHRoaXMuc2hvd0FycjtcclxuICAgICAgICB0ZW1wQXJyW2luZGV4XSA9ICFmbGFnXHJcbiAgICAgICAgdGhpcy5zaG93QXJyID0gT2JqZWN0LmFzc2lnbihbXSwgdGVtcEFycik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIC5hcm91bmQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgcGFkZGluZzogN3B4IDExcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyNDgsIDI0MywgMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCAyMzQsIDIxNywgMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMjBweCAtMTBweCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4zKTtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aTtcclxuXHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC53YXRlci13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDE0MSwgMjYsIDApIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM3LCA1NywgMTExLCAwLjEpO1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4gICAgICAud2lkdGg1MCB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDAgMjZweDtcclxuICAgICAgICB3aWR0aDogNDIlO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJlc3N1cmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM3LCA1NywgMTExLCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4NCwgMTE3LCAyNDgsIDAuMik7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnRpdGxlLCBmaXhlZDogXCJcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFyb3VuZC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgZnNcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNjb3JlXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2UoMCwgX3ZtLnNob3dBcnJbMF0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiYWxpbWFtYXNodWhlaXRpXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucHJlc3N1cmUuc2NvcmUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWIhiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FyclswXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dBcnJbMF09PT10cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjRkY4RDFBXCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dBcnJbMF0gPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FyclswXT09PWZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIsIGNvbG9yOiBcIiNGRjhEMUFcIiwgc2l6ZTogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93QXJyWzBdID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93QXJyWzBdPT09dHJ1ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndhdGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5Lq65Y+j5a+G5bqmXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucHJlc3N1cmUucG9wdWxhdGlvbikgKyBcIuWIhlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5LiN6YCP5rC06Z2i56ev5q+UXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnByZXNzdXJlLmFyZWEpICsgXCLliIZcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5Zyf5aOk5L616JqA5oyH5pWwXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnByZXNzdXJlLnNvaWwpICsgXCLliIZcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5rC06LWE5rqQ5byA5Y+R5Yip55So546HXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucHJlc3N1cmUud2F0ZXJTb3VyY2UpICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWNleS9jeWcn+WcsOmdouenr0NPROaOkuaUvumHj1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5wcmVzc3VyZS5jb2QpICsgXCLliIZcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5Y2V5L2N5Zyf5Zyw6Z2i56ev5rCo5rCu5o6S5pS+6YePXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnByZXNzdXJlLmFkKSArIFwi5YiGXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWNleS9jeiAleWcsOmdouenr+WGnOiNr+S9v+eUqOmHj1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnByZXNzdXJlLnBlc3RpY2lkZSkgKyBcIuWIhlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5Y2V5L2N6ICV5Zyw6Z2i56ev5YyW6IKl5pa955So6YePXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucHJlc3N1cmUubWFudXJlKSArIFwi5YiGXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDljZXkvY3lnJ/lnLDpnaLnp6/nlZznpr3lhbvmrpbph49cIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5wcmVzc3VyZS5saXZlc3RvY2spICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOW8leiwg+awtOW3peeoi+W9seWTjeeoi+W6plwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnByZXNzdXJlLndhdGVySW52b2x2ZSkgKyBcIuWIhlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJlc3N1cmUgZnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXR1c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucHJlc3N1cmUubGV2ZWwpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJvdW5kLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBmc1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2NvcmVcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgxLCBfdm0uc2hvd0FyclsxXSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1mYW1pbHlcIjogXCJhbGltYW1hc2h1aGVpdGlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5oZWFsdGguc2NvcmUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWIhiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FyclsxXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dBcnJbMV09PT10cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjRkY4RDFBXCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dBcnJbMV0gPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FyclsxXT09PWZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIsIGNvbG9yOiBcIiNGRjhEMUFcIiwgc2l6ZTogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93QXJyWzFdID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93QXJyWzFdPT09dHJ1ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndhdGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5rC06LSo57u85ZCI5b6X5YiGXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kuaGVhbHRoLndhdGVyUXVhbGl0eSkgKyBcIuWIhlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5bm055Sf5oCB5Z+65rWB5ruh6Laz546HXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kuaGVhbHRoLnllYXJOYXR1cmUpICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOi/numAmuaAp1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5oZWFsdGguY29ubmVjdCkgKyBcIuWIhlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDoh6rnhLblsrjnur/mr5TkvotcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5oZWFsdGgubmF0dXJlUmF0aW8pICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOays+WyuOW4puakjeiiq+imhuebluW6plwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5oZWFsdGgucGxhbnQpICsgXCLliIZcIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg6Je757G75a6M5pW05oCnXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LmhlYWx0aC5hbGdhKSArIFwi5YiGXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWkp+Wei+W6leagluWKqOeJqeWujOaVtOaAp1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5oZWFsdGguYW5pbWFsKSArIFwi5YiGXCIpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXNzdXJlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LmhlYWx0aC5sZXZlbCkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcm91bmQtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzY29yZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlKDIsIF92bS5zaG93QXJyWzJdKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LWZhbWlseVwiOiBcImFsaW1hbWFzaHVoZWl0aVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5lY29sb2d5LnNlcnZpY2Uuc2NvcmUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWIhiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FyclsyXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dBcnJbMl09PT10cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjRkY4RDFBXCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dBcnJbMl0gPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FyclsyXT09PWZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIsIGNvbG9yOiBcIiNGRjhEMUFcIiwgc2l6ZTogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93QXJyWzJdID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93QXJyWzJdPT09dHJ1ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndhdGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2lkdGg1MFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg6ZuG5Lit5byP6aWu55So5rC05rqQ5Zyw5rC06LSo6L6+5qCH546HXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kuc2VydmljZS5zdGFuZGFyZFJhdGlvKSArIFwi5YiGXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDmsLTmupDmtrXlhbvmjIfmlbBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kuc2VydmljZS5pbmRleCkgKyBcIuWIhlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDlvoTmsaHmr5RcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5zZXJ2aWNlLnJhZGl1c1JhdGlvKSArIFwi5YiGXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFyb3VuZC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgZnNcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNjb3JlXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2UoMywgX3ZtLnNob3dBcnJbM10pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiYWxpbWFtYXNodWhlaXRpXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucmlzay5zY29yZSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5YiGIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93QXJyWzNdID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FyclszXT09PXRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LXVwXCIsIGNvbG9yOiBcIiNGRjhEMUFcIiwgc2l6ZTogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FyclszXSA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93QXJyWzNdPT09ZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiwgY29sb3I6IFwiI0ZGOEQxQVwiLCBzaXplOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dBcnJbM10gPT09IHRydWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dBcnJbM109PT10cnVlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2F0ZXItd3JhcHBlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDmmrTpnLLkurrlj6PmlbDph49cIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5yaXNrLnBvbGx1dGlvblNpemUpICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndpZHRoNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOaVj+aEn+eOr+Wig+ebruagh1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5yaXNrLmVudlRhcmdldCkgKyBcIuWIhlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aWR0aDUwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiDph43ph5HlsZ7nsbtcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmVjb2xvZ3kucmlzay5tZXRhbCkgKyBcIuWIhlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmVzc3VyZSBmc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNyksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdHVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZWNvbG9neS5yaXNrLmxldmVsKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGVcIiB9KSxcbiAgICAgIF92bS5fdihcIiDnlJ/mgIHnjq/looPljovlipsgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/lhbPkuo4ucG5nXCIpLCB3aWR0aDogXCIxNFwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIg5Y6L5Yqb562J57qn6K+05piOIFwiKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGVcIiB9KSxcbiAgICAgIF92bS5fdihcIiDnlJ/mgIHns7vnu5/lgaXlurcgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/lhbPkuo4ucG5nXCIpLCB3aWR0aDogXCIxNFwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIg5Y6L5Yqb562J57qn6K+05piOIFwiKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGVcIiB9KSxcbiAgICAgIF92bS5fdihcIiDnlJ/mgIHmnI3liqHlip/og70gXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXNzdXJlIGZzXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLCBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv5YWz5LqOLnBuZ1wiKSwgd2lkdGg6IFwiMTRcIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiDljovlipvnrYnnuqfor7TmmI4gXCIpLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdHVzXCIgfSwgW192bS5fdihcIuS4gOiIrFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGVcIiB9KSxcbiAgICAgIF92bS5fdihcIiDnlJ/mgIHpo47pmakgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/lhbPkuo4ucG5nXCIpLCB3aWR0aDogXCIxNFwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIg5Y6L5Yqb562J57qn6K+05piOIFwiKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXJvdW5kLXdyYXBwZXJbZGF0YS12LTgzOTU1MmJjXSB7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcbi5hcm91bmQtd3JhcHBlciAudGl0bGVbZGF0YS12LTgzOTU1MmJjXSB7XFxuICBwYWRkaW5nOiA3cHggMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmVmOGYzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhZWFkOTtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMjBweCAtMTBweCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4zKTtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLnRpdGxlIC5uYW1lW2RhdGEtdi04Mzk1NTJiY10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogYWxpbWFtYXNodWhlaXRpO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLnRpdGxlIC5uYW1lIC5jaXJjbGVbZGF0YS12LTgzOTU1MmJjXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmY4ZDFhO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLndhdGVyLXdyYXBwZXJbZGF0YS12LTgzOTU1MmJjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDE0MSwgMjYsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5hcm91bmQtd3JhcHBlciAud2F0ZXItd3JhcHBlciAud2lkdGg1MFtkYXRhLXYtODM5NTUyYmNdIHtcXG4gIHBhZGRpbmc6IDEycHggMCAwIDI2cHg7XFxuICB3aWR0aDogNDIlO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLndhdGVyLXdyYXBwZXIgLndpZHRoNTAgc3BhbltkYXRhLXYtODM5NTUyYmNdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLndhdGVyLXdyYXBwZXIgLndpZHRoNTBbZGF0YS12LTgzOTU1MmJjXTpudGgtY2hpbGQoMm4pIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5hcm91bmQtd3JhcHBlciAud2F0ZXItd3JhcHBlciAucHJlc3N1cmVbZGF0YS12LTgzOTU1MmJjXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLndhdGVyLXdyYXBwZXIgLnByZXNzdXJlIC5zdGF0dXNbZGF0YS12LTgzOTU1MmJjXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA0cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDExNywgMjQ4LCAwLjIpO1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODM5NTUyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJkMWRlMzU3Y1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzOTU1MmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODM5NTUyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gXCIvd2F0ZXJcIjsgLy/mnI3liqHlmajmmK93YXRlcuexu++8jOacrOWcsOayoeacieWKoFxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5raW5nKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5raW5nXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5rC0546v5aKD5bm05bqV5o6S5ZCN5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geWVhclJhbmtMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi95ZWFyUmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3lkITljLrln5/or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5rRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxuIOWQhOWOv++8iOW4gu+8ieWMuuOAgeW8gOWPkeW6puWBh+WbreWMuuWto+W6puWcsOihqOawtOeOr+Wig+i0qOmHj+ivhOWIhuivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWFya3MoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3NjYWxlTWFya3NcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lhajluILmsLTnjq/looPmpoLlhrXmgLvkvZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckJhc2ljRGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyQmFzaWNEYXRhL3NlY3Rpb25JbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7mlq3pnaLliJfooagtLeWbveOAgeecgeOAgeW4glxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvc2VjdGlvbkxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivouS4iua4uOi2heagh1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1PdmVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtT3ZlclwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5p+l6K+i5rmW5bqT55qE55uR5rWL5pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiBsYWtlU2l0ZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vbGFrZVNpdGVMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3msrPmtYHml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcXVlcnlTZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkRlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9zaXRlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOays+a1geivpuaDhS3msrPpgZPor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLeaXtuWAvOabsue6v1xyXG5leHBvcnQgZnVuY3Rpb24gaG91ckxpbmUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vY3VydmVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWRqOi+uea2ieawtOaxoeafk+a6kFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcG9sbHV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVBvbGx1dGlvbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVBvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaWremdouWIl+ihqFxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuLy8gICByZXR1cm4gcmVxdWVzdCh7XHJcbi8vICAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtXCIsXHJcbi8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4vLyAgICAgZGF0YTogZGF0YSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtU2VjdGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOW6k1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1XYXRlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVdhdGVyXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45o6S5Y+jXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVNld2FnZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNld2FnZVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOi0qOWHgOWMluWOglxyXG5leHBvcnQgZnVuY3Rpb24gcHVyaWZpY2F0aW9uUGxhbnQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcHVyaWZpY2F0aW9uUGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeebkea1i+ivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVRhYmxlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2RhdGFUYWJsZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi0t5rC06LSo5YeA5YyW5Y6C6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBqaGNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrVcclxuZXhwb3J0IGZ1bmN0aW9uIGx5QmFzaW4oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrUt6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBseURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vZGV0YWlsc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKhcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3ooKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RjRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtSAtIOa7h+axoOawtOi0qCAtIOawtOi0qOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZGNTekxpc3QoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvbGFrZS9kY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywXHJcbmV4cG9ydCBmdW5jdGlvbiB5eXNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvZHJpbmtTb3VyY2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcbi8vIOmmlumhtS3ppa7nlKjmsLTmupDlnLAt5rC05bqT5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBza0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZHJpbmtTb3VyY2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOW6k+WIhuW4g+WPiuW6k+WuuVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCb2R5TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3dhdGVyQm9keURpc3RyaWJ1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTotKjlh4DljJbljoLliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2Vydm9pckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTotKjlh4DljJbljoLmsrPpgZPmlq3pnaLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRSaXZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C6KGl5rC05pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50U2l0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvc2l0ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmsLTotYTmupDmn6Xor6JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi9yZXNvdXJjZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy65YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyRnVuY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTlip/og73ljLror6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyRnVuY3Rpb25EZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZvbHZlV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kOivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5o6S5p+l5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlUGNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VQY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5rqv5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3lEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VTeURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut55uR5rWL5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlSmNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VKY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5pW05rK75YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlWnpEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VaekRldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtonmsLTmsaHmn5PmupDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsdXRpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3N3cnlsYlwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDliJfooah0YWLmgLvmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5L+h5oGv57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3msrPpgZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeagueaNrua1geWfn+afpeivouays+mBk+S4i+aLieahhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZLU1VSQlZGaUYxWmRkcm9NZ0VJVVBSdGZWTVdGWG1sUVQzUlZKcCt2U2hENFVFVzE3SzZPVzNQTkMvSnZ6TVRBNkFvbWxZbTdXOVVDdzZocWNJamZ5TTVxOUEyRFRGWHdvZ0s2SFptVzhJYkp0VFZjMHV3Q0NHVk9VZVFUSVJ3RFJyQVVRYndFT05mOEM4UUp3aXZrZkVBdUFVODFuaURLc2tteHhNY1pjMmRiMHVZS3lKYVl5M0tLVmh3ZlE5ZEJzRHZJVUEwQk16VHRSNkRWbklENzFGSG4vck1CTEFiN2ViK0tBRXJtOU1HV0FmbW9PK0N4azd1QWlDTUZRdG9TeTdSNk9YUHlrc25lM0FWbFg0d1hDTE81WkFnNWhCTTlUQ0pCTUV3QW44T1lRSUpuU0FiaDlrN21EWGFVa0ZIc0F3ZnQ4dHliUGVRbCttWVhBYTlrUFZPTU4yOThKYlBxOGxIeEhUSjk3MytVbWpNc0M2V3EwMFIreGxjY0N3SFFGbjdvVTMxcXlTVW1iMGxNZ1l0dnlBeUhZbWZOSHRpMVJrdjJhdlFFaEFCUTBNT1JHWGhrei9vc2UvdCtuQmpsbUFIQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04Mzk1NTJiYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04Mzk1NTJiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgzOTU1MmJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgzOTU1MmJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgzOTU1MmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgzOTU1MmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODM5NTUyYmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODM5NTUyYmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luV2F0ZXJFY28vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODM5NTUyYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODM5NTUyYmMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9