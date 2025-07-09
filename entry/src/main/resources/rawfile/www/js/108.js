(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "offlineDes",
  data: function data() {
    return {
      currentDate: new Date(),
      currentDate2: new Date(),
      startPop: false,
      endPop: false,
      startTime: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-01'),
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM'),
      startTime2: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-01'),
      endTime2: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM'),
      dxtime: '',
      dxList: [],
      chartdata: [],
      updown: 0,
      type: "",
      deviceId: "",
      name: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
    this.deviceId = this.$route.query.deviceId;

    if (!this.basinRef) {
      this.basinRef = echarts__WEBPACK_IMPORTED_MODULE_5__["init"](this.$refs.basinRef);
      setTimeout(function () {
        _this.initChart(_this.basinRef);
      });
    }

    this.loadData();
  },
  methods: {
    onConfirmStartTime: function onConfirmStartTime(value) {
      if (this.currentDate.getTime() > this.currentDate2.getTime()) {
        this.$notify({
          type: "warning",
          message: "开始时间不能大于结束时间！"
        });
        return false;
      }

      if (this.updown == 1) {
        this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
        this.initChart(this.basinRef);
      } else {
        this.startTime2 = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
        this.loadData();
      }

      this.startPop = false;
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      if (this.currentDate.getTime() > this.currentDate2.getTime()) {
        this.$notify({
          type: "warning",
          message: "结束时间不能小于开始时间！"
        });
        return false;
      }

      if (this.updown == 1) {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
        this.initChart(this.basinRef);
      } else {
        this.endTime2 = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
        this.loadData();
      }

      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format('YYYY-MM');
      this.endPop = false;
    },
    startOpen: function startOpen(num) {
      this.updown = num;
      this.startPop = true;
    },
    endOpen: function endOpen(num) {
      this.updown = num;
      this.endPop = true;
    },
    loadData: function loadData() {
      // if(this.type=="废水"){
      // 	this.getWater();
      // }else{
      // 	this.getAir()
      // }
      this.getAirWater();
    },
    getWater: function getWater() {
      var _this2 = this;

      var info = {
        begin: this.startTime2,
        end: this.endTime2,
        deviceId: this.deviceId
      }; // waterDisconnectStat(info).then(res=>{
      // 	this.dxtime = res.data.total;
      // 	this.chartdata = res.data.stat;
      // })

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_6__["waterDisconnect"])(info).then(function (res) {
        _this2.dxList = res.data;
      });
    },
    getAirWater: function getAirWater() {
      var _this3 = this;

      var info = {
        begin: this.startTime2,
        end: this.endTime2,
        sbid: this.$route.query.sbid
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_6__["gasDisconnect"])(info).then(function (res) {
        _this3.dxList = res.data;
      });
    },
    getAir: function getAir() {
      var _this4 = this;

      var info = {
        begin: this.startTime2,
        end: this.endTime2,
        deviceId: this.deviceId
      }; // gasDisconnectStat(info).then(res=>{
      // 	this.dxtime = res.data.total;
      // 	this.chartdata = res.data.stat;
      // })

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_6__["gasDisconnect"])(info).then(function (res) {
        _this4.dxList = res.data;
      });
    },
    initChart: function initChart(chartInstance) {
      var _this5 = this;

      var option = {
        color: ['#06B5F6'],
        legend: {
          show: false
        },
        grid: {
          top: '14%',
          left: '7%',
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
          name: '掉线次数',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#E4E9F2'
            }
          },
          axisLabel: {
            show: false,
            color: '#B0B7C2',
            fontSize: 12
          }
        },
        series: [{
          type: 'bar',
          name: '掉线次数',
          stack: 1,
          barWidth: '18px',
          itemStyle: {
            normal: {
              // color: 'rgba(240, 244, 255, 1)',
              color: 'rgba(68, 123, 252, 1)',
              barBorderRadius: [5, 5, 0, 0]
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              distance: 5,
              formatter: [' {a|{c}}次'].join(','),
              color: '#447BFC',
              rich: {
                a: {
                  color: '#447BFC',
                  align: 'center'
                }
              }
            }
          },
          data: []
        } // {
        //   type: 'bar',
        //   name: '掉线次数',
        //   stack: 1,
        //   itemStyle: {
        //     normal: {
        //       color: 'rgba(68, 123, 252, 1)'
        //     }
        //   },
        //   data: []
        // }
        ]
      };
      var info = {
        begin: this.startTime,
        end: this.endTime,
        // deviceId:this.deviceId,
        sbid: this.$route.query.sbid
      }; // if(this.type=="废水"){
      // 	waterDisconnectStat(info).then(res=>{
      // 		let xArr = [],sArr=[],sArr2=[];
      // 		this.dxtime = res.data.total;
      // 		this.chartdata = res.data.stat;
      // 		if(this.chartdata.length>0){
      // 			this.chartdata.forEach(item=>{
      // 				xArr.push(item.name+'月');
      // 				sArr.push(item.value);
      // 				sArr2.push(0.05);
      // 			})
      // 		}
      // 		option.series[0].data = sArr;
      // 		option.series[1].data = sArr2;
      // 		option.xAxis.data = xArr;
      // 		chartInstance.setOption(option)
      // 	})
      // }else{

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_6__["gasDisconnectStat"])(info).then(function (res) {
        var xArr = [],
            sArr = [],
            sArr2 = [];
        _this5.dxtime = res.data.total;
        _this5.chartdata = res.data.stat;

        if (_this5.chartdata.length > 0) {
          _this5.chartdata.forEach(function (item) {
            xArr.push(item.NAME + '月');
            sArr.push(item.NUM); // sArr2.push(0.01)
          });
        }

        option.series[0].data = sArr; // option.series[1].data = sArr2;

        option.xAxis.data = xArr;
        chartInstance.setOption(option);
      }); // }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticStyle: {
        height: "calc(100vh)",
        "overflow-y": "auto",
        background: "#fff",
      },
    },
    [
      _c("van-nav-bar", {
        attrs: { title: "掉线详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "name" }, [
        _vm._v(" " + _vm._s(_vm.name) + " "),
      ]),
      _c("div", { staticClass: "search-content fs" }, [
        _vm._v(" 数据时间 "),
        _c(
          "div",
          {
            staticClass: "search-item fs",
            on: {
              click: function ($event) {
                return _vm.startOpen(1)
              },
            },
          },
          [
            _c("van-icon", { attrs: { name: "notes-o" } }),
            _vm._v(" " + _vm._s(_vm.startTime) + " "),
            _c("van-icon", { attrs: { name: "arrow-down" } }),
          ],
          1
        ),
        _vm._v(" -- "),
        _c(
          "div",
          {
            staticClass: "search-item fs",
            on: {
              click: function ($event) {
                return _vm.endOpen(1)
              },
            },
          },
          [
            _c("van-icon", { attrs: { name: "notes-o" } }),
            _vm._v(" " + _vm._s(_vm.endTime) + " "),
            _c("van-icon", { attrs: { name: "arrow-down" } }),
          ],
          1
        ),
      ]),
      _c("div", { staticClass: "offline-des fs" }, [
        _vm._v(
          " " + _vm._s(_vm.startTime) + "-" + _vm._s(_vm.endTime) + " 掉线时长 "
        ),
        _c("span", { staticStyle: { color: "rgba(68, 123, 252, 1)" } }, [
          _vm._v(_vm._s(_vm.dxtime) + "小时"),
        ]),
      ]),
      _c("div", {
        ref: "basinRef",
        staticStyle: { height: "200px", width: "90%", margin: "0 auto" },
      }),
      _c("div", { staticClass: "offline-content" }, [
        _c("div", { staticClass: "title" }, [_vm._v(" 掉线时间段详情 ")]),
        _c("div", { staticClass: "search-box" }, [
          _c(
            "div",
            {
              staticClass: "search fs",
              on: {
                click: function ($event) {
                  return _vm.startOpen(2)
                },
              },
            },
            [
              _c("van-icon", { attrs: { name: "notes-o" } }),
              _vm._v(" " + _vm._s(_vm.startTime2) + " "),
              _c("van-icon", { attrs: { name: "arrow-down" } }),
            ],
            1
          ),
          _vm._v(" -- "),
          _c(
            "div",
            {
              staticClass: "search fs",
              on: {
                click: function ($event) {
                  return _vm.endOpen(2)
                },
              },
            },
            [
              _c("van-icon", { attrs: { name: "notes-o" } }),
              _vm._v(" " + _vm._s(_vm.endTime2) + " "),
              _c("van-icon", { attrs: { name: "arrow-down" } }),
            ],
            1
          ),
        ]),
        _c(
          "table",
          { staticClass: "table-wrapper", attrs: { width: "100%" } },
          [
            _vm._m(0),
            _c(
              "tbody",
              _vm._l(_vm.dxList, function (item) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.NAME))]),
                  _c("td", [_vm._v(_vm._s(item.VALUE) + "小时")]),
                ])
              }),
              0
            ),
          ]
        ),
      ]),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.startPop,
            callback: function ($$v) {
              _vm.startPop = $$v
            },
            expression: "startPop",
          },
        },
        [
          _c("van-datetime-picker", {
            attrs: { type: "year-month", title: "选择年月" },
            on: {
              confirm: _vm.onConfirmStartTime,
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
              value: _vm.currentDate2,
              callback: function ($$v) {
                _vm.currentDate2 = $$v
              },
              expression: "currentDate2",
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
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("掉线时间段")]),
        _c("th", [_vm._v("时长")]),
      ]),
    ])
  },
]
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".name[data-v-8155bd44] {\n  margin: 20px 30px 23px;\n  color: #121236;\n  font-weight: bold;\n  font-size: 14px;\n}\n.search-content[data-v-8155bd44] {\n  display: flex;\n  align-items: center;\n  margin: 0 30px 0 40px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-8155bd44] {\n  width: 35%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.offline-des[data-v-8155bd44] {\n  margin: 23px 10px;\n  padding: 10px 23px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  color: #121236;\n  font-size: 14px;\n}\n.offline-content[data-v-8155bd44] {\n  margin: 10px 7px 36px;\n  padding-bottom: 20px;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.offline-content .title[data-v-8155bd44] {\n  padding: 13px 21px;\n  background: rgba(68, 123, 252, 0.06);\n  border-radius: 10px 10px 0 0;\n  font-size: 14px;\n  font-weight: bold;\n  color: #447bfc;\n}\n.offline-content .search-box[data-v-8155bd44] {\n  display: flex;\n  align-items: center;\n  padding: 0 21px 18px;\n  background: rgba(68, 123, 252, 0.06);\n  border-radius: 0 0 10px 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.offline-content .search-box .search[data-v-8155bd44] {\n  width: 30%;\n  padding: 6px;\n  background: white;\n  border-radius: 6px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d2a7a172", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/pollution/detail/offlineDes.vue":
/*!***************************************************!*\
  !*** ./src/views/pollution/detail/offlineDes.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offlineDes.vue?vue&type=template&id=8155bd44&scoped=true& */ "./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true&");
