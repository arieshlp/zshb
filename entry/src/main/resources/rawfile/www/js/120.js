(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/index */ "./src/api/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tableData: []
    };
  },
  mounted: function mounted() {
    this.getStatisticsData();
  },
  methods: {
    getStatisticsData: function getStatisticsData() {
      var _this = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_0__["queryStatistics"])().then(function (res) {
        _this.tableData = res.data;

        _this.initLineChart(res.data);
      });
    },
    initLineChart: function initLineChart(data) {
      var yAxisData = [];
      var red = [];
      var yellow = [];

      for (var i = 0; i < data.length; i++) {
        yAxisData.push(data[i].MC);
        red.push(data[i].RED_COUNT);
        yellow.push(data[i].YELLOW_COUNT);
      }

      var chart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](document.getElementById('AreaChart'), null, {
        devicePixelRatio: 2
      });
      chart.setOption({
        title: {
          text: '环保码区域分析',
          top: 10,
          textStyle: {
            fontSize: 15,
            fontWeight: 900
          }
        },
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          right: 10,
          top: 10
        },
        grid: {
          top: '8%',
          left: '3%',
          right: '10%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '家',
          interval: 1,
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: yAxisData,
          inverse: true,
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: '#000',
            formatter: function formatter(data) {
              if (data.length > 3) {
                if (data.length > 8) {
                  if (data.length > 10) {
                    if (data.length > 15) {
                      return data.substr(0, 8) + '\n' + data.substr(8, data.length);
                    } else {
                      return data.substr(0, 6) + '\n' + data.substr(6, data.length);
                    }
                  } else {
                    return data.substr(0, 5) + '\n' + data.substr(5, 5) + '\n' + data.substr(10, data.length);
                  }
                } else {
                  return data.substr(0, 4) + '\n' + data.substr(4, data.length);
                }
              } else {
                return data;
              }
            }
          }
        },
        series: [{
          name: '红码',
          type: 'bar',
          barWidth: 10,
          color: 'red',
          data: red
        }, {
          name: '黄码',
          type: 'bar',
          barWidth: 10,
          color: '#FFC420',
          data: yellow
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "统计报表", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "scroll-to-top-wrapper" }, [
        _c("div", {
          staticStyle: {
            width: "100%",
            height: "680px",
            "background-color": "#fff",
          },
          attrs: { id: "AreaChart" },
        }),
        _c(
          "div",
          { staticClass: "table_div" },
          [
            _c(
              "van-row",
              { staticClass: "row_header" },
              [
                _c("van-col", { staticClass: "col_first" }, [
                  _vm._v("行政区划"),
                ]),
                _c("van-col", { staticClass: "col" }, [_vm._v("红码")]),
                _c("van-col", { staticClass: "col" }, [_vm._v("黄码")]),
              ],
              1
            ),
            _vm._l(_vm.tableData, function (item) {
              return _c(
                "van-row",
                { staticClass: "row_content" },
                [
                  _c("van-col", { staticClass: "col_first" }, [
                    _vm._v(_vm._s(item.MC)),
                  ]),
                  _c("van-col", { staticClass: "col" }, [
                    _vm._v(_vm._s(item.RED_COUNT)),
                  ]),
                  _c("van-col", { staticClass: "col" }, [
                    _vm._v(_vm._s(item.YELLOW_COUNT)),
                  ]),
                ],
                1
              )
            }),
          ],
          2
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*.index-page {*/\n/*    height: calc(100vh - 50px);*/\n/*    overflow-y: auto;*/\n/*    padding-top: 50px;*/\n/*    .detailContent {*/\n/*        width: 100%;*/\n/*        height: 100%;*/\n/*        background-color: #eee;*/\n.table_div[data-v-142c31b7] {\n  margin-top: 10px;\n  background-color: #fff;\n  padding: 5px;\n}\n.table_div .row_header[data-v-142c31b7] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 40px;\n  background: #eeeeeed9;\n  color: #3d4d60;\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.table_div .row_header .col_first[data-v-142c31b7] {\n  width: 66%;\n  text-align: left;\n}\n.table_div .row_header .col[data-v-142c31b7] {\n  width: 17%;\n  text-align: center;\n}\n.table_div .row_content[data-v-142c31b7] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 35px;\n  border-bottom: 1px solid #eee;\n  border-left: 1px solid #eee;\n  padding-left: 5px;\n  font-size: 14px;\n}\n.table_div .row_content .col_first[data-v-142c31b7] {\n  width: 66%;\n  text-align: left;\n  border-right: 1px solid #eee;\n}\n.table_div .row_content .col[data-v-142c31b7] {\n  width: 17%;\n  text-align: center;\n  border-right: 1px solid #eee;\n}\n\n/*    }*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b16506ae", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: querySupervision, queryHbmTrend, queryHbmAnalysis, queryHbmCodeAnalysis, queryApprovalList, submitDeptApproval, queryClueTypes, queryWRYList, queryAreas, getTaskInfo, getEvaluateInfo, getRiskType, queryRuleList, queryHbmDepartment, checkRules, editRules, queryWRYMap, queryStatistics, complaintProportion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySupervision", function() { return querySupervision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmTrend", function() { return queryHbmTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmAnalysis", function() { return queryHbmAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmCodeAnalysis", function() { return queryHbmCodeAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryApprovalList", function() { return queryApprovalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDeptApproval", function() { return submitDeptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryClueTypes", function() { return queryClueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYList", function() { return queryWRYList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAreas", function() { return queryAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskInfo", function() { return getTaskInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvaluateInfo", function() { return getEvaluateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRiskType", function() { return getRiskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryRuleList", function() { return queryRuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmDepartment", function() { return queryHbmDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRules", function() { return checkRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRules", function() { return editRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYMap", function() { return queryWRYMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStatistics", function() { return queryStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complaintProportion", function() { return complaintProportion; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");
 // ======================================== 首页 =====================================
//环保码

var querySupervision = function querySupervision() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/supervision',
    method: 'get',
    params: {}
  });
}; //环保码变化趋势

var queryHbmTrend = function queryHbmTrend(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/changing_trends',
    method: 'get',
    params: params
  });
}; //环保码原因分析

