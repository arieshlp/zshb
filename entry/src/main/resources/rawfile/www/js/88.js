(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabArr: [{
        name: '颗粒物排放',
        value: 1
      }, {
        name: 'VOCs工业排放',
        value: 2
      }, {
        name: '氟氧化物排放',
        value: 2
      }],
      tabIndex: 0,
      tabIndexId: null,
      siteId: null,
      siteName: null,
      secondList: []
    };
  },
  mounted: function mounted() {
    this.siteId = this.$route.query.siteId;
    this.siteName = this.$route.query.siteName;
    this.queryFirstMenu();
  },
  methods: {
    //tab
    queryFirstMenu: function queryFirstMenu() {
      var _this = this;

      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_0__["typeList"])({
        siteId: this.siteId
      }).then(function (res) {
        _this.tabArr = res.data;
        _this.tabIndexId = _this.tabArr[0].ID;

        _this.querySecondMenu();
      });
    },
    querySecondMenu: function querySecondMenu(id) {
      var _this2 = this;

      this.tabIndexId = id;
      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_0__["treeList"])({
        siteId: this.siteId,
        typeId: this.tabIndexId
      }).then(function (res) {
        _this2.secondList = res.data;
      });
    },
    changeType: function changeType(index, obj) {
      this.tabIndex = index;
      this.querySecondMenu(obj.ID);
    },
    toLink: function toLink(item) {
      this.$router.push({
        name: 'airPollutionList',
        query: {
          siteId: this.siteId,
          typeName: item.NAME,
          typeId: item.ID,
          typeTabId: this.tabIndexId
        }
      });
    },
    toMap: function toMap() {
      this.$router.push({
        name: 'involveAirPollutionMap',
        query: {
          siteId: this.siteId,
          typeId: this.tabIndexId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true& ***!
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
    [
      _c("van-nav-bar", {
        attrs: { fixed: "", title: "涉气污染源", "left-arrow": "" },
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
                _c(
                  "span",
                  { staticClass: "nav-tag", on: { click: _vm.toMap } },
                  [_vm._v("进入地图")]
                ),
                _c("img", {
                  attrs: { src: __webpack_require__(/*! @/assets/moreMap.png */ "./src/assets/moreMap.png"), width: "18" },
                }),
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
          _c(
            "div",
            { staticClass: "tab-wrapper" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: ["tab-item", i === _vm.tabIndex ? "active" : ""],
                  on: {
                    click: function ($event) {
                      return _vm.changeType(i, item)
                    },
                  },
                },
                [_vm._v(_vm._s(item.NAME) + "(" + _vm._s(item.VALUE) + "家） ")]
              )
            }),
            0
          ),
          _c("div", { staticClass: "quality-info " }, [
            _c("span", { staticClass: "circle" }),
            _vm._v(" " + _vm._s(_vm.siteName) + " "),
          ]),
          _vm._l(_vm.secondList, function (item) {
            return _c(
              "div",
              {
                staticClass: "fs pollution-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.toLink(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "name" }, [
                  _vm._v(" " + _vm._s(item.NAME) + " "),
                  _c("span", { staticClass: "number" }, [
                    _vm._v("（" + _vm._s(item.VALUE) + "个）"),
                  ]),
                ]),
                _vm._m(0, true),
              ]
            )
          }),
          _vm.secondList.length === 0
            ? _c("van-empty", { attrs: { description: "暂无数据" } })
            : _vm._e(),
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
    return _c(
      "div",
      { staticClass: "fs", staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".nav-tag[data-v-4c1d8bd2] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  text-decoration: underline;\n  font-weight: normal;\n}\n.tab-wrapper[data-v-4c1d8bd2] {\n  margin: 10px 0;\n  width: 100%;\n  overflow-x: auto;\n  white-space: nowrap;\n  background: #fff;\n  padding: 0px 0px 10px;\n}\n.tab-wrapper .tab-item[data-v-4c1d8bd2] {\n  display: inline;\n  width: 300px;\n  padding: 0 10px;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-4c1d8bd2] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n.quality-info[data-v-4c1d8bd2] {\n  display: flex;\n  align-items: center;\n  margin: 10px 15px 0px;\n  padding: 8px 13px;\n  border-radius: 4px;\n  background: rgba(255, 141, 26, 0.05);\n  border: 1px solid rgba(255, 141, 26, 0.2);\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.quality-info .circle[data-v-4c1d8bd2] {\n  width: 5px;\n  height: 5px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background: rgba(255, 141, 26, 0.5);\n}\n.pollution-wrapper[data-v-4c1d8bd2] {\n  display: flex;\n  margin: 10px 8px;\n  padding: 15px 18px;\n  font-size: 14px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid white;\n}\n.pollution-wrapper .name[data-v-4c1d8bd2] {\n  color: #447bfc;\n}\n.pollution-wrapper .name .number[data-v-4c1d8bd2] {\n  padding-left: 10px;\n  color: #ff8d1a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("742d3237", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/air_quality.js":
/*!********************************!*\
  !*** ./src/api/air_quality.js ***!
  \********************************/
/*! exports provided: ranking, airCityData, airCityAssessCondition, airCityAssessTendency, airPollutantRatio, airPollutantSiteRatio, airPollutantYear, airPollutantSiteYear, airQualityRanking, airQualitySiteList, airRanking, overproofAlerts, airRankinasdasdag, airQualitySiteData, airQualitySiteDataType, siteComparison, airQualitySiteDataTypeAnother, getAirSite, airQualitySiteCalendar, iaqiCalendar, airYearCalendar, weatherForecast, getDivisionName, yearAirQualityRatio, airSiteQualityRanking, regionQualityRanking, airRegion, pollSize, typeList, treeList, pollList, regionPrediction, airMl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityData", function() { return airCityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessCondition", function() { return airCityAssessCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessTendency", function() { return airCityAssessTendency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantRatio", function() { return airPollutantRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteRatio", function() { return airPollutantSiteRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantYear", function() { return airPollutantYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteYear", function() { return airPollutantSiteYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualityRanking", function() { return airQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteList", function() { return airQualitySiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRanking", function() { return airRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overproofAlerts", function() { return overproofAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRankinasdasdag", function() { return airRankinasdasdag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteData", function() { return airQualitySiteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataType", function() { return airQualitySiteDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteComparison", function() { return siteComparison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataTypeAnother", function() { return airQualitySiteDataTypeAnother; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirSite", function() { return getAirSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteCalendar", function() { return airQualitySiteCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iaqiCalendar", function() { return iaqiCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airYearCalendar", function() { return airYearCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherForecast", function() { return weatherForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionName", function() { return getDivisionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearAirQualityRatio", function() { return yearAirQualityRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airSiteQualityRanking", function() { return airSiteQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionQualityRanking", function() { return regionQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRegion", function() { return airRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollSize", function() { return pollSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeList", function() { return typeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeList", function() { return treeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollList", function() { return pollList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionPrediction", function() { return regionPrediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airMl", function() { return airMl; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl =  false ? undefined : "/air"; //服务器是air类，本地没有加

/*
首页空气质量接口
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/competition/ranking',
    method: 'get',
    params: data
  });
}
/*
空气质量--小时、日数据
 */

function airCityData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityData',
    method: 'get',
    params: data
  });
}
/*
空气质量--考核情况
 */

function airCityAssessCondition(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessCondition',
    method: 'get',
    params: data
  });
}
/*
空气质量--趋势统计
 */

