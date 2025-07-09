(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "statusItem",
  props: {
    dataObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    dataObj: function dataObj(newD, oldD) {// console.log(newD)
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
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-detail" }, [
    _c("div", { staticClass: "detail-top" }, [
      _c(
        "div",
        {
          staticClass: "status",
          style: { color: _vm.dataObj.state === "超标" ? "red" : "#43cf7c" },
        },
        [
          _vm.dataObj.state === "超标"
            ? _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/zdCb.png */ "./src/assets/zdCb.png"), alt: "" },
              })
            : _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/xqstatus.png */ "./src/assets/xqstatus.png"), alt: "" },
              }),
          _vm._v(" " + _vm._s(_vm.dataObj.state) + " "),
        ]
      ),
      _c("div", { staticClass: "detail-right" }, [
        _c("div", { staticClass: "detail-xz" }, [
          _c(
            "div",
            {
              staticClass: "xzbq",
              style: {
                backgroundImage:
                  "url(" +
                  _vm.judgeLevel(
                    _vm.replaceString(_vm.dataObj.waterQualityLevel)
                  ) +
                  ")",
              },
            },
            [
              _vm._v(
                _vm._s(_vm.replaceString(_vm.dataObj.waterQualityLevel) || "-")
              ),
            ]
          ),
          _c("div", { staticClass: "words" }, [_vm._v("水质现状")]),
        ]),
        _c("div", { staticClass: "detail-xz" }, [
          _c(
            "div",
            {
              class: [
                "mbbq",
                _vm.judgeTargetLevel(
                  _vm.replaceString(
                    _vm.replaceString(_vm.dataObj.waterQualityTarget)
                  )
                ),
              ],
            },
            [
              _vm._v(
                _vm._s(_vm.replaceString(_vm.dataObj.waterQualityTarget) || "-")
              ),
            ]
          ),
          _c("div", { staticClass: "words" }, [_vm._v("水质目标")]),
        ]),
        _c("div", { staticClass: "detail-xq" }, [
          _c("div", { staticClass: "xqmc" }, [
            _vm._v(_vm._s(_vm.dataObj.areaName || "-")),
          ]),
          _c("div", { staticClass: "words" }, [_vm._v("考核县区")]),
        ]),
      ]),
    ]),
    _c(
      "div",
      { staticClass: "card-yz" },
      [
        _vm._l(_vm.dataObj.factorList, function (item) {
          return [
            item.overStandard === false
              ? _c("div", { staticClass: "yz-box" }, [
                  _c("span", [_vm._v(_vm._s(item.factorName))]),
                  _c("span", [
                    _vm._v(_vm._s(item.value) + " " + _vm._s(item.unit)),
                  ]),
                ])
              : _c("div", { staticClass: "yz-box" }, [
                  _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(item.factorName)),
                  ]),
                  _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(
                      _vm._s(item.value) +
                        " " +
                        _vm._s(item.unit) +
                        " " +
                        _vm._s(item.multiplier) +
                        "倍"
                    ),
                  ]),
                ]),
          ]
        }),
      ],
      2
    ),
    _c("div", { staticClass: "card-sjly" }, [
      _c("div", { staticClass: "sjly-left" }, [
        _c("div", { staticClass: "words" }, [
          _vm._v("数据来源：" + _vm._s(_vm.dataObj.dataSource)),
        ]),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.dataObj.monitoringMethod == "自动" ||
                  _vm.dataObj.controlLevel == "国控" ||
                  _vm.dataObj.controlLevel == "生态补偿",
                expression:
                  "dataObj.monitoringMethod == '自动' || dataObj.controlLevel == '国控' || dataObj.controlLevel == '生态补偿'",
              },
            ],
            staticClass: "words",
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
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/xqbg1.png */ "./src/assets/xqbg1.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".card-detail[data-v-6995bf40] {\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  border-radius: 8px;\n  background-size: 100% 100%;\n  background-position: center center;\n  margin-bottom: 6px;\n}\n.card-detail .detail-top[data-v-6995bf40] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 12px;\n}\n.card-detail .detail-top .status[data-v-6995bf40] {\n  width: 60px;\n  height: 60px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  margin-left: 15px;\n  text-align: center;\n  line-height: 64px;\n  font-size: 20px;\n  font-weight: 500;\n  position: relative;\n}\n.card-detail .detail-top .status img[data-v-6995bf40] {\n  position: absolute;\n  width: 16px;\n  height: 19px;\n  top: 0;\n  left: 6px;\n}\n.card-detail .detail-top .detail-right[data-v-6995bf40] {\n  width: calc(100% - 105px);\n  height: 50px;\n  opacity: 1;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  margin-left: 8px;\n  display: flex;\n  align-items: center;\n}\n.card-detail .detail-top .detail-right .detail-xz[data-v-6995bf40] {\n  width: 80px;\n  height: 50px;\n  float: left;\n}\n.card-detail .detail-top .detail-right .detail-xz .xzbq[data-v-6995bf40] {\n  width: 42px;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: white;\n  background-size: 100% 100%;\n  background-position: center center;\n  margin-left: 19px;\n  margin-top: 10px;\n}\n.card-detail .detail-top .detail-right .detail-xz .mbbq[data-v-6995bf40] {\n  width: 30px;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  margin-left: 25px;\n  margin-top: 10px;\n}\n.card-detail .detail-top .detail-right .detail-xz .words[data-v-6995bf40] {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: center;\n}\n.card-detail .detail-top .detail-right .detail-xq[data-v-6995bf40] {\n  width: calc(100% - 180px);\n  height: 100%;\n  padding: 0 10px;\n}\n.card-detail .detail-top .detail-right .detail-xq .xqmc[data-v-6995bf40] {\n  width: 100%;\n  line-height: 30px;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.card-detail .detail-top .detail-right .detail-xq .words[data-v-6995bf40] {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.card-detail .card-yz[data-v-6995bf40] {\n  width: calc(100% - 20px);\n  height: auto;\n  margin: 0 10px 10px;\n  display: inline-block;\n}\n.card-detail .card-yz .yz-box[data-v-6995bf40] {\n  width: 50%;\n  height: 24px;\n  line-height: 24px;\n  float: left;\n}\n.card-detail .card-yz .yz-box span[data-v-6995bf40]:first-child {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  padding-left: 10px;\n}\n.card-detail .card-yz .yz-box span[data-v-6995bf40]:last-child {\n  font-size: 12px;\n  font-weight: 400;\n  color: #121236;\n  padding-left: 10px;\n}\n.card-detail .card-sjly[data-v-6995bf40] {\n  width: calc(100% - 20px);\n  height: auto;\n  display: inline-block;\n  opacity: 1;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  margin: 0px 9px 0px 9px;\n}\n.card-detail .card-sjly .sjly-left[data-v-6995bf40] {\n  width: calc(100% - 100px);\n  padding: 5px 0;\n  float: left;\n}\n.card-detail .card-sjly .sjly-left .words[data-v-6995bf40] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n  padding-left: 10px;\n}\n.card-detail .card-sjly .sjly-right[data-v-6995bf40] {\n  width: 100px;\n  height: 100%;\n  float: left;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-detail .card-sjly .sjly-right span[data-v-6995bf40] {\n  font-size: 12px;\n  font-weight: 400;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: rgba(18, 18, 54, 0.5);\n  margin-left: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0a1cb527", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/site-analysis.png":
/*!**************************************!*\
  !*** ./src/assets/site-analysis.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/site-analysis.png";

/***/ }),

/***/ "./src/assets/xqbg1.png":
/*!******************************!*\
  !*** ./src/assets/xqbg1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xqbg1.png";

/***/ }),