var queryHbmAnalysis = function queryHbmAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/cause_analysis',
    method: 'get',
    params: params
  });
}; //环保码原因详情

var queryHbmCodeAnalysis = function queryHbmCodeAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_detail',
    method: 'get',
    params: params
  });
}; //待审核列表

var queryApprovalList = function queryApprovalList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/pending_review_list',
    method: 'get',
    params: params
  });
}; //审核

var submitDeptApproval = function submitDeptApproval(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/department_approval',
    method: 'post',
    data: params
  });
}; // 赋码类型下拉框

var queryClueTypes = function queryClueTypes() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/type_list',
    method: 'get',
    params: {}
  });
}; //污染源列表

var queryWRYList = function queryWRYList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_list',
    method: 'get',
    params: params
  });
}; //区域下拉框

var queryAreas = function queryAreas() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/division_list',
    method: 'get',
    params: {}
  });
}; //任务概括

var getTaskInfo = function getTaskInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/law/task_summarize',
    method: 'get',
    params: {}
  });
}; //风险总览

var getEvaluateInfo = function getEvaluateInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/region_map',
    method: 'get',
    params: data
  });
}; // 风险问题类型

var getRiskType = function getRiskType() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/top_info',
    method: 'get',
    params: {}
  });
}; // ==================================== 赋码规则 ====================================
//环保码规则查询

var queryRuleList = function queryRuleList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/rule_list',
    method: 'get',
    params: params
  });
}; //部门下拉框

var queryHbmDepartment = function queryHbmDepartment() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/interface/dept/dept_tree',
    method: 'GET',
    params: {}
  });
}; //校验

var checkRules = function checkRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/check',
    method: 'get',
    params: params
  });
}; // 修改规则

var editRules = function editRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/update',
    method: 'post',
    data: params
  });
}; // ====================================== 地图 ===================================
// 地图点位

var queryWRYMap = function queryWRYMap(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_map',
    method: 'get',
    params: params
  });
}; // ====================================== 统计报表 ===================================

var queryStatistics = function queryStatistics() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/app/statistics/division_pie',
    method: 'get',
    params: {}
  });
}; // ====================================== 动态评价 ===================================
//各区域投诉占比

