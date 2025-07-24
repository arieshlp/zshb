(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      baseInfo: {},
      distributeInfo: {},
      handleInfo: {},
      finalInfo: {},
      companyList: []
    };
  },
  mounted: function mounted() {
    this.getBaseInfo();
    this.getDistribute();
    this.getHandle();
    this.getFinal();
    this.getCompany();
  },
  methods: {
    getBaseInfo: function getBaseInfo() {
      var _this = this;

      var params = {
        id: this.$route.query.id
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_2__["baseInfo"])(params).then(function (res) {
        _this.baseInfo = res.data.data;
      });
    },
    getDistribute: function getDistribute() {
      var _this2 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_2__["distribute"])(this.$route.query.id).then(function (res) {
        _this2.distributeInfo = res.data.data;
      });
    },
    getHandle: function getHandle() {
      var _this3 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_2__["handle"])(this.$route.query.id).then(function (res) {
        _this3.handleInfo = res.data.data;
      });
    },
    getFinal: function getFinal() {
      var _this4 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_2__["final"])(this.$route.query.id).then(function (res) {
        _this4.finalInfo = res.data.data;
      });
    },
    getCompany: function getCompany() {
      var _this5 = this;

      var params = {
        infoId: this.$route.query.id
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_2__["company"])(params).then(function (res) {
        _this5.companyList = res.data.data;
      });
    },
    toCompany: function toCompany(id) {
      this.$router.push({
        name: "companyDetail",
        query: {
          id: id,
          type: "red"
        }
      });
    },
    addCommas: function addCommas(str) {
      return str.replace(/(.{16})/g, "$1、");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true& ***!
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
        attrs: { title: "督察件详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "env-inspectors-container" }, [
        _c("div", { staticClass: "env-inspectors-container-title" }, [
          _c("div", { staticClass: "title-line" }),
          _c("div", { staticClass: "title-name" }, [_vm._v("受理编号")]),
          _c("div", { staticClass: "title-num" }, [
            _vm._v(_vm._s(_vm.baseInfo.acceptanceNo)),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _c("div", { staticClass: "content-title" }, [
            _c("span", { staticClass: "title-name" }, [_vm._v("基本信息")]),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.baseInfo.focus == "重点关注",
                    expression: "baseInfo.focus == '重点关注'",
                  },
                ],
                staticClass: "title-inner",
              },
              [_vm._v("重点")]
            ),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.handleInfo.completionStatus != null,
                    expression: "handleInfo.completionStatus != null",
                  },
                ],
                staticClass: "title-right",
                style: {
                  background:
                    _vm.handleInfo.completionStatus == "已办结"
                      ? "linear-gradient(90deg, rgba(109, 170, 253, 1) 0%, rgba(67, 120, 238, 1) 100%)"
                      : "linear-gradient(90deg, rgba(255, 204, 153, 1) 0%, rgba(242, 126, 10, 1) 100%)",
                },
              },
              [_vm._v(_vm._s(_vm.handleInfo.completionStatus))]
            ),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 受理编号："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.acceptanceNo))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 受理批次："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.acceptanceBatch))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 受理时间："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.acceptanceTime))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 举报地市："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.reportCity))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 举报县区："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.reportCounty))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 举报详细地址："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.reportAddress))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 举报主要内容："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.mainContent))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 行业类型："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.industryType))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 行业类型（市）："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.unitType))]),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _vm._m(0),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 污染类型："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.pollutionType))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 具体类型："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.specificType))]),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _vm._m(1),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 是否重复："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.isDuplicate || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 重复年限："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.duplicateYears || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 重复编号："),
            _vm.baseInfo.duplicateNo != null
              ? _c("span", [
                  _vm._v(
                    _vm._s(_vm.addCommas(_vm.baseInfo.duplicateNo) || "-")
                  ),
                ])
              : _c("span", [_vm._v("-")]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 重复内码："),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.duplicateCode || "-"))]),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _vm._m(2),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 主办单位："),
            _c("span", [_vm._v(_vm._s(_vm.distributeInfo.leadUnit || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 督办牵头单位："),
            _c("span", [
              _vm._v(_vm._s(_vm.distributeInfo.leadSupervisionUnit || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 督办配合单位："),
            _c("span", [
              _vm._v(_vm._s(_vm.distributeInfo.cooperationUnit || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 局内部单位："),
            _c("span", [
              _vm._v(_vm._s(_vm.distributeInfo.internalUnit || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 验收牵头单位："),
            _c("span", [
              _vm._v(_vm._s(_vm.distributeInfo.acceptanceUnit || "-")),
            ]),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _vm._m(3),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 办理单位："),
            _c("span", [_vm._v(_vm._s(_vm.handleInfo.handleUnit || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 责任人："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.responsiblePerson || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 联系电话："),
            _c("span", [_vm._v(_vm._s(_vm.handleInfo.contactNumber || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 办结时间："),
            _c("span", [_vm._v(_vm._s(_vm.handleInfo.completionTime || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 是否属实："),
            _c("span", [_vm._v(_vm._s(_vm.handleInfo.isTrue || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 区域分布："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.regionalDistribution || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item" }, [
            _vm._v(" 群众身边："),
            _c("span", [_vm._v(_vm._s(_vm.handleInfo.aroundThePublic || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 利益关系："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.interestRelation || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 调查核实情况："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.investigationVerification || "-")),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 计划完成时间："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.plannedCompletionTime || "-") + " "),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 处理和整改情况："),
            _c("span", [
              _vm._v(_vm._s(_vm.handleInfo.handlingRemedial || "-")),
            ]),
          ]),
        ]),
        _c("div", { staticClass: "env-inspectors-container-content" }, [
          _vm._m(4),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 办结目标："),
            _c("span", [_vm._v(_vm._s(_vm.finalInfo.compTarget || "-"))]),
          ]),
          _c("div", { staticClass: "env-inspectors-list-item1" }, [
            _vm._v(" 问题类型："),
            _c("span", [_vm._v(_vm._s(_vm.finalInfo.probType || "-"))]),
          ]),
        ]),
        _vm._m(5),
        _c(
          "div",
          { staticClass: "bottom-content" },
          [
            _c("div", { staticClass: "bottom-content-title" }, [
              _vm._v("可能涉及到的污染源企业"),
            ]),
            _vm._l(_vm.companyList, function (item) {
              return _c(
                "div",
                {
                  staticClass: "bottom-content-content",
                  on: {
                    click: function ($event) {
                      return _vm.toCompany(item.id)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "content-company" }, [
                    _vm._v(_vm._s(item.wrymc || "-")),
                  ]),
                  _vm._m(6, true),
                ]
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("污染类型")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("重复情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("办理单位")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("办理情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("验收情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-container-title" }, [
      _c("div", { staticClass: "title-line" }),
      _c("div", { staticClass: "title-name" }, [
        _vm._v("大数据关联分析（试运行）"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-detail" }, [
      _vm._v("查看"),
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/polluter/rightIcon.png */ "./src/assets/polluter/rightIcon.png"), alt: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".env-inspectors-container[data-v-8599c522] {\n  width: 100%;\n  height: calc(100vh - 60px);\n  background-color: #ffffff;\n  overflow-y: auto;\n}\n.env-inspectors-container .env-inspectors-container-title[data-v-8599c522] {\n  width: calc(100% - 30px);\n  height: 34px;\n  opacity: 1;\n  border-radius: 4px;\n  background: #f5f6f6;\n  margin: 10px 15px;\n  line-height: 34px;\n  font-size: 14px;\n}\n.env-inspectors-container .env-inspectors-container-title div[data-v-8599c522] {\n  float: left;\n}\n.env-inspectors-container .env-inspectors-container-title .title-line[data-v-8599c522] {\n  width: 4px;\n  height: 16px;\n  background: linear-gradient(180deg, #738efa 0%, #3841fc 100%);\n  margin: 9px;\n}\n.env-inspectors-container .env-inspectors-container-title .title-name[data-v-8599c522] {\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-title .title-num[data-v-8599c522] {\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #25396f;\n  margin-right: 10px;\n}\n.env-inspectors-container .env-inspectors-container-content[data-v-8599c522] {\n  width: calc(100% - 20px);\n  height: auto;\n  opacity: 1;\n  display: inline-block;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 2px 20px rgba(37, 57, 111, 0.05);\n  margin: 3px 10px;\n  padding-bottom: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title[data-v-8599c522] {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px 10px 0 0;\n  border-bottom: 1px solid rgba(37, 57, 111, 0.05);\n  line-height: 40px;\n  margin-bottom: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-name[data-v-8599c522] {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0px;\n  color: #5475f8;\n  margin-left: 10px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-inner[data-v-8599c522] {\n  padding: 2px 5px;\n  border-radius: 4px;\n  background: #fceae6;\n  border: 1px solid #ffcbbf;\n  color: #ff5733;\n  font-size: 12px;\n  margin-left: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-right[data-v-8599c522] {\n  font-size: 12px;\n  border-radius: 10px 10px 0px 10px;\n  background: linear-gradient(90deg, #6daafd 0%, #4378ee 100%);\n  padding: 4px 8px;\n  color: #ffffff;\n  margin-left: calc(100% - 170px);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item[data-v-8599c522] {\n  width: calc(50% - 20px);\n  height: auto;\n  line-height: 18px;\n  padding: 4px 5px 4px 10px;\n  font-size: 12px;\n  float: left;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item span[data-v-8599c522] {\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item1[data-v-8599c522] {\n  width: calc(100% - 20px);\n  height: auto;\n  line-height: 18px;\n  padding: 4px 5px 4px 10px;\n  font-size: 12px;\n  float: left;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item1 span[data-v-8599c522] {\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom[data-v-8599c522] {\n  width: 100%;\n  height: 36px;\n  opacity: 1;\n  border-radius: 0px 0px 10px 10px;\n  background: #f9fafd;\n  border: 1px solid white;\n  float: left;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom .words[data-v-8599c522] {\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #5475f8;\n  float: left;\n  padding-left: 10px;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom .right[data-v-8599c522] {\n  float: right;\n  line-height: 36px;\n  font-size: 18px;\n  color: #888;\n  padding-right: 10px;\n}\n.env-inspectors-container .bottom-content[data-v-8599c522] {\n  width: calc(100% - 22px);\n  height: auto;\n  opacity: 1;\n  display: inline-block;\n  margin: 0px 10px 3px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.env-inspectors-container .bottom-content .bottom-content-title[data-v-8599c522] {\n  width: 100%;\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n  color: #447bfc;\n  padding-left: 10px;\n}\n.env-inspectors-container .bottom-content .bottom-content-content[data-v-8599c522] {\n  width: 100%;\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n  color: #25396f;\n}\n.env-inspectors-container .bottom-content .bottom-content-content .content-company[data-v-8599c522] {\n  float: left;\n  padding-left: 10px;\n}\n.env-inspectors-container .bottom-content .bottom-content-content .content-detail[data-v-8599c522] {\n  float: right;\n  color: rgba(18, 18, 54, 0.5);\n  padding-right: 10px;\n}\n.env-inspectors-container .bottom-content .bottom-content-content .content-detail img[data-v-8599c522] {\n  position: relative;\n  top: 2px;\n  margin-left: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7c59eb5a", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/polluter/rightIcon.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/rightIcon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFRSURBVCiRdZI9SxxRFIaf985sECwsQoQUERF/gOJPWIxaJUUgAT8KQcTGaotEmy1cU0UQf4BJkXIDkkICK9iKhfaCIAiCqIighZmZN4VZWWZn3upwnvMcOJcrOjL1xa+SkNSMxoCR/+0jyYd/43hjv66r9qzaxfhqMmvYAvoozg0w32rEO89idTVdFt4sEfL50GrETVU/e0hRegKEDvgTmC4R75NKNBgU0lpOwvJ3wwyQFYi90WO2FBDv80TW75D5XPAJSLtU8S4ALwu29jhoF/sGsdDteTgAjyW3oIDtQh6C8FkBeAh40laf4EceGp2GDHa61uGpFL0xNIGom/NLEyt+nSo9AyodbA+ollzw4CwaCH/WdYFYzMEyycDc3lddB4DWWryN+QjclggAl5InW424CR1/FeBt3f1ZktRsjQlGeXrxY+ODF5X4225dd+3Zf+zXcDM/R+SeAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/envInspectors/components/inspectorDetail.vue":
/*!****************************************************************!*\
  !*** ./src/views/envInspectors/components/inspectorDetail.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true& */ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true&");
/* harmony import */ var _inspectorDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspectorDetail.vue?vue&type=script&lang=js& */ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& */ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _inspectorDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8599c522",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/envInspectors/components/inspectorDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./inspectorDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=style&index=0&id=8599c522&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_style_index_0_id_8599c522_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/components/inspectorDetail.vue?vue&type=template&id=8599c522&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inspectorDetail_vue_vue_type_template_id_8599c522_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbnNwZWN0b3JEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT9mZTgzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT9jYTNlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT85YzljIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvY29tcG9uZW50cy9pbnNwZWN0b3JEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT83N2UzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT85NWU0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2NvbXBvbmVudHMvaW5zcGVjdG9yRGV0YWlsLnZ1ZT80ZjczIl0sIm5hbWVzIjpbInF1ZXJ5U2VsZWN0QnlJZCIsImlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRpc2N1c3NTZWxlY3RCeUNhc2VJZCIsInN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkIiwibGVnYWxTZWxlY3RCeUNhc2VJZCIsInNlbGVjdEJ5Q2FzZUlkIiwicHVuaXNoU2VsZWN0QnlDYXNlSWQiLCJnZXRIZWFyaW5nQnlDYXNlSWQiLCJzdGFnZVNlbGVjdEJ5Q2FzZUlkIiwiZ2V0VXNlckluZm8iLCJkYXRhIiwicGFyYW1zIiwiZ2V0VXNlckxpc3QiLCJxdWVyeVR5cGVDYXNlTGlzdCIsImFkZFJlcG9ydCIsImdldFJlcG9ydERldGFpbCIsInNpZ25SZXBvcnQiLCJ0eXBlIiwiY291bnRJbmZvIiwiZ2V0QWxsUmVwb3J0IiwiY2hlY2tQd2QiLCJxdWVyeURpdmlzaW9uIiwiZ2V0U3VwZXJCYXRjaCIsImdldFN1cGVyTGlzdCIsImluZm8iLCJnZXRTdXBlckxpc3REZXRhaWwiLCJib2FyZCIsImNvdW50eUxpc3QiLCJpbmZvTGlzdCIsImJhc2VJbmZvIiwiZGlzdHJpYnV0ZSIsImhhbmRsZSIsImZpbmFsIiwiY29tcGFueSIsInByb2JsZW0iLCJ0aW1lR3JvdXAiLCJ1bml0IiwicHJvYmxlbUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMktBO0FBRUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQTtBQUdBLG9CQUhBO0FBSUEsbUJBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQkE7QUFrQkE7QUFDQSxlQURBLHlCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQVJBO0FBU0EsaUJBVEEsMkJBU0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBYkE7QUFjQSxhQWRBLHVCQWNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQWxCQTtBQW1CQSxZQW5CQSxzQkFtQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBdkJBO0FBd0JBLGNBeEJBLHdCQXdCQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0EvQkE7QUFnQ0EsYUFoQ0EscUJBZ0NBLEVBaENBLEVBZ0NBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0EsZ0JBREE7QUFFQTtBQUZBO0FBRkE7QUFPQSxLQXhDQTtBQXlDQSxhQXpDQSxxQkF5Q0EsR0F6Q0EsRUF5Q0E7QUFDQTtBQUNBO0FBM0NBO0FBbEJBLEc7Ozs7Ozs7Ozs7OztBQzdLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsa0JBQWtCLEVBQUU7QUFDeEM7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsaUJBQWlCLDBDQUEwQztBQUMzRCxtQkFBbUIsZ0RBQWdEO0FBQ25FLHFCQUFxQiw0QkFBNEI7QUFDakQscUJBQXFCLDRCQUE0QjtBQUNqRCxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBa0Q7QUFDckUscUJBQXFCLCtCQUErQjtBQUNwRCx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFrRDtBQUNyRTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBa0Q7QUFDckU7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFrRDtBQUNyRTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQWtEO0FBQ3JFO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFB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Ozs7O0FDQXhVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzEwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxMDB2aFwiPlxyXG4gICAgPHZhbi1uYXYtYmFyIHRpdGxlPVwi552j5a+f5Lu26K+m5oOFXCIgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+IDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5Y+X55CG57yW5Y+3PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLW51bVwiPnt7IGJhc2VJbmZvLmFjY2VwdGFuY2VObyB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtbmFtZVwiPuWfuuacrOS/oeaBrzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtaW5uZXJcIiB2LXNob3c9XCJiYXNlSW5mby5mb2N1cyA9PSAn6YeN54K55YWz5rOoJ1wiPumHjeeCuTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzPVwidGl0bGUtcmlnaHRcIlxyXG4gICAgICAgICAgICB2LXNob3c9XCJoYW5kbGVJbmZvLmNvbXBsZXRpb25TdGF0dXMgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5mby5jb21wbGV0aW9uU3RhdHVzID09ICflt7Llip7nu5MnXHJcbiAgICAgICAgICAgICAgICAgID8gJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDksIDE3MCwgMjUzLCAxKSAwJSwgcmdiYSg2NywgMTIwLCAyMzgsIDEpIDEwMCUpJ1xyXG4gICAgICAgICAgICAgICAgICA6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyMDQsIDE1MywgMSkgMCUsIHJnYmEoMjQyLCAxMjYsIDEwLCAxKSAxMDAlKScsXHJcbiAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICA+e3sgaGFuZGxlSW5mby5jb21wbGV0aW9uU3RhdHVzIH19PC9zcGFuXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOWPl+eQhue8luWPt++8mjxzcGFuPnt7IGJhc2VJbmZvLmFjY2VwdGFuY2VObyB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDlj5fnkIbmibnmrKHvvJo8c3Bhbj57eyBiYXNlSW5mby5hY2NlcHRhbmNlQmF0Y2ggfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAg5Y+X55CG5pe26Ze077yaPHNwYW4+e3sgYmFzZUluZm8uYWNjZXB0YW5jZVRpbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAg5Li+5oql5Zyw5biC77yaPHNwYW4+e3sgYmFzZUluZm8ucmVwb3J0Q2l0eSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDkuL7miqXljr/ljLrvvJo8c3Bhbj57eyBiYXNlSW5mby5yZXBvcnRDb3VudHkgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOS4vuaKpeivpue7huWcsOWdgO+8mjxzcGFuPnt7IGJhc2VJbmZvLnJlcG9ydEFkZHJlc3MgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOS4vuaKpeS4u+imgeWGheWuue+8mjxzcGFuPnt7IGJhc2VJbmZvLm1haW5Db250ZW50IH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIOihjOS4muexu+Wei++8mjxzcGFuPnt7IGJhc2VJbmZvLmluZHVzdHJ5VHlwZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDooYzkuJrnsbvlnovvvIjluILvvInvvJo8c3Bhbj57eyBiYXNlSW5mby51bml0VHlwZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLW5hbWVcIj7msaHmn5Pnsbvlnos8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAg5rGh5p+T57G75Z6L77yaPHNwYW4+e3sgYmFzZUluZm8ucG9sbHV0aW9uVHlwZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDlhbfkvZPnsbvlnovvvJo8c3Bhbj57eyBiYXNlSW5mby5zcGVjaWZpY1R5cGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS1uYW1lXCI+6YeN5aSN5oOF5Ya1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIOaYr+WQpumHjeWkje+8mjxzcGFuPnt7IGJhc2VJbmZvLmlzRHVwbGljYXRlIHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIOmHjeWkjeW5tOmZkO+8mjxzcGFuPnt7IGJhc2VJbmZvLmR1cGxpY2F0ZVllYXJzIHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDph43lpI3nvJblj7fvvJo8c3BhbiB2LWlmPVwiYmFzZUluZm8uZHVwbGljYXRlTm8gIT0gbnVsbFwiPnt7IGFkZENvbW1hcyhiYXNlSW5mby5kdXBsaWNhdGVObykgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiB2LWVsc2U+LTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiPlxyXG4gICAgICAgICAg6YeN5aSN5YaF56CB77yaPHNwYW4+e3sgYmFzZUluZm8uZHVwbGljYXRlQ29kZSB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLW5hbWVcIj7lip7nkIbljZXkvY08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOS4u+WKnuWNleS9je+8mjxzcGFuPnt7IGRpc3RyaWJ1dGVJbmZvLmxlYWRVbml0IHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDnnaPlip7nibXlpLTljZXkvY3vvJo8c3Bhbj57eyBkaXN0cmlidXRlSW5mby5sZWFkU3VwZXJ2aXNpb25Vbml0IHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDnnaPlip7phY3lkIjljZXkvY3vvJo8c3Bhbj57eyBkaXN0cmlidXRlSW5mby5jb29wZXJhdGlvblVuaXQgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOWxgOWGhemDqOWNleS9je+8mjxzcGFuPnt7IGRpc3RyaWJ1dGVJbmZvLmludGVybmFsVW5pdCB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiPlxyXG4gICAgICAgICAg6aqM5pS254m15aS05Y2V5L2N77yaPHNwYW4+e3sgZGlzdHJpYnV0ZUluZm8uYWNjZXB0YW5jZVVuaXQgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5Yqe55CG5oOF5Ya1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDlip7nkIbljZXkvY3vvJo8c3Bhbj57eyBoYW5kbGVJbmZvLmhhbmRsZVVuaXQgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAg6LSj5Lu75Lq677yaPHNwYW4+e3sgaGFuZGxlSW5mby5yZXNwb25zaWJsZVBlcnNvbiB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDogZTns7vnlLXor53vvJo8c3Bhbj57eyBoYW5kbGVJbmZvLmNvbnRhY3ROdW1iZXIgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAg5Yqe57uT5pe26Ze077yaPHNwYW4+e3sgaGFuZGxlSW5mby5jb21wbGV0aW9uVGltZSB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDmmK/lkKblsZ7lrp7vvJo8c3Bhbj57eyBoYW5kbGVJbmZvLmlzVHJ1ZSB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICDljLrln5/liIbluIPvvJo8c3Bhbj57eyBoYW5kbGVJbmZvLnJlZ2lvbmFsRGlzdHJpYnV0aW9uIHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIOe+pOS8l+i6q+i+ue+8mjxzcGFuPnt7IGhhbmRsZUluZm8uYXJvdW5kVGhlUHVibGljIHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDliKnnm4rlhbPns7vvvJo8c3Bhbj57eyBoYW5kbGVJbmZvLmludGVyZXN0UmVsYXRpb24gfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOiwg+afpeaguOWunuaDheWGte+8mjxzcGFuPnt7IGhhbmRsZUluZm8uaW52ZXN0aWdhdGlvblZlcmlmaWNhdGlvbiB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiPlxyXG4gICAgICAgICAg6K6h5YiS5a6M5oiQ5pe26Ze077yaPHNwYW4+e3sgaGFuZGxlSW5mby5wbGFubmVkQ29tcGxldGlvblRpbWUgfHwgXCItXCIgfX0gPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDlpITnkIblkozmlbTmlLnmg4XlhrXvvJo8c3Bhbj57eyBoYW5kbGVJbmZvLmhhbmRsaW5nUmVtZWRpYWwgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC1ib3R0b21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jkc1wiPuafpeeci+i/h+W+gOaVtOaUueaDheWGtTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLW5hbWVcIj7pqozmlLbmg4XlhrU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIj5cclxuICAgICAgICAgIOWKnue7k+ebruagh++8mjxzcGFuPnt7IGZpbmFsSW5mby5jb21wVGFyZ2V0IHx8IFwiLVwiIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCI+XHJcbiAgICAgICAgICDpl67popjnsbvlnovvvJo8c3Bhbj57eyBmaW5hbEluZm8ucHJvYlR5cGUgfHwgXCItXCIgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbmFtZVwiPuWkp+aVsOaNruWFs+iBlOWIhuaekO+8iOivlei/kOihjO+8iTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1jb250ZW50LXRpdGxlXCI+5Y+v6IO95raJ5Y+K5Yiw55qE5rGh5p+T5rqQ5LyB5LiaPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1jb250ZW50LWNvbnRlbnRcIiB2LWZvcj1cIml0ZW0gaW4gY29tcGFueUxpc3RcIiBAY2xpY2s9XCJ0b0NvbXBhbnkoaXRlbS5pZClcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbXBhbnlcIj57eyBpdGVtLndyeW1jIHx8IFwiLVwiIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kZXRhaWxcIj7mn6XnnIs8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIiBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgYmFzZUluZm8sIGRpc3RyaWJ1dGUsIGhhbmRsZSwgZmluYWwsIGNvbXBhbnkgfSBmcm9tIFwiQC9hcGkvY2FzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiaW5kZXhcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZUluZm86IHt9LFxyXG4gICAgICBkaXN0cmlidXRlSW5mbzoge30sXHJcbiAgICAgIGhhbmRsZUluZm86IHt9LFxyXG4gICAgICBmaW5hbEluZm86IHt9LFxyXG4gICAgICBjb21wYW55TGlzdDogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZ2V0QmFzZUluZm8oKTtcclxuICAgIHRoaXMuZ2V0RGlzdHJpYnV0ZSgpO1xyXG4gICAgdGhpcy5nZXRIYW5kbGUoKTtcclxuICAgIHRoaXMuZ2V0RmluYWwoKTtcclxuICAgIHRoaXMuZ2V0Q29tcGFueSgpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0QmFzZUluZm8oKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgaWQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkLFxyXG4gICAgICB9O1xyXG4gICAgICBiYXNlSW5mbyhwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuYmFzZUluZm8gPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREaXN0cmlidXRlKCkge1xyXG4gICAgICBkaXN0cmlidXRlKHRoaXMuJHJvdXRlLnF1ZXJ5LmlkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmRpc3RyaWJ1dGVJbmZvID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0SGFuZGxlKCkge1xyXG4gICAgICBoYW5kbGUodGhpcy4kcm91dGUucXVlcnkuaWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW5mbyA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEZpbmFsKCkge1xyXG4gICAgICBmaW5hbCh0aGlzLiRyb3V0ZS5xdWVyeS5pZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maW5hbEluZm8gPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRDb21wYW55KCkge1xyXG4gICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgIGluZm9JZDogdGhpcy4kcm91dGUucXVlcnkuaWQsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbXBhbnkocGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmNvbXBhbnlMaXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9Db21wYW55KGlkKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICBuYW1lOiBcImNvbXBhbnlEZXRhaWxcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgdHlwZTogXCJyZWRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZGRDb21tYXMoc3RyKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKC57MTZ9KS9nLCBcIiQx44CBXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGUge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI0NiwgMSk7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbGluZSB7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxMTUsIDE0MiwgMjUwLCAxKSAwJSwgcmdiYSg1NiwgNjUsIDI1MiwgMSkgMTAwJSk7XHJcbiAgICAgIG1hcmdpbjogOXB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbnVtIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IHJnYmEoMzcsIDU3LCAxMTEsIDAuMDUpO1xyXG4gICAgbWFyZ2luOiAzcHggMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAuY29udGVudC10aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgLnRpdGxlLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUtaW5uZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyMzQsIDIzMCwgMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIwMywgMTkxLCAxKTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDg3LCA1MSwgMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlLXJpZ2h0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDksIDE3MCwgMjUzLCAxKSAwJSwgcmdiYSg2NywgMTIwLCAyMzgsIDEpIDEwMCUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDE3MHB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggNXB4IDRweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgcGFkZGluZzogNHB4IDVweCA0cHggMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgLy8gICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVudi1pbnNwZWN0b3JzLWxpc3QtYm90dG9tIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNTAsIDI1MywgMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAud29yZHMge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJvdHRvbS1jb250ZW50IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgLmJvdHRvbS1jb250ZW50LXRpdGxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1jb250ZW50LWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgIC5jb250ZW50LWNvbXBhbnkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGVudC1kZXRhaWwge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDB2aFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi552j5a+f5Lu26K+m5oOFXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1saW5lXCIgfSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1uYW1lXCIgfSwgW192bS5fdihcIuWPl+eQhue8luWPt1wiKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbnVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uYWNjZXB0YW5jZU5vKSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW5hbWVcIiB9LCBbX3ZtLl92KFwi5Z+65pys5L+h5oGvXCIpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJhc2VJbmZvLmZvY3VzID09IFwi6YeN54K55YWz5rOoXCIsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFzZUluZm8uZm9jdXMgPT0gJ+mHjeeCueWFs+azqCdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZS1pbm5lclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi6YeN54K5XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGFuZGxlSW5mby5jb21wbGV0aW9uU3RhdHVzICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGFuZGxlSW5mby5jb21wbGV0aW9uU3RhdHVzICE9IG51bGxcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZS1yaWdodFwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICBfdm0uaGFuZGxlSW5mby5jb21wbGV0aW9uU3RhdHVzID09IFwi5bey5Yqe57uTXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEwOSwgMTcwLCAyNTMsIDEpIDAlLCByZ2JhKDY3LCAxMjAsIDIzOCwgMSkgMTAwJSlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyMDQsIDE1MywgMSkgMCUsIHJnYmEoMjQyLCAxMjYsIDEwLCAxKSAxMDAlKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5oYW5kbGVJbmZvLmNvbXBsZXRpb25TdGF0dXMpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOWPl+eQhue8luWPt++8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uYWNjZXB0YW5jZU5vKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDlj5fnkIbmibnmrKHvvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmFjY2VwdGFuY2VCYXRjaCkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5Y+X55CG5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5hY2NlcHRhbmNlVGltZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5Li+5oql5Zyw5biC77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5yZXBvcnRDaXR5KSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkuL7miqXljr/ljLrvvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnJlcG9ydENvdW50eSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOS4vuaKpeivpue7huWcsOWdgO+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucmVwb3J0QWRkcmVzcykpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOS4vuaKpeS4u+imgeWGheWuue+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ubWFpbkNvbnRlbnQpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOihjOS4muexu+Wei++8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uaW5kdXN0cnlUeXBlKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDooYzkuJrnsbvlnovvvIjluILvvInvvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnVuaXRUeXBlKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOaxoeafk+exu+Wei++8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucG9sbHV0aW9uVHlwZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5YW35L2T57G75Z6L77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5zcGVjaWZpY1R5cGUpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5piv5ZCm6YeN5aSN77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5pc0R1cGxpY2F0ZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6YeN5aSN5bm06ZmQ77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5kdXBsaWNhdGVZZWFycyB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOmHjeWkjee8luWPt++8mlwiKSxcbiAgICAgICAgICAgIF92bS5iYXNlSW5mby5kdXBsaWNhdGVObyAhPSBudWxsXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hZGRDb21tYXMoX3ZtLmJhc2VJbmZvLmR1cGxpY2F0ZU5vKSB8fCBcIi1cIilcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6YeN5aSN5YaF56CB77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5kdXBsaWNhdGVDb2RlIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkuLvlip7ljZXkvY3vvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRpc3RyaWJ1dGVJbmZvLmxlYWRVbml0IHx8IFwiLVwiKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg552j5Yqe54m15aS05Y2V5L2N77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzdHJpYnV0ZUluZm8ubGVhZFN1cGVydmlzaW9uVW5pdCB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOedo+WKnumFjeWQiOWNleS9je+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3RyaWJ1dGVJbmZvLmNvb3BlcmF0aW9uVW5pdCB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOWxgOWGhemDqOWNleS9je+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3RyaWJ1dGVJbmZvLmludGVybmFsVW5pdCB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOmqjOaUtueJteWktOWNleS9je+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3RyaWJ1dGVJbmZvLmFjY2VwdGFuY2VVbml0IHx8IFwiLVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDlip7nkIbljZXkvY3vvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmhhbmRsZUluZm8uaGFuZGxlVW5pdCB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6LSj5Lu75Lq677yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGFuZGxlSW5mby5yZXNwb25zaWJsZVBlcnNvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6IGU57O755S16K+d77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5oYW5kbGVJbmZvLmNvbnRhY3ROdW1iZXIgfHwgXCItXCIpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOWKnue7k+aXtumXtO+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaGFuZGxlSW5mby5jb21wbGV0aW9uVGltZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5piv5ZCm5bGe5a6e77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5oYW5kbGVJbmZvLmlzVHJ1ZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5Yy65Z+f5YiG5biD77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGFuZGxlSW5mby5yZWdpb25hbERpc3RyaWJ1dGlvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg576k5LyX6Lqr6L6577yaXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5oYW5kbGVJbmZvLmFyb3VuZFRoZVB1YmxpYyB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOWIqeebiuWFs+ezu++8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhhbmRsZUluZm8uaW50ZXJlc3RSZWxhdGlvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOiwg+afpeaguOWunuaDheWGte+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhhbmRsZUluZm8uaW52ZXN0aWdhdGlvblZlcmlmaWNhdGlvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOiuoeWIkuWujOaIkOaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhhbmRsZUluZm8ucGxhbm5lZENvbXBsZXRpb25UaW1lIHx8IFwiLVwiKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDlpITnkIblkozmlbTmlLnmg4XlhrXvvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oYW5kbGVJbmZvLmhhbmRsaW5nUmVtZWRpYWwgfHwgXCItXCIpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOWKnue7k+ebruagh++8mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmluYWxJbmZvLmNvbXBUYXJnZXQgfHwgXCItXCIpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDpl67popjnsbvlnovvvJpcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbmFsSW5mby5wcm9iVHlwZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX20oNSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3R0b20tY29udGVudFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b20tY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5Y+v6IO95raJ5Y+K5Yiw55qE5rGh5p+T5rqQ5LyB5LiaXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNvbXBhbnlMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3R0b20tY29udGVudC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9Db21wYW55KGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbXBhbnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS53cnltYyB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oNiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtfdm0uX3YoXCLmsaHmn5PnsbvlnotcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtfdm0uX3YoXCLph43lpI3mg4XlhrVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtfdm0uX3YoXCLlip7nkIbljZXkvY1cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtfdm0uX3YoXCLlip7nkIbmg4XlhrVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtfdm0uX3YoXCLpqozmlLbmg4XlhrVcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLWxpbmVcIiB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtbmFtZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5aSn5pWw5o2u5YWz6IGU5YiG5p6Q77yI6K+V6L+Q6KGM77yJXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1kZXRhaWxcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLmn6XnnItcIiksXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIiksIGFsdDogXCJcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXJbZGF0YS12LTg1OTljNTIyXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci10aXRsZVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIGhlaWdodDogMzRweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNmY2O1xcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMzRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlIGRpdltkYXRhLXYtODU5OWM1MjJdIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGUgLnRpdGxlLWxpbmVbZGF0YS12LTg1OTljNTIyXSB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzczOGVmYSAwJSwgIzM4NDFmYyAxMDAlKTtcXG4gIG1hcmdpbjogOXB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGUgLnRpdGxlLW5hbWVbZGF0YS12LTg1OTljNTIyXSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGUgLnRpdGxlLW51bVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50W2RhdGEtdi04NTk5YzUyMl0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcXG4gIG1hcmdpbjogM3B4IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuY29udGVudC10aXRsZVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuY29udGVudC10aXRsZSAudGl0bGUtbmFtZVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUgLnRpdGxlLWlubmVyW2RhdGEtdi04NTk5YzUyMl0ge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICNmY2VhZTY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYmJmO1xcbiAgY29sb3I6ICNmZjU3MzM7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuY29udGVudC10aXRsZSAudGl0bGUtcmlnaHRbZGF0YS12LTg1OTljNTIyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZGFhZmQgMCUsICM0Mzc4ZWUgMTAwJSk7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMTcwcHgpO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtW2RhdGEtdi04NTk5YzUyMl0ge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDRweCA1cHggNHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtIHNwYW5bZGF0YS12LTg1OTljNTIyXSB7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFbZGF0YS12LTg1OTljNTIyXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDRweCA1cHggNHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMSBzcGFuW2RhdGEtdi04NTk5YzUyMl0ge1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWJvdHRvbVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y5ZmFmZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWJvdHRvbSAud29yZHNbZGF0YS12LTg1OTljNTIyXSB7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWxpc3QtYm90dG9tIC5yaWdodFtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICM4ODg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5ib3R0b20tY29udGVudFtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDBweCAxMHB4IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmJvdHRvbS1jb250ZW50IC5ib3R0b20tY29udGVudC10aXRsZVtkYXRhLXYtODU5OWM1MjJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuYm90dG9tLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50LWNvbnRlbnRbZGF0YS12LTg1OTljNTIyXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmJvdHRvbS1jb250ZW50IC5ib3R0b20tY29udGVudC1jb250ZW50IC5jb250ZW50LWNvbXBhbnlbZGF0YS12LTg1OTljNTIyXSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuYm90dG9tLWNvbnRlbnQgLmJvdHRvbS1jb250ZW50LWNvbnRlbnQgLmNvbnRlbnQtZGV0YWlsW2RhdGEtdi04NTk5YzUyMl0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmJvdHRvbS1jb250ZW50IC5ib3R0b20tY29udGVudC1jb250ZW50IC5jb250ZW50LWRldGFpbCBpbWdbZGF0YS12LTg1OTljNTIyXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5zcGVjdG9yRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1OTljNTIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiN2M1OWViNWFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNwZWN0b3JEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU5OWM1MjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNwZWN0b3JEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODU5OWM1MjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5qGI5Lu26K+m5oOFXHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdEJ5SWQgPShpZCk9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9jYXNlL3NlbGVjdEJ5SWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG4vLyDpm4bkvZPorqjorrror6bmg4VcclxuZXhwb3J0IGNvbnN0IGRpc2N1c3NTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9kaXNjdXNzL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N1cGVydmlzZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IGxlZ2FsU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvbGVnYWwvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaW5mb3JtL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHB1bmlzaFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3B1bmlzaC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEhlYXJpbmdCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9oZWFyaW5nL2dldEhlYXJpbmdCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdGFnZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N0YWdlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG5cclxuLy/moLnmja50b2tlbuiOt+WPluS8geS4muS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9nZXRJbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W55So5oi3XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5p+l55yL5a6h5om55a2Q6aG55YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVR5cGVDYXNlTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9xdWVyeUFwcExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlrDlu7rlrqHmibnooahcclxuZXhwb3J0IGNvbnN0IGFkZFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9pbnNcIixcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W5Y2V5Liq5a6h5om56KGo5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvcnREZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nrb7lkI3lrqHmiblcclxuZXhwb3J0IGNvbnN0IHNpZ25SZXBvcnQgPSAoZGF0YSx0eXBlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9zaWduP3R5cGU9XCIrdHlwZSxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+e7n+iuoVxyXG5leHBvcnQgY29uc3QgY291bnRJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2dldFN0YXRcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/or6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEFsbFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/moKHpqozlr4bnoIFcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvY2hlY2tQd2RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlK/pmJ8v5YiG5bGA5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeURpdmlzaW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZGl2XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCJcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckJhdGNoID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JhdGNoTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdCA9IChpbmZvLGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwYXJhbXM6IGluZm8sXHJcbiAgICBkYXRhIDogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50eUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZC9nZXRDb3VudHlcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5mb0xpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZUluZm8ocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2dldEJ5SWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdHJpYnV0ZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZGlzdHJpYnV0ZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vaGFuZGxlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWwocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2ZpbmFsL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFueShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vcXlCeUluZm9JZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUdyb3VwKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy90aW1lR3JvdXBcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL2dldFVuaXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW1MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9wYWdlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBT0NBWUFBQUFmU0MzUkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZSU1VSQlZDaVJkWkk5U3h4UkZJYWY5ODVzRUN3c1FvUVVFUkYvZ09KUFdJeGFKVVVnQVQ4S1FjVEdhb3RFbXkxY1UwVVFmNEJKa1hJRGtrSUNLOWlLaGZhQ0lBaUNxSWlnaFptWk40VlpXV1puM3Vwd252TWNPSmNyT2pMMXhhK1NrTlNNeG9DUi8rMGp5WWQvNDNoanY2NnI5cXpheGZocU1tdllBdm9vemcwdzMyckVPODlpZFRWZEZ0NHNFZkw1MEdyRVRWVS9lMGhSZWdLRUR2Z1RtQzRSNzVOS05CZ1UwbHBPd3ZKM3d3eVFGWWk5MFdPMkZCRHY4MFRXNzVENVhQQUpTTHRVOFM0QUx3dTI5amhvRi9zR3NkRHRlVGdBanlXM29JRHRRaDZDOEZrQmVBaDQwbGFmNEVjZUdwMkdESGE2MXVHcEZMMHhOSUdvbS9OTEV5dCtuU285QXlvZGJBK29sbHp3NEN3YUNIL1dkWUZZek1FeXljRGMzbGRkQjREV1dyeU4rUWpjbGdnQWw1SW5XNDI0Q1IxL0ZlQnQzZjFaa3RSc2pRbEdlWHJ4WStPREY1WDQyMjVkZCszWmYrelhjRE0vUitTZUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5zcGVjdG9yRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTk5YzUyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbnNwZWN0b3JEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnNwZWN0b3JEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luc3BlY3RvckRldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NTk5YzUyMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjg1OTljNTIyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg1OTljNTIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg1OTljNTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg1OTljNTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbnNwZWN0b3JEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1OTljNTIyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg1OTljNTIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZW52SW5zcGVjdG9ycy9jb21wb25lbnRzL2luc3BlY3RvckRldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3BlY3RvckRldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5zcGVjdG9yRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3BlY3RvckRldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NTk5YzUyMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3BlY3RvckRldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU5OWM1MjImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9