(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _utils_airUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/airUtils */ "./src/utils/airUtils.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "hourAirQuality",
  props: {
    detailsParameter: String,
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  data: function data() {
    return {
      tabArr: [{
        name: '小时数据',
        val: 1
      }, {
        name: '日数据',
        val: 2
      }],
      columns: ['小时数据'],
      xzqh: '',
      type: '小时数据',
      endTime: '2023-02-01',
      tabIndex: 1,
      tabname: 'aqi',
      tabIaqiName: 'aqi',
      title: 'AQI',
      option: {},
      objdata: {
        pm25: '10'
      },
      chartdata: [],
      chartLjdata: [],
      timetype: "24小时"
    };
  },
  watch: {
    queryFlag: function queryFlag(newD) {
      this.changeType(this.tabIndex);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    if (!this.hourRef) {
      this.hourRef = echarts__WEBPACK_IMPORTED_MODULE_4__["init"](this.$refs.hourRef);
      setTimeout(function () {
        // this.initChart(this.hourRef)
        _this.getDataLine();
      });
    }
  },
  methods: {
    changeType: function changeType(index) {
      this.tabIndex = index;

      if (index == 1) {
        this.timetype = "24小时";
        this.option.title.text = '过去24小时' + this.title + '数据变化趋势';
      } else {
        this.timetype = "7天";
        this.option.title.text = '过去7天' + this.title + '数据变化趋势';

        if (!this.dayLjRef) {
          this.dayLjRef = echarts__WEBPACK_IMPORTED_MODULE_4__["init"](this.$refs.dayLjRef);
          setTimeout(function () {// this.initChartLj(this.dayLjRef)
          });
        }
      }

      this.getDataLine();
    },
    changeTab: function changeTab(val, title, iaqi) {
      var _this2 = this;

      var tempValue = this.queryFlag === 0 ? val : iaqi;
      this.tabname = tempValue;
      this.tabIaqiName = iaqi;
      this.title = title;
      var sArr = [];
      this.option.title.text = '过去' + this.timetype + title + '数据变化趋势';
      this.option.yAxis.name = this.title == 'AQI' ? '' : this.title == 'CO' ? 'mg/m³' : 'ug/m³';
      this.chartdata.forEach(function (item) {
        sArr.push(item[_this2.tabname]);
      });
      this.option.series[0].data = sArr;
      this.option.series[0].markLine.data = Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getMark"])(this.title);
      this.hourRef.setOption(this.option);

      if (this.tabIndex == 2) {
        var sArr2 = [];
        this.option2.title.text = '本日' + title + '日累计数据变化趋势';
        this.option2.yAxis.name = this.title == 'AQI' ? '' : this.title == 'CO' ? 'mg/m³' : 'ug/m³';
        this.chartLjdata.forEach(function (item) {
          sArr2.push(item[_this2.tabname]);
        });
        this.option2.series[0].data = sArr2;
        this.option2.series[0].markLine.data = Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getMark"])(this.title);
        this.dayLjRef.setOption(this.option2);
      }
    },
    close: function close(event) {
      event.currentTarget.parentElement.style.display = 'none'; //父级元素隐藏
    },
    getColor: function getColor(value, keyIaqi, factor) {
      var key = this.queryFlag === 0 ? value : keyIaqi;
      var style = '';
      var bg = this.tabname === factor || this.tabname === factor + 'Iaqi' ? 'background-color: #3f7bff;color:#fff' : '';

      if (value === '' || value === '-') {
        style = this.onCalenderBgColor(factor, key) + ';';
      } else {
        style = this.onCalenderBgColor(factor, key) + ';';
      }

      return style + bg;
    },
    getSpanColor: function getSpanColor(value, keyIaqi, factor) {
      var color = this.tabname !== factor && this.tabname !== factor + 'Iaqi' ? 'color:rgba(37, 57, 111, 0.5)' : '';
      return color;
    },
    onCalenderBgColor: function onCalenderBgColor(yzName, count) {
      return Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getCalenderBgColor"])(yzName, count);
    },
    getDataLine: function getDataLine() {
      var _this3 = this;

      var info = {
        dateTime: this.tabIndex == 1 ? Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_7__["getThisDate"])(1) : Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_7__["getThisDate"])(),
        type: this.tabIndex,
        divisionName: this.xzqh,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_6__["airCityData"])(info).then(function (res) {
        _this3.objdata = res.data;

        if (_this3.tabIndex == 1) {
          _this3.chartdata = res.data.list;
        } else {
          _this3.chartdata = res.data.listSeven;
        }

        _this3.chartLjdata = res.data.listDay;
        var xArr = [],
            sArr = [];
        var ljxArr = [];
        var ljsArr = [];

        if (_this3.chartdata.length > 0) {
          _this3.chartdata.forEach(function (item) {
            if (_this3.tabIndex == 1) {
              xArr.push(item.monitoringTime.substr(8, 5) + '时');
            } else {
              xArr.push(item.monitoringTime.substr(5, 5) + '日');
            }

            sArr.push(item[_this3.tabname]);
          });
        }

        if (_this3.chartLjdata && _this3.chartLjdata.length > 0) {
          _this3.chartLjdata.forEach(function (item) {
            ljxArr.push(item.monitoringTime.substr(8, 5) + "时");
            ljsArr.push(item[_this3.tabname]);
          });
        }

        _this3.initChart(_this3.hourRef, xArr, sArr);

        if (_this3.tabIndex == 2) {
          _this3.initChartLj(_this3.dayLjRef, ljxArr, ljsArr);
        } // this.option.xAxis.data = xArr;
        // this.option.series[0].data = sArr;
        // chartInstance.setOption(this.option)

      });
    },
    initChart: function initChart(chartInstance, xArr, sArr) {
      this.option = {
        color: ['rgba(82, 113, 255, 1)'],
        title: {
          left: 'center',
          text: '过去' + this.timetype + this.title + '数据变化趋势',
          textStyle: {
            color: 'rgba(82, 113, 255, 1)',
            fontSize: 12
          }
        },
        legend: {
          show: false
        },
        grid: {
          top: '15%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type : 'shadow',
            type: 'cross',
            label: {
              backgroundColor: '#769ab780'
            }
          },
          showContent: false
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            margin: 20
          },
          boundaryGap: false,
          data: xArr
        },
        yAxis: {
          type: 'value',
          name: this.title == 'AQI' ? '' : this.title == 'CO' ? 'mg/m³' : 'ug/m³',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#E4E9F2'
            }
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            rotate: 30
          }
        },
        series: [{
          data: sArr,
          type: 'line',
          showSymbol: false,
          areaStyle: {
            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: 'rgba(68, 123, 252, 0.1)'
            }, {
              offset: 0,
              color: 'rgba(68, 123, 252, 0.2)'
            }])
          },
          label: {
            show: true,
            fontSize: 14,
            color: "red",
            position: [-6, 20],
            formatter: '{c}'
          },
          markLine: {
            symbol: 'none',
            data: Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getMark"])(this.title)
          }
        }]
      };
      chartInstance.setOption(this.option);
    },
    initChartLj: function initChartLj(chartInstance, xArr, sArr) {
      this.option2 = {
        color: ['rgba(82, 113, 255, 1)'],
        title: {
          left: 'center',
          text: '本日' + this.title + '日累计数据变化趋势',
          textStyle: {
            color: 'rgba(82, 113, 255, 1)',
            fontSize: 12
          }
        },
        legend: {
          show: false
        },
        grid: {
          top: '15%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type : 'shadow',
            type: 'cross',
            label: {
              backgroundColor: '#769ab780'
            }
          },
          showContent: false
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            margin: 20
          },
          boundaryGap: false,
          data: xArr
        },
        yAxis: {
          type: 'value',
          name: this.title == 'AQI' ? '' : this.title == 'CO' ? 'mg/m³' : 'ug/m³',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#E4E9F2'
            }
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            rotate: 30
          }
        },
        series: [{
          data: sArr,
          type: 'line',
          showSymbol: false,
          areaStyle: {
            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: 'rgba(68, 123, 252, 0.1)'
            }, {
              offset: 0,
              color: 'rgba(68, 123, 252, 0.2)'
            }])
          },
          label: {
            show: true,
            fontSize: 14,
            color: "red",
            position: [-6, 20],
            formatter: '{c}'
          },
          markLine: {
            symbol: 'none',
            data: Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getMark"])(this.title)
          }
        }]
      };
      chartInstance.setOption(this.option2); // chartInstance.setOption(this.option)
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "tab-wrapper" },
      _vm._l(_vm.tabArr, function (item, i) {
        return _c(
          "div",
          {
            class: ["tab-item", item.val === _vm.tabIndex ? "active" : ""],
            on: {
              click: function ($event) {
                return _vm.changeType(item.val)
              },
            },
          },
          [_vm._v(_vm._s(item.name) + " ")]
        )
      }),
      0
    ),
    _c("div", { staticClass: "hourbox" }, [
      _c("div", { staticClass: "hourData fourwidth" }, [
        _c(
          "div",
          {
            staticStyle: { width: "calc(20% - 6px)" },
            style: _vm.getColor(_vm.objdata.aqi, _vm.objdata.aqi, "aqi"),
            on: {
              click: function ($event) {
                return _vm.changeTab("aqi", "AQI", "aqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                staticStyle: { "margin-right": "6px" },
                style: _vm.getSpanColor(
                  _vm.objdata.aqi,
                  _vm.objdata.aqi,
                  "aqi"
                ),
              },
              [_vm._v("AQI")]
            ),
            _c("span", [_vm._v(_vm._s(_vm.objdata.aqi))]),
          ]
        ),
        _c(
          "div",
          {
            style: _vm.getColor(_vm.objdata.pm25, _vm.objdata.pm25Iaqi, "pm25"),
            on: {
              click: function ($event) {
                return _vm.changeTab("pm25", "PM2.5", "pm25Iaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.pm25,
                  _vm.objdata.pm25Iaqi,
                  "pm25"
                ),
              },
              [_c("span", [_vm._v("PM2.5")]), _c("span", [_vm._v("ug/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0 ? _vm.objdata.pm25 : _vm.objdata.pm25Iaqi
                )
              ),
            ]),
          ]
        ),
        _c(
          "div",
          {
            style: _vm.getColor(_vm.objdata.pm10, _vm.objdata.pm10Iaqi, "pm10"),
            on: {
              click: function ($event) {
                return _vm.changeTab("pm10", "PM10", "pm10Iaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.pm10,
                  _vm.objdata.pm10Iaqi,
                  "pm10"
                ),
              },
              [_c("span", [_vm._v("PM10")]), _c("span", [_vm._v("ug/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0 ? _vm.objdata.pm10 : _vm.objdata.pm10Iaqi
                )
              ),
            ]),
          ]
        ),
        _c(
          "div",
          {
            style: _vm.getColor(_vm.objdata.so2, _vm.objdata.so2Iaqi, "so2"),
            on: {
              click: function ($event) {
                return _vm.changeTab("so2", "SO2", "so2Iaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.so2,
                  _vm.objdata.so2Iaqi,
                  "so2"
                ),
              },
              [_c("span", [_vm._v("SO2")]), _c("span", [_vm._v("ug/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0 ? _vm.objdata.so2 : _vm.objdata.so2Iaqi
                )
              ),
            ]),
          ]
        ),
      ]),
      _c("div", { staticClass: "hourData" }, [
        _c(
          "div",
          {
            style: _vm.getColor(_vm.objdata.so2, _vm.objdata.so2Iaqi, "no2"),
            on: {
              click: function ($event) {
                return _vm.changeTab("no2", "NO2", "no2Iaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.so2,
                  _vm.objdata.so2Iaqi,
                  "no2"
                ),
              },
              [_c("span", [_vm._v("NO2")]), _c("span", [_vm._v("ug/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0 ? _vm.objdata.no2 : _vm.objdata.no2Iaqi
                )
              ),
            ]),
          ]
        ),
        _c(
          "div",
          {
            style: _vm.getColor(_vm.objdata.co, _vm.objdata.coIaqi, "co"),
            on: {
              click: function ($event) {
                return _vm.changeTab("co", "CO", "coIaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.co,
                  _vm.objdata.coIaqi,
                  "co"
                ),
              },
              [_c("span", [_vm._v("CO")]), _c("span", [_vm._v("mg/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0 ? _vm.objdata.co : _vm.objdata.coIaqi
                )
              ),
            ]),
          ]
        ),
        _c(
          "div",
          {
            style: _vm.getColor(
              _vm.objdata.ozone,
              _vm.objdata.ozoneIaqi,
              "ozone"
            ),
            on: {
              click: function ($event) {
                return _vm.changeTab("ozone", "O3", "ozoneIaqi")
              },
            },
          },
          [
            _c(
              "span",
              {
                style: _vm.getSpanColor(
                  _vm.objdata.ozone,
                  _vm.objdata.ozoneIaqi,
                  "ozone"
                ),
              },
              [_c("span", [_vm._v("O3")]), _c("span", [_vm._v("ug/m³")])]
            ),
            _c("span", [
              _vm._v(
                _vm._s(
                  _vm.queryFlag === 0
                    ? _vm.objdata.ozone
                    : _vm.objdata.ozoneIaqi
                )
              ),
            ]),
          ]
        ),
      ]),
    ]),
    _c(
      "div",
      {
        staticClass: "company-info",
        staticStyle: { margin: "6px 10px 0px", background: "#fff" },
      },
      [
        _c("div", {
          ref: "hourRef",
          staticStyle: { height: "200px", width: "94%", margin: "5px auto" },
        }),
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.tabIndex == 2,
              expression: "tabIndex==2",
            },
          ],
          ref: "dayLjRef",
          staticStyle: { height: "200px", width: "89vw", margin: "5px auto" },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".hourData[data-v-76ccab1e] {\n  display: flex;\n  padding: 0px 10px;\n  flex-wrap: wrap;\n}\n.hourData div[data-v-76ccab1e] {\n  padding: 5px 0px;\n  height: 32px;\n  border-radius: 4px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  width: calc(34% - 6px);\n  display: flex;\n  justify-content: space-between;\n}\n.hourData div > span[data-v-76ccab1e] {\n  font-size: 10px;\n  line-height: 15px;\n  text-align: left;\n  vertical-align: top;\n}\n.hourData div > span[data-v-76ccab1e]:first-child {\n  margin-left: 9px;\n}\n.hourData div > span:first-child > span[data-v-76ccab1e] {\n  display: block;\n  margin-right: 10px;\n}\n.hourData div > span:first-child > span[data-v-76ccab1e]:first-child {\n  margin: 2px 0px;\n}\n.hourData div > span[data-v-76ccab1e]:last-child {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 32px;\n  text-align: left;\n  vertical-align: top;\n  margin: 0px 10px;\n}\n.hourData div[data-v-76ccab1e]:last-child {\n  margin-right: 0;\n}\n.fourwidth > div[data-v-76ccab1e] {\n  width: calc(27% - 6px);\n}\n.fourwidth > div > span[data-v-76ccab1e]:first-child {\n  margin: 0px 4px;\n}\n.fourwidth > div > span:last-child > span[data-v-76ccab1e] {\n  margin-right: 6px;\n}\n.tab-wrapper[data-v-76ccab1e] {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  background: #fff;\n  padding: 0px 0px 10px;\n}\n.tab-wrapper .tab-item[data-v-76ccab1e] {\n  width: 30%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-76ccab1e] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n\n/*.hour_white_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(204, 204, 204, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_green_bg {*/\n/*  background: rgba(4, 199, 4, 0.05);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(4, 199, 4, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_yellow_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 191, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 191, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_orange_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 126, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 126, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_red_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 0, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_deepred_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(153, 0, 76, 1);*/\n/*    }*/\n/*  }*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("41f2166a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/pollution-tab-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/pollution-tab-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAQCAYAAACycufIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVEiJ3ZTRacRADETfaNekgOvheshfwlWVj4ATDNeUA5c20sMVEIitfKwVu4A7TDSw7EqsBg0SIzY4vfojzsGYzCcqokoUoLqoQGWaK1YKLDFzu90K2sSy9mf2StRKBby958ixcin+a8lp5WPhi/rg803cjiF/G4eu15+w3o/8cAT49+IA5M9GXjyt4iYOOzZyF6ziPJe4ceh6Azi9eCphgTa5h1xTAy6wXctMkH9CiEtoJhDikpkJmddyHLoLgGV1SgDL6pSQcS0XpwQwvrnu2cs9YR9nXal87d3ITeD+Pg5dH+EvPNFNNRNXy44AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/airHomePage/components/hourAirQuality.vue":
/*!*************************************************************!*\
  !*** ./src/views/airHomePage/components/hourAirQuality.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true& */ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true&");
/* harmony import */ var _hourAirQuality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourAirQuality.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& */ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hourAirQuality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76ccab1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/hourAirQuality.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./hourAirQuality.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=style&index=0&id=76ccab1e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_style_index_0_id_76ccab1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/hourAirQuality.vue?vue&type=template&id=76ccab1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourAirQuality_vue_vue_type_template_id_76ccab1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvaG91ckFpclF1YWxpdHkudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT84MWJjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT8zNTU3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT9mNWY1Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvaG91ckFpclF1YWxpdHkudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT9iYjBhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT9hZjAxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5LnZ1ZT9hYjRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSw0QkFEQTtBQUVBO0FBQ0Esa0JBREE7QUFFQSxvQ0FDQTtBQUhBLEtBRkEsQ0FNQTs7QUFOQSxHQUZBO0FBVUEsTUFWQSxrQkFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQTtBQUVBLHVCQUZBO0FBR0EsY0FIQTtBQUlBLGtCQUpBO0FBS0EsMkJBTEE7QUFNQSxpQkFOQTtBQU9BLG9CQVBBO0FBUUEsd0JBUkE7QUFTQSxrQkFUQTtBQVVBLGdCQVZBO0FBV0E7QUFDQTtBQURBLE9BWEE7QUFjQSxtQkFkQTtBQWVBLHFCQWZBO0FBZ0JBO0FBaEJBO0FBa0JBLEdBN0JBO0FBOEJBO0FBQ0EsYUFEQSxxQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0E5QkE7QUFtQ0EsU0FuQ0EscUJBbUNBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQSxHQS9DQTtBQWdEQTtBQUNBLGNBREEsc0JBQ0EsS0FEQSxFQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0Esa0NBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTs7QUFDQTtBQUNBLEtBakJBO0FBa0JBLGFBbEJBLHFCQWtCQSxHQWxCQSxFQWtCQSxLQWxCQSxFQWtCQSxJQWxCQSxFQWtCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1Q0E7QUE2Q0EsU0E3Q0EsaUJBNkNBLEtBN0NBLEVBNkNBO0FBQ0EsK0RBREEsQ0FDQTtBQUNBLEtBL0NBO0FBZ0RBLFlBaERBLG9CQWdEQSxLQWhEQSxFQWdEQSxPQWhEQSxFQWdEQSxNQWhEQSxFQWdEQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBMURBO0FBMkRBLGdCQTNEQSx3QkEyREEsS0EzREEsRUEyREEsT0EzREEsRUEyREEsTUEzREEsRUEyREE7QUFDQTtBQUNBO0FBQ0EsS0E5REE7QUErREEscUJBL0RBLDZCQStEQSxNQS9EQSxFQStEQSxLQS9EQSxFQStEQTtBQUNBO0FBQ0EsS0FqRUE7QUFrRUEsZUFsRUEseUJBa0VBO0FBQUE7O0FBQ0E7QUFDQSxtTEFEQTtBQUVBLDJCQUZBO0FBR0EsK0JBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBUEE7QUFRQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEE7QUFJQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsU0EvQkEsQ0FnQ0E7QUFDQTtBQUNBOztBQUNBLE9BbkNBO0FBb0NBLEtBN0dBO0FBOEdBLGFBOUdBLHFCQThHQSxhQTlHQSxFQThHQSxJQTlHQSxFQThHQSxJQTlHQSxFQThHQTtBQUNBO0FBQ0Esd0NBREE7QUFFQTtBQUNBLHdCQURBO0FBRUEsNERBRkE7QUFHQTtBQUNBLDBDQURBO0FBRUE7QUFGQTtBQUhBLFNBRkE7QUFVQTtBQUNBO0FBREEsU0FWQTtBQWFBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFKQSxTQWJBO0FBbUJBO0FBQ0EseUJBREE7QUFFQTtBQUNBO0FBQ0EseUJBRkE7QUFHQTtBQUNBO0FBREE7QUFIQSxXQUZBO0FBU0E7QUFUQSxTQW5CQTtBQThCQTtBQUNBLDBCQURBO0FBRUE7QUFDQTtBQURBLFdBRkE7QUFLQTtBQUNBO0FBREEsV0FMQTtBQVFBO0FBQ0EsNEJBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsV0FSQTtBQWFBLDRCQWJBO0FBY0E7QUFkQSxTQTlCQTtBQThDQTtBQUNBLHVCQURBO0FBRUEsaUZBRkE7QUFHQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBO0FBREEsV0FIQTtBQVNBO0FBQ0EsNEJBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEE7QUFUQSxTQTlDQTtBQTZEQTtBQUNBLG9CQURBO0FBRUEsc0JBRkE7QUFHQSwyQkFIQTtBQUlBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkEsZUFJQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxhQUpBO0FBREEsV0FKQTtBQWVBO0FBQ0Esc0JBREE7QUFFQSx3QkFGQTtBQUdBLHdCQUhBO0FBSUEsOEJBSkE7QUFLQTtBQUxBLFdBZkE7QUFzQkE7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUF0QkE7QUE3REE7QUEwRkE7QUFDQSxLQTFNQTtBQTJNQSxlQTNNQSx1QkEyTUEsYUEzTUEsRUEyTUEsSUEzTUEsRUEyTUEsSUEzTUEsRUEyTUE7QUFDQTtBQUNBLHdDQURBO0FBRUE7QUFDQSx3QkFEQTtBQUVBLCtDQUZBO0FBR0E7QUFDQSwwQ0FEQTtBQUVBO0FBRkE7QUFIQSxTQUZBO0FBVUE7QUFDQTtBQURBLFNBVkE7QUFhQTtBQUNBLG9CQURBO0FBRUEsb0JBRkE7QUFHQSxxQkFIQTtBQUlBO0FBSkEsU0FiQTtBQW1CQTtBQUNBLHlCQURBO0FBRUE7QUFDQTtBQUNBLHlCQUZBO0FBR0E7QUFDQTtBQURBO0FBSEEsV0FGQTtBQVNBO0FBVEEsU0FuQkE7QUE4QkE7QUFDQSwwQkFEQTtBQUVBO0FBQ0E7QUFEQSxXQUZBO0FBS0E7QUFDQTtBQURBLFdBTEE7QUFRQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7QUFHQTtBQUhBLFdBUkE7QUFhQSw0QkFiQTtBQWNBO0FBZEEsU0E5QkE7QUE4Q0E7QUFDQSx1QkFEQTtBQUVBLGlGQUZBO0FBR0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQTtBQURBLFdBSEE7QUFTQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7QUFHQTtBQUhBO0FBVEEsU0E5Q0E7QUE2REE7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0EsMkJBSEE7QUFJQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBLGVBSUE7QUFDQSx1QkFEQTtBQUVBO0FBRkEsYUFKQTtBQURBLFdBSkE7QUFlQTtBQUNBLHNCQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLDhCQUpBO0FBS0E7QUFMQSxXQWZBO0FBc0JBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBdEJBO0FBN0RBO0FBeUZBLDRDQTFGQSxDQTJGQTtBQUNBO0FBdlNBO0FBaERBLEc7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkJBQTZCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QyxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBNkM7QUFDbkUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBb0Q7QUFDNUUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0IscURBQXFEO0FBQzdFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyUkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkcsc0NBQXNDLG1CQUFPLENBQUMsb0hBQTREO0FBQzFHLG9DQUFvQyxtQkFBTyxDQUFDLHdFQUErQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0JBQStCLGtCQUFrQixzQkFBc0Isb0JBQW9CLEdBQUcsa0NBQWtDLHFCQUFxQixpQkFBaUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsMkJBQTJCLGtCQUFrQixtQ0FBbUMsR0FBRyx5Q0FBeUMsb0JBQW9CLHNCQUFzQixxQkFBcUIsd0JBQXdCLEdBQUcscURBQXFELHFCQUFxQixHQUFHLDREQUE0RCxtQkFBbUIsdUJBQXVCLEdBQUcsd0VBQXdFLG9CQUFvQixHQUFHLG9EQUFvRCxvQkFBb0IscUJBQXFCLHdCQUF3QixzQkFBc0IscUJBQXFCLHdCQUF3QixxQkFBcUIsR0FBRyw2Q0FBNkMsb0JBQW9CLEdBQUcscUNBQXFDLDJCQUEyQixHQUFHLHdEQUF3RCxvQkFBb0IsR0FBRyw4REFBOEQsc0JBQXNCLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0IsbUJBQW1CLHFCQUFxQiwwQkFBMEIsR0FBRywyQ0FBMkMsZUFBZSx1QkFBdUIsaUNBQWlDLG9CQUFvQixHQUFHLHlDQUF5QyxpQ0FBaUMsc0JBQXNCLDBFQUEwRSx1Q0FBdUMsOEJBQThCLEdBQUcsc0JBQXNCLHFHQUFxRyxnQkFBZ0Isd0JBQXdCLDBDQUEwQyxXQUFXLFNBQVMsT0FBTyxzQkFBc0IsMENBQTBDLGdCQUFnQix3QkFBd0Isc0NBQXNDLFdBQVcsU0FBUyxPQUFPLHVCQUF1Qix1R0FBdUcsZ0JBQWdCLHdCQUF3Qix3Q0FBd0MsV0FBVyxTQUFTLE9BQU8sdUJBQXVCLHVHQUF1RyxnQkFBZ0Isd0JBQXdCLHdDQUF3QyxXQUFXLFNBQVMsT0FBTyxvQkFBb0IscUdBQXFHLGdCQUFnQix3QkFBd0Isc0NBQXNDLFdBQVcsU0FBUyxPQUFPLHdCQUF3QixxR0FBcUcsZ0JBQWdCLHdCQUF3Qix1Q0FBdUMsV0FBVyxTQUFTLE9BQU87QUFDaGlHO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDIwQkFBa2U7QUFDeGY7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZixpQ0FBaUMsZ2I7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUduRztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtVCxDQUFnQiwrVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2VTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8yMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJbJ3RhYi1pdGVtJywgaXRlbS52YWw9PT10YWJJbmRleD8nYWN0aXZlJzonJ11cIlxyXG4gICAgICAgICAgIEBjbGljaz1cImNoYW5nZVR5cGUoaXRlbS52YWwpXCI+e3tpdGVtLm5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImhvdXJib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhvdXJEYXRhIGZvdXJ3aWR0aFwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogY2FsYygyMCUgLSA2cHgpO1wiIEBjbGljaz1cImNoYW5nZVRhYignYXFpJywnQVFJJywnYXFpJylcIlxyXG4gICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Q29sb3Iob2JqZGF0YS5hcWksb2JqZGF0YS5hcWksJ2FxaScpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqZGF0YS5hcWksb2JqZGF0YS5hcWksJ2FxaScpXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDZweDtcIj5BUUk8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57e29iamRhdGEuYXFpfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3BtMjUnLCdQTTIuNScsJ3BtMjVJYXFpJylcIlxyXG4gICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Q29sb3Iob2JqZGF0YS5wbTI1LG9iamRhdGEucG0yNUlhcWksJ3BtMjUnKVwiPlxyXG4gICAgICAgICAgPHNwYW4gOnN0eWxlPVwiZ2V0U3BhbkNvbG9yKG9iamRhdGEucG0yNSxvYmpkYXRhLnBtMjVJYXFpLCdwbTI1JylcIj5cclxuICAgICAgICAgICAgPHNwYW4+UE0yLjU8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3txdWVyeUZsYWc9PT0wP29iamRhdGEucG0yNTpvYmpkYXRhLnBtMjVJYXFpfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3BtMTAnLCdQTTEwJywncG0xMElhcWknKVwiXHJcbiAgICAgICAgICAgICA6c3R5bGU9XCJnZXRDb2xvcihvYmpkYXRhLnBtMTAsb2JqZGF0YS5wbTEwSWFxaSwncG0xMCcpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqZGF0YS5wbTEwLG9iamRhdGEucG0xMElhcWksJ3BtMTAnKVwiPjxzcGFuPlBNMTA8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnt7cXVlcnlGbGFnPT09MD9vYmpkYXRhLnBtMTA6b2JqZGF0YS5wbTEwSWFxaX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwiY2hhbmdlVGFiKCdzbzInLCdTTzInLCdzbzJJYXFpJylcIlxyXG4gICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Q29sb3Iob2JqZGF0YS5zbzIsb2JqZGF0YS5zbzJJYXFpLCdzbzInKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gOnN0eWxlPVwiZ2V0U3BhbkNvbG9yKG9iamRhdGEuc28yLG9iamRhdGEuc28ySWFxaSwnc28yJylcIj48c3Bhbj5TTzI8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnt7cXVlcnlGbGFnPT09MD9vYmpkYXRhLnNvMjpvYmpkYXRhLnNvMklhcWl9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJob3VyRGF0YVwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwiY2hhbmdlVGFiKCdubzInLCdOTzInLCdubzJJYXFpJylcIlxyXG4gICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Q29sb3Iob2JqZGF0YS5zbzIsb2JqZGF0YS5zbzJJYXFpLCdubzInKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gOnN0eWxlPVwiZ2V0U3BhbkNvbG9yKG9iamRhdGEuc28yLG9iamRhdGEuc28ySWFxaSwnbm8yJylcIj48c3Bhbj5OTzI8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnt7cXVlcnlGbGFnPT09MD9vYmpkYXRhLm5vMjpvYmpkYXRhLm5vMklhcWl9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IEBjbGljaz1cImNoYW5nZVRhYignY28nLCdDTycsJ2NvSWFxaScpXCJcclxuICAgICAgICAgICAgIDpzdHlsZT1cImdldENvbG9yKG9iamRhdGEuY28sb2JqZGF0YS5jb0lhcWksJ2NvJylcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIDpzdHlsZT1cImdldFNwYW5Db2xvcihvYmpkYXRhLmNvLG9iamRhdGEuY29JYXFpLCdjbycpXCI+PHNwYW4+Q088L3NwYW4+PHNwYW4+bWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnt7cXVlcnlGbGFnPT09MD9vYmpkYXRhLmNvOm9iamRhdGEuY29JYXFpfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ296b25lJywnTzMnLCdvem9uZUlhcWknKVwiXHJcbiAgICAgICAgICAgICA6c3R5bGU9XCJnZXRDb2xvcihvYmpkYXRhLm96b25lLG9iamRhdGEub3pvbmVJYXFpLCdvem9uZScpXCI+XHJcbiAgICAgICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqZGF0YS5vem9uZSxvYmpkYXRhLm96b25lSWFxaSwnb3pvbmUnKVwiPjxzcGFuPk8zPC9zcGFuPjxzcGFuPnVnL23Cszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57e3F1ZXJ5RmxhZz09PTA/b2JqZGF0YS5vem9uZTpvYmpkYXRhLm96b25lSWFxaX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4O2JhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgPGRpdiByZWY9XCJob3VyUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjk0JTttYXJnaW46IDVweCBhdXRvXCIvPlxyXG4gICAgICA8ZGl2IHJlZj1cImRheUxqUmVmXCIgdi1zaG93PVwidGFiSW5kZXg9PTJcIiBzdHlsZT1cImhlaWdodDogMjAwcHg7d2lkdGg6ODl2dzttYXJnaW46IDVweCBhdXRvXCIvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbiAgaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG4gIGltcG9ydCB7XHJcbiAgICBhaXJDaXR5RGF0YVxyXG4gIH0gZnJvbSBcIkAvYXBpL2Fpcl9xdWFsaXR5XCI7XHJcblxyXG4gIGltcG9ydCB7Z2V0VGhpc0RhdGUsIGZvcm1hdERhdGV9IGZyb20gJ0AvdXRpbHMvc2V0ZGF0ZSc7XHJcbiAgaW1wb3J0IHtnZXRNYXJrfSBmcm9tICdAL3V0aWxzL2FpclV0aWxzJztcclxuICBpbXBvcnQge2dldENhbGVuZGVyQmdDb2xvcn0gZnJvbSAnQC91dGlscy9haXJVdGlscy5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJob3VyQWlyUXVhbGl0eVwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGV0YWlsc1BhcmFtZXRlcjogU3RyaW5nLFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJBcnI6IFt7bmFtZTogJ+Wwj+aXtuaVsOaNricsIHZhbDogMX0sIHtuYW1lOiAn5pel5pWw5o2uJywgdmFsOiAyfV0sXHJcbiAgICAgICAgY29sdW1uczogWyflsI/ml7bmlbDmja4nXSxcclxuICAgICAgICB4enFoOiAnJyxcclxuICAgICAgICB0eXBlOiAn5bCP5pe25pWw5o2uJyxcclxuICAgICAgICBlbmRUaW1lOiAnMjAyMy0wMi0wMScsXHJcbiAgICAgICAgdGFiSW5kZXg6IDEsXHJcbiAgICAgICAgdGFibmFtZTogJ2FxaScsXHJcbiAgICAgICAgdGFiSWFxaU5hbWU6ICdhcWknLFxyXG4gICAgICAgIHRpdGxlOiAnQVFJJyxcclxuICAgICAgICBvcHRpb246IHt9LFxyXG4gICAgICAgIG9iamRhdGE6IHtcclxuICAgICAgICAgIHBtMjU6ICcxMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFydGRhdGE6IFtdLFxyXG4gICAgICAgIGNoYXJ0TGpkYXRhOiBbXSxcclxuICAgICAgICB0aW1ldHlwZTogXCIyNOWwj+aXtlwiLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgcXVlcnlGbGFnKG5ld0QpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVR5cGUodGhpcy50YWJJbmRleClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbHNQYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuaG91clJlZikge1xyXG4gICAgICAgIHRoaXMuaG91clJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmhvdXJSZWYpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgLy8gdGhpcy5pbml0Q2hhcnQodGhpcy5ob3VyUmVmKVxyXG4gICAgICAgICAgdGhpcy5nZXREYXRhTGluZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2hhbmdlVHlwZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgdGhpcy50aW1ldHlwZSA9IFwiMjTlsI/ml7ZcIjtcclxuICAgICAgICAgIHRoaXMub3B0aW9uLnRpdGxlLnRleHQgPSAn6L+H5Y67MjTlsI/ml7YnICsgdGhpcy50aXRsZSArICfmlbDmja7lj5jljJbotovlir8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRpbWV0eXBlID0gXCI35aSpXCI7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbi50aXRsZS50ZXh0ID0gJ+i/h+WOuzflpKknICsgdGhpcy50aXRsZSArICfmlbDmja7lj5jljJbotovlir8nO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmRheUxqUmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF5TGpSZWYgPSBlY2hhcnRzLmluaXQodGhpcy4kcmVmcy5kYXlMalJlZik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHRoaXMuaW5pdENoYXJ0TGoodGhpcy5kYXlMalJlZilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXREYXRhTGluZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VUYWIodmFsLCB0aXRsZSwgaWFxaSkge1xyXG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSB0aGlzLnF1ZXJ5RmxhZyA9PT0gMCA/IHZhbCA6IGlhcWk7XHJcbiAgICAgICAgdGhpcy50YWJuYW1lID0gdGVtcFZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFiSWFxaU5hbWUgPSBpYXFpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBsZXQgc0FyciA9IFtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnRpdGxlLnRleHQgPSAn6L+H5Y67JyArIHRoaXMudGltZXR5cGUgKyB0aXRsZSArICfmlbDmja7lj5jljJbotovlir8nO1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnlBeGlzLm5hbWUgPSB0aGlzLnRpdGxlID09ICdBUUknID8gJycgOiB0aGlzLnRpdGxlID09ICdDTycgPyAnbWcvbcKzJyA6ICd1Zy9twrMnO1xyXG4gICAgICAgIHRoaXMuY2hhcnRkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBzQXJyLnB1c2goaXRlbVt0aGlzLnRhYm5hbWVdKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnNlcmllc1swXS5tYXJrTGluZS5kYXRhID0gZ2V0TWFyayh0aGlzLnRpdGxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3VyUmVmLnNldE9wdGlvbih0aGlzLm9wdGlvbilcclxuICAgICAgICBpZiAodGhpcy50YWJJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICBsZXQgc0FycjIgPSBbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9uMi50aXRsZS50ZXh0ID0gJ+acrOaXpScgKyB0aXRsZSArICfml6XntK/orqHmlbDmja7lj5jljJbotovlir8nO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb24yLnlBeGlzLm5hbWUgPSB0aGlzLnRpdGxlID09ICdBUUknID8gJycgOiB0aGlzLnRpdGxlID09ICdDTycgPyAnbWcvbcKzJyA6ICd1Zy9twrMnO1xyXG4gICAgICAgICAgdGhpcy5jaGFydExqZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzQXJyMi5wdXNoKGl0ZW1bdGhpcy50YWJuYW1lXSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbjIuc2VyaWVzWzBdLmRhdGEgPSBzQXJyMjtcclxuICAgICAgICAgIHRoaXMub3B0aW9uMi5zZXJpZXNbMF0ubWFya0xpbmUuZGF0YSA9IGdldE1hcmsodGhpcy50aXRsZSk7XHJcbiAgICAgICAgICB0aGlzLmRheUxqUmVmLnNldE9wdGlvbih0aGlzLm9wdGlvbjIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL+eItue6p+WFg+e0oOmakOiXj1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRDb2xvcih2YWx1ZSwga2V5SWFxaSwgZmFjdG9yKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucXVlcnlGbGFnID09PSAwID8gdmFsdWUgOiBrZXlJYXFpO1xyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG4gICAgICAgIGxldCBiZyA9IHRoaXMudGFibmFtZSA9PT0gZmFjdG9yfHx0aGlzLnRhYm5hbWUgPT09IGZhY3RvcisnSWFxaScgPyAnYmFja2dyb3VuZC1jb2xvcjogIzNmN2JmZjtjb2xvcjojZmZmJyA6ICcnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJyd8fHZhbHVlID09PSAnLScpIHtcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vbkNhbGVuZGVyQmdDb2xvcihmYWN0b3IsIGtleSkgKyAnOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vbkNhbGVuZGVyQmdDb2xvcihmYWN0b3IsIGtleSkgKyAnOyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHlsZSArIGJnO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTcGFuQ29sb3IodmFsdWUsIGtleUlhcWksIGZhY3Rvcil7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy50YWJuYW1lICE9PSBmYWN0b3ImJnRoaXMudGFibmFtZSAhPT0gZmFjdG9yKydJYXFpJyA/ICdjb2xvcjpyZ2JhKDM3LCA1NywgMTExLCAwLjUpJyA6ICcnO1xyXG4gICAgICAgIHJldHVybiBjb2xvclxyXG4gICAgICB9LFxyXG4gICAgICBvbkNhbGVuZGVyQmdDb2xvcih5ek5hbWUsIGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGdldENhbGVuZGVyQmdDb2xvcih5ek5hbWUsIGNvdW50KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXREYXRhTGluZSgpIHtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGRhdGVUaW1lOiB0aGlzLnRhYkluZGV4ID09IDEgPyBnZXRUaGlzRGF0ZSgxKSA6IGdldFRoaXNEYXRlKCksXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRhYkluZGV4LFxyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsXHJcbiAgICAgICAgICBhcWk6IHRoaXMucXVlcnlGbGFnID09PSAwID8gJycgOiAnaWFxaScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFpckNpdHlEYXRhKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMub2JqZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGFiSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0ZGF0YSA9IHJlcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0ZGF0YSA9IHJlcy5kYXRhLmxpc3RTZXZlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2hhcnRMamRhdGEgPSByZXMuZGF0YS5saXN0RGF5O1xyXG5cclxuICAgICAgICAgIGxldCB4QXJyID0gW10sIHNBcnIgPSBbXTtcclxuICAgICAgICAgIGxldCBsanhBcnIgPSBbXTtcclxuICAgICAgICAgIGxldCBsanNBcnIgPSBbXTtcclxuICAgICAgICAgIGlmICh0aGlzLmNoYXJ0ZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnRkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGFiSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgeEFyci5wdXNoKGl0ZW0ubW9uaXRvcmluZ1RpbWUuc3Vic3RyKDgsIDUpICsgJ+aXticpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB4QXJyLnB1c2goaXRlbS5tb25pdG9yaW5nVGltZS5zdWJzdHIoNSwgNSkgKyAn5pelJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNBcnIucHVzaChpdGVtW3RoaXMudGFibmFtZV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGFydExqZGF0YSAmJiB0aGlzLmNoYXJ0TGpkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFydExqZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGxqeEFyci5wdXNoKGl0ZW0ubW9uaXRvcmluZ1RpbWUuc3Vic3RyKDgsIDUpICsgXCLml7ZcIik7XHJcbiAgICAgICAgICAgICAgbGpzQXJyLnB1c2goaXRlbVt0aGlzLnRhYm5hbWVdKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5ob3VyUmVmLCB4QXJyLCBzQXJyKTtcclxuICAgICAgICAgIGlmICh0aGlzLnRhYkluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnRMaih0aGlzLmRheUxqUmVmLCBsanhBcnIsIGxqc0Fycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0aGlzLm9wdGlvbi54QXhpcy5kYXRhID0geEFycjtcclxuICAgICAgICAgIC8vIHRoaXMub3B0aW9uLnNlcmllc1swXS5kYXRhID0gc0FycjtcclxuICAgICAgICAgIC8vIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKHRoaXMub3B0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlLCB4QXJyLCBzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24gPSB7XHJcbiAgICAgICAgICBjb2xvcjogWydyZ2JhKDgyLCAxMTMsIDI1NSwgMSknXSxcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAn6L+H5Y67JyArIHRoaXMudGltZXR5cGUgKyB0aGlzLnRpdGxlICsgJ+aVsOaNruWPmOWMlui2i+WKvycsXHJcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSg4MiwgMTEzLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHRvcDogJzE1JScsXHJcbiAgICAgICAgICAgIGxlZnQ6ICc4JScsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxyXG4gICAgICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICAgIC8vIHR5cGUgOiAnc2hhZG93JyxcclxuICAgICAgICAgICAgICB0eXBlOiAnY3Jvc3MnLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzY5YWI3ODAnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93Q29udGVudDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgYXhpc1RpY2s6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB4QXJyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy50aXRsZSA9PSAnQVFJJyA/ICcnIDogdGhpcy50aXRsZSA9PSAnQ08nID8gJ21nL23CsycgOiAndWcvbcKzJyxcclxuICAgICAgICAgICAgc3BsaXRMaW5lOiB7XHJcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjRTRFOUYyJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgIHJvdGF0ZTogMzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHNBcnIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgc2hvd1N5bWJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFyZWFTdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDEsIFt7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoNjgsIDEyMywgMjUyLCAwLjEpJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDY4LCAxMjMsIDI1MiwgMC4yKSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBbLTYsIDIwXSxcclxuICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICd7Y30nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcmtMaW5lOiB7XHJcbiAgICAgICAgICAgICAgc3ltYm9sOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgZGF0YTogZ2V0TWFyayh0aGlzLnRpdGxlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKHRoaXMub3B0aW9uKVxyXG4gICAgICB9LFxyXG4gICAgICBpbml0Q2hhcnRMaihjaGFydEluc3RhbmNlLCB4QXJyLCBzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24yID0ge1xyXG4gICAgICAgICAgY29sb3I6IFsncmdiYSg4MiwgMTEzLCAyNTUsIDEpJ10sXHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBsZWZ0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgdGV4dDogJ+acrOaXpScgKyB0aGlzLnRpdGxlICsgJ+aXpee0r+iuoeaVsOaNruWPmOWMlui2i+WKvycsXHJcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSg4MiwgMTEzLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHRvcDogJzE1JScsXHJcbiAgICAgICAgICAgIGxlZnQ6ICc4JScsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxyXG4gICAgICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICAgIC8vIHR5cGUgOiAnc2hhZG93JyxcclxuICAgICAgICAgICAgICB0eXBlOiAnY3Jvc3MnLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzY5YWI3ODAnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93Q29udGVudDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgYXhpc1RpY2s6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiB4QXJyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGUgPT0gJ0FRSScgPyAnJyA6IHRoaXMudGl0bGUgPT0gJ0NPJyA/ICdtZy9twrMnIDogJ3VnL23CsycsXHJcbiAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U0RTlGMidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICByb3RhdGU6IDMwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBzQXJyLFxyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIHNob3dTeW1ib2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcmVhU3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogbmV3IGVjaGFydHMuZ3JhcGhpYy5MaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAxLCBbe1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSg2OCwgMTIzLCAyNTIsIDAuMiknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogWy02LCAyMF0sXHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne2N9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXJrTGluZToge1xyXG4gICAgICAgICAgICAgIHN5bWJvbDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGdldE1hcmsodGhpcy50aXRsZSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24odGhpcy5vcHRpb24yKVxyXG4gICAgICAgIC8vIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKHRoaXMub3B0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuaG91cmJveCB7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhvdXJEYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMzQlIC0gNnB4KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgPnNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuXHJcbiAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmZvdXJ3aWR0aCB7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDI3JSAtIDZweCk7XHJcblxyXG4gICAgICA+IHNwYW4ge1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTBweDtcclxuXHJcbiAgICAudGFiLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9wb2xsdXRpb24tdGFiLWJnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKi5ob3VyX3doaXRlX2JnIHsqL1xyXG4gIC8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoNCwgMTk5LCA0LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgICY6bGFzdC1jaGlsZCB7Ki9cclxuICAvKiAgICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpOyovXHJcbiAgLyogICAgfSovXHJcbiAgLyogIH0qL1xyXG4gIC8qfSovXHJcblxyXG4gIC8qLmhvdXJfZ3JlZW5fYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IHJnYmEoNCwgMTk5LCA0LCAwLjA1KTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgICY6bGFzdC1jaGlsZCB7Ki9cclxuICAvKiAgICAgIGNvbG9yOiByZ2JhKDQsIDE5OSwgNCwgMSk7Ki9cclxuICAvKiAgICB9Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouaG91cl95ZWxsb3dfYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDE5MSwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cclxuXHJcbiAgLyogID4gc3BhbiB7Ki9cclxuICAvKiAgICAmOmxhc3QtY2hpbGQgeyovXHJcbiAgLyogICAgICBjb2xvcjogcmdiYSgyNTUsIDE5MSwgMCwgMSk7Ki9cclxuICAvKiAgICB9Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouaG91cl9vcmFuZ2VfYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cclxuXHJcbiAgLyogID4gc3BhbiB7Ki9cclxuICAvKiAgICAmOmxhc3QtY2hpbGQgeyovXHJcbiAgLyogICAgICBjb2xvcjogcmdiYSgyNTUsIDEyNiwgMCwgMSk7Ki9cclxuICAvKiAgICB9Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouaG91cl9yZWRfYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDAsIDAsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXHJcblxyXG4gIC8qICA+IHNwYW4geyovXHJcbiAgLyogICAgJjpsYXN0LWNoaWxkIHsqL1xyXG4gIC8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTsqL1xyXG4gIC8qICAgIH0qL1xyXG4gIC8qICB9Ki9cclxuICAvKn0qL1xyXG5cclxuICAvKi5ob3VyX2RlZXByZWRfYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXHJcblxyXG4gIC8qICA+IHNwYW4geyovXHJcbiAgLyogICAgJjpsYXN0LWNoaWxkIHsqL1xyXG4gIC8qICAgICAgY29sb3I6IHJnYmEoMTUzLCAwLCA3NiwgMSk7Ki9cclxuICAvKiAgICB9Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLXdyYXBwZXJcIiB9LFxuICAgICAgX3ZtLl9sKF92bS50YWJBcnIsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXCJ0YWItaXRlbVwiLCBpdGVtLnZhbCA9PT0gX3ZtLnRhYkluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCJdLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVR5cGUoaXRlbS52YWwpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSArIFwiIFwiKV1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvdXJib3hcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvdXJEYXRhIGZvdXJ3aWR0aFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJjYWxjKDIwJSAtIDZweClcIiB9LFxuICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0ub2JqZGF0YS5hcWksIF92bS5vYmpkYXRhLmFxaSwgXCJhcWlcIiksXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKFwiYXFpXCIsIFwiQVFJXCIsIFwiYXFpXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI2cHhcIiB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3BhbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEuYXFpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEuYXFpLFxuICAgICAgICAgICAgICAgICAgXCJhcWlcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJBUUlcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmpkYXRhLmFxaSkpXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iamRhdGEucG0yNSwgX3ZtLm9iamRhdGEucG0yNUlhcWksIFwicG0yNVwiKSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoXCJwbTI1XCIsIFwiUE0yLjVcIiwgXCJwbTI1SWFxaVwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3BhbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEucG0yNSxcbiAgICAgICAgICAgICAgICAgIF92bS5vYmpkYXRhLnBtMjVJYXFpLFxuICAgICAgICAgICAgICAgICAgXCJwbTI1XCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQTTIuNVwiKV0pLCBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0ucXVlcnlGbGFnID09PSAwID8gX3ZtLm9iamRhdGEucG0yNSA6IF92bS5vYmpkYXRhLnBtMjVJYXFpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iamRhdGEucG0xMCwgX3ZtLm9iamRhdGEucG0xMElhcWksIFwicG0xMFwiKSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoXCJwbTEwXCIsIFwiUE0xMFwiLCBcInBtMTBJYXFpXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRTcGFuQ29sb3IoXG4gICAgICAgICAgICAgICAgICBfdm0ub2JqZGF0YS5wbTEwLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEucG0xMElhcWksXG4gICAgICAgICAgICAgICAgICBcInBtMTBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlBNMTBcIildKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJ1Zy9twrNcIildKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5RmxhZyA9PT0gMCA/IF92bS5vYmpkYXRhLnBtMTAgOiBfdm0ub2JqZGF0YS5wbTEwSWFxaVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKF92bS5vYmpkYXRhLnNvMiwgX3ZtLm9iamRhdGEuc28ySWFxaSwgXCJzbzJcIiksXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKFwic28yXCIsIFwiU08yXCIsIFwic28ySWFxaVwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3BhbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEuc28yLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEuc28ySWFxaSxcbiAgICAgICAgICAgICAgICAgIFwic28yXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTTzJcIildKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJ1Zy9twrNcIildKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5RmxhZyA9PT0gMCA/IF92bS5vYmpkYXRhLnNvMiA6IF92bS5vYmpkYXRhLnNvMklhcWlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaG91ckRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0ub2JqZGF0YS5zbzIsIF92bS5vYmpkYXRhLnNvMklhcWksIFwibm8yXCIpLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihcIm5vMlwiLCBcIk5PMlwiLCBcIm5vMklhcWlcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldFNwYW5Db2xvcihcbiAgICAgICAgICAgICAgICAgIF92bS5vYmpkYXRhLnNvMixcbiAgICAgICAgICAgICAgICAgIF92bS5vYmpkYXRhLnNvMklhcWksXG4gICAgICAgICAgICAgICAgICBcIm5vMlwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiTk8yXCIpXSksIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidWcvbcKzXCIpXSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5xdWVyeUZsYWcgPT09IDAgPyBfdm0ub2JqZGF0YS5ubzIgOiBfdm0ub2JqZGF0YS5ubzJJYXFpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iamRhdGEuY28sIF92bS5vYmpkYXRhLmNvSWFxaSwgXCJjb1wiKSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoXCJjb1wiLCBcIkNPXCIsIFwiY29JYXFpXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRTcGFuQ29sb3IoXG4gICAgICAgICAgICAgICAgICBfdm0ub2JqZGF0YS5jbyxcbiAgICAgICAgICAgICAgICAgIF92bS5vYmpkYXRhLmNvSWFxaSxcbiAgICAgICAgICAgICAgICAgIFwiY29cIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkNPXCIpXSksIF9jKFwic3BhblwiLCBbX3ZtLl92KFwibWcvbcKzXCIpXSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5xdWVyeUZsYWcgPT09IDAgPyBfdm0ub2JqZGF0YS5jbyA6IF92bS5vYmpkYXRhLmNvSWFxaVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKFxuICAgICAgICAgICAgICBfdm0ub2JqZGF0YS5vem9uZSxcbiAgICAgICAgICAgICAgX3ZtLm9iamRhdGEub3pvbmVJYXFpLFxuICAgICAgICAgICAgICBcIm96b25lXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKFwib3pvbmVcIiwgXCJPM1wiLCBcIm96b25lSWFxaVwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3BhbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgX3ZtLm9iamRhdGEub3pvbmUsXG4gICAgICAgICAgICAgICAgICBfdm0ub2JqZGF0YS5vem9uZUlhcWksXG4gICAgICAgICAgICAgICAgICBcIm96b25lXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJPM1wiKV0pLCBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0ucXVlcnlGbGFnID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLm9iamRhdGEub3pvbmVcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0ub2JqZGF0YS5vem9uZUlhcWlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgcmVmOiBcImhvdXJSZWZcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiOTQlXCIsIG1hcmdpbjogXCI1cHggYXV0b1wiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJJbmRleCA9PSAyLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYkluZGV4PT0yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVmOiBcImRheUxqUmVmXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjg5dndcIiwgbWFyZ2luOiBcIjVweCBhdXRvXCIgfSxcbiAgICAgICAgfSksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG91ckRhdGFbZGF0YS12LTc2Y2NhYjFlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5ob3VyRGF0YSBkaXZbZGF0YS12LTc2Y2NhYjFlXSB7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB3aWR0aDogY2FsYygzNCUgLSA2cHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmhvdXJEYXRhIGRpdiA+IHNwYW5bZGF0YS12LTc2Y2NhYjFlXSB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uaG91ckRhdGEgZGl2ID4gc3BhbltkYXRhLXYtNzZjY2FiMWVdOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XFxufVxcbi5ob3VyRGF0YSBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkID4gc3BhbltkYXRhLXYtNzZjY2FiMWVdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uaG91ckRhdGEgZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCA+IHNwYW5bZGF0YS12LTc2Y2NhYjFlXTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW46IDJweCAwcHg7XFxufVxcbi5ob3VyRGF0YSBkaXYgPiBzcGFuW2RhdGEtdi03NmNjYWIxZV06bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uaG91ckRhdGEgZGl2W2RhdGEtdi03NmNjYWIxZV06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5mb3Vyd2lkdGggPiBkaXZbZGF0YS12LTc2Y2NhYjFlXSB7XFxuICB3aWR0aDogY2FsYygyNyUgLSA2cHgpO1xcbn1cXG4uZm91cndpZHRoID4gZGl2ID4gc3BhbltkYXRhLXYtNzZjY2FiMWVdOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMHB4IDRweDtcXG59XFxuLmZvdXJ3aWR0aCA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCA+IHNwYW5bZGF0YS12LTc2Y2NhYjFlXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuLnRhYi13cmFwcGVyW2RhdGEtdi03NmNjYWIxZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHg7XFxufVxcbi50YWItd3JhcHBlciAudGFiLWl0ZW1bZGF0YS12LTc2Y2NhYjFlXSB7XFxuICB3aWR0aDogMzAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTc2Y2NhYjFlXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xcbn1cXG5cXG4vKi5ob3VyX3doaXRlX2JnIHsqL1xcbi8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoNCwgMTk5LCA0LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xcbi8qICA+IHNwYW4geyovXFxuLyogICAgJjpsYXN0LWNoaWxkIHsqL1xcbi8qICAgICAgY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7Ki9cXG4vKiAgICB9Ki9cXG4vKiAgfSovXFxuLyp9Ki9cXG4vKi5ob3VyX2dyZWVuX2JnIHsqL1xcbi8qICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDE5OSwgNCwgMC4wNSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgICY6bGFzdC1jaGlsZCB7Ki9cXG4vKiAgICAgIGNvbG9yOiByZ2JhKDQsIDE5OSwgNCwgMSk7Ki9cXG4vKiAgICB9Ki9cXG4vKiAgfSovXFxuLyp9Ki9cXG4vKi5ob3VyX3llbGxvd19iZyB7Ki9cXG4vKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMTkxLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xcbi8qICA+IHNwYW4geyovXFxuLyogICAgJjpsYXN0LWNoaWxkIHsqL1xcbi8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAxOTEsIDAsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXFxuLyouaG91cl9vcmFuZ2VfYmcgeyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgICY6bGFzdC1jaGlsZCB7Ki9cXG4vKiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTI2LCAwLCAxKTsqL1xcbi8qICAgIH0qL1xcbi8qICB9Ki9cXG4vKn0qL1xcbi8qLmhvdXJfcmVkX2JnIHsqL1xcbi8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjU1LCAwLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xcbi8qICA+IHNwYW4geyovXFxuLyogICAgJjpsYXN0LWNoaWxkIHsqL1xcbi8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTsqL1xcbi8qICAgIH0qL1xcbi8qICB9Ki9cXG4vKn0qL1xcbi8qLmhvdXJfZGVlcHJlZF9iZyB7Ki9cXG4vKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDQsIDE5OSwgNCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgICY6bGFzdC1jaGlsZCB7Ki9cXG4vKiAgICAgIGNvbG9yOiByZ2JhKDE1MywgMCwgNzYsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NmNjYWIxZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQxZjIxNjZhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG91ckFpclF1YWxpdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzZjY2FiMWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NmNjYWIxZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQVFDQVlBQUFDeWN1ZklBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEblNVUkJWRWlKM1pUUmFjUkFERVRmYU5la2dPdmhlc2hmd2xXVmo0QVRETmVVQTVjMjBzTVZFSWl0Zkt3VnU0QTdURFN3N0Vxc0JnMFNJelk0dmZvanpzR1l6Q2Nxb2tvVW9McW9RR1dhSzFZS0xERnp1OTBLMnNTeTltZjJTdFJLQmJ5OTU4aXhjaW4rYThscDVXUGhpL3JnODAzY2ppRi9HNGV1MTUrdzNvLzhjQVQ0OStJQTVNOUdYanl0NGlZT096WnlGNnppUEplNGNlaDZBemk5ZUNwaGdUYTVoMXhUQXk2d1hjdE1rSDlDaUV0b0poRGlrcGtKbWRkeUhMb0xnR1YxU2dETDZwU1FjUzBYcHdRd3ZybnUyY3M5WVI5blhhbDg3ZDNJVGVEK1BnNWRIK0V2UE5GTk5STlh5NDRBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzZjY2FiMWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG91ckFpclF1YWxpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaG91ckFpclF1YWxpdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzZjY2FiMWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NmNjYWIxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NmNjYWIxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NmNjYWIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NmNjYWIxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaG91ckFpclF1YWxpdHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2Y2NhYjFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2Y2NhYjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9ob3VyQWlyUXVhbGl0eS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvdXJBaXJRdWFsaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyQWlyUXVhbGl0eS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NmNjYWIxZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvdXJBaXJRdWFsaXR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NmNjYWIxZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=