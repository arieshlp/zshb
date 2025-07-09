(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ldDetail",
  components: {},
  data: function data() {
    return {
      ldInfo: {},
      // imgUrl1:require('@/assets/polluter/ldDetail_bg.png')
      imgUrl1: __webpack_require__(/*! @/assets/polluter/ldDetail_bg3.png */ "./src/assets/polluter/ldDetail_bg3.png")
    };
  },
  mounted: function mounted() {
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var id = this.$route.query.id;
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["transDetail"])({
        id: id
      }).then(function (res) {
        if (res.code == 200) {
          _this.ldInfo = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "lddetail",
      style: { "background-image": "url(" + _vm.imgUrl1 + ")" },
    },
    [
      _c("van-nav-bar", {
        staticStyle: {
          opacity: "1",
          "box-shadow": "none",
          "background-color": "rgb(225,255,255,0.1)",
        },
        attrs: { title: "转移联单详情", "left-arrow": "" },
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
          _c("div", { staticClass: "ld_content" }, [
            _c("div", { staticClass: "title" }, [
              _c("span", [_vm._v(_vm._s(_vm.ldInfo.transNo))]),
              _c("span", { staticClass: "yellow_right_black" }, [
                _vm._v(_vm._s(_vm.ldInfo.transType)),
              ]),
              _c(
                "span",
                {
                  staticClass: "title_tips green_tips",
                  staticStyle: {
                    "font-size": "12px",
                    "margin-left": "auto",
                    color: "#43cf7c",
                    "margin-top": "9px",
                    "margin-right": "10px",
                  },
                },
                [
                  _vm._v(
                    " " +
                      _vm._s(_vm.ldInfo.recvTime != "" ? "已接收" : "未接收") +
                      " "
                  ),
                ]
              ),
            ]),
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: {
                  "background-color": "rgb(225,255,255,0.1)",
                  border: "none",
                },
              },
              [
                _c("div", { staticClass: "company_title" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/polluter/waste.png */ "./src/assets/polluter/waste.png"),
                    },
                  }),
                  _c("span", { staticStyle: { "font-size": "18px" } }, [
                    _vm._v(_vm._s(_vm.ldInfo.transWasteName)),
                  ]),
                ]),
                _c(
                  "div",
                  {
                    staticClass: "main_content",
                    staticStyle: { "padding-top": "10px" },
                  },
                  [
                    _c("div", { staticClass: "whole_width no_bottom" }, [
                      _c("span", [_vm._v("危废名称")]),
                      _c("span", [_vm._v(_vm._s(_vm.ldInfo.transWasteName))]),
                    ]),
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("危废形态")]),
                      _c("span", [_vm._v(_vm._s(_vm.ldInfo.wasteType))]),
                    ]),
                    _c("div", { staticClass: "half_width no_bottom" }, [
                      _c("span", [_vm._v("危废特征")]),
                      _c("span", [_vm._v(_vm._s(_vm.ldInfo.wasteAttr))]),
                    ]),
                  ]
                ),
                _c("div", { staticClass: "bulid_main_hr" }),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width no_bottom" }, [
                    _c("span", [_vm._v("危废典型元素成分")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.element))]),
                  ]),
                ]),
              ]
            ),
          ]),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 5px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("产生单位信息")]),
                _c("span", { staticClass: "detail_title" }, [
                  _vm._v(_vm._s(_vm.ldInfo.productTime)),
                ]),
              ]),
              _c(
                "div",
                {
                  staticClass: "base_title",
                  staticStyle: {
                    color: "rgba(252, 158, 63, 1)",
                    "font-size": "14px",
                    "font-weight": "400",
                    padding: "10px 20px 5px",
                  },
                },
                [_vm._v(_vm._s(_vm.ldInfo.productEntName))]
              ),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("发运人")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.sendName))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("转出数量")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.ldInfo.sendQuantity) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系人")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.sendContact))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.sendTel))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("地址")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.sendAddr))]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 5px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("运输单位信息")]),
                _c("span", { staticClass: "detail_title" }, [
                  _vm._v(_vm._s(_vm.ldInfo.transTime)),
                ]),
              ]),
              _c(
                "div",
                {
                  staticClass: "base_title",
                  staticStyle: {
                    color: "rgba(252, 158, 63, 1)",
                    "font-size": "14px",
                    "font-weight": "400",
                    padding: "10px 20px 5px",
                  },
                },
                [
                  _vm._v(_vm._s(_vm.ldInfo.transEntName)),
                  _c("span", { staticClass: "info_right" }, [
                    _vm._v("运输车牌号"),
                  ]),
                  _c(
                    "span",
                    {
                      staticClass: "info_right",
                      staticStyle: { margin: "0px 5px" },
                    },
                    [_vm._v(_vm._s(_vm.ldInfo.transCarNo))]
                  ),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("道路运输许可证号")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.transLicense))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("转运数量")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.ldInfo.transQuantity) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系人")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.transName))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.sendName))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("地址")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.transTel))]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 5px 0px" },
            },
            [
              _c("div", { staticClass: "company_title" }, [
                _c("span", [_vm._v("接收单位信息")]),
                _c("span", { staticClass: "detail_title" }, [
                  _vm._v(_vm._s(_vm.ldInfo.recvTime)),
                ]),
              ]),
              _c(
                "div",
                {
                  staticClass: "base_title",
                  staticStyle: {
                    color: "rgba(252, 158, 63, 1)",
                    "font-size": "14px",
                    "font-weight": "400",
                    padding: "10px 20px 5px",
                  },
                },
                [_vm._v(_vm._s(_vm.ldInfo.recvEntName))]
              ),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("危废经营许可证号")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.wasteLicenseNo))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("接收数量")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.ldInfo.recvQuantity) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("处置方式")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.manageMethod))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系人")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.manageName))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.manageTel))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("地址")]),
                    _c("span", [_vm._v(_vm._s(_vm.ldInfo.manageAddr))]),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lddetail {\n  background: #fff;\n  background-repeat: no-repeat;\n  background-size: contain;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-6239d250] .van-nav-bar__title {\n  color: #fff;\n}\n[data-v-6239d250] .van-nav-bar .van-icon, .van-nav-bar__left .van-nav-bar__text[data-v-6239d250] {\n  color: #fff;\n}\n.ld_content[data-v-6239d250] {\n  opacity: 1;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.3);\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  margin: 0px 5px;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n}\n.ld_content .title[data-v-6239d250] {\n  height: 40px;\n  opacity: 1;\n  border-radius: 20px;\n  line-height: 40px;\n  background: rgba(255, 255, 255, 0.3);\n  border: 1px solid white;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  display: flex;\n}\n.ld_content .title > span[data-v-6239d250] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 40px;\n  color: #fc9e3f;\n  text-align: left;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.ld_content .title .yellow_right_black[data-v-6239d250] {\n  font-size: 12px;\n  margin-right: 10px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2761ec47", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4180b3aa", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/ldDetail_bg3.png":
/*!**********************************************!*\
  !*** ./src/assets/polluter/ldDetail_bg3.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ldDetail_bg3.png";

/***/ }),

