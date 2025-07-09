(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[154],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/qrbaseInfo */ "./src/views/pollution/detail/components/qrbaseInfo.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "registerManage",
  components: {
    qrbaseInfo: _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dwid: null,
      envCodeInfo: {},
      objInfo: {},
      fsList: [],
      fqList: [],
      gfList: [],
      type: 'red'
    };
  },
  watch: {
    $route: {
      handler: function handler(route) {
        this.type = route.query.type;
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    this.dwid = this.$route.query.id;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var info = {
        id: this.dwid
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["regEntInfo"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data;
          _this.fsList = rdata.fsList;
          _this.fqList = rdata.fqList;
          _this.gfList = rdata.gfList;
          _this.envCodeInfo = rdata.envCodeInfo;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true& ***!
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
    { staticClass: "companydetail", staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "登记管理信息", "left-arrow": "" },
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
          _c("qrbase-info", {
            attrs: { type: _vm.type, envCodeInfo: _vm.envCodeInfo },
          }),
          _c(
            "div",
            { staticClass: "company-info" },
            [
              _vm._m(0),
              _vm._m(1),
              _vm._l(_vm.fqList, function (item, index) {
                return [
                  _c("div", { staticClass: "online_blue" }, [
                    _c("span", [
                      _vm._v(_vm._s(index + 1) + "、" + _vm._s(item.fqpfkmc)),
                    ]),
                    _c("span"),
                  ]),
                  _c("div", { staticClass: "main_content" }, [
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("执行标准名称")]),
                      _c("span", [_vm._v(_vm._s(item.zxbzmc))]),
                    ]),
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("备注")]),
                      _c("span", [_vm._v(_vm._s(item.bz || "-"))]),
                    ]),
                  ]),
                ]
              }),
              _vm._m(2),
              _vm._l(_vm.fsList, function (item) {
                return _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("废水排放口名称")]),
                    _c("span", [_vm._v(_vm._s(item.fspfkmc || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("执行标准名称")]),
                    _c("span", [_vm._v(_vm._s(item.zxbzmc || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("排放去向")]),
                    _c("span", [_vm._v(_vm._s(item.pfqx || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("备注")]),
                    _c("span", [_vm._v(_vm._s(item.bz || "-"))]),
                  ]),
                ])
              }),
              _vm._m(3),
              _vm._l(_vm.gfList, function (item) {
                return _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("工业固废废物名称")]),
                    _c("span", [_vm._v(_vm._s(item.gygtfwmc || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("是否属于危险废物")]),
                    _c("span", [_vm._v(_vm._s(item.sfsywxfw || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("去向")]),
                    _c("span", [_vm._v(_vm._s(item.qx || "-"))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("备注")]),
                    _c("span", [_vm._v(_vm._s(item.bz || "-"))]),
                  ]),
                ])
              }),
            ],
            2
          ),
        ],
        1
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
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("排污登记管理")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("废气排放信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("废水排放信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("工业固体废物排放信息")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./src/views/pollution/detail/registerManage.vue":
/*!*******************************************************!*\
  !*** ./src/views/pollution/detail/registerManage.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerManage.vue?vue&type=template&id=14d19c17&scoped=true& */ "./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true&");
