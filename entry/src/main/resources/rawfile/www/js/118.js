(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        _vm._l(_vm.list, function (item) {
          return _c("div", { staticClass: "env-inspectors-content" }, [
            _c("div", { staticClass: "env-inspectors-header" }, [
              _c("div", { staticClass: "title" }, [_vm._v(_vm._s(item.unit))]),
              _c("div", { staticClass: "total" }, [
                _vm._v("总：" + _vm._s(item.sum) + "件"),
              ]),
            ]),
            _c("div", { staticClass: "env-inspectors-body" }, [
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content-item",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "1")
                    },
                  },
                },
                [
                  _vm._m(0, true),
                  _c("span", { staticClass: "item-first" }, [
                    _vm._v(_vm._s(item.focusShouldBeAccepted)),
                  ]),
                  _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                ]
              ),
              _c("div", { staticClass: "env-inspectors-content-line" }),
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content-item",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "8")
                    },
                  },
                },
                [
                  _vm._m(1, true),
                  _c("span", { staticClass: "item-first" }, [
                    _vm._v(_vm._s(item.focusSelfInspection)),
                  ]),
                  _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                ]
              ),
              _c("div", { staticClass: "env-inspectors-content-line" }),
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content-item",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "9")
                    },
                  },
                },
                [
                  _vm._m(2, true),
                  _c("span", { staticClass: "item-first" }, [
                    _vm._v(_vm._s(item.focusMunicipalLevel)),
                  ]),
                  _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                ]
              ),
              _c("div", { staticClass: "env-inspectors-content-line" }),
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content-item",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "10")
                    },
                  },
                },
                [
                  _vm._m(3, true),
                  _c("span", { staticClass: "item-first" }, [
                    _vm._v(_vm._s(item.applyProvinceLevel)),
                  ]),
                  _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                ]
              ),
              _c("div", { staticClass: "env-inspectors-content-line" }),
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content-item",
                  on: {
                    click: function ($event) {
                      return _vm.toSearch(item.unit, "11")
                    },
                  },
                },
                [
                  _vm._m(4, true),
                  _c("span", { staticClass: "item-first" }, [
                    _vm._v(_vm._s(item.passProvinceLevel)),
                  ]),
                  _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                ]
              ),
            ]),
          ])
        }),
        0
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
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("应验收"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("自查自验"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("市级验收"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("申请省级验收"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("通过省级验收"),
      _c("br"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".env-inspectors-container[data-v-6fdbcffb] {\n  width: 100%;\n  height: calc(100vh - 48px);\n  background-color: #f5f5f5;\n  overflow-y: auto;\n}\n.env-inspectors-container .env-inspectors-content[data-v-6fdbcffb] {\n  width: calc(100% - 22px);\n  height: 90px;\n  margin: 0 auto 5px;\n  border-radius: 8px;\n  background: linear-gradient(132.76deg, rgba(255, 255, 255, 0.2) 0%, #e6eaff 100%);\n  border: 1px solid rgba(167, 182, 252, 0.2);\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-header[data-v-6fdbcffb] {\n  width: 100%;\n  height: 29px;\n  line-height: 29px;\n  border-bottom: 1px solid #dbe1fe;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-header .title[data-v-6fdbcffb] {\n  float: left;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  color: #4361ee;\n  padding-left: 10px;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-header .total[data-v-6fdbcffb] {\n  float: right;\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #ff8d1a;\n  padding-right: 10px;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body[data-v-6fdbcffb] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body .env-inspectors-content-item[data-v-6fdbcffb] {\n  text-align: center;\n  padding: 0 5px;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body .env-inspectors-content-line[data-v-6fdbcffb] {\n  width: 1px;\n  height: 16px;\n  background-color: rgba(67, 97, 238, 0.2);\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body .item-first[data-v-6fdbcffb] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 26.06px;\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body .item-second[data-v-6fdbcffb] {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 26.06px;\n  color: #25396f;\n  margin-left: 2px;\n}\n.env-inspectors-container .env-inspectors-content .env-inspectors-body .item-third[data-v-6fdbcffb] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-content[data-v-6fdbcffb]:first-child {\n  margin-top: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e6ad775e", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/envInspectors/components/importantStatus.vue":
/*!****************************************************************!*\
  !*** ./src/views/envInspectors/components/importantStatus.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true& */ "./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true&");
/* harmony import */ var _importantStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importantStatus.vue?vue&type=script&lang=js& */ "./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& */ "./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _importantStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fdbcffb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/envInspectors/components/importantStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./importantStatus.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=style&index=0&id=6fdbcffb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_style_index_0_id_6fdbcffb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/importantStatus.vue?vue&type=template&id=6fdbcffb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_importantStatus_vue_vue_type_template_id_6fdbcffb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbXBvcnRhbnRTdGF0dXMudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW1wb3J0YW50U3RhdHVzLnZ1ZT9mMGQ1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW1wb3J0YW50U3RhdHVzLnZ1ZT83MTNmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW1wb3J0YW50U3RhdHVzLnZ1ZT9iOGVlIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52SW5zcGVjdG9ycy9jb21wb25lbnRzL2ltcG9ydGFudFN0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbXBvcnRhbnRTdGF0dXMudnVlPzVkNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbXBvcnRhbnRTdGF0dXMudnVlP2RlZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbXBvcnRhbnRTdGF0dXMudnVlP2FhMTYiXSwibmFtZXMiOlsicXVlcnlTZWxlY3RCeUlkIiwiaWQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkIiwic3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQiLCJsZWdhbFNlbGVjdEJ5Q2FzZUlkIiwic2VsZWN0QnlDYXNlSWQiLCJwdW5pc2hTZWxlY3RCeUNhc2VJZCIsImdldEhlYXJpbmdCeUNhc2VJZCIsInN0YWdlU2VsZWN0QnlDYXNlSWQiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJwYXJhbXMiLCJnZXRVc2VyTGlzdCIsInF1ZXJ5VHlwZUNhc2VMaXN0IiwiYWRkUmVwb3J0IiwiZ2V0UmVwb3J0RGV0YWlsIiwic2lnblJlcG9ydCIsInR5cGUiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsU0FQQSxxQkFPQTtBQUNBO0FBQ0EsR0FUQTtBQVVBO0FBQ0EsaUJBREEsMkJBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBUkE7QUFTQSxZQVRBLG9CQVNBLElBVEEsRUFTQSxJQVRBLEVBU0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSx1QkFEQTtBQUVBLG9CQUZBO0FBR0E7QUFIQTtBQUZBO0FBUUE7QUFsQkE7QUFWQSxHOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlLGtCQUFrQixFQUFFO0FBQ3hDO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWlEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLDBDQUEwQztBQUNuRDtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEUsdUJBQXVCLHVDQUF1QztBQUM5RCx5QkFBeUIsdUJBQXVCO0FBQ2hELHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFDQUFxQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFEO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQ7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBNkM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRDtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFEO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQ7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLCtDQUErQyxnQkFBZ0IsK0JBQStCLDhCQUE4QixxQkFBcUIsR0FBRyxzRUFBc0UsNkJBQTZCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHNGQUFzRiwrQ0FBK0MsR0FBRyw2RkFBNkYsZ0JBQWdCLGlCQUFpQixzQkFBc0IscUNBQXFDLEdBQUcsb0dBQW9HLGdCQUFnQixvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIsdUJBQXVCLEdBQUcsb0dBQW9HLGlCQUFpQixvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIsd0JBQXdCLEdBQUcsMkZBQTJGLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx3SEFBd0gsdUJBQXVCLG1CQUFtQixHQUFHLHdIQUF3SCxlQUFlLGlCQUFpQiw2Q0FBNkMsR0FBRyx1R0FBdUcsb0JBQW9CLHFCQUFxQix3QkFBd0IseUJBQXlCLG1CQUFtQixHQUFHLHdHQUF3RyxvQkFBb0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLHFCQUFxQixHQUFHLHVHQUF1RyxvQkFBb0IscUJBQXFCLHdCQUF3QixzQkFBc0Isa0NBQWtDLEdBQUcsa0ZBQWtGLHFCQUFxQixHQUFHO0FBQ2o2RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywrMEJBQW1lO0FBQ3pmO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxlQUFlLEdBQUUsU0FBakJBLGVBQWlCLENBQUNDLEVBQUQsRUFBTztBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSwwQkFBd0JGLEVBRGhCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0osRUFBRCxFQUFPO0FBQzFDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGlDQUErQkYsRUFEdkI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBTVA7O0FBQ08sSUFBTUUsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDTCxFQUFELEVBQU87QUFDNUMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsbUNBQWlDRixFQUR6QjtBQUViRyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLEVBQUQsRUFBTztBQUN4QyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSwrQkFBNkJGLEVBRHJCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1AsRUFBRCxFQUFPO0FBQ25DLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGdDQUE4QkYsRUFEdEI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBTVA7O0FBQ08sSUFBTUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUixFQUFELEVBQU87QUFDekMsU0FBT0Msd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsZ0NBQThCRixFQUR0QjtBQUViRyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNULEVBQUQsRUFBTztBQUN2QyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxxQ0FBbUNGLEVBRDNCO0FBRWJHLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELENBTE0sQyxDQU1QOztBQUNPLElBQU1PLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1YsRUFBRCxFQUFPO0FBQ3hDLFNBQU9DLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLCtCQUE2QkYsRUFEckI7QUFFYkcsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQsQ0FMTSxDLENBT1A7O0FBQ08sSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLGtCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUQ7QUFISyxHQUFELENBQWQ7QUFLRCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRixJQUFELEVBQVU7QUFDbkMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsVUFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSCxJQUFELEVBQVU7QUFDekMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsMkJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk0sQyxDQU9QOztBQUNPLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLElBQUQsRUFBVTtBQUNqQyxTQUFPWCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxrQkFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiUyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTCxJQUFELEVBQVU7QUFDdkMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsY0FEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ04sSUFBRCxFQUFNTyxJQUFOLEVBQWU7QUFDdkMsU0FBT2xCLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLDRCQUEwQmlCLElBRGxCO0FBRWJoQixVQUFNLEVBQUUsTUFGSztBQUdiUyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1IsSUFBRCxFQUFVO0FBQ2pDLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLHNCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUQ7QUFISyxHQUFELENBQWQ7QUFLRCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxJQUFELEVBQVU7QUFDcEMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUscUJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk0sQyxDQU9QOztBQUNPLElBQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNWLElBQUQsRUFBVTtBQUNoQyxTQUFPWCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxtQkFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDWCxJQUFELEVBQVU7QUFDckMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsY0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRCxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNcUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDWixJQUFELEVBQVU7QUFDckMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsZUFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiVSxVQUFNLEVBQUVEO0FBSEssR0FBRCxDQUFkO0FBS0QsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFNZCxJQUFOLEVBQWU7QUFDekMsU0FBT1gsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsVUFEUTtBQUViQyxVQUFNLEVBQUUsTUFGSztBQUdiVSxVQUFNLEVBQUVhLElBSEs7QUFJYmQsUUFBSSxFQUFHQTtBQUpNLEdBQUQsQ0FBZDtBQU1ELENBUE0sQyxDQVFQOztBQUNPLElBQU1lLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2YsSUFBRCxFQUFVO0FBQzFDLFNBQU9YLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLE1BRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFRDtBQUhLLEdBQUQsQ0FBZDtBQUtELENBTk07QUFRQSxTQUFTZ0IsS0FBVCxHQUFpQjtBQUN0QixTQUFPM0Isd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsV0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVMwQixVQUFULENBQW9CaEIsTUFBcEIsRUFBNEI7QUFDakMsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUscUJBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFQTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBU2lCLFFBQVQsQ0FBa0JqQixNQUFsQixFQUEwQjtBQUMvQixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxlQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUE7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVNLFNBQVNrQixRQUFULENBQWtCbEIsTUFBbEIsRUFBMEI7QUFDL0IsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsa0JBRFE7QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYlUsVUFBTSxFQUFFQTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBU21CLFVBQVQsQ0FBb0JuQixNQUFwQixFQUE0QjtBQUNqQyxTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSx5QkFBeUJXLE1BRGpCO0FBRWJWLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlEO0FBRU0sU0FBUzhCLE1BQVQsQ0FBZ0JwQixNQUFoQixFQUF3QjtBQUM3QixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxxQkFBcUJXLE1BRGI7QUFFYlYsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTK0IsS0FBVCxDQUFlckIsTUFBZixFQUF1QjtBQUM1QixTQUFPWix3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxvQkFBb0JXLE1BRFo7QUFFYlYsVUFBTSxFQUFFO0FBRkssR0FBRCxDQUFkO0FBSUQ7QUFFTSxTQUFTZ0MsT0FBVCxDQUFpQnRCLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU9aLHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFLHFCQURRO0FBRWJDLFVBQU0sRUFBRSxLQUZLO0FBR2JVLFVBQU0sRUFBRUE7QUFISyxHQUFELENBQWQ7QUFLRDtBQUVNLFNBQVN1QixPQUFULEdBQW1CO0FBQ3hCLFNBQU9uQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxzQkFEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNrQyxTQUFULEdBQXFCO0FBQzFCLFNBQU9wQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSxnQ0FEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNtQyxJQUFULEdBQWdCO0FBQ3JCLFNBQU9yQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSw4QkFEUTtBQUViQyxVQUFNLEVBQUU7QUFGSyxHQUFELENBQWQ7QUFJRDtBQUVNLFNBQVNvQyxXQUFULENBQXFCMUIsTUFBckIsRUFBNkI7QUFDbEMsU0FBT1osd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsK0JBRFE7QUFFYkMsVUFBTSxFQUFFLE1BRks7QUFHYlMsUUFBSSxFQUFFQztBQUhPLEdBQUQsQ0FBZDtBQUtELEM7Ozs7Ozs7Ozs7OztBQzdQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUdwRztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFvVCxDQUFnQixnVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4VTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogMTAwdmhcIj5cclxuICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCIkcm91dGUucXVlcnkudHlwZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgICA8IS0tIDx0ZW1wbGF0ZSAjcmlnaHQ+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogbm9ybWFsXCI+5aSE55CG5oOF5Ya1PC9zcGFuPjwvdGVtcGxhdGU+IC0tPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnRcIiB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPnt7IGl0ZW0udW5pdCB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsXCI+5oC777yae3sgaXRlbS5zdW0gfX3ku7Y8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIEBjbGljaz1cInRvU2VhcmNoKGl0ZW0udW5pdCwnMScpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10aGlyZFwiPuW6lOmqjOaUtjxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57e2l0ZW0uZm9jdXNTaG91bGRCZUFjY2VwdGVkfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIEBjbGljaz1cInRvU2VhcmNoKGl0ZW0udW5pdCwnOCcpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10aGlyZFwiPuiHquafpeiHqumqjDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57e2l0ZW0uZm9jdXNTZWxmSW5zcGVjdGlvbn19PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIiBAY2xpY2s9XCJ0b1NlYXJjaChpdGVtLnVuaXQsJzknKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGhpcmRcIj7luILnuqfpqozmlLY8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3tpdGVtLmZvY3VzTXVuaWNpcGFsTGV2ZWx9fTwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tc2Vjb25kXCI+5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCIgQGNsaWNrPVwidG9TZWFyY2goaXRlbS51bml0LCcxMCcpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10aGlyZFwiPueUs+ivt+ecgee6p+mqjOaUtjxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57e2l0ZW0uYXBwbHlQcm92aW5jZUxldmVsfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIEBjbGljaz1cInRvU2VhcmNoKGl0ZW0udW5pdCwnMTEnKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGhpcmRcIj7pgJrov4fnnIHnuqfpqozmlLY8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3tpdGVtLnBhc3NQcm92aW5jZUxldmVsfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgY291bnR5TGlzdCB9IGZyb20gXCJAL2FwaS9jYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJpbmRleFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaXN0OiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5nZXRDb3VudHlMaXN0KCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRDb3VudHlMaXN0KCkge1xyXG4gICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgIHR5cGU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lmx4LFxyXG4gICAgICB9O1xyXG4gICAgICBjb3VudHlMaXN0KHBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvU2VhcmNoKHVuaXQsIHR5cGUpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwic2VhcmNoTGlzdFwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiBcIuedo+Wvn+S7tuWIl+ihqFwiLFxyXG4gICAgICAgICAgdW5pdDogdW5pdCxcclxuICAgICAgICAgIGx4OiB0eXBlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzIuNzZkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgyMzAsIDIzNCwgMjU1LCAxKSAxMDAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY3LCAxODIsIDI1MiwgMC4yKTtcclxuICAgIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE5LCAyMjUsIDI1NCwgMSk7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSg2NywgOTcsIDIzOCwgMSk7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50b3RhbCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW52LWluc3BlY3RvcnMtYm9keSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbSB7XHJcbiAgICAgICAgLy8gZmxleDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgOTcsIDIzOCwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgICAuaXRlbS1maXJzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjYuMDZweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tc2Vjb25kIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNi4wNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLXRoaXJkIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwdmhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uJHJvdXRlLnF1ZXJ5LnR5cGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXJcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihfdm0uX3MoaXRlbS51bml0KSldKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLmgLvvvJpcIiArIF92bS5fcyhpdGVtLnN1bSkgKyBcIuS7tlwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1NlYXJjaChpdGVtLnVuaXQsIFwiMVwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5mb2N1c1Nob3VsZEJlQWNjZXB0ZWQpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU2VhcmNoKGl0ZW0udW5pdCwgXCI4XCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmZvY3VzU2VsZkluc3BlY3Rpb24pKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU2VhcmNoKGl0ZW0udW5pdCwgXCI5XCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmZvY3VzTXVuaWNpcGFsTGV2ZWwpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU2VhcmNoKGl0ZW0udW5pdCwgXCIxMFwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hcHBseVByb3ZpbmNlTGV2ZWwpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvU2VhcmNoKGl0ZW0udW5pdCwgXCIxMVwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg0LCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5wYXNzUHJvdmluY2VMZXZlbCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNlY29uZFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tdGhpcmRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLlupTpqozmlLZcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXRoaXJkXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi6Ieq5p+l6Ieq6aqMXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS10aGlyZFwiIH0sIFtcbiAgICAgIF92bS5fdihcIuW4gue6p+mqjOaUtlwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tdGhpcmRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLnlLPor7fnnIHnuqfpqozmlLZcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXRoaXJkXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi6YCa6L+H55yB57qn6aqM5pS2XCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lcltkYXRhLXYtNmZkYmNmZmJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGVudFtkYXRhLXYtNmZkYmNmZmJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcXG4gIGhlaWdodDogOTBweDtcXG4gIG1hcmdpbjogMCBhdXRvIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzIuNzZkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgI2U2ZWFmZiAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY3LCAxODIsIDI1MiwgMC4yKTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuZW52LWluc3BlY3RvcnMtaGVhZGVyW2RhdGEtdi02ZmRiY2ZmYl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI5cHg7XFxuICBsaW5lLWhlaWdodDogMjlweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJlMWZlO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXIgLnRpdGxlW2RhdGEtdi02ZmRiY2ZmYl0ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGNvbG9yOiAjNDM2MWVlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXIgLnRvdGFsW2RhdGEtdi02ZmRiY2ZmYl0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWJvZHlbZGF0YS12LTZmZGJjZmZiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1bZGF0YS12LTZmZGJjZmZiXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lW2RhdGEtdi02ZmRiY2ZmYl0ge1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDk3LCAyMzgsIDAuMik7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWJvZHkgLml0ZW0tZmlyc3RbZGF0YS12LTZmZGJjZmZiXSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNi4wNnB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWJvZHkgLml0ZW0tc2Vjb25kW2RhdGEtdi02ZmRiY2ZmYl0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMjYuMDZweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuZW52LWluc3BlY3RvcnMtYm9keSAuaXRlbS10aGlyZFtkYXRhLXYtNmZkYmNmZmJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGVudFtkYXRhLXYtNmZkYmNmZmJdOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW1wb3J0YW50U3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZmZGJjZmZiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZTZhZDc3NWVcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbXBvcnRhbnRTdGF0dXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmZkYmNmZmImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbXBvcnRhbnRTdGF0dXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmZkYmNmZmImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5qGI5Lu26K+m5oOFXHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdEJ5SWQgPShpZCk9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9jYXNlL3NlbGVjdEJ5SWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG4vLyDpm4bkvZPorqjorrror6bmg4VcclxuZXhwb3J0IGNvbnN0IGRpc2N1c3NTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9kaXNjdXNzL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N1cGVydmlzZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IGxlZ2FsU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvbGVnYWwvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaW5mb3JtL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHB1bmlzaFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3B1bmlzaC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEhlYXJpbmdCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9oZWFyaW5nL2dldEhlYXJpbmdCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdGFnZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N0YWdlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG5cclxuLy/moLnmja50b2tlbuiOt+WPluS8geS4muS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9nZXRJbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W55So5oi3XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5p+l55yL5a6h5om55a2Q6aG55YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVR5cGVDYXNlTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9xdWVyeUFwcExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlrDlu7rlrqHmibnooahcclxuZXhwb3J0IGNvbnN0IGFkZFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9pbnNcIixcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W5Y2V5Liq5a6h5om56KGo5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvcnREZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nrb7lkI3lrqHmiblcclxuZXhwb3J0IGNvbnN0IHNpZ25SZXBvcnQgPSAoZGF0YSx0eXBlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9zaWduP3R5cGU9XCIrdHlwZSxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+e7n+iuoVxyXG5leHBvcnQgY29uc3QgY291bnRJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2dldFN0YXRcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/or6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEFsbFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/moKHpqozlr4bnoIFcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvY2hlY2tQd2RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlK/pmJ8v5YiG5bGA5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeURpdmlzaW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZGl2XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCJcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckJhdGNoID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JhdGNoTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdCA9IChpbmZvLGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwYXJhbXM6IGluZm8sXHJcbiAgICBkYXRhIDogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50eUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZC9nZXRDb3VudHlcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5mb0xpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZUluZm8ocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2dldEJ5SWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdHJpYnV0ZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZGlzdHJpYnV0ZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vaGFuZGxlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWwocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2ZpbmFsL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFueShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vcXlCeUluZm9JZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUdyb3VwKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy90aW1lR3JvdXBcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL2dldFVuaXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW1MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9wYWdlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbXBvcnRhbnRTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmZGJjZmZiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ltcG9ydGFudFN0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ltcG9ydGFudFN0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW1wb3J0YW50U3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZmZGJjZmZiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmZkYmNmZmJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmZkYmNmZmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmZkYmNmZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmZkYmNmZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ltcG9ydGFudFN0YXR1cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmZkYmNmZmImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmZkYmNmZmInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW1wb3J0YW50U3RhdHVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW1wb3J0YW50U3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbXBvcnRhbnRTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW1wb3J0YW50U3RhdHVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZmZGJjZmZiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW1wb3J0YW50U3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZmRiY2ZmYiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=