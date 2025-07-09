(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      list: []
    };
  },
  mounted: function mounted() {
    this.getCountyList();
  },
  methods: {
    getCountyList: function getCountyList() {
      var _this = this;

      var params = {
        type: this.$route.query.lx
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_0__["countyList"])(params).then(function (res) {
        _this.list = res.data;
      });
    },
    toSearch: function toSearch(unit, type) {
      this.$router.push({
        name: "searchList",
        query: {
          type: "督察件列表",
          unit: unit,
          lx: type
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true& ***!
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
    { staticStyle: { height: "100vh" } },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.$route.query.type, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "env-inspectors-container" },
        [
          _c("div", { staticClass: "listTitle" }, [
            _c("div", { staticClass: "item-first" }, [_vm._v("县区")]),
            _c("div", { staticClass: "item-second" }, [
              _vm._v(
                _vm._s(
                  _vm.$route.query.type == "正在整改情况"
                    ? "正在整改数"
                    : "总件数"
                )
              ),
            ]),
            _c(
              "div",
              {
                staticClass: "item-third",
                style: {
                  color:
                    _vm.$route.query.type == "正在整改情况"
                      ? "rgba(255, 141, 26, 1)"
                      : "rgba(255, 87, 51, 1)",
                },
              },
              [
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.$route.query.type == "正在整改情况"
                        ? "临近到期(近一月)"
                        : "重点关注"
                    ) +
                    " "
                ),
              ]
            ),
          ]),
          _vm._l(_vm.list, function (item) {
            return _c("div", { staticClass: "list" }, [
              _c("div", { staticClass: "item-first" }, [
                _vm._v(_vm._s(item.unit)),
              ]),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$route.query.lx == "1",
                      expression: "$route.query.lx == '1'",
                    },
                  ],
                  staticClass: "item-second",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "")
                    },
                  },
                },
                [
                  _c("span", [_vm._v(_vm._s(item.sum))]),
                  _c("span", [_vm._v("件")]),
                ]
              ),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$route.query.lx == "2",
                      expression: "$route.query.lx == '2'",
                    },
                  ],
                  staticClass: "item-second",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "2")
                    },
                  },
                },
                [
                  _c("span", [_vm._v(_vm._s(item.incompleteRectification))]),
                  _c("span", [_vm._v("件")]),
                ]
              ),
              _c("div", { staticClass: "item-line" }),
              _c(
                "div",
                {
                  staticClass: "item-third",
                  style: {
                    color:
                      _vm.$route.query.type == "正在整改情况"
                        ? "rgba(255, 141, 26, 1)"
                        : "rgba(255, 87, 51, 1)",
                  },
                },
                [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.$route.query.lx == "1",
                          expression: "$route.query.lx == '1'",
                        },
                      ],
                      on: {
                        click: function ($event) {
                          return _vm.toSearch(item.unit, "1")
                        },
                      },
                    },
                    [_vm._v(_vm._s(item.focus))]
                  ),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.$route.query.lx == "2",
                          expression: "$route.query.lx == '2'",
                        },
                      ],
                      on: {
                        click: function ($event) {
                          return _vm.toSearch(item.unit, "12")
                        },
                      },
                    },
                    [_vm._v(_vm._s(item.nearExpiration))]
                  ),
                  _c("span", [_vm._v("件")]),
                ]
              ),
            ])
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".env-inspectors-container[data-v-0538ac86] {\n  width: 100%;\n  height: calc(100vh - 55px);\n  background-color: #f5f5f5;\n  overflow-y: auto;\n}\n.env-inspectors-container .listTitle[data-v-0538ac86] {\n  width: calc(100% - 20px);\n  height: 40px;\n  line-height: 50px;\n  margin-left: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #25396f;\n  font-weight: 600;\n  font-size: 14px;\n}\n.env-inspectors-container .listTitle .item-first[data-v-0538ac86] {\n  width: calc(100% - 240px);\n  padding-left: 15px;\n}\n.env-inspectors-container .listTitle .item-second[data-v-0538ac86] {\n  width: 90px;\n  padding-left: 10px;\n}\n.env-inspectors-container .listTitle .item-third[data-v-0538ac86] {\n  width: 150px;\n  color: #ff5733;\n  text-align: center;\n}\n.env-inspectors-container .list[data-v-0538ac86] {\n  width: calc(100% - 22px);\n  height: 45px;\n  border-radius: 8px;\n  background: linear-gradient(132.76deg, rgba(255, 255, 255, 0.2) 0%, #e6eaff 100%);\n  border: 1px solid rgba(167, 182, 252, 0.2);\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: #25396f;\n  margin-bottom: 5px;\n}\n.env-inspectors-container .list .item-first[data-v-0538ac86] {\n  width: calc(100% - 240px);\n  padding-left: 15px;\n}\n.env-inspectors-container .list .item-second[data-v-0538ac86] {\n  width: 90px;\n  padding-left: 10px;\n}\n.env-inspectors-container .list .item-second span[data-v-0538ac86]:first-child {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 25.78px;\n  margin-right: 8px;\n}\n.env-inspectors-container .list .item-line[data-v-0538ac86] {\n  width: 1px;\n  height: 16px;\n  background-color: rgba(67, 97, 238, 0.2);\n}\n.env-inspectors-container .list .item-third[data-v-0538ac86] {\n  width: 149px;\n  text-align: center;\n  color: #ff5733;\n}\n.env-inspectors-container .list .item-third span[data-v-0538ac86]:first-child {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 31.86px;\n  margin-right: 8px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6347136e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/case.js":
/*!*************************!*\
  !*** ./src/api/case.js ***!
  \*************************/
