(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/purPlantMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/purPlantMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/gis/components/mapItem.vue */ "./src/views/gis/components/mapItem.vue");
/* harmony import */ var _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/gis/components/pop/index */ "./src/views/gis/components/pop/index.vue");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");





//
//
//
//
//
//
//
//
//
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
  name: "purPlantMap",
  components: {
    mapItem: _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    mapSitePop: _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      location: null,
      mapType: 0,
      mapList: [],
      mapAirList: [],
      mapWaterList: [],
      mapPollutionList: [],
      mapTaskList: [],
      showSitePop: false,
      siteObj: {
        name: '',
        type: 0
      }
    };
  },
  mounted: function mounted() {
    this.location = ['', ''];
  },
  methods: {
    queryWater: function queryWater() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var water;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.queryPurPlant();

              case 2:
                water = _context.sent;
                water.map(function (item) {
                  _this.$refs.mapRef.addPoint(item, 'water_layer');
                });

                _this.$refs.mapRef.panToCoordinate([102.7951, 24.8278], 5);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //地图点击弹框展示
    showSite: function showSite(show, obj) {
      this.showSitePop = show;
      this.siteObj = obj;
    },
    //查询污水处理厂
    queryPurPlant: function queryPurPlant() {
      var _this2 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_7__["waterPlantList"])({
            region: "昆明市"
          }).then(function (res) {
            var filterD = res.data.map(function (item) {
              //type地图图标区分 siteType查询站点数据详情调接口使用
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                JD: item.longitude,
                WD: item.dimension,
                type: 'purPlant'
              });
            });
            _this2.mapWaterList = filterD;
            resolve(filterD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //关闭地图弹框
    closePop: function closePop() {
      this.showSitePop = false;
      this.$refs.mapRef.clearSelectByAttribute();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "calc(100vh)", position: "relative" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "水环境管理", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("mapItem", {
        ref: "mapRef",
        attrs: { location: _vm.location },
        on: { inited: _vm.queryWater, showSite: _vm.showSite },
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

/***/ "./src/views/gis/purPlantMap.vue":
/*!***************************************!*\
  !*** ./src/views/gis/purPlantMap.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true& */ "./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true&");
/* harmony import */ var _purPlantMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purPlantMap.vue?vue&type=script&lang=js& */ "./src/views/gis/purPlantMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _purPlantMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54f5ccb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/purPlantMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/purPlantMap.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/gis/purPlantMap.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlantMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./purPlantMap.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/purPlantMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlantMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/purPlantMap.vue?vue&type=template&id=54f5ccb6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlantMap_vue_vue_type_template_id_54f5ccb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9wdXJQbGFudE1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9wdXJQbGFudE1hcC52dWU/ZGM5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL3B1clBsYW50TWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL3B1clBsYW50TWFwLnZ1ZT9iYTA5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvcHVyUGxhbnRNYXAudnVlP2FlNTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EscUJBREE7QUFFQTtBQUNBLHNGQURBO0FBRUE7QUFGQSxHQUZBO0FBTUEsTUFOQSxrQkFNQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxnQkFGQTtBQUdBLGlCQUhBO0FBSUEsb0JBSkE7QUFLQSxzQkFMQTtBQU1BLDBCQU5BO0FBT0EscUJBUEE7QUFRQSx3QkFSQTtBQVNBO0FBQ0EsZ0JBREE7QUFFQTtBQUZBO0FBVEE7QUFjQSxHQXJCQTtBQXNCQSxTQXRCQSxxQkFzQkE7QUFDQTtBQUNBLEdBeEJBO0FBeUJBO0FBQ0EsY0FEQSx3QkFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0EscUJBREE7O0FBQUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQSxpQkFGQTs7QUFHQTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BLEtBUEE7QUFRQTtBQUNBLFlBVEEsb0JBU0EsSUFUQSxFQVNBLEdBVEEsRUFTQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxpQkFkQSwyQkFjQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsYUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLGFBSEE7QUFJQTtBQUNBO0FBQ0EsV0FUQTtBQVVBLFNBWEEsQ0FXQTtBQUNBO0FBQ0E7QUFDQSxPQWZBO0FBZ0JBLEtBL0JBO0FBZ0NBO0FBQ0EsWUFqQ0Esc0JBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBekJBLEc7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsOENBQThDLEVBQUU7QUFDcEU7QUFDQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekMsYUFBYSxpREFBaUQ7QUFDOUQsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLGlCQUFpQix5QkFBeUI7QUFDMUMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFzRztBQUN2QztBQUNMOzs7QUFHMUQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb1MsQ0FBZ0IsNFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzE1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoKTtwb3NpdGlvbjogcmVsYXRpdmVcIj5cclxuICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgIHRpdGxlPVwi5rC0546v5aKD566h55CGXCJcclxuICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICA+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG5cclxuICAgIDwhLS3lnLDlm74tLT5cclxuICAgIDxtYXBJdGVtIHJlZj1cIm1hcFJlZlwiIEBpbml0ZWQ9XCJxdWVyeVdhdGVyXCIgQHNob3dTaXRlPVwic2hvd1NpdGVcIiA6bG9jYXRpb249XCJsb2NhdGlvblwiLz5cclxuXHJcbiAgICA8IS0t5Zyw5Zu+5by55qGGLS0+XHJcbiAgICA8bWFwU2l0ZVBvcCB2LWlmPVwic2hvd1NpdGVQb3BcIiA6c2l0ZU9iaj1cInNpdGVPYmpcIiBAY2xvc2VQb3A9XCJjbG9zZVBvcFwiLz5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBtYXBJdGVtIGZyb20gJ0Avdmlld3MvZ2lzL2NvbXBvbmVudHMvbWFwSXRlbS52dWUnXHJcbiAgaW1wb3J0IG1hcFNpdGVQb3AgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2luZGV4XCI7XHJcbiAgaW1wb3J0IHsgd2F0ZXJQbGFudExpc3QgfSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJwdXJQbGFudE1hcFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBtYXBJdGVtLFxyXG4gICAgICBtYXBTaXRlUG9wLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9jYXRpb246IG51bGwsXHJcbiAgICAgICAgbWFwVHlwZTogMCxcclxuICAgICAgICBtYXBMaXN0OiBbXSxcclxuICAgICAgICBtYXBBaXJMaXN0OiBbXSxcclxuICAgICAgICBtYXBXYXRlckxpc3Q6IFtdLFxyXG4gICAgICAgIG1hcFBvbGx1dGlvbkxpc3Q6IFtdLFxyXG4gICAgICAgIG1hcFRhc2tMaXN0OiBbXSxcclxuICAgICAgICBzaG93U2l0ZVBvcDogZmFsc2UsXHJcbiAgICAgICAgc2l0ZU9iajoge1xyXG4gICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSBbJycsICcnXVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgYXN5bmMgcXVlcnlXYXRlcigpIHtcclxuICAgICAgICBsZXQgd2F0ZXIgPSBhd2FpdCB0aGlzLnF1ZXJ5UHVyUGxhbnQoKTtcclxuICAgICAgICB3YXRlci5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5hZGRQb2ludChpdGVtLCAnd2F0ZXJfbGF5ZXInKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLnBhblRvQ29vcmRpbmF0ZShbMTAyLjc5NTEsIDI0LjgyNzhdLCA1KTtcclxuICAgICAgfSxcclxuICAgICAgLy/lnLDlm77ngrnlh7vlvLnmoYblsZXnpLpcclxuICAgICAgc2hvd1NpdGUoc2hvdywgb2JqKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2l0ZVBvcCA9IHNob3c7XHJcbiAgICAgICAgdGhpcy5zaXRlT2JqID0gb2JqO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouaxoeawtOWkhOeQhuWOglxyXG4gICAgICBxdWVyeVB1clBsYW50KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdhdGVyUGxhbnRMaXN0KHtcclxuICAgICAgICAgICAgICByZWdpb246IFwi5piG5piO5biCXCIsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90eXBl5Zyw5Zu+5Zu+5qCH5Yy65YiGIHNpdGVUeXBl5p+l6K+i56uZ54K55pWw5o2u6K+m5oOF6LCD5o6l5Y+j5L2/55SoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIEpEOiBpdGVtLmxvbmdpdHVkZSwgV0Q6IGl0ZW0uZGltZW5zaW9uLCB0eXBlOiAncHVyUGxhbnQnLH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHRoaXMubWFwV2F0ZXJMaXN0ID0gZmlsdGVyRDtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlckQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/lhbPpl63lnLDlm77lvLnmoYZcclxuICAgICAgY2xvc2VQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2l0ZVBvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmNsZWFyU2VsZWN0QnlBdHRyaWJ1dGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aClcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuawtOeOr+Wig+euoeeQhlwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJtYXBJdGVtXCIsIHtcbiAgICAgICAgcmVmOiBcIm1hcFJlZlwiLFxuICAgICAgICBhdHRyczogeyBsb2NhdGlvbjogX3ZtLmxvY2F0aW9uIH0sXG4gICAgICAgIG9uOiB7IGluaXRlZDogX3ZtLnF1ZXJ5V2F0ZXIsIHNob3dTaXRlOiBfdm0uc2hvd1NpdGUgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLnNob3dTaXRlUG9wXG4gICAgICAgID8gX2MoXCJtYXBTaXRlUG9wXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVPYmo6IF92bS5zaXRlT2JqIH0sXG4gICAgICAgICAgICBvbjogeyBjbG9zZVBvcDogX3ZtLmNsb3NlUG9wIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHVyUGxhbnRNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0ZjVjY2I2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3B1clBsYW50TWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHVyUGxhbnRNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NGY1Y2NiNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NGY1Y2NiNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NGY1Y2NiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NGY1Y2NiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHVyUGxhbnRNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0ZjVjY2I2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0ZjVjY2I2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZ2lzL3B1clBsYW50TWFwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVyUGxhbnRNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3B1clBsYW50TWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVyUGxhbnRNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0ZjVjY2I2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==