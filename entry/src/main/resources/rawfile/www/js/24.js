(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/setdate */ "./src/utils/setdate.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "healthRecord",
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      dataobj: {
        xkzcq: 0,
        xqzgcq: 0,
        zfjcyc: 0,
        zxjc: 0,
        zfjc: 0,
        xzcf: 0
      },
      xzqh: "",
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["getThisDate"])()
    };
  },
  mounted: function mounted() {
    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.getJkda();
  },
  methods: {
    getJkda: function getJkda() {
      var _this = this;

      var info = {
        divisionName: this.xzqh
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_3__["healCase"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = JSON.parse(res.data);
          rdata.forEach(function (item) {
            if (item.mc == '许可证超期') {
              _this.dataobj.xkzcq = item.number;
            } else if (item.mc == '限期整改超期') {
              _this.dataobj.xqzgcq = item.number;
            } else if (item.mc == '执法检查异常') {
              _this.dataobj.zfjcyc = item.number;
            } else if (item.mc == '自行监测超标') {
              _this.dataobj.zxjc = item.number;
            } else if (item.mc == '执法监测超标') {
              _this.dataobj.zfjc = item.number;
            } else if (item.mc == '行政处罚') {
              _this.dataobj.xzcf = item.number;
            }
          });
        }
      });
    },
    jkTzClick: function jkTzClick(a, e, cs) {
      this.$router.push({
        name: 'pollutionList',
        query: {
          xqtype: a,
          title: e,
          cs: cs,
          xzqh: this.xzqh
        }
      }); // let options = "location=no,toolbar=no,zoom=no,fullscreen=no";
      // let url =
      // 	"http://10.221.29.4:17001/wrygj/index.html#/qyList1?xqtype=" +
      // 	a +
      // 	"&title=" +
      // 	e;
      // // cordova.InAppBrowser.open(url, "_self", options);
      // openBrowser(url)
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "city_title" }, [
      _c("span", [_vm._v("健康状况")]),
      _c("span", [_vm._v("累计截至" + _vm._s(_vm.today))]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "health-wrapper" }, [
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "许可证超期", "xkzcq")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("许可证超期")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.xkzcq)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.xkzcq)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "限期整改超期", "xqzgcq")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("限期整改超期")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.xqzgcq)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.xqzgcq)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "执法检查异常", "zfjcyc")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("执法检查异常")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.zfjcyc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.zfjcyc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "自行监测超标", "zxjc")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("自行监测超标")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.zxjc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.zxjc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "监督性监测超标", "zfjc")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("执法监测超标")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.zfjc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.zfjc)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "health-item",
          on: {
            click: function ($event) {
              return _vm.jkTzClick("企业环境健康档案", "行政处罚", "xzcf")
            },
          },
        },
        [
          _c("div", { staticClass: "health-title" }, [_vm._v("行政处罚")]),
          _c("div", { staticClass: "health-num" }, [
            _c(
              "span",
              [
                _c("font", { staticClass: "num" }, [
                  _vm._v(_vm._s(_vm.dataobj.xzcf)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
            _c(
              "span",
              [
                _vm._v("已预警"),
                _c("font", { staticClass: "warn" }, [
                  _vm._v(_vm._s(_vm.dataobj.xzcf)),
                ]),
                _vm._v("家"),
              ],
              1
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "health_notice" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/polluter/notice.png */ "./src/assets/polluter/notice.png") } }),
      _c("span", [
        _vm._v("已预警：指已对相关人员发送短信对健康数据做提醒处理。"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-e31f1458] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.time[data-v-e31f1458] {\n  padding-right: 13px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.health-wrapper[data-v-e31f1458] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 3px 8px 8px;\n  padding-top: 3px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 13px;\n}\n.health-wrapper .health-item[data-v-e31f1458] {\n  width: calc(50% - 10px);\n  padding: 10px 0 6px 7px;\n  margin-right: 2px;\n  margin-bottom: 4px;\n  border-radius: 10px;\n  background: rgba(255, 141, 26, 0.05);\n}\n.health-wrapper .health-item .health-title[data-v-e31f1458] {\n  padding-left: 7px;\n  margin-bottom: 10px;\n  border-left: 5px solid #ff8d1a;\n}\n.health-wrapper .health-item .health-num[data-v-e31f1458] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px 0px 0px;\n}\n.health-wrapper .health-item .health-num > span[data-v-e31f1458] {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.health-wrapper .health-item .health-num .warn[data-v-e31f1458] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ff5733;\n  margin: 0px 2px;\n}\n.health-wrapper .health-item[data-v-e31f1458]:nth-child(3n) {\n  margin-right: 0;\n}\n.health-wrapper .num[data-v-e31f1458] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #121236;\n  margin-right: 3px;\n}\n.health_notice[data-v-e31f1458] {\n  border-radius: 10px;\n  background: #f8fbff;\n  font-size: 11px;\n  font-weight: 400;\n  color: rgba(23, 28, 33, 0.4);\n  margin: 6px 10px;\n  padding: 5px 0px;\n}\n.health_notice > img[data-v-e31f1458] {\n  vertical-align: bottom;\n  margin-left: 8px;\n  margin-right: 2px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("11a70522", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/notice.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/notice.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVDiN3VHBkcIwDFw5VwSpJs4DRg8KoIIwVBGnigxUEP55eOARpxqqSMTjkMeXCxSAXmt5d7Wyge+uLV+GHZ/dJ45ZazK3dsdnIcgooCK9e+wPNj3/KEgnTaAiw1T+4qxQYd53gSD1C7uYgLm1AioM5mAwh7uvSu9PIZ2kwk1/LQlS/1uBIKP3p7AUagmoSYRBV1l9gzdlBTQum38MmFvL3No1NUHSx7R534VooLFnGDshq7d8GZZGAmryvnOP/cEJqNF+/IWbP7o0yQwzAIhEnfjCkUtrcdVkQlYDwN1X5TveF9QT4kFfyPzhQlcAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/healthRecord.vue":
/*!**************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/healthRecord.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthRecord.vue?vue&type=template&id=e31f1458&scoped=true& */ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true&");
/* harmony import */ var _healthRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./healthRecord.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& */ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _healthRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e31f1458",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/pollution/healthRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthRecord.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=style&index=0&id=e31f1458&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_style_index_0_id_e31f1458_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthRecord.vue?vue&type=template&id=e31f1458&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/healthRecord.vue?vue&type=template&id=e31f1458&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthRecord_vue_vue_type_template_id_e31f1458_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vaGVhbHRoUmVjb3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9oZWFsdGhSZWNvcmQudnVlP2RiZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vaGVhbHRoUmVjb3JkLnZ1ZT83N2RiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL2hlYWx0aFJlY29yZC52dWU/OGRhZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL25vdGljZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vaGVhbHRoUmVjb3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9oZWFsdGhSZWNvcmQudnVlP2EwN2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vaGVhbHRoUmVjb3JkLnZ1ZT84MTM1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL2hlYWx0aFJlY29yZC52dWU/NWI4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1B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RCxrQkFBa0IsbUNBQW1DLDhCQUE4QixHQUFHLG9FQUFvRSxvQkFBb0IscUJBQXFCLGlDQUFpQyxHQUFHLG1FQUFtRSxvQkFBb0IscUJBQXFCLG1CQUFtQixvQkFBb0IsR0FBRywrREFBK0Qsb0JBQW9CLEdBQUcseUNBQXlDLG9CQUFvQixzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLG1DQUFtQyx3QkFBd0Isd0JBQXdCLG9CQUFvQixxQkFBcUIsaUNBQWlDLHFCQUFxQixxQkFBcUIsR0FBRyx5Q0FBeUMsMkJBQTJCLHFCQUFxQixzQkFBc0IsR0FBRztBQUM1d0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsdzJCQUFrZjtBQUN4Z0I7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG1JQUFzRTtBQUN4Riw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZixpQ0FBaUMsZ2I7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUdqRztBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2VCxDQUFnQiw2VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqVjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8yNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiXCI+XHJcbjwhLS0gICAgPGRpdiBjbGFzcz1cImZzXCI+LS0+XHJcbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXBvbGx1dGVcIj7kvIHkuJrnjq/looPlgaXlurfmoaPmoYg8L2Rpdj4tLT5cclxuPCEtLSAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPuivlei/kOihjDwvc3Bhbj4tLT5cclxuPCEtLSAgICA8L2Rpdj4tLT5cclxuXHJcblx0ICA8ZGl2IGNsYXNzPVwiY2l0eV90aXRsZVwiPjxzcGFuPuWBpeW6t+eKtuWGtTwvc3Bhbj48c3Bhbj7ntK/orqHmiKroh7N7e3RvZGF5fX08L3NwYW4+PC9kaXY+XHJcblx0ICA8ZGl2IGNsYXNzPVwiaGVhbHRoX25vdGljZVwiPlxyXG5cdFx0ICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL25vdGljZS5wbmdcIi8+XHJcblx0XHQgIDxzcGFuPuW3sumihOitpu+8muaMh+W3suWvueebuOWFs+S6uuWRmOWPkemAgeefreS/oeWvueWBpeW6t+aVsOaNruWBmuaPkOmGkuWkhOeQhuOAgjwvc3Bhbj5cclxuXHQgIDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImhlYWx0aC13cmFwcGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtaXRlbVwiIEBjbGljaz1cImprVHpDbGljaygn5LyB5Lia546v5aKD5YGl5bq35qGj5qGIJywgJ+iuuOWPr+ivgei2heacnycsJ3hremNxJylcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCI+6K645Y+v6K+B6LaF5pyfPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1udW1cIj5cclxuXHRcdFx0XHRcdDxzcGFuPjxmb250IGNsYXNzPVwibnVtXCI+e3tkYXRhb2JqLnhremNxfX08L2ZvbnQ+5a62PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4+5bey6aKE6K2mPGZvbnQgY2xhc3M9XCJ3YXJuXCI+e3tkYXRhb2JqLnhremNxfX08L2ZvbnQ+5a62PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1pdGVtXCIgQGNsaWNrPVwiamtUekNsaWNrKCfkvIHkuJrnjq/looPlgaXlurfmoaPmoYgnLCAn6ZmQ5pyf5pW05pS56LaF5pyfJywneHF6Z2NxJylcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCI+6ZmQ5pyf5pW05pS56LaF5pyfPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1udW1cIj5cclxuXHRcdFx0XHRcdDxzcGFuPjxmb250IGNsYXNzPVwibnVtXCI+e3tkYXRhb2JqLnhxemdjcX19PC9mb250PuWutjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuPuW3sumihOitpjxmb250IGNsYXNzPVwid2FyblwiPnt7ZGF0YW9iai54cXpnY3F9fTwvZm9udD7lrrY8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLWl0ZW1cIiBAY2xpY2s9XCJqa1R6Q2xpY2soJ+S8geS4mueOr+Wig+WBpeW6t+aho+ahiCcsICfmiafms5Xmo4Dmn6XlvILluLgnLCd6ZmpjeWMnKVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtdGl0bGVcIj7miafms5Xmo4Dmn6XlvILluLg8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLW51bVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+PGZvbnQgY2xhc3M9XCJudW1cIj57e2RhdGFvYmouemZqY3ljfX08L2ZvbnQ+5a62PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4+5bey6aKE6K2mPGZvbnQgY2xhc3M9XCJ3YXJuXCI+e3tkYXRhb2JqLnpmamN5Y319PC9mb250PuWutjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtaXRlbVwiIEBjbGljaz1cImprVHpDbGljaygn5LyB5Lia546v5aKD5YGl5bq35qGj5qGIJywgJ+iHquihjOebkea1i+i2heaghycsJ3p4amMnKVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtdGl0bGVcIj7oh6rooYznm5HmtYvotoXmoIc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLW51bVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+PGZvbnQgY2xhc3M9XCJudW1cIj57e2RhdGFvYmouenhqY319PC9mb250PuWutjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuPuW3sumihOitpjxmb250IGNsYXNzPVwid2FyblwiPnt7ZGF0YW9iai56eGpjfX08L2ZvbnQ+5a62PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1pdGVtXCIgQGNsaWNrPVwiamtUekNsaWNrKCfkvIHkuJrnjq/looPlgaXlurfmoaPmoYgnLCAn55uR552j5oCn55uR5rWL6LaF5qCHJywnemZqYycpXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC10aXRsZVwiPuaJp+azleebkea1i+i2heaghzwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFsdGgtbnVtXCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj48Zm9udCBjbGFzcz1cIm51bVwiPnt7ZGF0YW9iai56ZmpjfX08L2ZvbnQ+5a62PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4+5bey6aKE6K2mPGZvbnQgY2xhc3M9XCJ3YXJuXCI+e3tkYXRhb2JqLnpmamN9fTwvZm9udD7lrrY8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLWl0ZW1cIiBAY2xpY2s9XCJqa1R6Q2xpY2soJ+S8geS4mueOr+Wig+WBpeW6t+aho+ahiCcsICfooYzmlL/lpITnvZonLCd4emNmJylcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhbHRoLXRpdGxlXCI+6KGM5pS/5aSE572aPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWx0aC1udW1cIj5cclxuXHRcdFx0XHRcdDxzcGFuPjxmb250IGNsYXNzPVwibnVtXCI+e3tkYXRhb2JqLnh6Y2Z9fTwvZm9udD7lrrY8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3Bhbj7lt7LpooToraY8Zm9udCBjbGFzcz1cIndhcm5cIj57e2RhdGFvYmoueHpjZn19PC9mb250PuWutjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7b3BlbkJyb3dzZXJ9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbiBpbXBvcnQgeyBoZWFsQ2FzZSB9IGZyb20gJ0AvYXBpL3BvbGx1dGlvbl9zb3VyY2UnO1xyXG5pbXBvcnQge2dldFRoaXNEYXRlfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvc2V0ZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6IFwiaGVhbHRoUmVjb3JkXCIsXHJcblx0cHJvcHM6e1xyXG5cdFx0ZGV0YWlsc1BhcmFtZXRlcjpTdHJpbmdcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhb2JqOntcclxuXHRcdFx0XHR4a3pjcTowLFxyXG5cdFx0XHRcdHhxemdjcTowLFxyXG5cdFx0XHRcdHpmamN5YzowLFxyXG5cdFx0XHRcdHp4amM6MCxcclxuXHRcdFx0XHR6ZmpjOjAsXHJcblx0XHRcdFx0eHpjZjowXHJcblx0XHRcdH0sXHJcblx0XHRcdHh6cWg6XCJcIixcclxuXHRcdFx0dG9kYXk6Z2V0VGhpc0RhdGUoKSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0aWYodGhpcy5kZXRhaWxzUGFyYW1ldGVyKXtcclxuXHRcdFx0dGhpcy54enFoID0gdGhpcy5kZXRhaWxzUGFyYW1ldGVyXHJcblx0XHR9XHJcblx0XHR0aGlzLmdldEprZGEoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldEprZGEoKSB7XHJcblx0XHRcdGxldCBpbmZvID17XHJcblx0XHRcdFx0ZGl2aXNpb25OYW1lOnRoaXMueHpxaFxyXG5cdFx0XHR9XHJcblx0XHRcdGhlYWxDYXNlKGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdGxldCByZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0cmRhdGEuZm9yRWFjaChpdGVtPT57XHJcblx0XHRcdFx0XHRcdGlmKGl0ZW0ubWM9PSforrjlj6/or4HotoXmnJ8nKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFvYmoueGt6Y3EgPSBpdGVtLm51bWJlcjtcclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoaXRlbS5tYz09J+mZkOacn+aVtOaUuei2heacnycpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YW9iai54cXpnY3EgPSBpdGVtLm51bWJlcjtcclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoaXRlbS5tYz09J+aJp+azleajgOafpeW8guW4uCcpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YW9iai56ZmpjeWMgPSBpdGVtLm51bWJlcjtcclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoaXRlbS5tYz09J+iHquihjOebkea1i+i2heaghycpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YW9iai56eGpjID0gaXRlbS5udW1iZXI7XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKGl0ZW0ubWM9PSfmiafms5Xnm5HmtYvotoXmoIcnKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFvYmouemZqYyA9IGl0ZW0ubnVtYmVyO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihpdGVtLm1jPT0n6KGM5pS/5aSE572aJyl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhb2JqLnh6Y2YgPSBpdGVtLm51bWJlcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuICAgIGprVHpDbGljayhhLCBlLCBjcykge1xyXG5cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0bmFtZToncG9sbHV0aW9uTGlzdCcsXHJcblx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdHhxdHlwZTogYSxcclxuXHRcdFx0XHRcdHRpdGxlOmUsXHJcblx0XHRcdFx0XHRjczpjcyxcclxuXHRcdFx0XHRcdHh6cWg6dGhpcy54enFoLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIGxldCBvcHRpb25zID0gXCJsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHpvb209bm8sZnVsbHNjcmVlbj1ub1wiO1xyXG5cdFx0XHQvLyBsZXQgdXJsID1cclxuXHRcdFx0Ly8gXHRcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9xeUxpc3QxP3hxdHlwZT1cIiArXHJcblx0XHRcdC8vIFx0YSArXHJcblx0XHRcdC8vIFx0XCImdGl0bGU9XCIgK1xyXG5cdFx0XHQvLyBcdGU7XHJcblx0XHRcdC8vIC8vIGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4odXJsLCBcIl9zZWxmXCIsIG9wdGlvbnMpO1xyXG5cdFx0XHQvLyBvcGVuQnJvd3Nlcih1cmwpXHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5mcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aW1lIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWx0aC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAzcHggOHB4IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIC5oZWFsdGgtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgNnB4IDdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHQgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4wNSk7XHJcblxyXG5cdFx0LmhlYWx0aC10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgfVxyXG5cdFx0LmhlYWx0aC1udW17XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcclxuXHRcdFx0PnNwYW57XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0Y29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQud2FybntcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDg3LCA1MSwgMSk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHggMnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgzbil7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMTIxMjM2O1xyXG5cdCAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cdC5oZWFsdGhfbm90aWNle1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcblx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0Y29sb3I6IHJnYmEoMjMsIDI4LCAzMywgMC40KTtcclxuXHRcdG1hcmdpbjogNnB4IDEwcHg7XHJcblx0XHRwYWRkaW5nOiA1cHggMHB4O1xyXG5cdFx0PmltZ3tcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAycHg7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7fSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2l0eV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YGl5bq354q25Ya1XCIpXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIue0r+iuoeaIquiHs1wiICsgX3ZtLl9zKF92bS50b2RheSkpXSksXG4gICAgXSksXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXdyYXBwZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi6K645Y+v6K+B6LaF5pyfXCIsIFwieGt6Y3FcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLXRpdGxlXCIgfSwgW192bS5fdihcIuiuuOWPr+ivgei2heacn1wiKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhbHRoLW51bVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZm9udFwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGFvYmoueGt6Y3EpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlt7LpooToraZcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmb250XCIsIHsgc3RhdGljQ2xhc3M6IFwid2FyblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGFvYmoueGt6Y3EpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi6ZmQ5pyf5pW05pS56LaF5pyfXCIsIFwieHF6Z2NxXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aC10aXRsZVwiIH0sIFtfdm0uX3YoXCLpmZDmnJ/mlbTmlLnotoXmnJ9cIildKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aC1udW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZvbnRcIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLnhxemdjcSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWutlwiKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuW3sumihOitplwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImZvbnRcIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai54cXpnY3EpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi5omn5rOV5qOA5p+l5byC5bi4XCIsIFwiemZqY3ljXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aC10aXRsZVwiIH0sIFtfdm0uX3YoXCLmiafms5Xmo4Dmn6XlvILluLhcIildKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aC1udW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZvbnRcIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLnpmamN5YykpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIuWutlwiKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuW3sumihOitplwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImZvbnRcIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai56ZmpjeWMpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi6Ieq6KGM55uR5rWL6LaF5qCHXCIsIFwienhqY1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtdGl0bGVcIiB9LCBbX3ZtLl92KFwi6Ieq6KGM55uR5rWL6LaF5qCHXCIpXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtbnVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmb250XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai56eGpjKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5a62XCIpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5bey6aKE6K2mXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZm9udFwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLnp4amMpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi55uR552j5oCn55uR5rWL6LaF5qCHXCIsIFwiemZqY1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5omn5rOV55uR5rWL6LaF5qCHXCIpXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtbnVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmb250XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai56ZmpjKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5a62XCIpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5bey6aKE6K2mXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZm9udFwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLnpmamMpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlYWx0aC1pdGVtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uamtUekNsaWNrKFwi5LyB5Lia546v5aKD5YGl5bq35qGj5qGIXCIsIFwi6KGM5pS/5aSE572aXCIsIFwieHpjZlwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtdGl0bGVcIiB9LCBbX3ZtLl92KFwi6KGM5pS/5aSE572aXCIpXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGgtbnVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmb250XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai54emNmKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5a62XCIpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5bey6aKE6K2mXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZm9udFwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhb2JqLnh6Y2YpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrrZcIiksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFsdGhfbm90aWNlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9ub3RpY2UucG5nXCIpIH0gfSksXG4gICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICBfdm0uX3YoXCLlt7LpooTorabvvJrmjIflt7Llr7nnm7jlhbPkurrlkZjlj5HpgIHnn63kv6Hlr7nlgaXlurfmlbDmja7lgZrmj5DphpLlpITnkIbjgIJcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZzW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aW1lW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgcGFkZGluZy1yaWdodDogMTNweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5oZWFsdGgtd3JhcHBlcltkYXRhLXYtZTMxZjE0NThdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAzcHggOHB4IDhweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XFxuICBwYWRkaW5nOiAxMHB4IDAgNnB4IDdweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KTtcXG59XFxuLmhlYWx0aC13cmFwcGVyIC5oZWFsdGgtaXRlbSAuaGVhbHRoLXRpdGxlW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmY4ZDFhO1xcbn1cXG4uaGVhbHRoLXdyYXBwZXIgLmhlYWx0aC1pdGVtIC5oZWFsdGgtbnVtW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XFxufVxcbi5oZWFsdGgtd3JhcHBlciAuaGVhbHRoLWl0ZW0gLmhlYWx0aC1udW0gPiBzcGFuW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5oZWFsdGgtd3JhcHBlciAuaGVhbHRoLWl0ZW0gLmhlYWx0aC1udW0gLndhcm5bZGF0YS12LWUzMWYxNDU4XSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmZjU3MzM7XFxuICBtYXJnaW46IDBweCAycHg7XFxufVxcbi5oZWFsdGgtd3JhcHBlciAuaGVhbHRoLWl0ZW1bZGF0YS12LWUzMWYxNDU4XTpudGgtY2hpbGQoM24pIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmhlYWx0aC13cmFwcGVyIC5udW1bZGF0YS12LWUzMWYxNDU4XSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5oZWFsdGhfbm90aWNlW2RhdGEtdi1lMzFmMTQ1OF0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMjMsIDI4LCAzMywgMC40KTtcXG4gIG1hcmdpbjogNnB4IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG4uaGVhbHRoX25vdGljZSA+IGltZ1tkYXRhLXYtZTMxZjE0NThdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhbHRoUmVjb3JkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzMWYxNDU4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTFhNzA1MjJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTMxZjE0NTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTMxZjE0NTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRG5TVVJCVkRpTjNWSEJrY0l3REZ3NVZ3U3BKczREUmc4S29JSXdWQkduaWd4VUVQNTVlT0FScHhxcVNNVGprTWVYQ3hTQVhtdDVkN1d5Z2UrdUxWK0dIWi9kSjQ1WmF6SzNkc2RuSWNnb29DSzllK3dQTmozL0tFZ25UYUFpdzFUKzRxeFFZZDUzZ1NEMUM3dVlnTG0xQWlvTTVtQXdoN3V2U3U5UElaMmt3azEvTFFsUy8xdUJJS1AzcDdBVWFnbW9TWVJCVjFsOWd6ZGxCVFF1bTM4TW1GdkwzTm8xTlVIU3g3UjUzNFZvb0xGbkdEc2hxN2Q4R1paR0Ftcnl2bk9QL2NFSnFORisvSVdiUDdvMHlRd3pBSWhFbmZqQ2tVdHJjZFZrUWxZRHdOMVg1VHZlRjlRVDRrRmZ5UHpoUWxjQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaGVhbHRoUmVjb3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzFmMTQ1OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2hlYWx0aFJlY29yZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzFmMTQ1OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUzMWYxNDU4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzMWYxNDU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzMWYxNDU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzMWYxNDU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWYxNDU4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UzMWYxNDU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9oZWFsdGhSZWNvcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWx0aFJlY29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTMxZjE0NTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhSZWNvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWYxNDU4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==