/*! exports provided: querySelectById, discussSelectByCaseId, superviseSelectByCaseId, legalSelectByCaseId, selectByCaseId, punishSelectByCaseId, getHearingByCaseId, stageSelectByCaseId, getUserInfo, getUserList, queryTypeCaseList, addReport, getReportDetail, signReport, countInfo, getAllReport, checkPwd, queryDivision, getSuperBatch, getSuperList, getSuperListDetail, board, countyList, infoList, baseInfo, distribute, handle, final, company, problem, timeGroup, unit, problemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectById", function() { return querySelectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discussSelectByCaseId", function() { return discussSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superviseSelectByCaseId", function() { return superviseSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legalSelectByCaseId", function() { return legalSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByCaseId", function() { return selectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punishSelectByCaseId", function() { return punishSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHearingByCaseId", function() { return getHearingByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageSelectByCaseId", function() { return stageSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTypeCaseList", function() { return queryTypeCaseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReport", function() { return addReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDetail", function() { return getReportDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signReport", function() { return signReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInfo", function() { return countInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllReport", function() { return getAllReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPwd", function() { return checkPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDivision", function() { return queryDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperBatch", function() { return getSuperBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperList", function() { return getSuperList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperListDetail", function() { return getSuperListDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countyList", function() { return countyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoList", function() { return infoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseInfo", function() { return baseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "company", function() { return company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problem", function() { return problem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeGroup", function() { return timeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemList", function() { return problemList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 案件详情
 * */

var querySelectById = function querySelectById(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/case/selectById/' + id,
    method: 'get'
  });
}; // 集体讨论详情

var discussSelectByCaseId = function discussSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/discuss/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var superviseSelectByCaseId = function superviseSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/supervise/selectByCaseId/' + id,
    method: 'get'
  });
}; // 告知详情

var legalSelectByCaseId = function legalSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/legal/selectByCaseId/' + id,
    method: 'post'
  });
}; // 告知详情

var selectByCaseId = function selectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/inform/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var punishSelectByCaseId = function punishSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/punish/selectByCaseId/' + id,
    method: 'get'
  });
}; // 详情

var getHearingByCaseId = function getHearingByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hearing/getHearingByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var stageSelectByCaseId = function stageSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/stage/selectByCaseId/' + id,
    method: 'post'
  });
}; //根据token获取企业信息

var getUserInfo = function getUserInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/getInfo",
    method: "GET",
    params: data
  });
}; //获取用户

var getUserList = function getUserList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user",
    method: "GET",
    params: data
  });
}; //查看审批子项列表

var queryTypeCaseList = function queryTypeCaseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/queryAppList",
    method: "GET",
    params: data
  });
}; //新建审批表

var addReport = function addReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/ins",
    method: "PUT",
    data: data
  });
}; //获取单个审批表信息

var getReportDetail = function getReportDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval",
    method: "GET",
    params: data
  });
}; //签名审批

var signReport = function signReport(data, type) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/sign?type=" + type,
    method: "POST",
    data: data
  });
}; //统计

