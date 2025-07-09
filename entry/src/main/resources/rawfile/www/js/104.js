(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/index */ "./src/api/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      type: '3',
      areaData: [{
        text: '全部',
        value: ''
      }],
      name: '',
      ssqy: '',
      info: {},
      list: [],
      currentPage: 1,
      pageSize: 15,
      total: 0
    };
  },
  mounted: function mounted() {
    this.type = this.$route.query.type;
    this.queryHbmNumbers();
  },
  watch: {
    ssqy: function ssqy() {
      this.queryList();
    },
    name: function name() {
      this.queryList();
    }
  },
  methods: {
    back: function back() {
      this.$router.go(-1);
    },
    queryHbmNumbers: function queryHbmNumbers() {
      var _this = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_1__["querySupervision"])().then(function (res) {
        _this.info = res.data;

        _this.queryList();

        _this.getAreaSelect();
      });
    },
    getAreaSelect: function getAreaSelect() {
      var _this2 = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_1__["queryAreas"])().then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          _this2.areaData.push({
            text: res.data[i].MC,
            value: res.data[i].DM
          });
        }
      });
    },
    searchList: function searchList(flag) {
      this.type = flag;
      this.currentPage = 1;
      this.queryList();
    },
    search: function search() {
      this.currentPage = 1;
      this.queryList();
    },
    queryList: function queryList() {
      var _this3 = this;

      var params = {
        page: this.currentPage,
        limit: this.pageSize,
        name: this.name,
        division_code: this.ssqy,
        type: this.type
      };
      Object(_api_index__WEBPACK_IMPORTED_MODULE_1__["queryWRYList"])(params).then(function (res) {
        _this3.list = res.data.list;
        _this3.total = res.data.total;
      });
    },
    changePage: function changePage(val) {
      this.currentPage = val;
      this.queryList();
    },
    getStyle: function getStyle(item) {
      if (item.color !== '' && item.color !== null) {
        var textColor = item.color;
        return 'color:' + textColor + ';background-color: ' + textColor + '20';
      } else {
        return 'color:#666666;background-color: #66666620';
      }
    },
    showDetail: function showDetail(data) {
      this.$router.push({
        name: 'companyDetail',
        query: {
          id: data.id,
          wrybm: data.wrybm,
          type: this.type === '3' ? 'red' : this.type === '2' ? 'yellow' : this.type === '1' ? 'green' : ''
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true& ***!
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
        attrs: { title: "分级管控", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        {
          staticClass: "scroll-to-top-wrapper",
          staticStyle: { background: "#eee" },
        },
        [
          _c("div", { staticClass: "topBtn" }, [
            _c(
              "div",
              {
                class: _vm.type === "3" ? "tabBtn active1" : "tabBtn",
                on: {
                  click: function ($event) {
                    return _vm.searchList("3")
                  },
                },
              },
              [
                _c("div", { staticClass: "tabItem" }, [
                  _c("img", {
                    attrs: { src: __webpack_require__(/*! @/assets/code/红码.png */ "./src/assets/code/红码.png") },
                  }),
                  _c("span", [_vm._v("红码")]),
                  _c("span", [_vm._v("(" + _vm._s(_vm.info.red) + "家)")]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                class: _vm.type === "2" ? "tabBtn active2" : "tabBtn",
                on: {
                  click: function ($event) {
                    return _vm.searchList("2")
                  },
                },
              },
              [
                _c("div", { staticClass: "tabItem" }, [
                  _c("img", {
                    attrs: { src: __webpack_require__(/*! @/assets/code/黄码.png */ "./src/assets/code/黄码.png") },
                  }),
                  _c("span", [_vm._v("黄码")]),
                  _c("span", [_vm._v("(" + _vm._s(_vm.info.yellow) + "家)")]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                class: _vm.type === "1" ? "tabBtn active3" : "tabBtn",
                on: {
                  click: function ($event) {
                    return _vm.searchList("1")
                  },
                },
              },
              [
                _c("div", { staticClass: "tabItem" }, [
                  _c("img", {
                    attrs: { src: __webpack_require__(/*! @/assets/code/绿码.png */ "./src/assets/code/绿码.png") },
                  }),
                  _c("span", [_vm._v("绿码")]),
                  _c("span", [_vm._v("(" + _vm._s(_vm.info.green) + "家)")]),
                ]),
              ]
            ),
          ]),
          _c(
            "div",
            { staticClass: "centerList" },
            [
              _c(
                "div",
                { staticClass: "search" },
                [
                  _c(
                    "van-dropdown-menu",
                    {
                      staticStyle: {
                        width: "calc(55% - 10px)",
                        "margin-right": "10px",
                      },
                      attrs: { "active-color": "#1989fa" },
                    },
                    [
                      _c("van-dropdown-item", {
                        attrs: { options: _vm.areaData },
                        model: {
                          value: _vm.ssqy,
                          callback: function ($$v) {
                            _vm.ssqy = $$v
                          },
                          expression: "ssqy",
                        },
                      }),
                    ],
                    1
                  ),
                  _c("van-search", {
                    attrs: {
                      size: "small",
                      shape: "round",
                      "input-align": "center",
                      placeholder: "请输入名称/标签",
                    },
                    model: {
                      value: _vm.name,
                      callback: function ($$v) {
                        _vm.name = $$v
                      },
                      expression: "name",
                    },
                  }),
                ],
                1
              ),
              _c(
                "div",
                { staticClass: "list" },
                _vm._l(_vm.list, function (item) {
                  return _c(
                    "div",
                    {
                      staticClass: "item_div",
                      on: {
                        click: function ($event) {
                          return _vm.showDetail(item)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "titles" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/code/企业.png */ "./src/assets/code/企业.png") },
                        }),
                        _c(
                          "span",
                          {
                            staticClass: "titles_name",
                            attrs: { title: item.wrymc },
                          },
                          [_vm._v(_vm._s(item.wrymc))]
                        ),
                      ]),
                      _c(
                        "div",
                        { staticClass: "labels" },
                        _vm._l(item.label, function (items) {
                          return item.label.length > 0
                            ? _c(
                                "div",
                                {
                                  staticClass: "label_div",
                                  style: _vm.getStyle(items),
                                },
                                [_c("span", [_vm._v(_vm._s(items.name))])]
                              )
                            : _vm._e()
                        }),
                        0
                      ),
                    ]
                  )
                }),
                0
              ),
              _c("van-pagination", {
                staticStyle: { "margin-top": "10px" },
                attrs: {
                  "total-items": _vm.total,
                  "items-per-page": _vm.pageSize,
                  "force-ellipses": "",
                },
                on: { change: _vm.changePage },
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
                },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".topBtn[data-v-2cf0ae72] {\n  display: flex;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #fff;\n  border-top: 1px solid #eeeeee;\n}\n.topBtn .tabBtn[data-v-2cf0ae72] {\n  height: 100%;\n  width: 33.3%;\n  text-align: center;\n  border-right: 1px solid #eeeeee;\n  cursor: pointer;\n}\n.topBtn .tabBtn .tabItem[data-v-2cf0ae72] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.topBtn .tabBtn .tabItem > img[data-v-2cf0ae72] {\n  margin-right: 5px;\n}\n.topBtn .active1[data-v-2cf0ae72] {\n  border-bottom: 5px solid #FF2424;\n}\n.topBtn .active2[data-v-2cf0ae72] {\n  border-bottom: 5px solid #FFC420;\n}\n.topBtn .active3[data-v-2cf0ae72] {\n  border-bottom: 5px solid #3FC75F;\n}\n.centerList[data-v-2cf0ae72] {\n  height: calc(100% - 101px);\n  padding: 15px;\n  background: #fff;\n  margin-top: 10px;\n}\n.centerList .search[data-v-2cf0ae72] {\n  display: flex;\n  align-items: center;\n}\n.centerList .search .van-search[data-v-2cf0ae72] {\n  padding: 2px;\n  width: 45%;\n}\n.centerList .search[data-v-2cf0ae72]  .van-dropdown-menu__bar {\n  height: 35px;\n  background-color: #f7f8fa;\n  border-radius: 999px;\n  box-shadow: none;\n}\n.centerList .search[data-v-2cf0ae72]  .van-dropdown-menu__bar .van-dropdown-menu__title {\n  max-width: 85%;\n  padding: 0;\n  line-height: 23px;\n}\n.centerList .search[data-v-2cf0ae72]  .van-dropdown-menu__bar .van-dropdown-menu__title::after {\n  right: -10px;\n  opacity: 1;\n}\n.centerList .list[data-v-2cf0ae72] {\n  height: calc(100% - 70px);\n  overflow-y: auto;\n}\n.centerList .list .item_div[data-v-2cf0ae72] {\n  border-bottom: 1px solid #eee;\n  cursor: pointer;\n}\n.centerList .list .item_div .titles[data-v-2cf0ae72] {\n  height: 40px;\n  line-height: 45px;\n  display: flex;\n  align-items: center;\n}\n.centerList .list .item_div .titles span[data-v-2cf0ae72] {\n  margin-left: 5px;\n  font-weight: bold;\n}\n.centerList .list .item_div .titles .titles_name[data-v-2cf0ae72] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.centerList .list .item_div .labels[data-v-2cf0ae72] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 25px;\n}\n.centerList .list .item_div .labels .label_div[data-v-2cf0ae72] {\n  background-color: #C8E6F9;\n  color: #0097ea;\n  margin-right: 5px;\n  padding: 5px 10px;\n  border-radius: 2px;\n  font-size: 12px;\n  margin-bottom: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("59ff2e17", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/code/企业.png":
/*!********************************!*\
  !*** ./src/assets/code/企业.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAABZElEQVQ4Ec2Tvy8EQRTHvzM2NBqF2xwFp1MqBNGIgkRxUelFxV9wcaLQnH9A8DdQU6rEP3BxCbVEqWZ3nu9sMpuZu123VwiTvJ03bz7v5+4C/32pogLrbZkTg02RTDbIRFrj4L2j7op43xb5B6vXWnKRJjjqtzPBOW1DA2rfMT6RBmQwmGUEmPLZMj0ISK+4DKxqH2g5d1QwmS6wcy6cdc56ShCQc3KO99DYt9yExuTnF57Z8jTne8uWuqS6dl9fwuvNnkq9eHmAzBa3ZVUSPPnATzqz9yKN3beOenFcMEOvwg/CD1aY8tHB/TurXkwMDn170LK7UAo96tf2PKYwngpWqBayTDhrObcCSGkIq+QDawSsgMFGWkHLwzz5t5xRalY4jmYRH1RYBPg2Y3DKs5XSNVKFpVG8i98LWD+WbX6iO16yaqpgfqYlWw7OZ2hSXPKFNtxF1Z0+y/wSrsgvVPX5W+4b2x9W6OKJGhoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/environmentCode/gradeControl/index.vue":
/*!**********************************************************!*\
  !*** ./src/views/environmentCode/gradeControl/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2cf0ae72&scoped=true& */ "./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& */ "./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cf0ae72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/gradeControl/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=style&index=0&id=2cf0ae72&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2cf0ae72_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2cf0ae72&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/gradeControl/index.vue?vue&type=template&id=2cf0ae72&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2cf0ae72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9ncmFkZUNvbnRyb2wvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT81MDUyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT82Nzg1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT8zN2U4Iiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb2RlL+S8geS4mi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9ncmFkZUNvbnRyb2wvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT83NWIwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT8yMGNlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvZ3JhZGVDb250cm9sL2luZGV4LnZ1ZT84MTAxIl0sIm5hbWVzIjpbInF1ZXJ5U3VwZXJ2aXNpb24iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwicXVlcnlIYm1UcmVuZCIsInF1ZXJ5SGJtQW5hbHlzaXMiLCJxdWVyeUhibUNvZGVBbmFseXNpcyIsInF1ZXJ5QXBwcm92YWxMaXN0Iiwic3VibWl0RGVwdEFwcHJvdmFsIiwiZGF0YSIsInF1ZXJ5Q2x1ZVR5cGVzIiwicXVlcnlXUllMaXN0IiwicXVlcnlBcmVhcyIsImdldFRhc2tJbmZvIiwiZ2V0RXZhbHVhdGVJbmZvIiwiZ2V0Umlza1R5cGUiLCJxdWVyeVJ1bGVMaXN0IiwicXVlcnlIYm1EZXBhcnRtZW50IiwiY2hlY2tSdWxlcyIsImVkaXRSdWxlcyIsInF1ZXJ5V1JZTWFwIiwicXVlcnlTdGF0aXN0aWNzIiwiY29tcGxhaW50UHJvcG9ydGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUE7QUFBQSxRQUZBO0FBR0EsY0FIQTtBQUlBLGNBSkE7QUFLQSxjQUxBO0FBTUEsY0FOQTtBQU9BLG9CQVBBO0FBUUEsa0JBUkE7QUFTQTtBQVRBO0FBV0EsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQTtBQUNBO0FBQ0EsR0FsQkE7QUFtQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsUUFKQSxrQkFJQTtBQUNBO0FBQ0E7QUFOQSxHQW5CQTtBQTJCQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxtQkFKQSw2QkFJQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FWQTtBQVdBLGlCQVhBLDJCQVdBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUE7QUFDQSxPQVBBO0FBUUEsS0FwQkE7QUFxQkEsY0FyQkEsc0JBcUJBLElBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6QkE7QUEwQkEsVUExQkEsb0JBMEJBO0FBQ0E7QUFDQTtBQUNBLEtBN0JBO0FBOEJBLGFBOUJBLHVCQThCQTtBQUFBOztBQUNBO0FBQ0EsOEJBREE7QUFFQSw0QkFGQTtBQUdBLHVCQUhBO0FBSUEsZ0NBSkE7QUFLQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLEtBMUNBO0FBMkNBLGNBM0NBLHNCQTJDQSxHQTNDQSxFQTJDQTtBQUNBO0FBQ0E7QUFDQSxLQTlDQTtBQStDQSxZQS9DQSxvQkErQ0EsSUEvQ0EsRUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0F0REE7QUF1REEsY0F2REEsc0JBdURBLElBdkRBLEVBdURBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0EscUJBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEE7QUFGQTtBQVFBO0FBaEVBO0FBM0JBLEc7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUE2QztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0MsU0FBUztBQUNUO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBLDRCQUE0QixNQUFNLG1CQUFPLENBQUMsc0RBQXNCLEdBQUc7QUFDbkUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBLDRCQUE0QixNQUFNLG1CQUFPLENBQUMsc0RBQXNCLEdBQUc7QUFDbkUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBLDRCQUE0QixNQUFNLG1CQUFPLENBQUMsc0RBQXNCLEdBQUc7QUFDbkUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4Qiw0QkFBNEI7QUFDMUQscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBLGlDQUFpQyx3QkFBd0I7QUFDekQ7QUFDQSxrQ0FBa0MsTUFBTSxtQkFBTyxDQUFDLHNEQUFzQixHQUFHO0FBQ3pFLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsa0JBQWtCLGdCQUFnQixpQkFBaUIsc0JBQXNCLDJCQUEyQixrQ0FBa0MsR0FBRyxvQ0FBb0MsaUJBQWlCLGlCQUFpQix1QkFBdUIsb0NBQW9DLG9CQUFvQixHQUFHLDZDQUE2QyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLG1EQUFtRCxzQkFBc0IsR0FBRyxxQ0FBcUMscUNBQXFDLEdBQUcscUNBQXFDLHFDQUFxQyxHQUFHLHFDQUFxQyxxQ0FBcUMsR0FBRyxnQ0FBZ0MsK0JBQStCLGtCQUFrQixxQkFBcUIscUJBQXFCLEdBQUcsd0NBQXdDLGtCQUFrQix3QkFBd0IsR0FBRyxvREFBb0QsaUJBQWlCLGVBQWUsR0FBRyxpRUFBaUUsaUJBQWlCLDhCQUE4Qix5QkFBeUIscUJBQXFCLEdBQUcsMkZBQTJGLG1CQUFtQixlQUFlLHNCQUFzQixHQUFHLGtHQUFrRyxpQkFBaUIsZUFBZSxHQUFHLHNDQUFzQyw4QkFBOEIscUJBQXFCLEdBQUcsZ0RBQWdELGtDQUFrQyxvQkFBb0IsR0FBRyx3REFBd0QsaUJBQWlCLHNCQUFzQixrQkFBa0Isd0JBQXdCLEdBQUcsNkRBQTZELHFCQUFxQixzQkFBc0IsR0FBRyxxRUFBcUUsNEJBQTRCLHFCQUFxQix3QkFBd0IsR0FBRyx3REFBd0Qsa0JBQWtCLG9CQUFvQixzQkFBc0IsR0FBRyxtRUFBbUUsOEJBQThCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHVCQUF1QixvQkFBb0IsdUJBQXVCLEdBQUc7QUFDNzRFO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCt6QkFBeWQ7QUFDL2U7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTs7QUFDTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUs7QUFDakMsU0FBT0Msd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRCxNQUFELEVBQVc7QUFDcEMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsOEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsTUFBRCxFQUFXO0FBQ3ZDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDZCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNILE1BQUQsRUFBVztBQUMzQyxTQUFPSCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSwrQkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVBO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSixNQUFELEVBQVc7QUFDeEMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUscUNBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0wsTUFBRCxFQUFXO0FBQ3pDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLHFDQURNO0FBRVhDLFVBQU0sRUFBRSxNQUZHO0FBR1hPLFFBQUksRUFBRU47QUFISyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDL0IsU0FBT1Ysd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1IsTUFBRCxFQUFXO0FBQ25DLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDZCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQzNCLFNBQU9aLHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDRCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDNUIsU0FBT2Isd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsNEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTCxJQUFELEVBQVM7QUFDcEMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsNkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFTTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDNUIsU0FBT2Ysd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7QUFDQTs7QUFDTyxJQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNiLE1BQUQsRUFBVztBQUNwQyxTQUFPSCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSw0QkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVBO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFLO0FBQ25DLFNBQU9qQix3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSwyQkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUU7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZixNQUFELEVBQVc7QUFDakMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsd0JBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1nQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDaEIsTUFBRCxFQUFXO0FBQ2hDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLHlCQURNO0FBRVhDLFVBQU0sRUFBRSxNQUZHO0FBR1hPLFFBQUksRUFBRU47QUFISyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDtBQUNBOztBQUNPLElBQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDakIsTUFBRCxFQUFXO0FBQ2xDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDRCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQ2hDLFNBQU9yQix3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSw4QkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUU7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDtBQUNBOztBQUNPLElBQU1tQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNiLElBQUQsRUFBUztBQUN4QyxTQUFPVCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBQyx5Q0FETztBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVNO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7OztBQ3RKUCxpQ0FBaUMsNHFCOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLliIbnuqfnrqHmjqdcIiBsZWZ0LWFycm93IGZpeGVkIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj48L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogI2VlZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9wQnRuXCI+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ0eXBlID09PSAnMycgPyAndGFiQnRuIGFjdGl2ZTEnIDogJ3RhYkJ0bidcIiBAY2xpY2s9XCJzZWFyY2hMaXN0KCczJylcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJJdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvY29kZS/nuqLnoIEucG5nXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPue6oueggTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+KHt7aW5mby5yZWR9feWutik8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cInR5cGUgPT09ICcyJyA/ICd0YWJCdG4gYWN0aXZlMicgOiAndGFiQnRuJ1wiIEBjbGljaz1cInNlYXJjaExpc3QoJzInKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhYkl0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9jb2RlL+m7hOeggS5wbmdcIj5cclxuICAgICAgICAgICAgPHNwYW4+6buE56CBPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4oe3tpbmZvLnllbGxvd3195a62KTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgOmNsYXNzPVwidHlwZSA9PT0gJzEnID8gJ3RhYkJ0biBhY3RpdmUzJyA6ICd0YWJCdG4nXCIgQGNsaWNrPVwic2VhcmNoTGlzdCgnMScpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiSXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL2NvZGUv57u/56CBLnBuZ1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj7nu7/noIE8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPih7e2luZm8uZ3JlZW59feWutik8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgPHZhbi1kcm9wZG93bi1tZW51IGFjdGl2ZS1jb2xvcj1cIiMxOTg5ZmFcIiBzdHlsZT1cIndpZHRoOiBjYWxjKDU1JSAtIDEwcHgpO21hcmdpbi1yaWdodDogMTBweDtcIj5cclxuICAgICAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJzc3F5XCIgOm9wdGlvbnM9XCJhcmVhRGF0YVwiLz5cclxuICAgICAgICAgIDwvdmFuLWRyb3Bkb3duLW1lbnU+XHJcbiAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwibmFtZVwiIHNpemU9XCJzbWFsbFwiIHNoYXBlPVwicm91bmRcIiBpbnB1dC1hbGlnbj1cImNlbnRlclwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5ZCN56ewL+agh+etvlwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fZGl2XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBAY2xpY2s9XCJzaG93RGV0YWlsKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL2NvZGUv5LyB5LiaLnBuZ1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVzX25hbWVcIiA6dGl0bGU9XCJpdGVtLndyeW1jXCI+e3tpdGVtLndyeW1jfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsX2RpdlwiIHYtZm9yPVwiaXRlbXMgaW4gaXRlbS5sYWJlbFwiIDpzdHlsZT1cImdldFN0eWxlKGl0ZW1zKVwiIHYtaWY9XCJpdGVtLmxhYmVsLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbXMubmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2YW4tcGFnaW5hdGlvblxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICAgICAgICA6dG90YWwtaXRlbXM9XCJ0b3RhbFwiXHJcbiAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIlxyXG4gICAgICAgICAgICBAY2hhbmdlPVwiY2hhbmdlUGFnZVwiXHJcbiAgICAgICAgICAgIGZvcmNlLWVsbGlwc2VzXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvdmFuLXBhZ2luYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7cXVlcnlTdXBlcnZpc2lvbiwgcXVlcnlBcmVhcywgcXVlcnlXUllMaXN0fSBmcm9tICdAL2FwaS9pbmRleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJzMnLFxyXG4gICAgICAgIGFyZWFEYXRhOiBbe3RleHQ6ICflhajpg6gnLCB2YWx1ZTogJyd9XSxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBzc3F5OiAnJyxcclxuICAgICAgICBpbmZvOiB7fSxcclxuICAgICAgICBsaXN0OiBbXSxcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogMTUsXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS50eXBlO1xyXG4gICAgICB0aGlzLnF1ZXJ5SGJtTnVtYmVycygpO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHNzcXkoKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeUxpc3QoKTtcclxuICAgICAgfSxcclxuICAgICAgbmFtZSgpIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5SGJtTnVtYmVycygpIHtcclxuICAgICAgICBxdWVyeVN1cGVydmlzaW9uKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbmZvID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgICAgdGhpcy5nZXRBcmVhU2VsZWN0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0QXJlYVNlbGVjdCgpIHtcclxuICAgICAgICBxdWVyeUFyZWFzKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhW2ldLk1DLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiByZXMuZGF0YVtpXS5ETVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlYXJjaExpc3QoZmxhZykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGZsYWc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5xdWVyeUxpc3QoKTtcclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMucXVlcnlMaXN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5TGlzdCgpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgIGxpbWl0OiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgZGl2aXNpb25fY29kZTogdGhpcy5zc3F5LFxyXG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBxdWVyeVdSWUxpc3QocGFyYW1zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5saXN0O1xyXG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVBhZ2UodmFsKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZhbDtcclxuICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTdHlsZShpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY29sb3IgIT09ICcnICYmIGl0ZW0uY29sb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgIGxldCB0ZXh0Q29sb3IgPSBpdGVtLmNvbG9yO1xyXG4gICAgICAgICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yICsgJztiYWNrZ3JvdW5kLWNvbG9yOiAnICsgdGV4dENvbG9yICsgJzIwJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdjb2xvcjojNjY2NjY2O2JhY2tncm91bmQtY29sb3I6ICM2NjY2NjYyMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzaG93RGV0YWlsKGRhdGEpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAnY29tcGFueURldGFpbCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgd3J5Ym06ZGF0YS53cnlibSxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlID09PSAnMycgPyAncmVkJyA6IHRoaXMudHlwZSA9PT0gJzInID8gJ3llbGxvdycgOiB0aGlzLnR5cGUgPT09ICcxJyA/ICdncmVlbicgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuICAudG9wQnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG5cclxuICAgIC50YWJCdG4ge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAudGFiSXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFiSXRlbSA+IGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlMSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRkYyNDI0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGRkM0MjA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZTMge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzNGQzc1RjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jZW50ZXJMaXN0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAxcHgpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLnZhbi1zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6OnYtZGVlcCAudmFuLWRyb3Bkb3duLW1lbnVfX2JhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgLnZhbi1kcm9wZG93bi1tZW51X190aXRsZSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDg1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGU6OmFmdGVyIHtcclxuICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgLml0ZW1fZGl2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC50aXRsZXMge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlc19uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFiZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuXHJcbiAgICAgICAgICAubGFiZWxfZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZGOTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDk3ZWE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLliIbnuqfnrqHmjqdcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIsIGZpeGVkOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2VlZVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcEJ0blwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS50eXBlID09PSBcIjNcIiA/IFwidGFiQnRuIGFjdGl2ZTFcIiA6IFwidGFiQnRuXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoTGlzdChcIjNcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiSXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvY29kZS/nuqLnoIEucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi57qi56CBXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0uaW5mby5yZWQpICsgXCLlrrYpXCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udHlwZSA9PT0gXCIyXCIgPyBcInRhYkJ0biBhY3RpdmUyXCIgOiBcInRhYkJ0blwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaExpc3QoXCIyXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYkl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv6buE56CBLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIum7hOeggVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIoXCIgKyBfdm0uX3MoX3ZtLmluZm8ueWVsbG93KSArIFwi5a62KVwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnR5cGUgPT09IFwiMVwiID8gXCJ0YWJCdG4gYWN0aXZlM1wiIDogXCJ0YWJCdG5cIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWFyY2hMaXN0KFwiMVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJJdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9jb2RlL+e7v+eggS5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnu7/noIFcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5pbmZvLmdyZWVuKSArIFwi5a62KVwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyTGlzdFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiY2FsYyg1NSUgLSAxMHB4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1jb2xvclwiOiBcIiMxOTg5ZmFcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZHJvcGRvd24taXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0uYXJlYURhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3NxeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3NxeSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNzcXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXlkI3np7Av5qCH562+XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1fZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2NvZGUv5LyB5LiaLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZXNfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBpdGVtLndyeW1jIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ud3J5bWMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsYWJlbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0ubGFiZWwsIGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsX2RpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3R5bGUoaXRlbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1zLm5hbWUpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcInRvdGFsLWl0ZW1zXCI6IF92bS50b3RhbCxcbiAgICAgICAgICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogX3ZtLnBhZ2VTaXplLFxuICAgICAgICAgICAgICAgICAgXCJmb3JjZS1lbGxpcHNlc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hhbmdlUGFnZSB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRQYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFnZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3BCdG5bZGF0YS12LTJjZjBhZTcyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTtcXG59XFxuLnRvcEJ0biAudGFiQnRuW2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMzLjMlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvcEJ0biAudGFiQnRuIC50YWJJdGVtW2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRvcEJ0biAudGFiQnRuIC50YWJJdGVtID4gaW1nW2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi50b3BCdG4gLmFjdGl2ZTFbZGF0YS12LTJjZjBhZTcyXSB7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI0ZGMjQyNDtcXG59XFxuLnRvcEJ0biAuYWN0aXZlMltkYXRhLXYtMmNmMGFlNzJdIHtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRkZDNDIwO1xcbn1cXG4udG9wQnRuIC5hY3RpdmUzW2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMzRkM3NUY7XFxufVxcbi5jZW50ZXJMaXN0W2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5jZW50ZXJMaXN0IC5zZWFyY2hbZGF0YS12LTJjZjBhZTcyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNlbnRlckxpc3QgLnNlYXJjaCAudmFuLXNlYXJjaFtkYXRhLXYtMmNmMGFlNzJdIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcbi5jZW50ZXJMaXN0IC5zZWFyY2hbZGF0YS12LTJjZjBhZTcyXSAgLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmNlbnRlckxpc3QgLnNlYXJjaFtkYXRhLXYtMmNmMGFlNzJdICAudmFuLWRyb3Bkb3duLW1lbnVfX2JhciAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcXG4gIG1heC13aWR0aDogODUlO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbn1cXG4uY2VudGVyTGlzdCAuc2VhcmNoW2RhdGEtdi0yY2YwYWU3Ml0gIC52YW4tZHJvcGRvd24tbWVudV9fYmFyIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGU6OmFmdGVyIHtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5jZW50ZXJMaXN0IC5saXN0W2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jZW50ZXJMaXN0IC5saXN0IC5pdGVtX2RpdltkYXRhLXYtMmNmMGFlNzJdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2VudGVyTGlzdCAubGlzdCAuaXRlbV9kaXYgLnRpdGxlc1tkYXRhLXYtMmNmMGFlNzJdIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jZW50ZXJMaXN0IC5saXN0IC5pdGVtX2RpdiAudGl0bGVzIHNwYW5bZGF0YS12LTJjZjBhZTcyXSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jZW50ZXJMaXN0IC5saXN0IC5pdGVtX2RpdiAudGl0bGVzIC50aXRsZXNfbmFtZVtkYXRhLXYtMmNmMGFlNzJdIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5jZW50ZXJMaXN0IC5saXN0IC5pdGVtX2RpdiAubGFiZWxzW2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG4uY2VudGVyTGlzdCAubGlzdCAuaXRlbV9kaXYgLmxhYmVscyAubGFiZWxfZGl2W2RhdGEtdi0yY2YwYWU3Ml0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZGOTtcXG4gIGNvbG9yOiAjMDA5N2VhO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2YwYWU3MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU5ZmYyZTE3XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNmMGFlNzImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2YwYWU3MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDpppbpobUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdXBlcnZpc2lvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9zdXBlcnZpc2lvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWPmOWMlui2i+WKv1xyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1UcmVuZCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jaGFuZ2luZ190cmVuZHMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug5YiG5p6QXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NhdXNlX2FuYWx5c2lzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOivpuaDhVxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1Db2RlQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lvoXlrqHmoLjliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXBwcm92YWxMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3BlbmRpbmdfcmV2aWV3X2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBzdWJtaXREZXB0QXBwcm92YWwgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvZGVwYXJ0bWVudF9hcHByb3ZhbCcsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDotYvnoIHnsbvlnovkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2x1ZVR5cGVzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3R5cGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+axoeafk+a6kOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WMuuWfn+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlBcmVhcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9kaXZpc2lvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5Lu75Yqh5qaC5ousXHJcbmV4cG9ydCBjb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvbGF3L3Rhc2tfc3VtbWFyaXplJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v6aOO6Zmp5oC76KeIXHJcbmV4cG9ydCBjb25zdCBnZXRFdmFsdWF0ZUluZm8gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9yZWdpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6aOO6Zmp6Zeu6aKY57G75Z6LXHJcbmV4cG9ydCBjb25zdCBnZXRSaXNrVHlwZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdG9wX2luZm8nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOi1i+eggeinhOWImSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIHop4TliJnmn6Xor6JcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5UnVsZUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3J1bGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/pg6jpl6jkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtRGVwYXJ0bWVudCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9pbnRlcmZhY2UvZGVwdC9kZXB0X3RyZWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/moKHpqoxcclxuZXhwb3J0IGNvbnN0IGNoZWNrUnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL2NoZWNrJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDkv67mlLnop4TliJlcclxuZXhwb3J0IGNvbnN0IGVkaXRSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdXBkYXRlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWcsOWbviA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDlnLDlm77ngrnkvY1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTWFwID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOe7n+iuoeaKpeihqCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdGF0aXN0aWNzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2FwcC9zdGF0aXN0aWNzL2RpdmlzaW9uX3BpZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDliqjmgIHor4Tku7cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/lkITljLrln5/mipXor4nljaDmr5RcclxuZXhwb3J0IGNvbnN0IGNvbXBsYWludFByb3BvcnRpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOicvY2x1c3Rlci9haXJRdWFsaXR5L2NvbXBsYWludFByb3BvcnRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUFGS0FEQUFRQUFBQUJBQUFBRkFBQUFBQ3kzZkQ5QUFBQlpFbEVRVlE0RWMyVHZ5OEVRUlRIdnpNMk5CcUYyeHdGcDFNcUJOR0lna1J4VWVsRnhWOXdjYUxRbkg5QThEZFFVNnJFUDNCeENiVkVxV1ozbnU5c01wdVp1MTIzVndpVHZKMDNiejd2NSs0Qy8zMnBvZ0xyYlprVGcwMlJURGJJUkZyajRMMmo3b3A0M3hiNUI2dlhXbktSSmpqcXR6UEJPVzFEQTJyZk1UNlJCbVF3bUdVRW1QTFpNajBJU0srNERLeHFIMmc1ZDFRd21TNndjeTZjZGM1NlNoQ1FjM0tPOTlEWXQ5eUV4dVRuRjU3WjhqVG5lOHVXdXFTNmRsOWZ3dXZObmtxOWVIbUF6QmEzWlZVU1BQbkFUenF6OXlLTjNiZU9lbkZjTUVPdndnL0NEMWFZOHRIQi9UdXJYa3dNRG4xNzBMSzdVQW85NnRmMlBLWXduZ3BXcUJheVREaHJPYmNDU0drSXErUURhd1NzZ01GR1drSEx3eno1dDV4UmFsWTRqbVlSSDFSWUJQZzJZM0RLczVYU05WS0ZwVkc4aTk4TFdEK1diWDZpTzE2eWFxcGdmcVlsV3c3T1oyaFNYUEtGTnR4RjFaMCt5L3dTcnNndlZQWDVXKzRiMng5VzZPS0pHaG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNmMGFlNzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNmMGFlNzImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyY2YwYWU3MlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyY2YwYWU3MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2YwYWU3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2YwYWU3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZjBhZTcyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjZjBhZTcyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2dyYWRlQ29udHJvbC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2YwYWU3MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2YwYWU3MiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=