/***/ "./src/assets/polluter/waste.png":
/*!***************************************!*\
  !*** ./src/assets/polluter/waste.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADcSURBVCiRjY4hSwRhGISf2f2WazaxmU1aNKkIxxUx2O1Gk8Fw7bjFchwmf4dYBBcEi1nwT4hGsejejkFWdu9bj3vb8M4zMxoMyzdglSXO6CJZ1vxLeD00ZCn5yPDVNukEOK1lEwi2csTnXO5GU4S55zZevKo1CXwVN6iP2e8CZkg7UaS9Bups6GEO4hFqqWTx4vi6gNcK7wpPoy7hNiAesyrdfMizpyLPziWOgY/6baMaqIxHeyHt313qvTYU43CbKN0CvfxlDobljeTrYpzd/7f78My975XZxOL5B19JPuc9ZrBtAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/pollution/detail/ldDetail.vue":
/*!*************************************************!*\
  !*** ./src/views/pollution/detail/ldDetail.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ldDetail.vue?vue&type=template&id=6239d250&scoped=true& */ "./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true&");
/* harmony import */ var _ldDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ldDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ldDetail.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& */ "./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ldDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6239d250",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/ldDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=style&index=1&id=6239d250&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_style_index_1_id_6239d250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ldDetail.vue?vue&type=template&id=6239d250&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/ldDetail.vue?vue&type=template&id=6239d250&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ldDetail_vue_vue_type_template_id_6239d250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsLnZ1ZT83MDc5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsLnZ1ZT9hODkyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsLnZ1ZT9iYjUxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsLnZ1ZT82NjhiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2xkRGV0YWlsLnZ1ZT81Y2NhIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvbGREZXRhaWxfYmczLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3dhc3RlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9sZERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlPzRkOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlPzY2ZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlPzMxYWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlP2VmNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUE7QUFHQTtBQUNBLGtCQURB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QUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3hDZjtBQUFBO0FBQUEsd0NBQTZTLENBQWdCLHlVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGRkZXRhaWxcIiBzdHlsZT1cIlwiIDpzdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6J3VybCgnKyBpbWdVcmwxICsnKSd9XCI+XHJcbiAgICAgICAgPHZhbi1uYXYtYmFyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIui9rOenu+iBlOWNleivpuaDhVwiXHJcbiAgICAgICAgICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm9wYWNpdHk6IDE7Ym94LXNoYWRvdzpub25lO2JhY2tncm91bmQtY29sb3I6IHJnYigyMjUsMjU1LDI1NSwwLjEpO1wiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC92YW4tbmF2LWJhcj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXZoKTtvdmVyZmxvdy15OiBhdXRvO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tsZEluZm8udHJhbnNOb319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVsbG93X3JpZ2h0X2JsYWNrXCI+e3tsZEluZm8udHJhbnNUeXBlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIiBzdHlsZT1cImZvbnQtc2l6ZToxMnB4O21hcmdpbi1sZWZ0OiBhdXRvO2NvbG9yOiAjNDNjZjdjO21hcmdpbi10b3A6IDlweDttYXJnaW4tcmlnaHQ6IDEwcHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e2xkSW5mby5yZWN2VGltZSE9Jyc/J+W3suaOpeaUtic6J+acquaOpeaUtid9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwyNTUsMjU1LDAuMSk7Ym9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci93YXN0ZS5wbmdcIi8+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE4cHg7XCI+e3tsZEluZm8udHJhbnNXYXN0ZU5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWNseW6n+WQjeensDwvc3Bhbj48c3Bhbj57e2xkSW5mby50cmFuc1dhc3RlTmFtZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aCBub19ib3R0b21cIj48c3Bhbj7ljbHlup/lvaLmgIE8L3NwYW4+PHNwYW4+e3tsZEluZm8ud2FzdGVUeXBlfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWNseW6n+eJueW+gTwvc3Bhbj48c3Bhbj57e2xkSW5mby53YXN0ZUF0dHJ9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVsaWRfbWFpbl9oclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWNseW6n+WFuOWei+WFg+e0oOaIkOWIhjwvc3Bhbj48c3Bhbj57e2xkSW5mby5lbGVtZW50fX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDVweCAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuS6p+eUn+WNleS9jeS/oeaBrzwvc3Bhbj48c3BhbiBjbGFzcz1cImRldGFpbF90aXRsZVwiPnt7bGRJbmZvLnByb2R1Y3RUaW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFzZV90aXRsZVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjUyLCAxNTgsIDYzLCAxKTtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDQwMDtwYWRkaW5nOiAxMHB4IDIwcHggNXB4XCI+e3tsZEluZm8ucHJvZHVjdEVudE5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7lj5Hov5Dkuro8L3NwYW4+PHNwYW4+e3tsZEluZm8uc2VuZE5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPui9rOWHuuaVsOmHjzwvc3Bhbj48c3Bhbj57e2xkSW5mby5zZW5kUXVhbnRpdHl9fSDlkKg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vkuro8L3NwYW4+PHNwYW4+e3tsZEluZm8uc2VuZENvbnRhY3R9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuiBlOezu+eUteivnTwvc3Bhbj48c3Bhbj57e2xkSW5mby5zZW5kVGVsfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5Zyw5Z2APC9zcGFuPjxzcGFuPnt7bGRJbmZvLnNlbmRBZGRyfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDVweCAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPui/kOi+k+WNleS9jeS/oeaBrzwvc3Bhbj48c3BhbiBjbGFzcz1cImRldGFpbF90aXRsZVwiPnt7bGRJbmZvLnRyYW5zVGltZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhc2VfdGl0bGVcIiBzdHlsZT1cImNvbG9yOiByZ2JhKDI1MiwgMTU4LCA2MywgMSk7Zm9udC1zaXplOiAxNHB4O2ZvbnQtd2VpZ2h0OiA0MDA7cGFkZGluZzogMTBweCAyMHB4IDVweFwiPnt7bGRJbmZvLnRyYW5zRW50TmFtZX19PHNwYW4gY2xhc3M9XCJpbmZvX3JpZ2h0XCI+6L+Q6L6T6L2m54mM5Y+3PC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5mb19yaWdodFwiIHN0eWxlPVwibWFyZ2luOiAwcHggNXB4O1wiPnt7bGRJbmZvLnRyYW5zQ2FyTm99fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6YGT6Lev6L+Q6L6T6K645Y+v6K+B5Y+3PC9zcGFuPjxzcGFuPnt7bGRJbmZvLnRyYW5zTGljZW5zZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6L2s6L+Q5pWw6YePPC9zcGFuPjxzcGFuPnt7bGRJbmZvLnRyYW5zUXVhbnRpdHl9fSDlkKg8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vkuro8L3NwYW4+PHNwYW4+e3tsZEluZm8udHJhbnNOYW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vnlLXor508L3NwYW4+PHNwYW4+e3tsZEluZm8uc2VuZE5hbWV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lnLDlnYA8L3NwYW4+PHNwYW4+e3tsZEluZm8udHJhbnNUZWx9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjo2cHggNXB4IDBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5o6l5pS25Y2V5L2N5L+h5oGvPC9zcGFuPjxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCI+e3tsZEluZm8ucmVjdlRpbWV9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX3RpdGxlXCIgc3R5bGU9XCJjb2xvcjogcmdiYSgyNTIsIDE1OCwgNjMsIDEpO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogNDAwO3BhZGRpbmc6IDEwcHggMjBweCA1cHhcIj57e2xkSW5mby5yZWN2RW50TmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuWNseW6n+e7j+iQpeiuuOWPr+ivgeWPtzwvc3Bhbj48c3Bhbj57e2xkSW5mby53YXN0ZUxpY2Vuc2VOb319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5o6l5pS25pWw6YePPC9zcGFuPjxzcGFuPnt7bGRJbmZvLnJlY3ZRdWFudGl0eX19IOWQqDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuWkhOe9ruaWueW8jzwvc3Bhbj48c3Bhbj57e2xkSW5mby5tYW5hZ2VNZXRob2R9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuiBlOezu+S6ujwvc3Bhbj48c3Bhbj57e2xkSW5mby5tYW5hZ2VOYW1lfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vnlLXor508L3NwYW4+PHNwYW4+e3tsZEluZm8ubWFuYWdlVGVsfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7lnLDlnYA8L3NwYW4+PHNwYW4+e3tsZEluZm8ubWFuYWdlQWRkcn19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcblx0XHR0cmFuc0RldGFpbFxyXG5cdH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJsZERldGFpbFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuXHRcdFx0XHRcdFx0XHRsZEluZm86e30sXHJcbiAgICAgICAgICAgICAgICAvLyBpbWdVcmwxOnJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL2xkRGV0YWlsX2JnLnBuZycpXHJcbiAgICAgICAgICAgICAgICBpbWdVcmwxOnJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL2xkRGV0YWlsX2JnMy5wbmcnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHRcdFx0XHRtb3VudGVkKCl7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHRcdFx0fSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblx0XHRcdFx0XHRsb2FkRGF0YSgpe1xyXG5cdFx0XHRcdFx0XHRsZXQgaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuXHRcdFx0XHRcdFx0dHJhbnNEZXRhaWwoe2lkOmlkfSkudGhlbihyZXM9PntcclxuXHRcdFx0XHRcdFx0XHRpZihyZXMuY29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubGRJbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQubGRkZXRhaWx7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5cdFx0Ly8gbWFyZ2luOiAtMjBweDtwYWRkaW5nOiAyMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdFxyXG4gICAgOjp2LWRlZXAgLnZhbi1uYXYtYmFyX190aXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIDo6di1kZWVwIC52YW4tbmF2LWJhciAudmFuLWljb24sIC52YW4tbmF2LWJhcl9fbGVmdCAudmFuLW5hdi1iYXJfX3RleHR7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAubGRfY29udGVudHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDRweCAyMHB4ICByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuXHRcdFx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTIsIDE1OCwgNjMsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAueWVsbG93X3JpZ2h0X2JsYWNre1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGRkZXRhaWxcIixcbiAgICAgIHN0eWxlOiB7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybChcIiArIF92bS5pbWdVcmwxICsgXCIpXCIgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICAgIFwiYm94LXNoYWRvd1wiOiBcIm5vbmVcIixcbiAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2IoMjI1LDI1NSwyNTUsMC4xKVwiLFxuICAgICAgICB9LFxuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLovaznp7vogZTljZXor6bmg4VcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCJjYWxjKDEwMHZoIC0gOXZoKVwiLCBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZF9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8udHJhbnNObykpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInllbGxvd19yaWdodF9ibGFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8udHJhbnNUeXBlKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDNjZjdjXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjlweFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxkSW5mby5yZWN2VGltZSAhPSBcIlwiID8gXCLlt7LmjqXmlLZcIiA6IFwi5pyq5o6l5pS2XCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYigyMjUsMjU1LDI1NSwwLjEpXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3dhc3RlLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxkSW5mby50cmFuc1dhc3RlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLljbHlup/lkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby50cmFuc1dhc3RlTmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y2x5bqf5b2i5oCBXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8ud2FzdGVUeXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLljbHlup/nibnlvoFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby53YXN0ZUF0dHIpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVsaWRfbWFpbl9oclwiIH0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y2x5bqf5YW45Z6L5YWD57Sg5oiQ5YiGXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLmVsZW1lbnQpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCA1cHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6p+eUn+WNleS9jeS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5wcm9kdWN0VGltZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYXNlX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDI1MiwgMTU4LCA2MywgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHggNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5wcm9kdWN0RW50TmFtZSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWPkei/kOS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5zZW5kTmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLovazlh7rmlbDph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8uc2VuZFF1YW50aXR5KSArIFwiIOWQqFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLogZTns7vkurpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8uc2VuZENvbnRhY3QpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnNlbmRUZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWcsOWdgFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5zZW5kQWRkcikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDVweCAwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L+Q6L6T5Y2V5L2N5L+h5oGvXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnRyYW5zVGltZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYXNlX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDI1MiwgMTU4LCA2MywgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHggNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnRyYW5zRW50TmFtZSkpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb19yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6L+Q6L6T6L2m54mM5Y+3XCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvX3JpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBweCA1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnRyYW5zQ2FyTm8pKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIumBk+i3r+i/kOi+k+iuuOWPr+ivgeWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby50cmFuc0xpY2Vuc2UpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L2s6L+Q5pWw6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnRyYW5zUXVhbnRpdHkpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiBlOezu+S6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby50cmFuc05hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLnNlbmROYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnLDlnYBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8udHJhbnNUZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCA1cHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOpeaUtuWNleS9jeS/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5yZWN2VGltZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYXNlX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDI1MiwgMTU4LCA2MywgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHggNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5yZWN2RW50TmFtZSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWNseW6n+e7j+iQpeiuuOWPr+ivgeWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby53YXN0ZUxpY2Vuc2VObykpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjqXmlLbmlbDph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8ucmVjdlF1YW50aXR5KSArIFwiIOWQqFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpITnva7mlrnlvI9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZEluZm8ubWFuYWdlTWV0aG9kKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiBlOezu+S6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5tYW5hZ2VOYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiBlOezu+eUteivnVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxkSW5mby5tYW5hZ2VUZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zyw5Z2AXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGRJbmZvLm1hbmFnZUFkZHIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxkZGV0YWlsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLXYtNjIzOWQyNTBdIC52YW4tbmF2LWJhcl9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbltkYXRhLXYtNjIzOWQyNTBdIC52YW4tbmF2LWJhciAudmFuLWljb24sIC52YW4tbmF2LWJhcl9fbGVmdCAudmFuLW5hdi1iYXJfX3RleHRbZGF0YS12LTYyMzlkMjUwXSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmxkX2NvbnRlbnRbZGF0YS12LTYyMzlkMjUwXSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBtYXJnaW46IDBweCA1cHg7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG4ubGRfY29udGVudCAudGl0bGVbZGF0YS12LTYyMzlkMjUwXSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmxkX2NvbnRlbnQgLnRpdGxlID4gc3BhbltkYXRhLXYtNjIzOWQyNTBdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmM5ZTNmO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmxkX2NvbnRlbnQgLnRpdGxlIC55ZWxsb3dfcmlnaHRfYmxhY2tbZGF0YS12LTYyMzlkMjUwXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjc2MWVjNDdcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sZERldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTYyMzlkMjUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDE4MGIzYWFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sZERldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD02MjM5ZDI1MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTYyMzlkMjUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xkRGV0YWlsX2JnMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBd0FBQUFOQ0FZQUFBQ2RLWTlDQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRGNTVVJCVkNpUmpZNGhTd1JoR0lTZjJmMldhemF4bVUxYU5La0l4eFV4Mk8xR2s4Rnc3YmpGY2h3bWY0ZFlCQmNFaTFud1Q0aEdzZWplamtGV2R1OWJqM3ZiOE00ek14b015emRnbFNYTzZDSloxdnhMZUQwMFpDbjV5UERWTnVrRU9LMWxFd2kyY3NUblhPNUdVNFM1NXpaZXZLbzFDWHdWTjZpUDJlOENaa2c3VWFTOUJ1cHM2R0VPNGhGcXFXVHg0dmk2Z05jSzd3cFBveTdoTmlBZXN5cmRmTWl6cHlMUHppV09nWS82YmFNYXFJeEhleUh0MzEzcXZUWVU0M0NiS04wQ3ZmeGxEb2JsamVUcllwemQvN2Y3OE15OTc1WFp4T0w1QjE5SlB1YzlackJ0QUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sZERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIzOWQyNTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGREZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sZERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGREZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTYyMzlkMjUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjIzOWQyNTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjIzOWQyNTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjIzOWQyNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjIzOWQyNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xkRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjM5ZDI1MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjM5ZDI1MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvbGREZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sZERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGREZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGREZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGREZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NjIzOWQyNTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sZERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIzOWQyNTAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9