var countInfo = function countInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/getStat",
    method: "GET",
    params: data
  });
}; //详情

var getAllReport = function getAllReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/detail",
    method: "GET",
    params: data
  });
}; //校验密码

var checkPwd = function checkPwd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/checkPwd",
    method: "GET",
    params: data
  });
}; //支队/分局下拉框

var queryDivision = function queryDivision(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/div",
    method: "GET"
  });
}; //环保督察-获取批次列表

var getSuperBatch = function getSuperBatch(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/batchList",
    method: "GET",
    params: data
  });
}; //环保督察-获取批次列表

var getSuperList = function getSuperList(info, data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/list",
    method: "POST",
    params: info,
    data: data
  });
}; //环保督察-获取批次列表

var getSuperListDetail = function getSuperListDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/",
    method: "GET",
    params: data
  });
};
function board() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board",
    method: "get"
  });
}
function countyList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board/getCounty",
    method: "get",
    params: params
  });
}
function infoList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/list",
    method: "get",
    params: params
  });
}
function baseInfo(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/getById",
    method: "get",
    params: params
  });
}
function distribute(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/distribute/" + params,
    method: "get"
  });
}
function handle(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/handle/" + params,
    method: "get"
  });
}
function final(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/final/" + params,
    method: "get"
  });
}
function company(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/qyByInfoId",
    method: "get",
    params: params
  });
}
function problem() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues",
    method: "get"
  });
}
function timeGroup() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/timeGroup",
    method: "get"
  });
}
function unit() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/getUnit",
    method: "get"
  });
}
function problemList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/pageList",
    method: "post",
    data: params
  });
}

/***/ }),

/***/ "./src/views/envInspectors/components/comList.vue":
/*!********************************************************!*\
  !*** ./src/views/envInspectors/components/comList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comList.vue?vue&type=template&id=0538ac86&scoped=true& */ "./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true&");
