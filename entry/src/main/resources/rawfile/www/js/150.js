(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "safeDetail",
  components: {},
  data: function data() {
    return {
      tabArr: ['Ir-192', 'Am-241'],
      tabIndex: 0,
      detailInfo: {
        entName: "",
        sources: [],
        sourceDevices: []
      },
      title: "",
      type: 0,
      sources: [],
      sourceDevices: []
    };
  },
  mounted: function mounted() {
    this.id = this.$route.query.id;
    this.title = this.$route.query.title;
    this.type = this.$route.query.type;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      if (this.title == "辐射安全") {
        Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["radiationInfo"])({
          id: this.id
        }).then(function (res) {
          if (res.code == 200) {
            _this.detailInfo = res.data;
            _this.sources = res.data.sources;
            _this.sourceDevices = res.data.sourceDevices;
          }
        });
      } else {
        if (this.type == 1) {
          Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["fsyInfo"])({
            id: this.id
          }).then(function (res) {
            if (res.code == 200) {
              var rdata = res.data;
              _this.detailInfo.entName = rdata.dwmc;
              _this.sources = rdata; // this.sourceDevices = res.data.sourceDevices;
            }
          });
        } else {
          Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["fsyzzInfo"])({
            id: this.id
          }).then(function (res) {
            if (res.code == 200) {
              var rdata = res.data;
              _this.detailInfo.entName = rdata.dwmc;
              _this.sourceDevices = rdata;
            }
          });
        }
      }
    },
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.title + "详情", "left-arrow": "" },
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
          _c("div", { staticClass: "qr_title" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../assets/polluter/company.png */ "./src/assets/polluter/company.png") },
            }),
            _c("span", [_vm._v(_vm._s(_vm.detailInfo.entName))]),
          ]),
          _vm.title == "辐射安全"
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: { margin: "0px 10px", "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("辐射概况信息")]),
                    _c("span", { staticClass: "detail_title" }, [
                      _vm._v(
                        "有效期限：" +
                          _vm._s(_vm.detailInfo.beginDate) +
                          "~" +
                          _vm._s(_vm.detailInfo.endDate)
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "online_blue" }, [
                    _c("span", [_vm._v("辐射安全许可证编号")]),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "14px",
                          color: "rgba(68, 123, 252, 1)",
                        },
                      },
                      [_vm._v(_vm._s(_vm.detailInfo.licenseNo))]
                    ),
                  ]),
                  _vm._m(0),
                  _c("div", { staticClass: "rad_content" }, [
                    _c("div", [
                      _c("span", [_vm._v("Ⅰ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detailInfo.zzType1) + " 颗"),
                      ]),
                    ]),
                    _c("div", [
                      _c("span", [_vm._v("Ⅱ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detailInfo.zzType2) + " 颗"),
                      ]),
                    ]),
                    _c("div", [
                      _c("span", [_vm._v("Ⅲ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detailInfo.zzType3) + " 颗"),
                      ]),
                    ]),
                    _c("div", [
                      _c("span", [_vm._v("Ⅳ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detailInfo.zzType4) + " 颗"),
                      ]),
                    ]),
                    _c("div", [
                      _c("span", [_vm._v("Ⅴ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detailInfo.zzType5) + " 颗"),
                      ]),
                    ]),
                  ]),
                  _vm._m(1),
                  _c("div", { staticClass: "rad_content" }, [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          width: "calc(50% - 10px)",
                          "text-align": "left",
                          "padding-left": "20px",
                        },
                      },
                      [
                        _c("span", [_vm._v("Ⅰ类源")]),
                        _c("span", [
                          _vm._v(_vm._s(_vm.detailInfo.zzType2) + " 颗"),
                        ]),
                      ]
                    ),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          width: "calc(50% - 10px)",
                          "text-align": "left",
                          "padding-left": "20px",
                        },
                      },
                      [
                        _c("span", [_vm._v("Ⅱ类源")]),
                        _c("span", [
                          _vm._v(_vm._s(_vm.detailInfo.zzType3) + " 颗"),
                        ]),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm.title == "辐射安全"
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: { margin: "6px 10px 0px" },
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("放射源信息")]),
                    _c(
                      "span",
                      {
                        staticClass: "title_tips brown_tips",
                        staticStyle: { "margin-left": "auto" },
                      },
                      [_vm._v(_vm._s(_vm.sources.length) + "种放射源")]
                    ),
                  ]),
                  _vm._l(_vm.sources, function (item, i) {
                    return [
                      _c("div", { staticClass: "rad_title" }, [
                        _c(
                          "span",
                          {
                            class: [i === _vm.tabIndex ? "active" : ""],
                            on: {
                              click: function ($event) {
                                return _vm.changeTab(i)
                              },
                            },
                          },
                          [_vm._v(_vm._s(item.name))]
                        ),
                      ]),
                      _c("div", { staticClass: "main_content" }, [
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("放射源类别")]),
                          _c("span", [_vm._v(_vm._s(item.cate))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("放射源状态")]),
                          _c("span", [_vm._v(_vm._s(item.status))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("出厂日期")]),
                          _c("span", [_vm._v(_vm._s(item.date))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("许可证号")]),
                          _c("span", [_vm._v(_vm._s(item.no))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("生产厂家")]),
                          _c("span", [_vm._v(_vm._s(item.product))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("放射源用途")]),
                          _c("span", [_vm._v(_vm._s(item.use))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("出厂活度（Bq）")]),
                          _c("span", [_vm._v(_vm._s(item.cchd))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("实时活度（Bq）")]),
                          _c("span", [_vm._v(_vm._s(item.sshd))]),
                        ]),
                      ]),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm.type == 1
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: { margin: "6px 10px 0px" },
                },
                [
                  _vm._m(2),
                  _c("div", { staticClass: "rad_title" }, [
                    _c("span", { staticClass: "active" }, [
                      _vm._v(_vm._s(_vm.sources.hsmc)),
                    ]),
                  ]),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("放射源类别")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.sfylb))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("放射源状态")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.fsyzt))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("出厂日期")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.ccrqStr))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("许可证号")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.xkzh))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("生产厂家")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.sccj))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("放射源用途")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.fsyyt))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("出厂活度（Bq）")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.cchd))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("实时活度（Bq）")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.sshd))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("编号")]),
                      _c("span", [_vm._v(_vm._s(_vm.sources.bh))]),
                    ]),
                  ]),
                ]
              )
            : _vm._e(),
          _vm.title == "辐射安全"
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: { margin: "0px 10px 0px" },
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("放射源装置信息")]),
                    _c(
                      "span",
                      {
                        staticClass: "title_tips brown_tips",
                        staticStyle: { "margin-left": "auto" },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.sourceDevices.length) + "种放射源装置"
                        ),
                      ]
                    ),
                  ]),
                  _vm._l(_vm.sourceDevices, function (item, i) {
                    return [
                      _c("div", { staticClass: "rad_title" }, [
                        _c("span", { staticClass: "active" }, [
                          _vm._v(_vm._s(item.name)),
                        ]),
                      ]),
                      _c("div", { staticClass: "main_content" }, [
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("类别")]),
                          _c("span", [_vm._v(_vm._s(item.cate))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("来源")]),
                          _c("span", [_vm._v(_vm._s(item.source))]),
                        ]),
                        _c("div", { staticClass: "third_width" }, [
                          _c("span", [_vm._v("用途")]),
                          _c("span", [_vm._v(_vm._s(item.use))]),
                        ]),
                      ]),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm.type == 2
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: { margin: "0px 10px 0px" },
                },
                [
                  _vm._m(3),
                  _c("div", { staticClass: "rad_title" }, [
                    _c("span", { staticClass: "active" }, [
                      _vm._v(_vm._s(_vm.sourceDevices.zzmc)),
                    ]),
                  ]),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("类别")]),
                      _c("span", [_vm._v(_vm._s(_vm.sourceDevices.zzlb))]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("来源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.sourceDevices.zzly || "/")),
                      ]),
                    ]),
                    _c("div", { staticClass: "third_width" }, [
                      _c("span", [_vm._v("用途")]),
                      _c("span", [_vm._v(_vm._s(_vm.sourceDevices.zzyt))]),
                    ]),
                  ]),
                ]
              )
            : _vm._e(),
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
      _c("span", { staticClass: "active" }, [_vm._v("放射源活动种类")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("射线装置活动种类")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("放射源信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("放射源装置信息")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./src/assets/polluter/company.png":
/*!*****************************************!*\
  !*** ./src/assets/polluter/company.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFzSURBVCiRlZC/S1tRFMc/5973ErV2UGw62MlVipuhEAjiK7gUujo4OHV1E5oEFEkF/RvcO7ZbWwKCqJsU/QNcaymaQUlI3r3vdGgSnq8v0H6ne358zvmeK+TozY5OdWPXANloNYMXeT1BNvG65ta7sT8EmQe6edAjcKXRW7TeHimUxzWnJQBRLd4H2R7GKXVU7YIxvtzp2+OzA7kfFsyA38yB/lRsv6TK58nQt6O6O1+t+3cpcLwsYkZP5ZWo7j66EfjVagalYRDV3E/giXr1eV7S4LOo5jR7o1ixJH+Daas3M6EttpqBzIS2CPwA9Ote4bLVDESUjXEb59rOf4vqjrbzAHNAHDV6L0nsVdZKGnwQ9INCX6CgyEegYLqF62TCraCmArqXB04r8h5gMH0aiH3Ac0F2gNlxGwOUasZRHITxU5+Y6mhczuf8l0RP2Tq9ebvmkrCYLRrUL82eXHy/qy6PbJm4Vyl9+iJ6wm3W/z/o7jdHZn6ZAuebwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/detail/safeDetail.vue":
/*!***************************************************!*\
  !*** ./src/views/pollution/detail/safeDetail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true& */ "./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true&");
/* harmony import */ var _safeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _safeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21ae18ed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/safeDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./safeDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/safeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/safeDetail.vue?vue&type=template&id=21ae18ed&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safeDetail_vue_vue_type_template_id_21ae18ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvc2FmZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvc2FmZURldGFpbC52dWU/MTYxNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2NvbXBhbnkucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3NhZmVEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3NhZmVEZXRhaWwudnVlP2U4ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvc2FmZURldGFpbC52dWU/MmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEdBO0FBR0E7QUFDQSxvQkFEQTtBQUVBLGdCQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEEsT0FIQTtBQVFBLGVBUkE7QUFTQSxhQVRBO0FBVUEsaUJBVkE7QUFXQTtBQVhBO0FBYUEsR0FuQkE7QUFvQkEsU0FwQkEscUJBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXpCQTtBQTBCQTtBQUNBLFlBREEsc0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQSxXQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVJBO0FBU0EsT0FWQSxNQVVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsYUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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ZW1wbGF0ZT5cclxuXHQ8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZlwiPlxyXG5cdFx0PHZhbi1uYXYtYmFyIDp0aXRsZT1cInRpdGxlKyfor6bmg4UnXCIgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+XHJcblx0XHQ8L3Zhbi1uYXYtYmFyPlxyXG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDogY2FsYygxMDB2aCAtIDl2aCk7b3ZlcmZsb3cteTogYXV0bztcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInFyX3RpdGxlXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvY29tcGFueS5wbmdcIiAvPlxyXG5cdFx0XHRcdDxzcGFuPnt7ZGV0YWlsSW5mby5lbnROYW1lfX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiB2LWlmPVwidGl0bGU9PSfovpDlsITlronlhagnXCIgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjowcHggMTBweDtwYWRkaW5nLXRvcDogMTBweDtcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+6L6Q5bCE5qaC5Ya15L+h5oGvPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCI+5pyJ5pWI5pyf6ZmQ77yae3tkZXRhaWxJbmZvLmJlZ2luRGF0ZX19fnt7ZGV0YWlsSW5mby5lbmREYXRlfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9ibHVlXCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj7ovpDlsITlronlhajorrjlj6/or4HnvJblj7c8L3NwYW4+PHNwYW5cclxuXHRcdFx0XHRcdFx0c3R5bGU9XCJmb250LXNpemU6IDE0cHg7Y29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcIj57e2RldGFpbEluZm8ubGljZW5zZU5vfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJhY3RpdmVcIj7mlL7lsITmupDmtLvliqjnp43nsbs8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZF9jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuKFoOexu+a6kDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8uenpUeXBlMX19IOmilzwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+PHNwYW4+4oWh57G75rqQPC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby56elR5cGUyfX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaLnsbvmupA8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnp6VHlwZTN9fSDpopc8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuKFo+exu+a6kDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8uenpUeXBlNH19IOmilzwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+PHNwYW4+4oWk57G75rqQPC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby56elR5cGU1fX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYWN0aXZlXCI+5bCE57q/6KOF572u5rS75Yqo56eN57G7PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT1cIndpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO3RleHQtYWxpZ246IGxlZnQ7cGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7ihaDnsbvmupA8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLnp6VHlwZTJ9fSDpopc8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwid2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7dGV4dC1hbGlnbjogbGVmdDtwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuPuKFoeexu+a6kDwvc3Bhbj48c3Bhbj57e2RldGFpbEluZm8uenpUeXBlM319IOmilzwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiIHYtaWY9XCJ0aXRsZT09J+i+kOWwhOWuieWFqCdcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuaUvuWwhOa6kOS/oeaBrzwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBicm93bl90aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztcIj57e3NvdXJjZXMubGVuZ3RofX3np43mlL7lsITmupA8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0saSkgaW4gc291cmNlc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiA6Y2xhc3M9XCJbIGk9PT10YWJJbmRleD8nYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUYWIoaSlcIj57e2l0ZW0ubmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPuaUvuWwhOa6kOexu+WIqzwvc3Bhbj48c3Bhbj57e2l0ZW0uY2F0ZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7mlL7lsITmupDnirbmgIE8L3NwYW4+PHNwYW4+e3tpdGVtLnN0YXR1c319PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7lh7rljoLml6XmnJ88L3NwYW4+PHNwYW4+e3tpdGVtLmRhdGV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+6K645Y+v6K+B5Y+3PC9zcGFuPjxzcGFuPnt7aXRlbS5ub319PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7nlJ/kuqfljoLlrrY8L3NwYW4+PHNwYW4+e3tpdGVtLnByb2R1Y3R9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5pS+5bCE5rqQ55So6YCUPC9zcGFuPjxzcGFuPnt7aXRlbS51c2V9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5Ye65Y6C5rS75bqm77yIQnHvvIk8L3NwYW4+PHNwYW4+e3tpdGVtLmNjaGR9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5a6e5pe25rS75bqm77yIQnHvvIk8L3NwYW4+PHNwYW4+e3tpdGVtLnNzaGR9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjZweCAxMHB4IDBweDtcIiB2LWlmPVwidHlwZT09MVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5pS+5bCE5rqQ5L+h5oGvPC9zcGFuPlxyXG5cdFx0XHRcdFx0PCEtLSA8c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+e3tzb3VyY2VzLmxlbmd0aH1956eN5pS+5bCE5rqQPC9zcGFuPiAtLT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPnt7c291cmNlcy5oc21jfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5pS+5bCE5rqQ57G75YirPC9zcGFuPjxzcGFuPnt7c291cmNlcy5zZnlsYn19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5pS+5bCE5rqQ54q25oCBPC9zcGFuPjxzcGFuPnt7c291cmNlcy5mc3l6dH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5Ye65Y6C5pel5pyfPC9zcGFuPjxzcGFuPnt7c291cmNlcy5jY3JxU3RyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7orrjlj6/or4Hlj7c8L3NwYW4+PHNwYW4+e3tzb3VyY2VzLnhremh9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPueUn+S6p+WOguWutjwvc3Bhbj48c3Bhbj57e3NvdXJjZXMuc2Njan19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5pS+5bCE5rqQ55So6YCUPC9zcGFuPjxzcGFuPnt7c291cmNlcy5mc3l5dH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5Ye65Y6C5rS75bqm77yIQnHvvIk8L3NwYW4+PHNwYW4+e3tzb3VyY2VzLmNjaGR9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPuWunuaXtua0u+W6pu+8iEJx77yJPC9zcGFuPjxzcGFuPnt7c291cmNlcy5zc2hkfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7nvJblj7c8L3NwYW4+PHNwYW4+e3tzb3VyY2VzLmJofX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIHYtaWY9XCJkZXRhaWxJbmZvLnNvdXJjZURldmljZXMmJmRldGFpbEluZm8uc291cmNlRGV2aWNlcy5sZW5ndGghPTBcIiAtLT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjBweCAxMHB4IDBweFwiIHYtaWY9XCJ0aXRsZT09J+i+kOWwhOWuieWFqCdcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuaUvuWwhOa6kOijhee9ruS/oeaBrzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLWxlZnQ6IGF1dG87XCI+e3tzb3VyY2VEZXZpY2VzLmxlbmd0aH1956eN5pS+5bCE5rqQ6KOF572uPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLGkpIGluIHNvdXJjZURldmljZXNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJhY3RpdmVcIj57e2l0ZW0ubmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPuexu+WIqzwvc3Bhbj48c3Bhbj57e2l0ZW0uY2F0ZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7mnaXmupA8L3NwYW4+PHNwYW4+e3tpdGVtLnNvdXJjZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7nlKjpgJQ8L3NwYW4+PHNwYW4+e3tpdGVtLnVzZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjowcHggMTBweCAwcHhcIiB2LWlmPVwidHlwZT09MlwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5pS+5bCE5rqQ6KOF572u5L+h5oGvPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPnt7c291cmNlRGV2aWNlcy56em1jfX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+57G75YirPC9zcGFuPjxzcGFuPnt7c291cmNlRGV2aWNlcy56emxifX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPuadpea6kDwvc3Bhbj48c3Bhbj57e3NvdXJjZURldmljZXMuenpseXx8Jy8nfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPueUqOmAlDwvc3Bhbj48c3Bhbj57e3NvdXJjZURldmljZXMuenp5dH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRyYWRpYXRpb25JbmZvLGZzeUluZm8sZnN5enpJbmZvXHJcblx0fSBmcm9tIFwiQC9hcGkvcG9sbHV0aW9uX3NvdXJjZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwic2FmZURldGFpbFwiLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRhYkFycjogWydJci0xOTInLCAnQW0tMjQxJ10sXHJcblx0XHRcdFx0dGFiSW5kZXg6IDAsXHJcblx0XHRcdFx0ZGV0YWlsSW5mbzoge1xyXG5cdFx0XHRcdFx0ZW50TmFtZTpcIlwiLFxyXG5cdFx0XHRcdFx0c291cmNlczogW10sXHJcblx0XHRcdFx0XHRzb3VyY2VEZXZpY2VzOiBbXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dGl0bGU6XCJcIixcclxuXHRcdFx0XHR0eXBlOjAsXHJcblx0XHRcdFx0c291cmNlczogW10sXHJcblx0XHRcdFx0c291cmNlRGV2aWNlczogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnRpdGxlO1xyXG5cdFx0XHR0aGlzLnR5cGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS50eXBlO1xyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkRGF0YSgpIHtcclxuXHRcdFx0XHRpZih0aGlzLnRpdGxlPT1cIui+kOWwhOWuieWFqFwiKXtcclxuXHRcdFx0XHRcdHJhZGlhdGlvbkluZm8oe1xyXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5pZFxyXG5cdFx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZXRhaWxJbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zb3VyY2VzID0gcmVzLmRhdGEuc291cmNlcztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNvdXJjZURldmljZXMgPSByZXMuZGF0YS5zb3VyY2VEZXZpY2VzO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0aWYodGhpcy50eXBlPT0xKXtcclxuXHRcdFx0XHRcdFx0ZnN5SW5mbyh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMuaWRcclxuXHRcdFx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCByZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kZXRhaWxJbmZvLmVudE5hbWUgPSByZGF0YS5kd21jO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zb3VyY2VzPXJkYXRhO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VEZXZpY2VzID0gcmVzLmRhdGEuc291cmNlRGV2aWNlcztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0ZnN5enpJbmZvKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogdGhpcy5pZFxyXG5cdFx0XHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRldGFpbEluZm8uZW50TmFtZSA9IHJkYXRhLmR3bWM7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNvdXJjZURldmljZXM9cmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlVGFiKGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGluZGV4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS50aXRsZSArIFwi6K+m5oOFXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDl2aClcIiwgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicXJfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9jb21wYW55LnBuZ1wiKSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uZW50TmFtZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLnRpdGxlID09IFwi6L6Q5bCE5a6J5YWoXCJcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweFwiLCBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L6Q5bCE5qaC5Ya15L+h5oGvXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIuacieaViOacn+mZkO+8mlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kZXRhaWxJbmZvLmJlZ2luRGF0ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIn5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGV0YWlsSW5mby5lbmREYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui+kOWwhOWuieWFqOiuuOWPr+ivgee8luWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ubGljZW5zZU5vKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuKFoOexu+a6kFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnp6VHlwZTEpICsgXCIg6aKXXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi4oWh57G75rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uenpUeXBlMikgKyBcIiDpopdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaLnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby56elR5cGUzKSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuKFo+exu+a6kFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLnp6VHlwZTQpICsgXCIg6aKXXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi4oWk57G75rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uenpUeXBlNSkgKyBcIiDpopdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImNhbGMoNTAlIC0gMTBweClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuKFoOexu+a6kFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby56elR5cGUyKSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJjYWxjKDUwJSAtIDEwcHgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaHnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uenpUeXBlMykgKyBcIiDpopdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnRpdGxlID09IFwi6L6Q5bCE5a6J5YWoXCJcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaUvuWwhOa6kOS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3VyY2VzLmxlbmd0aCkgKyBcIuenjeaUvuWwhOa6kFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zb3VyY2VzLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtpID09PSBfdm0udGFiSW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pS+5bCE5rqQ57G75YirXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNhdGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaUvuWwhOa6kOeKtuaAgVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5zdGF0dXMpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWHuuWOguaXpeacn1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorrjlj6/or4Hlj7dcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubm8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueUn+S6p+WOguWutlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5wcm9kdWN0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmlL7lsITmupDnlKjpgJRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udXNlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlh7rljoLmtLvluqbvvIhCce+8iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5jY2hkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlrp7ml7bmtLvluqbvvIhCce+8iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5zc2hkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0udHlwZSA9PSAxXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc291cmNlcy5oc21jKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaUvuWwhOa6kOexu+WIq1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc291cmNlcy5zZnlsYikpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pS+5bCE5rqQ54q25oCBXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3VyY2VzLmZzeXp0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlh7rljoLml6XmnJ9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNvdXJjZXMuY2NycVN0cikpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6K645Y+v6K+B5Y+3XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3VyY2VzLnhremgpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueUn+S6p+WOguWutlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc291cmNlcy5zY2NqKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmlL7lsITmupDnlKjpgJRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNvdXJjZXMuZnN5eXQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWHuuWOgua0u+W6pu+8iEJx77yJXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3VyY2VzLmNjaGQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWunuaXtua0u+W6pu+8iEJx77yJXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3VyY2VzLnNzaGQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIue8luWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc291cmNlcy5iaCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS50aXRsZSA9PSBcIui+kOWwhOWuieWFqFwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmlL7lsITmupDoo4Xnva7kv6Hmga9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBicm93bl90aXBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc291cmNlRGV2aWNlcy5sZW5ndGgpICsgXCLnp43mlL7lsITmupDoo4Xnva5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc291cmNlRGV2aWNlcywgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnsbvliKtcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY2F0ZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5p2l5rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNvdXJjZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi55So6YCUXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnVzZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnR5cGUgPT0gMlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBweCAxMHB4IDBweFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNvdXJjZURldmljZXMuenptYykpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnsbvliKtcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNvdXJjZURldmljZXMuenpsYikpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5p2l5rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNvdXJjZURldmljZXMuenpseSB8fCBcIi9cIikpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueUqOmAlFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc291cmNlRGV2aWNlcy56enl0KSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtfdm0uX3YoXCLmlL7lsITmupDmtLvliqjnp43nsbtcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5bCE57q/6KOF572u5rS75Yqo56eN57G7XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pS+5bCE5rqQ5L+h5oGvXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pS+5bCE5rqQ6KOF572u5L+h5oGvXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBUUNBWUFBQUFtbEU0NkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZ6U1VSQlZDaVJsWkMvUzF0UkZNYy81OTczRXJWMlVHdzYyTWxWaXB1aEVBamlLN2dVdWpvNE9IVjFFNW9FRkVrRi9SdmNPN1piV3dLQ3FKc1UvUU5jYXltYVFVbEkzcjN2ZEdnU25xOHYwSDZuZTM1OHp2bWVLK1Rvelk1T2RXUFhBTmxvTllNWGVUMUJOdkc2NXRhN3NUOEVtUWU2ZWRBamNLWFJXN1RlSGltVXh6V25KUUJSTGQ0SDJSN0dLWFZVN1lJeHZ0enAyK096QTdrZkZzeUEzOHlCL2xSc3Y2VEs1OG5RdDZPNk8xK3QrM2NwY0x3c1lrWlA1WldvN2o2NkVmalZhZ2FsWVJEVjNFL2dpWHIxZVY3UzRMT281alI3bzFpeEpIK0RhYXMzTTZFdHRwcUJ6SVMyQ1B3QTlPdGU0YkxWREVTVWpYRWI1OXJPZjR2cWpyYnpBSE5BSERWNkwwbnNWZFpLR253UTlJTkNYNkNneUVlZ1lMcUY2MlRDcmFDbUFycVhCMDRyOGg1Z01IMGFpSDNBYzBGMmdObHhHd09VYXNaUkhJVHhVNStZNm1oY3p1ZjhsMFJQMlRxOWVidm1rckNZTFJyVUw4MmVYSHkvcXk2UGJKbTRWeWw5K2lKNndtM1cvei9vN2pkSFpuNlpBdWVid3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2FmZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFhZTE4ZWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2FmZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NhZmVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMWFlMThlZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMWFlMThlZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMWFlMThlZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMWFlMThlZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2FmZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFhZTE4ZWQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjFhZTE4ZWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3NhZmVEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zYWZlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zYWZlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2FmZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFhZTE4ZWQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9