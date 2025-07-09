(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { getOnlineCount } from "@/api/wry";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "onlineMonitor",
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      dataArr: {
        hospital: 0,
        video: 0,
        sewage: 0
      },
      datafzd: {
        gas: 0,
        sum: 0,
        water: 0
      },
      datazd: {
        gas: 0,
        sum: 0,
        water: 0
      },
      datatotal: {
        gas: 0,
        sum: 0,
        water: 0
      },
      xzqh: "",
      xzqydm: ''
    };
  },
  mounted: function mounted() {
    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    } else {
      this.searchObj = this.$store.state.searchObj;
      this.xzqh = this.searchObj.parameter;
    }

    this.getOnline();
  },
  methods: {
    getOnline: function getOnline() {
      var _this = this;

      var info = {
        // divisionName:this.xzqh
        mc: this.xzqh == '' ? '昆明市' : this.xzqh
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["queryXttjBymc"])(info).then(function (res) {
        // if (res.code == 200) {
        _this.dataArr = res.data;
        _this.xzqydm = _this.dataArr.dm; // this.xzqydm = "530000";
        // }
      }); // monitorStat(info).then((res) => {
      // 	if (res.code == 200) {
      // 		this.dataArr = res.data;
      // 		let rdata = res.data;
      // 		this.datafzd = res.data.fzd;
      // 		this.datazd = res.data.zd;
      // 		this.datatotal = res.data.total;
      // 	}
      // });
    },
    allowClick: function allowClick(a, e, cs) {
      this.$router.push({
        name: 'pollutionPunishList',
        query: {
          xqtype: a,
          title: e,
          xzqh: this.xzqh,
          cs: cs,
          xzqydm: this.xzqydm
        }
      }); // let options = "location=no,toolbar=no,zoom=no,fullscreen=no";
      // let url =
      // 	"http://10.221.29.4:17001/wrygj/index.html#/searchList1?xqtype=" +
      // 	a +
      // 	"&title=" +
      // 	e;
      // openBrowser(url)
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _vm._m(0),
    _c(
      "div",
      {
        staticClass: "online-wrapper fs",
        staticStyle: { "border-color": "#ff8d1a" },
      },
      [
        _c("div", { staticClass: "health-wrapper" }, [
          _c(
            "div",
            {
              staticClass: "health-item",
              on: {
                click: function ($event) {
                  return _vm.allowClick("在线监控", "在线监控企业", "")
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "health-title",
                  staticStyle: { "border-color": "#ff8d1a" },
                },
                [_vm._v("在线监控")]
              ),
              _c("span", { staticClass: "num" }, [
                _vm._v(_vm._s(_vm.dataArr.hjqy || "-")),
              ]),
              _vm._v("家 "),
            ]
          ),
        ]),
        _c("div", { staticClass: "equip-item" }, [
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick("监测设备", "废水监测设备", "废水")
                },
              },
            },
            [
              _vm._v(" 废水监测设备 "),
              _c("span", { staticStyle: { color: "#ff8d1a" } }, [
                _vm._v(_vm._s(_vm.dataArr.hjfs || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick("监测设备", "废气监测设备", "废气")
                },
              },
            },
            [
              _vm._v(" 废气监测设备 "),
              _c("span", { staticStyle: { color: "#ff8d1a" } }, [
                _vm._v(_vm._s(_vm.dataArr.hjfq || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
        ]),
      ]
    ),
    _c(
      "div",
      {
        staticClass: "online-wrapper fs",
        staticStyle: { "border-color": "#7948ea" },
      },
      [
        _c("div", { staticClass: "health-wrapper" }, [
          _c(
            "div",
            {
              staticClass: "health-item",
              on: {
                click: function ($event) {
                  return _vm.allowClick("在线监控", "重点监控企业", "重点")
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "health-title",
                  staticStyle: { "border-color": "#7948ea" },
                },
                [_vm._v(" 重点监控企业 ")]
              ),
              _c("span", { staticClass: "num" }, [
                _vm._v(_vm._s(_vm.dataArr.zdqy || "-")),
              ]),
              _vm._v("家 "),
            ]
          ),
        ]),
        _c("div", { staticClass: "equip-item" }, [
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick(
                    "监测设备",
                    "重点废水监测设备",
                    "重点废水"
                  )
                },
              },
            },
            [
              _vm._v(" 废水监测设备 "),
              _c("span", { staticStyle: { color: "#7948ea" } }, [
                _vm._v(_vm._s(_vm.dataArr.zdfs || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick(
                    "监测设备",
                    "重点废气监测设备",
                    "重点废气"
                  )
                },
              },
            },
            [
              _vm._v(" 废气监测设备 "),
              _c("span", { staticStyle: { color: "#7948ea" } }, [
                _vm._v(_vm._s(_vm.dataArr.zdfq || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
        ]),
      ]
    ),
    _c(
      "div",
      {
        staticClass: "online-wrapper fs",
        staticStyle: { "border-color": "#00baad" },
      },
      [
        _c("div", { staticClass: "health-wrapper" }, [
          _c(
            "div",
            {
              staticClass: "health-item",
              on: {
                click: function ($event) {
                  return _vm.allowClick("在线监控", "非重点监控企业", "非重点")
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "health-title",
                  staticStyle: { "border-color": "#00baad" },
                },
                [_vm._v(" 非重点监控企业 ")]
              ),
              _c("span", { staticClass: "num" }, [
                _vm._v(_vm._s(_vm.dataArr.fzdqy || "-")),
              ]),
              _vm._v("家 "),
            ]
          ),
        ]),
        _c("div", { staticClass: "equip-item" }, [
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick(
                    "监测设备",
                    "非重点废水监测设备",
                    "非重点废水"
                  )
                },
              },
            },
            [
              _vm._v(" 废水监测设备 "),
              _c("span", { staticStyle: { color: "#00baad" } }, [
                _vm._v(_vm._s(_vm.dataArr.fzdfs || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
          _c(
            "div",
            {
              on: {
                click: function ($event) {
                  return _vm.allowClick(
                    "监测设备",
                    "非重点废气监测设备",
                    "非重点废气"
                  )
                },
              },
            },
            [
              _vm._v(" 废气监测设备 "),
              _c("span", { staticStyle: { color: "#00baad" } }, [
                _vm._v(_vm._s(_vm.dataArr.fzdfq || "-")),
              ]),
              _vm._v("套 "),
            ]
          ),
        ]),
      ]
    ),
    _c("div", { staticClass: "health-wrapper" }, [
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.allowClick("在线监控", "医院", "医院")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("医院")]),
          _c("span", { staticClass: "num" }, [
            _vm._v(_vm._s(_vm.dataArr.yyqyhj || "-")),
          ]),
          _vm._v("家 "),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.allowClick("在线监控", "污水处理厂", "处理厂")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("污水处理厂")]),
          _c("span", { staticClass: "num" }, [
            _vm._v(_vm._s(_vm.dataArr.wsclcqyhj || "-")),
          ]),
          _vm._v("家 "),
        ]
      ),
      _c("div", { staticClass: "health-item" }, [
        _c("div", { staticClass: "health-title" }, [_vm._v("在线监控视频")]),
        _c("span", { staticClass: "num" }, [
          _vm._v(_vm._s(_vm.dataArr.video || "-")),
        ]),
        _vm._v("个 "),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "city_title" }, [
      _c("span", [_vm._v("在线监控")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-055d96e0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.time[data-v-055d96e0] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.health-wrapper[data-v-055d96e0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 3px 8px 8px;\n  padding-top: 3px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.health-wrapper .health-item[data-v-055d96e0] {\n  width: 28%;\n  padding: 10px 7px 6px;\n  margin-right: 2px;\n  margin-bottom: 4px;\n  background: #f8fbff;\n  border-radius: 10px;\n}\n.health-wrapper .health-item .health-title[data-v-055d96e0] {\n  padding-left: 5px;\n  margin-bottom: 8px;\n  border-left: 3px solid #447bfc;\n}\n.health-wrapper .health-item:nth-child(2n) .health-title[data-v-055d96e0] {\n  border-left: 3px solid #00baad;\n}\n.health-wrapper .health-item[data-v-055d96e0]:nth-child(3n) {\n  margin-right: 0;\n}\n.health-wrapper .health-item:nth-child(3n) .health-title[data-v-055d96e0] {\n  border-left: 3px solid #FF8D1A;\n}\n.health-wrapper .num[data-v-055d96e0] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #121236;\n}\n.online-wrapper[data-v-055d96e0] {\n  margin: 2px 5px;\n  border-radius: 10px;\n  background: #f8fbff;\n  border-left: 3px solid #FF8D1A;\n}\n.online-wrapper .health-wrapper[data-v-055d96e0] {\n  margin-bottom: 0;\n  margin-right: 0;\n}\n.online-wrapper .health-wrapper .health-item[data-v-055d96e0] {\n  width: 100%;\n}\n.online-wrapper .equip-item[data-v-055d96e0] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 43%;\n  padding-left: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  border-left: 1px solid rgba(18, 18, 54, 0.1);\n  font-size: 14px;\n  line-height: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d3c8f01c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/onlineMonitor.vue":
/*!***************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/onlineMonitor.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true& */ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true&");
/* harmony import */ var _onlineMonitor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineMonitor.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& */ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _onlineMonitor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "055d96e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/pollution/onlineMonitor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineMonitor.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=style&index=0&id=055d96e0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_style_index_0_id_055d96e0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/onlineMonitor.vue?vue&type=template&id=055d96e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineMonitor_vue_vue_type_template_id_055d96e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vb25saW5lTW9uaXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vb25saW5lTW9uaXRvci52dWU/ODc4YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9vbmxpbmVNb25pdG9yLnZ1ZT8wY2QyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL29ubGluZU1vbml0b3IudnVlPzVlYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vb25saW5lTW9uaXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vb25saW5lTW9uaXRvci52dWU/Yjg5YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9vbmxpbmVNb25pdG9yLnZ1ZT9hYThlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL29ubGluZU1vbml0b3IudnVlPzgyNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxnQkFGQTtBQUdBO0FBSEEsT0FEQTtBQU1BO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQTtBQUhBLE9BTkE7QUFXQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0E7QUFIQSxPQVhBO0FBZ0JBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQTtBQUhBLE9BaEJBO0FBcUJBLGNBckJBO0FBc0JBO0FBdEJBO0FBd0JBLEdBOUJBO0FBK0JBLFNBL0JBLHFCQStCQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxHQXZDQTtBQXdDQTtBQUNBLGFBREEsdUJBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLHdDQUhBLENBSUE7QUFFQTtBQUNBLE9BUEEsRUFMQSxDQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkJBO0FBd0JBLGNBeEJBLHNCQXdCQSxDQXhCQSxFQXdCQSxDQXhCQSxFQXdCQSxFQXhCQSxFQXdCQTtBQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSx5QkFIQTtBQUlBLGdCQUpBO0FBS0E7QUFMQTtBQUZBLFNBREEsQ0FXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBeENBLEc7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxPQUFPO0FBQ1A7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLDBCQUEwQixlQUFlLG1CQUFtQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsbUJBQW1CLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRCxPQUFPO0FBQ1A7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsbUJBQW1CLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLDBCQUEwQixlQUFlLG1CQUFtQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLDBCQUEwQixlQUFlLG1CQUFtQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZSxtQkFBbUIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQsc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQsc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QyxtQkFBbUIsOEJBQThCO0FBQ2pELG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2U0E7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBNEQ7QUFDdEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRywwQkFBMEIsaUNBQWlDLG9CQUFvQixHQUFHLG9DQUFvQyxrQkFBa0IsbUNBQW1DLHdCQUF3QixvQkFBb0Isd0JBQXdCLHFCQUFxQixpQ0FBaUMsb0JBQW9CLEdBQUcsaURBQWlELGVBQWUsMEJBQTBCLHNCQUFzQix1QkFBdUIsd0JBQXdCLHdCQUF3QixHQUFHLCtEQUErRCxzQkFBc0IsdUJBQXVCLG1DQUFtQyxHQUFHLDZFQUE2RSxtQ0FBbUMsR0FBRywrREFBK0Qsb0JBQW9CLEdBQUcsNkVBQTZFLG1DQUFtQyxHQUFHLHlDQUF5QyxvQkFBb0Isc0JBQXNCLG1CQUFtQixHQUFHLG9DQUFvQyxvQkFBb0Isd0JBQXdCLHdCQUF3QixtQ0FBbUMsR0FBRyxvREFBb0QscUJBQXFCLG9CQUFvQixHQUFHLGlFQUFpRSxnQkFBZ0IsR0FBRyxnREFBZ0Qsa0JBQWtCLG9CQUFvQixlQUFlLHVCQUF1QixpQ0FBaUMsaURBQWlELG9CQUFvQixzQkFBc0IsR0FBRztBQUMxdUQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsMDJCQUFtZjtBQUN6Z0I7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG1JQUFzRTtBQUN4Riw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHbEc7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLG9HQUFNO0FBQ1IsRUFBRSw2R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFQsQ0FBZ0IsOFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFY7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIlwiPlxyXG48IS0tICAgIDxkaXYgY2xhc3M9XCJmc1wiPi0tPlxyXG48IS0tICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1wb2xsdXRlXCI+5Zyo57q/55uR5o6nPC9kaXY+LS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcblx0ICA8ZGl2IGNsYXNzPVwiY2l0eV90aXRsZVwiPjxzcGFuPuWcqOe6v+ebkeaOpzwvc3Bhbj48L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwib25saW5lLXdyYXBwZXIgZnNcIiBzdHlsZT1cImJvcmRlci1jb2xvcjogI2ZmOGQxYVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLWl0ZW1cIiBAY2xpY2s9XCJhbGxvd0NsaWNrKCflnKjnur/nm5HmjqcnLCAn5Zyo57q/55uR5o6n5LyB5LiaJywnJylcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtdGl0bGVcIiBzdHlsZT1cImJvcmRlci1jb2xvcjogI2ZmOGQxYVwiPuWcqOe6v+ebkeaOpzwvZGl2PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJudW1cIj57eyBkYXRhQXJyLmhqcXl8fCctJyAgfX08L3NwYW5cclxuXHRcdFx0XHRcdD7lrrZcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcXVpcC1pdGVtXCI+XHJcblx0XHRcdFx0PGRpdiBAY2xpY2s9XCJhbGxvd0NsaWNrKCfnm5HmtYvorr7lpIcnLCAn5bqf5rC055uR5rWL6K6+5aSHJywn5bqf5rC0JylcIj5cclxuXHRcdFx0XHRcdOW6n+awtOebkea1i+iuvuWkhyA8c3BhbiBzdHlsZT1cImNvbG9yOiAjZmY4ZDFhXCI+e3sgZGF0YUFyci5oamZzfHwnLScgfX08L3NwYW5cclxuXHRcdFx0XHRcdD7lpZdcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IEBjbGljaz1cImFsbG93Q2xpY2soJ+ebkea1i+iuvuWkhycsICflup/msJTnm5HmtYvorr7lpIcnLCflup/msJQnKVwiPlxyXG5cdFx0XHRcdFx05bqf5rCU55uR5rWL6K6+5aSHIDxzcGFuIHN0eWxlPVwiY29sb3I6ICNmZjhkMWFcIj57eyBkYXRhQXJyLmhqZnF8fCctJyAgfX08L3NwYW5cclxuXHRcdFx0XHRcdD7lpZdcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJvbmxpbmUtd3JhcHBlciBmc1wiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiAjNzk0OGVhXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtaXRlbVwiIEBjbGljaz1cImFsbG93Q2xpY2soJ+WcqOe6v+ebkeaOpycsICfph43ngrnnm5HmjqfkvIHkuJonLCfph43ngrknKVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC10aXRsZVwiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiAjNzk0OGVhXCI+XHJcblx0XHRcdFx0XHRcdOmHjeeCueebkeaOp+S8geS4mlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm51bVwiPnt7IGRhdGFBcnIuemRxeXx8Jy0nIH19PC9zcGFuXHJcblx0XHRcdFx0XHQ+5a62XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXF1aXAtaXRlbVwiPlxyXG5cdFx0XHRcdDxkaXYgQGNsaWNrPVwiYWxsb3dDbGljaygn55uR5rWL6K6+5aSHJywgJ+mHjeeCueW6n+awtOebkea1i+iuvuWkhycsJ+mHjeeCueW6n+awtCcpXCI+XHJcblx0XHRcdFx0XHTlup/msLTnm5HmtYvorr7lpIcgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzc5NDhlYVwiPnt7IGRhdGFBcnIuemRmc3x8Jy0nIH19PC9zcGFuXHJcblx0XHRcdFx0XHQ+5aWXXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBAY2xpY2s9XCJhbGxvd0NsaWNrKCfnm5HmtYvorr7lpIcnLCAn6YeN54K55bqf5rCU55uR5rWL6K6+5aSHJywn6YeN54K55bqf5rCUJylcIj5cclxuXHRcdFx0XHRcdOW6n+awlOebkea1i+iuvuWkhyA8c3BhbiBzdHlsZT1cImNvbG9yOiAjNzk0OGVhXCI+e3sgZGF0YUFyci56ZGZxfHwnLScgfX08L3NwYW5cclxuXHRcdFx0XHRcdD7lpZdcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJvbmxpbmUtd3JhcHBlciBmc1wiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiAjMDBiYWFkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiaGVhbHRoLWl0ZW1cIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiYWxsb3dDbGljaygn5Zyo57q/55uR5o6nJywgJ+mdnumHjeeCueebkeaOp+S8geS4micsJ+mdnumHjeeCuScpXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCIgc3R5bGU9XCJib3JkZXItY29sb3I6ICMwMGJhYWRcIj5cclxuXHRcdFx0XHRcdFx06Z2e6YeN54K555uR5o6n5LyB5LiaXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgZGF0YUFyci5memRxeXx8Jy0nIH19PC9zcGFuXHJcblx0XHRcdFx0XHQ+5a62XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXF1aXAtaXRlbVwiPlxyXG5cdFx0XHRcdDxkaXYgQGNsaWNrPVwiYWxsb3dDbGljaygn55uR5rWL6K6+5aSHJywgJ+mdnumHjeeCueW6n+awtOebkea1i+iuvuWkhycsJ+mdnumHjeeCueW6n+awtCcpXCI+XHJcblx0XHRcdFx0XHTlup/msLTnm5HmtYvorr7lpIcgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzAwYmFhZFwiPnt7IGRhdGFBcnIuZnpkZnN8fCctJyB9fTwvc3BhblxyXG5cdFx0XHRcdFx0PuWll1xyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgQGNsaWNrPVwiYWxsb3dDbGljaygn55uR5rWL6K6+5aSHJywgJ+mdnumHjeeCueW6n+awlOebkea1i+iuvuWkhycsJ+mdnumHjeeCueW6n+awlCcpXCI+XHJcblx0XHRcdFx0XHTlup/msJTnm5HmtYvorr7lpIcgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzAwYmFhZFwiPnt7IGRhdGFBcnIuZnpkZnF8fCctJyB9fTwvc3BhblxyXG5cdFx0XHRcdFx0PuWll1xyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtd3JhcHBlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLWl0ZW1cIiBAY2xpY2s9XCJhbGxvd0NsaWNrKCflnKjnur/nm5HmjqcnLCAn5Yy76ZmiJywn5Yy76ZmiJylcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCI+5Yy76ZmiPC9kaXY+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJudW1cIj57eyBkYXRhQXJyLnl5cXloanx8Jy0nIH19PC9zcGFuXHJcblx0XHRcdFx0PuWutlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1pdGVtXCIgQGNsaWNrPVwiYWxsb3dDbGljaygn5Zyo57q/55uR5o6nJywgJ+axoeawtOWkhOeQhuWOgicsJ+WkhOeQhuWOgicpXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC10aXRsZVwiPuaxoeawtOWkhOeQhuWOgjwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgZGF0YUFyci53c2NsY3F5aGp8fCctJyB9fTwvc3BhblxyXG5cdFx0XHRcdD7lrrZcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cImhlYWx0aC1pdGVtXCIgQGNsaWNrPVwiYWxsb3dDbGljaygn5Zyo57q/55uR5o6nJywgJ+WcqOe6v+ebkeaOp+inhumikScsJ+inhumikScpXCI+IC0tPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLWl0ZW1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCI+5Zyo57q/55uR5o6n6KeG6aKRPC9kaXY+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJudW1cIj57e2RhdGFBcnIudmlkZW98fCctJ319PC9zcGFuPuS4qlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHsgZ2V0T25saW5lQ291bnQgfSBmcm9tIFwiQC9hcGkvd3J5XCI7XHJcbiBpbXBvcnQgeyBtb25pdG9yU3RhdCxxdWVyeVh0dGpCeW1jIH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XHJcblxyXG5pbXBvcnQge29wZW5Ccm93c2VyfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogXCJvbmxpbmVNb25pdG9yXCIsXHJcblx0cHJvcHM6e1xyXG5cdFx0ZGV0YWlsc1BhcmFtZXRlcjpTdHJpbmdcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhQXJyOiB7XHJcblx0XHRcdFx0aG9zcGl0YWw6MCxcclxuXHRcdFx0XHR2aWRlbzowLFxyXG5cdFx0XHRcdHNld2FnZTowXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGFmemQ6e1xyXG5cdFx0XHRcdGdhczowLFxyXG5cdFx0XHRcdHN1bTowLFxyXG5cdFx0XHRcdHdhdGVyOjBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGF0YXpkOntcclxuXHRcdFx0XHRnYXM6MCxcclxuXHRcdFx0XHRzdW06MCxcclxuXHRcdFx0XHR3YXRlcjowXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGF0b3RhbDp7XHJcblx0XHRcdFx0Z2FzOjAsXHJcblx0XHRcdFx0c3VtOjAsXHJcblx0XHRcdFx0d2F0ZXI6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR4enFoOlwiXCIsXHJcblx0XHRcdHh6cXlkbTonJ1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHRpZih0aGlzLmRldGFpbHNQYXJhbWV0ZXIpe1xyXG5cdFx0XHR0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuXHRcdFx0dGhpcy54enFoID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcblx0XHR9XHJcblx0XHR0aGlzLmdldE9ubGluZSgpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0T25saW5lKCkge1xyXG5cdFx0XHRsZXQgaW5mbyA9e1xyXG5cdFx0XHRcdC8vIGRpdmlzaW9uTmFtZTp0aGlzLnh6cWhcclxuXHRcdFx0XHRtYzp0aGlzLnh6cWg9PScnPyfmmIbmmI7luIInOnRoaXMueHpxaFxyXG5cdFx0XHR9XHJcblx0XHRcdHF1ZXJ5WHR0akJ5bWMoaW5mbykudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhQXJyID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLnh6cXlkbSA9IHRoaXMuZGF0YUFyci5kbTtcclxuXHRcdFx0XHRcdC8vIHRoaXMueHpxeWRtID0gXCI1MzAwMDBcIjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIG1vbml0b3JTdGF0KGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0Ly8gXHRcdHRoaXMuZGF0YUFyciA9IHJlcy5kYXRhO1xyXG5cdFx0XHQvLyBcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdC8vIFx0XHR0aGlzLmRhdGFmemQgPSByZXMuZGF0YS5memQ7XHJcblx0XHRcdC8vIFx0XHR0aGlzLmRhdGF6ZCA9IHJlcy5kYXRhLnpkO1xyXG5cdFx0XHQvLyBcdFx0dGhpcy5kYXRhdG90YWwgPSByZXMuZGF0YS50b3RhbDtcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSxcclxuXHRcdGFsbG93Q2xpY2soYSwgZSxjcykge1xyXG5cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0bmFtZToncG9sbHV0aW9uUHVuaXNoTGlzdCcsXHJcblx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdHhxdHlwZTogYSxcclxuXHRcdFx0XHRcdHRpdGxlOmUsXHJcblx0XHRcdFx0XHR4enFoOnRoaXMueHpxaCxcclxuXHRcdFx0XHRcdGNzOmNzLFxyXG5cdFx0XHRcdFx0eHpxeWRtOnRoaXMueHpxeWRtXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gbGV0IG9wdGlvbnMgPSBcImxvY2F0aW9uPW5vLHRvb2xiYXI9bm8sem9vbT1ubyxmdWxsc2NyZWVuPW5vXCI7XHJcblx0XHRcdC8vIGxldCB1cmwgPVxyXG5cdFx0XHQvLyBcdFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL3NlYXJjaExpc3QxP3hxdHlwZT1cIiArXHJcblx0XHRcdC8vIFx0YSArXHJcblx0XHRcdC8vIFx0XCImdGl0bGU9XCIgK1xyXG5cdFx0XHQvLyBcdGU7XHJcblx0XHRcdC8vIG9wZW5Ccm93c2VyKHVybClcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmZzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUge1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5oZWFsdGgtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogM3B4IDhweCA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAuaGVhbHRoLWl0ZW0ge1xyXG4gICAgICB3aWR0aDogMjglO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDdweCA2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAuaGVhbHRoLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgLmhlYWx0aC10aXRsZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMTg2LCAxNzMsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoM24pIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIC5oZWFsdGgtdGl0bGUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRkY4RDFBO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAubnVtIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub25saW5lLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAycHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRjhEMUE7XHJcblxyXG4gICAgLmhlYWx0aC13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgLmhlYWx0aC1pdGVtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lcXVpcC1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB3aWR0aDogNDMlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjEpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge30sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvbmxpbmUtd3JhcHBlciBmc1wiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1jb2xvclwiOiBcIiNmZjhkMWFcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWxsb3dDbGljayhcIuWcqOe6v+ebkeaOp1wiLCBcIuWcqOe6v+ebkeaOp+S8geS4mlwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItY29sb3JcIjogXCIjZmY4ZDFhXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlnKjnur/nm5HmjqdcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhQXJyLmhqcXkgfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIuWutiBcIiksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXF1aXAtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWxsb3dDbGljayhcIuebkea1i+iuvuWkh1wiLCBcIuW6n+awtOebkea1i+iuvuWkh1wiLCBcIuW6n+awtFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIg5bqf5rC055uR5rWL6K6+5aSHIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI2ZmOGQxYVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGFBcnIuaGpmcyB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5aWXIFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hbGxvd0NsaWNrKFwi55uR5rWL6K6+5aSHXCIsIFwi5bqf5rCU55uR5rWL6K6+5aSHXCIsIFwi5bqf5rCUXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDlup/msJTnm5HmtYvorr7lpIcgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjZmY4ZDFhXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci5oamZxIHx8IFwiLVwiKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCLlpZcgXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvbmxpbmUtd3JhcHBlciBmc1wiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1jb2xvclwiOiBcIiM3OTQ4ZWFcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWxsb3dDbGljayhcIuWcqOe6v+ebkeaOp1wiLCBcIumHjeeCueebkeaOp+S8geS4mlwiLCBcIumHjeeCuVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItY29sb3JcIjogXCIjNzk0OGVhXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg6YeN54K555uR5o6n5LyB5LiaIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGFBcnIuemRxeSB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5a62IFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcXVpcC1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hbGxvd0NsaWNrKFxuICAgICAgICAgICAgICAgICAgICBcIuebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumHjeeCueW6n+awtOebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumHjeeCueW6n+awtFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDlup/msLTnm5HmtYvorr7lpIcgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjNzk0OGVhXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci56ZGZzIHx8IFwiLVwiKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCLlpZcgXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFsbG93Q2xpY2soXG4gICAgICAgICAgICAgICAgICAgIFwi55uR5rWL6K6+5aSHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwi6YeN54K55bqf5rCU55uR5rWL6K6+5aSHXCIsXG4gICAgICAgICAgICAgICAgICAgIFwi6YeN54K55bqf5rCUXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOW6n+awlOebkea1i+iuvuWkhyBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiM3OTQ4ZWFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhQXJyLnpkZnEgfHwgXCItXCIpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIuWllyBcIiksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm9ubGluZS13cmFwcGVyIGZzXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwYmFhZFwiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLWl0ZW1cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hbGxvd0NsaWNrKFwi5Zyo57q/55uR5o6nXCIsIFwi6Z2e6YeN54K555uR5o6n5LyB5LiaXCIsIFwi6Z2e6YeN54K5XCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1jb2xvclwiOiBcIiMwMGJhYWRcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiDpnZ7ph43ngrnnm5HmjqfkvIHkuJogXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci5memRxeSB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5a62IFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcXVpcC1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hbGxvd0NsaWNrKFxuICAgICAgICAgICAgICAgICAgICBcIuebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumdnumHjeeCueW6n+awtOebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumdnumHjeeCueW6n+awtFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDlup/msLTnm5HmtYvorr7lpIcgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMDBiYWFkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci5memRmcyB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5aWXIFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hbGxvd0NsaWNrKFxuICAgICAgICAgICAgICAgICAgICBcIuebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumdnumHjeeCueW6n+awlOebkea1i+iuvuWkh1wiLFxuICAgICAgICAgICAgICAgICAgICBcIumdnumHjeeCueW6n+awlFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDlup/msJTnm5HmtYvorr7lpIcgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMDBiYWFkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci5memRmcSB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5aWXIFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXdyYXBwZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uYWxsb3dDbGljayhcIuWcqOe6v+ebkeaOp1wiLCBcIuWMu+mZolwiLCBcIuWMu+mZolwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5Yy76ZmiXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci55eXF5aGogfHwgXCItXCIpKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCLlrrYgXCIpLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFsdGgtaXRlbVwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFsbG93Q2xpY2soXCLlnKjnur/nm5HmjqdcIiwgXCLmsaHmsLTlpITnkIbljoJcIiwgXCLlpITnkIbljoJcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXRpdGxlXCIgfSwgW192bS5fdihcIuaxoeawtOWkhOeQhuWOglwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGFBcnIud3NjbGNxeWhqIHx8IFwiLVwiKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwi5a62IFwiKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLWl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXRpdGxlXCIgfSwgW192bS5fdihcIuWcqOe6v+ebkeaOp+inhumikVwiKV0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YUFyci52aWRlbyB8fCBcIi1cIikpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2l0eV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zyo57q/55uR5o6nXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mc1tkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGltZVtkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5oZWFsdGgtd3JhcHBlcltkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAzcHggOHB4IDhweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtW2RhdGEtdi0wNTVkOTZlMF0ge1xcbiAgd2lkdGg6IDI4JTtcXG4gIHBhZGRpbmc6IDEwcHggN3B4IDZweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFsdGgtd3JhcHBlciAuaGVhbHRoLWl0ZW0gLmhlYWx0aC10aXRsZVtkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNDQ3YmZjO1xcbn1cXG4uaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtOm50aC1jaGlsZCgybikgLmhlYWx0aC10aXRsZVtkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwYmFhZDtcXG59XFxuLmhlYWx0aC13cmFwcGVyIC5oZWFsdGgtaXRlbVtkYXRhLXYtMDU1ZDk2ZTBdOm50aC1jaGlsZCgzbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtOm50aC1jaGlsZCgzbikgLmhlYWx0aC10aXRsZVtkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0ZGOEQxQTtcXG59XFxuLmhlYWx0aC13cmFwcGVyIC5udW1bZGF0YS12LTA1NWQ5NmUwXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4ub25saW5lLXdyYXBwZXJbZGF0YS12LTA1NWQ5NmUwXSB7XFxuICBtYXJnaW46IDJweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0ZGOEQxQTtcXG59XFxuLm9ubGluZS13cmFwcGVyIC5oZWFsdGgtd3JhcHBlcltkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5vbmxpbmUtd3JhcHBlciAuaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtW2RhdGEtdi0wNTVkOTZlMF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5vbmxpbmUtd3JhcHBlciAuZXF1aXAtaXRlbVtkYXRhLXYtMDU1ZDk2ZTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNDMlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjEpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lTW9uaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNTVkOTZlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQzYzhmMDFjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lTW9uaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNTVkOTZlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29ubGluZU1vbml0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDU1ZDk2ZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29ubGluZU1vbml0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NWQ5NmUwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29ubGluZU1vbml0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9vbmxpbmVNb25pdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9vbmxpbmVNb25pdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1NWQ5NmUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDU1ZDk2ZTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDU1ZDk2ZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDU1ZDk2ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDU1ZDk2ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL29ubGluZU1vbml0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NWQ5NmUwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NWQ5NmUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9vbmxpbmVNb25pdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lTW9uaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lTW9uaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vbmxpbmVNb25pdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1NWQ5NmUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lTW9uaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU1ZDk2ZTAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9