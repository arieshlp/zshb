(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "penaltyDetail",
  components: {},
  data: function data() {
    return {
      id: "",
      detailInfo: {}
    };
  },
  mounted: function mounted() {
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods: {
    toMap: function toMap() {
      if (this.detailInfo.entId && this.detailInfo.entId != '') {
        this.$router.push({
          name: "locationMap",
          query: {
            id: this.detailInfo.entId,
            siteName: this.detailInfo.name,
            JD: 102.43597,
            WD: 24.93177,
            types: 'basic'
          }
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('未获取到定位');
      }
    },
    loadData: function loadData() {
      var _this = this;

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["xzcfInfo"])({
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.detailInfo.name, "left-arrow": "" },
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
          _c("div", { staticClass: "base_title" }, [
            _vm._v("行政处罚"),
            _c("span", { staticClass: "info_right" }, [
              _vm._v(_vm._s(_vm.detailInfo.date)),
            ]),
          ]),
          _c(
            "div",
            {
              staticClass: "main_content",
              staticStyle: { padding: "10px 30px" },
            },
            [
              _c("div", { staticClass: "whole_width no_bottom" }, [
                _c("span", [_vm._v("违法行为")]),
                _c("span", [_vm._v(_vm._s(_vm.detailInfo.msg))]),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "0px 10px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("行政处罚案件信息")]),
                _c(
                  "span",
                  {
                    staticClass: "detail_title",
                    staticStyle: { "font-weight": "normal" },
                  },
                  [_vm._v("处罚金额")]
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      color: "rgba(18, 18, 54, 0.5)",
                      "margin-left": "4px",
                    },
                  },
                  [_vm._v(_vm._s(_vm.detailInfo.amount) + "万元")]
                ),
              ]),
              _c("div", { staticClass: "main_content" }, [
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("决定书文号")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.no))]),
                ]),
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("联系人")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.contact))]),
                ]),
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("当事人")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.name))]),
                ]),
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("联系电话")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.tel))]),
                ]),
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("地址")]),
                  _c(
                    "span",
                    {
                      staticClass: "address",
                      on: {
                        click: function ($event) {
                          return _vm.toMap()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.detailInfo.address))]
                  ),
                ]),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { background: "#fff", margin: "6px 10px" },
            },
            [
              _c("div", { staticClass: "main_content" }, [
                _c("div", { staticClass: "whole_width" }, [
                  _c("span", [_vm._v("处罚依据")]),
                  _c("span", [_vm._v(_vm._s(_vm.detailInfo.reason))]),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/pollution/detail/penaltyDetail.vue":
/*!******************************************************!*\
  !*** ./src/views/pollution/detail/penaltyDetail.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true& */ "./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true&");
/* harmony import */ var _penaltyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penaltyDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _penaltyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d8a7054a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/penaltyDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/penaltyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/penaltyDetail.vue?vue&type=template&id=d8a7054a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDetail_vue_vue_type_template_id_d8a7054a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcGVuYWx0eURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcGVuYWx0eURldGFpbC52dWU/N2FjYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9wZW5hbHR5RGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9wZW5hbHR5RGV0YWlsLnZ1ZT9lZWNiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3BlbmFsdHlEZXRhaWwudnVlPzg0M2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTtBQUdBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGdCQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsWUFEQTtBQUVBO0FBRkE7QUFJQSxHQVZBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFDQSxxQ0FEQTtBQUVBLDBDQUZBO0FBR0EseUJBSEE7QUFJQSx3QkFKQTtBQUtBO0FBTEE7QUFGQTtBQVVBLE9BWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxZQWpCQSxzQkFpQkE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxPQUxBO0FBTUE7QUF4QkE7QUFmQSxHOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlLHFCQUFxQixFQUFFO0FBQzNDO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQStDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLGVBQWUsb0RBQW9ELEVBQUU7QUFDOUU7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLHVDQUF1QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELGFBQWE7QUFDYjtBQUNBLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhCQUE4QjtBQUN2RCwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlDQUF5QztBQUNyRSxhQUFhO0FBQ2I7QUFDQSx5QkFBeUIsOEJBQThCO0FBQ3ZELDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDs7O0FBRzVEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWtULENBQWdCLDhVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZlwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgICAgICAgICAgOnRpdGxlPVwiZGV0YWlsSW5mby5uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICAgICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX3RpdGxlXCI+6KGM5pS/5aSE572aPHNwYW4gY2xhc3M9XCJpbmZvX3JpZ2h0XCI+e3tkZXRhaWxJbmZvLmRhdGV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZzogMTBweCAzMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj7ov53ms5XooYzkuLo8L3NwYW4+PHNwYW4+e3tkZXRhaWxJbmZvLm1zZ319PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjBweCAxMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+6KGM5pS/5aSE572a5qGI5Lu25L+h5oGvPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRldGFpbF90aXRsZVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IG5vcm1hbDtcIj7lpITnvZrph5Hpop08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEycHg7Y29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTttYXJnaW4tbGVmdDogNHB4O1wiPnt7ZGV0YWlsSW5mby5hbW91bnR9feS4h+WFgzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5Yaz5a6a5Lmm5paH5Y+3PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5ub319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6IGU57O75Lq6PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5jb250YWN0fX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5b2T5LqL5Lq6PC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby5uYW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6IGU57O755S16K+dPC9zcGFuPjxzcGFuPnt7ZGV0YWlsSW5mby50ZWx9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lnLDlnYA8L3NwYW4+PHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgQGNsaWNrPVwidG9NYXAoKVwiPnt7ZGV0YWlsSW5mby5hZGRyZXNzfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO21hcmdpbjo2cHggMTBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5aSE572a5L6d5o2uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2RldGFpbEluZm8ucmVhc29ufX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuXHRcdHh6Y2ZJbmZvXHJcblx0fSBmcm9tIFwiQC9hcGkvcG9sbHV0aW9uX3NvdXJjZVwiO1xyXG5cdGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJwZW5hbHR5RGV0YWlsXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cdFx0XHRcdFx0XHRcdGlkOlwiXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGV0YWlsSW5mbzp7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHRcdFx0XHRtb3VudGVkKCl7XHJcblx0XHRcdFx0XHR0aGlzLmlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblx0XHRcdFx0XHR0b01hcCgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZGV0YWlsSW5mby5lbnRJZCYmdGhpcy5kZXRhaWxJbmZvLmVudElkIT0nJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6IFwibG9jYXRpb25NYXBcIixcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6dGhpcy5kZXRhaWxJbmZvLmVudElkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpdGVOYW1lOnRoaXMuZGV0YWlsSW5mby5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEpEOiAxMDIuNDM1OTcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0V0Q6IDI0LjkzMTc3LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVzOidiYXNpYydcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFRvYXN0KCfmnKrojrflj5bliLDlrprkvY0nKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bG9hZERhdGEoKXtcclxuXHRcdFx0XHRcdFx0eHpjZkluZm8oe2lkOnRoaXMuaWR9KS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0XHRcdGlmKHJlcy5jb2RlPT0yMDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kZXRhaWxJbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5kZXRhaWxJbmZvLm5hbWUsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDl2aClcIiwgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFzZV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuihjOaUv+WkhOe9mlwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9fcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uZGF0ZSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIxMHB4IDMwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLov53ms5XooYzkuLpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ubXNnKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4IDEwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KGM5pS/5aSE572a5qGI5Lu25L+h5oGvXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGV0YWlsX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCJub3JtYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlpITnvZrph5Hpop1cIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5hbW91bnQpICsgXCLkuIflhYNcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Yaz5a6a5Lmm5paH5Y+3XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ubm8pKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O75Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8uY29udGFjdCkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5b2T5LqL5Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRldGFpbEluZm8udGVsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnLDlnYBcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b01hcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxJbmZvLmFkZHJlc3MpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjZmZmXCIsIG1hcmdpbjogXCI2cHggMTBweFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpITnvZrkvp3mja5cIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsSW5mby5yZWFzb24pKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wZW5hbHR5RGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOGE3MDU0YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wZW5hbHR5RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGVuYWx0eURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQ4YTcwNTRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q4YTcwNTRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q4YTcwNTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q4YTcwNTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wZW5hbHR5RGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOGE3MDU0YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkOGE3MDU0YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcGVuYWx0eURldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5RGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOGE3MDU0YSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=