(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Test',
  data: function data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  methods: {
    userLoginMock: function userLoginMock() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/login', {
                  username: _this.userName,
                  password: _this.passWord
                });

              case 3:
                response = _context.sent;

                if (response.data.code === 200) {
                  Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('登录成功');
                  localStorage.setItem('token', response.data.token);

                  _this.$router.push({
                    path: '/homePage'
                  }); // 保存token或执行其他登录成功后的操作


                  localStorage.setItem('token', response.data.token);
                } else {
                  Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])(response.data.message);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('请求失败，请重试');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& ***!
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
  return _c("div", { staticClass: "login" }, [
    _vm._m(0),
    _vm._m(1),
    _c(
      "div",
      { staticClass: "loginContent" },
      [
        _c("div", { staticClass: "titleName" }, [_vm._v("用户名")]),
        _c("van-field", {
          staticClass: "input-formatter",
          attrs: { placeholder: "请输入用户名", clearable: "" },
          model: {
            value: _vm.userName,
            callback: function ($$v) {
              _vm.userName = $$v
            },
            expression: "userName",
          },
        }),
        _c("div", { staticClass: "titleName" }, [_vm._v("密码")]),
        _c("van-field", {
          staticClass: "input-formatter",
          attrs: { placeholder: "请输入密码", clearable: "" },
          model: {
            value: _vm.passWord,
            callback: function ($$v) {
              _vm.passWord = $$v
            },
            expression: "passWord",
          },
        }),
      ],
      1
    ),
    _c(
      "div",
      { staticStyle: { margin: "5vh 5% 0" } },
      [
        _c(
          "van-button",
          {
            staticStyle: { height: "56px", "font-size": "18px" },
            attrs: { type: "info", block: "", round: "" },
            on: { click: _vm.userLoginMock },
          },
          [_vm._v("登录")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-top" }, [
      _c("div", { staticClass: "logo-top-wrapper" }, [
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              width: "100%",
            },
          },
          [
            _c("img", {
              staticClass: "img",
              attrs: { src: __webpack_require__(/*! @/assets/icon13.png */ "./src/assets/icon13.png"), alt: "" },
            }),
            _c("span", { staticClass: "name" }, [_vm._v("掌上环保")]),
          ]
        ),
        _c("div", { staticClass: "logo-top-company" }, [
          _vm._v("昆明市生态环境局"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "4vh 5%" } }, [
      _c("span", { staticStyle: { "font-size": "30px", color: "#25396F" } }, [
        _vm._v("您好！"),
      ]),
      _c("br"),
      _c(
        "div",
        {
          staticStyle: {
            "font-size": "15px",
            color: "rgba(37, 57, 111, 0.5)",
            "padding-top": "10px",
          },
        },
        [_vm._v("欢迎登录昆明掌上环保")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/logo-header.png */ "./src/assets/logo-header.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".login[data-v-fe8a4fa8] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n}\n.login .logo-top[data-v-fe8a4fa8] {\n  padding: 10vh 20% 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center top;\n  background-size: 150% 60%;\n  color: #082859;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 3px;\n}\n.login .logo-top .logo-top-wrapper[data-v-fe8a4fa8] {\n  position: relative;\n}\n.login .logo-top .logo-top-wrapper img[data-v-fe8a4fa8] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\n.login .logo-top .logo-top-wrapper .name[data-v-fe8a4fa8] {\n  color: #082859;\n  font-size: 26px;\n  letter-spacing: 5px;\n  font-weight: bold;\n}\n.login .logo-top .logo-top-wrapper .logo-top-company[data-v-fe8a4fa8] {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n}\n.login .loginContent[data-v-fe8a4fa8] {\n  margin: 0 5%;\n}\n.login .loginContent .words[data-v-fe8a4fa8] {\n  width: 100%;\n  height: 50px;\n  font-size: 36px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 50px;\n  color: #1f1f1f;\n  text-align: left;\n}\n.login .loginContent .titleName[data-v-fe8a4fa8] {\n  padding: 18px 0 13px;\n  font-size: 16px;\n  color: #25396F;\n  font-weight: 500;\n  text-align: left;\n}\n.login .loginContent .input-formatter[data-v-fe8a4fa8] {\n  width: 100%;\n  height: 56px;\n  opacity: 1;\n  border-radius: 50px;\n  background: #F4F6FF;\n  border: 1px solid #F4F6FF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-indent: 30px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5bfd736e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icon13.png":
/*!*******************************!*\
  !*** ./src/assets/icon13.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon13.png";

/***/ }),

/***/ "./src/assets/logo-header.png":
/*!************************************!*\
  !*** ./src/assets/logo-header.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-header.png";

/***/ }),

/***/ "./src/views/login/indexMock.vue":
/*!***************************************!*\
  !*** ./src/views/login/indexMock.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& */ "./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&");
/* harmony import */ var _indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexMock.vue?vue&type=script&lang=js& */ "./src/views/login/indexMock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fe8a4fa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/login/indexMock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWU/YTBlMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZT8zNjMxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlPzY1NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29uMTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1oZWFkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlPzlkZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWU/YmJhYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZT83YmU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBRUE7QUFDQSxjQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVNBO0FBQ0EsaUJBREEsMkJBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFDQSwwQ0FEQTtBQUVBO0FBRkEsa0JBRkE7O0FBQUE7QUFFQSx3QkFGQTs7QUFNQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBLHFCQUhBLENBTUE7OztBQUNBO0FBQ0EsaUJBUkEsTUFRQTtBQUNBO0FBQ0E7O0FBaEJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JBOztBQWxCQTtBQUFBO0FBQUE7QUFBQTtB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aUIscUJBQXVCLHlCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHOUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBa1MsQ0FBZ0IsMFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dvLXRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nby10b3Atd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL2ljb24xMy5wbmdcIiBjbGFzcz1cImltZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPuaOjOS4iueOr+S/nTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby10b3AtY29tcGFueVwiPuaYhuaYjuW4gueUn+aAgeeOr+Wig+WxgDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDR2aCA1JTtcIj5cclxuICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDMwcHg7Y29sb3I6ICMyNTM5NkY7XCI+5oKo5aW977yBPC9zcGFuPjxici8+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7Y29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7cGFkZGluZy10b3A6IDEwcHhcIj7mrKLov47nmbvlvZXmmIbmmI7mjozkuIrnjq/kv508L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbkNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlTmFtZVwiPueUqOaIt+WQjTwvZGl2PlxyXG4gICAgICA8dmFuLWZpZWxkIHYtbW9kZWw9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl55So5oi35ZCNXCIgY2xlYXJhYmxlIGNsYXNzPVwiaW5wdXQtZm9ybWF0dGVyXCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVOYW1lXCI+5a+G56CBPC9kaXY+XHJcbiAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cInBhc3NXb3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiBjbGVhcmFibGUgY2xhc3M9XCJpbnB1dC1mb3JtYXR0ZXJcIj5cclxuICAgICAgPC92YW4tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiA1dmggNSUgMDtcIj5cclxuICAgICAgPHZhbi1idXR0b24gdHlwZT1cImluZm9cIiBibG9jayByb3VuZCBAY2xpY2s9XCJ1c2VyTG9naW5Nb2NrXCIgc3R5bGU9XCJoZWlnaHQ6IDU2cHg7IGZvbnQtc2l6ZTogMThweDtcIj7nmbvlvZU8L3Zhbi1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyTmFtZTogXCJcIixcclxuICAgICAgICBwYXNzV29yZDogXCJcIixcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIHVzZXJMb2dpbk1vY2soKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3pzaGIvbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzV29yZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgVG9hc3QoJ+eZu+W9leaIkOWKnycpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aDogJy9ob21lUGFnZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOS/neWtmHRva2Vu5oiW5omn6KGM5YW25LuW55m75b2V5oiQ5Yqf5ZCO55qE5pON5L2cXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBUb2FzdCgn6K+35rGC5aSx6LSl77yM6K+36YeN6K+VJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5sb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAubG9nby10b3Age1xyXG4gICAgICBwYWRkaW5nOiAxMHZoIDIwJSAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvbG9nby1oZWFkZXIucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDYwJTtcclxuICAgICAgY29sb3I6ICMwODI4NTk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG5cclxuICAgICAgLmxvZ28tdG9wLXdyYXBwZXIge1xyXG4gICAgICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzA4Mjg1OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvLXRvcC1jb21wYW55IHtcclxuICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbkNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDAgNSU7XHJcblxyXG4gICAgICAud29yZHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDEpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZU5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMCAxM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzI1Mzk2RjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnB1dC1mb3JtYXR0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjRGNkZGO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWluZGVudDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5cIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fbSgxKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ2luQ29udGVudFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVOYW1lXCIgfSwgW192bS5fdihcIueUqOaIt+WQjVwiKV0pLFxuICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZm9ybWF0dGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl55So5oi35ZCNXCIsIGNsZWFyYWJsZTogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXJOYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnVzZXJOYW1lID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyTmFtZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlTmFtZVwiIH0sIFtfdm0uX3YoXCLlr4bnoIFcIildKSxcbiAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZvcm1hdHRlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWvhueggVwiLCBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzV29yZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5wYXNzV29yZCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc1dvcmRcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI1dmggNSUgMFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjU2cHhcIiwgXCJmb250LXNpemVcIjogXCIxOHB4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaW5mb1wiLCBibG9jazogXCJcIiwgcm91bmQ6IFwiXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXNlckxvZ2luTW9jayB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIueZu+W9lVwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ28tdG9wXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvLXRvcC13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZ1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9pY29uMTMucG5nXCIpLCBhbHQ6IFwiXCIgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoXCLmjozkuIrnjq/kv51cIildKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nby10b3AtY29tcGFueVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLmmIbmmI7luILnlJ/mgIHnjq/looPlsYBcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjR2aCA1JVwiIH0gfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIzMHB4XCIsIGNvbG9yOiBcIiMyNTM5NkZcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5oKo5aW977yBXCIpLFxuICAgICAgXSksXG4gICAgICBfYyhcImJyXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDM3LCA1NywgMTExLCAwLjUpXCIsXG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCLmrKLov47nmbvlvZXmmIbmmI7mjozkuIrnjq/kv51cIildXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvbG9nby1oZWFkZXIucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9naW5bZGF0YS12LWZlOGE0ZmE4XSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmxvZ2luIC5sb2dvLXRvcFtkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHBhZGRpbmc6IDEwdmggMjAlIDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1MCUgNjAlO1xcbiAgY29sb3I6ICMwODI4NTk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG4ubG9naW4gLmxvZ28tdG9wIC5sb2dvLXRvcC13cmFwcGVyW2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubG9naW4gLmxvZ28tdG9wIC5sb2dvLXRvcC13cmFwcGVyIGltZ1tkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmxvZ2luIC5sb2dvLXRvcCAubG9nby10b3Atd3JhcHBlciAubmFtZVtkYXRhLXYtZmU4YTRmYThdIHtcXG4gIGNvbG9yOiAjMDgyODU5O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubG9naW4gLmxvZ28tdG9wIC5sb2dvLXRvcC13cmFwcGVyIC5sb2dvLXRvcC1jb21wYW55W2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9naW4gLmxvZ2luQ29udGVudFtkYXRhLXYtZmU4YTRmYThdIHtcXG4gIG1hcmdpbjogMCA1JTtcXG59XFxuLmxvZ2luIC5sb2dpbkNvbnRlbnQgLndvcmRzW2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgY29sb3I6ICMxZjFmMWY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubG9naW4gLmxvZ2luQ29udGVudCAudGl0bGVOYW1lW2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgcGFkZGluZzogMThweCAwIDEzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzI1Mzk2RjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubG9naW4gLmxvZ2luQ29udGVudCAuaW5wdXQtZm9ybWF0dGVyW2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQ6ICNGNEY2RkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRjRGNkZGO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtaW5kZW50OiAzMHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZThhNGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjViZmQ3MzZlXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlOGE0ZmE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlOGE0ZmE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2ljb24xMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby1oZWFkZXIucG5nXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZlOGE0ZmE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlOGE0ZmE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZmU4YTRmYThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwTW9ja1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmZThhNGZhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZThhNGZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZThhNGZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZThhNGZhOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZThhNGZhOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZThhNGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI5ZDE3Zjc5Ni12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmU4YTRmYTgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9