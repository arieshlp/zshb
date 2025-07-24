(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        mc: '',
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
      roleChecked: [],
      token: localStorage.getItem('token')
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

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var responseTree, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/getDepartment', {
                  token: _this.token
                });

              case 2:
                responseTree = _context.sent;
                _this.options = responseTree.data.data;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/getUserObject', {
                  token: _this.token
                });

              case 6:
                response = _context.sent;
                _this.info = response.data.data.userVO;
                _this.editInfo = response.data.data.userVO;
                _this.roleChecked = response.data.data.userVO.roles.map(function (item) {
                  return item.roleId;
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
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

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/getAreaList', {});

              case 2:
                response = _context2.sent;
                _this2.columnsArea = response.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //查询所有角色
    queryRoles: function queryRoles() {
      var _this3 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/getRole', {});

              case 2:
                response = _context3.sent;
                _this3.roleList = response.data.data;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
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

      this.$refs[formName].validate().then( /*#__PURE__*/Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var info, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                info = {
                  token: _this4.token,
                  deptId: _this4.editInfo.deptId,
                  deptName: _this4.editInfo.deptName,
                  divisionCode: _this4.areaIdChecked || _this4.editInfo.divisionCode,
                  divisionName: _this4.editInfo.divisionName,
                  postName: _this4.editInfo.postName,
                  roles: _this4.roleChecked,
                  userId: _this4.editInfo.userId,
                  username: _this4.editInfo.username,
                  mc: _this4.editInfo.mc
                };
                console.log(info);
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/updateUser', info);

              case 4:
                response = _context4.sent;

                if (response.data.code == 200) {
                  Object(vant__WEBPACK_IMPORTED_MODULE_4__["Toast"])('修改成功');
                }

                _this4.showEdit = false;

                _this4.getUserInfo();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858& ***!
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
                        _vm._v(_vm._s(_vm.info.mc)),
                      ]),
                    ]),
                  ]),
                  _c("li", [
                    _c("div", { staticClass: "setItems" }, [
                      _c("span", [_vm._v("账号")]),
                      _c("span", { staticClass: "set_text" }, [
                        _vm._v(_vm._s(_vm.info.username)),
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
                          value: _vm.editInfo.mc,
                          callback: function ($$v) {
                            _vm.$set(_vm.editInfo, "mc", $$v)
                          },
                          expression: "editInfo.mc",
                        },
                      }),
                      _c("van-field", {
                        attrs: { disabled: "", label: "账号" },
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
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=859ef858& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/systemSet/index.vue?vue&type=template&id=859ef858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_859ef858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlPzQzYzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZT8yNGZiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWU/NjM5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWU/NDEyZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9zeXN0ZW1TZXQvaW5kZXgudnVlPzExZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21pbmUvc3lzdGVtU2V0L2luZGV4LnZ1ZT85YTg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRHQTtBQUNBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxjQUZBO0FBR0Esd0JBSEE7QUFJQSxvQkFKQTtBQUtBO0FBTEEsT0FEQTtBQVFBO0FBQ0Esd0JBREE7QUFFQSx5QkFGQTtBQUdBO0FBSEEsT0FSQTtBQWFBLGtCQWJBO0FBY0EsdUJBZEE7QUFlQSxpQkFmQTtBQWdCQSxpQkFoQkE7QUFpQkEscUJBakJBO0FBa0JBLHFCQWxCQTtBQW1CQSxxQkFuQkE7QUFvQkEsdUJBcEJBO0FBcUJBLGtCQXJCQTtBQXNCQSxxQkF0QkE7QUF1QkE7QUF2QkE7QUF5QkEsR0E1QkE7QUE2QkEsU0E3QkEscUJBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQ0E7QUFrQ0E7QUFDQSxlQURBLHlCQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDQTtBQUNBO0FBREEsa0JBREE7O0FBQUE7QUFDQSw0QkFEQTtBQUlBO0FBSkE7QUFBQSx1QkFLQTtBQUNBO0FBREEsa0JBTEE7O0FBQUE7QUFLQSx3QkFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBRkE7O0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQSxLQWRBO0FBZUEsZ0JBZkEsOEJBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBO0FBQ0EsV0FwQkEscUJBb0JBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDQSwwRUFEQTs7QUFBQTtBQUNBLHdCQURBO0FBRUE7O0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxLQXZCQTtBQXdCQTtBQUNBLGNBekJBLHdCQXlCQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0Esc0VBREE7O0FBQUE7QUFDQSx3QkFEQTtBQUVBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsS0E1QkE7QUE2QkEsWUE3QkEsc0JBNkJBO0FBQ0E7QUFDQSxLQS9CQTtBQWdDQSxpQkFoQ0EseUJBZ0NBLEtBaENBLEVBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsZ0JBckNBLDBCQXFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0EsZ0JBeENBLHdCQXdDQSxRQXhDQSxFQXdDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSxxQ0FEQTtBQUVBLGdEQUZBO0FBR0Esb0RBSEE7QUFJQSxvRkFKQTtBQUtBLDREQUxBO0FBTUEsb0RBTkE7QUFPQSwyQ0FQQTtBQVFBLGdEQVJBO0FBU0Esb0RBVEE7QUFVQTtBQVZBLGlCQURBO0FBYUE7QUFiQTtBQUFBLHVCQWNBLDJFQWRBOztBQUFBO0FBY0Esd0JBZEE7O0FBZUE7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQSxLQTlEQTtBQStEQSxVQS9EQSxvQkErREE7QUFDQTtBQUNBLEtBakVBO0FBa0VBLFFBbEVBLGtCQWtFQTtBQUNBO0FBQ0E7QUFwRUE7QUFsQ0EsRzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw4Q0FBOEMsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNDQUFzQztBQUM5RSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdUJBQXVCO0FBQ25FLHNDQUFzQyxrQkFBa0I7QUFDeEQsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQseUJBQXlCLG9CQUFvQjtBQUM3QyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RCw4QkFBOEIsdUJBQXVCO0FBQ3JELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkI7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCO0FBQ0EsZ0NBQWdDLHVDQUF1QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0M7QUFDdkUseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCO0FBQ0EsZ0NBQWdDLDZCQUE2QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0QsOEJBQThCLDZCQUE2QjtBQUMzRCwyQkFBMkIsb0JBQW9CO0FBQy9DLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQix1REFBdUQ7QUFDeEUsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1VWE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDakQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLFlBQVksaUJBQWlCLCtCQUErQiwyQkFBMkIscUJBQXFCLEdBQUcsd0JBQXdCLGlCQUFpQixzQkFBc0IsR0FBRyw4QkFBOEIscUJBQXFCLHNCQUFzQixrQ0FBa0MsR0FBRyx3Q0FBd0Msa0JBQWtCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLEdBQUcsa0RBQWtELG1CQUFtQixHQUFHLHlDQUF5QyxxQkFBcUIsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcsNEJBQTRCLHFDQUFxQyx1QkFBdUIsMkJBQTJCLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGNBQWMsZUFBZSxHQUFHLHVCQUF1QixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLDRCQUE0QixnQkFBZ0Isd0JBQXdCLDhCQUE4QixpQkFBaUIscUJBQXFCLEdBQUc7QUFDMWlDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGl3QkFBaWM7QUFDdmQ7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMO0FBQ2M7OztBQUdsRTtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLkuKrkurrkv6Hmga9cIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIi8+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3lzdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXRfY29udGVudFwiPlxyXG4gICAgICAgIDx1bCB2LWlmPVwiIXNob3dFZGl0XCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXRJdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuWnk+WQjTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCI+e3tpbmZvLm1jfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldEl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+6LSm5Y+3PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0X3RleHRcIj57e2luZm8udXNlcm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0SXRlbXNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7miYDlsZ7op5LoibI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXRfdGV4dFwiIHN0eWxlPVwid2lkdGg6IDYwJTtsaW5lLWhlaWdodDogMjBweFwiPlxyXG4gICAgICAgICAgICAgICAgPHZhbi10YWcgdHlwZT1cInByaW1hcnlcIiB2LWZvcj1cIml0ZW0gaW4gaW5mby5yb2xlc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDVweFwiPnt7aXRlbS5yb2xlTmFtZX19PC92YW4tdGFnPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0SXRlbXNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7miYDlsZ7ljLrljr88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXRfdGV4dFwiPnt7aW5mby5kaXZpc2lvbk5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0SXRlbXNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7miYDlsZ7pg6jpl6g8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXRfdGV4dFwiPnt7aW5mby5kZXB0TmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXRJdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuiBjOS9jTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNldF90ZXh0XCI+e3tpbmZvLnBvc3ROYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx2YW4tYnV0dG9uIHYtaWY9XCIhc2hvd0VkaXRcIiBibG9jayBjbGFzcz1cInNhdmVwd2RidG5cIiB0eXBlPVwiaW5mb1wiIEBjbGljaz1cIm9uRWRpdFwiPlxyXG4gICAgICAgICAg5L+uIOaUuVxyXG4gICAgICAgIDwvdmFuLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzaG93RWRpdFwiPlxyXG4gICAgICAgICAgPHZhbi1mb3JtIHJlZj1cImluZm9cIiBzdHlsZT1cIm1hcmdpbjogMCAtNXB4O1wiIHZhbGlkYXRlLWZpcnN0PlxyXG4gICAgICAgICAgICA8dmFuLWZpZWxkIHYtbW9kZWw9XCJlZGl0SW5mby5tY1wiIGNsZWFyYWJsZSByZXF1aXJlZCBsYWJlbD1cIuWnk+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW3tyZXF1aXJlZDp0cnVlLG1lc3NhZ2U6J+ivt+Whq+WGmeWnk+WQjSd9XVwiLz5cclxuICAgICAgICAgICAgPHZhbi1maWVsZCB2LW1vZGVsPVwiZWRpdEluZm8udXNlcm5hbWVcIiBkaXNhYmxlZCBsYWJlbD1cIui0puWPt1wiLz5cclxuICAgICAgICAgICAgPHZhbi1maWVsZCB2LW1vZGVsPVwiZWRpdEluZm8uZGl2aXNpb25OYW1lXCIgY2xlYXJhYmxlIGxhYmVsPVwi5omA5bGe5Yy65Z+fXCIgaXMtbGluayBAY2xpY2s9XCJzaG93QXJlYT10cnVlXCIvPlxyXG4gICAgICAgICAgICA8dmFuLWZpZWxkIG5hbWU9XCJjaGVja2JveEdyb3VwXCIgbGFiZWw9XCLmiYDlsZ7op5LoibJcIj5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveC1ncm91cCB2LW1vZGVsPVwicm9sZUNoZWNrZWRcIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx2YW4tY2hlY2tib3ggdi1mb3I9XCJpdGVtIGluIHJvbGVMaXN0XCIgOm5hbWU9XCJpdGVtLnJvbGVJZFwiIHNoYXBlPVwic3F1YXJlXCIgaWNvbi1zaXplPVwiMTZweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5yb2xlTmFtZX19XHJcbiAgICAgICAgICAgICAgICAgIDwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC92YW4tY2hlY2tib3gtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC92YW4tZmllbGQ+XHJcbiAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImVkaXRJbmZvLmRlcHROYW1lXCIgY2xlYXJhYmxlIGlzLWxpbmsgbGFiZWw9XCLpg6jpl6hcIiBAY2xpY2s9XCJzaG93ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW3tyZXF1aXJlZDpmYWxzZSxtZXNzYWdlOifor7floavlhpnpg6jpl6gnfV1cIi8+XHJcbiAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImVkaXRJbmZvLnBvc3ROYW1lXCIgY2xlYXJhYmxlIGxhYmVsPVwi6IGM5L2NXCIvPlxyXG4gICAgICAgICAgPC92YW4tZm9ybT5cclxuICAgICAgICAgIDx2YW4tYnV0dG9uIGJsb2NrIGNsYXNzPVwic2F2ZXB3ZGJ0blwiIHR5cGU9XCJpbmZvXCIgQGNsaWNrPVwiZWRpdFVzZXJJbmZvKCdpbmZvJylcIj5cclxuICAgICAgICAgICAg5o+QIOS6pFxyXG4gICAgICAgICAgPC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgPHZhbi1idXR0b24gYmxvY2sgY2xhc3M9XCJzYXZlcHdkYnRuXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNnB4O1wiIHR5cGU9XCJkZWZhdWx0XCIgQGNsaWNrPVwib25FZGl0XCI+XHJcbiAgICAgICAgICAgIOWPliDmtohcclxuICAgICAgICAgIDwvdmFuLWJ1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0t6YOo6ZeoLS0+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93XCIgcm91bmQgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgPHZhbi1jYXNjYWRlclxyXG4gICAgICAgIHYtbW9kZWw9XCJjYXNjYWRlclZhbHVlXCJcclxuICAgICAgICB0aXRsZT1cIuivt+mAieaLqeaJgOWcqOmDqOmXqFwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcclxuICAgICAgICA6ZmllbGQtbmFtZXM9XCJmaWVsZE5hbWVzXCJcclxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjMTk4OWZhXCJcclxuICAgICAgICBAY2xvc2U9XCJzaG93ID0gZmFsc2VcIlxyXG4gICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZURlcHRcIlxyXG4gICAgICAgIEBmaW5pc2g9XCJvbkZpbmlzaFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3Zhbi1wb3B1cD5cclxuXHJcbiAgICA8IS0t5omA5bGe5Yy65Z+fLS0+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93QXJlYVwiIHJvdW5kIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgIDx2YW4tcGlja2VyXHJcbiAgICAgICAgdGl0bGU9XCLmiYDlsZ7ljLrln59cIlxyXG4gICAgICAgIHNob3ctdG9vbGJhclxyXG4gICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc0FyZWFcIlxyXG4gICAgICAgIHZhbHVlLWtleT1cIm1jXCJcclxuICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUFyZWFcIlxyXG4gICAgICAgIEBjYW5jZWw9XCJvbkNhbmNlbEFyZWFcIlxyXG4gICAgICAvPlxyXG4gICAgPC92YW4tcG9wdXA+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbiAgaW1wb3J0IHtUb2FzdH0gZnJvbSBcInZhbnRcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJzeXN0ZW1TZXRcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgbWM6ICcnLFxyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiAnJyxcclxuICAgICAgICAgIGRlcHROYW1lOiAnJyxcclxuICAgICAgICAgIHBvc3ROYW1lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmllbGROYW1lczoge1xyXG4gICAgICAgICAgdGV4dDogJ2RlcHROYW1lJyxcclxuICAgICAgICAgIHZhbHVlOiAnZGVwdE5hbWUnLFxyXG4gICAgICAgICAgY2hpbGRyZW46ICdjaGlsZHJlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlZGl0SW5mbzoge30sXHJcbiAgICAgICAgY2FzY2FkZXJWYWx1ZTogJycsXHJcbiAgICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2hvd0VkaXQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBcmVhOiBmYWxzZSxcclxuICAgICAgICBjb2x1bW5zQXJlYTogW10sXHJcbiAgICAgICAgYXJlYUlkQ2hlY2tlZDogJycsXHJcbiAgICAgICAgcm9sZUxpc3Q6IFtdLFxyXG4gICAgICAgIHJvbGVDaGVja2VkOiBbXSxcclxuICAgICAgICB0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJywpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgIHRoaXMuZ2V0WHpxaCgpO1xyXG4gICAgICB0aGlzLnF1ZXJ5Um9sZXMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVHJlZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL2dldERlcGFydG1lbnQnLCB7XHJcbiAgICAgICAgICB0b2tlbjogdGhpcy50b2tlblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHJlc3BvbnNlVHJlZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvenNoYi9nZXRVc2VyT2JqZWN0Jywge1xyXG4gICAgICAgICAgdG9rZW46IHRoaXMudG9rZW5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluZm8gPSByZXNwb25zZS5kYXRhLmRhdGEudXNlclZPO1xyXG4gICAgICAgIHRoaXMuZWRpdEluZm8gPSByZXNwb25zZS5kYXRhLmRhdGEudXNlclZPO1xyXG4gICAgICAgIHRoaXMucm9sZUNoZWNrZWQgPSByZXNwb25zZS5kYXRhLmRhdGEudXNlclZPLnJvbGVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLnJvbGVJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2hhbmdlRGVwdCh7dmFsdWUsIHNlbGVjdGVkT3B0aW9uc30pIHtcclxuICAgICAgICB0aGlzLmluZm8uZGVwdElkID0gc2VsZWN0ZWRPcHRpb25zW3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXS5kZXB0SWQ7XHJcbiAgICAgICAgdGhpcy5pbmZvLmRlcHROYW1lID0gc2VsZWN0ZWRPcHRpb25zW3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXS5kZXB0TmFtZTtcclxuICAgICAgfSxcclxuICAgICAgLy/mn6Xor6LmiYDmnInooYzmlL/ljLrliJJcclxuICAgICAgYXN5bmMgZ2V0WHpxaCgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL2dldEFyZWFMaXN0Jywge30pO1xyXG4gICAgICAgIHRoaXMuY29sdW1uc0FyZWEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5p+l6K+i5omA5pyJ6KeS6ImyXHJcbiAgICAgIGFzeW5jIHF1ZXJ5Um9sZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvenNoYi9nZXRSb2xlJywge30pO1xyXG4gICAgICAgIHRoaXMucm9sZUxpc3QgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm1BcmVhKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhSWRDaGVja2VkID0gdmFsdWUuZG07XHJcbiAgICAgICAgdGhpcy5lZGl0SW5mby5kaXZpc2lvbk5hbWUgPSB2YWx1ZS5tYztcclxuICAgICAgICB0aGlzLnNob3dBcmVhID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2FuY2VsQXJlYSgpIHtcclxuICAgICAgICB0aGlzLnNob3dBcmVhID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRVc2VySW5mbyhmb3JtTmFtZSkge1xyXG4gICAgICAgIHRoaXMuJHJlZnNbZm9ybU5hbWVdLnZhbGlkYXRlKCkudGhlbihhc3luYygpID0+IHtcclxuICAgICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgICB0b2tlbjogdGhpcy50b2tlbixcclxuICAgICAgICAgICAgZGVwdElkOiB0aGlzLmVkaXRJbmZvLmRlcHRJZCxcclxuICAgICAgICAgICAgZGVwdE5hbWU6IHRoaXMuZWRpdEluZm8uZGVwdE5hbWUsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uQ29kZTogdGhpcy5hcmVhSWRDaGVja2VkIHx8IHRoaXMuZWRpdEluZm8uZGl2aXNpb25Db2RlLFxyXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMuZWRpdEluZm8uZGl2aXNpb25OYW1lLFxyXG4gICAgICAgICAgICBwb3N0TmFtZTogdGhpcy5lZGl0SW5mby5wb3N0TmFtZSxcclxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucm9sZUNoZWNrZWQsXHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5lZGl0SW5mby51c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVkaXRJbmZvLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBtYzogdGhpcy5lZGl0SW5mby5tYyxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL3VwZGF0ZVVzZXInLCBpbmZvKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0KCfkv67mlLnmiJDlip8nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2hvd0VkaXQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkVkaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9ICF0aGlzLnNob3dFZGl0O1xyXG4gICAgICB9LFxyXG4gICAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5zeXN0ZW0ge1xyXG4gICAgLy8gcGFkZGluZzogODBweCAzMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIC5zZXRfY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAgICAgLnNldEl0ZW1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAuc2V0X3RleHQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjQ2NTY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFuLWNlbGwge1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudmFuLWNlbGw6OmFmdGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmVwd2RidG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ291dCB7XHJcbiAgICAgIC5mcyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkZGO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCJjYWxjKDEwMHZoKVwiLCBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLkuKrkurrkv6Hmga9cIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3lzdGVtXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0X2NvbnRlbnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICFfdm0uc2hvd0VkaXRcbiAgICAgICAgICAgICAgPyBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aeT5ZCNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLm1jKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXRJdGVtc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui0puWPt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNldF90ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby51c2VybmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0SXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYDlsZ7op5LoibJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXRfdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiwgXCJsaW5lLWhlaWdodFwiOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW5mby5yb2xlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucm9sZU5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omA5bGe5Yy65Y6/XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmRpdmlzaW9uTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0SXRlbXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYDlsZ7pg6jpl6hcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZXRfdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZGVwdE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldEl0ZW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGM5L2NXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0X3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnBvc3ROYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICFfdm0uc2hvd0VkaXRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlcHdkYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJsb2NrOiBcIlwiLCB0eXBlOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRWRpdCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg5L+uIOaUuSBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLnNob3dFZGl0XG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmFuLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgLTVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJ2YWxpZGF0ZS1maXJzdFwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlp5PlkI1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuivt+Whq+WGmeWnk+WQjVwiIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdEluZm8ubWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcIm1jXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby5tY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogXCJcIiwgbGFiZWw6IFwi6LSm5Y+3XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdEluZm8udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcInVzZXJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby51c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaJgOWxnuWMuuWfn1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWxpbmtcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93QXJlYSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRJbmZvLmRpdmlzaW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdEluZm8sIFwiZGl2aXNpb25OYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby5kaXZpc2lvbk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjaGVja2JveEdyb3VwXCIsIGxhYmVsOiBcIuaJgOWxnuinkuiJslwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucm9sZUNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb2xlQ2hlY2tlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb2xlQ2hlY2tlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9sZUxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ucm9sZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogXCJzcXVhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLXNpemVcIjogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhpdGVtLnJvbGVOYW1lKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAzMzMxMDI3NDE1XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIumDqOmXqFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IGZhbHNlLCBtZXNzYWdlOiBcIuivt+Whq+WGmemDqOmXqFwiIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0SW5mby5kZXB0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdEluZm8sIFwiZGVwdE5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRJbmZvLmRlcHROYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsZWFyYWJsZTogXCJcIiwgbGFiZWw6IFwi6IGM5L2NXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdEluZm8ucG9zdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRJbmZvLCBcInBvc3ROYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0SW5mby5wb3N0TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmVwd2RidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBibG9jazogXCJcIiwgdHlwZTogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0VXNlckluZm8oXCJpbmZvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg5o+QIOS6pCBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZXB3ZGJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjE2cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJsb2NrOiBcIlwiLCB0eXBlOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25FZGl0IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg5Y+WIOa2iCBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyByb3VuZDogXCJcIiwgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tY2FzY2FkZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6K+36YCJ5oup5omA5Zyo6YOo6ZeoXCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5vcHRpb25zLFxuICAgICAgICAgICAgICBcImZpZWxkLW5hbWVzXCI6IF92bS5maWVsZE5hbWVzLFxuICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiMxOTg5ZmFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlOiBfdm0ub25DaGFuZ2VEZXB0LFxuICAgICAgICAgICAgICBmaW5pc2g6IF92bS5vbkZpbmlzaCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhc2NhZGVyVmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmNhc2NhZGVyVmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXNjYWRlclZhbHVlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyByb3VuZDogXCJcIiwgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93QXJlYSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93QXJlYSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0FyZWFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIuaJgOWxnuWMuuWfn1wiLFxuICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICBjb2x1bW5zOiBfdm0uY29sdW1uc0FyZWEsXG4gICAgICAgICAgICAgIFwidmFsdWUta2V5XCI6IFwibWNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjb25maXJtOiBfdm0ub25Db25maXJtQXJlYSwgY2FuY2VsOiBfdm0ub25DYW5jZWxBcmVhIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zeXN0ZW0ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnN5c3RlbSAuc2V0X2NvbnRlbnQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcbi5zeXN0ZW0gLnNldF9jb250ZW50IHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbn1cXG4uc3lzdGVtIC5zZXRfY29udGVudCB1bCBsaSAuc2V0SXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zeXN0ZW0gLnNldF9jb250ZW50IHVsIGxpIC5zZXRJdGVtcyAuc2V0X3RleHQge1xcbiAgY29sb3I6ICM2NDY1NjY7XFxufVxcbi5zeXN0ZW0gLnNldF9jb250ZW50IHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLnN5c3RlbSAudmFuLWNlbGwge1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5zeXN0ZW0gLnZhbi1jZWxsOjphZnRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHJpZ2h0OiAxNnB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMTZweDtcXG59XFxuLnN5c3RlbSAuc2F2ZXB3ZGJ0biB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uc3lzdGVtIC5sb2dvdXQgLmZzIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGRjtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2ZGUwZjEwZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTllZjg1OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBNb2NrXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg1OWVmODU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg1OWVmODU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg1OWVmODU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU5ZWY4NTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODU5ZWY4NTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9taW5lL3N5c3RlbVNldC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI5ZDE3Zjc5Ni12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTllZjg1OCZcIiJdLCJzb3VyY2VSb290IjoiIn0=