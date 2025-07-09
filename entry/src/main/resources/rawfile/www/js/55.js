(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "waterEnv",
  props: {
    //flag 1国控 2省控
    flag: {
      type: Number,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      countryEchart: null,
      info: {},
      standardRatio: 20,
      //达标进度条占比
      exceedRatio: 20 //超标进度条占比

    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (!_this.countryEchart) {
        _this.countryEchart = echarts__WEBPACK_IMPORTED_MODULE_4__["init"](_this.$refs.countryEchart);
      }

      _this.queryData();
    });
  },
  methods: {
    queryData: function queryData() {
      var _this2 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempD, echartD;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.queryEchartData();

              case 2:
                tempD = _context.sent;
                _this2.info = tempD;
                _this2.standardRatio = Math.round(tempD.db / tempD.sum * 100);
                _this2.exceedRatio = Math.round(tempD.cb / tempD.sum * 100);
                echartD = [{
                  value: tempD.yl,
                  name: "优良水体"
                }, {
                  value: tempD.lw,
                  name: "劣V类"
                }, {
                  value: tempD.sum - (tempD.yl + tempD.lw),
                  name: ""
                }];

                _this2.initChart(_this2.countryEchart, echartD);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    queryEchartData: function queryEchartData() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        Object(_api_api_js__WEBPACK_IMPORTED_MODULE_5__["waterSiteFine"])({
          type: _this3.flag
        }).then(function (res) {
          resolve(res.data);
        });
      });
    },
    onToSiteList: function onToSiteList() {
      if (this.flag === 1) {
        this.$router.push({
          name: "examineSiteList",
          query: {
            type: '国控',
            title: '国控断面'
          }
        });
      } else {
        this.$router.push({
          name: "examineSiteList",
          query: {
            type: '省控'
          }
        });
      }
    },
    initChart: function initChart(chartInstance, data) {
      var option = {
        color: ["#5271FF", "#7948EA", "#F2F7FC"],
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        series: [{
          name: "水环境",
          type: "pie",
          radius: ["40%", "80%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2
          },
          label: {
            show: false,
            position: "center"
          },
          labelLine: {
            show: false
          },
          data: data
        }]
      };
      chartInstance.setOption(option);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./src/api/api.js");

//
//
//
//
//
//
//
//
//
//
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
  name: "waterWarning",
  data: function data() {
    return {
      waringNum: 0,
      earlyNum: 0
    };
  },
  mounted: function mounted() {
    this.loadData();
  },
  methods: {
    onToSiteList: function onToSiteList(flag) {
      this.$router.push({
        name: 'exceedWarning',
        query: {
          flag: flag
        }
      });
      /*switch (flag) {
        case 0:
          this.$router.push({ name: "WaterList" });
          break;
        case 1:
          this.$router.push({ name: "SiteList" });
          break;
      }*/
    },
    loadData: function loadData() {
      var _this = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_1__["warningWater"])().then(function (res) {
        _this.waringNum = res.fifth.length + res.fourth.length + res.thrid.length + res.second.length + res.fisrt.length;
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_1__["warningEarlyWater"])().then(function (res) {
        if (JSON.stringify(res.data) === '{}') {
          _this.earlyNum = 0;
        } else {
          _this.earlyNum = res.data.length;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_components_waterWarning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/components/waterWarning */ "./src/views/waterHomePage/components/waterWarning.vue");
/* harmony import */ var _views_waterHomePage_components_cityWater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/waterHomePage/components/cityWater */ "./src/views/waterHomePage/components/cityWater.vue");
/* harmony import */ var _views_waterHomePage_components_waterEnv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/waterHomePage/components/waterEnv */ "./src/views/waterHomePage/components/waterEnv.vue");
/* harmony import */ var _views_waterHomePage_components_basinWaterStandard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/waterHomePage/components/basinWaterStandard */ "./src/views/waterHomePage/components/basinWaterStandard.vue");
/* harmony import */ var _views_waterHomePage_components_competitionGovern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/waterHomePage/components/competitionGovern */ "./src/views/waterHomePage/components/competitionGovern.vue");
/* harmony import */ var _views_waterHomePage_components_yearRank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/waterHomePage/components/yearRank */ "./src/views/waterHomePage/components/yearRank.vue");
/* harmony import */ var _views_waterHomePage_components_reservoir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/waterHomePage/components/reservoir */ "./src/views/waterHomePage/components/reservoir.vue");
/* harmony import */ var _views_waterHomePage_components_riverDis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/waterHomePage/components/riverDis */ "./src/views/waterHomePage/components/riverDis.vue");
/* harmony import */ var _views_waterHomePage_components_purPlant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/waterHomePage/components/purPlant */ "./src/views/waterHomePage/components/purPlant.vue");
/* harmony import */ var _views_waterHomePage_components_functionZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/waterHomePage/components/functionZone */ "./src/views/waterHomePage/components/functionZone.vue");
/* harmony import */ var _views_waterHomePage_drinkDetail_components_cityDrink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/waterHomePage/drinkDetail/components/cityDrink */ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue");
/* harmony import */ var _views_searchComponents_components_water_waterSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterSource */ "./src/views/searchComponents/components/water/waterSource.vue");
/* harmony import */ var _views_searchComponents_components_water_waterEcology__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterEcology */ "./src/views/searchComponents/components/water/waterEcology.vue");
/* harmony import */ var _views_searchComponents_components_water_waterPollution__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterPollution */ "./src/views/searchComponents/components/water/waterPollution.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    waterWarning: _views_waterHomePage_components_waterWarning__WEBPACK_IMPORTED_MODULE_0__["default"],
    cityWater: _views_waterHomePage_components_cityWater__WEBPACK_IMPORTED_MODULE_1__["default"],
    waterEnv: _views_waterHomePage_components_waterEnv__WEBPACK_IMPORTED_MODULE_2__["default"],
    basinWaterStandard: _views_waterHomePage_components_basinWaterStandard__WEBPACK_IMPORTED_MODULE_3__["default"],
    competitionGovern: _views_waterHomePage_components_competitionGovern__WEBPACK_IMPORTED_MODULE_4__["default"],
    yearRank: _views_waterHomePage_components_yearRank__WEBPACK_IMPORTED_MODULE_5__["default"],
    reservoir: _views_waterHomePage_components_reservoir__WEBPACK_IMPORTED_MODULE_6__["default"],
    riverDis: _views_waterHomePage_components_riverDis__WEBPACK_IMPORTED_MODULE_7__["default"],
    purPlant: _views_waterHomePage_components_purPlant__WEBPACK_IMPORTED_MODULE_8__["default"],
    functionZone: _views_waterHomePage_components_functionZone__WEBPACK_IMPORTED_MODULE_9__["default"],
    cityDrink: _views_waterHomePage_drinkDetail_components_cityDrink__WEBPACK_IMPORTED_MODULE_10__["default"],
    waterSource: _views_searchComponents_components_water_waterSource__WEBPACK_IMPORTED_MODULE_11__["default"],
    waterPollution: _views_searchComponents_components_water_waterPollution__WEBPACK_IMPORTED_MODULE_13__["default"],
    waterEcology: _views_searchComponents_components_water_waterEcology__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      searchObj: null,
      title: ''
    };
  },
  created: function created() {
    console.log(this.$store.state);
    this.searchObj = {
      parameter: localStorage.getItem('division_code')
    };
    this.$store.commit('setSearchObj', this.searchObj);
    this.title = localStorage.getItem('division_code');
  },
  mounted: function mounted() {},
  methods: {
    onMapQuery: function onMapQuery() {
      this.$router.push({
        name: 'waterManageMap'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true& ***!
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
    {
      staticClass: "card-wrapper",
      staticStyle: { "padding-bottom": "7px" },
      on: {
        click: function ($event) {
          return _vm.onToSiteList()
        },
      },
    },
    [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "fs" }, [
          _c("div", { staticClass: "card-title card-title-water" }, [
            _vm._v("水环境"),
          ]),
          _vm.flag === 1
            ? _c("img", {
                staticClass: "site",
                attrs: { src: __webpack_require__(/*! @/assets/国.png */ "./src/assets/国.png") },
              })
            : _vm._e(),
          _vm.flag === 2
            ? _c("img", {
                staticClass: "site",
                attrs: { src: __webpack_require__(/*! @/assets/省.png */ "./src/assets/省.png") },
              })
            : _vm._e(),
        ]),
        _c("span", { staticClass: "time" }, [
          _vm._v("年累计截至" + _vm._s(_vm.info.time)),
        ]),
      ]),
      _c("div", { staticClass: "fs" }, [
        _c("div", {
          ref: "countryEchart",
          staticStyle: { height: "95px", width: "95px", margin: "0 auto" },
        }),
        _c(
          "div",
          {
            staticClass: "echart-legend",
            staticStyle: { "margin-right": "12px" },
          },
          [
            _c("div", { staticClass: "echart-legend-item" }, [
              _c("span", {
                staticClass: "legend-block",
                staticStyle: { "background-color": "#2f87f0" },
              }),
              _c("div", { staticClass: "legend-title" }, [
                _c("span", { staticClass: "legend-percent" }, [
                  _vm._v(_vm._s(_vm.info.ylRate)),
                ]),
                _c("br"),
                _vm._v(" 优良水体 "),
                _c("span", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.info.yl)),
                ]),
                _vm._v("个 "),
              ]),
            ]),
            _c("div", { staticClass: "echart-legend-item" }, [
              _c("span", {
                staticClass: "legend-block",
                staticStyle: { "background-color": "#7948ea" },
              }),
              _c("div", { staticClass: "legend-title" }, [
                _c("span", { staticClass: "legend-percent" }, [
                  _vm._v(_vm._s(_vm.info.lwRate)),
                ]),
                _c("br"),
                _vm._v(" 劣V类 "),
                _c("span", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.info.lw)),
                ]),
                _vm._v("个 "),
              ]),
            ]),
          ]
        ),
      ]),
      _c("div", { staticClass: "progress-des" }, [
        _c(
          "div",
          { style: { width: _vm.standardRatio + "%", maxWidth: "65%" } },
          [
            _vm._v(" 达标 "),
            _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.info.db))]),
            _vm._v("个 "),
          ]
        ),
        _c(
          "div",
          { style: { width: _vm.exceedRatio + "%", minWidth: "18%" } },
          [
            _vm._v(" 超标 "),
            _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.info.cb))]),
            _vm._v("个 "),
          ]
        ),
        _c("div", { staticClass: "progress-summary" }, [
          _vm._v(" 总数 "),
          _c("span", { staticClass: "num" }, [_vm._v(_vm._s(_vm.info.sum))]),
          _vm._v("个 "),
        ]),
      ]),
      _c("div", { staticClass: "progress-wrapper" }, [
        _c("div", {
          staticClass: "standard",
          style: { width: _vm.standardRatio + "%" },
        }),
        _c("div", {
          staticClass: "exceed",
          style: { width: _vm.exceedRatio + "%" },
        }),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true& ***!
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
  return _c("div", { staticClass: "air_warning" }, [
    _c(
      "div",
      {
        staticClass: "air-box",
        on: {
          click: function ($event) {
            return _vm.onToSiteList(0)
          },
        },
      },
      [
        _vm._m(0),
        _c("div", [
          _c(
            "span",
            { staticStyle: { "font-size": "16px", "font-weight": "700" } },
            [_vm._v(_vm._s(_vm.waringNum))]
          ),
          _vm._v("个 "),
          _c("div", [_vm._v(">")]),
        ]),
      ]
    ),
  ])
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.title + "水环境", "left-arrow": "", fixed: "" },
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
          _c("waterWarning"),
          _c("cityWater"),
          _c("cityDrink"),
          _c("basinWaterStandard"),
          _c("competitionGovern"),
          _c("waterSource"),
          _c("waterEcology"),
          _c("waterPollution"),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-71faf18a] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.site[data-v-71faf18a] {\n  width: 20px;\n}\n.time[data-v-71faf18a] {\n  padding-right: 13px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.echart-legend[data-v-71faf18a] {\n  width: 50%;\n  padding: 2px 0;\n  background: #f8fbff;\n  border-radius: 10px;\n}\n.echart-legend .echart-legend-item[data-v-71faf18a] {\n  display: flex;\n  align-items: baseline;\n}\n.echart-legend .echart-legend-item .legend-block[data-v-71faf18a] {\n  display: inline-block;\n  margin: 0 12px 0 28px;\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n}\n.echart-legend .echart-legend-item .legend-title[data-v-71faf18a] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  line-height: 18px;\n}\n.echart-legend .echart-legend-item .legend-title .legend-percent[data-v-71faf18a] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #121236;\n}\n.echart-legend .echart-legend-item .legend-title .num[data-v-71faf18a] {\n  color: #5271ff;\n  font-weight: bold;\n  font-size: 16px;\n}\n.progress-des[data-v-71faf18a] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 0 15px 3px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.progress-des .progress-summary[data-v-71faf18a] {\n  position: absolute;\n  right: 0;\n}\n.progress-des .num[data-v-71faf18a] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #121236;\n}\n.progress-wrapper[data-v-71faf18a] {\n  display: flex;\n  align-items: center;\n  margin: 0 15px;\n  padding: 0 3px;\n  height: 13px;\n  background: #f8fbff;\n  border: 1px solid rgba(82, 113, 255, 0.5);\n  border-radius: 10px;\n}\n.progress-wrapper .standard[data-v-71faf18a],\n.progress-wrapper .exceed[data-v-71faf18a] {\n  height: 9px;\n  border-radius: 10px;\n  margin-right: 5px;\n}\n.progress-wrapper .standard[data-v-71faf18a] {\n  background-color: #89fab6;\n}\n.progress-wrapper .exceed[data-v-71faf18a] {\n  background: #fac289;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/polluter/over_bg.png */ "./src/assets/polluter/over_bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/polluter/warn_bg.png */ "./src/assets/polluter/warn_bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".air_warning[data-v-386c992c] {\n  margin: 5px 0px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n}\n.air_warning .air-box[data-v-386c992c] {\n  margin-left: 10px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, rgba(255, 73, 23, 0.1) 0%, rgba(255, 148, 24, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat right;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3px 20px 3px 10px;\n  width: calc(100% - 34px);\n  color: #fc5223;\n}\n.air_warning .air-box[data-v-386c992c]:last-child {\n  background: linear-gradient(90deg, rgba(255, 148, 24, 0.1) 0%, rgba(255, 148, 24, 0) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat right;\n  color: #ff8d1a;\n  margin-right: 10px;\n  margin-left: 6px;\n}\n.air_warning .air-box > div[data-v-386c992c] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  text-align: center;\n  vertical-align: top;\n}\n.air_warning .air-box > div > img[data-v-386c992c] {\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.air_warning .air-box > div[data-v-386c992c]:last-child {\n  display: flex;\n}\n.air_warning .air-box > div > div[data-v-386c992c] {\n  margin-left: 45%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d9cfc6c6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3f52bea1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: login, login_clue, siteSearch, sysNoticeInfo, noticeRead, lawSearch, neighbourSiteSearch, waterSiteFine, drinkWaterSummary, warningAir, warningWater, warningEarlyWater, waterStation, airQuality, airQualityIAQI, dianWaterQuality, getNoticeList, GISPollutiton, GISWater, GISChannel, getAirSite, userLogin, userSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_clue", function() { return login_clue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteSearch", function() { return siteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sysNoticeInfo", function() { return sysNoticeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noticeRead", function() { return noticeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lawSearch", function() { return lawSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neighbourSiteSearch", function() { return neighbourSiteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterSiteFine", function() { return waterSiteFine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drinkWaterSummary", function() { return drinkWaterSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningAir", function() { return warningAir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningWater", function() { return warningWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningEarlyWater", function() { return warningEarlyWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterStation", function() { return waterStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQuality", function() { return airQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualityIAQI", function() { return airQualityIAQI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dianWaterQuality", function() { return dianWaterQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoticeList", function() { return getNoticeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISPollutiton", function() { return GISPollutiton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISWater", function() { return GISWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISChannel", function() { return GISChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirSite", function() { return getAirSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSubscribe", function() { return userSubscribe; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/api/request.js");


/**
 * 登录
 * */

function login(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/login/user_info',
    method: 'get',
    params: {
      token: token
    }
  });
}
/**
 * 登录--线索
 * */

