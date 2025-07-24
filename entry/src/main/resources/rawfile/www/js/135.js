(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  data: function data() {
    return {
      basin: "",
      area: "",
      total: 0,
      list: [],
      time: "",
      currentDate: new Date(),
      showPickerMonth: false,
      tabArr: ['市级', '县级', '千吨万人', '乡镇级'],
      tabName: '市级'
    };
  },
  mounted: function mounted() {
    var query = this.$route.query.name;
    this.total = this.$route.query.total;

    if (query.indexOf('流域') > -1) {
      this.basin = query;
      this.area = '';
    } else {
      this.basin = '';
      this.area = query;
    }

    this.time = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM'); //默认当前月份

    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var info = {
        basin: this.basin,
        div: this.area,
        type: this.tabName,
        time: this.time
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_1__["reservoirList"])(info).then(function (res) {
        _this.list = res.data;
      });
    },
    onChangeTab: function onChangeTab(name) {
      this.tabName = name;
      this.loadData();
    },
    onConfirmMonth: function onConfirmMonth(value) {
      this.showPickerMonth = false;
      this.time = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value).format("YYYY-MM");
      this.loadData();
    },
    onClickRight: function onClickRight() {
      this.$router.push({
        name: "resPlantMap",
        query: {
          title: "查看地图",
          longitude: "102.82940170108701",
          latitude: "24.888009177961806"
        }
      });
    },
    onDetail: function onDetail(item) {// this.$router.push({
      //   name: "reservoirDetail",
      // });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "水库", fixed: "", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
          "click-right": _vm.onClickRight,
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _c(
            "van-row",
            { staticClass: "search-wrapper" },
            [
              _c(
                "van-col",
                {
                  staticStyle: { "font-size": "18px", "font-weight": "bold" },
                  attrs: { span: "17" },
                },
                [
                  _vm._v(
                    " " + _vm._s(_vm.area) + _vm._s(_vm.basin) + "水库情况 "
                  ),
                ]
              ),
              _c(
                "van-col",
                { attrs: { span: "7" } },
                [
                  _c("van-field", {
                    attrs: {
                      readonly: "",
                      clickable: "",
                      value: _vm.time,
                      "input-align": "right",
                      "right-icon": "arrow-down",
                    },
                    on: {
                      click: function ($event) {
                        _vm.showPickerMonth = true
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
            "van-popup",
            {
              attrs: { position: "bottom" },
              model: {
                value: _vm.showPickerMonth,
                callback: function ($$v) {
                  _vm.showPickerMonth = $$v
                },
                expression: "showPickerMonth",
              },
            },
            [
              _c("van-datetime-picker", {
                attrs: { type: "year-month", color: "#1989fa" },
                on: { confirm: _vm.onConfirmMonth },
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
          _c("div", { staticClass: "res-sum-wrapper fs" }, [
            _c(
              "span",
              {
                staticStyle: {
                  color: "rgba(84, 117, 248, 1)",
                  "font-weight": "bold",
                },
              },
              [_vm._v("昆明市(补水)水库")]
            ),
            _c("div", { staticClass: "res-sum-box" }, [
              _c(
                "span",
                { staticStyle: { "font-size": "18px", "font-weight": "bold" } },
                [_vm._v(_vm._s(_vm.total))]
              ),
              _vm._v(" 个 "),
            ]),
          ]),
          _c(
            "div",
            { staticClass: "fs res-tab-wrapper" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: _vm.tabName === item ? "active" : "",
                  on: {
                    click: function ($event) {
                      return _vm.onChangeTab(item)
                    },
                  },
                },
                [_vm._v(_vm._s(item))]
              )
            }),
            0
          ),
          _vm._l(_vm.list, function (item) {
            return _c(
              "div",
              {
                staticClass: "around-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.onDetail(item)
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "fs",
                    staticStyle: {
                      "border-bottom": "1px solid rgba(37, 57, 111, 0.05)",
                    },
                  },
                  [
                    _c("div", { staticClass: "name" }, [
                      _c("span", { staticClass: "circle" }),
                      _vm._v(" " + _vm._s(item.bodyName) + " "),
                    ]),
                    _c("span", { staticClass: "water-replenish" }, [
                      _vm._v(
                        " 库容: " +
                          _vm._s(item.storageCapacity || "-") +
                          "亿m³ "
                      ),
                    ]),
                  ]
                ),
                _vm._m(0, true),
              ]
            )
          }),
          _vm.list.length === 0
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
    return _c("div", { staticClass: "fs water-wrapper" }, [
      _c("div", [_vm._v(" 月补水量"), _c("br"), _c("span", [_vm._v("- m³")])]),
      _c("div", [_vm._v(" 补水河道"), _c("br"), _c("span", [_vm._v("-")])]),
      _c("div", [_vm._v(" 补水断面"), _c("br"), _c("span", [_vm._v("-个")])]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-1b766fbe] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: underline;\n}\n.res-sum-wrapper[data-v-1b766fbe] {\n  margin: 15px 15px 0;\n  padding: 13px 17px;\n  border-radius: 10px;\n  background: linear-gradient(90deg, #deecff 0%, #fafcff 100%);\n  box-shadow: 0px 10px 20px rgba(37, 57, 111, 0.03);\n}\n.res-sum-wrapper .res-sum-box[data-v-1b766fbe] {\n  padding: 3px 12px;\n  border-radius: 30px;\n  color: #fff;\n  background: #5882ff;\n  box-shadow: 0px 6px 20px rgba(40, 92, 247, 0.3);\n  font-size: 12px;\n}\n.res-tab-wrapper[data-v-1b766fbe] {\n  margin: 10px 28px;\n}\n.res-tab-wrapper div[data-v-1b766fbe] {\n  width: 24%;\n  padding: 15px 0;\n  border-radius: 4px;\n  background: #f8f9fb;\n  color: #121236;\n  text-align: center;\n}\n.res-tab-wrapper .active[data-v-1b766fbe] {\n  background: #4b7af6;\n  color: #fff;\n}\n.around-wrapper[data-v-1b766fbe] {\n  margin: 7px 15px;\n  padding: 10px 14px 12px;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 10px 20px rgba(37, 57, 111, 0.05);\n}\n.around-wrapper .name[data-v-1b766fbe] {\n  width: 65%;\n  padding-bottom: 8px;\n  display: flex;\n  align-items: center;\n  color: #121236;\n  font-size: 14px;\n  font-weight: bold;\n}\n.around-wrapper .name .circle[data-v-1b766fbe] {\n  width: 4px;\n  height: 4px;\n  margin-right: 8px;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px solid #5475f8;\n}\n.around-wrapper .water-replenish[data-v-1b766fbe] {\n  padding: 2px 5px;\n  color: #fff;\n  background: linear-gradient(90deg, #6daafd 0%, #4378ee 100%);\n  font-size: 12px;\n  text-align: center;\n  border-radius: 10px 10px 0 10px;\n}\n.around-wrapper .water-wrapper[data-v-1b766fbe] {\n  padding-top: 10px;\n  color: rgba(37, 57, 111, 0.5);\n  font-size: 12px;\n  line-height: 20px;\n}\n.around-wrapper .water-wrapper span[data-v-1b766fbe] {\n  color: #25396f;\n  font-size: 14px;\n}\n.search-wrapper[data-v-1b766fbe] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px 0;\n}\n.search-wrapper[data-v-1b766fbe]  .van-cell {\n  padding: 3px 8px;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  background-color: #fafafa;\n}\n.search-wrapper[data-v-1b766fbe]  .van-field__right-icon {\n  color: #C4C4C4;\n  scale: 0.7;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ebd44520", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/waterHomePage/reservoir/index.vue":
/*!*****************************************************!*\
  !*** ./src/views/waterHomePage/reservoir/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1b766fbe&scoped=true& */ "./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& */ "./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b766fbe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/reservoir/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=style&index=0&id=1b766fbe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b766fbe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1b766fbe&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/reservoir/index.vue?vue&type=template&id=1b766fbe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1b766fbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9yZXNlcnZvaXIvaW5kZXgudnVlPzQxY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL2luZGV4LnZ1ZT9mMTg0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Jlc2Vydm9pci9pbmRleC52dWU/NzBkYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3dhdGVyX2VudmlyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Jlc2Vydm9pci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL2luZGV4LnZ1ZT80MDJkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3Jlc2Vydm9pci9pbmRleC52dWU/YWU0YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9yZXNlcnZvaXIvaW5kZXgudnVlP2FkM2UiXSwibmFtZXMiOlsiYmFzZVVybCIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInllYXJSYW5rTGlzdCIsInJhbmtMaXN0IiwicmFua0RldGFpbCIsInNjYWxlTWFya3MiLCJ3YXRlckJhc2ljRGF0YSIsInNlY3Rpb25JbmZvIiwic2VjdGlvbkxpc3QiLCJzdGF0aW9uSW5mbyIsInVwU3RyZWFtT3ZlciIsImxha2VTaXRlTGlzdCIsInF1ZXJ5U2VjdGlvbkluZm8iLCJzdGF0aW9uRGVzIiwicml2ZXJDb3Vyc2VEZXRhaWwiLCJob3VyTGluZSIsIndhdGVyUG9sbHV0aW9uIiwidXBzdHJlYW1Qb2xsdXRpb24iLCJnZXRVcExpc3QiLCJ1cFN0cmVhbVdhdGVyIiwidXBzdHJlYW1TZXdhZ2UiLCJwdXJpZmljYXRpb25QbGFudCIsImRhdGFUYWJsZSIsImpoY0luZm8iLCJseUJhc2luIiwibHlEZXRhaWwiLCJkY1N6IiwiZGNTekxpc3QiLCJ5eXNJbmZvIiwic2tMaXN0Iiwid2F0ZXJCb2R5TGlzdCIsIndhdGVyUGxhbnRMaXN0IiwicmVzZXJ2b2lyTGlzdCIsIndhdGVyUGxhbnRSaXZlciIsIndhdGVyUGxhbnRTaXRlIiwicmVzb3VyY2VTdGF0Iiwid2F0ZXJGdW5jdGlvbkxpc3QiLCJ3YXRlckZ1bmN0aW9uRGV0YWlsIiwiaW52b2x2ZVdhdGVyIiwic2V3YWdlRGV0YWlsIiwic2V3YWdlUGNEZXRhaWwiLCJzZXdhZ2VTeURldGFpbCIsInNld2FnZUpjRGV0YWlsIiwic2V3YWdlWnpEZXRhaWwiLCJwb2xsdXRpb25MaXN0Iiwic2V3YWdlU3RhdCIsInJpdmVyQ291cnNlU3RhdCIsInJpdmVyQ291cnNlTGlzdCIsIndhdGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGNBRkE7QUFHQSxjQUhBO0FBSUEsY0FKQTtBQUtBLGNBTEE7QUFNQSw2QkFOQTtBQU9BLDRCQVBBO0FBUUEseUNBUkE7QUFTQTtBQVRBO0FBV0EsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxpRkFWQSxDQVVBOztBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHNCQUZBO0FBR0EsMEJBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQVhBO0FB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Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBTLENBQWdCLHNVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzEzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyIHRpdGxlPVwi5rC05bqTXCIgZml4ZWQgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCIgQGNsaWNrLXJpZ2h0PVwib25DbGlja1JpZ2h0XCI+XHJcbiAgICAgIDwhLS08dGVtcGxhdGUgI3JpZ2h0PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1tYXBcIj7ov5vlhaXlnLDlm748L3NwYW4+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9tb3JlTWFwLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIi8+XHJcbiAgICAgIDwvdGVtcGxhdGU+LS0+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiPlxyXG4gICAgICA8dmFuLXJvdyBjbGFzcz1cInNlYXJjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgPHZhbi1jb2wgc3Bhbj1cIjE3XCIgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7Zm9udC13ZWlnaHQ6IGJvbGRcIj5cclxuICAgICAgICAgIHt7YXJlYX19e3tiYXNpbn195rC05bqT5oOF5Ya1XHJcbiAgICAgICAgPC92YW4tY29sPlxyXG4gICAgICAgIDx2YW4tY29sIHNwYW49XCI3XCI+XHJcbiAgICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICBjbGlja2FibGVcclxuICAgICAgICAgICAgICA6dmFsdWU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICByaWdodC1pY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1BpY2tlck1vbnRoID0gdHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdmFuLWNvbD5cclxuICAgICAgPC92YW4tcm93PlxyXG5cclxuICAgICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd1BpY2tlck1vbnRoXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LW1vZGVsPVwiY3VycmVudERhdGVcIiB0eXBlPVwieWVhci1tb250aFwiIGNvbG9yPVwiIzE5ODlmYVwiIEBjb25maXJtPVwib25Db25maXJtTW9udGhcIi8+XHJcbiAgICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlcy1zdW0td3JhcHBlciBmc1wiPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtmb250LXdlaWdodDogYm9sZDtcIj7mmIbmmI7luIIo6KGl5rC0KeawtOW6kzwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzLXN1bS1ib3hcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiBib2xkXCI+e3t0b3RhbH19PC9zcGFuPlxyXG4gICAgICAgICAg5LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzIHJlcy10YWItd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJ0YWJOYW1lPT09aXRlbT8nYWN0aXZlJzonJ1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKGl0ZW0pXCI+e3tpdGVtfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgY2xhc3M9XCJhcm91bmQtd3JhcHBlclwiIEBjbGljaz1cIm9uRGV0YWlsKGl0ZW0pXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4wNSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICB7e2l0ZW0uYm9keU5hbWV9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhdGVyLXJlcGxlbmlzaFwiPlxyXG4gICAgICAgICAg5bqT5a65OiB7e2l0ZW0uc3RvcmFnZUNhcGFjaXR5fHwnLSd9feS6v23Cs1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcyB3YXRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICDmnIjooaXmsLTph488YnIvPlxyXG4gICAgICAgICAgICA8c3Bhbj4tIG3Cszwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg6KGl5rC05rKz6YGTPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg6KGl5rC05pat6Z2iPGJyLz5cclxuICAgICAgICAgICAgPHNwYW4+LeS4qjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHZhbi1lbXB0eSB2LWlmPVwibGlzdC5sZW5ndGg9PT0wXCIgZGVzY3JpcHRpb249XCLmmoLml6DmlbDmja5cIi8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtyZXNlcnZvaXJMaXN0fSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhc2luOiBcIlwiLFxyXG4gICAgICAgIGFyZWE6IFwiXCIsXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgdGltZTogXCJcIixcclxuICAgICAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBzaG93UGlja2VyTW9udGg6IGZhbHNlLFxyXG4gICAgICAgIHRhYkFycjogWyfluILnuqcnLCAn5Y6/57qnJywgJ+WNg+WQqOS4h+S6uicsICfkuaHplYfnuqcnXSxcclxuICAgICAgICB0YWJOYW1lOiAn5biC57qnJ1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGxldCBxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWU7XHJcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLiRyb3V0ZS5xdWVyeS50b3RhbDtcclxuICAgICAgaWYocXVlcnkuaW5kZXhPZign5rWB5Z+fJyk+LTEpe1xyXG4gICAgICAgIHRoaXMuYmFzaW4gPSBxdWVyeTtcclxuICAgICAgICB0aGlzLmFyZWEgPSAnJztcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5iYXNpbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IHF1ZXJ5O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGltZSA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NJyk7IC8v6buY6K6k5b2T5YmN5pyI5Lu9XHJcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgYmFzaW46IHRoaXMuYmFzaW4sXHJcbiAgICAgICAgICBkaXY6IHRoaXMuYXJlYSxcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGFiTmFtZSxcclxuICAgICAgICAgIHRpbWU6IHRoaXMudGltZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzZXJ2b2lyTGlzdChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNoYW5nZVRhYihuYW1lKXtcclxuICAgICAgICB0aGlzLnRhYk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtTW9udGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNob3dQaWNrZXJNb250aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZSA9IGRheWpzKHZhbHVlKS5mb3JtYXQoXCJZWVlZLU1NXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgb25DbGlja1JpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwicmVzUGxhbnRNYXBcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuafpeeci+WcsOWbvlwiLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IFwiMTAyLjgyOTQwMTcwMTA4NzAxXCIsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBcIjI0Ljg4ODAwOTE3Nzk2MTgwNlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25EZXRhaWwoaXRlbSkge1xyXG4gICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAvLyAgIG5hbWU6IFwicmVzZXJ2b2lyRGV0YWlsXCIsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5pbnRvLW1hcCB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnJlcy1zdW0td3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweCAwO1xyXG4gICAgcGFkZGluZzogMTNweCAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjIsIDIzNiwgMjU1LCAxKSAwJSwgcmdiYSgyNTAsIDI1MiwgMjU1LCAxKSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wMyk7XHJcblxyXG4gICAgLnJlcy1zdW0tYm94IHtcclxuICAgICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDg4LCAxMzAsIDI1NSwgMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMjBweCByZ2JhKDQwLCA5MiwgMjQ3LCAwLjMpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVzLXRhYi13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMTBweCAyOHB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ5LCAyNTEsIDEpO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCAxMjIsIDI0NiwgMSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFyb3VuZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogN3B4IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2F0ZXItcmVwbGVuaXNoIHtcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDksIDE3MCwgMjUzLCAxKSAwJSwgcmdiYSg2NywgMTIwLCAyMzgsIDEpIDEwMCUpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAud2F0ZXItd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHggMDtcclxuXHJcbiAgICA6OnYtZGVlcCAudmFuLWNlbGwge1xyXG4gICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICB9XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1maWVsZF9fcmlnaHQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICBzY2FsZTogMC43O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuawtOW6k1wiLCBmaXhlZDogXCJcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGljay1yaWdodFwiOiBfdm0ub25DbGlja1JpZ2h0LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiwgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogXCIxN1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS5hcmVhKSArIF92bS5fcyhfdm0uYmFzaW4pICsgXCLmsLTlupPmg4XlhrUgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiN1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGltZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWljb25cIjogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyTW9udGggPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dQaWNrZXJNb250aCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJNb250aCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyTW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ5ZWFyLW1vbnRoXCIsIGNvbG9yOiBcIiMxOTg5ZmFcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNvbmZpcm06IF92bS5vbkNvbmZpcm1Nb250aCB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnREYXRlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50RGF0ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVzLXN1bS13cmFwcGVyIGZzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoODQsIDExNywgMjQ4LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5piG5piO5biCKOihpeawtCnmsLTlupNcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXMtc3VtLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIiwgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiDkuKogXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmcyByZXMtdGFiLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJBcnIsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udGFiTmFtZSA9PT0gaXRlbSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlVGFiKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFyb3VuZC13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnNcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ib3R0b21cIjogXCIxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4wNSlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5ib2R5TmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3YXRlci1yZXBsZW5pc2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIg5bqT5a65OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnN0b3JhZ2VDYXBhY2l0eSB8fCBcIi1cIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS6v23CsyBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFwidmFuLWVtcHR5XCIsIHsgYXR0cnM6IHsgZGVzY3JpcHRpb246IFwi5pqC5peg5pWw5o2uXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnMgd2F0ZXItd3JhcHBlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIg5pyI6KGl5rC06YePXCIpLCBfYyhcImJyXCIpLCBfYyhcInNwYW5cIiwgW192bS5fdihcIi0gbcKzXCIpXSldKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIg6KGl5rC05rKz6YGTXCIpLCBfYyhcImJyXCIpLCBfYyhcInNwYW5cIiwgW192bS5fdihcIi1cIildKV0pLFxuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiDooaXmsLTmlq3pnaJcIiksIF9jKFwiYnJcIiksIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiLeS4qlwiKV0pXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnRvLW1hcFtkYXRhLXYtMWI3NjZmYmVdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5yZXMtc3VtLXdyYXBwZXJbZGF0YS12LTFiNzY2ZmJlXSB7XFxuICBtYXJnaW46IDE1cHggMTVweCAwO1xcbiAgcGFkZGluZzogMTNweCAxN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2RlZWNmZiAwJSwgI2ZhZmNmZiAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wMyk7XFxufVxcbi5yZXMtc3VtLXdyYXBwZXIgLnJlcy1zdW0tYm94W2RhdGEtdi0xYjc2NmZiZV0ge1xcbiAgcGFkZGluZzogM3B4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjNTg4MmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAyMHB4IHJnYmEoNDAsIDkyLCAyNDcsIDAuMyk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5yZXMtdGFiLXdyYXBwZXJbZGF0YS12LTFiNzY2ZmJlXSB7XFxuICBtYXJnaW46IDEwcHggMjhweDtcXG59XFxuLnJlcy10YWItd3JhcHBlciBkaXZbZGF0YS12LTFiNzY2ZmJlXSB7XFxuICB3aWR0aDogMjQlO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYjtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmVzLXRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTFiNzY2ZmJlXSB7XFxuICBiYWNrZ3JvdW5kOiAjNGI3YWY2O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hcm91bmQtd3JhcHBlcltkYXRhLXYtMWI3NjZmYmVdIHtcXG4gIG1hcmdpbjogN3B4IDE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XFxufVxcbi5hcm91bmQtd3JhcHBlciAubmFtZVtkYXRhLXYtMWI3NjZmYmVdIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWUgLmNpcmNsZVtkYXRhLXYtMWI3NjZmYmVdIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1NDc1Zjg7XFxufVxcbi5hcm91bmQtd3JhcHBlciAud2F0ZXItcmVwbGVuaXNoW2RhdGEtdi0xYjc2NmZiZV0ge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmRhYWZkIDAlLCAjNDM3OGVlIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMTBweDtcXG59XFxuLmFyb3VuZC13cmFwcGVyIC53YXRlci13cmFwcGVyW2RhdGEtdi0xYjc2NmZiZV0ge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLndhdGVyLXdyYXBwZXIgc3BhbltkYXRhLXYtMWI3NjZmYmVdIHtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2VhcmNoLXdyYXBwZXJbZGF0YS12LTFiNzY2ZmJlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTRweCAwO1xcbn1cXG4uc2VhcmNoLXdyYXBwZXJbZGF0YS12LTFiNzY2ZmJlXSAgLnZhbi1jZWxsIHtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuLnNlYXJjaC13cmFwcGVyW2RhdGEtdi0xYjc2NmZiZV0gIC52YW4tZmllbGRfX3JpZ2h0LWljb24ge1xcbiAgY29sb3I6ICNDNEM0QzQ7XFxuICBzY2FsZTogMC43O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiNzY2ZmJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZWJkNDQ1MjBcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjc2NmZiZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiNzY2ZmJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5sZXQgYmFzZVVybCA9IFwiL3dhdGVyXCI7IC8v5pyN5Yqh5Zmo5pivd2F0ZXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua2luZ1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuawtOeOr+Wig+W5tOW6leaOkuWQjeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJSYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24veWVhclJhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5aSn56ue6LWb5rC05rK755CG5o6S5ZCN5ZCE5Yy65Z+f6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbiDlkITljr/vvIjluILvvInljLrjgIHlvIDlj5HluqblgYflm63ljLrlraPluqblnLDooajmsLTnjq/looPotKjph4/or4TliIbor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hcmtzKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9zY2FsZU1hcmtzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5YWo5biC5rC0546v5aKD5qaC5Ya15oC75L2T5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCYXNpY0RhdGEoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuaWremdouS/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlckJhc2ljRGF0YS9zZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5YiX6KGoLS3lm73jgIHnnIHjgIHluIJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3NlY3Rpb25MaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3mn6Xor6LkuIrmuLjotoXmoIdcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtT3ZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbU92ZXJcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivoua5luW6k+eahOebkea1i+aWremdolxyXG5leHBvcnQgZnVuY3Rpb24gbGFrZVNpdGVMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2xha2VTaXRlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaIt5rKz5rWB5pe25YC85puy57q/XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVNlY3Rpb25JbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3F1ZXJ5U2VjdGlvbkluZm9cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lm73jgIHnnIHjgIHluIJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25EZXMoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vc2l0ZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsrPmtYHor6bmg4Ut5rKz6YGT6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3ml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJMaW5lKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2N1cnZlXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3lkajovrnmtonmsLTmsaHmn5PmupBcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUG9sbHV0aW9uKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3BvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1Qb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1Qb2xsdXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmlq3pnaLliJfooahcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbi8vICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4vLyAgICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cFN0cmVhbVwiLFxyXG4vLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuLy8gICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTlupNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwU3RyZWFtV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1XYXRlclwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaOkuWPo1xyXG5leHBvcnQgZnVuY3Rpb24gdXBzdHJlYW1TZXdhZ2UoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1TZXdhZ2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmsLTotKjlh4DljJbljoJcclxuZXhwb3J0IGZ1bmN0aW9uIHB1cmlmaWNhdGlvblBsYW50KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3B1cmlmaWNhdGlvblBsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLS3nm5HmtYvor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFUYWJsZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9kYXRhVGFibGVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeawtOi0qOWHgOWMluWOguivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gamhjSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1XHJcbmV4cG9ydCBmdW5jdGlvbiBseUJhc2luKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7msLTnjq/looMt5rWB5Z+f5rC06LSo5LyY6Imv5qaC5Ya1LeivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gbHlEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL2RldGFpbHNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1IC0g5ruH5rGg5rC06LSoXHJcbmV4cG9ydCBmdW5jdGlvbiBkY1N6KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9kY0RhdGFcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKggLSDmsLTotKjliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3pMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZGNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCJcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1LemlrueUqOawtOa6kOWcsFxyXG5leHBvcnQgZnVuY3Rpb24geXlzSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RyaW5rU291cmNlXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywLeawtOW6k+WIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gc2tMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9sYWtlL2RyaW5rU291cmNlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluIPlj4rlupPlrrlcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyQm9keUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS93YXRlckJvZHlEaXN0cmlidXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC06LSo5YeA5YyW5Y6C5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC05bqT5YiG5biDXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNlcnZvaXJMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C5rKz6YGT5pat6Z2i6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50Uml2ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOi0qOWHgOWMluWOguihpeawtOaWremdolxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudFNpdGUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50L3NpdGVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15rC06LWE5rqQ5p+l6K+iXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vcmVzb3VyY2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOWKn+iDveWMuuWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJGdW5jdGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy66K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJGdW5jRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52b2x2ZVdhdGVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDor6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaOkuafpeWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVBjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlUGNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLea6r+a6kOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVN5RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3lEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeebkea1i+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZUpjRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlSmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5o6S5Y+j6K+m5oOFLeaVtOayu+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVp6RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlWnpEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5raJ5rC05rGh5p+T5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbHV0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nzd3J5bGJcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQ5YiX6KGodGFi5oC75pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeays+mBk+S/oeaBr+e7n+iuoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3moLnmja7mtYHln5/mn6Xor6LmsrPpgZPkuIvmi4nmoYZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luL3dhdGVyTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNzY2ZmJlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiNzY2ZmJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWI3NjZmYmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI3NjZmYmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI3NjZmYmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI3NjZmYmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjc2NmZiZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjc2NmZiZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcmVzZXJ2b2lyL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiNzY2ZmJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNzY2ZmJlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==