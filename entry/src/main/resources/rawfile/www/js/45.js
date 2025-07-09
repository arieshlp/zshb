(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
//
//
//
//
//
//
//
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
  name: "airPollution",
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      xzqh: '',
      objInfo: {}
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var info = {
        divisionName: this.xzqh
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["gasPollutionStat"])(info).then(function (res) {
        _this.objInfo = res.data;
      });
    },
    goPage: function goPage(page) {
      this.$router.push({
        path: '/onlineCompanyList',
        query: {
          xzqh: this.xzqh,
          title: page
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_airHomePage_components_echarts_annualEchart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/airHomePage/components/echarts/annualEchart */ "./src/views/airHomePage/components/echarts/annualEchart.vue");

//
//
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
  name: "airQualityAnnual",
  props: {
    detailsParameter: String,
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  components: {
    annualEchart: _views_airHomePage_components_echarts_annualEchart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      xzqh: '昆明市',
      endPop: false,
      endTime: '2023-02',
      factorArr: ['AQI', 'PM2.5'],
      factor: 'AQI',
      factorPop: false
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "airQualityRank",
  props: {
    detailsParameter: String,
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  watch: {
    queryFlag: function queryFlag(newD) {
      this.loadData(this.indx);
    }
  },
  data: function data() {
    return {
      xzqh: '',
      indx: 1,
      rankList: []
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.loadData(1);
  },
  methods: {
    onConfirmFactor: function onConfirmFactor(obj) {
      this.showfactor = obj.text;
      this.factor = obj.val;
      this.factorPop = false; // this.loadData();
    },
    loadData: function loadData(num) {
      var _this = this;

      this.indx = num;
      var info = {
        type: num,
        divisionName: this.xzqh,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_1__["airQualityRanking"])(info).then(function (res) {
        if (res.code == 200) {
          _this.rankList = res.data;
        }
      });
    },
    goPage: function goPage() {
      this.$router.push({
        name: 'airQualityRank',
        query: {
          xzqh: this.xzqh,
          queryFlag: this.queryFlag
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "airQualityTrend",
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      currentDate: new Date(),
      endPop: false,
      // endTime: formatDate(new Date(),'M'),
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD'),
      // factorArr: ['AQI','PM10','PM25','SO2','NO2','CO','OZONE'],
      factorArr: [{
        value: 'AQI',
        text: 'AQI'
      }, {
        value: 'PM25',
        text: 'PM2.5'
      }, {
        value: 'PM10',
        text: 'PM10'
      }, {
        value: 'SO2',
        text: 'SO2'
      }, {
        value: 'NO2',
        text: 'NO2'
      }, {
        value: 'CO',
        text: 'CO'
      }, {
        value: 'OZONE',
        text: 'O3'
      }],
      factor: 'AQI',
      valfactor: 'AQI',
      factorPop: false,
      xzqh: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.xzqh = this.$route.query.xzqh;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    if (!this.trendRef) {
      this.trendRef = echarts__WEBPACK_IMPORTED_MODULE_3__["init"](this.$refs.trendRef);
      setTimeout(function () {
        _this.initChart(_this.trendRef);
      });
    }
  },
  methods: {
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
      this.endPop = false;
      this.initChart(this.trendRef);
    },
    onConfirmFactor: function onConfirmFactor(val) {
      this.valfactor = val.text;
      this.factor = val.value;
      this.factorPop = false;
      this.initChart(this.trendRef);
    },
    close: function close(event) {
      event.currentTarget.parentElement.style.display = 'none'; //父级元素隐藏
    },
    initChart: function initChart(chartInstance) {
      var option = {
        color: ['rgba(68, 123, 252, 1)'],
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
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(18, 18, 54, 1)',
          textStyle: {
            color: '#fff'
          }
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
            margin: 10
          },
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          name: '',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#E4E9F2'
            }
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12
          }
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 23, 44],
          type: 'bar'
        }]
      };
      var info = {
        dateTime: this.endTime,
        type: this.factor,
        divisionName: this.xzqh
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_6__["airCityAssessTendency"])(info).then(function (res) {
        var rdata = res.data;
        var xArr = [],
            sArr = [];
        rdata.forEach(function (item) {
          // .substr(8,2)
          xArr.push(item.name + '日');
          sArr.push(item.value);
        });
        option.xAxis.data = xArr;
        option.series[0].data = sArr;
        chartInstance.setOption(option);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");


//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "annualEchart",
  props: {
    zdid: String,
    xzqh: String,
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  data: function data() {
    return {};
  },
  watch: {
    zdid: {
      handler: function handler() {
        var _this = this;

        setTimeout(function () {
          _this.initChart(_this.annualRef);
        });
      } // immediate: true

    },
    queryFlag: {
      handler: function handler() {
        var _this2 = this;

        setTimeout(function () {
          _this2.initChart(_this2.annualRef);
        });
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    if (!this.annualRef) {
      this.annualRef = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.$refs.annualRef);
      setTimeout(function () {
        _this3.initChart(_this3.annualRef);
      });
    }
  },
  methods: {
    initChart: function initChart(chartInstance) {
      var _this4 = this;

      var option = {
        color: ['rgba(68, 123, 252, 1)', 'rgba(67, 223, 247, 1)'],
        grid: {
          top: '28%',
          left: '13%',
          right: '10%',
          bottom: '15%'
        },
        legend: {
          // data: ['2022', '2023'],
          right: 0,
          top: 0,
          icon: 'square',
          itemWidth: 8,
          itemHeight: 8
        },
        xAxis: [{
          type: 'category',
          data: ['PM2.5', 'PM10', 'O3', 'SO2', 'NO2', 'CO'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            margin: 10,
            interval: 0
          }
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 100,
          // interval: 100,
          name: 'ug/m³(CO除外)',
          nameTextStyle: {
            color: '#B0B7C2',
            fontSize: 10
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12
          }
        }, {
          type: 'value',
          name: 'mg/m³(CO)',
          nameTextStyle: {
            color: '#B0B7C2',
            fontSize: 10
          },
          min: 0,
          max: 100,
          // interval: 5,
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12
          }
        }],
        series: [{
          name: '',
          type: 'bar',
          barWidth: 12,
          data: []
        }, {
          name: '',
          type: 'bar',
          yAxisIndex: 1,
          barWidth: 12,
          data: []
        }]
      };
      var functionName = null;
      var params = null;

      if (this.zdid != "") {
        functionName = _api_air_quality__WEBPACK_IMPORTED_MODULE_3__["airPollutantSiteYear"];
        params = {
          siteId: this.zdid
        };
      } else {
        functionName = _api_air_quality__WEBPACK_IMPORTED_MODULE_3__["airPollutantYear"];
        params = {
          divisionName: this.xzqh,
          aqi: this.queryFlag === 0 ? '' : 'iaqi'
        };
      }

      functionName(params).then(function (res) {
        var sArr1 = [],
            sArr0 = [];
        var now = res.data[0];

        if (res.data.length > 1) {
          var last = res.data[1]; //去年

          if (_this4.queryFlag === 0) {
            sArr0 = [last.pm25, last.pm10, last.ozone, last.so2, last.no2, last.co];
          } else {
            sArr0 = [last.pm25Iaqi, last.pm10Iaqi, last.ozoneIaqi, last.so2Iaqi, last.no2Iaqi, last.coIaqi];
          }

          option.series[0].name = last.monitoringTime;
          option.series[0].data = sArr0;
        }

        if (_this4.queryFlag === 0) {
          sArr1 = [now.pm25, now.pm10, now.ozone, now.so2, now.no2, now.co];
        } else {
          sArr1 = [now.pm25Iaqi, now.pm10Iaqi, now.ozoneIaqi, now.so2Iaqi, now.no2, now.coIaqi];
        }

        option.series[1].name = now.monitoringTime;
        option.series[1].data = sArr1;
        chartInstance.setOption(option);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_airHomePage_components_airQualityOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityOverview */ "./src/views/airHomePage/components/airQualityOverview.vue");
/* harmony import */ var _views_airHomePage_components_hourAirQuality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/airHomePage/components/hourAirQuality */ "./src/views/airHomePage/components/hourAirQuality.vue");
/* harmony import */ var _views_airHomePage_components_airQualityExamine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityExamine */ "./src/views/airHomePage/components/airQualityExamine.vue");
/* harmony import */ var _views_airHomePage_components_airQualityTrend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityTrend */ "./src/views/airHomePage/components/airQualityTrend.vue");
/* harmony import */ var _views_airHomePage_components_airQualityProportion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityProportion */ "./src/views/airHomePage/components/airQualityProportion.vue");
/* harmony import */ var _views_airHomePage_components_airQualityAnnual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityAnnual */ "./src/views/airHomePage/components/airQualityAnnual.vue");
/* harmony import */ var _views_airHomePage_components_airQualityRank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityRank */ "./src/views/airHomePage/components/airQualityRank.vue");
/* harmony import */ var _views_airHomePage_components_airPollution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/airHomePage/components/airPollution */ "./src/views/airHomePage/components/airPollution.vue");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'index',
  components: {
    hourAirQuality: _views_airHomePage_components_hourAirQuality__WEBPACK_IMPORTED_MODULE_1__["default"],
    airQualityOverview: _views_airHomePage_components_airQualityOverview__WEBPACK_IMPORTED_MODULE_0__["default"],
    airQualityExamine: _views_airHomePage_components_airQualityExamine__WEBPACK_IMPORTED_MODULE_2__["default"],
    airQualityTrend: _views_airHomePage_components_airQualityTrend__WEBPACK_IMPORTED_MODULE_3__["default"],
    airQualityProportion: _views_airHomePage_components_airQualityProportion__WEBPACK_IMPORTED_MODULE_4__["default"],
    airQualityAnnual: _views_airHomePage_components_airQualityAnnual__WEBPACK_IMPORTED_MODULE_5__["default"],
    airQualityRank: _views_airHomePage_components_airQualityRank__WEBPACK_IMPORTED_MODULE_6__["default"],
    airPollution: _views_airHomePage_components_airPollution__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      tabIndex: 0,
      warningWater: 0,
      xzqh: "",
      warningAir: 0,
      titleIndex: 0
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    this.loadData();
  },
  methods: {
    changeTitle: function changeTitle(index) {
      this.titleIndex = index;
    },
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    loadData: function loadData() {
      var _this = this;

      var info = {
        divisionName: this.xzqh
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_8__["overproofAlerts"])(info).then(function (res) {
        _this.warningAir = res.data.length;
      });
    },
    //超标告警
    toOver: function toOver() {
      this.$router.push({
        name: 'airAlarm',
        query: {
          xzqh: this.xzqh,
          queryFlag: this.titleIndex
        }
      });
    },
    goWeatherForecast: function goWeatherForecast() {
      this.$router.push({
        name: 'weatherForecast',
        query: {
          xzqh: this.xzqh
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-wrapper" }, [
    _vm._m(0),
    _c("div", { staticClass: "air-pollution" }, [
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("在线监控")
            },
          },
        },
        [
          _c("span", [_vm._v("在线监控")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.zxjk))]), _vm._v("家")],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("废气监测设备")
            },
          },
        },
        [
          _c("span", [_vm._v("废气监测设备")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.jcsb))]), _vm._v("套")],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("VOCs企业")
            },
          },
        },
        [
          _c("span", [_vm._v("VOCs企业")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.vocsEnt))]), _vm._v("家")],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("VOCs监测点")
            },
          },
        },
        [
          _c("span", [_vm._v("VOCs监测点")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.vocsPoint))]), _vm._v("个")],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("建筑工地")
            },
          },
        },
        [
          _c("span", [_vm._v("建筑工地")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.jzgd))]), _vm._v("个")],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              return _vm.goPage("机动车尾气")
            },
          },
        },
        [
          _c("span", [_vm._v("机动车尾气")]),
          _c(
            "span",
            [_c("font", [_vm._v(_vm._s(_vm.objInfo.jdcwq))]), _vm._v("个")],
            1
          ),
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
    return _c("div", { staticClass: "fs" }, [
      _c("div", { staticClass: "card-title card-title-air" }, [
        _vm._v("涉气污染源"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-wrapper" }, [
    _vm._m(0),
    _c(
      "div",
      { staticStyle: { margin: "-20px auto 0px" } },
      [
        _c("annual-echart", {
          attrs: { xzqh: _vm.xzqh, zdid: "", queryFlag: _vm.queryFlag },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fs" }, [
      _c("div", { staticClass: "card-title card-title-air" }, [
        _vm._v("污染物年度统计"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "10px" } },
    [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "card-title card-title-air" }, [
          _vm._v("空气质量排名"),
        ]),
        _c(
          "div",
          { staticClass: "time" },
          [
            _c(
              "span",
              {
                class: _vm.indx == 1 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.loadData(1)
                  },
                },
              },
              [_vm._v("前三名")]
            ),
            _c(
              "span",
              {
                class: _vm.indx == 2 ? "active" : "",
                on: {
                  click: function ($event) {
                    return _vm.loadData(2)
                  },
                },
              },
              [_vm._v("后三名")]
            ),
            _vm._v(" 详情 "),
            _c("van-icon", {
              staticStyle: { "line-height": "28px" },
              attrs: { name: "arrow" },
              on: {
                click: function ($event) {
                  return _vm.goPage()
                },
              },
            }),
          ],
          1
        ),
      ]),
      _vm._l(_vm.rankList, function (item, i) {
        return _c("div", { staticClass: "competition-wrapper fs" }, [
          _c("div", [
            _c("span", { class: "num" + i }, [_vm._v(_vm._s(i + 1))]),
            _c("span", { staticClass: "area" }, [_vm._v(_vm._s(item.name))]),
          ]),
          _c("div", { staticClass: "score-box" }, [
            _c(
              "div",
              {
                staticStyle: { "padding-right": "5px", "font-weight": "bold" },
              },
              [_vm._v(_vm._s(item.value))]
            ),
            _vm._v(" (AQI) "),
          ]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _vm._v("空气质量趋势统计"),
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
              _vm._v(" " + _vm._s(_vm.valfactor) + " "),
              _c("van-icon", { attrs: { name: "arrow-down" } }),
            ],
            1
          ),
        ]),
      ]),
      _c("div", {
        ref: "trendRef",
        staticStyle: { height: "200px", width: "96%", margin: "10px auto" },
      }),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.endPop,
            callback: function ($$v) {
              _vm.endPop = $$v
            },
            expression: "endPop",
          },
        },
        [
          _c("van-datetime-picker", {
            attrs: { type: "year-month", title: "选择年月" },
            on: {
              confirm: _vm.onConfirmEndTime,
              cancel: function ($event) {
                _vm.endPop = false
              },
            },
            model: {
              value: _vm.currentDate,
              callback: function ($$v) {
                _vm.currentDate = $$v
              },
              expression: "currentDate",
            },
          }),
        ],
        1
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.factorPop,
            callback: function ($$v) {
              _vm.factorPop = $$v
            },
            expression: "factorPop",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              title: "数据类型",
              "show-toolbar": "",
              columns: _vm.factorArr,
            },
            on: {
              confirm: _vm.onConfirmFactor,
              cancel: function ($event) {
                _vm.factorPop = false
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true& ***!
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
  return _c("div", [
    _c("div", {
      ref: "annualRef",
      staticStyle: { height: "240px", width: "96%", margin: "0px auto" },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { background: "rgba(255, 255, 255, 1)" } },
    [
      _c("van-nav-bar", {
        attrs: { fixed: "", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [
                _c(
                  "span",
                  {
                    class: [
                      "title-item",
                      _vm.titleIndex === 0 ? "title-item-active" : "",
                    ],
                    on: {
                      click: function ($event) {
                        return _vm.changeTitle(0)
                      },
                    },
                  },
                  [_vm._v("浓度")]
                ),
                _c(
                  "span",
                  {
                    class: [
                      "title-item",
                      _vm.titleIndex === 1 ? "title-item-active" : "",
                    ],
                    on: {
                      click: function ($event) {
                        return _vm.changeTitle(1)
                      },
                    },
                  },
                  [_vm._v("IAQI")]
                ),
              ]
            },
            proxy: true,
          },
          {
            key: "right",
            fn: function () {
              return [
                _c(
                  "span",
                  {
                    staticClass: "weather-tag",
                    on: {
                      click: function ($event) {
                        return _vm.goWeatherForecast()
                      },
                    },
                  },
                  [_vm._v("空气质量预报")]
                ),
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
          _c("air-quality-overview", { attrs: { queryFlag: _vm.titleIndex } }),
          _c("div", { staticClass: "air_warning" }, [
            _c("div", { staticClass: "air-box", on: { click: _vm.toOver } }, [
              _vm._m(0),
              _c("div", [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px", "font-weight": "700" },
                  },
                  [_vm._v(_vm._s(_vm.warningAir))]
                ),
                _vm._v("个 "),
                _c("div", [_vm._v(">")]),
              ]),
            ]),
          ]),
          _c("hour-air-quality", { attrs: { queryFlag: _vm.titleIndex } }),
          _c("air-quality-proportion", {
            attrs: { queryFlag: _vm.titleIndex },
          }),
          _c("air-quality-annual", { attrs: { queryFlag: _vm.titleIndex } }),
          _c("air-quality-rank", { attrs: { queryFlag: _vm.titleIndex } }),
        ],
        1
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
    return _c("div", [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/warningCity.png */ "./src/assets/warningCity.png") } }),
      _vm._v("超标告警"),
    ])
  },
]
render._withStripped = true



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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".air-pollution[data-v-4455f418] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px 0px 5px 10px;\n}\n.air-pollution > div[data-v-4455f418] {\n  display: inline-flex;\n  justify-content: space-between;\n  margin-right: 5px;\n  border-radius: 10px;\n  width: calc(50% - 30px);\n  background: #f8fbff;\n  padding: 8px 10px;\n  margin-bottom: 5px;\n}\n.air-pollution > div > span[data-v-4455f418] {\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: right;\n  vertical-align: top;\n}\n.air-pollution > div > span > font[data-v-4455f418] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 5px;\n  color: #121236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".time[data-v-2deccf39] {\n  display: flex;\n  align-items: center;\n}\n.time > span[data-v-2deccf39] {\n  border-radius: 4px;\n  background: #f5f7ff;\n  display: flex;\n  padding: 3px 9px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #5475f8;\n  margin-right: 5px;\n  border: 1px solid #d2dafc;\n}\n.time .active[data-v-2deccf39] {\n  background: #5271ff;\n  color: #fff;\n}\n.competition-wrapper[data-v-2deccf39] {\n  margin: 5px 13px 0;\n  padding: 8px 19px;\n  border-radius: 10px;\n  background: #f8fbff;\n}\n.competition-wrapper .num0[data-v-2deccf39] {\n  color: #ff5733;\n}\n.competition-wrapper .num1[data-v-2deccf39] {\n  color: #ff8d1a;\n}\n.competition-wrapper .num2[data-v-2deccf39] {\n  color: #00baad;\n}\n.competition-wrapper .area[data-v-2deccf39] {\n  padding-left: 20px;\n  font-size: 14px;\n  color: #121236;\n}\n.competition-wrapper .score-box[data-v-2deccf39] {\n  display: flex;\n  color: #121236;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-content[data-v-6beeb440] {\n  display: flex;\n  align-items: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-6beeb440] {\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-right: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".weather-tag[data-v-56016f51] {\n  padding: 0 9px;\n  border-radius: 4px;\n  background: rgba(252, 244, 235, 0.5);\n  border: 1px solid rgba(255, 141, 26, 0.3);\n  color: #ff8d1a;\n  font-size: 12px;\n  font-weight: normal;\n}\n.title-item[data-v-56016f51] {\n  font-weight: normal;\n  padding: 0 20px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 20px;\n}\n.title-item-active[data-v-56016f51] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n  font-weight: bold;\n  color: #121236;\n}\n.air_warning[data-v-56016f51] {\n  margin: 5px 0px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);\n}\n.air_warning .air-box[data-v-56016f51] {\n  margin: 0 10px;\n  border-radius: 2px;\n  /*background: linear-gradient(90deg, rgba(255, 73, 23, 0.1) 0%, rgba(255, 148, 24, 0) 100%),url(\"~@/assets/polluter/over_bg.png\") no-repeat center;*/\n  background: #fff2ef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3px 20px 3px 10px;\n  width: 100%;\n  color: #fc5223;\n  /*&:last-child {\n    background: linear-gradient(90deg, rgba(255, 148, 24, 0.1) 0%, rgba(255, 148, 24, 0) 100%), url(\"~@/assets/polluter/warn_bg.png\") no-repeat right;\n    color: rgba(255, 141, 26, 1);\n    margin-right: 10px;\n    margin-left: 6px;\n  }*/\n}\n.air_warning .air-box > div[data-v-56016f51] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  text-align: center;\n  vertical-align: top;\n}\n.air_warning .air-box > div > img[data-v-56016f51] {\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.air_warning .air-box > div[data-v-56016f51]:last-child {\n  display: flex;\n}\n.air_warning .air-box > div > div[data-v-56016f51] {\n  margin-left: 45%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("56f06650", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3eae4ad4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b90ca5a2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("13d89328", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/warningCity.png":
/*!************************************!*\
  !*** ./src/assets/warningCity.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHKSURBVFiF7ZY9bttAEIW/IbWQrACJZP3Y6gKYZ0gKF5HrGDAs6AK5QWDDtaTGXYQcJEiawHBnNSniMzgHCVbUuhASyORSnJXtNNED2Ay5M2/eDB8JW/zvkMcctoNkTMQMwHy5m/0zAnaY9GXhblZjLpKjTUhEmxCQ1I1ysQyhZyMwPz24Qej77tlBMg7NFzQCn/RZVL7+CsoZpIBP+ixCVVATsMOkn5XeIROHTFZjghvZD28vtXkr2gcldaMHA3PMzLe7McD89ODdX3LVGrzqVLV5VQr4ui9Eq0dk4jP78fjTkxHQzB6ARgfZebFMbOKzJyFgB8lY1X11B2ntPTyrUKGUgKDsvrWfT65QYS0B9SvVbJs/0udylKhQSMAOk766+0bHFBYoUaGQgHrxFFingtc2NZYLQKPzw71s/9TMemHTqfn8/Twb9xpRznR8WG79ocBhKdE1yI1AbTrtXlihAnPKEVDNvtkFU7116e/3yyu9DWKzjkBp97U6stsFoDK9vqpMr6/UxTy7Ev5H5DGcx0D9NQSg2UVqdQAkjt+kFycu5LhvVDkFXCRH3tMr0m+O+SQbKfQBABYr+9B7XcfU4k1L+zxgiy0A7gFv64UWPw8wtwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/airHomePage/components/airPollution.vue":
/*!***********************************************************!*\
  !*** ./src/views/airHomePage/components/airPollution.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airPollution.vue?vue&type=template&id=4455f418&scoped=true& */ "./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true&");
/* harmony import */ var _airPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airPollution.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4455f418",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airPollution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airPollution.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=style&index=0&id=4455f418&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_style_index_0_id_4455f418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airPollution.vue?vue&type=template&id=4455f418&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airPollution.vue?vue&type=template&id=4455f418&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airPollution_vue_vue_type_template_id_4455f418_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/airQualityAnnual.vue":
/*!***************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityAnnual.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true& */ "./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true&");
/* harmony import */ var _airQualityAnnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityAnnual.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _airQualityAnnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1be79a2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityAnnual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityAnnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityAnnual.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityAnnual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityAnnual.vue?vue&type=template&id=1be79a2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityAnnual_vue_vue_type_template_id_1be79a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/airQualityRank.vue":
/*!*************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityRank.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true& */ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true&");
/* harmony import */ var _airQualityRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityRank.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airQualityRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2deccf39",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityRank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityRank.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=style&index=0&id=2deccf39&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_style_index_0_id_2deccf39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityRank.vue?vue&type=template&id=2deccf39&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityRank_vue_vue_type_template_id_2deccf39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/airQualityTrend.vue":
/*!**************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityTrend.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true& */ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true&");
/* harmony import */ var _airQualityTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityTrend.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airQualityTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6beeb440",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityTrend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityTrend.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=style&index=0&id=6beeb440&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_style_index_0_id_6beeb440_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityTrend.vue?vue&type=template&id=6beeb440&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityTrend_vue_vue_type_template_id_6beeb440_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/components/echarts/annualEchart.vue":
/*!*******************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/annualEchart.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annualEchart.vue?vue&type=template&id=25b12136&scoped=true& */ "./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true&");
/* harmony import */ var _annualEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annualEchart.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _annualEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25b12136",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/echarts/annualEchart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_annualEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./annualEchart.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_annualEchart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./annualEchart.vue?vue&type=template&id=25b12136&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/echarts/annualEchart.vue?vue&type=template&id=25b12136&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_annualEchart_vue_vue_type_template_id_25b12136_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/index.vue":
/*!*****************************************!*\
  !*** ./src/views/airHomePage/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=56016f51&scoped=true& */ "./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& */ "./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56016f51",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/airHomePage/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=style&index=0&id=56016f51&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_56016f51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=56016f51&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/index.vue?vue&type=template&id=56016f51&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_56016f51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eUFubnVhbC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVRyZW5kLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9hbm51YWxFY2hhcnQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclBvbGx1dGlvbi52dWU/OWQwNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5QW5udWFsLnZ1ZT85OWFkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT8yNWExIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZC52dWU/M2QxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2FubnVhbEVjaGFydC52dWU/M2M5MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvaW5kZXgudnVlPzhmZmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uLnZ1ZT8wM2E3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT9lNzlhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZC52dWU/ZDQxMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvaW5kZXgudnVlPzc5YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uLnZ1ZT9jZDVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT81ZmNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZC52dWU/OWUyYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvaW5kZXgudnVlPzY2MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93YXJuaW5nQ2l0eS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJQb2xsdXRpb24udnVlPzdkNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uLnZ1ZT8zMWQ0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclBvbGx1dGlvbi52dWU/NTc4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5QW5udWFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5QW5udWFsLnZ1ZT9kYzk3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlBbm51YWwudnVlPzE5NzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVJhbmsudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT8zN2Q2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT83NzhlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlSYW5rLnZ1ZT84MmZkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVRyZW5kLnZ1ZT8wNDFjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZC52dWU/OGFjMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5VHJlbmQudnVlPzhhOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9hbm51YWxFY2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZT85ODhiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZT80OWRjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2luZGV4LnZ1ZT82NmNlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9pbmRleC52dWU/MTllZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvaW5kZXgudnVlPzhmMjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUdBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGNBREE7QUFFQTtBQUZBO0FBSUEsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQWxCQTtBQW1CQTtBQUNBLFlBREEsc0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBUkE7QUFTQSxVQVRBLGtCQVNBLElBVEEsRUFTQTtBQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUZBO0FBT0E7QUFqQkE7QUFuQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUZBLENBS0E7O0FBTEEsR0FGQTtBQVNBO0FBQ0E7QUFEQSxHQVRBO0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxtQkFGQTtBQUdBLHdCQUhBO0FBSUEsaUNBSkE7QUFLQSxtQkFM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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBb1QsQ0FBZ0IsZ1ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeFU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RztBQUN2QztBQUNMOzs7QUFHM0Q7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLG1HQUFNO0FBQ1IsRUFBRSw0R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNlQsQ0FBZ0IsNlVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBalY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtYWlyXCI+5raJ5rCU5rGh5p+T5rqQPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWlyLXBvbGx1dGlvblwiPlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJnb1BhZ2UoJ+WcqOe6v+ebkeaOpycpXCI+PHNwYW4+5Zyo57q/55uR5o6nPC9zcGFuPjxzcGFuPjxmb250Pnt7b2JqSW5mby56eGprfX08L2ZvbnQ+5a62PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJnb1BhZ2UoJ+W6n+awlOebkea1i+iuvuWkhycpXCI+PHNwYW4+5bqf5rCU55uR5rWL6K6+5aSHPC9zcGFuPjxzcGFuPjxmb250Pnt7b2JqSW5mby5qY3NifX08L2ZvbnQ+5aWXPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJnb1BhZ2UoJ1ZPQ3PkvIHkuJonKVwiPjxzcGFuPlZPQ3PkvIHkuJo8L3NwYW4+PHNwYW4+PGZvbnQ+e3tvYmpJbmZvLnZvY3NFbnR9fTwvZm9udD7lrrY8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cImdvUGFnZSgnVk9Dc+ebkea1i+eCuScpXCI+PHNwYW4+Vk9Dc+ebkea1i+eCuTwvc3Bhbj48c3Bhbj48Zm9udD57e29iakluZm8udm9jc1BvaW50fX08L2ZvbnQ+5LiqPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJnb1BhZ2UoJ+W7uuetkeW3peWcsCcpXCI+PHNwYW4+5bu6562R5bel5ZywPC9zcGFuPjxzcGFuPjxmb250Pnt7b2JqSW5mby5qemdkfX08L2ZvbnQ+5LiqPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJnb1BhZ2UoJ+acuuWKqOi9puWwvuawlCcpXCI+PHNwYW4+5py65Yqo6L2m5bC+5rCUPC9zcGFuPjxzcGFuPjxmb250Pnt7b2JqSW5mby5qZGN3cX19PC9mb250PuS4qjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge1xuXHRcdGdhc1BvbGx1dGlvblN0YXRcblx0fSBmcm9tICdAL2FwaS9wb2xsdXRpb25fc291cmNlJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiYWlyUG9sbHV0aW9uXCIsXG5cdFx0XHRcdHByb3BzOntcblx0XHRcdFx0XHRkZXRhaWxzUGFyYW1ldGVyOlN0cmluZ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhKCl7XG5cdFx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdFx0eHpxaDonJyxcblx0XHRcdFx0XHRcdG9iakluZm86e31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vdW50ZWQoKSB7XG5cdFx0XHRcdFx0dGhpcy54enFoID0gdGhpcy4kcm91dGUucXVlcnkueHpxaDtcblx0XHRcdFx0XHRpZih0aGlzLmRldGFpbHNQYXJhbWV0ZXIpe1xuXHRcdFx0XHRcdFx0dGhpcy54enFoID0gdGhpcy5kZXRhaWxzUGFyYW1ldGVyXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRtZXRob2RzOiB7XG5cdFx0XHRcdFx0bG9hZERhdGEoKXtcblx0XHRcdFx0XHRcdGxldCBpbmZvPXtcblx0XHRcdFx0XHRcdFx0ZGl2aXNpb25OYW1lOnRoaXMueHpxaFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Z2FzUG9sbHV0aW9uU3RhdChpbmZvKS50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9iakluZm8gPSByZXMuZGF0YTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRnb1BhZ2UocGFnZSl7XG5cdFx0XHRcdFx0ICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcblx0XHRcdFx0XHQgICAgICAgIHBhdGggOiAnL29ubGluZUNvbXBhbnlMaXN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHF1ZXJ5Ontcblx0XHRcdFx0XHRcdFx0XHRcdFx0eHpxaDp0aGlzLnh6cWgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOnBhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgICAgfSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIC5haXItcG9sbHV0aW9ue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDVweCAxMHB4O1xuICAgICAgICA+ZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgID5zcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgPmZvbnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtYWlyXCI+5rGh5p+T54mp5bm05bqm57uf6K6hPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogLTIwcHggYXV0byAwcHhcIj5cbiAgICAgIDxhbm51YWwtZWNoYXJ0IDp4enFoPVwieHpxaFwiIHpkaWQ9XCJcIiA6cXVlcnlGbGFnPVwicXVlcnlGbGFnXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBhbm51YWxFY2hhcnQgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2FubnVhbEVjaGFydFwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImFpclF1YWxpdHlBbm51YWxcIixcbiAgICBwcm9wczoge1xuICAgICAgZGV0YWlsc1BhcmFtZXRlcjogU3RyaW5nLFxuICAgICAgcXVlcnlGbGFnOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogKCk9Pnt9XG4gICAgICB9LCAvL+a1k+W6piAwIC9JQVFJIDFcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGFubnVhbEVjaGFydFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHh6cWg6ICfmmIbmmI7luIInLFxuICAgICAgICBlbmRQb3A6IGZhbHNlLFxuICAgICAgICBlbmRUaW1lOiAnMjAyMy0wMicsXG4gICAgICAgIGZhY3RvckFycjogWydBUUknLCAnUE0yLjUnXSxcbiAgICAgICAgZmFjdG9yOiAnQVFJJyxcbiAgICAgICAgZmFjdG9yUG9wOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XG4gICAgICBpZiAodGhpcy5kZXRhaWxzUGFyYW1ldGVyKSB7XG4gICAgICAgIHRoaXMueHpxaCA9IHRoaXMuZGV0YWlsc1BhcmFtZXRlclxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge31cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDEwcHhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtYWlyXCI+56m65rCU6LSo6YeP5o6S5ZCNPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpbmR4PT0xPydhY3RpdmUnOicnXCIgQGNsaWNrPVwibG9hZERhdGEoMSlcIj7liY3kuInlkI08L3NwYW4+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImluZHg9PTI/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJsb2FkRGF0YSgyKVwiPuWQjuS4ieWQjTwvc3Bhbj5cbiAgICAgICAg6K+m5oOFXG4gICAgICAgIDx2YW4taWNvbiBAY2xpY2s9XCJnb1BhZ2UoKVwiIG5hbWU9XCJhcnJvd1wiIHN0eWxlPVwibGluZS1oZWlnaHQ6IDI4cHg7XCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLTxkaXYgY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImluZHg9PTE/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJsb2FkRGF0YSgxKVwiPuWJjTPlkI08L3NwYW4+XG4gICAgICAgIDxzcGFuIDpjbGFzcz1cImluZHg9PTI/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJsb2FkRGF0YSgyKVwiPuWQjjPlkI08L3NwYW4+XG4gICAgPC9kaXY+LS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBldGl0aW9uLXdyYXBwZXIgZnNcIiB2LWZvcj1cIihpdGVtLGkpIGluIHJhbmtMaXN0XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCInbnVtJytpXCI+e3tpKzF9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmVhXCI+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjb3JlLWJveFwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O2ZvbnQtd2VpZ2h0OiBib2xkXCI+e3tpdGVtLnZhbHVlfX08L2Rpdj5cbiAgICAgICAgKEFRSSlcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7XG4gICAgYWlyUXVhbGl0eVJhbmtpbmdcbiAgfSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiYWlyUXVhbGl0eVJhbmtcIixcbiAgICBwcm9wczoge1xuICAgICAgZGV0YWlsc1BhcmFtZXRlcjogU3RyaW5nLFxuICAgICAgcXVlcnlGbGFnOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICB9XG4gICAgICB9LCAvL+a1k+W6piAwIC9JQVFJIDFcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBxdWVyeUZsYWcobmV3RCl7XG4gICAgICAgIHRoaXMubG9hZERhdGEodGhpcy5pbmR4KVxuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHh6cWg6ICcnLFxuICAgICAgICBpbmR4OiAxLFxuICAgICAgICByYW5rTGlzdDogW11cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnh6cWggPSB0aGlzLiRyb3V0ZS5xdWVyeS54enFoO1xuICAgICAgaWYgKHRoaXMuZGV0YWlsc1BhcmFtZXRlcikge1xuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZERhdGEoMSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBvbkNvbmZpcm1GYWN0b3Iob2JqKSB7XG4gICAgICAgIHRoaXMuc2hvd2ZhY3RvciA9IG9iai50ZXh0O1xuICAgICAgICB0aGlzLmZhY3RvciA9IG9iai52YWw7XG4gICAgICAgIHRoaXMuZmFjdG9yUG9wID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubG9hZERhdGEoKTtcbiAgICAgIH0sXG4gICAgICBsb2FkRGF0YShudW0pIHtcbiAgICAgICAgdGhpcy5pbmR4ID0gbnVtO1xuICAgICAgICBsZXQgaW5mbyA9IHtcbiAgICAgICAgICB0eXBlOiBudW0sXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsXG4gICAgICAgICAgYXFpOiB0aGlzLnF1ZXJ5RmxhZyA9PT0gMCA/ICcnIDogJ2lhcWknXG4gICAgICAgIH07XG4gICAgICAgIGFpclF1YWxpdHlSYW5raW5nKGluZm8pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmtMaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvUGFnZSgpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdhaXJRdWFsaXR5UmFuaycsXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHh6cWg6IHRoaXMueHpxaCxcbiAgICAgICAgICAgIHF1ZXJ5RmxhZzogdGhpcy5xdWVyeUZsYWcsXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgLnRpbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gc3BhbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTUsIDEpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDNweCA5cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTgsIDI1MiwgMSk7XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAuY29tcGV0aXRpb24td3JhcHBlciB7XG4gICAgbWFyZ2luOiA1cHggMTNweCAwO1xuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAxKTtcblxuICAgIC5udW0wIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgODcsIDUxLCAxKTtcbiAgICB9XG5cbiAgICAubnVtMSB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xuICAgIH1cblxuICAgIC5udW0yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDE4NiwgMTczLCAxKTtcbiAgICB9XG5cbiAgICAuYXJlYSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcbiAgICB9XG5cbiAgICAuc2NvcmUtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogIzEyMTIzNjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtYWlyXCI+56m65rCU6LSo6YeP6LaL5Yq/57uf6K6hPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZSBzZWFyY2gtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbSBmc1wiIEBjbGljaz1cImZhY3RvclBvcD0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7e3ZhbGZhY3Rvcn19XG4gICAgICAgICAgICAgICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHJlZj1cInRyZW5kUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjk2JTttYXJnaW46IDEwcHggYXV0b1wiLz5cblxuICAgICAgICA8IS0t5pe26Ze0LS0+XG4gICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImVuZFBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LW1vZGVsPVwiY3VycmVudERhdGVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwieWVhci1tb250aFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi6YCJ5oup5bm05pyIXCJcbiAgICAgICAgICAgICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1FbmRUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgQGNhbmNlbD1cImVuZFBvcD1mYWxzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3Zhbi1wb3B1cD5cblxuICAgICAgICA8IS0t5Zug5a2Q6YCJ5oupLS0+XG4gICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImZhY3RvclBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8dmFuLXBpY2tlclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuaVsOaNruexu+Wei1wiXG4gICAgICAgICAgICAgICAgICAgIHNob3ctdG9vbGJhclxuICAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImZhY3RvckFyclwiXG4gICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtRmFjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgQGNhbmNlbD1cImZhY3RvclBvcD1mYWxzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3Zhbi1wb3B1cD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tIFwiZWNoYXJ0c1wiO1xuICAgIGltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblx0XHRpbXBvcnQgeyBnZXRUaGlzRGF0ZSxmb3JtYXREYXRlIH0gZnJvbSAnQC91dGlscy9zZXRkYXRlJztcblx0XHRpbXBvcnQgeyBhaXJDaXR5QXNzZXNzVGVuZGVuY3kgfSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eSc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcImFpclF1YWxpdHlUcmVuZFwiLFxuXHRcdFx0XHRwcm9wczp7XG5cdFx0XHRcdFx0ZGV0YWlsc1BhcmFtZXRlcjpTdHJpbmdcblx0XHRcdFx0fSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlOm5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgZW5kUG9wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBlbmRUaW1lOiBmb3JtYXREYXRlKG5ldyBEYXRlKCksJ00nKSxcbiAgICAgICAgICAgICAgICBlbmRUaW1lOiBkYXlqcyhuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICAgICAgICAvLyBmYWN0b3JBcnI6IFsnQVFJJywnUE0xMCcsJ1BNMjUnLCdTTzInLCdOTzInLCdDTycsJ09aT05FJ10sXG5cdFx0XHRcdFx0XHRcdFx0ZmFjdG9yQXJyOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnQVFJJywgdGV4dDogJ0FRSSd9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ1BNMjUnLHRleHQ6ICdQTTIuNScsfSxcblx0XHRcdFx0XHRcdFx0XHRcdHsgdmFsdWU6ICdQTTEwJyx0ZXh0OiAnUE0xMCd9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e3ZhbHVlOiAnU08yJyx0ZXh0OiAnU08yJ30sXG5cdFx0XHRcdFx0XHRcdFx0XHR7dmFsdWU6ICdOTzInLHRleHQ6ICdOTzInfSxcblx0XHRcdFx0XHRcdFx0XHRcdHt2YWx1ZTogJ0NPJyx0ZXh0OiAnQ08nfSxcblx0XHRcdFx0XHRcdFx0XHRcdHt2YWx1ZTogJ09aT05FJyx0ZXh0OiAnTzMnfVxuXHRcdFx0XHRcdFx0XHRcdF0sXG4gICAgICAgICAgICAgICAgZmFjdG9yIDogJ0FRSScsXG5cdFx0XHRcdFx0XHRcdFx0dmFsZmFjdG9yOidBUUknLFxuICAgICAgICAgICAgICAgIGZhY3RvclBvcCA6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdHh6cWg6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcblx0XHRcdFx0XHR0aGlzLnh6cWggPSB0aGlzLiRyb3V0ZS5xdWVyeS54enFoO1xuXHRcdFx0XHRcdGlmKHRoaXMuZGV0YWlsc1BhcmFtZXRlcil7XG5cdFx0XHRcdFx0XHR0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcblx0XHRcdFx0XHR9XG4gICAgICAgICAgICBpZiAoIXRoaXMudHJlbmRSZWYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZW5kUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMudHJlbmRSZWYpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLnRyZW5kUmVmKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uQ29uZmlybUVuZFRpbWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NJylcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFBvcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5pdENoYXJ0KHRoaXMudHJlbmRSZWYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db25maXJtRmFjdG9yKHZhbCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZhbGZhY3RvciA9IHZhbC50ZXh0O1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZhY3RvciA9IHZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY3RvclBvcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5pdENoYXJ0KHRoaXMudHJlbmRSZWYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoZXZlbnQpe1xuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvL+eItue6p+WFg+e0oOmakOiXj1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogWydyZ2JhKDY4LCAxMjMsIDI1MiwgMSknXSxcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnOCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzIwJScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiAnc2hhZG93J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdyZ2JhKDE4LCAxOCwgNTQsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICcjZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRTRFOUYyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMTIwLCAyMDAsIDE1MCwgODAsIDcwLCAxMTAsIDEzMCwxMjAsIDIwMCwgMTUwLCA4MCwgNzAsIDExMCwgMTMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLDEyMCwgMjAwLCAxNTAsIDgwLCA3MCwgMTEwLCAxMzAsMTIwLCAyMDAsIDE1MCwgODAsIDcwLCAxMTAsIDEzMCwyMyw0NF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgZGF0ZVRpbWU6dGhpcy5lbmRUaW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0IHR5cGU6dGhpcy5mYWN0b3IsXG5cdFx0XHRcdFx0XHRcdFx0XHQgZGl2aXNpb25OYW1lOnRoaXMueHpxaFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRhaXJDaXR5QXNzZXNzVGVuZGVuY3koaW5mbykudGhlbihyZXM9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGxldCByZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHhBcnIgPSBbXSxzQXJyPVtdO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmRhdGEuZm9yRWFjaChpdGVtPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC5zdWJzdHIoOCwyKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4QXJyLnB1c2goaXRlbS5uYW1lKyfml6UnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c0Fyci5wdXNoKGl0ZW0udmFsdWUpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLnNlcmllc1swXS5kYXRhID0gc0Fycjtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbilcblx0XHRcdFx0XHRcdFx0XHR9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIC5zZWFyY2gtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgLnNlYXJjaC1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgcmVmPVwiYW5udWFsUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDI0MHB4O3dpZHRoOjk2JTttYXJnaW46IDBweCBhdXRvXCIvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcbiAgaW1wb3J0IHtcbiAgICBhaXJQb2xsdXRhbnRZZWFyLCBhaXJQb2xsdXRhbnRTaXRlWWVhclxuICB9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJhbm51YWxFY2hhcnRcIixcbiAgICBwcm9wczoge1xuICAgICAgemRpZDogU3RyaW5nLFxuICAgICAgeHpxaDogU3RyaW5nLFxuICAgICAgcXVlcnlGbGFnOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICB9XG4gICAgICB9LCAvL+a1k+W6piAwIC9JQVFJIDFcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICB6ZGlkOiB7XG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuYW5udWFsUmVmKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGltbWVkaWF0ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHF1ZXJ5RmxhZzoge1xuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmFubnVhbFJlZilcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICBpZiAoIXRoaXMuYW5udWFsUmVmKSB7XG4gICAgICAgIHRoaXMuYW5udWFsUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMuYW5udWFsUmVmKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5hbm51YWxSZWYpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgY29sb3I6IFsncmdiYSg2OCwgMTIzLCAyNTIsIDEpJywgJ3JnYmEoNjcsIDIyMywgMjQ3LCAxKSddLFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHRvcDogJzI4JScsXG4gICAgICAgICAgICBsZWZ0OiAnMTMlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMTAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzE1JScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIC8vIGRhdGE6IFsnMjAyMicsICcyMDIzJ10sXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGljb246ICdzcXVhcmUnLFxuICAgICAgICAgICAgaXRlbVdpZHRoOiA4LFxuICAgICAgICAgICAgaXRlbUhlaWdodDogOFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeEF4aXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgZGF0YTogWydQTTIuNScsICdQTTEwJywgJ08zJywgJ1NPMicsICdOTzInLCAnQ08nXSxcbiAgICAgICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4aXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgLy8gaW50ZXJ2YWw6IDEwMCxcbiAgICAgICAgICAgICAgbmFtZTogJ3VnL23CsyhDT+mZpOWkliknLFxuICAgICAgICAgICAgICBuYW1lVGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBuYW1lOiAnbWcvbcKzKENPKScsXG4gICAgICAgICAgICAgIG5hbWVUZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgLy8gaW50ZXJ2YWw6IDUsXG4gICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgYmFyV2lkdGg6IDEyLFxuICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICB5QXhpc0luZGV4OiAxLFxuICAgICAgICAgICAgICBiYXJXaWR0aDogMTIsXG4gICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZSA9IG51bGw7XG4gICAgICAgIGxldCBwYXJhbXMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy56ZGlkICE9IFwiXCIpIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBhaXJQb2xsdXRhbnRTaXRlWWVhcjtcbiAgICAgICAgICBwYXJhbXMgPSB7c2l0ZUlkOiB0aGlzLnpkaWR9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gYWlyUG9sbHV0YW50WWVhcjtcbiAgICAgICAgICBwYXJhbXMgPSB7ZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsIGFxaTogdGhpcy5xdWVyeUZsYWcgPT09IDAgPyAnJyA6ICdpYXFpJ31cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbk5hbWUocGFyYW1zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHNBcnIxID0gW10sIHNBcnIwID0gW107XG4gICAgICAgICAgbGV0IG5vdyA9IHJlcy5kYXRhWzBdO1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHJlcy5kYXRhWzFdOyAgLy/ljrvlubRcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5RmxhZyA9PT0gMCkge1xuICAgICAgICAgICAgICBzQXJyMCA9IFtsYXN0LnBtMjUsIGxhc3QucG0xMCwgbGFzdC5vem9uZSwgbGFzdC5zbzIsIGxhc3Qubm8yLCBsYXN0LmNvXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNBcnIwID0gW2xhc3QucG0yNUlhcWksIGxhc3QucG0xMElhcWksIGxhc3Qub3pvbmVJYXFpLCBsYXN0LnNvMklhcWksIGxhc3Qubm8ySWFxaSwgbGFzdC5jb0lhcWldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnNlcmllc1swXS5uYW1lID0gbGFzdC5tb25pdG9yaW5nVGltZTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IHNBcnIwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5xdWVyeUZsYWcgPT09IDApIHtcbiAgICAgICAgICAgIHNBcnIxID0gW25vdy5wbTI1LCBub3cucG0xMCwgbm93Lm96b25lLCBub3cuc28yLCBub3cubm8yLCBub3cuY29dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzQXJyMSA9IFtub3cucG0yNUlhcWksIG5vdy5wbTEwSWFxaSwgbm93Lm96b25lSWFxaSwgbm93LnNvMklhcWksIG5vdy5ubzIsIG5vdy5jb0lhcWldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb24uc2VyaWVzWzFdLm5hbWUgPSBub3cubW9uaXRvcmluZ1RpbWU7XG4gICAgICAgICAgb3B0aW9uLnNlcmllc1sxXS5kYXRhID0gc0FycjE7XG4gICAgICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24ob3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIj5cclxuICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgIGZpeGVkXHJcbiAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgPlxyXG4gICAgICA8dGVtcGxhdGUgI3RpdGxlPlxyXG4gICAgICAgIDxzcGFuIDpjbGFzcz1cIlsndGl0bGUtaXRlbScsIHRpdGxlSW5kZXg9PT0wPyd0aXRsZS1pdGVtLWFjdGl2ZSc6JyddXCIgQGNsaWNrPVwiY2hhbmdlVGl0bGUoMClcIj7mtZPluqY8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gOmNsYXNzPVwiWyd0aXRsZS1pdGVtJywgdGl0bGVJbmRleD09PTE/J3RpdGxlLWl0ZW0tYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUaXRsZSgxKVwiPklBUUk8L3NwYW4+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjcmlnaHQ+XHJcbjwhLS0gICAgICAgIDxpbWcgQGNsaWNrPVwiZ29XZWF0aGVyRm9yZWNhc3QoKVwiIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAzcHhcIj4tLT5cclxuICAgICAgICA8c3BhbiBAY2xpY2s9XCJnb1dlYXRoZXJGb3JlY2FzdCgpXCIgY2xhc3M9XCJ3ZWF0aGVyLXRhZ1wiPuepuuawlOi0qOmHj+mihOaKpTwvc3Bhbj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgIDxhaXItcXVhbGl0eS1vdmVydmlldyA6cXVlcnlGbGFnPVwidGl0bGVJbmRleFwiLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhaXJfd2FybmluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhaXItYm94XCIgQGNsaWNrPVwidG9PdmVyXCI+XHJcbiAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiQC9hc3NldHMvd2FybmluZ0NpdHkucG5nXCIvPui2heagh+WRiuitpjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IDcwMDtcIj57e3dhcm5pbmdBaXJ9fTwvc3Bhbj7kuKpcclxuICAgICAgICAgICAgPGRpdj4+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImFpci1ib3hcIiBAY2xpY2s9XCJ0b1dhcm5cIj5cclxuICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJAL2Fzc2V0cy9lYXJseUNpdHkucG5nXCIvPui2heagh+mihOitpjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IDcwMDtcIj4wPC9zcGFuPuS4qlxyXG4gICAgICAgICAgICA8ZGl2Pj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxob3VyLWFpci1xdWFsaXR5IDpxdWVyeUZsYWc9XCJ0aXRsZUluZGV4XCIvPlxyXG48IS0tICAgICAgPGFpci1xdWFsaXR5LWV4YW1pbmUvPi0tPlxyXG48IS0tICAgICAgPGFpci1xdWFsaXR5LXRyZW5kLz4tLT5cclxuICAgICAgPGFpci1xdWFsaXR5LXByb3BvcnRpb24gOnF1ZXJ5RmxhZz1cInRpdGxlSW5kZXhcIi8+XHJcbiAgICAgIDxhaXItcXVhbGl0eS1hbm51YWwgOnF1ZXJ5RmxhZz1cInRpdGxlSW5kZXhcIi8+XHJcbiAgICAgIDxhaXItcXVhbGl0eS1yYW5rIDpxdWVyeUZsYWc9XCJ0aXRsZUluZGV4XCIvPlxyXG4gICAgICA8IS0tPGFpci1wb2xsdXRpb24vPi0tPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBhaXJRdWFsaXR5T3ZlcnZpZXcgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5T3ZlcnZpZXdcIjtcclxuICBpbXBvcnQgaG91ckFpclF1YWxpdHkgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9ob3VyQWlyUXVhbGl0eVwiO1xyXG4gIGltcG9ydCBhaXJRdWFsaXR5RXhhbWluZSBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlFeGFtaW5lXCI7XHJcbiAgaW1wb3J0IGFpclF1YWxpdHlUcmVuZCBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlUcmVuZFwiO1xyXG4gIGltcG9ydCBhaXJRdWFsaXR5UHJvcG9ydGlvbiBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlQcm9wb3J0aW9uXCI7XHJcbiAgaW1wb3J0IGFpclF1YWxpdHlBbm51YWwgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5QW5udWFsXCI7XHJcbiAgaW1wb3J0IGFpclF1YWxpdHlSYW5rIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eVJhbmtcIjtcclxuICBpbXBvcnQgYWlyUG9sbHV0aW9uIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUG9sbHV0aW9uXCI7XHJcbiAgaW1wb3J0IHtvdmVycHJvb2ZBbGVydHN9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2luZGV4JyxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgaG91ckFpclF1YWxpdHksXHJcbiAgICAgIGFpclF1YWxpdHlPdmVydmlldyxcclxuICAgICAgYWlyUXVhbGl0eUV4YW1pbmUsXHJcbiAgICAgIGFpclF1YWxpdHlUcmVuZCxcclxuICAgICAgYWlyUXVhbGl0eVByb3BvcnRpb24sXHJcbiAgICAgIGFpclF1YWxpdHlBbm51YWwsXHJcbiAgICAgIGFpclF1YWxpdHlSYW5rLFxyXG4gICAgICBhaXJQb2xsdXRpb25cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgIHdhcm5pbmdXYXRlcjogMCxcclxuICAgICAgICB4enFoOiBcIlwiLFxyXG4gICAgICAgIHdhcm5pbmdBaXI6IDAsXHJcbiAgICAgICAgdGl0bGVJbmRleDogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy54enFoID0gdGhpcy4kcm91dGUucXVlcnkueHpxaDtcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBjaGFuZ2VUaXRsZShpbmRleCl7XHJcbiAgICAgICAgdGhpcy50aXRsZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgfSxcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3ZlcnByb29mQWxlcnRzKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMud2FybmluZ0FpciA9IHJlcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+i2heagh+WRiuitplxyXG4gICAgICB0b092ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpckFsYXJtJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHh6cWg6IHRoaXMueHpxaCxcclxuICAgICAgICAgICAgcXVlcnlGbGFnOiB0aGlzLnRpdGxlSW5kZXhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnb1dlYXRoZXJGb3JlY2FzdCgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAnd2VhdGhlckZvcmVjYXN0JyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHh6cWg6IHRoaXMueHpxaCxcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC53ZWF0aGVyLXRhZ3tcclxuICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI0NCwgMjM1LCAwLjUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMyk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLnRpdGxlLWl0ZW17XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLnRpdGxlLWl0ZW0tYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICB9XHJcbiAgLmFpcl93YXJuaW5nIHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuXHJcbiAgICAuYWlyLWJveCB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgNzMsIDIzLCAwLjEpIDAlLCByZ2JhKDI1NSwgMTQ4LCAyNCwgMCkgMTAwJSksdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL292ZXJfYmcucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7Ki9cclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjJlZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAyMHB4IDNweCAxMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6IHJnYmEoMjUyLCA4MiwgMzUsIDEpO1xyXG5cclxuICAgICAgLyomOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDE0OCwgMjQsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDgsIDI0LCAwKSAxMDAlKSwgdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL3dhcm5fYmcucG5nXCIpIG5vLXJlcGVhdCByaWdodDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgID4gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWlyLXBvbGx1dGlvblwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZ29QYWdlKFwi5Zyo57q/55uR5o6nXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWcqOe6v+ebkeaOp1wiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICBbX2MoXCJmb250XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmpJbmZvLnp4amspKV0pLCBfdm0uX3YoXCLlrrZcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvUGFnZShcIuW6n+awlOebkea1i+iuvuWkh1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJTnm5HmtYvorr7lpIdcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW19jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqSW5mby5qY3NiKSldKSwgX3ZtLl92KFwi5aWXXCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1BhZ2UoXCJWT0Nz5LyB5LiaXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlZPQ3PkvIHkuJpcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW19jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqSW5mby52b2NzRW50KSldKSwgX3ZtLl92KFwi5a62XCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1BhZ2UoXCJWT0Nz55uR5rWL54K5XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlZPQ3Pnm5HmtYvngrlcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW19jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqSW5mby52b2NzUG9pbnQpKV0pLCBfdm0uX3YoXCLkuKpcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvUGFnZShcIuW7uuetkeW3peWcsFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlu7rnrZHlt6XlnLBcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW19jKFwiZm9udFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqSW5mby5qemdkKSldKSwgX3ZtLl92KFwi5LiqXCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1BhZ2UoXCLmnLrliqjovablsL7msJRcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5py65Yqo6L2m5bC+5rCUXCIpXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIFtfYyhcImZvbnRcIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iakluZm8uamRjd3EpKV0pLCBfdm0uX3YoXCLkuKpcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5raJ5rCU5rGh5p+T5rqQXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIi0yMHB4IGF1dG8gMHB4XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImFubnVhbC1lY2hhcnRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IHh6cWg6IF92bS54enFoLCB6ZGlkOiBcIlwiLCBxdWVyeUZsYWc6IF92bS5xdWVyeUZsYWcgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5rGh5p+T54mp5bm05bqm57uf6K6hXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiLCBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctYm90dG9tXCI6IFwiMTBweFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS1haXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi56m65rCU6LSo6YeP5o6S5ZCNXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uaW5keCA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZERhdGEoMSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWJjeS4ieWQjVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmluZHggPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWREYXRhKDIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLlkI7kuInlkI1cIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIOivpuaDhSBcIiksXG4gICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJsaW5lLWhlaWdodFwiOiBcIjI4cHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93XCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1BhZ2UoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl9sKF92bS5yYW5rTGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGV0aXRpb24td3JhcHBlciBmc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogXCJudW1cIiArIGkgfSwgW192bS5fdihfdm0uX3MoaSArIDEpKV0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJlYVwiIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzY29yZS1ib3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1yaWdodFwiOiBcIjVweFwiLCBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udmFsdWUpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgKEFRSSkgXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS1haXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi56m65rCU6LSo6YeP6LaL5Yq/57uf6K6hXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lIHNlYXJjaC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW0gZnNcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmZhY3RvclBvcCA9IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS52YWxmYWN0b3IpICsgXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIgfSB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBcInRyZW5kUmVmXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI5NiVcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5lbmRQb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZW5kUG9wID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbmRQb3BcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tZGF0ZXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwieWVhci1tb250aFwiLCB0aXRsZTogXCLpgInmi6nlubTmnIhcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybUVuZFRpbWUsXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5lbmRQb3AgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudERhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREYXRlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERhdGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmFjdG9yUG9wLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmZhY3RvclBvcCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmFjdG9yUG9wXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLXBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLmlbDmja7nsbvlnotcIixcbiAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgY29sdW1uczogX3ZtLmZhY3RvckFycixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRmFjdG9yLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmFjdG9yUG9wID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwge1xuICAgICAgcmVmOiBcImFubnVhbFJlZlwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjI0MHB4XCIsIHdpZHRoOiBcIjk2JVwiLCBtYXJnaW46IFwiMHB4IGF1dG9cIiB9LFxuICAgIH0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZpeGVkOiBcIlwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInRpdGxlXCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlSW5kZXggPT09IDAgPyBcInRpdGxlLWl0ZW0tYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRpdGxlKDApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5rWT5bqmXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGl0bGVJbmRleCA9PT0gMSA/IFwidGl0bGUtaXRlbS1hY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGl0bGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJJQVFJXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3ZWF0aGVyLXRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvV2VhdGhlckZvcmVjYXN0KClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnqbrmsJTotKjph4/pooTmiqVcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhaXItcXVhbGl0eS1vdmVydmlld1wiLCB7IGF0dHJzOiB7IHF1ZXJ5RmxhZzogX3ZtLnRpdGxlSW5kZXggfSB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFpcl93YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItYm94XCIsIG9uOiB7IGNsaWNrOiBfdm0udG9PdmVyIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIiwgXCJmb250LXdlaWdodFwiOiBcIjcwMFwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLndhcm5pbmdBaXIpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuS4qiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIj5cIildKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImhvdXItYWlyLXF1YWxpdHlcIiwgeyBhdHRyczogeyBxdWVyeUZsYWc6IF92bS50aXRsZUluZGV4IH0gfSksXG4gICAgICAgICAgX2MoXCJhaXItcXVhbGl0eS1wcm9wb3J0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHF1ZXJ5RmxhZzogX3ZtLnRpdGxlSW5kZXggfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImFpci1xdWFsaXR5LWFubnVhbFwiLCB7IGF0dHJzOiB7IHF1ZXJ5RmxhZzogX3ZtLnRpdGxlSW5kZXggfSB9KSxcbiAgICAgICAgICBfYyhcImFpci1xdWFsaXR5LXJhbmtcIiwgeyBhdHRyczogeyBxdWVyeUZsYWc6IF92bS50aXRsZUluZGV4IH0gfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3dhcm5pbmdDaXR5LnBuZ1wiKSB9IH0pLFxuICAgICAgX3ZtLl92KFwi6LaF5qCH5ZGK6K2mXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFpci1wb2xsdXRpb25bZGF0YS12LTQ0NTVmNDE4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTVweCAwcHggNXB4IDEwcHg7XFxufVxcbi5haXItcG9sbHV0aW9uID4gZGl2W2RhdGEtdi00NDU1ZjQxOF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAzMHB4KTtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmFpci1wb2xsdXRpb24gPiBkaXYgPiBzcGFuW2RhdGEtdi00NDU1ZjQxOF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uYWlyLXBvbGx1dGlvbiA+IGRpdiA+IHNwYW4gPiBmb250W2RhdGEtdi00NDU1ZjQxOF0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpbWVbZGF0YS12LTJkZWNjZjM5XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpbWUgPiBzcGFuW2RhdGEtdi0yZGVjY2YzOV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjdmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZGFmYztcXG59XFxuLnRpbWUgLmFjdGl2ZVtkYXRhLXYtMmRlY2NmMzldIHtcXG4gIGJhY2tncm91bmQ6ICM1MjcxZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvbXBldGl0aW9uLXdyYXBwZXJbZGF0YS12LTJkZWNjZjM5XSB7XFxuICBtYXJnaW46IDVweCAxM3B4IDA7XFxuICBwYWRkaW5nOiA4cHggMTlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlciAubnVtMFtkYXRhLXYtMmRlY2NmMzldIHtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlciAubnVtMVtkYXRhLXYtMmRlY2NmMzldIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlciAubnVtMltkYXRhLXYtMmRlY2NmMzldIHtcXG4gIGNvbG9yOiAjMDBiYWFkO1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlciAuYXJlYVtkYXRhLXYtMmRlY2NmMzldIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlciAuc2NvcmUtYm94W2RhdGEtdi0yZGVjY2YzOV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2gtY29udGVudFtkYXRhLXYtNmJlZWI0NDBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtNmJlZWI0NDBdIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud2VhdGhlci10YWdbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICBwYWRkaW5nOiAwIDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNDQsIDIzNSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjMpO1xcbiAgY29sb3I6ICNmZjhkMWE7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4udGl0bGUtaXRlbVtkYXRhLXYtNTYwMTZmNTFdIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udGl0bGUtaXRlbS1hY3RpdmVbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmFpcl93YXJuaW5nW2RhdGEtdi01NjAxNmY1MV0ge1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3hbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgNzMsIDIzLCAwLjEpIDAlLCByZ2JhKDI1NSwgMTQ4LCAyNCwgMCkgMTAwJSksdXJsKFxcXCJ+QC9hc3NldHMvcG9sbHV0ZXIvb3Zlcl9iZy5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyOyovXFxuICBiYWNrZ3JvdW5kOiAjZmZmMmVmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggMjBweCAzcHggMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICNmYzUyMjM7XFxuICAvKiY6bGFzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDE0OCwgMjQsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDgsIDI0LCAwKSAxMDAlKSwgdXJsKFxcXCJ+QC9hc3NldHMvcG9sbHV0ZXIvd2Fybl9iZy5wbmdcXFwiKSBuby1yZXBlYXQgcmlnaHQ7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIH0qL1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3ggPiBkaXZbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3ggPiBkaXYgPiBpbWdbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuLmFpcl93YXJuaW5nIC5haXItYm94ID4gZGl2W2RhdGEtdi01NjAxNmY1MV06bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3ggPiBkaXYgPiBkaXZbZGF0YS12LTU2MDE2ZjUxXSB7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDU1ZjQxOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU2ZjA2NjUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTVmNDE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTVmNDE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlSYW5rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkZWNjZjM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2VhZTRhZDRcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UmFuay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZGVjY2YzOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlSYW5rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkZWNjZjM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlUcmVuZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmVlYjQ0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI5MGNhNWEyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eVRyZW5kLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiZWViNDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eVRyZW5kLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiZWViNDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2MDE2ZjUxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTNkODkzMjhcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NjAxNmY1MSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2MDE2ZjUxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUhLU1VSQlZGaUY3Wlk5YnR0QUVJVy9JYldRckFDSlpQM1k2Z0tZWjBnS0Y1SHJHREFzNkFLNVFXRER0YVRHWFlRY0pFaWF3SEJuTlNuaU16Z0hDVmJVdWhBU3lPUlNuSlh0Tk5FRDJBeTVNMi9lREI4SlcvenZrTWNjdG9Oa1RNUU13SHk1bS8wekFuYVk5R1hoYmxaakxwS2pUVWhFbXhDUTFJMXlzUXloWnlNd1B6MjRRZWo3N3RsQk1nN05GelFDbi9SWlZMNytDc29acElCUCtpeENWVkFUc01Pa241WGVJUk9IVEZaamdodlpEMjh2dFhrcjJnY2xkYU1IQTNQTXpMZTdNY0Q4OU9EZFgzTFZHcnpxVkxWNVZRcjR1aTlFcTBkazRqUDc4ZmpUa3hIUXpCNkFSZ2ZaZWJGTWJPS3pKeUZnQjhsWTFYMTFCMm50UFR5clVLR1VnS0RzdnJXZlQ2NVFZUzBCOVN2VmJKcy8wdWR5bEtoUVNNQU9rNzY2KzBiSEZCWW9VYUdRZ0hyeEZGaW5ndGMyTlpZTFFLUHp3NzFzLzlUTWVtSFRxZm44L1R3Yjl4cFJ6blI4V0c3OW9jQmhLZEUxeUkxQWJUcnRYbGloQW5QS0VWRE52dGtGVTcxMTZlLzN5eXU5RFdLemprQnA5N1U2c3RzRm9ESzl2cXBNcjYvVXhUeTdFdjVINURHY3gwRDlOUVNnMlVWcWRRQWtqdCtrRnljdTVMaHZWRGtGWENSSDN0TXIwbStPK1NRYktmUUJBQllyKzlCN1hjZlU0azFMK3p4Z2l5MEE3Z0Z2NjRVV1B3OHd0d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9haXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTVmNDE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTVmNDE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDQ1NWY0MThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDQ1NWY0MTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDQ1NWY0MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDQ1NWY0MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQ1NWY0MTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDQ1NWY0MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclBvbGx1dGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDU1ZjQxOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQ1NWY0MTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FpclF1YWxpdHlBbm51YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZTc5YTJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FpclF1YWxpdHlBbm51YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9haXJRdWFsaXR5QW5udWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWJlNzlhMmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWJlNzlhMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWJlNzlhMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWJlNzlhMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FpclF1YWxpdHlBbm51YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZTc5YTJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiZTc5YTJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5QW5udWFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eUFubnVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyUXVhbGl0eUFubnVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlBbm51YWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZTc5YTJjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9haXJRdWFsaXR5UmFuay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmRlY2NmMzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWlyUXVhbGl0eVJhbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9haXJRdWFsaXR5UmFuay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWlyUXVhbGl0eVJhbmsudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmRlY2NmMzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZGVjY2YzOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZGVjY2YzOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZGVjY2YzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZGVjY2YzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYWlyUXVhbGl0eVJhbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkZWNjZjM5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJkZWNjZjM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5UmFuay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlSYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UmFuay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5UmFuay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZGVjY2YzOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlSYW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGVjY2YzOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWlyUXVhbGl0eVRyZW5kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmVlYjQ0MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FpclF1YWxpdHlUcmVuZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmVlYjQ0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZiZWViNDQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZiZWViNDQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZiZWViNDQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZiZWViNDQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZWViNDQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiZWViNDQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5VHJlbmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlUcmVuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJlZWI0NDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5VHJlbmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZWViNDQwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hbm51YWxFY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1YjEyMTM2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FubnVhbEVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FubnVhbEVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI1YjEyMTM2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1YjEyMTM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1YjEyMTM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1YjEyMTM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hbm51YWxFY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1YjEyMTM2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1YjEyMTM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2FubnVhbEVjaGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FubnVhbEVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5udWFsRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5udWFsRWNoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWIxMjEzNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2MDE2ZjUxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2MDE2ZjUxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTYwMTZmNTFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTYwMTZmNTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTYwMTZmNTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTYwMTZmNTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjAxNmY1MSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NjAxNmY1MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2MDE2ZjUxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2MDE2ZjUxJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==