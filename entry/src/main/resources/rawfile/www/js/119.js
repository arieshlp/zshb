(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/index */ "./src/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "approval",
  data: function data() {
    return {
      approvalInfo: {
        hbm: '是',
        bz: '',
        department: localStorage.getItem("dept"),
        operator: localStorage.getItem("userName")
      },
      baseInfo: {}
    };
  },
  mounted: function mounted() {
    this.baseInfo = this.$route.query.info;
  },
  methods: {
    back: function back() {
      this.$router.go(-1);
    },
    emitApproval: function emitApproval() {
      var _this = this;

      if (this.approvalInfo.hbm === '否' && this.approvalInfo.bz === '') {
        this.$notify({
          type: "danger",
          message: "请填写备注！"
        });
      } else {
        var params = {
          info_id: this.baseInfo.info_id,
          site_id: this.baseInfo.id,
          department_approval_dept: localStorage.getItem("dept"),
          department_approval_user: localStorage.getItem("userName"),
          department_approval_user_id: localStorage.getItem("userId"),
          department_approval_status: this.approvalInfo.hbm,
          department_approval_notes: this.approvalInfo.bz
        };
        Object(_api_index__WEBPACK_IMPORTED_MODULE_0__["submitDeptApproval"])(params).then(function (res) {
          if (res.code === '200') {
            _this.$notify({
              type: "success",
              message: "审核成功！"
            });

            _this.back();
          } else {
            _this.$notify({
              type: "danger",
              message: res.msg
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "index-page" },
    [
      _c("van-nav-bar", {
        attrs: { title: "审核", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "content" }, [
        _c(
          "div",
          {
            staticClass: "detailContent",
            staticStyle: {
              height: "300px",
              "margin-top": "10px",
              "background-color": "#fff",
            },
          },
          [
            _c("div", { staticClass: "contentBox" }, [
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("企业名称")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.wrymc))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("行政区划")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.xzqhmc))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("行业类别")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.hymc))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("赋码类型")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.info_type))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("赋码原因")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.info_case))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("赋码颜色")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.qr_code_color))]),
              ]),
              _c("div", { staticClass: "formItems" }, [
                _c("span", { staticClass: "formText" }, [_vm._v("赋码时间")]),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.info_time))]),
              ]),
            ]),
          ]
        ),
        _c(
          "div",
          {
            staticClass: "detailContent",
            staticStyle: {
              height: "calc(100% - 365px)",
              "margin-top": "10px",
              "background-color": "#fff",
            },
          },
          [
            _c("div", { staticClass: "form" }, [
              _c(
                "div",
                { staticClass: "form_line" },
                [
                  _c("span", [_vm._v("是否赋码：")]),
                  _c(
                    "van-radio-group",
                    {
                      attrs: { direction: "horizontal" },
                      model: {
                        value: _vm.approvalInfo.hbm,
                        callback: function ($$v) {
                          _vm.$set(_vm.approvalInfo, "hbm", $$v)
                        },
                        expression: "approvalInfo.hbm",
                      },
                    },
                    [
                      _c(
                        "van-radio",
                        { attrs: { name: "是", "icon-size": "16px" } },
                        [_vm._v("是")]
                      ),
                      _c(
                        "van-radio",
                        { attrs: { name: "否", "icon-size": "16px" } },
                        [_vm._v("否")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c("div", { staticClass: "form_line" }, [
                _c("span", [_vm._v("备注：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.approvalInfo.bz,
                      expression: "approvalInfo.bz",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "5", placeholder: "请输入" },
                  domProps: { value: _vm.approvalInfo.bz },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.approvalInfo, "bz", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
            _c(
              "div",
              { staticClass: "win_bottom" },
              [
                _c(
                  "van-button",
                  {
                    staticClass: "submit_btn",
                    attrs: { type: "info" },
                    on: {
                      click: function ($event) {
                        return _vm.emitApproval()
                      },
                    },
                  },
                  [_vm._v("确 定")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".index-page[data-v-9b876122] {\n  height: calc(100vh - 50px);\n  overflow-y: auto;\n  padding-top: 50px;\n}\n.index-page .detailContent[data-v-9b876122] {\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n}\n.index-page .detailContent .contentBox[data-v-9b876122] {\n  margin: 5px 20px;\n}\n.index-page .detailContent .contentBox .formItems[data-v-9b876122] {\n  display: flex;\n  border-bottom: 1px solid #eee;\n  line-height: 40px;\n  justify-content: space-between;\n  color: #333333;\n}\n.index-page .detailContent .contentBox .formItems .formText[data-v-9b876122] {\n  color: #666666;\n}\n.index-page .detailContent .center_title[data-v-9b876122] {\n  margin: 20px 20px 5px 20px;\n  border-left: 5px solid #409EFF;\n  padding-left: 5px;\n  font-weight: bold;\n}\n.index-page .detailContent .form[data-v-9b876122] {\n  margin: 10px 20px;\n  line-height: 40px;\n}\n.index-page .detailContent .form .form_line[data-v-9b876122] {\n  display: flex;\n}\n.index-page .detailContent .form .form_line span[data-v-9b876122] {\n  width: 85px;\n}\n.index-page .detailContent .form .form_line .inputW[data-v-9b876122] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: calc(100% - 80px);\n}\n.index-page .detailContent .win_bottom[data-v-9b876122] {\n  text-align: center;\n  margin-top: 30px;\n  padding-bottom: 30px;\n}\n.index-page .detailContent .win_bottom .submit_btn[data-v-9b876122] {\n  width: 150px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1f02915d", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/environmentCode/approval/index.vue":
/*!******************************************************!*\
  !*** ./src/views/environmentCode/approval/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9b876122&scoped=true& */ "./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& */ "./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b876122",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/approval/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=style&index=0&id=9b876122&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9b876122_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9b876122&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/approval/index.vue?vue&type=template&id=9b876122&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9b876122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9hcHByb3ZhbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9hcHByb3ZhbC9pbmRleC52dWU/YmRlZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2FwcHJvdmFsL2luZGV4LnZ1ZT9mMDVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvYXBwcm92YWwvaW5kZXgudnVlPzFlMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2FwcHJvdmFsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2FwcHJvdmFsL2luZGV4LnZ1ZT8xNWEwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvYXBwcm92YWwvaW5kZXgudnVlP2RmZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9hcHByb3ZhbC9pbmRleC52dWU/MWMyOSJdLCJuYW1lcyI6WyJxdWVyeVN1cGVydmlzaW9uIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInF1ZXJ5SGJtVHJlbmQiLCJxdWVyeUhibUFuYWx5c2lzIiwicXVlcnlIYm1Db2RlQW5hbHlzaXMiLCJxdWVyeUFwcHJvdmFsTGlzdCIsInN1Ym1pdERlcHRBcHByb3ZhbCIsImRhdGEiLCJxdWVyeUNsdWVUeXBlcyIsInF1ZXJ5V1JZTGlzdCIsInF1ZXJ5QXJlYXMiLCJnZXRUYXNrSW5mbyIsImdldEV2YWx1YXRlSW5mbyIsImdldFJpc2tUeXBlIiwicXVlcnlSdWxlTGlzdCIsInF1ZXJ5SGJtRGVwYXJ0bWVudCIsImNoZWNrUnVsZXMiLCJlZGl0UnVsZXMiLCJxdWVyeVdSWU1hcCIs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QUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQUs7QUFDaEMsU0FBT3JCLHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDhCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QO0FBQ0E7O0FBQ08sSUFBTW1CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2IsSUFBRCxFQUFTO0FBQ3hDLFNBQU9ULHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFDLHlDQURPO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRU07QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEM7Ozs7Ozs7Ozs7OztBQ3RKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5kZXgtcGFnZVwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIuWuoeaguFwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiID5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxDb250ZW50XCIgc3R5bGU9XCJoZWlnaHQ6IDMwMHB4O21hcmdpbi10b3A6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRCb3hcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1UZXh0XCI+5LyB5Lia5ZCN56ewPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2Jhc2VJbmZvLndyeW1jfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1UZXh0XCI+6KGM5pS/5Yy65YiSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2Jhc2VJbmZvLnh6cWhtY319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtVGV4dFwiPuihjOS4muexu+WIqzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tiYXNlSW5mby5oeW1jfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1UZXh0XCI+6LWL56CB57G75Z6LPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2Jhc2VJbmZvLmluZm9fdHlwZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtVGV4dFwiPui1i+eggeWOn+WboDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tiYXNlSW5mby5pbmZvX2Nhc2V9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybVRleHRcIj7otYvnoIHpopzoibI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7YmFzZUluZm8ucXJfY29kZV9jb2xvcn19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtVGV4dFwiPui1i+eggeaXtumXtDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tiYXNlSW5mby5pbmZvX3RpbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbENvbnRlbnRcIiBzdHlsZT1cImhlaWdodDogY2FsYygxMDAlIC0gMzY1cHgpO21hcmdpbi10b3A6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIiBzdHlsZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5piv5ZCm6LWL56CB77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJhcHByb3ZhbEluZm8uaGJtXCIgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLmmK9cIiBpY29uLXNpemU9XCIxNnB4XCI+5pivPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLlkKZcIiBpY29uLXNpemU9XCIxNnB4XCI+5ZCmPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5aSH5rOo77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiB2LW1vZGVsPVwiYXBwcm92YWxJbmZvLmJ6XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1idXR0b24gdHlwZT1cImluZm9cIiBjbGFzcz1cInN1Ym1pdF9idG5cIiAgQGNsaWNrPVwiZW1pdEFwcHJvdmFsKClcIj7noa4g5a6aPC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgc3VibWl0RGVwdEFwcHJvdmFsIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiYXBwcm92YWxcIixcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhibSA6ICfmmK8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ6IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVwdFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBiYXNlSW5mbzp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VJbmZvID0gdGhpcy4kcm91dGUucXVlcnkuaW5mbztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYmFjaygpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1pdEFwcHJvdmFsKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFwcHJvdmFsSW5mby5oYm0gPT09ICflkKYnICYmIHRoaXMuYXBwcm92YWxJbmZvLmJ6ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35aGr5YaZ5aSH5rOo77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9faWQ6IHRoaXMuYmFzZUluZm8uaW5mb19pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZV9pZDogdGhpcy5iYXNlSW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudF9hcHByb3ZhbF9kZXB0OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlcHRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnRfYXBwcm92YWxfdXNlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudF9hcHByb3ZhbF91c2VyX2lkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudF9hcHByb3ZhbF9zdGF0dXM6IHRoaXMuYXBwcm92YWxJbmZvLmhibSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudF9hcHByb3ZhbF9ub3RlczogdGhpcy5hcHByb3ZhbEluZm8uYnpcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdERlcHRBcHByb3ZhbChwYXJhbXMpLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PT0gJzIwMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWuoeaguOaIkOWKn++8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXMubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAuaW5kZXgtcGFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHJcbiAgICAgICAgLmRldGFpbENvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAuY29udGVudEJveCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgLmZvcm1JdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm1UZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jZW50ZXJfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MDlFRkY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIC5mb3JtX2xpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7IHdpZHRoOiA4NXB4OyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0VyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53aW5fYm90dG9tIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIC5zdWJtaXRfYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJpbmRleC1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5a6h5qC4XCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiLCBmaXhlZDogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRldGFpbENvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRCb3hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybUl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1UZXh0XCIgfSwgW192bS5fdihcIuS8geS4muWQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ud3J5bWMpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtSXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVRleHRcIiB9LCBbX3ZtLl92KFwi6KGM5pS/5Yy65YiSXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby54enFobWMpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtSXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVRleHRcIiB9LCBbX3ZtLl92KFwi6KGM5Lia57G75YirXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5oeW1jKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybUl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1UZXh0XCIgfSwgW192bS5fdihcIui1i+eggeexu+Wei1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uaW5mb190eXBlKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybUl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1UZXh0XCIgfSwgW192bS5fdihcIui1i+eggeWOn+WboFwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uaW5mb19jYXNlKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybUl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1UZXh0XCIgfSwgW192bS5fdihcIui1i+eggeminOiJslwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucXJfY29kZV9jb2xvcikpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1JdGVtc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtVGV4dFwiIH0sIFtfdm0uX3YoXCLotYvnoIHml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmluZm9fdGltZSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRldGFpbENvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogXCJjYWxjKDEwMCUgLSAzNjVweClcIixcbiAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMTBweFwiLFxuICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9saW5lXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaYr+WQpui1i+egge+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXBwcm92YWxJbmZvLmhibSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hcHByb3ZhbEluZm8sIFwiaGJtXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFwcHJvdmFsSW5mby5oYm1cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1yYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIuaYr1wiLCBcImljb24tc2l6ZVwiOiBcIjE2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pivXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1yYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIuWQplwiLCBcImljb24tc2l6ZVwiOiBcIjE2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5ZCmXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9saW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSH5rOo77yaXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hcHByb3ZhbEluZm8uYnosXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhcHByb3ZhbEluZm8uYnpcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNVwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5hcHByb3ZhbEluZm8uYnogfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFwcHJvdmFsSW5mbywgXCJielwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndpbl9ib3R0b21cIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWl0X2J0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRBcHByb3ZhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56GuIOWumlwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleC1wYWdlW2RhdGEtdi05Yjg3NjEyMl0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcbi5pbmRleC1wYWdlIC5kZXRhaWxDb250ZW50W2RhdGEtdi05Yjg3NjEyMl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAuY29udGVudEJveFtkYXRhLXYtOWI4NzYxMjJdIHtcXG4gIG1hcmdpbjogNXB4IDIwcHg7XFxufVxcbi5pbmRleC1wYWdlIC5kZXRhaWxDb250ZW50IC5jb250ZW50Qm94IC5mb3JtSXRlbXNbZGF0YS12LTliODc2MTIyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAuY29udGVudEJveCAuZm9ybUl0ZW1zIC5mb3JtVGV4dFtkYXRhLXYtOWI4NzYxMjJdIHtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAuY2VudGVyX3RpdGxlW2RhdGEtdi05Yjg3NjEyMl0ge1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggNXB4IDIwcHg7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MDlFRkY7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAuZm9ybVtkYXRhLXYtOWI4NzYxMjJdIHtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi5pbmRleC1wYWdlIC5kZXRhaWxDb250ZW50IC5mb3JtIC5mb3JtX2xpbmVbZGF0YS12LTliODc2MTIyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAuZm9ybSAuZm9ybV9saW5lIHNwYW5bZGF0YS12LTliODc2MTIyXSB7XFxuICB3aWR0aDogODVweDtcXG59XFxuLmluZGV4LXBhZ2UgLmRldGFpbENvbnRlbnQgLmZvcm0gLmZvcm1fbGluZSAuaW5wdXRXW2RhdGEtdi05Yjg3NjEyMl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbn1cXG4uaW5kZXgtcGFnZSAuZGV0YWlsQ29udGVudCAud2luX2JvdHRvbVtkYXRhLXYtOWI4NzYxMjJdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLmluZGV4LXBhZ2UgLmRldGFpbENvbnRlbnQgLndpbl9ib3R0b20gLnN1Ym1pdF9idG5bZGF0YS12LTliODc2MTIyXSB7XFxuICB3aWR0aDogMTUwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWI4NzYxMjImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxZjAyOTE1ZFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTliODc2MTIyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWI4NzYxMjImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6aaW6aG1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIFcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U3VwZXJ2aXNpb24gPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvc3VwZXJ2aXNpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHlj5jljJbotovlir9cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtVHJlbmQgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvY2hhbmdpbmdfdHJlbmRzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOWIhuaekFxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1BbmFseXNpcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jYXVzZV9hbmFseXNpcycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHljp/lm6Dor6bmg4VcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtQ29kZUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9kZXRhaWwnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5b6F5a6h5qC45YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeUFwcHJvdmFsTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS9wZW5kaW5nX3Jldmlld19saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WuoeaguFxyXG5leHBvcnQgY29uc3Qgc3VibWl0RGVwdEFwcHJvdmFsID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL2RlcGFydG1lbnRfYXBwcm92YWwnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8g6LWL56CB57G75Z6L5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUNsdWVUeXBlcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS90eXBlX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/msaHmn5PmupDliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/ljLrln5/kuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXJlYXMgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvZGl2aXNpb25fbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+S7u+WKoeamguaLrFxyXG5leHBvcnQgY29uc3QgZ2V0VGFza0luZm8gPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2xhdy90YXNrX3N1bW1hcml6ZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+mjjumZqeaAu+iniFxyXG5leHBvcnQgY29uc3QgZ2V0RXZhbHVhdGVJbmZvID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvcmVnaW9uX21hcCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOmjjumZqemXrumimOexu+Wei1xyXG5leHBvcnQgY29uc3QgZ2V0Umlza1R5cGUgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3RvcF9pbmZvJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDotYvnoIHop4TliJkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v546v5L+d56CB6KeE5YiZ5p+l6K+iXHJcbmV4cG9ydCBjb25zdCBxdWVyeVJ1bGVMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9ydWxlX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v6YOo6Zeo5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibURlcGFydG1lbnQgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaW50ZXJmYWNlL2RlcHQvZGVwdF90cmVlJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5qCh6aqMXHJcbmV4cG9ydCBjb25zdCBjaGVja1J1bGVzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9jaGVjaycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8g5L+u5pS56KeE5YiZXHJcbmV4cG9ydCBjb25zdCBlZGl0UnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3VwZGF0ZScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlnLDlm74gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g5Zyw5Zu+54K55L2NXHJcbmV4cG9ydCBjb25zdCBxdWVyeVdSWU1hcCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDnu5/orqHmiqXooaggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U3RhdGlzdGljcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9hcHAvc3RhdGlzdGljcy9kaXZpc2lvbl9waWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Yqo5oCB6K+E5Lu3ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v5ZCE5Yy65Z+f5oqV6K+J5Y2g5q+UXHJcbmV4cG9ydCBjb25zdCBjb21wbGFpbnRQcm9wb3J0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDonL2NsdXN0ZXIvYWlyUXVhbGl0eS9jb21wbGFpbnRQcm9wb3J0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05Yjg3NjEyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05Yjg3NjEyMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjliODc2MTIyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzliODc2MTIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzliODc2MTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzliODc2MTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWI4NzYxMjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWI4NzYxMjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvYXBwcm92YWwvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWI4NzYxMjImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWI4NzYxMjImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9