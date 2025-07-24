(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "monitorItem",
  props: {
    id: {
      type: String,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    },
    listType: {
      type: String,
      default: function _default() {}
    },
    stationName: {
      type: String,
      default: function _default() {}
    }
  },
  watch: {
    time: function time(newD, oldD) {
      this.getData();
    },
    id: function id(newD, oldD) {
      this.getData();
    },
    listType: {
      handler: function handler(newD, oldD) {
        this.getData();
      }
    }
  },
  data: function data() {
    return {
      title: '',
      active1: 0,
      lineData: null,
      stationEchart: null,
      factorList: [],
      isShowDetail: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.stationEchart) {
      this.stationEchart = echarts__WEBPACK_IMPORTED_MODULE_3__["init"](this.$refs.stationEchart);
      setTimeout(function () {
        _this.initChart();
      });
    }
  },
  methods: {
    getData: function getData() {
      var _this2 = this;

      this.isShowDetail = this.$route.name === 'stationDetail' || this.$route.name === 'stationRiverDetail';
      this.timeList = [];
      this.dataList = [];

      if (this.listType === '') {
        return;
      }

      var info = {
        type: this.listType,
        dateTime: this.timeType === "时" ? this.time + ":00" : this.time,
        siteId: this.id,
        timeType: this.timeType
      };
      this.formatterTitle();
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_2__["hourLine"])(info).then(function (res) {
        var resData = res.data;
        _this2.lineData = resData;
        _this2.factorList = resData.factorList;
        var firstYz = resData.factorList[_this2.active1].factor;

        _this2.formatter(firstYz);
      });
    },
    yzChange: function yzChange(item, index) {
      this.active1 = index;
      this.formatter(item.factor);
    },
    //格式化标题
    formatterTitle: function formatterTitle() {
      if (this.timeType === '时') {
        this.title = '过去24小时监测数据';
      } else if (this.timeType === '日') {
        this.title = '过去7天监测数据';
      } else if (this.timeType === '月') {
        this.title = '月监测数据';
      } else if (this.timeType === '年') {
        this.title = '年累计监测数据';
      }
    },
    //格式化图表数据
    formatter: function formatter(factor) {
      var _this3 = this;

      this.formatterTitle();
      var resData = this.lineData;
      var timeArr = resData.curveDataNow[factor].time.map(function (item) {
        if (_this3.timeType === '时') {
          return item.substring(8, 10) + "日" + item.substring(11, 13) + "时";
        } else if (_this3.timeType === '日') {
          return item.substring(5, 10);
        } else if (_this3.timeType === '月') {
          return item.substring(5, 7);
        } else if (_this3.timeType === '年') {
          return item.substring(5, 7);
        }
      });
      this.timeList = timeArr;
      this.dataList = resData.curveDataNow[factor].value;
      this.dataList1 = resData.curveDataLast[factor].value;
      var max = Math.max.apply(null, resData.curveDataNow[factor].value);
      var max1 = Math.max.apply(null, resData.curveDataLast[factor].value); // let max = Math.max(max, max2);

      this.yzBzx = factor === 'ph' ? 6 : resData.stateFactorStandardLine[factor];
      this.yzBzx1 = factor === 'ph' ? 9 : '-';
      this.bzxWords = factor === 'ph' ? "ph目标考核线6" : "国家考核目标线" + this.yzBzx + "mg/L";
      this.bzxWords1 = factor === 'ph' ? "ph目标考核线9" : '-';

      if (max) {
        if (factor === 'ph') {
          if (max > 9) {
            this.maxNum = max;
          } else {
            this.maxNum = 9;
          }
        } else {
          if (max > this.yzBzx) {
            this.maxNum = max;
          } else {
            this.maxNum = this.yzBzx;
          }
        }
      } else {
        this.maxNum = factor === 'ph' ? this.yzBzx : 9;
      }

      if (max1) {
        if (max1 > this.maxNum) {
          this.maxNum = max1;
        }
      }

      console.log(this.maxNum);
      this.initChart();
    },
    initChart: function initChart() {
      var curTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(this.time).format('YYYY'); //今年

      var preTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(this.time).subtract(1, 'year').format('YYYY'); //去年

      var option = {
        backgroundColor: "#fff",
        legend: {
          show: this.timeType !== "时" ? true : false,
          icon: "circle",
          top: "4%",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 25,
          right: "5%"
        },
        grid: {
          top: 40,
          right: 20,
          bottom: 20,
          left: 20,
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: [{
          type: "category",
          data: this.timeList,
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "rgba(176, 183, 194, 1)",
              fontSize: "12px"
            },
            rotate: this.timeType === '时' ? 45 : 0,
            margin: 15
          },
          boundaryGap: false
        }],
        yAxis: [{
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          max: this.maxNum,
          axisLabel: {
            textStyle: {
              color: "rgba(176, 183, 194, 1)",
              fontSize: "12px"
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: curTime,
          type: "line",
          data: this.dataList,
          symbolSize: 6,
          smooth: true,
          lineStyle: {
            color: "rgba(82, 113, 255, 1)"
          },
          itemStyle: {
            normal: {
              color: "rgba(82, 113, 255, 1)",
              borderColor: "rgba(82, 113, 255, 1)"
            }
          },
          areaStyle: {
            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(73, 117, 236, 0.3)"
            }, {
              offset: 1,
              color: "rgba(73, 117, 236, 0)"
            }])
          },
          markLine: {
            symbol: "none",
            // 去掉箭头
            lineStyle: {
              normal: {
                color: "#F96666",
                type: "dashed",
                opacity: 1
              }
            },
            data: [{
              name: "国家目标参考线",
              yAxis: this.yzBzx,
              xAxis: "",
              label: {
                normal: {
                  position: "middle",
                  formatter: this.bzxWords,
                  color: "#F96666",
                  fontSize: "12px"
                }
              }
            }, {
              name: "国家目标参考线",
              yAxis: this.yzBzx1,
              xAxis: "",
              label: {
                normal: {
                  position: "middle",
                  formatter: this.bzxWords1,
                  color: "#F96666",
                  fontSize: "12px"
                }
              }
            }]
          }
        }, {
          name: preTime,
          type: "line",
          data: this.dataList1,
          symbolSize: 6,
          smooth: true,
          lineStyle: {
            color: "rgba(18, 18, 54, 0.2)"
          },
          itemStyle: {
            normal: {
              color: "rgba(18, 18, 54, 0.2)",
              borderColor: "rgba(18, 18, 54, 0.2)"
            }
          },
          areaStyle: {
            color: new echarts__WEBPACK_IMPORTED_MODULE_3__["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(73, 117, 236, 0.3)"
            }, {
              offset: 1,
              color: "rgba(73, 117, 236, 0)"
            }])
          }
        }]
      };
      this.stationEchart.setOption(option);
    },
    dataDetail: function dataDetail() {
      console.log(this.listType);
      this.$router.push({
        name: "factorDetail",
        query: {
          timeType: this.timeType,
          // mc: this.stationName,
          id: this.id,
          time: this.time,
          flagType: this.listType === '湖库' ? '湖库' : '' // dataType: this.dataType,
          // type: this.listType,
          // zdType: this.zdType,

        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-chart" }, [
    _c("div", { staticClass: "chart-top" }, [
      _c("div", { staticClass: "chart-title" }, [_vm._v(_vm._s(_vm.title))]),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isShowDetail,
              expression: "isShowDetail",
            },
          ],
          staticClass: "chart-detail",
          on: {
            click: function ($event) {
              return _vm.dataDetail()
            },
          },
        },
        [_vm._v("查看详情")]
      ),
    ]),
    _c("div", { staticClass: "chart-yz" }, [
      _c(
        "ul",
        _vm._l(_vm.factorList, function (item, index) {
          return _c(
            "li",
            {
              class: { active: _vm.active1 == index },
              on: {
                click: function ($event) {
                  return _vm.yzChange(item, index)
                },
              },
            },
            [_vm._v(_vm._s(item.factorName) + " ")]
          )
        }),
        0
      ),
    ]),
    _c("div", { ref: "stationEchart", staticClass: "chart-box" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/xhx.png */ "./src/assets/xhx.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".card-chart[data-v-577d743c] {\n  width: calc(100% - 20px);\n  height: auto;\n  display: inline-block;\n  opacity: 1;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 20%), white;\n  border: 1px solid white;\n  margin: 0 9px 10px 9px;\n}\n.card-chart .chart-top[data-v-577d743c] {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n.card-chart .chart-top .chart-title[data-v-577d743c] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #447bfc;\n  padding-left: 15px;\n  float: left;\n}\n.card-chart .chart-top .chart-detail[data-v-577d743c] {\n  font-size: 12px;\n  font-weight: 500;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  float: right;\n  padding-right: 15px;\n}\n.card-chart .chart-yz[data-v-577d743c] {\n  width: 100%;\n  height: auto;\n  display: inline-block;\n}\n.card-chart .chart-yz ul[data-v-577d743c] {\n  width: 100%;\n  height: 100%;\n}\n.card-chart .chart-yz ul li[data-v-577d743c] {\n  float: left;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  color: rgba(18, 18, 54, 0.5);\n  margin-left: 15px;\n}\n.card-chart .chart-yz ul .active[data-v-577d743c] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: 50% 75%;\n  font-size: 16px;\n  font-weight: 600;\n  color: rgba(18, 18, 54, 0.8);\n}\n.chart-box[data-v-577d743c] {\n  width: 100%;\n  height: 240px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5d30558c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/lxbg.png":
/*!*****************************!*\
  !*** ./src/assets/lxbg.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF6SURBVDiNnZS9TgJBFEbP/CgPQGXiC/gMVCQWi8HSVipbqqW310o6aZTSmkRiQ0V8A+0t7OiMgtmZa8ECuzC7bJxk9u5m5sx3790vo9gaF09y6IWO1rSNoaE1dW1Aa0jjzBimxjA6+GbYP1OLLK+yH+cPEmvDTQYujUaDKHqDprrdOTAayLPWRGWwNuE1pRjfN1ULQAOc9iV2CZFLwDnwgelWM9mN3hNdTSQGUK07qc2FeZUSdSBLk1k7PqJmvxZcKgMiINlI+p6Jy0cazSaumI9POtZ52qoINsVwSNgIbZskNIzeAwcEg8KahvUJdfZAq4MLs97srVvn8lAhnGZTJigC1rldqBAO9XBL2Hq3BRdAOXj7j2eErUsK4ACUg8OCs3UPg3BZtmF/Ttcl7/NYFXNjGS0zrOKxCubmh2Guh/81d8r2XrpqkSuZPVChsGU86S7vxN2SSzwWson39F7jzQVrveNdhJMqHkv3zASmXhjNEx7frtUvmfEHrhCVb+54wKEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/xhx.png":
/*!****************************!*\
  !*** ./src/assets/xhx.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAICAYAAAAIloRgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRvdCxDQJBDETRPwbkyelhG7mqyA6JskgoiA5u1wQnUYIdj+ZpLIBtr8HBYE4TJMKUEjAsQyQshyJZZYQRWQtLZIGpMjpzZ76MlFT57OEaABwMGi46kD+2PerehpH0YKpn7xuZTcuA4MK3wfm8X7f9B/bxHNtzb7UjAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue":
/*!**************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/monitorItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitorItem.vue?vue&type=template&id=577d743c&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true&");
/* harmony import */ var _monitorItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitorItem.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _monitorItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "577d743c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/monitorItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./monitorItem.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=style&index=0&id=577d743c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_style_index_0_id_577d743c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./monitorItem.vue?vue&type=template&id=577d743c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/monitorItem.vue?vue&type=template&id=577d743c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monitorItem_vue_vue_type_template_id_577d743c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL21vbml0b3JJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbW9uaXRvckl0ZW0udnVlPzI2NDgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL21vbml0b3JJdGVtLnZ1ZT9hNGUzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9tb25pdG9ySXRlbS52dWU/MTA0YSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2x4YmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMveGh4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbW9uaXRvckl0ZW0udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9tb25pdG9ySXRlbS52dWU/YjE5NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbW9uaXRvckl0ZW0udnVlP2I0MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL21vbml0b3JJdGVtLnZ1ZT8yYWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQ0FDQTtBQUhBLEtBREE7QUFNQTtBQUNBLGtCQURBO0FBRUEsb0NBQ0E7QUFIQSxLQU5BO0FBV0E7QUFDQSxrQkFEQTtBQUVBLG9DQUNBO0FBSEEsS0FYQTtBQWdCQTtBQUNBLGtCQURBO0FBRUEsb0NBQ0E7QUFIQSxLQWhCQTtBQXFCQTtBQUNBLGtCQURBO0FBRUEsb0NBQ0E7QUFIQTtBQXJCQSxHQUZBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BO0FBQ0EsYUFEQSxtQkFDQSxJQURBLEVBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEEsR0E3QkE7QUEwQ0EsTUExQ0Esa0JBMENBO0FBQ0E7QUFDQSxlQURBO0FBRUEsZ0JBRkE7QUFHQSxvQkFIQTtBQUlBLHlCQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FuREE7QUFvREEsU0FwREEscUJBb0RBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQSxHQTNEQTtBQTREQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsMkJBREE7QUFFQSx1RUFGQTtBQUdBLHVCQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXRCQTtBQXVCQSxZQXZCQSxvQkF1QkEsSUF2QkEsRUF1QkEsS0F2QkEsRUF1QkE7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkE7QUFDQSxrQkE1QkEsNEJBNEJBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0F0Q0E7QUF1Q0E7QUFDQSxhQXhDQSxxQkF3Q0EsTUF4Q0EsRUF3Q0E7QUFBQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQSwyRUFyQkEsQ0FzQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BZEEsTUFjQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0E1RkE7QUE2RkEsYUE3RkEsdUJBNkZBO0FBQ0EsMkZBREEsQ0FDQTs7QUFDQSwrR0FGQSxDQUVBOztBQUNBO0FBQ0EsK0JBREE7QUFFQTtBQUNBLG9EQURBO0FBRUEsd0JBRkE7QUFHQSxtQkFIQTtBQUlBLHNCQUpBO0FBS0EsdUJBTEE7QUFNQSxxQkFOQTtBQU9BO0FBUEEsU0FGQTtBQVdBO0FBQ0EsaUJBREE7QUFFQSxtQkFGQTtBQUdBLG9CQUhBO0FBSUEsa0JBSkE7QUFLQTtBQUxBLFNBWEE7QUFrQkE7QUFDQTtBQURBLFNBbEJBO0FBcUJBLGdCQUNBO0FBQ0EsMEJBREE7QUFFQSw2QkFGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREEsV0FIQTtBQVFBO0FBQ0E7QUFEQSxXQVJBO0FBV0E7QUFDQSx1QkFEQTtBQUVBO0FBQ0EsNkNBREE7QUFFQTtBQUZBLGFBRkE7QUFNQSxrREFOQTtBQU9BO0FBUEEsV0FYQTtBQW9CQTtBQXBCQSxTQURBLENBckJBO0FBNkNBLGdCQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBO0FBREEsV0FGQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBREEsV0FMQTtBQVVBLDBCQVZBO0FBV0E7QUFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQTtBQURBLFdBWEE7QUFpQkE7QUFDQTtBQURBO0FBakJBLFNBREEsQ0E3Q0E7QUFvRUEsaUJBQ0E7QUFDQSx1QkFEQTtBQUVBLHNCQUZBO0FBR0EsNkJBSEE7QUFJQSx1QkFKQTtBQUtBLHNCQUxBO0FBTUE7QUFDQTtBQURBLFdBTkE7QUFTQTtBQUNBO0FBQ0EsNENBREE7QUFFQTtBQUZBO0FBREEsV0FUQTtBQWVBO0FBQ0EsbUdBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkEsYUFEQSxFQUtBO0FBQ0EsdUJBREE7QUFFQTtBQUZBLGFBTEE7QUFEQSxXQWZBO0FBMkJBO0FBQ0EsMEJBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLDhCQUZBO0FBR0E7QUFIQTtBQURBLGFBRkE7QUFTQSxtQkFDQTtBQUNBLDZCQURBO0FBRUEsK0JBRkE7QUFHQSx1QkFIQTtBQUlBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBLDBDQUZBO0FBR0Esa0NBSEE7QUFJQTtBQUpBO0FBREE7QUFKQSxhQURBLEVBY0E7QUFDQSw2QkFEQTtBQUVBLGdDQUZBO0FBR0EsdUJBSEE7QUFJQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSwyQ0FGQTtBQUdBLGtDQUhBO0FBSUE7QUFKQTtBQURBO0FBSkEsYUFkQTtBQVRBO0FBM0JBLFNBREEsRUFtRUE7QUFDQSx1QkFEQTtBQUVBLHNCQUZBO0FBR0EsOEJBSEE7QUFJQSx1QkFKQTtBQUtBLHNCQUxBO0FBTUE7QUFDQTtBQURBLFdBTkE7QUFTQTtBQUNBO0FBQ0EsNENBREE7QUFFQTtBQUZBO0FBREEsV0FUQTtBQWVBO0FBQ0EsbUdBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkEsYUFEQSxFQUtBO0FBQ0EsdUJBREE7QUFFQTtBQUZBLGFBTEE7QUFEQTtBQWZBLFNBbkVBO0FBcEVBO0FBcUtBO0FBQ0EsS0F0UUE7QUF1UUEsY0F2UUEsd0JBdVFBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQSxpQ0FEQTtBQUVBO0FBQ0EscUJBSEE7QUFJQSx5QkFKQTtBQUtBLHNEQUxBLENBTUE7QUFDQTtBQUNBOztBQVJBO0FBRkE7QUFhQTtBQXRSQTtBQTVEQSxHOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hELGVBQWUsMkJBQTJCO0FBQzFDLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBaUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMseUZBQThCO0FBQ2pELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBNkQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBNEQ7QUFDdEcsc0NBQXNDLG1CQUFPLENBQUMsdUhBQStEO0FBQzdHLG9DQUFvQyxtQkFBTyxDQUFDLDhDQUFrQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsaUNBQWlDLDZCQUE2QixpQkFBaUIsMEJBQTBCLGVBQWUsd0JBQXdCLHNHQUFzRyw0QkFBNEIsMkJBQTJCLEdBQUcsMkNBQTJDLGdCQUFnQixpQkFBaUIsc0JBQXNCLEdBQUcsd0RBQXdELG9CQUFvQixxQkFBcUIsbUJBQW1CLHVCQUF1QixnQkFBZ0IsR0FBRyx5REFBeUQsb0JBQW9CLHFCQUFxQiw0Q0FBNEMsNENBQTRDLG1CQUFtQixpQkFBaUIsd0JBQXdCLEdBQUcsMENBQTBDLGdCQUFnQixpQkFBaUIsMEJBQTBCLEdBQUcsNkNBQTZDLGdCQUFnQixpQkFBaUIsR0FBRyxnREFBZ0QsZ0JBQWdCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGlDQUFpQyxzQkFBc0IsR0FBRyxxREFBcUQsMEVBQTBFLGlDQUFpQyxvQkFBb0IscUJBQXFCLGlDQUFpQyxHQUFHLCtCQUErQixnQkFBZ0Isa0JBQWtCLEdBQUc7QUFDdCtDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHUyQkFBaWY7QUFDdmdCO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxtSUFBc0U7QUFDeEYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDWGYsaUNBQWlDLG9uQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdSOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHaEc7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNFQsQ0FBZ0IsNFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFY7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtY2hhcnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGFydC10b3BcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgIDxkaXYgdi1zaG93PVwiaXNTaG93RGV0YWlsXCIgY2xhc3M9XCJjaGFydC1kZXRhaWxcIiBAY2xpY2s9XCJkYXRhRGV0YWlsKClcIj7mn6XnnIvor6bmg4U8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LXl6XCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGZhY3Rvckxpc3RcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogYWN0aXZlMSA9PSBpbmRleCB9XCIgQGNsaWNrPVwieXpDaGFuZ2UoaXRlbSwgaW5kZXgpXCI+e3tcclxuICAgICAgICAgIGl0ZW0uZmFjdG9yTmFtZSB9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGFydC1ib3hcIiByZWY9XCJzdGF0aW9uRWNoYXJ0XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7aG91ckxpbmV9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSBcImVjaGFydHNcIjtcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibW9uaXRvckl0ZW1cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGltZVR5cGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbGlzdFR5cGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc3RhdGlvbk5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB0aW1lOiBmdW5jdGlvbiAobmV3RCwgb2xkRCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGlkOiBmdW5jdGlvbiAobmV3RCwgb2xkRCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpc3RUeXBlOntcclxuICAgICAgICBoYW5kbGVyKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGFjdGl2ZTE6IDAsXHJcbiAgICAgICAgbGluZURhdGE6IG51bGwsXHJcbiAgICAgICAgc3RhdGlvbkVjaGFydDogbnVsbCxcclxuICAgICAgICBmYWN0b3JMaXN0OiBbXSxcclxuICAgICAgICBpc1Nob3dEZXRhaWw6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0aW9uRWNoYXJ0KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0aW9uRWNoYXJ0ID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMuc3RhdGlvbkVjaGFydCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93RGV0YWlsID0gdGhpcy4kcm91dGUubmFtZT09PSdzdGF0aW9uRGV0YWlsJ3x8dGhpcy4kcm91dGUubmFtZT09PSdzdGF0aW9uUml2ZXJEZXRhaWwnXHJcbiAgICAgICAgdGhpcy50aW1lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICBpZih0aGlzLmxpc3RUeXBlPT09Jycpe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy5saXN0VHlwZSxcclxuICAgICAgICAgIGRhdGVUaW1lOiB0aGlzLnRpbWVUeXBlID09PSBcIuaXtlwiID8gdGhpcy50aW1lICsgXCI6MDBcIiA6IHRoaXMudGltZSxcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5pZCxcclxuICAgICAgICAgIHRpbWVUeXBlOiB0aGlzLnRpbWVUeXBlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJUaXRsZSgpXHJcbiAgICAgICAgaG91ckxpbmUoaW5mbykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlc0RhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMubGluZURhdGEgPSByZXNEYXRhO1xyXG4gICAgICAgICAgdGhpcy5mYWN0b3JMaXN0ID0gcmVzRGF0YS5mYWN0b3JMaXN0O1xyXG4gICAgICAgICAgbGV0IGZpcnN0WXogPSByZXNEYXRhLmZhY3Rvckxpc3RbdGhpcy5hY3RpdmUxXS5mYWN0b3I7XHJcbiAgICAgICAgICB0aGlzLmZvcm1hdHRlcihmaXJzdFl6KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHl6Q2hhbmdlKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUxID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIoaXRlbS5mYWN0b3IpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+agvOW8j+WMluagh+mimFxyXG4gICAgICBmb3JtYXR0ZXJUaXRsZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVUeXBlID09PSAn5pe2Jykge1xyXG4gICAgICAgICAgdGhpcy50aXRsZSA9ICfov4fljrsyNOWwj+aXtuebkea1i+aVsOaNric7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVUeXBlID09PSAn5pelJykge1xyXG4gICAgICAgICAgdGhpcy50aXRsZSA9ICfov4fljrs35aSp55uR5rWL5pWw5o2uJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGltZVR5cGUgPT09ICfmnIgnKSB7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gJ+aciOebkea1i+aVsOaNric7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVUeXBlID09PSAn5bm0Jykge1xyXG4gICAgICAgICAgdGhpcy50aXRsZSA9ICflubTntK/orqHnm5HmtYvmlbDmja4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy/moLzlvI/ljJblm77ooajmlbDmja5cclxuICAgICAgZm9ybWF0dGVyKGZhY3Rvcikge1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1hdHRlclRpdGxlKClcclxuXHJcbiAgICAgICAgbGV0IHJlc0RhdGEgPSB0aGlzLmxpbmVEYXRhO1xyXG4gICAgICAgIGxldCB0aW1lQXJyID0gcmVzRGF0YS5jdXJ2ZURhdGFOb3dbZmFjdG9yXS50aW1lLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYodGhpcy50aW1lVHlwZSA9PT0gJ+aXticpe1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zdWJzdHJpbmcoOCwgMTApICsgXCLml6VcIiArIGl0ZW0uc3Vic3RyaW5nKDExLCAxMykgKyBcIuaXtlwiO1xyXG4gICAgICAgICAgfWVsc2UgaWYodGhpcy50aW1lVHlwZSA9PT0gJ+aXpScpe1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zdWJzdHJpbmcoNSwgMTApO1xyXG4gICAgICAgICAgfWVsc2UgaWYodGhpcy50aW1lVHlwZSA9PT0gJ+aciCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zdWJzdHJpbmcoNSwgNyk7XHJcbiAgICAgICAgICB9ZWxzZSBpZih0aGlzLnRpbWVUeXBlID09PSAn5bm0Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnN1YnN0cmluZyg1LCA3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRpbWVMaXN0ID0gdGltZUFycjtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gcmVzRGF0YS5jdXJ2ZURhdGFOb3dbZmFjdG9yXS52YWx1ZTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0MSA9IHJlc0RhdGEuY3VydmVEYXRhTGFzdFtmYWN0b3JdLnZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmVzRGF0YS5jdXJ2ZURhdGFOb3dbZmFjdG9yXS52YWx1ZSk7XHJcbiAgICAgICAgbGV0IG1heDEgPSBNYXRoLm1heC5hcHBseShudWxsLCByZXNEYXRhLmN1cnZlRGF0YUxhc3RbZmFjdG9yXS52YWx1ZSk7XHJcbiAgICAgICAgLy8gbGV0IG1heCA9IE1hdGgubWF4KG1heCwgbWF4Mik7XHJcbiAgICAgICAgdGhpcy55ekJ6eCA9IGZhY3RvciA9PT0gJ3BoJyA/IDYgOiByZXNEYXRhLnN0YXRlRmFjdG9yU3RhbmRhcmRMaW5lW2ZhY3Rvcl07XHJcbiAgICAgICAgdGhpcy55ekJ6eDEgPSBmYWN0b3IgPT09ICdwaCcgPyA5IDogJy0nO1xyXG4gICAgICAgIHRoaXMuYnp4V29yZHMgPSBmYWN0b3IgPT09ICdwaCcgPyBcInBo55uu5qCH6ICD5qC457q/NlwiIDogKFwi5Zu95a626ICD5qC455uu5qCH57q/XCIgKyB0aGlzLnl6Qnp4ICsgXCJtZy9MXCIpO1xyXG4gICAgICAgIHRoaXMuYnp4V29yZHMxID0gZmFjdG9yID09PSAncGgnID8gXCJwaOebruagh+iAg+aguOe6vzlcIiA6ICctJztcclxuXHJcbiAgICAgICAgaWYgKG1heCkge1xyXG4gICAgICAgICAgaWYgKGZhY3RvciA9PT0gJ3BoJykge1xyXG4gICAgICAgICAgICBpZiAobWF4ID4gOSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubWF4TnVtID0gbWF4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubWF4TnVtID0gOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG1heCA+IHRoaXMueXpCengpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1heE51bSA9IG1heDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm1heE51bSA9IHRoaXMueXpCeng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tYXhOdW0gPSBmYWN0b3IgPT09ICdwaCcgPyB0aGlzLnl6Qnp4IDogOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heDEpIHtcclxuICAgICAgICAgIGlmIChtYXgxID4gdGhpcy5tYXhOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhOdW0gPSBtYXgxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1heE51bSlcclxuICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBpbml0Q2hhcnQoKSB7XHJcbiAgICAgICAgbGV0IGN1clRpbWUgPSBkYXlqcyh0aGlzLnRpbWUpLmZvcm1hdCgnWVlZWScpOyAgLy/ku4rlubRcclxuICAgICAgICBsZXQgcHJlVGltZSA9IGRheWpzKHRoaXMudGltZSkuc3VidHJhY3QoMSwgJ3llYXInKS5mb3JtYXQoJ1lZWVknKTsgIC8v5Y675bm0XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiB0aGlzLnRpbWVUeXBlICE9PSBcIuaXtlwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICB0b3A6IFwiNCVcIixcclxuICAgICAgICAgICAgaXRlbVdpZHRoOiA2LFxyXG4gICAgICAgICAgICBpdGVtSGVpZ2h0OiA2LFxyXG4gICAgICAgICAgICBpdGVtR2FwOiAyNSxcclxuICAgICAgICAgICAgcmlnaHQ6IFwiNSVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHRvcDogNDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcclxuICAgICAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICAgICAgbGVmdDogMjAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiYXhpc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHhBeGlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImNhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGhpcy50aW1lTGlzdCxcclxuICAgICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsOiAwLFxyXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTc2LCAxODMsIDE5NCwgMSlcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJvdGF0ZTogdGhpcy50aW1lVHlwZSA9PT0gJ+aXtic/NDU6MCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgeUF4aXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwidmFsdWVcIixcclxuICAgICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBtYXg6IHRoaXMubWF4TnVtLFxyXG4gICAgICAgICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTc2LCAxODMsIDE5NCwgMSlcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGN1clRpbWUsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhTGlzdCxcclxuICAgICAgICAgICAgICBzeW1ib2xTaXplOiA2LFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoODIsIDExMywgMjU1LCAxKVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg4MiwgMTEzLCAyNTUsIDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoODIsIDExMywgMjU1LCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGFyZWFTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBlY2hhcnRzLmdyYXBoaWMuTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMSwgW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoNzMsIDExNywgMjM2LCAwLjMpXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg3MywgMTE3LCAyMzYsIDApXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1hcmtMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2w6IFwibm9uZVwiLCAvLyDljrvmjonnrq3lpLRcclxuICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRjk2NjY2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXNoZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi5Zu95a6255uu5qCH5Y+C6ICD57q/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IHRoaXMueXpCengsXHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmJ6eFdvcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRjk2NjY2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi5Zu95a6255uu5qCH5Y+C6ICD57q/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IHRoaXMueXpCengxLFxyXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdGhpcy5ienhXb3JkczEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGOTY2NjZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogcHJlVGltZSxcclxuICAgICAgICAgICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGFMaXN0MSxcclxuICAgICAgICAgICAgICBzeW1ib2xTaXplOiA2LFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC4yKVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjIpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC4yKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGFyZWFTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBlY2hhcnRzLmdyYXBoaWMuTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMSwgW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoNzMsIDExNywgMjM2LCAwLjMpXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg3MywgMTE3LCAyMzYsIDApXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGlvbkVjaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcclxuICAgICAgfSxcclxuICAgICAgZGF0YURldGFpbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RUeXBlKVxyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwiZmFjdG9yRGV0YWlsXCIsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0aW1lVHlwZTogdGhpcy50aW1lVHlwZSxcclxuICAgICAgICAgICAgLy8gbWM6IHRoaXMuc3RhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgIGZsYWdUeXBlOiB0aGlzLmxpc3RUeXBlPT09J+a5luW6kyc/J+a5luW6kyc6JycsXHJcbiAgICAgICAgICAgIC8vIGRhdGFUeXBlOiB0aGlzLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICAvLyB0eXBlOiB0aGlzLmxpc3RUeXBlLFxyXG4gICAgICAgICAgICAvLyB6ZFR5cGU6IHRoaXMuemRUeXBlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5jYXJkLWNoYXJ0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAyMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIG1hcmdpbjogMCA5cHggMTBweCA5cHg7XHJcblxyXG4gICAgLmNoYXJ0LXRvcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgLmNoYXJ0LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWRldGFpbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0LXl6IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy94aHgucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA3NSU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGFydC1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWNoYXJ0XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhcnQtdG9wXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGFydC10aXRsZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNTaG93RGV0YWlsLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzU2hvd0RldGFpbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoYXJ0LWRldGFpbFwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRhdGFEZXRhaWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi5p+l55yL6K+m5oOFXCIpXVxuICAgICAgKSxcbiAgICBdKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXJ0LXl6XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgX3ZtLl9sKF92bS5mYWN0b3JMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZTEgPT0gaW5kZXggfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS55ekNoYW5nZShpdGVtLCBpbmRleClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZmFjdG9yTmFtZSkgKyBcIiBcIildXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICBdKSxcbiAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJzdGF0aW9uRWNoYXJ0XCIsIHN0YXRpY0NsYXNzOiBcImNoYXJ0LWJveFwiIH0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3hoeC5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWNoYXJ0W2RhdGEtdi01NzdkNzQzY10ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDIwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDAgOXB4IDEwcHggOXB4O1xcbn1cXG4uY2FyZC1jaGFydCAuY2hhcnQtdG9wW2RhdGEtdi01NzdkNzQzY10ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLmNhcmQtY2hhcnQgLmNoYXJ0LXRvcCAuY2hhcnQtdGl0bGVbZGF0YS12LTU3N2Q3NDNjXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNhcmQtY2hhcnQgLmNoYXJ0LXRvcCAuY2hhcnQtZGV0YWlsW2RhdGEtdi01NzdkNzQzY10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuLmNhcmQtY2hhcnQgLmNoYXJ0LXl6W2RhdGEtdi01NzdkNzQzY10ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jYXJkLWNoYXJ0IC5jaGFydC15eiB1bFtkYXRhLXYtNTc3ZDc0M2NdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jaGFydCAuY2hhcnQteXogdWwgbGlbZGF0YS12LTU3N2Q3NDNjXSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLmNhcmQtY2hhcnQgLmNoYXJ0LXl6IHVsIC5hY3RpdmVbZGF0YS12LTU3N2Q3NDNjXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA3NSU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcXG59XFxuLmNoYXJ0LWJveFtkYXRhLXYtNTc3ZDc0M2NdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNDBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb25pdG9ySXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzdkNzQzYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVkMzA1NThjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9uaXRvckl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTc3ZDc0M2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb25pdG9ySXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzdkNzQzYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGNlNVUkJWRGlOblpTOVRnSkJGRWJQL0NnUFFHWGlDL2dNVkNRV2k4SFNWaXBicXFXMzEwbzZhWlRTbWtSaVEwVjhBKzB0N09pTWd0bVphOEVDdXpDN2JKeGs5dTVtNXN4Mzc5MHZvOWdhRjA5eTZJV08xclNOb2FFMWRXMUFhMGpqekJpbXhqQTYrR2JZUDFPTExLK3lIK2NQRW12RFRRWXVqVWFES0hxRHBycmRPVEFheUxQV1JHV3dOdUUxcFJqZk4xVUxRQU9jOWlWMkNaRkx3RG53Z2VsV005bU4zaE5kVFNRR1VLMDdxYzJGZVpVU2RTQkxrMWs3UHFKbXZ4WmNLZ01pSU5sSStwNkp5MGNhelNhdW1JOVBPdFo1MnFvSU5zVndTTmdJYlpza05JemVBd2NFZzhLYWh2VUpkZlpBcTRNTHM5N3NyVnZuOGxBaG5HWlRKaWdDMXJsZHFCQU85WEJMMkhxM0JSZEFPWGo3ajJlRXJVc0s0QUNVZzhPQ3MzVVBnM0JadG1GL1R0Y2w3L05ZRlhOakdTMHpyT0t4Q3VibWgyR3VoLzgxZDhyMlhycHFrU3VaUFZDaHNHVTg2Uzd2eE4yU1N6d1dzb24zOUY3anpRVnJ2ZU5kaEpNcUhrdjN6QVNtWGhqTkV4N2ZydFV2bWZFSHJoQ1ZiKzU0d0tFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJzQUFBQUlDQVlBQUFBSWxvUmdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCMlNVUkJWQ2lSdmRDeERRSkJERVRSUHdia3llbGhHN21xeUE2SnNrZ29pQTV1MXdRblVZSWRqK1pwTElCdHI4SEJZRTRUSk1LVUVqQXNReVFzaHlKWlpZUVJXUXRMWklHcE1qcHpaNzZNbEZUNTdPRWFBQndNR2k0NmtEKzJQZXJlaHBIMFlLcG43eHVaVGN1QTRNSzN3Zm04WDdmOUIvYnhITnR6YjdVakFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbW9uaXRvckl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3N2Q3NDNjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21vbml0b3JJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9uaXRvckl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21vbml0b3JJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3N2Q3NDNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTc3ZDc0M2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTc3ZDc0M2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTc3ZDc0M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTc3ZDc0M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vbml0b3JJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzdkNzQzYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NzdkNzQzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL21vbml0b3JJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9uaXRvckl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vbml0b3JJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vbml0b3JJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3N2Q3NDNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9uaXRvckl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3N2Q3NDNjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==