function login_clue(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/manage/login/token_user_info',
    method: 'get',
    params: {
      token: token
    }
  });
}
/**
 * 站点搜索
 * */

function siteSearch(_ref) {
  var page = _ref.page,
      limit = _ref.limit,
      name = _ref.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/list',
    method: 'get',
    params: {
      page: page,
      limit: limit,
      name: name
    }
  });
}
/**
 * 用户通知
 * */

function sysNoticeInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/sysNoticeInfo',
    method: 'get'
  });
}
/**
 * 用户通知
 * */

function noticeRead(_ref2) {
  var noticeId = _ref2.noticeId;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/sysNoticeInfo/read',
    method: 'get',
    params: {
      noticeId: noticeId
    }
  });
}
/**
 * 法律法规搜索
 * */

function lawSearch(_ref3) {
  var name = _ref3.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/interface/retrieval/document_search',
    method: 'get',
    params: {
      page: 1,
      limit: 1000,
      id: '504,505,506',
      name: name
    }
  });
}
/**
 * 周边站点搜索
 * */

function neighbourSiteSearch(_ref4) {
  var longitude = _ref4.longitude,
      latitude = _ref4.latitude,
      number = _ref4.number;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/surrounding',
    method: 'get',
    params: {
      longitude: longitude,
      latitude: latitude,
      number: number
    }
  });
}
/**
 * 国省考站点优良情况
 * @param type 1国考2省考
 * */

