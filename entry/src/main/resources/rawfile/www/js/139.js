(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/airLocationMap.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/gis/components/mapItem.vue */ "./src/views/gis/components/mapItem.vue");
/* harmony import */ var _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/gis/components/pop/index */ "./src/views/gis/components/pop/index.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  components: {
    mapItem: _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    mapSitePop: _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showSitePop: false,
      siteObj: {
        name: '',
        type: 0
      },
      location: null,
      mapList: [],
      air: [],
      water: [],
      pollution: [],
      siteName: '',
      siteId: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.location = [this.$route.query.longitude, this.$route.query.latitude];
    this.siteName = this.$route.query.siteName;
    this.siteId = this.$route.query.siteId;
  },
  methods: {
    initSite: function initSite() {
      if (this.$route.query.siteInitType === 'water') {
        this.queryWaterSite();
      } else {
        this.queryAirSite();
      }
    },
    queryWaterSite: function queryWaterSite() {
      this.$refs.mapRef.addPoint({
        JD: this.location[0],
        WD: this.location[1],
        type: "water",
        id: this.siteId,
        monitorMethod: this.$route.query.monitorType,
        //自动/手工
        sectionId: this.siteId,
        siteType: this.$route.query.siteType //断面/湖库

      }, "water_layer");
    },
    queryAirSite: function queryAirSite() {
      this.$refs.mapRef.addPoint({
        JD: this.location[0],
        WD: this.location[1],
        type: "air",
        id: this.siteId
      }, "water_layer");
    },
    //地图点击弹框展示
    showSite: function showSite(show, obj) {
      if (obj && (obj.siteType || obj.type)) {
        this.showSitePop = show;
        this.siteObj = obj;
      }
    },
    //关闭地图弹框
    closePop: function closePop() {
      this.showSitePop = false;
      this.$refs.mapRef.clearSelectByAttribute();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { position: "relative" } },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.siteName, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("mapItem", {
        ref: "mapRef",
        attrs: { location: _vm.location },
        on: { inited: _vm.initSite, showSite: _vm.showSite },
      }),
      _vm.showSitePop
        ? _c("mapSitePop", {
            attrs: { siteObj: _vm.siteObj },
            on: { closePop: _vm.closePop },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-cb561456] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.home-header-wrapper[data-v-cb561456] {\n  padding: 10px 15px;\n  background-color: #fff;\n  font-weight: bold;\n}\n.home-header-wrapper img[data-v-cb561456] {\n  width: 24px;\n  height: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2a1b9b3b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/gis/airLocationMap.vue":
/*!******************************************!*\
  !*** ./src/views/gis/airLocationMap.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airLocationMap.vue?vue&type=template&id=cb561456&scoped=true& */ "./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true&");
/* harmony import */ var _airLocationMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airLocationMap.vue?vue&type=script&lang=js& */ "./src/views/gis/airLocationMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& */ "./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airLocationMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb561456",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/airLocationMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/airLocationMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/views/gis/airLocationMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./airLocationMap.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=style&index=0&id=cb561456&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_style_index_0_id_cb561456_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./airLocationMap.vue?vue&type=template&id=cb561456&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/airLocationMap.vue?vue&type=template&id=cb561456&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airLocationMap_vue_vue_type_template_id_cb561456_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9haXJMb2NhdGlvbk1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9haXJMb2NhdGlvbk1hcC52dWU/M2M3YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2FpckxvY2F0aW9uTWFwLnZ1ZT83N2VkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvYWlyTG9jYXRpb25NYXAudnVlPzNhNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9haXJMb2NhdGlvbk1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9haXJMb2NhdGlvbk1hcC52dWU/Yjg4OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2FpckxvY2F0aW9uTWFwLnZ1ZT8xODQwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvYWlyTG9jYXRpb25NYXAudnVlP2IxNWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxlQURBO0FBRUE7QUFDQSxzRkFEQTtBQUVBO0FBRkEsR0FGQTtBQU1BLE1BTkEsa0JBTUE7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxnQkFEQTtBQUVBO0FBRkEsT0FGQTtBQU1BLG9CQU5BO0FBT0EsaUJBUEE7QUFRQSxhQVJBO0FBU0EsZUFUQTtBQVVBLG1CQVZBO0FBV0Esa0JBWEE7QUFZQTtBQVpBO0FBY0EsR0FyQkE7QUFzQkEsU0F0QkEscUJBc0JBLENBQ0EsQ0F2QkE7QUF3QkEsU0F4QkEscUJBd0JBO0FBQ0EscUJBQ0EsMkJBREEsRUFFQSwwQkFGQTtBQUlBO0FBQ0E7QUFDQSxHQS9CQTtBQWdDQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxrQkFSQSw0QkFRQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSw0QkFGQTtBQUdBLHFCQUhBO0FBSUEsdUJBSkE7QUFLQSxvREFMQTtBQUtBO0FBQ0EsOEJBTkE7QUFPQSw0Q0FQQSxDQU9BOztBQVBBLFNBUUEsYUFSQTtBQVNBLEtBbEJBO0FBbUJBLGdCQW5CQSwwQkFtQkE7QUFDQTtBQUNBLDRCQURBO0FBRUEsNEJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsU0FLQSxhQUxBO0FBTUEsS0ExQkE7QUEyQkE7QUFDQSxZQTVCQSxvQkE0QkEsSUE1QkEsRUE0QkEsR0E1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakNBO0FBa0NBO0FBQ0EsWUFuQ0Esc0JBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBaENBLEc7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsdUJBQXVCLEVBQUU7QUFDN0M7QUFDQTtBQUNBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekMsYUFBYSwrQ0FBK0M7QUFDNUQsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLGlCQUFpQix5QkFBeUI7QUFDMUMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMseUJBQXlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcseUNBQXlDLHVCQUF1QiwyQkFBMkIsc0JBQXNCLEdBQUcsNkNBQTZDLGdCQUFnQixpQkFBaUIsR0FBRztBQUNyVTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxzeUJBQWdkO0FBQ3RlO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1hmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR25HO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXVTLENBQWdCLCtVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzEzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgOnRpdGxlPVwic2l0ZU5hbWVcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj48L3Zhbi1uYXYtYmFyPlxyXG5cclxuICAgIDwhLS3lnLDlm74tLT5cclxuICAgIDxtYXBJdGVtIEBpbml0ZWQ9XCJpbml0U2l0ZVwiIHJlZj1cIm1hcFJlZlwiIEBzaG93U2l0ZT1cInNob3dTaXRlXCIgOmxvY2F0aW9uPVwibG9jYXRpb25cIi8+XHJcblxyXG4gICAgPCEtLeWcsOWbvuW8ueahhi0tPlxyXG4gICAgPG1hcFNpdGVQb3Agdi1pZj1cInNob3dTaXRlUG9wXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlUG9wPVwiY2xvc2VQb3BcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbWFwSXRlbSBmcm9tICdAL3ZpZXdzL2dpcy9jb21wb25lbnRzL21hcEl0ZW0udnVlJ1xyXG4gIGltcG9ydCBtYXBTaXRlUG9wIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9pbmRleFwiO1xyXG5cclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIG1hcEl0ZW0sXHJcbiAgICAgIG1hcFNpdGVQb3AsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93U2l0ZVBvcDogZmFsc2UsXHJcbiAgICAgICAgc2l0ZU9iajoge1xyXG4gICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhdGlvbjogbnVsbCxcclxuICAgICAgICBtYXBMaXN0OiBbXSxcclxuICAgICAgICBhaXI6IFtdLFxyXG4gICAgICAgIHdhdGVyOiBbXSxcclxuICAgICAgICBwb2xsdXRpb246IFtdLFxyXG4gICAgICAgIHNpdGVOYW1lOiAnJyxcclxuICAgICAgICBzaXRlSWQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSBbXHJcbiAgICAgICAgdGhpcy4kcm91dGUucXVlcnkubG9uZ2l0dWRlLFxyXG4gICAgICAgIHRoaXMuJHJvdXRlLnF1ZXJ5LmxhdGl0dWRlLFxyXG4gICAgICBdXHJcbiAgICAgIHRoaXMuc2l0ZU5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zaXRlTmFtZTtcclxuICAgICAgdGhpcy5zaXRlSWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zaXRlSWQ7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBpbml0U2l0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5LnNpdGVJbml0VHlwZT09PSd3YXRlcicpe1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVdhdGVyU2l0ZSgpXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5xdWVyeUFpclNpdGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcXVlcnlXYXRlclNpdGUoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5tYXBSZWYuYWRkUG9pbnQoe1xyXG4gICAgICAgICAgSkQ6IHRoaXMubG9jYXRpb25bMF0sXHJcbiAgICAgICAgICBXRDogdGhpcy5sb2NhdGlvblsxXSxcclxuICAgICAgICAgIHR5cGU6IFwid2F0ZXJcIixcclxuICAgICAgICAgIGlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgIG1vbml0b3JNZXRob2Q6IHRoaXMuJHJvdXRlLnF1ZXJ5Lm1vbml0b3JUeXBlLCAvL+iHquWKqC/miYvlt6VcclxuICAgICAgICAgIHNlY3Rpb25JZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICBzaXRlVHlwZTogdGhpcy4kcm91dGUucXVlcnkuc2l0ZVR5cGUsIC8v5pat6Z2iL+a5luW6k1xyXG4gICAgICAgIH0sIFwid2F0ZXJfbGF5ZXJcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5QWlyU2l0ZSgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5hZGRQb2ludCh7XHJcbiAgICAgICAgICBKRDogdGhpcy5sb2NhdGlvblswXSxcclxuICAgICAgICAgIFdEOiB0aGlzLmxvY2F0aW9uWzFdLFxyXG4gICAgICAgICAgdHlwZTogXCJhaXJcIixcclxuICAgICAgICAgIGlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICB9LCBcIndhdGVyX2xheWVyXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WcsOWbvueCueWHu+W8ueahhuWxleekulxyXG4gICAgICBzaG93U2l0ZShzaG93LCBvYmopIHtcclxuICAgICAgICBpZiAob2JqICYmIChvYmouc2l0ZVR5cGUgfHwgb2JqLnR5cGUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dTaXRlUG9wID0gc2hvdztcclxuICAgICAgICAgIHRoaXMuc2l0ZU9iaiA9IG9iajtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5YWz6Zet5Zyw5Zu+5by55qGGXHJcbiAgICAgIGNsb3NlUG9wKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1NpdGVQb3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5jbGVhclNlbGVjdEJ5QXR0cmlidXRlKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuZnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1oZWFkZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5zaXRlTmFtZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwibWFwSXRlbVwiLCB7XG4gICAgICAgIHJlZjogXCJtYXBSZWZcIixcbiAgICAgICAgYXR0cnM6IHsgbG9jYXRpb246IF92bS5sb2NhdGlvbiB9LFxuICAgICAgICBvbjogeyBpbml0ZWQ6IF92bS5pbml0U2l0ZSwgc2hvd1NpdGU6IF92bS5zaG93U2l0ZSB9LFxuICAgICAgfSksXG4gICAgICBfdm0uc2hvd1NpdGVQb3BcbiAgICAgICAgPyBfYyhcIm1hcFNpdGVQb3BcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlUG9wOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mc1tkYXRhLXYtY2I1NjE0NTZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZS1oZWFkZXItd3JhcHBlcltkYXRhLXYtY2I1NjE0NTZdIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhvbWUtaGVhZGVyLXdyYXBwZXIgaW1nW2RhdGEtdi1jYjU2MTQ1Nl0ge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyTG9jYXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I1NjE0NTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyYTFiOWIzYlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpckxvY2F0aW9uTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNiNTYxNDU2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyTG9jYXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I1NjE0NTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FpckxvY2F0aW9uTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjU2MTQ1NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9haXJMb2NhdGlvbk1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FpckxvY2F0aW9uTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9haXJMb2NhdGlvbk1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYjU2MTQ1NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNiNTYxNDU2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NiNTYxNDU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NiNTYxNDU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NiNTYxNDU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9haXJMb2NhdGlvbk1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1NjE0NTYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2I1NjE0NTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvYWlyTG9jYXRpb25NYXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJMb2NhdGlvbk1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyTG9jYXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyTG9jYXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I1NjE0NTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJMb2NhdGlvbk1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1NjE0NTYmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9