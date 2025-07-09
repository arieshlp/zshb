(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "airQualityExamine",
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_0__["getThisDate"])(),
      xzqh: '',
      dataobj: {},
      index: 1
    };
  },
  mounted: function mounted() {
    // this.dwid = this.$route.query.id;
    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.loadData(1);
  },
  methods: {
    loadData: function loadData(index) {
      var _this = this;

      this.index = index;
      var info = {
        dateTime: this.today,
        divisionName: this.xzqh
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_1__["airCityAssessCondition"])(info).then(function (res) {
        _this.dataobj = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_airFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/airFilter */ "./src/components/airFilter.vue");
/* harmony import */ var _views_airHomePage_components_echarts_proportionEchart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/airHomePage/components/echarts/proportionEchart */ "./src/views/airHomePage/components/echarts/proportionEchart.vue");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "airQualityProportion",
  props: {
    detailsParameter: String,
    queryFlag: {
      type: [Number, String],
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  components: {
    proportionEchart: _views_airHomePage_components_echarts_proportionEchart__WEBPACK_IMPORTED_MODULE_2__["default"],
    airFilter: _components_airFilter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      endPop: false,
      factorArr: [{
        text: '首要污染物',
        val: 1
      }, {
        text: '超标污染物',
        val: 2
      }],
      xzqh: "",
      pieData: [],
      showfactor: "首要污染物",
      factor: '1',
      factorPop: false,
      siteId: '',
      index: 1,
      time: ''
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.time = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY'); // this.loadData();
  },
  methods: {
    loadData: function loadData(value) {
      this.index = value;
      this.factor = value;
    },

    /*onConfirmFactor(obj) {
      this.showfactor = obj.text;
      this.factor = obj.val;
      this.factorPop = false;
    },*/
    getType: function getType(obj, type) {
      this.time = obj.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");




//
//
//
//
//
//


var color = ['#5186FD', '#7EA6FF', '#9EBBFD', '#C3D4FE'];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "proportionEchart",
  props: {
    factor: [String, Number],
    siteId: String,
    xzqh: String,
    queryFlag: {
      type: Number,
      default: function _default() {}
    },
    //浓度 0 /IAQI 1
    year: {
      type: [String, Number],
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    if (!this.proportionRef) {
      this.proportionRef = echarts__WEBPACK_IMPORTED_MODULE_4__["init"](this.$refs.proportionRef);
      /*setTimeout(() => {
        this.initChart(this.proportionRef)
      })*/
    }
  },
  methods: {
    initChart: function initChart(chartInstance) {
      var option = {
        color: ['#417AFD', '#7AA1F9', '#8ba8ef', '#9EBBFD', '#C3D4FE', '#cad6f1', '#eef1f9'],
        legend: {
          show: false
        },
        grid: {
          top: '8%',
          left: '10%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          // trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function formatter(params) {
            var str = params;
            return str.name + ':' + str.value + '天(' + str.percent + '%)';
          }
        },
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['0%', '60%'],
          labelLine: {
            length: 10,
            // 改变标示线的长度
            lineStyle: {
              color: "#C3D5FE" // 改变标示线的颜色

            },
            length2: 18
          },
          label: {
            show: true,
            lineHeight: 15,
            minMargin: 15,
            formatter: '{name|{c}天}\n {time|{b}({d}%)}',
            // {time|({d}%)}
            rich: {
              name: {
                fontSize: 12,
                color: '#447BFC'
              },
              time: {
                fontSize: 12,
                color: '#1212367F'
              }
            } // formatter: (params)=> {
            // 	// return '{color'+params.dataIndex+'|'+params.value + '天\n}{name|' + params.name + ' ' + params.percent + '%}'
            // 	return '<span style="color:' + params.color + '">' + params.value + '</span>天 <br>'  + params.name + ' ' + params.percent.toFixed(2) + '%'
            // },

          },
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }, {
          name: '外边框',
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['60%', '60%'],
          labelLine: {
            show: false
          },
          data: [{
            value: 0,
            itemStyle: {
              normal: {
                borderWidth: 10,
                borderColor: '#E1EBFF'
              }
            }
          }]
        }]
      };
      var info = {
        type: this.factor,
        //首要污染物/超标污染物
        siteId: this.siteId,
        divisionName: this.xzqh,
        year: this.year,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      };
      var functionName = null;

      if (this.siteId != '') {
        functionName = _api_air_quality__WEBPACK_IMPORTED_MODULE_5__["airPollutantSiteRatio"];
      } else {
        functionName = _api_air_quality__WEBPACK_IMPORTED_MODULE_5__["airPollutantRatio"];
      }

      functionName(info).then(function (res) {
        var series = [];

        if (res.code == 200 && res.data.length > 0) {
          res.data.forEach(function (item) {
            if (item.value != 0) {
              series.push(item);
            }
          });
          option.series[0].data = series;
        }

        chartInstance.setOption(option);
      });
    }
  },
  watch: {
    factor: {
      handler: function handler() {
        var _this = this;

        setTimeout(function () {
          _this.initChart(_this.proportionRef);
        });
      },
      immediate: true
    },
    siteId: function siteId(nval) {
      var _this2 = this;

      setTimeout(function () {
        _this2.initChart(_this2.proportionRef);
      });
    },
    queryFlag: {
      handler: function handler() {
        var _this3 = this;

        setTimeout(function () {
          _this3.initChart(_this3.proportionRef);
        });
      }
    },
    year: {
      handler: function handler() {
        var _this4 = this;

        setTimeout(function () {
          _this4.initChart(_this4.proportionRef);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "10px" } },
    [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "card-title card-title-air" }, [
          _vm._v("年度空气质量考核情况"),
        ]),
        _c("div", { staticClass: "time" }, [
          _vm._v(" 年累计截至" + _vm._s(_vm.today) + " "),
        ]),
      ]),
      _c("div", { staticClass: "air-examine-first" }, [
        _c("div", [
          _c("span", { staticClass: "border-blue" }, [_vm._v("累计优良")]),
          _c(
            "span",
            [
              _c("font", [_vm._v(_vm._s(_vm.dataobj.excellentCount))]),
              _vm._v(" 天"),
            ],
            1
          ),
        ]),
        _c("div", [
          _c("span", { staticClass: "border-yellow" }, [_vm._v("良天数")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.dataobj.goodDays))]), _vm._v(" 天")],
            1
          ),
        ]),
        _c("div", [
          _c("span", { staticClass: "border-green" }, [_vm._v("优良率")]),
          _c(
            "span",
            [
              _c("font", [_vm._v(_vm._s(_vm.dataobj.excellentRatio))]),
              _vm._v(" %"),
            ],
            1
          ),
        ]),
        _c("div", [
          _c("span", { staticClass: "border-yellow" }, [_vm._v("轻度污染")]),
          _c(
            "span",
            [
              _c("font", [_vm._v(_vm._s(_vm.dataobj.mildPollution))]),
              _vm._v(" 天"),
            ],
            1
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper" },
    [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "card-title card-title-air" }, [
          _vm._v("污染物占比统计"),
        ]),
        _c("div", { staticClass: "time search-content" }, [
          _c(
            "div",
            {
              staticClass: "search-item fs",
              on: {
                click: function ($event) {
                  _vm.factorPop = true
                },
              },
            },
            [
              _vm._v(" " + _vm._s(_vm.time) + " "),
              _c("van-icon", { attrs: { name: "arrow-down" } }),
            ],
            1
          ),
        ]),
      ]),
      _c("div", { staticClass: "tab-wrapper" }, [
        _c(
          "span",
          {
            class: _vm.index == 1 ? "active" : "",
            on: {
              click: function ($event) {
                return _vm.loadData(1)
              },
            },
          },
          [_vm._v("首要污染物")]
        ),
        _c(
          "span",
          {
            class: _vm.index == 2 ? "active" : "",
            on: {
              click: function ($event) {
                return _vm.loadData(2)
              },
            },
          },
          [_vm._v("超标污染物")]
        ),
      ]),
      _c("proportion-echart", {
        attrs: {
          factor: _vm.factor,
          xzqh: _vm.xzqh,
          siteId: "",
          year: _vm.time,
          queryFlag: _vm.queryFlag,
        },
      }),
      _c("airFilter", {
        attrs: { isShow: _vm.factorPop, type: "year" },
        on: {
          getType: _vm.getType,
          close: function ($event) {
            _vm.factorPop = false
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", {
      ref: "proportionRef",
      staticStyle: { height: "200px", width: "96%", margin: "10px auto" },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".time[data-v-267bbae4] {\n  display: flex;\n  align-items: center;\n}\n.time > span[data-v-267bbae4] {\n  border-radius: 4px;\n  background: #f5f7ff;\n  display: flex;\n  padding: 3px 5px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #5475f8;\n  margin-left: 5px;\n  border: 1px solid #d2dafc;\n}\n.time .active[data-v-267bbae4] {\n  background: #5271ff;\n  color: #fff;\n}\n.air-examine-first[data-v-267bbae4] {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 3px;\n}\n.air-examine-first > div[data-v-267bbae4] {\n  width: 25%;\n  font-size: 14px;\n  line-height: 21px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  opacity: 1;\n  border-radius: 10px;\n  background: #f8fbff;\n  margin-right: 3px;\n  padding-top: 7px;\n}\n.air-examine-first > div .border-blue[data-v-267bbae4] {\n  border-left: 2px solid #447bfc;\n}\n.air-examine-first > div .border-yellow[data-v-267bbae4] {\n  border-left: 2px solid #ff8d1a;\n}\n.air-examine-first > div .border-green[data-v-267bbae4] {\n  border-left: 2px solid #00baad;\n}\n.air-examine-first > div > span[data-v-267bbae4] {\n  display: block;\n  margin-left: 8px;\n  margin-bottom: 7px;\n}\n.air-examine-first > div > span[data-v-267bbae4]:first-child {\n  line-height: 12px;\n  padding-left: 8px;\n  margin-left: 8px;\n}\n.air-examine-first > div > span[data-v-267bbae4]:last-child {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-top: 4px;\n}\n.air-examine-first > div > span:last-child > font[data-v-267bbae4] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #121236;\n}\n.air-examine-first > div .target-box[data-v-267bbae4], .air-examine-first > div .residue-box[data-v-267bbae4] {\n  padding: 4px;\n  margin-bottom: 7px;\n  font-size: 12px;\n}\n.air-examine-first > div .target-box[data-v-267bbae4] {\n  background: linear-gradient(90deg, #d4dcfc 0%, rgba(248, 251, 255, 0) 100%);\n}\n.air-examine-first > div .target-box span[data-v-267bbae4] {\n  color: #5271ff;\n}\n.air-examine-first > div .residue-box[data-v-267bbae4] {\n  background: linear-gradient(90deg, #fae2ca 0%, rgba(255, 249, 242, 0) 100%);\n}\n.air-examine-first > div .residue-box span[data-v-267bbae4] {\n  color: rgba(255, 141, 26, 0.8);\n}\n.air-examine-last[data-v-267bbae4] {\n  display: flex;\n  margin-left: 3px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.air-examine-last > div[data-v-267bbae4] {\n  display: flex;\n  justify-content: space-between;\n  width: 33%;\n  border-radius: 4px;\n  background: #f8fbff;\n  border: 1px solid rgba(68, 123, 252, 0.3);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-right: 3px;\n  padding: 3px 5px;\n}\n.air-examine-last > div > span[data-v-267bbae4]:last-child {\n  font-size: 13px;\n  font-weight: 500;\n  color: #5271ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tab-wrapper[data-v-33d79632] {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n.tab-wrapper > span[data-v-33d79632] {\n  border-radius: 4px;\n  background: #f5f7ff;\n  display: flex;\n  padding: 3px 5px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #5475f8;\n  margin-left: 5px;\n  border: 1px solid #d2dafc;\n}\n.tab-wrapper .active[data-v-33d79632] {\n  background: #5271ff;\n  color: #fff;\n}\n.search-content[data-v-33d79632] {\n  display: flex;\n  align-items: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-33d79632] {\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4b29cf5c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2aa11f48", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityExamine.vue":
/*!****************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityExamine.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true& */ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true&");
/* harmony import */ var _airQualityExamine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityExamine.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airQualityExamine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "267bbae4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityExamine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityExamine.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=style&index=0&id=267bbae4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_style_index_0_id_267bbae4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityExamine.vue?vue&type=template&id=267bbae4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityExamine_vue_vue_type_template_id_267bbae4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/airQualityProportion.vue":
/*!*******************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityProportion.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true& */ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true&");
/* harmony import */ var _airQualityProportion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityProportion.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airQualityProportion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33d79632",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityProportion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityProportion.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=style&index=0&id=33d79632&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_style_index_0_id_33d79632_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityProportion.vue?vue&type=template&id=33d79632&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityProportion_vue_vue_type_template_id_33d79632_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/echarts/proportionEchart.vue":
/*!***********************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/proportionEchart.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true& */ "./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true&");
/* harmony import */ var _proportionEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proportionEchart.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proportionEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70b25c40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/echarts/proportionEchart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proportionEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./proportionEchart.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proportionEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/proportionEchart.vue?vue&type=template&id=70b25c40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proportionEchart_vue_vue_type_template_id_70b25c40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eUV4YW1pbmUudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5UHJvcG9ydGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvcHJvcG9ydGlvbkVjaGFydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eUV4YW1pbmUudnVlP2M5Y2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVByb3BvcnRpb24udnVlPzQxNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT9jMDQ3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT8wOTI0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT8yZDU2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT8wMDM4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT9mNDA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5RXhhbWluZS52dWU/YzE1MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5RXhhbWluZS52dWU/ZDU4OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5RXhhbWluZS52dWU/OGIwZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5UHJvcG9ydGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVByb3BvcnRpb24udnVlPzg1MzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP2I3YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP2M2MmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL3Byb3BvcnRpb25FY2hhcnQudnVlP2NjMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT8yODNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNB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QmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF5VCxDQUFnQixxVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3VTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTJHO0FBQ3ZDO0FBQ0w7OztBQUcvRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsdUdBQU07QUFDUixFQUFFLGdIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpVSxDQUFnQixpVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDEwcHhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiPuW5tOW6puepuuawlOi0qOmHj+iAg+aguOaDheWGtTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICAgICAgICDlubTntK/orqHmiKroh7N7e3RvZGF5fX1cbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4gOmNsYXNzPVwiaW5kZXg9PTE/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJsb2FkRGF0YSgxKVwiPuW5tOW6puS8mOiJr+eOhzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpbmRleD09Mj8nYWN0aXZlJzonJ1wiIEBjbGljaz1cImxvYWREYXRhKDIpXCI+UE0yLjXlubTlnYflgLw8L3NwYW4+LS0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFpci1leGFtaW5lLWZpcnN0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9yZGVyLWJsdWVcIj7ntK/orqHkvJjoia88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGZvbnQ+e3tkYXRhb2JqLmV4Y2VsbGVudENvdW50fX08L2ZvbnQ+IOWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImZzIHRhcmdldC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg55uu5qCHXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMgcmVzaWR1ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg5Ymp5L2ZXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvcmRlci15ZWxsb3dcIj7oia/lpKnmlbA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGZvbnQ+e3tkYXRhb2JqLmdvb2REYXlzfX08L2ZvbnQ+IOWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImZzIHRhcmdldC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg55uu5qCHXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMgcmVzaWR1ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg5Ymp5L2ZXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvcmRlci1ncmVlblwiPuS8mOiJr+eOhzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48Zm9udD57e2RhdGFvYmouZXhjZWxsZW50UmF0aW99fTwvZm9udD4gJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImZzIHRhcmdldC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg55uu5qCHXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMgcmVzaWR1ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAg5Ymp5L2ZXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjIzNeWkqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvcmRlci15ZWxsb3dcIj7ovbvluqbmsaHmn5M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PGZvbnQ+e3tkYXRhb2JqLm1pbGRQb2xsdXRpb259fTwvZm9udD4g5aSpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZnMgdGFyZ2V0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICDnm67moIdcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MjM15aSpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcyByZXNpZHVlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICDliankvZlcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MjM15aSpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImFpci1leGFtaW5lLWxhc3RcIj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4+TzNfMWg8L3NwYW4+PHNwYW4+e3tkYXRhb2JqLm8zMWh9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4+TzNfOGg8L3NwYW4+PHNwYW4+e3tkYXRhb2JqLm8zOGh9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4+TzNfOGjntK/orqE8L3NwYW4+PHNwYW4+e3tkYXRhb2JqLm8zOGhDb3VudH19PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdldFRoaXNEYXRlIH0gZnJvbSAnQC91dGlscy9zZXRkYXRlJztcblx0aW1wb3J0IHsgYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbiB9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiYWlyUXVhbGl0eUV4YW1pbmVcIixcblx0XHRcdFx0cHJvcHM6e1xuXHRcdFx0XHRcdGRldGFpbHNQYXJhbWV0ZXI6U3RyaW5nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhKCl7XG5cdFx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdFx0dG9kYXk6Z2V0VGhpc0RhdGUoKSxcblx0XHRcdFx0XHRcdHh6cWg6ICcnLFxuXHRcdFx0XHRcdFx0ZGF0YW9iajp7XG5cblx0XHRcdFx0XHRcdH0sXG4gICAgICAgICAgICAgIGluZGV4OiAxXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb3VudGVkKCkge1xuXHRcdFx0XHRcdC8vIHRoaXMuZHdpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkO1xuXHRcdFx0XHRcdHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XG5cdFx0XHRcdFx0aWYodGhpcy5kZXRhaWxzUGFyYW1ldGVyKXtcblx0XHRcdFx0XHRcdHRoaXMueHpxaCA9IHRoaXMuZGV0YWlsc1BhcmFtZXRlclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKDEpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRtZXRob2RzOiB7XG5cdFx0XHRcdFx0bG9hZERhdGEoaW5kZXgpe1xuXHRcdFx0XHRcdCAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0XHRsZXQgaW5mbz17XG5cdFx0XHRcdFx0XHRcdGRhdGVUaW1lOnRoaXMudG9kYXksXG5cdFx0XHRcdFx0XHRcdFx0ZGl2aXNpb25OYW1lOnRoaXMueHpxaFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbihpbmZvKS50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFvYmogPSByZXMuZGF0YTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgICAudGltZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPnNwYW57XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTUsIDEpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTAsIDIxOCwgMjUyLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MiwgMTEzLCAyNTUsIDEpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWlyLWV4YW1pbmUtZmlyc3R7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgID5kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICAuYm9yZGVyLWJsdWV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9yZGVyLXllbGxvd3tcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3JkZXItZ3JlZW57XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDAsIDE4NiwgMTczLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5zcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgPmZvbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLnRhcmdldC1ib3gsIC5yZXNpZHVlLWJveHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhcmdldC1ib3h7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIxMiwgMjIwLCAyNTIsIDEpIDAlLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDApIDEwMCUpO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzaWR1ZS1ib3h7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1MCwgMjI2LCAyMDIsIDEpIDAlLCByZ2JhKDI1NSwgMjQ5LCAyNDIsIDApIDEwMCUpO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFpci1leGFtaW5lLWxhc3R7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICA+ZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUxLCAyNTUsIDEpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMyk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgICAgICA+c3BhbntcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoODIsIDExMywgMjU1LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiPuaxoeafk+eJqeWNoOavlOe7n+iuoTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWUgc2VhcmNoLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pdGVtIGZzXCIgQGNsaWNrPVwiZmFjdG9yUG9wPSB0cnVlXCI+XG4gICAgICAgICAge3t0aW1lfX1cbiAgICAgICAgICA8dmFuLWljb24gbmFtZT1cImFycm93LWRvd25cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXJcIj5cbiAgICAgIDxzcGFuIDpjbGFzcz1cImluZGV4PT0xPydhY3RpdmUnOicnXCIgQGNsaWNrPVwibG9hZERhdGEoMSlcIj7pppbopoHmsaHmn5Pniak8L3NwYW4+XG4gICAgICA8c3BhbiA6Y2xhc3M9XCJpbmRleD09Mj8nYWN0aXZlJzonJ1wiIEBjbGljaz1cImxvYWREYXRhKDIpXCI+6LaF5qCH5rGh5p+T54mpPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPHByb3BvcnRpb24tZWNoYXJ0IDpmYWN0b3I9XCJmYWN0b3JcIiA6eHpxaD1cInh6cWhcIiA6c2l0ZUlkPVwiJydcIiA6eWVhcj1cInRpbWVcIiA6cXVlcnlGbGFnPVwicXVlcnlGbGFnXCIvPlxuXG4gICAgPCEtLeWboOWtkOmAieaLqS0tPlxuICAgIDwhLS08dmFuLXBvcHVwIHYtbW9kZWw9XCJmYWN0b3JQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgICAgPHZhbi1waWNrZXJcbiAgICAgICAgICB0aXRsZT1cIuaVsOaNruexu+Wei1wiXG4gICAgICAgICAgc2hvdy10b29sYmFyIHZhbHVlLWtleT1cInRleHRcIlxuICAgICAgICAgIDpjb2x1bW5zPVwiZmFjdG9yQXJyXCJcbiAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUZhY3RvclwiXG4gICAgICAgICAgQGNhbmNlbD1cImZhY3RvclBvcD1mYWxzZVwiXG4gICAgICAvPlxuICAgIDwvdmFuLXBvcHVwPi0tPlxuICAgIDxhaXJGaWx0ZXIgOmlzU2hvdz1cImZhY3RvclBvcFwiIDp0eXBlPVwiJ3llYXInXCIgQGdldFR5cGU9XCJnZXRUeXBlXCIgQGNsb3NlPVwiZmFjdG9yUG9wPWZhbHNlXCIvPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGFpckZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2FpckZpbHRlclwiO1xuICBpbXBvcnQgcHJvcG9ydGlvbkVjaGFydCBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvcHJvcG9ydGlvbkVjaGFydFwiO1xuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImFpclF1YWxpdHlQcm9wb3J0aW9uXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRldGFpbHNQYXJhbWV0ZXI6IFN0cmluZyxcbiAgICAgIHF1ZXJ5RmxhZzoge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLFN0cmluZ10sXG4gICAgICAgIGRlZmF1bHQ6ICgpPT57fVxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBwcm9wb3J0aW9uRWNoYXJ0LFxuICAgICAgYWlyRmlsdGVyXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kUG9wOiBmYWxzZSxcbiAgICAgICAgZmFjdG9yQXJyOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+mmluimgeaxoeafk+eJqScsIHZhbDogMVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRleHQ6ICfotoXmoIfmsaHmn5PniaknLCB2YWw6IDJcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB4enFoOiBcIlwiLFxuICAgICAgICBwaWVEYXRhOiBbXSxcbiAgICAgICAgc2hvd2ZhY3RvcjogXCLpppbopoHmsaHmn5PnialcIixcbiAgICAgICAgZmFjdG9yOiAnMScsXG4gICAgICAgIGZhY3RvclBvcDogZmFsc2UsXG4gICAgICAgIHNpdGVJZDogJycsXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICB0aW1lOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XG4gICAgICBpZiAodGhpcy5kZXRhaWxzUGFyYW1ldGVyKSB7XG4gICAgICAgIHRoaXMueHpxaCA9IHRoaXMuZGV0YWlsc1BhcmFtZXRlclxuICAgICAgfVxuICAgICAgdGhpcy50aW1lID0gZGF5anMoKS5mb3JtYXQoJ1lZWVknKTtcbiAgICAgIC8vIHRoaXMubG9hZERhdGEoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGxvYWREYXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICAvKm9uQ29uZmlybUZhY3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5zaG93ZmFjdG9yID0gb2JqLnRleHQ7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gb2JqLnZhbDtcbiAgICAgICAgdGhpcy5mYWN0b3JQb3AgPSBmYWxzZTtcbiAgICAgIH0sKi9cbiAgICAgIGdldFR5cGUob2JqLCB0eXBlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IG9iai52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4gIC50YWItd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+IHNwYW4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjU1LCAxKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTgsIDI1MiwgMSk7XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgIC5zZWFyY2gtaXRlbSB7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgcmVmPVwicHJvcG9ydGlvblJlZlwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDt3aWR0aDo5NiU7bWFyZ2luOiAxMHB4IGF1dG9cIi8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcclxuICBpbXBvcnQge1xyXG4gICAgYWlyUG9sbHV0YW50UmF0aW8sIGFpclBvbGx1dGFudFNpdGVSYXRpb1xyXG4gIH0gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHknO1xyXG5cclxuICBsZXQgY29sb3IgPSBbJyM1MTg2RkQnLCAnIzdFQTZGRicsICcjOUVCQkZEJywgJyNDM0Q0RkUnXTtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInByb3BvcnRpb25FY2hhcnRcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZhY3RvcjogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgc2l0ZUlkOiBTdHJpbmcsXHJcbiAgICAgIHh6cWg6IFN0cmluZyxcclxuICAgICAgcXVlcnlGbGFnOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIC8v5rWT5bqmIDAgL0lBUUkgMVxyXG4gICAgICB5ZWFyOiB7XHJcbiAgICAgICAgdHlwZTogW1N0cmluZyxOdW1iZXJdLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIC8v5rWT5bqmIDAgL0lBUUkgMVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7fVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wb3J0aW9uUmVmKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMucHJvcG9ydGlvblJlZik7XHJcbiAgICAgICAgLypzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMucHJvcG9ydGlvblJlZilcclxuICAgICAgICB9KSovXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgICAgY29sb3I6IFsnIzQxN0FGRCcsICcjN0FBMUY5JywgJyM4YmE4ZWYnLCAnIzlFQkJGRCcsICcjQzNENEZFJywgJyNjYWQ2ZjEnLCAnI2VlZjFmOScsXSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHRvcDogJzglJyxcclxuICAgICAgICAgICAgbGVmdDogJzEwJScsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlcjogJ2F4aXMnLFxyXG4gICAgICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdzaGFkb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJhbXNcclxuICAgICAgICAgICAgICByZXR1cm4gc3RyLm5hbWUgKyAnOicgKyBzdHIudmFsdWUgKyAn5aSpKCcgKyBzdHIucGVyY2VudCArICclKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFsnNTAlJywgJzUwJSddLFxyXG4gICAgICAgICAgICByYWRpdXM6IFsnMCUnLCAnNjAlJ10sXHJcbiAgICAgICAgICAgIGxhYmVsTGluZToge1xyXG4gICAgICAgICAgICAgIGxlbmd0aDogMTAsICAvLyDmlLnlj5jmoIfnpLrnur/nmoTplb/luqZcclxuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDM0Q1RkVcIiAgLy8g5pS55Y+Y5qCH56S657q/55qE6aKc6ImyXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsZW5ndGgyOiAxOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDE1LFxyXG4gICAgICAgICAgICAgIG1pbk1hcmdpbjogMTUsXHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne25hbWV8e2N95aSpfVxcbiB7dGltZXx7Yn0oe2R9JSl9JywvLyB7dGltZXwoe2R9JSl9XHJcbiAgICAgICAgICAgICAgcmljaDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQ0N0JGQycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzEyMTIzNjdGJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gZm9ybWF0dGVyOiAocGFyYW1zKT0+IHtcclxuICAgICAgICAgICAgICAvLyBcdC8vIHJldHVybiAne2NvbG9yJytwYXJhbXMuZGF0YUluZGV4Kyd8JytwYXJhbXMudmFsdWUgKyAn5aSpXFxufXtuYW1lfCcgKyBwYXJhbXMubmFtZSArICcgJyArIHBhcmFtcy5wZXJjZW50ICsgJyV9J1xyXG4gICAgICAgICAgICAgIC8vIFx0cmV0dXJuICc8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBwYXJhbXMuY29sb3IgKyAnXCI+JyArIHBhcmFtcy52YWx1ZSArICc8L3NwYW4+5aSpIDxicj4nICArIHBhcmFtcy5uYW1lICsgJyAnICsgcGFyYW1zLnBlcmNlbnQudG9GaXhlZCgyKSArICclJ1xyXG4gICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBlbXBoYXNpczoge1xyXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjogMTAsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dPZmZzZXRYOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICflpJbovrnmoYYnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcclxuICAgICAgICAgICAgcmFkaXVzOiBbJzYwJScsICc2MCUnXSxcclxuICAgICAgICAgICAgbGFiZWxMaW5lOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNFMUVCRkYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMuZmFjdG9yLCAvL+mmluimgeaxoeafk+eJqS/otoXmoIfmsaHmn5PnialcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIHllYXI6IHRoaXMueWVhcixcclxuICAgICAgICAgIGFxaTogdGhpcy5xdWVyeUZsYWcgPT09IDAgPyAnJyA6ICdpYXFpJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l0ZUlkICE9ICcnKSB7XHJcbiAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBhaXJQb2xsdXRhbnRTaXRlUmF0aW9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gYWlyUG9sbHV0YW50UmF0aW9cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb25OYW1lKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGxldCBzZXJpZXMgPSBbXTtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDAgJiYgcmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHNlcmllcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzZXJpZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBmYWN0b3I6IHtcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzaXRlSWQobnZhbCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5RmxhZzoge1xyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLnByb3BvcnRpb25SZWYpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHllYXI6IHtcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiLCBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctYm90dG9tXCI6IFwiMTBweFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS1haXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5bm05bqm56m65rCU6LSo6YeP6ICD5qC45oOF5Ya1XCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiDlubTntK/orqHmiKroh7NcIiArIF92bS5fcyhfdm0udG9kYXkpICsgXCIgXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItZXhhbWluZS1maXJzdFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvcmRlci1ibHVlXCIgfSwgW192bS5fdihcIue0r+iuoeS8mOiJr1wiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai5leGNlbGxlbnRDb3VudCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiDlpKlcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9yZGVyLXllbGxvd1wiIH0sIFtfdm0uX3YoXCLoia/lpKnmlbBcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW19jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai5nb29kRGF5cykpXSksIF92bS5fdihcIiDlpKlcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9yZGVyLWdyZWVuXCIgfSwgW192bS5fdihcIuS8mOiJr+eOh1wiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai5leGNlbGxlbnRSYXRpbykpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiAlXCIpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvcmRlci15ZWxsb3dcIiB9LCBbX3ZtLl92KFwi6L275bqm5rGh5p+TXCIpXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmb250XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLm1pbGRQb2xsdXRpb24pKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIg5aSpXCIpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLmsaHmn5PnianljaDmr5Tnu5/orqFcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWUgc2VhcmNoLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWFyY2gtaXRlbSBmc1wiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZmFjdG9yUG9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRpbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIgfSB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uaW5kZXggPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWREYXRhKDEpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIummluimgeaxoeafk+eJqVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IF92bS5pbmRleCA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZERhdGEoMilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi6LaF5qCH5rGh5p+T54mpXCIpXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfYyhcInByb3BvcnRpb24tZWNoYXJ0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBmYWN0b3I6IF92bS5mYWN0b3IsXG4gICAgICAgICAgeHpxaDogX3ZtLnh6cWgsXG4gICAgICAgICAgc2l0ZUlkOiBcIlwiLFxuICAgICAgICAgIHllYXI6IF92bS50aW1lLFxuICAgICAgICAgIHF1ZXJ5RmxhZzogX3ZtLnF1ZXJ5RmxhZyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJhaXJGaWx0ZXJcIiwge1xuICAgICAgICBhdHRyczogeyBpc1Nob3c6IF92bS5mYWN0b3JQb3AsIHR5cGU6IFwieWVhclwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgZ2V0VHlwZTogX3ZtLmdldFR5cGUsXG4gICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5mYWN0b3JQb3AgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7XG4gICAgICByZWY6IFwicHJvcG9ydGlvblJlZlwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjk2JVwiLCBtYXJnaW46IFwiMTBweCBhdXRvXCIgfSxcbiAgICB9KSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpbWVbZGF0YS12LTI2N2JiYWU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpbWUgPiBzcGFuW2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjdmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkYWZjO1xcbn1cXG4udGltZSAuYWN0aXZlW2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgYmFja2dyb3VuZDogIzUyNzFmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3RbZGF0YS12LTI2N2JiYWU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5haXItZXhhbWluZS1maXJzdCA+IGRpdltkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjFweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG59XFxuLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2IC5ib3JkZXItYmx1ZVtkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQ0N2JmYztcXG59XFxuLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2IC5ib3JkZXIteWVsbG93W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmY4ZDFhO1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgLmJvcmRlci1ncmVlbltkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwYmFhZDtcXG59XFxuLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2ID4gc3BhbltkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG59XFxuLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2ID4gc3BhbltkYXRhLXYtMjY3YmJhZTRdOmZpcnN0LWNoaWxkIHtcXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgPiBzcGFuW2RhdGEtdi0yNjdiYmFlNF06bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgPiBzcGFuOmxhc3QtY2hpbGQgPiBmb250W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgLnRhcmdldC1ib3hbZGF0YS12LTI2N2JiYWU0XSwgLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2IC5yZXNpZHVlLWJveFtkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDdweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFpci1leGFtaW5lLWZpcnN0ID4gZGl2IC50YXJnZXQtYm94W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDRkY2ZjIDAlLCByZ2JhKDI0OCwgMjUxLCAyNTUsIDApIDEwMCUpO1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgLnRhcmdldC1ib3ggc3BhbltkYXRhLXYtMjY3YmJhZTRdIHtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgLnJlc2lkdWUtYm94W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmFlMmNhIDAlLCByZ2JhKDI1NSwgMjQ5LCAyNDIsIDApIDEwMCUpO1xcbn1cXG4uYWlyLWV4YW1pbmUtZmlyc3QgPiBkaXYgLnJlc2lkdWUtYm94IHNwYW5bZGF0YS12LTI2N2JiYWU0XSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDAuOCk7XFxufVxcbi5haXItZXhhbWluZS1sYXN0W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5haXItZXhhbWluZS1sYXN0ID4gZGl2W2RhdGEtdi0yNjdiYmFlNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMyU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxufVxcbi5haXItZXhhbWluZS1sYXN0ID4gZGl2ID4gc3BhbltkYXRhLXYtMjY3YmJhZTRdOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWItd3JhcHBlcltkYXRhLXYtMzNkNzk2MzJdIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhYi13cmFwcGVyID4gc3BhbltkYXRhLXYtMzNkNzk2MzJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICNmNWY3ZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZGFmYztcXG59XFxuLnRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTMzZDc5NjMyXSB7XFxuICBiYWNrZ3JvdW5kOiAjNTI3MWZmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5zZWFyY2gtY29udGVudFtkYXRhLXYtMzNkNzk2MzJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtMzNkNzk2MzJdIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2N2JiYWU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGIyOWNmNWNcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5RXhhbWluZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjdiYmFlNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2N2JiYWU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzZDc5NjMyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmFhMTFmNDhcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UHJvcG9ydGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2Q3OTYzMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzZDc5NjMyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9haXJRdWFsaXR5RXhhbWluZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3YmJhZTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWlyUXVhbGl0eUV4YW1pbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9haXJRdWFsaXR5RXhhbWluZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWlyUXVhbGl0eUV4YW1pbmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3YmJhZTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNjdiYmFlNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNjdiYmFlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNjdiYmFlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNjdiYmFlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYWlyUXVhbGl0eUV4YW1pbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2N2JiYWU0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2N2JiYWU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5RXhhbWluZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5RXhhbWluZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5RXhhbWluZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjdiYmFlNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlFeGFtaW5lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjdiYmFlNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzZDc5NjMyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzZDc5NjMyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzNkNzk2MzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzNkNzk2MzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzNkNzk2MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzNkNzk2MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FpclF1YWxpdHlQcm9wb3J0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2Q3OTYzMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczM2Q3OTYzMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVByb3BvcnRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UHJvcG9ydGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eVByb3BvcnRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzNkNzk2MzImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UHJvcG9ydGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNkNzk2MzImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Byb3BvcnRpb25FY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwYjI1YzQwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Byb3BvcnRpb25FY2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzBiMjVjNDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzBiMjVjNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzBiMjVjNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzBiMjVjNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Byb3BvcnRpb25FY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwYjI1YzQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcwYjI1YzQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL3Byb3BvcnRpb25FY2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvcG9ydGlvbkVjaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzBiMjVjNDAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9