function waterSiteFine(_ref5) {
  var type = _ref5.type;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/' + type,
    method: 'get',
    params: {}
  });
}
/**
 * 饮用水源地概况
 * */

function drinkWaterSummary() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home',
    method: 'get',
    params: {}
  });
}
/**
 * 超标告警-气
 * */

function warningAir() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/airWarning',
    method: 'get',
    params: {}
  });
}
/**
 * 超标告警-水
 * */

function warningWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/DCMRM130/message/abnormalData',
    method: 'get',
    params: {}
  });
}
/**
 * 超标预警-水
 * */

function warningEarlyWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/common/warnings',
    method: 'get',
    params: {}
  });
} // 水站详情

function waterStation(objectid, type, jcfs) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/DCMRM130/lydt/getLydtGk',
    method: 'get',
    params: {
      objectid: objectid,
      type: type,
      jcfs: jcfs
    }
  });
}
/**
 * 全市空气质量
 * */

function airQuality(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/air',
    method: 'get',
    params: data
  });
}
/**
 * 全市空气质量IAQI
 * */

function airQualityIAQI(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/getIndexIaqi',
    method: 'get',
    params: data
  });
}
/**
 * 滇池水质状况
 * */

function dianWaterQuality() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/situation',
    method: 'get',
    params: {}
  });
} //通知公告 - 列表

function getNoticeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/kep_manage/notice/queryListInfo',
    method: 'GET',
    params: data
  });
}
/**
 * GIS-所有污染源
 * */

function GISPollutiton() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/pollut/pollution/getAllSummary',
    method: 'get',
    params: {}
  });
}
/**
 * GIS-所有水
 * */

function GISWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/visualization/all-section',
    method: 'get',
    params: {}
  });
}
/**
 * GIS-查沟渠
 * */

function GISChannel(_ref6) {
  var name = _ref6.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/waterGqxx',
    method: 'get',
    params: {
      dwmc: name,
      gqmc: name
    }
  });
}
/**
 * 大气站点
 * @param type 3全部
 * @param time 密码
 * */

function getAirSite(_ref7) {
  var time = _ref7.time;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: 'http://116.52.6.118:18899/KQZLYZW/home/realdata?type=3&time=' + time,
    method: 'GET',
    data: {}
  });
} // 用户登录

var userLogin = function userLogin(name, pwd) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/system-service-login/user/login',
    method: 'get',
    params: {
      userName: name,
      password: pwd
    }
  });
};
/**
 * 用户组件订阅
 * */

function userSubscribe(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/userSubscribe',
    method: 'get',
    params: {
      Token: token
    }
  });
}

/***/ }),

/***/ "./src/assets/polluter/over_bg.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/over_bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAeCAYAAABZn4LIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEySURBVGiB7ZjNSsNAFIXPnS6KPyC4EQTBrW8guHIjCPWVfQtdiYYWoWnddZ25btQ2pEmKuZmBy/nWszh8HE5mIjgAXRfPUNwfcpZskb4DWr5fQMIyRRhvhN4TEmYJcrikX67qU4IcLumcBV0sjjCtNgAmifK4oru50zgDxf6bnlmI3NsBdMsVodwBtMrVcv4AxXnKMN5ob64oWzuQdrm8gg1mr1xdftxCcJ04izv2NzfwQ2ZB2yxQrgGNF5p+FTeIeM0RxhvN5lZsrRVNuXw4mFGbBV3PL6HxM1cYb9SbGyvebQ2py+UkmPI3C7p6OQVONjnDeGPbXDlma43ZmQVOgjW7m0u5xgQA0FXxCMVZ7jDe+G0uWzsCP3L573YMgpZvd4Bc5Q7ikQCZcBJGIvAKNh7ff9U7bmG6jRkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/warn_bg.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/warn_bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAeCAYAAABZn4LIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAE6SURBVGiB7ZlLSsRAGISrOyM4MiC4EQTBrTcQXLkRhPHKuhlMTuAFBkHEJ6MLX5QLxRiSSQbT6Yaf+tb/oiiKopp2WAE+FGcAj1a5FSWu64DPxTbeeR1DjDV858WHm0bQYZJuc/l5GkGHSVprgfOLMSZuASCLpMcU7cndwBQy9t+0m+u9+rYHHZ1LmduDpebysTgGsBVRizmWJ5dKbV/aakETrCeN5vJudgBgL64UezQnN8tUCQFoNpeQuQGovdB4m+8jw2UKMdaoJ3eklRCKurnUqywUlVrgy2wHb9lVKjHWqCb31WvbBqRqrtNKCMlvLfDmfIK19UVKMdYokzsaK7WBKc11mmCh+dO5+ogMjQcAPuUnADdTi7HGd3Kp1A7Bj7nUvh0Az/v8EMBuaiEW8fqEHA4Pp74dii86jDytjC+1EwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/warningCity.png":
/*!************************************!*\
  !*** ./src/assets/warningCity.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHKSURBVFiF7ZY9bttAEIW/IbWQrACJZP3Y6gKYZ0gKF5HrGDAs6AK5QWDDtaTGXYQcJEiawHBnNSniMzgHCVbUuhASyORSnJXtNNED2Ay5M2/eDB8JW/zvkMcctoNkTMQMwHy5m/0zAnaY9GXhblZjLpKjTUhEmxCQ1I1ysQyhZyMwPz24Qej77tlBMg7NFzQCn/RZVL7+CsoZpIBP+ixCVVATsMOkn5XeIROHTFZjghvZD28vtXkr2gcldaMHA3PMzLe7McD89ODdX3LVGrzqVLV5VQr4ui9Eq0dk4jP78fjTkxHQzB6ARgfZebFMbOKzJyFgB8lY1X11B2ntPTyrUKGUgKDsvrWfT65QYS0B9SvVbJs/0udylKhQSMAOk766+0bHFBYoUaGQgHrxFFingtc2NZYLQKPzw71s/9TMemHTqfn8/Twb9xpRznR8WG79ocBhKdE1yI1AbTrtXlihAnPKEVDNvtkFU7116e/3yyu9DWKzjkBp97U6stsFoDK9vqpMr6/UxTy7Ev5H5DGcx0D9NQSg2UVqdQAkjt+kFycu5LhvVDkFXCRH3tMr0m+O+SQbKfQBABYr+9B7XcfU4k1L+zxgiy0A7gFv64UWPw8wtwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/waterHomePage/components/waterEnv.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/components/waterEnv.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterEnv.vue?vue&type=template&id=71faf18a&scoped=true& */ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true&");