function airCityAssessTendency(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessTendency',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--行政区域的
 */

function airPollutantRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--站点的
 */

function airPollutantSiteRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--区域的
 */

function airPollutantYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--单个站点的
 */

function airPollutantSiteYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--排名
 */

function airQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气质量站点数据-国考/省考列表
 */

function airQualitySiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySitesData',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--近24小时超标告警
 */

function overproofAlerts(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/overproofAlerts',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRankinasdasdag(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点数据
 */

function airQualitySiteData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteData',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-模块
 */

function airQualitySiteDataType(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataType',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-对比数据折线图
 */

function siteComparison(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/siteComparison',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站站点数据 五分钟 同比--折线图和数据列表
 */

function airQualitySiteDataTypeAnother(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataTypeAnother',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点
 */

function getAirSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/getAirSite',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历
 */

function airQualitySiteCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历iaqi
 */

function iaqiCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/iaqiCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点全年日历
 */

function airYearCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airYearCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--天气预报
 */

function weatherForecast(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/weatherForecast',
    method: 'get',
    params: data
  });
}
/*
空气质量--行政区划
 */

function getDivisionName(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/getDivisionName',
    method: 'get' // params: data

  });
}
/*
空气质量--全年空气质量占比
 */

function yearAirQualityRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/yearAirQualityRatio',
    method: 'get',
    params: data
  });
}
/*
空气-站点空气质量排名
 */

function airSiteQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airSiteQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气质量排名
 */

function regionQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/regionQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气描述
 */

function airRegion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airRegion',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源数据
 */

function pollSize(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollSize',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源一级
 */

function typeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/typeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集
 */

function treeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/treeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集站点信息
 */

function pollList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollList',
    method: 'get',
    params: data
  });
}
/*
空气-空气预报
 */

function regionPrediction(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/regionPrediction',
    method: 'get',
    params: data
  });
}
/*
空气-站点周边气象站
 */

function airMl(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airMl',
    method: 'get',
    params: data
  });
}

/***/ }),

/***/ "./src/assets/moreMap.png":
/*!********************************!*\
  !*** ./src/assets/moreMap.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFhSURBVFiF7VZbboQwDJxUcK41Um4F0rIS3CoS2XOB5H4ESoAANm21P8xnHvbErwlw48aHYa5cslVfAwDYPGZL/HJN7v+dgK36GmyeO9teSyRTOS8HBh8eIbAhKB72pXDerZY8DL9guADgF2enFAkgYmqrnsAmJuBdmxUJgjRb5kKSCnEEFjD8Sqy9Vyu0OfMLAmtjKeNeaOsSgSXi9pvX9jrjENIu8ABiB2TLoRtTQSMhStw5hbhdbDkcN+AKrs1EtuUpSBXeH5xVTcJNq6WxadEj6IpQ8jJNpLQEXJP7EwdeK0jqNnRNXu9uKl+vJmCrnsY571POXZN7W/WksanRgif2C9C7NiuiIhXL8mkEIiGanE91MBvfhp7AppNEQzIJfxxvFDB8Th7TS6f9KBKEk4koS8E8BYOxdLEForEmCCRZpgWGi0UNhF/P2R1RDegmYcgpJdUwOH3jwiy4ceOj+Ab5GJxkf+Lb7wAAAABJRU5ErkJggg=="

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

/***/ "./src/views/airHomePage/airPollutionSort/index.vue":
/*!**********************************************************!*\
  !*** ./src/views/airHomePage/airPollutionSort/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4c1d8bd2&scoped=true& */ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& */ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c1d8bd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airPollutionSort/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=style&index=0&id=4c1d8bd2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c1d8bd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4c1d8bd2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionSort/index.vue?vue&type=template&id=4c1d8bd2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c1d8bd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvblNvcnQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJQb2xsdXRpb25Tb3J0L2luZGV4LnZ1ZT9mMTI3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJQb2xsdXRpb25Tb3J0L2luZGV4LnZ1ZT80YjA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJQb2xsdXRpb25Tb3J0L2luZGV4LnZ1ZT80ZjdhIiwid2VicGFjazovLy8uL3NyYy9hcGkvYWlyX3F1YWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tb3JlTWFwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRpb24tdGFiLWJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uU29ydC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvblNvcnQvaW5kZXgudnVlP2VlZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvblNvcnQvaW5kZXgudnVlP2JhNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvblNvcnQvaW5kZXgudnVlP2YzNzEiXSwibmFtZXMiOlsiYmFzZVVybCIsInByb2Nlc3MiLCJyYW5raW5nIiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJhaXJDaXR5RGF0YSIsImFpckNpdHlBc3Nlc3NDb25kaXRpb24iLCJhaXJDaXR5QXNzZXNzVGVuZGVuY3kiLCJhaXJQb2xsdXRhbnRSYXRpbyIsImFpclBvbGx1dGFudFNpdGVSYXRpbyIsImFpclBvbGx1dGFudFllYXIiLCJhaXJQb2xsdXRhbnRTaXRlWWVhciIsImFpclF1YWxpdHlSYW5raW5nIiwiYWlyUXVhbGl0eVNpdGVMaXN0IiwiYWlyUmFua2luZyIsIm92ZXJwcm9vZkFsZXJ0cyIsImFpclJhbmtpbmFzZGFzZGFnIiwiYWlyUXVhbGl0eVNpdGVEYXRhIiwiYWlyUXVhbGl0eVNpdGVEYXRhVHlwZSIsInNpdGVDb21wYXJpc29uIiwiYWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXIiLCJnZXRBaXJTaXRlIiwiYWlyUXVhbGl0eVNpdGVDYWxlbmRhciIsImlhcWlDYWxlbmRhciIsImFpclllYXJDYWxlbmRhciIsIndlYXRoZXJGb3JlY2FzdCIsImdldERpdmlzaW9uTmFtZSIsInllYXJBaXJRdWFsaXR5UmF0aW8iLCJhaXJTaXRlUXVhbGl0eVJhbmtpbmciLCJyZWdpb25RdWFsaXR5UmFua2luZyIsImFpclJlZ2lvbiIsInBvbGxTaXplIiwidHlwZUxpc3QiLCJ0cmVlTGlzdCIsInBvbGxMaXN0IiwicmVnaW9uUHJlZGljdGlvbiIsImFpck1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLENBREE7QUFNQSxpQkFOQTtBQU9BLHNCQVBBO0FBUUEsa0JBUkE7QUFTQSxvQkFUQTtBQVVBO0FBVkE7QUFZQSxHQWZBO0FBZ0JBLFNBaEJBLHFCQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBcEJBO0FBcUJBO0FBQ0E7QUFDQSxrQkFGQSw0QkFFQTtBQUFBOztBQUNBO0FBQ0E7QUFEQSxTQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxP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Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBTLENBQWdCLHNVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICBmaXhlZFxyXG4gICAgICAgIHRpdGxlPVwi5raJ5rCU5rGh5p+T5rqQXCJcclxuICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICA+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjcmlnaHQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtdGFnXCIgQGNsaWNrPVwidG9NYXBcIj7ov5vlhaXlnLDlm748L3NwYW4+XHJcbiAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvbW9yZU1hcC5wbmdcIiB3aWR0aD1cIjE4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIHRhYkFyclwiIDpjbGFzcz1cIlsndGFiLWl0ZW0nLCBpPT09dGFiSW5kZXg/J2FjdGl2ZSc6JyddXCJcclxuICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVR5cGUoaSxpdGVtKVwiPnt7aXRlbS5OQU1FfX0oe3tpdGVtLlZBTFVFfX3lrrbvvIlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVhbGl0eS1pbmZvIFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgIHt7c2l0ZU5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIHNlY29uZExpc3RcIiBjbGFzcz1cImZzIHBvbGx1dGlvbi13cmFwcGVyXCIgQGNsaWNrPVwidG9MaW5rKGl0ZW0pXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgIHt7aXRlbS5OQU1FfX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyXCI+77yIe3tpdGVtLlZBTFVFfX3kuKrvvIk8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpXCI+XHJcbiAgICAgICAgICDmn6XnnItcclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dmFuLWVtcHR5IHYtaWY9XCJzZWNvbmRMaXN0Lmxlbmd0aD09PTBcIiBkZXNjcmlwdGlvbj1cIuaaguaXoOaVsOaNrlwiIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7dHlwZUxpc3QsIHRyZWVMaXN0fSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eS5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0YWJBcnI6IFtcclxuICAgICAgICAgIHtuYW1lOiAn6aKX57KS54mp5o6S5pS+JywgdmFsdWU6IDF9LFxyXG4gICAgICAgICAge25hbWU6ICdWT0Nz5bel5Lia5o6S5pS+JywgdmFsdWU6IDJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmsJ/msKfljJbnianmjpLmlL4nLCB2YWx1ZTogMn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgIHRhYkluZGV4SWQ6IG51bGwsXHJcbiAgICAgICAgc2l0ZUlkOiBudWxsLFxyXG4gICAgICAgIHNpdGVOYW1lOiBudWxsLFxyXG4gICAgICAgIHNlY29uZExpc3Q6IFtdLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5zaXRlSWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zaXRlSWQ7XHJcbiAgICAgIHRoaXMuc2l0ZU5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zaXRlTmFtZTtcclxuICAgICAgdGhpcy5xdWVyeUZpcnN0TWVudSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgLy90YWJcclxuICAgICAgcXVlcnlGaXJzdE1lbnUoKSB7XHJcbiAgICAgICAgdHlwZUxpc3Qoe1xyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRhYkFyciA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgdGhpcy50YWJJbmRleElkID0gdGhpcy50YWJBcnJbMF0uSUQ7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2Vjb25kTWVudSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5U2Vjb25kTWVudShpZCkge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXhJZCA9IGlkO1xyXG4gICAgICAgIHRyZWVMaXN0KHtcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICB0eXBlSWQ6IHRoaXMudGFiSW5kZXhJZFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVR5cGUoaW5kZXgsIG9iaikge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnF1ZXJ5U2Vjb25kTWVudShvYmouSUQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTGluayhpdGVtKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnYWlyUG9sbHV0aW9uTGlzdCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgICAgICB0eXBlTmFtZTogaXRlbS5OQU1FLFxyXG4gICAgICAgICAgICAgIHR5cGVJZDogaXRlbS5JRCxcclxuICAgICAgICAgICAgICB0eXBlVGFiSWQ6IHRoaXMudGFiSW5kZXhJZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgfSxcclxuICAgICAgdG9NYXAoKXtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdpbnZvbHZlQWlyUG9sbHV0aW9uTWFwJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBzaXRlSWQ6IHRoaXMuc2l0ZUlkLFxyXG4gICAgICAgICAgICAgIHR5cGVJZDogdGhpcy50YWJJbmRleElkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAubmF2LXRhZyB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLnRhYi13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHg7XHJcblxyXG4gICAgLnRhYi1pdGVtIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnF1YWxpdHktaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4IDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvbGx1dGlvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHggOHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgY29sb3I6ICM0NDdiZmM7XHJcblxyXG4gICAgICAubnVtYmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZml4ZWQ6IFwiXCIsIHRpdGxlOiBcIua2ieawlOaxoeafk+a6kFwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi10YWdcIiwgb246IHsgY2xpY2s6IF92bS50b01hcCB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6L+b5YWl5Zyw5Zu+XCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvbW9yZU1hcC5wbmdcIiksIHdpZHRoOiBcIjE4XCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYkFyciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcInRhYi1pdGVtXCIsIGkgPT09IF92bS50YWJJbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUeXBlKGksIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5OQU1FKSArIFwiKFwiICsgX3ZtLl9zKGl0ZW0uVkFMVUUpICsgXCLlrrbvvIkgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicXVhbGl0eS1pbmZvIFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zaXRlTmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl9sKF92bS5zZWNvbmRMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnMgcG9sbHV0aW9uLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0xpbmsoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLk5BTUUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLvvIhcIiArIF92bS5fcyhpdGVtLlZBTFVFKSArIFwi5Liq77yJXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLnNlY29uZExpc3QubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFwidmFuLWVtcHR5XCIsIHsgYXR0cnM6IHsgZGVzY3JpcHRpb246IFwi5pqC5peg5pWw5o2uXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiwgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX3YoXCIg5p+l55yLIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCIxMHB4XCIsIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIikgfSxcbiAgICAgICAgfSksXG4gICAgICBdXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2LXRhZ1tkYXRhLXYtNGMxZDhiZDJdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi50YWItd3JhcHBlcltkYXRhLXYtNGMxZDhiZDJdIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHg7XFxufVxcbi50YWItd3JhcHBlciAudGFiLWl0ZW1bZGF0YS12LTRjMWQ4YmQyXSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFiLXdyYXBwZXIgLmFjdGl2ZVtkYXRhLXYtNGMxZDhiZDJdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XFxufVxcbi5xdWFsaXR5LWluZm9bZGF0YS12LTRjMWQ4YmQyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDhweCAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMik7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4ucXVhbGl0eS1pbmZvIC5jaXJjbGVbZGF0YS12LTRjMWQ4YmQyXSB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC41KTtcXG59XFxuLnBvbGx1dGlvbi13cmFwcGVyW2RhdGEtdi00YzFkOGJkMl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMTBweCA4cHg7XFxuICBwYWRkaW5nOiAxNXB4IDE4cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnBvbGx1dGlvbi13cmFwcGVyIC5uYW1lW2RhdGEtdi00YzFkOGJkMl0ge1xcbiAgY29sb3I6ICM0NDdiZmM7XFxufVxcbi5wb2xsdXRpb24td3JhcHBlciAubmFtZSAubnVtYmVyW2RhdGEtdi00YzFkOGJkMl0ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgY29sb3I6ICNmZjhkMWE7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGMxZDhiZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3NDJkMzIzN1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjMWQ4YmQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGMxZDhiZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCIvYWlyXCIgOiBcIi9haXJcIjsgLy/mnI3liqHlmajmmK9haXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu6aaW6aG156m65rCU6LSo6YeP5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9jb21wZXRpdGlvbi9yYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5bCP5pe244CB5pel5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eURhdGEoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5RGF0YScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeiAg+aguOaDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpckNpdHlBc3Nlc3NDb25kaXRpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5QXNzZXNzQ29uZGl0aW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6LaL5Yq/57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3ooYzmlL/ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclBvbGx1dGFudFJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3nq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlUmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUG9sbHV0YW50U2l0ZVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRZZWFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUG9sbHV0YW50WWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOmRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljZXkuKrnq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlWWVhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJQb2xsdXRhbnRTaXRlWWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeaOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTotKjph4/nq5nngrnmlbDmja4t5Zu96ICDL+ecgeiAg+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZXNEYXRhJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJSYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6L+RMjTlsI/ml7botoXmoIflkYroraZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycHJvb2ZBbGVydHMoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvb3ZlcnByb29mQWxlcnRzJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luYXNkYXNkYWcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWNleermeeCueermeeCueaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGEnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nngrnnq5nngrnlsI/ml7bjgIHml6XmlbDmja4t5qih5Z2XXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhVHlwZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGFUeXBlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ54K556uZ54K55bCP5pe244CB5pel5pWw5o2uLeWvueavlOaVsOaNruaKmOe6v+WbvlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVDb21wYXJpc29uKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3NpdGVDb21wYXJpc29uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ56uZ54K55pWw5o2uIOS6lOWIhumSnyDlkIzmr5QtLeaKmOe6v+WbvuWSjOaVsOaNruWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9nZXRBaXJTaXRlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZUNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GaWFxaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlhcWlDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9pYXFpQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnlhajlubTml6XljoZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJZZWFyQ2FsZW5kYXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyWWVhckNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5aSp5rCU6aKE5oqlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2VhdGhlckZvcmVjYXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvd2VhdGhlckZvcmVjYXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6KGM5pS/5Yy65YiSXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25OYW1lKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvZ2V0RGl2aXNpb25OYW1lJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHQvLyBwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcblxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWFqOW5tOepuuawlOi0qOmHj+WNoOavlFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJBaXJRdWFsaXR5UmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS95ZWFyQWlyUXVhbGl0eVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnnqbrmsJTotKjph4/mjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJTaXRlUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJTaXRlUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOi0qOmHj+aOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvcmVnaW9uUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOaPj+i/sFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclJlZ2lvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclJlZ2lvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbFNpemUoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbFNpemUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCuea2ieawlOaxoeafk+a6kOS4gOe6p1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3R5cGVMaXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDlrZDpm4ZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmVlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS90cmVlTGlzdCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5a2Q6ZuG56uZ54K55L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbExpc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbExpc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeepuuawlOmihOaKpVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblByZWRpY3Rpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcmVnaW9uUHJlZGljdGlvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55ZGo6L655rCU6LGh56uZXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyTWwoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyTWwnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZoU1VSQlZGaUY3VlpiYm9Rd0RKeFVjSzQxVW00RjBySVMzQ29TMlhPQjVINEVTb0FBTm0yMVA4eG5IdmJFcndsdzQ4YUhZYTVjc2xWZkF3RFlQR1pML0hKTjd2K2RnSzM2R215ZU85dGVTeVJUT1M4SEJoOGVJYkFoS0I3MnBYRGVyWlk4REw5Z3VBRGdGMmVuRkFrZ1ltcXJuc0FtSnVCZG14VUpnalJiNWtLU0NuRUVGakQ4U3F5OVZ5dTBPZk1MQW10aktlTmVhT3NTZ1NYaTlwdlg5anJqRU5JdThBQmlCMlRMb1J0VFFTTWhTdHc1aGJoZGJEa2NOK0FLcnMxRXR1VXBTQlhlSDV4VlRjSk5xNld4YWRFajZJcFE4akpOcExRRVhKUDdFd2RlSzBqcU5uUk5YdTl1S2wrdkptQ3Juc1k1NzFQT1haTjdXL1drc2FuUmdpZjJDOUM3Tml1aUloWEw4bWtFSWlHYW5FOTFNQnZmaHA3QXBwTkVReklKZnh4dkZEQjhUaDdUUzZmOUtCS0VrNGtvUzhFOEJZT3hkTEVGb3JFbUNDUlpwZ1dHaTBVTmhGL1AyUjFSRGVnbVljZ3BKZFV3T0gzandpeTRjZU9qK0FiNUdKeGtmK0xiN3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU9DQVlBQUFBZlNDM1JBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGUlNVUkJWQ2lSZFpJOVN4eFJGSWFmOTg1c0VDd3NRb1FVRVJGL2dPSlBXSXhhSlVVZ0FUOEtRY1RHYW90RW15MWNVMFVRZjRCSmtYSURra0lDSzlpS2hmYUNJQWlDcUlpZ2habVpONFZaV1dabjN1cHdudk1jT0pjck9qTDF4YStTa05TTXhvQ1IvKzBqeVlkLzQzaGp2NjZyOXF6YXhmaHFNbXZZQXZvb3pnMHczMnJFTzg5aWRUVmRGdDRzRWZMNTBHckVUVlUvZTBoUmVnS0VEdmdUbUM0Ujc1TktOQmdVMGxwT3d2SjN3d3lRRllpOTBXTzJGQkR2ODBUVzc1RDVYUEFKU0x0VThTNEFMd3UyOWpob0Yvc0dzZER0ZVRnQWp5VzNvSUR0UWg2QzhGa0JlQWg0MGxhZjRFY2VHcDJHREhhNjF1R3BGTDB4TklHb20vTkxFeXQrblNvOUF5b2RiQStvbGx6dzRDd2FDSC9XZFlGWXpNRXl5Y0RjM2xkZEI0RFdXcnlOK1FqY2xnZ0FsNUluVzQyNENSMS9GZUJ0M2YxWmt0UnNqUWxHZVhyeFkrT0RGNVg0MjI1ZGQrM1pmK3pYY0RNL1IrU2VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUFRQ0FZQUFBQ3ljdWZJQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRG5TVVJCVkVpSjNaVFJhY1JBREVUZmFOZWtnT3ZoZXNoZndsV1ZqNEFURE5lVUE1YzIwc01WRUlpdGZLd1Z1NEE3VERTdzdFcXNCZzBTSXpZNHZmb2p6c0dZekNjcW9rb1VvTHFvUUdXYUsxWUtMREZ6dTkwSzJzU3k5bWYyU3RSS0JieTk1OGl4Y2luK2E4bHA1V1BoaS9yZzgwM2NqaUYvRzRldTE1K3czby84Y0FUNDkrSUE1TTlHWGp5dDRpWU9Pelp5RjZ6aVBKZTRjZWg2QXppOWVDcGhnVGE1aDF4VEF5NndYY3RNa0g5Q2lFdG9KaERpa3BrSm1kZHlITG9MZ0dWMVNnREw2cFNRY1MwWHB3UXd2cm51MmNzOVlSOW5YYWw4N2QzSVRlRCtQZzVkSCtFdlBORk5OUk5YeTQ0QUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRjMWQ4YmQyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjMWQ4YmQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGMxZDhiZDJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGMxZDhiZDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGMxZDhiZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGMxZDhiZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzFkOGJkMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YzFkOGJkMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvblNvcnQvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGMxZDhiZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGMxZDhiZDImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9