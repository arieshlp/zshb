(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "waterEcology",
  data: function data() {
    return {
      searchObj: {},
      activeIndex: 0,
      obj: {
        pressure: 53.56,
        health: 42.14,
        service: 52.9,
        risk: 69
      }
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    console.log(this.searchObj);
  },
  methods: {
    changeRiver: function changeRiver(index) {
      this.activeIndex = index;

      if (index === 1) {
        this.obj = {};
      } else {
        this.obj = {
          pressure: 53.56,
          health: 42.14,
          service: 52.9,
          risk: 69
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "waterSource",
  data: function data() {
    return {
      searchObj: {},
      obj: {}
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    this.queryData();
  },
  methods: {
    queryData: function queryData() {
      var _this = this;

      var query = this.searchObj.parameter.indexOf('流域') > -1;
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["resourceStat"])({
        basin: query ? this.searchObj.parameter : '',
        div: query ? '' : this.searchObj.parameter
      }).then(function (res) {
        _this.obj = res.data;
      });
    },
    onDetail: function onDetail(flag) {
      if (flag === '水质净化厂') {
        this.$router.push({
          name: 'purPlant',
          query: {
            name: this.searchObj.parameter,
            total: this.obj.jhc
          }
        });
      } else if (flag === '水库') {
        this.$router.push({
          name: 'reservoir',
          query: {
            name: this.searchObj.parameter,
            total: this.obj.sk
          }
        });
      } else if (flag === '调水工程') {
        this.$router.push({
          name: 'waterProject'
        });
      } else if (flag === '水功能区划') {
        this.$router.push({
          name: 'waterFunctional',
          query: {
            name: this.searchObj.parameter,
            total: this.obj.gnq
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-no-border-wrapper" }, [
    _vm._m(0),
    _c("div", { staticClass: "ecology-title" }, [
      _c(
        "div",
        {
          class: _vm.activeIndex === 0 ? "active" : "",
          on: {
            click: function ($event) {
              return _vm.changeRiver(0)
            },
          },
        },
        [_vm._v("牛栏江")]
      ),
    ]),
    _c(
      "div",
      {
        staticClass: "content-wrapper",
        on: {
          click: function ($event) {
            return _vm.$router.push({ name: "basinWaterEco" })
          },
        },
      },
      [
        _vm._m(1),
        _c("div", { staticClass: "ecology-security" }, [
          _c("div", { staticClass: "ecology-box" }, [
            _vm._m(2),
            _c(
              "div",
              {
                staticStyle: {
                  color: "rgba(6, 194, 81, 1)",
                  "text-align": "right",
                },
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "20px", "font-weight": "bold" },
                  },
                  [_vm._v(_vm._s(_vm.obj.pressure || "-"))]
                ),
                _vm._v("分 "),
              ]
            ),
          ]),
          _c("div", { staticClass: "ecology-box" }, [
            _vm._m(3),
            _c(
              "div",
              {
                staticStyle: {
                  color: "rgba(6, 194, 81, 1)",
                  "text-align": "right",
                },
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "20px", "font-weight": "bold" },
                  },
                  [_vm._v(_vm._s(_vm.obj.health || "-"))]
                ),
                _vm._v("分 "),
              ]
            ),
          ]),
          _c("div", { staticClass: "ecology-box" }, [
            _vm._m(4),
            _c(
              "div",
              {
                staticStyle: {
                  color: "rgba(6, 194, 81, 1)",
                  "text-align": "right",
                },
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "20px", "font-weight": "bold" },
                  },
                  [_vm._v(_vm._s(_vm.obj.service || "-"))]
                ),
                _vm._v("分 "),
              ]
            ),
          ]),
          _c("div", { staticClass: "ecology-box" }, [
            _vm._m(5),
            _c(
              "div",
              {
                staticStyle: {
                  color: "rgba(6, 194, 81, 1)",
                  "text-align": "right",
                },
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "20px", "font-weight": "bold" },
                  },
                  [_vm._v(_vm._s(_vm.obj.risk || "-"))]
                ),
                _vm._v("分 "),
              ]
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-no-border-title" }, [
      _c("div", { staticClass: "name" }, [_vm._v("水生态")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name fs" }, [
      _vm._v(" 生态安全 "),
      _c("div", [_vm._v("55.4分")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ecology-name" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/more.png */ "./src/assets/more.png") } }),
      _vm._v("生态环境压力 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ecology-name" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/more.png */ "./src/assets/more.png") } }),
      _vm._v("生态系统健康 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ecology-name" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/more.png */ "./src/assets/more.png") } }),
      _vm._v("生态服务功能 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ecology-name" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/more.png */ "./src/assets/more.png") } }),
      _vm._v("生态风险 "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "card-no-border-wrapper",
      staticStyle: { "padding-bottom": "5px" },
    },
    [
      _vm._m(0),
      _c(
        "div",
        { staticClass: "source-wrapper", staticStyle: { "flex-wrap": "wrap" } },
        [
          _c(
            "div",
            {
              staticClass: "source-box",
              on: {
                click: function ($event) {
                  return _vm.onDetail("水质净化厂")
                },
              },
            },
            [
              _vm._m(1),
              _c("div", { staticStyle: { "padding-left": "20px" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "20px",
                      color: "rgba(18, 18, 54, 1)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.obj.jhc))]
                ),
                _vm._v("个 "),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "source-box",
              on: {
                click: function ($event) {
                  return _vm.onDetail("水库")
                },
              },
            },
            [
              _vm._m(2),
              _c("div", { staticStyle: { "padding-left": "20px" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "20px",
                      color: "rgba(18, 18, 54, 1)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.obj.sk))]
                ),
                _vm._v("个 "),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "source-box",
              on: {
                click: function ($event) {
                  return _vm.onDetail("调水工程")
                },
              },
            },
            [
              _vm._m(3),
              _c("div", { staticStyle: { "padding-left": "20px" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "20px",
                      color: "rgba(18, 18, 54, 1)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.obj.dsgc))]
                ),
                _vm._v("个 "),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "source-box",
              on: {
                click: function ($event) {
                  return _vm.onDetail("水功能区划")
                },
              },
            },
            [
              _vm._m(4),
              _c("div", { staticStyle: { "padding-left": "20px" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "20px",
                      color: "rgba(18, 18, 54, 1)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.obj.gnq))]
                ),
                _vm._v("个 "),
              ]),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-no-border-title" }, [
      _c("div", { staticClass: "name" }, [_vm._v("水资源")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "source-name" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/水质净化厂.png */ "./src/assets/waterHomePage/水质净化厂.png") },
      }),
      _vm._v("水质净化厂 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "source-name" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/水库.png */ "./src/assets/waterHomePage/水库.png") } }),
      _vm._v("水库 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "source-name" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/调水工程.png */ "./src/assets/waterHomePage/调水工程.png") },
      }),
      _vm._v("调水工程 "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "source-name" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/水功能区.png */ "./src/assets/waterHomePage/水功能区.png") },
      }),
      _vm._v("水功能区 "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-0da8f22e] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-0da8f22e] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-0da8f22e] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-0da8f22e] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.ecology-title[data-v-0da8f22e] {\n  margin: 10px 0 0;\n  display: flex;\n  align-items: center;\n  padding: 5px 8px;\n  border-radius: 10px;\n  background: #e9e9ff;\n  color: #4a4a52;\n  font-size: 14px;\n}\n.ecology-title div[data-v-0da8f22e] {\n  padding: 5px 20px;\n}\n.ecology-title .active[data-v-0da8f22e] {\n  border-radius: 10px;\n  background: white;\n  color: #6491ff;\n}\n.content-wrapper[data-v-0da8f22e] {\n  margin: 8px 0;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(255, 141, 26, 0.05) 0%, rgba(255, 141, 26, 0) 100%);\n  border: 1px solid #faead9;\n}\n.content-wrapper .name[data-v-0da8f22e] {\n  padding: 10px 18px 0;\n  color: #ff8d1a;\n  font-size: 18px;\n  font-family: alimamashuheiti;\n}\n.ecology-security[data-v-0da8f22e] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 7px;\n}\n.ecology-security .ecology-box[data-v-0da8f22e] {\n  width: 42%;\n  margin: 3px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid #e9e9ff;\n  color: #171c21;\n  font-size: 14px;\n}\n.ecology-security .ecology-box .ecology-name[data-v-0da8f22e] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 5px;\n}\n.ecology-security .ecology-box .ecology-name img[data-v-0da8f22e] {\n  width: 14px;\n  margin-right: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-3213e570] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-3213e570] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-3213e570] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-3213e570] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.source-wrapper[data-v-3213e570] {\n  display: flex;\n}\n.source-wrapper .source-box[data-v-3213e570] {\n  width: 26%;\n  margin: 3px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  background: #fafaff;\n  border: 1px solid #e9e9ff;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 13px;\n}\n.source-wrapper .source-box .source-name[data-v-3213e570] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 5px;\n}\n.source-wrapper .source-box .source-name img[data-v-3213e570] {\n  width: 14px;\n  margin-right: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2edd9dfa", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("429b2b87", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/more.png":
/*!*****************************!*\
  !*** ./src/assets/more.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFLSURBVFiF7ZdRasQgEEDH0pyrLnirCk0gvZUQ91wW7EfEaJyYyejmp52fhSXMe47GmQD89RBXHlbaSQCQ4MVH+EuGX7tm808AsGYebFcBpZ0EL74SICGzn8w8jE0CLPBFiUOBAF9Y4AsiqIDSbgwr7xfCP7Cz8YY+3Bu+5lzCIa4LKO3G7vBNolhYJkAqvfATCD8xFeS+CnkFaKW3Zh5GEP7BUtgxogC2PwcJFqWdNPNgmRJZFdIK0AQ6SZQC2/X6eomEhb+Gd0ggAvJGichqq0AlMTVSActChis2aVyUiKy2CuRwVuPaBNZh4h54wuJtQfvKIytrx+rzZ4GzgxR6e0vZzfd75OZngNhkmoaVHaMYSEhV4AYyGZVvAb/VngY2lhUCLddqNQ4WVhtK+82FB/NgVaCTiA37jsJJAkyJU/AlgUREQudPs//4BcZCytta1OcNAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/waterHomePage/水功能区.png":
/*!*******************************************!*\
  !*** ./src/assets/waterHomePage/水功能区.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARHSURBVFiFtZddbFRFFMd/d+5tl0jf2rSFgthCl4hAJAGMVqUaNNQ0xsTEkJiAQX3lgdBofCKaiFGfxAdDQiIkagQxUaot0YiAkBAxiqB8xFKgYItYYgSk2905x4ft3o/de+8ufszL7M7MPb8z55z53zsOZe3ztzTT0MIaoBehS5RGFUUE1BZ7EUXLehHw1wlIsHYc0UOiTn+9Ttv+1CZnMsxzwn/2f6AbHYc3Sv+jRhWxNcKn1mrFnGKt9q3b3PBmhQMHP9QBVVb9n/BQ9Aafe72hB8CUdp4KrzXsU3NV4Iiw6p0Nf24EcH7aqfXjQi4VbivhU4Yqx2xVuD+Wt2PTzLiyNg2uMTtPhFffeWTOpWWNAXqB5NDF5j743TjLqZJ7YuFiQQr0GqCrFu87lxqyy9zI2J33unSvrmNBl5sQvXS7otpl1NKYuCiU++xyw/x7TCQaC7pcABY+4Pkasbjb49F1mXS49eul0VTPm5Jd5vpa0dRWdGLBfV5EwBatqENFGR0SWtvdGuqh2JvEwgvlXjUANU3l/K773YgDi7s9RGB0yLLthRvJBW2jtWSSz2xQPFdGhJOHLVcuCCcOFvzQl7e7H667FS1ARfGS4cHYb+eVseEgdCgc31+geY6h5Q7jO9DSbmrLfWisIgLhl06SFix80OPYvjwazg0wo8Oltd34z8yY6zJzrhu781Jv0naeVDwAzXMMY8NSkQbR4Jkn1t/GyOlCIrwsAoFAVKvcsWFhcbfH6JDw/Zf5iAOXzhQQgWU99Rz5LBdEL8GuqSYYTbMDpWu+3dA8x/DDV3la2116ns+wZGWdDz86OOk/u/yxDG2dLk9umJ4aUWfP23n14bZy0eqXpnH5nPDFu7mKglqysp7WDgMK3w7kuHjG+vNt8zzasi6qcOjjm4kR9ZJ2Xgrd8f0FVIk1cHQwlxA9uHAqz7mf84l2SzaCY1iWo4eerufyOeHYvnwlPCQmrR0G1SJ05HQhYnxW1mVW1gOFAx/djI9AUtWrwqIVHotWFCV37KxFAYoyAAoz58UL0sjpArPnB1L9ze6JxIL2knL/49d5Hnkm4xtp7YiHxbUwHODArr9itCBBikuTo2eFvdtyCYja23svX6siRDZaPOHJX4csA1sn/hV8+EQ+VHhlxahgRHU8TQsu/WLZuvE63+2drE6cahdOFnh19VUfHqeyUyo+7rz/ysQnKvp4Te9vC0t7MrTNM7Rlo3keOVU8rgd33+T8ifKTEwsH9FNPRPuLDlSHi8CRPROx1Zy8gSQ44Jh+c/X3izvShCiueP4TOJBpaNpu1m/pzKlIX2oE7C3AbXCS0uA42rdplzPpX822vXhjQKyuiv1ySbmURp2IfsgmwmFw82BzcDUDePa16T1qi5GIg1em5B/CHe0rwaHsdgywc5PWXxm/tlaEXhXtEhtcz1PhoXdE+VED5xAO/df5Y8eWgc6Iuv0NEEGtegqrxbkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/waterHomePage/水库.png":
/*!*****************************************!*\
  !*** ./src/assets/waterHomePage/水库.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPmSURBVFiFtZfPbxtVEMe/s2s3OSCS1sUWl0SKBI3d9AeKBYfwByQQVaQV6YGqgaDcIKf43jstcEOIQhokKBRxi5IeOWBiETdVjd1aqtpTcUhax0hFovb2zXBYr72/14Qy0tNo93nfZ978en4El3y4Jn3ai8Z5FpomYIJZEiyAYoClPdipFfu/ZwGUUF0YeRFZff7v+MoPs9Sy88j+sHjTWILIR9ZzB+C3uE37zgfMiXDup9P9Fz0GLG4Z64BMuuGhO3QDejGMARa6nn87PgUAGgAsFp8sOeDy3+HhWiZfu2osAQBdqMiBvabRdMCjYttDaMLywjL+z4fx/lijZcz5waP06CCBGTh6UEOpzijVJfpbl+eeO2Scj5nZLj3Fb2ZIR3qQkBl05C7OjmgAgFJdUKoLrlSVExqUlELTMQImonZ8ZIAwM6R7wG45niAcTxAUA8t3VC+enKAPbrQkLH5vDek4Paw5QOWGoLwnKNUZYwc1CIBjh0y4Xb66zbhcUb7rWjoWCG8PO7zSEHx3T5nxbn9z82EXcO6IjhMJwsnDpiHzGQ3FHUZxRwKTMhaWLDPDegd+7T7j6j0V6FIlwPJt0+3vjuqYz5iGv39Ux6/bT73rt4fmSTwb/Ex795WG+MNdCWbpyxWFrV0BAIwnCQvH9MB+oXV7tnMyPdCNZ7nhU2IRNf9FWXW+H09SYLPSgjLUyvjv7zO+vatCd+ynN/8QFHdML2RTFNisYn41n7aV29kRrVPn39xliAAr1W6JhXXD4o4gmzLXyiYJhW2vJ32TMD3gLDtL3nnJfH/uZQ0rVQYL8GXFWe+vvEBYGNM7O7eE4eRYhsf84lfeY8yO+BthydyoOf9e2tQ3dgXjyeBG9WpKwy8PvInsnwOhaH8JgwPARo2dh5inDG2j9Ej2YUK4bPwuvidopwzd8SnVn50RhZr8+zL8PwzwyzfNDbd+tFJVuPUMQvFpkXFpUwWeBYEeYAGuVFU0IUIubQafHx4PuP/jbe0Klu/spyZM+aTIwc1KAAFAb64Zj5gl4T4L3Ho+o2NhLLw3WFKoCT7eVMg/kGC4AADVY4qRF8GpMLhi4PPfzI43niRHh3ODCzXxd7u44QAI+ZiIrCrBqTC49fzZrW7bzaYI2ZSGwrbp5o2at8/73aY6cAAkskpTa9LXbBlPgjywv4uHbT4ADgB/Dcf7tPU3qMlMudAFIvLDz91RcBHOYZZanWC+/qOxzkomHS6MyItAOIfDCXT9cc52NQOAn8/Ep5RwzrGDXuEhXvLunHIW3DTGJZlrcqC/Zcyx0LSS7vV8P3lhlRoIeRJZfdwX/xqL1LTz/gFiYtskYCd/RQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/waterHomePage/水质净化厂.png":
/*!********************************************!*\
  !*** ./src/assets/waterHomePage/水质净化厂.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAO7SURBVFiFrZfPbxNHFMe/b7zYiAuxlwNIxSlBpLRRCYhDD7mCSFonBVW0pVVJudBDVU7kjtSqF6pekPghJCQjOFScKqUJ/AFWS0pBVApUuC2H3pwEbsiOd97jsPZ6Z3fG3kRdabQ7++vzfnzfm11CYpOFbwoo7zoNlgqACYj2RRgQDQgDwhDuHod7keQ8fr9eA3NNRM9v2SlVGruzHueRAX/83XkQXeyd0J2XJWCcGW7OWYPBc1uP/vxDygD58/tFQCY3B7fAbHPu3At9t3BsYQoAVOS5AWc73DrPAucePDRksrlw5DwAkCxfyENvaZlwB4wzhNkGj0Uufu0/ym9V0PnZ/x/OA+EQxhv61WkFSGUgPHqZCaPdFajydOK6XTO2qBCCiheWmkvNHHlvh89EkdPP7/TVTCoqIWNCQdiHFa6dcBHuwQGo4ROg7fszpS1hmK+SecuSY1WeTvYv5N78KAFPv8+WYhXPm71utWGcKk9DlT9MGUDFMag9J52l6Uqx2lApCVvhURRGPrWmrZ+YlRPObIHPOOGREXtP9YGnWSrtKTt7vRo+nsGAz+2V5NKTLcybhXc3b98XiRJ0NyyVgrNdNGr4RGYDqDRuPO/slqxDA9zwztj+VmY4ACj/IJQ/7hBzrLlxG16WVS43tB/ychn6+U+ACKj4DnIjpwyorlfBq49A/jhU6aBFA6ajwm0IB6Dg168FnZ6dfaEJz+X2fgYqvQv9rApefWiEnfxD4JXf046xhnAQGeBtpAPmRj4BDY2B/7kNvfYIQb0apS03Ogtv9Ax49SHaf13PBGcOQEHtrJgdL503Gnob3uFvjZDzi8fQ9SpU8QAEAm/0jHE9eHoN7SeXTTHqIDKAOTz2BsFFNFRxLC200jjUez86hahXlpxw4SAayp5jUzT671sbqgIA0I37Tjhzb67ScHsf2IgR7SdXevCYt8kBESgIrw3+AGUE9Sp0/WYmeHv5Ug/u8B7CAGTNA7gG4Zn+y2Z4HDy7Ab3yB7zRL6F2HDLAwdOr0I0l6MZv4XMWj004QKCaR9DzInrG1gFtpSirD7C+shTVOiDgxn1zBewKzSK8LhwAhGieZGGq0M5va2b6zmezOmz3uuCcgANAqdgqKHp/scXCc5uFG+nqKzgTDsEcfYz16Nesde+DRQhP9lu57BqJwx2hT8KBu/5Xrd6vGQAUjv0yJaznXCvXYLhjWDzvwkMhJjZZPplv/tuYJXBFWE8A7IcLlb06ejCL951SI1BNiOZfNJs3951DK857Dce4VKn/lbnfAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/waterHomePage/调水工程.png":
/*!*******************************************!*\
  !*** ./src/assets/waterHomePage/调水工程.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQISURBVFiFxZdJb1tVFIC/67hJnIS0aSUqIYKUsahlpi4k2UGaCQeJP9Au2GWeXAkQELoiMyV7pHaBkGCBkziO2GIX+gfaDK2gChKBxDgDdpyU+rCI7Tw/32fHoRLHupLfO+fd74zXfgqTVK90F5Q9+/QVUeJCaBCRMyJCcpH4Din3DXpS7hEUJBCDOcfZ0pt31fC+kaeMF87I9SFRjCWudZvnBjfYJ559LO6Hz305nubAxeh1H0LLseCWYBM8ac/Cavl0K4AtEXl2ODnC0cNFkFis5ZlfO4YA1HkZzi+K2va08CwpR7e50d5Sf7CK/rEX2oqjeVf/D7gghPMeXbGJElcucAxwp70Sp70yNeXZ4ImPQCwWc9njo3akehPXO+0VdDoauXSiCoA7+w+4s/+AG38vZIcbAgMa1OuRzyQdrgd3FL5Np6PRfHSkyI2dBaa2fVnhiaVeCw9LJrgzr4IOx1s47ZUZwWaZ2vYxuenNWlL1avhT0SkR4auS93MGm2Vyy8t4yKvPqgg2c70TDXAxr+I/wwHeLKixLKkgqJd3PhGzV8a0dToas9ZdJz9Fl5nYnCewu5QWtbFR1UvbHwsmD3Wd3FXUBAjdxU1ZwCtMbHlByAoXEexpURsMOh2NdBVdBmA6/AMCVK0N0FPSTG9J8yF0b4WprXkEoa6glu/O9iV146E5xoIzloGpFzc/Ep3SCDdLYtTeyK9O1rO/tI26whqt/Xu/jePfXdScDaBeCH0o+sMDuoou012sdyIROYIl+PbuEmPBWQ38sOnVhdAHooMby9JT3ESPIeXZ5PbuMmN/zRKwiNq4tz1dmWogIvy8d5+pbR+9T7WACH2lrZbg8dAsIlDvqMUfuZcRLpLigEmJcOlEFV+f7kgCvtj2MRlvNhEYONkGwMSml9vxjh8qc1HvOAeA+3Q7o0EPn69/r4WLCOr5jWuiU5rhRpncmmdi05scrbrCGgZPuah31Grt2x+O8GP4nnYS1Ln1a6LzTEToLWk+SLtVraPLEE+3TvyRRUbWPQdwi19JVfunWzuGxtVX2kq/Rd11EogsMrIxYxl1igM1fwxZjKHxgAJE6D/Zlqy7HrzESNCDP2zo/gx7A6jqtcENwfTf3/Awmp/QwVPvMFjmOgTvLjEa9OAPL6U9nwkOBFXV2oBHRN61ito6K8JQWTuByCL+yGJqlx8NjoIZOzBndoAjwEWE0aAnfYSPCAcQmLOpnUe3zAaZ+8F873hwgGj+45u2+zXTe4K4yRmuOTVzgCtwc+Hb/eSrWflqtw+RlicdtQ6OYiH6yjeHr2YAq+XTrcRi7ieacovIE/D4daqcl+H80C9rVwVcEpMGIXbmePCD90IgqCAgMBf9fesWbb49I+9fzJa5861APHgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/国.png":
/*!**************************!*\
  !*** ./src/assets/国.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASbSURBVFiFxZlLaB5VFMd/52YiuGiJ2yQm6wp5tImVqKEBF13UCCJKwSbopgEVTHWjC0HcSRfJosFGUetbslKDIlR8EGzVpIYkvlZVIo0vhEhWUnOPi5k73533fJ8pHhi+uTP3nsf/f86dM/MJNeX4W9r5T8C4gVER+jD0GKFDBERATPSbPg/H2yJsirAhwtJ17SyeuV226tiVqgl3v6kjwLQI96UdMPnO1BqrsmAMs/NjcrElB4fmtb3remZEeLhZ43UDiWSOfZx6fliu1nbwzhd1AMOrIvTXcqZFx92Bsi7tTM6Pylqlg0df0FED74thX5UzTVNccg/YaROOPTcmS4UOHj2rAwhLIpFze2RcBEwNXcCOBIz6SMYODs1r+w27rIjQX4nMf6G0ai6ss59hl5Nxqu6/yoxa+lXBKlgbHXlj2zhUQa13aOo8PS6a68bQzw4zCQSPzOiIMVzYUySaoTjnnjHcOj8mFw2AKtOlyLSCRGpts4zYXaYB5LZntdMEXKlCYqAreR2vkglzJ54L3loac/21P/xZjaJaugIM42ojsg3gzlPj0+N5O2brcv+7nq0Cu2IYD9Qyqg4B6+UAKQWRvL7SQMQh5RDMXM+5f+9N4XXr2fLtCmCcXWU0sLv0icl6byWpwMkry1laTBOF4xxUjRTmoGgbzvYFVukxeVCblIJIXDpMHG4OxW9/h+/+yOqpsNsTqKXDmizFYhsF4FOsGhbMxDBNyVMfhbQ6sbZBadpuXHyGjkCVwsLwHfcVr/4Md5zJUvzhFKz/Ak9+UEy3H2iR3di2hUCLKE1XVpqanEDCCeHeFqOSQiZXT9quNw5iqAsUGo/eOPKiQNLGi/LLp7jIbjQ/SXFONDYVuRsfvBEO9mQLQ4ETh5LXNn6Fb36L9PqBltklj+IakasNx4Pd8MAtZGSgMzx8eePrMDcLKS7JxSzFqcoybkEq8pc+h5cvJIvhk0dh7Qo8/k44HuxuOCZNUuweFqaqCXAPcV9x0UPfBaAWJm6G03fBiaGkbj/QqmbEFlJcVFkexbm0uGUK574AFCYPh6i2RLGBwGrxZhlDXTe5U8bPfZlEK0Fxnt3U2CQQLEHRpqr45BEY6k065dAZ7IbZe5L3BrpgbQteW85BsARFK2wHicjKYPcUX/oJDvWCaMMRVVjd9BxTb+vxmtaMg2WpJWwGZbt+EcUrP4ZOtvKKEDNRJ7WUjfJHHeRSXKQwbjDKGKmi2FursBSUVmUOxavPsCdSJ7VEWExSnNf+RGMnZz8OfzM9ILHS/PvR9QdHIp/KUsuAKAvvnZSteo86geXLoeK58+W5VvXSP9gd/lZ1UQKzANI7pfp/fUUoeVeeO/+QPAJuoy6jONX+VDYUNRnxO6WEXcP6XwGnXErV7mZc+1MVSKLBqNgdcuzuAJOXphrfCgOrBa+YTSCRXlu1FeUFosKOEY59Op38Rhiozb5ilrU/1yQQYV3amPzssewHzPrdzLULZO7vDk75tCYdVL4HDtRComY+1QpEWJA2Zr96ovwjeqBwHMvbKhwo66xz35XrB7KNsimwobBkDYurT9f7G+JfVBDRdoHRQ+4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/市.png":
/*!**************************!*\
  !*** ./src/assets/市.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAR2SURBVFiFtZlNaB1VFMd/52YiuGipCy28aPalyUul7aLWh9lIoDULN6WroAsr+EUiXehGBBXsKlkY2ihCcWFK0E2D2IUWNWBFrDUvfi0lmviBi0hWUnOPi5l5786dOx/vJR24zNzMPV///znn3jcRal5nF7XxX8SkgZYIoxiGjXBABERATHL3n+P5lgjrIqyJsHLXIMtvPSybdexK1YLH39cTwLQIZ3wHTNiZWnNVloxhbmFcbvTl4NEFHRy6m1kRnu3VeN1Akmuefcy8fUxu13bwsXd1DMN7IjRrOdOn4+lAacsgUwstWa10cOIdbRn4SAz7qpzpmeKSd8D2gHD64risFDo4cUnHEFZEEuf2yLgImBq6gG2JaLlIdhw8uqCD9+zwjQjNSmR2Q2nVWmizn2NpTnZSdf9tZtXSVAWrYG0yQnPbHaqg1hnqPfvzorXpHJpsM5tB8JFZPWEMX+4pEr1QHHhnDA8tjMsNA6DKdCkyNZA4fG88ilDslRG7wzSAnLygDROx0W8+meT5jQkYOQivfAo//LU3uamWIYNhslaOFKCYRr6Y1N2ZkQAyCWq95qYYJo1aWiHYe03u9ias/RGjePi+8NoQpaWB7NCK7A6jYpJykaSuLVgH6ieOw5GhbGMS/9m5Xn8Uvv/TabbugriV8OPf8OHPsS3XLpLYNiAwGlll2AQWdRqQhbEGjA3R0zVysHrNBxV2EYbl+GuqpZt8D+3l46dg7Xd4+druW1W6WUSqjvc+1Cb5s3UUWE+hjZWlPCtx/nhIhOcFdju2LUTap4JQIKmHVsOBpMiUUJqbR9YWI5PuAKnAkyfhwQeyeZQpAKDZgAunuoi6xQRxj7zSLmfEDSRLcSAa6yhQhSP3U3k1G+XvOylQZpcQxUWUpgo0vr2wBN/9lk/u68/D6gacv5pP/rEGvHkqUeODUpJKeYq9wjCOgGoXgWBgLkIeMmq7QVrXVgHFYmLxPMVeNBmKUxtpIZBVmL7LUejK0g20qsKtFFFcVFkpguqg5MqmYkqOEXXeB2ULUisKIeHDbnyKtaDXhSj2ZDsUh3qsNzeZIilBMd0b3RwM9bpCil1ZvCIpQdEKW1Fh1w8pCFHsyhZRbJ3WU5QeodQS1qOyrp+jOLVRUAi+A1+cj9sRdPvn6kYJxb5dZa18q+uHYrrrbv0a30W6jl7+KllbA0WFlSiIRMH84idw6XrXqUKKE8efWyR8ekkPGBWpJcJyFGoJoXlukw/NXYorjNsApRm7ytLVc7JZb6vzFRYEcvMX+Ha9fpWWNWmBOUjbTB8KQmvPXQ5QWsCIv416uuavPRN/lqumOFXWJxJlKNqQXUP7n4iZRFv904wtQcJvEabK8eJAtoGpm093vxVGVhOZXSDhy9Y6rXiBqLBthNOfTWe/EUaa9rkqheYOBiK0ZYCpz1/Mf8Csf5q5c4HM/3uAGZfWrIPKT8ChWkjUzKdagQhLMsDc1y+Vf0SPFM5iuaLCobKTde4nZm+BbKGsC6wprFjD8q1X6/0b4n/7Uz4dM4TExQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/省.png":
/*!**************************!*\
  !*** ./src/assets/省.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUVSURBVFiFxZlNbBVVFMd/53Zq4gJSEzRAbYnLFvsepTWGaoWNskASDBUJHzXpAhI1sbhyJSzYuCDtwioVWYAGsEsJiYnxs1EitIW2JO60lvDhDtOVwd7r4t773sy8eTP3FYg3mczcmXvP+d///5w7580TAtve82b9vxE7FfSL0IWiXQktIiACotw5fW3790RYFGFehMnHmrn40YtyO8SvFA147ZzZAgyLsCcNQGWDCeobw4RSjI5vk8srAtgzbppbH2dEhLcbdR66ENfGWMWRT3vlfjDAV0+bMoqzIpSCwKwQuD8wzEkzg+P9MlsIcPsp06/gkihWFYFpWOKcZ8BSk7Djk20yWRfg9pOmjDAp4sA9JOcioAJsAUsS0R9nsgKwZ9w0P7HMlAilQmYeRNKisTDHanp9TFZCdfV9RoymZAxoA1q7I6uvq4cxYHTsMKnrdL/eWN+HEkuMJBjcOmK2KMUvD5WJRiTOeKYUfePb5LICMIbhXGYCmdj4JHSuyZ7bqCJ6mWEAeeFDs15F3FppPCl33bUWjr8CN/6Co989nNg0mlaFYmdQjKRYvDQE+8qxlcd2gzgzA53w5QB0rGlcEVHsVEbTn0V7noH9my2Qyn139i0+3iM/uhV2d9RKmpWQFV/L9Cu9TFcW+noGutbBgR7r9PPpmEFTC84YuDAHH3xrn73eCQMdxSzGwHYpbWhvZIs42OvATSUNeoCQTIQ9z8LGp1IgO4NDqV0ZTUu9zIpPKq+HE7ug3Apnr8LZK7UGLYXVecdfhr0l+3z+bhJkx5r8jHa2WyJjAO12RHFbt+tr5W5rGNltjZ/5Fc5ciWWetplckRjYtwn2ddv++Vm4MGvHepBvdMUWleG34luD9BwzJnRL6G6D2VvZW8Tgc1X5AebuwLnrcONucmzNa7TAb6R1lYnEIF19A9jAgmuLVOs4DZva4M3nbbfc6oDdhi9mYP5O1VaFGeUuda2fGr9ufFLimPOKQTdh8wZ7HuqzQ7rbqGmztyxzpbVQWocvo+zZFgKcn82QNMuvW0hkdMaEVH/sAGxurwWUbuXWKpNZbf5OLNsD/JIpcSwxvMSfTULPBisxyoId6oN3J+C6j8mCePr6kE0gXUfSmr6yWGslTq1Ga5j6A6YXqg69vOWnrVMvoX8vQwwczpZrRmdLmsWqlnoSFxlwMvl4DG5u31M5kqZxRNokJc2iPW3Qx9Hpn+HaTffIZywkZMadT+yy6zKOmXQoZfVVIklyWEwb9ACnFxxAb7DefuZtmZjEASxq4V5UNybyDLj28f4GJaZA4jQOYdFKXJBZKmXAM3jqJ5hZrCaDKDsuS/LRgQCJ034N88kkSbMISYmdAQ9wagFm/kxKmvsVIUTimF8Dk1EjMVG5dgAPveSMSewUC4F030vsC4yi0BLhYlLinMxSMQPxymVmoSqrz1gva/x+d1uygtEZkib8Gia+OiS3g151aYNXf4feZ+Dk98kNPE/i7ja4fjND4josCowCyIbDxvxfXxFyfiuPffOWvAN+o86TOFX+hAR30FYVq5QSfhVzf0cc8TEbJnFWHVdnIZUaMvS1mfS7BAxOH65+K4y0cXMegIn0XF0HeN5CjLCkhB0/DCe/EUaVjbPIoHqECxHmpInBH9+r/YAZXs08uoWM/dPCkbisSYCG34COICYaqOMCJJ6QJkavvJ//ET0ysBfNBSN05FXW8Z+YK1jIPQyLAvMGJrXi4rVjYX9D/Af80JqnOE51LAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterEcology.vue":
/*!**********************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterEcology.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true& */ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true&");
/* harmony import */ var _waterEcology_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterEcology.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& */ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _waterEcology_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0da8f22e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/water/waterEcology.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEcology.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=style&index=0&id=0da8f22e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_style_index_0_id_0da8f22e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterEcology.vue?vue&type=template&id=0da8f22e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterEcology_vue_vue_type_template_id_0da8f22e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/searchComponents/components/water/waterSource.vue":
/*!*********************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterSource.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterSource.vue?vue&type=template&id=3213e570&scoped=true& */ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true&");
/* harmony import */ var _waterSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterSource.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& */ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _waterSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3213e570",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/water/waterSource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterSource.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=style&index=0&id=3213e570&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_style_index_0_id_3213e570_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterSource.vue?vue&type=template&id=3213e570&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterSource.vue?vue&type=template&id=3213e570&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterSource_vue_vue_type_template_id_3213e570_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlckVjb2xvZ3kudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyRWNvbG9neS52dWU/M2M2MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlLnZ1ZT9mZjNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJFY29sb2d5LnZ1ZT80ZTExIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJTb3VyY2UudnVlPzZmODciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlckVjb2xvZ3kudnVlPzVmMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclNvdXJjZS52dWU/MjgyNCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL21vcmUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTlip/og73ljLoucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTlupMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTotKjlh4DljJbljoIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2F0ZXJIb21lUGFnZS/osIPmsLTlt6XnqIsucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5Zu9LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+W4gi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/nnIEucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJFY29sb2d5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyRWNvbG9neS52dWU/ZGI0MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyRWNvbG9neS52dWU/ODhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyRWNvbG9neS52dWU/YmU1OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlLnZ1ZT8xZmQzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJTb3VyY2UudnVlPzY0ZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclNvdXJjZS52dWU/YzMxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBLHNCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtB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QUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2VCxDQUFnQiw2VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqVjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2hHO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTRULENBQWdCLDRVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhWO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLW5vLWJvcmRlci13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItdGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7msLTnlJ/mgIE8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImVjb2xvZ3ktdGl0bGVcIj5cclxuICAgICAgPGRpdiA6Y2xhc3M9XCJhY3RpdmVJbmRleD09PTA/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VSaXZlcigwKVwiPueJm+agj+axnzwvZGl2PlxyXG48IS0tICAgICAgPGRpdiA6Y2xhc3M9XCJhY3RpdmVJbmRleD09PTE/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VSaXZlcigxKVwiPuaZrua4oeayszwvZGl2Pi0tPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ2Jhc2luV2F0ZXJFY28nfSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgZnNcIj5cclxuICAgICAgICDnlJ/mgIHlronlhahcclxuICAgICAgICA8ZGl2PjU1LjTliIY8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlY29sb2d5LXNlY3VyaXR5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVjb2xvZ3ktYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNvbG9neS1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvbW9yZS5wbmdcIi8+55Sf5oCB546v5aKD5Y6L5YqbXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmdiYSg2LCAxOTQsIDgxLCAxKTt0ZXh0LWFsaWduOiByaWdodFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDtmb250LXdlaWdodDogYm9sZFwiPnt7b2JqLnByZXNzdXJlfHwnLSd9fTwvc3Bhbj7liIZcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlY29sb2d5LWJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVjb2xvZ3ktbmFtZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL21vcmUucG5nXCIvPueUn+aAgeezu+e7n+WBpeW6t1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6IHJnYmEoNiwgMTk0LCA4MSwgMSk7dGV4dC1hbGlnbjogcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDIwcHg7Zm9udC13ZWlnaHQ6IGJvbGRcIj57e29iai5oZWFsdGh8fCctJ319PC9zcGFuPuWIhlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVjb2xvZ3ktYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNvbG9neS1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvbW9yZS5wbmdcIi8+55Sf5oCB5pyN5Yqh5Yqf6IO9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmdiYSg2LCAxOTQsIDgxLCAxKTt0ZXh0LWFsaWduOiByaWdodFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDtmb250LXdlaWdodDogYm9sZFwiPnt7b2JqLnNlcnZpY2V8fCctJ319PC9zcGFuPuWIhlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVjb2xvZ3ktYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNvbG9neS1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvbW9yZS5wbmdcIi8+55Sf5oCB6aOO6ZmpXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmdiYSg2LCAxOTQsIDgxLCAxKTt0ZXh0LWFsaWduOiByaWdodFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDtmb250LXdlaWdodDogYm9sZFwiPnt7b2JqLnJpc2t8fCctJ319PC9zcGFuPuWIhlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIndhdGVyRWNvbG9neVwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgIG9iajoge1xyXG4gICAgICAgICAgcHJlc3N1cmU6IDUzLjU2LFxyXG4gICAgICAgICAgaGVhbHRoOiA0Mi4xNCxcclxuICAgICAgICAgIHNlcnZpY2U6IDUyLjksXHJcbiAgICAgICAgICByaXNrOiA2OSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hPYmopXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIGNoYW5nZVJpdmVyKGluZGV4KXtcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgaWYoaW5kZXg9PT0xKXtcclxuICAgICAgICAgIHRoaXMub2JqID0ge31cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMub2JqID0ge1xyXG4gICAgICAgICAgICBwcmVzc3VyZTogNTMuNTYsXHJcbiAgICAgICAgICAgIGhlYWx0aDogNDIuMTQsXHJcbiAgICAgICAgICAgIHNlcnZpY2U6IDUyLjksXHJcbiAgICAgICAgICAgIHJpc2s6IDY5LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NhcmROb0JvcmRlci5zY3NzXCI7XHJcbiAgLmVjb2xvZ3ktdGl0bGUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjMzLCAyNTUsIDEpO1xyXG4gICAgY29sb3I6IHJnYmEoNzQsIDc0LCA4MiwgMSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgZGl2e1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgY29sb3I6IHJnYmEoMTAwLCAxNDUsIDI1NSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMTQxLCAyNiwgMCkgMTAwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwgMjM0LCAyMTcsIDEpO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxOHB4IDA7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lY29sb2d5LXNlY3VyaXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcblxyXG4gICAgLmVjb2xvZ3ktYm94IHtcclxuICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMzLCAyMzMsIDI1NSwgMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDIzLCAyOCwgMzMsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAuZWNvbG9neS1uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiA1cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItdGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj7msLTotYTmupA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNvdXJjZS13cmFwcGVyXCIgc3R5bGU9XCJmbGV4LXdyYXA6IHdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvdXJjZS1ib3hcIiBAY2xpY2s9XCJvbkRldGFpbCgn5rC06LSo5YeA5YyW5Y6CJylcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic291cmNlLW5hbWVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTotKjlh4DljJbljoIucG5nXCIvPuawtOi0qOWHgOWMluWOglxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4O2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpXCI+e3tvYmouamhjfX08L3NwYW4+5LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic291cmNlLWJveFwiIEBjbGljaz1cIm9uRGV0YWlsKCfmsLTlupMnKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb3VyY2UtbmFtZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy93YXRlckhvbWVQYWdlL+awtOW6ky5wbmdcIi8+5rC05bqTXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDIwcHg7Y29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSlcIj57e29iai5za319PC9zcGFuPuS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvdXJjZS1ib3hcIiBAY2xpY2s9XCJvbkRldGFpbCgn6LCD5rC05bel56iLJylcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic291cmNlLW5hbWVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/osIPmsLTlt6XnqIsucG5nXCIvPuiwg+awtOW3peeoi1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4O2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpXCI+e3tvYmouZHNnY319PC9zcGFuPuS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvdXJjZS1ib3hcIiAgQGNsaWNrPVwib25EZXRhaWwoJ+awtOWKn+iDveWMuuWIkicpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNvdXJjZS1uYW1lXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rC05Yqf6IO95Yy6LnBuZ1wiLz7msLTlip/og73ljLpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1sZWZ0OiAyMHB4XCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDtjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKVwiPnt7b2JqLmducX19PC9zcGFuPuS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3Jlc291cmNlU3RhdH0gZnJvbSAnQC9hcGkvd2F0ZXJfZW52aXInO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIndhdGVyU291cmNlXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaE9iajoge30sXHJcbiAgICAgICAgb2JqOiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHF1ZXJ5RGF0YSgpIHtcclxuICAgICAgICBsZXQgcXVlcnkgPSB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIuaW5kZXhPZign5rWB5Z+fJykgPiAtMVxyXG4gICAgICAgIHJlc291cmNlU3RhdCh7XHJcbiAgICAgICAgICBiYXNpbjogcXVlcnkgPyB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIgOiAnJyxcclxuICAgICAgICAgIGRpdjogcXVlcnkgPyAnJyA6IHRoaXMuc2VhcmNoT2JqLnBhcmFtZXRlcixcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9iaiA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRGV0YWlsKGZsYWcpIHtcclxuICAgICAgICBpZiAoZmxhZyA9PT0gJ+awtOi0qOWHgOWMluWOgicpIHtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogJ3B1clBsYW50JyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIsXHJcbiAgICAgICAgICAgICAgdG90YWw6IHRoaXMub2JqLmpoY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ+awtOW6kycpIHtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc2Vydm9pcicsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyLFxyXG4gICAgICAgICAgICAgIHRvdGFsOiB0aGlzLm9iai5za1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ+iwg+awtOW3peeoiycpIHtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogJ3dhdGVyUHJvamVjdCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChmbGFnID09PSAn5rC05Yqf6IO95Yy65YiSJykge1xyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnd2F0ZXJGdW5jdGlvbmFsJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIsXHJcbiAgICAgICAgICAgICAgdG90YWw6IHRoaXMub2JqLmducVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NhcmROb0JvcmRlci5zY3NzXCI7XHJcblxyXG4gIC5zb3VyY2Utd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5zb3VyY2UtYm94IHtcclxuICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1NSwgMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMzLCAyMzMsIDI1NSwgMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgIC5zb3VyY2UtbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1uby1ib3JkZXItd3JhcHBlclwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlY29sb2d5LXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUluZGV4ID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlUml2ZXIoMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIueJm+agj+axn1wiKV1cbiAgICAgICksXG4gICAgXSksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LXdyYXBwZXJcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goeyBuYW1lOiBcImJhc2luV2F0ZXJFY29cIiB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWNvbG9neS1zZWN1cml0eVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVjb2xvZ3ktYm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg2LCAxOTQsIDgxLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIyMHB4XCIsIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLnByZXNzdXJlIHx8IFwiLVwiKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLliIYgXCIpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWNvbG9neS1ib3hcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDYsIDE5NCwgODEsIDEpXCIsXG4gICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIiwgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmouaGVhbHRoIHx8IFwiLVwiKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLliIYgXCIpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWNvbG9neS1ib3hcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDYsIDE5NCwgODEsIDEpXCIsXG4gICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIiwgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5vYmouc2VydmljZSB8fCBcIi1cIikpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5YiGIFwiKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVjb2xvZ3ktYm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg2LCAxOTQsIDgxLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIyMHB4XCIsIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLnJpc2sgfHwgXCItXCIpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWIhiBcIiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLW5vLWJvcmRlci10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoXCLmsLTnlJ/mgIFcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lIGZzXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiIOeUn+aAgeWuieWFqCBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiNTUuNOWIhlwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVjb2xvZ3ktbmFtZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvbW9yZS5wbmdcIikgfSB9KSxcbiAgICAgIF92bS5fdihcIueUn+aAgeeOr+Wig+WOi+WKmyBcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZWNvbG9neS1uYW1lXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9tb3JlLnBuZ1wiKSB9IH0pLFxuICAgICAgX3ZtLl92KFwi55Sf5oCB57O757uf5YGl5bq3IFwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlY29sb2d5LW5hbWVcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL21vcmUucG5nXCIpIH0gfSksXG4gICAgICBfdm0uX3YoXCLnlJ/mgIHmnI3liqHlip/og70gXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVjb2xvZ3ktbmFtZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvbW9yZS5wbmdcIikgfSB9KSxcbiAgICAgIF92bS5fdihcIueUn+aAgemjjumZqSBcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjYXJkLW5vLWJvcmRlci13cmFwcGVyXCIsXG4gICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctYm90dG9tXCI6IFwiNXB4XCIgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNvdXJjZS13cmFwcGVyXCIsIHN0YXRpY1N0eWxlOiB7IFwiZmxleC13cmFwXCI6IFwid3JhcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic291cmNlLWJveFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlsKFwi5rC06LSo5YeA5YyW5Y6CXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLmpoYykpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvdXJjZS1ib3hcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRldGFpbChcIuawtOW6k1wiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLWxlZnRcIjogXCIyMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm9iai5zaykpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvdXJjZS1ib3hcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRldGFpbChcIuiwg+awtOW3peeoi1wiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLWxlZnRcIjogXCIyMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm9iai5kc2djKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic291cmNlLWJveFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlsKFwi5rC05Yqf6IO95Yy65YiSXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLmducSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihcIuawtOi1hOa6kFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvdXJjZS1uYW1lXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy93YXRlckhvbWVQYWdlL+awtOi0qOWHgOWMluWOgi5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwi5rC06LSo5YeA5YyW5Y6CIFwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb3VyY2UtbmFtZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTlupMucG5nXCIpIH0gfSksXG4gICAgICBfdm0uX3YoXCLmsLTlupMgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvdXJjZS1uYW1lXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy93YXRlckhvbWVQYWdlL+iwg+awtOW3peeoiy5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwi6LCD5rC05bel56iLIFwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb3VyY2UtbmFtZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/msLTlip/og73ljLoucG5nXCIpIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIuawtOWKn+iDveWMuiBcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLW5vLWJvcmRlci13cmFwcGVyW2RhdGEtdi0wZGE4ZjIyZV0ge1xcbiAgbWFyZ2luOiA0cHggMTdweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGVbZGF0YS12LTBkYThmMjJlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlIC5uYW1lW2RhdGEtdi0wZGE4ZjIyZV0ge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAudGltZVtkYXRhLXYtMGRhOGYyMmVdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5lY29sb2d5LXRpdGxlW2RhdGEtdi0wZGE4ZjIyZV0ge1xcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWZmO1xcbiAgY29sb3I6ICM0YTRhNTI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5lY29sb2d5LXRpdGxlIGRpdltkYXRhLXYtMGRhOGYyMmVdIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG4uZWNvbG9neS10aXRsZSAuYWN0aXZlW2RhdGEtdi0wZGE4ZjIyZV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6ICM2NDkxZmY7XFxufVxcbi5jb250ZW50LXdyYXBwZXJbZGF0YS12LTBkYThmMjJlXSB7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDE0MSwgMjYsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhZWFkOTtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAubmFtZVtkYXRhLXYtMGRhOGYyMmVdIHtcXG4gIHBhZGRpbmc6IDEwcHggMThweCAwO1xcbiAgY29sb3I6ICNmZjhkMWE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogYWxpbWFtYXNodWhlaXRpO1xcbn1cXG4uZWNvbG9neS1zZWN1cml0eVtkYXRhLXYtMGRhOGYyMmVdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxufVxcbi5lY29sb2d5LXNlY3VyaXR5IC5lY29sb2d5LWJveFtkYXRhLXYtMGRhOGYyMmVdIHtcXG4gIHdpZHRoOiA0MiU7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWZmO1xcbiAgY29sb3I6ICMxNzFjMjE7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5lY29sb2d5LXNlY3VyaXR5IC5lY29sb2d5LWJveCAuZWNvbG9neS1uYW1lW2RhdGEtdi0wZGE4ZjIyZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uZWNvbG9neS1zZWN1cml0eSAuZWNvbG9neS1ib3ggLmVjb2xvZ3ktbmFtZSBpbWdbZGF0YS12LTBkYThmMjJlXSB7XFxuICB3aWR0aDogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLW5vLWJvcmRlci13cmFwcGVyW2RhdGEtdi0zMjEzZTU3MF0ge1xcbiAgbWFyZ2luOiA0cHggMTdweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGVbZGF0YS12LTMyMTNlNTcwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlIC5uYW1lW2RhdGEtdi0zMjEzZTU3MF0ge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAudGltZVtkYXRhLXYtMzIxM2U1NzBdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zb3VyY2Utd3JhcHBlcltkYXRhLXYtMzIxM2U1NzBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zb3VyY2Utd3JhcHBlciAuc291cmNlLWJveFtkYXRhLXYtMzIxM2U1NzBdIHtcXG4gIHdpZHRoOiAyNiU7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZmY7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uc291cmNlLXdyYXBwZXIgLnNvdXJjZS1ib3ggLnNvdXJjZS1uYW1lW2RhdGEtdi0zMjEzZTU3MF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uc291cmNlLXdyYXBwZXIgLnNvdXJjZS1ib3ggLnNvdXJjZS1uYW1lIGltZ1tkYXRhLXYtMzIxM2U1NzBdIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFY29sb2d5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBkYThmMjJlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmVkZDlkZmFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlckVjb2xvZ3kudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGRhOGYyMmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlckVjb2xvZ3kudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGRhOGYyMmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJTb3VyY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzIxM2U1NzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MjliMmI4N1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyU291cmNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyMTNlNTcwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJTb3VyY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzIxM2U1NzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRkxTVVJCVkZpRjdaZFJhc1FnRUVESDBweXJMbmlyQ2swZ3ZaVVE5MXdXN0VmRWFKeVl5ZWptcDUyZmhTWE1lNDdHbVFEODlSQlhIbGJhU1FDUTRNVkgrRXVHWDd0bTgwOEFzR1llYkZjQnBaMEVMNzRTSUNHem44dzhqRTBDTFBCRmlVT0JBRjlZNEFzaXFJRFNiZ3dyN3hmQ1A3Q3o4WVkrM0J1KzVsekNJYTRMS08zRzd2Qk5vbGhZSmtBcXZmQVRDRDh4RmVTK0Nua0ZhS1czWmg1R0VQN0JVdGd4b2dDMlB3Y0pGcVdkTlBOZ21SSlpGZElLMEFRNlNaUUMyL1g2ZW9tRWhiK0dkMGdnQXZKR2ljaHFxMEFsTVRWU0FjdENoaXMyYVZ5VWlLeTJDdVJ3VnVQYUJOWmg0aDU0d3VKdFFmdktJeXRyeCtyelo0R3pneFI2ZTB2WnpmZDc1T1puZ05oa21vYVZIYU1ZU0VoVjRBWXlHWlZ2QWIvVm5nWTJsaFVDTGRkcU5RNFdWaHRLKzgyRkIvTmdWYUNUaUEzN2pzSkpBa3lKVS9BbGdVUkVRdWRQcy8vNEJjWkN5dHRhMU9jTkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFSSFNVUkJWRmlGdFpkZGJGUkZGTWQvZCs1dGwwamYyclNGZ3RoQ2w0aEFKQUdNVnFVYU5OUTB4c1RFa0ppQVFYM2xnZEJvZkNLYWlGR2Z4QWREUWlJa2FnUXhVYW90MFlpQWtCQXhpcUI4eEZLZ1lJdFlZZ1NrMjkwNXg0ZnQzby9kZSs4dWZzekw3TTdNUGI4ejU1ejUzenNPWmUzenR6VFQwTUlhb0JlaFM1UkdGVVVFMUJaN0VVWExlaEh3MXdsSXNIWWMwVU9pVG4rOVR0disxQ1puTXN4enduLzJmNkFiSFljM1N2K2pSaFd4TmNLbjFtckZuR0t0OXEzYjNQQm1oUU1IUDlRQlZWYjluL0JROUFhZmU3MmhCOENVZHA0S3J6WHNVM05WNElpdzZwME5mMjRFY0g3YXFmWGpRaTRWYml2aFU0WXF4MnhWdUQrV3QyUFR6TGl5TmcydU1UdFBoRmZmZVdUT3BXV05BWHFCNU5ERjVqNzQzVGpMcVpKN1l1RmlRUXIwR3FDckZ1ODdseHF5eTl6STJKMzN1blN2cm1OQmw1c1F2WFM3b3RwbDFOS1l1Q2lVKyt4eXcveDdUQ1FhQzdwY0FCWSs0UGthc2JqYjQ5RjFtWFM0OWV1bDBWVFBtNUpkNXZwYTBkUldkR0xCZlY1RXdCYXRxRU5GR1IwU1d0dmRHdXFoMkp2RXdndmxYalVBTlUzbC9LNzczWWdEaTdzOVJHQjB5TEx0aFJ2SkJXMmp0V1NTejJ4UVBGZEdoSk9ITFZjdUNDY09GdnpRbDdlN0g2NjdGUzFBUmZHUzRjSFliK2VWc2VFZ2RDZ2MzMStnZVk2aDVRN2pPOURTYm1yTGZXaXNJZ0xobDA2U0ZpeDgwT1BZdmp3YXpnMHdvOE9sdGQzNHo4eVk2ekp6cmh1NzgxSnYwbmFlVkR3QXpYTU1ZOE5Ta1FiUjRKa24xdC9HeU9sQ0lyd3NBb0ZBVkt2Y3NXRmhjYmZINkpEdy9aZjVpQU9YemhRUWdXVTk5Uno1TEJkRUw4R3VxU1lZVGJNRHBXdSszZEE4eC9ERFYzbGEyMTE2bnMrd1pHV2REejg2T09rL3UveXhERzJkTGs5dW1KNGFVV2ZQMjNuMTRiWnkwZXFYcG5INW5QREZ1N21LZ2xxeXNwN1dEZ01LM3c3a3VIakcrdk50OHp6YXNpNnFjT2pqbTRrUjlaSjJYZ3JkOGYwRlZJazFjSFF3bHhBOXVIQXF6N21mODRsMlN6YUNZMWlXbzRlZXJ1ZnlPZUhZdm53bFBDUW1yUjBHMVNKMDVIUWhZbnhXMW1WVzFnT0ZBeC9kakk5QVV0V3J3cUlWSG90V0ZDVjM3S3hGQVlveUFBb3o1OFVMMHNqcEFyUG5CMUw5emU2SnhJTDJrbkwvNDlkNUhua200eHRwN1lpSHhiVXdIT0RBcnI5aXRDQkJpa3VUbzJlRnZkdHlDWWphMjNzdlg2c2lSRFphUE9ISlg0Y3NBMXNuL2hWOCtFUStWSGhseGFoZ1JIVThUUXN1L1dMWnV2RTYzKzJkckU2Y2FoZE9GbmgxOVZVZkhxZXlVeW8rN3J6L3lzUW5LdnA0VGU5dkMwdDdNclROTTdSbG8za2VPVlU4cmdkMzMrVDhpZktURXdzSDlGTlBSUHVMRGxTSGk4Q1JQUk94MVp5OGdTUTQ0SmgrYy9YM2l6dlNoQ2l1ZVA0VE9KQnBhTnB1MW0vcHpLbElYMm9FN0MzQWJYQ1MwdUE0MnJkcGx6UHBYODIydlhoalFLeXVpdjF5U2JtVVJwMklmc2dtd21GdzgyQnpjRFVEZVBhMTZUMXFpNUdJZzFlbTVCL0NIZTByd2FIc2RneXdjNVBXWHhtL3RsYUVYaFh0RWh0Y3oxUGhvWGRFK1ZFRDV4QU8vZGY1WThlV2djNkl1djBORUVHdGVncXJ4YmtBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVBtU1VSQlZGaUZ0WmZQYnh0VkVNZS9zMnMzT1NDUzFzVVdsMFNLQkkzZDlBZUtCWWZ3QnlRUVZhUVY2WUdxZ2FEY0lLZjQzanN0Y0VPSVFob2tLQlJ4aTVJZU9XQmlFVGRWamQxYXF0cFRjVWhheDBoRm92YjJ6WEJZcjcyLzE0UXkwdE5vOTNuZlo5NzhlbjRFbDN5NEpuM2FpOFo1RnBvbVlJSlpFaXlBWW9DbFBkaXBGZnUvWndHVVVGMFllUkZaZmY3ditNb1BzOVN5ODhqK3NIalRXSUxJUjlaekIrQzN1RTM3emdmTWlYRHVwOVA5RnowR0xHNFo2NEJNdXVHaE8zUURlakdNQVJhNm5uODdQZ1VBR2dBc0ZwOHNPZUR5MytIaFdpWmZ1Mm9zQVFCZHFNaUJ2YWJSZE1Dall0dERhTUx5d2pMK3o0ZngvbGlqWmN6NXdhUDA2Q0NCR1RoNlVFT3B6aWpWSmZwYmwrZWVPMlNjajVuWkxqM0ZiMlpJUjNxUWtCbDA1QzdPam1nQWdGSmRVS29McmxTVkV4cVVsRUxUTVFJbW9uWjhaSUF3TTZSN3dHNDVuaUFjVHhBVUE4dDNWQytlbktBUGJyUWtMSDV2RGVrNFBhdzVRT1dHb0x3bktOVVpZd2MxQ0lCamgweTRYYjY2emJoY1ViN3JXam9XQ0c4UE83elNFSHgzVDVueGJuOXo4MkVYY082SWpoTUp3c25EcGlIekdRM0ZIVVp4UndLVE1oYVdMRFBEZWdkKzdUN2o2ajBWNkZJbHdQSnQwKzN2anVxWXo1aUd2MzlVeDYvYlQ3M3J0NGZtU1R3Yi9FeDc5NVdHK01OZENXYnB5eFdGclYwQkFJd25DUXZIOU1CK29YVjd0bk15UGRDTlo3bmhVMklSTmY5RldYVytIMDlTWUxQU2dqTFV5dmp2N3pPK3ZhdENkK3luTi84UUZIZE1MMlJURk5pc1luNDFuN2FWMjlrUnJWUG4zOXhsaUFBcjFXNkpoWFhENG80Z216TFh5aVlKaFcydkozMlRNRDNnTER0TDNubkpmSC91WlEwclZRWUw4R1hGV2UrdnZFQllHTk03TzdlRTRlUlloc2Y4NGxmZVk4eU8rQnRoeWR5b09mOWUydFEzZGdYanllQkc5V3BLd3k4UHZJbnNud09oYUg4Smd3UEFSbzJkaDVpbkRHMmo5RWoyWVVLNGJQd3V2aWRvcHd6ZDhTblZuNTBSaFpyOCt6TDhQd3p3eXpmTkRiZCt0RkpWdVBVTVF2RnBrWEZwVXdXZUJZRWVZQUd1VkZVMElVSXViUWFmSHg0UHVQL2piZTBLbHUvc3B5Wk0rYVRJd2MxS0FBRkFiNjRaajVnbDRUNEwzSG8rbzJOaExMdzNXRktvQ1Q3ZVZNZy9rR0M0QUFEVlk0cVJGOEdwTUxoaTRQUGZ6STQzbmlSSGgzT0RDelh4ZDd1NDRRQUkrWmlJckNyQnFUQzQ5Znpaclc3YnphWUkyWlNHd3JicDVvMmF0OC83M2FZNmNBQWtza3BUYTlMWGJCbFBnanl3djR1SGJUNEFEZ0IvRGNmN3RQVTNxTWxNdWRBRkl2TER6OTFSY0JIT1laWmFuV0MrL3FPeHprb21IUzZNeUl0QU9JZkRDWFQ5Y2M1Mk5RT0FuOC9FcDVSd3pyR0RYdUVoWHZMdW5ISVczRFRHSlpscmNxQy9aY3l4MExTUzd2VjhQM2xobFJvSWVSSlpmZHdYL3hxTDFMVHovZ0ZpWXRza1lDZC9SUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU83U1VSQlZGaUZyWmZQYnhOSEZNZS9iN3pZaUF1eGx3Tkl4U2xCcExSUkNZaEREN21DU0ZvbkJWVzBwVlZKdWRCRFZVN2tqdFNxRjZwZWtQZ2hKQ1FqT0ZTY0txVUovQUZXUzBwQlZBcFV1QzJIM3B3RWJzaU9kOTdqc1BaNlozZkcza1JkYWJRNysrdnpmbnpmbTExQ1lwT0Zid29vN3pvTmxncUFDWWoyUlJnUURRZ0R3aER1SG9kN2tlUThmcjllQTNOTlJNOXYyU2xWR3J1ekh1ZVJBWC84M1hrUVhleWQwSjJYSldDY0dXN09XWVBCYzF1UC92eER5Z0Q1OC90RlFDWTNCN2ZBYkhQdTNBdDl0M0JzWVFvQVZPUzVBV2M3M0RyUEF1Y2VQRFJrc3JsdzVEd0FrQ3hmeUVOdmFabHdCNHd6aE5rR2owVXVmdTAveW05VjBQbloveC9PQStFUXhodjYxV2tGU0dVZ1BIcVpDYVBkRmFqeWRPSzZYVE8ycUJDQ2loZVdta3ZOSEhsdmg4OUVrZFBQNy9UVlRDb3FJV05DUWRpSEZhNmRjQkh1d1FHbzRST2c3ZnN6cFMxaG1LK1NlY3VTWTFXZVR2WXY1Tjc4S0FGUHY4K1dZaFhQbTcxdXRXR2NLazlEbFQ5TUdVREZNYWc5SjUybDZVcXgybEFwQ1Z2aFVSUkdQcldtclorWWxSUE9iSUhQT09HUkVYdFA5WUduV1NydEtUdDd2Um8rbnNHQXorMlY1TktUTGN5YmhYYzNiOThYaVJKME55eVZnck5kTkdyNFJHWURxRFJ1UE8vc2xxeERBOXp3enRqK1ZtWTRBQ2ovSUpRLzdoQnpyTGx4RzE2V1ZTNDN0Qi95Y2huNitVK0FDS2o0RG5JanB3eW9ybGZCcTQ5QS9qaFU2YUJGQTZhandtMElCNkRnMTY4Rm5aNmRmYUVKeitYMmZnWXF2UXY5ckFwZWZXaUVuZnhENEpYZjA0NnhobkFRR2VCdHBBUG1SajRCRFkyQi83a052ZllJUWIwYXBTMDNPZ3R2OUF4NDlTSGFmMTNQQkdjT1FFSHRySmdkTDUwM0dub2IzdUZ2alpEemk4ZlE5U3BVOFFBRUFtLzBqSEU5ZUhvTjdTZVhUVEhxSURLQU9UejJCc0ZGTkZSeExDMjAwampVZXo4NmhhaFhscHh3NFNBYXlwNWpVelQ2NzFzYnFnSUEwSTM3VGpoemI2N1NjSHNmMklnUjdTZFhldkNZdDhrQkVTZ0lydzMrQUdVRTlTcDAvV1ltZUh2NVVnL3U4QjdDQUdUTkE3Z0c0Wm4reTJaNEhEeTdBYjN5Qjd6Ukw2RjJIRExBd2RPcjBJMGw2TVp2NFhNV2owMDRRS0NhUjlEekluckcxZ0Z0cFNpckQ3QytzaFRWT2lEZ3huMXpCZXdLelNLOExod0FoR2llWkdHcTBNNXZhMmI2em1lek9tejN1dUNjZ0FOQXFkZ3FLSHAvc2NYQ2M1dUZHK25xS3pnVERzRWNmWXoxNk5lc2RlK0RSUWhQOWx1NTdCcUp3eDJoVDhLQnUvNVhyZDZ2R1FBVWp2MHlKYXpuWEN2WFlMaGpXRHp2d2tNaEpqWlpQcGx2L3R1WUpYQkZXRThBN0ljTGxiMDZlakNMOTUxU0kxQk5pT1pmTkpzMzk1MURLODU3RGNlNFZLbi9sYm5mQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVFJU1VSQlZGaUZ4WmRKYjF0VkZJQy82N2hKbklTMGFTVXFJWUtVc2FobHBpNGsyVUdhQ1FlSlA5QXUyR1dlWEFrUUVMb2lNeVY3cEhhQmtHQ0JremlPMkdJWCtnZmFESzJnQ2hLQnhEZ0RkcHlVK3JDSTdUdy8zMmZIb1JMSHVwTGZPK2ZkNzR6WGZncVRWSzkwRjVROSsvUVZVZUpDYUJDUk15SkNjcEg0RGluM0RYcFM3aEVVSkJDRE9jZlowcHQzMWZDK2thZU1GODdJOVNGUmpDV3VkWnZuQmpmWUo1NTlMTzZIejMwNW51YkF4ZWgxSDBMTHNlQ1dZQk04YWMvQ2F2bDBLNEF0RVhsMk9EbkMwY05Ga0ZpczVabGZPNFlBMUhrWnppK0sydmEwOEN3cFI3ZTUwZDVTZjdDSy9yRVgyb3FqZVZmL0Q3Z2doUE1lWGJHSkVsY3VjQXh3cDcwU3A3MHlOZVhaNEltUFFDd1djOW5qbzNha2VoUFhPKzBWZERvYXVYU2lDb0E3K3crNHMvK0FHMzh2WkljYkFnTWExT3VSenlRZHJnZDNGTDVOcDZQUmZIU2t5STJkQmFhMmZWbmhpYVZlQ3c5TEpyZ3pyNElPeDFzNDdaVVp3V2FaMnZZeHVlbk5XbEwxYXZoVDBTa1I0YXVTOTNNR20yVnl5OHQ0eUt2UHFnZzJjNzBURFhBeHIrSS93d0hlTEtpeExLa2dxSmQzUGhHelY4YTBkVG9hczlaZEp6OUZsNW5ZbkNld3U1UVd0YkZSMVV2Ykh3c21EM1dkM0ZYVUJBamR4VTFad0N0TWJIbEJ5QW9YRWV4cFVSc01PaDJOZEJWZEJtQTYvQU1DVkswTjBGUFNURzlKOHlGMGI0V3ByWGtFb2E2Z2x1L085aVYxNDZFNXhvSXpsb0dwRnpjL0VwM1NDRGRMWXRUZXlLOU8xck8vdEkyNndocXQvWHUvamVQZlhkU2NEYUJlQ0gwbytzTUR1b291MDEyc2R5SVJPWUlsK1BidUVtUEJXUTM4c09uVmhkQUhvb01ieTlKVDNFU1BJZVhaNVBidU1tTi96Ukt3aU5xNHR6MWRtV29nSXZ5OGQ1K3BiUis5VDdXQUNIMmxyWmJnOGRBc0lsRHZxTVVmdVpjUkxwTGlnRW1KY09sRUZWK2Y3a2dDdnRqMk1SbHZOaEVZT05rR3dNU21sOXZ4amg4cWMxSHZPQWVBKzNRN28wRVBuNjkvcjRXTENPcjVqV3VpVTVyaFJwbmNtbWRpMDVzY3JickNHZ1pQdWFoMzFHcnQyeCtPOEdQNG5uWVMxTG4xYTZMelRFVG9MV2srU0x0VnJhUExFRSszVHZ5UlJVYldQUWR3aTE5SlZmdW5XenVHeHRWWDJrcS9SZDExRW9nc01ySXhZeGwxaWdNMWZ3eFpqS0h4Z0FKRTZEL1pscXk3SHJ6RVNOQ0RQMnpvL2d4N0E2anF0Y0VOd2ZUZjMvQXdtcC9Rd1ZQdk1Gam1PZ1R2TGpFYTlPQVBMNlU5bndrT0JGWFYyb0JIUk42MWl0bzZLOEpRV1R1QnlDTCt5R0pxbHg4TmpvSVpPekJuZG9BandFV0UwYUFuZllTUENBY1FtTE9wblVlM3pBYVorOEY4NzNod2dHais0NXUyK3pYVGU0SzR5Um11T1RWemdDdHdjK0hiL2VTcldmbHF0dytSbGljZHRRNk9ZaUg2eWplSHIyWUFxK1hUcmNSaTdpZWFjb3ZJRS9ENGRhcWNsK0g4MEM5clZ3VmNFcE1HSVhibWVQQ0Q5MElncUNBZ01CZjlmZXNXYmI0OUkrOWZ6SmE1ODYxQVBIZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBU2JTVVJCVkZpRnhabExhQjVWRk1kLzUyWWl1R2lKMnlRbTZ3cDV0SW1WcUtFQkYxM1VDQ0pLd1Nib3BnRVZUSFdqQzBIY1NSZkpvc0ZHVWV0YnNsS0RJbFI4RUd6VnBJWWt2bFpWSW8wdmhFaFdVbk9QaTVrNzM1MzNmSjhwSGhpK3VUUDNuc2YvZjg2ZE0vTUpOZVg0VzlyNVQ4QzRnVkVSK2pEMEdLRkRCRVJBVFBTYlBnL0gyeUpzaXJBaHd0SjE3U3lldVYyMjZ0aVZxZ2wzdjZrandMUUk5NlVkTVBuTzFCcXJzbUFNcy9OamNyRWxCNGZtdGIzcmVtWkVlTGhaNDNVRGlXU09mWng2ZmxpdTFuYnd6aGQxQU1Pckl2VFhjcVpGeDkyQnNpN3RUTTZQeWxxbGcwZGYwRkVENzR0aFg1VXpUVk5jY2cvWWFST09QVGNtUzRVT0hqMnJBd2hMSXBGemUyUmNCRXdOWGNDT0JJejZTTVlPRHMxcit3MjdySWpRWDRuTWY2RzBhaTZzczU5aGw1TnhxdTYveW94YStsWEJLbGdiSFhsajJ6aFVRYTEzYU9vOFBTNmE2OGJRenc0ekNRU1B6T2lJTVZ6WVV5U2FvVGpubmpIY09qOG1GdzJBS3RPbHlMU0NSR3B0czR6WVhhWUI1TFpudGRNRVhLbENZcUFyZVIydmtnbHpKNTRMM2xvYWMvMjFQL3haamFKYXVnSU00Mm9qc2czZ3psUGowK041TzJicmN2KzducTBDdTJJWUQ5UXlxZzRCNitVQUtRV1J2TDdTUU1RaDVSRE1YTSs1Zis5TjRYWHIyZkx0Q21DY1hXVTBzTHYwaWNsNmJ5V3B3TWtyeTFsYVRCT0Y0eHhValJUbW9HZ2J6dllGVnVreGVWQ2JsSUpJWERwTUhHNE94VzkvaCsvK3lPcXBzTnNUcUtYRG1pekZZaHNGNEZPc0doYk14REJOeVZNZmhiUTZzYlpCYWRwdVhIeUdqa0NWd3NMd0hmY1ZyLzRNZDV6SlV2emhGS3ovQWs5K1VFeTNIMmlSM2RpMmhVQ0xLRTFYVnBxYW5FRENDZUhlRnFPU1FpWlhUOXF1Tnc1aXFBc1VHby9lT1BLaVFOTEdpL0xMcDdqSWJqUS9TWEZPTkRZVnVSc2Z2QkVPOW1RTFE0RVRoNUxYTm42RmIzNkw5UHFCbHRrbGorSWFrYXNOeDRQZDhNQXRaR1NnTXp4OGVlUHJNRGNMS1M3SnhTekZxY295YmtFcThwYytoNWN2Skl2aGswZGg3UW84L2s0NEh1eHVPQ1pOVXV3ZUZxYXFDWEFQY1Y5eDBVUGZCYUFXSm02RzAzZkJpYUdrYmovUXFtYkVGbEpjVkZrZXhibTB1R1VLNTc0QUZDWVBoNmkyUkxHQndHcnhaaGxEWFRlNVU4YlBmWmxFSzBGeG50M1UyQ1FRTEVIUnBxcjQ1QkVZNmswNjVkQVo3SWJaZTVMM0JycGdiUXRlVzg1QnNBUkZLMndIaWNqS1lQY1VYL29KRHZXQ2FNTVJWVmpkOUJ4VGIrdnhtdGFNZzJXcEpXd0daYnQrRWNVclA0Wk90dktLRUROUko3V1VqZkpISGVSU1hLUXdiakRLR0ttaTJGdXJzQlNVVm1VT3hhdlBzQ2RTSjdWRVdFeFNuTmYrUkdNblp6OE9mek05SUxIUy9QdlI5UWRISXAvS1VzdUFLQXZ2blpTdGVvODZnZVhMb2VLNTgrVzVWdlhTUDlnZC9sWjFVUUt6QU5JN3BmcC9mVVVvZVZlZU8vK1FQQUp1b3k2ak9OWCtWRFlVTlJueE82V0VYY1A2WHdHblhFclY3bVpjKzFNVlNLTEJxTmdkY3V6dUFKT1hwaHJmQ2dPckJhK1lUU0NSWGx1MUZlVUZvc0tPRVk1OU9wMzhSaGlvemI1aWxyVS8xeVFRWVYzYW1QenNzZXdIelByZHpMVUxaTzd2RGs3NXRDWWRWTDRIRHRSQ29tWSsxUXBFV0pBMlpyOTZvdndqZXFCd0hNdmJLaHdvNjZ4ejM1WHJCN0tOc2ltd29iQmtEWXVyVDlmN0crSmZWQkRSZG9IUlErNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBUjJTVVJCVkZpRnRabE5hQjFWRk1kLzUyWWl1R2lwQ3kyOGFQYWx5VXVsN2FMV2g5bElvRFVMTjZXcm9Bc3IrRVVpWGVoR0JCWHNLbGtZMmloQ2NXRkswRTJEMklVV05XQkZyRFV2ZmkwbG12aUJpMGhXVW5PUGk1bDU3ODZkT3gvdkpSMjR6TnpNUFYvLy96bm4zamNSYWw1bkY3WHhYOFNrZ1pZSW94aUdqWEJBQkVSQVRITDNuK1A1bGdqcklxeUpzSExYSU10dlBTeWJkZXhLMVlMSDM5Y1R3TFFJWjN3SFROaVpXbk5WbG94aGJtRmNidlRsNE5FRkhSeTZtMWtSbnUzVmVOMUFrbXVlZmN5OGZVeHUxM2J3c1hkMURNTjdJalJyT2RPbjQrbEFhY3NnVXdzdFdhMTBjT0lkYlJuNFNBejdxcHpwbWVLU2Q4RDJnSEQ2NHJpc0ZEbzRjVW5IRUZaRUV1ZjJ5TGdJbUJxNmdHMkphTGxJZGh3OHVxQ0Q5K3p3alFqTlNtUjJRMm5WV21pem4yTnBUblpTZGY5dFp0WFNWQVdyWUcweVFuUGJIYXFnMWhucVBmdnpvclhwSEpwc001dEI4SkZaUFdFTVgrNHBFcjFRSEhobkRBOHRqTXNOQTZES2RDa3lOWkE0Zkc4OGlsRHNsUkc3d3pTQW5MeWdEUk94MFc4K21lVDVqUWtZT1FpdmZBby8vTFUzdWFtV0lZTmhzbGFPRktDWVJyNlkxTjJaa1FBeUNXcTk1cVlZSm8xYVdpSFllMDN1OWlhcy9SR2plUGkrOE5vUXBhV0I3TkNLN0E2allwSnlrYVN1TFZnSDZpZU93NUdoYkdNUy85bTVYbjhVdnYvVGFiYnVncmlWOE9QZjhPSFBzUzNYTHBMWU5pQXdHbGxsMkFRV2RScVFoYkVHakEzUjB6VnlzSHJOQnhWMkVZYmwrR3VxcFp0OEQrM2w0NmRnN1hkNCtkcnVXMVc2V1VTcWp2YysxQ2I1czNVVVdFK2hqWldsUEN0eC9uaEloT2NGZGp1MkxVVGFwNEpRSUttSFZzT0JwTWlVVUpxYlI5WVdJNVB1QUtuQWt5Zmh3UWV5ZVpRcEFLRFpnQXVudW9pNnhRUnhqN3pTTG1mRURTUkxjU0FhNnloUWhTUDNVM2sxRytYdk95bFFacGNReFVXVXBnbzB2cjJ3Qk4vOWxrL3U2OC9ENmdhY3Y1cFAvckVHdkhrcVVlT0RVcEpLZVlxOXdqQ09nR29YZ1dCZ0xrSWVNbXE3UVZyWFZnSEZZbUx4UE1WZU5CbUtVeHRwSVpCVm1MN0xVZWpLMGcyMHFzS3RGRkZjVkZrcGd1cWc1TXFtWWtxT0VYWGVCMlVMVWlzS0llSERibnlLdGFEWGhTajJaRHNVaDNxc056ZVpJaWxCTWQwYjNSd005YnBDaWwxWnZDSXBRZEVLVzFGaDF3OHBDRkhzeWhaUmJKM1dVNVFlb2RRUzFxT3lycCtqT0xWUlVBaStBMStjajlzUmRQdm42a1lKeGI1ZFphMThxK3VIWXJycmJ2MGEzMFc2amw3K0tsbGJBMFdGbFNpSVJNSDg0aWR3NlhyWHFVS0tFOGVmV3lSOGVra1BHQldwSmNKeUZHb0pvWGx1a3cvTlhZb3JqTnNBcFJtN3l0TFZjN0paYjZ2ekZSWUVjdk1YK0hhOWZwV1dOV21CT1VqYlRCOEtRbXZQWFE1UVdzQ0l2NDE2dXVhdlBSTi9scXVtT0ZYV0p4SmxLTnFRWFVQN240aVpSRnY5MDR3dFFjSnZFYWJLOGVKQXRvR3BtMDkzdnhWR1ZoT1pYU0RoeTlZNnJYaUJxTEJ0aE5PZlRXZS9FVWFhOXJrcWhlWU9CaUswWllDcHoxL01mOENzZjVxNWM0SE0vM3VBR1pmV3JJUEtUOENoV2tqVXpLZGFnUWhMTXNEYzF5K1ZmMFNQRk01aXVhTENvYktUZGU0blptK0JiS0dzQzZ3cHJGakQ4cTFYNi8wYjRuLzdVejRkTTRURXhRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBVVZTVVJCVkZpRnhabE5iQlZWRk1kLzUzWnE0Z0pTRXpSQWJZbkxGdnNlcFRXR2FvV05za0FTREJVSkh6WHBBaEkxc2JoeUpTell1Q0R0d2lvVldZQUdzRXNKaVlueHMxRWl0SVcySk82MGx2RGhEdE9Wd2Q3cjR0Nzczc3k4ZVRQM0ZZZzNtY3pjbVh2UCtkLy8vNXc3NTgwVEF0dmU4MmI5dnhFN0ZmU0wwSVdpWFFrdElpQUNvdHc1ZlczNzkwUllGR0ZlaE1uSG1ybjQwWXR5TzhTdkZBMTQ3WnpaQWd5THNDY05RR1dEQ2VvYnc0UlNqSTV2azhzckF0Z3picHBiSDJkRWhMY2JkUjY2RU5mR1dNV1JUM3ZsZmpEQVYwK2JNb3F6SXBTQ3dLd1F1RDh3ekVremcrUDlNbHNJY1BzcDA2L2draWhXRllGcFdPS2NaOEJTazdEamsyMHlXUmZnOXBPbWpEQXA0c0E5Sk9jaW9BSnNBVXNTMFI5bnNnS3daOXcwUDdITWxBaWxRbVllUk5LaXNUREhhbnA5VEZaQ2RmVjlSb3ltWkF4b0ExcTdJNnV2cTRjeFlIVHNNS25yZEwvZVdOK0hFa3VNSkJqY09tSzJLTVV2RDVXSlJpVE9lS1lVZmVQYjVMSUNNSWJoWEdZQ21kajRKSFN1eVo3YnFDSjZtV0VBZWVGRHMxNUYzRnBwUENsMzNiVVdqcjhDTi82Q285ODluTmcwbWxhRlltZFFqS1JZdkRRRSs4cXhsY2QyZ3pnekE1M3c1UUIwckdsY0VWSHNWRWJUbjBWN25vSDlteTJReW4xMzlpMCszaU0vdWhWMmQ5UkttcFdRRlYvTDlDdTlURmNXK25vR3V0YkJnUjdyOVBQcG1FRlRDODRZdURBSEgzeHJuNzNlQ1FNZHhTekd3SFlwYldodlpJczQyT3ZBVFNVTmVvQ1FUSVE5ejhMR3AxSWdPNE5EcVYwWlRVdTl6SXBQS3ErSEU3dWczQXBucjhMWks3VUdMWVhWZWNkZmhyMGwrM3orYmhKa3g1cjhqSGEyV3lKakFPMTJSSEZidCt0cjVXNXJHTmx0alovNUZjNWNpV1dldHBsY2tSall0d24yZGR2KytWbTRNR3ZIZXBCdmRNVVdsZUczNGx1RDlCd3pKblJMNkc2RDJWdlpXOFRnYzFYNUFlYnV3TG5yY09OdWNtek5hN1RBYjZSMWxZbkVJRjE5QTlqQWdtdUxWT3M0RFp2YTRNM25iYmZjNm9EZGhpOW1ZUDVPMVZhRkdlVXVkYTJmR3I5dWZGTGltUE9LUVRkaDh3WjdIdXF6UTdyYnFHbXp0eXh6cGJWUVdvY3ZvK3paRmdLY244MlFOTXV2VzBoa2RNYUVWSC9zQUd4dXJ3V1VidVhXS3BOWmJmNU9MTnNEL0pJcGNTd3h2TVNmVFVMUEJpc3h5b0lkNm9OM0orQzZqOG1DZVByNmtFMGdYVWZTbXI2eVdHc2xUcTFHYTVqNkE2WVhxZzY5dk9XbnJWTXZvWDh2UXd3Y3pwWnJSbWRMbXNXcWxub1NGeGx3TXZsNERHNXUzMU01a3FaeFJOb2tKYzJpUFczUXg5SHBuK0hhVGZmSVp5d2taTWFkVCt5eTZ6S09tWFFvWmZWVklrbHlXRXdiOUFDbkZ4eEFiN0RlZnVadG1aakVBU3hxNFY1VU55YnlETGoyOGY0R0phWkE0alFPWWRGS1hKQlpLbVhBTTNqcUo1aFpyQ2FES0RzdVMvTFJnUUNKMDM0Tjg4a2tTYk1JU1ltZEFROXdhZ0ZtL2t4S212c1ZJVVRpbUY4RGsxRWpNVkc1ZGdBUHZlU01TZXdVQzRGMDMwdnNDNHlpMEJMaFlsTGluTXhTTVFQeHltVm1vU3FyejFndmEveCtkMXV5Z3RFWmtpYjhHaWErT2lTM2cxNTFhWU5YZjRmZVorRGs5OGtOUEUvaTdqYTRmak5ENGpvc0Nvd0N5SWJEeHZ4Zlh4RnlmaXVQZmZPV3ZBTitvODZUT0ZYK2hBUjMwRllWcTVRU2ZoVnpmMGNjOFRFYkpuRldIVmRuSVpVYU12UzFtZlM3QkF4T0g2NStLNHkwY1hNZWdJbjBYRjBIZU41Q2pMQ2toQjAvRENlL0VVYVZqYlBJb0hxRUN4SG1wSW5CSDkrci9ZQVpYczA4dW9XTS9kUENrYmlzU1lDRzM0Q09JQ1lhcU9NQ0pKNlFKa2F2dkovL0VUMHlzQmZOQlNOMDVGWFc4WitZSzFqSVBReUxBdk1HSnJYaTRyVmpZWDlEL0FmODBKcW5PRTUxTEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2F0ZXJFY29sb2d5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGE4ZjIyZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YXRlckVjb2xvZ3kudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93YXRlckVjb2xvZ3kudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3dhdGVyRWNvbG9neS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZGE4ZjIyZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBkYThmMjJlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBkYThmMjJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkYThmMjJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkYThmMjJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93YXRlckVjb2xvZ3kudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYThmMjJlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkYThmMjJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyRWNvbG9neS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyRWNvbG9neS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJFY29sb2d5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyRWNvbG9neS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZGE4ZjIyZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyRWNvbG9neS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhOGYyMmUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3dhdGVyU291cmNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjEzZTU3MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YXRlclNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dhdGVyU291cmNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi93YXRlclNvdXJjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjEzZTU3MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMyMTNlNTcwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMyMTNlNTcwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMyMTNlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMyMTNlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93YXRlclNvdXJjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzIxM2U1NzAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzIxM2U1NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJTb3VyY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlclNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJTb3VyY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJTb3VyY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzIxM2U1NzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlclNvdXJjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzIxM2U1NzAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9