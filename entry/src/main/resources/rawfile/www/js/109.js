(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: '',
      id: '',
      tabIndex: 0,
      situationText: ''
    };
  },
  mounted: function mounted() {
    this.title = this.$route.query.tabIndex == 0 ? '中央环保督察详情' : this.$route.query.tabIndex == 1 ? '省级环保督察详情' : '市级环保督察详情';
    this.id = this.$route.query.id;
    this.situationText = this.$route.query.situationText;
    this.tabIndex = this.$route.query.tabIndex;
    this.initBaseInfo();
  },
  methods: {
    initBaseInfo: function initBaseInfo() {
      var _this = this;

      var info = {
        type: this.tabIndex == 0 ? 'center' : this.tabIndex == 1 ? 'province' : 'city',
        id: this.id
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_0__["getSuperListDetail"])(info).then(function (res) {
        _this.baseInfo = res.data;
      });
    },
    showHistoryChange: function showHistoryChange() {}
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true& ***!
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
    { staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.title, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        {
          staticStyle: {
            height: "calc(100vh - 9vh)",
            "overflow-y": "auto",
            "overflow-x": "hidden",
          },
        },
        [
          _c("div", { staticClass: "supDetailTitle" }, [
            _c("span", [_vm._v("受理编号")]),
            _c("span", [_vm._v(_vm._s(_vm.baseInfo.no))]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _c("div", { staticClass: "content-title" }, [
              _c("span", [_vm._v("基本信息")]),
              _c(
                "span",
                {
                  class: [
                    "content-right",
                    _vm.situationText.indexOf("已完成") > -1
                      ? "blue-bg"
                      : _vm.situationText.indexOf("未完成") > -1
                      ? "green-bg"
                      : _vm.situationText.indexOf("整改中") > -1
                      ? "yellow-bg"
                      : "cancel-bg",
                  ],
                },
                [_vm._v(_vm._s(_vm.situationText))]
              ),
            ]),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", [
                _vm._v("受理编号："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.no || "-"))]),
              ]),
              _c("div", [
                _vm._v("举报区县："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.country || "-"))]),
              ]),
              _c("div", { staticClass: "addr" }, [
                _vm._v("举报详细地址：" + _vm._s(_vm.baseInfo.addr)),
                _c("img", {
                  attrs: { src: __webpack_require__(/*! @/assets/supervision/addr.png */ "./src/assets/supervision/addr.png") },
                }),
              ]),
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("批次："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.batch || "-"))]),
                ]),
                _c("span", [
                  _vm._v("受理时间："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.acceptDate))]),
                ]),
              ]),
              _c("div", [
                _vm._v("举报主要内容："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.content || "-"))]),
              ]),
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("关注类型："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.watchType || "-"))]),
                ]),
                _c("span", { staticStyle: { display: "none" } }, [
                  _vm._v("整改类型："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.changeType))]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(0),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", [
                _vm._v("主办单位："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.leadingUnit || "-"))]),
              ]),
              _c("div", [
                _vm._v("督办牵头单位："),
                _c("span", [
                  _vm._v(_vm._s(_vm.baseInfo.supervisionUnit || "-")),
                ]),
              ]),
              _c("div", [
                _vm._v("督办配合单位："),
                _c("span", [
                  _vm._v(_vm._s(_vm.baseInfo.supervisionSubUnit || "-")),
                ]),
              ]),
              _c("div", [
                _vm._v("案件办理单位："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.caseSolveUnit || "-"))]),
              ]),
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("责任人："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.peopleName || "-"))]),
                ]),
                _c("span", [
                  _vm._v("联系电话："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.peopleContact || "-")),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(1),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("是否重复："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.repeat || "-"))]),
                ]),
                _c("span", [
                  _vm._v("重复年限："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.repeatYear || "-"))]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(2),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", [
                _vm._v("是否属实："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.isTrue || "-"))]),
              ]),
              _c("div", [
                _vm._v("调查核实情况："),
                _c("span", [
                  _vm._v(_vm._s(_vm.baseInfo.investSituation || "-")),
                ]),
              ]),
            ]),
          ]),
          _c(
            "div",
            { staticClass: "sup-content" },
            [
              _c("div", { staticClass: "content-title" }, [
                _c("span", [_vm._v("整改完成情况")]),
                _c(
                  "span",
                  {
                    class: [
                      "situation",
                      _vm.baseInfo.changeCompSituation == "是"
                        ? "blue-sit"
                        : "yellow-sit",
                    ],
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.baseInfo.changeCompSituation == "是"
                          ? "整改完成"
                          : "未完成"
                      )
                    ),
                  ]
                ),
              ]),
              _c("div", { staticClass: "sup-detail" }, [
                _c("div", [
                  _vm._v("整改方案或措施："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.changeFunction || "-")),
                  ]),
                ]),
                _c("div", [
                  _vm._v("处理和整改情况："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.changeSituation || "-")),
                  ]),
                ]),
                _c("div", [
                  _vm._v("完成整改时间："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.compDate || "-"))]),
                ]),
              ]),
              _c("van-cell", {
                attrs: { "is-link": "", title: "查看过往整改情况" },
                on: { click: _vm.showHistoryChange },
              }),
            ],
            1
          ),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(3),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("调查程序："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.investProgram || "-")),
                  ]),
                ]),
                _c("span", [
                  _vm._v("责令类型："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.orderType || "-"))]),
                ]),
              ]),
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("处罚种类："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.punishType || "-"))]),
                ]),
                _c("span", [
                  _vm._v("处罚金额："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.punishAmount || "-")),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(4),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("公安查处情况："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.policeSituation || "-")),
                  ]),
                ]),
                _c("span", [
                  _vm._v("拘留人数："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.arrestNum || "-"))]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(5),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("是否进行约谈："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.isTalk || "-"))]),
                ]),
                _c("span", [
                  _vm._v("约谈人数："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.talkNum || "-"))]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(6),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("是否进行责任追究："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.isDuty || "-"))]),
                ]),
                _c("span", [
                  _vm._v("责任追究情况："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.dutySituation || "-")),
                  ]),
                ]),
              ]),
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("问责人数："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.dutyNum || "-"))]),
                ]),
                _c("span", [
                  _vm._v("问责文件、文号 ："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.dutyFile || "-"))]),
                ]),
              ]),
              _c("div", [
                _vm._v("问责时间："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.dutyDate || "-"))]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(7),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("是否公开："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.isPublic || "-"))]),
                ]),
                _c("span", [
                  _vm._v("公开时间："),
                  _c("span", [_vm._v(_vm._s(_vm.baseInfo.publicDate || "-"))]),
                ]),
              ]),
              _c("div", [
                _vm._v("公开方式："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.publicType || "-"))]),
              ]),
              _c("div", [
                _vm._v("公开地址："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.publicUrl || "-"))]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "sup-content" }, [
            _vm._m(8),
            _c("div", { staticClass: "sup-detail" }, [
              _c("div", { staticClass: "sup-bottom" }, [
                _c("span", [
                  _vm._v("自查自验情况："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.selfCheckSituation || "-")),
                  ]),
                ]),
                _c("span", [
                  _vm._v("市级验收情况："),
                  _c("span", [
                    _vm._v(_vm._s(_vm.baseInfo.cityCheckSituation || "-")),
                  ]),
                ]),
              ]),
              _c("div", [
                _vm._v("是否销号："),
                _c("span", [_vm._v(_vm._s(_vm.baseInfo.isCancel || "-"))]),
              ]),
            ]),
          ]),
          _vm._m(9),
          _vm._m(10),
          _vm._m(11),
          _vm._m(12),
        ]
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
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("办理牵头单位")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("重复情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("调查核实情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("调查处理情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("公安查处情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("约谈情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("责任追究情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("信息公开情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", [_vm._v("验收情况")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "supDetailTitle" }, [
      _c("span", [_vm._v("大数据关联分析（试运行）")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "company-info", staticStyle: { margin: "0px 5px 5px" } },
      [
        _c("div", { staticClass: "company_title" }, [
          _c("span", [_vm._v("可能涉及到的污染源企业")]),
        ]),
        _c("div", { staticClass: "base_super" }, [
          _c("span", { staticClass: "span_title" }, [_vm._v("醉烧烧烤店")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "company-info", staticStyle: { margin: "0px 5px 5px" } },
      [
        _c("div", { staticClass: "company_title" }, [
          _c("span", [_vm._v("可能涉及到的相关投诉（12345、12369投诉）")]),
        ]),
        _c("div", { staticClass: "base_super" }, [
          _c("span", { staticClass: "span_title" }, [
            _vm._v(
              "该烧烤店营业时厨房抽油烟机、麻将娱乐产生噪声较大，经监测，烧烤店门口夜间噪..."
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "company-info", staticStyle: { margin: "0px 5px 5px" } },
      [
        _c("div", { staticClass: "company_title" }, [
          _c("span", [_vm._v("可能涉及到的建筑工地")]),
        ]),
        _c("div", { staticClass: "base_super" }, [
          _c("span", { staticClass: "span_title" }, [
            _vm._v("旧房改造项目施工工地"),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".supDetailTitle[data-v-2606206a] {\n  border-radius: 4px;\n  background: #f5f6f6;\n  padding: 10px;\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.supDetailTitle > span[data-v-2606206a] {\n  line-height: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #25396f;\n}\n.supDetailTitle > span[data-v-2606206a]:first-child {\n  font-size: 14px;\n  border-left: 3px solid #3841fc;\n  padding-left: 10px;\n}\n.sup-content[data-v-2606206a] {\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 2px 20px rgba(37, 57, 111, 0.05);\n  margin: 0px 5px 10px;\n}\n.sup-content .content-title[data-v-2606206a] {\n  line-height: 35px;\n  border-bottom: 1px solid rgba(37, 57, 111, 0.05);\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 5px;\n  margin: 0px 10px;\n}\n.sup-content .content-title > span[data-v-2606206a] {\n  line-height: 21px;\n}\n.sup-content .content-title > span[data-v-2606206a]:first-child {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5475f8;\n}\n.sup-content .content-title .content-right[data-v-2606206a] {\n  border-radius: 10px 10px 0px 10px;\n  padding: 1px 8px;\n  font-size: 10px;\n  color: white;\n}\n.sup-content .content-title .blue-bg[data-v-2606206a] {\n  background: linear-gradient(90deg, #6daafd 0%, #4378ee 100%);\n}\n.sup-content .content-title .green-bg[data-v-2606206a] {\n  background: linear-gradient(90deg, #40d6cc 0%, #08cfc1 100%);\n}\n.sup-content .content-title .yellow-bg[data-v-2606206a] {\n  background: linear-gradient(90deg, #fabe82 0%, #ff8d1a 100%);\n}\n.sup-content .content-title .cancel-bg[data-v-2606206a] {\n  background: linear-gradient(90deg, #a3b0d4 0%, #4f649c 100%);\n}\n.sup-content .content-title .situation[data-v-2606206a] {\n  padding: 1px 8px;\n  font-size: 10px;\n  border-radius: 10px;\n}\n.sup-content .content-title .blue-sit[data-v-2606206a] {\n  background: rgba(84, 117, 248, 0.2);\n  color: #5475f8;\n}\n.sup-content .content-title .yellow-sit[data-v-2606206a] {\n  background: rgba(255, 141, 26, 0.2);\n  color: #ff8d1a;\n}\n.sup-content .sup-detail[data-v-2606206a] {\n  margin-top: 10px;\n  padding: 5px 10px;\n}\n.sup-content .sup-detail > div[data-v-2606206a] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n  margin-bottom: 5px;\n}\n.sup-content .sup-detail > div > span[data-v-2606206a] {\n  color: #25396f;\n}\n.sup-content .sup-detail .sup-bottom[data-v-2606206a] {\n  display: flex;\n  /*justify-content: space-between;*/\n}\n.sup-content .sup-detail .sup-bottom > span[data-v-2606206a] {\n  display: inline-block;\n  width: 50%;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.sup-content .sup-detail .sup-bottom > span > span[data-v-2606206a] {\n  color: #25396f;\n  margin-left: 5px;\n}\n.sup-content .sup-detail .addr[data-v-2606206a] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 16px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #5475f8;\n  text-align: left;\n  vertical-align: top;\n}\n.sup-content .sup-detail .addr > img[data-v-2606206a] {\n  margin-left: 6px;\n}\n.sup-content[data-v-2606206a]  .van-cell--clickable {\n  border-radius: 0px 0px 10px 10px;\n  background: #f9fafd;\n  border: 1px solid white;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #5475f8;\n  text-align: left;\n  vertical-align: top;\n  padding: 3px 16px;\n}\n.sup-content[data-v-2606206a]  .van-cell__right-icon {\n  font-size: 10px;\n}\n.base_super[data-v-2606206a] {\n  display: flex;\n  margin: 10px 0px;\n}\n.base_super .span_title[data-v-2606206a] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-left: 20px;\n  max-width: calc(100% - 100px);\n}\n.base_super .span_right[data-v-2606206a] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin-left: auto;\n  margin-right: 10px;\n}\n.base_super > span > img[data-v-2606206a] {\n  vertical-align: middle;\n  margin-right: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5edf3548", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/supervision/addr.png":
/*!*****************************************!*\
  !*** ./src/assets/supervision/addr.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADHSURBVBiVXZDBjcIwEEWfx9sAK46RkkhotSUETukESshWQlqgE3NzCSsUKSDliBAFEHsPzohs/mn+2Jr3ZwyTNlVTCyYPjKVg+0C8db51AAbgq/rZB8aShQTbX/zxZDZVU0OotRmIN/XTV/eREEkXfzxNpdPpgsnljRE3R6WJEBhLEWyfUCb/n0iR4sx31RQvwmGeQbdUb++Df66zXR6Jq9SMxbsW1/nWSULF83J9AL2TAPz69roMPvdWi8fgr5/ZFoiFYvTtD5fcUi8tMsaiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/supervision/provinceDetail/index.vue":
/*!********************************************************!*\
  !*** ./src/views/supervision/provinceDetail/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2606206a&scoped=true& */ "./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& */ "./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2606206a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/supervision/provinceDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=style&index=0&id=2606206a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2606206a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2606206a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/provinceDetail/index.vue?vue&type=template&id=2606206a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2606206a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL3Byb3ZpbmNlRGV0YWlsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3VwZXJ2aXNpb24vcHJvdmluY2VEZXRhaWwvaW5kZXgudnVlPzBmYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL3Byb3ZpbmNlRGV0YWlsL2luZGV4LnZ1ZT80MGNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdXBlcnZpc2lvbi9wcm92aW5jZURldGFpbC9pbmRleC52dWU/MjdkNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Nhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdXBlcnZpc2lvbi9hZGRyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3VwZXJ2aXNpb24vcHJvdmluY2VEZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdXBlcnZpc2lvbi9wcm92aW5jZURldGFpbC9pbmRleC52dWU/MmY2NSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3VwZXJ2aXNpb24vcHJvdmluY2VEZXRhaWwvaW5kZXgudnVlPzNlNGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL3Byb3ZpbmNlRGV0YWlsL2luZGV4LnZ1ZT9hZWY4Il0sIm5hbWVzIjpbInF1ZXJ5U2VsZWN0QnlJZCIsImlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRpc2N1c3NTZWxlY3RCeUNhc2VJZCIsInN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkIiwibGVnYWxTZWxlY3RCeUNhc2VJZCIsInNlbGVjdEJ5Q2FzZUlkIiwicHVuaXNoU2VsZWN0QnlDYXNlSWQiLCJnZXRIZWFyaW5nQnlDYXNlSWQiLCJzdGFnZVNlbGVjdEJ5Q2FzZUlkIiwiZ2V0VXNlckluZm8iLCJkYXRhIiwicGFyYW1zIiwiZ2V0VXNlckxpc3QiLCJxdWVyeVR5cGVDYXNlTGlzdCIsImFkZFJlcG9ydCIsImdldFJlcG9ydERldGFpbCIsInNpZ25SZXBvcnQiLCJ0eXBlIiwiY291bnRJbmZvIiwiZ2V0QWxsUmVwb3J0IiwiY2hlY2tQd2QiLCJxdWVyeURpdmlzaW9uIiwiZ2V0U3VwZXJCYXRjaCIsImdldFN1cGVyTGlzdCIsImluZm8iLCJnZXRTdXBlckxpc3REZXRhaWwiLCJib2FyZCIsImNvdW50eUxpc3QiLCJpbmZvTGlzdCIsImJhc2VJbmZvIiwiZGlzdHJpYnV0ZSIsImhhbmRsZSIsImZpbmFsIiwiY29tcGFueSIsInByb2JsZW0iLCJ0aW1lR3JvdXAiLCJ1bml0IiwicHJvYmxlbUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSUE7QUFDQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGVBRkE7QUFHQSxZQUhBO0FBSUEsaUJBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQkE7QUFrQkE7QUFDQSxnQkFEQSwwQkFDQTtBQUFBOztBQUNBO0FBQ0Esc0ZBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQVRBO0FBVUEscUJBVkEsK0JBVUEsQ0FFQTtBQVpBO0FBbEJBLEc7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUscUJBQXFCLEVBQUU7QUFDM0M7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7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QUFELENBQWQ7QUFLRCxDOzs7Ozs7Ozs7OztBQzdQRCxpQ0FBaUMsb1k7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZlwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgICAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPjwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87b3ZlcmZsb3cteDogaGlkZGVuO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwRGV0YWlsVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuWPl+eQhue8luWPtzwvc3Bhbj48c3Bhbj57e2Jhc2VJbmZvLm5vfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+PHNwYW4+5Z+65pys5L+h5oGvPC9zcGFuPjxzcGFuIDpjbGFzcz1cIlsnY29udGVudC1yaWdodCcsc2l0dWF0aW9uVGV4dC5pbmRleE9mKCflt7LlrozmiJAnKT4tMT8nYmx1ZS1iZyc6c2l0dWF0aW9uVGV4dC5pbmRleE9mKCfmnKrlrozmiJAnKT4tMT8nZ3JlZW4tYmcnOnNpdHVhdGlvblRleHQuaW5kZXhPZign5pW05pS55LitJyk+LTE/J3llbGxvdy1iZyc6J2NhbmNlbC1iZyddXCI+e3tzaXR1YXRpb25UZXh0fX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5Y+X55CG57yW5Y+377yaPHNwYW4+e3tiYXNlSW5mby5ub3x8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7kuL7miqXljLrljr/vvJo8c3Bhbj57e2Jhc2VJbmZvLmNvdW50cnl8fCctJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyXCI+5Li+5oql6K+m57uG5Zyw5Z2A77yae3tiYXNlSW5mby5hZGRyfX08aW1nIHNyYz1cIkAvYXNzZXRzL3N1cGVydmlzaW9uL2FkZHIucG5nXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+5om55qyh77yaPHNwYW4+e3tiYXNlSW5mby5iYXRjaHx8Jy0nfX08L3NwYW4+PC9zcGFuPjxzcGFuPuWPl+eQhuaXtumXtO+8mjxzcGFuPnt7YmFzZUluZm8uYWNjZXB0RGF0ZX19PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuS4vuaKpeS4u+imgeWGheWuue+8mjxzcGFuPnt7YmFzZUluZm8uY29udGVudHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1ib3R0b21cIj48c3Bhbj7lhbPms6jnsbvlnovvvJo8c3Bhbj57e2Jhc2VJbmZvLndhdGNoVHlwZXx8Jy0nfX08L3NwYW4+PC9zcGFuPjxzcGFuIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj7mlbTmlLnnsbvlnovvvJo8c3Bhbj57e2Jhc2VJbmZvLmNoYW5nZVR5cGV9fTwvc3Bhbj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj48c3Bhbj7lip7nkIbnibXlpLTljZXkvY08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5Li75Yqe5Y2V5L2N77yaPHNwYW4+e3tiYXNlSW5mby5sZWFkaW5nVW5pdHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7nnaPlip7nibXlpLTljZXkvY3vvJo8c3Bhbj57e2Jhc2VJbmZvLnN1cGVydmlzaW9uVW5pdHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7nnaPlip7phY3lkIjljZXkvY3vvJo8c3Bhbj57e2Jhc2VJbmZvLnN1cGVydmlzaW9uU3ViVW5pdHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7moYjku7blip7nkIbljZXkvY3vvJo8c3Bhbj57e2Jhc2VJbmZvLmNhc2VTb2x2ZVVuaXR8fCctJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+6LSj5Lu75Lq677yaPHNwYW4+e3tiYXNlSW5mby5wZW9wbGVOYW1lfHwnLSd9fTwvc3Bhbj48L3NwYW4+PHNwYW4+6IGU57O755S16K+d77yaPHNwYW4+e3tiYXNlSW5mby5wZW9wbGVDb250YWN0fHwnLSd9fTwvc3Bhbj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj48c3Bhbj7ph43lpI3mg4XlhrU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+5piv5ZCm6YeN5aSN77yaPHNwYW4+e3tiYXNlSW5mby5yZXBlYXR8fCctJ319PC9zcGFuPjwvc3Bhbj48c3Bhbj7ph43lpI3lubTpmZDvvJo8c3Bhbj57e2Jhc2VJbmZvLnJlcGVhdFllYXJ8fCctJ319PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPjxzcGFuPuiwg+afpeaguOWunuaDheWGtTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7mmK/lkKblsZ7lrp7vvJo8c3Bhbj57e2Jhc2VJbmZvLmlzVHJ1ZXx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7osIPmn6XmoLjlrp7mg4XlhrXvvJo8c3Bhbj57e2Jhc2VJbmZvLmludmVzdFNpdHVhdGlvbnx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj48c3Bhbj7mlbTmlLnlrozmiJDmg4XlhrU8L3NwYW4+PHNwYW4gOmNsYXNzPVwiWydzaXR1YXRpb24nLGJhc2VJbmZvLmNoYW5nZUNvbXBTaXR1YXRpb249PSfmmK8nPydibHVlLXNpdCc6J3llbGxvdy1zaXQnXVwiPnt7YmFzZUluZm8uY2hhbmdlQ29tcFNpdHVhdGlvbj09J+aYryc/J+aVtOaUueWujOaIkCc6J+acquWujOaIkCd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7mlbTmlLnmlrnmoYjmiJbmjqrmlr3vvJo8c3Bhbj57e2Jhc2VJbmZvLmNoYW5nZUZ1bmN0aW9ufHwnLSd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWkhOeQhuWSjOaVtOaUueaDheWGte+8mjxzcGFuPnt7YmFzZUluZm8uY2hhbmdlU2l0dWF0aW9ufHwnLSd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWujOaIkOaVtOaUueaXtumXtO+8mjxzcGFuPnt7YmFzZUluZm8uY29tcERhdGV8fCctJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dmFuLWNlbGwgaXMtbGluayB0aXRsZT1cIuafpeeci+i/h+W+gOaVtOaUueaDheWGtVwiIEBjbGljaz1cInNob3dIaXN0b3J5Q2hhbmdlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPjxzcGFuPuiwg+afpeWkhOeQhuaDheWGtTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1ib3R0b21cIj48c3Bhbj7osIPmn6XnqIvluo/vvJo8c3Bhbj57e2Jhc2VJbmZvLmludmVzdFByb2dyYW18fCctJ319PC9zcGFuPjwvc3Bhbj48c3Bhbj7otKPku6TnsbvlnovvvJo8c3Bhbj57e2Jhc2VJbmZvLm9yZGVyVHlwZXx8Jy0nfX08L3NwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+5aSE572a56eN57G777yaPHNwYW4+e3tiYXNlSW5mby5wdW5pc2hUeXBlfHwnLSd9fTwvc3Bhbj48L3NwYW4+PHNwYW4+5aSE572a6YeR6aKd77yaPHNwYW4+e3tiYXNlSW5mby5wdW5pc2hBbW91bnR8fCctJ319PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPjxzcGFuPuWFrOWuieafpeWkhOaDheWGtTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1ib3R0b21cIj48c3Bhbj7lhazlronmn6XlpITmg4XlhrXvvJo8c3Bhbj57e2Jhc2VJbmZvLnBvbGljZVNpdHVhdGlvbnx8Jy0nfX08L3NwYW4+PC9zcGFuPjxzcGFuPuaLmOeVmeS6uuaVsO+8mjxzcGFuPnt7YmFzZUluZm8uYXJyZXN0TnVtfHwnLSd9fTwvc3Bhbj48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj48c3Bhbj7nuqbosIjmg4XlhrU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+5piv5ZCm6L+b6KGM57qm6LCI77yaPHNwYW4+e3tiYXNlSW5mby5pc1RhbGt8fCctJ319PC9zcGFuPjwvc3Bhbj48c3Bhbj7nuqbosIjkurrmlbDvvJo8c3Bhbj57e2Jhc2VJbmZvLnRhbGtOdW18fCctJ319PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPjxzcGFuPui0o+S7u+i/veeptuaDheWGtTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1ib3R0b21cIj48c3Bhbj7mmK/lkKbov5vooYzotKPku7vov73nqbbvvJo8c3Bhbj57e2Jhc2VJbmZvLmlzRHV0eXx8Jy0nfX08L3NwYW4+PC9zcGFuPjxzcGFuPui0o+S7u+i/veeptuaDheWGte+8mjxzcGFuPnt7YmFzZUluZm8uZHV0eVNpdHVhdGlvbnx8Jy0nfX08L3NwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+6Zeu6LSj5Lq65pWw77yaPHNwYW4+e3tiYXNlSW5mby5kdXR5TnVtfHwnLSd9fTwvc3Bhbj48L3NwYW4+PHNwYW4+6Zeu6LSj5paH5Lu244CB5paH5Y+3IO+8mjxzcGFuPnt7YmFzZUluZm8uZHV0eUZpbGV8fCctJ319PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PumXrui0o+aXtumXtO+8mjxzcGFuPnt7YmFzZUluZm8uZHV0eURhdGV8fCctJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+PHNwYW4+5L+h5oGv5YWs5byA5oOF5Ya1PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWJvdHRvbVwiPjxzcGFuPuaYr+WQpuWFrOW8gO+8mjxzcGFuPnt7YmFzZUluZm8uaXNQdWJsaWN8fCctJ319PC9zcGFuPjwvc3Bhbj48c3Bhbj7lhazlvIDml7bpl7TvvJo8c3Bhbj57e2Jhc2VJbmZvLnB1YmxpY0RhdGV8fCctJ319PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWFrOW8gOaWueW8j++8mjxzcGFuPnt7YmFzZUluZm8ucHVibGljVHlwZXx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lhazlvIDlnLDlnYDvvJo8c3Bhbj57e2Jhc2VJbmZvLnB1YmxpY1VybHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj48c3Bhbj7pqozmlLbmg4XlhrU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtYm90dG9tXCI+PHNwYW4+6Ieq5p+l6Ieq6aqM5oOF5Ya177yaPHNwYW4+e3tiYXNlSW5mby5zZWxmQ2hlY2tTaXR1YXRpb258fCctJ319PC9zcGFuPjwvc3Bhbj48c3Bhbj7luILnuqfpqozmlLbmg4XlhrXvvJo8c3Bhbj57e2Jhc2VJbmZvLmNpdHlDaGVja1NpdHVhdGlvbnx8Jy0nfX08L3NwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5piv5ZCm6ZSA5Y+377yaPHNwYW4+e3tiYXNlSW5mby5pc0NhbmNlbHx8Jy0nfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXBEZXRhaWxUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+5aSn5pWw5o2u5YWz6IGU5YiG5p6Q77yI6K+V6L+Q6KGM77yJPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiAwcHggNXB4IDVweFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7lj6/og73mtonlj4rliLDnmoTmsaHmn5PmupDkvIHkuJo8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFzZV9zdXBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbl90aXRsZVwiPumGieeDp+eDp+eDpOW6lzwvc3Bhbj5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuX3JpZ2h0XCI+5p+l55yLPC9zcGFuPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIi8+PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46IDBweCA1cHggNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuWPr+iDvea2ieWPiuWIsOeahOebuOWFs+aKleivie+8iDEyMzQ144CBMTIzNjnmipXor4nvvIk8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFzZV9zdXBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbl90aXRsZVwiPuivpeeDp+eDpOW6l+iQpeS4muaXtuWOqOaIv+aKveayueeDn+acuuOAgem6u+WwhuWoseS5kOS6p+eUn+WZquWjsOi+g+Wkp++8jOe7j+ebkea1i++8jOeDp+eDpOW6l+mXqOWPo+WknOmXtOWZqi4uLjwvc3Bhbj5cclxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuX3JpZ2h0XCI+5p+l55yLPC9zcGFuPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3JpZ2h0SWNvbi5wbmdcIi8+PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46IDBweCA1cHggNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuWPr+iDvea2ieWPiuWIsOeahOW7uuetkeW3peWcsDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX3N1cGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuX3RpdGxlXCI+5pen5oi/5pS56YCg6aG555uu5pa95bel5bel5ZywPC9zcGFuPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fcmlnaHRcIj7mn6XnnIs8L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiLz48L3NwYW4+LS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBnZXRTdXBlckxpc3REZXRhaWx9IGZyb20gXCJAL2FwaS9jYXNlXCJcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGJhc2VJbmZvIDoge30sXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgaWQgOiAnJyxcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4IDogMCxcclxuICAgICAgICAgICAgICAgIHNpdHVhdGlvblRleHQgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkudGFiSW5kZXg9PTA/J+S4reWkrueOr+S/needo+Wvn+ivpuaDhSc6dGhpcy4kcm91dGUucXVlcnkudGFiSW5kZXg9PTE/J+ecgee6p+eOr+S/needo+Wvn+ivpuaDhSc6J+W4gue6p+eOr+S/needo+Wvn+ivpuaDhSc7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuICAgICAgICAgICAgdGhpcy5zaXR1YXRpb25UZXh0ID0gdGhpcy4kcm91dGUucXVlcnkuc2l0dWF0aW9uVGV4dDtcclxuICAgICAgICAgICAgdGhpcy50YWJJbmRleCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnRhYkluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYXNlSW5mbygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBpbml0QmFzZUluZm8oKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0aGlzLnRhYkluZGV4PT0wPydjZW50ZXInOnRoaXMudGFiSW5kZXg9PTE/J3Byb3ZpbmNlJzonY2l0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiB0aGlzLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnZXRTdXBlckxpc3REZXRhaWwoaW5mbykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZUluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93SGlzdG9yeUNoYW5nZSgpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuc3VwRGV0YWlsVGl0bGV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI0NiwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAgcmdiYSg1NiwgNjUsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VwLWNvbnRlbnR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAgcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4IDEwcHg7XHJcbiAgICAgICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmx1ZS1iZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDksIDE3MCwgMjUzLCAxKSAwJSwgcmdiYSg2NywgMTIwLCAyMzgsIDEpIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmVlbi1iZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2NCwgMjE0LCAyMDQsIDEpIDAlLCByZ2JhKDgsIDIwNywgMTkzLCAxKSAxMDAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAueWVsbG93LWJne1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1MCwgMTkwLCAxMzAsIDEpIDAlLCByZ2JhKDI1NSwgMTQxLCAyNiwgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhbmNlbC1iZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNjMsIDE3NiwgMjEyLCAxKSAwJSwgcmdiYSg3OSwgMTAwLCAxNTYsIDEpIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaXR1YXRpb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmx1ZS1zaXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCAxMTcsIDI0OCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmdiYSg4NCwgMTE3LCAyNDgsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnllbGxvdy1zaXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmdiYSgyNTUsIDE0MSwgMjYsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1cC1kZXRhaWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdXAtYm90dG9te1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICAgICAgICAgICAgICA+c3BhbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICA+aW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1jZWxsLS1jbGlja2FibGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjUwLCAyNTMsIDEpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNlbGxfX3JpZ2h0LWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFzZV9zdXBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgLnNwYW5fdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYW5fcmlnaHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgID5pbWd7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnRpdGxlLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsXG4gICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICBcIm92ZXJmbG93LXhcIjogXCJoaWRkZW5cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXBEZXRhaWxUaXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y+X55CG57yW5Y+3XCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLm5vKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWfuuacrOS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNpdHVhdGlvblRleHQuaW5kZXhPZihcIuW3suWujOaIkFwiKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWUtYmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnNpdHVhdGlvblRleHQuaW5kZXhPZihcIuacquWujOaIkFwiKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5zaXR1YXRpb25UZXh0LmluZGV4T2YoXCLmlbTmlLnkuK1cIikgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ5ZWxsb3ctYmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJjYW5jZWwtYmdcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2l0dWF0aW9uVGV4dCkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1kZXRhaWxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlj5fnkIbnvJblj7fvvJpcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5ubyB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5Li+5oql5Yy65Y6/77yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uY291bnRyeSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFkZHJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5Li+5oql6K+m57uG5Zyw5Z2A77yaXCIgKyBfdm0uX3MoX3ZtLmJhc2VJbmZvLmFkZHIpKSxcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9hZGRyLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmibnmrKHvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmJhdGNoIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Y+X55CG5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5hY2NlcHREYXRlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuL7miqXkuLvopoHlhoXlrrnvvJpcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5jb250ZW50IHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YWz5rOo57G75Z6L77yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby53YXRjaFR5cGUgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pW05pS557G75Z6L77yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5jaGFuZ2VUeXBlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5Li75Yqe5Y2V5L2N77yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ubGVhZGluZ1VuaXQgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuedo+WKnueJteWktOWNleS9je+8mlwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uc3VwZXJ2aXNpb25Vbml0IHx8IFwiLVwiKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi552j5Yqe6YWN5ZCI5Y2V5L2N77yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5zdXBlcnZpc2lvblN1YlVuaXQgfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLmoYjku7blip7nkIbljZXkvY3vvJpcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5jYXNlU29sdmVVbml0IHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6LSj5Lu75Lq677yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5wZW9wbGVOYW1lIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6IGU57O755S16K+d77yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucGVvcGxlQ29udGFjdCB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmK/lkKbph43lpI3vvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnJlcGVhdCB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIumHjeWkjeW5tOmZkO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucmVwZWF0WWVhciB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuaYr+WQpuWxnuWunu+8mlwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmlzVHJ1ZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi6LCD5p+l5qC45a6e5oOF5Ya177yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5pbnZlc3RTaXR1YXRpb24gfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN1cC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pW05pS55a6M5oiQ5oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcInNpdHVhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5iYXNlSW5mby5jaGFuZ2VDb21wU2l0dWF0aW9uID09IFwi5pivXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlLXNpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwieWVsbG93LXNpdFwiLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iYXNlSW5mby5jaGFuZ2VDb21wU2l0dWF0aW9uID09IFwi5pivXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIuaVtOaUueWujOaIkFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLmnKrlrozmiJBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaVtOaUueaWueahiOaIluaOquaWve+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmNoYW5nZUZ1bmN0aW9uIHx8IFwiLVwiKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlpITnkIblkozmlbTmlLnmg4XlhrXvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5jaGFuZ2VTaXR1YXRpb24gfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWujOaIkOaVtOaUueaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uY29tcERhdGUgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpcy1saW5rXCI6IFwiXCIsIHRpdGxlOiBcIuafpeeci+i/h+W+gOaVtOaUueaDheWGtVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93SGlzdG9yeUNoYW5nZSB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiwg+afpeeoi+W6j++8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmludmVzdFByb2dyYW0gfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLotKPku6TnsbvlnovvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLm9yZGVyVHlwZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWkhOe9muenjeexu++8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucHVuaXNoVHlwZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWkhOe9mumHkemine+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnB1bmlzaEFtb3VudCB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlhazlronmn6XlpITmg4XlhrXvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5wb2xpY2VTaXR1YXRpb24gfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmi5jnlZnkurrmlbDvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmFycmVzdE51bSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmK/lkKbov5vooYznuqbosIjvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmlzVGFsayB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIue6puiwiOS6uuaVsO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8udGFsa051bSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmK/lkKbov5vooYzotKPku7vov73nqbbvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmlzRHV0eSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIui0o+S7u+i/veeptuaDheWGte+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmR1dHlTaXR1YXRpb24gfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpl67otKPkurrmlbDvvJpcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmR1dHlOdW0gfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpl67otKPmlofku7bjgIHmloflj7cg77yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5kdXR5RmlsZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi6Zeu6LSj5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uZHV0eURhdGUgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oNyksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1kZXRhaWxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5piv5ZCm5YWs5byA77yaXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5pc1B1YmxpYyB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWFrOW8gOaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucHVibGljRGF0ZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5YWs5byA5pa55byP77yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucHVibGljVHlwZSB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5YWs5byA5Zyw5Z2A77yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8ucHVibGljVXJsIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDgpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiHquafpeiHqumqjOaDheWGte+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnNlbGZDaGVja1NpdHVhdGlvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW4gue6p+mqjOaUtuaDheWGte+8mlwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLmNpdHlDaGVja1NpdHVhdGlvbiB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5piv5ZCm6ZSA5Y+377yaXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uaXNDYW5jZWwgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fbSg5KSxcbiAgICAgICAgICBfdm0uX20oMTApLFxuICAgICAgICAgIF92bS5fbSgxMSksXG4gICAgICAgICAgX3ZtLl9tKDEyKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Yqe55CG54m15aS05Y2V5L2NXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6YeN5aSN5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LCD5p+l5qC45a6e5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LCD5p+l5aSE55CG5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YWs5a6J5p+l5aSE5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi57qm6LCI5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LSj5Lu76L+956m25oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5L+h5oGv5YWs5byA5oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6aqM5pS25oOF5Ya1XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwRGV0YWlsVGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkp+aVsOaNruWFs+iBlOWIhuaekO+8iOivlei/kOihjO+8iVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLCBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4IDVweCA1cHhcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWPr+iDvea2ieWPiuWIsOeahOaxoeafk+a6kOS8geS4mlwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiYXNlX3N1cGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYW5fdGl0bGVcIiB9LCBbX3ZtLl92KFwi6YaJ54On54On54Ok5bqXXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggNXB4IDVweFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y+v6IO95raJ5Y+K5Yiw55qE55u45YWz5oqV6K+J77yIMTIzNDXjgIExMjM2OeaKleivie+8iVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiYXNlX3N1cGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi6K+l54On54Ok5bqX6JCl5Lia5pe25Y6o5oi/5oq95rK554Of5py644CB6bq75bCG5aix5LmQ5Lqn55Sf5Zmq5aOw6L6D5aSn77yM57uP55uR5rWL77yM54On54Ok5bqX6Zeo5Y+j5aSc6Ze05ZmqLi4uXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggNXB4IDVweFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y+v6IO95raJ5Y+K5Yiw55qE5bu6562R5bel5ZywXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJhc2Vfc3VwZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Bhbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuaXp+aIv+aUuemAoOmhueebruaWveW3peW3peWcsFwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN1cERldGFpbFRpdGxlW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3VwRGV0YWlsVGl0bGUgPiBzcGFuW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5zdXBEZXRhaWxUaXRsZSA+IHNwYW5bZGF0YS12LTI2MDYyMDZhXTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMzODQxZmM7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5zdXAtY29udGVudFtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcXG4gIG1hcmdpbjogMHB4IDVweCAxMHB4O1xcbn1cXG4uc3VwLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGVbZGF0YS12LTI2MDYyMDZhXSB7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA4cHggNXB4O1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG59XFxuLnN1cC1jb250ZW50IC5jb250ZW50LXRpdGxlID4gc3BhbltkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbn1cXG4uc3VwLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUgPiBzcGFuW2RhdGEtdi0yNjA2MjA2YV06Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbn1cXG4uc3VwLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUgLmNvbnRlbnQtcmlnaHRbZGF0YS12LTI2MDYyMDZhXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxcHggOHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc3VwLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUgLmJsdWUtYmdbZGF0YS12LTI2MDYyMDZhXSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZGFhZmQgMCUsICM0Mzc4ZWUgMTAwJSk7XFxufVxcbi5zdXAtY29udGVudCAuY29udGVudC10aXRsZSAuZ3JlZW4tYmdbZGF0YS12LTI2MDYyMDZhXSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MGQ2Y2MgMCUsICMwOGNmYzEgMTAwJSk7XFxufVxcbi5zdXAtY29udGVudCAuY29udGVudC10aXRsZSAueWVsbG93LWJnW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmFiZTgyIDAlLCAjZmY4ZDFhIDEwMCUpO1xcbn1cXG4uc3VwLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUgLmNhbmNlbC1iZ1tkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2EzYjBkNCAwJSwgIzRmNjQ5YyAxMDAlKTtcXG59XFxuLnN1cC1jb250ZW50IC5jb250ZW50LXRpdGxlIC5zaXR1YXRpb25bZGF0YS12LTI2MDYyMDZhXSB7XFxuICBwYWRkaW5nOiAxcHggOHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnN1cC1jb250ZW50IC5jb250ZW50LXRpdGxlIC5ibHVlLXNpdFtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDExNywgMjQ4LCAwLjIpO1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxufVxcbi5zdXAtY29udGVudCAuY29udGVudC10aXRsZSAueWVsbG93LXNpdFtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjIpO1xcbiAgY29sb3I6ICNmZjhkMWE7XFxufVxcbi5zdXAtY29udGVudCAuc3VwLWRldGFpbFtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuLnN1cC1jb250ZW50IC5zdXAtZGV0YWlsID4gZGl2W2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uc3VwLWNvbnRlbnQgLnN1cC1kZXRhaWwgPiBkaXYgPiBzcGFuW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5zdXAtY29udGVudCAuc3VwLWRldGFpbCAuc3VwLWJvdHRvbVtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xcbn1cXG4uc3VwLWNvbnRlbnQgLnN1cC1kZXRhaWwgLnN1cC1ib3R0b20gPiBzcGFuW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLnN1cC1jb250ZW50IC5zdXAtZGV0YWlsIC5zdXAtYm90dG9tID4gc3BhbiA+IHNwYW5bZGF0YS12LTI2MDYyMDZhXSB7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5zdXAtY29udGVudCAuc3VwLWRldGFpbCAuYWRkcltkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uc3VwLWNvbnRlbnQgLnN1cC1kZXRhaWwgLmFkZHIgPiBpbWdbZGF0YS12LTI2MDYyMDZhXSB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG4uc3VwLWNvbnRlbnRbZGF0YS12LTI2MDYyMDZhXSAgLnZhbi1jZWxsLS1jbGlja2FibGUge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjlmYWZkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBwYWRkaW5nOiAzcHggMTZweDtcXG59XFxuLnN1cC1jb250ZW50W2RhdGEtdi0yNjA2MjA2YV0gIC52YW4tY2VsbF9fcmlnaHQtaWNvbiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi5iYXNlX3N1cGVyW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbi5iYXNlX3N1cGVyIC5zcGFuX3RpdGxlW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbn1cXG4uYmFzZV9zdXBlciAuc3Bhbl9yaWdodFtkYXRhLXYtMjYwNjIwNmFdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmJhc2Vfc3VwZXIgPiBzcGFuID4gaW1nW2RhdGEtdi0yNjA2MjA2YV0ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjA2MjA2YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVlZGYzNTQ4XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjYwNjIwNmEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjA2MjA2YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmoYjku7bor6bmg4VcclxuICogKi9cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U2VsZWN0QnlJZCA9KGlkKT0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Nhc2Uvc2VsZWN0QnlJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59XHJcbi8vIOmbhuS9k+iuqOiuuuivpuaDhVxyXG5leHBvcnQgY29uc3QgZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Rpc2N1c3Mvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3VwZXJ2aXNlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3QgbGVnYWxTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9sZWdhbC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9pbmZvcm0vc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgcHVuaXNoU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvcHVuaXNoL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0SGVhcmluZ0J5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2hlYXJpbmcvZ2V0SGVhcmluZ0J5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN0YWdlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3RhZ2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcblxyXG4vL+agueaNrnRva2Vu6I635Y+W5LyB5Lia5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2dldEluZm9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bnlKjmiLdcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXJcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mn6XnnIvlrqHmibnlrZDpobnliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5VHlwZUNhc2VMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3F1ZXJ5QXBwTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aWsOW7uuWuoeaJueihqFxyXG5leHBvcnQgY29uc3QgYWRkUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2luc1wiLFxyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bljZXkuKrlrqHmibnooajkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+etvuWQjeWuoeaJuVxyXG5leHBvcnQgY29uc3Qgc2lnblJlcG9ydCA9IChkYXRhLHR5cGUpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3NpZ24/dHlwZT1cIit0eXBlLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v57uf6K6hXHJcbmV4cG9ydCBjb25zdCBjb3VudEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZ2V0U3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+ivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+agoemqjOWvhueggVxyXG5leHBvcnQgY29uc3QgY2hlY2tQd2QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9jaGVja1B3ZFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aUr+mYny/liIblsYDkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGl2aXNpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9kaXZcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyQmF0Y2ggPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYmF0Y2hMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0ID0gKGluZm8sZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHBhcmFtczogaW5mbyxcclxuICAgIGRhdGEgOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm9hcmQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnR5TGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkL2dldENvdW50eVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlSW5mbyhwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZ2V0QnlJZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0cmlidXRlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9kaXN0cmlidXRlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9oYW5kbGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZmluYWwvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYW55KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9xeUJ5SW5mb0lkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW0oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lR3JvdXAoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3RpbWVHcm91cFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5pdCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvZ2V0VW5pdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3BhZ2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFMQ0FZQUFBQ3RXYWNiQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREhTVVJCVkJpVlhaREJqY0l3RUVXZng5c0FLNDZSa2tob3RTVUVUdWtFU3NoV1FscWdFM056Q1NzVUtTRGxpQkFGRUhzUHpvaHMvbW4rMkpyM1p3eVRObFZUQ3lZUGpLVmcrMEM4ZGI1MUFBYmdxL3JaQjhhU2hRVGJYL3p4WkRaVlUwT290Um1JTi9YVFYvZVJFRWtYZnp4TnBkUHBnc25salJFM1I2V0pFQmhMRVd5ZlVDYi9uMGlSNHN4MzFSUXZ3bUdlUWJkVWIrK0RmNjZ6WFI2SnE5U014YnNXMS9uV1NVTEY4M0o5QUwyVEFQejY5cm9NUHZkV2k4ZmdyNS9aRm9pRll2VHRENWZjVWk4dE1zYWlBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjA2MjA2YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjA2MjA2YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI2MDYyMDZhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2MDYyMDZhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2MDYyMDZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2MDYyMDZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjYwNjIwNmEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjYwNjIwNmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9zdXBlcnZpc2lvbi9wcm92aW5jZURldGFpbC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjA2MjA2YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjA2MjA2YSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=