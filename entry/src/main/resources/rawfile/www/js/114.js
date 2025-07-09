(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "",
      list: [],
      searchValue: '',
      total: 0,
      name: ''
    };
  },
  mounted: function mounted() {
    this.name = this.$route.query.name;
    this.total = this.$route.query.total;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var info = {
        basin: this.name === '昆明市' ? '' : this.name,
        name: this.searchValue
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_3__["waterFunctionList"])(info).then(function (res) {
        _this.list = res.data;
      });
    },
    onSearch: function onSearch() {
      this.loadData();
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace('类', '');
      } else {
        return '';
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return 'target2';
      } else if (value === 'Ⅱ') {
        return 'target2';
      } else if (value === 'Ⅲ') {
        return 'target3';
      } else if (value === 'Ⅳ') {
        return 'target4';
      } else if (value === 'Ⅴ') {
        return 'target5';
      } else if (value === '劣Ⅴ') {
        return 'target6';
      } else {
        return 'target0';
      }
    },
    onConfirmMonth: function onConfirmMonth(value) {
      this.showPickerMonth = false;
      this.time = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(value).format("YYYY-MM");
    },
    toDetail: function toDetail(item) {
      this.$router.push({
        name: "functionalDetail",
        query: {
          id: item.id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("van-nav-bar", {
        attrs: { title: "水功能区划", fixed: "", "left-arrow": "" },
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
          _c("div", { staticClass: "pur-sum-wrapper fs" }, [
            _c(
              "span",
              {
                staticStyle: {
                  color: "rgba(19, 186, 86, 1)",
                  "font-weight": "bold",
                },
              },
              [_vm._v("二级开发利用区")]
            ),
            _c("div", { staticClass: "pur-sum-box" }, [
              _c(
                "span",
                { staticStyle: { "font-size": "18px", "font-weight": "bold" } },
                [_vm._v(_vm._s(_vm.total))]
              ),
              _vm._v(" 个 "),
            ]),
          ]),
          _c("div", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.name) + "水功能区划"),
          ]),
          _c("van-search", {
            ref: "search",
            staticStyle: { width: "100%", "padding-bottom": "0" },
            attrs: { shape: "round", placeholder: "请输入关键字" },
            on: { input: _vm.onSearch },
            model: {
              value: _vm.searchValue,
              callback: function ($$v) {
                _vm.searchValue = $$v
              },
              expression: "searchValue",
            },
          }),
          _vm._l(_vm.list, function (item) {
            return _c(
              "div",
              {
                staticClass: "around-wrapper fs",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "name" }, [
                  _c("span", [_vm._v(_vm._s(item.fzoneName) + " ")]),
                  _c("br"),
                  _vm._v(" " + _vm._s(item.szoneName) + " "),
                ]),
                _c("div", { staticClass: "year" }, [
                  _vm._v(" 2020"),
                  _c("br"),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(_vm.replaceString(item.wqTarget2020)) +
                          ")",
                      },
                    },
                    [
                      _vm._v(
                        " " + _vm._s(_vm.replaceString(item.wqTarget2020)) + " "
                      ),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "year" }, [
                  _vm._v(" 2030"),
                  _c("br"),
                  _c(
                    "div",
                    {
                      staticClass: "site-status",
                      style: {
                        backgroundImage:
                          "url(" +
                          _vm.judgeLevel(_vm.replaceString(item.wqTarget2030)) +
                          ")",
                      },
                    },
                    [
                      _vm._v(
                        " " + _vm._s(_vm.replaceString(item.wqTarget2030)) + " "
                      ),
                    ]
                  ),
                ]),
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
    return _c("div", [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/more.png */ "./src/assets/more.png"), width: "14" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pur-sum-wrapper[data-v-aa6c1dee] {\n  margin: 15px 15px 0;\n  padding: 13px 17px;\n  border-radius: 10px;\n  background: linear-gradient(90deg, rgba(67, 207, 124, 0.3) 0%, rgba(67, 207, 124, 0.05) 100%);\n  box-shadow: 0px 10px 20px rgba(37, 57, 111, 0.03);\n}\n.pur-sum-wrapper .pur-sum-box[data-v-aa6c1dee] {\n  padding: 3px 12px;\n  border-radius: 30px;\n  color: #fff;\n  background: #43cf7c;\n  box-shadow: 0px 6px 20px rgba(67, 207, 124, 0.3);\n  font-size: 12px;\n}\n.title[data-v-aa6c1dee] {\n  padding: 25px 20px 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: black;\n}\n.around-wrapper[data-v-aa6c1dee] {\n  margin: 7px 15px;\n  padding: 13px 17px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.around-wrapper .name[data-v-aa6c1dee] {\n  width: 50%;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n  line-height: 20px;\n}\n.around-wrapper .name span[data-v-aa6c1dee] {\n  font-size: 14px;\n  color: #447bfc;\n  font-weight: bold;\n}\n.around-wrapper .year[data-v-aa6c1dee] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  line-height: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d0803e04", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/more.png":
/*!*****************************!*\
  !*** ./src/assets/more.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFLSURBVFiF7ZdRasQgEEDH0pyrLnirCk0gvZUQ91wW7EfEaJyYyejmp52fhSXMe47GmQD89RBXHlbaSQCQ4MVH+EuGX7tm808AsGYebFcBpZ0EL74SICGzn8w8jE0CLPBFiUOBAF9Y4AsiqIDSbgwr7xfCP7Cz8YY+3Bu+5lzCIa4LKO3G7vBNolhYJkAqvfATCD8xFeS+CnkFaKW3Zh5GEP7BUtgxogC2PwcJFqWdNPNgmRJZFdIK0AQ6SZQC2/X6eomEhb+Gd0ggAvJGichqq0AlMTVSActChis2aVyUiKy2CuRwVuPaBNZh4h54wuJtQfvKIytrx+rzZ4GzgxR6e0vZzfd75OZngNhkmoaVHaMYSEhV4AYyGZVvAb/VngY2lhUCLddqNQ4WVhtK+82FB/NgVaCTiA37jsJJAkyJU/AlgUREQudPs//4BcZCytta1OcNAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/waterHomePage/waterFunctional/index.vue":
/*!***********************************************************!*\
  !*** ./src/views/waterHomePage/waterFunctional/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=aa6c1dee&scoped=true& */ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& */ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "aa6c1dee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/waterFunctional/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=style&index=0&id=aa6c1dee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_aa6c1dee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=aa6c1dee&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/waterFunctional/index.vue?vue&type=template&id=aa6c1dee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aa6c1dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS93YXRlckZ1bmN0aW9uYWwvaW5kZXgudnVlPzRiMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2luZGV4LnZ1ZT9kMmFhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3dhdGVyRnVuY3Rpb25hbC9pbmRleC52dWU/ODM2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3dhdGVyX2VudmlyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbW9yZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS93YXRlckZ1bmN0aW9uYWwvaW5kZXgudnVlPzM5NGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2luZGV4LnZ1ZT8yMDQ0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3dhdGVyRnVuY3Rpb25hbC9pbmRleC52dWU/YmM0OCJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicmFua2luZyIsImRhdGEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwieWVhclJhbmtMaXN0IiwicmFua0xpc3QiLCJyYW5rRGV0YWlsIiwic2NhbGVNYXJrcyIsIndhdGVyQmFzaWNEYXRhIiwic2VjdGlvbkluZm8iLCJzZWN0aW9uTGlzdCIsInN0YXRpb25JbmZvIiwidXBTdHJlYW1PdmVyIiwibGFrZVNpdGVMaXN0IiwicXVlcnlTZWN0aW9uSW5mbyIsInN0YXRpb25EZXMiLCJyaXZlckNvdXJzZURldGFpbCIsImhvdXJMaW5lIiwid2F0ZXJQb2xsdXRpb24iLCJ1cHN0cmVhbVBvbGx1dGlvbiIsImdldFVwTGlzdCIsInVwU3RyZWFtV2F0ZXIiLCJ1cHN0cmVhbVNld2FnZSIsInB1cmlmaWNhdGlvblBsYW50IiwiZGF0YVRhYmxlIiwiamhjSW5mbyIsImx5QmFzaW4iLCJseURldGFpbCIsImRjU3oiLCJkY1N6TGlzdCIsInl5c0luZm8iLCJza0xpc3QiLCJ3YXRlckJvZHlMaXN0Iiwid2F0ZXJQbGFudExpc3QiLCJyZXNlcnZvaXJMaXN0Iiwid2F0ZXJQbGFudFJpdmVyIiwid2F0ZXJQbGFudFNpdGUiLCJyZXNvdXJjZVN0YXQiLCJ3YXRlckZ1bmN0aW9uTGlzdCIsIndhdGVyRnVuY3Rpb25EZXRhaWwiLCJpbnZvbHZlV2F0ZXIiLCJzZXdhZ2VEZXRhaWwiLCJzZXdhZ2VQY0RldGFpbCIsInNld2FnZVN5RGV0YWlsIiwic2V3YWdlSmNEZXRhaWwiLCJzZXdhZ2VaekRldGFpbCIsInBvbGx1dGlvbkxpc3QiLCJzZXdhZ2VTdGF0Iiwicml2ZXJDb3Vyc2VTdGF0Iiwicml2ZXJDb3Vyc2VMaXN0Iiwid2F0ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGNBRkE7QUFHQSxxQkFIQTtBQUlBLGNBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWZBO0FBZ0JBO0FBQ0EsWUFEQSxzQkFDQTtBQUFBOztBQUNBO0FBQ0EsbURBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQVRBO0FBVUEsWUFWQSxzQkFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLGlCQWJBLHlCQWFBLEtBYkEsRUFhQTtB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ZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVNtRCxTQUFULENBQW1CbkQsSUFBbkIsRUFBeUI7QUFDOUIsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVKLE9BQU8sR0FBRyx3QkFERjtBQUViSyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVKO0FBSEssR0FBRCxDQUFkO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNwZEQsaUNBQWlDLG9qQjs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBTLENBQWdCLHNVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzExNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyIHRpdGxlPVwi5rC05Yqf6IO95Yy65YiSXCIgZml4ZWQgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInB1ci1zdW0td3JhcHBlciBmc1wiPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMTksIDE4NiwgODYsIDEpO2ZvbnQtd2VpZ2h0OiBib2xkO1wiPuS6jOe6p+W8gOWPkeWIqeeUqOWMujwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVyLXN1bS1ib3hcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiBib2xkXCI+e3t0b3RhbH19PC9zcGFuPlxyXG4gICAgICAgICAg5LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3tuYW1lfX3msLTlip/og73ljLrliJI8L2Rpdj5cclxuXHJcbiAgICAgIDx2YW4tc2VhcmNoIHYtbW9kZWw9XCJzZWFyY2hWYWx1ZVwiIHNoYXBlPVwicm91bmRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWFs+mUruWtl1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7cGFkZGluZy1ib3R0b206IDBcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIiBAaW5wdXQ9XCJvblNlYXJjaFwiLz5cclxuXHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBjbGFzcz1cImFyb3VuZC13cmFwcGVyIGZzXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgPHNwYW4+e3sgaXRlbS5mem9uZU5hbWUgfX0gPC9zcGFuPjxici8+XHJcbiAgICAgICAgICB7e2l0ZW0uc3pvbmVOYW1lfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiPlxyXG4gICAgICAgICAgMjAyMDxici8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1zdGF0dXNcIlxyXG4gICAgICAgICAgICAgICA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBqdWRnZUxldmVsKHJlcGxhY2VTdHJpbmcoaXRlbS53cVRhcmdldDIwMjApKSArICcpJyx9XCI+XHJcbiAgICAgICAgICAgIHt7cmVwbGFjZVN0cmluZyhpdGVtLndxVGFyZ2V0MjAyMCl9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInllYXJcIj5cclxuICAgICAgICAgIDIwMzA8YnIvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtc3RhdHVzXCJcclxuICAgICAgICAgICAgICAgOnN0eWxlPVwie2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKGl0ZW0ud3FUYXJnZXQyMDMwKSkgKyAnKScsIH1cIj5cclxuICAgICAgICAgICAge3tyZXBsYWNlU3RyaW5nKGl0ZW0ud3FUYXJnZXQyMDMwKX19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9tb3JlLnBuZ1wiIHdpZHRoPVwiMTRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHZhbi1lbXB0eSB2LWlmPVwibGlzdC5sZW5ndGg9PT0wXCIgZGVzY3JpcHRpb249XCLmmoLml6DmlbDmja5cIi8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHt3YXRlckZ1bmN0aW9uTGlzdH0gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyXCI7XHJcbiAgaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuICBpbXBvcnQge2ltZ0p1Z2RlTGV2ZWx9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWU7XHJcbiAgICAgIHRoaXMudG90YWwgPSB0aGlzLiRyb3V0ZS5xdWVyeS50b3RhbDtcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBiYXNpbjogdGhpcy5uYW1lID09PSAn5piG5piO5biCJyA/ICcnIDogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdhdGVyRnVuY3Rpb25MaXN0KGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgcmVwbGFjZVN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoJ+exuycsICcnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaW1nSnVnZGVMZXZlbCh2YWx1ZSlcclxuICAgICAgfSxcclxuICAgICAganVkZ2VUYXJnZXRMZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQyJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWhJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQyJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWiJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQzJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWjJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWkJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ1JztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn5Yqj4oWkJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ2JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQwJztcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29uZmlybU1vbnRoKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UGlja2VyTW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KFwiWVlZWS1NTVwiKTtcclxuICAgICAgfSxcclxuICAgICAgdG9EZXRhaWwoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwiZnVuY3Rpb25hbERldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAucHVyLXN1bS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDY3LCAyMDcsIDEyNCwgMC4zKSAwJSwgcmdiYSg2NywgMjA3LCAxMjQsIDAuMDUpIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjAzKTtcclxuXHJcbiAgICAucHVyLXN1bS1ib3gge1xyXG4gICAgICBwYWRkaW5nOiAzcHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjcsIDIwNywgMTI0LCAxKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDZweCAyMHB4IHJnYmEoNjcsIDIwNywgMTI0LCAwLjMpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZzogMjVweCAyMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmFyb3VuZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogN3B4IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC55ZWFyIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuawtOWKn+iDveWMuuWIklwiLCBmaXhlZDogXCJcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1ci1zdW0td3JhcHBlciBmc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE5LCAxODYsIDg2LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5LqM57qn5byA5Y+R5Yip55So5Yy6XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVyLXN1bS1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIsIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50b3RhbCkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIg5LiqIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSArIFwi5rC05Yqf6IO95Yy65YiSXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIFwicGFkZGluZy1ib3R0b21cIjogXCIwXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWFs+mUruWtl1wiIH0sXG4gICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLm9uU2VhcmNoIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaFZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2hWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFZhbHVlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFyb3VuZC13cmFwcGVyIGZzXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmZ6b25lTmFtZSkgKyBcIiBcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5zem9uZU5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwieWVhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiAyMDIwXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZUxldmVsKF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud3FUYXJnZXQyMDIwKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS53cVRhcmdldDIwMjApKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInllYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgMjAzMFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVkZ2VMZXZlbChfdm0ucmVwbGFjZVN0cmluZyhpdGVtLndxVGFyZ2V0MjAzMCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud3FUYXJnZXQyMDMwKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFwidmFuLWVtcHR5XCIsIHsgYXR0cnM6IHsgZGVzY3JpcHRpb246IFwi5pqC5peg5pWw5o2uXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvbW9yZS5wbmdcIiksIHdpZHRoOiBcIjE0XCIgfSB9KSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnB1ci1zdW0td3JhcHBlcltkYXRhLXYtYWE2YzFkZWVdIHtcXG4gIG1hcmdpbjogMTVweCAxNXB4IDA7XFxuICBwYWRkaW5nOiAxM3B4IDE3cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDY3LCAyMDcsIDEyNCwgMC4zKSAwJSwgcmdiYSg2NywgMjA3LCAxMjQsIDAuMDUpIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjAzKTtcXG59XFxuLnB1ci1zdW0td3JhcHBlciAucHVyLXN1bS1ib3hbZGF0YS12LWFhNmMxZGVlXSB7XFxuICBwYWRkaW5nOiAzcHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICM0M2NmN2M7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDIwcHggcmdiYSg2NywgMjA3LCAxMjQsIDAuMyk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50aXRsZVtkYXRhLXYtYWE2YzFkZWVdIHtcXG4gIHBhZGRpbmc6IDI1cHggMjBweCAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5hcm91bmQtd3JhcHBlcltkYXRhLXYtYWE2YzFkZWVdIHtcXG4gIG1hcmdpbjogN3B4IDE1cHg7XFxuICBwYWRkaW5nOiAxM3B4IDE3cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWVbZGF0YS12LWFhNmMxZGVlXSB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWUgc3BhbltkYXRhLXYtYWE2YzFkZWVdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hcm91bmQtd3JhcHBlciAueWVhcltkYXRhLXYtYWE2YzFkZWVdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYTZjMWRlZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQwODAzZTA0XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWE2YzFkZWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYTZjMWRlZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxubGV0IGJhc2VVcmwgPSBcIi93YXRlclwiOyAvL+acjeWKoeWZqOaYr3dhdGVy57G777yM5pys5Zyw5rKh5pyJ5YqgXHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtpbmcoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtpbmdcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7msLTnjq/looPlubTlupXmjpLlkI3liJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB5ZWFyUmFua0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3llYXJSYW5rTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjeivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5rTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjeWQhOWMuuWfn+ivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG4g5ZCE5Y6/77yI5biC77yJ5Yy644CB5byA5Y+R5bqm5YGH5Zut5Yy65a2j5bqm5Zyw6KGo5rC0546v5aKD6LSo6YeP6K+E5YiG6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXJrcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vc2NhbGVNYXJrc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWFqOW4guawtOeOr+Wig+amguWGteaAu+S9k+aDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyQmFzaWNEYXRhKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGFcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7mlq3pnaLkv6Hmga9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXJCYXNpY0RhdGEvc2VjdGlvbkluZm9cIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuaWremdouWIl+ihqC0t5Zu944CB55yB44CB5biCXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9zZWN0aW9uTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5Zu944CB55yB44CB5biCXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvblwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5p+l6K+i5LiK5ri46LaF5qCHXHJcbmV4cG9ydCBmdW5jdGlvbiB1cFN0cmVhbU92ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBTdHJlYW1PdmVyXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3mn6Xor6LmuZblupPnmoTnm5HmtYvmlq3pnaJcclxuZXhwb3J0IGZ1bmN0aW9uIGxha2VTaXRlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9sYWtlU2l0ZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLeays+a1geaXtuWAvOabsue6v1xyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTZWN0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9xdWVyeVNlY3Rpb25JbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5Zu944CB55yB44CB5biCXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aW9uRGVzKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3NpdGVEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rKz5rWB6K+m5oOFLeays+mBk+ivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaIt5pe25YC85puy57q/XHJcbmV4cG9ydCBmdW5jdGlvbiBob3VyTGluZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9jdXJ2ZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5ZGo6L655raJ5rC05rGh5p+T5rqQXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBvbGx1dGlvbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9wb2xsdXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwc3RyZWFtUG9sbHV0aW9uKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtUG9sbHV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45pat6Z2i5YiX6KGoXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRVcExpc3QoZGF0YSkge1xyXG4vLyAgIHJldHVybiByZXF1ZXN0KHtcclxuLy8gICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBTdHJlYW1cIixcclxuLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbi8vICAgICBkYXRhOiBkYXRhLFxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcExpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1TZWN0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45rC05bqTXHJcbmV4cG9ydCBmdW5jdGlvbiB1cFN0cmVhbVdhdGVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtV2F0ZXJcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmjpLlj6NcclxuZXhwb3J0IGZ1bmN0aW9uIHVwc3RyZWFtU2V3YWdlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtU2V3YWdlXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45rC06LSo5YeA5YyW5Y6CXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXJpZmljYXRpb25QbGFudChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9wdXJpZmljYXRpb25QbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi0t55uR5rWL6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhVGFibGUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vZGF0YVRhYmxlXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLS3msLTotKjlh4DljJbljoLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGpoY0luZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5rC0546v5aKDLea1geWfn+awtOi0qOS8mOiJr+amguWGtVxyXG5leHBvcnQgZnVuY3Rpb24gbHlCYXNpbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW5cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5rC0546v5aKDLea1geWfn+awtOi0qOS8mOiJr+amguWGtS3or6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGx5RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpbi9kZXRhaWxzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtSAtIOa7h+axoOawtOi0qFxyXG5leHBvcnQgZnVuY3Rpb24gZGNTeigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvZGNEYXRhXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCJcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1IC0g5ruH5rGg5rC06LSoIC0g5rC06LSo5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBkY1N6TGlzdCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9sYWtlL2RjTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtS3ppa7nlKjmsLTmupDlnLBcclxuZXhwb3J0IGZ1bmN0aW9uIHl5c0luZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9kcmlua1NvdXJjZVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuLy8g6aaW6aG1LemlrueUqOawtOa6kOWcsC3msLTlupPliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIHNrTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvbGFrZS9kcmlua1NvdXJjZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC05bqT5YiG5biD5Y+K5bqT5a65XHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckJvZHlMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvd2F0ZXJCb2R5RGlzdHJpYnV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOi0qOWHgOWMluWOguWIhuW4g1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudExpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOW6k+WIhuW4g1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXJ2b2lyTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOi0qOWHgOWMluWOguays+mBk+aWremdouivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudFJpdmVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTotKjlh4DljJbljoLooaXmsLTmlq3pnaJcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRTaXRlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudC9zaXRlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhteawtOi1hOa6kOafpeivolxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3Jlc291cmNlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTlip/og73ljLrliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyRnVuY3Rpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJGdW5jTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOWKn+iDveWMuuivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJGdW5jdGlvbkRldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyRnVuY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9sdmVXYXRlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3N0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQ6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3mjpLmn6XliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VQY0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVBjRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3muq/mupDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VTeURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVN5RGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3nm5HmtYvliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VKY0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZUpjRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3mlbTmsrvliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VaekRldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVp6RGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua2ieawtOaxoeafk+a6kOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGx1dGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zc3dyeWxiXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kOWIl+ihqHRhYuaAu+aVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3msrPpgZPkv6Hmga/nu5/orqFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeays+mBk+aDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5qC55o2u5rWB5Z+f5p+l6K+i5rKz6YGT5LiL5ouJ5qGGXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpbi93YXRlckxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRkxTVVJCVkZpRjdaZFJhc1FnRUVESDBweXJMbmlyQ2swZ3ZaVVE5MXdXN0VmRWFKeVl5ZWptcDUyZmhTWE1lNDdHbVFEODlSQlhIbGJhU1FDUTRNVkgrRXVHWDd0bTgwOEFzR1llYkZjQnBaMEVMNzRTSUNHem44dzhqRTBDTFBCRmlVT0JBRjlZNEFzaXFJRFNiZ3dyN3hmQ1A3Q3o4WVkrM0J1KzVsekNJYTRMS08zRzd2Qk5vbGhZSmtBcXZmQVRDRDh4RmVTK0Nua0ZhS1czWmg1R0VQN0JVdGd4b2dDMlB3Y0pGcVdkTlBOZ21SSlpGZElLMEFRNlNaUUMyL1g2ZW9tRWhiK0dkMGdnQXZKR2ljaHFxMEFsTVRWU0FjdENoaXMyYVZ5VWlLeTJDdVJ3VnVQYUJOWmg0aDU0d3VKdFFmdktJeXRyeCtyelo0R3pneFI2ZTB2WnpmZDc1T1puZ05oa21vYVZIYU1ZU0VoVjRBWXlHWlZ2QWIvVm5nWTJsaFVDTGRkcU5RNFdWaHRLKzgyRkIvTmdWYUNUaUEzN2pzSkpBa3lKVS9BbGdVUkVRdWRQcy8vNEJjWkN5dHRhMU9jTkFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFhNmMxZGVlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFhNmMxZGVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYWE2YzFkZWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWE2YzFkZWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWE2YzFkZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWE2YzFkZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYTZjMWRlZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhYTZjMWRlZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvd2F0ZXJGdW5jdGlvbmFsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFhNmMxZGVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFhNmMxZGVlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==