(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "buildFilingsDetail",
  components: {},
  data: function data() {
    return {
      id: "",
      showMore: true,
      showMore2: true,
      xminfo: {},
      qyxx: {},
      wrzlInfo: [],
      detailInfo: {},
      data: [{
        name: "良",
        list: [{
          yz: 'PM2.5',
          ts: '19',
          zb: 22
        }, {
          yz: 'PM10',
          ts: '9',
          zb: 2
        }]
      }, {
        name: "轻度污染",
        list: [{
          yz: 'PM2.5',
          ts: '19',
          zb: 22
        }, {
          yz: 'PM10',
          ts: '9',
          zb: 2
        }]
      }]
    };
  },
  mounted: function mounted() {
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods: {
    toMap: function toMap(row, type) {
      var info = {
        id: this.id,
        siteName: row.constructionCompanyName,
        JD: row.jd,
        WD: row.wd,
        creditCode: row.hpdwtyshxydm,
        legalMan: row.hpdwfddbr,
        legalManTel: row.hpdwlxdh,
        category: row.hymc,
        address: row.hpdwdz,
        // types:'hpdw'
        types: 'plan'
      };

      if (row.jd) {
        this.$router.push({
          name: "locationMap",
          query: info
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('未获取到定位');
      }
    },
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    getMore2: function getMore2() {
      this.showMore2 = !this.showMore2;
    },
    loadData: function loadData() {
      var _this = this;

      var info = {
        id: this.$route.query.id,
        type: this.$route.query.type
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["constructDetail"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data;
          _this.qyxx = rdata.qyxx;
          _this.xminfo = rdata.xmxx;
          _this.wrzlInfo = rdata.zlcs;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "buildFilingsDetail", staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "备案项目", "left-arrow": "" },
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
              staticClass: "company-info",
              staticStyle: { background: "#fff" },
            },
            [
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "build_info" }, [
                    _c("div", [
                      _c("span", { staticClass: "build_label build_green" }, [
                        _vm._v("备案"),
                      ]),
                      _c("span", { staticStyle: { "font-weight": "600" } }, [
                        _vm._v(_vm._s(_vm.xminfo.projectName)),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: "main_footer",
                  on: {
                    click: function ($event) {
                      return _vm.toMap(_vm.xminfo, "js")
                    },
                  },
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                    },
                  }),
                  _c("span", [_vm._v(_vm._s(_vm.xminfo.buildAddress))]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("公示时间")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.announcementDate
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.announcementDate))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("拟开工日期")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.plannedStartDate
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.plannedStartDate))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("计划竣工日期")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.plannedCompletionDate
                            ? _vm
                                .dayjs(
                                  new Date(_vm.xminfo.plannedCompletionDate)
                                )
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("项目投资")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.projectInvestment) + "万元"),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("环保投资")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.xminfo.envProtectionInvestment) + "万元"
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              class: _vm.showMore ? "moreheight" : "",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("登记备案项目信息")]),
                _c(
                  "span",
                  {
                    staticClass: "title_tips green_tips",
                    staticStyle: { "margin-left": "auto" },
                  },
                  [_vm._v(_vm._s(_vm.xminfo.constructionPropertyName))]
                ),
              ]),
              _c("div", { staticClass: "rad_title" }, [
                _c("span", { staticClass: "active" }, [_vm._v("建设单位信息")]),
                _c("span", { staticClass: "right_span" }, [
                  _vm._v(
                    "申请日期 ：" +
                      _vm._s(
                        _vm.xminfo.applicationDate
                          ? _vm
                              .dayjs(new Date(_vm.xminfo.applicationDate))
                              .format("YYYY-MM-DD")
                          : ""
                      )
                  ),
                ]),
              ]),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("建设单位")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.constructionCompanyName)),
                    ]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("备案号")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.recordNumber))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("法定代表人")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.legalRepresentative)),
                    ]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("备案号流水号")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.recordNumberSerial))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系人")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.linkmanName))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.contactNumber))]),
                  ]),
                ]
              ),
              _vm._m(0),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("项目名称")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.projectName))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("占地面积")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.areaCovered))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环境影响评价分类2级")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.environmentalType2))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环境影响评价分类3级")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.environmentalType3))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("废水措施及排放去向")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.wastewaterContent))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("废气措施及排放去向")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.exhaustGasesContent)),
                    ]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("固废措施及排放去向")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.solidWasteContent))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("噪声措施及排放去向")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.noiseContent))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("生态影响措施及排放去向")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.ecologicalEffectsContent)),
                    ]),
                  ]),
                  _vm._m(1),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("废水")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.wastewaterType))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("废气")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.exhaustGasesType))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("噪声")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.noiseType))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("固废")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.solidWasteType))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("建设内容及规模")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.xminfo.constructionContentScale)),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
              on: {
                click: function ($event) {
                  return _vm.getMore()
                },
              },
            },
            [
              _c("span", { staticClass: "more" }, [
                _vm._v(_vm._s(_vm.showMore ? "查看更多" : "收起")),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              class: _vm.showMore2 ? "moreheight2" : "",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _vm._m(2),
              _vm._l(_vm.wrzlInfo, function (item) {
                return _c(
                  "div",
                  {
                    staticClass: "main_content mshadow",
                    staticStyle: { "padding-top": "10px" },
                  },
                  [
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("污染类型")]),
                      _c("span", [_vm._v(_vm._s(item.polluteType))]),
                    ]),
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("有无环保措施标示")]),
                      _c("span", [_vm._v(_vm._s(item.sfsc))]),
                    ]),
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("有环保措施1")]),
                      _c("span", [_vm._v(_vm._s(item.ycontent1))]),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
              on: {
                click: function ($event) {
                  return _vm.getMore2()
                },
              },
            },
            [
              _c("span", { staticClass: "more" }, [
                _vm._v(_vm._s(_vm.showMore2 ? "查看更多" : "收起")),
              ]),
            ]
          ),
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
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("项目信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "whole_width" }, [
      _c("span", [_vm._v("生态影响")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("登记表备案项目主要影响污染治理措施")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".buildFilingsDetail .mshadow + .mshadow {\n  margin-top: 8px;\n}\n.buildFilingsDetail .mshadow {\n  border-radius: 10px;\n  background: linear-gradient(0deg, rgba(68, 123, 252, 0) 70%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.buildFilingsDetail .moreheight {\n  max-height: 284px;\n  overflow: hidden;\n}\n.buildFilingsDetail .moreheight2 {\n  max-height: 184px;\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("05a067af", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/detail/buildFilingsDetail.vue":
/*!***********************************************************!*\
  !*** ./src/views/pollution/detail/buildFilingsDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildFilingsDetail.vue?vue&type=template&id=f194c4a8& */ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8&");
/* harmony import */ var _buildFilingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildFilingsDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _buildFilingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/buildFilingsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildFilingsDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildFilingsDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8&":
/*!******************************************************************************************!*\
  !*** ./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildFilingsDetail.vue?vue&type=template&id=f194c4a8& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildFilingsDetail.vue?vue&type=template&id=f194c4a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildFilingsDetail_vue_vue_type_template_id_f194c4a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZEZpbGluZ3NEZXRhaWwudnVlP2EwYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZT83ZjE5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/ZDc2MyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZEZpbGluZ3NEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/MTM0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZEZpbGluZ3NEZXRhaWwudnVlPzJkZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZT8zZTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxnQkFGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLFlBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUEsZ0JBSkE7QUFLQSxjQUxBO0FBTUEsa0JBTkE7QUFPQSxvQkFQQTtBQVFBO0FBQ0EsaUJBREE7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YXNzPVwiYnVpbGRGaWxpbmdzRGV0YWlsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmXCI+XHJcblx0XHQ8dmFuLW5hdi1iYXIgdGl0bGU9XCLlpIfmoYjpobnnm65cIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuXHRcdDwvdmFuLW5hdi1iYXI+XHJcblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXZoKTtvdmVyZmxvdy15OiBhdXRvO1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1aWxkX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0PGRpdj48c3BhbiBjbGFzcz1cImJ1aWxkX2xhYmVsIGJ1aWxkX2dyZWVuXCI+5aSH5qGIPC9zcGFuPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6NjAwXCI+e3t4bWluZm8ucHJvamVjdE5hbWV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9mb290ZXJcIiBAY2xpY2s9XCJ0b01hcCh4bWluZm8sJ2pzJylcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiIC8+XHJcblx0XHRcdFx0XHQ8c3Bhbj57e3htaW5mby5idWlsZEFkZHJlc3N9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5YWs56S65pe26Ze0PC9zcGFuPjxzcGFuPnt7eG1pbmZvLmFubm91bmNlbWVudERhdGU/ZGF5anMobmV3IERhdGUoeG1pbmZvLmFubm91bmNlbWVudERhdGUpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTonJ319PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5ouf5byA5bel5pel5pyfPC9zcGFuPjxzcGFuPnt7eG1pbmZvLnBsYW5uZWRTdGFydERhdGU/ZGF5anMobmV3IERhdGUoeG1pbmZvLnBsYW5uZWRTdGFydERhdGUpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTonJ319PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+6K6h5YiS56uj5bel5pel5pyfPC9zcGFuPjxzcGFuPnt7eG1pbmZvLnBsYW5uZWRDb21wbGV0aW9uRGF0ZT9kYXlqcyhuZXcgRGF0ZSh4bWluZm8ucGxhbm5lZENvbXBsZXRpb25EYXRlKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk6Jyd9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPumhueebruaKlei1hDwvc3Bhbj48c3Bhbj57e3htaW5mby5wcm9qZWN0SW52ZXN0bWVudH195LiH5YWDPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+546v5L+d5oqV6LWEPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmVudlByb3RlY3Rpb25JbnZlc3RtZW50fX3kuIflhYM8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjZweCAxMHB4IDBweDtcIiA6Y2xhc3M9XCJzaG93TW9yZT8nbW9yZWhlaWdodCc6JydcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPueZu+iusOWkh+ahiOmhueebruS/oeaBrzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgZ3JlZW5fdGlwc1wiXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG9cIj57e3htaW5mby5jb25zdHJ1Y3Rpb25Qcm9wZXJ0eU5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPuW7uuiuvuWNleS9jeS/oeaBrzwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicmlnaHRfc3BhblwiPueUs+ivt+aXpeacnyDvvJp7e3htaW5mby5hcHBsaWNhdGlvbkRhdGU/ZGF5anMobmV3IERhdGUoeG1pbmZvLmFwcGxpY2F0aW9uRGF0ZSkpLmZvcm1hdCgnWVlZWS1NTS1ERCcpOicnfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lu7rorr7ljZXkvY08L3NwYW4+PHNwYW4+e3t4bWluZm8uY29uc3RydWN0aW9uQ29tcGFueU5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuWkh+ahiOWPtzwvc3Bhbj48c3Bhbj57e3htaW5mby5yZWNvcmROdW1iZXJ9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5rOV5a6a5Luj6KGo5Lq6PC9zcGFuPjxzcGFuPnt7eG1pbmZvLmxlZ2FsUmVwcmVzZW50YXRpdmV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5aSH5qGI5Y+35rWB5rC05Y+3PC9zcGFuPjxzcGFuPnt7eG1pbmZvLnJlY29yZE51bWJlclNlcmlhbH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vkuro8L3NwYW4+PHNwYW4+e3t4bWluZm8ubGlua21hbk5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6IGU57O755S16K+dPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmNvbnRhY3ROdW1iZXJ9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPumhueebruS/oeaBrzwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTBweDtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPumhueebruWQjeensDwvc3Bhbj48c3Bhbj57e3htaW5mby5wcm9qZWN0TmFtZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5Y2g5Zyw6Z2i56evPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmFyZWFDb3ZlcmVkfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7njq/looPlvbHlk43or4Tku7fliIbnsbsy57qnPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmVudmlyb25tZW50YWxUeXBlMn19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+546v5aKD5b2x5ZON6K+E5Lu35YiG57G7M+e6pzwvc3Bhbj48c3Bhbj57e3htaW5mby5lbnZpcm9ubWVudGFsVHlwZTN9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuW6n+awtOaOquaWveWPiuaOkuaUvuWOu+WQkTwvc3Bhbj48c3Bhbj57e3htaW5mby53YXN0ZXdhdGVyQ29udGVudH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5bqf5rCU5o6q5pa95Y+K5o6S5pS+5Y675ZCRPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmV4aGF1c3RHYXNlc0NvbnRlbnR9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuWbuuW6n+aOquaWveWPiuaOkuaUvuWOu+WQkTwvc3Bhbj48c3Bhbj57e3htaW5mby5zb2xpZFdhc3RlQ29udGVudH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5Zmq5aOw5o6q5pa95Y+K5o6S5pS+5Y675ZCRPC9zcGFuPjxzcGFuPnt7eG1pbmZvLm5vaXNlQ29udGVudH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+55Sf5oCB5b2x5ZON5o6q5pa95Y+K5o6S5pS+5Y675ZCRPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmVjb2xvZ2ljYWxFZmZlY3RzQ29udGVudH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+55Sf5oCB5b2x5ZONPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7lup/msLQ8L3NwYW4+PHNwYW4+e3t4bWluZm8ud2FzdGV3YXRlclR5cGV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5bqf5rCUPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmV4aGF1c3RHYXNlc1R5cGV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5Zmq5aOwPC9zcGFuPjxzcGFuPnt7eG1pbmZvLm5vaXNlVHlwZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7lm7rlup88L3NwYW4+PHNwYW4+e3t4bWluZm8uc29saWRXYXN0ZVR5cGV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7lu7rorr7lhoXlrrnlj4rop4TmqKE8L3NwYW4+PHNwYW4+e3t4bWluZm8uY29uc3RydWN0aW9uQ29udGVudFNjYWxlfX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlKClcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1vcmVcIj57e3Nob3dNb3JlPyfmn6XnnIvmm7TlpJonOifmlLbotbcnfX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjZweCAxMHB4IDBweDtcIiA6Y2xhc3M9XCJzaG93TW9yZTI/J21vcmVoZWlnaHQyJzonJ1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+55m76K6w6KGo5aSH5qGI6aG555uu5Li76KaB5b2x5ZON5rGh5p+T5rK755CG5o6q5pa9PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnQgbXNoYWRvd1wiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCIgdi1mb3I9XCJpdGVtIGluIHdyemxJbmZvXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7msaHmn5Pnsbvlnos8L3NwYW4+PHNwYW4+e3tpdGVtLnBvbGx1dGVUeXBlfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mnInml6Dnjq/kv53mjqrmlr3moIfnpLo8L3NwYW4+PHNwYW4+e3tpdGVtLnNmc2N9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuacieeOr+S/neaOquaWvTE8L3NwYW4+PHNwYW4+e3tpdGVtLnljb250ZW50MX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjBweCAxMHB4IDZweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCIgQGNsaWNrPVwiZ2V0TW9yZTIoKVwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibW9yZVwiPnt7c2hvd01vcmUyPyfmn6XnnIvmm7TlpJonOifmlLbotbcnfX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuXHRpbXBvcnQge1xyXG5cdFx0Y29uc3RydWN0RGV0YWlsXHJcblx0fSBmcm9tIFwiQC9hcGkvcG9sbHV0aW9uX3NvdXJjZVwiO1xyXG5cdGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogXCJidWlsZEZpbGluZ3NEZXRhaWxcIixcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpZDogXCJcIixcclxuXHRcdFx0XHRzaG93TW9yZTogdHJ1ZSxcclxuXHRcdFx0XHRzaG93TW9yZTI6dHJ1ZSxcclxuXHRcdFx0XHR4bWluZm86e30sXHJcblx0XHRcdFx0cXl4eDp7fSxcclxuXHRcdFx0XHR3cnpsSW5mbzpbXSxcclxuXHRcdFx0XHRkZXRhaWxJbmZvOiB7fSxcclxuXHRcdFx0XHRkYXRhOiBbe1xyXG5cdFx0XHRcdFx0bmFtZTogXCLoia9cIixcclxuXHRcdFx0XHRcdGxpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdFx0eXo6ICdQTTIuNScsXHJcblx0XHRcdFx0XHRcdFx0dHM6ICcxOScsXHJcblx0XHRcdFx0XHRcdFx0emI6IDIyXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR5ejogJ1BNMTAnLFxyXG5cdFx0XHRcdFx0XHRcdHRzOiAnOScsXHJcblx0XHRcdFx0XHRcdFx0emI6IDJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiBcIui9u+W6puaxoeafk1wiLFxyXG5cdFx0XHRcdFx0bGlzdDogW3tcclxuXHRcdFx0XHRcdFx0XHR5ejogJ1BNMi41JyxcclxuXHRcdFx0XHRcdFx0XHR0czogJzE5JyxcclxuXHRcdFx0XHRcdFx0XHR6YjogMjJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHl6OiAnUE0xMCcsXHJcblx0XHRcdFx0XHRcdFx0dHM6ICc5JyxcclxuXHRcdFx0XHRcdFx0XHR6YjogMlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvTWFwKHJvdyx0eXBlKSB7XHJcblx0XHRcdFx0bGV0IGluZm8gPSB7XHJcblx0XHRcdFx0XHRcdGlkOnRoaXMuaWQsXHJcblx0XHRcdFx0XHRcdHNpdGVOYW1lOnJvdy5jb25zdHJ1Y3Rpb25Db21wYW55TmFtZSxcclxuXHRcdFx0XHRcdFx0SkQ6IHJvdy5qZCxcclxuXHRcdFx0XHRcdFx0V0Q6IHJvdy53ZCxcclxuXHRcdFx0XHRcdFx0Y3JlZGl0Q29kZTpyb3cuaHBkd3R5c2h4eWRtLFxyXG5cdFx0XHRcdFx0XHRsZWdhbE1hbjpyb3cuaHBkd2ZkZGJyLFxyXG5cdFx0XHRcdFx0XHRsZWdhbE1hblRlbDpyb3cuaHBkd2x4ZGgsXHJcblx0XHRcdFx0XHRcdGNhdGVnb3J5OnJvdy5oeW1jLFxyXG5cdFx0XHRcdFx0XHRhZGRyZXNzOnJvdy5ocGR3ZHosXHJcblx0XHRcdFx0XHRcdC8vIHR5cGVzOidocGR3J1xyXG5cdFx0XHRcdFx0XHR0eXBlczoncGxhbidcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJvdy5qZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcImxvY2F0aW9uTWFwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVyeTogaW5mb1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFRvYXN0KCfmnKrojrflj5bliLDlrprkvY0nKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TW9yZSgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dNb3JlID0gIXRoaXMuc2hvd01vcmU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vcmUyKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZTIgPSAhdGhpcy5zaG93TW9yZTI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWREYXRhKCkge1xyXG5cdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0aWQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkLFxyXG5cdFx0XHRcdFx0dHlwZTogdGhpcy4kcm91dGUucXVlcnkudHlwZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdHJ1Y3REZXRhaWwoaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgcmRhdGE9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnF5eHggPSByZGF0YS5xeXh4O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnhtaW5mbyA9IHJkYXRhLnhteHg7XHJcblx0XHRcdFx0XHRcdHRoaXMud3J6bEluZm8gPSByZGF0YS56bGNzO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5idWlsZEZpbGluZ3NEZXRhaWx7XHJcblx0XHQubXNoYWRvdysubXNoYWRvd3tcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lm1zaGFkb3d7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHQgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSA3MCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgd2hpdGU7XHJcblx0XHRcdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0XHRcdCAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdC5tb3JlaGVpZ2h0e1xyXG5cdFx0XHRcdG1heC1oZWlnaHQ6IDI4NHB4O1xyXG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdH1cclxuXHRcdC5tb3JlaGVpZ2h0MntcclxuXHRcdFx0bWF4LWhlaWdodDogMTg0cHg7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkRmlsaW5nc0RldGFpbFwiLCBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuWkh+ahiOmhueebrlwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRfaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkX2xhYmVsIGJ1aWxkX2dyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5aSH5qGIXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCI2MDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5wcm9qZWN0TmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2Zvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTWFwKF92bS54bWluZm8sIFwianNcIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uYnVpbGRBZGRyZXNzKSldKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWFrOekuuaXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnhtaW5mby5hbm5vdW5jZW1lbnREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKF92bS54bWluZm8uYW5ub3VuY2VtZW50RGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5ouf5byA5bel5pel5pyfXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ueG1pbmZvLnBsYW5uZWRTdGFydERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF5anMobmV3IERhdGUoX3ZtLnhtaW5mby5wbGFubmVkU3RhcnREYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorqHliJLnq6Plt6Xml6XmnJ9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS54bWluZm8ucGxhbm5lZENvbXBsZXRpb25EYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKF92bS54bWluZm8ucGxhbm5lZENvbXBsZXRpb25EYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6aG555uu5oqV6LWEXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLnByb2plY3RJbnZlc3RtZW50KSArIFwi5LiH5YWDXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/kv53mipXotYRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnhtaW5mby5lbnZQcm90ZWN0aW9uSW52ZXN0bWVudCkgKyBcIuS4h+WFg1wiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnNob3dNb3JlID8gXCJtb3JlaGVpZ2h0XCIgOiBcIlwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueZu+iusOWkh+ahiOmhueebruS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlX3RpcHMgZ3JlZW5fdGlwc1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5jb25zdHJ1Y3Rpb25Qcm9wZXJ0eU5hbWUpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIgfSwgW192bS5fdihcIuW7uuiuvuWNleS9jeS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0X3NwYW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwi55Sz6K+35pel5pyfIO+8mlwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ueG1pbmZvLmFwcGxpY2F0aW9uRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKF92bS54bWluZm8uYXBwbGljYXRpb25EYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlu7rorr7ljZXkvY1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uY29uc3RydWN0aW9uQ29tcGFueU5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSH5qGI5Y+3XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLnJlY29yZE51bWJlcikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLms5Xlrprku6PooajkurpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ubGVnYWxSZXByZXNlbnRhdGl2ZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkh+ahiOWPt+a1geawtOWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5yZWNvcmROdW1iZXJTZXJpYWwpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O75Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmxpbmttYW5OYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiBlOezu+eUteivnVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5jb250YWN0TnVtYmVyKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpobnnm67lkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ucHJvamVjdE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWNoOWcsOmdouenr1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5hcmVhQ292ZXJlZCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5aKD5b2x5ZON6K+E5Lu35YiG57G7Mue6p1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5lbnZpcm9ubWVudGFsVHlwZTIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueOr+Wig+W9seWTjeivhOS7t+WIhuexuzPnuqdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uZW52aXJvbm1lbnRhbFR5cGUzKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msLTmjqrmlr3lj4rmjpLmlL7ljrvlkJFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ud2FzdGV3YXRlckNvbnRlbnQpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awlOaOquaWveWPiuaOkuaUvuWOu+WQkVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5leGhhdXN0R2FzZXNDb250ZW50KSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWbuuW6n+aOquaWveWPiuaOkuaUvuWOu+WQkVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5zb2xpZFdhc3RlQ29udGVudCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zmq5aOw5o6q5pa95Y+K5o6S5pS+5Y675ZCRXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLm5vaXNlQ29udGVudCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi55Sf5oCB5b2x5ZON5o6q5pa95Y+K5o6S5pS+5Y675ZCRXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmVjb2xvZ2ljYWxFZmZlY3RzQ29udGVudCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby53YXN0ZXdhdGVyVHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uZXhoYXVzdEdhc2VzVHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlmarlo7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ubm9pc2VUeXBlKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWbuuW6n1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5zb2xpZFdhc3RlVHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bu66K6+5YaF5a655Y+K6KeE5qihXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmNvbnN0cnVjdGlvbkNvbnRlbnRTY2FsZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zaG93TW9yZSA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zaG93TW9yZTIgPyBcIm1vcmVoZWlnaHQyXCIgOiBcIlwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS53cnpsSW5mbywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnQgbXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5p+T57G75Z6LXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucG9sbHV0ZVR5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuacieaXoOeOr+S/neaOquaWveagh+ekulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNmc2MpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuacieeOr+S/neaOquaWvTFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS55Y29udGVudDEpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlMigpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmUyID8gXCLmn6XnnIvmm7TlpJpcIiA6IFwi5pS26LW3XCIpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIgfSwgW192bS5fdihcIumhueebruS/oeaBr1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlJ/mgIHlvbHlk41cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnmbvorrDooajlpIfmoYjpobnnm67kuLvopoHlvbHlk43msaHmn5PmsrvnkIbmjqrmlr1cIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1aWxkRmlsaW5nc0RldGFpbCAubXNoYWRvdyArIC5tc2hhZG93IHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLmJ1aWxkRmlsaW5nc0RldGFpbCAubXNoYWRvdyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSA3MCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4uYnVpbGRGaWxpbmdzRGV0YWlsIC5tb3JlaGVpZ2h0IHtcXG4gIG1heC1oZWlnaHQ6IDI4NHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmJ1aWxkRmlsaW5nc0RldGFpbCAubW9yZWhlaWdodDIge1xcbiAgbWF4LWhlaWdodDogMTg0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjA1YTA2N2FmXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZEU1VSQlZGaUY3VmJSYnNNZ0REenZ4K3A4MTVDYVNzMTN4Zmt5OXdXbXRBTWJ3NmJ0b2ZjVWdleTcyQWNZZU9PUFFkRUFUc29Bb0lwcldTTENMWCtMM0VsK1RjRGxVM2NBYkNZazNPUk82NDhLNEtTc2lyMDNhVVNJSzRDVHJxZHloMENFeFd2Smg1ZGtsTHczMWhUQVNkZFI4cElpKzJaTWdQTUhBa0JPSjZBcHd0cHNlc0F5WHMxZ2xsY3NMMWdWNE5aR3pkMk80NXU1WEJQVytLTjdxcmlFQlZoQkJyaTJTSVFqTE1Bd0Y1ZnIrR2x4OE1TTXRBQ3EyTStFMmJEZWlhbkN2QWw3N3Y0ZUhCczFlY3dLZEp4eEYxNE85eTJZcklJY0d5MVRBaVpFdU9SQXB3bVBqWlpnTzdySWdlQkFVcHh2T0Y3eU5TMjlPY01qV1JIeUtpSTZDVTBKZUJVeFNqNE5UcnJPemd5akxlRGFlblFpTmdWa0VqNDlTbFZTQXdKOFBVVE5jYjBxWUdRSzl0QWFTc3dXbENvQTM1NW5ib1E4RVhoLy84YS93QVBPTVp6UURGaGpOZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9idWlsZEZpbGluZ3NEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxOTRjNGE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnVpbGRGaWxpbmdzRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YxOTRjNGE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxOTRjNGE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxOTRjNGE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9idWlsZEZpbGluZ3NEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxOTRjNGE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YxOTRjNGE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZEZpbGluZ3NEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZEZpbGluZ3NEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1aWxkRmlsaW5nc0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZEZpbGluZ3NEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZEZpbGluZ3NEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxOTRjNGE4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==