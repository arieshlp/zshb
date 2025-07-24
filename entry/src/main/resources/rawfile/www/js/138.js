(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      detailObj: {}
    };
  },
  mounted: function mounted() {
    var objectParam = JSON.parse(this.$route.query.objectParam);
    this.detailObj = objectParam;
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "100vh" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "任务件详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "env-inspectors-container" },
        [
          _c("div", { staticClass: "env-inspectors-container-title" }, [
            _c("div", { staticClass: "title-num" }, [
              _vm._v(_vm._s(_vm.detailObj.title)),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-container-content" }, [
            _c("div", { staticClass: "content-title" }, [
              _c("span", { staticClass: "title-name" }, [
                _vm._v("督查报告指出"),
              ]),
              _c("span", { staticClass: "title-right" }, [
                _vm._v(_vm._s(_vm.detailObj.rectificationDeadline)),
              ]),
            ]),
            _c("div", { staticClass: "env-inspectors-list-text" }, [
              _vm._v(" " + _vm._s(_vm.detailObj.reportStates) + " "),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-container-content" }, [
            _vm._m(0),
            _c("div", { staticClass: "env-inspectors-list-text" }, [
              _vm._v(_vm._s(_vm.detailObj.leadAcceptanceUnit)),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-container-content" }, [
            _vm._m(1),
            _c("div", { staticClass: "env-inspectors-list-text" }, [
              _vm._v(_vm._s(_vm.detailObj.leadingRectificationUnit)),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-container-content" }, [
            _vm._m(2),
            _c("div", { staticClass: "env-inspectors-list-text" }, [
              _vm._v(" " + _vm._s(_vm.detailObj.rectificationImplementa) + " "),
            ]),
          ]),
          _c("div", { staticClass: "env-inspectors-container-content" }, [
            _vm._m(3),
            _c("div", { staticClass: "env-inspectors-list-text" }, [
              _vm._v(" " + _vm._s(_vm.detailObj.rectificationObjectives) + " "),
            ]),
          ]),
          _c("div", { staticClass: "measure-title" }, [_vm._v("整改措施")]),
          _vm._l(_vm.detailObj.measuresList, function (item, index) {
            return _c(
              "div",
              { staticClass: "env-inspectors-container-measure" },
              [
                _c("div", { staticClass: "env-inspectors-list-text" }, [
                  _c("div", { staticClass: "measure-index" }, [
                    _c("span", [_vm._v(_vm._s(index + 1))]),
                  ]),
                  _vm._v(" " + _vm._s(item.measuresContent) + " "),
                ]),
              ]
            )
          }),
        ],
        2
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
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("牵头验收单位")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("牵头整改单位")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("整改实施主体")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title" }, [
      _c("span", { staticClass: "title-name" }, [_vm._v("整改目标")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".env-inspectors-container[data-v-4dc7559b] {\n  width: 100%;\n  height: calc(100vh - 60px);\n  background-color: #ffffff;\n  overflow-y: auto;\n}\n.env-inspectors-container .env-inspectors-container-title[data-v-4dc7559b] {\n  width: calc(100% - 50px);\n  min-height: 34px;\n  opacity: 1;\n  border-radius: 4px;\n  background: #f5f6f6;\n  margin: 10px 15px;\n  padding: 6px 10px;\n  line-height: 20px;\n  display: flex;\n}\n.env-inspectors-container .env-inspectors-container-title div[data-v-4dc7559b] {\n  float: left;\n}\n.env-inspectors-container .env-inspectors-container-title .title-line[data-v-4dc7559b] {\n  width: 4px;\n  height: 16px;\n  background: linear-gradient(180deg, #738efa 0%, #3841fc 100%);\n  margin: 9px;\n}\n.env-inspectors-container .env-inspectors-container-title .title-name[data-v-4dc7559b] {\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-title .title-num[data-v-4dc7559b] {\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  font-size: 14px;\n  color: #ff8d1a;\n  font-weight: 600;\n}\n.env-inspectors-container .env-inspectors-container-content[data-v-4dc7559b] {\n  width: calc(100% - 20px);\n  height: auto;\n  opacity: 1;\n  display: inline-block;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 2px 20px rgba(37, 57, 111, 0.05);\n  margin: 3px 10px;\n  padding-bottom: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title[data-v-4dc7559b] {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px 10px 0 0;\n  border-bottom: 1px solid rgba(37, 57, 111, 0.05);\n  line-height: 40px;\n  margin-bottom: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-name[data-v-4dc7559b] {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0px;\n  color: #5475f8;\n  margin-left: 10px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-inner[data-v-4dc7559b] {\n  padding: 2px 5px;\n  border-radius: 4px;\n  background: #fceae6;\n  border: 1px solid #ffcbbf;\n  color: #ff5733;\n  font-size: 12px;\n  margin-left: 5px;\n}\n.env-inspectors-container .env-inspectors-container-content .content-title .title-right[data-v-4dc7559b] {\n  font-size: 12px;\n  border-radius: 10px 10px 0px 10px;\n  background: linear-gradient(90deg, #6daafd 0%, #4378ee 100%);\n  padding: 4px 8px;\n  color: #ffffff;\n  margin-left: calc(100% - 240px);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item[data-v-4dc7559b] {\n  width: calc(50% - 20px);\n  height: auto;\n  line-height: 18px;\n  padding: 4px 5px 4px 10px;\n  font-size: 12px;\n  float: left;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item span[data-v-4dc7559b] {\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-text[data-v-4dc7559b] {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 15.91px;\n  color: rgba(37, 57, 111, 0.7);\n  box-sizing: border-box;\n  padding: 8px;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item1[data-v-4dc7559b] {\n  width: calc(100% - 20px);\n  height: auto;\n  line-height: 18px;\n  padding: 4px 5px 4px 10px;\n  font-size: 12px;\n  float: left;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-item1 span[data-v-4dc7559b] {\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom[data-v-4dc7559b] {\n  width: 100%;\n  height: 36px;\n  opacity: 1;\n  border-radius: 0px 0px 10px 10px;\n  background: #f9fafd;\n  border: 1px solid white;\n  float: left;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom .words[data-v-4dc7559b] {\n  line-height: 36px;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  color: #5475f8;\n  float: left;\n  padding-left: 10px;\n}\n.env-inspectors-container .env-inspectors-container-content .env-inspectors-list-bottom .right[data-v-4dc7559b] {\n  float: right;\n  line-height: 36px;\n  font-size: 18px;\n  color: #888;\n  padding-right: 10px;\n}\n.env-inspectors-container .measure-title[data-v-4dc7559b] {\n  margin: 10px 0 10px 25px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5475f8;\n}\n.env-inspectors-container .env-inspectors-container-measure[data-v-4dc7559b] {\n  width: calc(100% - 20px);\n  height: auto;\n  opacity: 1;\n  display: inline-block;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 2px 20px rgba(37, 57, 111, 0.05);\n  margin: 3px 10px;\n  padding-bottom: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.env-inspectors-container .env-inspectors-container-measure .env-inspectors-list-text[data-v-4dc7559b] {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 15.91px;\n  color: rgba(37, 57, 111, 0.7);\n  box-sizing: border-box;\n  padding: 8px;\n}\n.env-inspectors-container .env-inspectors-container-measure .env-inspectors-list-text .measure-index[data-v-4dc7559b] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  color: black;\n  padding: 0 3px;\n  margin-right: 5px;\n  background: linear-gradient(to bottom, #ffffff 60%, #7a92fa 40%);\n}\n.env-inspectors-container .env-inspectors-container-measure .measure-bottom[data-v-4dc7559b] {\n  width: 95%;\n  height: 80px;\n  background: #f0f5ff;\n  box-sizing: border-box;\n  padding: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.env-inspectors-container .env-inspectors-container-measure .measure-bottom .measure-bottom-top[data-v-4dc7559b] {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.8);\n}\n.env-inspectors-container .env-inspectors-container-measure .measure-bottom .measure-bottom-box[data-v-4dc7559b] {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: space-between;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6a5af1c2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/correctionTask/components/correctionTaskDetail.vue":
/*!**********************************************************************!*\
  !*** ./src/views/correctionTask/components/correctionTaskDetail.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true& */ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true&");
/* harmony import */ var _correctionTaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correctionTaskDetail.vue?vue&type=script&lang=js& */ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& */ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _correctionTaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4dc7559b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/correctionTask/components/correctionTaskDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./correctionTaskDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=style&index=0&id=4dc7559b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_style_index_0_id_4dc7559b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/correctionTask/components/correctionTaskDetail.vue?vue&type=template&id=4dc7559b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correctionTaskDetail_vue_vue_type_template_id_4dc7559b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2NvcnJlY3Rpb25UYXNrL2NvbXBvbmVudHMvY29ycmVjdGlvblRhc2tEZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9jb21wb25lbnRzL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT9hZTdkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9jb21wb25lbnRzL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT82NjQxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9jb21wb25lbnRzL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT9iZGY2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb3JyZWN0aW9uVGFzay9jb21wb25lbnRzL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svY29tcG9uZW50cy9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/Y2I0YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svY29tcG9uZW50cy9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/MjMwZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29ycmVjdGlvblRhc2svY29tcG9uZW50cy9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/YzkyYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQSxTQVBBLHFCQU9BO0FBQ0E7QUFDQTtBQUNBO0FBVkEsRzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FB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QUE7QUFBQTtBQUErRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHekc7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEZBQU07QUFDUixFQUFFLDJHQUFNO0FBQ1IsRUFBRSxvSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBeVQsQ0FBZ0IscVZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN1U7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLku7vliqHku7bor6bmg4VcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj4gPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci10aXRsZVwiPlxyXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInRpdGxlLWxpbmVcIj48L2Rpdj4gLS0+XHJcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwidGl0bGUtbmFtZVwiPuS7u+WKoTE8L2Rpdj4gLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLW51bVwiPnt7IGRldGFpbE9iai50aXRsZSB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtbmFtZVwiPuedo+afpeaKpeWRiuaMh+WHujwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLXJpZ2h0XCI+e3sgZGV0YWlsT2JqLnJlY3RpZmljYXRpb25EZWFkbGluZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFwiPlxyXG4gICAgICAgICAge3sgZGV0YWlsT2JqLnJlcG9ydFN0YXRlcyB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLW5hbWVcIj7nibXlpLTpqozmlLbljZXkvY08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LXRleHRcIj57eyBkZXRhaWxPYmoubGVhZEFjY2VwdGFuY2VVbml0IH19PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtbmFtZVwiPueJteWktOaVtOaUueWNleS9jTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFwiPnt7IGRldGFpbE9iai5sZWFkaW5nUmVjdGlmaWNhdGlvblVuaXQgfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS1uYW1lXCI+5pW05pS55a6e5pa95Li75L2TPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0XCI+XHJcbiAgICAgICAgICB7eyBkZXRhaWxPYmoucmVjdGlmaWNhdGlvbkltcGxlbWVudGEgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLW5hbWVcIj7mlbTmlLnnm67moIc8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0LXRleHRcIj5cclxuICAgICAgICAgIHt7IGRldGFpbE9iai5yZWN0aWZpY2F0aW9uT2JqZWN0aXZlcyB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lYXN1cmUtdGl0bGVcIj7mlbTmlLnmjqrmlr08L2Rpdj5cclxuICAgICAgPCEtLSDmlbTmlLnmjqrmlr0gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItbWVhc3VyZVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkZXRhaWxPYmoubWVhc3VyZXNMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYXN1cmUtaW5kZXhcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgaW5kZXggKyAxIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7eyBpdGVtLm1lYXN1cmVzQ29udGVudCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm1lYXN1cmUtYm90dG9tXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhc3VyZS1ib3R0b20tdG9wXCI+6L+b5bGV5oOF5Ya1eHh4eHh4eHg8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFzdXJlLWJvdHRvbS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdj7pg6jpl6g6eHh46YOo6ZeoPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+MjAyNC0xMi0xMjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiaW5kZXhcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGV0YWlsT2JqOiB7fSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc3Qgb2JqZWN0UGFyYW0gPSBKU09OLnBhcnNlKHRoaXMuJHJvdXRlLnF1ZXJ5Lm9iamVjdFBhcmFtKTtcclxuICAgIHRoaXMuZGV0YWlsT2JqID0gb2JqZWN0UGFyYW07XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NiwgMjQ2LCAxKTtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXYge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC50aXRsZS1saW5lIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDExNSwgMTQyLCAyNTAsIDEpIDAlLCByZ2JhKDU2LCA2NSwgMjUyLCAxKSAxMDAlKTtcclxuICAgICAgbWFyZ2luOiA5cHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgIH1cclxuICAgIC50aXRsZS1udW0ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICBtYXJnaW46IDNweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC5jb250ZW50LXRpdGxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMDUpO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAudGl0bGUtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDIzNCwgMjMwLCAxKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjAzLCAxOTEsIDEpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgODcsIDUxLCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUtcmlnaHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEwOSwgMTcwLCAyNTMsIDEpIDAlLCByZ2JhKDY3LCAxMjAsIDIzOCwgMSkgMTAwJSk7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtIHtcclxuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA1cHggNHB4IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTUuOTFweDtcclxuICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNyk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC5lbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0xIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggNXB4IDRweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAvLyAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW52LWluc3BlY3RvcnMtbGlzdC1ib3R0b20ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI1MCwgMjUzLCAxKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIC53b3JkcyB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWVhc3VyZS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgfVxyXG4gIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItbWVhc3VyZSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICBtYXJnaW46IDNweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5lbnYtaW5zcGVjdG9ycy1saXN0LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNS45MXB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC43KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAubWVhc3VyZS1pbmRleCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxNDYsIDI1MCwgMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiA2MCUsIHJnYmEoMTIyLCAxNDYsIDI1MCwgMSkgNDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lYXN1cmUtYm90dG9tIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQ1LCAyNTUsIDEpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAubWVhc3VyZS1ib3R0b20tdG9wIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICB9XHJcbiAgICAgIC5tZWFzdXJlLWJvdHRvbS1ib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDB2aFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5Lu75Yqh5Lu26K+m5oOFXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW51bVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGV0YWlsT2JqLnRpdGxlKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuedo+afpeaKpeWRiuaMh+WHulwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbE9iai5yZWN0aWZpY2F0aW9uRGVhZGxpbmUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRldGFpbE9iai5yZXBvcnRTdGF0ZXMpICsgXCIgXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZXRhaWxPYmoubGVhZEFjY2VwdGFuY2VVbml0KSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1saXN0LXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRldGFpbE9iai5sZWFkaW5nUmVjdGlmaWNhdGlvblVuaXQpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5kZXRhaWxPYmoucmVjdGlmaWNhdGlvbkltcGxlbWVudGEpICsgXCIgXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmRldGFpbE9iai5yZWN0aWZpY2F0aW9uT2JqZWN0aXZlcykgKyBcIiBcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lYXN1cmUtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5pW05pS55o6q5pa9XCIpXSksXG4gICAgICAgICAgX3ZtLl9sKF92bS5kZXRhaWxPYmoubWVhc3VyZXNMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250YWluZXItbWVhc3VyZVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVhc3VyZS1pbmRleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGluZGV4ICsgMSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLm1lYXN1cmVzQ29udGVudCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW5hbWVcIiB9LCBbX3ZtLl92KFwi54m15aS06aqM5pS25Y2V5L2NXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW5hbWVcIiB9LCBbX3ZtLl92KFwi54m15aS05pW05pS55Y2V5L2NXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW5hbWVcIiB9LCBbX3ZtLl92KFwi5pW05pS55a6e5pa95Li75L2TXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLW5hbWVcIiB9LCBbX3ZtLl92KFwi5pW05pS555uu5qCHXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXJbZGF0YS12LTRkYzc1NTliXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci10aXRsZVtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNjtcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci10aXRsZSBkaXZbZGF0YS12LTRkYzc1NTliXSB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlIC50aXRsZS1saW5lW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3MzhlZmEgMCUsICMzODQxZmMgMTAwJSk7XFxuICBtYXJnaW46IDlweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlIC50aXRsZS1uYW1lW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLXRpdGxlIC50aXRsZS1udW1bZGF0YS12LTRkYzc1NTliXSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnRbZGF0YS12LTRkYzc1NTliXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IHJnYmEoMzcsIDU3LCAxMTEsIDAuMDUpO1xcbiAgbWFyZ2luOiAzcHggMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5jb250ZW50LXRpdGxlW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMDUpO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5jb250ZW50LXRpdGxlIC50aXRsZS1uYW1lW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuY29udGVudC10aXRsZSAudGl0bGUtaW5uZXJbZGF0YS12LTRkYzc1NTliXSB7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZjZWFlNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNiYmY7XFxuICBjb2xvcjogI2ZmNTczMztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5jb250ZW50LXRpdGxlIC50aXRsZS1yaWdodFtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZkYWFmZCAwJSwgIzQzNzhlZSAxMDAlKTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMCUgLSAyNDBweCk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW1bZGF0YS12LTRkYzc1NTliXSB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcGFkZGluZzogNHB4IDVweCA0cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWl0ZW0gc3BhbltkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuZW52LWluc3BlY3RvcnMtbGlzdC10ZXh0W2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTUuOTFweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjcpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWxpc3QtaXRlbTFbZGF0YS12LTRkYzc1NTliXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDRweCA1cHggNHB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItY29udGVudCAuZW52LWluc3BlY3RvcnMtbGlzdC1pdGVtMSBzcGFuW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWJvdHRvbVtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y5ZmFmZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1saXN0LWJvdHRvbSAud29yZHNbZGF0YS12LTRkYzc1NTliXSB7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLWNvbnRlbnQgLmVudi1pbnNwZWN0b3JzLWxpc3QtYm90dG9tIC5yaWdodFtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICM4ODg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5tZWFzdXJlLXRpdGxlW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1jb250YWluZXItbWVhc3VyZVtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XFxuICBtYXJnaW46IDNweCAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtY29udGFpbmVyLW1lYXN1cmUgLmVudi1pbnNwZWN0b3JzLWxpc3QtdGV4dFtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1LjkxcHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC43KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1tZWFzdXJlIC5lbnYtaW5zcGVjdG9ycy1saXN0LXRleHQgLm1lYXN1cmUtaW5kZXhbZGF0YS12LTRkYzc1NTliXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgNjAlLCAjN2E5MmZhIDQwJSk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1tZWFzdXJlIC5tZWFzdXJlLWJvdHRvbVtkYXRhLXYtNGRjNzU1OWJdIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmNWZmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1tZWFzdXJlIC5tZWFzdXJlLWJvdHRvbSAubWVhc3VyZS1ib3R0b20tdG9wW2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lci1tZWFzdXJlIC5tZWFzdXJlLWJvdHRvbSAubWVhc3VyZS1ib3R0b20tYm94W2RhdGEtdi00ZGM3NTU5Yl0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRkYzc1NTliJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmE1YWYxYzJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZGM3NTU5YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRkYzc1NTliJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGRjNzU1OWImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29ycmVjdGlvblRhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29ycmVjdGlvblRhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGRjNzU1OWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0ZGM3NTU5YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZGM3NTU5YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZGM3NTU5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZGM3NTU5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29ycmVjdGlvblRhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkYzc1NTliJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRkYzc1NTliJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY29ycmVjdGlvblRhc2svY29tcG9uZW50cy9jb3JyZWN0aW9uVGFza0RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb3JyZWN0aW9uVGFza0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZGM3NTU5YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvcnJlY3Rpb25UYXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZGM3NTU5YiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=