var complaintProportion = function complaintProportion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cluster/airQuality/complaintProportion',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/views/environmentCode/codeStatis/index.vue":
/*!********************************************************!*\
  !*** ./src/views/environmentCode/codeStatis/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=142c31b7&scoped=true& */ "./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& */ "./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "142c31b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/codeStatis/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=style&index=0&id=142c31b7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142c31b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=142c31b7&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/codeStatis/index.vue?vue&type=template&id=142c31b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_142c31b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlU3RhdGlzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVTdGF0aXMvaW5kZXgudnVlPzYwMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlU3RhdGlzL2luZGV4LnZ1ZT9hYjAwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVN0YXRpcy9pbmRleC52dWU/NmZkMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVN0YXRpcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlU3RhdGlzL2luZGV4LnZ1ZT8xODkzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvY29kZVN0YXRpcy9pbmRleC52dWU/N2RlMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2NvZGVTdGF0aXMvaW5kZXgudnVlPzY1NGEiXSwibmFtZXMiOlsicXVlcnlTdXBlcnZpc2lvbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJxdWVyeUhibVRyZW5kIiwicXVlcnlIYm1BbmFseXNpcyIsInF1ZXJ5SGJtQ29kZUFuYWx5c2lzIiwicXVlcnlBcHByb3ZhbExpc3QiLCJzdWJtaXREZXB0QXBwcm92YWwiLCJkYXRhIiwicXVlcnlDbHVlVHlwZXMiLCJxdWVyeVdSWUxpc3QiLCJxdWVyeUFyZWFzIiwiZ2V0VGFza0luZm8iLCJnZXRFdmFsdWF0ZUluZm8iLCJnZXRSaXNrVHlwZSIsInF1ZXJ5UnVsZUxpc3QiLCJxdWVyeUhibURlcGFydG1lbnQiLCJjaGVja1J1bGVzIiwiZWRpdFJ1bGVz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QUMseUNBRE87QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFTTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQzs7Ozs7Ozs7Ozs7O0FDdEpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBTLENBQWdCLHNVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzEyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHZhbi1uYXYtYmFyIHRpdGxlPVwi57uf6K6h5oql6KGoXCIgbGVmdC1hcnJvdyBmaXhlZCBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+PC92YW4tbmF2LWJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJBcmVhQ2hhcnRcIiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjY4MHB4O2JhY2tncm91bmQtY29sb3I6ICNmZmZcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX2RpdlwiPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1yb3cgY2xhc3M9XCJyb3dfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1jb2wgY2xhc3M9XCJjb2xfZmlyc3RcIj7ooYzmlL/ljLrliJI8L3Zhbi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1jb2wgY2xhc3M9XCJjb2xcIj7nuqLnoIE8L3Zhbi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1jb2wgY2xhc3M9XCJjb2xcIj7pu4TnoIE8L3Zhbi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L3Zhbi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXJvdyBjbGFzcz1cInJvd19jb250ZW50XCIgdi1mb3I9XCJpdGVtIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tY29sIGNsYXNzPVwiY29sX2ZpcnN0XCI+e3sgaXRlbS5NQyB9fTwvdmFuLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWNvbCBjbGFzcz1cImNvbFwiPnt7IGl0ZW0uUkVEX0NPVU5UIH19PC92YW4tY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tY29sIGNsYXNzPVwiY29sXCI+e3sgaXRlbS5ZRUxMT1dfQ09VTlQgfX08L3Zhbi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L3Zhbi1yb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSAgICAgICAgICAgIDx2YW4tdGFibGUtLT5cclxuICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTA4MHB4XCItLT5cclxuICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0YWJsZURhdGFcIi0tPlxyXG4gICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICBzdHJpcGUgYm9yZGVyLS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDpoZWFkZXItY2VsbC1zdHlsZT1cIntiYWNrZ3JvdW5kOicjZWVlZWVlZDknLCBjb2xvcjonIzNkNGQ2MCcsZm9udFNpemU6JzE0cHgnfVwiLS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICA+LS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgPHZhbi10YWJsZS1jb2x1bW4gbGFiZWw9XCLooYzmlL/ljLrliJJcIiBwcm9wPVwiTUNcIj48L3Zhbi10YWJsZS1jb2x1bW4+LS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgPHZhbi10YWJsZS1jb2x1bW4gbGFiZWw9XCLnuqLnoIFcIiBwcm9wPVwiUkVEX0NPVU5UXCIgOndpZHRoPVwiNzBcIj48L3Zhbi10YWJsZS1jb2x1bW4+LS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgPHZhbi10YWJsZS1jb2x1bW4gbGFiZWw9XCLpu4TnoIFcIiBwcm9wPVwiWUVMTE9XX0NPVU5UXCIgOndpZHRoPVwiNzBcIj48L3Zhbi10YWJsZS1jb2x1bW4+LS0+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICA8L3Zhbi10YWJsZT4tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IHF1ZXJ5U3RhdGlzdGljcyB9IGZyb20gJ0AvYXBpL2luZGV4JztcclxuICAgIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFibGVEYXRhOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGlzdGljc0RhdGEoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0U3RhdGlzdGljc0RhdGEoKXtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RhdGlzdGljcygpLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0TGluZUNoYXJ0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXRMaW5lQ2hhcnQoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeUF4aXNEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgeWVsbG93ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgeUF4aXNEYXRhLnB1c2goZGF0YVtpXS5NQyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkLnB1c2goZGF0YVtpXS5SRURfQ09VTlQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllbGxvdy5wdXNoKGRhdGFbaV0uWUVMTE9XX0NPVU5UKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBjaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXJlYUNoYXJ0JyksIG51bGwsIHtkZXZpY2VQaXhlbFJhdGlvOiAyfSk7XHJcbiAgICAgICAgICAgICAgICBjaGFydC5zZXRPcHRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfnjq/kv53noIHljLrln5/liIbmnpAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmluZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzaGFkb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzglJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzMlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcxMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICcxJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WuticsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OmZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeUF4aXNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzTGluZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOicjZWVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWw6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOmZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPiAzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPiA4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnN1YnN0cigwLCA4KSArICdcXG4nICsgZGF0YS5zdWJzdHIoOCwgZGF0YS5sZW5ndGgpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5zdWJzdHIoMCwgNikgKyAnXFxuJyArIGRhdGEuc3Vic3RyKDYsIGRhdGEubGVuZ3RoKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5zdWJzdHIoMCwgNSkgKyAnXFxuJyArIGRhdGEuc3Vic3RyKDUsIDUpICsgJ1xcbicgKyBkYXRhLnN1YnN0cigxMCwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuc3Vic3RyKDAsNCkgKyAnXFxuJyArIGRhdGEuc3Vic3RyKDQsZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfnuqLnoIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+m7hOeggScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0ZGQzQyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB5ZWxsb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLyouaW5kZXgtcGFnZSB7Ki9cclxuICAgIC8qICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpOyovXHJcbiAgICAvKiAgICBvdmVyZmxvdy15OiBhdXRvOyovXHJcbiAgICAvKiAgICBwYWRkaW5nLXRvcDogNTBweDsqL1xyXG5cclxuICAgIC8qICAgIC5kZXRhaWxDb250ZW50IHsqL1xyXG4gICAgLyogICAgICAgIHdpZHRoOiAxMDAlOyovXHJcbiAgICAvKiAgICAgICAgaGVpZ2h0OiAxMDAlOyovXHJcbiAgICAvKiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTsqL1xyXG4gICAgICAgICAgICAudGFibGVfZGl2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAucm93X2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZWQ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Q0ZDYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xfZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvd19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xfZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLyogICAgfSovXHJcbiAgICAvKn0qL1xyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLnu5/orqHmiqXooahcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIsIGZpeGVkOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNjgwcHhcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIkFyZWFDaGFydFwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfZGl2XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2YW4tcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93X2hlYWRlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInZhbi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xfZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLooYzmlL/ljLrliJJcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ2YW4tY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW192bS5fdihcIue6oueggVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmFuLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtfdm0uX3YoXCLpu4TnoIFcIildKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dfY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sX2ZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uTUMpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uUkVEX0NPVU5UKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLllFTExPV19DT1VOVCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyouaW5kZXgtcGFnZSB7Ki9cXG4vKiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsqL1xcbi8qICAgIG92ZXJmbG93LXk6IGF1dG87Ki9cXG4vKiAgICBwYWRkaW5nLXRvcDogNTBweDsqL1xcbi8qICAgIC5kZXRhaWxDb250ZW50IHsqL1xcbi8qICAgICAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgICAgICBoZWlnaHQ6IDEwMCU7Ki9cXG4vKiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTsqL1xcbi50YWJsZV9kaXZbZGF0YS12LTE0MmMzMWI3XSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnRhYmxlX2RpdiAucm93X2hlYWRlcltkYXRhLXYtMTQyYzMxYjddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWVkOTtcXG4gIGNvbG9yOiAjM2Q0ZDYwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udGFibGVfZGl2IC5yb3dfaGVhZGVyIC5jb2xfZmlyc3RbZGF0YS12LTE0MmMzMWI3XSB7XFxuICB3aWR0aDogNjYlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnRhYmxlX2RpdiAucm93X2hlYWRlciAuY29sW2RhdGEtdi0xNDJjMzFiN10ge1xcbiAgd2lkdGg6IDE3JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhYmxlX2RpdiAucm93X2NvbnRlbnRbZGF0YS12LTE0MmMzMWI3XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFibGVfZGl2IC5yb3dfY29udGVudCAuY29sX2ZpcnN0W2RhdGEtdi0xNDJjMzFiN10ge1xcbiAgd2lkdGg6IDY2JTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG4udGFibGVfZGl2IC5yb3dfY29udGVudCAuY29sW2RhdGEtdi0xNDJjMzFiN10ge1xcbiAgd2lkdGg6IDE3JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcbi8qICAgIH0qL1xcbi8qfSovXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNDJjMzFiNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImIxNjUwNmFlXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTQyYzMxYjcmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNDJjMzFiNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDpppbpobUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdXBlcnZpc2lvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9zdXBlcnZpc2lvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWPmOWMlui2i+WKv1xyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1UcmVuZCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jaGFuZ2luZ190cmVuZHMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug5YiG5p6QXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NhdXNlX2FuYWx5c2lzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOivpuaDhVxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1Db2RlQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lvoXlrqHmoLjliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXBwcm92YWxMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3BlbmRpbmdfcmV2aWV3X2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBzdWJtaXREZXB0QXBwcm92YWwgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvZGVwYXJ0bWVudF9hcHByb3ZhbCcsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDotYvnoIHnsbvlnovkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2x1ZVR5cGVzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3R5cGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+axoeafk+a6kOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WMuuWfn+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlBcmVhcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9kaXZpc2lvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5Lu75Yqh5qaC5ousXHJcbmV4cG9ydCBjb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvbGF3L3Rhc2tfc3VtbWFyaXplJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v6aOO6Zmp5oC76KeIXHJcbmV4cG9ydCBjb25zdCBnZXRFdmFsdWF0ZUluZm8gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9yZWdpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6aOO6Zmp6Zeu6aKY57G75Z6LXHJcbmV4cG9ydCBjb25zdCBnZXRSaXNrVHlwZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdG9wX2luZm8nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOi1i+eggeinhOWImSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIHop4TliJnmn6Xor6JcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5UnVsZUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3J1bGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/pg6jpl6jkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtRGVwYXJ0bWVudCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9pbnRlcmZhY2UvZGVwdC9kZXB0X3RyZWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/moKHpqoxcclxuZXhwb3J0IGNvbnN0IGNoZWNrUnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL2NoZWNrJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDkv67mlLnop4TliJlcclxuZXhwb3J0IGNvbnN0IGVkaXRSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdXBkYXRlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWcsOWbviA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDlnLDlm77ngrnkvY1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTWFwID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOe7n+iuoeaKpeihqCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdGF0aXN0aWNzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2FwcC9zdGF0aXN0aWNzL2RpdmlzaW9uX3BpZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDliqjmgIHor4Tku7cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/lkITljLrln5/mipXor4nljaDmr5RcclxuZXhwb3J0IGNvbnN0IGNvbXBsYWludFByb3BvcnRpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOicvY2x1c3Rlci9haXJRdWFsaXR5L2NvbXBsYWludFByb3BvcnRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0MmMzMWI3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0MmMzMWI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTQyYzMxYjdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQyYzMxYjcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQyYzMxYjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQyYzMxYjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDJjMzFiNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNDJjMzFiNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9jb2RlU3RhdGlzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0MmMzMWI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0MmMzMWI3JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==