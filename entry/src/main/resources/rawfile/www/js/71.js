(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "siteItem",
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace('类', '');
      } else {
        return '';
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return 'target2';
      } else if (value === 'Ⅱ') {
        return 'target2';
      } else if (value === 'Ⅲ') {
        return 'target3';
      } else if (value === 'Ⅳ') {
        return 'target4';
      } else if (value === 'Ⅴ') {
        return 'target5';
      } else if (value === '劣Ⅴ') {
        return 'target6';
      } else {
        return 'target0';
      }
    },
    toDetail: function toDetail(flag, item) {
      console.log(localStorage.getItem("token")); //0水 1气
      // let options = "location=no,toolbar=no,zoom=no,fullscreen=no";

      if (flag === 0) {
        var id = item.zdlx === 'river' ? item.objectid : item.id;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["openBrowser"])('http://10.221.29.4:18999/kmshj_sso/#/sso?token=' + localStorage.getItem("token") + '&id=' + id + '&type=' + item.zdlx + '&datatype=' + item.tyep);
      } else if (flag === 1) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["openBrowser"])('http://10.221.29.4:17000/kqzlkep/#/DataDetail/' + item.stationName + '?phone=' + localStorage.getItem('phone'));
      }
    },
    onAddTask: function onAddTask(data) {
      this.$emit('addTask', data);
    },
    taskBtnShow: function taskBtnShow(name) {
      if (name === '阳宗海' || name === '滇池草海' || name === '外海') {
        return false;
      } else {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _views_waterHomePage_exceedWarning_components_siteItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/waterHomePage/exceedWarning/components/siteItem.vue */ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    siteItem: _views_waterHomePage_exceedWarning_components_siteItem_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      levelDesArr: ['时值、日值数据出现超标 0.5 倍以内', '时值、日值数据出现超标 0.5 ~ 2 倍或日值数据出现连续 2 日以上超标 0.5 倍以内', '日值出现连续 2 日以上超标 0.5 ~ 2 倍或时值、日值数据出现超标 2 倍以上', '日值数据连续 2 日出现超标 2 倍以上或日值数据出现连续 5 日以上超标', '日值数据出现连续 7日以上超标且呈上升趋势'],
      levelArrNum: [],
      dataList: [],
      addTaskVisible: false,
      siteObj: {},
      title: ''
    };
  },
  mounted: function mounted() {
    this.flag = Number(this.$route.query.flag); //0超标告警 1预警

    this.activeIndex = this.flag;
    this.queryWarningData();
  },
  methods: {
    queryWarningData: function queryWarningData() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;

                if (_this.flag === 0) {
                  _this.title = '水环境超标告警';

                  _this.getWarningWater().then(function (tempDWater) {
                    _this.dataList = tempDWater;
                  }).finally(function () {
                    _this.loading = false;
                  });
                } else {
                  _this.title = '水环境超标预警';

                  _this.getEarlyWarningWater().then(function (res) {
                    _this.dataList = res.data;
                  });
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //超标告警
    getWarningWater: function getWarningWater() {
      return new Promise(function (resolve, reject) {
        Object(_api_api_js__WEBPACK_IMPORTED_MODULE_4__["warningWater"])().then(function (res) {
          resolve(res);
        });
      });
    },
    //超标预警
    getEarlyWarningWater: function getEarlyWarningWater() {
      return new Promise(function (resolve, reject) {
        Object(_api_api_js__WEBPACK_IMPORTED_MODULE_4__["warningEarlyWater"])().then(function (res) {
          resolve(res);
        });
      });
    },
    toInfo: function toInfo() {
      this.$router.push({
        name: "pdfH5",
        query: {
          url: 'http://10.221.29.4:7001/minio/download/11ddc8d0-82f5-11ee-d8be-e8ec872b3eaa'
        }
      });
    },
    addTask: function addTask(data) {
      data.relaType = 'water';
      this.siteObj = data;
      this.addTaskVisible = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "site-wrapper" }, [
    _c(
      "div",
      {
        staticClass: "fs",
        on: {
          click: function ($event) {
            return _vm.toDetail(0, _vm.item)
          },
        },
      },
      [
        _c("div", { staticClass: "site-name" }, [
          _vm._v(_vm._s(_vm.item.name.replace("-", "\n"))),
        ]),
        _c(
          "div",
          {
            staticClass: "site-status",
            style: {
              backgroundImage:
                "url(" + _vm.judgeLevel(_vm.replaceString(_vm.item.szxz)) + ")",
              margin: "0 30px 0 16px",
            },
          },
          [_vm._v(" " + _vm._s(_vm.replaceString(_vm.item.szxz)) + " ")]
        ),
        _c("div", { staticClass: "site-target" }, [
          _vm._v(" 目标 "),
          _c(
            "span",
            {
              class: [
                "target-level",
                _vm.judgeTargetLevel(_vm.replaceString(_vm.item.szmb)),
              ],
            },
            [_vm._v(" " + _vm._s(_vm.replaceString(_vm.item.szmb)) + " ")]
          ),
        ]),
      ]
    ),
    _c("div", { staticClass: "site-reason" }, [
      _vm._v(_vm._s(_vm.item.desc.replace("-倍", ""))),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.title, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticStyle: { height: "calc(100vh - 50px)", overflow: "auto" } },
        [
          _c("div", { staticClass: "link fs", on: { click: _vm.toInfo } }, [
            _c("img", {
              staticStyle: {
                width: "18px",
                height: "18px",
                "margin-right": "4px",
              },
              attrs: { src: __webpack_require__(/*! @/assets/pdf.png */ "./src/assets/pdf.png") },
            }),
            _vm._v("昆明市国、省控监测断面自动站水质异常波动响应工作机制"),
          ]),
          _vm.dataList.fifth && _vm.dataList.fifth.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "level-notice fs" },
                  [
                    _c("van-icon", {
                      attrs: { name: "warning", color: "#447BFC", size: "16" },
                    }),
                    _vm._v(" Ⅴ级：" + _vm._s(_vm.levelDesArr[4])),
                  ],
                  1
                ),
                _vm._l(_vm.dataList.fifth, function (item) {
                  return _c("site-item", {
                    attrs: { item: item },
                    on: { addTask: _vm.addTask },
                  })
                }),
              ]
            : _vm._e(),
          _vm.dataList.fourth && _vm.dataList.fourth.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "level-notice fs" },
                  [
                    _c("van-icon", {
                      attrs: { name: "warning", color: "#447BFC", size: "16" },
                    }),
                    _vm._v(" Ⅳ级：" + _vm._s(_vm.levelDesArr[3])),
                  ],
                  1
                ),
                _vm._l(_vm.dataList.fourth, function (item) {
                  return _c("site-item", {
                    attrs: { item: item },
                    on: { addTask: _vm.addTask },
                  })
                }),
              ]
            : _vm._e(),
          _vm.dataList.thrid && _vm.dataList.thrid.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "level-notice fs" },
                  [
                    _c("van-icon", {
                      attrs: { name: "warning", color: "#447BFC", size: "16" },
                    }),
                    _vm._v(" Ⅲ级：" + _vm._s(_vm.levelDesArr[2])),
                  ],
                  1
                ),
                _vm._l(_vm.dataList.thrid, function (item) {
                  return _c("site-item", {
                    attrs: { item: item },
                    on: { addTask: _vm.addTask },
                  })
                }),
              ]
            : _vm._e(),
          _vm.dataList.second && _vm.dataList.second.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "level-notice fs" },
                  [
                    _c("van-icon", {
                      attrs: { name: "warning", color: "#447BFC", size: "16" },
                    }),
                    _vm._v(" Ⅱ级：" + _vm._s(_vm.levelDesArr[1])),
                  ],
                  1
                ),
                _vm._l(_vm.dataList.second, function (item) {
                  return _c("site-item", {
                    attrs: { item: item },
                    on: { addTask: _vm.addTask },
                  })
                }),
              ]
            : _vm._e(),
          _vm.dataList.fisrt && _vm.dataList.fisrt.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "level-notice fs" },
                  [
                    _c("van-icon", {
                      attrs: { name: "warning", color: "#447BFC", size: "16" },
                    }),
                    _vm._v(" Ⅰ级：" + _vm._s(_vm.levelDesArr[0])),
                  ],
                  1
                ),
                _vm._l(_vm.dataList.fisrt, function (item) {
                  return _c("site-item", {
                    attrs: { item: item },
                    on: { addTask: _vm.addTask },
                  })
                }),
              ]
            : _vm._e(),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-29e16118] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.site-wrapper[data-v-29e16118] {\n  margin: 8px;\n  padding: 12px 15px;\n  background: #fff;\n  border-radius: 10px;\n  position: relative;\n}\n.site-wrapper .site-reason[data-v-29e16118] {\n  color: #ff8d1a;\n  font-size: 12px;\n  border-radius: 10px;\n  line-height: 20px;\n  margin-top: 10px;\n}\n.site-wrapper .site-name[data-v-29e16118], .site-wrapper .site-name-air[data-v-29e16118] {\n  color: #121236;\n  font-size: 14px;\n}\n.site-wrapper .site-name[data-v-29e16118] {\n  flex: 1;\n}\n.site-wrapper .site-name-air[data-v-29e16118] {\n  width: 60%;\n}\n.site-wrapper .site-target[data-v-29e16118] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.target-level[data-v-29e16118] {\n  display: inline-block;\n  margin-left: 5px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.target2[data-v-29e16118] {\n  color: #165dff;\n  border: 1px solid #165dff;\n}\n.target3[data-v-29e16118] {\n  color: #27d043;\n  border: 1px solid #27d043;\n}\n.target4[data-v-29e16118] {\n  color: #ffc338;\n  border: 1px solid #ffc338;\n}\n.target5[data-v-29e16118] {\n  color: #fd8e01;\n  border: 1px solid #fd8e01;\n}\n.target6[data-v-29e16118] {\n  color: #fe4f02;\n  border: 1px solid #fe4f02;\n}\n.target0[data-v-29e16118] {\n  color: #a0a0a0;\n  border: 1px solid #a0a0a0;\n}\n.task-btn[data-v-29e16118] {\n  text-align: right;\n  font-size: 12px;\n  color: #a299ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link[data-v-6742cb57] {\n  font-size: 12px;\n  color: #666;\n  text-decoration: underline;\n  justify-content: start !important;\n  margin: 12px;\n}\n.fs[data-v-6742cb57] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.level-notice[data-v-6742cb57] {\n  justify-content: left;\n  font-size: 12px;\n  padding: 4px 6px;\n  margin: 20px 8px 8px;\n  color: #447bfc;\n  border-radius: 20px 0 20px 0;\n  background: linear-gradient(225deg, rgba(73, 117, 236, 0.2), rgba(151, 179, 255, 0.2));\n  line-height: 16px;\n  min-height: 24px;\n}\n.level-notice > i[data-v-6742cb57] {\n  margin: 0 5px;\n}\n.air-level[data-v-6742cb57] {\n  height: 18px;\n  margin: 0 10px;\n  padding: 0 10px;\n  /*background: rgba(255, 191, 0, 1);*/\n  border-radius: 10px;\n  color: #fff;\n  font-size: 12px;\n}\n.target-level[data-v-6742cb57] {\n  display: inline-block;\n  margin-left: 10px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n}\n.target2[data-v-6742cb57] {\n  color: #165dff;\n  border: 1px solid #165dff;\n}\n.target3[data-v-6742cb57] {\n  color: #27d043;\n  border: 1px solid #27d043;\n}\n.target4[data-v-6742cb57] {\n  color: #ffc338;\n  border: 1px solid #ffc338;\n}\n.target5[data-v-6742cb57] {\n  color: #fd8e01;\n  border: 1px solid #fd8e01;\n}\n.target6[data-v-6742cb57] {\n  color: #fe4f02;\n  border: 1px solid #fe4f02;\n}\n.target0[data-v-6742cb57] {\n  color: #a0a0a0;\n  border: 1px solid #a0a0a0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("75274d84", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f86b8ae8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: login, login_clue, siteSearch, sysNoticeInfo, noticeRead, lawSearch, neighbourSiteSearch, waterSiteFine, drinkWaterSummary, warningAir, warningWater, warningEarlyWater, waterStation, airQuality, airQualityIAQI, dianWaterQuality, getNoticeList, GISPollutiton, GISWater, GISChannel, getAirSite, userLogin, userSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_clue", function() { return login_clue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteSearch", function() { return siteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sysNoticeInfo", function() { return sysNoticeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noticeRead", function() { return noticeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lawSearch", function() { return lawSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neighbourSiteSearch", function() { return neighbourSiteSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterSiteFine", function() { return waterSiteFine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drinkWaterSummary", function() { return drinkWaterSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningAir", function() { return warningAir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningWater", function() { return warningWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningEarlyWater", function() { return warningEarlyWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterStation", function() { return waterStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQuality", function() { return airQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualityIAQI", function() { return airQualityIAQI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dianWaterQuality", function() { return dianWaterQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoticeList", function() { return getNoticeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISPollutiton", function() { return GISPollutiton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISWater", function() { return GISWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GISChannel", function() { return GISChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirSite", function() { return getAirSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSubscribe", function() { return userSubscribe; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/api/request.js");


/**
 * 登录
 * */

function login(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/login/user_info',
    method: 'get',
    params: {
      token: token
    }
  });
}
/**
 * 登录--线索
 * */

