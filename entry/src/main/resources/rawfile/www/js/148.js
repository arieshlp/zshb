(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "companyBaseInfo",
  components: {},
  data: function data() {
    return {
      dwid: "",
      entDetail: {}
    };
  },
  mounted: function mounted() {
    this.dwid = this.$route.query.id;
    this.loadData();
  },
  methods: {
    toMap: function toMap() {
      if (this.entDetail.longitude) {
        this.$router.push({
          name: "locationMap",
          query: {
            id: this.dwid,
            siteName: this.entDetail.entName,
            JD: this.entDetail.longitude,
            WD: this.entDetail.latitude,
            types: 'basic'
          }
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('未获取到定位');
      }
    },
    loadData: function loadData() {
      var _this = this;

      var info = {
        id: this.dwid
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["entDetailInfo"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data;
          _this.entDetail = rdata;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.entDetail.entName, "left-arrow": "" },
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
          _c("div", { staticClass: "base_title" }, [_vm._v("基本信息")]),
          _c(
            "div",
            {
              staticClass: "main_content",
              staticStyle: { padding: "10px 30px", background: "#fff" },
            },
            [
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("法定代表人")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.legalMan))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("代表人电话")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.legalManTel))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("成立日期")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.date))]),
              ]),
              _c("div", { staticClass: "half_width" }, [
                _c("span", [_vm._v("行业类别")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.category))]),
              ]),
              _c("div", { staticClass: "half_width no_bottom" }, [
                _c("span", [_vm._v("环保联系人")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.contact))]),
              ]),
              _c("div", { staticClass: "half_width no_bottom" }, [
                _c("span", [_vm._v("环保联系人电话")]),
                _c("span", [_vm._v(_vm._s(_vm.entDetail.contactTel))]),
              ]),
            ]
          ),
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
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("统一社会信用代码")]),
                    _c("span", [_vm._v(_vm._s(_vm.entDetail.creditCode))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("企业规模")]),
                    _c("span", [_vm._v(_vm._s(_vm.entDetail.scale))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("排污许可证号")]),
                    _c("span", [_vm._v(_vm._s(_vm.entDetail.dischargeNo))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("经营期限")]),
                    _c("span", [_vm._v(_vm._s(_vm.entDetail.businessDate))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("经营范围")]),
                    _c("span", [_vm._v(_vm._s(_vm.entDetail.businessScope))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("所在地址")]),
                    _c(
                      "span",
                      {
                        staticClass: "main_footer",
                        staticStyle: {
                          "margin-top": "1px",
                          "margin-left": "0px",
                          padding: "0px",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.toMap()
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticStyle: { "margin-top": "0px" },
                          attrs: {
                            src: __webpack_require__(/*! @/assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                          },
                        }),
                        _c("span", [
                          _vm._v("地址：" + _vm._s(_vm.entDetail.address)),
                        ]),
                      ]
                    ),
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/detail/companyBaseInfo.vue":
/*!********************************************************!*\
  !*** ./src/views/pollution/detail/companyBaseInfo.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true& */ "./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true&");
/* harmony import */ var _companyBaseInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companyBaseInfo.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _companyBaseInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c561e9d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/companyBaseInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBaseInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyBaseInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBaseInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyBaseInfo.vue?vue&type=template&id=1c561e9d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBaseInfo_vue_vue_type_template_id_1c561e9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueUJhc2VJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wYW55QmFzZUluZm8udnVlPzIxNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9wb3NpdGlvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueUJhc2VJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wYW55QmFzZUluZm8udnVlPzg0NzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueUJhc2VJbmZvLnZ1ZT8yZTE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLGdCQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsY0FEQTtBQUVBO0FBRkE7QUFJQSxHQVZBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFDQSx5QkFEQTtBQUVBLDRDQUZBO0FBR0Esd0NBSEE7QUFJQSx1Q0FKQTtBQUtBO0FBTEE7QUFGQTtBQVVBLE9BWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxZQWpCQSxzQkFpQkE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBM0JBO0FBZkEsRzs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWlEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLGVBQWUsb0RBQW9ELEVBQUU7QUFDOUU7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUEyQztBQUN2RSxhQUFhO0FBQ2I7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RCxpQkFBaUI7QUFDakI7QUFDQSw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0QkFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0I7QUFDOUQ7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywwRUFBZ0M7QUFDekUsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoSUEsaUNBQWlDLDRpQjs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBQTtBQUFBO0FBQTBHO0FBQ3ZDO0FBQ0w7OztBQUc5RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsc0dBQU07QUFDUixFQUFFLCtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvVCxDQUFnQixnVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4VTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICAgICAgICAgIDp0aXRsZT1cImVudERldGFpbC5lbnROYW1lXCJcclxuICAgICAgICAgICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICAgICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX3RpdGxlXCI+5Z+65pys5L+h5oGvPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDMwcHg7YmFja2dyb3VuZDogI2ZmZjtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5rOV5a6a5Luj6KGo5Lq6PC9zcGFuPjxzcGFuPnt7ZW50RGV0YWlsLmxlZ2FsTWFufX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuS7o+ihqOS6uueUteivnTwvc3Bhbj48c3Bhbj57e2VudERldGFpbC5sZWdhbE1hblRlbH19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7miJDnq4vml6XmnJ88L3NwYW4+PHNwYW4+e3tlbnREZXRhaWwuZGF0ZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ooYzkuJrnsbvliKs8L3NwYW4+PHNwYW4+e3tlbnREZXRhaWwuY2F0ZWdvcnl9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPueOr+S/neiBlOezu+S6ujwvc3Bhbj48c3Bhbj57e2VudERldGFpbC5jb250YWN0fX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7njq/kv53ogZTns7vkurrnlLXor508L3NwYW4+PHNwYW4+e3tlbnREZXRhaWwuY29udGFjdFRlbH19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmY7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+57uf5LiA56S+5Lya5L+h55So5Luj56CBPC9zcGFuPjxzcGFuPnt7ZW50RGV0YWlsLmNyZWRpdENvZGV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuS8geS4muinhOaooTwvc3Bhbj48c3Bhbj57e2VudERldGFpbC5zY2FsZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuaOkuaxoeiuuOWPr+ivgeWPtzwvc3Bhbj48c3Bhbj57e2VudERldGFpbC5kaXNjaGFyZ2VOb319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPue7j+iQpeacn+mZkDwvc3Bhbj48c3Bhbj57e2VudERldGFpbC5idXNpbmVzc0RhdGV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7nu4/okKXojIPlm7Q8L3NwYW4+PHNwYW4+e3tlbnREZXRhaWwuYnVzaW5lc3NTY29wZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7miYDlnKjlnLDlnYA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBAY2xpY2s9XCJ0b01hcCgpXCIgY2xhc3M9XCJtYWluX2Zvb3RlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMXB4O21hcmdpbi1sZWZ0OiAwcHg7cGFkZGluZzogMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9wb3NpdGlvbi5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDBweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lnLDlnYDvvJp7e2VudERldGFpbC5hZGRyZXNzfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuWRqOi+ueivpuaDhTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX2NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fdGl0bGVcIj7lup/msJTmjpLlj6M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDE2cHg7XCI+MOS4qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fcmlnaHRcIj7mn6XnnIs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX2NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fdGl0bGVcIj7lkajovrnmsLTnjq/looPnm5HmtYvmlq3pnaI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDE2cHg7XCI+MOS4qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fcmlnaHRcIj7mn6XnnIs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX2NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fdGl0bGVcIj7lkajovrnlup/msLTmjpLmsaHlj6M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDE2cHg7XCI+MOS4qjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW5fcmlnaHRcIj7mn6XnnIs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHRJY29uLnBuZ1wiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBlbnREZXRhaWxJbmZvIH0gZnJvbSBcIkAvYXBpL3BvbGx1dGlvbl9zb3VyY2VcIjtcclxuaW1wb3J0IHtUb2FzdH0gZnJvbSBcInZhbnRcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImNvbXBhbnlCYXNlSW5mb1wiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuXHRcdFx0XHRcdFx0XHRkd2lkOlwiXCIsXHJcblx0XHRcdFx0XHRcdFx0ZW50RGV0YWlsOnt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cdFx0XHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmR3aWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuXHRcdFx0XHRcdHRoaXMubG9hZERhdGEoKVxyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cdFx0XHRcdFx0dG9NYXAoKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmVudERldGFpbC5sb25naXR1ZGUpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiBcImxvY2F0aW9uTWFwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOnRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXRlTmFtZTp0aGlzLmVudERldGFpbC5lbnROYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEpEOiB0aGlzLmVudERldGFpbC5sb25naXR1ZGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0V0Q6IHRoaXMuZW50RGV0YWlsLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVzOidiYXNpYydcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFRvYXN0KCfmnKrojrflj5bliLDlrprkvY0nKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bG9hZERhdGEoKXtcclxuXHRcdFx0XHRcdFx0bGV0IGluZm89e1xyXG5cdFx0XHRcdFx0XHRcdGlkOnRoaXMuZHdpZFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVudERldGFpbEluZm8oaW5mbykudGhlbihyZXM9PntcclxuXHRcdFx0XHRcdFx0XHRpZihyZXMuY29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCByZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5lbnREZXRhaWwgPSByZGF0YTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLmVudERldGFpbC5lbnROYW1lLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJhc2VfdGl0bGVcIiB9LCBbX3ZtLl92KFwi5Z+65pys5L+h5oGvXCIpXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIxMHB4IDMwcHhcIiwgYmFja2dyb3VuZDogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuazleWumuS7o+ihqOS6ulwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmxlZ2FsTWFuKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS7o+ihqOS6uueUteivnVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmxlZ2FsTWFuVGVsKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaIkOeri+aXpeacn1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmRhdGUpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KGM5Lia57G75YirXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnREZXRhaWwuY2F0ZWdvcnkpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueOr+S/neiBlOezu+S6ulwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmNvbnRhY3QpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueOr+S/neiBlOezu+S6uueUteivnVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmNvbnRhY3RUZWwpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIue7n+S4gOekvuS8muS/oeeUqOS7o+eggVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmVudERldGFpbC5jcmVkaXRDb2RlKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS8geS4muinhOaooVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmVudERldGFpbC5zY2FsZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5rGh6K645Y+v6K+B5Y+3XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50RGV0YWlsLmRpc2NoYXJnZU5vKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnu4/okKXmnJ/pmZBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnREZXRhaWwuYnVzaW5lc3NEYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnu4/okKXojIPlm7RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnREZXRhaWwuYnVzaW5lc3NTY29wZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omA5Zyo5Zyw5Z2AXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b01hcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Zyw5Z2A77yaXCIgKyBfdm0uX3MoX3ZtLmVudERldGFpbC5hZGRyZXNzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGRFNVUkJWRmlGN1ZiUmJzTWdERHp2eCtwODE1Q2FTczEzeGZreTl3V210QU1idzZidG9mY1VnZXk3MkFjWWVPT1BRZEVBVHNvQW9JcHJXU0xDTFgrTDNFbCtUY0RsVTNjQWJDWWszT1JPNjQ4SzRLU3NpcjAzYVVTSUs0Q1RycWR5aDBDRXhXdkpoNWRrbEx3MzFoVEFTZGRSOHBJaSsyWk1nUE1IQWtCT0o2QXB3dHBzZXNBeVhzMWdsbGNzTDFnVjROWkd6ZDJPNDV1NVhCUFcrS043cXJpRUJWaEJCcmkyU0lRakxNQXdGNWZyK0dseDhNU010QUNxMk0rRTJiRGVpYW5DdkFsNzd2NGVIQnMxZWN3S2RKeHhGMTRPOXkyWXJJSWNHeTFUQWlaRXVPUkFwd21QalpaZ083cklnZUJBVXB4dk9GN3lOUzI5T2NNaldSSHlLaUk2Q1UwSmVCVXhTajROVHJyT3pneWpMZURhZW5RaU5nVmtFajQ5U2xWU0F3SjhQVVROY2IwcVlHUUs5dEFhU3N3V2xDb0EzNTVuYm9ROEVYaC8vOGEvd0FQT01aelFERmhqTmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tcGFueUJhc2VJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzU2MWU5ZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb21wYW55QmFzZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wYW55QmFzZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYzU2MWU5ZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzU2MWU5ZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzU2MWU5ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzU2MWU5ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29tcGFueUJhc2VJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzU2MWU5ZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzU2MWU5ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueUJhc2VJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcGFueUJhc2VJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wYW55QmFzZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wYW55QmFzZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNTYxZTlkJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==