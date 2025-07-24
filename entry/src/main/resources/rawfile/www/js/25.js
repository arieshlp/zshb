(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "replenishSite",
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return "target2";
      } else if (value === "Ⅱ") {
        return "target2";
      } else if (value === "Ⅲ") {
        return "target3";
      } else if (value === "Ⅳ") {
        return "target4";
      } else if (value === "Ⅴ") {
        return "target5";
      } else if (value === "劣Ⅴ") {
        return "target6";
      } else {
        return "target0";
      }
    },
    onChangeShow: function onChangeShow() {
      this.siteObj.show = !this.siteObj.show;
    },
    toStation: function toStation() {
      this.$router.push({
        name: "stationRiverDetail",
        query: {
          type: this.siteObj.mode === "自动" ? "时" : "月",
          id: this.siteObj.siteId,
          riverId: this.siteObj.waterId,
          time: this.siteObj.mode === "自动" ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])() : dayjs__WEBPACK_IMPORTED_MODULE_3___default()(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])()).format('YYYY-MM')
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "wrapper-list" }, [
      _c("div", { staticClass: "list-mc" }, [
        _vm._v(_vm._s(_vm.siteObj.water || _vm.siteObj.name)),
      ]),
      _c("div", { staticClass: "list-xz" }, [
        _c(
          "div",
          {
            staticClass: "xz-words",
            style: {
              backgroundImage:
                "url(" +
                _vm.judgeLevel(_vm.replaceString(_vm.siteObj.level)) +
                ")",
            },
          },
          [_vm._v(_vm._s(_vm.replaceString(_vm.siteObj.level) || "-") + " ")]
        ),
      ]),
      _c("div", { staticClass: "list-words" }, [_vm._v("目标")]),
      _c("div", { staticClass: "list-mb" }, [
        _c(
          "div",
          {
            class: [
              "mb-words",
              _vm.judgeTargetLevel(_vm.replaceString(_vm.siteObj.target)),
            ],
          },
          [_vm._v(_vm._s(_vm.replaceString(_vm.siteObj.target) || "-"))]
        ),
      ]),
    ]),
    _vm.siteObj.show
      ? _c("div", { staticClass: "site-info-wrapper" }, [
          _c("div", { staticClass: "fs site-info-name" }, [
            _c("div", [
              _vm._v(" 数据时间 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.time))]),
            ]),
            _c("span", { staticClass: "link", on: { click: _vm.toStation } }, [
              _vm._v("点击查看详情"),
            ]),
          ]),
          _c("div", { staticClass: "site-info-name" }, [
            _vm._v(" 考核县(市) "),
            _c("span", [_vm._v(_vm._s(_vm.siteObj.divisionName))]),
          ]),
          _c("div", { staticClass: "site-info-factor" }, [
            _c("div", { staticClass: "site-info-factor-item" }, [
              _vm._v(" 溶解氧 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.dovalue) + "NTU")]),
            ]),
            _c("div", { staticClass: "site-info-factor-item" }, [
              _vm._v(" 氨氮 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.nh3n) + "mg/L")]),
            ]),
            _c("div", { staticClass: "site-info-factor-item" }, [
              _vm._v(" 总磷 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.tp) + "mg/L")]),
            ]),
            _c("div", { staticClass: "site-info-factor-item" }, [
              _vm._v(" 化学需氧量 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.cod) + "mg/L")]),
            ]),
            _c("div", { staticClass: "site-info-factor-item" }, [
              _vm._v(" 高锰酸盐指数 "),
              _c("span", [_vm._v(_vm._s(_vm.siteObj.codmn) + "mg/L")]),
            ]),
          ]),
          _c(
            "div",
            {
              staticClass: "site-info-other",
              staticStyle: {
                color: "rgba(84, 117, 248, 1)",
                "font-weight": "bold",
              },
            },
            [_vm._v(" 上游无超标断面 ")]
          ),
          _c(
            "div",
            {
              staticClass: "site-info-other",
              staticStyle: { "text-align": "right" },
            },
            [
              _c("van-icon", {
                attrs: {
                  name: "info",
                  size: "14",
                  color: "rgba(196, 196, 196, 1)",
                },
              }),
              _vm._v(" 自动监测数据未经国家审核，仅供参考 "),
            ],
            1
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".site-info-wrapper[data-v-d9e03bf2] {\n  margin: 0 6px;\n  border-radius: 10px;\n  background: #f7faff;\n  border: 1px solid #e1e9fc;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.site-info-wrapper .site-info-name[data-v-d9e03bf2] {\n  padding: 4px 21px;\n}\n.site-info-wrapper .site-info-name span[data-v-d9e03bf2] {\n  color: #121236;\n}\n.site-info-wrapper .site-info-name .link[data-v-d9e03bf2] {\n  color: #5475f8;\n  text-decoration: underline;\n}\n.site-info-wrapper .site-info-factor[data-v-d9e03bf2] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 4px 9px;\n  padding: 6px 12px 2px;\n  background: #e1e9fc;\n  border-radius: 10px;\n}\n.site-info-wrapper .site-info-factor .site-info-factor-item[data-v-d9e03bf2] {\n  width: 50%;\n  padding-bottom: 4px;\n}\n.site-info-wrapper .site-info-factor .site-info-factor-item span[data-v-d9e03bf2] {\n  color: #121236;\n}\n.site-info-wrapper .site-info-other[data-v-d9e03bf2] {\n  margin: 0 12px;\n  padding-bottom: 7px;\n}\n.wrapper-list[data-v-d9e03bf2] {\n  height: 54px;\n  margin: 6px;\n  border-radius: 10px;\n  background: rgba(68, 123, 252, 0.03);\n  display: flex;\n  align-items: center;\n}\n.wrapper-list .list-mc[data-v-d9e03bf2] {\n  width: calc(45% - 15px);\n  padding-left: 15px;\n  font-size: 14px;\n  color: black;\n}\n.wrapper-list .list-xz[data-v-d9e03bf2] {\n  width: 25%;\n  display: flex;\n  align-items: center;\n}\n.wrapper-list .list-xz .xz-words[data-v-d9e03bf2] {\n  min-width: 34px;\n  padding: 0 4px;\n  width: auto;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: white;\n  display: inline-block;\n}\n.wrapper-list .list-words[data-v-d9e03bf2] {\n  width: 10%;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.wrapper-list .list-mb[data-v-d9e03bf2] {\n  width: 15%;\n  display: flex;\n  align-items: center;\n}\n.wrapper-list .list-mb .mb-words[data-v-d9e03bf2] {\n  width: 30px;\n  height: 18px;\n  margin-right: 15px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cd19f79c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue":
/*!**************************************************************************************!*\
  !*** ./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true& */ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true&");
/* harmony import */ var _replenishSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replenishSite.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& */ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _replenishSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d9e03bf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./replenishSite.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=style&index=0&id=d9e03bf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_style_index_0_id_d9e03bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/purPlant/purPlantDetail/components/replenishSite.vue?vue&type=template&id=d9e03bf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_replenishSite_vue_vue_type_template_id_d9e03bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcHVyUGxhbnQvcHVyUGxhbnREZXRhaWwvY29tcG9uZW50cy9yZXBsZW5pc2hTaXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9wdXJQbGFudC9wdXJQbGFudERldGFpbC9jb21wb25lbnRzL3JlcGxlbmlzaFNpdGUudnVlPzk4NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcHVyUGxhbnQvcHVyUGxhbnREZXRhaWwvY29tcG9uZW50cy9yZXBsZW5pc2hTaXRlLnZ1ZT83ZDViIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3B1clBsYW50L3B1clBsYW50RGV0YWlsL2NvbXBvbmVudHMvcmVwbGVuaXNoU2l0ZS52dWU/ZmJiZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9wdXJQbGFudC9wdXJQbGFudERldGFpbC9jb21wb25lbnRzL3JlcGxlbmlzaFNpdGUudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3B1clBsYW50L3B1clBsYW50RGV0YWlsL2NvbXBvbmVudHMvcmVwbGVuaXNoU2l0ZS52dWU/MjIyMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9wdXJQbGFudC9wdXJQbGFudERldGFpbC9jb21wb25lbnRzL3JlcGxlbmlzaFNpdGUudnVlPzk3NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvcHVyUGxhbnQvcHVyUGxhbnREZXRhaWwvY29tcG9uZW50cy9yZXBsZW5pc2hTaXRlLnZ1ZT9hNTE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7QUFDQTtB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QUFHLHFEQUFxRCxvQkFBb0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsdUJBQXVCLHVCQUF1QixvQkFBb0IscUJBQXFCLHNCQUFzQixpQkFBaUIsMEJBQTBCLEdBQUcsOENBQThDLGVBQWUsb0JBQW9CLHFCQUFxQixpQ0FBaUMsR0FBRywyQ0FBMkMsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcscURBQXFELGdCQUFnQixpQkFBaUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLHFCQUFxQixzQkFBc0IsR0FBRztBQUMxbkU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsdTRCQUFxZ0I7QUFDM2hCO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxzSUFBeUU7QUFDM0YsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2xHO0FBQ3NHO0FBQ3RHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBVLENBQWdCLDhVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlWO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LW1jXCI+e3tzaXRlT2JqLndhdGVyfHxzaXRlT2JqLm5hbWV9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC14elwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ4ei13b3Jkc1wiIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBqdWRnZUxldmVsKHJlcGxhY2VTdHJpbmcoc2l0ZU9iai5sZXZlbCkpICsgJyknIH1cIj57e1xyXG4gICAgICAgICAgcmVwbGFjZVN0cmluZyhzaXRlT2JqLmxldmVsKSB8fCBcIi1cIiB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtd29yZHNcIj7nm67moIc8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbWJcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnbWItd29yZHMnLCBqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcoc2l0ZU9iai50YXJnZXQpKV1cIj57eyByZXBsYWNlU3RyaW5nKHNpdGVPYmoudGFyZ2V0KSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgIDwhLS08dmFuLWljb24gdi1pZj1cInNpdGVPYmouc2hvd1wiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIgQGNsaWNrPVwib25DaGFuZ2VTaG93KClcIi8+XHJcbiAgICAgICAgPHZhbi1pY29uIHYtZWxzZSBuYW1lPVwiYXJyb3ctdXBcIiBjb2xvcj1cIiNhNmE2YTZcIiBzaXplPVwiMTJcIiBAY2xpY2s9XCJvbkNoYW5nZVNob3coKVwiLz4tLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1pZj1cInNpdGVPYmouc2hvd1wiIGNsYXNzPVwic2l0ZS1pbmZvLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzIHNpdGUtaW5mby1uYW1lXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOaVsOaNruaXtumXtFxyXG4gICAgICAgICAgPHNwYW4+e3tzaXRlT2JqLnRpbWV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJ0b1N0YXRpb25cIj7ngrnlh7vmn6XnnIvor6bmg4U8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1pbmZvLW5hbWVcIj5cclxuICAgICAgICDogIPmoLjljr8o5biCKVxyXG4gICAgICAgIDxzcGFuPnt7c2l0ZU9iai5kaXZpc2lvbk5hbWV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tZmFjdG9yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAg5rq26Kej5rCnIDxzcGFuPnt7c2l0ZU9iai5kb3ZhbHVlfX1OVFU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAg5rCo5rCuIDxzcGFuPnt7c2l0ZU9iai5uaDNufX1tZy9MPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tZmFjdG9yLWl0ZW1cIj5cclxuICAgICAgICAgIOaAu+ejtyA8c3Bhbj57e3NpdGVPYmoudHB9fW1nL0w8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAg5YyW5a2m6ZyA5rCn6YePIDxzcGFuPnt7c2l0ZU9iai5jb2R9fW1nL0w8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAg6auY6ZSw6YW455uQ5oyH5pWwIDxzcGFuPnt7c2l0ZU9iai5jb2Rtbn19bWcvTDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tb3RoZXJcIiBzdHlsZT1cImNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7Zm9udC13ZWlnaHQ6IGJvbGRcIj5cclxuICAgICAgICDkuIrmuLjml6DotoXmoIfmlq3pnaJcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tb3RoZXJcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+XHJcbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJpbmZvXCIgc2l6ZT1cIjE0XCIgY29sb3I9XCJyZ2JhKDE5NiwgMTk2LCAxOTYsIDEpXCIvPlxyXG4gICAgICAgIOiHquWKqOebkea1i+aVsOaNruacque7j+WbveWutuWuoeaguO+8jOS7heS+m+WPguiAg1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2ltZ0p1Z2RlTGV2ZWx9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbiAgaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuICBpbXBvcnQge2dldFNlY3Rpb25UaW1lfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJyZXBsZW5pc2hTaXRlXCIsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHNpdGVPYmo6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCk9Pnt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFwi57G7XCIsIFwiXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaW1nSnVnZGVMZXZlbCh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlVGFyZ2V0TGV2ZWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFoVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0M1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWjXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFpFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ1XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLliqPihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNoYW5nZVNob3coKXtcclxuICAgICAgICB0aGlzLnNpdGVPYmouc2hvdyA9ICF0aGlzLnNpdGVPYmouc2hvd1xyXG4gICAgICB9LFxyXG4gICAgICB0b1N0YXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogXCJzdGF0aW9uUml2ZXJEZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc2l0ZU9iai5tb2RlID09PSBcIuiHquWKqFwiID8gXCLml7ZcIiA6IFwi5pyIXCIsXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnNpdGVPYmouc2l0ZUlkLFxyXG4gICAgICAgICAgICByaXZlcklkOiB0aGlzLnNpdGVPYmoud2F0ZXJJZCxcclxuICAgICAgICAgICAgdGltZTogdGhpcy5zaXRlT2JqLm1vZGUgPT09IFwi6Ieq5YqoXCI/Z2V0U2VjdGlvblRpbWUoKTpkYXlqcyhnZXRTZWN0aW9uVGltZSgpKS5mb3JtYXQoJ1lZWVktTU0nKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICAuc2l0ZS1pbmZvLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjUwLCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjUsIDIzMywgMjUyLCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgLnNpdGUtaW5mby1uYW1lIHtcclxuICAgICAgcGFkZGluZzogNHB4IDIxcHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmsge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1pbmZvLWZhY3RvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgbWFyZ2luOiA0cHggOXB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweCAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyMzMsIDI1MiwgMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtaW5mby1vdGhlciB7XHJcbiAgICAgIG1hcmdpbjogMCAxMnB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndyYXBwZXItbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubGlzdC1tYyB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDQ1JSAtIDE1cHgpO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QteHoge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLnh6LXdvcmRzIHtcclxuICAgICAgICBtaW4td2lkdGg6IDM0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qtd29yZHMge1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtbWIge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLm1iLXdvcmRzIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3cmFwcGVyLWxpc3RcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtbWNcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmoud2F0ZXIgfHwgX3ZtLnNpdGVPYmoubmFtZSkpLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QteHpcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwieHotd29yZHNcIixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICBcInVybChcIiArXG4gICAgICAgICAgICAgICAgX3ZtLmp1ZGdlTGV2ZWwoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLnNpdGVPYmoubGV2ZWwpKSArXG4gICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLnNpdGVPYmoubGV2ZWwpIHx8IFwiLVwiKSArIFwiIFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXdvcmRzXCIgfSwgW192bS5fdihcIuebruagh1wiKV0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LW1iXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgIFwibWItd29yZHNcIixcbiAgICAgICAgICAgICAgX3ZtLmp1ZGdlVGFyZ2V0TGV2ZWwoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLnNpdGVPYmoudGFyZ2V0KSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLnNpdGVPYmoudGFyZ2V0KSB8fCBcIi1cIikpXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLnNpdGVPYmouc2hvd1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnMgc2l0ZS1pbmZvLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDmlbDmja7ml7bpl7QgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmoudGltZSkpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtcIiwgb246IHsgY2xpY2s6IF92bS50b1N0YXRpb24gfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIueCueWHu+afpeeci+ivpuaDhVwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6ICD5qC45Y6/KOW4gikgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlT2JqLmRpdmlzaW9uTmFtZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLWluZm8tZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLWluZm8tZmFjdG9yLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDmurbop6PmsKcgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouZG92YWx1ZSkgKyBcIk5UVVwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOawqOawriBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai5uaDNuKSArIFwibWcvTFwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOaAu+ejtyBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai50cCkgKyBcIm1nL0xcIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLWluZm8tZmFjdG9yLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiDljJblrabpnIDmsKfph48gXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouY29kKSArIFwibWcvTFwiKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOmrmOmUsOmFuOebkOaMh+aVsCBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai5jb2RtbikgKyBcIm1nL0xcIildKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLW90aGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg4NCwgMTE3LCAyNDgsIDEpXCIsXG4gICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiIOS4iua4uOaXoOi2heagh+aWremdoiBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1vdGhlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICBzaXplOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE5NiwgMTk2LCAxOTYsIDEpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiDoh6rliqjnm5HmtYvmlbDmja7mnKrnu4/lm73lrrblrqHmoLjvvIzku4Xkvpvlj4LogIMgXCIpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGUtaW5mby13cmFwcGVyW2RhdGEtdi1kOWUwM2JmMl0ge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjdmYWZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTlmYztcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLW5hbWVbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBwYWRkaW5nOiA0cHggMjFweDtcXG59XFxuLnNpdGUtaW5mby13cmFwcGVyIC5zaXRlLWluZm8tbmFtZSBzcGFuW2RhdGEtdi1kOWUwM2JmMl0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLW5hbWUgLmxpbmtbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc2l0ZS1pbmZvLXdyYXBwZXIgLnNpdGUtaW5mby1mYWN0b3JbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiA0cHggOXB4O1xcbiAgcGFkZGluZzogNnB4IDEycHggMnB4O1xcbiAgYmFja2dyb3VuZDogI2UxZTlmYztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLWZhY3RvciAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtW2RhdGEtdi1kOWUwM2JmMl0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcbi5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLWZhY3RvciAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtIHNwYW5bZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLnNpdGUtaW5mby13cmFwcGVyIC5zaXRlLWluZm8tb3RoZXJbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBtYXJnaW46IDAgMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxufVxcbi53cmFwcGVyLWxpc3RbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBtYXJnaW46IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndyYXBwZXItbGlzdCAubGlzdC1tY1tkYXRhLXYtZDllMDNiZjJdIHtcXG4gIHdpZHRoOiBjYWxjKDQ1JSAtIDE1cHgpO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ud3JhcHBlci1saXN0IC5saXN0LXh6W2RhdGEtdi1kOWUwM2JmMl0ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ud3JhcHBlci1saXN0IC5saXN0LXh6IC54ei13b3Jkc1tkYXRhLXYtZDllMDNiZjJdIHtcXG4gIG1pbi13aWR0aDogMzRweDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi53cmFwcGVyLWxpc3QgLmxpc3Qtd29yZHNbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICB3aWR0aDogMTAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi53cmFwcGVyLWxpc3QgLmxpc3QtbWJbZGF0YS12LWQ5ZTAzYmYyXSB7XFxuICB3aWR0aDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53cmFwcGVyLWxpc3QgLmxpc3QtbWIgLm1iLXdvcmRzW2RhdGEtdi1kOWUwM2JmMl0ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVwbGVuaXNoU2l0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOWUwM2JmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImNkMTlmNzljXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVwbGVuaXNoU2l0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOWUwM2JmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlcGxlbmlzaFNpdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDllMDNiZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlcGxlbmlzaFNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ZTAzYmYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlcGxlbmlzaFNpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZXBsZW5pc2hTaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yZXBsZW5pc2hTaXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ZTAzYmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDllMDNiZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDllMDNiZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDllMDNiZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDllMDNiZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlcGxlbmlzaFNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ZTAzYmYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q5ZTAzYmYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9wdXJQbGFudC9wdXJQbGFudERldGFpbC9jb21wb25lbnRzL3JlcGxlbmlzaFNpdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXBsZW5pc2hTaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXBsZW5pc2hTaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlcGxlbmlzaFNpdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDllMDNiZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXBsZW5pc2hTaXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOWUwM2JmMiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=