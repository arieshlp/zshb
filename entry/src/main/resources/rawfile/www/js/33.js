(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "pollutionSource",
  props: {
    detailsParameter: String,
    detail: {
      type: Boolean,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      value1: 0,
      option1: [{
        text: '年度优良率',
        value: 0
      }],
      xzqh: "",
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["getThisDate"])(),
      zdvalue: '',
      zdprop: '',
      jhvalue: '',
      jhprop: '',
      djvalue: '',
      djprop: '',
      searchObj: {},
      basinRef: null,
      nowZdCount: '',
      year: '2023'
    };
  },
  mounted: function mounted() {
    this.year = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY');

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    } else {
      this.searchObj = this.$store.state.searchObj;
      this.xzqh = this.searchObj.parameter;
    }

    this.init();
    this.getNowZd();
  },
  methods: {
    getNowZd: function getNowZd() {
      var _this = this;

      var info = {
        year: this.year,
        divisionName: this.xzqh
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_3__["dwyearZD"])(info).then(function (res) {
        if (res.code == 200) {
          _this.nowZdCount = res.data.value;
        }
      });
    },
    init: function init() {
      var _this2 = this;

      if (!this.basinRef) {
        this.basinRef = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.$refs.countryEchart);
        setTimeout(function () {
          _this2.initChart(_this2.basinRef);
        });
      }
    },
    initChart: function initChart(chartInstance) {
      var _this3 = this;

      var option = {
        color: ['rgba(244, 93, 117, 1)', 'rgba(67, 207, 124, 1)', 'rgba(84, 117, 248, 1)'],
        title: [{
          text: '累计汇总',
          textStyle: {
            fontSize: 12,
            color: 'rgba(18, 18, 54, 0.5)',
            fontWeight: 400
          },
          x: 'center',
          y: '25%'
        }, {
          text: '',
          textStyle: {
            fontSize: 16,
            color: 'rgba(18, 18, 54, 1)',
            fontWeight: 500
          },
          x: 'center',
          y: '39%',
          triggerEvent: true // 点击可触发事件

        }],
        legend: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          radius: ['80%', '100%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 12,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            normal: {// borderWidth: 6,
              // borderColor: "#F8F8F8",
            }
          },
          startAngle: -180,
          data: []
        }]
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_3__["pollutionStat"])({
        divisionName: this.xzqh
      }).then(function (res) {
        var rdata = res.data;
        _this3.zdvalue = rdata.zd;
        _this3.zdprop = (parseInt(rdata.zd) / parseInt(rdata.sum) * 100).toFixed(2);
        _this3.jhvalue = rdata.jh;
        _this3.jhprop = (parseInt(rdata.jh) / parseInt(rdata.sum) * 100).toFixed(2);
        _this3.djvalue = rdata.dj;
        _this3.djprop = (parseInt(rdata.dj) / parseInt(rdata.sum) * 100).toFixed(2);
        var sum = Number(rdata.zd) + Number(rdata.jh) + Number(rdata.dj);
        option.series[0].data = [{
          value: rdata.zd,
          name: "重点管理"
        }, {
          value: rdata.jh,
          name: "简化管理"
        }, {
          value: rdata.dj,
          name: "登记管理"
        }, {
          value: sum,
          name: '',
          itemStyle: {
            normal: {
              color: 'none'
            }
          }
        }];
        option.title[1].text = sum + '家';
        chartInstance.setOption(option);
        chartInstance.off('click'); //先解绑事件，防止事件重复触发

        chartInstance.on('click', function (params) {
          // 给图表绑定点击事件
          if (params.componentType === 'title') {
            // 确认点击部分为title
            _this3.goPath('重点管理');
          }
        });
      });
    },
    goPath: function goPath(title) {
      this.$router.push({
        name: 'pollutionStatisList',
        query: {
          xzqh: this.xzqh,
          xqtype: '污染源列表',
          title: title
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticStyle: { display: "flex" } }, [
      _c("div", {
        ref: "countryEchart",
        staticStyle: { height: "160px", width: "230px", margin: "0px auto" },
      }),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.detail,
              expression: "!detail",
            },
          ],
          staticClass: "chart_right",
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.year) + "重点名录")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.nowZdCount))]), _vm._v(" 家")],
            1
          ),
        ]
      ),
    ]),
    _c("div", { staticClass: "echart-legend" }, [
      _c(
        "div",
        {
          staticClass: "echart-legend-item",
          on: {
            click: function ($event) {
              return _vm.goPath("重点管理")
            },
          },
        },
        [
          _vm._m(0),
          _c("div", [
            _c("span", [
              _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.zdvalue))]),
              _vm._v(" 家"),
            ]),
            _c("span", [
              _vm._v("("),
              _c(
                "span",
                {
                  staticStyle: {
                    color: "rgba(68, 123, 252, 1)",
                    "font-size": "14px",
                  },
                },
                [_vm._v(_vm._s(_vm.zdprop) + "%")]
              ),
              _vm._v(")"),
            ]),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "echart-legend-item",
          on: {
            click: function ($event) {
              return _vm.goPath("简化管理")
            },
          },
        },
        [
          _vm._m(1),
          _c("div", [
            _c("span", [
              _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.jhvalue))]),
              _vm._v("家"),
            ]),
            _c("span", [
              _vm._v("("),
              _c(
                "span",
                {
                  staticStyle: {
                    color: "rgba(68, 123, 252, 1)",
                    "font-size": "14px",
                  },
                },
                [_vm._v(_vm._s(_vm.jhprop) + "%")]
              ),
              _vm._v(")"),
            ]),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "echart-legend-item",
          on: {
            click: function ($event) {
              return _vm.goPath("登记管理")
            },
          },
        },
        [
          _vm._m(2),
          _c("div", [
            _c("span", [
              _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.djvalue))]),
              _vm._v("家"),
            ]),
            _c("span", [
              _vm._v("("),
              _c(
                "span",
                {
                  staticStyle: {
                    color: "rgba(68, 123, 252, 1)",
                    "font-size": "14px",
                  },
                },
                [_vm._v(_vm._s(_vm.djprop) + "%")]
              ),
              _vm._v(")"),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", {
        staticClass: "block",
        staticStyle: {
          background:
            "linear-gradient(134.11deg, rgba(246, 157, 168, 1) 0%, rgba(244, 93, 117, 1) 100%)",
        },
      }),
      _vm._v(" 重点管理 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", {
        staticClass: "block",
        staticStyle: {
          background:
            "linear-gradient(233.28deg, rgba(110, 230, 158, 1) 0%, rgba(67, 207, 124, 1) 100%)",
        },
      }),
      _vm._v(" 简化管理 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", {
        staticClass: "block",
        staticStyle: {
          background:
            "linear-gradient(233.28deg, rgba(145, 207, 243, 1) 0%, rgba(101, 137, 249, 1) 100%)",
        },
      }),
      _vm._v(" 登记管理 "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".echart-legend[data-v-5dc3d1a4] {\n  position: relative;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid #f6f8ff;\n  margin: -60px 8px 0px;\n  display: flex;\n  padding: 10px 4px;\n  z-index: 9;\n}\n.echart-legend .echart-legend-item > div .block[data-v-5dc3d1a4] {\n  width: 8px;\n  height: 8px;\n  margin-right: 5px;\n  border-radius: 2px;\n  display: inline-block;\n}\n.echart-legend .echart-legend-item > div .num[data-v-5dc3d1a4] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #121236;\n}\n.echart-legend .echart-legend-item > div[data-v-5dc3d1a4]:first-child {\n  font-size: 13px;\n  font-weight: 600;\n  color: #5475f8;\n  margin-bottom: 5px;\n}\n.echart-legend .echart-legend-item > div[data-v-5dc3d1a4]:last-child {\n  font-size: 12px;\n}\n.echart-legend .echart-legend-item[data-v-5dc3d1a4]:nth-child(2) {\n  margin: 0px auto;\n}\n.chart_right[data-v-5dc3d1a4] {\n  text-align: center;\n  margin-top: 25px;\n  margin-right: 20px;\n}\n.chart_right > span[data-v-5dc3d1a4] {\n  display: block;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.chart_right > span[data-v-5dc3d1a4]:last-child {\n  margin-top: 5px;\n  color: #5475f8;\n}\n.chart_right > span:last-child > font[data-v-5dc3d1a4] {\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f0c846aa", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionSource.vue":
/*!*****************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionSource.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true& */ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true&");
/* harmony import */ var _pollutionSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionSource.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& */ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pollutionSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5dc3d1a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/pollution/pollutionSource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionSource.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=style&index=0&id=5dc3d1a4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_style_index_0_id_5dc3d1a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionSource.vue?vue&type=template&id=5dc3d1a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionSource_vue_vue_type_template_id_5dc3d1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uU291cmNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25Tb3VyY2UudnVlP2RhODciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uU291cmNlLnZ1ZT9iZmE0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvblNvdXJjZS52dWU/MTgxZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25Tb3VyY2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvblNvdXJjZS52dWU/MmUzMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25Tb3VyY2UudnVlP2NjNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uU291cmNlLnZ1ZT8xYTNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQUZBLEdBRkE7QUFT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QUFzQixlQUFlLEdBQUcsb0VBQW9FLGVBQWUsZ0JBQWdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLEdBQUcsa0VBQWtFLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcseUVBQXlFLG9CQUFvQixxQkFBcUIsbUJBQW1CLHVCQUF1QixHQUFHLHdFQUF3RSxvQkFBb0IsR0FBRyxvRUFBb0UscUJBQXFCLEdBQUcsaUNBQWlDLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsd0NBQXdDLG1CQUFtQixvQkFBb0IscUJBQXFCLGlDQUFpQyxHQUFHLG1EQUFtRCxvQkFBb0IsbUJBQW1CLEdBQUcsMERBQTBELG9CQUFvQixHQUFHO0FBQzEyQztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4MkJBQXFmO0FBQzNnQjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsbUlBQXNFO0FBQ3hGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUdwRztBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFnVSxDQUFnQixnVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwVjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8zMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj1cImNvdW50cnlFY2hhcnRcIiBzdHlsZT1cImhlaWdodDoxNjBweDt3aWR0aDoyMzBweDttYXJnaW46IDBweCBhdXRvO1wiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0X3JpZ2h0XCIgdi1zaG93PVwiIWRldGFpbFwiPjxzcGFuPnt7eWVhcn196YeN54K55ZCN5b2VPC9zcGFuPjxzcGFuPjxmb250Pnt7bm93WmRDb3VudH19PC9mb250PiDlrrY8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVjaGFydC1sZWdlbmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVjaGFydC1sZWdlbmQtaXRlbVwiIEBjbGljaz1cImdvUGF0aCgn6YeN54K5566h55CGJylcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja1wiIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNC4xMWRlZywgcmdiYSgyNDYsIDE1NywgMTY4LCAxKSAwJSwgcmdiYSgyNDQsIDkzLCAxMTcsIDEpIDEwMCUpO1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICDph43ngrnnrqHnkIZcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4gY2xhc3M9XCJudW1cIj57e3pkdmFsdWV9fTwvc3Bhbj4g5a62PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4+KDxzcGFuIHN0eWxlPVwiY29sb3I6cmdiYSg2OCwgMTIzLCAyNTIsIDEpO2ZvbnQtc2l6ZTogMTRweDtcIj57e3pkcHJvcH19JTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlY2hhcnQtbGVnZW5kLWl0ZW1cIiBAY2xpY2s9XCJnb1BhdGgoJ+eugOWMlueuoeeQhicpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tcIiBzdHlsZT1cImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzMuMjhkZWcsIHJnYmEoMTEwLCAyMzAsIDE1OCwgMSkgMCUsIHJnYmEoNjcsIDIwNywgMTI0LCAxKSAxMDAlKTtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg566A5YyW566h55CGXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHNwYW4gY2xhc3M9XCJudW1cIj57e2podmFsdWV9fTwvc3Bhbj7lrrY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+KDxzcGFuIHN0eWxlPVwiY29sb3I6cmdiYSg2OCwgMTIzLCAyNTIsIDEpO2ZvbnQtc2l6ZTogMTRweDtcIj57e2pocHJvcH19JTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNoYXJ0LWxlZ2VuZC1pdGVtXCIgQGNsaWNrPVwiZ29QYXRoKCfnmbvorrDnrqHnkIYnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjMzLjI4ZGVnLCByZ2JhKDE0NSwgMjA3LCAyNDMsIDEpIDAlLCByZ2JhKDEwMSwgMTM3LCAyNDksIDEpIDEwMCUpO1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICDnmbvorrDnrqHnkIZcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cIm51bVwiPnt7ZGp2YWx1ZX19PC9zcGFuPuWutjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oPHNwYW4gc3R5bGU9XCJjb2xvcjpyZ2JhKDY4LCAxMjMsIDI1MiwgMSk7Zm9udC1zaXplOiAxNHB4O1wiPnt7ZGpwcm9wfX0lPC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xyXG4gICAgaW1wb3J0IHsgcG9sbHV0aW9uU3RhdCB9IGZyb20gJ0AvYXBpL3BvbGx1dGlvbl9zb3VyY2UnO1xyXG4gICAgaW1wb3J0IHsgZ2V0VGhpc0RhdGUgfSBmcm9tICdAL3V0aWxzL3NldGRhdGUnO1xyXG4gICAgaW1wb3J0IHtkd3llYXJaRH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XHJcbiAgICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJwb2xsdXRpb25Tb3VyY2VcIixcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIGRldGFpbHNQYXJhbWV0ZXI6U3RyaW5nLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCk9Pnt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTE6IDAsXHJcbiAgICAgICAgICAgICAgICBvcHRpb24xOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6ICflubTluqbkvJjoia/njocnLCB2YWx1ZTogMH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgeHpxaDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6Z2V0VGhpc0RhdGUoKSxcclxuICAgICAgICAgICAgICAgIHpkdmFsdWU6JycsXHJcbiAgICAgICAgICAgICAgICB6ZHByb3A6JycsXHJcbiAgICAgICAgICAgICAgICBqaHZhbHVlOicnLFxyXG4gICAgICAgICAgICAgICAgamhwcm9wOicnLFxyXG4gICAgICAgICAgICAgICAgZGp2YWx1ZTonJyxcclxuICAgICAgICAgICAgICAgIGRqcHJvcDonJyxcclxuICAgICAgICAgICAgICAgIHNlYXJjaE9iajoge30sXHJcbiAgICAgICAgICAgICAgICBiYXNpblJlZjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vd1pkQ291bnQgOiAnJyxcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDIzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSBkYXlqcygpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmRldGFpbHNQYXJhbWV0ZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy54enFoID0gdGhpcy5kZXRhaWxzUGFyYW1ldGVyXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnh6cWggPSB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXROb3daZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXROb3daZCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IHRoaXMueWVhcixcclxuICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZHd5ZWFyWkQoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd1pkQ291bnQgPSByZXMuZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdCgpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhc2luUmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNpblJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmNvdW50cnlFY2hhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmJhc2luUmVmKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbJ3JnYmEoMjQ0LCA5MywgMTE3LCAxKScsICdyZ2JhKDY3LCAyMDcsIDEyNCwgMSknLCAncmdiYSg4NCwgMTE3LCAyNDgsIDEpJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+e0r+iuoeaxh+aAuycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDE4LCAxOCwgNTQsIDAuNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogJzI1JSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDE4LCAxOCwgNTQsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6ICczOSUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50OiB0cnVlICAvLyDngrnlh7vlj6/op6blj5Hkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IFsnODAlJywgJzEwMCUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2b2lkTGFiZWxPdmVybGFwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyV2lkdGg6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlckNvbG9yOiBcIiNGOEY4RjhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGU6IC0xODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb2xsdXRpb25TdGF0KHtkaXZpc2lvbk5hbWU6dGhpcy54enFofSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpkdmFsdWUgPSByZGF0YS56ZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpkcHJvcCA9ICgocGFyc2VJbnQocmRhdGEuemQpL3BhcnNlSW50KHJkYXRhLnN1bSkpKjEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpodmFsdWUgPSByZGF0YS5qaDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpocHJvcCA9ICgocGFyc2VJbnQocmRhdGEuamgpL3BhcnNlSW50KHJkYXRhLnN1bSkpKjEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRqdmFsdWUgPSByZGF0YS5kajtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRqcHJvcCA9ICgocGFyc2VJbnQocmRhdGEuZGopL3BhcnNlSW50KHJkYXRhLnN1bSkpKjEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VtID0gTnVtYmVyKHJkYXRhLnpkKStOdW1iZXIocmRhdGEuamgpK051bWJlcihyZGF0YS5kaik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlcmllc1swXS5kYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6cmRhdGEuemQsbmFtZTpcIumHjeeCueeuoeeQhlwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOnJkYXRhLmpoLG5hbWU6XCLnroDljJbnrqHnkIZcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTpyZGF0YS5kaixuYW1lOlwi55m76K6w566h55CGXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IHN1bSwgbmFtZTogJycsIGl0ZW1TdHlsZToge25vcm1hbDogeyBjb2xvcjogJ25vbmUnfX19XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50aXRsZVsxXS50ZXh0ID0gc3VtKyflrrYnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBjaGFydEluc3RhbmNlLm9mZignY2xpY2snKTsvL+WFiOino+e7keS6i+S7tu+8jOmYsuatouS6i+S7tumHjeWkjeinpuWPkVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0SW5zdGFuY2Uub24oJ2NsaWNrJywgcGFyYW1zID0+IHsgIC8vIOe7meWbvuihqOe7keWumueCueWHu+S6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmNvbXBvbmVudFR5cGUgPT09ICd0aXRsZScpIHsgLy8g56Gu6K6k54K55Ye76YOo5YiG5Li6dGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29QYXRoKCfph43ngrnnrqHnkIYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1BhdGgodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOidwb2xsdXRpb25TdGF0aXNMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4enFoOnRoaXMueHpxaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHF0eXBlOiAn5rGh5p+T5rqQ5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLmVjaGFydC1sZWdlbmR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDYsIDI0OCwgMjU1LCAxKTtcclxuICAgICAgICBtYXJnaW46IC02MHB4IDhweCAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDRweDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIC5lY2hhcnQtbGVnZW5kLWl0ZW0ge1xyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgLmJsb2Nre1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGFydF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgICAgICA+Zm9udHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHt9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcImNvdW50cnlFY2hhcnRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE2MHB4XCIsIHdpZHRoOiBcIjIzMHB4XCIsIG1hcmdpbjogXCIwcHggYXV0b1wiIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uZGV0YWlsLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFkZXRhaWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGFydF9yaWdodFwiLFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS55ZWFyKSArIFwi6YeN54K55ZCN5b2VXCIpXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIFtfYyhcImZvbnRcIiwgW192bS5fdihfdm0uX3MoX3ZtLm5vd1pkQ291bnQpKV0pLCBfdm0uX3YoXCIg5a62XCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWNoYXJ0LWxlZ2VuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWNoYXJ0LWxlZ2VuZC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZ29QYXRoKFwi6YeN54K5566h55CGXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnpkdmFsdWUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIg5a62XCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnpkcHJvcCkgKyBcIiVcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIilcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWNoYXJ0LWxlZ2VuZC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZ29QYXRoKFwi566A5YyW566h55CGXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmpodmFsdWUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIihcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoNjgsIDEyMywgMjUyLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uamhwcm9wKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiKVwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlY2hhcnQtbGVnZW5kLWl0ZW1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1BhdGgoXCLnmbvorrDnrqHnkIZcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGp2YWx1ZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIuWutlwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiKFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kanByb3ApICsgXCIlXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIpXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTM0LjExZGVnLCByZ2JhKDI0NiwgMTU3LCAxNjgsIDEpIDAlLCByZ2JhKDI0NCwgOTMsIDExNywgMSkgMTAwJSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIOmHjeeCueeuoeeQhiBcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDIzMy4yOGRlZywgcmdiYSgxMTAsIDIzMCwgMTU4LCAxKSAwJSwgcmdiYSg2NywgMjA3LCAxMjQsIDEpIDEwMCUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiDnroDljJbnrqHnkIYgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiLFxuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgyMzMuMjhkZWcsIHJnYmEoMTQ1LCAyMDcsIDI0MywgMSkgMCUsIHJnYmEoMTAxLCAxMzcsIDI0OSwgMSkgMTAwJSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIOeZu+iusOeuoeeQhiBcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lY2hhcnQtbGVnZW5kW2RhdGEtdi01ZGMzZDFhNF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDYpIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNmY4ZmY7XFxuICBtYXJnaW46IC02MHB4IDhweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCA0cHg7XFxuICB6LWluZGV4OiA5O1xcbn1cXG4uZWNoYXJ0LWxlZ2VuZCAuZWNoYXJ0LWxlZ2VuZC1pdGVtID4gZGl2IC5ibG9ja1tkYXRhLXYtNWRjM2QxYTRdIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZWNoYXJ0LWxlZ2VuZCAuZWNoYXJ0LWxlZ2VuZC1pdGVtID4gZGl2IC5udW1bZGF0YS12LTVkYzNkMWE0XSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uZWNoYXJ0LWxlZ2VuZCAuZWNoYXJ0LWxlZ2VuZC1pdGVtID4gZGl2W2RhdGEtdi01ZGMzZDFhNF06Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZWNoYXJ0LWxlZ2VuZCAuZWNoYXJ0LWxlZ2VuZC1pdGVtID4gZGl2W2RhdGEtdi01ZGMzZDFhNF06bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5lY2hhcnQtbGVnZW5kIC5lY2hhcnQtbGVnZW5kLWl0ZW1bZGF0YS12LTVkYzNkMWE0XTpudGgtY2hpbGQoMikge1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG59XFxuLmNoYXJ0X3JpZ2h0W2RhdGEtdi01ZGMzZDFhNF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLmNoYXJ0X3JpZ2h0ID4gc3BhbltkYXRhLXYtNWRjM2QxYTRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5jaGFydF9yaWdodCA+IHNwYW5bZGF0YS12LTVkYzNkMWE0XTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbn1cXG4uY2hhcnRfcmlnaHQgPiBzcGFuOmxhc3QtY2hpbGQgPiBmb250W2RhdGEtdi01ZGMzZDFhNF0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZGMzZDFhNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImYwYzg0NmFhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uU291cmNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVkYzNkMWE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uU291cmNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVkYzNkMWE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wb2xsdXRpb25Tb3VyY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkYzNkMWE0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcG9sbHV0aW9uU291cmNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVkYzNkMWE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWRjM2QxYTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWRjM2QxYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWRjM2QxYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWRjM2QxYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWRjM2QxYTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWRjM2QxYTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvblNvdXJjZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uU291cmNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZGMzZDFhNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblNvdXJjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWRjM2QxYTQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9