/***/ "./src/assets/xqstatus.png":
/*!*********************************!*\
  !*** ./src/assets/xqstatus.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAYAAABuf0pMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVFiF7ddBCoMwFITh/3kjb5BQjxWoAY/Vgj1BjmQXjdBFWqNo7WIGsgtvPsjbxC4pTJwUg9icVT5HAAEEEEAAAQQQQAABBBBAAAFWAwxiPv7eDmbg84nAuHpezfc8D+fWDv3S3S4FN8EVcDVzlwCjwaOmeAvkK8AgbileAykC9iouQPoMee/yzfy+R5bDa38MPKVF7VJwR5R+yq/7/jtP98I2VAjgEC4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/zdCb.png":
/*!*****************************!*\
  !*** ./src/assets/zdCb.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAYAAABuf0pMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADESURBVFiF7dJBCoMwEIXhN3aShcUzNZ6serKmZwp2YULSTVwo2mqptYt5IAhB/o8gdUolHDWitjgsnicAAQhAAAIQgAAEIAABCEAAAhAAb/6CqAWAGKOtQrCO2QBAURSGUrokwHwfkKPnvm+mR1UINr9aAHDM5kR0XQt5CSDAJqL7XHhpGWTXQpb/AaK29L7eEp9CSu/rmFJN+XZm1ymVRo/WHwXfrdO6mbYcsxkf7BQf5pjNQ6nbCDAc7Bmeg/yy9997Am7gV+5JOVcsAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/statusItem.vue":
/*!*************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/statusItem.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusItem.vue?vue&type=template&id=6995bf40&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true&");
/* harmony import */ var _statusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusItem.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _statusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6995bf40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/statusItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./statusItem.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=style&index=0&id=6995bf40&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_style_index_0_id_6995bf40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./statusItem.vue?vue&type=template&id=6995bf40&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/statusItem.vue?vue&type=template&id=6995bf40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statusItem_vue_vue_type_template_id_6995bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N0YXR1c0l0ZW0udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdGF0dXNJdGVtLnZ1ZT80Mjk3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdGF0dXNJdGVtLnZ1ZT82MDhjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdGF0dXNJdGVtLnZ1ZT8wMjAxIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2l0ZS1hbmFseXNpcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy94cWJnMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy94cXN0YXR1cy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy96ZENiLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3RhdHVzSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N0YXR1c0l0ZW0udnVlPzMzYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N0YXR1c0l0ZW0udnVlPzE5NmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N0YXR1c0l0ZW0udnVlPzBkMmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtdG9wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIiA6c3R5bGU9XCJ7Y29sb3I6IGRhdGFPYmouc3RhdGU9PT0n6LaF5qCHJz8ncmVkJzonIzQzY2Y3Yyd9XCI+XHJcbiAgICAgICAgPGltZyB2LWlmPVwiZGF0YU9iai5zdGF0ZT09PSfotoXmoIcnXCIgc3JjPVwifkAvYXNzZXRzL3pkQ2IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aW1nIHYtZWxzZSBzcmM9XCJ+QC9hc3NldHMveHFzdGF0dXMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICB7eyBkYXRhT2JqLnN0YXRlIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXJpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC14elwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInh6YnFcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKGRhdGFPYmoud2F0ZXJRdWFsaXR5TGV2ZWwpKSArICcpJyB9XCI+e3sgcmVwbGFjZVN0cmluZyhkYXRhT2JqLndhdGVyUXVhbGl0eUxldmVsKSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRzXCI+5rC06LSo546w54q2PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC14elwiPlxyXG4gICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ21iYnEnLCBqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcocmVwbGFjZVN0cmluZyhkYXRhT2JqLndhdGVyUXVhbGl0eVRhcmdldCkpKV1cIj57eyByZXBsYWNlU3RyaW5nKGRhdGFPYmoud2F0ZXJRdWFsaXR5VGFyZ2V0KSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRzXCI+5rC06LSo55uu5qCHPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC14cVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInhxbWNcIj57eyBkYXRhT2JqLmFyZWFOYW1lIHx8IFwiLVwiIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yZHNcIj7ogIPmoLjljr/ljLo8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXl6XCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW0gaW4gZGF0YU9iai5mYWN0b3JMaXN0XCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5vdmVyU3RhbmRhcmQ9PT1mYWxzZVwiIGNsYXNzPVwieXotYm94XCI+XHJcbiAgICAgICAgICA8c3Bhbj57eyBpdGVtLmZhY3Rvck5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57eyBpdGVtLnZhbHVlIH19IHt7IGl0ZW0udW5pdCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInl6LWJveFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+e3sgaXRlbS5mYWN0b3JOYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+e3sgaXRlbS52YWx1ZSB9fSB7eyBpdGVtLnVuaXQgfX0gIHt7aXRlbS5tdWx0aXBsaWVyfX3lgI08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zamx5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzamx5LWxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yZHNcIj7mlbDmja7mnaXmupDvvJp7eyBkYXRhT2JqLmRhdGFTb3VyY2UgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yZHNcIiB2LXNob3c9XCJkYXRhT2JqLm1vbml0b3JpbmdNZXRob2QgPT0gJ+iHquWKqCcgfHwgZGF0YU9iai5jb250cm9sTGV2ZWwgPT0gJ+WbveaOpycgfHwgZGF0YU9iai5jb250cm9sTGV2ZWwgPT0gJ+eUn+aAgeihpeWBvydcIj5cclxuICAgICAgICAgIDx2YW4taWNvbiBuYW1lPVwiaW5mb1wiIHNpemU9XCIxNFwiIGNvbG9yPVwicmdiYSgxOTYsIDE5NiwgMTk2LCAxKVwiIC8+IOiHquWKqOebkea1i+aVsOaNruacque7j+WbveWutuWuoeaguO+8jOS7heS+m+WPguiAg1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBpbWdKdWdkZUxldmVsIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInN0YXR1c0l0ZW1cIixcclxuICAgIHByb3BzOntcclxuICAgICAgZGF0YU9iajp7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpPT57fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6e1xyXG4gICAgICBkYXRhT2JqOiBmdW5jdGlvbiAobmV3RCxvbGREKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3RClcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgcmVwbGFjZVN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoXCLnsbtcIiwgXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAganVkZ2VMZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBpbWdKdWdkZUxldmVsKHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgICAganVkZ2VUYXJnZXRMZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWhXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFolwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQzXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaNcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuWKo+KFpFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ2XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuY2FyZC1kZXRhaWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+QC9hc3NldHMveHFiZzEucG5nXCIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgLmRldGFpbC10b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGV0YWlsLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTA1cHgpO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5kZXRhaWwteHoge1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIC54emJxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWJicSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwgMTk2LCAyLCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHJnYmEoMjUwLCAxOTYsIDIsIDEpO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC53b3JkcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWwteHEge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4MHB4KTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgIC54cW1jIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud29yZHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLXl6IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLnl6LWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLXNqbHkge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgbWFyZ2luOiAwcHggOXB4IDBweCA5cHg7XHJcbiAgICAgIC5zamx5LWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLndvcmRzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2pseS1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWRldGFpbFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC10b3BcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXR1c1wiLFxuICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uZGF0YU9iai5zdGF0ZSA9PT0gXCLotoXmoIdcIiA/IFwicmVkXCIgOiBcIiM0M2NmN2NcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmRhdGFPYmouc3RhdGUgPT09IFwi6LaF5qCHXCJcbiAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3pkQ2IucG5nXCIpLCBhbHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3hxc3RhdHVzLnBuZ1wiKSwgYWx0OiBcIlwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZGF0YU9iai5zdGF0ZSkgKyBcIiBcIiksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1yaWdodFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwteHpcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ4emJxXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmp1ZGdlTGV2ZWwoXG4gICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKF92bS5kYXRhT2JqLndhdGVyUXVhbGl0eUxldmVsKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLmRhdGFPYmoud2F0ZXJRdWFsaXR5TGV2ZWwpIHx8IFwiLVwiKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jkc1wiIH0sIFtfdm0uX3YoXCLmsLTotKjnjrDnirZcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLXh6XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICBcIm1iYnFcIixcbiAgICAgICAgICAgICAgICBfdm0uanVkZ2VUYXJnZXRMZXZlbChcbiAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhfdm0uZGF0YU9iai53YXRlclF1YWxpdHlUYXJnZXQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLmRhdGFPYmoud2F0ZXJRdWFsaXR5VGFyZ2V0KSB8fCBcIi1cIilcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29yZHNcIiB9LCBbX3ZtLl92KFwi5rC06LSo55uu5qCHXCIpXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC14cVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInhxbWNcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhT2JqLmFyZWFOYW1lIHx8IFwiLVwiKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jkc1wiIH0sIFtfdm0uX3YoXCLogIPmoLjljr/ljLpcIildKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQteXpcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX2woX3ZtLmRhdGFPYmouZmFjdG9yTGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgaXRlbS5vdmVyU3RhbmRhcmQgPT09IGZhbHNlXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ5ei1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5mYWN0b3JOYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS52YWx1ZSkgKyBcIiBcIiArIF92bS5fcyhpdGVtLnVuaXQpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ5ei1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmZhY3Rvck5hbWUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS52YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ubXVsdGlwbGllcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCLlgI1cIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtc2pseVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2pseS1sZWZ0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmRzXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaVsOaNruadpea6kO+8mlwiICsgX3ZtLl9zKF92bS5kYXRhT2JqLmRhdGFTb3VyY2UpKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhT2JqLm1vbml0b3JpbmdNZXRob2QgPT0gXCLoh6rliqhcIiB8fFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGFPYmouY29udHJvbExldmVsID09IFwi5Zu95o6nXCIgfHxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhT2JqLmNvbnRyb2xMZXZlbCA9PSBcIueUn+aAgeihpeWBv1wiLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICBcImRhdGFPYmoubW9uaXRvcmluZ01ldGhvZCA9PSAn6Ieq5YqoJyB8fCBkYXRhT2JqLmNvbnRyb2xMZXZlbCA9PSAn5Zu95o6nJyB8fCBkYXRhT2JqLmNvbnRyb2xMZXZlbCA9PSAn55Sf5oCB6KGl5YG/J1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndvcmRzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICBzaXplOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOTYsIDE5NiwgMTk2LCAxKVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIg6Ieq5Yqo55uR5rWL5pWw5o2u5pyq57uP5Zu95a625a6h5qC477yM5LuF5L6b5Y+C6ICDIFwiKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMveHFiZzEucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1kZXRhaWxbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5jYXJkLWRldGFpbCAuZGV0YWlsLXRvcFtkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmRldGFpbC10b3AgLnN0YXR1c1tkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZC1kZXRhaWwgLmRldGFpbC10b3AgLnN0YXR1cyBpbWdbZGF0YS12LTY5OTViZjQwXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDZweDtcXG59XFxuLmNhcmQtZGV0YWlsIC5kZXRhaWwtdG9wIC5kZXRhaWwtcmlnaHRbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTA1cHgpO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkLWRldGFpbCAuZGV0YWlsLXRvcCAuZGV0YWlsLXJpZ2h0IC5kZXRhaWwteHpbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmRldGFpbC10b3AgLmRldGFpbC1yaWdodCAuZGV0YWlsLXh6IC54emJxW2RhdGEtdi02OTk1YmY0MF0ge1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTlweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5jYXJkLWRldGFpbCAuZGV0YWlsLXRvcCAuZGV0YWlsLXJpZ2h0IC5kZXRhaWwteHogLm1iYnFbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmNhcmQtZGV0YWlsIC5kZXRhaWwtdG9wIC5kZXRhaWwtcmlnaHQgLmRldGFpbC14eiAud29yZHNbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJkLWRldGFpbCAuZGV0YWlsLXRvcCAuZGV0YWlsLXJpZ2h0IC5kZXRhaWwteHFbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTgwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmRldGFpbC10b3AgLmRldGFpbC1yaWdodCAuZGV0YWlsLXhxIC54cW1jW2RhdGEtdi02OTk1YmY0MF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uY2FyZC1kZXRhaWwgLmRldGFpbC10b3AgLmRldGFpbC1yaWdodCAuZGV0YWlsLXhxIC53b3Jkc1tkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLmNhcmQtZGV0YWlsIC5jYXJkLXl6W2RhdGEtdi02OTk1YmY0MF0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwIDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmNhcmQtZGV0YWlsIC5jYXJkLXl6IC55ei1ib3hbZGF0YS12LTY5OTViZjQwXSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNhcmQtZGV0YWlsIC5jYXJkLXl6IC55ei1ib3ggc3BhbltkYXRhLXYtNjk5NWJmNDBdOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmNhcmQteXogLnl6LWJveCBzcGFuW2RhdGEtdi02OTk1YmY0MF06bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5jYXJkLWRldGFpbCAuY2FyZC1zamx5W2RhdGEtdi02OTk1YmY0MF0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICBtYXJnaW46IDBweCA5cHggMHB4IDlweDtcXG59XFxuLmNhcmQtZGV0YWlsIC5jYXJkLXNqbHkgLnNqbHktbGVmdFtkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmNhcmQtc2pseSAuc2pseS1sZWZ0IC53b3Jkc1tkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uY2FyZC1kZXRhaWwgLmNhcmQtc2pseSAuc2pseS1yaWdodFtkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmQtZGV0YWlsIC5jYXJkLXNqbHkgLnNqbHktcmlnaHQgc3BhbltkYXRhLXYtNjk5NWJmNDBdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGF0dXNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OTViZjQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMGExY2I1MjdcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGF0dXNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OTViZjQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OTk1YmY0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zaXRlLWFuYWx5c2lzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy94cWJnMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFuQ0FZQUFBQnVmMHBNQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQ2lTVVJCVkZpRjdkZEJDb013RklUaC8za2piNUJRanhXb0FZL1ZnajFCam1RWGpkQkZXcU5vN1dJR3NndHZQc2pieEM0cFRKd1VnOWljVlQ1SEFBRUVFRUFBQVFRUVFBQUJCQkJBQUFGV0F3eGlQdjdlRG1iZzg0bkF1SHBlemZjOEQrZldEdjNTM1M0Rk44RVZjRFZ6bHdDandhT21lQXZrSzhBZ2JpbGVBeWtDOWlvdVFQb01lZS95emZ5K1I1YkRhMzhNUEtWRjdWSndSNVIreXEvNy9qdFA5OEkyVkFqZ0VDNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFuQ0FZQUFBQnVmMHBNQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREVTVVJCVkZpRjdkSkJDb013RUlYaE4zYVNoY1V6Tlo2c2VyS21ad3AyWVVMU1RWd28ybXFwdFl0NUlBaEIvbzhnZFVvbEhEV2l0amdzbmljQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhBQWIvNkNxQVdBR0tPdFFyQ08yUUJBVVJTR1Vyb2t3SHdma0tQbnZtK21SMVVJTnI5YUFIRE01a1IwWFF0NUNTREFKcUw3WEhocEdXVFhRcGIvQWFLMjlMN2VFcDlDU3Uvcm1GSk4rWFptMXltVlJvL1dId1hmcmRPNm1iWWNzeGtmN0JRZjVwak5RNm5iQ0RBYzdCbWVnL3l5OTk5N0FtN2dWKzVKT1Zjc0FBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk5NWJmNDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0YXR1c0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3N0YXR1c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk5NWJmNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OTk1YmY0MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTk1YmY0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTk1YmY0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTk1YmY0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk5NWJmNDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjk5NWJmNDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdGF0dXNJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdGF0dXNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OTViZjQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhdHVzSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk5NWJmNDAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9