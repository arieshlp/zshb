(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "basicInfo",
  props: {
    siteInfo: {
      type: Object,
      default: function _default() {}
    },
    siteId: {
      type: String,
      default: function _default() {}
    },
    siteName: {
      type: String,
      default: function _default() {}
    },
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  watch: {},
  data: function data() {
    return {
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_1__["getThisDate"])(1)
    };
  },
  methods: {
    goCalender: function goCalender() {
      this.$router.push({
        name: 'airCalendarQuery',
        query: {
          siteId: this.siteId,
          siteName: this.siteName,
          xzqh: this.$route.query.xzqh,
          title: "空气质量日历",
          queryFlag: this.queryFlag
        }
      });
    },
    goGeoLocation: function goGeoLocation() {
      this.$router.push({
        name: 'airLocationMap',
        query: {
          siteName: this.siteName,
          siteId: this.siteId,
          longitude: this.siteInfo.longitude,
          latitude: this.siteInfo.latitude
        }
      });
    }
  },
  filters: {
    getMinorBg: function getMinorBg(key) {
      var status = "";

      if (key == null) {
        status = 'air_yellow';
      } else if (key <= 50) {
        status = 'air_green';
      } else if (key <= 100 && key > 50) {
        status = 'air_yellow'; // }else if(key <= 150 && key > 100){
        // 	status = 'hour_orange_bg';
        // }else if(key <= 200 && key > 150){
        // 	status = 'hour_red_bg';
      } else if (key > 100) {
        status = 'air_orange';
      } else {
        status = '';
      }

      return status;
    },
    getMajorBg: function getMajorBg(key) {
      var status = "";

      if (key == null) {
        status = 'air_main_yellow';
      } else if (key <= 50) {
        status = 'air_main_green';
      } else if (key <= 100 && key > 50) {
        status = 'air_main_yellow'; // }else if(key <= 150 && key > 100){
        // 	status = 'hour_orange_bg';
        // }else if(key <= 200 && key > 150){
        // 	status = 'hour_red_bg';
      } else if (key > 100) {
        // > 200
        status = 'air_main_orange';
      } else {
        status = '';
      }

      return status;
    },
    getModuleBg: function getModuleBg(key) {
      var status = "";

      if (key == null) {
        status = 'air_yellow_bg';
      } else if (key <= 50) {
        status = 'air_green_bg';
      } else if (key <= 100 && key > 50) {
        status = 'air_yellow_bg'; // }else if(key <= 150 && key > 100){
        // 	status = 'hour_orange_bg';
        // }else if(key <= 200 && key > 150){
        // 	status = 'hour_red_bg';
      } else if (key > 100) {
        //key > 200
        status = 'air_orange_bg';
      } else {
        status = '';
      }

      return status;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_airUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/airUtils.js */ "./src/utils/airUtils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "factorDes",
  props: {
    objData: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      active: 'aqi'
    };
  },
  methods: {
    changeTab: function changeTab(val, title) {
      this.active = val;
      this.$emit('changeFactor', title);
    },
    getColor: function getColor(value, factor) {
      var key = value;
      var style = '';
      var bg = this.active === factor ? 'background-color: #3f7bff;color:#fff' : '';

      if (value === '' || value === '-') {
        style = this.onCalenderBgColor(factor, key) + ';';
      } else {
        style = this.onCalenderBgColor(factor, key) + ';';
      }

      return style + bg;
    },
    getSpanColor: function getSpanColor(value, factor) {
      var color = this.active !== factor ? 'color:rgba(37, 57, 111, 0.5)' : '';
      return color;
    },
    onCalenderBgColor: function onCalenderBgColor(yzName, count) {
      var tempCount = count === '-' ? '' : count;
      return Object(_utils_airUtils_js__WEBPACK_IMPORTED_MODULE_0__["getCalenderBgColor"])(yzName, tempCount);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _utils_airUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/airUtils */ "./src/utils/airUtils.js");
/* harmony import */ var _views_airHomePage_airStationDetail_components_tableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/tableData */ "./src/views/airHomePage/airStationDetail/components/tableData.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "fiveMinutesData",
  components: {
    tableData: _views_airHomePage_airStationDetail_components_tableData__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      currentDate: new Date(),
      endPop: false,
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY-MM-DD'),
      factorData: [{
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
      factorPop: false,
      factorTabIndex: 0,
      listData: [],
      minutesRef: null
    };
  },
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    },
    tabIndex: {
      type: Number,
      default: function _default() {}
    },
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  watch: {
    siteId: function siteId(val, old) {
      if (val != old) {
        this.initChart(this.minutesRef);
      }
    },
    queryFlag: function queryFlag(val, old) {
      this.initChart(this.minutesRef);
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.minutesRef) {
      this.minutesRef = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.$refs.minutesRef);
      setTimeout(function () {
        _this.initChart(_this.minutesRef);
      });
    }
  },
  methods: {
    changeFactorTab: function changeFactorTab(obj, index) {
      this.factorTabIndex = index;
      this.factor = obj.value;
      this.initChart(this.minutesRef);
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(value).format('YYYY-MM-DD');
      this.endPop = false;
      this.initChart(this.minutesRef);
    },
    initChart: function initChart(chartInstance) {
      var _this2 = this;

      var option = {
        color: ['rgba(68, 123, 252, 1)'],
        legend: {
          show: false
        },
        grid: {
          top: '11%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis'
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
          name: this.factor == 'AQI' ? '' : this.factor == 'CO' ? 'mg/m³' : 'ug/m³',
          nameGap: 8,
          nameTextStyle: {
            color: "#333",
            align: "center"
          },
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
          data: [],
          type: 'line',
          showSymbol: false,
          smooth: true,
          markLine: {
            symbol: 'none',
            data: Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_8__["getMark"])(this.factor)
          }
        }]
      };
      var info = {
        dataType: 1,
        dateTime: this.endTime,
        siteId: this.siteId,
        type: this.factor == 'O3' ? 'OZONE' : this.factor,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      }; // if(this.tabIndex==1){

      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_7__["airQualitySiteDataTypeAnother"])(info).then(function (res) {
        var sArr = [];
        var xArr = [];
        var rdata = res.data;

        if (rdata.list.length > 0) {
          rdata.list.forEach(function (item) {
            xArr.push(item.name.substr(11, 5));
            sArr.push(item.value);
          });
          option.xAxis.data = xArr;
          option.series[0].data = sArr;
        }

        var tempD = rdata.list.concat([]);
        _this2.listData = tempD.reverse();
        chartInstance.setOption(option);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
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
  name: "geoLocation",
  props: {
    siteInfo: {
      type: Object,
      default: function _default() {}
    },
    siteId: {
      type: String,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail() {
      this.$router.push({
        name: "pdfH5",
        query: {
          // url: 'http://10.220.11.65:9002/default/9b8c22d0-d60f-11ee-d8be-e8ec872b3eaa.pdf',
          url: 'http://10.221.29.4:7001/default/9b8c22d0-d60f-11ee-d8be-e8ec872b3eaa.pdf',
          name: '一站一策”防控方案'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
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
  name: "highVideo",
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail() {
      this.$router.push({
        name: 'highVideo',
        query: {
          siteId: this.siteId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _views_airHomePage_airStationDetail_components_tableData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/tableData */ "./src/views/airHomePage/airStationDetail/components/tableData.vue");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_airUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/airUtils */ "./src/utils/airUtils.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var colors = ['rgba(68, 123, 252, 1)', '#2bff96', '#5c36c1', '#c49256', '#e9b229', '#f16e16', '#9865d2', '#d0495f', '#ffba3b', '#00dcd3', '#1be1b7', '#4952ff', '#0069f7', '#00dcfa', '#54bf7b', '#c30072', '#02ffff', '#4673ff', '#d45050', '#24ff00', '#37ce80', '#d89252', '#ce77ce', '#26ff15', '#a52aeb', '#ff65ba', '#4de240', '#1c75b2', '#db018b'];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "hourData",
  components: {
    tableData: _views_airHomePage_airStationDetail_components_tableData__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    },
    tabIndex: {
      type: Number,
      default: function _default() {}
    },
    factorProps: {
      type: String,
      default: function _default() {}
    },
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  data: function data() {
    return {
      compareSiteIds: "",
      factorPop: false,
      checkArrName: [],
      colorsArr: colors,
      checkArr: [],
      hourRef: null,
      factor: 'AQI',
      factorName: 'AQI',
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
      endTimePop: false,
      currentDate: new Date(),
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_10___default()(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      showEndTime: dayjs__WEBPACK_IMPORTED_MODULE_10___default()(new Date()).format('YYYY-MM-DD HH'),
      proArr: [{
        text: '首要污染物',
        val: 1
      }, {
        text: '超标污染物',
        val: 2
      }],
      proPop: false,
      showPicker: false,
      seachChecker: "",
      secondList: [],
      desclist: [],
      listData: []
    };
  },
  watch: {
    tabIndex: function tabIndex(val) {
      if (val == 0) {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(this.endTime).format('YYYY-MM-DD HH:mm:ss');
        this.showEndTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(this.endTime).format('YYYY-MM-DD HH');
      } else {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(this.endTime).format('YYYY-MM-DD');
        this.showEndTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(this.endTime).format('YYYY-MM-DD');
      }

      this.initChart(this.hourRef);
    },
    siteId: function siteId(val, old) {
      if (val != old) {
        this.initChart(this.hourRef);
      }
    },
    queryFlag: function queryFlag(val, old) {
      if (val != old) {
        this.initChart(this.hourRef);
      }
    },
    seachChecker: {
      handler: function handler() {
        var _this = this;

        if (this.seachChecker == '') {
          this.secondList = this.desclist;
        } else {
          this.secondList = [];
          this.desclist.forEach(function (item) {
            if (item.siteName.indexOf(_this.seachChecker) > -1 || item.controlLevel.indexOf(_this.seachChecker) > -1) {
              _this.secondList.push(item);
            }
          });
        }
      },
      immediate: true
    },
    factorProps: function factorProps(newD) {
      this.factor = newD;
      this.initChart(this.hourRef);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (!this.hourRef) {
      this.hourRef = echarts__WEBPACK_IMPORTED_MODULE_9__["init"](this.$refs.hourRef);
      setTimeout(function () {
        _this2.initChart(_this2.hourRef);
      });
    }

    this.getSite();
  },
  methods: {
    //查询所有站点
    getSite: function getSite() {
      var _this3 = this;

      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_12__["getAirSite"])({
        type: 2
      }).then(function (res) {
        _this3.desclist = res.data;
        _this3.secondList = res.data;
      });
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      if (this.tabIndex == 0) {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(value).format('YYYY-MM-DD HH:mm:ss');
        this.showEndTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(value).format('YYYY-MM-DD HH');
      } else {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(value).format('YYYY-MM-DD');
        this.showEndTime = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(value).format('YYYY-MM-DD');
      }

      this.initChart(this.hourRef);
      this.endTimePop = false;
    },
    onConfirmFactor: function onConfirmFactor(val) {
      this.factorName = val.text;
      this.factor = val.value;
      this.initChart(this.hourRef);
      this.factorPop = false;
    },
    onConfirmPro: function onConfirmPro(obj) {
      this.showfactor = obj.text;
      this.proPop = false;
    },
    initChart: function initChart(chartInstance) {
      var _this4 = this;

      var option = {
        color: this.colorsArr,
        legend: {
          show: false
        },
        grid: {
          top: '11%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis'
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
          data: []
        },
        yAxis: {
          type: 'value',
          name: this.factor == 'AQI' ? '' : this.factor == 'CO' ? 'mg/m³' : 'ug/m³',
          nameGap: 8,
          nameTextStyle: {
            color: "#333",
            align: "center"
          },
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
        series: []
      };
      var allIds = this.siteId + "," + this.compareSiteIds;
      var info = {
        dateType: this.tabIndex == 2 ? '2' : '1',
        dateTime: this.endTime,
        siteIds: allIds,
        type: this.factor,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_12__["siteComparison"])(info).then(function (res) {
        var sArr = [];
        var xArr = [];
        var rdata = res.data;
        chartInstance.clear();

        if (rdata.length > 0) {
          var _loop = function _loop(i) {
            sArr.push([]);
            xArr = [];
            rdata[i].forEach(function (item) {
              if (_this4.siteId == item.siteId) {
                var listData = rdata[i].concat([]);
                _this4.listData = listData.reverse();
              }

              if (_this4.tabIndex == 0) {
                xArr.push(item.ratio.substr(11, 2) + '时');
              } else {
                xArr.push(item.ratio.substr(8, 2) + '日');
              } // xArr.push(item.ratio.substr(11, 2)+'时');


              var sss = [];
              sss.push(item.value);
              sArr[i].push(item.value);
            });
            option.series.push({
              name: rdata[i][0].name,
              data: sArr[i],
              type: 'line',
              showSymbol: false,
              smooth: true,
              markLine: {
                symbol: 'none',
                data: []
              }
            });
          };

          for (var i = 0; i < rdata.length; i++) {
            _loop(i);
          }

          option.series[0].markLine.data = Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_11__["getMark"])(_this4.factor);
          option.xAxis.data = xArr;
        }

        chartInstance.setOption(option);
      });
    },
    showSitePop: function showSitePop() {
      this.showPicker = true;
      this.checkArr = this.checkArrName;
    },
    close: function close(row) {
      this.checkArrName = this.checkArrName.filter(function (item) {
        return item.id !== row.id;
      });
      var compareSiteIds = this.checkArrName.map(function (item) {
        return item.id;
      });
      this.compareSiteIds = compareSiteIds.join(','); // 字符串拼接

      this.initChart(this.hourRef);
    },
    onConfirmJcr: function onConfirmJcr() {
      if (this.checkArr.length > 0) {
        var narrids = [];
        this.checkArr.forEach(function (item) {
          narrids.push(item.id);
        });
        this.compareSiteIds = narrids.join(','); // 字符串拼接
      } else {
        this.compareSiteIds = ''; // 字符串拼接
      }

      this.checkArrName = this.checkArr;
      this.initChart(this.hourRef);
      this.showPicker = false;
    },
    toggle: function toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");
//
//
//
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
  name: "involveAirPollution",
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    },
    siteInfo: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteId: function siteId(val, old) {
      if (val != old) {
        this.queryData();
      }
    }
  },
  data: function data() {
    return {
      num: 0
    };
  },
  mounted: function mounted() {},
  methods: {
    queryData: function queryData() {
      var _this = this;

      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_0__["pollSize"])({
        siteId: this.siteId
      }).then(function (res) {
        _this.num = res.data;
      });
    },
    toDetail: function toDetail() {
      console.log(this.siteInfo);
      this.$router.push({
        name: 'airPollutionSort',
        query: {
          siteId: this.siteId,
          siteName: this.siteInfo.siteName
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pollutionPro",
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    },
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  components: {
    proportionEchart: _views_airHomePage_components_echarts_proportionEchart__WEBPACK_IMPORTED_MODULE_2__["default"],
    airFilter: _components_airFilter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    siteId: function siteId(val, old) {
      console.log(val);
    }
  },
  data: function data() {
    return {
      showfactor: '首要污染物',
      factor2: '1',
      proPop: false,
      proArr: [{
        text: '首要污染物',
        val: 1
      }, {
        text: '超标污染物',
        val: 2
      }],
      index: 1,
      time: null
    };
  },
  mounted: function mounted() {
    this.time = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');
  },
  methods: {
    /*onConfirmPro(obj) {
      this.showfactor = obj.text;
      this.factor2 = obj.val;
      this.proPop = false;
    },*/
    loadData: function loadData(value) {
      this.index = value;
      this.factor2 = value;
    },
    getType: function getType(obj, type) {
      this.time = obj.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_airHomePage_components_echarts_annualEchart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/airHomePage/components/echarts/annualEchart */ "./src/views/airHomePage/components/echarts/annualEchart.vue");
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
  name: "pollutionTrend",
  components: {
    annualEchart: _views_airHomePage_components_echarts_annualEchart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    }
  },
  watch: {
    siteId: function siteId(val, old) {
      console.log(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
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
  name: "surroundWeather",
  props: {
    siteInfo: {
      type: Object,
      default: function _default() {}
    },
    siteId: {
      type: String,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail() {
      this.$router.push({
        name: 'airWeatherMap',
        query: {
          siteName: this.$route.query.siteName,
          siteId: this.siteId,
          longitude: this.siteInfo.longitude,
          latitude: this.siteInfo.latitude
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "tableData",
  props: {
    listData: {
      type: Array,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      unfold: false
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _utils_airUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/airUtils */ "./src/utils/airUtils.js");
/* harmony import */ var _components_airFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/airFilter */ "./src/components/airFilter.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "yoyData",
  props: {
    siteId: {
      type: String,
      default: function _default() {}
    },
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  components: {
    airFilter: _components_airFilter__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      factorData: [{
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
      listData: [],
      factor: 'AQI',
      factorTabIndex: 0,
      yoyRef: null,
      dataType: '小时数据',
      endPop: false,
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD'),
      tbType: 1,
      columns: [{
        text: '小时数据',
        val: 1
      }, {
        text: '日数据',
        val: 2
      }],
      typePop: false,
      currentDate: new Date()
    };
  },
  watch: {
    siteId: function siteId(val, old) {
      if (val != old) {
        this.initChart(this.yoyRef);
      }
    },
    queryFlag: function queryFlag(val, old) {
      console.log(val);
      this.initChart(this.yoyRef);
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.yoyRef) {
      this.yoyRef = echarts__WEBPACK_IMPORTED_MODULE_5__["init"](this.$refs.yoyRef);
      setTimeout(function () {
        _this.initChart(_this.yoyRef);
      });
    }
  },
  methods: {
    changeFactorTab: function changeFactorTab(obj, index) {
      this.factorTabIndex = index;
      this.factor = obj.value;
      this.initChart(this.yoyRef);
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM-DD');
      this.endPop = false;
      this.initChart(this.yoyRef);
    },
    onConfirmTypeTime: function onConfirmTypeTime(obj) {
      this.dataType = obj.text;
      this.tbType = obj.val;
      this.typePop = false;
      this.initChart(this.yoyRef);
    },
    getType: function getType(obj, type) {
      this.tbType = obj.value === '小时数据' ? '1' : '2';
      this.initChart(this.yoyRef);
    },
    initChart: function initChart(chartInstance) {
      var _this2 = this;

      var option = {
        color: ['rgba(68, 123, 252, 1)', 'rgba(6, 184, 47, 1)', 'rgb(239,219,24)'],
        legend: {
          data: ['去年', '今年', '上月'],
          right: 0,
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6
        },
        grid: {
          top: '15%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis'
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
          name: '今年',
          data: [],
          type: 'line',
          showSymbol: false,
          smooth: true,
          markLine: {
            symbol: 'none',
            data: Object(_utils_airUtils__WEBPACK_IMPORTED_MODULE_7__["getMark"])(this.factor)
          }
        }, {
          name: '去年',
          data: [],
          type: 'line',
          showSymbol: false,
          smooth: true
        }, {
          name: '上月',
          data: [],
          type: 'line',
          showSymbol: false,
          smooth: true
        }]
      };
      var info = {
        dataType: 2,
        dateTime: this.endTime,
        siteId: this.siteId,
        type: this.factor,
        tbType: this.tbType,
        //小时数据1 日数据2
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_6__["airQualitySiteDataTypeAnother"])(info).then(function (res) {
        var sArr1 = [],
            sArr0 = [];
        var xArr = [];
        var sArr2 = [];
        var rdata = res.data;

        if (rdata.ultimatelyList.length > 0) {
          rdata.ultimatelyList.forEach(function (item) {
            if (_this2.tbType == 2) {
              xArr.push(item.time.substr(8, 2) + '日');
            } else {
              xArr.push(item.time.substr(11, 2) + '时');
            }

            sArr0.push(item.this);
            sArr1.push(item.last);
          });
        }

        if (rdata.listLastLink.length > 0) {
          rdata.listLastLink.forEach(function (item) {
            sArr2.push(item.value);
          });
        }

        option.series[1].data = sArr1; //去年

        option.series[0].data = sArr0; //今年

        option.series[2].data = sArr2; //上月

        option.xAxis.data = xArr;
        var listdata = rdata.ultimatelyList.concat([]);
        _this2.listData = listdata.reverse();
        chartInstance.setOption(option);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _views_airHomePage_airStationDetail_components_basicInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/basicInfo */ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_factorDes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/factorDes */ "./src/views/airHomePage/airStationDetail/components/factorDes.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_hourData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/hourData */ "./src/views/airHomePage/airStationDetail/components/hourData.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_fiveMinutesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/fiveMinutesData */ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_yoyData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/yoyData */ "./src/views/airHomePage/airStationDetail/components/yoyData.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_highVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/highVideo */ "./src/views/airHomePage/airStationDetail/components/highVideo.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_geoLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/geoLocation */ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_pollutionPro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/pollutionPro */ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_pollutionTrend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/pollutionTrend */ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_involveAirPollution__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/involveAirPollution */ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue");
/* harmony import */ var _views_airHomePage_airStationDetail_components_surroundWeather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/airHomePage/airStationDetail/components/surroundWeather */ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    basicInfo: _views_airHomePage_airStationDetail_components_basicInfo__WEBPACK_IMPORTED_MODULE_2__["default"],
    factorDes: _views_airHomePage_airStationDetail_components_factorDes__WEBPACK_IMPORTED_MODULE_3__["default"],
    hourData: _views_airHomePage_airStationDetail_components_hourData__WEBPACK_IMPORTED_MODULE_4__["default"],
    fiveMinutesData: _views_airHomePage_airStationDetail_components_fiveMinutesData__WEBPACK_IMPORTED_MODULE_5__["default"],
    yoyData: _views_airHomePage_airStationDetail_components_yoyData__WEBPACK_IMPORTED_MODULE_6__["default"],
    highVideo: _views_airHomePage_airStationDetail_components_highVideo__WEBPACK_IMPORTED_MODULE_7__["default"],
    geoLocation: _views_airHomePage_airStationDetail_components_geoLocation__WEBPACK_IMPORTED_MODULE_8__["default"],
    pollutionPro: _views_airHomePage_airStationDetail_components_pollutionPro__WEBPACK_IMPORTED_MODULE_9__["default"],
    pollutionTrend: _views_airHomePage_airStationDetail_components_pollutionTrend__WEBPACK_IMPORTED_MODULE_10__["default"],
    involveAirPollution: _views_airHomePage_airStationDetail_components_involveAirPollution__WEBPACK_IMPORTED_MODULE_11__["default"],
    surroundWeather: _views_airHomePage_airStationDetail_components_surroundWeather__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      tabArr: ['小时数据', '五分钟数据', '日数据', '同环比查询'],
      tabIndex: 0,
      bmList: ['国考', '其他'],
      desclist: [],
      secondList: [],
      siteIndex: 0,
      siteSecondId: 0,
      sitePop: false,
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_1__["getThisDate"])(1),
      siteId: "",
      level: "",
      siteName: "",
      objData: {},
      siteLevel: "",
      xzqh: '',
      siteInfo: {
        hourAqi: 0,
        hourAqiState: 0,
        dayAqiState: 0,
        dayAqi: 0,
        zxl: 0
      },
      titleIndex: 0,
      factorName: ''
    };
  },
  watch: {
    siteId: function siteId(val, old) {
      if (val != old) {
        this.getSite();
        this.getYZData();
      }
    }
  },
  mounted: function mounted() {
    this.getSiteList();
    this.xzqh = this.$route.query.xzqh;
    this.siteId = this.$route.query.siteId;
    this.siteName = this.$route.query.siteName;
    this.siteLevel = this.$route.query.siteLevel;
    this.level = this.siteLevel[0];
    this.getSite();
    this.getYZData();
  },
  methods: {
    //查询站点信息
    getSite: function getSite() {
      var _this = this;

      var info = {
        siteId: this.siteId,
        divisionName: this.xzqh,
        aqi: this.titleIndex === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_0__["airQualitySiteData"])(info).then(function (res) {
        _this.siteInfo = res.data;
      });
    },
    //查询站点经纬度

    /*getSiteLocation() {
      airQualitySiteData({
        siteId: this.siteId
      }).then(res => {
        this.siteInfo = res.data;
      })
    },*/
    //切换站点时的所有站点
    getSiteList: function getSiteList() {
      var _this2 = this;

      var info = {
        type: 1,
        divisionName: this.xzqh
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_0__["getAirSite"])(info).then(function (res) {
        _this2.desclist = res.data;
        _this2.secondList = _this2.desclist.gk;
      });
    },
    //因子数据
    getYZData: function getYZData() {
      var _this3 = this;

      var info2 = {
        dataType: this.tabIndex + 1,
        siteId: this.siteId,
        divisionName: this.xzqh,
        aqi: this.titleIndex === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_0__["airQualitySiteDataType"])(info2).then(function (res) {
        _this3.objData = res.data;
      });
    },
    changeSiteTab: function changeSiteTab(index) {
      this.siteIndex = index;

      if (index == 0) {
        this.secondList = this.desclist.gk;
      } else {
        this.secondList = this.desclist.qt;
      }

      this.sitePop = true;
      console.log(this.sitePop);
    },
    //小时数据、五分钟数据等切换
    changeTab: function changeTab(index) {
      this.tabIndex = index;

      if (index == 0 || index == 2) {
        this.getYZData();
      }
    },
    //站点切换-站点选择
    changeSecondSiteTab: function changeSecondSiteTab(row) {
      this.siteId = row.id;
      this.siteName = row.siteName;
      this.siteLevel = row.controlLevel;
      this.level = this.siteLevel[0];
      this.sitePop = false;
    },
    changeFactor: function changeFactor(value) {
      console.log(value);
      this.factorName = value;
    },
    changeTitle: function changeTitle(index) {
      this.titleIndex = index;
      this.getSite();
      this.getYZData();
    },
    //超标告警
    toOver: function toOver() {
      this.$router.push({
        name: 'airAlarm',
        query: {
          siteId: this.siteId
        }
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "air_main",
      class: _vm._f("getModuleBg")(_vm.siteInfo.hourAqi),
    },
    [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "air_first" }, [
          _vm._v("更新时间：" + _vm._s(_vm.siteInfo.time)),
        ]),
        _c(
          "div",
          {
            staticClass: "air-calender fs",
            on: {
              click: function ($event) {
                return _vm.goCalender()
              },
            },
          },
          [
            _c("img", {
              staticStyle: { "margin-right": "5px" },
              attrs: {
                src: __webpack_require__(/*! @/assets/polluter/calendar.png */ "./src/assets/polluter/calendar.png"),
                width: "14",
              },
            }),
            _vm._v(" 空气质量日历 "),
          ]
        ),
      ]),
      _c("div", { staticClass: "fs" }, [
        _c(
          "div",
          {
            staticClass: "air_main_left",
            class: _vm._f("getMajorBg")(_vm.siteInfo.hourAqi),
          },
          [
            _c(
              "span",
              {
                staticClass: "tips",
                class: _vm._f("getMinorBg")(_vm.siteInfo.hourAqi),
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.siteInfo.hourAqiState.length > 2
                      ? _vm.siteInfo.hourAqiState.slice(0, 1)
                      : _vm.siteInfo.hourAqiState
                  )
                ),
              ]
            ),
            _c("span", { staticClass: "date" }, [
              _vm._v(" " + _vm._s(_vm.siteInfo.hourAqi) + " "),
            ]),
          ]
        ),
        _c("div", { staticClass: "site-info fs" }, [
          _c("div", { staticStyle: { width: "50%" } }, [
            _c("div", [_vm._v("日累计AQI")]),
            _c("div", { staticClass: "num" }, [
              _vm._v(_vm._s(_vm.siteInfo.dayAqi || "-")),
            ]),
          ]),
          _c("div", { staticStyle: { width: "50%" } }, [
            _c("div", [_vm._v("全年优良率")]),
            _c("div", { staticClass: "num" }, [
              _vm._v(_vm._s(_vm.siteInfo.goodRatio || "-") + "%"),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "air_bottom" }, [
        _vm._v(" * 空气质量数据未经审核，仅供参考 "),
        _c(
          "div",
          {
            staticClass: "fs",
            on: {
              click: function ($event) {
                return _vm.goGeoLocation()
              },
            },
          },
          [
            _c("img", {
              staticStyle: { "margin-right": "3px" },
              attrs: {
                src: __webpack_require__(/*! @/assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                width: "16",
              },
            }),
            _vm._v("地理位置"),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hourData" }, [
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.aqi, "aqi"),
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
            staticStyle: { "vertical-align": "center" },
            style: _vm.getSpanColor(_vm.objData.aqi, "aqi"),
          },
          [_c("span", [_vm._v("AQI")])]
        ),
        _c("span", [_vm._v(_vm._s(_vm.objData.aqi))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.pm25, "pm25"),
        on: {
          click: function ($event) {
            return _vm.changeTab("pm25", "PM25", "pm25Iaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.pm25, "pm25") }, [
          _c("span", [_vm._v("PM2.5")]),
          _c("span", [_vm._v("ug/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.pm25))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.pm10, "pm10"),
        on: {
          click: function ($event) {
            return _vm.changeTab("pm10", "PM10", "pm10Iaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.pm10, "pm10") }, [
          _c("span", [_vm._v("PM10")]),
          _c("span", [_vm._v("ug/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.pm10))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.so2, "so2"),
        on: {
          click: function ($event) {
            return _vm.changeTab("so2", "SO2", "so2Iaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.so2, "so2") }, [
          _c("span", [_vm._v("SO2")]),
          _c("span", [_vm._v("ug/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.so2))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.no2, "no2"),
        on: {
          click: function ($event) {
            return _vm.changeTab("no2", "NO2", "no2Iaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.no2, "no2") }, [
          _c("span", [_vm._v("NO2")]),
          _c("span", [_vm._v("ug/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.no2))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.co, "co"),
        on: {
          click: function ($event) {
            return _vm.changeTab("co", "CO", "coIaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.co, "co") }, [
          _c("span", [_vm._v("CO")]),
          _c("span", [_vm._v("mg/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.co))]),
      ]
    ),
    _c(
      "div",
      {
        style: _vm.getColor(_vm.objData.ozone, "ozone"),
        on: {
          click: function ($event) {
            return _vm.changeTab("ozone", "OZONE", "ozoneIaqi")
          },
        },
      },
      [
        _c("span", { style: _vm.getSpanColor(_vm.objData.ozone, "ozone") }, [
          _c("span", [_vm._v("O3")]),
          _c("span", [_vm._v("ug/m³")]),
        ]),
        _c("span", [_vm._v(_vm._s(_vm.objData.ozone))]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "van-row",
        { staticClass: "air-search", attrs: { gutter: 10 } },
        [
          _c(
            "van-col",
            { attrs: { span: "8" } },
            [
              _c("van-field", {
                attrs: {
                  readonly: "",
                  clickable: "",
                  value: _vm.endTime,
                  "input-align": "right",
                  "right-icon": "arrow-down",
                },
                on: {
                  click: function ($event) {
                    _vm.endPop = true
                  },
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
        { staticClass: "factor-wrapper" },
        _vm._l(_vm.factorData, function (item, i) {
          return _c(
            "div",
            {
              staticClass: "factor-item",
              class: [i === _vm.factorTabIndex ? "active" : ""],
              on: {
                click: function ($event) {
                  return _vm.changeFactorTab(item, i)
                },
              },
            },
            [_vm._v(_vm._s(item.text) + " ")]
          )
        }),
        0
      ),
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
            attrs: { type: "date", title: "选择年月" },
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
        "div",
        {
          staticClass: "company-info",
          staticStyle: { margin: "6px 10px 0px", background: "#fff" },
        },
        [
          _c("div", {
            ref: "minutesRef",
            staticStyle: { height: "200px", width: "96%", margin: "0 auto" },
          }),
        ]
      ),
      _c("tableData", { attrs: { listData: _vm.listData } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "air-site-box-info", on: { click: _vm.toDetail } },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "air-site-title" }, [
      _c("span", { staticClass: "black_content" }, [_vm._v("一站一策")]),
      _c(
        "div",
        {
          staticStyle: {
            "margin-left": "auto",
            color: "rgba(18, 18, 54, 0.5)",
            "line-height": "25px",
          },
        },
        [
          _vm._v(" 查看 "),
          _c("img", {
            staticStyle: { "margin-left": "10px", "vertical-align": "middle" },
            attrs: { src: __webpack_require__(/*! @/assets/polluter/rightIcon.png */ "./src/assets/polluter/rightIcon.png") },
          }),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "air-site-box-info", on: { click: _vm.toDetail } },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "air-site-title" }, [
      _c("span", { staticClass: "black_content" }, [_vm._v("高空视频数据")]),
      _c(
        "div",
        {
          staticStyle: {
            "margin-left": "auto",
            color: "rgba(18, 18, 54, 0.5)",
            "line-height": "25px",
          },
        },
        [
          _vm._v(" 查看 "),
          _c("img", {
            staticStyle: { "margin-left": "10px", "vertical-align": "middle" },
            attrs: { src: __webpack_require__(/*! @/assets/polluter/rightIcon.png */ "./src/assets/polluter/rightIcon.png") },
          }),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "site_compare" }, [
        _c("div", { staticClass: "compare_title" }, [
          _vm._v("站点对比："),
          _c("span", { on: { click: _vm.showSitePop } }, [
            _vm._v("添加对比站点"),
          ]),
        ]),
        _c(
          "div",
          { staticClass: "compare_station" },
          _vm._l(_vm.checkArrName, function (item, index) {
            return _c(
              "div",
              {
                staticClass: "yellow_border",
                style: "border-left: 2px solid" + _vm.colorsArr[index + 1],
              },
              [
                _c("span", [_vm._v(_vm._s(item.siteName))]),
                _c("img", {
                  attrs: { src: __webpack_require__(/*! @/assets/polluter/close.png */ "./src/assets/polluter/close.png") },
                  on: {
                    click: function ($event) {
                      return _vm.close(item)
                    },
                  },
                }),
              ]
            )
          }),
          0
        ),
        _c("div", {
          ref: "hourRef",
          staticStyle: { height: "200px", width: "100%", margin: "0 auto" },
        }),
      ]),
      _c(
        "van-popup",
        {
          staticStyle: { height: "45%" },
          attrs: { position: "bottom" },
          model: {
            value: _vm.showPicker,
            callback: function ($$v) {
              _vm.showPicker = $$v
            },
            expression: "showPicker",
          },
        },
        [
          _c("div", { staticClass: "popup vselectpop" }, [
            _c(
              "div",
              { staticClass: "popup_title" },
              [
                _c(
                  "div",
                  {
                    staticClass: "l-cance",
                    on: {
                      click: function ($event) {
                        _vm.showPicker = false
                      },
                    },
                  },
                  [_vm._v("取消")]
                ),
                _c("van-search", {
                  staticStyle: { width: "76%" },
                  attrs: { placeholder: "请输入" },
                  model: {
                    value: _vm.seachChecker,
                    callback: function ($$v) {
                      _vm.seachChecker = $$v
                    },
                    expression: "seachChecker",
                  },
                }),
                _c(
                  "div",
                  {
                    staticClass: "r-confirm txtblue",
                    on: { click: _vm.onConfirmJcr },
                  },
                  [_vm._v(" 确认")]
                ),
              ],
              1
            ),
            _c(
              "div",
              { staticClass: "popup_content" },
              [
                _c(
                  "van-checkbox-group",
                  {
                    model: {
                      value: _vm.checkArr,
                      callback: function ($$v) {
                        _vm.checkArr = $$v
                      },
                      expression: "checkArr",
                    },
                  },
                  [
                    _c(
                      "van-cell-group",
                      _vm._l(_vm.secondList, function (item, index) {
                        return _c("van-cell", {
                          key: "jcyz" + index,
                          attrs: { clickable: "", title: "" + item.reName },
                          on: {
                            click: function ($event) {
                              return _vm.toggle(index)
                            },
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "title",
                                fn: function () {
                                  return [
                                    _c(
                                      "span",
                                      { staticClass: "custom-title" },
                                      [_vm._v(_vm._s(item.siteName))]
                                    ),
                                    _c(
                                      "van-tag",
                                      {
                                        staticStyle: { "margin-left": "10px" },
                                        attrs: { type: "primary" },
                                      },
                                      [_vm._v(_vm._s(item.controlLevel))]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "right-icon",
                                fn: function () {
                                  return [
                                    _c("van-checkbox", {
                                      ref: "checkboxes",
                                      refInFor: true,
                                      attrs: { name: item },
                                    }),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        })
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.proPop,
            callback: function ($$v) {
              _vm.proPop = $$v
            },
            expression: "proPop",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              title: "数据类型",
              "show-toolbar": "",
              columns: _vm.proArr,
            },
            on: {
              confirm: _vm.onConfirmPro,
              cancel: function ($event) {
                _vm.proPop = false
              },
            },
          }),
        ],
        1
      ),
      _c("tableData", { attrs: { listData: _vm.listData } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.num > 0
    ? _c(
        "div",
        { staticClass: "air-site-box-info", on: { click: _vm.toDetail } },
        [
          _c("div", { staticClass: "air-site-title" }, [
            _c("span", { staticClass: "black_content" }, [
              _vm._v("涉气污染源"),
            ]),
            _c("span", { staticClass: "number" }, [
              _vm._v("(" + _vm._s(_vm.num) + "家)"),
            ]),
            _vm._m(0),
          ]),
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          "margin-left": "auto",
          color: "rgba(18, 18, 54, 0.5)",
          "line-height": "25px",
        },
      },
      [
        _vm._v(" 查看 "),
        _c("img", {
          staticStyle: { "margin-left": "10px", "vertical-align": "middle" },
          attrs: { src: __webpack_require__(/*! @/assets/polluter/rightIcon.png */ "./src/assets/polluter/rightIcon.png") },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "air-site-box-info" },
    [
      _c("div", { staticClass: "air-site-title" }, [
        _c("span", { staticClass: "black_content" }, [
          _vm._v("站点污染物占比"),
        ]),
        _c("span", { staticStyle: { "margin-left": "auto" } }, [
          _c(
            "div",
            { staticClass: "search-content", staticStyle: { margin: "0px" } },
            [
              _c(
                "div",
                {
                  staticClass: "search-item fs",
                  staticStyle: {
                    width: "100%",
                    "margin-top": "0px",
                    padding: "3px 6px",
                  },
                  on: {
                    click: function ($event) {
                      _vm.proPop = true
                    },
                  },
                },
                [
                  _vm._v(" " + _vm._s(_vm.time) + " "),
                  _c("van-icon", { attrs: { name: "arrow-down" } }),
                ],
                1
              ),
            ]
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
          xzqh: "",
          factor: _vm.factor2,
          siteId: _vm.siteId,
          year: _vm.time,
          queryFlag: _vm.queryFlag,
        },
      }),
      _c("airFilter", {
        attrs: { isShow: _vm.proPop, type: "year" },
        on: {
          getType: _vm.getType,
          close: function ($event) {
            _vm.proPop = false
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "air-site-box-info" }, [
    _vm._m(0),
    _c(
      "div",
      { staticStyle: { margin: "-10px auto 0px" } },
      [_c("annual-echart", { attrs: { xzqh: "无", zdid: _vm.siteId } })],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "air-site-title" }, [
      _c("span", { staticClass: "black_content" }, [
        _vm._v("站点污染物年度统计"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "air-site-box-info", on: { click: _vm.toDetail } },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "air-site-title" }, [
      _c("span", { staticClass: "black_content" }, [_vm._v("周边气象站点")]),
      _c(
        "div",
        {
          staticStyle: {
            "margin-left": "auto",
            color: "rgba(18, 18, 54, 0.5)",
            "line-height": "25px",
          },
        },
        [
          _vm._v(" 查看 "),
          _c("img", {
            staticStyle: { "margin-left": "10px", "vertical-align": "middle" },
            attrs: { src: __webpack_require__(/*! @/assets/polluter/rightIcon.png */ "./src/assets/polluter/rightIcon.png") },
          }),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "air-site-box-info" }, [
    _c(
      "div",
      {
        staticClass: "air-site-title",
        staticStyle: {
          "justify-content": "space-between",
          "align-items": "center",
        },
      },
      [
        _c("span", { staticClass: "black_content" }, [_vm._v("数据详情")]),
        _c(
          "span",
          {
            staticClass: "unfold",
            on: {
              click: function ($event) {
                _vm.unfold = !_vm.unfold
              },
            },
          },
          [_vm._v("展开")]
        ),
      ]
    ),
    _c(
      "table",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.unfold === true,
            expression: "unfold===true",
          },
        ],
        staticClass: "table-wrapper",
        attrs: { width: "100%" },
      },
      [
        _vm._m(0),
        _c(
          "tbody",
          _vm._l(_vm.listData, function (item) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(item.ratio || item.name))]),
              _c("td", [_vm._v(_vm._s(item.value))]),
            ])
          }),
          0
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("时刻")]),
        _c("th", [_vm._v("监测值")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "van-row",
        { staticClass: "air-search", attrs: { gutter: 10 } },
        [
          _c(
            "van-col",
            { attrs: { span: "7" } },
            [
              _c("van-field", {
                attrs: {
                  value: _vm.dataType,
                  "right-icon": "arrow-down",
                  readonly: "",
                },
                on: {
                  click: function ($event) {
                    _vm.typePop = true
                  },
                },
              }),
            ],
            1
          ),
          _c(
            "van-col",
            { attrs: { span: "8" } },
            [
              _c("van-field", {
                attrs: {
                  readonly: "",
                  clickable: "",
                  value: _vm.endTime,
                  "input-align": "right",
                  "right-icon": "arrow-down",
                },
                on: {
                  click: function ($event) {
                    _vm.endPop = true
                  },
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
        { staticClass: "factor-wrapper" },
        _vm._l(_vm.factorData, function (item, i) {
          return _c(
            "div",
            {
              staticClass: "factor-item",
              class: [i === _vm.factorTabIndex ? "active" : ""],
              on: {
                click: function ($event) {
                  return _vm.changeFactorTab(item, i)
                },
              },
            },
            [_vm._v(_vm._s(item.text))]
          )
        }),
        0
      ),
      _c(
        "div",
        {
          staticClass: "company-info",
          staticStyle: {
            margin: "6px 10px 0px",
            background: "#fff",
            "padding-top": "10px",
          },
        },
        [
          _c("div", {
            ref: "yoyRef",
            staticStyle: { height: "200px", width: "96%", margin: "0 auto" },
          }),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "company-info",
          staticStyle: { margin: "6px 10px 0px", background: "#fff" },
        },
        [
          _vm._m(0),
          _c(
            "table",
            { staticClass: "table-wrapper", attrs: { width: "100%" } },
            [
              _vm._m(1),
              _c(
                "tbody",
                _vm._l(_vm.listData, function (item) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(item.time))]),
                    _c("td", [_vm._v(_vm._s(item.this))]),
                    _c("td", [_vm._v(_vm._s(item.last))]),
                  ])
                }),
                0
              ),
            ]
          ),
        ]
      ),
      _c("airFilter", {
        attrs: { isShow: _vm.typePop, type: "air" },
        on: {
          getType: _vm.getType,
          close: function ($event) {
            _vm.typePop = false
          },
        },
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
            attrs: { type: "date", title: "选择年月" },
            on: {
              confirm: _vm.onConfirmEndTime,
              cancel: function ($event) {
                _vm.startPop = false
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
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", { staticClass: "black_content" }, [_vm._v("数据详情")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("时刻")]),
        _c("th", [_vm._v("监测值")]),
        _c("th", [_vm._v("同期值")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "van-nav-bar",
        {
          attrs: { "left-arrow": "", fixed: "" },
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
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticClass: "into-right",
                        on: {
                          click: function ($event) {
                            _vm.sitePop = true
                          },
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/assets/polluter/change.png */ "./src/assets/polluter/change.png"),
                          },
                        }),
                        _vm._v("切换站点"),
                      ]
                    ),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _c("template", { slot: "title" }, [
            _c("span", { staticClass: "into-title_left" }, [
              _vm._v(_vm._s(_vm.level)),
            ]),
            _c("span", [_vm._v(_vm._s(_vm.siteName))]),
          ]),
        ],
        2
      ),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.sitePop,
              expression: "sitePop",
            },
          ],
          ref: "site",
          staticClass: "change_site",
        },
        [
          _c("p", [_vm._v("站点切换")]),
          _c("div", { staticClass: "check_content" }, [
            _c(
              "div",
              _vm._l(_vm.bmList, function (item, i) {
                return _c(
                  "div",
                  {
                    class: [i === _vm.siteIndex ? "active" : ""],
                    on: {
                      click: function ($event) {
                        return _vm.changeSiteTab(i)
                      },
                    },
                  },
                  [_c("span"), _c("span", [_vm._v(_vm._s(item))])]
                )
              }),
              0
            ),
            _c(
              "div",
              { staticStyle: { width: "75%" } },
              _vm._l(_vm.secondList, function (item, i) {
                return _c(
                  "div",
                  {
                    class: [item.id === _vm.siteId ? "active" : ""],
                    staticStyle: { background: "#fff" },
                    on: {
                      click: function ($event) {
                        return _vm.changeSecondSiteTab(item, i)
                      },
                    },
                  },
                  [
                    _c("span"),
                    _c("span", { staticClass: "check-site-name" }, [
                      _vm._v(_vm._s(item.siteName)),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "scroll-to-top-wrapper",
          on: {
            click: function ($event) {
              _vm.sitePop = false
            },
          },
        },
        [
          _c("div", { staticClass: "title-tab-wrapper" }, [
            _c(
              "div",
              {
                class: [
                  "title-tab-item",
                  _vm.titleIndex === 0 ? "title-tab-item-active" : "",
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
              "div",
              {
                class: [
                  "title-tab-item",
                  _vm.titleIndex === 1 ? "title-tab-item-active" : "",
                ],
                on: {
                  click: function ($event) {
                    return _vm.changeTitle(1)
                  },
                },
              },
              [_vm._v("IAQI")]
            ),
          ]),
          _c("basicInfo", {
            attrs: {
              siteInfo: _vm.siteInfo,
              siteId: _vm.siteId,
              siteName: _vm.siteName,
              queryFlag: _vm.titleIndex,
            },
          }),
          _c(
            "div",
            { staticClass: "fs warning-box", on: { click: _vm.toOver } },
            [
              _vm._m(0),
              _c(
                "div",
                { staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
                [
                  _vm._v("查看超标记录 "),
                  _c("van-icon", { attrs: { name: "arrow" } }),
                ],
                1
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: "tab-wrapper fs" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: ["tab-item", i === _vm.tabIndex ? "active" : ""],
                  on: {
                    click: function ($event) {
                      return _vm.changeTab(i)
                    },
                  },
                },
                [_vm._v(_vm._s(item) + " ")]
              )
            }),
            0
          ),
          _vm.tabIndex == 0 || _vm.tabIndex == 2
            ? _c("factorDes", {
                attrs: { objData: _vm.objData },
                on: { changeFactor: _vm.changeFactor },
              })
            : _vm._e(),
          _vm.tabIndex == 0 || _vm.tabIndex == 2
            ? _c("hourData", {
                attrs: {
                  tabIndex: _vm.tabIndex,
                  siteId: _vm.siteId,
                  factorProps: _vm.factorName,
                  queryFlag: _vm.titleIndex,
                },
              })
            : _vm._e(),
          _vm.tabIndex == 1
            ? _c("fiveMinutesData", {
                attrs: {
                  siteId: _vm.siteId,
                  tabIndex: _vm.tabIndex,
                  queryFlag: _vm.titleIndex,
                },
              })
            : _vm._e(),
          _vm.tabIndex == 3
            ? _c("yoyData", {
                attrs: { siteId: _vm.siteId, queryFlag: _vm.titleIndex },
              })
            : _vm._e(),
          _c("pollutionPro", {
            attrs: { siteId: _vm.siteId, queryFlag: _vm.titleIndex },
          }),
          _c("pollutionTrend", { attrs: { siteId: _vm.siteId } }),
          _c("involveAirPollution", {
            attrs: { siteId: _vm.siteId, siteInfo: _vm.siteInfo },
          }),
          _c("geoLocation", {
            attrs: { siteInfo: _vm.siteInfo, siteId: _vm.siteId },
          }),
          _c("surroundWeather", {
            attrs: { siteInfo: _vm.siteInfo, siteId: _vm.siteId },
          }),
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
    return _c(
      "div",
      { staticClass: "fs", staticStyle: { color: "rgba(255, 141, 26, 1)" } },
      [
        _c("img", {
          staticStyle: { "margin-right": "8px" },
          attrs: { src: __webpack_require__(/*! @/assets/air-site-warning.png */ "./src/assets/air-site-warning.png"), width: "14" },
        }),
        _vm._v(" 超标告警 "),
      ]
    )
  },
]
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/polluter/air_yellow_bg.png */ "./src/assets/polluter/air_yellow_bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/polluter/air_green_bg.png */ "./src/assets/polluter/air_green_bg.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/assets/polluter/air_orange_bg.png */ "./src/assets/polluter/air_orange_bg.png");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @/assets/polluter/air_yellow.png */ "./src/assets/polluter/air_yellow.png");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! @/assets/polluter/air_green.png */ "./src/assets/polluter/air_green.png");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! @/assets/polluter/air_orange.png */ "./src/assets/polluter/air_orange.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, ".air_yellow_bg[data-v-c3fd4b54] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  /*background: linear-gradient(228.1deg, rgba(250, 127, 5, 0.5) 0%, rgba(237, 252, 251, 0) 100%);*/\n  border-top: 1px solid rgba(250, 127, 5, 0.05);\n  background-size: 100% 100%;\n}\n.air_green_bg[data-v-c3fd4b54] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  /*background: linear-gradient(228.1deg, rgba(250, 127, 5, 0.5) 0%, rgba(237, 252, 251, 0) 100%);*/\n  border-top: 1px solid rgba(250, 127, 5, 0.05);\n  background-size: 100% 100%;\n}\n.air_orange_bg[data-v-c3fd4b54] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  /*background: linear-gradient(228.1deg, rgba(250, 127, 5, 0.5) 0%, rgba(237, 252, 251, 0) 100%);*/\n  border-top: 1px solid rgba(250, 127, 5, 0.05);\n  background-size: 100% 100%;\n}\n.air_main[data-v-c3fd4b54] {\n  /*display: flex;*/\n  /*align-items: center;*/\n  margin: 6px;\n  padding: 8px 10px;\n  border-radius: 10px;\n}\n.air_main .air_main_left[data-v-c3fd4b54] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  border-radius: 6px;\n  margin: 10px 0px 10px 0;\n  text-align: center;\n}\n.air_main .air_main_left .tips[data-v-c3fd4b54] {\n  position: absolute;\n  left: 5px;\n  padding: 3px 2px;\n  font-size: 12px;\n}\n.air_main .air_main_left .air_yellow[data-v-c3fd4b54] {\n  color: #ffbf00;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\n  background-size: 100% 100%;\n}\n.air_main .air_main_left .air_green[data-v-c3fd4b54] {\n  color: #04c704;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\n  background-size: 100% 100%;\n}\n.air_main .air_main_left .air_orange[data-v-c3fd4b54] {\n  color: #ff7e00;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat;\n  background-size: 100% 100%;\n}\n.air_main .air_main_left .date[data-v-c3fd4b54] {\n  display: inline-block;\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 70px;\n  text-align: left;\n  vertical-align: top;\n}\n.air_main .air_main_yellow[data-v-c3fd4b54] {\n  color: #ffbf00;\n  background: rgba(255, 191, 0, 0.1);\n  border: 1px solid rgba(255, 191, 0, 0.5);\n}\n.air_main .air_main_green[data-v-c3fd4b54] {\n  color: #04c704;\n  background: rgba(4, 199, 4, 0.1);\n  border: 1px solid rgba(4, 199, 4, 0.5);\n}\n.air_main .air_main_orange[data-v-c3fd4b54] {\n  color: #ff7e00;\n  background: rgba(255, 126, 0, 0.1);\n  border: 1px solid rgba(255, 126, 0, 0.5);\n}\n.air_main .air_first[data-v-c3fd4b54] {\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.air_main .air-calender[data-v-c3fd4b54] {\n  padding: 4px 12px;\n  border-radius: 4px;\n  background: rgba(248, 251, 255, 0.5);\n  border: 1px solid rgba(68, 123, 252, 0.3);\n  font-size: 12px;\n  color: #5271ff;\n}\n.air_main .air_main_right[data-v-c3fd4b54] {\n  width: calc(100% - 80px);\n  padding: 5px 10px 5px 15px;\n}\n.air_main .air_main_right .main_right[data-v-c3fd4b54] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 5px;\n}\n.air_main .air_bottom[data-v-c3fd4b54] {\n  font-size: 11px;\n  color: rgba(37, 57, 111, 0.3);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 16px;\n}\n.air_main .air_bottom > div[data-v-c3fd4b54] {\n  color: #3f7bff;\n  text-decoration: underline;\n}\n.site-info[data-v-c3fd4b54] {\n  width: calc(100% - 100px);\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.site-info .num[data-v-c3fd4b54] {\n  color: #121236;\n  font-size: 16px;\n  font-weight: bold;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hourData[data-v-6fed551d] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  flex-wrap: wrap;\n  /*.hour_white_bg {\n    !*border: 1px solid rgba(204, 204, 204, 0.3);*!\n    background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);\n\n    >span {\n      &:last-child {\n        color: rgba(204, 204, 204, 1);\n      }\n    }\n  }\n  .hour_green_bg {\n    !*border: 1px solid rgba(4, 199, 4, 0.3);*!\n    background: rgba(4, 199, 4, 0.05);\n\n    >span {\n      &:last-child {\n        color: rgba(4, 199, 4, 1);\n      }\n    }\n  }\n\n  .hour_yellow_bg {\n    !*border: 1px solid rgba(255, 217, 0, 0.3);*!\n    background: linear-gradient(228.1deg, rgba(255, 191, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);\n\n    >span {\n      &:last-child {\n        color: rgba(255, 191, 0, 1);\n      }\n    }\n  }\n  .hour_orange_bg {\n    !*border: 1px solid rgba(255, 126, 0, 0.3);*!\n    background: linear-gradient(228.1deg, rgba(255, 126, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);\n\n    >span {\n      &:last-child {\n        color: rgba(255, 126, 0, 1);\n      }\n    }\n  }\n  .hour_red_bg {\n    !*border: 1px solid rgba(255, 0, 0, 0.3);*!\n    background: linear-gradient(228.1deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);\n\n    >span {\n      &:last-child {\n        color: rgba(255, 0, 0, 1);\n      }\n    }\n  }\n\n  .hour_deepred_bg {\n    !*border: 1px solid rgba(153, 0, 76, 0.3);*!\n    background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);\n\n    >span {\n      &:last-child {\n        color: rgba(153, 0, 76, 1);\n      }\n    }\n  }*/\n}\n.hourData > div[data-v-6fed551d] {\n  padding: 5px 0px;\n  height: 32px;\n  border-radius: 4px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.hourData > div > span[data-v-6fed551d] {\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 15px;\n  text-align: left;\n  vertical-align: top;\n}\n.hourData > div > span[data-v-6fed551d]:first-child {\n  margin-left: 9px;\n}\n.hourData > div > span:first-child > span[data-v-6fed551d] {\n  display: block;\n  margin-right: 10px;\n}\n.hourData > div > span:first-child > span[data-v-6fed551d]:first-child {\n  /*color: rgba(37, 57, 111, 1);*/\n  margin: 2px 0px;\n}\n.hourData > div > span[data-v-6fed551d]:last-child {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 32px;\n  text-align: left;\n  vertical-align: top;\n  margin: 0px 10px;\n}\n.hourData > div[data-v-6fed551d]:first-child, .hourData > div[data-v-6fed551d]:nth-child(2), .hourData > div[data-v-6fed551d]:nth-child(3), .hourData > div[data-v-6fed551d]:nth-child(4) {\n  width: 23.5%;\n}\n.hourData > div[data-v-6fed551d]:nth-child(4), .hourData > div[data-v-6fed551d]:last-child {\n  margin-right: 0;\n}\n.hourData > div[data-v-6fed551d]:nth-child(5), .hourData > div[data-v-6fed551d]:nth-child(6), .hourData > div[data-v-6fed551d]:last-child {\n  width: 32%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".air-search[data-v-ec7c071e] {\n  display: flex;\n  align-items: center;\n  padding: 8px 14px;\n}\n.air-search[data-v-ec7c071e]  .van-cell {\n  padding: 3px 8px;\n  font-size: 12px;\n  border-radius: 6px;\n  background: #f6f6f6;\n}\n.air-search[data-v-ec7c071e]  .van-field__right-icon {\n  color: #C4C4C4;\n  scale: 0.7;\n}\n.air-search[data-v-ec7c071e]  .van-field__control {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  scale: 0.9;\n}\n.factor-wrapper[data-v-ec7c071e] {\n  flex-wrap: wrap;\n  margin: 0px 10px;\n}\n.factor-wrapper .factor-item[data-v-ec7c071e] {\n  margin: 5px;\n  border-radius: 4px;\n  background: white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  padding: 6px 13px 6px 13px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.8);\n  display: inline-block;\n  box-sizing: border-box;\n  width: 22%;\n}\n.factor-wrapper .item[data-v-ec7c071e]:last-child {\n  margin-right: auto;\n}\n.factor-wrapper .active[data-v-ec7c071e] {\n  color: white;\n  background: #447bfc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-content[data-v-0b34d344] {\n  display: flex;\n  align-items: center;\n  margin: 5px 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-0b34d344] {\n  width: 33%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-right: 5px;\n}\n.site_compare[data-v-0b34d344] {\n  padding: 10px 20px;\n}\n.site_compare .compare_title[data-v-0b34d344] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.site_compare .compare_title > span[data-v-0b34d344] {\n  border-radius: 4px;\n  background: rgba(68, 123, 252, 0.05);\n  justify-content: center;\n  align-items: center;\n  padding: 3px 13px 3px 13px;\n  font-size: 12px;\n  color: #447bfc;\n  font-weight: normal;\n}\n.site_compare .compare_station[data-v-0b34d344] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 6px 0px;\n}\n.site_compare .compare_station > div[data-v-0b34d344] {\n  border-radius: 0px 4px 4px 0px;\n  justify-content: center;\n  align-items: center;\n  background: rgba(68, 123, 252, 0.05);\n  margin-right: 10px;\n  margin-bottom: 6px;\n  display: flex;\n}\n.site_compare .compare_station > div > span[data-v-0b34d344] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 17.38px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n  padding: 3px 10px;\n}\n.site_compare .compare_station > div > img[data-v-0b34d344] {\n  margin-top: -18px;\n}\n.site_compare .compare_station .yellow_border[data-v-0b34d344] {\n  border-left: 2px solid #ff8d1a;\n}\n.site_compare .compare_station .green_border[data-v-0b34d344] {\n  border-left: 2px solid #00baad;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".number[data-v-81249592] {\n  padding-left: 10px;\n  line-height: 25px;\n  color: #ff8d1a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-content[data-v-9994388e] {\n  display: flex;\n  align-items: center;\n  margin: 5px 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-9994388e] {\n  width: 33%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-right: 5px;\n  font-weight: normal;\n}\n.tab-wrapper[data-v-9994388e] {\n  margin-top: 10px;\n  margin-left: 15px;\n  display: flex;\n  align-items: center;\n}\n.tab-wrapper > span[data-v-9994388e] {\n  border-radius: 4px;\n  background: #f5f7ff;\n  display: flex;\n  padding: 3px 5px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #5475f8;\n  margin-left: 5px;\n  border: 1px solid #d2dafc;\n}\n.tab-wrapper .active[data-v-9994388e] {\n  background: #5271ff;\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".unfold[data-v-3516621c] {\n  color: rgba(18, 18, 54, 0.5);\n  font-weight: normal;\n  text-decoration: underline;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".air-search[data-v-4cb04ac7] {\n  display: flex;\n  align-items: center;\n  padding: 8px 14px;\n}\n.air-search[data-v-4cb04ac7]  .van-cell {\n  padding: 3px 8px;\n  font-size: 12px;\n  border-radius: 6px;\n  background: #f6f6f6;\n}\n.air-search[data-v-4cb04ac7]  .van-field__right-icon {\n  color: #C4C4C4;\n  scale: 0.7;\n}\n.air-search[data-v-4cb04ac7]  .van-field__control {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  scale: 0.9;\n}\n.factor-wrapper[data-v-4cb04ac7] {\n  flex-wrap: wrap;\n  margin: 0px 10px;\n}\n.factor-wrapper .factor-item[data-v-4cb04ac7] {\n  margin: 5px;\n  border-radius: 4px;\n  background: white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  padding: 6px 13px 6px 13px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.8);\n  display: inline-block;\n  box-sizing: border-box;\n  width: 22%;\n}\n.factor-wrapper .item[data-v-4cb04ac7]:last-child {\n  margin-right: auto;\n}\n.factor-wrapper .active[data-v-4cb04ac7] {\n  color: white;\n  background: #447bfc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/polluter/checked.png */ "./src/assets/polluter/checked.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/assets/polluter/air_tips.png */ "./src/assets/polluter/air_tips.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, ".title-tab-wrapper[data-v-9fd09662] {\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n}\n.title-tab-wrapper .title-tab-item[data-v-9fd09662] {\n  font-weight: normal;\n  padding: 0 20px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 20px;\n}\n.title-tab-wrapper .title-tab-item-active[data-v-9fd09662] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n  color: #121236;\n  font-weight: bold;\n}\n.change_site[data-v-9fd09662] {\n  border-radius: 10px;\n  background: white;\n  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.1);\n  position: fixed;\n  top: 40px;\n  right: 4px;\n  height: calc(60vh - 30px);\n  width: 78%;\n  opacity: 1;\n  z-index: 9;\n}\n.change_site > p[data-v-9fd09662] {\n  font-size: 12px;\n  line-height: 18px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  padding: 0px 5px 0px 10px;\n}\n.change_site .check_content[data-v-9fd09662] {\n  display: flex;\n  height: calc(100% - 50px);\n}\n.change_site .check_content > div[data-v-9fd09662] {\n  height: 100%;\n  overflow-y: auto;\n}\n.change_site .check_content > div > div[data-v-9fd09662] {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 20px;\n  color: #121236;\n  text-align: left;\n  margin-bottom: 6px;\n  padding: 2px 10px;\n}\n.change_site .check_content > div > div > span[data-v-9fd09662] {\n  vertical-align: top;\n}\n.change_site .check_content > div > div > span[data-v-9fd09662]:first-child {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 1px solid #c4c4c4;\n  margin-right: 10px;\n  vertical-align: middle;\n  color: #fff;\n}\n.change_site .check_content > div .active[data-v-9fd09662] {\n  background: rgba(68, 123, 252, 0.05);\n}\n.change_site .check_content > div .active > span[data-v-9fd09662]:first-child {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  border: 1px solid #447bfc;\n}\n.change_site .check_content .check-site-name[data-v-9fd09662] {\n  width: 85%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.search-content[data-v-9fd09662] {\n  display: flex;\n  align-items: center;\n  margin: 5px 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-9fd09662] {\n  width: 33%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-right: 5px;\n}\n.warning-box[data-v-9fd09662] {\n  margin: 14px 8px;\n  padding: 6px 15px;\n  border-radius: 4px;\n  background: rgba(255, 141, 26, 0.05);\n  border: 1px solid rgba(255, 141, 26, 0.2);\n  font-size: 12px;\n}\n.tab-wrapper[data-v-9fd09662] {\n  margin: 10px 0;\n  background: #fff;\n  padding: 14px 0px 5px;\n  border-top: 4px solid #f9f9f9;\n}\n.tab-wrapper .tab-item[data-v-9fd09662] {\n  width: 50%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-9fd09662] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n.into-title_left[data-v-9fd09662] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  color: #ffffff;\n  font-size: 12px;\n  margin-right: 6px;\n}\n.into-right[data-v-9fd09662] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: #43cf7c;\n  color: #fff;\n  font-size: 12px;\n  line-height: 24px;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.into-right > img[data-v-9fd09662] {\n  margin-right: 5px;\n  vertical-align: middle;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".air-site-box-info {\n  margin: 6px 10px 0px;\n  border-radius: 10px;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.air-site-box-info .air-site-title {\n  display: flex;\n  padding: 10px 10px 8px 15px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #447bfc;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e35deba4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0c2123d5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3f6a1b1a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("dc7a1412", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e0b3da4a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5631b342", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c6ec8a68", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a08fd4d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("66e4d66c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("107cf04a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/air-site-warning.png":
/*!*****************************************!*\
  !*** ./src/assets/air-site-warning.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALaSURBVEiJnZbtatRAFIbf2d3gZe0ELFZ/SC1ULaVeQZGiVSwUMqHS9SKEgpVWEaTQQpFSMxcjeA3dzDnHH5kkm2Sy7m5gSHZm3nnmfMyZBZZ88uxYT38fS36XmmW1ADBaRQQhQGi8inQQ6syziZ7aiQQVjgAmgDk4nF+9NvnVnlkKyIAGgPtsEhA6KPHQDmxPA5RAXK/1QeCD+NBABEooaccqWvtoQRxDXNpVUgImgEJjxdMbQ8WUCigBw7bHosefOn0FjwGQjZ59Do+v+uQ3+3pVrbrPJmYA2Cg+tP2ADxpwGkJjCGsIwzcLMECU/s8qutg0w+2fRk3tiZRiRZxGa6YhzG/emyIRSgiVMKgaDAhbIZdGW19tGwThBMJg5nighGIIWzBpAWX57ZGuYQcZxBWJwASwQ/mtqr5qTCtwRt9fmiaMEggBzGm0e21VtfjtkQazjh6dmAL2Nmu6r9eyxhiEMXrxQwFAfrGhB+z0cOe62kQFbLrxQINd1l5UtWPHrNswCEMxp8OdSxNaO3gOwXnmy5dv/rD7JiQpmHRzDvlNEQBK6OxJENg5h/nVvga7lvtqK4QlLawjzHVzT+kLWOiauxXXsCDa+mJm59Tz2h4Jl7dupRGXKA4ng4BiABiw08Kh5Kk1IqwXAzJ1xGWiRM+/WQBgdhaAFXLeTZQFNYsAlThApGsdUVWQo+1LW37T2bpBj0cWdCm3rPRJAUrc+UYCFFka7V7b/Gxdg7tVSC0FbGXfTBZWZ07AKQAMySWCHtjiQNcGdWIavfpl5fShZiEdKArLAglAP6xciFFXIhXwyFIx7C7QOOCWT8eZMM2HLQ50AfFMpfEFvV2BgpqFXTrnJmi6ug9IvRYqutg0IjT21d9nY687524kEFNbzBMABPXmb6zo/Kn0Cf3FuSpsJpb+Ly4P4hETx0BRokbOecP925Vx8G+iegzOd7d/z2gIKK7c4tpV7/7YfzoKkLpcEeymAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/air_green.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/air_green.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB5SURBVDiN7dQxCoAwDAXQJDR06gH0AF7Atcd30IvYA3QqKeogiBWrCHXrn0LIf2OQR+6hQKgEUqEKVahCf0OE5AnJSxRHSP7pVuWAIMGBhaMcIOzDAC0rbq4dPL/aOyCbC4h60t2yLkaiOLAwvwIpZlhxlyw+ATfgBi8/JI5QYd3vAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/air_green_bg.png":
/*!**********************************************!*\
  !*** ./src/assets/polluter/air_green_bg.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/air_green_bg.png";

/***/ }),

/***/ "./src/assets/polluter/air_orange.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/air_orange.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABxSURBVDiN7dSxCYAwEEDRf0awMQPoAFnA3dIJqR1UB1DsQmwkEIuImDK/Ou7glSdhZqJATQmkQhWqUIUK1Gaviv2eDqDHo79Bip2TTZYIxYJjxDM895K82gzwBkpwGDwaxSaO9Q1IMIumw6SLHwWLvgAMLR49xG3qRwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/air_orange_bg.png":
/*!***********************************************!*\
  !*** ./src/assets/polluter/air_orange_bg.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/air_orange_bg.png";

/***/ }),

/***/ "./src/assets/polluter/air_tips.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/air_tips.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF6SURBVDiNnZS9TgJBFEbP/CgPQGXiC/gMVCQWi8HSVipbqqW310o6aZTSmkRiQ0V8A+0t7OiMgtmZa8ECuzC7bJxk9u5m5sx3790vo9gaF09y6IWO1rSNoaE1dW1Aa0jjzBimxjA6+GbYP1OLLK+yH+cPEmvDTQYujUaDKHqDprrdOTAayLPWRGWwNuE1pRjfN1ULQAOc9iV2CZFLwDnwgelWM9mN3hNdTSQGUK07qc2FeZUSdSBLk1k7PqJmvxZcKgMiINlI+p6Jy0cazSaumI9POtZ52qoINsVwSNgIbZskNIzeAwcEg8KahvUJdfZAq4MLs97srVvn8lAhnGZTJigC1rldqBAO9XBL2Hq3BRdAOXj7j2eErUsK4ACUg8OCs3UPg3BZtmF/Ttcl7/NYFXNjGS0zrOKxCubmh2Guh/81d8r2XrpqkSuZPVChsGU86S7vxN2SSzwWson39F7jzQVrveNdhJMqHkv3zASmXhjNEx7frtUvmfEHrhCVb+54wKEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/air_yellow.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/air_yellow.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACYSURBVDiN7c+xDsFQHIXx799bhMZiEot34BUweGMJJjajjlapgcHSoek95itt0qHjPeuX/JJjOrOmhyV9IBGKUIQi1MPS1iKEpySlxFMhRgzIqBl2g4SoKdhSmOHDhHFkhljgQjC85vgw5247nv8IgIFsw5srOcYraDqxwiMqHrbn23q1YTqQ4ViSMEY3Jsqbf3fCwHRh+gMJUixM4L2xtQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/air_yellow_bg.png":
/*!***********************************************!*\
  !*** ./src/assets/polluter/air_yellow_bg.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/air_yellow_bg.png";

/***/ }),

/***/ "./src/assets/polluter/calendar.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/calendar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADtSURBVCiRnZA9LwRhFIWf885sSCSIQqnVqCQSBQVm4odIRKmxip2ofCVU/AP/QKXxUaqVKNRK9bw7R7ETmeyym3Wa25zn3idX2aEXnMYdoSPELvid/jgsga+FOmUr3CjrxC9geqD4dz7DmADAbBgTACAFwGrfnyYXo8pbRXkua78HCW8UXkzcvTK6tf0RxEGQjyuHZeFNx2TPRAB+9EIXD7tSpahPDz2c6Q3YbvTu6vkIXNZ6Dei/enVWBXOJmATWY6UJVM0bVn7VezrRKzDTWNBqaLYH9CTnWVFODXtEL1oDSI1ewDlWPhoCxPM3fYte6nzFYdAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/change.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/change.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACbSURBVCiRlY6hDkEBGEbPv5n7ALJOYLPZvABd0iRR9AI3meo52KheQDVJl0TJbnKEe8XrXif86Zz9HxSoHfWstqhCXapPdV7lhnoApsARuJZ4GXCKiEuoC6BdOQNmwLaGl6P21Ttq+kdkfuoHKepD7daNGsAa2Kn7Gv4rildDYAIkJeIIGAOrqs1NdaPe1N530i8S4A0MIiID+ACpDFgQSqA+VwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/checked.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/checked.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADFSURBVCiRndI9DkFBFIbh95yhVItdSCR0GrdQ2IFOgkVQicoOLEAvsRKlqETidgqJyp05GsX4d33VTE6enPmSkWSUHYAK+ZLqHwigon8gAPLAHZDmhLbVoqsD69+hcVAKrXDxU6D9Ch6B0wM7oi4JZAOgHw9iuHQamsD+dj+bhjYhdEDGjw8pROde8HpxuIYXv0BsIqZVxGavGtx1NGGYSVg5c10zKWPM3zS/2wiAYDUvfiNQeoeeNkb5iD7Br1Gi35Aj6RVdtjbP0T+qTAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/close.png":
/*!***************************************!*\
  !*** ./src/assets/polluter/close.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC6SURBVBiVVc4hTgNRGMTx/zTvrYQEhajAggQS1q7gFHU1cAMuAArBBZpUcwYSntz1pNyABNlUtf0eDII2hF8yYsxkBDAMwzgiZpKugC1QIuK267qlSinHOec3oAEO+LWy/VFrPR+llJ6AQ9sT4BNYSJpKOm2a5i5J6oAsaW57ult4BrB9nYBv/pxJ2uyLbY2AV+BL0qOkB+B+F4CX/ckFcMR/7xFxIYC+709qrTPgUtLadsk537Rtu/oBMKlFX/ZekoIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/rightIcon.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/rightIcon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFRSURBVCiRdZI9SxxRFIaf985sECwsQoQUERF/gOJPWIxaJUUgAT8KQcTGaotEmy1cU0UQf4BJkXIDkkICK9iKhfaCIAiCqIighZmZN4VZWWZn3upwnvMcOJcrOjL1xa+SkNSMxoCR/+0jyYd/43hjv66r9qzaxfhqMmvYAvoozg0w32rEO89idTVdFt4sEfL50GrETVU/e0hRegKEDvgTmC4R75NKNBgU0lpOwvJ3wwyQFYi90WO2FBDv80TW75D5XPAJSLtU8S4ALwu29jhoF/sGsdDteTgAjyW3oIDtQh6C8FkBeAh40laf4EceGp2GDHa61uGpFL0xNIGom/NLEyt+nSo9AyodbA+ollzw4CwaCH/WdYFYzMEyycDc3lddB4DWWryN+QjclggAl5InW424CR1/FeBt3f1ZktRsjQlGeXrxY+ODF5X4225dd+3Zf+zXcDM/R+SeAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/pollution-tab-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/pollution-tab-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAQCAYAAACycufIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVEiJ3ZTRacRADETfaNekgOvheshfwlWVj4ATDNeUA5c20sMVEIitfKwVu4A7TDSw7EqsBg0SIzY4vfojzsGYzCcqokoUoLqoQGWaK1YKLDFzu90K2sSy9mf2StRKBby958ixcin+a8lp5WPhi/rg803cjiF/G4eu15+w3o/8cAT49+IA5M9GXjyt4iYOOzZyF6ziPJe4ceh6Azi9eCphgTa5h1xTAy6wXctMkH9CiEtoJhDikpkJmddyHLoLgGV1SgDL6pSQcS0XpwQwvrnu2cs9YR9nXal87d3ITeD+Pg5dH+EvPNFNNRNXy44AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/utils/setdate.js":
/*!******************************!*\
  !*** ./src/utils/setdate.js ***!
  \******************************/
/*! exports provided: getThisDate, formatDate, hourDateFormat, monthDateFormat, fourHourTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThisDate", function() { return getThisDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hourDateFormat", function() { return hourDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthDateFormat", function() { return monthDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourHourTime", function() { return fourHourTime; });
//当前电脑时间--当日
function getThisDate(e) {
  //+" "+h+":"+M+":"+s;
  var nowTime = "";
  var time = new Date();
  var y = time.getFullYear();
  var lm = time.getMonth();
  lm = lm < 10 ? '0' + lm : lm;
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = time.getDate();
  d = d < 10 ? '0' + d : d;
  var h = time.getHours();
  h = h < 10 ? '0' + h : h;
  var M = time.getMinutes();
  M = M < 10 ? '0' + M : M;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;

  if (e === 1) {
    nowTime = y + "-" + m + "-" + d + ' ' + h + ':' + M + ':' + s;
  } else if (e == 4) {
    //当月的第一天
    nowTime = y + "-" + m + "-1";
  } else {
    nowTime = y + "-" + m + "-" + d;
  }

  return nowTime;
} // 转化时间

function formatDate(date, n) {
  var time = new Date(date);
  var nowTime = "";
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = time.getDate();
  d = d < 10 ? '0' + d : d;
  var h = time.getHours();
  h = h < 10 ? '0' + h : h;
  var M = time.getMinutes();
  M = M < 10 ? '0' + M : M;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;

  if (n == "y" || n == "年") {
    nowTime = y;
  } else if (n == "M" || n == "月") {
    nowTime = y + "-" + m;
  } else if (n == "m") {
    nowTime = y + "-" + m + "-" + d + " " + h + ":" + M;
  } else if (n == "h" || n == "时") {
    nowTime = y + "-" + m + "-" + d + " " + h;
  } else if (n == "d" || n == "日") {
    nowTime = y + "-" + m + "-" + d;
  } else {
    nowTime = y + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;
  }

  return nowTime;
}
function hourDateFormat(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  date = year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day) + ' ' + (hour > 9 ? hour : '0' + hour);
  return date;
}
function monthDateFormat(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  date = year + '-' + (month > 9 ? month : '0' + month);
  return date;
}
function fourHourTime() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var day = nowDate.getDate();
  var hours = nowDate.getHours();

  if (hours < 4 && hours >= 0) {
    hours = 0;
  } else if (hours < 8 && hours >= 4) {
    hours = 4;
  } else if (hours < 12 && hours >= 8) {
    hours = 8;
  } else if (hours < 16 && hours >= 12) {
    hours = 12;
  } else if (hours < 20 && hours >= 16) {
    hours = 16;
  } else if (hours <= 23 && hours >= 20) {
    hours = 20;
  }

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hours = hours < 10 ? "0" + hours : hours;
  return year + '-' + month + '-' + day + ' ' + hours + ':00:00';
}

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue":
/*!*************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/basicInfo.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true&");
/* harmony import */ var _basicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicInfo.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _basicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3fd4b54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/basicInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=style&index=0&id=c3fd4b54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_style_index_0_id_c3fd4b54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/basicInfo.vue?vue&type=template&id=c3fd4b54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicInfo_vue_vue_type_template_id_c3fd4b54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/factorDes.vue":
/*!*************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/factorDes.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorDes.vue?vue&type=template&id=6fed551d&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true&");
/* harmony import */ var _factorDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorDes.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _factorDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fed551d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/factorDes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./factorDes.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=style&index=0&id=6fed551d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_style_index_0_id_6fed551d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./factorDes.vue?vue&type=template&id=6fed551d&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/factorDes.vue?vue&type=template&id=6fed551d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factorDes_vue_vue_type_template_id_6fed551d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue":
/*!*******************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true&");
/* harmony import */ var _fiveMinutesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fiveMinutesData.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fiveMinutesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec7c071e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fiveMinutesData.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=style&index=0&id=ec7c071e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_style_index_0_id_ec7c071e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/fiveMinutesData.vue?vue&type=template&id=ec7c071e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fiveMinutesData_vue_vue_type_template_id_ec7c071e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue":
/*!***************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/geoLocation.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoLocation.vue?vue&type=template&id=16bbce00&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true&");
/* harmony import */ var _geoLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoLocation.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _geoLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "16bbce00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/geoLocation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_geoLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./geoLocation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_geoLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./geoLocation.vue?vue&type=template&id=16bbce00&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/geoLocation.vue?vue&type=template&id=16bbce00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_geoLocation_vue_vue_type_template_id_16bbce00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/highVideo.vue":
/*!*************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/highVideo.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true&");
/* harmony import */ var _highVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highVideo.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _highVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34d0ac5a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/highVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./highVideo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/highVideo.vue?vue&type=template&id=34d0ac5a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_highVideo_vue_vue_type_template_id_34d0ac5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/hourData.vue":
/*!************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/hourData.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hourData.vue?vue&type=template&id=0b34d344&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true&");
/* harmony import */ var _hourData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourData.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hourData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b34d344",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/hourData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hourData.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=style&index=0&id=0b34d344&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_style_index_0_id_0b34d344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hourData.vue?vue&type=template&id=0b34d344&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/hourData.vue?vue&type=template&id=0b34d344&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hourData_vue_vue_type_template_id_0b34d344_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue":
/*!***********************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involveAirPollution.vue?vue&type=template&id=81249592&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true&");
/* harmony import */ var _involveAirPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involveAirPollution.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _involveAirPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "81249592",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/involveAirPollution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollution.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=style&index=0&id=81249592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_style_index_0_id_81249592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollution.vue?vue&type=template&id=81249592&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/involveAirPollution.vue?vue&type=template&id=81249592&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollution_vue_vue_type_template_id_81249592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue":
/*!****************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionPro.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollutionPro.vue?vue&type=template&id=9994388e&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true&");
/* harmony import */ var _pollutionPro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionPro.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pollutionPro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9994388e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/pollutionPro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionPro.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=style&index=0&id=9994388e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_style_index_0_id_9994388e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionPro.vue?vue&type=template&id=9994388e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionPro.vue?vue&type=template&id=9994388e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionPro_vue_vue_type_template_id_9994388e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue":
/*!******************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true&");
/* harmony import */ var _pollutionTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionTrend.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pollutionTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6977cda9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/pollutionTrend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionTrend.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/pollutionTrend.vue?vue&type=template&id=6977cda9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionTrend_vue_vue_type_template_id_6977cda9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue":
/*!*******************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/surroundWeather.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true&");
/* harmony import */ var _surroundWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surroundWeather.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _surroundWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "203e72a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/surroundWeather.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundWeather.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/surroundWeather.vue?vue&type=template&id=203e72a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundWeather_vue_vue_type_template_id_203e72a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/tableData.vue":
/*!*************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/tableData.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableData.vue?vue&type=template&id=3516621c&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true&");
/* harmony import */ var _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableData.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3516621c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/tableData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableData.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=style&index=0&id=3516621c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_style_index_0_id_3516621c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableData.vue?vue&type=template&id=3516621c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/tableData.vue?vue&type=template&id=3516621c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_3516621c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/yoyData.vue":
/*!***********************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/yoyData.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true&");
/* harmony import */ var _yoyData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yoyData.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _yoyData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cb04ac7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/components/yoyData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./yoyData.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=style&index=0&id=4cb04ac7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_style_index_0_id_4cb04ac7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/components/yoyData.vue?vue&type=template&id=4cb04ac7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yoyData_vue_vue_type_template_id_4cb04ac7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/index.vue":
/*!**********************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9fd09662&scoped=true& */ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& */ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9fd09662",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airStationDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=0&id=9fd09662&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fd09662_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9fd09662&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airStationDetail/index.vue?vue&type=template&id=9fd09662&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9fd09662_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9iYXNpY0luZm8udnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlcy52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZml2ZU1pbnV0ZXNEYXRhLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaGlnaFZpZGVvLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9ob3VyRGF0YS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaW52b2x2ZUFpclBvbGx1dGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uUHJvLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25UcmVuZC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3Vycm91bmRXZWF0aGVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3lveURhdGEudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mby52dWU/ODJlYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlcy52dWU/ZGIyMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZpdmVNaW51dGVzRGF0YS52dWU/ZWM5YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2dlb0xvY2F0aW9uLnZ1ZT9iZmY0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaGlnaFZpZGVvLnZ1ZT81ZTFlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaG91ckRhdGEudnVlP2U5ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT9lYWEyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uUHJvLnZ1ZT9jM2U2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uVHJlbmQudnVlPzFjZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdXJyb3VuZFdlYXRoZXIudnVlPzc3YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlPzMzMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy95b3lEYXRhLnZ1ZT9kZTUzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT82OGU2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZT8zYzkwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvcHJvcG9ydGlvbkVjaGFydC52dWU/YzA0NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mby52dWU/Y2RkNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlcy52dWU/MmQyZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZpdmVNaW51dGVzRGF0YS52dWU/NTFjMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2hvdXJEYXRhLnZ1ZT8xNTAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/MjRlOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvblByby52dWU/YTMwOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3RhYmxlRGF0YS52dWU/MTBmNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3lveURhdGEudnVlPzZhNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlPzk1N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlPzhhMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9iYXNpY0luZm8udnVlP2M1ZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9mYWN0b3JEZXMudnVlP2UyMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9maXZlTWludXRlc0RhdGEudnVlP2ZkMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9ob3VyRGF0YS52dWU/MzMzZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ludm9sdmVBaXJQb2xsdXRpb24udnVlPzIzNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm8udnVlP2U1ZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlP2ZlY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy95b3lEYXRhLnZ1ZT84MmMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT8yZGZhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT81Nzg1Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYWlyLXNpdGUtd2FybmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9haXJfZ3JlZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvYWlyX2dyZWVuX2JnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2Fpcl9vcmFuZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvYWlyX29yYW5nZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9haXJfdGlwcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9haXJfeWVsbG93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2Fpcl95ZWxsb3dfYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvY2FsZW5kYXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvY2hhbmdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2NoZWNrZWQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvY2xvc2UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcG9zaXRpb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXRkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvYmFzaWNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mby52dWU/ZTE2OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mby52dWU/ZTI2YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mby52dWU/MjYxYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9mYWN0b3JEZXMudnVlPzY2MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9mYWN0b3JEZXMudnVlPzg1YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9mYWN0b3JEZXMudnVlP2I3NWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9maXZlTWludXRlc0RhdGEudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZml2ZU1pbnV0ZXNEYXRhLnZ1ZT82YjRiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZml2ZU1pbnV0ZXNEYXRhLnZ1ZT8xOTViIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZml2ZU1pbnV0ZXNEYXRhLnZ1ZT8wNDRmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZ2VvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZ2VvTG9jYXRpb24udnVlPzU1MDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9nZW9Mb2NhdGlvbi52dWU/Mzc5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2hpZ2hWaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9oaWdoVmlkZW8udnVlP2M1NzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9oaWdoVmlkZW8udnVlPzc0MTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9ob3VyRGF0YS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9ob3VyRGF0YS52dWU/MzExYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2hvdXJEYXRhLnZ1ZT84OGFlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaG91ckRhdGEudnVlP2UxY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ludm9sdmVBaXJQb2xsdXRpb24udnVlPzI2MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT8zOTA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/ODI0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvblByby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm8udnVlP2I5ODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm8udnVlPzllYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm8udnVlPzQ4MjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25UcmVuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25UcmVuZC52dWU/NGQ4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvblRyZW5kLnZ1ZT9lOWM2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3Vycm91bmRXZWF0aGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N1cnJvdW5kV2VhdGhlci52dWU/OTk3NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N1cnJvdW5kV2VhdGhlci52dWU/ZGI1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3RhYmxlRGF0YS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlP2ZhODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlPzQ2OTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGEudnVlP2EyNTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy95b3lEYXRhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3lveURhdGEudnVlPzU3ODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy95b3lEYXRhLnZ1ZT9iMmY1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMveW95RGF0YS52dWU/MWZjZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlP2U4NzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlPzdlNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlPzMxYWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlPzFiNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9hbm51YWxFY2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZT85ODhiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZT80OWRjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvcHJvcG9ydGlvbkVjaGFydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT9jYzEwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvcHJvcG9ydGlvbkVjaGFydC52dWU/MjgzZiJdLCJuYW1lcyI6WyJnZXRUaGlzRGF0ZSIsImUiLCJub3dUaW1lIiwidGltZSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJsbSIsImdldE1vbnRoIiwibSIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiTSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdERhdGUiLCJkYXRlIiwibiIsImhvdXJEYXRlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1vbnRoRGF0ZUZvcm1hdCIsImZvdXJIb3VyVGltZSIsIm5vd0RhdGUiLCJob3VycyJdLCJtYXBw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dkM7QUFDTDs7O0FBRzNEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTZULENBQWdCLDZVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTJHO0FBQ3ZDO0FBQ0w7OztBQUcvRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsdUdBQU07QUFDUixFQUFFLGdIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpVSxDQUFnQixpVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFpcl9tYWluXCIgOmNsYXNzPVwic2l0ZUluZm8uaG91ckFxaXxnZXRNb2R1bGVCZygpXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhaXJfZmlyc3RcIj7mm7TmlrDml7bpl7TvvJp7e3NpdGVJbmZvLnRpbWV9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWlyLWNhbGVuZGVyIGZzXCIgQGNsaWNrPVwiZ29DYWxlbmRlcigpXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9jYWxlbmRhci5wbmdcIiB3aWR0aD1cIjE0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDVweFwiLz5cclxuICAgICAgICDnqbrmsJTotKjph4/ml6XljoZcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFpcl9tYWluX2xlZnRcIiA6Y2xhc3M9XCJzaXRlSW5mby5ob3VyQXFpfGdldE1ham9yQmcoKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGlwc1wiIDpjbGFzcz1cInNpdGVJbmZvLmhvdXJBcWl8Z2V0TWlub3JCZygpXCI+e3tzaXRlSW5mby5ob3VyQXFpU3RhdGUubGVuZ3RoPjI/c2l0ZUluZm8uaG91ckFxaVN0YXRlLnNsaWNlKDAsMSk6c2l0ZUluZm8uaG91ckFxaVN0YXRlfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICB7e3NpdGVJbmZvLmhvdXJBcWl9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1pbmZvIGZzXCI+XHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJub19ib3R0b21cIj48c3Bhbj7nqbrmsJTotKjph488L3NwYW4+PHNwYW5cclxuICAgICAgICAgICAgY2xhc3M9XCJtYWluX3JpZ2h0XCI+e3tzaXRlSW5mby5kYXlBcWlTdGF0ZXx8Jy0nfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCVcIj5cclxuICAgICAgICAgIDxkaXY+5pel57Sv6K6hQVFJPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtXCI+e3tzaXRlSW5mby5kYXlBcWl8fCctJ319PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MCVcIj5cclxuICAgICAgICAgIDxkaXY+5YWo5bm05LyY6Imv546HPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtXCI+e3tzaXRlSW5mby5nb29kUmF0aW98fCctJ319JTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibm9fYm90dG9tXCI+PHNwYW4+5bm05bqm5Zyo57q/546HPC9zcGFuPjxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbl9yaWdodFwiPnt7c2l0ZUluZm8uenhsfHwnLSd9fSU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImFpcl9ib3R0b21cIj5cclxuICAgICAgKiDnqbrmsJTotKjph4/mlbDmja7mnKrnu4/lrqHmoLjvvIzku4Xkvpvlj4LogINcclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCIgQGNsaWNrPVwiZ29HZW9Mb2NhdGlvbigpXCI+PGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9wb3NpdGlvbi5wbmdcIiB3aWR0aD1cIjE2XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDNweFwiLz7lnLDnkIbkvY3nva48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtnZXRUaGlzRGF0ZX0gZnJvbSAnQC91dGlscy9zZXRkYXRlJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJiYXNpY0luZm9cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVJbmZvOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzaXRlTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHt9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b2RheTogZ2V0VGhpc0RhdGUoMSksXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdvQ2FsZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpckNhbGVuZGFyUXVlcnknLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgICAgc2l0ZU5hbWU6IHRoaXMuc2l0ZU5hbWUsXHJcbiAgICAgICAgICAgIHh6cWg6IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuepuuawlOi0qOmHj+aXpeWOhlwiLFxyXG4gICAgICAgICAgICBxdWVyeUZsYWc6IHRoaXMucXVlcnlGbGFnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ29HZW9Mb2NhdGlvbigpe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdhaXJMb2NhdGlvbk1hcCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBzaXRlTmFtZTogdGhpcy5zaXRlTmFtZSxcclxuICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiB0aGlzLnNpdGVJbmZvLmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMuc2l0ZUluZm8ubGF0aXR1ZGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyczoge1xyXG4gICAgICBnZXRNaW5vckJnKGtleSkge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBcIlwiO1xyXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl95ZWxsb3cnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDUwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX2dyZWVuJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxMDAgJiYga2V5ID4gNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfeWVsbG93JztcclxuICAgICAgICAgIC8vIH1lbHNlIGlmKGtleSA8PSAxNTAgJiYga2V5ID4gMTAwKXtcclxuICAgICAgICAgIC8vIFx0c3RhdHVzID0gJ2hvdXJfb3JhbmdlX2JnJztcclxuICAgICAgICAgIC8vIH1lbHNlIGlmKGtleSA8PSAyMDAgJiYga2V5ID4gMTUwKXtcclxuICAgICAgICAgIC8vIFx0c3RhdHVzID0gJ2hvdXJfcmVkX2JnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA+IDEwMCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9vcmFuZ2UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgfSxcclxuICAgICAgZ2V0TWFqb3JCZyhrZXkpIHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gXCJcIjtcclxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfbWFpbl95ZWxsb3cnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDUwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX21haW5fZ3JlZW4nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDEwMCAmJiBrZXkgPiA1MCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9tYWluX3llbGxvdyc7XHJcbiAgICAgICAgICAvLyB9ZWxzZSBpZihrZXkgPD0gMTUwICYmIGtleSA+IDEwMCl7XHJcbiAgICAgICAgICAvLyBcdHN0YXR1cyA9ICdob3VyX29yYW5nZV9iZyc7XHJcbiAgICAgICAgICAvLyB9ZWxzZSBpZihrZXkgPD0gMjAwICYmIGtleSA+IDE1MCl7XHJcbiAgICAgICAgICAvLyBcdHN0YXR1cyA9ICdob3VyX3JlZF9iZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPiAxMDApIHsvLyA+IDIwMFxyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9tYWluX29yYW5nZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRNb2R1bGVCZyhrZXkpIHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gXCJcIjtcclxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfeWVsbG93X2JnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSA1MCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9ncmVlbl9iZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPD0gMTAwICYmIGtleSA+IDUwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX3llbGxvd19iZyc7XHJcbiAgICAgICAgICAvLyB9ZWxzZSBpZihrZXkgPD0gMTUwICYmIGtleSA+IDEwMCl7XHJcbiAgICAgICAgICAvLyBcdHN0YXR1cyA9ICdob3VyX29yYW5nZV9iZyc7XHJcbiAgICAgICAgICAvLyB9ZWxzZSBpZihrZXkgPD0gMjAwICYmIGtleSA+IDE1MCl7XHJcbiAgICAgICAgICAvLyBcdHN0YXR1cyA9ICdob3VyX3JlZF9iZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPiAxMDApIHsvL2tleSA+IDIwMFxyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9vcmFuZ2VfYmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICAuYWlyX3llbGxvd19iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0ZXIvYWlyX3llbGxvd19iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjUwLCAxMjcsIDUsIDAuNSkgMCUsIHJnYmEoMjM3LCAyNTIsIDI1MSwgMCkgMTAwJSk7Ki9cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1MCwgMTI3LCA1LCAwLjA1KTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFpcl9ncmVlbl9iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0ZXIvYWlyX2dyZWVuX2JnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTAsIDEyNywgNSwgMC41KSAwJSwgcmdiYSgyMzcsIDI1MiwgMjUxLCAwKSAxMDAlKTsqL1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAxMjcsIDUsIDAuMDUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYWlyX29yYW5nZV9iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0ZXIvYWlyX29yYW5nZV9iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjUwLCAxMjcsIDUsIDAuNSkgMCUsIHJnYmEoMjM3LCAyNTIsIDI1MSwgMCkgMTAwJSk7Ki9cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1MCwgMTI3LCA1LCAwLjA1KTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFpcl9tYWluIHtcclxuICAgIC8qZGlzcGxheTogZmxleDsqL1xyXG4gICAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAuYWlyX21haW5fbGVmdCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLnRpcHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5haXJfeWVsbG93IHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE5MSwgMCwgMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL2Fpcl95ZWxsb3cucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFpcl9ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoNCwgMTk5LCA0LCAxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0ZXIvYWlyX2dyZWVuLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5haXJfb3JhbmdlIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDEyNiwgMCwgMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL2Fpcl9vcmFuZ2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWlyX21haW5feWVsbG93IHtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAxOTEsIDAsIDEpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkxLCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTkxLCAwLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5haXJfbWFpbl9ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDQsIDE5OSwgNCwgMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNCwgMTk5LCA0LCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQsIDE5OSwgNCwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAuYWlyX21haW5fb3JhbmdlIHtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAxMjYsIDAsIDEpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTI2LCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTI2LCAwLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5haXJfZmlyc3Qge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuYWlyLWNhbGVuZGVyIHtcclxuICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4zKTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSg4MiwgMTEzLCAyNTUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5haXJfbWFpbl9yaWdodCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHg7XHJcblxyXG4gICAgICAubWFpbl9yaWdodCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYWlyX2JvdHRvbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuMyk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDYzLCAxMjMsIDI1NSwgMSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuc2l0ZS1pbmZve1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAubnVte1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG91ckRhdGFcIj5cclxuICAgIDxkaXYgQGNsaWNrPVwiY2hhbmdlVGFiKCdhcWknLCdBUUknLCdhcWknKVwiIDpzdHlsZT1cImdldENvbG9yKG9iakRhdGEuYXFpLCdhcWknKVwiPlxyXG4gICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqRGF0YS5hcWksJ2FxaScpXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogY2VudGVyXCI+PHNwYW4+QVFJPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3tvYmpEYXRhLmFxaX19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IEBjbGljaz1cImNoYW5nZVRhYigncG0yNScsJ1BNMjUnLCdwbTI1SWFxaScpXCIgOnN0eWxlPVwiZ2V0Q29sb3Iob2JqRGF0YS5wbTI1LCdwbTI1JylcIj5cclxuICAgICAgPHNwYW4gOnN0eWxlPVwiZ2V0U3BhbkNvbG9yKG9iakRhdGEucG0yNSwncG0yNScpXCI+PHNwYW4+UE0yLjU8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3tvYmpEYXRhLnBtMjV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3BtMTAnLCdQTTEwJywncG0xMElhcWknKVwiIDpzdHlsZT1cImdldENvbG9yKG9iakRhdGEucG0xMCwncG0xMCcpXCI+XHJcbiAgICAgIDxzcGFuIDpzdHlsZT1cImdldFNwYW5Db2xvcihvYmpEYXRhLnBtMTAsJ3BtMTAnKVwiPjxzcGFuPlBNMTA8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3tvYmpEYXRhLnBtMTB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3NvMicsJ1NPMicsJ3NvMklhcWknKVwiIDpzdHlsZT1cImdldENvbG9yKG9iakRhdGEuc28yLCdzbzInKVwiPlxyXG4gICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqRGF0YS5zbzIsJ3NvMicpXCI+PHNwYW4+U08yPC9zcGFuPjxzcGFuPnVnL23Cszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgIDxzcGFuPnt7b2JqRGF0YS5zbzJ9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ25vMicsJ05PMicsJ25vMklhcWknKVwiIDpzdHlsZT1cImdldENvbG9yKG9iakRhdGEubm8yLCdubzInKVwiPlxyXG4gICAgICA8c3BhbiA6c3R5bGU9XCJnZXRTcGFuQ29sb3Iob2JqRGF0YS5ubzIsJ25vMicpXCI+PHNwYW4+Tk8yPC9zcGFuPjxzcGFuPnVnL23Cszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgIDxzcGFuPnt7b2JqRGF0YS5ubzJ9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAgQGNsaWNrPVwiY2hhbmdlVGFiKCdjbycsJ0NPJywnY29JYXFpJylcIiA6c3R5bGU9XCJnZXRDb2xvcihvYmpEYXRhLmNvLCdjbycpXCI+XHJcbiAgICAgIDxzcGFuIDpzdHlsZT1cImdldFNwYW5Db2xvcihvYmpEYXRhLmNvLCdjbycpXCI+PHNwYW4+Q088L3NwYW4+PHNwYW4+bWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3tvYmpEYXRhLmNvfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgQGNsaWNrPVwiY2hhbmdlVGFiKCdvem9uZScsJ09aT05FJywnb3pvbmVJYXFpJylcIiA6c3R5bGU9XCJnZXRDb2xvcihvYmpEYXRhLm96b25lLCdvem9uZScpXCI+XHJcbiAgICAgIDxzcGFuIDpzdHlsZT1cImdldFNwYW5Db2xvcihvYmpEYXRhLm96b25lLCdvem9uZScpXCI+PHNwYW4+TzM8L3NwYW4+PHNwYW4+dWcvbcKzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+e3tvYmpEYXRhLm96b25lfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtnZXRDYWxlbmRlckJnQ29sb3J9IGZyb20gJ0AvdXRpbHMvYWlyVXRpbHMuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJmYWN0b3JEZXNcIixcclxuICAgIHByb3BzOntcclxuICAgICAgb2JqRGF0YTp7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6KCk9Pnt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aXZlOiAnYXFpJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIGNoYW5nZVRhYih2YWwsIHRpdGxlKXtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHZhbDtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2VGYWN0b3InLCB0aXRsZSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0Q29sb3IodmFsdWUsIGZhY3Rvcil7XHJcbiAgICAgICAgbGV0IGtleSA9IHZhbHVlO1xyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG4gICAgICAgIGxldCBiZyA9IHRoaXMuYWN0aXZlID09PSBmYWN0b3IgPyAnYmFja2dyb3VuZC1jb2xvcjogIzNmN2JmZjtjb2xvcjojZmZmJyA6ICcnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJyd8fHZhbHVlID09PSAnLScpIHtcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vbkNhbGVuZGVyQmdDb2xvcihmYWN0b3IsIGtleSkgKyAnOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vbkNhbGVuZGVyQmdDb2xvcihmYWN0b3IsIGtleSkgKyAnOyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHlsZSArIGJnO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTcGFuQ29sb3IodmFsdWUsIGZhY3Rvcil7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5hY3RpdmUgIT09IGZhY3RvciA/ICdjb2xvcjpyZ2JhKDM3LCA1NywgMTExLCAwLjUpJyA6ICcnO1xyXG4gICAgICAgIHJldHVybiBjb2xvclxyXG4gICAgICB9LFxyXG4gICAgICBvbkNhbGVuZGVyQmdDb2xvcih5ek5hbWUsIGNvdW50KSB7XHJcbiAgICAgICAgbGV0IHRlbXBDb3VudCA9IGNvdW50ID09PSAnLSc/Jyc6Y291bnRcclxuICAgICAgICByZXR1cm4gZ2V0Q2FsZW5kZXJCZ0NvbG9yKHl6TmFtZSwgdGVtcENvdW50KVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmhvdXJEYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgPmRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICA+c3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcblxyXG4gICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgLypjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7Ki9cclxuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkLCY6bnRoLWNoaWxkKDIpLCY6bnRoLWNoaWxkKDMpLCY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHdpZHRoOiAyMy41JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoNCksJjpsYXN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoNSksJjpudGgtY2hpbGQoNiksJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKi5ob3VyX3doaXRlX2JnIHtcclxuICAgICAgISpib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMyk7KiFcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDQsIDE5OSwgNCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XHJcblxyXG4gICAgICA+c3BhbiB7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvdXJfZ3JlZW5fYmcge1xyXG4gICAgICAhKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgMTk5LCA0LCAwLjMpOyohXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNCwgMTk5LCA0LCAwLjA1KTtcclxuXHJcbiAgICAgID5zcGFuIHtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoNCwgMTk5LCA0LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaG91cl95ZWxsb3dfYmcge1xyXG4gICAgICAhKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyMTcsIDAsIDAuMyk7KiFcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMTkxLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTtcclxuXHJcbiAgICAgID5zcGFuIHtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxOTEsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvdXJfb3JhbmdlX2JnIHtcclxuICAgICAgISpib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTI2LCAwLCAwLjMpOyohXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XHJcblxyXG4gICAgICA+c3BhbiB7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTI2LCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ob3VyX3JlZF9iZyB7XHJcbiAgICAgICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuMyk7KiFcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMCwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XHJcblxyXG4gICAgICA+c3BhbiB7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhvdXJfZGVlcHJlZF9iZyB7XHJcbiAgICAgICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTMsIDAsIDc2LCAwLjMpOyohXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpO1xyXG5cclxuICAgICAgPnNwYW4ge1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxNTMsIDAsIDc2LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0qL1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG5cclxuICAgIDx2YW4tcm93IGNsYXNzPVwiYWlyLXNlYXJjaFwiIDpndXR0ZXI9XCIxMFwiPlxyXG4gICAgICA8dmFuLWNvbCBzcGFuPVwiOFwiPlxyXG4gICAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgY2xpY2thYmxlXHJcbiAgICAgICAgICAgIDp2YWx1ZT1cImVuZFRpbWVcIlxyXG4gICAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgcmlnaHQtaWNvbj1cImFycm93LWRvd25cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJlbmRQb3A9IHRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdmFuLWNvbD5cclxuICAgIDwvdmFuLXJvdz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIGZhY3RvckRhdGFcIiBjbGFzcz1cImZhY3Rvci1pdGVtXCIgOmNsYXNzPVwiW2k9PT1mYWN0b3JUYWJJbmRleD8nYWN0aXZlJzonJ11cIlxyXG4gICAgICAgICAgIEBjbGljaz1cImNoYW5nZUZhY3RvclRhYihpdGVtLGkpXCI+e3tpdGVtLnRleHR9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS3ml7bpl7QtLT5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImVuZFBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgIDx2YW4tZGF0ZXRpbWUtcGlja2VyIHYtbW9kZWw9XCJjdXJyZW50RGF0ZVwiIHR5cGU9XCJkYXRlXCIgdGl0bGU9XCLpgInmi6nlubTmnIhcIiBAY29uZmlybT1cIm9uQ29uZmlybUVuZFRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2FuY2VsPVwiZW5kUG9wPWZhbHNlXCJcclxuICAgICAgLz5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4O2JhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgPGRpdiByZWY9XCJtaW51dGVzUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjk2JTttYXJnaW46IDAgYXV0b1wiLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx0YWJsZURhdGEgOmxpc3REYXRhPVwibGlzdERhdGFcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbiAgaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tIFwiZWNoYXJ0c1wiO1xyXG4gIGltcG9ydCB7YWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXJ9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcclxuICBpbXBvcnQge2dldE1hcmt9IGZyb20gJ0AvdXRpbHMvYWlyVXRpbHMnO1xyXG4gIGltcG9ydCB0YWJsZURhdGEgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3RhYmxlRGF0YVwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImZpdmVNaW51dGVzRGF0YVwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICB0YWJsZURhdGFcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGVuZFBvcDogZmFsc2UsXHJcbiAgICAgICAgZW5kVGltZTogZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgICAgZmFjdG9yRGF0YTogW1xyXG4gICAgICAgICAge3ZhbHVlOiAnQVFJJywgdGV4dDogJ0FRSSd9LFxyXG4gICAgICAgICAge3ZhbHVlOiAnUE0yNScsIHRleHQ6ICdQTTIuNScsfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ1BNMTAnLCB0ZXh0OiAnUE0xMCd9LFxyXG4gICAgICAgICAge3ZhbHVlOiAnU08yJywgdGV4dDogJ1NPMid9LFxyXG4gICAgICAgICAge3ZhbHVlOiAnTk8yJywgdGV4dDogJ05PMid9LFxyXG4gICAgICAgICAge3ZhbHVlOiAnQ08nLCB0ZXh0OiAnQ08nfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ09aT05FJywgdGV4dDogJ08zJ31cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZhY3RvcjogJ0FRSScsXHJcbiAgICAgICAgZmFjdG9yUG9wOiBmYWxzZSxcclxuICAgICAgICBmYWN0b3JUYWJJbmRleDogMCxcclxuICAgICAgICBsaXN0RGF0YTogW10sXHJcbiAgICAgICAgbWludXRlc1JlZjogbnVsbCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0YWJJbmRleDoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6e1xyXG4gICAgICBzaXRlSWQodmFsLCBvbGQpIHtcclxuICAgICAgICBpZiAodmFsICE9IG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5taW51dGVzUmVmKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcXVlcnlGbGFnKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5taW51dGVzUmVmKVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5taW51dGVzUmVmKSB7XHJcbiAgICAgICAgdGhpcy5taW51dGVzUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMubWludXRlc1JlZik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLm1pbnV0ZXNSZWYpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2hhbmdlRmFjdG9yVGFiKG9iaiwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmZhY3RvclRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5mYWN0b3IgPSBvYmoudmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5taW51dGVzUmVmKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1FbmRUaW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgdGhpcy5lbmRQb3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLm1pbnV0ZXNSZWYpXHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgICAgY29sb3I6IFsncmdiYSg2OCwgMTIzLCAyNTIsIDEpJ10sXHJcbiAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICB0b3A6ICcxMSUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnOCUnLFxyXG4gICAgICAgICAgICByaWdodDogJzUlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMjAlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5mYWN0b3IgPT0gJ0FRSScgPyAnJyA6IHRoaXMuZmFjdG9yID09ICdDTycgPyAnbWcvbcKzJyA6ICd1Zy9twrMnLFxyXG4gICAgICAgICAgICBuYW1lR2FwOiA4LFxyXG4gICAgICAgICAgICBuYW1lVGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U0RTlGMidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICBzaG93U3ltYm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzbW9vdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWFya0xpbmU6IHtcclxuICAgICAgICAgICAgICAgIHN5bWJvbDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZ2V0TWFyayh0aGlzLmZhY3RvciksXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGRhdGFUeXBlOiAxLFxyXG4gICAgICAgICAgZGF0ZVRpbWU6IHRoaXMuZW5kVGltZSxcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLmZhY3RvciA9PSAnTzMnID8gJ09aT05FJyA6IHRoaXMuZmFjdG9yLFxyXG4gICAgICAgICAgYXFpOiB0aGlzLnF1ZXJ5RmxhZyA9PT0gMCA/ICcnIDogJ2lhcWknLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZih0aGlzLnRhYkluZGV4PT0xKXtcclxuICAgICAgICBhaXJRdWFsaXR5U2l0ZURhdGFUeXBlQW5vdGhlcihpbmZvKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgc0FyciA9IFtdO1xyXG4gICAgICAgICAgbGV0IHhBcnIgPSBbXTtcclxuICAgICAgICAgIGxldCByZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgaWYgKHJkYXRhLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZGF0YS5saXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgeEFyci5wdXNoKGl0ZW0ubmFtZS5zdWJzdHIoMTEsIDUpKTtcclxuICAgICAgICAgICAgICBzQXJyLnB1c2goaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG9wdGlvbi54QXhpcy5kYXRhID0geEFycjtcclxuICAgICAgICAgICAgb3B0aW9uLnNlcmllc1swXS5kYXRhID0gc0FycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCB0ZW1wRCA9IHJkYXRhLmxpc3QuY29uY2F0KFtdKTtcclxuICAgICAgICAgIHRoaXMubGlzdERhdGEgPSB0ZW1wRC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICBjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIC5haXItc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1jZWxsIHtcclxuICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1maWVsZF9fcmlnaHQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICBzY2FsZTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIDo6di1kZWVwIC52YW4tZmllbGRfX2NvbnRyb2wge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHNjYWxlOiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmFjdG9yLXdyYXBwZXIge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICAgLmZhY3Rvci1pdGVtIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNnB4IDEzcHggNnB4IDEzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgd2lkdGg6IDIyJTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhaXItc2l0ZS1ib3gtaW5mb1wiIEBjbGljaz1cInRvRGV0YWlsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtdGl0bGVcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+5LiA56uZ5LiA562WPC9zcGFuPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87Y29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtsaW5lLWhlaWdodDogMjVweDtcIj5cclxuICAgICAgICDmn6XnnItcclxuICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4O3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImdlb0xvY2F0aW9uXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaXRlSW5mbzoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzaXRlSWQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDooKT0+e31cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwicGRmSDVcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIC8vIHVybDogJ2h0dHA6Ly8xMC4yMjAuMTEuNjU6OTAwMi9kZWZhdWx0LzliOGMyMmQwLWQ2MGYtMTFlZS1kOGJlLWU4ZWM4NzJiM2VhYS5wZGYnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTAuMjIxLjI5LjQ6NzAwMS9kZWZhdWx0LzliOGMyMmQwLWQ2MGYtMTFlZS1kOGJlLWU4ZWM4NzJiM2VhYS5wZGYnLFxyXG4gICAgICAgICAgICBuYW1lOiAn5LiA56uZ5LiA562W4oCd6Ziy5o6n5pa55qGIJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtYm94LWluZm9cIiBAY2xpY2s9XCJ0b0RldGFpbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFpci1zaXRlLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPumrmOepuuinhumikeaVsOaNrjwvc3Bhbj5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7bGluZS1oZWlnaHQ6IDI1cHg7XCI+XHJcbiAgICAgICAg5p+l55yLXHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9yaWdodEljb24ucG5nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJoaWdoVmlkZW9cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9EZXRhaWwoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnaGlnaFZpZGVvJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtzaXRlSWQ6IHRoaXMuc2l0ZUlkfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8IS0tPGRpdiBjbGFzcz1cInNlYXJjaC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbSBmc1wiIEBjbGljaz1cImVuZFRpbWVQb3A9IHRydWVcIj5cclxuICAgICAgICB7e3Nob3dFbmRUaW1lfX1cclxuICAgICAgICA8dmFuLWljb24gbmFtZT1cImFycm93LWRvd25cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWl0ZW0gZnNcIiBAY2xpY2s9XCJmYWN0b3JQb3A9IHRydWVcIj5cclxuICAgICAgICB7e2ZhY3Rvck5hbWV9fVxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2l0ZV9jb21wYXJlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYXJlX3RpdGxlXCI+56uZ54K55a+55q+U77yaPHNwYW4gQGNsaWNrPVwic2hvd1NpdGVQb3BcIj7mt7vliqDlr7nmr5Tnq5nngrk8L3NwYW4+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYXJlX3N0YXRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwieWVsbG93X2JvcmRlclwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNoZWNrQXJyTmFtZVwiXHJcbiAgICAgICAgICAgICA6c3R5bGU9XCInYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCcgK2NvbG9yc0FycltpbmRleCsxXVwiPlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtLnNpdGVOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICA8aW1nIEBjbGljaz1cImNsb3NlKGl0ZW0pXCIgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvY2xvc2UucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9XCJob3VyUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjEwMCU7bWFyZ2luOiAwIGF1dG9cIi8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIOermeeCuemAieaLqSAtLT5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dQaWNrZXJcIiBwb3NpdGlvbj1cImJvdHRvbVwiIHN0eWxlPVwiaGVpZ2h0OiA0NSU7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cCB2c2VsZWN0cG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwX3RpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibC1jYW5jZVwiIEBjbGljaz1cInNob3dQaWNrZXIgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxyXG4gICAgICAgICAgPHZhbi1zZWFyY2ggcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBzdHlsZT1cIndpZHRoOiA3NiU7XCIgdi1tb2RlbD1cInNlYWNoQ2hlY2tlclwiLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyLWNvbmZpcm0gdHh0Ymx1ZVwiIEBjbGljaz1cIm9uQ29uZmlybUpjclwiPiDnoa7orqQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPHZhbi1jaGVja2JveC1ncm91cCB2LW1vZGVsPVwiY2hlY2tBcnJcIj5cclxuICAgICAgICAgICAgPHZhbi1jZWxsLWdyb3VwPlxyXG4gICAgICAgICAgICAgIDx2YW4tY2VsbCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc2Vjb25kTGlzdFwiIGNsaWNrYWJsZSA6a2V5PVwiYGpjeXoke2luZGV4fWBcIiA6dGl0bGU9XCJgJHtpdGVtLnJlTmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tdGl0bGVcIj57e2l0ZW0uc2l0ZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHZhbi10YWcgdHlwZT1cInByaW1hcnlcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjEwcHg7XCI+e3tpdGVtLmNvbnRyb2xMZXZlbH19PC92YW4tdGFnPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjcmlnaHQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveCA6bmFtZT1cIml0ZW1cIiByZWY9XCJjaGVja2JveGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L3Zhbi1jZWxsPlxyXG4gICAgICAgICAgICA8L3Zhbi1jZWxsLWdyb3VwPlxyXG4gICAgICAgICAgPC92YW4tY2hlY2tib3gtZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC92YW4tcG9wdXA+XHJcblxyXG4gICAgPCEtLeaXtumXtC0tPlxyXG4gICAgPCEtLTx2YW4tcG9wdXAgdi1tb2RlbD1cImVuZFRpbWVQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LW1vZGVsPVwiY3VycmVudERhdGVcIiA6dHlwZT1cInRhYkluZGV4PT0wPydkYXRlaG91cic6J2RhdGUnXCIgdGl0bGU9XCLpgInmi6nml7bpl7RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUVuZFRpbWVcIiBAY2FuY2VsPVwiZW5kVGltZVBvcD1mYWxzZVwiLz5cclxuICAgIDwvdmFuLXBvcHVwPi0tPlxyXG5cclxuICAgIDwhLS3lm6DlrZDpgInmi6ktLT5cclxuICAgIDwhLS08dmFuLXBvcHVwIHYtbW9kZWw9XCJmYWN0b3JQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLXBpY2tlciB0aXRsZT1cIuaVsOaNruexu+Wei1wiIHNob3ctdG9vbGJhciA6Y29sdW1ucz1cImZhY3RvckFyclwiIHZhbHVlLWtleT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUZhY3RvclwiIEBjYW5jZWw9XCJmYWN0b3JQb3A9ZmFsc2VcIi8+XHJcbiAgICA8L3Zhbi1wb3B1cD4tLT5cclxuXHJcbiAgICA8IS0t5rGh5p+T54mp6YCJ5oupLS0+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJwcm9Qb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLXBpY2tlciB0aXRsZT1cIuaVsOaNruexu+Wei1wiIHNob3ctdG9vbGJhciA6Y29sdW1ucz1cInByb0FyclwiIEBjb25maXJtPVwib25Db25maXJtUHJvXCIgQGNhbmNlbD1cInByb1BvcD1mYWxzZVwiLz5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICAgIDx0YWJsZURhdGEgOmxpc3REYXRhPVwibGlzdERhdGFcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgdGFibGVEYXRhIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy90YWJsZURhdGFcIjtcclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbiAgaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG4gIGltcG9ydCB7Z2V0TWFya30gZnJvbSAnQC91dGlscy9haXJVdGlscyc7XHJcbiAgaW1wb3J0IHtcclxuICAgIHNpdGVDb21wYXJpc29uLFxyXG4gICAgZ2V0QWlyU2l0ZSxcclxuICB9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcclxuXHJcbiAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgJ3JnYmEoNjgsIDEyMywgMjUyLCAxKScsICcjMmJmZjk2JywgJyM1YzM2YzEnLCAnI2M0OTI1NicsICcjZTliMjI5JywgJyNmMTZlMTYnLCAnIzk4NjVkMicsICcjZDA0OTVmJywgJyNmZmJhM2InLCAnIzAwZGNkMycsXHJcbiAgICAnIzFiZTFiNycsICcjNDk1MmZmJywgJyMwMDY5ZjcnLCAnIzAwZGNmYScsICcjNTRiZjdiJywgJyNjMzAwNzInLCAnIzAyZmZmZicsICcjNDY3M2ZmJywgJyNkNDUwNTAnLCAnIzI0ZmYwMCcsXHJcbiAgICAnIzM3Y2U4MCcsICcjZDg5MjUyJywgJyNjZTc3Y2UnLCAnIzI2ZmYxNScsICcjYTUyYWViJywgJyNmZjY1YmEnLCAnIzRkZTI0MCcsICcjMWM3NWIyJywgJyNkYjAxOGInLFxyXG4gIF07XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJob3VyRGF0YVwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICB0YWJsZURhdGFcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaXRlSWQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGFiSW5kZXg6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFjdG9yUHJvcHM6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wYXJlU2l0ZUlkczogXCJcIixcclxuICAgICAgICBmYWN0b3JQb3A6IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrQXJyTmFtZTogW10sXHJcbiAgICAgICAgY29sb3JzQXJyOiBjb2xvcnMsXHJcbiAgICAgICAgY2hlY2tBcnI6IFtdLFxyXG4gICAgICAgIGhvdXJSZWY6IG51bGwsXHJcbiAgICAgICAgZmFjdG9yOiAnQVFJJyxcclxuICAgICAgICBmYWN0b3JOYW1lOiAnQVFJJyxcclxuICAgICAgICBmYWN0b3JBcnI6IFtcclxuICAgICAgICAgIHt2YWx1ZTogJ0FRSScsIHRleHQ6ICdBUUknfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ1BNMjUnLCB0ZXh0OiAnUE0yLjUnLH0sXHJcbiAgICAgICAgICB7dmFsdWU6ICdQTTEwJywgdGV4dDogJ1BNMTAnfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ1NPMicsIHRleHQ6ICdTTzInfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ05PMicsIHRleHQ6ICdOTzInfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ0NPJywgdGV4dDogJ0NPJ30sXHJcbiAgICAgICAgICB7dmFsdWU6ICdPWk9ORScsIHRleHQ6ICdPMyd9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbmRUaW1lUG9wOiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBlbmRUaW1lOiBkYXlqcyhuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSxcclxuICAgICAgICBzaG93RW5kVGltZTogZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJyksXHJcbiAgICAgICAgcHJvQXJyOiBbe1xyXG4gICAgICAgICAgdGV4dDogJ+mmluimgeaxoeafk+eJqScsXHJcbiAgICAgICAgICB2YWw6IDFcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0ZXh0OiAn6LaF5qCH5rGh5p+T54mpJyxcclxuICAgICAgICAgIHZhbDogMlxyXG4gICAgICAgIH0sXSxcclxuICAgICAgICBwcm9Qb3A6IGZhbHNlLFxyXG4gICAgICAgIHNob3dQaWNrZXI6IGZhbHNlLFxyXG4gICAgICAgIHNlYWNoQ2hlY2tlcjogXCJcIixcclxuICAgICAgICBzZWNvbmRMaXN0OiBbXSxcclxuICAgICAgICBkZXNjbGlzdDogW10sXHJcbiAgICAgICAgbGlzdERhdGE6IFtdLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdGFiSW5kZXgodmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyh0aGlzLmVuZFRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgICAgdGhpcy5zaG93RW5kVGltZSA9IGRheWpzKHRoaXMuZW5kVGltZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbmRUaW1lID0gZGF5anModGhpcy5lbmRUaW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgIHRoaXMuc2hvd0VuZFRpbWUgPSBkYXlqcyh0aGlzLmVuZFRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuaG91clJlZilcclxuICAgICAgfSxcclxuICAgICAgc2l0ZUlkKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBvbGQpIHtcclxuICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuaG91clJlZilcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5RmxhZyh2YWwsIG9sZCkge1xyXG4gICAgICAgIGlmICh2YWwgIT0gb2xkKSB7XHJcbiAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmhvdXJSZWYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZWFjaENoZWNrZXI6IHtcclxuICAgICAgICBoYW5kbGVyKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VhY2hDaGVja2VyID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kTGlzdCA9IHRoaXMuZGVzY2xpc3Q7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZExpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLnNpdGVOYW1lLmluZGV4T2YodGhpcy5zZWFjaENoZWNrZXIpID4gLTEgfHwgaXRlbS5jb250cm9sTGV2ZWwuaW5kZXhPZih0aGlzLnNlYWNoQ2hlY2tlcikgPiAtXHJcbiAgICAgICAgICAgICAgICAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZExpc3QucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBmYWN0b3JQcm9wcyhuZXdEKXtcclxuICAgICAgICB0aGlzLmZhY3RvciA9IG5ld0Q7XHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5ob3VyUmVmKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmhvdXJSZWYpIHtcclxuICAgICAgICB0aGlzLmhvdXJSZWYgPSBlY2hhcnRzLmluaXQodGhpcy4kcmVmcy5ob3VyUmVmKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuaG91clJlZilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0U2l0ZSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAvL+afpeivouaJgOacieermeeCuVxyXG4gICAgICBnZXRTaXRlKCkge1xyXG4gICAgICAgIGdldEFpclNpdGUoe1xyXG4gICAgICAgICAgdHlwZTogMlxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVzY2xpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29uZmlybUVuZFRpbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJylcclxuICAgICAgICAgIHRoaXMuc2hvd0VuZFRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbmRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICB0aGlzLnNob3dFbmRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuaG91clJlZilcclxuICAgICAgICB0aGlzLmVuZFRpbWVQb3AgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtRmFjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yTmFtZSA9IHZhbC50ZXh0O1xyXG4gICAgICAgIHRoaXMuZmFjdG9yID0gdmFsLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuaG91clJlZilcclxuICAgICAgICB0aGlzLmZhY3RvclBvcCA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1Qcm8ob2JqKSB7XHJcbiAgICAgICAgdGhpcy5zaG93ZmFjdG9yID0gb2JqLnRleHQ7XHJcbiAgICAgICAgdGhpcy5wcm9Qb3AgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgaW5pdENoYXJ0KGNoYXJ0SW5zdGFuY2UpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNBcnIsXHJcbiAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICB0b3A6ICcxMSUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnOCUnLFxyXG4gICAgICAgICAgICByaWdodDogJzUlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMjAlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5mYWN0b3IgPT0gJ0FRSScgPyAnJyA6IHRoaXMuZmFjdG9yID09ICdDTycgPyAnbWcvbcKzJyA6ICd1Zy9twrMnLFxyXG4gICAgICAgICAgICBuYW1lR2FwOiA4LFxyXG4gICAgICAgICAgICBuYW1lVGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U0RTlGMidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgYWxsSWRzID0gdGhpcy5zaXRlSWQgKyBcIixcIiArIHRoaXMuY29tcGFyZVNpdGVJZHNcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGRhdGVUeXBlOiB0aGlzLnRhYkluZGV4ID09IDIgPyAnMicgOiAnMScsXHJcbiAgICAgICAgICBkYXRlVGltZTogdGhpcy5lbmRUaW1lLFxyXG4gICAgICAgICAgc2l0ZUlkczogYWxsSWRzLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy5mYWN0b3IsXHJcbiAgICAgICAgICBhcWk6IHRoaXMucXVlcnlGbGFnID09PSAwID8gJycgOiAnaWFxaScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpdGVDb21wYXJpc29uKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGxldCBzQXJyID0gW107XHJcbiAgICAgICAgICBsZXQgeEFyciA9IFtdO1xyXG4gICAgICAgICAgbGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICBjaGFydEluc3RhbmNlLmNsZWFyKCk7XHJcbiAgICAgICAgICBpZiAocmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgc0Fyci5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICB4QXJyID0gW107XHJcbiAgICAgICAgICAgICAgcmRhdGFbaV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpdGVJZCA9PSBpdGVtLnNpdGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbGlzdERhdGEgPSByZGF0YVtpXS5jb25jYXQoW10pO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdERhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiSW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICB4QXJyLnB1c2goaXRlbS5yYXRpby5zdWJzdHIoMTEsIDIpICsgJ+aXticpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgeEFyci5wdXNoKGl0ZW0ucmF0aW8uc3Vic3RyKDgsIDIpICsgJ+aXpScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8geEFyci5wdXNoKGl0ZW0ucmF0aW8uc3Vic3RyKDExLCAyKSsn5pe2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3NzID0gW107XHJcbiAgICAgICAgICAgICAgICBzc3MucHVzaChpdGVtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgc0FycltpXS5wdXNoKGl0ZW0udmFsdWUpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBvcHRpb24uc2VyaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcmRhdGFbaV1bMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNBcnJbaV0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgICBzaG93U3ltYm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmtMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9uLnNlcmllc1swXS5tYXJrTGluZS5kYXRhID0gZ2V0TWFyayh0aGlzLmZhY3Rvcik7XHJcbiAgICAgICAgICAgIG9wdGlvbi54QXhpcy5kYXRhID0geEFycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbilcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBzaG93U2l0ZVBvcCgpIHtcclxuICAgICAgICB0aGlzLnNob3dQaWNrZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBcnIgPSB0aGlzLmNoZWNrQXJyTmFtZTtcclxuICAgICAgfSxcclxuICAgICAgY2xvc2Uocm93KSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Fyck5hbWUgPSB0aGlzLmNoZWNrQXJyTmFtZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSByb3cuaWQpO1xyXG4gICAgICAgIGxldCBjb21wYXJlU2l0ZUlkcyA9IHRoaXMuY2hlY2tBcnJOYW1lLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNvbXBhcmVTaXRlSWRzID0gY29tcGFyZVNpdGVJZHMuam9pbignLCcpOyAvLyDlrZfnrKbkuLLmi7zmjqVcclxuICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmhvdXJSZWYpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29uZmlybUpjcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0Fyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgbmFycmlkcyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5jaGVja0Fyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBuYXJyaWRzLnB1c2goaXRlbS5pZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuY29tcGFyZVNpdGVJZHMgPSBuYXJyaWRzLmpvaW4oJywnKTsgLy8g5a2X56ym5Liy5ou85o6lXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29tcGFyZVNpdGVJZHMgPSAnJzsgLy8g5a2X56ym5Liy5ou85o6lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tBcnJOYW1lID0gdGhpcy5jaGVja0FycjtcclxuICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmhvdXJSZWYpXHJcbiAgICAgICAgdGhpcy5zaG93UGlja2VyID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvZ2dsZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMuY2hlY2tib3hlc1tpbmRleF0udG9nZ2xlKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuc2VhcmNoLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAuc2VhcmNoLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2l0ZV9jb21wYXJlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgICAuY29tcGFyZV90aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cclxuICAgICAgPiBzcGFuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDEzcHggM3B4IDEzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21wYXJlX3N0YXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNSk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTcuMzhweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAueWVsbG93X2JvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ncmVlbl9ib3JkZXIge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgwLCAxODYsIDE3MywgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtaWY9XCJudW0+MFwiIGNsYXNzPVwiYWlyLXNpdGUtYm94LWluZm9cIiBAY2xpY2s9XCJ0b0RldGFpbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFpci1zaXRlLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPua2ieawlOaxoeafk+a6kDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj4oe3tudW19feWutik8L3NwYW4+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO2xpbmUtaGVpZ2h0OiAyNXB4O1wiPlxyXG4gICAgICAgIOafpeeci1xyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIi8+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtwb2xsU2l6ZX0gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHkuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW52b2x2ZUFpclBvbGx1dGlvblwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2l0ZUlkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpdGVJbmZvOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc2l0ZUlkKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBvbGQpIHtcclxuICAgICAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBudW06IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcXVlcnlEYXRhKCkge1xyXG4gICAgICAgIHBvbGxTaXplKHtcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWRcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLm51bSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2l0ZUluZm8pXHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnYWlyUG9sbHV0aW9uU29ydCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgICAgICBzaXRlTmFtZTogdGhpcy5zaXRlSW5mby5zaXRlTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAubnVtYmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtYm94LWluZm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhaXItc2l0ZS10aXRsZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7nq5nngrnmsaHmn5PnianljaDmr5Q8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjogMHB4XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbSBmc1wiIEBjbGljaz1cInByb1BvcD0gdHJ1ZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWFyZ2luLXRvcDowcHg7cGFkZGluZzogM3B4IDZweDtcIj5cclxuXHRcdFx0XHRcdFx0XHR7e3RpbWV9fVxyXG5cdFx0XHRcdFx0XHRcdDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCI+XHJcbiAgICAgIDxzcGFuIDpjbGFzcz1cImluZGV4PT0xPydhY3RpdmUnOicnXCIgQGNsaWNrPVwibG9hZERhdGEoMSlcIj7pppbopoHmsaHmn5Pniak8L3NwYW4+XHJcbiAgICAgIDxzcGFuIDpjbGFzcz1cImluZGV4PT0yPydhY3RpdmUnOicnXCIgQGNsaWNrPVwibG9hZERhdGEoMilcIj7otoXmoIfmsaHmn5Pniak8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8cHJvcG9ydGlvbi1lY2hhcnQgeHpxaD1cIlwiIDpmYWN0b3I9XCJmYWN0b3IyXCIgOnNpdGVJZD1cInNpdGVJZFwiIDp5ZWFyPVwidGltZVwiIDpxdWVyeUZsYWc9XCJxdWVyeUZsYWdcIi8+XHJcblxyXG4gICAgPCEtLeaxoeafk+eJqemAieaLqS0tPlxyXG4gICAgPCEtLTx2YW4tcG9wdXAgdi1tb2RlbD1cInByb1BvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgIDx2YW4tcGlja2VyIHRpdGxlPVwi5pWw5o2u57G75Z6LXCIgc2hvdy10b29sYmFyIDpjb2x1bW5zPVwicHJvQXJyXCIgQGNvbmZpcm09XCJvbkNvbmZpcm1Qcm9cIiBAY2FuY2VsPVwicHJvUG9wPWZhbHNlXCIgLz5cclxuICAgIDwvdmFuLXBvcHVwPi0tPlxyXG4gICAgPGFpckZpbHRlciA6aXNTaG93PVwicHJvUG9wXCIgOnR5cGU9XCIneWVhcidcIiBAZ2V0VHlwZT1cImdldFR5cGVcIiBAY2xvc2U9XCJwcm9Qb3A9ZmFsc2VcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYWlyRmlsdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvYWlyRmlsdGVyXCI7XHJcbiAgaW1wb3J0IHByb3BvcnRpb25FY2hhcnQgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL3Byb3BvcnRpb25FY2hhcnRcIjtcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicG9sbHV0aW9uUHJvXCIsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OigpPT57fVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgIHByb3BvcnRpb25FY2hhcnQsXHJcbiAgICAgIGFpckZpbHRlclxyXG4gICAgfSxcclxuICAgIHdhdGNoOntcclxuICAgICAgc2l0ZUlkKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKXtcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIHNob3dmYWN0b3I6ICfpppbopoHmsaHmn5PniaknLFxyXG4gICAgICAgIGZhY3RvcjI6ICcxJyxcclxuICAgICAgICBwcm9Qb3A6IGZhbHNlLFxyXG4gICAgICAgIHByb0FycjogW3tcclxuICAgICAgICAgIHRleHQ6ICfpppbopoHmsaHmn5PniaknLFxyXG4gICAgICAgICAgdmFsOiAxXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdGV4dDogJ+i2heagh+axoeafk+eJqScsXHJcbiAgICAgICAgICB2YWw6IDJcclxuICAgICAgICB9LCBdLFxyXG4gICAgICAgIGluZGV4OiAxLFxyXG4gICAgICAgIHRpbWU6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKXtcclxuICAgICAgdGhpcy50aW1lID0gZGF5anMoKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC8qb25Db25maXJtUHJvKG9iaikge1xyXG4gICAgICAgIHRoaXMuc2hvd2ZhY3RvciA9IG9iai50ZXh0O1xyXG4gICAgICAgIHRoaXMuZmFjdG9yMiA9IG9iai52YWw7XHJcbiAgICAgICAgdGhpcy5wcm9Qb3AgPSBmYWxzZTtcclxuICAgICAgfSwqL1xyXG4gICAgICBsb2FkRGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZhY3RvcjIgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0VHlwZShvYmosIHR5cGUpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSBvYmoudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5zZWFyY2gtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgIC5zZWFyY2gtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWItd3JhcHBlcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPnNwYW57XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjU1LCAxKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTAsIDIxOCwgMjUyLCAxKTtcclxuICAgIH1cclxuICAgIC5hY3RpdmV7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoODIsIDExMywgMjU1LCAxKTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFpci1zaXRlLWJveC1pbmZvXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtdGl0bGVcIj48c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7nq5nngrnmsaHmn5PnianlubTluqbnu5/orqE8L3NwYW4+PC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAtMTBweCBhdXRvIDBweFwiPlxyXG4gICAgICA8YW5udWFsLWVjaGFydCB4enFoPVwi5pegXCIgOnpkaWQ9XCJzaXRlSWRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBhbm51YWxFY2hhcnQgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2FubnVhbEVjaGFydFwiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicG9sbHV0aW9uVHJlbmRcIixcclxuICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICBhbm51YWxFY2hhcnRcclxuICAgIH0sXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OigpPT57fVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOntcclxuICAgICAgc2l0ZUlkKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtYm94LWluZm9cIiBAY2xpY2s9XCJ0b0RldGFpbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFpci1zaXRlLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPuWRqOi+ueawlOixoeermeeCuTwvc3Bhbj5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7bGluZS1oZWlnaHQ6IDI1cHg7XCI+XHJcbiAgICAgICAg5p+l55yLXHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9yaWdodEljb24ucG5nXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJzdXJyb3VuZFdlYXRoZXJcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVJbmZvOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OigpPT57fVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9EZXRhaWwoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpcldlYXRoZXJNYXAnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgc2l0ZU5hbWU6IHRoaXMuJHJvdXRlLnF1ZXJ5LnNpdGVOYW1lLFxyXG4gICAgICAgICAgICBzaXRlSWQ6IHRoaXMuc2l0ZUlkLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IHRoaXMuc2l0ZUluZm8ubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogdGhpcy5zaXRlSW5mby5sYXRpdHVkZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyLXNpdGUtYm94LWluZm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhaXItc2l0ZS10aXRsZVwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOiBjZW50ZXJcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+5pWw5o2u6K+m5oOFPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInVuZm9sZFwiIEBjbGljaz1cInVuZm9sZD0hdW5mb2xkXCI+5bGV5byAPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dGFibGUgdi1zaG93PVwidW5mb2xkPT09dHJ1ZVwiIGNsYXNzPVwidGFibGUtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgIDx0ciBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxyXG4gICAgICAgIDx0aD7ml7bliLs8L3RoPlxyXG4gICAgICAgIDx0aD7nm5HmtYvlgLw8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgIDx0ciB2LWZvcj1cIml0ZW0gaW4gbGlzdERhdGFcIj5cclxuICAgICAgICA8dGQ+e3tpdGVtLnJhdGlvfHxpdGVtLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgPHRkPnt7aXRlbS52YWx1ZX19PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidGFibGVEYXRhXCIsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIGxpc3REYXRhOntcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICBkZWZhdWx0OigpPT57fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVuZm9sZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi51bmZvbGR7XHJcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG5cclxuICAgIDx2YW4tcm93IGNsYXNzPVwiYWlyLXNlYXJjaFwiIDpndXR0ZXI9XCIxMFwiPlxyXG4gICAgICA8dmFuLWNvbCBzcGFuPVwiN1wiPlxyXG4gICAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgICAgOnZhbHVlPVwiZGF0YVR5cGVcIlxyXG4gICAgICAgICAgICByaWdodC1pY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgIEBjbGljaz1cInR5cGVQb3A9IHRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdmFuLWNvbD5cclxuICAgICAgPHZhbi1jb2wgc3Bhbj1cIjhcIj5cclxuICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICA6dmFsdWU9XCJlbmRUaW1lXCJcclxuICAgICAgICAgICAgaW5wdXQtYWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIHJpZ2h0LWljb249XCJhcnJvdy1kb3duXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiZW5kUG9wPSB0cnVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3Zhbi1jb2w+XHJcbiAgICA8L3Zhbi1yb3c+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZhY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmYWN0b3ItaXRlbVwiIHYtZm9yPVwiKGl0ZW0saSkgaW4gZmFjdG9yRGF0YVwiIDpjbGFzcz1cIltpPT09ZmFjdG9yVGFiSW5kZXg/J2FjdGl2ZSc6JyddXCIgQGNsaWNrPVwiY2hhbmdlRmFjdG9yVGFiKGl0ZW0saSlcIj57e2l0ZW0udGV4dH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4O2JhY2tncm91bmQ6ICNmZmY7cGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICAgIDxkaXYgcmVmPVwieW95UmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjk2JTttYXJnaW46IDAgYXV0b1wiLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4O2JhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7mlbDmja7or6bmg4U8L3NwYW4+PC9kaXY+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8dGg+5pe25Yi7PC90aD5cclxuICAgICAgICAgIDx0aD7nm5HmtYvlgLw8L3RoPlxyXG4gICAgICAgICAgPHRoPuWQjOacn+WAvDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgdi1mb3I9XCJpdGVtIGluIGxpc3REYXRhXCI+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLnRpbWV9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLnRoaXN9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLmxhc3R9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLeexu+Wei+mAieaLqS0tPlxyXG4gICAgPCEtLTx2YW4tcG9wdXAgdi1tb2RlbD1cInR5cGVQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLXBpY2tlclxyXG4gICAgICAgICAgdGl0bGU9XCLmlbDmja7nsbvlnotcIlxyXG4gICAgICAgICAgc2hvdy10b29sYmFyXHJcbiAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxyXG4gICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1UeXBlVGltZVwiXHJcbiAgICAgICAgICBAY2FuY2VsPVwidHlwZVBvcD1mYWxzZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3Zhbi1wb3B1cD4tLT5cclxuXHJcbiAgICA8YWlyRmlsdGVyIDppc1Nob3c9XCJ0eXBlUG9wXCIgOnR5cGU9XCInYWlyJ1wiIEBnZXRUeXBlPVwiZ2V0VHlwZVwiIEBjbG9zZT1cInR5cGVQb3A9ZmFsc2VcIi8+XHJcblxyXG4gICAgPCEtLeaXtumXtC0tPlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwiZW5kUG9wXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgPHZhbi1kYXRldGltZS1waWNrZXIgdi1tb2RlbD1cImN1cnJlbnREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIumAieaLqeW5tOaciFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtRW5kVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjYW5jZWw9XCJzdGFydFBvcD1mYWxzZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3Zhbi1wb3B1cD5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbiAgaW1wb3J0IHtcclxuICAgIGFpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyXHJcbiAgfSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eSc7XHJcbiAgaW1wb3J0IHsgZ2V0TWFyayB9IGZyb20gJ0AvdXRpbHMvYWlyVXRpbHMnO1xyXG4gIGltcG9ydCBhaXJGaWx0ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9haXJGaWx0ZXJcIjtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInlveURhdGFcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWc6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgLy/mtZPluqYgMCAvSUFRSSAxXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBhaXJGaWx0ZXJcclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICBmYWN0b3JEYXRhOiBbXHJcbiAgICAgICAgICB7IHZhbHVlOiAnQVFJJywgdGV4dDogJ0FRSSd9LFxyXG4gICAgICAgICAgeyB2YWx1ZTogJ1BNMjUnLHRleHQ6ICdQTTIuNScsfSxcclxuICAgICAgICAgIHsgdmFsdWU6ICdQTTEwJyx0ZXh0OiAnUE0xMCd9LFxyXG4gICAgICAgICAge3ZhbHVlOiAnU08yJyx0ZXh0OiAnU08yJ30sXHJcbiAgICAgICAgICB7dmFsdWU6ICdOTzInLHRleHQ6ICdOTzInfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ0NPJyx0ZXh0OiAnQ08nfSxcclxuICAgICAgICAgIHt2YWx1ZTogJ09aT05FJyx0ZXh0OiAnTzMnfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGlzdERhdGE6IFtdLFxyXG4gICAgICAgIGZhY3RvciA6ICdBUUknLFxyXG4gICAgICAgIGZhY3RvclRhYkluZGV4OjAsXHJcbiAgICAgICAgeW95UmVmOiBudWxsLFxyXG4gICAgICAgIGRhdGFUeXBlOiflsI/ml7bmlbDmja4nLFxyXG4gICAgICAgIGVuZFBvcDogZmFsc2UsXHJcbiAgICAgICAgZW5kVGltZTogZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgICAgdGJUeXBlOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDon5bCP5pe25pWw5o2uJyx2YWw6MVxyXG4gICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHRleHQ6J+aXpeaVsOaNricsdmFsOjJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0eXBlUG9wOiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50RGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6e1xyXG4gICAgICBzaXRlSWQodmFsLCBvbGQpIHtcclxuICAgICAgICBpZiAodmFsICE9IG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy55b3lSZWYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUZsYWcodmFsLCBvbGQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy55b3lSZWYpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnlveVJlZikge1xyXG4gICAgICAgIHRoaXMueW95UmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMueW95UmVmKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMueW95UmVmKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgY2hhbmdlRmFjdG9yVGFiKG9iaixpbmRleCl7XHJcbiAgICAgICAgdGhpcy5mYWN0b3JUYWJJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZmFjdG9yID0gb2JqLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMueW95UmVmKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1FbmRUaW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgdGhpcy5lbmRQb3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLnlveVJlZilcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtVHlwZVRpbWUob2JqKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhVHlwZSA9IG9iai50ZXh0O1xyXG4gICAgICAgIHRoaXMudGJUeXBlPSBvYmoudmFsO1xyXG4gICAgICAgIHRoaXMudHlwZVBvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMueW95UmVmKVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRUeXBlKG9iaiwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMudGJUeXBlPSBvYmoudmFsdWU9PT0n5bCP5pe25pWw5o2uJz8nMSc6JzInO1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMueW95UmVmKVxyXG4gICAgICB9LFxyXG4gICAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICAgIGNvbG9yOiBbJ3JnYmEoNjgsIDEyMywgMjUyLCAxKScsJ3JnYmEoNiwgMTg0LCA0NywgMSknLCdyZ2IoMjM5LDIxOSwyNCknXSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBkYXRhOiBbJ+WOu+W5tCcsJ+S7iuW5tCcsJ+S4iuaciCddLFxyXG4gICAgICAgICAgICByaWdodDowLFxyXG4gICAgICAgICAgICBpY29uOidjaXJjbGUnLFxyXG4gICAgICAgICAgICBpdGVtV2lkdGg6NixcclxuICAgICAgICAgICAgaXRlbUhlaWdodDo2XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICB0b3A6ICcxNSUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnOCUnLFxyXG4gICAgICAgICAgICByaWdodDogJzUlJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMjAlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0U0RTlGMidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWUgOiAn5LuK5bm0JyxcclxuICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgc2hvd1N5bWJvbCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtYXJrTGluZToge1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmdldE1hcmsodGhpcy5mYWN0b3IpLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWUgOiAn5Y675bm0JyxcclxuICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgc2hvd1N5bWJvbCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWUgOiAn5LiK5pyIJyxcclxuICAgICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgc2hvd1N5bWJvbCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgZGF0YVR5cGU6MixcclxuICAgICAgICAgIGRhdGVUaW1lOnRoaXMuZW5kVGltZSxcclxuICAgICAgICAgIHNpdGVJZDp0aGlzLnNpdGVJZCxcclxuICAgICAgICAgIHR5cGU6dGhpcy5mYWN0b3IsXHJcbiAgICAgICAgICB0YlR5cGU6dGhpcy50YlR5cGUsIC8v5bCP5pe25pWw5o2uMSDml6XmlbDmja4yXHJcbiAgICAgICAgICBhcWk6IHRoaXMucXVlcnlGbGFnID09PSAwID8gJycgOiAnaWFxaScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyKGluZm8pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICBsZXQgc0FycjEgPSBbXSxzQXJyMD1bXTtcclxuICAgICAgICAgIGxldCB4QXJyID0gW107XHJcbiAgICAgICAgICBsZXQgc0FycjIgPSBbXTtcclxuICAgICAgICAgIGxldCByZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgaWYocmRhdGEudWx0aW1hdGVseUxpc3QubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICByZGF0YS51bHRpbWF0ZWx5TGlzdC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgICBpZih0aGlzLnRiVHlwZT09Mil7XHJcbiAgICAgICAgICAgICAgICB4QXJyLnB1c2goaXRlbS50aW1lLnN1YnN0cig4LDIpKyfml6UnKTtcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHhBcnIucHVzaChpdGVtLnRpbWUuc3Vic3RyKDExLDIpKyfml7YnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc0FycjAucHVzaChpdGVtLnRoaXMpO1xyXG4gICAgICAgICAgICAgIHNBcnIxLnB1c2goaXRlbS5sYXN0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHJkYXRhLmxpc3RMYXN0TGluay5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHJkYXRhLmxpc3RMYXN0TGluay5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgICBzQXJyMi5wdXNoKGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3B0aW9uLnNlcmllc1sxXS5kYXRhID0gc0FycjE7IC8v5Y675bm0XHJcbiAgICAgICAgICBvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyMDsgLy/ku4rlubRcclxuICAgICAgICAgIG9wdGlvbi5zZXJpZXNbMl0uZGF0YSA9IHNBcnIyOyAvL+S4iuaciFxyXG4gICAgICAgICAgb3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xyXG5cclxuICAgICAgICAgIGxldCBsaXN0ZGF0YSA9IHJkYXRhLnVsdGltYXRlbHlMaXN0LmNvbmNhdChbXSk7XHJcbiAgICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdGRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24ob3B0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5haXItc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1jZWxsIHtcclxuICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1maWVsZF9fcmlnaHQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICBzY2FsZTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIDo6di1kZWVwIC52YW4tZmllbGRfX2NvbnRyb2wge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHNjYWxlOiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmFjdG9yLXdyYXBwZXIge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICAgLmZhY3Rvci1pdGVtIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNnB4IDEzcHggNnB4IDEzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgd2lkdGg6IDIyJTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgbGVmdC1hcnJvdyBmaXhlZCBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImludG8tdGl0bGVfbGVmdFwiPnt7bGV2ZWx9fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57e3NpdGVOYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjcmlnaHQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1yaWdodFwiIEBjbGljaz1cInNpdGVQb3A9dHJ1ZVwiPjxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvY2hhbmdlLnBuZ1wiPuWIh+aNouermeeCuTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgPGRpdiByZWY9XCJzaXRlXCIgY2xhc3M9XCJjaGFuZ2Vfc2l0ZVwiIHYtc2hvdz1cInNpdGVQb3BcIj5cclxuICAgICAgPHA+56uZ54K55YiH5o2iPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tfY29udGVudFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gYm1MaXN0XCIgOmNsYXNzPVwiW2k9PT1zaXRlSW5kZXg/J2FjdGl2ZSc6JyddXCIgQGNsaWNrPVwiY2hhbmdlU2l0ZVRhYihpKVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+PHNwYW4+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDc1JTtcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiBzZWNvbmRMaXN0XCIgOmNsYXNzPVwiW2l0ZW0uaWQ9PT1zaXRlSWQ/J2FjdGl2ZSc6JyddXCJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlU2Vjb25kU2l0ZVRhYihpdGVtLGkpXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJjaGVjay1zaXRlLW5hbWVcIj57e2l0ZW0uc2l0ZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiBAY2xpY2s9XCJzaXRlUG9wPWZhbHNlXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtdGFiLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsndGl0bGUtdGFiLWl0ZW0nLHRpdGxlSW5kZXg9PT0wPyd0aXRsZS10YWItaXRlbS1hY3RpdmUnOicnXVwiIEBjbGljaz1cImNoYW5nZVRpdGxlKDApXCI+5rWT5bqmPC9kaXY+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ3RpdGxlLXRhYi1pdGVtJyx0aXRsZUluZGV4PT09MT8ndGl0bGUtdGFiLWl0ZW0tYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUaXRsZSgxKVwiPklBUUk8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0t56uZ54K55Z+65pys5L+h5oGvLS0+XHJcbiAgICAgIDxiYXNpY0luZm8gOnNpdGVJbmZvPVwic2l0ZUluZm9cIiA6c2l0ZUlkPVwic2l0ZUlkXCIgOnNpdGVOYW1lPVwic2l0ZU5hbWVcIiA6cXVlcnlGbGFnPVwidGl0bGVJbmRleFwiLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmcyB3YXJuaW5nLWJveFwiIEBjbGljaz1cInRvT3ZlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9haXItc2l0ZS13YXJuaW5nLnBuZ1wiIHdpZHRoPVwiMTRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogOHB4XCI+XHJcbiAgICAgICAgICDotoXmoIflkYroraZcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KVwiPuafpeeci+i2heagh+iusOW9lVxyXG4gICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvd1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXIgZnNcIj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gdGFiQXJyXCIgOmNsYXNzPVwiWyd0YWItaXRlbScsIGk9PT10YWJJbmRleD8nYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUYWIoaSlcIj57e2l0ZW19fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS3lm6DlrZDmj4/ov7AtLT5cclxuICAgICAgPGZhY3RvckRlcyB2LWlmPVwidGFiSW5kZXg9PTAgfHwgdGFiSW5kZXg9PTJcIiA6b2JqRGF0YT1cIm9iakRhdGFcIiBAY2hhbmdlRmFjdG9yPVwiY2hhbmdlRmFjdG9yXCIvPlxyXG4gICAgICA8IS0t5bCP5pe25pWw5o2uLS0+XHJcbiAgICAgIDxob3VyRGF0YSB2LWlmPVwidGFiSW5kZXg9PTAgfHwgdGFiSW5kZXg9PTJcIiA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiIDpzaXRlSWQ9XCJzaXRlSWRcIiA6ZmFjdG9yUHJvcHM9XCJmYWN0b3JOYW1lXCIgOnF1ZXJ5RmxhZz1cInRpdGxlSW5kZXhcIi8+XHJcbiAgICAgIDwhLS3kupTliIbpkp/mlbDmja4tLT5cclxuICAgICAgPGZpdmVNaW51dGVzRGF0YSB2LWlmPVwidGFiSW5kZXg9PTFcIiA6c2l0ZUlkPVwic2l0ZUlkXCIgOnRhYkluZGV4PVwidGFiSW5kZXhcIiA6cXVlcnlGbGFnPVwidGl0bGVJbmRleFwiLz5cclxuICAgICAgPCEtLeWQjOeOr+avlOafpeivoi0tPlxyXG4gICAgICA8eW95RGF0YSB2LWlmPVwidGFiSW5kZXg9PTNcIiA6c2l0ZUlkPVwic2l0ZUlkXCIgOnF1ZXJ5RmxhZz1cInRpdGxlSW5kZXhcIi8+XHJcblxyXG4gICAgICA8IS0t56uZ54K55rGh5p+T54mp5Y2g5q+ULS0+XHJcbiAgICAgIDxwb2xsdXRpb25Qcm8gOnNpdGVJZD1cInNpdGVJZFwiIDpxdWVyeUZsYWc9XCJ0aXRsZUluZGV4XCIvPlxyXG4gICAgICA8IS0t56uZ54K55rGh5p+T54mp5bm05bqm57uf6K6hLS0+XHJcbiAgICAgIDxwb2xsdXRpb25UcmVuZCA6c2l0ZUlkPVwic2l0ZUlkXCIvPlxyXG4gICAgICA8aW52b2x2ZUFpclBvbGx1dGlvbiA6c2l0ZUlkPVwic2l0ZUlkXCIgOnNpdGVJbmZvPVwic2l0ZUluZm9cIi8+XHJcbiAgICAgIDwhLS3pq5jnqbrop4bpopEtLT5cclxuPCEtLSAgICAgIDxoaWdoVmlkZW8gOnNpdGVJZD1cInNpdGVJZFwiLz4tLT5cclxuICAgICAgPCEtLeWcsOeQhuS9jee9ri0tPlxyXG4gICAgICA8Z2VvTG9jYXRpb24gOnNpdGVJbmZvPVwic2l0ZUluZm9cIiA6c2l0ZUlkPVwic2l0ZUlkXCIvPlxyXG5cclxuICAgICAgPHN1cnJvdW5kV2VhdGhlciA6c2l0ZUluZm89XCJzaXRlSW5mb1wiIDpzaXRlSWQ9XCJzaXRlSWRcIi8+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtnZXRBaXJTaXRlLCBhaXJRdWFsaXR5U2l0ZURhdGEsIGFpclF1YWxpdHlTaXRlRGF0YVR5cGV9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcclxuICBpbXBvcnQge2dldFRoaXNEYXRlfSBmcm9tICdAL3V0aWxzL3NldGRhdGUnO1xyXG4gIGltcG9ydCBiYXNpY0luZm8gZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2Jhc2ljSW5mb1wiO1xyXG4gIGltcG9ydCBmYWN0b3JEZXMgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlc1wiO1xyXG4gIGltcG9ydCBob3VyRGF0YSBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaG91ckRhdGFcIjtcclxuICBpbXBvcnQgZml2ZU1pbnV0ZXNEYXRhIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9maXZlTWludXRlc0RhdGFcIjtcclxuICBpbXBvcnQgeW95RGF0YSBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMveW95RGF0YVwiO1xyXG4gIGltcG9ydCBoaWdoVmlkZW8gZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2hpZ2hWaWRlb1wiO1xyXG4gIGltcG9ydCBnZW9Mb2NhdGlvbiBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZ2VvTG9jYXRpb25cIjtcclxuICBpbXBvcnQgcG9sbHV0aW9uUHJvIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm9cIjtcclxuICBpbXBvcnQgcG9sbHV0aW9uVHJlbmQgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvblRyZW5kXCI7XHJcbiAgaW1wb3J0IGludm9sdmVBaXJQb2xsdXRpb24gZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ludm9sdmVBaXJQb2xsdXRpb25cIjtcclxuICBpbXBvcnQgc3Vycm91bmRXZWF0aGVyIGZyb20gXCJAL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdXJyb3VuZFdlYXRoZXJcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBiYXNpY0luZm8sXHJcbiAgICAgIGZhY3RvckRlcyxcclxuICAgICAgaG91ckRhdGEsXHJcbiAgICAgIGZpdmVNaW51dGVzRGF0YSxcclxuICAgICAgeW95RGF0YSxcclxuICAgICAgaGlnaFZpZGVvLFxyXG4gICAgICBnZW9Mb2NhdGlvbixcclxuICAgICAgcG9sbHV0aW9uUHJvLFxyXG4gICAgICBwb2xsdXRpb25UcmVuZCxcclxuICAgICAgaW52b2x2ZUFpclBvbGx1dGlvbixcclxuICAgICAgc3Vycm91bmRXZWF0aGVyXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJBcnI6IFsn5bCP5pe25pWw5o2uJywgJ+S6lOWIhumSn+aVsOaNricsICfml6XmlbDmja4nLCAn5ZCM546v5q+U5p+l6K+iJ10sXHJcbiAgICAgICAgdGFiSW5kZXg6IDAsXHJcbiAgICAgICAgYm1MaXN0OiBbJ+WbveiAgycsICflhbbku5YnXSxcclxuICAgICAgICBkZXNjbGlzdDogW10sXHJcbiAgICAgICAgc2Vjb25kTGlzdDogW10sXHJcbiAgICAgICAgc2l0ZUluZGV4OiAwLFxyXG4gICAgICAgIHNpdGVTZWNvbmRJZDogMCxcclxuICAgICAgICBzaXRlUG9wOiBmYWxzZSxcclxuICAgICAgICB0b2RheTogZ2V0VGhpc0RhdGUoMSksXHJcbiAgICAgICAgc2l0ZUlkOiBcIlwiLFxyXG4gICAgICAgIGxldmVsOiBcIlwiLFxyXG4gICAgICAgIHNpdGVOYW1lOiBcIlwiLFxyXG4gICAgICAgIG9iakRhdGE6IHt9LFxyXG4gICAgICAgIHNpdGVMZXZlbDogXCJcIixcclxuICAgICAgICB4enFoOiAnJyxcclxuICAgICAgICBzaXRlSW5mbzoge1xyXG4gICAgICAgICAgaG91ckFxaTogMCxcclxuICAgICAgICAgIGhvdXJBcWlTdGF0ZTogMCxcclxuICAgICAgICAgIGRheUFxaVN0YXRlOiAwLFxyXG4gICAgICAgICAgZGF5QXFpOiAwLFxyXG4gICAgICAgICAgenhsOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGVJbmRleDogMCxcclxuICAgICAgICBmYWN0b3JOYW1lOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc2l0ZUlkKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBvbGQpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0U2l0ZSgpO1xyXG4gICAgICAgICAgdGhpcy5nZXRZWkRhdGEoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmdldFNpdGVMaXN0KCk7XHJcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcbiAgICAgIHRoaXMuc2l0ZUlkID0gdGhpcy4kcm91dGUucXVlcnkuc2l0ZUlkO1xyXG4gICAgICB0aGlzLnNpdGVOYW1lID0gdGhpcy4kcm91dGUucXVlcnkuc2l0ZU5hbWU7XHJcbiAgICAgIHRoaXMuc2l0ZUxldmVsID0gdGhpcy4kcm91dGUucXVlcnkuc2l0ZUxldmVsO1xyXG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5zaXRlTGV2ZWxbMF07XHJcbiAgICAgIHRoaXMuZ2V0U2l0ZSgpO1xyXG4gICAgICB0aGlzLmdldFlaRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAvL+afpeivouermeeCueS/oeaBr1xyXG4gICAgICBnZXRTaXRlKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgIGRpdmlzaW9uTmFtZTogdGhpcy54enFoLFxyXG4gICAgICAgICAgYXFpOiB0aGlzLnRpdGxlSW5kZXggPT09IDAgPyAnJyA6ICdpYXFpJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgYWlyUXVhbGl0eVNpdGVEYXRhKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc2l0ZUluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouermeeCuee7j+e6rOW6plxyXG4gICAgICAvKmdldFNpdGVMb2NhdGlvbigpIHtcclxuICAgICAgICBhaXJRdWFsaXR5U2l0ZURhdGEoe1xyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc2l0ZUluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LCovXHJcbiAgICAgIC8v5YiH5o2i56uZ54K55pe255qE5omA5pyJ56uZ54K5XHJcbiAgICAgIGdldFNpdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgIGRpdmlzaW9uTmFtZTogdGhpcy54enFoLFxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRBaXJTaXRlKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVzY2xpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kTGlzdCA9IHRoaXMuZGVzY2xpc3QuZ2s7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/lm6DlrZDmlbDmja5cclxuICAgICAgZ2V0WVpEYXRhKCkge1xyXG4gICAgICAgIGxldCBpbmZvMiA9IHtcclxuICAgICAgICAgIGRhdGFUeXBlOiB0aGlzLnRhYkluZGV4ICsgMSxcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIGFxaTogdGhpcy50aXRsZUluZGV4ID09PSAwID8gJycgOiAnaWFxaScsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFpclF1YWxpdHlTaXRlRGF0YVR5cGUoaW5mbzIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMub2JqRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVNpdGVUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNpdGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmKGluZGV4PT0wKXtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kTGlzdCA9IHRoaXMuZGVzY2xpc3QuZ2s7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZExpc3QgPSB0aGlzLmRlc2NsaXN0LnF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpdGVQb3A9dHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVQb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5bCP5pe25pWw5o2u44CB5LqU5YiG6ZKf5pWw5o2u562J5YiH5o2iXHJcbiAgICAgIGNoYW5nZVRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMCB8fCBpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICB0aGlzLmdldFlaRGF0YSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvL+ermeeCueWIh+aNoi3nq5nngrnpgInmi6lcclxuICAgICAgY2hhbmdlU2Vjb25kU2l0ZVRhYihyb3cpIHtcclxuICAgICAgICB0aGlzLnNpdGVJZCA9IHJvdy5pZDtcclxuICAgICAgICB0aGlzLnNpdGVOYW1lID0gcm93LnNpdGVOYW1lO1xyXG4gICAgICAgIHRoaXMuc2l0ZUxldmVsID0gcm93LmNvbnRyb2xMZXZlbDtcclxuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5zaXRlTGV2ZWxbMF07XHJcbiAgICAgICAgdGhpcy5zaXRlUG9wID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZUZhY3Rvcih2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgdGhpcy5mYWN0b3JOYW1lID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVRpdGxlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5nZXRTaXRlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRZWkRhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgLy/otoXmoIflkYroraZcclxuICAgICAgdG9PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdhaXJBbGFybScsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBzaXRlSWQ6IHRoaXMuc2l0ZUlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLnRpdGxlLXRhYi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG5cclxuICAgIC50aXRsZS10YWItaXRlbSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS10YWItaXRlbS1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlX3NpdGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDRweDtcclxuICAgIGhlaWdodDogY2FsYyg2MHZoIC0gMzBweCk7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgPiBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrX2NvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cclxuICAgICAgPiBkaXYge1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG5cclxuICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCAxOTYsIDE5NiwgMSk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDUpO1xyXG5cclxuICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9wb2xsdXRlci9jaGVja2VkLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hlY2stc2l0ZS1uYW1le1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgLnNlYXJjaC1pdGVtIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndhcm5pbmctYm94IHtcclxuICAgIG1hcmdpbjogMTRweCA4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjIpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC50YWItd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDBweCA1cHg7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNDksIDI0OSwgMjQ5LCAxKTtcclxuXHJcbiAgICAudGFiLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9wb2xsdXRpb24tdGFiLWJnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmludG8tdGl0bGVfbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9wb2xsdXRlci9haXJfdGlwcy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIC5pbnRvLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2NywgMjA3LCAxMjQsIDEpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgID4gaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgLmFpci1zaXRlLWJveC1pbmZvIHtcclxuICAgIG1hcmdpbjogNnB4IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgICAuYWlyLXNpdGUtdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggOHB4IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjNDQ3YmZjO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgcmVmPVwiYW5udWFsUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDI0MHB4O3dpZHRoOjk2JTttYXJnaW46IDBweCBhdXRvXCIvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcbiAgaW1wb3J0IHtcbiAgICBhaXJQb2xsdXRhbnRZZWFyLCBhaXJQb2xsdXRhbnRTaXRlWWVhclxuICB9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJhbm51YWxFY2hhcnRcIixcbiAgICBwcm9wczoge1xuICAgICAgemRpZDogU3RyaW5nLFxuICAgICAgeHpxaDogU3RyaW5nLFxuICAgICAgcXVlcnlGbGFnOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICB9XG4gICAgICB9LCAvL+a1k+W6piAwIC9JQVFJIDFcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICB6ZGlkOiB7XG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuYW5udWFsUmVmKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGltbWVkaWF0ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHF1ZXJ5RmxhZzoge1xuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmFubnVhbFJlZilcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICBpZiAoIXRoaXMuYW5udWFsUmVmKSB7XG4gICAgICAgIHRoaXMuYW5udWFsUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMuYW5udWFsUmVmKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5hbm51YWxSZWYpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgY29sb3I6IFsncmdiYSg2OCwgMTIzLCAyNTIsIDEpJywgJ3JnYmEoNjcsIDIyMywgMjQ3LCAxKSddLFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHRvcDogJzI4JScsXG4gICAgICAgICAgICBsZWZ0OiAnMTMlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMTAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzE1JScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIC8vIGRhdGE6IFsnMjAyMicsICcyMDIzJ10sXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGljb246ICdzcXVhcmUnLFxuICAgICAgICAgICAgaXRlbVdpZHRoOiA4LFxuICAgICAgICAgICAgaXRlbUhlaWdodDogOFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeEF4aXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgZGF0YTogWydQTTIuNScsICdQTTEwJywgJ08zJywgJ1NPMicsICdOTzInLCAnQ08nXSxcbiAgICAgICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4aXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgLy8gaW50ZXJ2YWw6IDEwMCxcbiAgICAgICAgICAgICAgbmFtZTogJ3VnL23CsyhDT+mZpOWkliknLFxuICAgICAgICAgICAgICBuYW1lVGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjQjBCN0MyJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICBuYW1lOiAnbWcvbcKzKENPKScsXG4gICAgICAgICAgICAgIG5hbWVUZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgLy8gaW50ZXJ2YWw6IDUsXG4gICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgYmFyV2lkdGg6IDEyLFxuICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICB5QXhpc0luZGV4OiAxLFxuICAgICAgICAgICAgICBiYXJXaWR0aDogMTIsXG4gICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZSA9IG51bGw7XG4gICAgICAgIGxldCBwYXJhbXMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy56ZGlkICE9IFwiXCIpIHtcbiAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBhaXJQb2xsdXRhbnRTaXRlWWVhcjtcbiAgICAgICAgICBwYXJhbXMgPSB7c2l0ZUlkOiB0aGlzLnpkaWR9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gYWlyUG9sbHV0YW50WWVhcjtcbiAgICAgICAgICBwYXJhbXMgPSB7ZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsIGFxaTogdGhpcy5xdWVyeUZsYWcgPT09IDAgPyAnJyA6ICdpYXFpJ31cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbk5hbWUocGFyYW1zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHNBcnIxID0gW10sIHNBcnIwID0gW107XG4gICAgICAgICAgbGV0IG5vdyA9IHJlcy5kYXRhWzBdO1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHJlcy5kYXRhWzFdOyAgLy/ljrvlubRcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5RmxhZyA9PT0gMCkge1xuICAgICAgICAgICAgICBzQXJyMCA9IFtsYXN0LnBtMjUsIGxhc3QucG0xMCwgbGFzdC5vem9uZSwgbGFzdC5zbzIsIGxhc3Qubm8yLCBsYXN0LmNvXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNBcnIwID0gW2xhc3QucG0yNUlhcWksIGxhc3QucG0xMElhcWksIGxhc3Qub3pvbmVJYXFpLCBsYXN0LnNvMklhcWksIGxhc3Qubm8ySWFxaSwgbGFzdC5jb0lhcWldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnNlcmllc1swXS5uYW1lID0gbGFzdC5tb25pdG9yaW5nVGltZTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IHNBcnIwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5xdWVyeUZsYWcgPT09IDApIHtcbiAgICAgICAgICAgIHNBcnIxID0gW25vdy5wbTI1LCBub3cucG0xMCwgbm93Lm96b25lLCBub3cuc28yLCBub3cubm8yLCBub3cuY29dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzQXJyMSA9IFtub3cucG0yNUlhcWksIG5vdy5wbTEwSWFxaSwgbm93Lm96b25lSWFxaSwgbm93LnNvMklhcWksIG5vdy5ubzIsIG5vdy5jb0lhcWldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb24uc2VyaWVzWzFdLm5hbWUgPSBub3cubW9uaXRvcmluZ1RpbWU7XG4gICAgICAgICAgb3B0aW9uLnNlcmllc1sxXS5kYXRhID0gc0FycjE7XG4gICAgICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24ob3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgcmVmPVwicHJvcG9ydGlvblJlZlwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDt3aWR0aDo5NiU7bWFyZ2luOiAxMHB4IGF1dG9cIi8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcclxuICBpbXBvcnQge1xyXG4gICAgYWlyUG9sbHV0YW50UmF0aW8sIGFpclBvbGx1dGFudFNpdGVSYXRpb1xyXG4gIH0gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHknO1xyXG5cclxuICBsZXQgY29sb3IgPSBbJyM1MTg2RkQnLCAnIzdFQTZGRicsICcjOUVCQkZEJywgJyNDM0Q0RkUnXTtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInByb3BvcnRpb25FY2hhcnRcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZhY3RvcjogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgc2l0ZUlkOiBTdHJpbmcsXHJcbiAgICAgIHh6cWg6IFN0cmluZyxcclxuICAgICAgcXVlcnlGbGFnOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIC8v5rWT5bqmIDAgL0lBUUkgMVxyXG4gICAgICB5ZWFyOiB7XHJcbiAgICAgICAgdHlwZTogW1N0cmluZyxOdW1iZXJdLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIC8v5rWT5bqmIDAgL0lBUUkgMVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7fVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wb3J0aW9uUmVmKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uUmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMucHJvcG9ydGlvblJlZik7XHJcbiAgICAgICAgLypzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMucHJvcG9ydGlvblJlZilcclxuICAgICAgICB9KSovXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgICAgY29sb3I6IFsnIzQxN0FGRCcsICcjN0FBMUY5JywgJyM4YmE4ZWYnLCAnIzlFQkJGRCcsICcjQzNENEZFJywgJyNjYWQ2ZjEnLCAnI2VlZjFmOScsXSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHRvcDogJzglJyxcclxuICAgICAgICAgICAgbGVmdDogJzEwJScsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlcjogJ2F4aXMnLFxyXG4gICAgICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdzaGFkb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJhbXNcclxuICAgICAgICAgICAgICByZXR1cm4gc3RyLm5hbWUgKyAnOicgKyBzdHIudmFsdWUgKyAn5aSpKCcgKyBzdHIucGVyY2VudCArICclKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFsnNTAlJywgJzUwJSddLFxyXG4gICAgICAgICAgICByYWRpdXM6IFsnMCUnLCAnNjAlJ10sXHJcbiAgICAgICAgICAgIGxhYmVsTGluZToge1xyXG4gICAgICAgICAgICAgIGxlbmd0aDogMTAsICAvLyDmlLnlj5jmoIfnpLrnur/nmoTplb/luqZcclxuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDM0Q1RkVcIiAgLy8g5pS55Y+Y5qCH56S657q/55qE6aKc6ImyXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsZW5ndGgyOiAxOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDE1LFxyXG4gICAgICAgICAgICAgIG1pbk1hcmdpbjogMTUsXHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne25hbWV8e2N95aSpfVxcbiB7dGltZXx7Yn0oe2R9JSl9JywvLyB7dGltZXwoe2R9JSl9XHJcbiAgICAgICAgICAgICAgcmljaDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQ0N0JGQycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzEyMTIzNjdGJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gZm9ybWF0dGVyOiAocGFyYW1zKT0+IHtcclxuICAgICAgICAgICAgICAvLyBcdC8vIHJldHVybiAne2NvbG9yJytwYXJhbXMuZGF0YUluZGV4Kyd8JytwYXJhbXMudmFsdWUgKyAn5aSpXFxufXtuYW1lfCcgKyBwYXJhbXMubmFtZSArICcgJyArIHBhcmFtcy5wZXJjZW50ICsgJyV9J1xyXG4gICAgICAgICAgICAgIC8vIFx0cmV0dXJuICc8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBwYXJhbXMuY29sb3IgKyAnXCI+JyArIHBhcmFtcy52YWx1ZSArICc8L3NwYW4+5aSpIDxicj4nICArIHBhcmFtcy5uYW1lICsgJyAnICsgcGFyYW1zLnBlcmNlbnQudG9GaXhlZCgyKSArICclJ1xyXG4gICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBlbXBoYXNpczoge1xyXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjogMTAsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dPZmZzZXRYOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICflpJbovrnmoYYnLFxyXG4gICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcclxuICAgICAgICAgICAgcmFkaXVzOiBbJzYwJScsICc2MCUnXSxcclxuICAgICAgICAgICAgbGFiZWxMaW5lOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNFMUVCRkYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMuZmFjdG9yLCAvL+mmluimgeaxoeafk+eJqS/otoXmoIfmsaHmn5PnialcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIHllYXI6IHRoaXMueWVhcixcclxuICAgICAgICAgIGFxaTogdGhpcy5xdWVyeUZsYWcgPT09IDAgPyAnJyA6ICdpYXFpJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l0ZUlkICE9ICcnKSB7XHJcbiAgICAgICAgICBmdW5jdGlvbk5hbWUgPSBhaXJQb2xsdXRhbnRTaXRlUmF0aW9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gYWlyUG9sbHV0YW50UmF0aW9cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb25OYW1lKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGxldCBzZXJpZXMgPSBbXTtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDAgJiYgcmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHNlcmllcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzZXJpZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBmYWN0b3I6IHtcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzaXRlSWQobnZhbCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5RmxhZzoge1xyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLnByb3BvcnRpb25SZWYpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHllYXI6IHtcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5wcm9wb3J0aW9uUmVmKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhaXJfbWFpblwiLFxuICAgICAgY2xhc3M6IF92bS5fZihcImdldE1vZHVsZUJnXCIpKF92bS5zaXRlSW5mby5ob3VyQXFpKSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWlyX2ZpcnN0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuabtOaWsOaXtumXtO+8mlwiICsgX3ZtLl9zKF92bS5zaXRlSW5mby50aW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFpci1jYWxlbmRlciBmc1wiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvQ2FsZW5kZXIoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIg56m65rCU6LSo6YeP5pel5Y6GIFwiKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWlyX21haW5fbGVmdFwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5fZihcImdldE1ham9yQmdcIikoX3ZtLnNpdGVJbmZvLmhvdXJBcWkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGlwc1wiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uX2YoXCJnZXRNaW5vckJnXCIpKF92bS5zaXRlSW5mby5ob3VyQXFpKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNpdGVJbmZvLmhvdXJBcWlTdGF0ZS5sZW5ndGggPiAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uc2l0ZUluZm8uaG91ckFxaVN0YXRlLnNsaWNlKDAsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc2l0ZUluZm8uaG91ckFxaVN0YXRlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uc2l0ZUluZm8uaG91ckFxaSkgKyBcIiBcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvIGZzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNTAlXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi5pel57Sv6K6hQVFJXCIpXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2l0ZUluZm8uZGF5QXFpIHx8IFwiLVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwJVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIuWFqOW5tOS8mOiJr+eOh1wiKV0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNpdGVJbmZvLmdvb2RSYXRpbyB8fCBcIi1cIikgKyBcIiVcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWlyX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiICog56m65rCU6LSo6YeP5pWw5o2u5pyq57uP5a6h5qC477yM5LuF5L6b5Y+C6ICDIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmc1wiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvR2VvTG9jYXRpb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIzcHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCLlnLDnkIbkvY3nva5cIiksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob3VyRGF0YVwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iakRhdGEuYXFpLCBcImFxaVwiKSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoXCJhcWlcIiwgXCJBUUlcIiwgXCJhcWlcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBzdHlsZTogX3ZtLmdldFNwYW5Db2xvcihfdm0ub2JqRGF0YS5hcWksIFwiYXFpXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiQVFJXCIpXSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqRGF0YS5hcWkpKV0pLFxuICAgICAgXVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKF92bS5vYmpEYXRhLnBtMjUsIFwicG0yNVwiKSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoXCJwbTI1XCIsIFwiUE0yNVwiLCBcInBtMjVJYXFpXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0eWxlOiBfdm0uZ2V0U3BhbkNvbG9yKF92bS5vYmpEYXRhLnBtMjUsIFwicG0yNVwiKSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQTTIuNVwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidWcvbcKzXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iakRhdGEucG0yNSkpXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iakRhdGEucG0xMCwgXCJwbTEwXCIpLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihcInBtMTBcIiwgXCJQTTEwXCIsIFwicG0xMElhcWlcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3R5bGU6IF92bS5nZXRTcGFuQ29sb3IoX3ZtLm9iakRhdGEucG0xMCwgXCJwbTEwXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlBNMTBcIildKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmpEYXRhLnBtMTApKV0pLFxuICAgICAgXVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKF92bS5vYmpEYXRhLnNvMiwgXCJzbzJcIiksXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKFwic28yXCIsIFwiU08yXCIsIFwic28ySWFxaVwiKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdHlsZTogX3ZtLmdldFNwYW5Db2xvcihfdm0ub2JqRGF0YS5zbzIsIFwic28yXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNPMlwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidWcvbcKzXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iakRhdGEuc28yKSldKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0ub2JqRGF0YS5ubzIsIFwibm8yXCIpLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihcIm5vMlwiLCBcIk5PMlwiLCBcIm5vMklhcWlcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3R5bGU6IF92bS5nZXRTcGFuQ29sb3IoX3ZtLm9iakRhdGEubm8yLCBcIm5vMlwiKSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOTzJcIildKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmpEYXRhLm5vMikpXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLm9iakRhdGEuY28sIFwiY29cIiksXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKFwiY29cIiwgXCJDT1wiLCBcImNvSWFxaVwiKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdHlsZTogX3ZtLmdldFNwYW5Db2xvcihfdm0ub2JqRGF0YS5jbywgXCJjb1wiKSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDT1wiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwibWcvbcKzXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iakRhdGEuY28pKV0pLFxuICAgICAgXVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZTogX3ZtLmdldENvbG9yKF92bS5vYmpEYXRhLm96b25lLCBcIm96b25lXCIpLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihcIm96b25lXCIsIFwiT1pPTkVcIiwgXCJvem9uZUlhcWlcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3R5bGU6IF92bS5nZXRTcGFuQ29sb3IoX3ZtLm9iakRhdGEub3pvbmUsIFwib3pvbmVcIikgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTzNcIildKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmpEYXRhLm96b25lKSldKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFpci1zZWFyY2hcIiwgYXR0cnM6IHsgZ3V0dGVyOiAxMCB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmFuLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiBcIjhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVuZFRpbWUsXG4gICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwicmlnaHQtaWNvblwiOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZW5kUG9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZhY3Rvci13cmFwcGVyXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5mYWN0b3JEYXRhLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhY3Rvci1pdGVtXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBbaSA9PT0gX3ZtLmZhY3RvclRhYkluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCJdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZUZhY3RvclRhYihpdGVtLCBpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS50ZXh0KSArIFwiIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmVuZFBvcCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5lbmRQb3AgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImVuZFBvcFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1kYXRldGltZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJkYXRlXCIsIHRpdGxlOiBcIumAieaLqeW5tOaciFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRW5kVGltZSxcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50RGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50RGF0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgcmVmOiBcIm1pbnV0ZXNSZWZcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI5NiVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcInRhYmxlRGF0YVwiLCB7IGF0dHJzOiB7IGxpc3REYXRhOiBfdm0ubGlzdERhdGEgfSB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS1ib3gtaW5mb1wiLCBvbjogeyBjbGljazogX3ZtLnRvRGV0YWlsIH0gfSxcbiAgICBbX3ZtLl9tKDApXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbX3ZtLl92KFwi5LiA56uZ5LiA562WXCIpXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjVweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCIg5p+l55yLIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBweFwiLCBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIikgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYWlyLXNpdGUtYm94LWluZm9cIiwgb246IHsgY2xpY2s6IF92bS50b0RldGFpbCB9IH0sXG4gICAgW192bS5fbSgwKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWlyLXNpdGUtdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibGFja19jb250ZW50XCIgfSwgW192bS5fdihcIumrmOepuuinhumikeaVsOaNrlwiKV0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjI1cHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl92KFwiIOafpeeciyBcIiksXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiwgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9yaWdodEljb24ucG5nXCIpIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGVfY29tcGFyZVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYXJlX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuermeeCueWvueavlO+8mlwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnNob3dTaXRlUG9wIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5re75Yqg5a+55q+U56uZ54K5XCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbXBhcmVfc3RhdGlvblwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5jaGVja0Fyck5hbWUsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwieWVsbG93X2JvcmRlclwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImJvcmRlci1sZWZ0OiAycHggc29saWRcIiArIF92bS5jb2xvcnNBcnJbaW5kZXggKyAxXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNpdGVOYW1lKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9jbG9zZS5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIHJlZjogXCJob3VyUmVmXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI0NSVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93UGlja2VyID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wdXAgdnNlbGVjdHBvcFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcHVwX3RpdGxlXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibC1jYW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjc2JVwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFjaENoZWNrZXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYWNoQ2hlY2tlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYWNoQ2hlY2tlclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInItY29uZmlybSB0eHRibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25Db25maXJtSmNyIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIiDnoa7orqRcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcHVwX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZhbi1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tBcnIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja0FyciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja0FyclwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY2VsbC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2Vjb25kTGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2YW4tY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJqY3l6XCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2xpY2thYmxlOiBcIlwiLCB0aXRsZTogXCJcIiArIGl0ZW0ucmVOYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS10aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2l0ZU5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tdGFnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5jb250cm9sTGV2ZWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyaWdodC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNoZWNrYm94ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9Qb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0ucHJvUG9wID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9Qb3BcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIuaVsOaNruexu+Wei1wiLFxuICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICBjb2x1bW5zOiBfdm0ucHJvQXJyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1Qcm8sXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5wcm9Qb3AgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwidGFibGVEYXRhXCIsIHsgYXR0cnM6IHsgbGlzdERhdGE6IF92bS5saXN0RGF0YSB9IH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLm51bSA+IDBcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFpci1zaXRlLWJveC1pbmZvXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9EZXRhaWwgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIua2ieawlOaxoeafk+a6kFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLm51bSkgKyBcIuWutilcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIixcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIixcbiAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjVweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl92KFwiIOafpeeciyBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBweFwiLCBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIgfSxcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9yaWdodEljb24ucG5nXCIpIH0sXG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFpci1zaXRlLWJveC1pbmZvXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFpci1zaXRlLXRpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibGFja19jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuermeeCueaxoeafk+eJqeWNoOavlFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCJhdXRvXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtY29udGVudFwiLCBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlYXJjaC1pdGVtIGZzXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjNweCA2cHhcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9Qb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS50aW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYi13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzczogX3ZtLmluZGV4ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkRGF0YSgxKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLpppbopoHmsaHmn5PnialcIildXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uaW5kZXggPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWREYXRhKDIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIui2heagh+axoeafk+eJqVwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJwcm9wb3J0aW9uLWVjaGFydFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgeHpxaDogXCJcIixcbiAgICAgICAgICBmYWN0b3I6IF92bS5mYWN0b3IyLFxuICAgICAgICAgIHNpdGVJZDogX3ZtLnNpdGVJZCxcbiAgICAgICAgICB5ZWFyOiBfdm0udGltZSxcbiAgICAgICAgICBxdWVyeUZsYWc6IF92bS5xdWVyeUZsYWcsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiYWlyRmlsdGVyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaXNTaG93OiBfdm0ucHJvUG9wLCB0eXBlOiBcInllYXJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGdldFR5cGU6IF92bS5nZXRUeXBlLFxuICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ucHJvUG9wID0gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFpci1zaXRlLWJveC1pbmZvXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCItMTBweCBhdXRvIDBweFwiIH0gfSxcbiAgICAgIFtfYyhcImFubnVhbC1lY2hhcnRcIiwgeyBhdHRyczogeyB4enFoOiBcIuaXoFwiLCB6ZGlkOiBfdm0uc2l0ZUlkIH0gfSldLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIuermeeCueaxoeafk+eJqeW5tOW6pue7n+iuoVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS1ib3gtaW5mb1wiLCBvbjogeyBjbGljazogX3ZtLnRvRGV0YWlsIH0gfSxcbiAgICBbX3ZtLl9tKDApXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXItc2l0ZS10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbX3ZtLl92KFwi5ZGo6L655rCU6LGh56uZ54K5XCIpXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjVweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCIg5p+l55yLIFwiKSxcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBweFwiLCBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIikgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFpci1zaXRlLWJveC1pbmZvXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWlyLXNpdGUtdGl0bGVcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibGFja19jb250ZW50XCIgfSwgW192bS5fdihcIuaVsOaNruivpuaDhVwiKV0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1bmZvbGRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnVuZm9sZCA9ICFfdm0udW5mb2xkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWxleW8gFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF9jKFxuICAgICAgXCJ0YWJsZVwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS51bmZvbGQgPT09IHRydWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInVuZm9sZD09PXRydWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZS13cmFwcGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0RGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnJhdGlvIHx8IGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS52YWx1ZSkpXSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pe25Yi7XCIpXSksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuebkea1i+WAvFwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWlyLXNlYXJjaFwiLCBhdHRyczogeyBndXR0ZXI6IDEwIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiN1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGFUeXBlLFxuICAgICAgICAgICAgICAgICAgXCJyaWdodC1pY29uXCI6IFwiYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnR5cGVQb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiOFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgXCJyaWdodC1pY29uXCI6IFwiYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5lbmRQb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmFjdG9yLXdyYXBwZXJcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmZhY3RvckRhdGEsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFjdG9yLWl0ZW1cIixcbiAgICAgICAgICAgICAgY2xhc3M6IFtpID09PSBfdm0uZmFjdG9yVGFiSW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIl0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlRmFjdG9yVGFiKGl0ZW0sIGkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnRleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICByZWY6IFwieW95UmVmXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiOTYlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXdyYXBwZXJcIiwgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0RGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGhpcykpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5sYXN0KSldKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcImFpckZpbHRlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlzU2hvdzogX3ZtLnR5cGVQb3AsIHR5cGU6IFwiYWlyXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBnZXRUeXBlOiBfdm0uZ2V0VHlwZSxcbiAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnR5cGVQb3AgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5lbmRQb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZW5kUG9wID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbmRQb3BcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tZGF0ZXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCB0aXRsZTogXCLpgInmi6nlubTmnIhcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybUVuZFRpbWUsXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zdGFydFBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50RGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50RGF0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbX3ZtLl92KFwi5pWw5o2u6K+m5oOFXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pe25Yi7XCIpXSksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuebkea1i+WAvFwiKV0pLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlkIzmnJ/lgLxcIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmFuLW5hdi1iYXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibGVmdC1hcnJvd1wiOiBcIlwiLCBmaXhlZDogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImludG8tcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNpdGVQb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2NoYW5nZS5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWIh+aNouermeeCuVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW50by10aXRsZV9sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sZXZlbCkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVOYW1lKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaXRlUG9wLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNpdGVQb3BcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWY6IFwic2l0ZVwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoYW5nZV9zaXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuermeeCueWIh+aNolwiKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hlY2tfY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmJtTGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogW2kgPT09IF92bS5zaXRlSW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlU2l0ZVRhYihpKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NSVcIiB9IH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uc2Vjb25kTGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogW2l0ZW0uaWQgPT09IF92bS5zaXRlSWQgPyBcImFjdGl2ZVwiIDogXCJcIl0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlU2Vjb25kU2l0ZVRhYihpdGVtLCBpKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWNrLXNpdGUtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uc2l0ZU5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5zaXRlUG9wID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtdGFiLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcInRpdGxlLXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBfdm0udGl0bGVJbmRleCA9PT0gMCA/IFwidGl0bGUtdGFiLWl0ZW0tYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGl0bGUoMClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIua1k+W6plwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcInRpdGxlLXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBfdm0udGl0bGVJbmRleCA9PT0gMSA/IFwidGl0bGUtdGFiLWl0ZW0tYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGl0bGUoMSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIklBUUlcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYmFzaWNJbmZvXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNpdGVJbmZvOiBfdm0uc2l0ZUluZm8sXG4gICAgICAgICAgICAgIHNpdGVJZDogX3ZtLnNpdGVJZCxcbiAgICAgICAgICAgICAgc2l0ZU5hbWU6IF92bS5zaXRlTmFtZSxcbiAgICAgICAgICAgICAgcXVlcnlGbGFnOiBfdm0udGl0bGVJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmcyB3YXJuaW5nLWJveFwiLCBvbjogeyBjbGljazogX3ZtLnRvT3ZlciB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmn6XnnIvotoXmoIforrDlvZUgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiYXJyb3dcIiB9IH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItd3JhcHBlciBmc1wiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYkFyciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcInRhYi1pdGVtXCIsIGkgPT09IF92bS50YWJJbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoaSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtKSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0udGFiSW5kZXggPT0gMCB8fCBfdm0udGFiSW5kZXggPT0gMlxuICAgICAgICAgICAgPyBfYyhcImZhY3RvckRlc1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgb2JqRGF0YTogX3ZtLm9iakRhdGEgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2VGYWN0b3I6IF92bS5jaGFuZ2VGYWN0b3IgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnRhYkluZGV4ID09IDAgfHwgX3ZtLnRhYkluZGV4ID09IDJcbiAgICAgICAgICAgID8gX2MoXCJob3VyRGF0YVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiBfdm0udGFiSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzaXRlSWQ6IF92bS5zaXRlSWQsXG4gICAgICAgICAgICAgICAgICBmYWN0b3JQcm9wczogX3ZtLmZhY3Rvck5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeUZsYWc6IF92bS50aXRsZUluZGV4LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS50YWJJbmRleCA9PSAxXG4gICAgICAgICAgICA/IF9jKFwiZml2ZU1pbnV0ZXNEYXRhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l0ZUlkOiBfdm0uc2l0ZUlkLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IF92bS50YWJJbmRleCxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5RmxhZzogX3ZtLnRpdGxlSW5kZXgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnRhYkluZGV4ID09IDNcbiAgICAgICAgICAgID8gX2MoXCJ5b3lEYXRhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzaXRlSWQ6IF92bS5zaXRlSWQsIHF1ZXJ5RmxhZzogX3ZtLnRpdGxlSW5kZXggfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXCJwb2xsdXRpb25Qcm9cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZUlkOiBfdm0uc2l0ZUlkLCBxdWVyeUZsYWc6IF92bS50aXRsZUluZGV4IH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJwb2xsdXRpb25UcmVuZFwiLCB7IGF0dHJzOiB7IHNpdGVJZDogX3ZtLnNpdGVJZCB9IH0pLFxuICAgICAgICAgIF9jKFwiaW52b2x2ZUFpclBvbGx1dGlvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXRlSWQ6IF92bS5zaXRlSWQsIHNpdGVJbmZvOiBfdm0uc2l0ZUluZm8gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImdlb0xvY2F0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVJbmZvOiBfdm0uc2l0ZUluZm8sIHNpdGVJZDogX3ZtLnNpdGVJZCB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwic3Vycm91bmRXZWF0aGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVJbmZvOiBfdm0uc2l0ZUluZm8sIHNpdGVJZDogX3ZtLnNpdGVJZCB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI1NSwgMTQxLCAyNiwgMSlcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjhweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvYWlyLXNpdGUtd2FybmluZy5wbmdcIiksIHdpZHRoOiBcIjE0XCIgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiDotoXmoIflkYroraYgXCIpLFxuICAgICAgXVxuICAgIClcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgIHJlZjogXCJhbm51YWxSZWZcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIyNDBweFwiLCB3aWR0aDogXCI5NiVcIiwgbWFyZ2luOiBcIjBweCBhdXRvXCIgfSxcbiAgICB9KSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwge1xuICAgICAgcmVmOiBcInByb3BvcnRpb25SZWZcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI5NiVcIiwgbWFyZ2luOiBcIjEwcHggYXV0b1wiIH0sXG4gICAgfSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2Fpcl95ZWxsb3dfYmcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2Fpcl9ncmVlbl9iZy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvYWlyX29yYW5nZV9iZy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvYWlyX3llbGxvdy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvYWlyX2dyZWVuLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9haXJfb3JhbmdlLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWlyX3llbGxvd19iZ1tkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjUwLCAxMjcsIDUsIDAuNSkgMCUsIHJnYmEoMjM3LCAyNTIsIDI1MSwgMCkgMTAwJSk7Ki9cXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1MCwgMTI3LCA1LCAwLjA1KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG4uYWlyX2dyZWVuX2JnW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTAsIDEyNywgNSwgMC41KSAwJSwgcmdiYSgyMzcsIDI1MiwgMjUxLCAwKSAxMDAlKTsqL1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAxMjcsIDUsIDAuMDUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcbi5haXJfb3JhbmdlX2JnW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTAsIDEyNywgNSwgMC41KSAwJSwgcmdiYSgyMzcsIDI1MiwgMjUxLCAwKSAxMDAlKTsqL1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAxMjcsIDUsIDAuMDUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcbi5haXJfbWFpbltkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIC8qZGlzcGxheTogZmxleDsqL1xcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXFxuICBtYXJnaW46IDZweDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl9sZWZ0W2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl9sZWZ0IC50aXBzW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgcGFkZGluZzogM3B4IDJweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl9sZWZ0IC5haXJfeWVsbG93W2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgY29sb3I6ICNmZmJmMDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG4uYWlyX21haW4gLmFpcl9tYWluX2xlZnQgLmFpcl9ncmVlbltkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIGNvbG9yOiAjMDRjNzA0O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl9sZWZ0IC5haXJfb3JhbmdlW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgY29sb3I6ICNmZjdlMDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG4uYWlyX21haW4gLmFpcl9tYWluX2xlZnQgLmRhdGVbZGF0YS12LWMzZmQ0YjU0XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl95ZWxsb3dbZGF0YS12LWMzZmQ0YjU0XSB7XFxuICBjb2xvcjogI2ZmYmYwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTEsIDAsIDAuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTkxLCAwLCAwLjUpO1xcbn1cXG4uYWlyX21haW4gLmFpcl9tYWluX2dyZWVuW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgY29sb3I6ICMwNGM3MDQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDE5OSwgNCwgMC4xKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgMTk5LCA0LCAwLjUpO1xcbn1cXG4uYWlyX21haW4gLmFpcl9tYWluX29yYW5nZVtkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIGNvbG9yOiAjZmY3ZTAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNiwgMCwgMC4xKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxMjYsIDAsIDAuNSk7XFxufVxcbi5haXJfbWFpbiAuYWlyX2ZpcnN0W2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uYWlyX21haW4gLmFpci1jYWxlbmRlcltkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzUyNzFmZjtcXG59XFxuLmFpcl9tYWluIC5haXJfbWFpbl9yaWdodFtkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxNXB4O1xcbn1cXG4uYWlyX21haW4gLmFpcl9tYWluX3JpZ2h0IC5tYWluX3JpZ2h0W2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5haXJfbWFpbiAuYWlyX2JvdHRvbVtkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbi5haXJfbWFpbiAuYWlyX2JvdHRvbSA+IGRpdltkYXRhLXYtYzNmZDRiNTRdIHtcXG4gIGNvbG9yOiAjM2Y3YmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5zaXRlLWluZm9bZGF0YS12LWMzZmQ0YjU0XSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNpdGUtaW5mbyAubnVtW2RhdGEtdi1jM2ZkNGI1NF0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG91ckRhdGFbZGF0YS12LTZmZWQ1NTFkXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyouaG91cl93aGl0ZV9iZyB7XFxuICAgICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjMpOyohXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpO1xcblxcbiAgICA+c3BhbiB7XFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLmhvdXJfZ3JlZW5fYmcge1xcbiAgICAhKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgMTk5LCA0LCAwLjMpOyohXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNCwgMTk5LCA0LCAwLjA1KTtcXG5cXG4gICAgPnNwYW4ge1xcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBjb2xvcjogcmdiYSg0LCAxOTksIDQsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmhvdXJfeWVsbG93X2JnIHtcXG4gICAgISpib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjE3LCAwLCAwLjMpOyohXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDE5MSwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XFxuXFxuICAgID5zcGFuIHtcXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxOTEsIDAsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLmhvdXJfb3JhbmdlX2JnIHtcXG4gICAgISpib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTI2LCAwLCAwLjMpOyohXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XFxuXFxuICAgID5zcGFuIHtcXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxMjYsIDAsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLmhvdXJfcmVkX2JnIHtcXG4gICAgISpib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC4zKTsqIVxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjU1LCAwLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTtcXG5cXG4gICAgPnNwYW4ge1xcbiAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmhvdXJfZGVlcHJlZF9iZyB7XFxuICAgICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTMsIDAsIDc2LCAwLjMpOyohXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpO1xcblxcbiAgICA+c3BhbiB7XFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MywgMCwgNzYsIDEpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSovXFxufVxcbi5ob3VyRGF0YSA+IGRpdltkYXRhLXYtNmZlZDU1MWRdIHtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5ob3VyRGF0YSA+IGRpdiA+IHNwYW5bZGF0YS12LTZmZWQ1NTFkXSB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmhvdXJEYXRhID4gZGl2ID4gc3BhbltkYXRhLXYtNmZlZDU1MWRdOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XFxufVxcbi5ob3VyRGF0YSA+IGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQgPiBzcGFuW2RhdGEtdi02ZmVkNTUxZF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ob3VyRGF0YSA+IGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQgPiBzcGFuW2RhdGEtdi02ZmVkNTUxZF06Zmlyc3QtY2hpbGQge1xcbiAgLypjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7Ki9cXG4gIG1hcmdpbjogMnB4IDBweDtcXG59XFxuLmhvdXJEYXRhID4gZGl2ID4gc3BhbltkYXRhLXYtNmZlZDU1MWRdOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uaG91ckRhdGEgPiBkaXZbZGF0YS12LTZmZWQ1NTFkXTpmaXJzdC1jaGlsZCwgLmhvdXJEYXRhID4gZGl2W2RhdGEtdi02ZmVkNTUxZF06bnRoLWNoaWxkKDIpLCAuaG91ckRhdGEgPiBkaXZbZGF0YS12LTZmZWQ1NTFkXTpudGgtY2hpbGQoMyksIC5ob3VyRGF0YSA+IGRpdltkYXRhLXYtNmZlZDU1MWRdOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMjMuNSU7XFxufVxcbi5ob3VyRGF0YSA+IGRpdltkYXRhLXYtNmZlZDU1MWRdOm50aC1jaGlsZCg0KSwgLmhvdXJEYXRhID4gZGl2W2RhdGEtdi02ZmVkNTUxZF06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5ob3VyRGF0YSA+IGRpdltkYXRhLXYtNmZlZDU1MWRdOm50aC1jaGlsZCg1KSwgLmhvdXJEYXRhID4gZGl2W2RhdGEtdi02ZmVkNTUxZF06bnRoLWNoaWxkKDYpLCAuaG91ckRhdGEgPiBkaXZbZGF0YS12LTZmZWQ1NTFkXTpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAzMiU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFpci1zZWFyY2hbZGF0YS12LWVjN2MwNzFlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xcbn1cXG4uYWlyLXNlYXJjaFtkYXRhLXYtZWM3YzA3MWVdICAudmFuLWNlbGwge1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxufVxcbi5haXItc2VhcmNoW2RhdGEtdi1lYzdjMDcxZV0gIC52YW4tZmllbGRfX3JpZ2h0LWljb24ge1xcbiAgY29sb3I6ICNDNEM0QzQ7XFxuICBzY2FsZTogMC43O1xcbn1cXG4uYWlyLXNlYXJjaFtkYXRhLXYtZWM3YzA3MWVdICAudmFuLWZpZWxkX19jb250cm9sIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBzY2FsZTogMC45O1xcbn1cXG4uZmFjdG9yLXdyYXBwZXJbZGF0YS12LWVjN2MwNzFlXSB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLmZhY3Rvci1pdGVtW2RhdGEtdi1lYzdjMDcxZV0ge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2cHggMTNweCA2cHggMTNweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDIyJTtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5pdGVtW2RhdGEtdi1lYzdjMDcxZV06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5mYWN0b3Itd3JhcHBlciAuYWN0aXZlW2RhdGEtdi1lYzdjMDcxZV0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzQ0N2JmYztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoLWNvbnRlbnRbZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uc2VhcmNoLWNvbnRlbnQgLnNlYXJjaC1pdGVtW2RhdGEtdi0wYjM0ZDM0NF0ge1xcbiAgd2lkdGg6IDMzJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5zaXRlX2NvbXBhcmVbZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcbi5zaXRlX2NvbXBhcmUgLmNvbXBhcmVfdGl0bGVbZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uc2l0ZV9jb21wYXJlIC5jb21wYXJlX3RpdGxlID4gc3BhbltkYXRhLXYtMGIzNGQzNDRdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjA1KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweCAxM3B4IDNweCAxM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uc2l0ZV9jb21wYXJlIC5jb21wYXJlX3N0YXRpb25bZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbn1cXG4uc2l0ZV9jb21wYXJlIC5jb21wYXJlX3N0YXRpb24gPiBkaXZbZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNSk7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2l0ZV9jb21wYXJlIC5jb21wYXJlX3N0YXRpb24gPiBkaXYgPiBzcGFuW2RhdGEtdi0wYjM0ZDM0NF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTcuMzhweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG59XFxuLnNpdGVfY29tcGFyZSAuY29tcGFyZV9zdGF0aW9uID4gZGl2ID4gaW1nW2RhdGEtdi0wYjM0ZDM0NF0ge1xcbiAgbWFyZ2luLXRvcDogLTE4cHg7XFxufVxcbi5zaXRlX2NvbXBhcmUgLmNvbXBhcmVfc3RhdGlvbiAueWVsbG93X2JvcmRlcltkYXRhLXYtMGIzNGQzNDRdIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmOGQxYTtcXG59XFxuLnNpdGVfY29tcGFyZSAuY29tcGFyZV9zdGF0aW9uIC5ncmVlbl9ib3JkZXJbZGF0YS12LTBiMzRkMzQ0XSB7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMGJhYWQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm51bWJlcltkYXRhLXYtODEyNDk1OTJdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICNmZjhkMWE7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaC1jb250ZW50W2RhdGEtdi05OTk0Mzg4ZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtOTk5NDM4OGVdIHtcXG4gIHdpZHRoOiAzMyU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnRhYi13cmFwcGVyW2RhdGEtdi05OTk0Mzg4ZV0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YWItd3JhcHBlciA+IHNwYW5bZGF0YS12LTk5OTQzODhlXSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmN2ZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmRhZmM7XFxufVxcbi50YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi05OTk0Mzg4ZV0ge1xcbiAgYmFja2dyb3VuZDogIzUyNzFmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51bmZvbGRbZGF0YS12LTM1MTY2MjFjXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5haXItc2VhcmNoW2RhdGEtdi00Y2IwNGFjN10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTRweDtcXG59XFxuLmFpci1zZWFyY2hbZGF0YS12LTRjYjA0YWM3XSAgLnZhbi1jZWxsIHtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbn1cXG4uYWlyLXNlYXJjaFtkYXRhLXYtNGNiMDRhYzddICAudmFuLWZpZWxkX19yaWdodC1pY29uIHtcXG4gIGNvbG9yOiAjQzRDNEM0O1xcbiAgc2NhbGU6IDAuNztcXG59XFxuLmFpci1zZWFyY2hbZGF0YS12LTRjYjA0YWM3XSAgLnZhbi1maWVsZF9fY29udHJvbCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgc2NhbGU6IDAuOTtcXG59XFxuLmZhY3Rvci13cmFwcGVyW2RhdGEtdi00Y2IwNGFjN10ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG59XFxuLmZhY3Rvci13cmFwcGVyIC5mYWN0b3ItaXRlbVtkYXRhLXYtNGNiMDRhYzddIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNnB4IDEzcHggNnB4IDEzcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyMiU7XFxufVxcbi5mYWN0b3Itd3JhcHBlciAuaXRlbVtkYXRhLXYtNGNiMDRhYzddOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uZmFjdG9yLXdyYXBwZXIgLmFjdGl2ZVtkYXRhLXYtNGNiMDRhYzddIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICM0NDdiZmM7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2NoZWNrZWQucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2Fpcl90aXBzLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGUtdGFiLXdyYXBwZXJbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuLnRpdGxlLXRhYi13cmFwcGVyIC50aXRsZS10YWItaXRlbVtkYXRhLXYtOWZkMDk2NjJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udGl0bGUtdGFiLXdyYXBwZXIgLnRpdGxlLXRhYi1pdGVtLWFjdGl2ZVtkYXRhLXYtOWZkMDk2NjJdIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2hhbmdlX3NpdGVbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAtMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0MHB4O1xcbiAgcmlnaHQ6IDRweDtcXG4gIGhlaWdodDogY2FsYyg2MHZoIC0gMzBweCk7XFxuICB3aWR0aDogNzglO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDk7XFxufVxcbi5jaGFuZ2Vfc2l0ZSA+IHBbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiAwcHggNXB4IDBweCAxMHB4O1xcbn1cXG4uY2hhbmdlX3NpdGUgLmNoZWNrX2NvbnRlbnRbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG59XFxuLmNoYW5nZV9zaXRlIC5jaGVja19jb250ZW50ID4gZGl2W2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmNoYW5nZV9zaXRlIC5jaGVja19jb250ZW50ID4gZGl2ID4gZGl2W2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG4uY2hhbmdlX3NpdGUgLmNoZWNrX2NvbnRlbnQgPiBkaXYgPiBkaXYgPiBzcGFuW2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmNoYW5nZV9zaXRlIC5jaGVja19jb250ZW50ID4gZGl2ID4gZGl2ID4gc3BhbltkYXRhLXYtOWZkMDk2NjJdOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNoYW5nZV9zaXRlIC5jaGVja19jb250ZW50ID4gZGl2IC5hY3RpdmVbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNSk7XFxufVxcbi5jaGFuZ2Vfc2l0ZSAuY2hlY2tfY29udGVudCA+IGRpdiAuYWN0aXZlID4gc3BhbltkYXRhLXYtOWZkMDk2NjJdOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0N2JmYztcXG59XFxuLmNoYW5nZV9zaXRlIC5jaGVja19jb250ZW50IC5jaGVjay1zaXRlLW5hbWVbZGF0YS12LTlmZDA5NjYyXSB7XFxuICB3aWR0aDogODUlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNlYXJjaC1jb250ZW50W2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtOWZkMDk2NjJdIHtcXG4gIHdpZHRoOiAzMyU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ud2FybmluZy1ib3hbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBtYXJnaW46IDE0cHggOHB4O1xcbiAgcGFkZGluZzogNnB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4wNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4yKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnRhYi13cmFwcGVyW2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMTRweCAwcHggNXB4O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmOWY5Zjk7XFxufVxcbi50YWItd3JhcHBlciAudGFiLWl0ZW1bZGF0YS12LTlmZDA5NjYyXSB7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTlmZDA5NjYyXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xcbn1cXG4uaW50by10aXRsZV9sZWZ0W2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcbi5pbnRvLXJpZ2h0W2RhdGEtdi05ZmQwOTY2Ml0ge1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjNDNjZjdjO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uaW50by1yaWdodCA+IGltZ1tkYXRhLXYtOWZkMDk2NjJdIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWlyLXNpdGUtYm94LWluZm8ge1xcbiAgbWFyZ2luOiA2cHggMTBweCAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuLmFpci1zaXRlLWJveC1pbmZvIC5haXItc2l0ZS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCB3aGl0ZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzNmZDRiNTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJlMzVkZWJhNFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jM2ZkNGI1NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jM2ZkNGI1NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mYWN0b3JEZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmZlZDU1MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwYzIxMjNkNVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZmVkNTUxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZmVkNTUxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maXZlTWludXRlc0RhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWM3YzA3MWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzZjZhMWIxYVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpdmVNaW51dGVzRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYzdjMDcxZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpdmVNaW51dGVzRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYzdjMDcxZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjM0ZDM0NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImRjN2ExNDEyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGIzNGQzNDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3VyRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjM0ZDM0NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxMjQ5NTkyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZTBiM2RhNGFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxMjQ5NTkyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MTI0OTU5MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25Qcm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTk5NDM4OGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1NjMxYjM0MlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblByby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05OTk0Mzg4ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblByby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05OTk0Mzg4ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZURhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzUxNjYyMWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjNmVjOGE2OFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTE2NjIxYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNTE2NjIxYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95b3lEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjYjA0YWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWEwOGZkNGRcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95b3lEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjYjA0YWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veW95RGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Y2IwNGFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmQwOTY2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY2ZTRkNjZjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZkMDk2NjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmQwOTY2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjEwN2NmMDRhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWNDQVlBQUFCeURkK1VBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFMYVNVUkJWRWlKblpidGF0UkFGSWJmMmQzZ1plMEVMRlovU0MxVUxhVmVRWkdpVlN3VU1xSFM5U0tFZ3BWV0VhVFFRcEZTTXhjamVBM2R6RG5ISDVra20yU3k3bTVnU0habTNubm1mTXlaQlpaODh1eFlUMzhmUzM2WG1tVzFBREJhUlFRaFFHaThpblFRNnN5emlaN2FpUVFWamdBbWdEazRuRis5TnZuVm5sa0t5SUFHZ1B0c0VoQTZLUEhRRG14UEE1UkFYSy8xUWVDRCtOQkFCRW9vYWNjcVd2dG9RUnhEWE5wVlVnSW1nRUpqeGRNYlE4V1VDaWdCdzdiSG9zZWZPbjBGandHUWpaNTlEbyt2K3VRMyszcFZyYnJQSm1ZQTJDZyt0UDJBRHhwd0drSmpDR3NJd3pjTE1FQ1UvczhxdXRnMHcrMmZSazN0aVpSaVJaeEdhNlloekcvZW15SVJTZ2lWTUtnYURBaGJJWmRHVzE5dEd3VGhCTUpnNW5pZ2hHSUlXekJwQVdYNTdaR3VZUWNaeEJXSndBU3dRL210cXI1cVRDdHdSdDlmbWlhTUVnZ0J6R20wZTIxVnRmanRrUWF6amg2ZG1BTDJObXU2cjlleXhoaUVNWHJ4UXdGQWZyR2hCK3owY09lNjJrUUZiTHJ4UUlOZDFsNVV0V1BIck5zd0NFTXhwOE9kU3hOYU8zZ093WG5teTVkdi9yRDdKaVFwbUhSekR2bE5FUUJLNk94SkVOZzVoL25WdmdhN2x2dHFLNFFsTGF3anpIVnpUK2tMV09pYXV4WFhzQ0RhK21KbTU5VHoyaDRKbDdkdXBSR1hLQTRuZzRCaUFCaXcwOEtoNUtrMUlxd1hBekoxeEdXaVJNKy9XUUJnZGhhQUZYTGVUWlFGTllzQWxUaEFwR3NkVVZXUW8rMUxXMzdUMmJwQmowY1dkQ20zclBSSkFVcmMrVVlDRkZrYTdWN2IvR3hkZzd0VlNDMEZiR1hmVEJaV1owN0FLUUFNeVNXQ0h0amlRTmNHZFdJYXZmcGw1ZlNoWmlFZEtBckxBZ2xBUDZ4Y2lGRlhJaFh3eUZJeDdDN1FPT0NXVDhlWk1NMkhMUTUwQWZGTXBmRUZ2VjJCZ3BxRlhUcm5KbWk2dWc5SXZSWXF1dGcwSWpUMjFkOW5ZNjg3NTI0a0VGTmJ6Qk1BQlBYbWI2em8vS24wQ2YzRnVTcHNKcGIrTHk0UDRoRVR4MEJSb2tiT2VjUDkyNVZ4OEcraWVnek9kN2QvejJnSUtLN2M0dHBWNy83WWZ6b0trTHBjRWV5bUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVdDQVlBQUFETlg4eEJBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCNVNVUkJWRGlON2RReENvQXdEQVhRSkRSMDZnSDBBRjdBdGNkMzBJdllBM1FxS2VvZ2lCV3JDSFhybjBMSWYyT1FSKzZoUUtnRVVxRUtWYWhDZjBPRTVBbkpTeFJIU1A3cFZ1V0FJTUdCaGFNY0lPekRBQzByYnE0ZFBML2FPeUNiQzRoNjB0MnlMa2FpT0xBd3Z3SXBabGh4bHl3K0FUZmdCaTgvSkk1UVlkM3ZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWlyX2dyZWVuX2JnLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVdDQVlBQUFETlg4eEJBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCeFNVUkJWRGlON2RTeENZQXdFRURSZjBhd01RUG9BRm5BM2RJSnFSMVVCMURzUW13a0VJdUltREsvT3U3Z2xTZGhacUpBVFFta1FoV3FVSVVLMUdhdml2MmVEcURIbzc5QmlwMlRUWllJeFlKanhETTg5NUs4Mmd6d0JrcHdHRHdheFNhTzlRMUlNSXVtdzZTTEh3V0x2Z0FNTFI0OXhHM3FSd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Fpcl9vcmFuZ2VfYmcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUY2U1VSQlZEaU5uWlM5VGdKQkZFYlAvQ2dQUUdYaUMvZ01WQ1FXaThIU1ZpcGJxcVczMTBvNmFaVFNta1JpUTBWOEErMHQ3T2lNZ3RtWmE4RUN1ekM3Ykp4azl1NW01c3gzNzkwdm85Z2FGMDl5NklXTzFyU05vYUUxZFcxQWEwamp6QmlteGpBNitHYllQMU9MTEsreUgrY1BFbXZEVFFZdWpVYURLSHFEcHJyZE9UQWF5TFBXUkdXd051RTFwUmpmTjFVTFFBT2M5aVYyQ1pGTHdEbndnZWxXTTltTjNoTmRUU1FHVUswN3FjMkZlWlVTZFNCTGsxazdQcUptdnhaY0tnTWlJTmxJK3A2SnkwY2F6U2F1bUk5UE90WjUycW9JTnNWd1NOZ0liWnNrTkl6ZUF3Y0VnOEthaHZVSmRmWkFxNE1Mczk3c3JWdm44bEFobkdaVEppZ0MxcmxkcUJBTzlYQkwySHEzQlJkQU9YajdqMmVFclVzSzRBQ1VnOE9DczNVUGczQlp0bUYvVHRjbDcvTllGWE5qR1MwenJPS3hDdWJtaDJHdWgvODFkOHIyWHJwcWtTdVpQVkNoc0dVODZTN3Z4TjJTU3p3V3NvbjM5RjdqelFWcnZlTmRoSk1xSGt2M3pBU21YaGpORXg3ZnJ0VXZtZkVIcmhDVmIrNTR3S0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBV0NBWUFBQUROWDh4QkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNZU1VSQlZEaU43Yyt4RHNGUUhJWHg3OTliaE1aaUVvdDM0QlV3ZUdNSkpqYWpqbGFwZ2NIU29lazk1aXR0MHFIalBldVgvSkpqT3JPbWh5VjlJQkdLVUlRaTFNUFMxaUtFcHlTbHhGTWhSZ3pJcUJsMmc0U29LZGhTbU9IRGhIRmtobGpnUWpDODV2Z3c1MjQ3bnY4SWdJRnN3NXNyT2NZcmFEcXh3aU1xSHJibjIzcTFZVHFRNFZpU01FWTNKc3FiZjNmQ3dIUmgrZ01KVWl4TTRMMnh0UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Fpcl95ZWxsb3dfYmcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTBBQUFBTkNBWUFBQUJ5NitSOEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUR0U1VSQlZDaVJuWkE5THdSaEZJV2Y4ODVzU0NTSVFxblZxQ1FTQlFWbTRvZElSS214aXAyb2ZDVlUvQVAvUUtYeFVhcVZLTlJLOWJ3N1I3RVRtZXl5bTNXYTI1em4zaWRYMmFFWG5NWWRvU1BFTHZpZC9qZ3NnYStGT21VcjNDanJ4QzlnZXFENGR6N0RtQURBYkJnVEFDQUZ3R3JmbnlZWG84cGJSWGt1YTc4SENXOFVYa3pjdlRLNnRmMFJ4RUdRanl1SFplRk54MlRQUkFCKzlFSVhEN3RTcGFoUER6MmM2UTNZYnZUdTZ2a0lYTlo2RGVpL2VuVldCWE9KbUFUV1k2VUpWTTBiVm43VmV6clJLekRUV05CcWFMWUg5Q1RuV1ZGT0RYdEVMMW9EU0kxZXdEbFdQaG9DeFBNM2ZZdGU2bnpGWWRBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUF3QUFBQU1DQVlBQUFCV2RWem5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDYlNVUkJWQ2lSbFk2aERrRUJHRWJQdjVuN0FMSk9ZTFBadkFCZDBpUlI5QUkzbWVvNTJLaGVRRFZKbDBUSmJuS0VlOFhyWGlmODZaejlIeFNvSGZXc3RxaENYYXBQZFY3bGhub0Fwc0FSdUpaNEdYQ0tpRXVvQzZCZE9RTm13TGFHbDZQMjFUdHEra2RrZnVvSEtlcEQ3ZGFOR3NBYTJLbjdHdjRyaWxkRFlBSWtKZUlJR0FPcnFzMU5kYVBlMU41MzBpOFM0QTBNSWlJRCtBQ3BERmdRU3FBK1Z3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREZTVVJCVkNpUm5kSTlEa0ZCRkliaDk1eWhWSXRkU0NSMEdyZFEySUZPZ2tWUWljb09MRUF2c1JLbHFFVGlkZ3FKeXAwNUdzWDRkMzNWVEU2ZW5QbVNrV1NVSFlBSytaTHFId2lnb244Z0FQTEFIWkRtaExiVm9xc0Q2OStoY1ZBS3JYRHhVNkQ5Q2g2QjB3TTdvaTRKWkFPZ0h3OWl1SFFhbXNEK2RqK2JoalloZEVER2p3OHBST2RlOEhweHVJWVh2MEJzSXFaVnhHYXZHdHgxTkdHWVNWZzVjMTB6S1dQTTN6Uy8yd2lBWURVdmZpTlFlb2VlTmtiNWlEN0JyMUdpMzVBajZSVmR0amJQMFQrcVRBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQzZTVVJCVkJpVlZjNGhUZ05SR01UeC96VHZyWVFFaGFqQWdnUVMxcTdnRkhVMWNBTXVBQXJCQlpwVWN3WVNudHoxcE55QUJObFV0ZjBlRElJMmhGOHlZc3hrQkRBTXd6Z2lacEt1Z0MxUUl1SzI2N3FsU2luSE9lYzNvQUVPK0xXeS9WRnJQUitsbEo2QVE5c1Q0Qk5ZU0pwS09tMmE1aTVKNm9Bc2FXNTd1bHQ0QnJCOW5ZQnYvcHhKMnV5TGJZMkFWK0JMMHFPa0IrQitGNENYL2NrRmNNUi83eEZ4SVlDKzcwOXFyVFBnVXRMYWRzazUzN1J0dS9vQk1LbEZYL1pla29JQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGRFNVUkJWRmlGN1ZiUmJzTWdERHp2eCtwODE1Q2FTczEzeGZreTl3V210QU1idzZidG9mY1VnZXk3MkFjWWVPT1BRZEVBVHNvQW9JcHJXU0xDTFgrTDNFbCtUY0RsVTNjQWJDWWszT1JPNjQ4SzRLU3NpcjAzYVVTSUs0Q1RycWR5aDBDRXhXdkpoNWRrbEx3MzFoVEFTZGRSOHBJaSsyWk1nUE1IQWtCT0o2QXB3dHBzZXNBeVhzMWdsbGNzTDFnVjROWkd6ZDJPNDV1NVhCUFcrS043cXJpRUJWaEJCcmkyU0lRakxNQXdGNWZyK0dseDhNU010QUNxMk0rRTJiRGVpYW5DdkFsNzd2NGVIQnMxZWN3S2RKeHhGMTRPOXkyWXJJSWNHeTFUQWlaRXVPUkFwd21QalpaZ083cklnZUJBVXB4dk9GN3lOUzI5T2NNaldSSHlLaUk2Q1UwSmVCVXhTajROVHJyT3pneWpMZURhZW5RaU5nVmtFajQ5U2xWU0F3SjhQVVROY2IwcVlHUUs5dEFhU3N3V2xDb0EzNTVuYm9ROEVYaC8vOGEvd0FQT01aelFERmhqTmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU9DQVlBQUFBZlNDM1JBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGUlNVUkJWQ2lSZFpJOVN4eFJGSWFmOTg1c0VDd3NRb1FVRVJGL2dPSlBXSXhhSlVVZ0FUOEtRY1RHYW90RW15MWNVMFVRZjRCSmtYSURra0lDSzlpS2hmYUNJQWlDcUlpZ2habVpONFZaV1dabjN1cHdudk1jT0pjck9qTDF4YStTa05TTXhvQ1IvKzBqeVlkLzQzaGp2NjZyOXF6YXhmaHFNbXZZQXZvb3pnMHczMnJFTzg5aWRUVmRGdDRzRWZMNTBHckVUVlUvZTBoUmVnS0VEdmdUbUM0Ujc1TktOQmdVMGxwT3d2SjN3d3lRRllpOTBXTzJGQkR2ODBUVzc1RDVYUEFKU0x0VThTNEFMd3UyOWpob0Yvc0dzZER0ZVRnQWp5VzNvSUR0UWg2QzhGa0JlQWg0MGxhZjRFY2VHcDJHREhhNjF1R3BGTDB4TklHb20vTkxFeXQrblNvOUF5b2RiQStvbGx6dzRDd2FDSC9XZFlGWXpNRXl5Y0RjM2xkZEI0RFdXcnlOK1FqY2xnZ0FsNUluVzQyNENSMS9GZUJ0M2YxWmt0UnNqUWxHZVhyeFkrT0RGNVg0MjI1ZGQrM1pmK3pYY0RNL1IrU2VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUFRQ0FZQUFBQ3ljdWZJQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRG5TVVJCVkVpSjNaVFJhY1JBREVUZmFOZWtnT3ZoZXNoZndsV1ZqNEFURE5lVUE1YzIwc01WRUlpdGZLd1Z1NEE3VERTdzdFcXNCZzBTSXpZNHZmb2p6c0dZekNjcW9rb1VvTHFvUUdXYUsxWUtMREZ6dTkwSzJzU3k5bWYyU3RSS0JieTk1OGl4Y2luK2E4bHA1V1BoaS9yZzgwM2NqaUYvRzRldTE1K3czby84Y0FUNDkrSUE1TTlHWGp5dDRpWU9Pelp5RjZ6aVBKZTRjZWg2QXppOWVDcGhnVGE1aDF4VEF5NndYY3RNa0g5Q2lFdG9KaERpa3BrSm1kZHlITG9MZ0dWMVNnREw2cFNRY1MwWHB3UXd2cm51MmNzOVlSOW5YYWw4N2QzSVRlRCtQZzVkSCtFdlBORk5OUk5YeTQ0QUFBQUFTVVZPUks1Q1lJST1cIiIsIi8v5b2T5YmN55S16ISR5pe26Ze0LS3lvZPml6VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoaXNEYXRlKGUpIHtcclxuLy8rXCIgXCIraCtcIjpcIitNK1wiOlwiK3M7XHJcblx0XHRsZXQgbm93VGltZSA9IFwiXCI7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoKTtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBsbT10aW1lLmdldE1vbnRoKCk7XHJcblx0XHRcdGxtPWxtPDEwPycwJytsbTpsbTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYgKGUgPT09IDEpIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkICsgJyAnICsgaCArICc6JyArIE0gKyAnOicgKyBzXHJcblx0XHR9ZWxzZSBpZihlID09IDQpey8v5b2T5pyI55qE56ys5LiA5aSpXHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItMVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG4vLyDovazljJbml7bpl7RcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSxuKSB7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoZGF0ZSk7XHJcblx0XHRsZXQgbm93VGltZT0gXCJcIjtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYobj09XCJ5XCJ8fG49PVwi5bm0XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5XHJcblx0XHR9ZWxzZSBpZihuPT1cIk1cInx8bj09XCLmnIhcIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG1cclxuXHRcdH1lbHNlIGlmKG49PVwibVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTVxyXG5cdFx0fWVsc2UgaWYobj09XCJoXCJ8fG49PVwi5pe2XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraFxyXG5cdFx0fWVsc2UgaWYobj09XCJkXCJ8fG49PVwi5pelXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2RcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraCtcIjpcIitNK1wiOlwiK3NcclxuXHRcdH1cclxuXHRcdHJldHVybiBub3dUaW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBob3VyRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCkgKyAnLScgKyAoZGF5ID4gOSA/IGRheSA6ICcwJyArIGRheSkgKyAnICcgKyAoaG91ciA+IDkgPyBob3VyIDogJzAnICsgaG91cik7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRkYXRlID0geWVhciArICctJyArIChtb250aCA+IDkgPyBtb250aCA6ICcwJyArIG1vbnRoKTtcclxuXHRyZXR1cm4gZGF0ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm91ckhvdXJUaW1lKCkge1xyXG5cdGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuXHRsZXQgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRsZXQgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdGxldCBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuXHRsZXQgaG91cnMgPSBub3dEYXRlLmdldEhvdXJzKCk7XHJcblx0aWYgKGhvdXJzIDwgNCAmJiBob3VycyA+PSAwKSB7XHJcblx0XHRob3VycyA9IDA7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDggJiYgaG91cnMgPj0gNCkge1xyXG5cdFx0aG91cnMgPSA0O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxMiAmJiBob3VycyA+PSA4KSB7XHJcblx0XHRob3VycyA9IDg7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDE2ICYmIGhvdXJzID49IDEyKSB7XHJcblx0XHRob3VycyA9IDEyO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAyMCAmJiBob3VycyA+PSAxNikge1xyXG5cdFx0aG91cnMgPSAxNjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDw9IDIzICYmIGhvdXJzID49IDIwKSB7XHJcblx0XHRob3VycyA9IDIwO1xyXG5cdH1cclxuXHRtb250aCA9IG1vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGg7XHJcblx0ZGF5ID0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuXHRob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcblx0cmV0dXJuIHllYXIrJy0nK21vbnRoKyctJytkYXkrJyAnK2hvdXJzKyc6MDA6MDAnXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9iYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMzZmQ0YjU0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jhc2ljSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMzZmQ0YjU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzNmZDRiNTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzNmZDRiNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzNmZDRiNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzNmZDRiNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Jhc2ljSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzNmZDRiNTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzNmZDRiNTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvYmFzaWNJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXNpY0luZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMzZmQ0YjU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaWNJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jM2ZkNGI1NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmFjdG9yRGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZmVkNTUxZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mYWN0b3JEZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mYWN0b3JEZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZmVkNTUxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZmZWQ1NTFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmZWQ1NTFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmZWQ1NTFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmZWQ1NTFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mYWN0b3JEZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmZWQ1NTFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZmZWQ1NTFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2ZhY3RvckRlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmFjdG9yRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZmVkNTUxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhY3RvckRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmZlZDU1MWQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZpdmVNaW51dGVzRGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWM3YzA3MWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZml2ZU1pbnV0ZXNEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZml2ZU1pbnV0ZXNEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9maXZlTWludXRlc0RhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWM3YzA3MWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYzdjMDcxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYzdjMDcxZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYzdjMDcxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYzdjMDcxZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZml2ZU1pbnV0ZXNEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzdjMDcxZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYzdjMDcxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9maXZlTWludXRlc0RhdGEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maXZlTWludXRlc0RhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpdmVNaW51dGVzRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maXZlTWludXRlc0RhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWM3YzA3MWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maXZlTWludXRlc0RhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVjN2MwNzFlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9nZW9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTZiYmNlMDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2VvTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nZW9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE2YmJjZTAwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE2YmJjZTAwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE2YmJjZTAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE2YmJjZTAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9nZW9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTZiYmNlMDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTZiYmNlMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvZ2VvTG9jYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nZW9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2VvTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nZW9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTZiYmNlMDAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hpZ2hWaWRlby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzRkMGFjNWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGlnaFZpZGVvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaGlnaFZpZGVvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzRkMGFjNWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzRkMGFjNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzRkMGFjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzRkMGFjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hpZ2hWaWRlby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzRkMGFjNWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzRkMGFjNWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvaGlnaFZpZGVvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGlnaFZpZGVvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oaWdoVmlkZW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oaWdoVmlkZW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0ZDBhYzVhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ob3VyRGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIzNGQzNDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob3VyRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGIzNGQzNDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYjM0ZDM0NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYjM0ZDM0NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYjM0ZDM0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYjM0ZDM0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiMzRkMzQ0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBiMzRkMzQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyU3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2hvdXJEYXRhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvdXJEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvdXJEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiMzRkMzQ0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG91ckRhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiMzRkMzQ0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MTI0OTU5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MTI0OTU5MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgxMjQ5NTkyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgxMjQ5NTkyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgxMjQ5NTkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgxMjQ5NTkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MTI0OTU5MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MTI0OTU5MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZvbHZlQWlyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxMjQ5NTkyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52b2x2ZUFpclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODEyNDk1OTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvbGx1dGlvblByby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTk5NDM4OGUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9sbHV0aW9uUHJvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9sbHV0aW9uUHJvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wb2xsdXRpb25Qcm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTk5NDM4OGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5OTk0Mzg4ZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5OTk0Mzg4ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5OTk0Mzg4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5OTk0Mzg4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcG9sbHV0aW9uUHJvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OTk0Mzg4ZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5OTk0Mzg4ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25Qcm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25Qcm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvblByby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25Qcm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTk5NDM4OGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25Qcm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk5OTQzODhlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wb2xsdXRpb25UcmVuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3N2NkYTkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9sbHV0aW9uVHJlbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb2xsdXRpb25UcmVuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY5NzdjZGE5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5NzdjZGE5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5NzdjZGE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5NzdjZGE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb2xsdXRpb25UcmVuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3N2NkYTkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjk3N2NkYTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uVHJlbmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25UcmVuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uVHJlbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25UcmVuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3N2NkYTkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3N1cnJvdW5kV2VhdGhlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzZTcyYTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3Vycm91bmRXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3Vycm91bmRXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjAzZTcyYTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAzZTcyYTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAzZTcyYTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAzZTcyYTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3N1cnJvdW5kV2VhdGhlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzZTcyYTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjAzZTcyYTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3Vycm91bmRXZWF0aGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3Vycm91bmRXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFdlYXRoZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFdlYXRoZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwM2U3MmEwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZURhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MTY2MjFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGVEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1MTY2MjFjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzUxNjYyMWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUxNjYyMWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUxNjYyMWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUxNjYyMWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlRGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUxNjYyMWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUxNjYyMWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdGFibGVEYXRhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGVEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGVEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM1MTY2MjFjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGVEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTE2NjIxYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4veW95RGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNiMDRhYzcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4veW95RGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3lveURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3lveURhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGNiMDRhYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0Y2IwNGFjN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0Y2IwNGFjNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0Y2IwNGFjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0Y2IwNGFjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4veW95RGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNiMDRhYzcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGNiMDRhYzcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJTdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMveW95RGF0YS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3lveURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3lveURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veW95RGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Y2IwNGFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3lveURhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRjYjA0YWM3JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZkMDk2NjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZkMDk2NjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWZkMDk2NjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWZkMDk2NjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWZkMDk2NjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWZkMDk2NjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZmQwOTY2MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZmQwOTY2MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclN0YXRpb25EZXRhaWwvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZkMDk2NjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZkMDk2NjImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FubnVhbEVjaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViMTIxMzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYW5udWFsRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYW5udWFsRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjViMTIxMzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjViMTIxMzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjViMTIxMzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjViMTIxMzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FubnVhbEVjaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViMTIxMzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjViMTIxMzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvYW5udWFsRWNoYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5udWFsRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbm51YWxFY2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbm51YWxFY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1YjEyMTM2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MGIyNWM0MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvcG9ydGlvbkVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjcwYjI1YzQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcwYjI1YzQwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcwYjI1YzQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcwYjI1YzQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MGIyNWM0MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MGIyNWM0MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9wcm9wb3J0aW9uRWNoYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvcG9ydGlvbkVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvcG9ydGlvbkVjaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb3BvcnRpb25FY2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwYjI1YzQwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==