/* harmony import */ var _comList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comList.vue?vue&type=script&lang=js& */ "./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& */ "./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _comList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0538ac86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/envInspectors/components/comList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=style&index=0&id=0538ac86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_style_index_0_id_0538ac86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comList.vue?vue&type=template&id=0538ac86&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/comList.vue?vue&type=template&id=0538ac86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comList_vue_vue_type_template_id_0538ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9jb21MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52SW5zcGVjdG9ycy9jb21wb25lbnRzL2NvbUxpc3QudnVlPzYxMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9jb21MaXN0LnZ1ZT9jMzZjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvY29tTGlzdC52dWU/MGY1YSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Nhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9jb21MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52SW5zcGVjdG9ycy9jb21wb25lbnRzL2NvbUxpc3QudnVlPzljNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9jb21MaXN0LnZ1ZT9mMjkxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvY29tTGlzdC52dWU/NGNlZSJdLCJuYW1lcyI6WyJxdWVyeVNlbGVjdEJ5SWQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkaXNjdXNzU2VsZWN0QnlDYXNlSWQiLCJzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCIsImxlZ2FsU2VsZWN0QnlDYXNlSWQiLCJzZWxlY3RCeUNhc2VJZCIsInB1bmlzaFNlbGVjdEJ5Q2FzZUlkIiwiZ2V0SGVhcmluZ0J5Q2FzZUlkIiwic3RhZ2VTZWxlY3RCeUNhc2VJZCIsImdldFVzZXJJbmZvIiwiZGF0YSIsInBhcmFtcyIsImdldFVzZXJMaXN0IiwicXVlcnlUeXBlQ2FzZUxpc3QiLCJhZGRSZXBvcnQiLCJnZXRSZXBvcnREZXRhaWwiLCJzaWduUmVwb3J0IiwidHlwZSIsImNvdW50SW5mbyIsImdldEFsbFJlcG9ydCIsImNoZWNrUHdkIiwicXVlcnlEaXZpc2lvbiIsImdldFN1cGVyQmF0Y2giLCJnZXRTdXBlckxpc3QiLCJpbmZvIiwiZ2V0U3VwZXJMaXN0RGV0YWlsIiwiYm9hcmQiLCJjb3VudHlMaXN0IiwiaW5mb0xpc3QiLCJiYXNlSW5mbyIsImRpc3RyaWJ1dGUiLCJoYW5kbGUiLCJmaW5hbCIsImNvbXBhbnkiLCJwcm9ibGVtIiwidGltZUdyb3VwIiwidW5pdCIsInByb2JsZW1MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBRUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQSxTQVBBLHFCQU9BO0FBQ0E7QUFDQSxHQVRBO0FBVUE7QUFDQSxpQkFEQSwyQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FSQTtBQVNBLFlBVEEsb0JBU0EsSUFUQSxFQVNBLElBVEEsRUFTQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBLHVCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBRkE7QUFRQTtBQWxCQTtBQVZBLEc7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsa0JBQWtCLEVBQUU7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQixpREFBaUQ7QUFDakU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsMENBQTBDO0FBQ25EO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRCx1QkFBdUIsNEJBQTRCO0FBQ25ELHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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T0FBVCxHQUFtQjtBQUN4QixTQUFPbkMsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsc0JBRFE7QUFFYkMsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTa0MsU0FBVCxHQUFxQjtBQUMxQixTQUFPcEMsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsZ0NBRFE7QUFFYkMsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTbUMsSUFBVCxHQUFnQjtBQUNyQixTQUFPckMsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsOEJBRFE7QUFFYkMsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTb0MsV0FBVCxDQUFxQjFCLE1BQXJCLEVBQTZCO0FBQ2xDLFNBQU9aLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLCtCQURRO0FBRWJDLFVBQU0sRUFBRSxNQUZLO0FBR2JTLFFBQUksRUFBRUM7QUFITyxHQUFELENBQWQ7QUFLRCxDOzs7Ozs7Ozs7Ozs7QUM3UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNFMsQ0FBZ0Isd1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgOnRpdGxlPVwiJHJvdXRlLnF1ZXJ5LnR5cGVcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuICAgICAgPCEtLSA8dGVtcGxhdGUgI3JpZ2h0PjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IG5vcm1hbFwiPuWkhOeQhuaDheWGtTwvc3Bhbj48L3RlbXBsYXRlPiAtLT5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0VGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1maXJzdFwiPuWOv+WMujwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNlY29uZFwiPnt7ICRyb3V0ZS5xdWVyeS50eXBlID09IFwi5q2j5Zyo5pW05pS55oOF5Ya1XCIgPyBcIuato+WcqOaVtOaUueaVsFwiIDogXCLmgLvku7bmlbBcIiB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXRoaXJkXCIgOnN0eWxlPVwieyBjb2xvcjogJHJvdXRlLnF1ZXJ5LnR5cGUgPT0gJ+ato+WcqOaVtOaUueaDheWGtScgPyAncmdiYSgyNTUsIDE0MSwgMjYsIDEpJyA6ICdyZ2JhKDI1NSwgODcsIDUxLCAxKScgfVwiPlxyXG4gICAgICAgICAge3sgJHJvdXRlLnF1ZXJ5LnR5cGUgPT0gXCLmraPlnKjmlbTmlLnmg4XlhrVcIiA/IFwi5Li06L+R5Yiw5pyfKOi/keS4gOaciClcIiA6IFwi6YeN54K55YWz5rOoXCIgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1maXJzdFwiPnt7IGl0ZW0udW5pdCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNlY29uZFwiIEBjbGljaz1cInRvU2VhcmNoKGl0ZW0udW5pdCwgJycpXCIgdi1zaG93PVwiJHJvdXRlLnF1ZXJ5Lmx4ID09ICcxJ1wiPlxyXG4gICAgICAgICAgPHNwYW4+e3sgaXRlbS5zdW0gfX08L3NwYW5cclxuICAgICAgICAgID48c3Bhbj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tc2Vjb25kXCIgQGNsaWNrPVwidG9TZWFyY2goaXRlbS51bml0LCAnMicpXCIgdi1zaG93PVwiJHJvdXRlLnF1ZXJ5Lmx4ID09ICcyJ1wiPlxyXG4gICAgICAgICAgPHNwYW4+e3sgaXRlbS5pbmNvbXBsZXRlUmVjdGlmaWNhdGlvbiB9fTwvc3BhblxyXG4gICAgICAgICAgPjxzcGFuPuS7tjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGhpcmRcIiA6c3R5bGU9XCJ7IGNvbG9yOiAkcm91dGUucXVlcnkudHlwZSA9PSAn5q2j5Zyo5pW05pS55oOF5Ya1JyA/ICdyZ2JhKDI1NSwgMTQxLCAyNiwgMSknIDogJ3JnYmEoMjU1LCA4NywgNTEsIDEpJyB9XCI+XHJcbiAgICAgICAgICA8c3BhbiB2LXNob3c9XCIkcm91dGUucXVlcnkubHggPT0gJzEnXCIgQGNsaWNrPVwidG9TZWFyY2goaXRlbS51bml0LCAnMScpXCI+e3sgaXRlbS5mb2N1cyB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHYtc2hvdz1cIiRyb3V0ZS5xdWVyeS5seCA9PSAnMidcIiBAY2xpY2s9XCJ0b1NlYXJjaChpdGVtLnVuaXQsICcxMicpXCI+e3sgaXRlbS5uZWFyRXhwaXJhdGlvbiB9fTwvc3BhblxyXG4gICAgICAgICAgPjxzcGFuPuS7tjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGNvdW50eUxpc3QgfSBmcm9tIFwiQC9hcGkvY2FzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiaW5kZXhcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGlzdDogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZ2V0Q291bnR5TGlzdCgpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0Q291bnR5TGlzdCgpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICB0eXBlOiB0aGlzLiRyb3V0ZS5xdWVyeS5seCxcclxuICAgICAgfTtcclxuICAgICAgY291bnR5TGlzdChwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0b1NlYXJjaCh1bml0LCB0eXBlKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICBuYW1lOiBcInNlYXJjaExpc3RcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgdHlwZTogXCLnnaPlr5/ku7bliJfooahcIixcclxuICAgICAgICAgIHVuaXQ6IHVuaXQsXHJcbiAgICAgICAgICBseDogdHlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAubGlzdFRpdGxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC5pdGVtLWZpcnN0IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tc2Vjb25kIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5pdGVtLXRoaXJkIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDg3LCA1MSwgMSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmxpc3Qge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMi43NmRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDIzMCwgMjM0LCAyNTUsIDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjcsIDE4MiwgMjUyLCAwLjIpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgLml0ZW0tZmlyc3Qge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1zZWNvbmQge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNS43OHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1saW5lIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCA5NywgMjM4LCAwLjIpO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tdGhpcmQge1xyXG4gICAgICB3aWR0aDogMTQ5cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCA4NywgNTEsIDEpO1xyXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMS44NnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwdmhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uJHJvdXRlLnF1ZXJ5LnR5cGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0VGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbX3ZtLl92KFwi5Y6/5Yy6XCIpXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2Vjb25kXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLiRyb3V0ZS5xdWVyeS50eXBlID09IFwi5q2j5Zyo5pW05pS55oOF5Ya1XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIuato+WcqOaVtOaUueaVsFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCLmgLvku7bmlbBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLXRoaXJkXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnF1ZXJ5LnR5cGUgPT0gXCLmraPlnKjmlbTmlLnmg4XlhrVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMTQxLCAyNiwgMSlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2JhKDI1NSwgODcsIDUxLCAxKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnF1ZXJ5LnR5cGUgPT0gXCLmraPlnKjmlbTmlLnmg4XlhrVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIuS4tOi/keWIsOacnyjov5HkuIDmnIgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCLph43ngrnlhbPms6hcIlxuICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udW5pdCkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHJvdXRlLnF1ZXJ5Lmx4ID09IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHJvdXRlLnF1ZXJ5Lmx4ID09ICcxJ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tc2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9TZWFyY2goaXRlbS51bml0LCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnN1bSkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHJvdXRlLnF1ZXJ5Lmx4ID09IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHJvdXRlLnF1ZXJ5Lmx4ID09ICcyJ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tc2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9TZWFyY2goaXRlbS51bml0LCBcIjJcIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5pbmNvbXBsZXRlUmVjdGlmaWNhdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWxpbmVcIiB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLXRoaXJkXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlLnF1ZXJ5LnR5cGUgPT0gXCLmraPlnKjmlbTmlLnmg4XlhrVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LCAxNDEsIDI2LCAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTUsIDg3LCA1MSwgMSlcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiRyb3V0ZS5xdWVyeS5seCA9PSBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkcm91dGUucXVlcnkubHggPT0gJzEnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9TZWFyY2goaXRlbS51bml0LCBcIjFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5mb2N1cykpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHJvdXRlLnF1ZXJ5Lmx4ID09IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiRyb3V0ZS5xdWVyeS5seCA9PSAnMidcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1NlYXJjaChpdGVtLnVuaXQsIFwiMTJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uZWFyRXhwaXJhdGlvbikpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZW52LWluc3BlY3RvcnMtY29udGFpbmVyW2RhdGEtdi0wNTM4YWM4Nl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5saXN0VGl0bGVbZGF0YS12LTA1MzhhYzg2XSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdFRpdGxlIC5pdGVtLWZpcnN0W2RhdGEtdi0wNTM4YWM4Nl0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdFRpdGxlIC5pdGVtLXNlY29uZFtkYXRhLXYtMDUzOGFjODZdIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5saXN0VGl0bGUgLml0ZW0tdGhpcmRbZGF0YS12LTA1MzhhYzg2XSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBjb2xvcjogI2ZmNTczMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdFtkYXRhLXYtMDUzOGFjODZdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzIuNzZkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgI2U2ZWFmZiAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY3LCAxODIsIDI1MiwgMC4yKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5saXN0IC5pdGVtLWZpcnN0W2RhdGEtdi0wNTM4YWM4Nl0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdCAuaXRlbS1zZWNvbmRbZGF0YS12LTA1MzhhYzg2XSB7XFxuICB3aWR0aDogOTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdCAuaXRlbS1zZWNvbmQgc3BhbltkYXRhLXYtMDUzOGFjODZdOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1Ljc4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdCAuaXRlbS1saW5lW2RhdGEtdi0wNTM4YWM4Nl0ge1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDk3LCAyMzgsIDAuMik7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmxpc3QgLml0ZW0tdGhpcmRbZGF0YS12LTA1MzhhYzg2XSB7XFxuICB3aWR0aDogMTQ5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmNTczMztcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAubGlzdCAuaXRlbS10aGlyZCBzcGFuW2RhdGEtdi0wNTM4YWM4Nl06Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMzEuODZweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDUzOGFjODYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MzQ3MTM2ZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDUzOGFjODYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21MaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1MzhhYzg2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOahiOS7tuivpuaDhVxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RCeUlkID0oaWQpPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvY2FzZS9zZWxlY3RCeUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuLy8g6ZuG5L2T6K6o6K666K+m5oOFXHJcbmV4cG9ydCBjb25zdCBkaXNjdXNzU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvZGlzY3Vzcy9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdXBlcnZpc2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBsZWdhbFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2xlZ2FsL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2luZm9ybS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBwdW5pc2hTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9wdW5pc2gvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRIZWFyaW5nQnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaGVhcmluZy9nZXRIZWFyaW5nQnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3RhZ2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdGFnZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuXHJcbi8v5qC55o2udG9rZW7ojrflj5bkvIHkuJrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZ2V0SW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPlueUqOaIt1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlclwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+afpeeci+WuoeaJueWtkOmhueWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlUeXBlQ2FzZUxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvcXVlcnlBcHBMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5paw5bu65a6h5om56KGoXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvaW5zXCIsXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPluWNleS4quWuoeaJueihqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v562+5ZCN5a6h5om5XHJcbmV4cG9ydCBjb25zdCBzaWduUmVwb3J0ID0gKGRhdGEsdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvc2lnbj90eXBlPVwiK3R5cGUsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nu5/orqFcclxuZXhwb3J0IGNvbnN0IGNvdW50SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9nZXRTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5qCh6aqM5a+G56CBXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2NoZWNrUHdkXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5pSv6ZifL+WIhuWxgOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlEaXZpc2lvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2RpdlwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJCYXRjaCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9iYXRjaExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3QgPSAoaW5mbyxkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcGFyYW1zOiBpbmZvLFxyXG4gICAgZGF0YSA6IGRhdGFcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3REZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudHlMaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmQvZ2V0Q291bnR5XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm9MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VJbmZvKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9nZXRCeUlkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2Rpc3RyaWJ1dGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2hhbmRsZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9maW5hbC9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhbnkocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL3F5QnlJbmZvSWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVHcm91cCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvdGltZUdyb3VwXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9nZXRVbml0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvcGFnZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDUzOGFjODYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDUzOGFjODYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNTM4YWM4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTM4YWM4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTM4YWM4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTM4YWM4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29tTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDUzOGFjODYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDUzOGFjODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvY29tTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNTM4YWM4NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1MzhhYzg2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==