function login_clue(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/manage/login/token_user_info',
    method: 'get',
    params: {
      token: token
    }
  });
}
/**
 * 站点搜索
 * */

function siteSearch(_ref) {
  var page = _ref.page,
      limit = _ref.limit,
      name = _ref.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/list',
    method: 'get',
    params: {
      page: page,
      limit: limit,
      name: name
    }
  });
}
/**
 * 用户通知
 * */

function sysNoticeInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/sysNoticeInfo',
    method: 'get'
  });
}
/**
 * 用户通知
 * */

function noticeRead(_ref2) {
  var noticeId = _ref2.noticeId;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/sysNoticeInfo/read',
    method: 'get',
    params: {
      noticeId: noticeId
    }
  });
}
/**
 * 法律法规搜索
 * */

function lawSearch(_ref3) {
  var name = _ref3.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/interface/retrieval/document_search',
    method: 'get',
    params: {
      page: 1,
      limit: 1000,
      id: '504,505,506',
      name: name
    }
  });
}
/**
 * 周边站点搜索
 * */

function neighbourSiteSearch(_ref4) {
  var longitude = _ref4.longitude,
      latitude = _ref4.latitude,
      number = _ref4.number;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/surrounding',
    method: 'get',
    params: {
      longitude: longitude,
      latitude: latitude,
      number: number
    }
  });
}
/**
 * 国省考站点优良情况
 * @param type 1国考2省考
 * */

