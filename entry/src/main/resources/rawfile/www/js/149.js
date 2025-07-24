(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/qrbaseInfo */ "./src/views/pollution/detail/components/qrbaseInfo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "registeDetail",
  components: {
    qrbaseInfo: _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true& ***!
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
        attrs: { title: "登记管理信息", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "right",
            fn: function () {
              return [
                _c("img", {
                  staticStyle: { "margin-right": "3px" },
                  attrs: { src: __webpack_require__(/*! @/assets/polluter/task.png */ "./src/assets/polluter/task.png") },
                }),
                _c("span", { staticClass: "into-task" }, [_vm._v("任务下达")]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c(
        "div",
        { staticStyle: { height: "calc(100vh - 9vh)", "overflow-y": "auto" } },
        [_c("qrbase-info"), _vm._m(0)],
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
    return _c("div", { staticClass: "company-info" }, [
      _c("div", { staticClass: "company_title" }, [
        _c("span", [_vm._v("排污登记管理")]),
      ]),
      _c("div", { staticClass: "rad_title" }, [
        _c("span", { staticClass: "active" }, [_vm._v("废气排放信息")]),
      ]),
      _c("div", { staticClass: "online_blue" }, [
        _c("span", [_vm._v("1.食堂油烟排放口")]),
        _c("span"),
      ]),
      _c("div", { staticClass: "main_content" }, [
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("执行标准名称")]),
          _c("span", [_vm._v("饮食业油烟排放标准GB18483-2001")]),
        ]),
        _c("div", { staticClass: "whole_width no_bottom" }, [
          _c("span", [_vm._v("备注")]),
          _c("span", [
            _vm._v(
              "安装了XJJ-FH-6A型机械静电光解复合式餐饮业油烟净化设备，该产品具有《中国环境保护产品认证证书》，安装单位具有《云南省环境保护行业污染治理资质证书》，根据云南省环境保护局文件云环控发【2003】628号《关于城市饮食业油烟污染治理监测有关事宜的通知》要求，该项目油烟废气可视为达标排放。"
            ),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "online_blue" }, [
        _c("span", [_vm._v("2.水泥筒仓")]),
        _c("span"),
      ]),
      _c("div", { staticClass: "main_content" }, [
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("执行标准名称")]),
          _c("span", [_vm._v("水泥工业大气污染物排放标准GB 4915-2013-2001")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("备注")]),
          _c("span", [
            _vm._v(
              "筒仓底采用负压吸风收尘装置，与筒仓顶呼吸孔共用一台脉冲布袋除尘器，设置阻尼除尘器，产生的粉尘收集后回收利用，不外排。"
            ),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "rad_title" }, [
        _c("span", { attrs: { active: "" } }, [_vm._v("废水排放信息")]),
      ]),
      _c("div", { staticClass: "main_content" }, [
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("废水排放口名称")]),
          _c("span", [_vm._v("蓄水池")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("执行标准名称")]),
          _c("span", [_vm._v("农田灌溉水质标准GB5084-2005")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("排放去向")]),
          _c("span", [_vm._v("进入城市污水处理厂：排入昆明市第三水质净化厂")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("备注")]),
          _c("span", [
            _vm._v(
              "项目生活污水经化粪池处理后，排入普吉路市政污水管网，最终进入昆明市第三水质净化厂。"
            ),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "rad_title" }, [
        _c("span", { staticClass: "active" }, [_vm._v("工业固体废物排放信息")]),
      ]),
      _c("div", { staticClass: "main_content" }, [
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("工业固废废物名称")]),
          _c("span", [_vm._v("挤塑机废气排放口")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("执行标准名称")]),
          _c("span", [_vm._v("农田灌溉水质标准GB5084-2005")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("是否属于危险废物")]),
          _c("span", [_vm._v("否")]),
        ]),
        _c("div", { staticClass: "whole_width" }, [
          _c("span", [_vm._v("去向")]),
          _c("span", [_vm._v("利用本单位")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./src/assets/polluter/task.png":
/*!**************************************!*\
  !*** ./src/assets/polluter/task.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACrSURBVDiN1VJBCsMgEByLeVe3sL9SSArJrwT9l4I91LQbo2lDTx3w4O7s7DgI/AglL2zjhKzGFtEtWrGN5OYhyPplw+oMi75nG6e+wDfIapQi5wXeIgRUGawoTUJWVwAEPDNocZvFSuww2N0T2CTPJvkXaR4mAKG3oJUBlSN85ntPQMvNcpBNygCCW/StN1w7oEafAKD+PE0Ha8pl8yZ1tpGQPzs4h4Nc/gwP+go9QTwB/fkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/pollution/detail/registeDetail.vue":
/*!******************************************************!*\
  !*** ./src/views/pollution/detail/registeDetail.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true& */ "./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true&");
/* harmony import */ var _registeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registeDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _registeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9ab455fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/registeDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registeDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/registeDetail.vue?vue&type=template&id=9ab455fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registeDetail_vue_vue_type_template_id_9ab455fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZURldGFpbC52dWU/M2U0YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3Rhc2sucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3JlZ2lzdGVEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3JlZ2lzdGVEZXRhaWwudnVlPzZlZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcmVnaXN0ZURldGFpbC52dWU/YzkzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUdBLEdBVEE7QUFVQTtBQVZBLEc7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUscUJBQXFCLEVBQUU7QUFDM0M7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCO0FBQ3hELDBCQUEwQixNQUFNLG1CQUFPLENBQUMsa0VBQTRCLEdBQUc7QUFDdkUsaUJBQWlCO0FBQ2pCLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsZUFBZSxvREFBb0QsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BELGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUMsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQyxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQyxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUMsb0JBQW9CLFNBQVMsYUFBYSxFQUFFO0FBQzVDO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQyxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUlBLGlDQUFpQyxnVzs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBQTtBQUFBO0FBQXdHO0FBQ3ZDO0FBQ0w7OztBQUc1RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFrVCxDQUFnQiw4VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0VTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmZcIj5cclxuICAgICAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi55m76K6w566h55CG5L+h5oGvXCJcclxuICAgICAgICAgICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICAgICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICNyaWdodD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvdGFzay5wbmdcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogM3B4XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImludG8tdGFza1wiPuS7u+WKoeS4i+i+vjwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcblxyXG4gICAgICAgICAgICA8cXJiYXNlLWluZm8vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7mjpLmsaHnmbvorrDnrqHnkIY8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3RpdmVcIj7lup/msJTmjpLmlL7kv6Hmga88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmxpbmVfYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjEu6aOf5aCC5rK554Of5o6S5pS+5Y+jPC9zcGFuPjxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuaJp+ihjOagh+WHhuWQjeensDwvc3Bhbj48c3Bhbj7ppa7po5/kuJrmsrnng5/mjpLmlL7moIflh4ZHQjE4NDgzLTIwMDE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWkh+azqDwvc3Bhbj48c3Bhbj7lronoo4XkuoZYSkotRkgtNkHlnovmnLrmorDpnZnnlLXlhYnop6PlpI3lkIjlvI/ppJDppa7kuJrmsrnng5/lh4DljJborr7lpIfvvIzor6Xkuqflk4HlhbfmnInjgIrkuK3lm73njq/looPkv53miqTkuqflk4HorqTor4Hor4HkuabjgIvvvIzlronoo4XljZXkvY3lhbfmnInjgIrkupHljZfnnIHnjq/looPkv53miqTooYzkuJrmsaHmn5PmsrvnkIbotYTotKjor4HkuabjgIvvvIzmoLnmja7kupHljZfnnIHnjq/looPkv53miqTlsYDmlofku7bkupHnjq/mjqflj5HjgJAyMDAz44CRNjI45Y+344CK5YWz5LqO5Z+O5biC6aWu6aOf5Lia5rK554Of5rGh5p+T5rK755CG55uR5rWL5pyJ5YWz5LqL5a6c55qE6YCa55+l44CL6KaB5rGC77yM6K+l6aG555uu5rK554Of5bqf5rCU5Y+v6KeG5Li66L6+5qCH5o6S5pS+44CCPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25saW5lX2JsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yLuawtOazpeetkuS7kzwvc3Bhbj48c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7miafooYzmoIflh4blkI3np7A8L3NwYW4+PHNwYW4+5rC05rOl5bel5Lia5aSn5rCU5rGh5p+T54mp5o6S5pS+5qCH5YeGR0IgNDkxNS0yMDEzLTIwMDE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5aSH5rOoPC9zcGFuPjxzcGFuPuetkuS7k+W6lemHh+eUqOi0n+WOi+WQuOmjjuaUtuWwmOijhee9ru+8jOS4juetkuS7k+mhtuWRvOWQuOWtlOWFseeUqOS4gOWPsOiEieWGsuW4g+iii+mZpOWwmOWZqO+8jOiuvue9rumYu+WwvOmZpOWwmOWZqO+8jOS6p+eUn+eahOeyieWwmOaUtumbhuWQjuWbnuaUtuWIqeeUqO+8jOS4jeWkluaOkuOAgjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFjdGl2ZT7lup/msLTmjpLmlL7kv6Hmga88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lup/msLTmjpLmlL7lj6PlkI3np7A8L3NwYW4+PHNwYW4+6JOE5rC05rGgPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuaJp+ihjOagh+WHhuWQjeensDwvc3Bhbj48c3Bhbj7lhpznlLDngYzmuonmsLTotKjmoIflh4ZHQjUwODQtMjAwNTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mjpLmlL7ljrvlkJE8L3NwYW4+PHNwYW4+6L+b5YWl5Z+O5biC5rGh5rC05aSE55CG5Y6C77ya5o6S5YWl5piG5piO5biC56ys5LiJ5rC06LSo5YeA5YyW5Y6CPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuWkh+azqDwvc3Bhbj48c3Bhbj7pobnnm67nlJ/mtLvmsaHmsLTnu4/ljJbnsqrmsaDlpITnkIblkI7vvIzmjpLlhaXmma7lkInot6/luILmlL/msaHmsLTnrqHnvZHvvIzmnIDnu4jov5vlhaXmmIbmmI7luILnrKzkuInmsLTotKjlh4DljJbljoLjgII8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPuW3peS4muWbuuS9k+W6n+eJqeaOkuaUvuS/oeaBrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuW3peS4muWbuuW6n+W6n+eJqeWQjeensDwvc3Bhbj48c3Bhbj7mjKTloZHmnLrlup/msJTmjpLmlL7lj6M8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5omn6KGM5qCH5YeG5ZCN56ewPC9zcGFuPjxzcGFuPuWGnOeUsOeBjOa6ieawtOi0qOagh+WHhkdCNTA4NC0yMDA1PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuaYr+WQpuWxnuS6juWNsemZqeW6n+eJqTwvc3Bhbj48c3Bhbj7lkKY8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5Y675ZCRPC9zcGFuPjxzcGFuPuWIqeeUqOacrOWNleS9jTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgcXJiYXNlSW5mbyBmcm9tIFwiLi9jb21wb25lbnRzL3FyYmFzZUluZm9cIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcInJlZ2lzdGVEZXRhaWxcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHFyYmFzZUluZm9cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi55m76K6w566h55CG5L+h5oGvXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicmlnaHRcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvdGFzay5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnRvLXRhc2tcIiB9LCBbX3ZtLl92KFwi5Lu75Yqh5LiL6L6+XCIpXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtfYyhcInFyYmFzZS1pbmZvXCIpLCBfdm0uX20oMCldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5rGh55m76K6w566h55CGXCIpXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5bqf5rCU5o6S5pS+5L+h5oGvXCIpXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2JsdWVcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiMS7po5/loILmsrnng5/mjpLmlL7lj6NcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIpLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaJp+ihjOagh+WHhuWQjeensFwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6aWu6aOf5Lia5rK554Of5o6S5pS+5qCH5YeGR0IxODQ4My0yMDAxXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi5a6J6KOF5LqGWEpKLUZILTZB5Z6L5py65qKw6Z2Z55S15YWJ6Kej5aSN5ZCI5byP6aSQ6aWu5Lia5rK554Of5YeA5YyW6K6+5aSH77yM6K+l5Lqn5ZOB5YW35pyJ44CK5Lit5Zu9546v5aKD5L+d5oqk5Lqn5ZOB6K6k6K+B6K+B5Lmm44CL77yM5a6J6KOF5Y2V5L2N5YW35pyJ44CK5LqR5Y2X55yB546v5aKD5L+d5oqk6KGM5Lia5rGh5p+T5rK755CG6LWE6LSo6K+B5Lmm44CL77yM5qC55o2u5LqR5Y2X55yB546v5aKD5L+d5oqk5bGA5paH5Lu25LqR546v5o6n5Y+R44CQMjAwM+OAkTYyOOWPt+OAiuWFs+S6juWfjuW4gumlrumjn+S4muayueeDn+axoeafk+ayu+eQhuebkea1i+acieWFs+S6i+WunOeahOmAmuefpeOAi+imgeaxgu+8jOivpemhueebruayueeDn+W6n+awlOWPr+inhuS4uui+vuagh+aOkuaUvuOAglwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfYmx1ZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIyLuawtOazpeetkuS7k1wiKV0pLFxuICAgICAgICBfYyhcInNwYW5cIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omn6KGM5qCH5YeG5ZCN56ewXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsLTms6Xlt6XkuJrlpKfmsJTmsaHmn5PnianmjpLmlL7moIflh4ZHQiA0OTE1LTIwMTMtMjAwMVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi562S5LuT5bqV6YeH55So6LSf5Y6L5ZC46aOO5pS25bCY6KOF572u77yM5LiO562S5LuT6aG25ZG85ZC45a2U5YWx55So5LiA5Y+w6ISJ5Yay5biD6KKL6Zmk5bCY5Zmo77yM6K6+572u6Zi75bC86Zmk5bCY5Zmo77yM5Lqn55Sf55qE57KJ5bCY5pS26ZuG5ZCO5Zue5pS25Yip55So77yM5LiN5aSW5o6S44CCXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgYWN0aXZlOiBcIlwiIH0gfSwgW192bS5fdihcIuW6n+awtOaOkuaUvuS/oeaBr1wiKV0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awtOaOkuaUvuWPo+WQjeensFwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6JOE5rC05rGgXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omn6KGM5qCH5YeG5ZCN56ewXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlhpznlLDngYzmuonmsLTotKjmoIflh4ZHQjUwODQtMjAwNVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkuaUvuWOu+WQkVwiKV0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L+b5YWl5Z+O5biC5rGh5rC05aSE55CG5Y6C77ya5o6S5YWl5piG5piO5biC56ys5LiJ5rC06LSo5YeA5YyW5Y6CXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLpobnnm67nlJ/mtLvmsaHmsLTnu4/ljJbnsqrmsaDlpITnkIblkI7vvIzmjpLlhaXmma7lkInot6/luILmlL/msaHmsLTnrqHnvZHvvIzmnIDnu4jov5vlhaXmmIbmmI7luILnrKzkuInmsLTotKjlh4DljJbljoLjgIJcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5bel5Lia5Zu65L2T5bqf54mp5o6S5pS+5L+h5oGvXCIpXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bel5Lia5Zu65bqf5bqf54mp5ZCN56ewXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjKTloZHmnLrlup/msJTmjpLmlL7lj6NcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiafooYzmoIflh4blkI3np7BcIildKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWGnOeUsOeBjOa6ieawtOi0qOagh+WHhkdCNTA4NC0yMDA1XCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5piv5ZCm5bGe5LqO5Y2x6Zmp5bqf54mpXCIpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlkKZcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLljrvlkJFcIildKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWIqeeUqOacrOWNleS9jVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDclNVUkJWRGlOMVZKQkNzTWdFQnlMZVZlM3NMOVNTQXJKcndUOWw0STkxTFFibzJsRFR4M3c0TzdzN0RnSS9BZ2xMMnpqaEt6R0Z0RXRXckdONU9ZaHlQcGx3K29NaTc1bkc2ZSt3RGZJYXBRaTV3WGVJZ1JVR2F3b1RVSldWd0FFUEROb2NadkZTdXd3Mk4wVDJDVFBKdmtYYVI0bUFLRzNvSlVCbFNOODVudFBRTXZOY3BCTnlnQ0NXL1N0TjF3N29FYWZBS0QrUEUwSGE4cGw4eVoxdHBHUVB6czRoNE5jL2d3UCtnbzlRVHdCL2ZrQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVnaXN0ZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFiNDU1ZmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5YWI0NTVmZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5YWI0NTVmZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5YWI0NTVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5YWI0NTVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVnaXN0ZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFiNDU1ZmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWFiNDU1ZmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3JlZ2lzdGVEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3RlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFiNDU1ZmUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9