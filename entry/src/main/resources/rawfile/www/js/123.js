(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/login */ "./src/api/login.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "systemSet",
  data: function data() {
    return {
      info: {
        username: '',
        tel: '',
        divisionName: '',
        deptName: '',
        postName: ''
      },
      fieldNames: {
        text: 'deptName',
        value: 'deptName',
        children: 'children'
      },
      editInfo: {},
      cascaderValue: '',
      options: [],
      show: false,
      showEdit: false,
      showArea: false,
      columnsArea: [],
      areaIdChecked: '',
      roleList: [],
      roleChecked: []
    };
  },
  mounted: function mounted() {
    this.getUserInfo();
    this.getXzqh();
    this.queryRoles();
  },
  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      Object(_api_login__WEBPACK_IMPORTED_MODULE_2__["deptTree"])(localStorage.getItem("token")).then(function (res) {
        _this.options = res.data;
      });
      Object(_api_login__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(localStorage.getItem("token")).then(function (res) {
        _this.info = res.data.userVO;
        _this.editInfo = res.data.userVO;
        _this.roleChecked = res.data.userVO.roles.map(function (item) {
          return item.roleId;
        });
      });
    },
    onChangeDept: function onChangeDept(_ref) {
      var value = _ref.value,
          selectedOptions = _ref.selectedOptions;
      this.info.deptId = selectedOptions[selectedOptions.length - 1].deptId;
      this.info.deptName = selectedOptions[selectedOptions.length - 1].deptName;
    },
    //查询所有行政区划
    getXzqh: function getXzqh() {
      var _this2 = this;

      var info = {
        code: "",
        name: ""
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["xzqhList"])(info).then(function (res) {
        _this2.columnsArea = res.data;
      });
    },
    //查询所有角色
    queryRoles: function queryRoles() {
      var _this3 = this;

      Object(_api_login__WEBPACK_IMPORTED_MODULE_2__["getRoles"])().then(function (res) {
        _this3.roleList = res.data;
      });
    },
    onFinish: function onFinish() {
      this.show = false;
    },
    onConfirmArea: function onConfirmArea(value) {
      this.areaIdChecked = value.dm;
      this.editInfo.divisionName = value.mc;
      this.showArea = false;
    },
    onCancelArea: function onCancelArea() {
      this.showArea = false;
    },
    editUserInfo: function editUserInfo(formName) {
      var _this4 = this;

      this.$refs[formName].validate().then(function () {
        var info = {
          deptId: _this4.editInfo.deptId,
          divisionCode: _this4.areaIdChecked || _this4.editInfo.divisionCode,
          password: _this4.editInfo.password,
          postName: _this4.editInfo.postName,
          roles: _this4.roleChecked,
          tel: _this4.editInfo.tel,
          userId: _this4.editInfo.userId,
          username: _this4.editInfo.username
        };
        console.log(info); // return

        Object(_api_login__WEBPACK_IMPORTED_MODULE_2__["userModify"])(info).then(function (res) {
          if (res.code == 200) {
            Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('修改成功');
          }

          _this4.showEdit = false;
        });
      });
    },
    onEdit: function onEdit() {
      this.showEdit = !this.showEdit;
    },
    back: function back() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "calc(100vh)", "overflow-y": "auto" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "个人信息", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "system" }, [
        _c(
          "div",
          { staticClass: "set_content" },
          [
            !_vm.showEdit
              ? _c("ul", [
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("姓名")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.username)),
                      ]),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("账号(手机号)")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.tel)),
                      ]),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("所属角色")]),
                      _c(
                        "span",
                        {
                          staticClass: "set_text",
                          staticStyle: { width: "60%", "line-height": "20px" },
                        },
                        _vm._l(_vm.info.roles, function (item) {
                          return _c(
                            "van-tag",
                            {
                              staticStyle: { "margin-left": "5px" },
                              attrs: { type: "primary" },
                            },
                            [_vm._v(_vm._s(item.roleName))]
                          )
                        }),
                        1
                      ),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("所属区县")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.divisionName)),
                      ]),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("所属部门")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.deptName)),
                      ]),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("职位")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.postName)),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
            !_vm.showEdit
              ? _c(
                  "van-button",
                  {
                    staticClass: "savepwdbtn",
                    attrs: { block: "", type: "info" },
                    on: { click: _vm.onEdit },
                  },
                  [_vm._v(" 修 改 ")]
                )
              : _vm._e(),
            _vm.showEdit
              ? [
                  _c(
                    "van-form",
                    {
                      ref: "info",
                      staticStyle: { margin: "0 -5px" },
                      attrs: { "validate-first": "" },
                    },
                    [
                      _c("van-field", {
                        attrs: {
                          clearable: "",
                          required: "",
                          label: "姓名",
                          rules: [{ required: true, message: "请填写姓名" }],
                        },
                        model: {
                          value: _vm.editInfo.username,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "username", $$v)
                          },
                          expression: "editInfo.username",
                        },
                      }),
                      _c("van-field", {
                        attrs: {
                          clearable: "",
                          disabled: "",
                          required: "",
                          label: "账号(手机号)",
                        },
                        model: {
                          value: _vm.editInfo.tel,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "tel", $$v)
                          },
                          expression: "editInfo.tel",
                        },
                      }),
                      _c("van-field", {
                        attrs: {
                          clearable: "",
                          label: "所属区域",
                          "is-link": "",
                        },
                        on: {
                          click: function ($event) {
                            _vm.showArea = true
                          },
                        },
                        model: {
                          value: _vm.editInfo.divisionName,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "divisionName", $$v)
                          },
                          expression: "editInfo.divisionName",
                        },
                      }),
                      _c("van-field", {
                        attrs: { name: "checkboxGroup", label: "所属角色" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "input",
                              fn: function () {
                                return [
                                  _c(
                                    "van-checkbox-group",
                                    {
                                      attrs: { direction: "horizontal" },
                                      model: {
                                        value: _vm.roleChecked,
                                        callback: function ($$v) {
                                          _vm.roleChecked = $$v
                                        },
                                        expression: "roleChecked",
                                      },
                                    },
                                    _vm._l(_vm.roleList, function (item) {
                                      return _c(
                                        "van-checkbox",
                                        {
                                          attrs: {
                                            name: item.roleId,
                                            shape: "square",
                                            "icon-size": "16px",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            " " + _vm._s(item.roleName) + " "
                                          ),
                                        ]
                                      )
                                    }),
                                    1
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          false,
                          3331027415
                        ),
                      }),
                      _c("van-field", {
                        attrs: {
                          clearable: "",
                          "is-link": "",
                          label: "部门",
                          rules: [{ required: false, message: "请填写部门" }],
                        },
                        on: {
                          click: function ($event) {
                            _vm.show = true
                          },
                        },
                        model: {
                          value: _vm.editInfo.deptName,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "deptName", $$v)
                          },
                          expression: "editInfo.deptName",
                        },
                      }),
                      _c("van-field", {
                        attrs: { clearable: "", label: "职位" },
                        model: {
                          value: _vm.editInfo.postName,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "postName", $$v)
                          },
                          expression: "editInfo.postName",
                        },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "van-button",
                    {
                      staticClass: "savepwdbtn",
                      attrs: { block: "", type: "info" },
                      on: {
                        click: function ($event) {
                          return _vm.editUserInfo("info")
                        },
                      },
                    },
                    [_vm._v(" 提 交 ")]
                  ),
                  _c(
                    "van-button",
                    {
                      staticClass: "savepwdbtn",
                      staticStyle: { "margin-top": "16px" },
                      attrs: { block: "", type: "default" },
                      on: { click: _vm.onEdit },
                    },
                    [_vm._v(" 取 消 ")]
                  ),
                ]
              : _vm._e(),
          ],
          2
        ),
      ]),
      _c(
        "van-popup",
        {
          attrs: { round: "", position: "bottom" },
          model: {
            value: _vm.show,
            callback: function ($$v) {
              _vm.show = $$v
            },
            expression: "show",
          },
        },
        [
          _c("van-cascader", {
            attrs: {
              title: "请选择所在部门",
              options: _vm.options,
              "field-names": _vm.fieldNames,
              "active-color": "#1989fa",
            },
            on: {
              close: function ($event) {
                _vm.show = false
              },
              change: _vm.onChangeDept,
              finish: _vm.onFinish,
            },
            model: {
              value: _vm.cascaderValue,
              callback: function ($$v) {
                _vm.cascaderValue = $$v
              },
              expression: "cascaderValue",
            },
          }),
        ],
        1
      ),
      _c(
        "van-popup",
        {
          attrs: { round: "", position: "bottom" },
          model: {
            value: _vm.showArea,
            callback: function ($$v) {
              _vm.showArea = $$v
            },
            expression: "showArea",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              title: "所属区域",
              "show-toolbar": "",
              columns: _vm.columnsArea,
              "value-key": "mc",
            },
            on: { confirm: _vm.onConfirmArea, cancel: _vm.onCancelArea },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".system {\n  width: 100vw;\n  height: calc(100vh - 64px);\n  box-sizing: border-box;\n  background: #fff;\n}\n.system .set_content {\n  margin: 10px;\n  padding: 5px 20px;\n}\n.system .set_content ul li {\n  list-style: none;\n  line-height: 50px;\n  border-bottom: 1px solid #eee;\n}\n.system .set_content ul li .setItems {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n}\n.system .set_content ul li .setItems .set_text {\n  color: #646566;\n}\n.system .set_content ul li:last-child {\n  border-bottom: 0;\n}\n.system .van-cell {\n  line-height: 30px;\n}\n.system .van-cell::after {\n  border-bottom: 1px solid #dbdbdb;\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  right: 16px;\n  bottom: 0;\n  left: 16px;\n}\n.system .savepwdbtn {\n  margin-top: 50px;\n  height: 50px;\n}\n.system .logout .fs {\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #F4F6FF;\n  height: 50px;\n  margin-top: 50px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6de0f10e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/mine/systemSet/index.vue":
/*!********************************************!*\
  !*** ./src/views/mine/systemSet/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=859ef858& */ "./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/mine/systemSet/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/mine/systemSet/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/mine/systemSet/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/mine/systemSet/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&":
/*!***************************************************************************!*\
  !*** ./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=859ef858& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlPzMxMDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZT8yNGZiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWU/NjM5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWU/NDEyZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlPzExZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZT85YTg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0R0E7QUFDQTtBQUdBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxlQUZBO0FBR0Esd0JBSEE7QUFJQSxvQkFKQTtBQUtBO0FBTEEsT0FEQTtBQVFBO0FBQ0Esd0JBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEEsT0FSQTtBQWFBLGtCQWJBO0FBY0EsdUJBZEE7QUFlQSxpQkFmQTtBQWdCQSxpQkFoQkE7QUFpQkEscUJBakJBO0FBa0JBLHFCQWxCQTtBQW1CQSxxQkFu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QUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogY2FsYygxMDB2aCk7b3ZlcmZsb3cteTogYXV0bztcIj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIuS4quS6uuS/oeaBr1wiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJzeXN0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldF9jb250ZW50XCI+XHJcbiAgICAgICAgPHVsIHYtaWY9XCIhc2hvd0VkaXRcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldEl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+5aeT5ZCNPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0X3RleHRcIj57e2luZm8udXNlcm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0SXRlbXNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7otKblj7co5omL5py65Y+3KTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCI+e3tpbmZvLnRlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXRJdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuaJgOWxnuinkuiJsjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCIgc3R5bGU9XCJ3aWR0aDogNjAlO2xpbmUtaGVpZ2h0OiAyMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXRhZyB0eXBlPVwicHJpbWFyeVwiIHYtZm9yPVwiaXRlbSBpbiBpbmZvLnJvbGVzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4XCI+e3tpdGVtLnJvbGVOYW1lfX08L3Zhbi10YWc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXRJdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuaJgOWxnuWMuuWOvzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCI+e3tpbmZvLmRpdmlzaW9uTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXRJdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuaJgOWxnumDqOmXqDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCI+e3tpbmZvLmRlcHROYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldEl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+6IGM5L2NPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0X3RleHRcIj57e2luZm8ucG9zdE5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHZhbi1idXR0b24gdi1pZj1cIiFzaG93RWRpdFwiIGJsb2NrIGNsYXNzPVwic2F2ZXB3ZGJ0blwiIHR5cGU9XCJpbmZvXCIgQGNsaWNrPVwib25FZGl0XCI+XHJcbiAgICAgICAgICDkv64g5pS5XHJcbiAgICAgICAgPC92YW4tYnV0dG9uPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInNob3dFZGl0XCI+XHJcbiAgICAgICAgICA8dmFuLWZvcm0gcmVmPVwiaW5mb1wiIHN0eWxlPVwibWFyZ2luOiAwIC01cHg7XCIgdmFsaWRhdGUtZmlyc3Q+XHJcbiAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImVkaXRJbmZvLnVzZXJuYW1lXCIgY2xlYXJhYmxlIHJlcXVpcmVkIGxhYmVsPVwi5aeT5ZCNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbe3JlcXVpcmVkOnRydWUsbWVzc2FnZTon6K+35aGr5YaZ5aeT5ZCNJ31dXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWZpZWxkIHYtbW9kZWw9XCJlZGl0SW5mby50ZWxcIiBjbGVhcmFibGUgZGlzYWJsZWQgcmVxdWlyZWQgbGFiZWw9XCLotKblj7co5omL5py65Y+3KVwiLz5cclxuICAgICAgICAgICAgPHZhbi1maWVsZCB2LW1vZGVsPVwiZWRpdEluZm8uZGl2aXNpb25OYW1lXCIgY2xlYXJhYmxlIGxhYmVsPVwi5omA5bGe5Yy65Z+fXCIgaXMtbGluayBAY2xpY2s9XCJzaG93QXJlYT10cnVlXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWZpZWxkIG5hbWU9XCJjaGVja2JveEdyb3VwXCIgbGFiZWw9XCLmiYDlsZ7op5LoibJcIj5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveC1ncm91cCB2LW1vZGVsPVwicm9sZUNoZWNrZWRcIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx2YW4tY2hlY2tib3ggdi1mb3I9XCJpdGVtIGluIHJvbGVMaXN0XCIgOm5hbWU9XCJpdGVtLnJvbGVJZFwiIHNoYXBlPVwic3F1YXJlXCIgaWNvbi1zaXplPVwiMTZweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5yb2xlTmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC92YW4tY2hlY2tib3gtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC92YW4tZmllbGQ+XHJcbiAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImVkaXRJbmZvLmRlcHROYW1lXCIgY2xlYXJhYmxlIGlzLWxpbmsgbGFiZWw9XCLpg6jpl6hcIiBAY2xpY2s9XCJzaG93ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW3tyZXF1aXJlZDpmYWxzZSxtZXNzYWdlOifor7floavlhpnpg6jpl6gnfV1cIi8+XHJcbiAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImVkaXRJbmZvLnBvc3ROYW1lXCIgY2xlYXJhYmxlIGxhYmVsPVwi6IGM5L2NXCIvPlxyXG4gICAgICAgICAgPC92YW4tZm9ybT5cclxuICAgICAgICAgIDx2YW4tYnV0dG9uIGJsb2NrIGNsYXNzPVwic2F2ZXB3ZGJ0blwiIHR5cGU9XCJpbmZvXCIgQGNsaWNrPVwiZWRpdFVzZXJJbmZvKCdpbmZvJylcIj5cclxuICAgICAgICAgICAg5o+QIOS6pFxyXG4gICAgICAgICAgPC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgPHZhbi1idXR0b24gYmxvY2sgY2xhc3M9XCJzYXZlcHdkYnRuXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNnB4O1wiIHR5cGU9XCJkZWZhdWx0XCIgQGNsaWNrPVwib25FZGl0XCI+XHJcbiAgICAgICAgICAgIOWPliDmtohcclxuICAgICAgICAgIDwvdmFuLWJ1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0t6YOo6ZeoLS0+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93XCIgcm91bmQgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgPHZhbi1jYXNjYWRlclxyXG4gICAgICAgICAgdi1tb2RlbD1cImNhc2NhZGVyVmFsdWVcIlxyXG4gICAgICAgICAgdGl0bGU9XCLor7fpgInmi6nmiYDlnKjpg6jpl6hcIlxyXG4gICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcclxuICAgICAgICAgIDpmaWVsZC1uYW1lcz1cImZpZWxkTmFtZXNcIlxyXG4gICAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzE5ODlmYVwiXHJcbiAgICAgICAgICBAY2xvc2U9XCJzaG93ID0gZmFsc2VcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlRGVwdFwiXHJcbiAgICAgICAgICBAZmluaXNoPVwib25GaW5pc2hcIlxyXG4gICAgICAvPlxyXG4gICAgPC92YW4tcG9wdXA+XHJcblxyXG4gICAgPCEtLeaJgOWxnuWMuuWfny0tPlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd0FyZWFcIiByb3VuZCBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLXBpY2tlclxyXG4gICAgICAgICAgdGl0bGU9XCLmiYDlsZ7ljLrln59cIlxyXG4gICAgICAgICAgc2hvdy10b29sYmFyXHJcbiAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNBcmVhXCJcclxuICAgICAgICAgIHZhbHVlLWtleT1cIm1jXCJcclxuICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtQXJlYVwiXHJcbiAgICAgICAgICBAY2FuY2VsPVwib25DYW5jZWxBcmVhXCJcclxuICAgICAgLz5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3h6cWhMaXN0fSBmcm9tICdAL2FwaS9wb2xsdXRpb25fc291cmNlJztcclxuICBpbXBvcnQge1xyXG4gICAgZ2V0SW5mbywgdXNlck1vZGlmeSwgZGVwdFRyZWUsIGdldFJvbGVzXHJcbiAgfSBmcm9tIFwiQC9hcGkvbG9naW5cIjtcclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInN5c3RlbVNldFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICB0ZWw6ICcnLFxyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiAnJyxcclxuICAgICAgICAgIGRlcHROYW1lOiAnJyxcclxuICAgICAgICAgIHBvc3ROYW1lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmllbGROYW1lczoge1xyXG4gICAgICAgICAgdGV4dDogJ2RlcHROYW1lJyxcclxuICAgICAgICAgIHZhbHVlOiAnZGVwdE5hbWUnLFxyXG4gICAgICAgICAgY2hpbGRyZW46ICdjaGlsZHJlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlZGl0SW5mbzoge30sXHJcbiAgICAgICAgY2FzY2FkZXJWYWx1ZTogJycsXHJcbiAgICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2hvd0VkaXQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBcmVhOiBmYWxzZSxcclxuICAgICAgICBjb2x1bW5zQXJlYTogW10sXHJcbiAgICAgICAgYXJlYUlkQ2hlY2tlZDogJycsXHJcbiAgICAgICAgcm9sZUxpc3Q6IFtdLFxyXG4gICAgICAgIHJvbGVDaGVja2VkOiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICB0aGlzLmdldFh6cWgoKTtcclxuICAgICAgdGhpcy5xdWVyeVJvbGVzKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICBkZXB0VHJlZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSByZXMuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2V0SW5mbyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmluZm8gPSByZXMuZGF0YS51c2VyVk87XHJcbiAgICAgICAgICB0aGlzLmVkaXRJbmZvID0gcmVzLmRhdGEudXNlclZPO1xyXG4gICAgICAgICAgdGhpcy5yb2xlQ2hlY2tlZCA9IHJlcy5kYXRhLnVzZXJWTy5yb2xlcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnJvbGVJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNoYW5nZURlcHQoe3ZhbHVlLCBzZWxlY3RlZE9wdGlvbnN9KSB7XHJcbiAgICAgICAgdGhpcy5pbmZvLmRlcHRJZCA9IHNlbGVjdGVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbnMubGVuZ3RoLTFdLmRlcHRJZDtcclxuICAgICAgICB0aGlzLmluZm8uZGVwdE5hbWUgPSBzZWxlY3RlZE9wdGlvbnNbc2VsZWN0ZWRPcHRpb25zLmxlbmd0aC0xXS5kZXB0TmFtZTtcclxuICAgICAgfSxcclxuICAgICAgLy/mn6Xor6LmiYDmnInooYzmlL/ljLrliJJcclxuICAgICAgZ2V0WHpxaCgpIHtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHh6cWhMaXN0KGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuY29sdW1uc0FyZWEgPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouaJgOacieinkuiJslxyXG4gICAgICBxdWVyeVJvbGVzKCkge1xyXG4gICAgICAgIGdldFJvbGVzKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb2xlTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1BcmVhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhSWRDaGVja2VkID0gdmFsdWUuZG07XHJcbiAgICAgICAgdGhpcy5lZGl0SW5mby5kaXZpc2lvbk5hbWUgPSB2YWx1ZS5tYztcclxuICAgICAgICB0aGlzLnNob3dBcmVhID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2FuY2VsQXJlYSgpIHtcclxuICAgICAgICB0aGlzLnNob3dBcmVhID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRVc2VySW5mbyhmb3JtTmFtZSkge1xyXG4gICAgICAgIHRoaXMuJHJlZnNbZm9ybU5hbWVdLnZhbGlkYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgZGVwdElkOiB0aGlzLmVkaXRJbmZvLmRlcHRJZCxcclxuICAgICAgICAgICAgZGl2aXNpb25Db2RlOiB0aGlzLmFyZWFJZENoZWNrZWR8fHRoaXMuZWRpdEluZm8uZGl2aXNpb25Db2RlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5lZGl0SW5mby5wYXNzd29yZCxcclxuICAgICAgICAgICAgcG9zdE5hbWU6IHRoaXMuZWRpdEluZm8ucG9zdE5hbWUsXHJcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLnJvbGVDaGVja2VkLFxyXG4gICAgICAgICAgICB0ZWw6IHRoaXMuZWRpdEluZm8udGVsLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuZWRpdEluZm8udXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lZGl0SW5mby51c2VybmFtZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICAgIHVzZXJNb2RpZnkoaW5mbykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZT09MjAwKXtcclxuICAgICAgICAgICAgICBUb2FzdCgn5L+u5pS55oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93RWRpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkVkaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9ICF0aGlzLnNob3dFZGl0O1xyXG4gICAgICB9LFxyXG4gICAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5zeXN0ZW0ge1xyXG4gICAgLy8gcGFkZGluZzogODBweCAzMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIC5zZXRfY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAgICAgLnNldEl0ZW1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAuc2V0X3RleHQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjQ2NTY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFuLWNlbGwge1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudmFuLWNlbGw6OmFmdGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmVwd2RidG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ291dCB7XHJcbiAgICAgIC5mcyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkZGO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCJjYWxjKDEwMHZoKVwiLCBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLkuKrkurrkv6Hmga9cIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3lzdGVtXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0X2NvbnRlbnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICFfdm0uc2hvd0VkaXRcbiAgICAgICAgICAgICAgPyBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aeT5ZCNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnVzZXJuYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXRJdGVtc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui0puWPtyjmiYvmnLrlj7cpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnRlbCkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0SXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYDlsZ7op5LoibJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXRfdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiwgXCJsaW5lLWhlaWdodFwiOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW5mby5yb2xlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucm9sZU5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omA5bGe5Yy65Y6/XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmRpdmlzaW9uTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0SXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYDlsZ7pg6jpl6hcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZXRfdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZGVwdE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGM5L2NXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnBvc3ROYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICFfdm0uc2hvd0VkaXRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlcHdkYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJsb2NrOiBcIlwiLCB0eXBlOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRWRpdCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg5L+uIOaUuSBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLnNob3dFZGl0XG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmFuLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgLTVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJ2YWxpZGF0ZS1maXJzdFwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlp5PlkI1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuivt+Whq+WGmeWnk+WQjVwiIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdEluZm8udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcInVzZXJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby51c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6LSm5Y+3KOaJi+acuuWPtylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRJbmZvLnRlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdEluZm8sIFwidGVsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby50ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmiYDlsZ7ljLrln59cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FyZWEgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0SW5mby5kaXZpc2lvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcImRpdmlzaW9uTmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdEluZm8uZGl2aXNpb25OYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2hlY2tib3hHcm91cFwiLCBsYWJlbDogXCLmiYDlsZ7op5LoibJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLWNoZWNrYm94LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJvbGVDaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9sZUNoZWNrZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm9sZUNoZWNrZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJvbGVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnJvbGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IFwic3F1YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1zaXplXCI6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoaXRlbS5yb2xlTmFtZSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMzMzMTAyNzQxNVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbGlua1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLpg6jpl6hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiBmYWxzZSwgbWVzc2FnZTogXCLor7floavlhpnpg6jpl6hcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdEluZm8uZGVwdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcImRlcHROYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby5kZXB0TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjbGVhcmFibGU6IFwiXCIsIGxhYmVsOiBcIuiBjOS9jVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRJbmZvLnBvc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lZGl0SW5mbywgXCJwb3N0TmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdEluZm8ucG9zdE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlcHdkYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYmxvY2s6IFwiXCIsIHR5cGU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdFVzZXJJbmZvKFwiaW5mb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOaPkCDkuqQgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmVwd2RidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxNnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBibG9jazogXCJcIiwgdHlwZTogXCJkZWZhdWx0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRWRpdCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOWPliDmtoggXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcm91bmQ6IFwiXCIsIHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLWNhc2NhZGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIuivt+mAieaLqeaJgOWcqOmDqOmXqFwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgXCJmaWVsZC1uYW1lc1wiOiBfdm0uZmllbGROYW1lcyxcbiAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjMTk4OWZhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZTogX3ZtLm9uQ2hhbmdlRGVwdCxcbiAgICAgICAgICAgICAgZmluaXNoOiBfdm0ub25GaW5pc2gsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXNjYWRlclZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5jYXNjYWRlclZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FzY2FkZXJWYWx1ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcm91bmQ6IFwiXCIsIHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0FyZWEsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvd0FyZWEgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dBcmVhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLXBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLmiYDlsZ7ljLrln59cIixcbiAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgY29sdW1uczogX3ZtLmNvbHVtbnNBcmVhLFxuICAgICAgICAgICAgICBcInZhbHVlLWtleVwiOiBcIm1jXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgY29uZmlybTogX3ZtLm9uQ29uZmlybUFyZWEsIGNhbmNlbDogX3ZtLm9uQ2FuY2VsQXJlYSB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3lzdGVtIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5zeXN0ZW0gLnNldF9jb250ZW50IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG4uc3lzdGVtIC5zZXRfY29udGVudCB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG59XFxuLnN5c3RlbSAuc2V0X2NvbnRlbnQgdWwgbGkgLnNldEl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc3lzdGVtIC5zZXRfY29udGVudCB1bCBsaSAuc2V0SXRlbXMgLnNldF90ZXh0IHtcXG4gIGNvbG9yOiAjNjQ2NTY2O1xcbn1cXG4uc3lzdGVtIC5zZXRfY29udGVudCB1bCBsaTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5zeXN0ZW0gLnZhbi1jZWxsIHtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4uc3lzdGVtIC52YW4tY2VsbDo6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICByaWdodDogMTZweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDE2cHg7XFxufVxcbi5zeXN0ZW0gLnNhdmVwd2RidG4ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnN5c3RlbSAubG9nb3V0IC5mcyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RkY7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmRlMGYxMGVcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU5ZWY4NTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODU5ZWY4NTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODU5ZWY4NTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODU5ZWY4NTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTllZjg1OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NTllZjg1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1OWVmODU4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==