function waterSiteFine(_ref5) {
  var type = _ref5.type;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/' + type,
    method: 'get',
    params: {}
  });
}
/**
 * 饮用水源地概况
 * */

function drinkWaterSummary() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home',
    method: 'get',
    params: {}
  });
}
/**
 * 超标告警-气
 * */

function warningAir() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/airWarning',
    method: 'get',
    params: {}
  });
}
/**
 * 超标告警-水
 * */

function warningWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/DCMRM130/message/abnormalData',
    method: 'get',
    params: {}
  });
}
/**
 * 超标预警-水
 * */

function warningEarlyWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/common/warnings',
    method: 'get',
    params: {}
  });
} // 水站详情

function waterStation(objectid, type, jcfs) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/DCMRM130/lydt/getLydtGk',
    method: 'get',
    params: {
      objectid: objectid,
      type: type,
      jcfs: jcfs
    }
  });
}
/**
 * 全市空气质量
 * */

function airQuality(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/air',
    method: 'get',
    params: data
  });
}
/**
 * 全市空气质量IAQI
 * */

function airQualityIAQI(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/getIndexIaqi',
    method: 'get',
    params: data
  });
}
/**
 * 滇池水质状况
 * */

function dianWaterQuality() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/situation',
    method: 'get',
    params: {}
  });
} //通知公告 - 列表

function getNoticeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/kep_manage/notice/queryListInfo',
    method: 'GET',
    params: data
  });
}
/**
 * GIS-所有污染源
 * */

function GISPollutiton() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/pollut/pollution/getAllSummary',
    method: 'get',
    params: {}
  });
}
/**
 * GIS-所有水
 * */

function GISWater() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/visualization/all-section',
    method: 'get',
    params: {}
  });
}
/**
 * GIS-查沟渠
 * */

function GISChannel(_ref6) {
  var name = _ref6.name;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/water/waterGqxx',
    method: 'get',
    params: {
      dwmc: name,
      gqmc: name
    }
  });
}
/**
 * 大气站点
 * @param type 3全部
 * @param time 密码
 * */

function getAirSite(_ref7) {
  var time = _ref7.time;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: 'http://116.52.6.118:18899/KQZLYZW/home/realdata?type=3&time=' + time,
    method: 'GET',
    data: {}
  });
} // 用户登录

var userLogin = function userLogin(name, pwd) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/system-service-login/user/login',
    method: 'get',
    params: {
      userName: name,
      password: pwd
    }
  });
};
/**
 * 用户组件订阅
 * */

function userSubscribe(token) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/home/userSubscribe',
    method: 'get',
    params: {
      Token: token
    }
  });
}

/***/ }),

