(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "lawCheckDetail",
  components: {},
  data: function data() {
    return {
      id: "",
      showMore: true,
      detailInfo: {}
    };
  },
  mounted: function mounted() {
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods: {
    goThepage: function goThepage() {},
    toMap: function toMap(row, type) {
      var long = parseFloat(row.entLongitude);
      var lat = parseFloat(row.entLatitude);
      var JD = '';
      var WD = '';

      if ((row.entLongitude != '' || row.entLongitude != null) && (row.entLatitude != '' || row.entLatitude != null)) {
        if (long > 90 && lat < 90) {
          JD = long;
          WD = lat;
        } else {
          JD = lat;
          WD = long;
        }

        var info = {
          id: this.id,
          siteName: row.entName,
          JD: JD,
          WD: WD,
          address: type == 1 ? row.entAddr : type == 2 ? row.surveyAddr : row.recordAddr,
          types: 'law'
        };

        if (row.entLongitude) {
          this.$router.push({
            name: "locationMap",
            query: info
          });
        }
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('未获取到定位');
      } // if(type==1&&this.detailInfo.entName==''){
      // }

    },
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    loadData: function loadData() {
      var _this = this;

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["ydzfInfo"])({
        id: this.id
      }).then(function (res) {
        if (res.code == 200) {
          _this.detailInfo = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "执法检查", "left-arrow": "" },
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
                  _c(
                    "div",
                    { staticClass: "build_info", on: { click: _vm.goThepage } },
                    [
                      _c("div", [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/polluter/company.png */ "./src/assets/polluter/company.png"),
                          },
                        }),
                        _c("span", { staticStyle: { "font-weight": "600" } }, [
                          _vm._v(_vm._s(_vm.detailInfo.entName)),
                        ]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm.detailInfo.entAddr != "" && _vm.detailInfo.entAddr != null
                ? _c(
                    "div",
                    {
                      staticClass: "main_footer",
                      on: {
                        click: function ($event) {
                          return _vm.toMap(_vm.detailInfo, 1)
                        },
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                        },
                      }),
                      _c("span", [_vm._v(_vm._s(_vm.detailInfo.entAddr))]),
                    ]
                  )
                : _vm._e(),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "0px 10px", "padding-top": "10px" },
            },
            [
              _vm._m(0),
              _vm._m(1),
              _c("div", { staticClass: "main_content" }, [
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("检查开始时间")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.checkBegin))]),
                ]),
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("检查结束时间")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.checkEnd))]),
                ]),
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("检查人")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.checker))]),
                ]),
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("是否发现涉嫌环境违法行为")]),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.detailInfo.discovery == false ? "否" : "是")
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _vm._m(2),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("勘察地点")]),
                    _c(
                      "span",
                      {
                        staticClass: "address",
                        on: {
                          click: function ($event) {
                            return _vm.toMap(_vm.detailInfo, 2)
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.detailInfo.surveyAddr))]
                    ),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("勘察开始时间")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.surveyBegin))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("勘察结束时间")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.surveyEnd))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("检查 (勘察)人")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.surveyor))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("记录人")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.surveyRecorder))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环境保护主管部门")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.mainDept))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("证件疑义")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.zjyy))]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px", background: "#fff" },
            },
            [
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("申请回避")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.supply))]),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "whole_width no_bottom",
                      class: _vm.showMore ? "moreheight" : "",
                    },
                    [
                      _c("span", [_vm._v("现场情况")]),
                      _c("span", [_vm._v(_vm._s(_vm.detailInfo.situation))]),
                    ]
                  ),
                ]
              ),
              _c(
                "div",
                {
                  staticStyle: { margin: "0px", "text-align": "center" },
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
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _vm._m(3),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("调查询问笔录地点")]),
                    _c(
                      "span",
                      {
                        staticClass: "address",
                        on: {
                          click: function ($event) {
                            return _vm.toMap(_vm.detailInfo, 3)
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.detailInfo.recordAddr))]
                    ),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("开始时间")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.recordBegin))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("结束时间")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.recordEnd))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("检查人")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.recordChecker))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("记录人")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.recorder))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("被询问人")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.askedName))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("被询问人与本案关系")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.relation))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("被询问人联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.askedTel))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("被调查人地址")]),
                    _c("span", { staticClass: "address" }, [
                      _vm._v(_vm._s(_vm.detailInfo.askedAddr)),
                    ]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("问答")]),
                    _c("span", [_vm._v(_vm._s(_vm.detailInfo.content))]),
                  ]),
                ]
              ),
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
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("现场检查信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("专项行动")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("现场勘查笔录")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("调查询问笔录")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".moreheight[data-v-5701db26] {\n  max-height: 184px;\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("68a7504d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/company.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/company.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFzSURBVCiRlZC/S1tRFMc/5973ErV2UGw62MlVipuhEAjiK7gUujo4OHV1E5oEFEkF/RvcO7ZbWwKCqJsU/QNcaymaQUlI3r3vdGgSnq8v0H6ne358zvmeK+TozY5OdWPXANloNYMXeT1BNvG65ta7sT8EmQe6edAjcKXRW7TeHimUxzWnJQBRLd4H2R7GKXVU7YIxvtzp2+OzA7kfFsyA38yB/lRsv6TK58nQt6O6O1+t+3cpcLwsYkZP5ZWo7j66EfjVagalYRDV3E/giXr1eV7S4LOo5jR7o1ixJH+Daas3M6EttpqBzIS2CPwA9Ote4bLVDESUjXEb59rOf4vqjrbzAHNAHDV6L0nsVdZKGnwQ9INCX6CgyEegYLqF62TCraCmArqXB04r8h5gMH0aiH3Ac0F2gNlxGwOUasZRHITxU5+Y6mhczuf8l0RP2Tq9ebvmkrCYLRrUL82eXHy/qy6PbJm4Vyl9+iJ6wm3W/z/o7jdHZn6ZAuebwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/detail/lawCheckDetail.vue":
/*!*******************************************************!*\
  !*** ./src/views/pollution/detail/lawCheckDetail.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true& */ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true&");
/* harmony import */ var _lawCheckDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawCheckDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& */ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _lawCheckDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5701db26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/lawCheckDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawCheckDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=style&index=0&id=5701db26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_style_index_0_id_5701db26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/lawCheckDetail.vue?vue&type=template&id=5701db26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawCheckDetail_vue_vue_type_template_id_5701db26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGF3Q2hlY2tEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT85NmU0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT9jYTIwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT9jODM3Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvY29tcGFueS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9wb3NpdGlvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGF3Q2hlY2tEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT9iMWFiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT9lOGQzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xhd0NoZWNrRGV0YWlsLnZ1ZT8zNjVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQUdBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLGdCQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsWUFEQTtBQUVBLG9CQUZBO0FBR0E7QUFIQTtBQUtBLEdBWEE7QUFZQSxTQVpBLHFCQVlBO0FBQ0E7QUFDQTtBQUNBLEdBZkE7QUFnQkE7QUFDQSxh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RUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW1ULENBQWdCLCtVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZlwiPlxyXG5cdFx0PHZhbi1uYXYtYmFyIHRpdGxlPVwi5omn5rOV5qOA5p+lXCIgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+PC92YW4tbmF2LWJhcj5cclxuXHJcblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXZoKTtvdmVyZmxvdy15OiBhdXRvO1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1aWxkX2luZm9cIiBAY2xpY2s9XCJnb1RoZXBhZ2VcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9jb21wYW55LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDo2MDBcIj57e2RldGFpbEluZm8uZW50TmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgdi1pZj1cImRldGFpbEluZm8uZW50QWRkciE9JycmJmRldGFpbEluZm8uZW50QWRkciE9bnVsbFwiIGNsYXNzPVwibWFpbl9mb290ZXJcIiBAY2xpY2s9XCJ0b01hcChkZXRhaWxJbmZvLDEpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9wb3NpdGlvbi5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0PHNwYW4+e3tkZXRhaWxJbmZvLmVudEFkZHJ9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHg7cGFkZGluZy10b3A6IDEwcHg7XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7njrDlnLrmo4Dmn6Xkv6Hmga88L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJhY3RpdmVcIj7kuJPpobnooYzliqg8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7mo4Dmn6XlvIDlp4vml7bpl7Q8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLmNoZWNrQmVnaW59fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5qOA5p+l57uT5p2f5pe26Ze0PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5jaGVja0VuZH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5qOA5p+l5Lq6PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5jaGVja2VyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mmK/lkKblj5HnjrDmtonlq4znjq/looPov53ms5XooYzkuLo8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLmRpc2NvdmVyeT09ZmFsc2U/J+WQpic6J+aYryd9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+546w5Zy65YuY5p+l56yU5b2VPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5YuY5a+f5Zyw54K5PC9zcGFuPjxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIEBjbGljaz1cInRvTWFwKGRldGFpbEluZm8sMilcIj57e2RldGFpbEluZm8uc3VydmV5QWRkcn19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7li5jlr5/lvIDlp4vml7bpl7Q8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnN1cnZleUJlZ2lufX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuWLmOWvn+e7k+adn+aXtumXtDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8uc3VydmV5RW5kfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mo4Dmn6UgKOWLmOWvnynkuro8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnN1cnZleW9yfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7orrDlvZXkuro8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnN1cnZleVJlY29yZGVyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7njq/looPkv53miqTkuLvnrqHpg6jpl6g8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLm1haW5EZXB0fX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7or4Hku7bnlpHkuYk8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnpqeXl9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O2JhY2tncm91bmQ6ICNmZmY7XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7nlLPor7flm57pgb88L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnN1cHBseX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiIDpjbGFzcz1cInNob3dNb3JlPydtb3JlaGVpZ2h0JzonJ1wiPjxzcGFuPueOsOWcuuaDheWGtTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4+e3tkZXRhaWxJbmZvLnNpdHVhdGlvbn19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT1cIm1hcmdpbjowcHg7dGV4dC1hbGlnbjogY2VudGVyO1wiIEBjbGljaz1cImdldE1vcmUoKVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtb3JlXCI+e3tzaG93TW9yZT8n5p+l55yL5pu05aSaJzon5pS26LW3J319PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjo2cHggMTBweCAwcHg7XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7osIPmn6Xor6Lpl67nrJTlvZU8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7osIPmn6Xor6Lpl67nrJTlvZXlnLDngrk8L3NwYW4+PHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgQGNsaWNrPVwidG9NYXAoZGV0YWlsSW5mbywzKVwiPnt7ZGV0YWlsSW5mby5yZWNvcmRBZGRyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuW8gOWni+aXtumXtDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8ucmVjb3JkQmVnaW59fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+57uT5p2f5pe26Ze0PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5yZWNvcmRFbmR9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5qOA5p+l5Lq6PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5yZWNvcmRDaGVja2VyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuiusOW9leS6ujwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8ucmVjb3JkZXJ9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6KKr6K+i6Zeu5Lq6PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5hc2tlZE5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6KKr6K+i6Zeu5Lq65LiO5pys5qGI5YWz57O7PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5yZWxhdGlvbn19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ooqvor6Lpl67kurrogZTns7vnlLXor508L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLmFza2VkVGVsfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6KKr6K+i6Zeu5Lq66IGU57O755S16K+dPC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5lbnRBZGRyfX08L3NwYW4+PC9kaXY+IC0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6KKr6LCD5p+l5Lq65Zyw5Z2APC9zcGFuPjxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiPnt7ZGV0YWlsSW5mby5hc2tlZEFkZHJ9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPumXruetlDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8uY29udGVudH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHR5ZHpmSW5mb1xyXG5cdH0gZnJvbSBcIkAvYXBpL3BvbGx1dGlvbl9zb3VyY2VcIjtcclxuXHRpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwibGF3Q2hlY2tEZXRhaWxcIixcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpZDogXCJcIixcclxuXHRcdFx0XHRzaG93TW9yZTp0cnVlLFxyXG5cdFx0XHRcdGRldGFpbEluZm86IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvVGhlcGFnZSgpe1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9NYXAocm93LHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgbG9uZyA9IHBhcnNlRmxvYXQocm93LmVudExvbmdpdHVkZSk7XHJcblx0XHRcdFx0bGV0IGxhdCA9IHBhcnNlRmxvYXQocm93LmVudExhdGl0dWRlKTtcclxuXHRcdFx0XHRsZXQgSkQgPSAnJztsZXQgV0QgPSAnJztcclxuXHRcdFx0XHRpZigocm93LmVudExvbmdpdHVkZSE9Jyd8fHJvdy5lbnRMb25naXR1ZGUhPW51bGwpJiYocm93LmVudExhdGl0dWRlIT0nJ3x8cm93LmVudExhdGl0dWRlIT1udWxsKSl7XHJcblx0XHRcdFx0XHRpZihsb25nPjkwJiZsYXQ8OTApe1xyXG5cdFx0XHRcdFx0XHRKRCA9IGxvbmc7XHJcblx0XHRcdFx0XHRcdFdEPWxhdDtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRKRCA9IGxhdDtcclxuXHRcdFx0XHRcdFx0V0Q9bG9uZztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdGlkOnRoaXMuaWQsXHJcblx0XHRcdFx0XHRcdFx0c2l0ZU5hbWU6cm93LmVudE5hbWUsXHJcblx0XHRcdFx0XHRcdFx0SkQ6IEpELFxyXG5cdFx0XHRcdFx0XHRcdFdEOiBXRCxcclxuXHRcdFx0XHRcdFx0XHRhZGRyZXNzOnR5cGU9PTE/cm93LmVudEFkZHI6dHlwZT09Mj9yb3cuc3VydmV5QWRkcjpyb3cucmVjb3JkQWRkcixcclxuXHRcdFx0XHRcdFx0XHR0eXBlczonbGF3J1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJvdy5lbnRMb25naXR1ZGUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogXCJsb2NhdGlvbk1hcFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnk6IGluZm9cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRUb2FzdCgn5pyq6I635Y+W5Yiw5a6a5L2NJylcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHQvLyBpZih0eXBlPT0xJiZ0aGlzLmRldGFpbEluZm8uZW50TmFtZT09Jycpe1xyXG5cclxuXHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRNb3JlKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZSA9ICF0aGlzLnNob3dNb3JlXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWREYXRhKCkge1xyXG5cdFx0XHRcdHlkemZJbmZvKHtcclxuXHRcdFx0XHRcdGlkOiB0aGlzLmlkXHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRldGFpbEluZm8gPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5tb3JlaGVpZ2h0e1xyXG5cdFx0bWF4LWhlaWdodDogMTg0cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5omn5rOV5qOA5p+lXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDl2aClcIiwgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRfaW5mb1wiLCBvbjogeyBjbGljazogX3ZtLmdvVGhlcGFnZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL2NvbXBhbnkucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtd2VpZ2h0XCI6IFwiNjAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uZW50TmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uZGV0YWlsSW5mby5lbnRBZGRyICE9IFwiXCIgJiYgX3ZtLmRldGFpbEluZm8uZW50QWRkciAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9NYXAoX3ZtLmRldGFpbEluZm8sIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcG9zaXRpb24ucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uZW50QWRkcikpXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBweCAxMHB4XCIsIFwicGFkZGluZy10b3BcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuajgOafpeW8gOWni+aXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLmNoZWNrQmVnaW4pKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5qOA5p+l57uT5p2f5pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uY2hlY2tFbmQpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuajgOafpeS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLmNoZWNrZXIpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaYr+WQpuWPkeeOsOa2ieWrjOeOr+Wig+i/neazleihjOS4ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGV0YWlsSW5mby5kaXNjb3ZlcnkgPT0gZmFsc2UgPyBcIuWQplwiIDogXCLmmK9cIilcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLli5jlr5/lnLDngrlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTWFwKF92bS5kZXRhaWxJbmZvLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnN1cnZleUFkZHIpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWLmOWvn+W8gOWni+aXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uc3VydmV5QmVnaW4pKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YuY5a+f57uT5p2f5pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5zdXJ2ZXlFbmQpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuajgOafpSAo5YuY5a+fKeS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uc3VydmV5b3IpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiusOW9leS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uc3VydmV5UmVjb3JkZXIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueOr+Wig+S/neaKpOS4u+euoemDqOmXqFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ubWFpbkRlcHQpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuivgeS7tueWkeS5iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uemp5eSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlLPor7flm57pgb9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnN1cHBseSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGggbm9fYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zaG93TW9yZSA/IFwibW9yZWhlaWdodFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546w5Zy65oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnNpdHVhdGlvbikpXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtb3JlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zaG93TW9yZSA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LCD5p+l6K+i6Zeu56yU5b2V5Zyw54K5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b01hcChfdm0uZGV0YWlsSW5mbywgMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5yZWNvcmRBZGRyKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlvIDlp4vml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnJlY29yZEJlZ2luKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIue7k+adn+aXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ucmVjb3JkRW5kKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuajgOafpeS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ucmVjb3JkQ2hlY2tlcikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorrDlvZXkurpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnJlY29yZGVyKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiiq+ivoumXruS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uYXNrZWROYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiiq+ivoumXruS6uuS4juacrOahiOWFs+ezu1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ucmVsYXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KKr6K+i6Zeu5Lq66IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5hc2tlZFRlbCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KKr6LCD5p+l5Lq65Zyw5Z2AXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFkZHJlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5hc2tlZEFkZHIpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6Zeu562UXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5jb250ZW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjrDlnLrmo4Dmn6Xkv6Hmga9cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5LiT6aG56KGM5YqoXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546w5Zy65YuY5p+l56yU5b2VXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LCD5p+l6K+i6Zeu56yU5b2VXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb3JlaGVpZ2h0W2RhdGEtdi01NzAxZGIyNl0ge1xcbiAgbWF4LWhlaWdodDogMTg0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xhd0NoZWNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MDFkYjI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjhhNzUwNGRcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXdDaGVja0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NzAxZGIyNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xhd0NoZWNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MDFkYjI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBUUNBWUFBQUFtbEU0NkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZ6U1VSQlZDaVJsWkMvUzF0UkZNYy81OTczRXJWMlVHdzYyTWxWaXB1aEVBamlLN2dVdWpvNE9IVjFFNW9FRkVrRi9SdmNPN1piV3dLQ3FKc1UvUU5jYXltYVFVbEkzcjN2ZEdnU25xOHYwSDZuZTM1OHp2bWVLK1Rvelk1T2RXUFhBTmxvTllNWGVUMUJOdkc2NXRhN3NUOEVtUWU2ZWRBamNLWFJXN1RlSGltVXh6V25KUUJSTGQ0SDJSN0dLWFZVN1lJeHZ0enAyK096QTdrZkZzeUEzOHlCL2xSc3Y2VEs1OG5RdDZPNk8xK3QrM2NwY0x3c1lrWlA1WldvN2o2NkVmalZhZ2FsWVJEVjNFL2dpWHIxZVY3UzRMT281alI3bzFpeEpIK0RhYXMzTTZFdHRwcUJ6SVMyQ1B3QTlPdGU0YkxWREVTVWpYRWI1OXJPZjR2cWpyYnpBSE5BSERWNkwwbnNWZFpLR253UTlJTkNYNkNneUVlZ1lMcUY2MlRDcmFDbUFycVhCMDRyOGg1Z01IMGFpSDNBYzBGMmdObHhHd09VYXNaUkhJVHhVNStZNm1oY3p1ZjhsMFJQMlRxOWVidm1rckNZTFJyVUw4MmVYSHkvcXk2UGJKbTRWeWw5K2lKNndtM1cvei9vN2pkSFpuNlpBdWVid3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGRFNVUkJWRmlGN1ZiUmJzTWdERHp2eCtwODE1Q2FTczEzeGZreTl3V210QU1idzZidG9mY1VnZXk3MkFjWWVPT1BRZEVBVHNvQW9JcHJXU0xDTFgrTDNFbCtUY0RsVTNjQWJDWWszT1JPNjQ4SzRLU3NpcjAzYVVTSUs0Q1RycWR5aDBDRXhXdkpoNWRrbEx3MzFoVEFTZGRSOHBJaSsyWk1nUE1IQWtCT0o2QXB3dHBzZXNBeVhzMWdsbGNzTDFnVjROWkd6ZDJPNDV1NVhCUFcrS043cXJpRUJWaEJCcmkyU0lRakxNQXdGNWZyK0dseDhNU010QUNxMk0rRTJiRGVpYW5DdkFsNzd2NGVIQnMxZWN3S2RKeHhGMTRPOXkyWXJJSWNHeTFUQWlaRXVPUkFwd21QalpaZ083cklnZUJBVXB4dk9GN3lOUzI5T2NNaldSSHlLaUk2Q1UwSmVCVXhTajROVHJyT3pneWpMZURhZW5RaU5nVmtFajQ5U2xWU0F3SjhQVVROY2IwcVlHUUs5dEFhU3N3V2xDb0EzNTVuYm9ROEVYaC8vOGEvd0FQT01aelFERmhqTmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGF3Q2hlY2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3MDFkYjI2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xhd0NoZWNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGF3Q2hlY2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xhd0NoZWNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3MDFkYjI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTcwMWRiMjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTcwMWRiMjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTcwMWRiMjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTcwMWRiMjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xhd0NoZWNrRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzAxZGIyNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NzAxZGIyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGF3Q2hlY2tEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXdDaGVja0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3Q2hlY2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3Q2hlY2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTcwMWRiMjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXdDaGVja0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTcwMWRiMjYmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9