/* harmony import */ var _registerManage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerManage.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _registerManage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14d19c17",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/registerManage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerManage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registerManage.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registerManage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerManage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registerManage.vue?vue&type=template&id=14d19c17&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registerManage.vue?vue&type=template&id=14d19c17&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerManage_vue_vue_type_template_id_14d19c17_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZXJNYW5hZ2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3JlZ2lzdGVyTWFuYWdlLnZ1ZT85M2NhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3JlZ2lzdGVyTWFuYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9yZWdpc3Rlck1hbmFnZS52dWU/OWM1OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9yZWdpc3Rlck1hbmFnZS52dWU/OWRjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0E7QUFDQTtBQUlBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGdCQURBO0FBRUEscUJBRkE7QUFHQSxpQkFIQTtBQUlBLGdCQUpBO0FBS0EsZ0JBTEE7QUFNQSxnQkFOQTtBQU9BO0FBUEE7QUFTQSxHQWZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBO0FBSkE7QUFEQSxHQWhCQTtBQXdCQSxTQXhCQSxxQkF3QkE7QUFDQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQWRBO0FBNUJBLEc7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QyxxQkFBcUIsRUFBRTtBQUN6RTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyxlQUFlLG9EQUFvRCxFQUFFO0FBQzlFO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQStDO0FBQ25FLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0QsK0JBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtDQUFrQyw4QkFBOEI7QUFDaEUsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esa0NBQWtDLDhCQUE4QjtBQUNoRSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUFBO0FBQUE7QUFBQTtBQUF5RztBQUN2QztBQUNMOzs7QUFHN0Q7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHFHQUFNO0FBQ1IsRUFBRSw4R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBbVQsQ0FBZ0IsK1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzE1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmZcIiBjbGFzcz1cImNvbXBhbnlkZXRhaWxcIj5cbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLnmbvorrDnrqHnkIbkv6Hmga9cIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cbiAgICAgIDwhLS08dGVtcGxhdGUgI3JpZ2h0PlxuICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3Rhc2sucG5nXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDNweFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImludG8tdGFza1wiPuS7u+WKoeS4i+i+vjwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+LS0+XG4gICAgPC92YW4tbmF2LWJhcj5cbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXZoKTtvdmVyZmxvdy15OiBhdXRvO1wiPlxuICAgICAgPHFyYmFzZS1pbmZvIDp0eXBlPVwidHlwZVwiIDplbnZDb2RlSW5mbz1cImVudkNvZGVJbmZvXCIvPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+XG4gICAgICAgICAgPHNwYW4+5o6S5rGh55m76K6w566h55CGPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aXZlXCI+5bqf5rCU5o6S5pS+5L+h5oGvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQ8dGVtcGxhdGUgIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGZxTGlzdFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9ibHVlXCI+XHJcblx0XHRcdFx0XHQgIDxzcGFuPnt7aW5kZXgrMX1944CBe3tpdGVtLmZxcGZrbWN9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgPHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxyXG5cdFx0XHRcdFx0ICAgIDxzcGFuPuaJp+ihjOagh+WHhuWQjeensDwvc3Bhbj48c3Bhbj57e2l0ZW0uenhiem1jfX08L3NwYW4+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj5cclxuXHRcdFx0XHRcdCAgICA8c3Bhbj7lpIfms6g8L3NwYW4+PHNwYW4+e3tpdGVtLmJ6fHwnLSd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxuICAgICAgICBcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwib25saW5lX2JsdWVcIj5cbiAgICAgICAgICA8c3Bhbj4yLuawtOazpeetkuS7kzwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+XG4gICAgICAgICAgICA8c3Bhbj7miafooYzmoIflh4blkI3np7A8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7ppa7po5/kuJrmsrnng5/mjpLmlL7moIflh4ZHQjE4NDgzLTIwMDE8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+XG4gICAgICAgICAgICA8c3Bhbj7lpIfms6g8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7lronoo4XkuoZYSkotRkgtNkHlnovmnLrmorDpnZnnlLXlhYnop6PlpI3lkIjlvI/ppJDppa7kuJrmsrnng5/lh4DljJborr7lpIfvvIzor6Xkuqflk4HlhbfmnInjgIrkuK3lm73njq/looPkv53miqTkuqflk4HorqTor4Hor4HkuabjgIvvvIzlronoo4XljZXkvY3lhbfmnInjgIrkupHljZfnnIHnjq/looPkv53miqTooYzkuJrmsaHmn5PmsrvnkIbotYTotKjor4HkuabjgIvvvIzmoLnmja7kupHljZfnnIHnjq/looPkv53miqTlsYDmlofku7bkupHnjq/mjqflj5HjgJAyMDAz44CRNjI45Y+344CK5YWz5LqO5Z+O5biC6aWu6aOf5Lia5rK554Of5rGh5p+T5rK755CG55uR5rWL5pyJ5YWz5LqL5a6c55qE6YCa55+l44CL6KaB5rGC77yM6K+l6aG555uu5rK554Of5bqf5rCU5Y+v6KeG5Li66L6+5qCH5o6S5pS+44CCPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPuW6n+awtOaOkuaUvuS/oeaBrzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiB2LWZvcj1cIml0ZW0gaW4gZnNMaXN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+XG4gICAgICAgICAgICA8c3Bhbj7lup/msLTmjpLmlL7lj6PlkI3np7A8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0uZnNwZmttY3x8Jy0nfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj5cclxuXHRcdFx0XHRcdCAgPHNwYW4+5omn6KGM5qCH5YeG5ZCN56ewPC9zcGFuPlxyXG5cdFx0XHRcdFx0ICA8c3Bhbj57e2l0ZW0uenhiem1jfHwnLSd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxuICAgICAgICAgICAgPHNwYW4+5o6S5pS+5Y675ZCRPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLnBmcXh8fCctJ319PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxuICAgICAgICAgICAgPHNwYW4+5aSH5rOoPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmJ6fHwnLSd9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPuW3peS4muWbuuS9k+W6n+eJqeaOkuaUvuS/oeaBrzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiB2LWZvcj1cIml0ZW0gaW4gZ2ZMaXN0XCI+IFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxuICAgICAgICAgICAgPHNwYW4+5bel5Lia5Zu65bqf5bqf54mp5ZCN56ewPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmd5Z3Rmd21jfHwnLSd9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj5cbiAgICAgICAgICAgIDxzcGFuPuaYr+WQpuWxnuS6juWNsemZqeW6n+eJqTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5zZnN5d3hmd3x8Jy0nfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+XG4gICAgICAgICAgICA8c3Bhbj7ljrvlkJE8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0ucXh8fCctJ319PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPlxuICAgICAgICAgICAgPHNwYW4+5aSH5rOoPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmJ6fHwnLSd9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBxcmJhc2VJbmZvIGZyb20gXCIuL2NvbXBvbmVudHMvcXJiYXNlSW5mb1wiO1xuICBpbXBvcnQge1xuICAgIHJlZ0VudEluZm9cbiAgfSBmcm9tIFwiQC9hcGkvcG9sbHV0aW9uX3NvdXJjZVwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcInJlZ2lzdGVyTWFuYWdlXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgcXJiYXNlSW5mb1xuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGR3aWQ6IG51bGwsXG4gICAgICAgIGVudkNvZGVJbmZvOiB7fSxcclxuXHRcdFx0XHRvYmpJbmZvOnt9LFxyXG5cdFx0XHRcdGZzTGlzdDpbXSxcclxuXHRcdFx0XHRmcUxpc3Q6W10sXHJcblx0XHRcdFx0Z2ZMaXN0OltdLFxuICAgICAgICB0eXBlOiAncmVkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAkcm91dGU6IHtcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgdGhpcy50eXBlID0gcm91dGUucXVlcnkudHlwZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgICB9LFxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZHdpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkO1xuICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgbG9hZERhdGEoKSB7XG4gICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgIGlkOiB0aGlzLmR3aWRcbiAgICAgICAgfVxuICAgICAgICByZWdFbnRJbmZvKGluZm8pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmRhdGEgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dGhpcy5mc0xpc3QgPSByZGF0YS5mc0xpc3Q7XHJcblx0XHRcdFx0XHRcdHRoaXMuZnFMaXN0ID0gcmRhdGEuZnFMaXN0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdmTGlzdCA9IHJkYXRhLmdmTGlzdDtcbiAgICAgICAgICAgIHRoaXMuZW52Q29kZUluZm8gPSByZGF0YS5lbnZDb2RlSW5mbztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueWRldGFpbFwiLCBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIueZu+iusOeuoeeQhuS/oeaBr1wiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInFyYmFzZS1pbmZvXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IF92bS50eXBlLCBlbnZDb2RlSW5mbzogX3ZtLmVudkNvZGVJbmZvIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mcUxpc3QsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaW5kZXggKyAxKSArIFwi44CBXCIgKyBfdm0uX3MoaXRlbS5mcXBma21jKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omn6KGM5qCH5YeG5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uenhiem1jKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5ieiB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZzTGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awtOaOkuaUvuWPo+WQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5mc3Bma21jIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiafooYzmoIflh4blkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uenhiem1jIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpLmlL7ljrvlkJFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucGZxeCB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmJ6IHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZ2ZMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bel5Lia5Zu65bqf5bqf54mp5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmd5Z3Rmd21jIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmmK/lkKblsZ7kuo7ljbHpmanlup/nialcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2ZzeXd4ZncgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWOu+WQkVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5xeCB8fCBcIi1cIikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmJ6IHx8IFwiLVwiKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpLmsaHnmbvorrDnrqHnkIZcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5bqf5rCU5o6S5pS+5L+h5oGvXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIgfSwgW192bS5fdihcIuW6n+awtOaOkuaUvuS/oeaBr1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtfdm0uX3YoXCLlt6XkuJrlm7rkvZPlup/nianmjpLmlL7kv6Hmga9cIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlZ2lzdGVyTWFuYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGQxOWMxNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZWdpc3Rlck1hbmFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyTWFuYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTRkMTljMTdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRkMTljMTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRkMTljMTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRkMTljMTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlZ2lzdGVyTWFuYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGQxOWMxNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNGQxOWMxNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZXJNYW5hZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlck1hbmFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXJNYW5hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlck1hbmFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRkMTljMTcmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9