/***/ "./src/assets/pdf.png":
/*!****************************!*\
  !*** ./src/assets/pdf.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGeSURBVEiJxVdRbsIwDH0e9Di7wSSClHvsa6doJajU3WiflQjXWjvMR1Jo2qRxKGhP4ofYfrzYjg3wT6CUga46lROwbQqzmliX/QlAFrGNynXbFMeHiHXVHcF0yCa9w7Tf230+8aBW8Os9v6pTYDqlyN+kAaVom8KAeCBTTsDriaXk3lU/nFfifaiavWuf2PiKmXaR0LOgEnjKJ4K2ogjENYDz0m0Eb8v6mZC9JMdBx7WQKFYA6pSRa7nj9PvYy5dT1SbDNom0YpsnBcCAuB4VoBqbuQqe5viMFTkeV7t9iYjrUZ8OULNPvEsWFRunFgB2To3SZQ/AUw7A5lhXne+/gBixwXbzie7vHYSf2WmkrUJveqy44oovvx+gzVf0PABHciNaGi4xYoXLRkXOYqSzB0SX/Q7gYCv6xLZqswgBmLYpjK46gNh/dilMCrxgHs/i3AeFN5tlbzXSu5d018oiloxL22YTrBwSiDmvgUixu8bkKhzCM4bEUxFXPLQW00GX/eNrLt/inb3wSz5P2K0HzNZcUd5y/8ZMkdtqL8UVsanByDr15i8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue":
/*!***********************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/components/siteItem.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteItem.vue?vue&type=template&id=29e16118&scoped=true& */ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true&");
/* harmony import */ var _siteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siteItem.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& */ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _siteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29e16118",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/exceedWarning/components/siteItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteItem.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=style&index=0&id=29e16118&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_style_index_0_id_29e16118_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteItem.vue?vue&type=template&id=29e16118&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/components/siteItem.vue?vue&type=template&id=29e16118&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteItem_vue_vue_type_template_id_29e16118_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/index.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6742cb57&scoped=true& */ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& */ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6742cb57",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/exceedWarning/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=style&index=0&id=6742cb57&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6742cb57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6742cb57&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/exceedWarning/index.vue?vue&type=template&id=6742cb57&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6742cb57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9jb21wb25lbnRzL3NpdGVJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9jb21wb25lbnRzL3NpdGVJdGVtLnZ1ZT9mOGE1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvaW5kZXgudnVlPzU1YzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9jb21wb25lbnRzL3NpdGVJdGVtLnZ1ZT82OTMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvaW5kZXgudnVlP2ZhNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9jb21wb25lbnRzL3NpdGVJdGVtLnZ1ZT83NzQxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvaW5kZXgudnVlP2JjNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wZGYucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvY29tcG9uZW50cy9zaXRlSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9jb21wb25lbnRzL3NpdGVJdGVtLnZ1ZT8zM2Y2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvY29tcG9uZW50cy9zaXRlSXRlbS52dWU/MzU0MyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGNlZWRXYXJuaW5nL2NvbXBvbmVudHMvc2l0ZUl0ZW0udnVlP2JjNmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9pbmRleC52dWU/Mjc0OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGNlZWRXYXJuaW5nL2luZGV4LnZ1ZT9kOTNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvaW5kZXgudnVlPzdjMmIiXSwibmFtZXMiOlsibG9naW4iLCJ0b2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJsb2dpbl9jbHVlIiwic2l0ZVNlYXJjaCIsInBhZ2UiLCJsaW1pdCIsIm5hbWUiLCJzeXNOb3RpY2VJbmZvIiwibm90aWNlUmVhZCIsIm5vdGljZUlkIiwibGF3U2VhcmNoIiwiaWQiLCJuZWlnaGJvdXJTaXRlU2VhcmNoIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJudW1iZXIiLCJ3YXRlclNpdGVGaW5lIiwidHlwZSIsImRyaW5rV2F0ZXJTdW1tYXJ5Iiwid2FybmluZ0FpciIsIndhcm5pbmdXYXRlciIsIndhcm5pbmdFYXJseVdhdGVyIiwid2F0ZXJTdGF0aW9uIiwib2JqZWN0aWQiLCJqY2ZzIiwiYWlyUXVhbGl0eSIsImRhdGEiLCJhaXJRdWFsaXR5SUFRSSIsImRpYW5XYXRlclF1YWxpdHkiLCJnZXROb3RpY2VMaXN0IiwiR0lTUG9sbHV0aXRvbiIsIkdJU1dhdGVyIiwiR0lTQ2hhbm5lbCIsImR3bWMiLCJncW1jIiwiZ2V0QWlyU2l0ZSIsInRpbWUiLCJ1c2VyTG9naW4iLCJwd2QiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwidXNlclN1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QTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBeVQsQ0FBZ0IseVVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN1U7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy83MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2l0ZS13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIiBAY2xpY2s9XCJ0b0RldGFpbCgwLGl0ZW0pXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW5hbWVcIj57e2l0ZW0ubmFtZS5yZXBsYWNlKCctJywgJ1xcbicpfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNpdGUtc3RhdHVzXCJcclxuICAgICAgICAgICA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBqdWRnZUxldmVsKHJlcGxhY2VTdHJpbmcoaXRlbS5zenh6KSkgKyAnKScsIG1hcmdpbjogJzAgMzBweCAwIDE2cHgnIH1cIj5cclxuICAgICAgICB7e3JlcGxhY2VTdHJpbmcoaXRlbS5zenh6KX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS10YXJnZXRcIj5cclxuICAgICAgICDnm67moIdcclxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbJ3RhcmdldC1sZXZlbCcsanVkZ2VUYXJnZXRMZXZlbChyZXBsYWNlU3RyaW5nKGl0ZW0uc3ptYikpXVwiPlxyXG4gICAgICAgICAgICAgIHt7cmVwbGFjZVN0cmluZyhpdGVtLnN6bWIpfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzaXRlLXJlYXNvblwiPnt7IGl0ZW0uZGVzYy5yZXBsYWNlKCct5YCNJywnJykgfX08L2Rpdj5cclxuICAgIDwhLS0gICAgICAgIDxkaXYgdi1pZj1cInRhc2tCdG5TaG93KGl0ZW0ubmFtZSlcIiBjbGFzcz1cInRhc2stYnRuXCIgQGNsaWNrPVwib25BZGRUYXNrKGl0ZW0pXCI+5Lu75Yqh6LCD5bqmPC9kaXY+LS0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7aW1nSnVnZGVMZXZlbCwgb3BlbkJyb3dzZXJ9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic2l0ZUl0ZW1cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGl0ZW06IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICByZXBsYWNlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgn57G7JywgJycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAganVkZ2VMZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBpbWdKdWdkZUxldmVsKHZhbHVlKVxyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZVRhcmdldExldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDInO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaEnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDInO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaInKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDMnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaMnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICfliqPihaQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDYnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdG9EZXRhaWwoZmxhZywgaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpXHJcbiAgICAgICAgLy8w5rC0IDHmsJRcclxuICAgICAgICAvLyBsZXQgb3B0aW9ucyA9IFwibG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vLGZ1bGxzY3JlZW49bm9cIjtcclxuICAgICAgICBpZiAoZmxhZyA9PT0gMCkge1xyXG4gICAgICAgICAgbGV0IGlkID0gaXRlbS56ZGx4ID09PSAncml2ZXInID8gaXRlbS5vYmplY3RpZCA6IGl0ZW0uaWQ7XHJcbiAgICAgICAgICBvcGVuQnJvd3NlcignaHR0cDovLzEwLjIyMS4yOS40OjE4OTk5L2ttc2hqX3Nzby8jL3Nzbz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSArICcmaWQ9JyArIGlkICsgJyZ0eXBlPScgKyBpdGVtLnpkbHggKyAnJmRhdGF0eXBlPScgKyBpdGVtLnR5ZXApXHJcbiAgICAgICAgfSBlbHNlIGlmIChmbGFnID09PSAxKSB7XHJcbiAgICAgICAgICBvcGVuQnJvd3NlcignaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwL2txemxrZXAvIy9EYXRhRGV0YWlsLycgKyBpdGVtLnN0YXRpb25OYW1lICsgJz9waG9uZT0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bob25lJykpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFkZFRhc2soZGF0YSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2FkZFRhc2snLCBkYXRhKVxyXG4gICAgICB9LFxyXG4gICAgICB0YXNrQnRuU2hvdyhuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICfpmLPlrpfmtbcnIHx8IG5hbWUgPT09ICfmu4fmsaDojYnmtbcnIHx8IG5hbWUgPT09ICflpJbmtbcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIC5mcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaXRlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuc2l0ZS1yZWFzb24ge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLW5hbWUsIC5zaXRlLW5hbWUtYWlyIHtcclxuICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1uYW1lIHtcclxuICAgICAgLy93aWR0aDogMTAwcHg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtbmFtZS1haXIge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXRhcmdldCB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YXJnZXQtbGV2ZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLnRhcmdldDIge1xyXG4gICAgY29sb3I6IHJnYmEoMjIsIDkzLCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMiwgOTMsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0MyB7XHJcbiAgICBjb2xvcjogcmdiYSgzOSwgMjA4LCA2NywgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM5LCAyMDgsIDY3LCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0NSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTMsIDE0MiwgMSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MywgMTQyLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ2IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NCwgNzksIDIsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTQsIDc5LCAyLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQwIHtcclxuICAgIGNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXNrLWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjYTI5OWZmO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICA6dGl0bGU9XCJ0aXRsZVwiXHJcbiAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgPlxyXG4gICAgICA8IS0tICAgICAgICA8dGVtcGxhdGUgI3JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcGRmLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgbWFyZ2luLXJpZ2h0OiA0cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzQ0N0JGQzsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+6K+05piOPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPi0tPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDwhLS3nrYnnuqd0YWLmj4/ov7Dkv6Hmga8tLT5cclxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgb3ZlcmZsb3c6IGF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rIGZzXCIgQGNsaWNrPVwidG9JbmZvXCI+PGltZyBzcmM9XCJAL2Fzc2V0cy9wZGYucG5nXCIgc3R5bGU9XCJ3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBtYXJnaW4tcmlnaHQ6IDRweFwiPuaYhuaYjuW4guWbveOAgeecgeaOp+ebkea1i+aWremdouiHquWKqOermeawtOi0qOW8guW4uOazouWKqOWTjeW6lOW3peS9nOacuuWItjwvZGl2PlxyXG5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhTGlzdC5maWZ0aCAmJiBkYXRhTGlzdC5maWZ0aC5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLW5vdGljZSBmc1wiPjx2YW4taWNvbiBuYW1lPVwid2FybmluZ1wiIGNvbG9yPVwiIzQ0N0JGQ1wiIHNpemU9XCIxNlwiLz4g4oWk57qn77yae3tsZXZlbERlc0Fycls0XX19PC9kaXY+XHJcbiAgICAgICAgPHNpdGUtaXRlbSB2LWZvcj1cIml0ZW0gaW4gZGF0YUxpc3QuZmlmdGhcIiA6aXRlbT1cIml0ZW1cIiBAYWRkVGFzaz1cImFkZFRhc2tcIj48L3NpdGUtaXRlbT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhTGlzdC5mb3VydGggJiYgZGF0YUxpc3QuZm91cnRoLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbm90aWNlIGZzXCI+PHZhbi1pY29uIG5hbWU9XCJ3YXJuaW5nXCIgY29sb3I9XCIjNDQ3QkZDXCIgc2l6ZT1cIjE2XCIvPiDihaPnuqfvvJp7e2xldmVsRGVzQXJyWzNdfX08L2Rpdj5cclxuICAgICAgICA8c2l0ZS1pdGVtIHYtZm9yPVwiaXRlbSBpbiBkYXRhTGlzdC5mb3VydGhcIiA6aXRlbT1cIml0ZW1cIiBAYWRkVGFzaz1cImFkZFRhc2tcIj48L3NpdGUtaXRlbT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhTGlzdC50aHJpZCAmJiBkYXRhTGlzdC50aHJpZC5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLW5vdGljZSBmc1wiPjx2YW4taWNvbiBuYW1lPVwid2FybmluZ1wiIGNvbG9yPVwiIzQ0N0JGQ1wiIHNpemU9XCIxNlwiLz4g4oWi57qn77yae3tsZXZlbERlc0FyclsyXX19PC9kaXY+XHJcbiAgICAgICAgPHNpdGUtaXRlbSB2LWZvcj1cIml0ZW0gaW4gZGF0YUxpc3QudGhyaWRcIiA6aXRlbT1cIml0ZW1cIiBAYWRkVGFzaz1cImFkZFRhc2tcIj48L3NpdGUtaXRlbT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhTGlzdC5zZWNvbmQgJiYgZGF0YUxpc3Quc2Vjb25kLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbm90aWNlIGZzXCI+PHZhbi1pY29uIG5hbWU9XCJ3YXJuaW5nXCIgY29sb3I9XCIjNDQ3QkZDXCIgc2l6ZT1cIjE2XCIvPiDihaHnuqfvvJp7e2xldmVsRGVzQXJyWzFdfX08L2Rpdj5cclxuICAgICAgICA8c2l0ZS1pdGVtIHYtZm9yPVwiaXRlbSBpbiBkYXRhTGlzdC5zZWNvbmRcIiA6aXRlbT1cIml0ZW1cIiBAYWRkVGFzaz1cImFkZFRhc2tcIj48L3NpdGUtaXRlbT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkYXRhTGlzdC5maXNydCAmJiBkYXRhTGlzdC5maXNydC5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLW5vdGljZSBmc1wiPjx2YW4taWNvbiBuYW1lPVwid2FybmluZ1wiIGNvbG9yPVwiIzQ0N0JGQ1wiIHNpemU9XCIxNlwiLz4g4oWg57qn77yae3tsZXZlbERlc0FyclswXX19PC9kaXY+XHJcbiAgICAgICAgPHNpdGUtaXRlbSB2LWZvcj1cIml0ZW0gaW4gZGF0YUxpc3QuZmlzcnRcIiA6aXRlbT1cIml0ZW1cIiBAYWRkVGFzaz1cImFkZFRhc2tcIj48L3NpdGUtaXRlbT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IHdhcm5pbmdXYXRlciwgd2FybmluZ0Vhcmx5V2F0ZXJ9IGZyb20gXCJAL2FwaS9hcGkuanNcIjtcclxuICBpbXBvcnQgc2l0ZUl0ZW0gZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGNlZWRXYXJuaW5nL2NvbXBvbmVudHMvc2l0ZUl0ZW0udnVlXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtzaXRlSXRlbX0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxldmVsRGVzQXJyOiBbXHJcbiAgICAgICAgICAn5pe25YC844CB5pel5YC85pWw5o2u5Ye6546w6LaF5qCHIDAuNSDlgI3ku6XlhoUnLFxyXG4gICAgICAgICAgJ+aXtuWAvOOAgeaXpeWAvOaVsOaNruWHuueOsOi2heaghyAwLjUgfiAyIOWAjeaIluaXpeWAvOaVsOaNruWHuueOsOi/nue7rSAyIOaXpeS7peS4iui2heaghyAwLjUg5YCN5Lul5YaFJyxcclxuICAgICAgICAgICfml6XlgLzlh7rnjrDov57nu60gMiDml6Xku6XkuIrotoXmoIcgMC41IH4gMiDlgI3miJbml7blgLzjgIHml6XlgLzmlbDmja7lh7rnjrDotoXmoIcgMiDlgI3ku6XkuIonLFxyXG4gICAgICAgICAgJ+aXpeWAvOaVsOaNrui/nue7rSAyIOaXpeWHuueOsOi2heaghyAyIOWAjeS7peS4iuaIluaXpeWAvOaVsOaNruWHuueOsOi/nue7rSA1IOaXpeS7peS4iui2heaghycsXHJcbiAgICAgICAgICAn5pel5YC85pWw5o2u5Ye6546w6L+e57utIDfml6Xku6XkuIrotoXmoIfkuJTlkYjkuIrljYfotovlir8nLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGV2ZWxBcnJOdW06IFtdLFxyXG4gICAgICAgIGRhdGFMaXN0OiBbXSxcclxuICAgICAgICBhZGRUYXNrVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2l0ZU9iajoge30sXHJcbiAgICAgICAgdGl0bGU6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmZsYWcgPSBOdW1iZXIodGhpcy4kcm91dGUucXVlcnkuZmxhZyk7IC8vMOi2heagh+WRiuitpiAx6aKE6K2mXHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmZsYWc7XHJcbiAgICAgIHRoaXMucXVlcnlXYXJuaW5nRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgYXN5bmMgcXVlcnlXYXJuaW5nRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuZmxhZz09PTApe1xyXG4gICAgICAgICAgdGhpcy50aXRsZSA9ICfmsLTnjq/looPotoXmoIflkYroraYnO1xyXG4gICAgICAgICAgdGhpcy5nZXRXYXJuaW5nV2F0ZXIoKS50aGVuKHRlbXBEV2F0ZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0ID0gdGVtcERXYXRlcjtcclxuICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gJ+awtOeOr+Wig+i2heagh+mihOitpic7XHJcbiAgICAgICAgICB0aGlzLmdldEVhcmx5V2FybmluZ1dhdGVyKCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6LaF5qCH5ZGK6K2mXHJcbiAgICAgIGdldFdhcm5pbmdXYXRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHdhcm5pbmdXYXRlcigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9LFxyXG4gICAgICAvL+i2heagh+mihOitplxyXG4gICAgICBnZXRFYXJseVdhcm5pbmdXYXRlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHdhcm5pbmdFYXJseVdhdGVyKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvSW5mbyAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogXCJwZGZINVwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEwLjIyMS4yOS40OjcwMDEvbWluaW8vZG93bmxvYWQvMTFkZGM4ZDAtODJmNS0xMWVlLWQ4YmUtZThlYzg3MmIzZWFhJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZFRhc2soZGF0YSl7XHJcbiAgICAgICAgZGF0YS5yZWxhVHlwZSA9ICd3YXRlcic7XHJcbiAgICAgICAgdGhpcy5zaXRlT2JqID0gZGF0YTtcclxuICAgICAgICB0aGlzLmFkZFRhc2tWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICB9XHJcbiAgLmZzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxldmVsLW5vdGljZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDhweCA4cHg7XHJcbiAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDIwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoNzMsIDExNywgMjM2LCAwLjIpLCByZ2JhKDE1MSwgMTc5LCAyNTUsIDAuMikpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICY+IGkge1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFpci1sZXZlbCB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIC8qYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MSwgMCwgMSk7Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC50YXJnZXQtbGV2ZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRhcmdldDIge1xyXG4gICAgY29sb3I6IHJnYmEoMjIsIDkzLCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMiwgOTMsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0MyB7XHJcbiAgICBjb2xvcjogcmdiYSgzOSwgMjA4LCA2NywgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM5LCAyMDgsIDY3LCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0NSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTMsIDE0MiwgMSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MywgMTQyLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ2IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NCwgNzksIDIsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTQsIDc5LCAyLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQwIHtcclxuICAgIGNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAxKTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS13cmFwcGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnNcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbCgwLCBfdm0uaXRlbSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5uYW1lLnJlcGxhY2UoXCItXCIsIFwiXFxuXCIpKSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtc3RhdHVzXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJ1cmwoXCIgKyBfdm0uanVkZ2VMZXZlbChfdm0ucmVwbGFjZVN0cmluZyhfdm0uaXRlbS5zenh6KSkgKyBcIilcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMzBweCAwIDE2cHhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5yZXBsYWNlU3RyaW5nKF92bS5pdGVtLnN6eHopKSArIFwiIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXRhcmdldFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIg55uu5qCHIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgIFwidGFyZ2V0LWxldmVsXCIsXG4gICAgICAgICAgICAgICAgX3ZtLmp1ZGdlVGFyZ2V0TGV2ZWwoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLml0ZW0uc3ptYikpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoX3ZtLml0ZW0uc3ptYikpICsgXCIgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXJlYXNvblwiIH0sIFtcbiAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uZGVzYy5yZXBsYWNlKFwiLeWAjVwiLCBcIlwiKSkpLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0udGl0bGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUwcHgpXCIsIG92ZXJmbG93OiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmsgZnNcIiwgb246IHsgY2xpY2s6IF92bS50b0luZm8gfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCI0cHhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcGRmLnBuZ1wiKSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCLmmIbmmI7luILlm73jgIHnnIHmjqfnm5HmtYvmlq3pnaLoh6rliqjnq5nmsLTotKjlvILluLjms6Lliqjlk43lupTlt6XkvZzmnLrliLZcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLmRhdGFMaXN0LmZpZnRoICYmIF92bS5kYXRhTGlzdC5maWZ0aC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLW5vdGljZSBmc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwid2FybmluZ1wiLCBjb2xvcjogXCIjNDQ3QkZDXCIsIHNpemU6IFwiMTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOKFpOe6p++8mlwiICsgX3ZtLl9zKF92bS5sZXZlbERlc0Fycls0XSkpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YUxpc3QuZmlmdGgsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzaXRlLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGFkZFRhc2s6IF92bS5hZGRUYXNrIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5kYXRhTGlzdC5mb3VydGggJiYgX3ZtLmRhdGFMaXN0LmZvdXJ0aC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLW5vdGljZSBmc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwid2FybmluZ1wiLCBjb2xvcjogXCIjNDQ3QkZDXCIsIHNpemU6IFwiMTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOKFo+e6p++8mlwiICsgX3ZtLl9zKF92bS5sZXZlbERlc0FyclszXSkpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YUxpc3QuZm91cnRoLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic2l0ZS1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBhZGRUYXNrOiBfdm0uYWRkVGFzayB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uZGF0YUxpc3QudGhyaWQgJiYgX3ZtLmRhdGFMaXN0LnRocmlkLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbm90aWNlIGZzXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ3YXJuaW5nXCIsIGNvbG9yOiBcIiM0NDdCRkNcIiwgc2l6ZTogXCIxNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg4oWi57qn77yaXCIgKyBfdm0uX3MoX3ZtLmxldmVsRGVzQXJyWzJdKSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhTGlzdC50aHJpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInNpdGUtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgYWRkVGFzazogX3ZtLmFkZFRhc2sgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmRhdGFMaXN0LnNlY29uZCAmJiBfdm0uZGF0YUxpc3Quc2Vjb25kLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbm90aWNlIGZzXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ3YXJuaW5nXCIsIGNvbG9yOiBcIiM0NDdCRkNcIiwgc2l6ZTogXCIxNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg4oWh57qn77yaXCIgKyBfdm0uX3MoX3ZtLmxldmVsRGVzQXJyWzFdKSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhTGlzdC5zZWNvbmQsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzaXRlLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGFkZFRhc2s6IF92bS5hZGRUYXNrIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5kYXRhTGlzdC5maXNydCAmJiBfdm0uZGF0YUxpc3QuZmlzcnQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1ub3RpY2UgZnNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIndhcm5pbmdcIiwgY29sb3I6IFwiIzQ0N0JGQ1wiLCBzaXplOiBcIjE2XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDihaDnuqfvvJpcIiArIF92bS5fcyhfdm0ubGV2ZWxEZXNBcnJbMF0pKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGFMaXN0LmZpc3J0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic2l0ZS1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBhZGRUYXNrOiBfdm0uYWRkVGFzayB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnNbZGF0YS12LTI5ZTE2MTE4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpdGUtd3JhcHBlcltkYXRhLXYtMjllMTYxMThdIHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaXRlLXdyYXBwZXIgLnNpdGUtcmVhc29uW2RhdGEtdi0yOWUxNjExOF0ge1xcbiAgY29sb3I6ICNmZjhkMWE7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLW5hbWVbZGF0YS12LTI5ZTE2MTE4XSwgLnNpdGUtd3JhcHBlciAuc2l0ZS1uYW1lLWFpcltkYXRhLXYtMjllMTYxMThdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLW5hbWVbZGF0YS12LTI5ZTE2MTE4XSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLW5hbWUtYWlyW2RhdGEtdi0yOWUxNjExOF0ge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuLnNpdGUtd3JhcHBlciAuc2l0ZS10YXJnZXRbZGF0YS12LTI5ZTE2MTE4XSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFyZ2V0LWxldmVsW2RhdGEtdi0yOWUxNjExOF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFyZ2V0MltkYXRhLXYtMjllMTYxMThdIHtcXG4gIGNvbG9yOiAjMTY1ZGZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE2NWRmZjtcXG59XFxuLnRhcmdldDNbZGF0YS12LTI5ZTE2MTE4XSB7XFxuICBjb2xvcjogIzI3ZDA0MztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN2QwNDM7XFxufVxcbi50YXJnZXQ0W2RhdGEtdi0yOWUxNjExOF0ge1xcbiAgY29sb3I6ICNmZmMzMzg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMzM4O1xcbn1cXG4udGFyZ2V0NVtkYXRhLXYtMjllMTYxMThdIHtcXG4gIGNvbG9yOiAjZmQ4ZTAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkOGUwMTtcXG59XFxuLnRhcmdldDZbZGF0YS12LTI5ZTE2MTE4XSB7XFxuICBjb2xvcjogI2ZlNGYwMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZTRmMDI7XFxufVxcbi50YXJnZXQwW2RhdGEtdi0yOWUxNjExOF0ge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cXG4udGFzay1idG5bZGF0YS12LTI5ZTE2MTE4XSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjYTI5OWZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saW5rW2RhdGEtdi02NzQyY2I1N10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2NjY7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMTJweDtcXG59XFxuLmZzW2RhdGEtdi02NzQyY2I1N10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sZXZlbC1ub3RpY2VbZGF0YS12LTY3NDJjYjU3XSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgbWFyZ2luOiAyMHB4IDhweCA4cHg7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAyMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCByZ2JhKDczLCAxMTcsIDIzNiwgMC4yKSwgcmdiYSgxNTEsIDE3OSwgMjU1LCAwLjIpKTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWluLWhlaWdodDogMjRweDtcXG59XFxuLmxldmVsLW5vdGljZSA+IGlbZGF0YS12LTY3NDJjYjU3XSB7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG4uYWlyLWxldmVsW2RhdGEtdi02NzQyY2I1N10ge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICAvKmJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTEsIDAsIDEpOyovXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50YXJnZXQtbGV2ZWxbZGF0YS12LTY3NDJjYjU3XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50YXJnZXQyW2RhdGEtdi02NzQyY2I1N10ge1xcbiAgY29sb3I6ICMxNjVkZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTY1ZGZmO1xcbn1cXG4udGFyZ2V0M1tkYXRhLXYtNjc0MmNiNTddIHtcXG4gIGNvbG9yOiAjMjdkMDQzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ZDA0MztcXG59XFxuLnRhcmdldDRbZGF0YS12LTY3NDJjYjU3XSB7XFxuICBjb2xvcjogI2ZmYzMzODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmMzMzg7XFxufVxcbi50YXJnZXQ1W2RhdGEtdi02NzQyY2I1N10ge1xcbiAgY29sb3I6ICNmZDhlMDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmQ4ZTAxO1xcbn1cXG4udGFyZ2V0NltkYXRhLXYtNjc0MmNiNTddIHtcXG4gIGNvbG9yOiAjZmU0ZjAyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlNGYwMjtcXG59XFxuLnRhcmdldDBbZGF0YS12LTY3NDJjYjU3XSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2l0ZUl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllMTYxMTgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3NTI3NGQ4NFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpdGVJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZTE2MTE4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2l0ZUl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllMTYxMTgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njc0MmNiNTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmODZiOGFlOFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDJjYjU3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njc0MmNiNTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog55m75b2VXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvbG9naW4vdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog55m75b2VLS3nur/ntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luX2NsdWUodG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvbWFuYWdlL2xvZ2luL3Rva2VuX3VzZXJfaW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOermeeCueaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZVNlYXJjaCh7cGFnZSwgbGltaXQsIG5hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog55So5oi36YCa55+lXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzeXNOb3RpY2VJbmZvKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGljZVJlYWQoe25vdGljZUlkfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mby9yZWFkJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbm90aWNlSWQ6IG5vdGljZUlkXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOazleW+i+azleinhOaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF3U2VhcmNoKHsgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvaW50ZXJmYWNlL3JldHJpZXZhbC9kb2N1bWVudF9zZWFyY2gnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBsaW1pdDogMTAwMCxcclxuICAgICAgaWQ6ICc1MDQsNTA1LDUwNicsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5ZGo6L6556uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWlnaGJvdXJTaXRlU2VhcmNoKHtsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJ9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3N1cnJvdW5kaW5nJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgbnVtYmVyXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWbveecgeiAg+ermeeCueS8mOiJr+aDheWGtVxyXG4gKiBAcGFyYW0gdHlwZSAx5Zu96ICDMuecgeiAg1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJTaXRlRmluZSh7dHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvJyt0eXBlLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDppa7nlKjmsLTmupDlnLDmpoLlhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyaW5rV2F0ZXJTdW1tYXJ5KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msJRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdBaXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2Fpcldhcm5pbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIflkYroraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL0RDTVJNMTMwL21lc3NhZ2UvYWJub3JtYWxEYXRhJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH6aKE6K2mLeawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0Vhcmx5V2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL2NvbW1vbi93YXJuaW5ncycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g5rC056uZ6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclN0YXRpb24ob2JqZWN0aWQsIHR5cGUsIGpjZnMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbHlkdC9nZXRMeWR0R2snLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBvYmplY3RpZCwgdHlwZSwgamNmcyxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOWFqOW4guepuuawlOi0qOmHj0lBUUlcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlJQVFJKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvZ2V0SW5kZXhJYXFpJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmu4fmsaDmsLTotKjnirblhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYW5XYXRlclF1YWxpdHkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3NpdHVhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy/pgJrnn6XlhazlkYogLSDliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGljZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9rZXBfbWFuYWdlL25vdGljZS9xdWVyeUxpc3RJbmZvJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieaxoeafk+a6kFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTUG9sbHV0aXRvbigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi9nZXRBbGxTdW1tYXJ5JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3Zpc3VhbGl6YXRpb24vYWxsLXNlY3Rpb24nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5p+l5rKf5rigXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNDaGFubmVsKHtuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci93YXRlckdxeHgnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkd21jOiBuYW1lLFxyXG4gICAgICBncW1jOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+awlOermeeCuVxyXG4gKiBAcGFyYW0gdHlwZSAz5YWo6YOoXHJcbiAqIEBwYXJhbSB0aW1lIOWvhueggVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZSh7dGltZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9yZWFsZGF0YT90eXBlPTMmdGltZT0nICsgdGltZSxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOeUqOaIt+eZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKG5hbWUsIHB3ZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9zeXN0ZW0tc2VydmljZS1sb2dpbi91c2VyL2xvZ2luJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwd2RcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+e7hOS7tuiuoumYhVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlclN1YnNjcmliZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS91c2VyU3Vic2NyaWJlJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgVG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBR2VTVVJCVkVpSnhWZFJic0l3REgwZTlEaTd3U1NDbEh2c2E2ZG9KYWpVM1dpZmxRalhXanZNUjFKbzJxUnhLR2hQNG9mWWZyellqZzN3VDZDVWdhNDZsUk93YlFxem1saVgvUWxBRnJHTnluWGJGTWVIaUhYVkhjRjB5Q2E5dzdUZjIzMCs4YUJXOE9zOXY2cFRZRHFseU4ra0FhVm9tOEtBZUNCVFRzRHJpYVhrM2xVL25GZmlmYWlhdld1ZjJQaUttWGFSMExPZ0VuaktKNEsyb2dqRU5ZRHowbTBFYjh2Nm1aQzlKTWRCeDdXUUtGWUE2cFNSYTduajlQdll5NWRUMVNiRE5vbTBZcHNuQmNDQXVCNFZvQnFidVFxZTV2aU1GVGtlVjd0OWlZanJVWjhPVUxOUHZFc1dGUnVuRmdCMlRvM1NaUS9BVXc3QTVsaFhuZSsvZ0JpeHdYYnppZTd2SFlTZjJXbWtyVUp2ZXF5NDRvb3Z2eCtnelZmMFBBQkhjaU5hR2k0eFlvWExSa1hPWXFTekIwU1gvUTdnWUN2NnhMWnFzd2dCbUxZcGpLNDZnTmgvZGlsTUNyeGdIcy9pM0FlRk41dGxielhTdTVkMDE4b2lsb3hMMjJZVHJCd1NpRG12Z1VpeHU4YmtLaHpDTTRiRVV4RlhQTFFXMDBHWC9lTnJMdC9pbmIzd1N6NVAySzBIek5aY1VkNXkvOFpNa2R0cUw4VVZzYW5CeURyMTVpOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NpdGVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWUxNjExOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaXRlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpdGVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zaXRlSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWUxNjExOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI5ZTE2MTE4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI5ZTE2MTE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI5ZTE2MTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI5ZTE2MTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaXRlSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjllMTYxMTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjllMTYxMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4Y2VlZFdhcm5pbmcvY29tcG9uZW50cy9zaXRlSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpdGVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWUxNjExOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpdGVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWUxNjExOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDJjYjU3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDJjYjU3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc0MmNiNTdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MmNiNTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MmNiNTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MmNiNTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQyY2I1NyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQyY2I1NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhjZWVkV2FybmluZy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQyY2I1NyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQyY2I1NyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=