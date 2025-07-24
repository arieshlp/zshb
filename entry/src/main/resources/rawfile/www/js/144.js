(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "handleFacility",
  data: function data() {
    return {
      activeIndex: 0,
      name: '',
      baseinfo: {},
      stOperations: [],
      fspfInfo: [] //废水污染源排放量

    };
  },
  mounted: function mounted() {
    this.name = this.$route.query.name;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["sgspsDetailWs"])({
        baseId: this.$route.query.id
      }).then(function (res) {
        var rdata = res.data.water;
        _this.baseinfo = rdata.qy;
        _this.stOperations = rdata.stOperations;
        _this.fspfInfo = rdata.stWaterMData;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true& ***!
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
    {
      staticStyle: {
        height: "calc(100vh)",
        "overflow-y": "auto",
        background: "#fff",
      },
    },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.name, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "company-wrapper" },
        [
          _c("div", { staticClass: "company-title" }, [_vm._v(" 基本信息 ")]),
          _c("div", { staticClass: "company-item fs" }, [
            _c("span", [_vm._v("受纳水体名称")]),
            _c("span", [_vm._v(_vm._s(_vm.baseinfo.receivingWater))]),
          ]),
          _c("div", { staticClass: "company-item fs" }, [
            _c("span", [_vm._v("排水去向类型")]),
            _c("span", [_vm._v(_vm._s(_vm.baseinfo.dischargeDirectionType))]),
          ]),
          _c("div", { staticClass: "company-item fs" }, [
            _c("span", [_vm._v("污水处理方法名称(1)")]),
            _c("span", [_vm._v(_vm._s(_vm.baseinfo.sewageDisposalName))]),
          ]),
          _vm._l(_vm.stOperations, function (item) {
            return _c("div", { staticClass: "company-box" }, [
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("用电量(万千瓦时)")]),
                _c("span", [_vm._v(_vm._s(item.powerConsumption))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("干污泥量(吨)")]),
                _c("span", [_vm._v("处置 " + _vm._s(item.sludgeDisposal))]),
                _c("span", [_vm._v("产 " + _vm._s(item.sludgeGenCount))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("污水实际处理量 (万立方米)")]),
                _c("span", [_vm._v(_vm._s(item.sewageActualProc))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("污水设计处理能力 (立方米/日)")]),
                _c("span", [_vm._v(_vm._s(item.sewageDesignProc))]),
              ]),
            ])
          }),
        ],
        2
      ),
      _c(
        "div",
        { staticClass: "company-wrapper" },
        [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 产品信息(全厂合计) "),
          ]),
          _c("div", { staticClass: "company-tab-wrapper" }, [
            _c(
              "div",
              {
                class: [
                  "company-tab-item",
                  _vm.activeIndex === 0 ? "active" : "",
                ],
                on: {
                  click: function ($event) {
                    return _vm.changeTab(0)
                  },
                },
              },
              [_vm._v(" 废水污染源排放量 ")]
            ),
          ]),
          _vm._l(_vm.fspfInfo, function (item) {
            return _c("div", { staticClass: "company-box" }, [
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("化学需氧量(吨)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.codOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.cdEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("氨氮(吨)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.nh3nOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.nh3nEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总氮(吨)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.tnOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.tnEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总磷(吨)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.tpOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.tpEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("生化需氧量(吨)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.bodOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.bodEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("挥发酚(千克)")]),
                _c("span", [
                  _vm._v("排 " + _vm._s(item.phenolOutfallConcAvgY)),
                ]),
                _c("span", [_vm._v("产 " + _vm._s(item.phenolEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("氰化物(千克)")]),
                _c("span", [
                  _vm._v("排 " + _vm._s(item.cyanideOutfallConcAvgY)),
                ]),
                _c("span", [_vm._v("产 " + _vm._s(item.cyanideEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总砷(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.tasOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.tasEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总铅(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.pbOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.pbEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总镉(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.cdOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.cdEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总铬(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.tcrOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.tcrEntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("六价铬(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.cc6OutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.cc6EntryConcAvgY))]),
              ]),
              _c("div", { staticClass: "three_width" }, [
                _c("span", [_vm._v("总汞(千克)")]),
                _c("span", [_vm._v("排 " + _vm._s(item.hgOutfallConcAvgY))]),
                _c("span", [_vm._v("产 " + _vm._s(item.hgEntryConcAvgY))]),
              ]),
            ])
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".company-wrapper[data-v-24e6099a] {\n  border-radius: 10px;\n  background: linear-gradient(0deg, rgba(68, 123, 252, 0) 70%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  margin-top: 6px;\n}\n.company-wrapper .company-title[data-v-24e6099a] {\n  padding: 10px 10px 8px 15px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20.27px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.company-wrapper .company-tab-wrapper[data-v-24e6099a] {\n  display: flex;\n  margin: 0 10px;\n}\n.company-wrapper .company-tab-wrapper .company-tab-item[data-v-24e6099a] {\n  width: 100%;\n  padding-bottom: 5px;\n  text-align: center;\n  border-bottom: 2px;\n}\n.company-wrapper .company-tab-wrapper .active[data-v-24e6099a] {\n  color: #3982f7;\n  border-bottom: 2px solid #3982f7;\n}\n.company-wrapper .company-item[data-v-24e6099a] {\n  margin: 5px 30px;\n  font-size: 12px;\n}\n.company-wrapper .company-item span[data-v-24e6099a]:first-child {\n  color: #666;\n}\n.company-wrapper .company-item span[data-v-24e6099a]:nth-child(2), .company-wrapper .company-item span[data-v-24e6099a]:nth-child(3) {\n  width: 60%;\n  text-align: right;\n  color: #333;\n  font-weight: bold;\n}\n.company-wrapper .company-box[data-v-24e6099a] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.company-wrapper .company-box .half_width[data-v-24e6099a], .company-wrapper .company-box .three_width[data-v-24e6099a] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0;\n  width: 50%;\n  text-align: center;\n  font-size: 12px;\n  line-height: 20px;\n}\n.company-wrapper .company-box .half_width span[data-v-24e6099a]:first-child, .company-wrapper .company-box .three_width span[data-v-24e6099a]:first-child {\n  color: #666;\n}\n.company-wrapper .company-box .half_width span[data-v-24e6099a]:nth-child(2), .company-wrapper .company-box .half_width span[data-v-24e6099a]:nth-child(3), .company-wrapper .company-box .three_width span[data-v-24e6099a]:nth-child(2), .company-wrapper .company-box .three_width span[data-v-24e6099a]:nth-child(3) {\n  color: #333;\n  font-weight: bold;\n}\n.company-wrapper .company-box .half_width[data-v-24e6099a] {\n  width: 50%;\n}\n.company-wrapper .company-box .three_width[data-v-24e6099a] {\n  width: 33%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e99e2214", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/pollution/detail/handleFacility.vue":
/*!*******************************************************!*\
  !*** ./src/views/pollution/detail/handleFacility.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleFacility.vue?vue&type=template&id=24e6099a&scoped=true& */ "./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true&");
/* harmony import */ var _handleFacility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleFacility.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& */ "./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _handleFacility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24e6099a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/handleFacility.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./handleFacility.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=style&index=0&id=24e6099a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_style_index_0_id_24e6099a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./handleFacility.vue?vue&type=template&id=24e6099a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/handleFacility.vue?vue&type=template&id=24e6099a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_handleFacility_vue_vue_type_template_id_24e6099a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvaGFuZGxlRmFjaWxpdHkudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZT9kOTU3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZT9mZWMxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZT8zNTk2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9oYW5kbGVGYWNpbGl0eS52dWU/ZjA0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9oYW5kbGVGYWNpbGl0eS52dWU/MzZhMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9oYW5kbGVGYWNpbGl0eS52dWU/Y2ZkYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSUE7QUFDQTtBQUNBLHdCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxjQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLGtCQUxBLENBS0E7O0FBTEE7QUFPQSxHQVZBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFSQTtBQWZBLEc7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyxpQ0FBaUM7QUFDMUM7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BELHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRCx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUNBQWlDO0FBQzFDO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRCx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4S0E7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQ0FBc0Msd0JBQXdCLHVHQUF1Ryw0QkFBNEIsaURBQWlELG9CQUFvQixHQUFHLG9EQUFvRCxnQ0FBZ0Msb0JBQW9CLHNCQUFzQix5QkFBeUIsbUJBQW1CLHFCQUFxQix3QkFBd0IsR0FBRywwREFBMEQsa0JBQWtCLG1CQUFtQixHQUFHLDRFQUE0RSxnQkFBZ0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIsR0FBRyxrRUFBa0UsbUJBQW1CLHFDQUFxQyxHQUFHLG1EQUFtRCxxQkFBcUIsb0JBQW9CLEdBQUcsb0VBQW9FLGdCQUFnQixHQUFHLHdJQUF3SSxlQUFlLHNCQUFzQixnQkFBZ0Isc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQixvQkFBb0IsR0FBRywySEFBMkgsa0JBQWtCLDJCQUEyQixrQkFBa0IsZUFBZSx1QkFBdUIsb0JBQW9CLHNCQUFzQixHQUFHLDZKQUE2SixnQkFBZ0IsR0FBRyw0VEFBNFQsZ0JBQWdCLHNCQUFzQixHQUFHLDhEQUE4RCxlQUFlLEdBQUcsK0RBQStELGVBQWUsR0FBRztBQUN4eUU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMscTBCQUFrZTtBQUN4ZjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUduRztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtVCxDQUFnQiwrVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2VTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87YmFja2dyb3VuZDogI2ZmZlwiPlxuICAgIDx2YW4tbmF2LWJhclxuICAgICAgICA6dGl0bGU9XCJuYW1lXCJcbiAgICAgICAgbGVmdC1hcnJvd1xuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcbiAgICA+XG4gICAgPC92YW4tbmF2LWJhcj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXRpdGxlXCI+XG4gICAgICAgIOWfuuacrOS/oeaBr1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pdGVtIGZzXCI+XG4gICAgICAgIDxzcGFuPuWPl+e6s+awtOS9k+WQjeensDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3tiYXNlaW5mby5yZWNlaXZpbmdXYXRlcn19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pdGVtIGZzXCI+XG4gICAgICAgIDxzcGFuPuaOkuawtOWOu+WQkeexu+Weizwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3tiYXNlaW5mby5kaXNjaGFyZ2VEaXJlY3Rpb25UeXBlfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWl0ZW0gZnNcIj5cbiAgICAgICAgPHNwYW4+5rGh5rC05aSE55CG5pa55rOV5ZCN56ewKDEpPC9zcGFuPlxuICAgICAgICA8c3Bhbj57e2Jhc2VpbmZvLnNld2FnZURpc3Bvc2FsTmFtZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1ib3hcIiB2LWZvcj1cIml0ZW0gaW4gc3RPcGVyYXRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+55So55S16YePKOS4h+WNg+eTpuaXtik8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLnBvd2VyQ29uc3VtcHRpb259fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5bmy5rGh5rOl6YePKOWQqCk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5aSE572uIHt7aXRlbS5zbHVkZ2VEaXNwb3NhbH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uc2x1ZGdlR2VuQ291bnR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5rGh5rC05a6e6ZmF5aSE55CG6YePICjkuIfnq4vmlrnnsbMpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5zZXdhZ2VBY3R1YWxQcm9jfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaxoeawtOiuvuiuoeWkhOeQhuiDveWKmyAo56uL5pa557GzL+aXpSk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLnNld2FnZURlc2lnblByb2N9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXRpdGxlXCI+XG4gICAgICAgIOS6p+WTgeS/oeaBryjlhajljoLlkIjorqEpXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktdGFiLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2NvbXBhbnktdGFiLWl0ZW0nLGFjdGl2ZUluZGV4PT09MD8gJ2FjdGl2ZSc6JyddXCIgQGNsaWNrPVwiY2hhbmdlVGFiKDApXCI+XG4gICAgICAgICAg5bqf5rC05rGh5p+T5rqQ5o6S5pS+6YePXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1ib3hcIiB2LWZvcj1cIml0ZW0gaW4gZnNwZkluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5YyW5a2m6ZyA5rCn6YePKOWQqCk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS5jb2RPdXRmYWxsQ29uY0F2Z1l9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uY2RFbnRyeUNvbmNBdmdZfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7msKjmsK4o5ZCoKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLm5oM25PdXRmYWxsQ29uY0F2Z1l9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0ubmgzbkVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+awrijlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0udG5PdXRmYWxsQ29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnRuRW50cnlDb25jQXZnWX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5oC756O3KOWQqCk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS50cE91dGZhbGxDb25jQXZnWX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS50cEVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XHJcblx0XHRcdFx0ICA8c3Bhbj7nlJ/ljJbpnIDmsKfph48o5ZCoKTwvc3Bhbj5cclxuXHRcdFx0XHQgIDxzcGFuPuaOkiB7e2l0ZW0uYm9kT3V0ZmFsbENvbmNBdmdZfX08L3NwYW4+XHJcblx0XHRcdFx0ICA8c3Bhbj7kuqcge3tpdGVtLmJvZEVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5oyl5Y+R6YWaKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS5waGVub2xPdXRmYWxsQ29uY0F2Z1l9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0ucGhlbm9sRW50cnlDb25jQXZnWX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5rCw5YyW54mpKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS5jeWFuaWRlT3V0ZmFsbENvbmNBdmdZfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLmN5YW5pZGVFbnRyeUNvbmNBdmdZfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7mgLvnoLco5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnRhc091dGZhbGxDb25jQXZnWX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS50YXNFbnRyeUNvbmNBdmdZfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7mgLvpk4Uo5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnBiT3V0ZmFsbENvbmNBdmdZfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnBiRW50cnlDb25jQXZnWX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5oC76ZWJKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS5jZE91dGZhbGxDb25jQXZnWX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS5jZEVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+mTrCjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0udGNyT3V0ZmFsbENvbmNBdmdZfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnRjckVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuWFreS7t+mTrCjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uY2M2T3V0ZmFsbENvbmNBdmdZfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLmNjNkVudHJ5Q29uY0F2Z1l9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+axnijljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uaGdPdXRmYWxsQ29uY0F2Z1l9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uaGdFbnRyeUNvbmNBdmdZfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBzZ3Nwc0RldGFpbFdzIH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImhhbmRsZUZhY2lsaXR5XCIsXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG5cdFx0XHRcdG5hbWU6JycsXHJcblx0XHRcdFx0YmFzZWluZm86e30sXHJcblx0XHRcdFx0c3RPcGVyYXRpb25zOltdLFxyXG5cdFx0XHRcdGZzcGZJbmZvOltdLC8v5bqf5rC05rGh5p+T5rqQ5o6S5pS+6YePXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLm5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5uYW1lO1xuXHRcdFx0dGhpcy5sb2FkRGF0YSgpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cdFx0XHRsb2FkRGF0YSgpe1xyXG5cdFx0XHRcdHNnc3BzRGV0YWlsV3Moe2Jhc2VJZDp0aGlzLiRyb3V0ZS5xdWVyeS5pZH0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRsZXQgcmRhdGEgPSByZXMuZGF0YS53YXRlcjtcclxuXHRcdFx0XHRcdHRoaXMuYmFzZWluZm8gPSByZGF0YS5xeTtcclxuXHRcdFx0XHRcdHRoaXMuc3RPcGVyYXRpb25zID0gcmRhdGEuc3RPcGVyYXRpb25zO1xyXG5cdFx0XHRcdFx0dGhpcy5mc3BmSW5mbyA9IHJkYXRhLnN0V2F0ZXJNRGF0YTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAuY29tcGFueS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgNzAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIG1hcmdpbi10b3A6IDZweDtcblxuICAgIC5jb21wYW55LXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA4cHggMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDIwLjI3cHg7XG4gICAgICBjb2xvcjogIzQ0N2JmYztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIC5jb21wYW55LXRhYi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgLmNvbXBhbnktdGFiLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBjb2xvcjogIzM5ODJmNztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOTgyZjc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBhbnktaXRlbSB7XG4gICAgICBtYXJnaW46IDVweCAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG5cbiAgICAgIHNwYW46bnRoLWNoaWxkKDIpLCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBhbnktYm94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC5oYWxmX3dpZHRoLCAudGhyZWVfd2lkdGgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSwgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oYWxmX3dpZHRoIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLnRocmVlX3dpZHRoIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiBcImNhbGMoMTAwdmgpXCIsXG4gICAgICAgIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIixcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0ubmFtZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktdGl0bGVcIiB9LCBbX3ZtLl92KFwiIOWfuuacrOS/oeaBryBcIildKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaXRlbSBmc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y+X57qz5rC05L2T5ZCN56ewXCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VpbmZvLnJlY2VpdmluZ1dhdGVyKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaXRlbSBmc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5rC05Y675ZCR57G75Z6LXCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VpbmZvLmRpc2NoYXJnZURpcmVjdGlvblR5cGUpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pdGVtIGZzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsaHmsLTlpITnkIbmlrnms5XlkI3np7AoMSlcIildKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYmFzZWluZm8uc2V3YWdlRGlzcG9zYWxOYW1lKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnN0T3BlcmF0aW9ucywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktYm94XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlKjnlLXph48o5LiH5Y2D55Om5pe2KVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnBvd2VyQ29uc3VtcHRpb24pKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bmy5rGh5rOl6YePKOWQqClcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkhOe9riBcIiArIF92bS5fcyhpdGVtLnNsdWRnZURpc3Bvc2FsKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnNsdWRnZUdlbkNvdW50KSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaxoeawtOWunumZheWkhOeQhumHjyAo5LiH56uL5pa557GzKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNld2FnZUFjdHVhbFByb2MpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5rC06K6+6K6h5aSE55CG6IO95YqbICjnq4vmlrnnsbMv5pelKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNld2FnZURlc2lnblByb2MpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOS6p+WTgeS/oeaBryjlhajljoLlkIjorqEpIFwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktdGFiLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcImNvbXBhbnktdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVJbmRleCA9PT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKDApXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIg5bqf5rC05rGh5p+T5rqQ5o6S5pS+6YePIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl9sKF92bS5mc3BmSW5mbywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktYm94XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YyW5a2m6ZyA5rCn6YePKOWQqClcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLmNvZE91dGZhbGxDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5jZEVudHJ5Q29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuawqOawrijlkKgpXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5uaDNuT3V0ZmFsbENvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLm5oM25FbnRyeUNvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvmsK4o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0udG5PdXRmYWxsQ29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udG5FbnRyeUNvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvno7co5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0udHBPdXRmYWxsQ29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udHBFbnRyeUNvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlJ/ljJbpnIDmsKfph48o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0uYm9kT3V0ZmFsbENvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLmJvZEVudHJ5Q29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaMpeWPkemFmijljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnBoZW5vbE91dGZhbGxDb25jQXZnWSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0ucGhlbm9sRW50cnlDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCw5YyW54mpKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0uY3lhbmlkZU91dGZhbGxDb25jQXZnWSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0uY3lhbmlkZUVudHJ5Q29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+egtyjljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS50YXNPdXRmYWxsQ29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udGFzRW50cnlDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC76ZOFKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnBiT3V0ZmFsbENvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnBiRW50cnlDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC76ZWJKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLmNkT3V0ZmFsbENvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLmNkRW50cnlDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC76ZOsKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnRjck91dGZhbGxDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS50Y3JFbnRyeUNvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlha3ku7fpk6wo5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0uY2M2T3V0ZmFsbENvbmNBdmdZKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLmNjNkVudHJ5Q29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+axnijljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5oZ091dGZhbGxDb25jQXZnWSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5oZ0VudHJ5Q29uY0F2Z1kpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbXBhbnktd3JhcHBlcltkYXRhLXYtMjRlNjA5OWFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDcwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDYpIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktdGl0bGVbZGF0YS12LTI0ZTYwOTlhXSB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggOHB4IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAyMC4yN3B4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS10YWItd3JhcHBlcltkYXRhLXYtMjRlNjA5OWFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS10YWItd3JhcHBlciAuY29tcGFueS10YWItaXRlbVtkYXRhLXYtMjRlNjA5OWFdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS10YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi0yNGU2MDk5YV0ge1xcbiAgY29sb3I6ICMzOTgyZjc7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5ODJmNztcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1pdGVtW2RhdGEtdi0yNGU2MDk5YV0ge1xcbiAgbWFyZ2luOiA1cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1pdGVtIHNwYW5bZGF0YS12LTI0ZTYwOTlhXTpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1pdGVtIHNwYW5bZGF0YS12LTI0ZTYwOTlhXTpudGgtY2hpbGQoMiksIC5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktaXRlbSBzcGFuW2RhdGEtdi0yNGU2MDk5YV06bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiA2MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94W2RhdGEtdi0yNGU2MDk5YV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLmhhbGZfd2lkdGhbZGF0YS12LTI0ZTYwOTlhXSwgLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLnRocmVlX3dpZHRoW2RhdGEtdi0yNGU2MDk5YV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWJveCAuaGFsZl93aWR0aCBzcGFuW2RhdGEtdi0yNGU2MDk5YV06Zmlyc3QtY2hpbGQsIC5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC50aHJlZV93aWR0aCBzcGFuW2RhdGEtdi0yNGU2MDk5YV06Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC5oYWxmX3dpZHRoIHNwYW5bZGF0YS12LTI0ZTYwOTlhXTpudGgtY2hpbGQoMiksIC5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC5oYWxmX3dpZHRoIHNwYW5bZGF0YS12LTI0ZTYwOTlhXTpudGgtY2hpbGQoMyksIC5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC50aHJlZV93aWR0aCBzcGFuW2RhdGEtdi0yNGU2MDk5YV06bnRoLWNoaWxkKDIpLCAuY29tcGFueS13cmFwcGVyIC5jb21wYW55LWJveCAudGhyZWVfd2lkdGggc3BhbltkYXRhLXYtMjRlNjA5OWFdOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWJveCAuaGFsZl93aWR0aFtkYXRhLXYtMjRlNjA5OWFdIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC50aHJlZV93aWR0aFtkYXRhLXYtMjRlNjA5OWFdIHtcXG4gIHdpZHRoOiAzMyU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFuZGxlRmFjaWxpdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRlNjA5OWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJlOTllMjIxNFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbmRsZUZhY2lsaXR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0ZTYwOTlhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFuZGxlRmFjaWxpdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRlNjA5OWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hhbmRsZUZhY2lsaXR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGU2MDk5YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oYW5kbGVGYWNpbGl0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hhbmRsZUZhY2lsaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9oYW5kbGVGYWNpbGl0eS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGU2MDk5YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI0ZTYwOTlhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI0ZTYwOTlhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI0ZTYwOTlhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI0ZTYwOTlhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oYW5kbGVGYWNpbGl0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRlNjA5OWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjRlNjA5OWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2hhbmRsZUZhY2lsaXR5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFuZGxlRmFjaWxpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbmRsZUZhY2lsaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hhbmRsZUZhY2lsaXR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0ZTYwOTlhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGFuZGxlRmFjaWxpdHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0ZTYwOTlhJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==