/* harmony import */ var _offlineDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offlineDes.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& */ "./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _offlineDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8155bd44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/offlineDes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./offlineDes.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=style&index=0&id=8155bd44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_style_index_0_id_8155bd44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./offlineDes.vue?vue&type=template&id=8155bd44&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/offlineDes.vue?vue&type=template&id=8155bd44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offlineDes_vue_vue_type_template_id_8155bd44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvb2ZmbGluZURlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvb2ZmbGluZURlcy52dWU/MjYzNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL29mZmxpbmVEZXMudnVlP2M4NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvb2ZmbGluZURlcy52dWU/NmFjZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9vZmZsaW5lRGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9vZmZsaW5lRGVzLnZ1ZT9iOWFhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL29mZmxpbmVEZXMudnVlP2ZiYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvb2ZmbGluZURlcy52dWU/OWU1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RkE7QUFDQTtBQUNBO0FBSUE7QUFDQSxvQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLDZCQURBO0FBRUEsOEJBRkE7QUFHQSxxQkFIQTtBQUlBLG1CQUpBO0FBS0EsMkZBTEE7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QUF5Qix5Q0FBeUMsaUNBQWlDLGlDQUFpQyxvQkFBb0IsR0FBRyx5REFBeUQsZUFBZSxpQkFBaUIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsR0FBRztBQUNwaUQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsNnpCQUE4ZDtBQUNwZjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcvRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUErUyxDQUFnQiwyVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87YmFja2dyb3VuZDogI2ZmZlwiPlxuICAgIDx2YW4tbmF2LWJhclxuICAgICAgICB0aXRsZT1cIuaOiee6v+ivpuaDhVwiXG4gICAgICAgIGxlZnQtYXJyb3dcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXG4gICAgPlxuICAgIDwvdmFuLW5hdi1iYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAge3tuYW1lfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGVudCBmc1wiPlxuICAgICAg5pWw5o2u5pe26Ze0XG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWl0ZW0gZnNcIiBAY2xpY2s9XCJzdGFydE9wZW4oMSlcIj5cbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJub3Rlcy1vXCIvPlxuICAgICAgICB7e3N0YXJ0VGltZX19XG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgLS1cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbSBmc1wiIEBjbGljaz1cImVuZE9wZW4oMSlcIj5cbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJub3Rlcy1vXCIvPlxuICAgICAgICB7e2VuZFRpbWV9fVxuICAgICAgICA8dmFuLWljb24gbmFtZT1cImFycm93LWRvd25cIi8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJvZmZsaW5lLWRlcyBmc1wiPlxuICAgICAge3tzdGFydFRpbWV9fS17e2VuZFRpbWV9fSDmjonnur/ml7bplb9cbiAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKVwiPnt7ZHh0aW1lfX3lsI/ml7Y8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHJlZj1cImJhc2luUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O3dpZHRoOjkwJTttYXJnaW46IDAgYXV0b1wiLz5cblxuICAgIDxkaXYgY2xhc3M9XCJvZmZsaW5lLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICDmjonnur/ml7bpl7TmrrXor6bmg4VcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoIGZzXCIgQGNsaWNrPVwic3RhcnRPcGVuKDIpXCI+XG4gICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJub3Rlcy1vXCIvPlxuICAgICAgICAgIHt7c3RhcnRUaW1lMn19XG4gICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvdy1kb3duXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgLS1cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaCBmc1wiIEBjbGljaz1cImVuZE9wZW4oMilcIj5cbiAgICAgICAgICA8dmFuLWljb24gbmFtZT1cIm5vdGVzLW9cIi8+XG4gICAgICAgICAge3tlbmRUaW1lMn19XG4gICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvdy1kb3duXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgPHRoPuaOiee6v+aXtumXtOautTwvdGg+XG4gICAgICAgICAgPHRoPuaXtumVvzwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiBkeExpc3RcIj5cclxuXHRcdFx0XHRcdFx0PHRkPnt7aXRlbS5OQU1FfX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e3tpdGVtLlZBTFVFfX3lsI/ml7Y8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS3lvIDlp4vml7bpl7QtLT5cbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzdGFydFBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciAgdi1tb2RlbD1cImN1cnJlbnREYXRlXCJcbiAgICAgICAgICB0eXBlPVwieWVhci1tb250aFwiXG4gICAgICAgICAgdGl0bGU9XCLpgInmi6nlubTmnIhcIlxuICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtU3RhcnRUaW1lXCJcbiAgICAgICAgICBAY2FuY2VsPVwic3RhcnRQb3A9ZmFsc2VcIlxuICAgICAgLz5cbiAgICA8L3Zhbi1wb3B1cD5cblxuICAgIDwhLS3nu5PmnZ/ml7bpl7QtLT5cbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJlbmRQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgICAgPHZhbi1kYXRldGltZS1waWNrZXIgIHYtbW9kZWw9XCJjdXJyZW50RGF0ZTJcIlxuICAgICAgICAgIHR5cGU9XCJ5ZWFyLW1vbnRoXCJcbiAgICAgICAgICB0aXRsZT1cIumAieaLqeW5tOaciFwiXG4gICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1FbmRUaW1lXCJcbiAgICAgICAgICBAY2FuY2VsPVwiZW5kUG9wPWZhbHNlXCJcbiAgICAgIC8+XG4gICAgPC92YW4tcG9wdXA+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IHtcblx0XHRcdGdhc0Rpc2Nvbm5lY3RTdGF0LHdhdGVyRGlzY29ubmVjdFN0YXQsXG5cdFx0XHRnYXNEaXNjb25uZWN0LHdhdGVyRGlzY29ubmVjdFxuXHRcdH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIm9mZmxpbmVEZXNcIixcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudERhdGU6bmV3IERhdGUoKSxcblx0XHRcdFx0Y3VycmVudERhdGUyOm5ldyBEYXRlKCksXG4gICAgICAgIHN0YXJ0UG9wOiBmYWxzZSxcbiAgICAgICAgZW5kUG9wOiBmYWxzZSxcclxuXHRcdFx0XHRzdGFydFRpbWU6IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS0wMScpLFxyXG5cdFx0XHRcdGVuZFRpbWU6IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS1NTScpLFxyXG5cdFx0XHRcdHN0YXJ0VGltZTI6IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS0wMScpLFxyXG5cdFx0XHRcdGVuZFRpbWUyOiBkYXlqcyhuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0nKSxcblx0XHRcdFx0ZHh0aW1lOicnLFxuXHRcdFx0XHRkeExpc3Q6W10sXG5cdFx0XHRcdGNoYXJ0ZGF0YTpbXSxcblx0XHRcdFx0dXBkb3duOjAsXG5cdFx0XHRcdHR5cGU6XCJcIixcblx0XHRcdFx0ZGV2aWNlSWQ6XCJcIixcblx0XHRcdFx0bmFtZTpcIlwiLFxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcblx0XHRcdHRoaXMubmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWU7XG5cdFx0XHRcdFx0dGhpcy50eXBlID0gdGhpcy4kcm91dGUucXVlcnkudHlwZTtcblx0XHRcdFx0XHR0aGlzLmRldmljZUlkID0gdGhpcy4kcm91dGUucXVlcnkuZGV2aWNlSWQ7XG4gICAgICBpZiAoIXRoaXMuYmFzaW5SZWYpIHtcbiAgICAgICAgdGhpcy5iYXNpblJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmJhc2luUmVmKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5iYXNpblJlZilcbiAgICAgICAgfSlcbiAgICAgIH1cblx0XHRcdHRoaXMubG9hZERhdGEoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgb25Db25maXJtU3RhcnRUaW1lKHZhbHVlKSB7XHJcblx0XHRcdFx0aWYodGhpcy5jdXJyZW50RGF0ZS5nZXRUaW1lKCk+dGhpcy5jdXJyZW50RGF0ZTIuZ2V0VGltZSgpKXtcclxuXHRcdFx0XHRcdHRoaXMuJG5vdGlmeSh7XHJcblx0XHRcdFx0XHQgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcblx0XHRcdFx0XHQgICAgbWVzc2FnZTogXCLlvIDlp4vml7bpl7TkuI3og73lpKfkuo7nu5PmnZ/ml7bpl7TvvIFcIixcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYodGhpcy51cGRvd249PTEpe1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTScpO1xuXHRcdFx0XHRcdHRoaXMuaW5pdENoYXJ0KHRoaXMuYmFzaW5SZWYpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRUaW1lMiA9IGRheWpzKHZhbHVlKS5mb3JtYXQoJ1lZWVktTU0nKTtcblx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdFx0XHRcdH1cbiAgICAgICAgdGhpcy5zdGFydFBvcCA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIG9uQ29uZmlybUVuZFRpbWUodmFsdWUpIHtcclxuXHRcdFx0XHRpZih0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKT50aGlzLmN1cnJlbnREYXRlMi5nZXRUaW1lKCkpe1xyXG5cdFx0XHRcdFx0dGhpcy4kbm90aWZ5KHtcclxuXHRcdFx0XHRcdCAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuXHRcdFx0XHRcdCAgICBtZXNzYWdlOiBcIue7k+adn+aXtumXtOS4jeiDveWwj+S6juW8gOWni+aXtumXtO+8gVwiLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0aGlzLnVwZG93bj09MSl7XG5cdFx0XHRcdFx0dGhpcy5lbmRUaW1lID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTScpO1xuXHRcdFx0XHRcdHRoaXMuaW5pdENoYXJ0KHRoaXMuYmFzaW5SZWYpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuZW5kVGltZTIgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NJyk7XG5cdFx0XHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHRcdFx0XHR9XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGRheWpzKHZhbHVlKS5mb3JtYXQoJ1lZWVktTU0nKVxuICAgICAgICB0aGlzLmVuZFBvcCA9IGZhbHNlO1xuICAgICAgfSxcblx0XHRcdHN0YXJ0T3BlbihudW0pe1xuXHRcdFx0XHR0aGlzLnVwZG93biA9IG51bTtcblx0XHRcdFx0dGhpcy5zdGFydFBvcCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZW5kT3BlbihudW0pe1xuXHRcdFx0XHR0aGlzLnVwZG93biA9IG51bTtcblx0XHRcdFx0dGhpcy5lbmRQb3AgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGxvYWREYXRhKCl7XG5cdFx0XHRcdC8vIGlmKHRoaXMudHlwZT09XCLlup/msLRcIil7XG5cdFx0XHRcdC8vIFx0dGhpcy5nZXRXYXRlcigpO1xuXHRcdFx0XHQvLyB9ZWxzZXtcblx0XHRcdFx0Ly8gXHR0aGlzLmdldEFpcigpXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHR0aGlzLmdldEFpcldhdGVyKCk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0V2F0ZXIoKXtcblx0XHRcdFx0bGV0IGluZm89e1xuXHRcdFx0XHRcdGJlZ2luOnRoaXMuc3RhcnRUaW1lMixcblx0XHRcdFx0XHRlbmQ6dGhpcy5lbmRUaW1lMixcblx0XHRcdFx0XHRkZXZpY2VJZDp0aGlzLmRldmljZUlkLFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdhdGVyRGlzY29ubmVjdFN0YXQoaW5mbykudGhlbihyZXM9Pntcblx0XHRcdFx0Ly8gXHR0aGlzLmR4dGltZSA9IHJlcy5kYXRhLnRvdGFsO1xuXHRcdFx0XHQvLyBcdHRoaXMuY2hhcnRkYXRhID0gcmVzLmRhdGEuc3RhdDtcblx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0d2F0ZXJEaXNjb25uZWN0KGluZm8pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0dGhpcy5keExpc3QgPSByZXMuZGF0YTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXHJcblx0XHRcdGdldEFpcldhdGVyKCkge1xyXG5cdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0YmVnaW46IHRoaXMuc3RhcnRUaW1lMixcclxuXHRcdFx0XHRcdGVuZDogdGhpcy5lbmRUaW1lMixcclxuXHRcdFx0XHRcdHNiaWQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LnNiaWQsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdhc0Rpc2Nvbm5lY3QoaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5keExpc3QgPSByZXMuZGF0YTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxuXHRcdFx0Z2V0QWlyKCl7XG5cdFx0XHRcdGxldCBpbmZvPXtcblx0XHRcdFx0XHRiZWdpbjp0aGlzLnN0YXJ0VGltZTIsXG5cdFx0XHRcdFx0ZW5kOnRoaXMuZW5kVGltZTIsXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6dGhpcy5kZXZpY2VJZCxcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBnYXNEaXNjb25uZWN0U3RhdChpbmZvKS50aGVuKHJlcz0+e1xuXHRcdFx0XHQvLyBcdHRoaXMuZHh0aW1lID0gcmVzLmRhdGEudG90YWw7XG5cdFx0XHRcdC8vIFx0dGhpcy5jaGFydGRhdGEgPSByZXMuZGF0YS5zdGF0O1xuXHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRnYXNEaXNjb25uZWN0KGluZm8pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR0aGlzLmR4TGlzdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgICBjb2xvcjogWycjMDZCNUY2J10sXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHRvcDogJzE0JScsXG4gICAgICAgICAgICBsZWZ0OiAnNyUnLFxuICAgICAgICAgICAgcmlnaHQ6ICc1JScsXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgbmFtZTogJ+aOiee6v+asoeaVsCcsXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNFNEU5RjInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICBuYW1lOiAn5o6J57q/5qyh5pWwJyxcbiAgICAgICAgICAgICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAgIGJhcldpZHRoOiAnMThweCcsXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICdyZ2JhKDI0MCwgMjQ0LCAyNTUsIDEpJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKDY4LCAxMjMsIDI1MiwgMSknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYXJCb3JkZXJSYWRpdXM6IFs1LCA1LCAwLCAwXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDUsXG4gICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IFtcbiAgICAgICAgICAgICAgICAgICAgJyB7YXx7Y3195qyhJyxcbiAgICAgICAgICAgICAgICAgIF0uam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNDQ3QkZDJyxcbiAgICAgICAgICAgICAgICAgIHJpY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQ0N0JGQycsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgLy8gICBuYW1lOiAn5o6J57q/5qyh5pWwJyxcbiAgICAgICAgICAgIC8vICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAvLyAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgLy8gICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgLy8gICAgICAgY29sb3I6ICdyZ2JhKDY4LCAxMjMsIDI1MiwgMSknXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gICBkYXRhOiBbXVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcblx0XHRcdFx0bGV0IGluZm89e1xuXHRcdFx0XHRcdGJlZ2luOnRoaXMuc3RhcnRUaW1lLFxuXHRcdFx0XHRcdGVuZDp0aGlzLmVuZFRpbWUsXG5cdFx0XHRcdFx0Ly8gZGV2aWNlSWQ6dGhpcy5kZXZpY2VJZCxcclxuXHRcdFx0XHRcdHNiaWQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LnNiaWQsXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIGlmKHRoaXMudHlwZT09XCLlup/msLRcIil7XG5cdFx0XHRcdC8vIFx0d2F0ZXJEaXNjb25uZWN0U3RhdChpbmZvKS50aGVuKHJlcz0+e1xuXHRcdFx0XHQvLyBcdFx0bGV0IHhBcnIgPSBbXSxzQXJyPVtdLHNBcnIyPVtdO1xuXHRcdFx0XHQvLyBcdFx0dGhpcy5keHRpbWUgPSByZXMuZGF0YS50b3RhbDtcblx0XHRcdFx0Ly8gXHRcdHRoaXMuY2hhcnRkYXRhID0gcmVzLmRhdGEuc3RhdDtcblx0XHRcdFx0Ly8gXHRcdGlmKHRoaXMuY2hhcnRkYXRhLmxlbmd0aD4wKXtcblx0XHRcdFx0Ly8gXHRcdFx0dGhpcy5jaGFydGRhdGEuZm9yRWFjaChpdGVtPT57XG5cdFx0XHRcdC8vIFx0XHRcdFx0eEFyci5wdXNoKGl0ZW0ubmFtZSsn5pyIJyk7XG5cdFx0XHRcdC8vIFx0XHRcdFx0c0Fyci5wdXNoKGl0ZW0udmFsdWUpO1xuXHRcdFx0XHQvLyBcdFx0XHRcdHNBcnIyLnB1c2goMC4wNSk7XG5cdFx0XHRcdC8vIFx0XHRcdH0pXG5cdFx0XHRcdC8vIFx0XHR9XG5cdFx0XHRcdC8vIFx0XHRvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xuXHRcdFx0XHQvLyBcdFx0b3B0aW9uLnNlcmllc1sxXS5kYXRhID0gc0FycjI7XG5cdFx0XHRcdC8vIFx0XHRvcHRpb24ueEF4aXMuZGF0YSA9IHhBcnI7XG5cdFx0XHRcdC8vIFx0XHRjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXG5cdFx0XHRcdC8vIFx0fSlcblx0XHRcdFx0Ly8gfWVsc2V7XG5cdFx0XHRcdFx0Z2FzRGlzY29ubmVjdFN0YXQoaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgeEFyciA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdHNBcnIgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRzQXJyMiA9IFtdO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmR4dGltZSA9IHJlcy5kYXRhLnRvdGFsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0ZGF0YSA9IHJlcy5kYXRhLnN0YXQ7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNoYXJ0ZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGFydGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHhBcnIucHVzaChpdGVtLk5BTUUgKyAn5pyIJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRzQXJyLnB1c2goaXRlbS5OVU0pXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBzQXJyMi5wdXNoKDAuMDEpXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xyXG5cdFx0XHRcdFx0XHQvLyBvcHRpb24uc2VyaWVzWzFdLmRhdGEgPSBzQXJyMjtcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xyXG5cdFx0XHRcdFx0XHRjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXHJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQvLyB9XG4gICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAubmFtZSB7XG4gICAgbWFyZ2luOiAyMHB4IDMwcHggMjNweDtcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMzBweCAwIDQwcHg7XG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAuc2VhcmNoLWl0ZW0ge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLm9mZmxpbmUtZGVzIHtcbiAgICBtYXJnaW46IDIzcHggMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5vZmZsaW5lLWNvbnRlbnR7XG4gICAgbWFyZ2luOiAxMHB4IDdweCAzNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAudGl0bGV7XG4gICAgICBwYWRkaW5nOiAxM3B4IDIxcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAyMXB4IDE4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNik7XG4gICAgICBib3JkZXItcmFkaXVzOiAgMCAwIDEwcHggMTBweDtcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIC5zZWFyY2gge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIGhlaWdodDogXCJjYWxjKDEwMHZoKVwiLFxuICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmjonnur/or6bmg4VcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5uYW1lKSArIFwiIFwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtY29udGVudCBmc1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIOaVsOaNruaXtumXtCBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW0gZnNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdGFydE9wZW4oMSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJub3Rlcy1vXCIgfSB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uc3RhcnRUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgLS0gXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlYXJjaC1pdGVtIGZzXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW5kT3BlbigxKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIm5vdGVzLW9cIiB9IH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5lbmRUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9mZmxpbmUtZGVzIGZzXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnN0YXJ0VGltZSkgKyBcIi1cIiArIF92bS5fcyhfdm0uZW5kVGltZSkgKyBcIiDmjonnur/ml7bplb8gXCJcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZHh0aW1lKSArIFwi5bCP5pe2XCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICByZWY6IFwiYmFzaW5SZWZcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvZmZsaW5lLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwiIOaOiee6v+aXtumXtOauteivpuaDhSBcIildKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoIGZzXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3RhcnRPcGVuKDIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIm5vdGVzLW9cIiB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnN0YXJ0VGltZTIpICsgXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIgfSB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgLS0gXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoIGZzXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW5kT3BlbigyKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJub3Rlcy1vXCIgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5lbmRUaW1lMikgKyBcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtd3JhcHBlclwiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZHhMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5OQU1FKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5WQUxVRSkgKyBcIuWwj+aXtlwiKV0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnN0YXJ0UG9wLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnN0YXJ0UG9wID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydFBvcFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1kYXRldGltZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ5ZWFyLW1vbnRoXCIsIHRpdGxlOiBcIumAieaLqeW5tOaciFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtU3RhcnRUaW1lLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRQb3AgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudERhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREYXRlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERhdGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZW5kUG9wLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW5kUG9wXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInllYXItbW9udGhcIiwgdGl0bGU6IFwi6YCJ5oup5bm05pyIXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1FbmRUaW1lLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kUG9wID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnREYXRlMixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUyID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERhdGUyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmjonnur/ml7bpl7TmrrVcIildKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pe26ZW/XCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hbWVbZGF0YS12LTgxNTViZDQ0XSB7XFxuICBtYXJnaW46IDIwcHggMzBweCAyM3B4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNlYXJjaC1jb250ZW50W2RhdGEtdi04MTU1YmQ0NF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMzBweCAwIDQwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uc2VhcmNoLWNvbnRlbnQgLnNlYXJjaC1pdGVtW2RhdGEtdi04MTU1YmQ0NF0ge1xcbiAgd2lkdGg6IDM1JTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG4ub2ZmbGluZS1kZXNbZGF0YS12LTgxNTViZDQ0XSB7XFxuICBtYXJnaW46IDIzcHggMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5vZmZsaW5lLWNvbnRlbnRbZGF0YS12LTgxNTViZDQ0XSB7XFxuICBtYXJnaW46IDEwcHggN3B4IDM2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm9mZmxpbmUtY29udGVudCAudGl0bGVbZGF0YS12LTgxNTViZDQ0XSB7XFxuICBwYWRkaW5nOiAxM3B4IDIxcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XFxuLm9mZmxpbmUtY29udGVudCAuc2VhcmNoLWJveFtkYXRhLXYtODE1NWJkNDRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMXB4IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm9mZmxpbmUtY29udGVudCAuc2VhcmNoLWJveCAuc2VhcmNoW2RhdGEtdi04MTU1YmQ0NF0ge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZsaW5lRGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxNTViZDQ0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDJhN2ExNzJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZsaW5lRGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxNTViZDQ0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2ZmbGluZURlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MTU1YmQ0NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vb2ZmbGluZURlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODE1NWJkNDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb2ZmbGluZURlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL29mZmxpbmVEZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL29mZmxpbmVEZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODE1NWJkNDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4MTU1YmQ0NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MTU1YmQ0NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MTU1YmQ0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MTU1YmQ0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vb2ZmbGluZURlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODE1NWJkNDQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODE1NWJkNDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL29mZmxpbmVEZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZsaW5lRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZsaW5lRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29mZmxpbmVEZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODE1NWJkNDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vZmZsaW5lRGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MTU1YmQ0NCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=