/* harmony import */ var _waterEnv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterEnv.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _waterEnv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71faf18a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/waterEnv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEnv.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=style&index=0&id=71faf18a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_style_index_0_id_71faf18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEnv.vue?vue&type=template&id=71faf18a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterEnv.vue?vue&type=template&id=71faf18a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEnv_vue_vue_type_template_id_71faf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/waterWarning.vue":
/*!*************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterWarning.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterWarning.vue?vue&type=template&id=386c992c&scoped=true& */ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true&");
/* harmony import */ var _waterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterWarning.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _waterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "386c992c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/waterWarning.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterWarning.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=style&index=0&id=386c992c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_style_index_0_id_386c992c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./waterWarning.vue?vue&type=template&id=386c992c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/waterWarning.vue?vue&type=template&id=386c992c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterWarning_vue_vue_type_template_id_386c992c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/index.vue":
/*!*******************************************!*\
  !*** ./src/views/waterHomePage/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=79d78a5e&scoped=true& */ "./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79d78a5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/views/waterHomePage/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=79d78a5e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/index.vue?vue&type=template&id=79d78a5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79d78a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlckVudi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJXYXJuaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJFbnYudnVlP2M5ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlcldhcm5pbmcudnVlPzQ1ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvaW5kZXgudnVlP2U0YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlckVudi52dWU/NGQ1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3dhdGVyV2FybmluZy52dWU/ZGViMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3dhdGVyRW52LnZ1ZT9iMDc5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJXYXJuaW5nLnZ1ZT81YmY2Iiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvb3Zlcl9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci93YXJuX2JnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dhcm5pbmdDaXR5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3dhdGVyRW52LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3dhdGVyRW52LnZ1ZT82MDBmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJFbnYudnVlPzI5MGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlckVudi52dWU/YjJlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3dhdGVyV2FybmluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlcldhcm5pbmcudnVlPzI3ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlcldhcm5pbmcudnVlPzNlOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlcldhcm5pbmcudnVlP2UzYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2luZGV4LnZ1ZT9kYjBiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2luZGV4LnZ1ZT9hZjAyIl0sIm5hbWVzIjpbImxvZ2luIiwidG9rZW4iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwibG9naW5fY2x1ZSIsInNpdGVTZWFyY2giLCJwYWdlIiwibGltaXQiLCJuYW1lIiwic3lzTm90aWNlSW5mbyIsIm5vdGljZVJlYWQiLCJub3RpY2VJZCIsImxhd1NlYXJjaCIsImlkIiwibmVpZ2hib3VyU2l0ZVNlYXJjaCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibnVtYmVyIiwid2F0ZXJTaXRlRmluZSIsInR5cGUiLCJkcmlua1dhdGVyU3VtbWFyeSIsIndhcm5pbmdBaXIiLCJ3YXJuaW5nV2F0ZXIiLCJ3YXJuaW5nRWFybHlXYXRlciIsIndhdGVyU3RhdGlvbiIsIm9iamVjdGlkIiwiamNmcyIsImFpclF1YWxpdHkiLCJkYXRhIiwiYWlyUXVhbGl0eUlBUUkiLCJkaWFuV2F0ZXJRdWFsaXR5IiwiZ2V0Tm90aWNlTGlzdCIsIkdJU1BvbGx1dGl0b24iLCJHSVNXYXRlciIsIkdJU0NoYW5uZWwiLCJkd21jIiwiZ3FtYyIsImdldEFpclNpdGUiLCJ0aW1lIiwidXNlckxvZ2luIiwicHdkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsInVzZXJTdWJzY3JpYmUiLCJUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBO0FBQ0E7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQ0FDQTtBQUhBO0FBRkEsR0FGQTtBQVVBLE1BVkEsa0JBVUE7QUFDQTtBQUNBLHlCQURBO0FBRUEsY0FGQTtBQUdBLHVCQUhBO0FBR0E7QUFDQSxxQkFKQSxDQUlBOztBQUpBO0FBTUEsR0FqQkE7QUFrQkEsU0FsQkEscUJBa0JBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQUxBO0FBTUEsR0F6QkE7QUEwQkE7QUFDQSxhQURBLHVCQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDQSx3QkFEQTs7QUFBQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBTEEsR0FLQSxDQUNBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxpQkFIQSxDQUxBOztBQVVBOztBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0EsS0FaQTtBQWFBLG1CQWJB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Q0FsVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDdweFwiIEBjbGljaz1cIm9uVG9TaXRlTGlzdCgpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiPuawtOeOr+WigzwvZGl2PlxyXG4gICAgICAgIDxpbWcgdi1pZj1cImZsYWc9PT0xXCIgY2xhc3M9XCJzaXRlXCIgc3JjPVwiQC9hc3NldHMv5Zu9LnBuZ1wiLz5cclxuICAgICAgICA8aW1nIHYtaWY9XCJmbGFnPT09MlwiIGNsYXNzPVwic2l0ZVwiIHNyYz1cIkAvYXNzZXRzL+ecgS5wbmdcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj7lubTntK/orqHmiKroh7N7eyBpbmZvLnRpbWUgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgPGRpdiByZWY9XCJjb3VudHJ5RWNoYXJ0XCIgc3R5bGU9XCJoZWlnaHQ6IDk1cHg7IHdpZHRoOiA5NXB4OyBtYXJnaW46IDAgYXV0b1wiLz5cclxuICAgICAgPGRpdiBjbGFzcz1cImVjaGFydC1sZWdlbmRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTJweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlY2hhcnQtbGVnZW5kLWl0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWJsb2NrXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMmY4N2YwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC10aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1wZXJjZW50XCI+e3sgaW5mby55bFJhdGUgfX08L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAg5LyY6Imv5rC05L2TIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaW5mby55bCB9fTwvc3BhblxyXG4gICAgICAgICAgPuS4qlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVjaGFydC1sZWdlbmQtaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsZWdlbmQtYmxvY2tcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM3OTQ4ZWFcIj48L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLXBlcmNlbnRcIj57eyBpbmZvLmx3UmF0ZSB9fTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICDliqNW57G7IDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaW5mby5sdyB9fTwvc3BhblxyXG4gICAgICAgICAgPuS4qlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWRlc1wiPlxyXG4gICAgICA8ZGl2IDpzdHlsZT1cInsgd2lkdGg6IHN0YW5kYXJkUmF0aW8gKyAnJScsIG1heFdpZHRoOiAnNjUlJyB9XCI+XHJcbiAgICAgICAg6L6+5qCHIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaW5mby5kYiB9fTwvc3Bhbj7kuKpcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgOnN0eWxlPVwieyB3aWR0aDogZXhjZWVkUmF0aW8gKyAnJScsIG1pbldpZHRoOiAnMTglJyB9XCI+XHJcbiAgICAgICAg6LaF5qCHIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaW5mby5jYiB9fTwvc3Bhbj7kuKpcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdW1tYXJ5XCI+XHJcbiAgICAgICAg5oC75pWwIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaW5mby5zdW0gfX08L3NwYW4+5LiqXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3Mtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhbmRhcmRcIiA6c3R5bGU9XCJ7IHdpZHRoOiBzdGFuZGFyZFJhdGlvICsgJyUnIH1cIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4Y2VlZFwiIDpzdHlsZT1cInsgd2lkdGg6IGV4Y2VlZFJhdGlvICsgJyUnIH1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbiAgaW1wb3J0IHt3YXRlclNpdGVGaW5lfSBmcm9tIFwiQC9hcGkvYXBpLmpzXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwid2F0ZXJFbnZcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC8vZmxhZyAx5Zu95o6nIDLnnIHmjqdcclxuICAgICAgZmxhZzoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudHJ5RWNoYXJ0OiBudWxsLFxyXG4gICAgICAgIGluZm86IHt9LFxyXG4gICAgICAgIHN0YW5kYXJkUmF0aW86IDIwLCAvL+i+vuagh+i/m+W6puadoeWNoOavlFxyXG4gICAgICAgIGV4Y2VlZFJhdGlvOiAyMCwgLy/otoXmoIfov5vluqbmnaHljaDmr5RcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvdW50cnlFY2hhcnQpIHtcclxuICAgICAgICAgIHRoaXMuY291bnRyeUVjaGFydCA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmNvdW50cnlFY2hhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXJ5RGF0YSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIHF1ZXJ5RGF0YSgpIHtcclxuICAgICAgICBsZXQgdGVtcEQgPSBhd2FpdCB0aGlzLnF1ZXJ5RWNoYXJ0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHRlbXBEO1xyXG4gICAgICAgIHRoaXMuc3RhbmRhcmRSYXRpbyA9IE1hdGgucm91bmQodGVtcEQuZGIgLyB0ZW1wRC5zdW0gKiAxMDApO1xyXG4gICAgICAgIHRoaXMuZXhjZWVkUmF0aW8gPSBNYXRoLnJvdW5kKHRlbXBELmNiIC8gdGVtcEQuc3VtICogMTAwKTtcclxuICAgICAgICBsZXQgZWNoYXJ0RCA9IFtcclxuICAgICAgICAgIHt2YWx1ZTogdGVtcEQueWwsIG5hbWU6IFwi5LyY6Imv5rC05L2TXCJ9LFxyXG4gICAgICAgICAge3ZhbHVlOiB0ZW1wRC5sdywgbmFtZTogXCLliqNW57G7XCJ9LFxyXG4gICAgICAgICAge3ZhbHVlOiB0ZW1wRC5zdW0gLSAodGVtcEQueWwgKyB0ZW1wRC5sdyksIG5hbWU6IFwiXCJ9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5jb3VudHJ5RWNoYXJ0LCBlY2hhcnREKTtcclxuICAgICAgfSxcclxuICAgICAgcXVlcnlFY2hhcnREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICB3YXRlclNpdGVGaW5lKHtcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5mbGFnLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uVG9TaXRlTGlzdCgpIHtcclxuICAgICAgICBpZih0aGlzLmZsYWc9PT0xKXtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJleGFtaW5lU2l0ZUxpc3RcIixcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAn5Zu95o6nJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ+WbveaOp+aWremdoidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImV4YW1pbmVTaXRlTGlzdFwiLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICfnnIHmjqcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICAgIGNvbG9yOiBbXCIjNTI3MUZGXCIsIFwiIzc5NDhFQVwiLCBcIiNGMkY3RkNcIl0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwi5rC0546v5aKDXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcclxuICAgICAgICAgICAgICByYWRpdXM6IFtcIjQwJVwiLCBcIjgwJVwiXSxcclxuICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGxhYmVsTGluZToge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5mcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaXRlIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZWNoYXJ0LWxlZ2VuZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAuZWNoYXJ0LWxlZ2VuZC1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgLmxlZ2VuZC1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMnB4IDAgMjhweDtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxlZ2VuZC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgICAgIC5sZWdlbmQtcGVyY2VudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMTIxMjM2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNzFmZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWRlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxNXB4IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcblxyXG4gICAgLnByb2dyZXNzLXN1bW1hcnkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5udW0ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzEyMTIzNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZiZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgyLCAxMTMsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnN0YW5kYXJkLFxyXG4gICAgLmV4Y2VlZCB7XHJcbiAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgMjUwLCAxODIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5leGNlZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTk0LCAxMzcsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhaXJfd2FybmluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFpci1ib3hcIiBAY2xpY2s9XCJvblRvU2l0ZUxpc3QoMClcIj5cclxuICAgICAgPGRpdj48aW1nIHNyYz1cIkAvYXNzZXRzL3dhcm5pbmdDaXR5LnBuZ1wiLz7otoXmoIflkYroraY8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogNzAwO1wiPnt7d2FyaW5nTnVtfX08L3NwYW4+5LiqXHJcbiAgICAgICAgPGRpdj4+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tPGRpdiBjbGFzcz1cImFpci1ib3hcIiBAY2xpY2s9XCJvblRvU2l0ZUxpc3QoMSlcIj5cclxuICAgICAgPGRpdj48aW1nIHNyYz1cIkAvYXNzZXRzL2Vhcmx5Q2l0eS5wbmdcIi8+6LaF5qCH6aKE6K2mPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IDcwMDtcIj57e2Vhcmx5TnVtfX08L3NwYW4+5LiqXHJcbiAgICAgICAgPGRpdj4+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+LS0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IHdhcm5pbmdXYXRlciwgd2FybmluZ0Vhcmx5V2F0ZXIgfSBmcm9tIFwiQC9hcGkvYXBpXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ3YXRlcldhcm5pbmdcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2FyaW5nTnVtOiAwLFxyXG4gICAgICAgIGVhcmx5TnVtOiAwXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBvblRvU2l0ZUxpc3QoZmxhZykge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnZXhjZWVkV2FybmluZycsIHF1ZXJ5OiB7ZmxhZzogZmxhZ319KVxyXG4gICAgICAgIC8qc3dpdGNoIChmbGFnKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJXYXRlckxpc3RcIiB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJTaXRlTGlzdFwiIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9Ki9cclxuICAgICAgfSxcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgd2FybmluZ1dhdGVyKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLndhcmluZ051bSA9IHJlcy5maWZ0aC5sZW5ndGggKyByZXMuZm91cnRoLmxlbmd0aCArIHJlcy50aHJpZC5sZW5ndGggKyByZXMuc2Vjb25kLmxlbmd0aCArIHJlcy5maXNydC5sZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2FybmluZ0Vhcmx5V2F0ZXIoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShyZXMuZGF0YSk9PT0ne30nKXtcclxuICAgICAgICAgICAgdGhpcy5lYXJseU51bSA9IDA7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5lYXJseU51bSA9IHJlcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5haXJfd2FybmluZyB7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgLmFpci1ib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCA3MywgMjMsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDgsIDI0LCAwKSAxMDAlKSwgdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL292ZXJfYmcucG5nXCIpIG5vLXJlcGVhdCByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4IDIwcHggM3B4IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTIsIDgyLCAzNSwgMSk7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMTQ4LCAyNCwgMC4xKSAwJSwgcmdiYSgyNTUsIDE0OCwgMjQsIDApIDEwMCUpLCB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0ZXIvd2Fybl9iZy5wbmdcIikgbm8tcmVwZWF0IHJpZ2h0O1xyXG4gICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgIH1cclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgPiBpbWcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIH1cclxuXHJcbiAgPiBkaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICB9XHJcbiAgfVxyXG4gIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGUrJ+awtOeOr+WigydcIlxyXG4gICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICBmaXhlZFxyXG4gICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIj5cclxuICAgICAgPCEtLeWRiuitpi0tPlxyXG4gICAgICA8d2F0ZXJXYXJuaW5nLz5cclxuXHJcbiAgICAgIDxjaXR5V2F0ZXIvPlxyXG4gICAgICA8Y2l0eURyaW5rLz5cclxuICAgICAgPCEtLeWbveiAgy0tPlxyXG48IS0tICAgICAgPHdhdGVyRW52IDpmbGFnPVwiMVwiLz4tLT5cclxuICAgICAgPCEtLeecgeiAgy0tPlxyXG48IS0tICAgICAgPHdhdGVyRW52IDpmbGFnPVwiMlwiLz4tLT5cclxuICAgICAgPCEtLea1geWfn+awtOi0qC0tPlxyXG4gICAgICA8YmFzaW5XYXRlclN0YW5kYXJkLz5cclxuICAgICAgPCEtLeWkp+ernui1m+ayu+eQhi0tPlxyXG4gICAgICA8Y29tcGV0aXRpb25Hb3Zlcm4vPlxyXG4gICAgICA8IS0t5bm05bqV5o6S5ZCNLS0+XHJcbjwhLS0gICAgICA8eWVhclJhbmsvPi0tPlxyXG5cclxuICAgICAgPCEtLeawtOi1hOa6kC0tPlxyXG4gICAgICA8d2F0ZXJTb3VyY2UvPlxyXG5cclxuICAgICAgPCEtLeawtOW6k+WIhuW4g+WPiuW6k+WuuS0tPlxyXG48IS0tICAgICAgPHJlc2Vydm9pci8+LS0+XHJcbiAgICAgIDwhLS3msrPmtYHliIbluIPmg4XlhrUtLT5cclxuPCEtLSAgICAgIDxyaXZlckRpcy8+LS0+XHJcbiAgICAgIDwhLS3msLTotKjlh4DljJbljoItLT5cclxuPCEtLSAgICAgIDxwdXJQbGFudC8+LS0+XHJcbiAgICAgIDwhLS3msLTlip/og73ljLrliJLliIYtLT5cclxuPCEtLSAgICAgIDxmdW5jdGlvblpvbmUvPi0tPlxyXG4gICAgICA8IS0t5rC055Sf5oCBLS0+XHJcbiAgICAgIDx3YXRlckVjb2xvZ3kvPlxyXG4gICAgICA8IS0t5raJ5rC05rGh5p+T5rqQLS0+XHJcbiAgICAgIDx3YXRlclBvbGx1dGlvbi8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHdhdGVyV2FybmluZyBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJXYXJuaW5nXCI7XHJcbiAgaW1wb3J0IGNpdHlXYXRlciBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyXCI7XHJcbiAgaW1wb3J0IHdhdGVyRW52IGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlckVudlwiO1xyXG4gIGltcG9ydCBiYXNpbldhdGVyU3RhbmRhcmQgZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZFwiO1xyXG4gIGltcG9ydCBjb21wZXRpdGlvbkdvdmVybiBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY29tcGV0aXRpb25Hb3Zlcm5cIjtcclxuICBpbXBvcnQgeWVhclJhbmsgZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3llYXJSYW5rXCI7XHJcbiAgaW1wb3J0IHJlc2Vydm9pciBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyXCI7XHJcbiAgaW1wb3J0IHJpdmVyRGlzIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpc1wiO1xyXG4gIGltcG9ydCBwdXJQbGFudCBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcHVyUGxhbnRcIjtcclxuICBpbXBvcnQgZnVuY3Rpb25ab25lIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9mdW5jdGlvblpvbmVcIjtcclxuICBpbXBvcnQgY2l0eURyaW5rIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvY29tcG9uZW50cy9jaXR5RHJpbmtcIjtcclxuICBpbXBvcnQgd2F0ZXJTb3VyY2UgZnJvbSBcIkAvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlXCI7XHJcbiAgaW1wb3J0IHdhdGVyRWNvbG9neSBmcm9tIFwiQC92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJFY29sb2d5XCI7XHJcbiAgaW1wb3J0IHdhdGVyUG9sbHV0aW9uIGZyb20gXCJAL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvblwiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICB3YXRlcldhcm5pbmcsXHJcbiAgICAgIGNpdHlXYXRlcixcclxuICAgICAgd2F0ZXJFbnYsXHJcbiAgICAgIGJhc2luV2F0ZXJTdGFuZGFyZCxcclxuICAgICAgY29tcGV0aXRpb25Hb3Zlcm4sXHJcbiAgICAgIHllYXJSYW5rLFxyXG4gICAgICByZXNlcnZvaXIsXHJcbiAgICAgIHJpdmVyRGlzLFxyXG4gICAgICBwdXJQbGFudCxcclxuICAgICAgZnVuY3Rpb25ab25lLFxyXG4gICAgICBjaXR5RHJpbmssXHJcbiAgICAgIHdhdGVyU291cmNlLFxyXG4gICAgICB3YXRlclBvbGx1dGlvbixcclxuICAgICAgd2F0ZXJFY29sb2d5XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hPYmo6IG51bGwsXHJcbiAgICAgICAgdGl0bGU6ICcnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5zdGF0ZSlcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB7XHJcbiAgICAgICAgcGFyYW1ldGVyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGl2aXNpb25fY29kZScpXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0U2VhcmNoT2JqJywgdGhpcy5zZWFyY2hPYmopO1xyXG4gICAgICB0aGlzLnRpdGxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpdmlzaW9uX2NvZGUnKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCl7XHJcblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBvbk1hcFF1ZXJ5KCl7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICd3YXRlck1hbmFnZU1hcCd9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjdweFwiIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0ub25Ub1NpdGVMaXN0KClcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5rC0546v5aKDXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5mbGFnID09PSAxXG4gICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv5Zu9LnBuZ1wiKSB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uZmxhZyA9PT0gMlxuICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+ecgS5wbmdcIikgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuW5tOe0r+iuoeaIquiHs1wiICsgX3ZtLl9zKF92bS5pbmZvLnRpbWUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICByZWY6IFwiY291bnRyeUVjaGFydFwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5NXB4XCIsIHdpZHRoOiBcIjk1cHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVjaGFydC1sZWdlbmRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiMTJweFwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVjaGFydC1sZWdlbmQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZWdlbmQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCIjMmY4N2YwXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVnZW5kLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZ2VuZC1wZXJjZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby55bFJhdGUpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiDkvJjoia/msLTkvZMgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8ueWwpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlY2hhcnQtbGVnZW5kLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGVnZW5kLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzc5NDhlYVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZ2VuZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsZWdlbmQtcGVyY2VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8ubHdSYXRlKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5YqjVuexuyBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5sdykpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuS4qiBcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLWRlc1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiBfdm0uc3RhbmRhcmRSYXRpbyArIFwiJVwiLCBtYXhXaWR0aDogXCI2NSVcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOi+vuaghyBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5kYikpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiBfdm0uZXhjZWVkUmF0aW8gKyBcIiVcIiwgbWluV2lkdGg6IFwiMTglXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDotoXmoIcgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uY2IpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3Mtc3VtbWFyeVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIg5oC75pWwIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zdW0pKV0pLFxuICAgICAgICAgIF92bS5fdihcIuS4qiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0uc3RhbmRhcmRSYXRpbyArIFwiJVwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXhjZWVkXCIsXG4gICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF92bS5leGNlZWRSYXRpbyArIFwiJVwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXJfd2FybmluZ1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFpci1ib3hcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5vblRvU2l0ZUxpc3QoMClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNnB4XCIsIFwiZm9udC13ZWlnaHRcIjogXCI3MDBcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ud2FyaW5nTnVtKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCI+XCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy93YXJuaW5nQ2l0eS5wbmdcIikgfSB9KSxcbiAgICAgIF92bS5fdihcIui2heagh+WRiuitplwiKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnRpdGxlICsgXCLmsLTnjq/looNcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIsIGZpeGVkOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ3YXRlcldhcm5pbmdcIiksXG4gICAgICAgICAgX2MoXCJjaXR5V2F0ZXJcIiksXG4gICAgICAgICAgX2MoXCJjaXR5RHJpbmtcIiksXG4gICAgICAgICAgX2MoXCJiYXNpbldhdGVyU3RhbmRhcmRcIiksXG4gICAgICAgICAgX2MoXCJjb21wZXRpdGlvbkdvdmVyblwiKSxcbiAgICAgICAgICBfYyhcIndhdGVyU291cmNlXCIpLFxuICAgICAgICAgIF9jKFwid2F0ZXJFY29sb2d5XCIpLFxuICAgICAgICAgIF9jKFwid2F0ZXJQb2xsdXRpb25cIiksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZzW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaXRlW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi50aW1lW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgcGFkZGluZy1yaWdodDogMTNweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5lY2hhcnQtbGVnZW5kW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDJweCAwO1xcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5lY2hhcnQtbGVnZW5kIC5lY2hhcnQtbGVnZW5kLWl0ZW1bZGF0YS12LTcxZmFmMThhXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uZWNoYXJ0LWxlZ2VuZCAuZWNoYXJ0LWxlZ2VuZC1pdGVtIC5sZWdlbmQtYmxvY2tbZGF0YS12LTcxZmFmMThhXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgMTJweCAwIDI4cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5lY2hhcnQtbGVnZW5kIC5lY2hhcnQtbGVnZW5kLWl0ZW0gLmxlZ2VuZC10aXRsZVtkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLmVjaGFydC1sZWdlbmQgLmVjaGFydC1sZWdlbmQtaXRlbSAubGVnZW5kLXRpdGxlIC5sZWdlbmQtcGVyY2VudFtkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5lY2hhcnQtbGVnZW5kIC5lY2hhcnQtbGVnZW5kLWl0ZW0gLmxlZ2VuZC10aXRsZSAubnVtW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgY29sb3I6ICM1MjcxZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnByb2dyZXNzLWRlc1tkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDE1cHggM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLnByb2dyZXNzLWRlcyAucHJvZ3Jlc3Mtc3VtbWFyeVtkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucHJvZ3Jlc3MtZGVzIC5udW1bZGF0YS12LTcxZmFmMThhXSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4ucHJvZ3Jlc3Mtd3JhcHBlcltkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGhlaWdodDogMTNweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgyLCAxMTMsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wcm9ncmVzcy13cmFwcGVyIC5zdGFuZGFyZFtkYXRhLXYtNzFmYWYxOGFdLFxcbi5wcm9ncmVzcy13cmFwcGVyIC5leGNlZWRbZGF0YS12LTcxZmFmMThhXSB7XFxuICBoZWlnaHQ6IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLnByb2dyZXNzLXdyYXBwZXIgLnN0YW5kYXJkW2RhdGEtdi03MWZhZjE4YV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZmFiNjtcXG59XFxuLnByb2dyZXNzLXdyYXBwZXIgLmV4Y2VlZFtkYXRhLXYtNzFmYWYxOGFdIHtcXG4gIGJhY2tncm91bmQ6ICNmYWMyODk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL292ZXJfYmcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3dhcm5fYmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFpcl93YXJuaW5nW2RhdGEtdi0zODZjOTkyY10ge1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5haXJfd2FybmluZyAuYWlyLWJveFtkYXRhLXYtMzg2Yzk5MmNdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgNzMsIDIzLCAwLjEpIDAlLCByZ2JhKDI1NSwgMTQ4LCAyNCwgMCkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggMjBweCAzcHggMTBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcXG4gIGNvbG9yOiAjZmM1MjIzO1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3hbZGF0YS12LTM4NmM5OTJjXTpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDE0OCwgMjQsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDgsIDI0LCAwKSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgcmlnaHQ7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcbi5haXJfd2FybmluZyAuYWlyLWJveCA+IGRpdltkYXRhLXYtMzg2Yzk5MmNdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5haXJfd2FybmluZyAuYWlyLWJveCA+IGRpdiA+IGltZ1tkYXRhLXYtMzg2Yzk5MmNdIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG4uYWlyX3dhcm5pbmcgLmFpci1ib3ggPiBkaXZbZGF0YS12LTM4NmM5OTJjXTpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5haXJfd2FybmluZyAuYWlyLWJveCA+IGRpdiA+IGRpdltkYXRhLXYtMzg2Yzk5MmNdIHtcXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFbnYudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzFmYWYxOGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJkOWNmYzZjNlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyRW52LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZmFmMThhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFbnYudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzFmYWYxOGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4NmM5OTJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2Y1MmJlYTFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg2Yzk5MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg2Yzk5MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog55m75b2VXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvbG9naW4vdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog55m75b2VLS3nur/ntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luX2NsdWUodG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvbWFuYWdlL2xvZ2luL3Rva2VuX3VzZXJfaW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOermeeCueaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZVNlYXJjaCh7cGFnZSwgbGltaXQsIG5hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog55So5oi36YCa55+lXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzeXNOb3RpY2VJbmZvKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGljZVJlYWQoe25vdGljZUlkfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mby9yZWFkJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbm90aWNlSWQ6IG5vdGljZUlkXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOazleW+i+azleinhOaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF3U2VhcmNoKHsgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvaW50ZXJmYWNlL3JldHJpZXZhbC9kb2N1bWVudF9zZWFyY2gnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBsaW1pdDogMTAwMCxcclxuICAgICAgaWQ6ICc1MDQsNTA1LDUwNicsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5ZGo6L6556uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWlnaGJvdXJTaXRlU2VhcmNoKHtsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJ9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3N1cnJvdW5kaW5nJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgbnVtYmVyXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWbveecgeiAg+ermeeCueS8mOiJr+aDheWGtVxyXG4gKiBAcGFyYW0gdHlwZSAx5Zu96ICDMuecgeiAg1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJTaXRlRmluZSh7dHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvJyt0eXBlLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDppa7nlKjmsLTmupDlnLDmpoLlhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyaW5rV2F0ZXJTdW1tYXJ5KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msJRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdBaXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2Fpcldhcm5pbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIflkYroraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL0RDTVJNMTMwL21lc3NhZ2UvYWJub3JtYWxEYXRhJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH6aKE6K2mLeawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0Vhcmx5V2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL2NvbW1vbi93YXJuaW5ncycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g5rC056uZ6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclN0YXRpb24ob2JqZWN0aWQsIHR5cGUsIGpjZnMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbHlkdC9nZXRMeWR0R2snLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBvYmplY3RpZCwgdHlwZSwgamNmcyxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOWFqOW4guepuuawlOi0qOmHj0lBUUlcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlJQVFJKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvZ2V0SW5kZXhJYXFpJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmu4fmsaDmsLTotKjnirblhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYW5XYXRlclF1YWxpdHkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3NpdHVhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy/pgJrnn6XlhazlkYogLSDliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGljZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9rZXBfbWFuYWdlL25vdGljZS9xdWVyeUxpc3RJbmZvJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieaxoeafk+a6kFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTUG9sbHV0aXRvbigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi9nZXRBbGxTdW1tYXJ5JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3Zpc3VhbGl6YXRpb24vYWxsLXNlY3Rpb24nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5p+l5rKf5rigXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNDaGFubmVsKHtuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci93YXRlckdxeHgnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkd21jOiBuYW1lLFxyXG4gICAgICBncW1jOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+awlOermeeCuVxyXG4gKiBAcGFyYW0gdHlwZSAz5YWo6YOoXHJcbiAqIEBwYXJhbSB0aW1lIOWvhueggVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZSh7dGltZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9yZWFsZGF0YT90eXBlPTMmdGltZT0nICsgdGltZSxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOeUqOaIt+eZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKG5hbWUsIHB3ZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9zeXN0ZW0tc2VydmljZS1sb2dpbi91c2VyL2xvZ2luJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwd2RcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+e7hOS7tuiuoumYhVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlclN1YnNjcmliZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS91c2VyU3Vic2NyaWJlJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgVG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUFlQ0FZQUFBQlpuNExJQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRXlTVVJCVkdpQjdaak5Tc05BRklYUG5TNktQeUM0RVFUQnJXOGd1SElqQ1BXVmZRdGRpWVlXb1duZGRaMjVidFEycEVtS3VabUJ5L25Xc3poOEhFNW1JamdBWFJmUFVOd2ZjcFpza2I0RFdyNWZRTUl5UlJodmhONFRFbVlKY3Jpa1g2N3FVNEljTHVtY0JWMHNqakN0TmdBbWlmSzRvcnU1MHpnRHhmNmJubG1JM05zQmRNc1ZvZHdCdE1yVmN2NEF4WG5LTU41b2I2NG9XenVRZHJtOGdnMW1yMXhkZnR4Q2NKMDRpenYyTnpmd1EyWkIyeXhRcmdHTkY1cCtGVGVJZU0wUnhodk41bFpzclJWTnVYdzRtRkdiQlYzUEw2SHhNMWNZYjlTYkd5dmViUTJweStVa21QSTNDN3A2T1FWT05qbkRlR1BiWERsbWE0M1ptUVZPZ2pXN20wdTV4Z1FBMEZYeENNVlo3akRlK0cwdVd6c0NQM0w1NzNZTWdwWnZkNEJjNVE3aWtRQ1pjQkpHSXZBS05oN2ZmOVU3Ym1HNmpSa0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUFlQ0FZQUFBQlpuNExJQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRTZTVVJCVkdpQjdabExTc1JBR0lTck95TTRNaUM0RVFUQnJUY1FYTGtSaFBIS3VobE1UdUFGQmtIRUo2TUxYNVFMeFJpU1NRYlQ2WWFmK3RiL29paUtvcHAyV0FFK0ZHY0FqMWE1RlNXdTY0RFB4VGJlZVIxRGpEVjg1OFdIbTBiUVlaSnVjL2w1R2tHSFNWcHJnZk9MTVNadUFTQ0xwTWNVN2NuZHdCUXk5dCswbSt1OStyWUhIWjFMbWR1RHBlYnlzVGdHc0JWUml6bVdKNWRLYlYvYWFrRVRyQ2VONXZKdWRnQmdMNjRVZXpRbk44dFVDUUZvTnBlUXVRR292ZEI0bSs4ancyVUtNZGFvSjNla2xSQ0t1cm5VcXl3VWxWcmd5MndIYjlsVktqSFdxQ2IzMVd2YkJxUnFydE5LQ01sdkxmRG1mSUsxOVVWS01kWW9renNhSzdXQktjMTFtbUNoK2RPNStvZ01qUWNBUHVVbkFEZFRpN0hHZDNLcDFBN0JqN25VdmgwQXovdjhFTUJ1YWlFVzhmcUVIQTRQcDc0ZGlpODZqRHl0akMrMUV3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBSEtTVVJCVkZpRjdaWTlidHRBRUlXL0liV1FyQUNKWlAzWTZnS1laMGdLRjVIckdEQXM2QUs1UVdERHRhVEdYWVFjSkVpYXdIQm5OU25pTXpnSENWYlV1aEFTeU9SU25KWHROTkVEMkF5NU0yL2VEQjhKVy96dmtNY2N0b05rVE1RTXdIeTVtLzB6QW5hWTlHWGhibFpqTHBLalRVaEVteENRMUkxeXNReWhaeU13UHoyNFFlajc3dGxCTWc3TkZ6UUNuL1JaVkw3K0Nzb1pwSUJQK2l4Q1ZWQVRzTU9rbjVYZUlST0hURlpqZ2h2WkQyOHZ0WGtyMmdjbGRhTUhBM1BNekxlN01jRDg5T0RkWDNMVkdyenFWTFY1VlFyNHVpOUVxMGRrNGpQNzhmalRreEhRekI2QVJnZlplYkZNYk9Lekp5RmdCOGxZMVgxMUIybnRQVHlyVUtHVWdLRHN2cldmVDY1UVlTMEI5U3ZWYkpzLzB1ZHlsS2hRU01BT2s3NjYrMGJIRkJZb1VhR1FnSHJ4RkZpbmd0YzJOWllMUUtQenc3MXMvOVRNZW1IVHFmbjgvVHdiOXhwUnpuUjhXRzc5b2NCaEtkRTF5STFBYlRydFhsaWhBblBLRVZETnZ0a0ZVNzExNmUvM3l5dTlEV0t6amtCcDk3VTZzdHNGb0RLOXZxcE1yNi9VeFR5N0V2NUg1REdjeDBEOU5RU2cyVVZxZFFBa2p0K2tGeWN1NUxodlZEa0ZYQ1JIM3RNcjBtK08rU1FiS2ZRQkFCWXIrOUI3WGNmVTRrMUwrenhnaXkwQTdnRnY2NFVXUHc4d3R3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3dhdGVyRW52LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWZhZjE4YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YXRlckVudi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dhdGVyRW52LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi93YXRlckVudi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MWZhZjE4YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjcxZmFmMThhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcxZmFmMThhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcxZmFmMThhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcxZmFmMThhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93YXRlckVudi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzFmYWYxOGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzFmYWYxOGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvd2F0ZXJFbnYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlckVudi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFbnYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFbnYudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzFmYWYxOGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlckVudi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzFmYWYxOGEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3dhdGVyV2FybmluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg2Yzk5MmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg2Yzk5MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzODZjOTkyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczODZjOTkyYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczODZjOTkyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczODZjOTkyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zODZjOTkyYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczODZjOTkyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy93YXRlcldhcm5pbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyV2FybmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg2Yzk5MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcldhcm5pbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4NmM5OTJjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzlkNzhhNWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc5ZDc4YTVlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5ZDc4YTVlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5ZDc4YTVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5ZDc4YTVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzlkNzhhNWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzlkNzhhNWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5ZDc4YTVlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==