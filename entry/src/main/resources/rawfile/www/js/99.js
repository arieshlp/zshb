(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/index.js */ "./src/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "codingReasonDetail",
  components: {},
  data: function data() {
    return {
      dwid: '',
      companyObj: null,
      codeObj: null,
      codeinfoObj: {}
    };
  },
  mounted: function mounted() {
    this.dwid = this.$route.query.id;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var params = {
        id: this.dwid
      };
      Object(_api_index_js__WEBPACK_IMPORTED_MODULE_0__["queryHbmCodeAnalysis"])(params).then(function (res) {
        _this.companyObj = res.data.detail;
        _this.codeinfoObj = res.data.rule_info;
        _this.codeObj = res.data.rule;
      });
    },
    goXz: function goXz() {// this.$router.push({
      // 	path: '/MonitorLimitDes',
      // 	query: {
      // 			type:0,
      // 			name:this.companyObj.wrymc,
      // 			xkzh:this.companyObj.pwxkzh,
      // 			id: this.companyObj.id,
      // 			title:"排污年限值许可详情"
      // 		}
      // })
    },
    onTo: function onTo(item) {
      if (item.type === '排污许可证') {
        //          this.$router.push({
        // 	path: '/MonitorLimitDes',
        // 	query: {
        // 			type:0,
        // 			name:this.companyObj.wrymc,
        // 			xkzh:this.companyObj.pwxkzh,
        // 			id: this.companyObj.id,
        // 			title:"排污年限值许可详情"
        // 		}
        // })
        this.$router.push({
          name: 'licenceDetail',
          query: {
            id: item.site_id,
            title: "许可证详情"
          }
        });
      } else if (item.type == '辐射安全') {
        this.$router.push({
          name: "safeDetail",
          query: {
            type: 0,
            id: item.site_id,
            // id: item.id,
            title: "辐射安全"
          }
        });
      } else if (item.type == '行政处罚') {
        this.$router.push({
          name: "penaltyDetail",
          query: {
            type: 0,
            id: item.id,
            title: "行政处罚详情"
          }
        });
      } else if (item.type == '执法检查') {
        this.$router.push({
          name: "lawCheckDetail",
          query: {
            type: 0,
            id: item.id,
            title: "执法检查详情"
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true& ***!
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
    { staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "企业环境赋码原因详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticStyle: { height: "calc(100vh - 9vh)", "overflow-y": "auto" } },
        [
          _c(
            "div",
            {
              staticClass: "qr_title company_title",
              on: {
                click: function ($event) {
                  return _vm.goXz()
                },
              },
            },
            [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../../../assets/polluter/company.png */ "./src/assets/polluter/company.png") },
              }),
              _c("span", [_vm._v(_vm._s(_vm.companyObj.wrymc) + " ")]),
              _c(
                "div",
                {
                  staticClass: "tips",
                  staticStyle: { "margin-left": "auto", width: "70px" },
                },
                [
                  _c(
                    "span",
                    {
                      class:
                        _vm.codeinfoObj.qr_code_color == "红色"
                          ? "tips_color"
                          : _vm.codeinfoObj.qr_code_color == "黄色"
                          ? "tips_color_yellow"
                          : "tips_color_green",
                      staticStyle: { padding: "0 10px" },
                    },
                    [_vm._v(" " + _vm._s(_vm.codeinfoObj.qr_code_color) + " ")]
                  ),
                ]
              ),
            ]
          ),
          _vm._l(_vm.codeObj, function (item) {
            return _c(
              "div",
              {
                staticClass: "qrCode-info redBg",
                staticStyle: { "margin-top": "0px" },
                on: {
                  click: function ($event) {
                    return _vm.onTo(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "company_title" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/polluter/yellowInfo.png */ "./src/assets/polluter/yellowInfo.png"),
                    },
                  }),
                  _c("span", { staticClass: "black_content" }, [
                    _vm._v(_vm._s(item.type)),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "tips",
                      staticStyle: { "margin-left": "auto" },
                    },
                    [
                      _c("span", { staticClass: "tips_color_yellow" }, [
                        _vm._v(_vm._s(_vm.codeObj.length) + "件"),
                      ]),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码状态")]),
                    _c("span", [_vm._v(_vm._s(item.qr_code_color))]),
                  ]),
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码规则")]),
                    _c("span", [_vm._v(_vm._s(item.rule))]),
                  ]),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码时间")]),
                    _c("span", [_vm._v(_vm._s(item.time))]),
                  ]),
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码持续时间")]),
                    _c("span", [_vm._v(_vm._s(item.day))]),
                  ]),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("审核人")]),
                    _c("span", [_vm._v(_vm._s(item.reviewer))]),
                  ]),
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("赋码原因")]),
                    _c("span", [_vm._v(_vm._s(item.cause))]),
                  ]),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("解码时间")]),
                    _c("span", [_vm._v(_vm._s(item.decode_time))]),
                  ]),
                  _c("div", { staticClass: "half_width no_bottom" }, [
                    _c("span", [_vm._v("解码颜色")]),
                    _c("span", [_vm._v(_vm._s(item.decode_color))]),
                  ]),
                ]),
              ]
            )
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tips_color[data-v-1c315f6e] {\n  background: rgba(255, 87, 51, 0.1);\n  color: #ff5733;\n}\n.tips_color_green[data-v-1c315f6e] {\n  background: #edffed;\n  color: #06b82f;\n}\n.tips_color_blue[data-v-1c315f6e] {\n  background: #f5edff;\n  color: #6c04d4;\n}\n.tips_color_yellow[data-v-1c315f6e] {\n  color: #ffa200;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1bc5099c", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/polluter/company.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/company.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFzSURBVCiRlZC/S1tRFMc/5973ErV2UGw62MlVipuhEAjiK7gUujo4OHV1E5oEFEkF/RvcO7ZbWwKCqJsU/QNcaymaQUlI3r3vdGgSnq8v0H6ne358zvmeK+TozY5OdWPXANloNYMXeT1BNvG65ta7sT8EmQe6edAjcKXRW7TeHimUxzWnJQBRLd4H2R7GKXVU7YIxvtzp2+OzA7kfFsyA38yB/lRsv6TK58nQt6O6O1+t+3cpcLwsYkZP5ZWo7j66EfjVagalYRDV3E/giXr1eV7S4LOo5jR7o1ixJH+Daas3M6EttpqBzIS2CPwA9Ote4bLVDESUjXEb59rOf4vqjrbzAHNAHDV6L0nsVdZKGnwQ9INCX6CgyEegYLqF62TCraCmArqXB04r8h5gMH0aiH3Ac0F2gNlxGwOUasZRHITxU5+Y6mhczuf8l0RP2Tq9ebvmkrCYLRrUL82eXHy/qy6PbJm4Vyl9+iJ6wm3W/z/o7jdHZn6ZAuebwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/yellowInfo.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/yellowInfo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFKSURBVCiRdZIxSyNRFIW/M3kqZAYURMEuLFhts5K/YBEC4lYLIjbaiGyZv6GNWPgHthRdFon+A1HQ1mbXTlh2LTYaJE7mWMS4mWRyi/cu595z7zm8JwbCp8lcihtIVeDTG3wNvgxptKeV1p9+r/pJ2ow3bO0D0xTHg6TNUGudvBM7zeSrzP5gl+AAU7LYzuHyeqg9fdPzj+kPpVL3Fgg52cqqCCmLroY2t4OphBC6DTtP6m0sxRjoHYNRTiO2g83nYktZrMyyotGSWQ3AbBFNKEZFLAAWI/BLYclOMhSPISoC3RUKtcrI44g/A+YE8XFkpFjD/985r4YjuVleSB39AqaGyo9vdzKMhwlVItXa97Z2Rofq2OZ7gZItLbf+Dny55IvhEDMzxtdv7I2J+tM5kPfgs2Q+zdwAVYElTAdxg7gI2eSu6g//+r2vOP1t9KZrneEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/pollution/detail/codingReasonDetail.vue":
/*!***********************************************************!*\
  !*** ./src/views/pollution/detail/codingReasonDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true& */ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true&");
/* harmony import */ var _codingReasonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codingReasonDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& */ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _codingReasonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c315f6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/codingReasonDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./codingReasonDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=style&index=0&id=1c315f6e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_style_index_0_id_1c315f6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/codingReasonDetail.vue?vue&type=template&id=1c315f6e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_codingReasonDetail_vue_vue_type_template_id_1c315f6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29kaW5nUmVhc29uRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb2RpbmdSZWFzb25EZXRhaWwudnVlP2IxNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT9hNTgwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/ZmRlMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvY29tcGFueS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dJbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb2RpbmdSZWFzb25EZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/NWY2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb2RpbmdSZWFzb25EZXRhaWwudnVlPzVlNWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT9jZjMxIl0sIm5hbWVzIjpbInF1ZXJ5U3VwZXJ2aXNpb24iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwicXVlcnlIYm1UcmVuZCIsInF1ZXJ5SGJtQW5hbHlzaXMiLCJxdWVyeUhibUNvZGVBbmFseXNpcyIsInF1ZXJ5QXBwcm92YWxMaXN0Iiwic3VibWl0RGVwdEFwcHJvdmFsIiwiZGF0YSIsInF1ZXJ5Q2x1ZVR5cGVzIiwicXVlcnlXUllMaXN0IiwicXVlcnlBcmVhcyIsImdldFRhc2tJbmZvIiwiZ2V0RXZhbHVhdGVJbmZvIiwiZ2V0Umlza1R5cGUiLCJxdWVyeVJ1bGVMaXN0IiwicXVlcnlIYm1EZXBhcnRtZW50IiwiY2hlY2tSdWxlcyIsImVkaXRSdWxlcyIsInF1ZXJ5V1JZTWFwIiwicXVlcnlTdGF0aXN0aWNzIiwiY29tcGxhaW50UHJvcG9ydGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSkE7QUFDQTtBQUNBLDRCQURBO0FBRUEsZ0JBRkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxjQURBO0FBRUEsc0JBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkE7QUFNQSxHQVpBO0FBYUEsU0FiQSxxQkFhQTtBQUNBO0FBQ0E7QUFDQSxHQWhCQTtBQWlCQTtBQUNBLFlBREEsc0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQVZBO0FBV0EsUUFYQSxrQkFXQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkEsUUF2QkEsZ0JBdUJBLElBdkJBLEVBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQTtBQUNBLDRCQURBO0FBRUE7QUFGQTtBQUZBO0FBT0EsT0FsQkEsTUFrQkE7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFDQTtBQUpBO0FBRkE7QUFTQSxPQVZBLE1BVUE7QUFDQTtBQUNBLCtCQURBO0FBRUE7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PHRlbXBsYXRlPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi5LyB5Lia546v5aKD6LWL56CB5Y6f5Zug6K+m5oOFXCJcclxuICAgICAgICAgICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICAgICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl90aXRsZSBjb21wYW55X3RpdGxlXCIgQGNsaWNrPVwiZ29YeigpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9jb21wYW55LnBuZ1wiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gc3R5bGU9XCJ7J3RleHQtZGVjb3JhdGlvbic6IGNvZGVPYmoudHlwZT09PSfmjpLmsaHorrjlj6/or4EnPyd1bmRlcmxpbmUnOicnfVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tjb21wYW55T2JqLndyeW1jfX0gPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiPnt7Y29kZWluZm9PYmoucXJfY29kZV9jb2xvcn19PC9zcGFuPiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bzt3aWR0aDo3MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cInBhZGRpbmc6MCAxMHB4O1wiIDpjbGFzcz1cImNvZGVpbmZvT2JqLnFyX2NvZGVfY29sb3I9PSfnuqLoibInPyd0aXBzX2NvbG9yJzpjb2RlaW5mb09iai5xcl9jb2RlX2NvbG9yPT0n6buE6ImyJz8ndGlwc19jb2xvcl95ZWxsb3cnOid0aXBzX2NvbG9yX2dyZWVuJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7e2NvZGVpbmZvT2JqLnFyX2NvZGVfY29sb3J9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxckNvZGUtaW5mbyByZWRCZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMHB4O1wiIHYtZm9yPVwiaXRlbSBpbiBjb2RlT2JqXCIgIEBjbGljaz1cIm9uVG8oaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIveWVsbG93SW5mby5wbmdcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+e3tpdGVtLnR5cGV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwidGlwc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+PHNwYW4gY2xhc3M9XCJ0aXBzX2NvbG9yX3llbGxvd1wiPnt7Y29kZU9iai5sZW5ndGh9feS7tjwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPui1i+eggeeKtuaAgTwvc3Bhbj48c3Bhbj57e2l0ZW0ucXJfY29kZV9jb2xvcn19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPui1i+eggeinhOWImTwvc3Bhbj48c3Bhbj57e2l0ZW0ucnVsZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6LWL56CB5pe26Ze0PC9zcGFuPjxzcGFuPnt7aXRlbS50aW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6LWL56CB5oyB57ut5pe26Ze0PC9zcGFuPjxzcGFuPnt7aXRlbS5kYXl9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWuoeaguOS6ujwvc3Bhbj48c3Bhbj57e2l0ZW0ucmV2aWV3ZXJ9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7otYvnoIHljp/lm6A8L3NwYW4+PHNwYW4+e3tpdGVtLmNhdXNlfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7op6PnoIHml7bpl7Q8L3NwYW4+PHNwYW4+e3tpdGVtLmRlY29kZV90aW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6Kej56CB6aKc6ImyPC9zcGFuPjxzcGFuPnt7aXRlbS5kZWNvZGVfY29sb3J9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJxckNvZGUtaW5mbyByZWRCZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInFyX25vdGljZV9yZWRcIj7mjpLmsaHorrjlj6/or4HliLDmnJ/mnKrmjaLor4HotYvnmoTkvIHkuJrnuqLnoIE8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+LS0+XHJcblxyXG4gICAgICAgICAgIDwhLS0gIDxkaXYgY2xhc3M9XCJxckNvZGUtaW5mbyB5ZWxsb3dCZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dJbmZvLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7miafms5Xmo4Dmn6U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO1wiPjxzcGFuIGNsYXNzPVwidGlwc19jb2xvcl95ZWxsb3dcIj4y5Lu2PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuPjEuPC9zcGFuPjwvZGl2PjxkaXY+PHNwYW4+6L+d5rOV6KGM5Li6PC9zcGFuPjxzcGFuPui/neWPjeW7uuetkemhueebrueOr+Wig+W9seWTjeivhOS7t+WItuW6pjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1bGlkX21haW5faHJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxckNvZGVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4+Mi48L3NwYW4+PC9kaXY+PGRpdj48c3Bhbj7ov53ms5XooYzkuLo8L3NwYW4+PHNwYW4+6L+d5Y+N5bu6562R6aG555uu546v5aKD5b2x5ZON6K+E5Lu35Yi25bqmPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8geWVsbG93QmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl9ub3RpY2VfeWVsbG93XCI+6L+R5LiJ5Liq5pyI5YaF5omn5rOV5qOA5p+l5a2Y5Zyo6Zeu6aKY55qE5LyB5Lia6LWL6buE56CBPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8gcmVkQmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmVkSW5mby5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+6ZmQ5pyf5pW05pS5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztcIj48c3BhbiBjbGFzcz1cInRpcHNfY29sb3JcIj4y5Lu2PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuPjEuPC9zcGFuPjwvZGl2PjxkaXY+PHNwYW4+5pW05pS56Zeu6aKYPC9zcGFuPjxzcGFuPjEj77yMMuOAgTMj55CD5Zui6ISx56Gr57O757uf5o6S5Y+j5Zyo5bu6PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVsaWRfbWFpbl9oclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInFyQ29kZV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48c3Bhbj4yLjwvc3Bhbj48L2Rpdj48ZGl2PjxzcGFuPuaVtOaUuemXrumimDwvc3Bhbj48c3Bhbj4xI++8jDLjgIEzI+eQg+WbouiEseehq+ezu+e7n+aOkuWPo+WcqOW7ujwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInFyQ29kZS1pbmZvIHJlZEJnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJfbm90aWNlX3JlZFwiPuaOkuaxoeiuuOWPr+ivgemZkOacn+aVtOaUueacquaMieaXtuWujOaIkOeahOS8geS4mui1i+e6oueggTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxckNvZGUtaW5mbyByZWRCZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9yZWRJbmZvLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7ooYzmlL/lpITnvZo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO1wiPjxzcGFuIGNsYXNzPVwidGlwc19jb2xvclwiPjHku7Y8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxckNvZGVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4+MS48L3NwYW4+PC9kaXY+PGRpdj48c3Bhbj7ov53ms5XooYzkuLo8L3NwYW4+PHNwYW4+6L+d5Y+N546v5aKD5b2x5ZON6K+E5Lu35Yi25bqmO+i/neWPjeW7uuiuvumhueebrlwi5LiJ5ZCM5pe24oCd5Y+K6aqM5pS25Yi25bqmPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8gcmVkQmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl9ub3RpY2VfcmVkXCI+5o6S5rGh6K645Y+v6K+B6ZmQ5pyf5pW05pS55pyq5oyJ5pe25a6M5oiQ55qE5LyB5Lia6LWL57qi56CBPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInFyQ29kZS1pbmZvIHJlZEJnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3JlZEluZm8ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPuWcqOe6v+ebkeaOp+axoeafk+aOkuaUvuaAu+mHjzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+PHNwYW4gY2xhc3M9XCJ0aXBzX2NvbG9yXCI+6LaF5qCHPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5bqf5rC05b2T5YmN5o6S5pS+6YePPC9zcGFuPjxzcGFuPjczNDguNzPlkKg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6ZmQ5YC8PC9zcGFuPjxzcGFuPjczNDguNzPlkKg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8geWVsbG93QmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIveWVsbG93SW5mby5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibGFja19jb250ZW50XCI+5Zyo57q/55uR5o6n5bqf5rC05o6S5pS+6YePPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztcIj48c3BhbiBjbGFzcz1cInRpcHNfY29sb3JfeWVsbG93XCI+6aKE6K2mPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5Zyo57q/55uR5o6n5oC76YePPC9zcGFuPjxzcGFuPjc0OC43OOWQqDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7nrKzkuIDlraPluqbljaDmgLvph4/mr5Q8L3NwYW4+PHNwYW4+NTAlPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8geWVsbG93QmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl9ub3RpY2VfeWVsbG93XCI+6Ieq5Yqo55uR5o6n56ys5LiA5a2j5bqm5Zyo57q/55uR5o6n5oC76YeP6LaF6K645Y+v5oC76YePNTAl55qE5LyB5Lia6LWL6buE56CBPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInFyQ29kZS1pbmZvIHllbGxvd0JnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3llbGxvd0luZm8ucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPuaJp+ihjOaKpeWRijwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsYWNrX3JlZF9jb250ZW50XCI+5pyq5o+Q5LqkMuasoTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+PHNwYW4gY2xhc3M9XCJ0aXBzX2NvbG9yX3llbGxvd1wiPumihOitpjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aCBub19ib3R0b21cIj48c3Bhbj7mnIjmiqXvvIgy5qyh77yJPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aCBub19ib3R0b21cIj48c3Bhbj7lraPmiqXvvIgx5qyh77yJPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aCBub19ib3R0b21cIj48c3Bhbj7lubTmiqXvvIgw5qyh77yJPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8geWVsbG93QmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxcl9ub3RpY2VfeWVsbG93XCI+5o6S5rGh6K645Y+v6K+B5omn6KGM5oql5ZGK5pyq5oyJ5pe25o+Q5Lqk55qE5LyB5Lia6LWL6buE56CBPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IHF1ZXJ5SGJtQ29kZUFuYWx5c2lzIH0gZnJvbSBcIkAvYXBpL2luZGV4LmpzXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJjb2RpbmdSZWFzb25EZXRhaWxcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm57XHJcblx0XHRcdFx0XHRcdFx0ZHdpZDonJyxcclxuICAgICAgICAgICAgICAgIGNvbXBhbnlPYmo6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb2RlT2JqOiBudWxsLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29kZWluZm9PYmo6e31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblx0XHRcdFx0bW91bnRlZCgpe1xyXG5cdFx0XHRcdFx0dGhpcy5kd2lkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKClcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0XHRcdGxvYWREYXRhKCl7XHJcbiAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZHdpZFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgcXVlcnlIYm1Db2RlQW5hbHlzaXMocGFyYW1zKS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYW55T2JqID0gcmVzLmRhdGEuZGV0YWlsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvZGVpbmZvT2JqID0gcmVzLmRhdGEucnVsZV9pbmZvO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvZGVPYmogPSByZXMuZGF0YS5ydWxlO1xyXG4gICAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Z29Yeigpe1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdC8vIFx0cGF0aDogJy9Nb25pdG9yTGltaXREZXMnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcdHR5cGU6MCxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0bmFtZTp0aGlzLmNvbXBhbnlPYmoud3J5bWMsXHJcblx0XHRcdFx0XHRcdC8vIFx0XHRcdHhremg6dGhpcy5jb21wYW55T2JqLnB3eGt6aCxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0aWQ6IHRoaXMuY29tcGFueU9iai5pZCxcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0dGl0bGU6XCLmjpLmsaHlubTpmZDlgLzorrjlj6/or6bmg4VcIlxyXG5cdFx0XHRcdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0fSxcclxuICAgICAgICAgICAgb25UbyhpdGVtKXtcclxuXHRcdFx0XHRcdCAgICBpZihpdGVtLnR5cGU9PT0n5o6S5rGh6K645Y+v6K+BJyl7XHJcbiAgICAgICAgIC8vICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRwYXRoOiAnL01vbml0b3JMaW1pdERlcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0dHlwZTowLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRuYW1lOnRoaXMuY29tcGFueU9iai53cnltYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0eGt6aDp0aGlzLmNvbXBhbnlPYmoucHd4a3poLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRpZDogdGhpcy5jb21wYW55T2JqLmlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHR0aXRsZTpcIuaOkuaxoeW5tOmZkOWAvOiuuOWPr+ivpuaDhVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnbGljZW5jZURldGFpbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGl0ZW0uc2l0ZV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLorrjlj6/or4Hor6bmg4VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG4gICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0udHlwZT09J+i+kOWwhOWuieWFqCcpe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcInNhZmVEZXRhaWxcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGl0ZW0uc2l0ZV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpZDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIui+kOWwhOWuieWFqFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmKGl0ZW0udHlwZT09J+ihjOaUv+WkhOe9micpe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcInBlbmFsdHlEZXRhaWxcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGl0ZW0uaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLooYzmlL/lpITnvZror6bmg4VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihpdGVtLnR5cGU9PSfmiafms5Xmo4Dmn6UnKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogXCJsYXdDaGVja0RldGFpbFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIuaJp+azleajgOafpeivpuaDhVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi50aXBzX2NvbG9ye1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDAuMSk7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCA4NywgNTEsIDEpO1xyXG59XHJcbi50aXBzX2NvbG9yX2dyZWVue1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjM3LCAyNTUsIDIzNywgMSk7XHJcblx0Y29sb3I6IHJnYmEoNiwgMTg0LCA0NywgMSk7XHJcbn1cclxuLnRpcHNfY29sb3JfYmx1ZXtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjM3LCAyNTUsIDEpO1xyXG5cdGNvbG9yOiByZ2JhKDEwOCwgNCwgMjEyLCAxKTtcclxufVxyXG4udGlwc19jb2xvcl95ZWxsb3d7XHJcblx0Ly8gYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0MSwgMjA2LCAxKTtcclxuXHQvLyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LCAxNjIsIDAsIDEpO1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMTYyLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuS8geS4mueOr+Wig+i1i+eggeWOn+WboOivpuaDhVwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInFyX3RpdGxlIGNvbXBhbnlfdGl0bGVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1h6KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9jb21wYW55LnBuZ1wiKSB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21wYW55T2JqLndyeW1jKSArIFwiIFwiKV0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpcHNcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCJhdXRvXCIsIHdpZHRoOiBcIjcwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29kZWluZm9PYmoucXJfY29kZV9jb2xvciA9PSBcIue6ouiJslwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0aXBzX2NvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uY29kZWluZm9PYmoucXJfY29kZV9jb2xvciA9PSBcIum7hOiJslwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0aXBzX2NvbG9yX3llbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0aXBzX2NvbG9yX2dyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIwIDEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5jb2RlaW5mb09iai5xcl9jb2RlX2NvbG9yKSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl9sKF92bS5jb2RlT2JqLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXJDb2RlLWluZm8gcmVkQmdcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIwcHhcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVG8oaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIveWVsbG93SW5mby5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsYWNrX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50eXBlKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGlwc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcHNfY29sb3JfeWVsbG93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29kZU9iai5sZW5ndGgpICsgXCLku7ZcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui1i+eggeeKtuaAgVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5xcl9jb2RlX2NvbG9yKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLotYvnoIHop4TliJlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucnVsZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LWL56CB5pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui1i+eggeaMgee7reaXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5kYXkpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWuoeaguOS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5yZXZpZXdlcikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LWL56CB5Y6f5ZugXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNhdXNlKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLop6PnoIHml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGVjb2RlX3RpbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuino+eggeminOiJslwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5kZWNvZGVfY29sb3IpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGlwc19jb2xvcltkYXRhLXYtMWMzMTVmNmVdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDAuMSk7XFxuICBjb2xvcjogI2ZmNTczMztcXG59XFxuLnRpcHNfY29sb3JfZ3JlZW5bZGF0YS12LTFjMzE1ZjZlXSB7XFxuICBiYWNrZ3JvdW5kOiAjZWRmZmVkO1xcbiAgY29sb3I6ICMwNmI4MmY7XFxufVxcbi50aXBzX2NvbG9yX2JsdWVbZGF0YS12LTFjMzE1ZjZlXSB7XFxuICBiYWNrZ3JvdW5kOiAjZjVlZGZmO1xcbiAgY29sb3I6ICM2YzA0ZDQ7XFxufVxcbi50aXBzX2NvbG9yX3llbGxvd1tkYXRhLXYtMWMzMTVmNmVdIHtcXG4gIGNvbG9yOiAjZmZhMjAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzMxNWY2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFiYzUwOTljXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjMzE1ZjZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjMzE1ZjZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOmmlumhtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v546v5L+d56CBXHJcbmV4cG9ydCBjb25zdCBxdWVyeVN1cGVydmlzaW9uID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3N1cGVydmlzaW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y+Y5YyW6LaL5Yq/XHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibVRyZW5kID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NoYW5naW5nX3RyZW5kcycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHljp/lm6DliIbmnpBcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvY2F1c2VfYW5hbHlzaXMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUNvZGVBbmFseXNpcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fZGV0YWlsJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+W+heWuoeaguOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlBcHByb3ZhbExpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvcGVuZGluZ19yZXZpZXdfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lrqHmoLhcclxuZXhwb3J0IGNvbnN0IHN1Ym1pdERlcHRBcHByb3ZhbCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS9kZXBhcnRtZW50X2FwcHJvdmFsJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vIOi1i+eggeexu+Wei+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlDbHVlVHlwZXMgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvdHlwZV9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5rGh5p+T5rqQ5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVdSWUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5Yy65Z+f5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUFyZWFzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2RpdmlzaW9uX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/ku7vliqHmpoLmi6xcclxuZXhwb3J0IGNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9sYXcvdGFza19zdW1tYXJpemUnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/po47pmanmgLvop4hcclxuZXhwb3J0IGNvbnN0IGdldEV2YWx1YXRlSW5mbyA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3JlZ2lvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDpo47pmanpl67popjnsbvlnotcclxuZXhwb3J0IGNvbnN0IGdldFJpc2tUeXBlID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS90b3BfaW5mbycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LWL56CB6KeE5YiZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggeinhOWImeafpeivolxyXG5leHBvcnQgY29uc3QgcXVlcnlSdWxlTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvcnVsZV9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+mDqOmXqOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1EZXBhcnRtZW50ID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2ludGVyZmFjZS9kZXB0L2RlcHRfdHJlZScsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+agoemqjFxyXG5leHBvcnQgY29uc3QgY2hlY2tSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvY2hlY2snLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vIOS/ruaUueinhOWImVxyXG5leHBvcnQgY29uc3QgZWRpdFJ1bGVzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS91cGRhdGUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Zyw5Zu+ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIOWcsOWbvueCueS9jVxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllNYXAgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX21hcCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g57uf6K6h5oql6KGoID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjb25zdCBxdWVyeVN0YXRpc3RpY3MgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvYXBwL3N0YXRpc3RpY3MvZGl2aXNpb25fcGllJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWKqOaAgeivhOS7tyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+WQhOWMuuWfn+aKleivieWNoOavlFxyXG5leHBvcnQgY29uc3QgY29tcGxhaW50UHJvcG9ydGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6Jy9jbHVzdGVyL2FpclF1YWxpdHkvY29tcGxhaW50UHJvcG9ydGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBUUNBWUFBQUFtbEU0NkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZ6U1VSQlZDaVJsWkMvUzF0UkZNYy81OTczRXJWMlVHdzYyTWxWaXB1aEVBamlLN2dVdWpvNE9IVjFFNW9FRkVrRi9SdmNPN1piV3dLQ3FKc1UvUU5jYXltYVFVbEkzcjN2ZEdnU25xOHYwSDZuZTM1OHp2bWVLK1Rvelk1T2RXUFhBTmxvTllNWGVUMUJOdkc2NXRhN3NUOEVtUWU2ZWRBamNLWFJXN1RlSGltVXh6V25KUUJSTGQ0SDJSN0dLWFZVN1lJeHZ0enAyK096QTdrZkZzeUEzOHlCL2xSc3Y2VEs1OG5RdDZPNk8xK3QrM2NwY0x3c1lrWlA1WldvN2o2NkVmalZhZ2FsWVJEVjNFL2dpWHIxZVY3UzRMT281alI3bzFpeEpIK0RhYXMzTTZFdHRwcUJ6SVMyQ1B3QTlPdGU0YkxWREVTVWpYRWI1OXJPZjR2cWpyYnpBSE5BSERWNkwwbnNWZFpLR253UTlJTkNYNkNneUVlZ1lMcUY2MlRDcmFDbUFycVhCMDRyOGg1Z01IMGFpSDNBYzBGMmdObHhHd09VYXNaUkhJVHhVNStZNm1oY3p1ZjhsMFJQMlRxOWVidm1rckNZTFJyVUw4MmVYSHkvcXk2UGJKbTRWeWw5K2lKNndtM1cvei9vN2pkSFpuNlpBdWVid3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU9DQVlBQUFBZlNDM1JBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGS1NVUkJWQ2lSZFpJeFN5TlJGSVcvTTNrcVpBWVVSTUV1TEZodHM1Sy9ZQkVDNGxZTElqYmFpR3ladjZHTldQZ0h0aFJkRm9uK0ExSFExbWJYVGxoMkxUWWFKRTdtV01TNG1XUnlpL2N1NTk1ejd6bThKd2JDcDhsY2lodElWZURURzN3TnZneHB0S2VWMXA5K3IvcEoyb3czYk8wRDB4VEhnNlROVUd1ZHZCTTd6ZVNyelA1Z2wrQUFVN0xZenVIeWVxZzlmZFB6aitrUHBWTDNGZ2c1MmNxcUNDbUxyb1kydDRPcGhCQzZEVHRQNm0wc3hSam9IWU5SVGlPMmc4M25Za3Rack15eW90R1NXUTNBYkJGTktFWkZMQUFXSS9CTFljbE9NaFNQSVNvQzNSVUt0Y3JJNDRnL0ErWUU4WEZrcEZqRC85ODVyNFlqdVZsZVNCMzlBcWFHeW85dmR6S01od2xWSXRYYTk3WjJSb2ZxMk9aN2daSXRMYmYrRG55NTVJdmhFRE16eHRkdjdJMkordE01a1BmZ3MyUSt6ZHdBVllFbFRBZHhnN2dJMmVTdTZnLy8rcjJ2T1AxdDlLWnJuZUVBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb2RpbmdSZWFzb25EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjMzE1ZjZlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjMzE1ZjZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWMzMTVmNmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWMzMTVmNmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWMzMTVmNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWMzMTVmNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMzMTVmNmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWMzMTVmNmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvZGluZ1JlYXNvbkRldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29kaW5nUmVhc29uRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzMxNWY2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvZGluZ1JlYXNvbkRldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMzMTVmNmUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9